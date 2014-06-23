// Gear 2 Swipe Gesture Tutorial
// ----------------------------------
//
// Copyright (c)2014 Dibia Victor, Denvycom
// Distributed under MIT license
//
// https://github.com/chuvidi2003/GearSwipeTutorial
$(window).load(function(){
	
	//This listens for the back button press
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	
	//handle swipe right gesture	
	$('.contents').on("swiperight", function(){
		$('#textbox').html("Right ->");				
	});
	
	//handle swipe left gesture
	$('.contents').on("swipeleft", function(){
		$('#textbox').html("<- Left");				
	});
	
	//handle swipe up gesture
	$('.contents').on("swipeup", function(){
		$('#textbox').html("Up");				
	});
	
	//handle swipe down gesture
	$('.contents').on("swipedown", function(){
		$('#textbox').html("Down");				
	});
	
	//handle double tap
	$('.contents').doubleTap(function (){
		$('#textbox').html("Double Tap");		
	});
});