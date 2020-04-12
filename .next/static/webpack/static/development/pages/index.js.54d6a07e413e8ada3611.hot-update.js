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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "home-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "HOME")), __jsx("div", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: false,
    setIsCodeMaster: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx("main", {
    className: "jsx-3593327809" + " " + "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "CODENAMES"), __jsx("div", {
    className: "jsx-3593327809" + " " + "toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3593327809" + " " + 'toggleContainer',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Duet Mode",
    onToggle: function onToggle() {
      return setIsGreenMode(!isGreenMode);
    },
    checked: isGreenMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    officialWords: officialWords,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3593327809" + " " + "mb-4 token-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Current game token",
    className: "jsx-3593327809" + " " + "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "button",
    className: "jsx-3593327809" + " " + "btn-teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Submit"))), __jsx("img", {
    src: "/talkbubble.png",
    alt: "box-art",
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3593327809",
    __self: this
  }, "@font-face{font-family:'futura',Open Sans', sans-serif;              src: url('https: font-style:normal;font-display:swap;}.toggle{width:100%;margin-bottom:20px;}.token-form{margin-top:30px;}.home{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:solid 10px white;}.hero{width:100%;padding:20px;font-size:12vw;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:futura;}img{margin-top:30px;width:60%;max-width:513px;max-height:548px;justify-self:end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q3lCLEFBS2lDLEFBSVAsQUFJSyxBQUdILEFBTUYsQUFTSyxXQXJCRyxBQWFOLEtBVGYsQUFrQlksUUFSSyxFQVNDLElBdEJsQixTQWNjLEdBU0ssU0FSSixRQVNJLGVBbEJLLEVBbUJ4QixpQkE5Qm9CLGtCQUNwQixjQW9CeUIsMkJBVEosd0VBVUEsbUJBQ3JCLEVBVmlDLCtCQUNqQyIsImZpbGUiOiIvVXNlcnMvamFrZWRvdWdsYXMgMS9kZXZlbG9wbWVudC9uZXh0SnMvY24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvVG9nZ2xlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV3R2FtZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL05ld0dhbWVCdXR0b24nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgW29mZmljaWFsV29yZHMsIHNldE9mZmljaWFsV29yZHNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0dyZWVuTW9kZSwgc2V0SXNHcmVlbk1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1idXR0b25cIj5cbiAgICAgICAgICAgIEhPTUVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOZXdHYW1lQnV0dG9uIHNvbGlkPXtmYWxzZX0gc2V0SXNDb2RlTWFzdGVyPXtudWxsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5DT0RFTkFNRVM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGVcIj5cbiAgICAgICAgICA8VG9nZ2xlIHRleHQ9e2Ake29mZmljaWFsV29yZHMgPyAnVXNlIG9mZmljaWFsIHdvcmRzJyA6ICdVc2UgcmFuZG9tIHdvcmRzJ31gfSBvblRvZ2dsZT17KCkgPT4gc2V0T2ZmaWNpYWxXb3Jkcyghb2ZmaWNpYWxXb3Jkcyl9IGNoZWNrZWQ9e29mZmljaWFsV29yZHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9nZ2xlQ29udGFpbmVyJz5cbiAgICAgICAgICA8VG9nZ2xlIHRleHQ9J0R1ZXQgTW9kZScgb25Ub2dnbGU9eygpID0+IHNldElzR3JlZW5Nb2RlKCFpc0dyZWVuTW9kZSl9IGNoZWNrZWQ9e2lzR3JlZW5Nb2RlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5ld0dhbWVCdXR0b24gc29saWQgb2ZmaWNpYWxXb3Jkcz17b2ZmaWNpYWxXb3Jkc30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRva2VuLWZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JheS0xMDAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgdy1mdWxsIHRleHQtZ3JheS03MDAgbXItMyBweS0xIHB4LTIgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ3VycmVudCBnYW1lIHRva2VuXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXRlYWxcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL3RhbGtidWJibGUucG5nJyBhbHQ9J2JveC1hcnQnIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnZnV0dXJhJywgT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvZ2dsZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRva2VuLWZvcm0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvbWUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnZ3O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogZnV0dXJhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTNweDtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTQ4cHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.54d6a07e413e8ada3611.hot-update.js.map