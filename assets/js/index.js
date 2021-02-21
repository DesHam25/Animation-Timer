const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter); 

let duration;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration){
    duration = totalDuration;
  },
  onTick(timeRemaining){
    circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    
  },
  onComplete(){
    console.log('Timer is completed');
  }
});

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};