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
//this I belive
var mainAudio1 =document.getElementById("belive");
var play1 = document.getElementById("play1");
var pause1 = document.getElementById("pause1");

play1.addEventListener("mousedown", playA(), true);
pause1.addEventListener("mousedown", pauseA(), true);

function playA() {
     mainAudio1.play();
 
}
function pauseA() {
    mainAudio1.pause();
    
}


//spoken word

var mainAudio2 =document.getElementById("spoken");
var playMain2 = document.getElementById("play2");
var pauseMain2 = document.getElementById("pause2");

playMain2.addEventListener("mousedown", play2, true);
pauseMain2.addEventListener("mousedown", pause2, true);

function play2() {
    mainAudio2.play();
 
}
function pause2() {
    mainAudio2.pause();
    
}
