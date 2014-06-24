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
	
	var element = document.getElementById('content');
	
	// Tap Gesture Enable
    var hammertime = Hammer(element, {
    	  tapHighlightColor: "rgba(5,0,0,0.9)" ,
    		  showTouches: true
    }).on("tap", function(event) {
    	$('#textbox').html("Tap");
    }); 
    
    // Hold Gesture Enable
    var hammertime = Hammer(element).on("hold", function(event) {
    	$('#textbox').html("Hold");
    });
    
    // Rotate Gesture Enable
    var hammertime = Hammer(element).on("rotate", function(event) {
    	$('#textbox').html("Rotate");
    });
    
 // Swipe  Gesture  
    var hammertime = Hammer(element).on("swipeup", function(event) {
    	$('#textbox').html("Swipe up");
    });
    var hammertime = Hammer(element).on("swipedown", function(event) {
    	$('#textbox').html("Swipe down");
    });
    var hammertime = Hammer(element).on("swipeleft", function(event) {
    	$('#textbox').html("Swipe left");
    });
    var hammertime = Hammer(element).on("swiperight", function(event) {
    	$('#textbox').html("Swipe right");
    });
    
    // Pinc gesture
    var hammertime = Hammer(element).on("pinchin", function(event) {
    	$('#textbox').html("Pinch In");
    });
    var hammertime = Hammer(element).on("pinchout", function(event) {
    	$('#textbox').html("Pinch Out");
    });
    
});