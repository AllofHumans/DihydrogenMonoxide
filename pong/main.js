//My Pong Game!!
//def document elements
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var ball = document.getElementById('ball');
var paddle = document.getElementById('paddle');
var textarea = document.getElementById('center');



//classes
//ball
function Createball(speed) {
    this.direction = 90;
    this.xpos = 600;
    this.ypos = 300;    
    this.speed = speed;
    this.updatepos = function() {
        var raddir = this.direction / (Math.PI / 180);
        this.xpos = Math.cos(raddir) * this.speed;
        this.ypos = Math.sin(raddir) * this.speed;
    };
    this.bounce_y = function() {
        //used for bounce on wall
        this.direction += 180.0;
        if (this.direction > 360.0) {
            this.direction -= 360.0;
        }
    };
    this.bounce_x = function(referancePoint) {
        //used for bounce on paddle
        this.direction += 10.0 * (referancePoint - this.xpos);
        if (this.direction > 360.0) {
            this.direction -= 360.0;
        }
        if (this.direction < 0.0) {
            this.direction += 360.0;
        }
    };
    
}
var playingball = new Createball(1);

//player
function Createplayer() {
    this.ypos = 300;
    this.speed = 5;
    this.xpos = 30;
}
var player = new Createplayer();

//enemy
function Createai() {
    this.ypos = 300;
    this.speed = 6;
    this.xpos = 570;
    this.updatepos = function() {
        if (this.ypos > playingball.ypos) {
            this.ypos -= this.speed;
        }
        else if (this.ypos < playingball.ypos) {
            this.ypos += this.speed;
        }
    };
}
var enemy = new Createai();



//Scores 
var playerScore = 0;
var enemyScore = 0;

//this is called 20 times per seconds (all back end work here)
function backupdates() {
    
    
    playingball.updatepos();
    enemy.updatepos();
    isScore();
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(paddle, player.xpos, player.ypos);
    ctx.drawImage(paddle, enemy.xpos, enemy.ypos);
    ctx.drawImage(ball, playingball.xpos, playingball.ypos, 20, 20);
    
    
    
    window.requestAnimationFrame(backupdates);
}

function isScore() {
    if (playingball.xpos >= 590) {
        playerScore ++;
        playingball.xpos = 300;
        playingball.ypos = 300;
        playingball.direction = 90;
    }
    else if (playingball.xpos <= 10) {
        enemyScore ++;
        playingball.xpos = 300;
        playingball.ypos = 300;
        playingball.direction = -90;
    }
}




//event listeners and event listener triggers

textarea.onkeydown = updatePlayerPos;
function updatePlayerPos(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        player.ypos += player.speed;
    }
    else if (e.keyCode == '40') {
        player.ypos -= player.speed;
    }
}



//init
backupdates();