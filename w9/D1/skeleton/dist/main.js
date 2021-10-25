/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(obj) {\n  obj.vel = Util.randomVec(2);\n  obj.rad = 25;\n  obj.color = 'grey';\n\n  MovingObject.call(this, obj)\n}\n\nlet x = new Asteroid( { pos: [30, 30]} );\nconsole.log(x);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://skeleton/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\r\nwindow.MovingObject = MovingObject;\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const canvasElement = document.getElementById('game-canvas');\r\n    canvasElement.width = 1000;\r\n    canvasElement.height = 600;\r\n    const ctx = canvasElement.getContext('2d');\r\n    ctx.fillStyle = 'black';\r\n    ctx.fillRect(0, 0, 1000, 600);\r\n    \r\n    let dummy = new Asteroid({pos:[100, 100]});\r\n    dummy.draw(ctx);\r\n} )\n\n//# sourceURL=webpack://skeleton/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(object) {\r\n    this.pos = object.pos;\r\n    this.vel = object.vel;\r\n    this.rad = object.rad;\r\n    this.color = object.color;\r\n}\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n    ctx.fillStyle = this.color;\r\n    ctx.arc(\r\n        this.pos[0],\r\n        this.pos[1],\r\n        this.rad,\r\n        0,\r\n        2 * Math.PI,\r\n        false\r\n    )\r\n    ctx.fill();\r\n}\r\n\r\nMovingObject.prototype.move = function () {\r\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\r\n}\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://skeleton/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits(child, parent) { // May need to return something\n    function Surrogate(){}\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://skeleton/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;