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
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/BoardContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function fetcher(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _boardMap;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      query = _useRouter.query;

  var token = query.token;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/games?token=".concat(token), fetcher, {
    refreshInterval: 100
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  var boardMap = data === null || data === void 0 ? void 0 : data.boardMap;
  var scoreBoard = data === null || data === void 0 ? void 0 : data.scoreBoard;
  var loading = !boardMap;
  if (error) boardMap = 'Failed to fetch game data.';

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
    blue: 0
  };

  if ((_boardMap = boardMap) === null || _boardMap === void 0 ? void 0 : _boardMap.length) {
    boardMap.forEach(function (row) {
      row.forEach(function (card) {
        if (card.team === 1 && !card.isRevealed) {
          cardsRemaining.red++;
        }

        if (card.team === 2 && !card.isRevealed) {
          cardsRemaining.blue++;
        }
      });
    });
  }

  return __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, loading && "Loading...", boardMap && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "link-container",
    onClick: function onClick() {
      return copyToClipboard();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mb-2 token-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
    type: "text",
    value: "".concat(document.location.href),
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }), __jsx("button", {
    className: "btn-teal",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Copy Link")))), __jsx("div", {
    className: "toggleContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 11
    }
  })), __jsx(_components_ScoreBoard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    scoreBoard: scoreBoard,
    cardsRemaining: cardsRemaining,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(_Board__WEBPACK_IMPORTED_MODULE_4__["default"], {
    boardMap: boardMap,
    isCodeMaster: isCodeMaster,
    revealCard: revealCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "\n        .scoreBoard {\n          display: flex;\n          align-content: space-between;\n          align-self: center;\n          border: 1px solid white;\n          border-radius: 5px;\n          padding: 10px;\n          color: white;\n          font-weight: 500;\n        }\n        .score {\n          margin: 0 10px;\n          color: white;\n        }\n        main {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .toggleContainer {\n          width: 160px;\n          align-self: center;\n          margin: 20px 0;\n        }\n        .link-container {\n          width: 98vw;\n          max-width: 400px;\n          align-self: center;\n          font-size: 10px;\n          margin: 20px 0;\n        }\n      "));
}

/***/ })

})
//# sourceMappingURL=game.js.8fb69356cca6294399ec.hot-update.js.map