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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants.js");
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/ScoreBoard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ScoreBoard(_ref) {
  var cardsRemaining = _ref.cardsRemaining,
      scoreBoard = _ref.scoreBoard;
  console.log('cardsRemaining: ', cardsRemaining);
  console.log('scoreBoard: ', scoreBoard);
  var gameStatus = scoreBoard.gameStatus;
  return __jsx("div", {
    className: "score-board",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "`$", '>', "`"), __jsx("div", {
    className: "color-box red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "".concat(cardsRemaining.red)), __jsx("div", {
    className: "cards-remaining",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "CARDS REMAINING")), __jsx("div", {
    className: "team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "`$", '>', "`"), __jsx("div", {
    className: "color-box blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "".concat(cardsRemaining.blue)), __jsx("div", {
    className: "cards-remaining",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "CARDS REMAINING")), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "\n        .scoreBoard {\n          display: flex;\n          flex-direction: column;\n          width: 450px;\n          justify-self: center;\n        }\n        .team {\n          display: flex;\n          flex-direction: row;\n        }\n        .arrow {\n          flex-basis: 20%;\n        }\n        .color-box {\n          flex-basis: 20%;\n        }\n        .cards-remaining {\n          flex-basis: 60%;\n        }\n      "));
}

/***/ })

})
//# sourceMappingURL=game.js.ac635ae6393c467c9087.hot-update.js.map