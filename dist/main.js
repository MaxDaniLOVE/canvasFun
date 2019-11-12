/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let canvas = document.getElementById('canvas'),\r\n    ctx = canvas.getContext('2d'),\r\n    score = 0,\r\n    moon = new Image(),\r\n    town_far = new Image(),\r\n    ground_bg = new Image(),\r\n    woo = new Image(),\r\n    town_close_bg = new Image(),\r\n    coin = new Image();\r\n    sky_bg = new Image();\r\n    \r\nlet soundtrack = new Audio,\r\n    catchingSound = new Audio;\r\n    //soundtrack.src = \"audio/dissonance.mp3\";\r\n    //catchingSound.src = \"audio/catch.mp3\";\r\n\r\nlet needToPush = false;    \r\n/*\r\n ! ATTENTION               \r\n ! @param {*} attitude --- image attitude to canvas\r\n ! @param {*} animationSpeed --- 0.005 /// 0.25 /// 0.5 /// 1       \r\n */\r\nclass Background {\r\n  constructor(backgroundImage, yStartPos, link) {\r\n    this.backgroundImage = backgroundImage;\r\n    this.backgroundImage.src = link;\r\n    this.backgroundImagePos = [{\r\n        X: 0,\r\n        Y: yStartPos \r\n    }]\r\n  }\r\n  drawBackground(attitude, animationSpeed) {\r\n    for (let i = 0; i < this.backgroundImagePos.length; i++) {\r\n        if(this.backgroundImagePos[i].X === 0){\r\n            this.backgroundImagePos.push({\r\n                X: canvas.width * attitude,\r\n                Y: this.backgroundImagePos[0].Y\r\n            })\r\n        }\r\n        ctx.drawImage(this.backgroundImage, this.backgroundImagePos[i].X, this.backgroundImagePos[i].Y)\r\n        this.backgroundImagePos[i].X -= animationSpeed\r\n    }\r\n  }\r\n}\r\n\r\nlet sky = new Background(sky_bg, 0, \"images/sky_bg.png\")\r\nlet farTown = new Background(town_far, 143, \"images/town_far.png\")\r\nlet closeTown = new Background(town_close_bg, 193, \"images/townClose.png\")\r\nlet ground = new Background(ground_bg, 368, \"images/ground_bg.png\")\r\n\r\nvar wooMove = {\r\n    X: 20,\r\n    Y: canvas.height - 160,\r\n    gravity: 0.3\r\n}\r\n\r\nvar coinMove= [{\r\n    X: 0,\r\n    Y: Math.random()*450\r\n}]\r\n\r\n// FULL SCREEN MODE\r\ncanvas.addEventListener('click', () => {\r\n   document.documentElement.webkitRequestFullScreen()\r\n})\r\n\r\nmoon.src = \"images/moon.png\"\r\nwoo.src = \"images/woo.png\"\r\ncoin.src = \"images/coins.png\"\r\n\r\n\r\nswipeControlForWoo()\r\nkeyControlForWoo()\r\ncheckheight()\r\nfunction draw(){\r\n    sky.drawBackground(1, 0.005)\r\n    farTown.drawBackground(1, 0.25)\r\n    closeTown.drawBackground(2, 0.5)\r\n    ground.drawBackground(1, 1)\r\n\r\n    ctx.drawImage(moon, 20, 20)\r\n    drawCoin()\r\n    ctx.drawImage(woo, wooMove.X,  wooMove.Y)\r\n    \r\n    soundtrack.play()\r\n    ctx.fillStyle = \"#fff\"\r\n    ctx.font = \"24px Staatliches\"\r\n    ctx.fillText(`SCORE: ${score}`, 20, canvas.height - 30)\r\n    requestAnimationFrame(draw)\r\n}\r\nfunction keyControlForWoo(){document.addEventListener(\"keydown\", event => {\r\n    switch (event.keyCode) {\r\n        case 38:\r\n            // * KEYUP\r\n            wooMove.Y -= 5\r\n            break;\r\n        case 40:\r\n            // * KEYDOWN\r\n            wooMove.Y += 5\r\n            break;  \r\n    }\r\n  });}\r\nfunction drawCoin() {\r\n    for (let i = 0; i < coinMove.length; i++) {\r\n        if(coinMove[i].X === 0 || needToPush){\r\n            coinMove.push({\r\n                X: canvas.width,\r\n                Y: Math.random()*450\r\n            })\r\n        }\r\n        ctx.drawImage(coin, coinMove[i].X, coinMove[i].Y)\r\n        \r\n        coinMove[i].X -= 2;\r\n        scoreCount(i)\r\n    }\r\n    \r\n}  \r\n\r\n/**\r\n * ! @param {*} i --- coinMove element \r\n * ! @param {*} needToPush = false --- doesn't push new coin when element is missed\r\n * ! @param {*} needToPush = true ---  pushes new coin when element is catched\r\n */\r\nfunction scoreCount(i) {\r\n    needToPush = false;\r\n    if (coinMove[i].Y >= wooMove.Y - 20\r\n        && \r\n        coinMove[i].Y <= wooMove.Y + 35 \r\n        && \r\n        coinMove[i].X <= 40\r\n        &&\r\n        coinMove[i].X >= 10) {\r\n        score++\r\n        coinMove[i].X = -32\r\n        needToPush = true;\r\n        catchingSound.play()\r\n    }\r\n}\r\nfunction swipeControlForWoo() {\r\n    canvas.addEventListener('touchmove', () => {\r\n        wooMove.Y = ((event.changedTouches[0].pageY / window.innerHeight) * canvas.height) - 32;\r\n    })  \r\n}\r\nfunction checkheight() {\r\n    while (wooMove.Y < canvas.height - 160 && wooMove.Y >= 0) {\r\n        wooMove.Y += wooMove.gravity \r\n    } \r\n} \r\nsky.backgroundImage.onload = draw;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });