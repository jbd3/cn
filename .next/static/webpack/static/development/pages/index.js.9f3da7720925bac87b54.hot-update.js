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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      token = _useState3[0],
      updateToken = _useState3[1];

  var version = 'classic';
  if (!officialWords) version = 'randomWords';
  if (isUndercover) version = 'undercover';
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "home-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "HOME")), __jsx("div", {
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: false,
    setIsCodeMaster: null,
    version: version,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))), __jsx("main", {
    className: "jsx-3593327809" + " " + "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "CODENAMES"), __jsx("div", {
    className: "jsx-3593327809" + " " + "toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3593327809" + " " + 'toggle',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 11
    }
  })), __jsx(_components_NewGameButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    version: version,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3593327809" + " " + "mb-4 token-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3593327809" + " " + "flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Submit"))), __jsx("img", {
    src: "/talkbubble.png",
    alt: "box-art",
    className: "jsx-3593327809",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3593327809",
    __self: this
  }, "@font-face{font-family:'futura',Open Sans', sans-serif;              src: url('https: font-style:normal;font-display:swap;}.toggle{width:100%;margin-bottom:20px;}.token-form{margin-top:30px;}.home{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:solid 10px white;}.hero{width:100%;padding:20px;font-size:12vw;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:futura;}img{margin-top:30px;width:60%;max-width:513px;max-height:548px;justify-self:end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlZG91Z2xhcyAxL2RldmVsb3BtZW50L25leHRKcy9jbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRXlCLEFBS2lDLEFBSVAsQUFJSyxBQUdILEFBTUYsQUFTSyxXQXJCRyxBQWFOLEtBVGYsQUFrQlksUUFSSyxFQVNDLElBdEJsQixTQWNjLEdBU0ssU0FSSixRQVNJLGVBbEJLLEVBbUJ4QixpQkE5Qm9CLGtCQUNwQixjQW9CeUIsMkJBVEosd0VBVUEsbUJBQ3JCLEVBVmlDLCtCQUNqQyIsImZpbGUiOiIvVXNlcnMvamFrZWRvdWdsYXMgMS9kZXZlbG9wbWVudC9uZXh0SnMvY24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvVG9nZ2xlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV3R2FtZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL05ld0dhbWVCdXR0b24nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIGNvbnN0IFtvZmZpY2lhbFdvcmRzLCBzZXRPZmZpY2lhbFdvcmRzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAvLyBjb25zdCBbaXNHcmVlbk1vZGUsIHNldElzR3JlZW5Nb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVW5kZXJjb3Zlciwgc2V0SXNVbmRlcmNvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCB1cGRhdGVUb2tlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHZlcnNpb24gPSAnY2xhc3NpYyc7XG4gIGlmICghb2ZmaWNpYWxXb3JkcykgdmVyc2lvbiA9ICdyYW5kb21Xb3Jkcyc7XG4gIGlmIChpc1VuZGVyY292ZXIpIHZlcnNpb24gPSAndW5kZXJjb3Zlcic7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWJ1dHRvblwiPlxuICAgICAgICAgICAgSE9NRVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5ld0dhbWVCdXR0b24gc29saWQ9e2ZhbHNlfSBzZXRJc0NvZGVNYXN0ZXI9e251bGx9IHZlcnNpb249e3ZlcnNpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPkNPREVOQU1FUzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZVwiPlxuICAgICAgICAgIDxUb2dnbGUgdGV4dD17YCR7b2ZmaWNpYWxXb3JkcyA/ICdVc2Ugb2ZmaWNpYWwgd29yZHMnIDogJ1VzZSByYW5kb20gd29yZHMnfWB9IG9uVG9nZ2xlPXsoKSA9PiBzZXRPZmZpY2lhbFdvcmRzKCFvZmZpY2lhbFdvcmRzKX0gY2hlY2tlZD17b2ZmaWNpYWxXb3Jkc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ndG9nZ2xlJz5cbiAgICAgICAgICA8VG9nZ2xlIHRleHQ9J0R1ZXQgTW9kZScgb25Ub2dnbGU9eygpID0+IHNldElzR3JlZW5Nb2RlKCFpc0dyZWVuTW9kZSl9IGNoZWNrZWQ9e2lzR3JlZW5Nb2RlfSAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2dnbGUnPlxuICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgIHRleHQ9J1VuZGVyY292ZXIgKE5TRlcpJ1xuICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNVbmRlcmNvdmVyKCFpc1VuZGVyY292ZXIpO1xuICAgICAgICAgICAgICBzZXRPZmZpY2lhbFdvcmRzKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2lzVW5kZXJjb3Zlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5ld0dhbWVCdXR0b24gc29saWQgdmVyc2lvbj17dmVyc2lvbn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRva2VuLWZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JheS0xMDAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgdy1mdWxsIHRleHQtZ3JheS03MDAgbXItMyBweS0xIHB4LTIgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3VycmVudCBnYW1lIHRva2VuXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVUb2tlbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tdGVhbFwiIHR5cGU9XCJidXR0b25cIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvZ2FtZT90b2tlbj0ke3Rva2VufWApXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPScvdGFsa2J1YmJsZS5wbmcnIGFsdD0nYm94LWFydCcgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdmdXR1cmEnLCBPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9nZ2xlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9rZW4tZm9ybSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEydnc7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmdXR1cmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxM3B4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1NDhweDtcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/jakedouglas 1/development/nextJs/cn/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9f3da7720925bac87b54.hot-update.js.map