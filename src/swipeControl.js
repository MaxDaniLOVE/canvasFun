import { canvas, wooMove } from './variables';

export default function swipeControlForWoo() {
  canvas.addEventListener('touchmove', (event) => {
    wooMove.Y = ((event.changedTouches[0].pageY / window.innerHeight) * canvas.height) - 32;
  });
}