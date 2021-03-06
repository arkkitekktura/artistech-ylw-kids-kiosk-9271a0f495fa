
var correctImageCoordinates, timeLimit, currentScore, hud, difficultyManager,oddImageId,levelCoordinates,currentRobotId,oddAsset,lives,clickableObjects;

function LevelView(){
	soundManager.playMusic("sounds/bgm");
	timeLimit = 100;
	currentScore = 0;
	lives = 5;
	difficultyManager = new DifficultyManager();
	createLevel();
	setTimeout(updateTimer, 100);
	c.onmousedown = onGameClick;
	hud = new HUDView(lives);
	hud.updateHUD(currentScore,timeLimit,lives);
}
/*
	Redraws the level togetehr with the robots.  Also updates the current difficulty based on score
*/
function createLevel(){
	timeLimit = 100;
	currentRobotId = 1+Math.round(Math.random()*(numberOfRobots-1));
	levelCoordinates = difficultyManager.getLevelCoordinates();
	oddImageId = Math.round(Math.random()*(levelCoordinates.length-1));
	oddAsset = difficultyManager.getOddAsset(currentRobotId);
	animationEffect = 0;
	setupClickableObjects();
	animatedDraw();
}

function redrawImages(){
	var numberOfImages = levelCoordinates.length;
	var coordinates;
	ctx.clearRect(80,80,700,462);
	for(var i = 0; i < numberOfImages; i++){
		coordinates = levelCoordinates[i];
		if(i == oddImageId){
			correctImageCoordinates = coordinates;
			drawImage(oddAsset,correctImageCoordinates[0],correctImageCoordinates[1]);
		}
		else{
			drawImage(assetManager.getAsset("img/Robot"+currentRobotId+"Good.png"),coordinates[0],coordinates[1]);
		}
	}	
}

/*
	Creates a list of clcikable objects for the level
*/

function setupClickableObjects(){
	var coordinates;
	clickableObjects = [];
	clickableObjects.push(new ClickableObject("mute-button",785,-12,50,40));
	for(var i = 0; i < levelCoordinates.length; i++){
		coordinates = levelCoordinates[i];
		if(i == oddImageId){
			clickableObjects.push(new ClickableObject("correct-image",coordinates[0],coordinates[1],oddAsset.width,oddAsset.height));
		}
		else{
			clickableObjects.push(new ClickableObject("wrong-image",coordinates[0],coordinates[1],oddAsset.width,oddAsset.height));
		}
	}	
}

/*
	Draws the image, and applies trandlations and rotations where necessary
*/
function drawImage(imageToDraw,imageX,imageY){
	var drawWidth = imageToDraw.width*animationEffect/2;
	var drawHeight = imageToDraw.height*animationEffect/2;
	var imageRotation = difficultyManager.canImagesRotate()? Math.random()*6.28 : 0;
	imageX = imageX + imageToDraw.width/2;
	imageY = imageY + imageToDraw.height/2;
	ctx.globalAlpha = animationEffect;
	ctx.translate(imageX,imageY);
	ctx.rotate(imageRotation);
	ctx.drawImage(imageToDraw,-drawWidth,-drawHeight,2*drawWidth,2*drawHeight);	
	ctx.rotate(-imageRotation);
	ctx.translate(-imageX,-imageY);
	ctx.globalAlpha = 1;
}

function animatedDraw()
{
	animationEffect += 0.1;
	redrawImages();
	if(animationEffect <= 1){
		setTimeout(animatedDraw,10);
	}	
}

/*
	The only input handler of the level, responds to the users click be it correct or incorrect
*/
function onGameClick(event){
	var correctX = correctImageCoordinates[0];
	var correctY = correctImageCoordinates[1];
	var correctWidth = oddAsset.width;
	var correctHeight = oddAsset.height;

	var mouseX = event.offsetX? event.offsetX : event.layerX;
	var mouseY = event.offsetY? event.offsetY : event.layerY;


	for(var i = 0; i < clickableObjects.length; i++){
		if(clickableObjects[i].isMouseOver(mouseX,mouseY)){
			switch(clickableObjects[i].getID()){
				case "correct-image":
					soundManager.playSound("sounds/correct");
					currentScore += 2 * Math.round(timeLimit);
					difficultyManager.updateDifficulty(currentScore);//Updates the difficulty of the game
					if(lives > 0){
						createLevel();
					}
				break;
				case "wrong-image":
					soundManager.playSound("sounds/wrong");
					lives-= 1;
					if(lives > 0){
						createLevel();
					}
				break;
				case "mute-button":
					soundManager.mute();
				break;
			}	
			hud.updateHUD(currentScore,timeLimit,lives);
		}
	}
}

/*
	Reduces the level timer, updates the HUD and checks if it's game over
*/
function updateTimer(){
	if(lives < 1){
		switchView("GameOver");
	}
	else{
		timeLimit -= difficultyManager.getTimeDecaySpeed();
		if(timeLimit <= -difficultyManager.getTimeDecaySpeed()){
			soundManager.playSound("sounds/wrong");
			lives -= 1;		
			if(lives > 0){				
				createLevel();
			}	
		}
		setTimeout(updateTimer, 100);
		hud.updateHUD(currentScore,timeLimit,lives);	
	}
}