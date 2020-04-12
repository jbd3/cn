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

      case 4:
        cardImage = '/greentint.png';
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

      case 3:
        cardImage = '/death.png';
        break;

      default:
        cardImage = '/card.png';
    }
  }

  return __jsx("main", {
    onClick: function onClick() {
      if (!card.isRevealed && !isCodeMaster) {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2421387373", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2421387373", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "tooltip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2421387373", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, card.word)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2421387373", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2421387373", [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none']]]) + " " + "word",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, card.word)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2421387373",
    dynamic: [cardImage, isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', (isRevealed || clicked) && hover ? 'flex' : 'none'],
    __self: this
  }, "main.__jsx-style-dynamic-selector{background-image:url(".concat(cardImage, ");background-size:cover;background-repeat:no-repeat;}.card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;text-align:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0 2px;cursor:pointer;}.word.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;padding-top:4%;font-size:10px;font-family:sans-serif;color:").concat(isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435', ";}.tooltip.__jsx-style-dynamic-selector{display:").concat((isRevealed || clicked) && hover ? 'flex' : 'none', ";font-weight:400;font-size:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}.tooltip.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:white;font-weight:600;text-shadow:1px 1px 3px black;}.word.__jsx-style-dynamic-selector:hover{color:'#333435';}@media screen and (min-width:480px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:15px;}}@media screen and (min-width:720px){.word.__jsx-style-dynamic-selector,.tooltip.__jsx-style-dynamic-selector{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVrQixBQUc4RCxBQUt0QyxBQVVLLEFBU21CLEFBT3pCLEFBS0ksQUFJQyxBQUtBLFlBYkQsR0FTaEIsQUFLQSxDQVRGLFlBSmdDLFNBUmQsY0F4Qk0sRUF5QlAsS0FRakIsVUFQb0IsR0FYSyxFQWRLLENBSWIsMkJBSGpCLHNDQXlCc0IsQ0FyQkYsa0JBQ0csQ0FxQnZCLFdBWm9CLGtCQUNILGVBQ0EsZUFDUSxnQkFYQSxPQVlZLG1DQUNyQyx5REFaYSxXQUNFLGFBQ0UsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2pha2Vkb3VnbGFzIDEvZGV2ZWxvcG1lbnQvbmV4dEpzL2NuL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgY2FyZCwgaXNDb2RlTWFzdGVyLCByb3dJbmRleCwgY29sdW1uSW5kZXgsIHJldmVhbENhcmQgfSkge1xuXG4gIGNvbnN0IFtjbGlja2VkLCB1cGRhdGVDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBpc1JldmVhbGVkIH0gPSBjYXJkO1xuICBjb25zdCB7IHRlYW0gfSA9IGNhcmQ7XG4gIGxldCBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJztcbiAgaWYgKGlzQ29kZU1hc3Rlcikge1xuICAgIHN3aXRjaCAodGVhbSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvcmVkdGludC5wbmcnXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2JsdWV0aW50LnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvZGVhdGh0aW50LnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvZ3JlZW50aW50LnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjYXJkSW1hZ2UgPSAnL2NhcmQucG5nJ1xuICAgIH1cbiAgfVxuICBpZiAoaXNSZXZlYWxlZCB8fCBjbGlja2VkKSB7XG4gICAgc3dpdGNoICh0ZWFtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvbmV1dHJhbC5wbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FyZEltYWdlID0gJy9yZWQucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FyZEltYWdlID0gJy9ibHVlLnBuZydcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGNhcmRJbWFnZSA9ICcvZGVhdGgucG5nJ1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhcmRJbWFnZSA9ICcvZGVhdGgucG5nJ1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY2FyZEltYWdlID0gJy9jYXJkLnBuZydcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAoIWNhcmQuaXNSZXZlYWxlZCAmJiAhaXNDb2RlTWFzdGVyKSB7XG4gICAgICAgICAgcmV2ZWFsQ2FyZChyb3dJbmRleCwgY29sdW1uSW5kZXgsIGNhcmQudGVhbSlcbiAgICAgICAgICB1cGRhdGVDbGlja2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcFwiID5cbiAgICAgICAgPHA+e2NhcmQud29yZH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIiA+e2NhcmQud29yZH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjYXJkSW1hZ2V9KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1iYXNpczogMjAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLndvcmQge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogJHtpc1JldmVhbGVkIHx8IGNsaWNrZWQgPyAncmdiYSgwLCAwLCAwLCAwLjApJyA6ICcjMzMzNDM1J307XG4gICAgICAgIH1cbiAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgIGRpc3BsYXk6ICR7KGlzUmV2ZWFsZWQgfHwgY2xpY2tlZCkgJiYgaG92ZXIgPyAnZmxleCcgOiAnbm9uZSd9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHRpcCBwIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLndvcmQ6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAnIzMzMzQzNSc7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAud29yZCwgLnRvb2x0aXAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgIC53b3JkLCAudG9vbHRpcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluID5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/components/Card.js */")));
}

/***/ })

})
//# sourceMappingURL=game.js.301daf8744149d903fea.hot-update.js.map