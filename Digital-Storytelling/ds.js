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
    rap.play();
 
}
function pause() {
    rap.pause();
    
}


//movie
document.getElementById("spoiled").style.display = "none";

var toggleon = false;
var toggle = document.getElementById("spoil");

toggle.addEventListener("mousedown", toggleVid, true);



function toggleVid() {
    if (toggleon==false) {
    document.getElementById("spoiled").style.display = "inline";
    toggleon = true;
    }
    else {
    document.getElementById("spoiled").style.display = "none";
    toggleon = false;
    }
}

document.getElementById("badHuman").style.display = "none";
document.getElementById("goodHuman").style.display = "none";

document.getElementById("selectHumans").style.backgroundColor = "grey";
document.getElementById("selectWisdom").style.backgroundColor = "grey";
document.getElementById("selectIntegrity").style.backgroundColor = "grey";
document.getElementById("selectAchievment").style.backgroundColor = "grey";




var choseHumans = document.getElementById("selectHumans");
var choseWisdom = document.getElementById("selectWisdom");
var choseIntegrity = document.getElementById("selectIntegrity");
var choseAchievment = document.getElementById("selectAchievment");
var submit =document.getElementById("submit");
var correct = true;
var chosen = false;
var highlight = false;

choseHumans.addEventListener("mousedown", right, true);
choseIntegrity.addEventListener("mousedown", int,true);
choseWisdom.addEventListener("mousedown", wis,true);
choseAchievment.addEventListener("mousedown", ach,true);
submit.addEventListener("mousedown", submiting, true);

function submiting() {
    if (chosen == true) {
        removehighlight();
        if (correct==true) {
            document.getElementById("goodHuman").style.display = "inline";
        }
        else {
            document.getElementById("badHuman").style.display = "inline";
        }
        
    }
}

function int() {
    
    document.getElementById("selectIntegrity").style.backgroundColor = "white";
    wrong();
}
function wis() {
    removehighlight();
    document.getElementById("selectWisdom").style.backgroundColor = "white";
    wrong();
    
}    
function ach() {
    removehighlight();
    document.getElementById("selectAchievment").style.backgroundColor = "white";
    wrong();
}



function right() {
    removehighlight();
    correct = true;
    chosen = true;
    document.getElementById("selectHumans").style.backgroundColor = "white";
    
}
function wrong() {
    correct = false;
    chosen = true;
}
function removehighlight() {
    document.getElementById("selectHumans").style.backgroundColor = "grey";
    document.getElementById("selectWisdom").style.backgroundColor = "grey";
    document.getElementById("selectIntegrity").style.backgroundColor = "grey";
    document.getElementById("selectAchievment").style.backgroundColor = "grey";
}