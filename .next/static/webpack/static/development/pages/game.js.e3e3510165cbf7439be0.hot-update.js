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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/ScoreBoard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ScoreBoard(_ref) {
  var cardsRemaining = _ref.cardsRemaining,
      scoreBoard = _ref.scoreBoard;
  var gameStatus = scoreBoard === null || scoreBoard === void 0 ? void 0 : scoreBoard.gameStatus;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gameStatus > 2 ? __jsx("div", {
    className: "score-board",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, gameStatus < 5 ? __jsx("div", {
    className: "final",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_1__["gameStatusToString"][gameStatus] + '!') : __jsx("div", {
    className: "green-status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "Green!")) : __jsx("div", {
    className: "score-board",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, gameStatus === 1 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "Red's Turn  ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDoubleRight"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 54
    }
  }))), __jsx("div", {
    className: "color-box red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "".concat(cardsRemaining.red)), __jsx("div", {
    className: "cards-remaining",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "CARDS REMAINING")), __jsx("div", {
    className: "team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, gameStatus === 2 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, "Blue's Turn  ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDoubleRight"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 55
    }
  }))), __jsx("div", {
    className: "color-box blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "".concat(cardsRemaining.blue)), __jsx("div", {
    className: "cards-remaining",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "CARDS REMAINING"))), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, " ", "\n      .score-board {\n        display: flex;\n        flex-direction: column;\n        width: 450px;\n        align-self: center;\n        color: white;\n        font-weight: 600;\n      }\n      .team {\n        display: flex;\n        flex-direction: row;\n        margin-bottom: 5px;\n      }\n      .arrow {\n        flex-basis: 40%;\n        display: flex;\n        font-size: 20px;\n        justify-content: flex-end;\n        align-items: center;\n      }\n      .color-box {\n        flex-basis: 10%;\n        text-align: center;\n        padding: 5px; 2px;\n        margin: 0 10px;\n        border-radius: 5px;\n      }\n      .blue {\n        background: #0D659E;\n        border: 4px solid #005487;\n      }\n      .red {\n        background: #E03222;\n        border: 4px solid #CA0A05;\n      }\n      .final {\n        flex-basis: 100%;\n        font-size: 40px;\n        text-align: center;\n      }\n      .green-status {\n        flex-basis: 100%;\n        font-size: 30px;\n        text-align: center;\n      }\n      .cards-remaining {\n        flex-basis: 60%;\n        display: flex;\n        align-items: center;\n      }\n    "));
}

/***/ })

})
//# sourceMappingURL=game.js.e3e3510165cbf7439be0.hot-update.js.map