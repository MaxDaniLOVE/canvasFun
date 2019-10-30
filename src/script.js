
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
    
let soundtrack = new Audio;
    soundtrack.src = "audio/dissonance.mp3";

let needToPush = false;    

var bgMove = [{
    X: 0,
    Y: 0
}]    
var bgTownFarMove = [{
    X: 0,
    Y: 143
}] 
var bgTownCloseMove = [{
    X: 0,
    Y: 193
}] 
var bgGround = [{
    X: 0,
    Y: canvas.height - 200
}] 
var wooMove = [{
    X: 20,
    Y: canvas.height - 160,
    gravity: 0.3
}]

var coinMove= [{
    X: 0,
    Y: Math.random()*450
}]

    // FULL SCREEN MODE
    canvas.addEventListener('click', () => {
       document.documentElement.webkitRequestFullScreen()
    }) 

    ground_bg.src = "images/ground_bg.png" 
    town_far.src = "images/town_far.png"    
    moon.src = "images/moon.png"
    woo.src = "images/woo.png"
    town_close_bg.src = "images/townClose.png"
    coin.src = "images/coins.png"
    sky_bg.src = "images/sky_bg.png"
    
    swipeControlForWoo()
    keyControlForWoo()
    checkheight()

    function draw(){
        drawBg(sky_bg, bgMove,1, 0, 0.005) 
        drawBg(town_far, bgTownFarMove,1, 143, 0.25)
        drawBg(town_close_bg, bgTownCloseMove,2, 193, 0.5)
        drawBg(ground_bg, bgGround,1, canvas.height - 200, 1)
        
        ctx.drawImage(moon, 20, 20)
        drawCoin()
        ctx.drawImage(woo, wooMove[0].X,  wooMove[0].Y)
        
        soundtrack.play()
        ctx.fillStyle = "#fff"
        ctx.font = "24px Staatliches"
        ctx.fillText(`SCORE: ${score}`, 20, canvas.height - 30)
        requestAnimationFrame(draw)
    }

    /*
     ! ATTENTION               
     ! @param {*} image --- image that should be shown
     ! @param {*} newArr --- array to push another image that should be shown
     ! @param {*} attitude --- image attitude to canvas
     ! @param {*} yStartPositionBg --- starting position on axis Y to show image
     ! @param {*} animationSpeed --- 0.005 /// 0.25 /// 0.5 /// 1       
     */

    function drawBg(image, newArr, attitude, yStartPositionBg, animationSpeed) {
        for (let i = 0; i < newArr.length; i++) {
            if(newArr[i].X === 0){
                newArr.push({
                    X: canvas.width * attitude,
                    Y: yStartPositionBg
                })
            }
            ctx.drawImage(image, newArr[i].X, newArr[i].Y)
            newArr[i].X -= animationSpeed
        }
    }
    function keyControlForWoo(){document.addEventListener("keydown", event => {
        switch (event.keyCode) {
            case 38:
                // * KEYUP
                wooMove[0].Y -= 5
                break;
            case 40:
                // * KEYDOWN
                wooMove[0].Y += 5
                break;
            /*case 37:
                // * KEYLEFT
                wooMove[0].X -= 5
                break;
            case 39:
                // * KEYRIGHT
                wooMove[0].X += 5
                break;       */     
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
        if (coinMove[i].Y >= wooMove[0].Y - 20
            && 
            coinMove[i].Y <= wooMove[0].Y + 35 
            && 
            coinMove[i].X <= 40
            &&
            coinMove[i].X >= 10) {
            score++
            coinMove[i].X = -32
            needToPush = true;
        }
    }

    function swipeControlForWoo() {
        canvas.addEventListener('touchmove', () => {
            wooMove[0].Y = ((event.changedTouches[0].pageY / window.innerHeight) * canvas.height) - 32;
        })  
    }

    function checkheight() {
        while (wooMove[0].Y < canvas.height - 160 && wooMove[0].Y >= 0) {
            wooMove[0].Y += wooMove[0].gravity 
        } 
    } 
    sky_bg.onload = draw;