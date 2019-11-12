const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const moon = new Image();
const farTownBg = new Image();
const groundBg = new Image();
const woo = new Image();
const closeTownBg = new Image();
const coin = new Image();
const skyBg = new Image();
const wooMove = {
  X: 20,
  Y: canvas.height - 160,
  gravity: 0.3,
};
const coinMove = [{
  X: 0,
  Y: Math.random() * 450,
}];
export { canvas, ctx, moon, farTownBg, groundBg, woo, closeTownBg, coin, skyBg, wooMove, coinMove }
