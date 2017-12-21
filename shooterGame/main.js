// JavaScript File
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const bulletSprite = document.getElementById("bullet");
const enemySprite = document.getElementById("enemy");

//defining stuff
const keypresses = {
    upArrow: false,
    downArrow: false,
    space: false,
    leftArrow: false,
    rightArrow: false
};
const bullets = [];
const enemies = [];
const player = {
    //☭☭☭
    hp: 10,
    xpos: 0,
    ypos: 0,
    spirte: document.getElementById("player"),
    canFire: true,
    speed: 5,
    move: function() {
        if (keypresses.upArrow) {
            this.ypos -= this.speed;
        }
        if (keypresses.downArrow) {
            this.ypos += this.speed;
        }
        if (keypresses.leftArrow) {
            this.xpos -= this.speed;
        }
        if (keypresses.rightArrow) {
            this.xpos += this.speed;
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
    }
    static updateBullets() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].xpos += 15;
            ctx.drawImage(bulletSprite, bullets[i].xpos, bullets[i].ypos, 7, 7);
            if (bullets[i].xpos >= 800) {
                bullets.splice(i, 1);
            }
        }
    }
}
class Enemy {
    constructor(x, y) {
        this.xpos = x;
        this.ypos = y;
        this.hp = 3;
        this.invincible = false;
    }
    static updateEnemies() {
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].xpos -= 3;
            ctx.drawImage(enemySprite, enemies[i].xpos, enemies[i].ypos, 75, 50);
            let deletethis = false;
            for (let j = 0; j < bullets.length; j++) {
                //BUG HERE FIX IT!!!!!
                if ((bullets[j].ypos) > enemies[i].ypos && enemies[i].ypos > (bullets[j].ypos - 50) &&
                (bullets[j].xpos) > enemies[i].xpos && enemies[i].xpos > (bullets[j].xpos - 75) && 
                !enemies[i].invincible) {
                    enemies[i].hp --;
                    enemies[i].invincible = true;
                    setTimeout(function() {
                        enemies[i].invincible = false;    
                    }, 200);
                }
            }
            if (enemies[i].xpos <= 0 || enemies[i].hp <= 0) {
            enemies.splice(i, 1);           
            }
        }
    }
}
let canSpawnEnemy = true;
function createEnemy() {
    if (canSpawnEnemy) {
        let x = 800;
        let y = 250 + Math.floor((Math.random() - 0.5) * 400.0);
        enemies.push(new Enemy(x, y));
        canSpawnEnemy = false;
        setTimeout(function() {canSpawnEnemy = true;}, 2000);
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
    Enemy.updateEnemies();
    createEnemy();


    window.requestAnimationFrame(gameLoop);
}

gameLoop();
createEnemy();