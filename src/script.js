let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    moon = new Image(),
    town_far = new Image(),
    ground_bg = new Image(),
    woo = new Image(),
    town_close_bg = new Image(),
    sky_bg = new Image();
    
let soundtrack = new Audio;
    soundtrack.src = "audio/dissonance.mp3" 

var bgMove = [{
    X: 0,
    Y: 0
}]    
var bgTownFarMove = [{
    X: 0,
    Y: 184
}] 
var bgTownCloseMove = [{
    X: 0,
    Y: 205
}] 
var bgGround = [{
    X: 0,
    Y: canvas.height - 150
}] 
var woomove = [{
    X: 20,
    Y: canvas.height - 110
}]

let difficulty = 1;

    ground_bg.src = "images/ground_bg.png" 
    town_far.src = "images/town_far.png"    
    moon.src = "images/moon.png"
    woo.src = "images/woo.png"
    town_close_bg.src = "images/townClose.png"
    sky_bg.src = "images/sky_bg.png"
    

    function draw(){
        

        drawBg(sky_bg, bgMove,1, 0, 0.005) 
        drawBg(town_far, bgTownFarMove,1, 184, 0.25)
        drawBg(town_close_bg, bgTownCloseMove,2, 205, 0.5)
        drawBg(ground_bg, bgGround,1, canvas.height - 150, 1)

        ctx.drawImage(moon, 20, 20)
        wooWalk()
        soundtrack.play();
        
        
        requestAnimationFrame(draw)
    }

    /*
     ! ATTENTION               
     * @param {*} image --- image that should be shown
     * @param {*} newArr --- array to push another image that should be shown
     * @param {*} attitude --- image attitude to canvas
     * @param {*} yStartPositionBg --- starting position on axis Y to show image
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

    /* 
    TODO: add normal function 
    */

    function wooWalk() {
        for(i = 0; i < 10; i++){
            ctx.drawImage(woo, woomove[0].X,  woomove[0].Y)
        }
    }
    sky_bg.onload = draw;