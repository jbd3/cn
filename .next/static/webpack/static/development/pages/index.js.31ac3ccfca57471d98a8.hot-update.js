webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toggle */ "./components/Toggle.js");
/* harmony import */ var _components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NewGameButton */ "./components/NewGameButton.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      officialWords = _useState[0],
      setOfficialWords = _useState[1]; // const [isGreenMode, setIsGreenMode] = useState(false);


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isUndercover = _useState2[0],
      setIsUndercover = _useState2[1];

  var version = 'classic';
  if (!officialWords) version = 'randomWords';
  if (isUndercover) version = 'undercover';
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "home-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "HOME")), __jsx("div", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: false,
    setIsCodeMaster: null,
    version: version,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))), __jsx("main", {
    className: "jsx-3593327809" + " " + "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "CODENAMES"), __jsx("div", {
    className: "jsx-3593327809" + " " + "toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "".concat(officialWords ? 'Use official words' : 'Use random words'),
    onToggle: function onToggle() {
      return setOfficialWords(!officialWords);
    },
    checked: officialWords,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3593327809" + " " + 'toggle',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Undercover (NSFW)",
    onToggle: function onToggle() {
      setIsUndercover(!isUndercover);
      setOfficialWords(true);
    },
    checked: isUndercover,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    version: version,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3593327809" + " " + "mb-4 token-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Current game token",
    onChange: function onChange(e) {
      return updateToken(e.target.value);
    },
    className: "jsx-3593327809" + " " + "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "button",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/game?token=".concat(token));
    },
    className: "jsx-3593327809" + " " + "btn-teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Submit"))), __jsx("img", {
    src: "/talkbubble.png",
    alt: "box-art",
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3593327809",
    __self: this
  }, "@font-face{font-family:'futura',Open Sans', sans-serif;              src: url('https: font-style:normal;font-display:swap;}.toggle{width:100%;margin-bottom:20px;}.token-form{margin-top:30px;}.home{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:solid 10px white;}.hero{width:100%;padding:20px;font-size:12vw;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:futura;}img{margin-top:30px;width:60%;max-width:513px;max-height:548px;justify-self:end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRXlCLEFBS2lDLEFBSVAsQUFJSyxBQUdILEFBTUYsQUFTSyxXQXJCRyxBQWFOLEtBVGYsQUFrQlksUUFSSyxFQVNDLElBdEJsQixTQWNjLEdBU0ssU0FSSixRQVNJLGVBbEJLLEVBbUJ4QixpQkE5Qm9CLGtCQUNwQixjQW9CeUIsMkJBVEosd0VBVUEsbUJBQ3JCLEVBVmlDLCtCQUNqQyIsImZpbGUiOiIvVXNlcnMvamFrZWRvdWdsYXMgMS9kZXZlbG9wbWVudC9uZXh0SnMvY24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvVG9nZ2xlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV3R2FtZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL05ld0dhbWVCdXR0b24nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIGNvbnN0IFtvZmZpY2lhbFdvcmRzLCBzZXRPZmZpY2lhbFdvcmRzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAvLyBjb25zdCBbaXNHcmVlbk1vZGUsIHNldElzR3JlZW5Nb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVW5kZXJjb3Zlciwgc2V0SXNVbmRlcmNvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBsZXQgdmVyc2lvbiA9ICdjbGFzc2ljJztcbiAgaWYgKCFvZmZpY2lhbFdvcmRzKSB2ZXJzaW9uID0gJ3JhbmRvbVdvcmRzJztcbiAgaWYgKGlzVW5kZXJjb3ZlcikgdmVyc2lvbiA9ICd1bmRlcmNvdmVyJztcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYnV0dG9uXCI+XG4gICAgICAgICAgICBIT01FXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmV3R2FtZUJ1dHRvbiBzb2xpZD17ZmFsc2V9IHNldElzQ29kZU1hc3Rlcj17bnVsbH0gdmVyc2lvbj17dmVyc2lvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+Q09ERU5BTUVTPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlXCI+XG4gICAgICAgICAgPFRvZ2dsZSB0ZXh0PXtgJHtvZmZpY2lhbFdvcmRzID8gJ1VzZSBvZmZpY2lhbCB3b3JkcycgOiAnVXNlIHJhbmRvbSB3b3Jkcyd9YH0gb25Ub2dnbGU9eygpID0+IHNldE9mZmljaWFsV29yZHMoIW9mZmljaWFsV29yZHMpfSBjaGVja2VkPXtvZmZpY2lhbFdvcmRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSd0b2dnbGUnPlxuICAgICAgICAgIDxUb2dnbGUgdGV4dD0nRHVldCBNb2RlJyBvblRvZ2dsZT17KCkgPT4gc2V0SXNHcmVlbk1vZGUoIWlzR3JlZW5Nb2RlKX0gY2hlY2tlZD17aXNHcmVlbk1vZGV9IC8+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZ2dsZSc+XG4gICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgdGV4dD0nVW5kZXJjb3ZlciAoTlNGVyknXG4gICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJc1VuZGVyY292ZXIoIWlzVW5kZXJjb3Zlcik7XG4gICAgICAgICAgICAgIHNldE9mZmljaWFsV29yZHModHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hlY2tlZD17aXNVbmRlcmNvdmVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmV3R2FtZUJ1dHRvbiBzb2xpZCB2ZXJzaW9uPXt2ZXJzaW9ufSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdG9rZW4tZm9ybVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1ncmF5LTEwMCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBiZy10cmFuc3BhcmVudCBib3JkZXItbm9uZSB3LWZ1bGwgdGV4dC1ncmF5LTcwMCBtci0zIHB5LTEgcHgtMiBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDdXJyZW50IGdhbWUgdG9rZW5cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVRva2VuKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi10ZWFsXCIgdHlwZT1cImJ1dHRvblwiIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9nYW1lP3Rva2VuPSR7dG9rZW59YClcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9Jy90YWxrYnViYmxlLnBuZycgYWx0PSdib3gtYXJ0JyAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2Z1dHVyYScsIE9wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b2dnbGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b2tlbi1mb3JtIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJ2dztcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZ1dHVyYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTEzcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDU0OHB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.31ac3ccfca57471d98a8.hot-update.js.map