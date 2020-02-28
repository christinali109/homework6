var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML = video.volume * 100 + "%";
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

//working on

function skipAhead() {
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
		video.load();
		video.play();
		}
	else {
		video.currentTime += 60; //put inside else portion
	}
	
	console.log("Current location is "+ document.getElementById("myVideo").currentTime);
} 

function mute() { 
	console.log(video.muted)
	var mute = document.querySelector("#mute");
  	if (video.muted == true) {
		video.muted=false;
		console.log("Changing to muted");
		mute.innerHTML = "Unmute";
	  }
  		
  	else {
		video.muted=true;
		console.log("Changing to unmuted");
		mute.innerHTML = "Mute";
	  }
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = video.volume * 100 + "%";
}
       

function gray() { 
	video.classList.add("grayscale");
	
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
