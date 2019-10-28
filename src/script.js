let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    moon = new Image(),
    town_far = new Image(),
    sky_bg = new Image()
    ground_bg = new Image();
var bgMove = [{
    X: 0,
    Y: 0
}]    
var bgTownFarMove = [{
    XTownFar: 0,
    YTownFar: 284
}] 
var bgGround = [{
    X: 0,
    Y: canvas.height - 150
}] 



    ground_bg.src = "images/ground_bg.png" 
    town_far.src = "images/town_far.png"    
    moon.src = "images/moon.png"
    sky_bg.src = "images/sky_bg.png"
    


    function draw(){
         
        drawBgSky()
        drawTownFar()
        drawGround()

        ctx.drawImage(moon, 20, 20)
        requestAnimationFrame(draw)
    }
    
    function drawBgSky() {
        for (let i = 0; i < bgMove.length; i++) {
            if(bgMove[i].X === 0){
                bgMove.push({
                    X: canvas.width,
                    Y: 0
                })
            }
            ctx.drawImage(sky_bg, bgMove[i].X, bgMove[i].Y)
            bgMove[i].X -= 0.2
        }
    }
    function drawTownFar(){
        for (let j = 0; j < bgTownFarMove.length; j++) {
            if(bgTownFarMove[j].XTownFar === 0){
                bgTownFarMove.push({
                    XTownFar: canvas.width,
                    YTownFar: 284
                })
            }
            ctx.drawImage(town_far, bgTownFarMove[j].XTownFar, bgTownFarMove[j].YTownFar)
            bgTownFarMove[j].XTownFar -= .5
        }
    }
    function drawGround(){
        for (let k = 0; k < bgGround.length; k++) {
            if(bgGround[k].X === 0){
                bgGround.push({
                    X: canvas.width,
                    Y: canvas.height - 150
                })
            }
            ctx.drawImage(ground_bg, bgGround[k].X, bgGround[k].Y);
            bgGround[k].X --
        }
    }

    sky_bg.onload = draw;