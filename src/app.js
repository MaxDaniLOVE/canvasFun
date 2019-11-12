import Background from './background';
import { canvas, ctx, moon, farTownBg, groundBg, woo, closeTownBg, coin, skyBg, wooMove, coinMove } from './variables';
import swipeControlForWoo from './swipeControl';

let score = 0;


const soundtrack = new Audio();
const catchingSound = new Audio();
// soundtrack.src = "audio/dissonance.mp3";
// catchingSound.src = "audio/catch.mp3";

let needToPush = false;
/*
 ! ATTENTION
 ! @param {*} attitude --- image attitude to canvas
 ! @param {*} animationSpeed --- 0.005 /// 0.25 /// 0.5 /// 1
 */

const sky = new Background(skyBg, 0, 'images/sky_bg.png');
const farTown = new Background(farTownBg, 143, 'images/town_far.png');
const closeTown = new Background(closeTownBg, 193, 'images/townClose.png');
const ground = new Background(groundBg, 368, 'images/ground_bg.png');



//  ! FULL SCREEN MODE
/* canvas.addEventListener('click', () => {
   document.documentElement.webkitRequestFullScreen()
}) */

moon.src = 'images/moon.png';
woo.src = 'images/woo.png';
coin.src = 'images/coins.png';


swipeControlForWoo();
keyControlForWoo();
checkheight();
function draw() {
  sky.drawBackground(1, 0.005);
  farTown.drawBackground(1, 0.25);
  closeTown.drawBackground(2, 0.5);
  ground.drawBackground(1, 1);

  ctx.drawImage(moon, 20, 20);
  drawCoin();
  ctx.drawImage(woo, wooMove.X, wooMove.Y);

  soundtrack.play();
  ctx.fillStyle = '#fff';
  ctx.font = '24px Staatliches';
  ctx.fillText(`SCORE: ${score}`, 20, canvas.height - 30);
  requestAnimationFrame(draw);
}
function keyControlForWoo() {
  document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 38:
      // * KEYUP
        wooMove.Y -= 5;
        break;
      case 40:
      // * KEYDOWN
        wooMove.Y += 5;
        break;
      default:
        return null;
    }
  });
}
function drawCoin() {
  for (let i = 0; i < coinMove.length; i++) {
    if (coinMove[i].X === 0 || needToPush) {
      coinMove.push({
        X: canvas.width,
        Y: Math.random() * 450,
      });
    }
    ctx.drawImage(coin, coinMove[i].X, coinMove[i].Y);

    coinMove[i].X -= 2;
    scoreCount(i);
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
        && coinMove[i].Y <= wooMove.Y + 35
        && coinMove[i].X <= 40
        && coinMove[i].X >= 10) {
    score++;
    coinMove[i].X = -32;
    needToPush = true;
    catchingSound.play();
  }
}
// TODO norm func
function checkheight() {
  while (wooMove.Y < canvas.height - 160 && wooMove.Y >= 0) {
    wooMove.Y += wooMove.gravity;
  }
}
sky.backgroundImage.onload = draw;
