webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/NewGameButton.js":
/*!*************************************!*\
  !*** ./components/NewGameButton.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGameButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! random-words */ "./node_modules/random-words/index.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/NewGameButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function NewGameButton(_ref) {
  var solid = _ref.solid,
      _ref$officialWords = _ref.officialWords,
      officialWords = _ref$officialWords === void 0 ? true : _ref$officialWords,
      _ref$setIsCodeMaster = _ref.setIsCodeMaster,
      setIsCodeMaster = _ref$setIsCodeMaster === void 0 ? null : _ref$setIsCodeMaster,
      _ref$isGreenMode = _ref.isGreenMode,
      isGreenMode = _ref$isGreenMode === void 0 ? null : _ref$isGreenMode;
  console.log('isGreenMode: ', isGreenMode);

  var newGame = function newGame() {
    if (setIsCodeMaster) setIsCodeMaster(false);

    var randomInt = function randomInt(min, max) {
      return Math.round(min + Math.random() * (max - min));
    };

    var token = "".concat(random_words__WEBPACK_IMPORTED_MODULE_1___default()(), "-").concat(random_words__WEBPACK_IMPORTED_MODULE_1___default()(), "-").concat(randomInt(100, 999));
    var body = JSON.stringify({
      token: token,
      officialWords: officialWords,
      green: isGreenMode
    });
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/game?token=".concat(token));
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }) // .then(() => Router.push(`/game?token=${token}`))
    ["catch"](function (err) {
      return console.log('Error adding new game: ', err);
    })["finally"](function () {
      return 'Done trying to get new game';
    });
  };

  return __jsx("button", {
    className: solid ? "btn btn-blue" : "bg-transparent hover:bg-gray-200 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded",
    onClick: newGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "New Game");
}

/***/ })

})
//# sourceMappingURL=game.js.7222546215b5f09b010e.hot-update.js.map