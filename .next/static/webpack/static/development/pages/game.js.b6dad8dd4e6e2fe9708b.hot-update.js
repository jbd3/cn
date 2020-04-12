webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Card(_ref) {
  var card = _ref.card,
      isCodeMaster = _ref.isCodeMaster,
      rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      revealCard = _ref.revealCard;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      clicked = _useState[0],
      updateClicked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hover = _useState2[0],
      setHover = _useState2[1];

  var isRevealed = card.isRevealed;
  var team = card.team;
  var cardImage = '/card.png';

  if (isCodeMaster) {
    switch (team) {
      case 0:
        cardImage = '/card.png';
        break;

      case 1:
        cardImage = '/redtint.png';
        break;

      case 2:
        cardImage = '/bluetint.png';
        break;

      case 3:
        cardImage = '/deathtint.png';
        break;

      default:
        cardImage = '/card.png';
    }
  }

  if (isRevealed || clicked) {
    switch (team) {
      case 0:
        cardImage = '/neutral.png';
        break;

      case 1:
        cardImage = '/red.png';
        break;

      case 2:
        cardImage = '/blue.png';
        break;

      case 3:
        cardImage = '/death.png';
        break;

      default:
        cardImage = '/card.png';
    }
  }

  return __jsx("main", {
    onClick: function onClick() {
      if (!card.isRevealed) {
        revealCard(rowIndex, columnIndex, card.team);
        updateClicked(true);
      }
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1412773412", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1412773412", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "tooltip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1412773412", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, card.word)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1412773412", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1412773412", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "word",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, card.word)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1412773412",
    dynamic: [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none'],
    __self: this
  }, "main.__jsx-style-dynamic-selector{background-image:url(".concat(cardImage, ");background-size:cover;background-repeat:no-repeat;}.card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;text-align:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0 2px;cursor:pointer;}.word.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;padding-top:4%;font-size:10px;font-family:sans-serif;color:").concat(isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', ";}.tooltip.__jsx-style-dynamic-selector{display:").concat((isRevealed || clicked) && hover ? 'flex' : 'none', ";font-weight:600;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}.tooltip.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:white;font-weight:600;}.word.__jsx-style-dynamic-selector:hover{color:'#333435';}@media screen and (min-width:480px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:15px;}}@media screen and (min-width:720px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUc4RCxBQUt0QyxBQVVLLEFBU21CLEFBTXpCLEFBS0ksQUFJQyxBQUtBLFlBYkQsR0FTaEIsQUFLQSxDQVRGLFlBSEEsU0FSa0IsY0F4Qk0sRUF5Qkosa0JBVkssRUFkSyxDQUliLDJCQUhqQix1QkF3QnNCLGdCQXBCRixJQXFCcEIsY0FwQnVCLFlBU0gsa0JBQ0gsZUFDQSxlQUNRLGdCQVhBLE9BWVksbUNBQ3JDLHlEQVphLFdBQ0UsYUFDRSxlQUNqQiIsImZpbGUiOiIvVXNlcnMvamFrZWRvdWdsYXMgMS9kZXZlbG9wbWVudC9uZXh0SnMvY24vY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBjYXJkLCBpc0NvZGVNYXN0ZXIsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgcmV2ZWFsQ2FyZCB9KSB7XG5cbiAgY29uc3QgW2NsaWNrZWQsIHVwZGF0ZUNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGlzUmV2ZWFsZWQgfSA9IGNhcmQ7XG4gIGNvbnN0IHsgdGVhbSB9ID0gY2FyZDtcbiAgbGV0IGNhcmRJbWFnZSA9ICcvY2FyZC5wbmcnO1xuICBpZiAoaXNDb2RlTWFzdGVyKSB7XG4gICAgc3dpdGNoICh0ZWFtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvY2FyZC5wbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FyZEltYWdlID0gJy9yZWR0aW50LnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvYmx1ZXRpbnQucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY2FyZEltYWdlID0gJy9kZWF0aHRpbnQucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvY2FyZC5wbmcnXG4gICAgfVxuICB9XG4gIGlmIChpc1JldmVhbGVkIHx8IGNsaWNrZWQpIHtcbiAgICBzd2l0Y2ggKHRlYW0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FyZEltYWdlID0gJy9uZXV0cmFsLnBuZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL3JlZC5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2JsdWUucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY2FyZEltYWdlID0gJy9kZWF0aC5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY2FyZEltYWdlID0gJy9jYXJkLnBuZydcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAoIWNhcmQuaXNSZXZlYWxlZCkge1xuICAgICAgICAgIHJldmVhbENhcmQocm93SW5kZXgsIGNvbHVtbkluZGV4LCBjYXJkLnRlYW0pXG4gICAgICAgICAgdXBkYXRlQ2xpY2tlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBcIiA+XG4gICAgICAgIDxwPntjYXJkLndvcmR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCIgPntjYXJkLndvcmR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Y2FyZEltYWdlfSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDIwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC53b3JkIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0JTtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICR7aXNSZXZlYWxlZCB8fCBjbGlja2VkID8gJ3JnYmEoMCwgMCwgMCwgMC4wKScgOiAnIzMzMzQzNSd9O1xuICAgICAgICB9XG4gICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiAkeyhpc1JldmVhbGVkIHx8IGNsaWNrZWQpICYmIGhvdmVyID8gJ2ZsZXgnIDogJ25vbmUnfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHRpcCBwIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAud29yZDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICcjMzMzNDM1JztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC53b3JkLCAudG9vbHRpcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLndvcmQsIC50b29sdGlwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4gPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/components/Card.js */")));
}

/***/ })

})
//# sourceMappingURL=game.js.b6dad8dd4e6e2fe9708b.hot-update.js.map