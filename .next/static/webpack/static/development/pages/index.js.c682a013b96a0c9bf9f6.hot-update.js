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
var _jsxFileName = "/Users/jakedouglas 1/development/nextJs/cn/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      officialWords = _useState[0],
      setOfficialWords = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isGreenMode = _useState2[0],
      setIsGreenMode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isUndercover = _useState3[0],
      setIsUndercover = _useState3[1];

  var version = classic;
  if (!officialWords) return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "home-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "HOME")), __jsx("div", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: false,
    setIsCodeMaster: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))), __jsx("main", {
    className: "jsx-3593327809" + " " + "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "CODENAMES"), __jsx("div", {
    className: "jsx-3593327809" + " " + "toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3593327809" + " " + 'toggle',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 11
    }
  })), __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    officialWords: officialWords,
    isGreenMode: isGreenMode,
    isUndercover: isUndercover,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3593327809" + " " + "mb-4 token-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Current game token",
    className: "jsx-3593327809" + " " + "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "button",
    className: "jsx-3593327809" + " " + "btn-teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Submit"))), __jsx("img", {
    src: "/talkbubble.png",
    alt: "box-art",
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3593327809",
    __self: this
  }, "@font-face{font-family:'futura',Open Sans', sans-serif;              src: url('https: font-style:normal;font-display:swap;}.toggle{width:100%;margin-bottom:20px;}.token-form{margin-top:30px;}.home{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:solid 10px white;}.hero{width:100%;padding:20px;font-size:12vw;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:futura;}img{margin-top:30px;width:60%;max-width:513px;max-height:548px;justify-self:end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHlCLEFBS2lDLEFBSVAsQUFJSyxBQUdILEFBTUYsQUFTSyxXQXJCRyxBQWFOLEtBVGYsQUFrQlksUUFSSyxFQVNDLElBdEJsQixTQWNjLEdBU0ssU0FSSixRQVNJLGVBbEJLLEVBbUJ4QixpQkE5Qm9CLGtCQUNwQixjQW9CeUIsMkJBVEosd0VBVUEsbUJBQ3JCLEVBVmlDLCtCQUNqQyIsImZpbGUiOiIvVXNlcnMvamFrZWRvdWdsYXMgMS9kZXZlbG9wbWVudC9uZXh0SnMvY24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvVG9nZ2xlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV3R2FtZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL05ld0dhbWVCdXR0b24nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgW29mZmljaWFsV29yZHMsIHNldE9mZmljaWFsV29yZHNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0dyZWVuTW9kZSwgc2V0SXNHcmVlbk1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNVbmRlcmNvdmVyLCBzZXRJc1VuZGVyY292ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCB2ZXJzaW9uID0gY2xhc3NpYztcbiAgaWYgKCFvZmZpY2lhbFdvcmRzKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1idXR0b25cIj5cbiAgICAgICAgICAgIEhPTUVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOZXdHYW1lQnV0dG9uIHNvbGlkPXtmYWxzZX0gc2V0SXNDb2RlTWFzdGVyPXtudWxsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5DT0RFTkFNRVM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGVcIj5cbiAgICAgICAgICA8VG9nZ2xlIHRleHQ9e2Ake29mZmljaWFsV29yZHMgPyAnVXNlIG9mZmljaWFsIHdvcmRzJyA6ICdVc2UgcmFuZG9tIHdvcmRzJ31gfSBvblRvZ2dsZT17KCkgPT4gc2V0T2ZmaWNpYWxXb3Jkcyghb2ZmaWNpYWxXb3Jkcyl9IGNoZWNrZWQ9e29mZmljaWFsV29yZHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3RvZ2dsZSc+XG4gICAgICAgICAgPFRvZ2dsZSB0ZXh0PSdEdWV0IE1vZGUnIG9uVG9nZ2xlPXsoKSA9PiBzZXRJc0dyZWVuTW9kZSghaXNHcmVlbk1vZGUpfSBjaGVja2VkPXtpc0dyZWVuTW9kZX0gLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9nZ2xlJz5cbiAgICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgICB0ZXh0PSdVbmRlcmNvdmVyIChOU0ZXKSdcbiAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzVW5kZXJjb3ZlcighaXNVbmRlcmNvdmVyKTtcbiAgICAgICAgICAgICAgc2V0T2ZmaWNpYWxXb3Jkcyh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGVja2VkPXtpc1VuZGVyY292ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOZXdHYW1lQnV0dG9uIHNvbGlkIG9mZmljaWFsV29yZHM9e29mZmljaWFsV29yZHN9IGlzR3JlZW5Nb2RlPXtpc0dyZWVuTW9kZX0gaXNVbmRlcmNvdmVyPXtpc1VuZGVyY292ZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0b2tlbi1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyYXktMTAwIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJnLXRyYW5zcGFyZW50IGJvcmRlci1ub25lIHctZnVsbCB0ZXh0LWdyYXktNzAwIG1yLTMgcHktMSBweC0yIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkN1cnJlbnQgZ2FtZSB0b2tlblwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi10ZWFsXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9Jy90YWxrYnViYmxlLnBuZycgYWx0PSdib3gtYXJ0JyAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2Z1dHVyYScsIE9wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b2dnbGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b2tlbi1mb3JtIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJ2dztcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZ1dHVyYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTEzcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDU0OHB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c682a013b96a0c9bf9f6.hot-update.js.map