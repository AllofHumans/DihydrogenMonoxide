// JavaScript File
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



//defining stuff
const keypresses = {
    upArrow: false,
    downArrow: false,
    space: false,
    leftArrow: false,
    rightArrow: false
};
const bullets = [];
const player = {
    xpos: 50,
    ypos: 0,
    spirte: document.getElementById("player"),
    canFire: true,
    move: function() {
        if (keypresses.upArrow) {
            this.ypos -= 5;
        }
        if (keypresses.downArrow) {
            this.ypos += 5;
        }
        if (keypresses.leftArrow) {
            this.xpos -= 5;
        }
        if (keypresses.rightArrow) {
            this.xpos += 5;
        }
    },
    boundaries: function() {
        if (this.ypos <= -5){
            this.ypos = -5;
        }
        if (this.ypos >= 430) {
            this.ypos = 430;
        }
        if (this.xpos <= -5){
            this.xpos = -5;
        }
        if (this.xpos >= 500) {
            this.xpos = 500;
        }
    },
    fire: function () {
        if (keypresses.space && this.canFire) {
            bullets.push(new Bullet());
            player.canFire = false;
            setTimeout(function(){
                player.canFire = true;
            }, 150);
        } 
    }
};


class Bullet {
    constructor() {
        this.xpos = player.xpos;
        this.ypos = player.ypos + 35;
        this.spirte = document.getElementById("bullet");
    }
    static updateBullets() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].xpos += 10;
            ctx.drawImage(bullets[i].spirte, bullets[i].xpos, bullets[i].ypos, 7, 7);
            if (bullets[i].xpos >= 800) {
                bullets.splice(i, 1);
            }
        }
    }
}


//Event Listeners
document.addEventListener("keydown", function(e) {
    let key = e.key;
    if (key == "ArrowUp") {
        keypresses.upArrow = true;
    }
    if (key == "ArrowDown") {
        keypresses.downArrow = true;
    }
    if (key == " ") {
        keypresses.space = true;
    }
    if (key == "ArrowLeft") {
        keypresses.leftArrow = true;
    }
    if (key == "ArrowRight") {
        keypresses.rightArrow = true;
    }
});
document.addEventListener("keyup", function(e) {
    let key = e.key;
    if (key == "ArrowUp") {
        keypresses.upArrow = false;
    }
    if (key == "ArrowDown") {
        keypresses.downArrow = false;
    }
    if (key == " ") {
        keypresses.space = false;
    }
    if (key == "ArrowLeft") {
        keypresses.leftArrow = false;
    }
    if (key == "ArrowRight") {
        keypresses.rightArrow = false;
    }
});

//loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player.spirte, player.xpos, player.ypos, 75, 75);
    player.move();
    player.boundaries();
    player.fire();
    Bullet.updateBullets();


    window.requestAnimationFrame(gameLoop);
}

gameLoop();