webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/BoardContainer.js":
/*!**************************************!*\
  !*** ./components/BoardContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Board */ "./components/Board.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Toggle */ "./components/Toggle.js");
/* harmony import */ var _components_ScoreBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ScoreBoard */ "./components/ScoreBoard.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NewGameButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NewGameButton */ "./components/NewGameButton.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/BoardContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function fetcher(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      query = _useRouter.query;

  var token = query.token;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/games?token=".concat(token), fetcher, {
    refreshInterval: 100
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log();
  if (error) next_router__WEBPACK_IMPORTED_MODULE_3__["Router"].push('/404');
  var boardMap = data === null || data === void 0 ? void 0 : data.boardMap;
  var scoreBoard = data === null || data === void 0 ? void 0 : data.scoreBoard;
  var wordsList = data === null || data === void 0 ? void 0 : data.wordsList;
  var version = data === null || data === void 0 ? void 0 : data.version;
  var loading = !boardMap;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isCodeMaster = _useState[0],
      setIsCodeMaster = _useState[1];

  var revealCard = function revealCard(x, y) {
    if (boardMap[x][y].team !== scoreBoard.turn) {
      scoreBoard.turn = scoreBoard.turn === 1 ? 2 : 1;
    }

    if (boardMap[x][y].team === 3) {
      scoreBoard.gameOver = true;
    }

    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('/api/games', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        x: x,
        y: y
      })
    });
  };

  var copyToClipboard = function copyToClipboard() {
    var el = document.createElement('textarea');
    el.value = document.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  var cardsRemaining = {
    red: 0,
    blue: 0,
    green: 0
  };

  if (Array.isArray(boardMap)) {
    boardMap.forEach(function (row) {
      row.forEach(function (card) {
        if (card.team === 1 && !card.isRevealed) {
          cardsRemaining.red++;
        }

        if (card.team === 2 && !card.isRevealed) {
          cardsRemaining.blue++;
        }

        if (card.team === 4 && !card.isRevealed) {
          cardsRemaining.green++;
        }
      });
    });
  }

  if (typeof boardMap === 'string') next_router__WEBPACK_IMPORTED_MODULE_3__["Router"].push('/404');
  return __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "home-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "HOME")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_NewGameButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    solid: false,
    setIsCodeMaster: setIsCodeMaster,
    version: version,
    wordsList: wordsList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }))), version === 'undercover' ? __jsx("div", {
    className: "game-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "CODENAMES: undercover") : __jsx("div", {
    className: "game-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "CODENAMES"), loading && __jsx("div", {
    className: "loader-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), Array.isArray(boardMap) && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "link-container",
    onClick: function onClick() {
      return copyToClipboard();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mb-2 token-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
    type: "text",
    value: "".concat(token),
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }), __jsx("button", {
    className: "btn-teal",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "Copy Link")))), __jsx("div", {
    className: "toggleContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "Codemaster",
    onToggle: function onToggle() {
      return setIsCodeMaster(!isCodeMaster);
    },
    checked: isCodeMaster,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx(_components_ScoreBoard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    scoreBoard: scoreBoard,
    cardsRemaining: cardsRemaining,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), __jsx(_Board__WEBPACK_IMPORTED_MODULE_4__["default"], {
    boardMap: boardMap,
    isCodeMaster: isCodeMaster,
    revealCard: revealCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "\n        .game-title {\n          font-family: futura;\n          font-size: 45px;\n          margin-top: 20px;\n          align-self: center;\n          color: white;\n          text-align: center;\n        }\n        .scoreBoard {\n          display: flex;\n          align-content: space-between;\n          align-self: center;\n          border: 1px solid white;\n          border-radius: 5px;\n          padding: 10px;\n          color: white;\n          font-weight: 500;\n        }\n        .score {\n          margin: 0 10px;\n          color: white;\n        }\n        main {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .loader-container {\n          justify-self: center;\n          align-self: center;\n        }\n        .toggleContainer {\n          width: 160px;\n          align-self: center;\n          margin: 20px 0;\n        }\n        .link-container {\n          width: 98vw;\n          max-width: 400px;\n          align-self: center;\n          font-size: 20px;\n          margin: 20px 0;\n        }\n      "));
}

/***/ })

})
//# sourceMappingURL=game.js.de213e9d78ef39dd357a.hot-update.js.map