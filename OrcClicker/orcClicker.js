//orc_clicker.js
//basic clicking
var autoFarmLevel = 0;
var clickPower = 1;
var button = document.getElementById("head");
var scoreDisplay = document.getElementById("score");
var score = 0;



button.addEventListener("mousedown", orcHeadClick, true);


function orcHeadClick() {
    score += clickPower;
    scoreDisplay.innerHTML = score;
}

//autofarmers

//hobbits
var hobbitCount = 0;
var hobbitCountDisplay = document.getElementById("hobbits");
var hobbitAdd = document.getElementById("hobbitAdd");
var hobbitCost = 50;
var hobbitCostDisplay = document.getElementById("hobbitCost");

hobbitAdd.addEventListener("mousedown", hobbitFarmerAdd, true);


function hobbitFarmerAdd() {
    if (score >= hobbitCost) {
        hobbitCount += 1;
        autoFarmLevel += 1;
        score -= hobbitCost;
        hobbitCost = hobbitCost * 2;
        scoreDisplay.innerHTML = score;
        hobbitCostDisplay.innerHTML = hobbitCost;
        hobbitCountDisplay.innerHTML = hobbitCount;
    }
    if (hobbitCount >= 4) {
        rohanSLocked = false;
        rohanSDisplay = "Rohan Solier (you have " + rohanSCount + "):" + rohanSCost;
        rohanSDisplayView.innerHTML = rohanSDisplay;
    }

}
function autofarm1() {
    score += autoFarmLevel;
    scoreDisplay.innerHTML = score;
}

//Rohirrim Solier
var rohanSCount = 0;
var rohanSAdd = document.getElementById("buyRohanS");
var rohanSCost = 300;
var rohanSLocked = true;
var rohanSDisplayView= document.getElementById("RohanSDisplay");
var rohanSDisplay = "Locked";

rohanSAdd.addEventListener("mousedown", RohanSAdding, true);

function RohanSAdding() {
    if ((score >= rohanSCost) && (rohanSLocked = false)) {
        rohanSCount += 1;
        autoFarmLevel += 2;
        score -= rohanSCost;
        rohanSCost = rohanSCost * 2;
        rohanSDisplay = "Rohan Solier (you have " + rohanSCount + "):" + rohanSCost;
        rohanSDisplayView.innerHTML = rohanSDisplay;
        
    }
}




window.setInterval(autofarm1, 1000);

//click increasers

//clubs
var clubCount = 1;
var clubCountDisplay = document.getElementById("clubCount");
var clubCost = 100;
var clubCostDisplay = document.getElementById("clubCost");
var clubAdd = document.getElementById("clubAdd");

clubAdd.addEventListener("mousedown", clubAdding, true);

function clubAdding() {
    if (score >= clubCost) { 
        clubCount += 1;
        clickPower += 1;
        score -= clubCost;
        clubCost = clubCost * 2;
        scoreDisplay.innerHTML = score;
        clubCostDisplay.innerHTML = clubCost;
        clubCountDisplay.innerHTML = clubCount;
    }
}
