// JavaScript File
//easter egg
var audio = document.getElementById("rick");
var button = document.getElementById("button");
var on = false;

button.addEventListener("mousedown", buttonPress, true);

function buttonPress() {
    if (on==false) {
        audio.play();
        on = true;
    }
    else {
        audio.pause();
        on =false;
    }
}
//rap


var rap =document.getElementById("rap");
var playRap = document.getElementById("play");
var pauseRap = document.getElementById("pause");

playRap.addEventListener("mousedown", play, true);
pauseRap.addEventListener("mousedown", pause, true);

function play() {
    rap.play;
 
}
function pause() {
    rap.pause;
    
}
f