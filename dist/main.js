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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _swipeControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swipeControl */ \"./src/swipeControl.js\");\n\n\n\n\nlet score = 0;\n\n\nconst soundtrack = new Audio();\nconst catchingSound = new Audio();\n// soundtrack.src = \"audio/dissonance.mp3\";\n// catchingSound.src = \"audio/catch.mp3\";\n\nlet needToPush = false;\n/*\n ! ATTENTION\n ! @param {*} attitude --- image attitude to canvas\n ! @param {*} animationSpeed --- 0.005 /// 0.25 /// 0.5 /// 1\n */\n\nconst sky = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_variables__WEBPACK_IMPORTED_MODULE_1__[\"sky_bg\"], 0, 'images/sky_bg.png');\nconst farTown = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_variables__WEBPACK_IMPORTED_MODULE_1__[\"town_far\"], 143, 'images/town_far.png');\nconst closeTown = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_variables__WEBPACK_IMPORTED_MODULE_1__[\"town_close_bg\"], 193, 'images/townClose.png');\nconst ground = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_variables__WEBPACK_IMPORTED_MODULE_1__[\"ground_bg\"], 368, 'images/ground_bg.png');\n\n\n\n//  ! FULL SCREEN MODE\n/* canvas.addEventListener('click', () => {\n   document.documentElement.webkitRequestFullScreen()\n}) */\n\n_variables__WEBPACK_IMPORTED_MODULE_1__[\"moon\"].src = 'images/moon.png';\n_variables__WEBPACK_IMPORTED_MODULE_1__[\"woo\"].src = 'images/woo.png';\n_variables__WEBPACK_IMPORTED_MODULE_1__[\"coin\"].src = 'images/coins.png';\n\n\nObject(_swipeControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nkeyControlForWoo();\ncheckheight();\nfunction draw() {\n  sky.drawBackground(1, 0.005);\n  farTown.drawBackground(1, 0.25);\n  closeTown.drawBackground(2, 0.5);\n  ground.drawBackground(1, 1);\n\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].drawImage(_variables__WEBPACK_IMPORTED_MODULE_1__[\"moon\"], 20, 20);\n  drawCoin();\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].drawImage(_variables__WEBPACK_IMPORTED_MODULE_1__[\"woo\"], _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].X, _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y);\n\n  soundtrack.play();\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillStyle = '#fff';\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].font = '24px Staatliches';\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillText(`SCORE: ${score}`, 20, _variables__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height - 30);\n  requestAnimationFrame(draw);\n}\nfunction keyControlForWoo() {\n  document.addEventListener('keydown', (event) => {\n    switch (event.keyCode) {\n      case 38:\n      // * KEYUP\n        _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y -= 5;\n        break;\n      case 40:\n      // * KEYDOWN\n        _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y += 5;\n        break;\n      default:\n        return null;\n    }\n  });\n}\nfunction drawCoin() {\n  for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"].length; i++) {\n    if (_variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].X === 0 || needToPush) {\n      _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"].push({\n        X: _variables__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width,\n        Y: Math.random() * 450,\n      });\n    }\n    _variables__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].drawImage(_variables__WEBPACK_IMPORTED_MODULE_1__[\"coin\"], _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].X, _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].Y);\n\n    _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].X -= 2;\n    scoreCount(i);\n  }\n}\n\n/**\n * ! @param {*} i --- coinMove element\n * ! @param {*} needToPush = false --- doesn't push new coin when element is missed\n * ! @param {*} needToPush = true ---  pushes new coin when element is catched\n */\nfunction scoreCount(i) {\n  needToPush = false;\n  if (_variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].Y >= _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y - 20\n        && _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].Y <= _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y + 35\n        && _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].X <= 40\n        && _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].X >= 10) {\n    score++;\n    _variables__WEBPACK_IMPORTED_MODULE_1__[\"coinMove\"][i].X = -32;\n    needToPush = true;\n    catchingSound.play();\n  }\n}\n// TODO norm func\nfunction checkheight() {\n  while (_variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y < _variables__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height - 160 && _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y >= 0) {\n    _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].Y += _variables__WEBPACK_IMPORTED_MODULE_1__[\"wooMove\"].gravity;\n  }\n}\nsky.backgroundImage.onload = draw;\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\r\n\r\nclass Background {\r\n  constructor(backgroundImage, yStartPos, link) {\r\n    this.backgroundImage = backgroundImage;\r\n    this.backgroundImage.src = link;\r\n    this.backgroundImagePos = [{\r\n      X: 0,\r\n      Y: yStartPos \r\n    }]\r\n  }\r\n\r\n  drawBackground(attitude, animationSpeed) {\r\n    for (let i = 0; i < this.backgroundImagePos.length; i++) {\r\n      if (this.backgroundImagePos[i].X === 0){\r\n        this.backgroundImagePos.push({\r\n          X: _variables__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width * attitude,\r\n          Y: this.backgroundImagePos[0].Y\r\n        })\r\n      }\r\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(this.backgroundImage, this.backgroundImagePos[i].X, this.backgroundImagePos[i].Y)\r\n      this.backgroundImagePos[i].X -= animationSpeed\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/swipeControl.js":
/*!*****************************!*\
  !*** ./src/swipeControl.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return swipeControlForWoo; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\r\n\r\nfunction swipeControlForWoo() {\r\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].addEventListener('touchmove', (event) => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"wooMove\"].Y = ((event.changedTouches[0].pageY / window.innerHeight) * _variables__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height) - 32;\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/swipeControl.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: canvas, ctx, moon, town_far, ground_bg, woo, town_close_bg, coin, sky_bg, wooMove, coinMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moon\", function() { return moon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"town_far\", function() { return town_far; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ground_bg\", function() { return ground_bg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"woo\", function() { return woo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"town_close_bg\", function() { return town_close_bg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coin\", function() { return coin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sky_bg\", function() { return sky_bg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wooMove\", function() { return wooMove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coinMove\", function() { return coinMove; });\nconst canvas = document.getElementById('canvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst moon = new Image();\r\nconst town_far = new Image();\r\nconst ground_bg = new Image();\r\nconst woo = new Image();\r\nconst town_close_bg = new Image();\r\nconst coin = new Image();\r\nconst sky_bg = new Image();\r\nconst wooMove = {\r\n  X: 20,\r\n  Y: canvas.height - 160,\r\n  gravity: 0.3,\r\n};\r\nconst coinMove = [{\r\n  X: 0,\r\n  Y: Math.random() * 450,\r\n}];\r\n\r\n\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ })

/******/ });