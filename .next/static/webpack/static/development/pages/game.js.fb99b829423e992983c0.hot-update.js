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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2910839364", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2910839364", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "tooltip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2910839364", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, card.word)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2910839364", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2910839364", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "word",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, card.word)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2910839364",
    dynamic: [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none'],
    __self: this
  }, "main.__jsx-style-dynamic-selector{background-image:url(".concat(cardImage, ");background-size:cover;background-repeat:no-repeat;}.card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;text-align:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0 2px;cursor:pointer;}.word.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;padding-top:4%;font-size:10px;font-family:sans-serif;color:").concat(isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', ";}.tooltip.__jsx-style-dynamic-selector{display:").concat((isRevealed || clicked) && hover ? 'flex' : 'none', ";font-weight:600;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}.tooltip.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:white;font-weight:600;text-sh;}.word.__jsx-style-dynamic-selector:hover{color:'#333435';}@media screen and (min-width:480px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:15px;}}@media screen and (min-width:720px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUc4RCxBQUt0QyxBQVVLLEFBU21CLEFBTXpCLEFBS0ksQUFJQyxBQUtBLFlBYkQsR0FTaEIsQUFLQSxDQVRGLFlBSEQsUUFBQyxDQVJrQixjQXhCTSxFQXlCSixrQkFWSyxFQWRLLENBSWIsMkJBSGpCLHVCQXdCc0IsZ0JBcEJGLElBcUJwQixjQXBCdUIsWUFTSCxrQkFDSCxlQUNBLGVBQ1EsZ0JBWEEsT0FZWSxtQ0FDckMseURBWmEsV0FDRSxhQUNFLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGNhcmQsIGlzQ29kZU1hc3Rlciwgcm93SW5kZXgsIGNvbHVtbkluZGV4LCByZXZlYWxDYXJkIH0pIHtcblxuICBjb25zdCBbY2xpY2tlZCwgdXBkYXRlQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgaXNSZXZlYWxlZCB9ID0gY2FyZDtcbiAgY29uc3QgeyB0ZWFtIH0gPSBjYXJkO1xuICBsZXQgY2FyZEltYWdlID0gJy9jYXJkLnBuZyc7XG4gIGlmIChpc0NvZGVNYXN0ZXIpIHtcbiAgICBzd2l0Y2ggKHRlYW0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FyZEltYWdlID0gJy9jYXJkLnBuZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL3JlZHRpbnQucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FyZEltYWdlID0gJy9ibHVldGludC5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2RlYXRodGludC5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY2FyZEltYWdlID0gJy9jYXJkLnBuZydcbiAgICB9XG4gIH1cbiAgaWYgKGlzUmV2ZWFsZWQgfHwgY2xpY2tlZCkge1xuICAgIHN3aXRjaCAodGVhbSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL25ldXRyYWwucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvcmVkLnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvYmx1ZS5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2RlYXRoLnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmICghY2FyZC5pc1JldmVhbGVkKSB7XG4gICAgICAgICAgcmV2ZWFsQ2FyZChyb3dJbmRleCwgY29sdW1uSW5kZXgsIGNhcmQudGVhbSlcbiAgICAgICAgICB1cGRhdGVDbGlja2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcFwiID5cbiAgICAgICAgPHA+e2NhcmQud29yZH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIiA+e2NhcmQud29yZH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjYXJkSW1hZ2V9KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1iYXNpczogMjAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLndvcmQge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogJHtpc1JldmVhbGVkIHx8IGNsaWNrZWQgPyAncmdiYSgwLCAwLCAwLCAwLjApJyA6ICcjMzMzNDM1J307XG4gICAgICAgIH1cbiAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgIGRpc3BsYXk6ICR7KGlzUmV2ZWFsZWQgfHwgY2xpY2tlZCkgJiYgaG92ZXIgPyAnZmxleCcgOiAnbm9uZSd9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50b29sdGlwIHAge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtc2hcbiAgICAgICAgfVxuICAgICAgICAud29yZDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICcjMzMzNDM1JztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC53b3JkLCAudG9vbHRpcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLndvcmQsIC50b29sdGlwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4gPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/components/Card.js */")));
}

/***/ })

})
//# sourceMappingURL=game.js.fb99b829423e992983c0.hot-update.js.map