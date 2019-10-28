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
    X: 0,
    Y: 284
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
        drawBg(sky_bg, bgMove, 0, 0.5) 
        drawBg(town_far, bgTownFarMove, 284, 1)
        drawBg(ground_bg, bgGround, canvas.height - 150, 1)

        ctx.drawImage(moon, 20, 20)
        requestAnimationFrame(draw)
    }
    

    function drawBg(image, newArr, yStartPositionBg, animationSpeed) {
        for (let i = 0; i < newArr.length; i++) {
            if(newArr[i].X === 0){
                newArr.push({
                    X: canvas.width,
                    Y: yStartPositionBg
                })
            }
            ctx.drawImage(image, newArr[i].X, newArr[i].Y)
            newArr[i].X -= animationSpeed
        }
    }
    sky_bg.onload = draw;