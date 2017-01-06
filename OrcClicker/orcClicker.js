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
    if (hobbitCount >= 3) {
        rohanSLocked = false;
        rohanSDisplay = "Rohan Soldier (you have " + rohanSCount + "):" + rohanSCost;
        rohanSDisplayView.innerHTML = rohanSDisplay;
    }

}
function autofarm1() {
    score += autoFarmLevel;
    scoreDisplay.innerHTML = score;
}


var cheats = document.getElementById("cheat");
cheats.addEventListener("mousedown", cheating, true);
function cheating() {
    score = 10000000000000000000000
}

//Rohirrim Soldier
var rohanSCount = 0;
var rohanSAdd = document.getElementById("buyRohanS");
var rohanSCost = 250;
var rohanSLocked = true;
var rohanSDisplayView= document.getElementById("RohanSDisplay");
var rohanSDisplay = "Locked";

rohanSAdd.addEventListener("mousedown", RohanSAdding, true);
function RohanSAdding() {
    if ((score >= rohanSCost) && (rohanSLocked == false)) {
        rohanSCount += 1;
        autoFarmLevel += 2;
        score -= rohanSCost;
        rohanSCost = rohanSCost * 2;
        rohanSDisplay = "Rohan Soldier (you have " + rohanSCount + "):" + rohanSCost;
        rohanSDisplayView.innerHTML = rohanSDisplay;
     if (rohanSCount >= 2) {
        gondorSLocked = false;
        gondorSDisplay = "Gondor Soldier (you have " + gondorSCount + "):" + gondorSCost;
        gondorSDisplayView.innerHTML = gondorSDisplay;
    }
    }
}

//Gondorian Soldier
var gondorSCount = 0;
var gondorSAdd = document.getElementById("buyGondorS");
var gondorSCost = 750;
var gondorSLocked = true;
var gondorSDisplayView= document.getElementById("gondorSDisplay");
var gondorSDisplay = "Locked";

gondorSAdd.addEventListener("mousedown", gondorSAdding, true);

function gondorSAdding() {
    if ((score >= gondorSCost) && (gondorSLocked == false)) {
        gondorSCount += 1;
        autoFarmLevel += 4;
        score -= gondorSCost;
        gondorSCost = gondorSCost * 2;
        gondorSDisplay = "Gondor Soldier (you have " + gondorSCount + "):" + gondorSCost;
        gondorSDisplayView.innerHTML = gondorSDisplay;
        
    }
}

//Elvish Soldier
//Bilbo Baggins
//Aragorn
//Gandoff
//Eru Ilúvatar (auto-win button)



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
    if (clubCount >= 3) {
        daggerLocked = false;
        daggerDisplay = "Dagger (you have " + daggerCount + "):" + daggerCost;
        daggerDisplayView.innerHTML = daggerDisplay;
    }
}

//dagger
var daggerCount = 0;
var daggerCost = 500;
var daggerLocked = true;
var daggerDisplay = "locked";
var daggerAdd = document.getElementById("buyDagger");
var daggerDisplayView = document.getElementById("daggerDisplay");

daggerAdd.addEventListener("mousedown", daggerAdding, true);

function daggerAdding() {
        if ((score >= daggerCost) && (daggerLocked == false)) {
        daggerCount += 1;
        clickPower += 2;
        score -= daggerCost;
        daggerCost = daggerCost * 2;
        daggerDisplay = "Dagger (you have " + daggerCount + "):" + daggerCost;
        daggerDisplayView.innerHTML = daggerDisplay;
        }
        if (daggerCount >= 2) {
        sBowLocked = false;
        sBowDisplay = "Short Bow (you have " + sBowCount + "):" + sBowCost;
        sBowDisplayView.innerHTML = sBowDisplay;
        }
}

//Shortbow

var sBowCount = 0;
var sBowCost = 1500;
var sBowLocked = true;
var sBowDisplay = "locked";
var sBowAdd = document.getElementById("buySBow");
var sBowDisplayView = document.getElementById("sBowDisplay");

sBowAdd.addEventListener("mousedown", sBowAdding, true);

function sBowAdding() {
        if ((score >= sBowCost) && (sBowLocked == false)) {
        sBowCount += 1;
        clickPower += 4;
        score -= sBowCost;
        sBowCost = sBowCost * 2;
        sBowDisplay = "Short Bow (you have " + sBowCount + "):" + sBowCost;
        sBowDisplayView.innerHTML = sBowDisplay;
        }
}


//longsowrd
//battleaxe
//longbow
//greatsword
//wizzard's staff
