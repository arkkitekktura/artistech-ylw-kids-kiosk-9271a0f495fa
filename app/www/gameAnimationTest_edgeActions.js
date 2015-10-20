/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
         

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //--------BALLOON-------------
         //------vars | balloon--------
         var balloon_all = sym.$("balloon_all");
         var balloon_banner_bg = sym.getSymbol("balloon_all").$("banner_backsikes");
         var balloon_banner_front = sym.getSymbol("balloon_all").$("banner_front_new");
         var balloon_sponsor = sym.getSymbol("balloon_all").$("sponsor");
         
         balloon_banner_bg.hide();
         balloon_banner_front.hide();
         balloon_sponsor.hide();
         
         TweenMax.to(balloon_all, 5, {css:{top:50,left:300,rotation:3}, ease:Back.easeOut, onComplete:swayBaloon});
         
         //------------------START PLANE-----------------------
         //this section deals with the plane that flies around, internal workings and assigns each element to a var and element of that var.
         
         var redBarron = sym.createChildSymbol("redBarron","Stage");
         var redBarronE = redBarron.getSymbolElement();
         
         var redBarronEyeR =  redBarron.getSymbol("plane_eyeRight").getSymbol("myEye");
         var redBarronEyeRE = redBarronEyeR.getSymbolElement();
         
         var redBarronEyeL =  redBarron.getSymbol("plane_eyeLeft").getSymbol("myEye");
         var redBarronEyeLE = redBarronEyeL.getSymbolElement();
         
         var redBarronProp =  redBarron.getSymbol("airplane_prop");
         var redBarronPropE = redBarronProp.getSymbolElement();
         
         var redBarronPropInternal =  redBarronProp.getSymbol("airplane_prop_internal");
         var redBarronPropInternalE = redBarronPropInternal.getSymbolElement();
         
         TweenMax.to(redBarronPropInternalE,.1,{css:{rotation:180},repeat:-1});
         
         blink();
         flyBarronFly();
         
         function blink(){
         	var tlEyes = new TimelineMax({repeat:-1});
         	tlEyes.to([redBarronEyeLE,redBarronEyeRE],.2,{css:{scaleY:0,rotation:-30},delay:2});
         }
         
         function flyBarronFly(){
         	var tlFly = new TimelineMax({repeat:-1,delay:8});
         	tlFly.set(redBarronE,{css:{scaleX:.5,scaleY:.5,opacity:1}});
         	tlFly.fromTo(redBarronE,7,{css:{x:-300,y:400}},{css:{x:1300,y:0},delay:3});
         	tlFly.set(redBarronE,{css:{scaleX:-.25,scaleY:.25,"position":"absolute", "z-index":1,opacity:.8}});
         	tlFly.set(balloon_all,{css:{"z-index":100}});
         	tlFly.fromTo(redBarronE,13,{css:{x:1300,y:200}},{css:{x:-300,y:0},delay:2});
         }
         //------END PLANE-------------------
         
         
         //--------CLOUDS-------------
         //------vars | clouds--------
         var sun = sym.$("sun");
         var cloud_00 = sym.$("cloud_00");
         var cloud_01 = sym.$("cloud_01");
         var cloud_02 = sym.$("cloud_02");
         var cloud_03 = sym.$("cloud_03");
         var clouds_white = sym.$("clouds_white");
         var clouds_blue = sym.$("clouds_blue");
         
         
         
         TweenMax.fromTo(cloud_00,140,{css:{x:-100},repeat:-1},{css:{x:1400},repeat:-1});
         TweenMax.fromTo(cloud_01,90,{css:{x:-100},repeat:-1},{css:{x:1400},repeat:-1});
         TweenMax.to(cloud_02,50,{css:{x:1500},onComplete:startSmallCloudAgain});
         TweenMax.fromTo(cloud_03,120,{css:{x:10},repeat:-1,delay:50},{css:{x:1400},repeat:-1,delay:50});
         TweenMax.to(clouds_white,300,{css:{x:1500},repeat:-1});
         TweenMax.to(clouds_blue,900,{css:{x:2500},repeat:-1});
         
         function startSmallCloudAgain(){
         cloud_02_tl.add(TweenMax.fromTo(cloud_02,190,{css:{x:-100},repeat:-1},{css:{x:1400},repeat:-1}));
         }
         
         //--------GO BUTTON-------------
         //------vars | button--------
         var go_button_rocket = sym.getSymbol("go_button").$("rocket_all");
         var go_button = sym.$("go_button");
         var go_button_text = sym.getSymbol("go_button").$("go_button-text");
         var go_button_bg = sym.getSymbol("go_button").$("go_button-background");
         var go_button_indicator = sym.getSymbol("go_button").$("go_button-indicator");
         
         arrangeDepthOfElements();
         function arrangeDepthOfElements(){
         	redBarronE.css({"position":"absolute", "z-index":65});
         	balloon_all.css({"position":"absolute", "z-index":64});
         	go_button.css({"position":"absolute", "z-index":80});
         	clouds_white.css({"position":"absolute", "z-index":70});
         	clouds_blue.css({"position":"absolute", "z-index":60});
         	cloud_00.css({"position":"absolute", "z-index":50});
         	cloud_02.css({"position":"absolute", "z-index":40});
         	cloud_03.css({"position":"absolute", "z-index":30});
         }
         
         go_button.hide();
         
         function swayBaloon()
         {
         balloon_banner_bg.show();
         balloon_banner_front.show();
         balloon_sponsor.show();
         
         TweenMax.fromTo(balloon_banner_bg, 1, {css:{scale:0}, ease:Back.easeOut},{css:{scale:.9}, delay:.2, ease:Back.easeOut});
         TweenMax.fromTo(balloon_banner_front, 1, {css:{scaleX:0}, ease:Back.easeOut},{css:{scaleX:.9}, ease:Back.easeOut});
         TweenMax.fromTo(balloon_sponsor, 1, {css:{scale:0}, ease:Back.easeOut},{css:{scale:.8}, delay:.4, ease:Back.easeOut});
         
         go_button.show();
         TweenMax.from(go_button_rocket, 1, {css:{x:-500,y:450}, delay:1, ease:Power2.easeOut});
         TweenMax.from(go_button_bg, 1, {css:{scale:.6,alpha:0}, delay:1.5, ease:Bounce.easeOut});
         TweenMax.from(go_button_text, 1, {css:{scale:.6,alpha:0}, delay:1.5, ease:Bounce.easeOut, onComplete:StageII_SceneI});
         TweenMax.fromTo(go_button_indicator, 2, {css:{scale:0,alpha:1}}, {css:{scale:2,alpha:0}, delay:3.5, repeatDelay:8, repeat:-1, ease:Power2.easeOut});
         
         
         var tl = new TimelineMax({repeat:-1});
         tl.add(TweenMax.to(balloon_all, 5, {css:{rotation:-3,x:10,y:15}, ease:Power2.easeInOut, randomize: true}));
         tl.add(TweenMax.to(balloon_all, 5, {css:{rotation:3,x:0,y:0}, ease:Power2.easeInOut, randomize: true}));
         tl.add(TweenMax.to(balloon_all, 5, {css:{rotation:-3,x:-5,y:-10}, ease:Power2.easeInOut, randomize: true}));
         tl.add(TweenMax.to(balloon_all, 5, {css:{rotation:3,x:0,y:0}, ease:Power2.easeInOut, randomize: true}));
         }
         
         function StageII_SceneI(){
         	AdobeEdge.Symbol.bindElementAction(compId, "stage", "go_button", "click", function(sym, e) {
         		TweenMax.to(go_button_rocket, 1.5, {css:{x:1000,y:-700}, ease:Power2.easeIn});
         		TweenMax.to(go_button_bg, .7, {css:{scale:0,alpha:0,rotation:60}, ease:Power2.easeIn});
         		TweenMax.to(go_button_text, .7, {css:{scale:0,alpha:0,rotation:60}, ease:Power2.easeIn});
         		TweenMax.to(go_button_indicator, .6, {css:{scale:0,alpha:0,rotation:60}, ease:Power2.easeIn, onComplete:StageII_SceneII});
         	});
         }
         
         var gamesTL;
         
         function StageII_SceneII(){
         	go_button_indicator.hide();
         	TweenMax.to(clouds_white,2,{css:{x:900, y:-900,scale:.5}});
         	TweenMax.to(clouds_blue,1.6,{css:{x:900, y:-800,scale:.5}})
         	TweenMax.to(balloon_all, 1, {css:{top:-500,left:500,scsle:.25}, ease:Power2.easeIn, onComplete:function(){redBarronE.hide();}});
         	TweenMax.to(sun, 1, {css:{top:-250,left:800,scsle:.25}, ease:Power2.easeIn});
         	TweenMax.to(cloud_00, 1.1, {css:{top:30, scale:.35}, ease:Power2.easeIn});
         	TweenMax.to(cloud_01, 1.4, {css:{top:18, scale:.42}, ease:Power2.easeIn});
         	TweenMax.to(cloud_02, 1.3, {css:{top:33, scale:.28}, ease:Power2.easeIn});
         	TweenMax.to(cloud_03, 1, {css:{top:28, scale:.48}, ease:Power2.easeIn});
         	var allGames = sym.createChildSymbol("games","Stage");
         	var allGames_E = allGames.getSymbolElement();
         	allGames_E.css({"position":"absolute", "z-index":100});
         	var subGames = [allGames.$("game_color"),allGames.$("game_knowedge"),allGames.$("game_memory"),allGames.$("game_reflex")];
         
         	gamesTL = new TimelineMax();
         
         	for(var i in subGames){
         		subGames[i].bind("click",gameButtonAction);
         	//	alert(i);
         	}
         	gamesTL.staggerFrom(subGames, 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true,delay:2}, .2);
         	function gameButtonAction(){
               run_game();
               gamesTL.staggerTo(subGames, .5, {scale:1.5, opacity:0, ease:Power2.easeIn, force3D:true, rotation:30}, .2);
            }
         };

         $('.close-btn').on('click', function(){
            $('.games').removeClass('active');
            $('.color-book').removeClass('active');

            setTimeout(function(){
              close_game();
            }, 1000);
         });

         function close_game(){
            gamesTL.restart();
         };

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'balloon_all'
   (function(symbolName) {   
   
   })("balloon_all");
   //Edge symbol end:'balloon_all'

   //=========================================================
   
   //Edge symbol: 'go_button'
   (function(symbolName) {   
   
   })("go_button");
   //Edge symbol end:'go_button'

   //=========================================================
   
   //Edge symbol: 'rocket_all'
   (function(symbolName) {   
   
   })("rocket_all");
   //Edge symbol end:'rocket_all'

   //=========================================================
   
   //Edge symbol: 'go_button-background'
   (function(symbolName) {   
   
   })("go_button-background");
   //Edge symbol end:'go_button-background'

   //=========================================================
   
   //Edge symbol: 'games'
   (function(symbolName) {   
   
   })("games");
   //Edge symbol end:'games'

   //=========================================================
   
   //Edge symbol: 'redBarron'
   (function(symbolName) {   
   
   })("redBarron");
   //Edge symbol end:'redBarron'

   //=========================================================
   
   //Edge symbol: 'airplane_body'
   (function(symbolName) {   
   
   })("airplane_body");
   //Edge symbol end:'airplane_body'

   //=========================================================
   
   //Edge symbol: 'airplane_nose'
   (function(symbolName) {   
   
   })("airplane_nose");
   //Edge symbol end:'airplane_nose'

   //=========================================================
   
   //Edge symbol: 'airplane_prop'
   (function(symbolName) {   
   
   })("airplane_prop");
   //Edge symbol end:'airplane_prop'

   //=========================================================
   
   //Edge symbol: 'plane_eye'
   (function(symbolName) {   
   
   })("plane_eye");
   //Edge symbol end:'plane_eye'

   //=========================================================
   
   //Edge symbol: 'airplane_prop_internal'
   (function(symbolName) {   
   
   })("airplane_prop_internal");
   //Edge symbol end:'airplane_prop_internal'

   //=========================================================
   
   //Edge symbol: 'myEye'
   (function(symbolName) {   
   
   })("myEye");
   //Edge symbol end:'myEye'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-52025736");