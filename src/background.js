import { canvas, ctx } from './variables';

export default class Background {
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
      if (this.backgroundImagePos[i].X === 0){
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