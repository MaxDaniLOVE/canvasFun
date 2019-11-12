let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    score = 0,
    moon = new Image(),
    town_far = new Image(),
    ground_bg = new Image(),
    woo = new Image(),
    town_close_bg = new Image(),
    coin = new Image();
    sky_bg = new Image();
    
let soundtrack = new Audio,
    catchingSound = new Audio;
    soundtrack.src = "audio/dissonance.mp3";
    catchingSound.src = "audio/catch.mp3";

let needToPush = false;    
/*
 ! ATTENTION               
 ! @param {*} attitude --- image attitude to canvas
 ! @param {*} animationSpeed --- 0.005 /// 0.25 /// 0.5 /// 1       
 */
class Background {
  constructor(backgroundImage, yStartPos, link) {
    this.backgroundImage = backgroundImage;
    this.backgroundImage.src = link;
    this.backgroundImagePos = [{
        X: 0,
        Y: yStartPos 
    }]
  }
  drawBackground(attitude, animationSpeed) {
    for (let i = 0; i < this.backgroundImagePos.length; i++) {
        if(this.backgroundImagePos[i].X === 0){
            this.backgroundImagePos.push({
                X: canvas.width * attitude,
                Y: this.backgroundImagePos[0].Y
            })
        }
        ctx.drawImage(this.backgroundImage, this.backgroundImagePos[i].X, this.backgroundImagePos[i].Y)
        this.backgroundImagePos[i].X -= animationSpeed
    }
  }
}

let sky = new Background(sky_bg, 0, "images/sky_bg.png")
let farTown = new Background(town_far, 143, "images/town_far.png")
let closeTown = new Background(town_close_bg, 193, "images/townClose.png")
let ground = new Background(ground_bg, 368, "images/ground_bg.png")

var wooMove = {
    X: 20,
    Y: canvas.height - 160,
    gravity: 0.3
}

var coinMove= [{
    X: 0,
    Y: Math.random()*450
}]

// FULL SCREEN MODE
canvas.addEventListener('click', () => {
   document.documentElement.webkitRequestFullScreen()
})

moon.src = "images/moon.png"
woo.src = "images/woo.png"
coin.src = "images/coins.png"


swipeControlForWoo()
keyControlForWoo()
checkheight()
function draw(){
    sky.drawBackground(1, 0.005)
    farTown.drawBackground(1, 0.25)
    closeTown.drawBackground(2, 0.5)
    ground.drawBackground(1, 1)

    ctx.drawImage(moon, 20, 20)
    drawCoin()
    ctx.drawImage(woo, wooMove.X,  wooMove.Y)
    
    soundtrack.play()
    ctx.fillStyle = "#fff"
    ctx.font = "24px Staatliches"
    ctx.fillText(`SCORE: ${score}`, 20, canvas.height - 30)
    requestAnimationFrame(draw)
}
function keyControlForWoo(){document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case 38:
            // * KEYUP
            wooMove.Y -= 5
            break;
        case 40:
            // * KEYDOWN
            wooMove.Y += 5
            break;  
    }
  });}
function drawCoin() {
    for (let i = 0; i < coinMove.length; i++) {
        if(coinMove[i].X === 0 || needToPush){
            coinMove.push({
                X: canvas.width,
                Y: Math.random()*450
            })
        }
        ctx.drawImage(coin, coinMove[i].X, coinMove[i].Y)
        
        coinMove[i].X -= 2;
        scoreCount(i)
    }
    
}  

/**
 * ! @param {*} i --- coinMove element 
 * ! @param {*} needToPush = false --- doesn't push new coin when element is missed
 * ! @param {*} needToPush = true ---  pushes new coin when element is catched
 */
function scoreCount(i) {
    needToPush = false;
    if (coinMove[i].Y >= wooMove.Y - 20
        && 
        coinMove[i].Y <= wooMove.Y + 35 
        && 
        coinMove[i].X <= 40
        &&
        coinMove[i].X >= 10) {
        score++
        coinMove[i].X = -32
        needToPush = true;
        catchingSound.play()
    }
}
function swipeControlForWoo() {
    canvas.addEventListener('touchmove', () => {
        wooMove.Y = ((event.changedTouches[0].pageY / window.innerHeight) * canvas.height) - 32;
    })  
}
function checkheight() {
    while (wooMove.Y < canvas.height - 160 && wooMove.Y >= 0) {
        wooMove.Y += wooMove.gravity 
    } 
} 
sky.backgroundImage.onload = draw;