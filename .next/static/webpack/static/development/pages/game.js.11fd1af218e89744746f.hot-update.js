webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/ScoreBoard.js":
/*!**********************************!*\
  !*** ./components/ScoreBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/ScoreBoard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ScoreBoard(_ref) {
  var cardsRemaining = _ref.cardsRemaining,
      scoreBoard = _ref.scoreBoard;
  console.log();
  return __jsx("div", {
    className: "scoreBoard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "turn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, !scoreBoard.gameOver && cardsRemaining.red > 0 && cardsRemaining.blue > 0 && "".concat((scoreBoard === null || scoreBoard === void 0 ? void 0 : scoreBoard.turn) === 1 ? "Red's turn" : "Blue's turn"), scoreBoard.gameOver && "Game Over!", cardsRemaining.red === 0 && "Red wins!", cardsRemaining.blue === 0 && "Blue wins!"), __jsx("div", {
    className: "score",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Blue Cards Remaining: ", "".concat(cardsRemaining.blue)), __jsx("div", {
    className: "score",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Red Cards Remaining: ", "".concat(cardsRemaining.red)));
}

/***/ })

})
//# sourceMappingURL=game.js.11fd1af218e89744746f.hot-update.js.map