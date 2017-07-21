$(document).ready(function() {

// set up the audio element
var audioSt = '<div class="js-audio"><p>Play, sit back, relax! The audio will loop :)<audio autoplay loop><source src="';
var audioEnd = '" type="audio/mpeg">Your browser does not support the audio element.</audio><div/>';

// feed in the files
var audioOne = audioSt + 'audio/forest.mp3' + audioEnd;
var audioTwo = audioSt + 'audio/library.mp3' + audioEnd;
var audioThree = audioSt + 'audio/munch.mp3' + audioEnd;
var audioFour = audioSt + 'audio/squirrel.mp3' + audioEnd;

function checkHash () {
	//get the hash
	khash = window.location.hash;

	// check the hash
	if(khash === '#one'){ 
		$('#one').append(audioOne);
		console.log(khash);
	} else if(khash === '#two') {
		$('#two').append(audioTwo);
		console.log(khash);
	} else if(khash === '#three') {
		$('#three').append(audioThree);
		console.log(khash);
	} else if(khash === '#four') {
		$('#four').append(audioFour);
		console.log(khash);
	} else {
		console.log(khash);
	};
	console.log('checkHash ran');	


	if (window.innerWidth <= 480) {    
		// show the controls as mobiles disable autoplay by default
		$('.js-audio audio').attr('controls', 'true');
		console.log('probably a mobile device');
    	}; // .end width check

};

// remove all audio elements when exiting the panels
$('.close, div#wrapper').click(function(){
	window.setTimeout(function() {
	$('.js-audio').remove();
	console.log('remove audio');
		checkHash(); // just in case but not really needed
	}, 500);

	
});

$('.use-middle li').click(function() {
	// let the template finish and then check the hash
	window.setTimeout(function() {
		checkHash();
	}, 300);	

}); // .use middle


// default run
	checkHash();

});