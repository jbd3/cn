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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["312639340", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["312639340", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "tooltip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["312639340", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, card.word)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["312639340", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["312639340", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "word",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, card.word)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "312639340",
    dynamic: [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none'],
    __self: this
  }, "main.__jsx-style-dynamic-selector{background-image:url(".concat(cardImage, ");background-size:cover;background-repeat:no-repeat;}.card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;text-align:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0 2px;cursor:pointer;}.word.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;padding-top:4%;font-size:10px;font-family:sans-serif;color:").concat(isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', ";}.tooltip.__jsx-style-dynamic-selector{display:").concat((isRevealed || clicked) && hover ? 'flex' : 'none', ";font-weight:400;font-size:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}.tooltip.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:white;font-weight:600;text-shadow:2px 2px 2px black;}.word.__jsx-style-dynamic-selector:hover{color:'#333435';}@media screen and (min-width:480px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:15px;}}@media screen and (min-width:720px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUc4RCxBQUt0QyxBQVVLLEFBU21CLEFBT3pCLEFBS0ksQUFJQyxBQUtBLFlBYkQsR0FTaEIsQUFLQSxDQVRGLFlBSmdDLFNBUmQsY0F4Qk0sRUF5QlAsS0FRakIsVUFQb0IsR0FYSyxFQWRLLENBSWIsMkJBSGpCLHNDQXlCc0IsQ0FyQkYsa0JBQ0csQ0FxQnZCLFdBWm9CLGtCQUNILGVBQ0EsZUFDUSxnQkFYQSxPQVlZLG1DQUNyQyx5REFaYSxXQUNFLGFBQ0UsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2pha2Vkb3VnbGFzIDEvZGV2ZWxvcG1lbnQvbmV4dEpzL2NuL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgY2FyZCwgaXNDb2RlTWFzdGVyLCByb3dJbmRleCwgY29sdW1uSW5kZXgsIHJldmVhbENhcmQgfSkge1xuXG4gIGNvbnN0IFtjbGlja2VkLCB1cGRhdGVDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBpc1JldmVhbGVkIH0gPSBjYXJkO1xuICBjb25zdCB7IHRlYW0gfSA9IGNhcmQ7XG4gIGxldCBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJztcbiAgaWYgKGlzQ29kZU1hc3Rlcikge1xuICAgIHN3aXRjaCAodGVhbSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvcmVkdGludC5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2JsdWV0aW50LnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvZGVhdGh0aW50LnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJ1xuICAgIH1cbiAgfVxuICBpZiAoaXNSZXZlYWxlZCB8fCBjbGlja2VkKSB7XG4gICAgc3dpdGNoICh0ZWFtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvbmV1dHJhbC5wbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FyZEltYWdlID0gJy9yZWQucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FyZEltYWdlID0gJy9ibHVlLnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvZGVhdGgucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvY2FyZC5wbmcnXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKCFjYXJkLmlzUmV2ZWFsZWQpIHtcbiAgICAgICAgICByZXZlYWxDYXJkKHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2FyZC50ZWFtKVxuICAgICAgICAgIHVwZGF0ZUNsaWNrZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwXCIgPlxuICAgICAgICA8cD57Y2FyZC53b3JkfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZFwiID57Y2FyZC53b3JkfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2NhcmRJbWFnZX0pO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAud29yZCB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAke2lzUmV2ZWFsZWQgfHwgY2xpY2tlZCA/ICdyZ2JhKDAsIDAsIDAsIDAuMCknIDogJyMzMzM0MzUnfTtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHRpcCB7XG4gICAgICAgICAgZGlzcGxheTogJHsoaXNSZXZlYWxlZCB8fCBjbGlja2VkKSAmJiBob3ZlciA/ICdmbGV4JyA6ICdub25lJ307XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50b29sdGlwIHAge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAud29yZDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICcjMzMzNDM1JztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC53b3JkLCAudG9vbHRpcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLndvcmQsIC50b29sdGlwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4gPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/components/Card.js */")));
}

/***/ })

})
//# sourceMappingURL=game.js.7b32c9ec2a496a0ad7dd.hot-update.js.map