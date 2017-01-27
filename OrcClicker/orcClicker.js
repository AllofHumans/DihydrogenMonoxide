//orc_clicker.js
//basics
var autoFarmLevel = 0;
var clickPower = 1;
var button = document.getElementById("head");
var scoreDisplay = document.getElementById("score");
var score = 0;
var orcClickPower= document.getElementById("orcClick");
var orcAutofarmPower= document.getElementById("autoFarmCount");
var clickRate = document.getElementById("headsPerSecond");
var cps = 0; 


function cpsReturn() {
    if (((cps * clickPower) + autoFarmLevel) == 1) {
        clickRate.innerHTML = "You and your followers behead 1 Orc per second.";
        cps = 0;
    }
    else {
        clickRate.innerHTML = "You and your followers behead " + ((cps * clickPower) + autoFarmLevel) + " Orcs per second.";
        cps = 0;
    }
}

function cpsCount() {
    cps ++;
}

document.getElementById("img2").style.display = "none";

button.addEventListener("mousedown", orcHeadClick, true);
button.addEventListener("mousedown", cpsCount, true);

window.setInterval(gameInfoUpdate, 1);
window.setInterval(cpsReturn, 1000);


function gameInfoUpdate() {
    if (clickPower == 1) {
        orcClickPower.innerHTML = "You behead 1 Orc per click.";
    }
    else {
        orcClickPower.innerHTML = "You behead " + clickPower + " Orcs per click.";
    }
    
    if (autoFarmLevel == 1) {
        orcAutofarmPower.innerHTML = "Your followers behead 1 Orc per second.";
    }
    else {
        orcAutofarmPower.innerHTML = "Your followers behead " + autoFarmLevel + " Orcs per second.";
    }
}



function orcHeadClick() {
    score += clickPower;
    scoreDisplay.innerHTML = score;
    document.getElementById("img2").style.display = "inline";
    document.getElementById("head").style.display = "none";
    window.setTimeout(orcCLickstyle, 80);
}
function orcCLickstyle() {
    document.getElementById("img2").style.display = "none";
    document.getElementById("head").style.display = "inline";
}
//devtools
var cheats = document.getElementById("cheat");
cheats.addEventListener("mousedown", cheating, true);
function cheating() {
    score += (Math.pow(10000000000000000000000000000, 100000000000000000000000));
}
var reset = document.getElementById("reset");
reset.addEventListener("mousedown", noCheat, true);
function noCheat() {
    score = 0;
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



//Rohirrim Soldier
var rohanSCount = 0;
var rohanSAdd = document.getElementById("buyRohanS");
var rohanSCost = 250;
var rohanSLocked = true;
var rohanSDisplayView= document.getElementById("rohanSDisplay");
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
    if (gondorSCount >= 2) {
        elvishSLocked = false;
        elvishSDisplay = "Elvish Soldier (you have " + elvishSCount + "):" + elvishSCost;
        elvishSDisplayView.innerHTML = elvishSDisplay;
    }
}


//Elvish Soldier
var elvishSCount = 0;
var elvishSAdd = document.getElementById("buyElvishS");
var elvishSCost = 2250;
var elvishSLocked = true;
var elvishSDisplayView= document.getElementById("elvishSDisplay");
var elvishSDisplay = "Locked";

elvishSAdd.addEventListener("mousedown", elvishSAdding, true);

function elvishSAdding() {
    if ((score >= elvishSCost) && (elvishSLocked == false)) {
        elvishSCount += 1;
        autoFarmLevel += 8;
        score -= elvishSCost;
        elvishSCost = elvishSCost * 2;
        elvishSDisplay = "Elvish Soldier (you have " + elvishSCount + "):" + elvishSCost;
        elvishSDisplayView.innerHTML = elvishSDisplay;
    }
    if (elvishSCount >= 2) {
        foolLocked = false;
        foolDisplay = "Peregrin Took (you have " + foolCount + "):" + foolCost;
        foolDisplayView.innerHTML = foolDisplay;
    }
}

//Fool-of-a-took
var foolCount = 0;
var foolAdd = document.getElementById("buyFool");
var foolCost = 6750;
var foolLocked = true;
var foolDisplayView= document.getElementById("foolDisplay");
var foolDisplay = "Locked";

foolAdd.addEventListener("mousedown", foolAdding, true);

function foolAdding() {
    if ((score >= foolCost) && (foolLocked == false)) {
        foolCount += 1;
        autoFarmLevel += 16;
        score -= foolCost;
        foolCost = foolCost * 2;
        foolDisplay = "Peregrin Took (you have " + foolCount + "):" + foolCost;
        foolDisplayView.innerHTML = foolDisplay;
    }
    if (foolCount >= 2) {
        kingLocked = false;
        kingDisplay = "Aragorn (you have " + kingCount + "):" + kingCost;
        kingDisplayView.innerHTML = kingDisplay;
    }
}
//Aragorn
var kingCount = 0;
var kingAdd = document.getElementById("buyKing");
var kingCost = 20250;
var kingLocked = true;
var kingDisplayView= document.getElementById("kingDisplay");
var kingDisplay = "Locked";

kingAdd.addEventListener("mousedown", kingAdding, true);

function kingAdding() {
    if ((score >= kingCost) && (kingLocked == false)) {
        kingCount += 1;
        autoFarmLevel += 32;
        score -= kingCost;
        kingCost = kingCost * 2;
        kingDisplay = "Aragorn (you have " + kingCount + "):" + kingCost;
        kingDisplayView.innerHTML = kingDisplay;
    }
      if (kingCount >= 2) {
        sGodLocked = false;
        sGodDisplay = "Gandoff (you have " + sGodCount + "):" + sGodCost;
        sGodDisplayView.innerHTML = sGodDisplay;
    }
}

//Gandoff
var sGodCount = 0;
var sGodAdd = document.getElementById("buySGod");
var sGodCost = 60750;
var sGodLocked = true;
var sGodDisplayView= document.getElementById("sGodDisplay");
var sGodDisplay = "Locked";

sGodAdd.addEventListener("mousedown", sGodAdding, true);

function sGodAdding() {
    if ((score >= sGodCost) && (sGodLocked == false)) {
        sGodCount += 1;
        autoFarmLevel += 64;
        score -= sGodCost;
        sGodCost = sGodCost * 2;
        sGodDisplay = "Gandoff (you have " + sGodCount + "):" + sGodCost;
        sGodDisplayView.innerHTML = sGodDisplay;
    }
     if (sGodCount >= 2) {
        gGodLocked = false;
        gGodDisplay = "Eru Iluvatar (you have " + gGodCount + "):" +gGodCost;
        gGodDisplayView.innerHTML = gGodDisplay;
    }
}


//Eru Ilúvatar
var gGodCount = 0;
var gGodAdd = document.getElementById("buyGGod");
var gGodCost = 182250;
var gGodLocked = true;
var gGodDisplayView= document.getElementById("gGodDisplay");
var gGodDisplay = "Locked";

gGodAdd.addEventListener("mousedown", gGodAdding, true);

function gGodAdding() {
    if ((score >= gGodCost) && (gGodLocked == false)) {
        gGodCount += 1;
        autoFarmLevel += 128;
        score -= gGodCost;
        gGodCost = gGodCost * 2;
        gGodDisplay = "Eru Iluvatar (you have " + gGodCount + "):" +gGodCost;
        gGodDisplayView.innerHTML = gGodDisplay;
    }
    if (gGodCount >= 3) {
        document.getElementById("iWin").style.display = "inline";
    }
}












//other stuff for autofamring
function autofarm1() {
    score += autoFarmLevel;
    scoreDisplay.innerHTML = score;
    if (autoFarmLevel >= 1) {
        document.getElementById("img2").style.display = "inline";
        document.getElementById("head").style.display = "none";
        window.setTimeout(orcCLickstyle, 80);
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
            sBowDisplay = "Shortbow (you have " + sBowCount + "):" + sBowCost;
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
            sBowDisplay = "Shortbow (you have " + sBowCount + "):" + sBowCost;
            sBowDisplayView.innerHTML = sBowDisplay;
        }
        if (sBowCount >= 2) {
            lSwordLocked = false;
            lSwordDisplay = "Longsword (you have " + lSwordCount + "):" + lSwordCost;
            lSwordDisplayView.innerHTML = lSwordDisplay;
        }
}


//longsword
var lSwordCount = 0;
var lSwordCost = 4500;
var lSwordLocked = true;
var lSwordDisplay = "locked";
var lSwordAdd = document.getElementById("buyLSword");
var lSwordDisplayView = document.getElementById("lSwordDisplay");

lSwordAdd.addEventListener("mousedown", lSwordAdding, true);

function lSwordAdding() {
        if ((score >= lSwordCost) && (lSwordLocked == false)) {
            lSwordCount += 1;
            clickPower += 8;
            score -= lSwordCost;
            lSwordCost = lSwordCost * 2;
            lSwordDisplay = "Longsword (you have " + lSwordCount + "):" + lSwordCost;
            lSwordDisplayView.innerHTML = lSwordDisplay;
        }
         if (lSwordCount >= 2) {
            axeLocked = false;
            axeDisplay = "Battleaxe (you have " + axeCount + "):" + axeCost;
            axeDisplayView.innerHTML = axeDisplay;
        }
}




//battleaxe
var axeCount = 0;
var axeCost = 13500;
var axeLocked = true;
var axeDisplay = "locked";
var axeAdd = document.getElementById("buyAxe");
var axeDisplayView = document.getElementById("axeDisplay");

axeAdd.addEventListener("mousedown", axeAdding, true);

function axeAdding() {
        if ((score >= axeCost) && (axeLocked == false)) {
            axeCount += 1;
            clickPower += 16;
            score -= axeCost;
            axeCost = axeCost * 2;
            axeDisplay = "Battleaxe (you have " + axeCount + "):" + axeCost;
            axeDisplayView.innerHTML = axeDisplay;
        }
         if (axeCount >= 2) {
            lBowLocked = false;
            lBowDisplay = "Longbow (you have " + lBowCount + "):" + lBowCost;
            lBowDisplayView.innerHTML = lBowDisplay;
        }
}

//longbow
var lBowCount = 0;
var lBowCost = 40500;
var lBowLocked = true;
var lBowDisplay = "locked";
var lBowAdd = document.getElementById("buyLBow");
var lBowDisplayView = document.getElementById("lBowDisplay");

lBowAdd.addEventListener("mousedown", lBowAdding, true);

function lBowAdding() {
        if ((score >= lBowCost) && (lBowLocked == false)) {
            lBowCount += 1;
            clickPower += 32;
            score -= lBowCost;
            lBowCost = lBowCost * 2;
            lBowDisplay = "Longbow (you have " + lBowCount + "):" + lBowCost;
            lBowDisplayView.innerHTML = lBowDisplay;
        }
         if (lBowCount >= 2) {
            gSwordLocked = false;
            gSwordDisplay = "Greatsword (you have " + gSwordCount + "):" + gSwordCost;
            gSwordDisplayView.innerHTML = gSwordDisplay;
        }
}
//greatsword
var gSwordCount = 0;
var gSwordCost = 121500;
var gSwordLocked = true;
var gSwordDisplay = "locked";
var gSwordAdd = document.getElementById("buyGSword");
var gSwordDisplayView = document.getElementById("gSwordDisplay");

gSwordAdd.addEventListener("mousedown", gSwordAdding, true);

function gSwordAdding() {
        if ((score >= gSwordCost) && (gSwordLocked == false)) {
            gSwordCount += 1;
            clickPower += 64;
            score -= gSwordCost;
            gSwordCost = gSwordCost * 2;
            gSwordDisplay = "Greatsword (you have " + gSwordCount + "):" + gSwordCost;
            gSwordDisplayView.innerHTML = gSwordDisplay;
        }
         if (gSwordCount >= 2) {
            wStaffLocked = false;
            wStaffDisplay = "Wizard's Staff (you have " + wStaffCount + "):" + wStaffCost;
            wStaffDisplayView.innerHTML = wStaffDisplay;
        }
}


//wizzard's staff

var wStaffCount = 0;
var wStaffCost = 364500;
var wStaffLocked = true;
var wStaffDisplay = "locked";
var wStaffAdd = document.getElementById("buyWStaff");
var wStaffDisplayView = document.getElementById("wStaffDisplay");

wStaffAdd.addEventListener("mousedown", wStaffAdding, true);

function wStaffAdding() {
        if ((score >= wStaffCost) && (wStaffLocked == false)) {
            wStaffCount += 1;
            clickPower += 128;
            score -= wStaffCost;
            wStaffCost = wStaffCost * 2;
            wStaffDisplay = "Wizard's Staff (you have " + wStaffCount + "):" + wStaffCost;
            wStaffDisplayView.innerHTML = wStaffDisplay;
        }
        if (wStaffCount >= 3) {
            document.getElementById("iWin").style.display = "inline";
    }
}