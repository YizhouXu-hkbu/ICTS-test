"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/articles.js":
/*!********************************!*\
  !*** ./components/articles.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\e8250807\\Desktop\\ICTS\\my-project\\frontend\\components\\articles.js",
    _this = undefined;





var Articles = function Articles(_ref) {
  var articles = _ref.articles;
  var leftArticlesCount = Math.ceil(articles.length / 5);
  var leftArticles = articles.slice(0, leftArticlesCount);
  var rightArticles = articles.slice(leftArticlesCount, articles.length);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "column-card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "uk-child-width-1-2@s",
      "data-uk-grid": "true",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: leftArticles.map(function (article, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_1__.default, {
            article: article
          }, "article__left__".concat(article.attributes.slug), false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "uk-child-width-1-2@m uk-grid-match",
          "data-uk-grid": true,
          children: rightArticles.map(function (article, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_1__.default, {
              article: article
            }, "article__left__".concat(article.attributes.slug), false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = Articles;
/* harmony default export */ __webpack_exports__["default"] = (Articles);

var _c;

$RefreshReg$(_c, "Articles");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTBhYWFmNTVhYzkzM2RiMTk5YzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBNUIsQ0FBMUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlLENBQWYsRUFBa0JMLGlCQUFsQixDQUFyQjtBQUNBLE1BQU1NLGFBQWEsR0FBR1AsUUFBUSxDQUFDTSxLQUFULENBQWVMLGlCQUFmLEVBQWtDRCxRQUFRLENBQUNJLE1BQTNDLENBQXRCO0FBRUEsc0JBRUU7QUFBQSw0QkFJQTtBQUFLLFFBQUUsRUFBQyxhQUFSO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBLGVBZ0JFO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQXNDLHNCQUFhLE1BQW5EO0FBQUEsOEJBSUU7QUFBQSxrQkFFR0MsWUFBWSxDQUFDRyxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUNoQyw4QkFDRSw4REFBQywwQ0FBRDtBQUNFLG1CQUFPLEVBQUVEO0FBRFgsc0NBRXlCQSxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLElBRjVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxTQVBBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBb0JFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG9DQUFmO0FBQW9ELDhCQUFwRDtBQUFBLG9CQUNHTCxhQUFhLENBQUNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQ2pDLGdDQUNFLDhEQUFDLDBDQUFEO0FBQ0UscUJBQU8sRUFBRUQ7QUFEWCx3Q0FFeUJBLE9BQU8sQ0FBQ0UsVUFBUixDQUFtQkMsSUFGNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQU1ELFdBUEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUE4RUQsQ0FuRkQ7O0tBQU1iO0FBcUZOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXJ0aWNsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCJcblxuY29uc3QgQXJ0aWNsZXMgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG4gIGNvbnN0IGxlZnRBcnRpY2xlc0NvdW50ID0gTWF0aC5jZWlsKGFydGljbGVzLmxlbmd0aCAvIDUpXG4gIGNvbnN0IGxlZnRBcnRpY2xlcyA9IGFydGljbGVzLnNsaWNlKDAsIGxlZnRBcnRpY2xlc0NvdW50KVxuICBjb25zdCByaWdodEFydGljbGVzID0gYXJ0aWNsZXMuc2xpY2UobGVmdEFydGljbGVzQ291bnQsIGFydGljbGVzLmxlbmd0aClcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cblxuXG5cbiAgICA8ZGl2IGlkPVwiY29sdW1uLWNhcmRcIj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuXG5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY2hpbGQtd2lkdGgtMS0yQHNcIiBkYXRhLXVrLWdyaWQ9XCJ0cnVlXCI+XG5cblxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICB7bGVmdEFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgIGtleT17YGFydGljbGVfX2xlZnRfXyR7YXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY2hpbGQtd2lkdGgtMS0yQG0gdWstZ3JpZC1tYXRjaFwiIGRhdGEtdWstZ3JpZD5cbiAgICAgICAgICAgIHtyaWdodEFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAga2V5PXtgYXJ0aWNsZV9fbGVmdF9fJHthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cblxuICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgPC9kaXY+XG4gIClcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJBcnRpY2xlcyIsImFydGljbGVzIiwibGVmdEFydGljbGVzQ291bnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImxlZnRBcnRpY2xlcyIsInNsaWNlIiwicmlnaHRBcnRpY2xlcyIsIm1hcCIsImFydGljbGUiLCJpIiwiYXR0cmlidXRlcyIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9