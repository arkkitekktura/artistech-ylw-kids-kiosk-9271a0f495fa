
$(document).ready(function() {

	//fastclick functionality for touch devices
	FastClick.attach(document.body);

	AdobeEdge.loadComposition('gameAnimationTest', 'EDGE-52025736', {
	    scaleToFit: "none",
	    centerStage: "both",
	    minW: "0",
	    maxW: "undefined",
	    width: "1024px",
	    height: "768px"
	}, {"dom":{}}, {"dom":{}});

});

//Changing total cart items function
function run_game() {
	setTimeout(function(){
	  $('.games').addClass('active');
	  $('.color-book').addClass('active');
	}, 1800);
};

//Function to run when a game is closed.
function game_closed() {
	setTimeout(function(){
	  $('#colorbook-game').attr("src", $('#colorbook-game').attr("src"));
	}, 1000);
	console.log('game closed');
};




