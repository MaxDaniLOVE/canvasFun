const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const moon = new Image();
const town_far = new Image();
const ground_bg = new Image();
const woo = new Image();
const town_close_bg = new Image();
const coin = new Image();
const sky_bg = new Image();
const wooMove = {
  X: 20,
  Y: canvas.height - 160,
  gravity: 0.3,
};
const coinMove = [{
  X: 0,
  Y: Math.random() * 450,
}];
export { canvas, ctx, moon, town_far, ground_bg, woo, town_close_bg, coin, sky_bg, wooMove, coinMove }
