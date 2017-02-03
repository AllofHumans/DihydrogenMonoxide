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