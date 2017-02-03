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

document.getElementById("answer").style.display = "none";
document.getElementById("badHuman").style.display = "none";
document.getElementById("goodHuman").style.display = "none";

base("selectHumans");
base("selectIntegrity");
base("selectWisdom");
base("selectAchievment");



var choseHumans = document.getElementById("selectHumans");
var choseWisdom = document.getElementById("selectWisdom");
var choseIntegrity = document.getElementById("selectIntegrity");
var choseAchievment = document.getElementById("selectAchievment");
var submit =document.getElementById("submit");
var correct = true;
var chosen = false;
var retry = document.getElementById("return");

choseHumans.addEventListener("mousedown", right, true);
choseIntegrity.addEventListener("mousedown", int,true);
choseWisdom.addEventListener("mousedown", wis,true);
choseAchievment.addEventListener("mousedown", ach,true);
submit.addEventListener("mousedown", submiting, true);
retry.addEventListener("mousedown", restart, true);

function submiting() {
    if (chosen == true) {
        removehighlight();
        document.getElementById("answer").style.display = "block";
        document.getElementById("question").style.display = "none";
        if (correct==true) {
            document.getElementById("goodHuman").style.display = "inline";
        }
        else {
            document.getElementById("badHuman").style.display = "inline";
        }
        
    }
}

function restart() {
    document.getElementById("answer").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("badHuman").style.display = "none";
    document.getElementById("goodHuman").style.display = "none";
    chosen = false;
}



function int() {
    removehighlight();
    selected("selectIntegrity");
    wrong();
}
function wis() {
    removehighlight();
    selected("selectWisdom");
    wrong();
    
}    
function ach() {
    removehighlight();
    selected("selectAchievment");
    wrong();
}



function right() {
    removehighlight();
    correct = true;
    chosen = true;
    selected("selectHumans");
    
}
function wrong() {
    correct = false;
    chosen = true;
}
function removehighlight() {
    base("selectHumans");
    base("selectIntegrity");
    base("selectWisdom");
    base("selectAchievment");
}

function base(id) {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "black";
}
function selected(id) {
   document.getElementById(id).style.backgroundColor = "black";
    document.getElementById(id).style.color = "white"; 
}