"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/app.tsx":
/*!***********************!*\
  !*** ./pages/app.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst App = ()=>{\n    const [result, setResult] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const Settings = {\n        1: {\n            Big: 273.1,\n            Reg: 439.8\n        },\n        2: {\n            Big: 269.7,\n            Reg: 399.1\n        },\n        3: {\n            Big: 269.7,\n            Reg: 331.0\n        },\n        4: {\n            Big: 259.0,\n            Reg: 315.1\n        },\n        5: {\n            Big: 259.0,\n            Reg: 255.0\n        },\n        6: {\n            Big: 255.0,\n            Reg: 255.0\n        },\n        0: {\n            Big: 3.0,\n            Reg: 3.0\n        }\n    };\n    const setting = 6;\n    const probability = Settings[setting];\n    const message = (result)=>{\n        if (result === \"Big\") {\n            return \"BIG Bonus\";\n        } else if (result === \"Reg\") {\n            return \"REG Bonus\";\n        } else {\n            return \"ハズレ\";\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const b = Math.random() * probability.Big;\n        const r = Math.random() * probability.Reg;\n        if (0 <= b && b < 1) {\n            setResult(\"Big\");\n        } else if (0 <= r && r < 1) {\n            setResult(\"Reg\");\n        }\n        console.log(b, r, result);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: message(result)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcHAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsTUFBTUMsTUFBTSxJQUFNO0lBQ2hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCxxREFBYyxDQUFDO0lBRTNDLE1BQU1LLFdBQVc7UUFDZixHQUFHO1lBQ0RDLEtBQUs7WUFDTEMsS0FBSztRQUNQO1FBQ0EsR0FBRztZQUNERCxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtRQUNBLEdBQUc7WUFDREQsS0FBSztZQUNMQyxLQUFLO1FBQ1A7UUFDQSxHQUFHO1lBQ0RELEtBQUs7WUFDTEMsS0FBSztRQUNQO1FBQ0EsR0FBRztZQUNERCxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtRQUNBLEdBQUc7WUFDREQsS0FBSztZQUNMQyxLQUFLO1FBQ1A7UUFDQSxHQUFHO1lBQ0RELEtBQUs7WUFDTEMsS0FBSztRQUNQO0lBQ0Y7SUFFQSxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLGNBQWNKLFFBQVEsQ0FBQ0csUUFBUTtJQUVyQyxNQUFNRSxVQUFVLENBQUNSLFNBQW1CO1FBQ2xDLElBQUlBLFdBQVcsT0FBTztZQUNwQixPQUFPO1FBQ1QsT0FBTyxJQUFJQSxXQUFXLE9BQU87WUFDM0IsT0FBTztRQUNULE9BQU87WUFDTCxPQUFPO1FBQ1QsQ0FBQztJQUNIO0lBRUFGLHNEQUFlLENBQUMsSUFBTTtRQUNwQixNQUFNWSxJQUFJQyxLQUFLQyxNQUFNLEtBQUtMLFlBQVlILEdBQUc7UUFDekMsTUFBTVMsSUFBSUYsS0FBS0MsTUFBTSxLQUFLTCxZQUFZRixHQUFHO1FBRXpDLElBQUksS0FBS0ssS0FBS0EsSUFBSSxHQUFHO1lBQ25CVCxVQUFVO1FBQ1osT0FBTyxJQUFJLEtBQUtZLEtBQUtBLElBQUksR0FBRztZQUMxQlosVUFBVTtRQUNaLENBQUM7UUFFRGEsUUFBUUMsR0FBRyxDQUFDTCxHQUFHRyxHQUFHYjtJQUNwQjtJQUVBLHFCQUFPO2tCQUFHUSxRQUFRUjs7QUFDcEI7QUFFQSxpRUFBZUQsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rpa3V3YS5tb25zdGVyLy4vcGFnZXMvYXBwLnRzeD8zY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBTZXR0aW5ncyA9IHtcbiAgICAxOiB7XG4gICAgICBCaWc6IDI3My4xLFxuICAgICAgUmVnOiA0MzkuOCxcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgIEJpZzogMjY5LjcsXG4gICAgICBSZWc6IDM5OS4xLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgQmlnOiAyNjkuNyxcbiAgICAgIFJlZzogMzMxLjAsXG4gICAgfSxcbiAgICA0OiB7XG4gICAgICBCaWc6IDI1OS4wLFxuICAgICAgUmVnOiAzMTUuMSxcbiAgICB9LFxuICAgIDU6IHtcbiAgICAgIEJpZzogMjU5LjAsXG4gICAgICBSZWc6IDI1NS4wLFxuICAgIH0sXG4gICAgNjoge1xuICAgICAgQmlnOiAyNTUuMCxcbiAgICAgIFJlZzogMjU1LjAsXG4gICAgfSxcbiAgICAwOiB7XG4gICAgICBCaWc6IDMuMCxcbiAgICAgIFJlZzogMy4wLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc2V0dGluZyA9IDY7XG4gIGNvbnN0IHByb2JhYmlsaXR5ID0gU2V0dGluZ3Nbc2V0dGluZ107XG5cbiAgY29uc3QgbWVzc2FnZSA9IChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09ICdCaWcnKSB7XG4gICAgICByZXR1cm4gJ0JJRyBCb251cyc7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdSZWcnKSB7XG4gICAgICByZXR1cm4gJ1JFRyBCb251cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn44OP44K644OsJztcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiID0gTWF0aC5yYW5kb20oKSAqIHByb2JhYmlsaXR5LkJpZztcbiAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHByb2JhYmlsaXR5LlJlZztcblxuICAgIGlmICgwIDw9IGIgJiYgYiA8IDEpIHtcbiAgICAgIHNldFJlc3VsdCgnQmlnJyk7XG4gICAgfSBlbHNlIGlmICgwIDw9IHIgJiYgciA8IDEpIHtcbiAgICAgIHNldFJlc3VsdCgnUmVnJyk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYiwgciwgcmVzdWx0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIDw+e21lc3NhZ2UocmVzdWx0KX08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHAiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJ1c2VTdGF0ZSIsIlNldHRpbmdzIiwiQmlnIiwiUmVnIiwic2V0dGluZyIsInByb2JhYmlsaXR5IiwibWVzc2FnZSIsInVzZUVmZmVjdCIsImIiLCJNYXRoIiwicmFuZG9tIiwiciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/app.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./pages/app.tsx\");\n\n\nconst Index = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/tikuwa/code/tikuwa.monster/pages/index.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXdCO0FBRXhCLE1BQU1DLFFBQVEsSUFBTTtJQUNsQixxQkFDRTtrQkFDRSw0RUFBQ0QsNENBQUdBOzs7Ozs7QUFHVjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlrdXdhLm1vbnN0ZXIvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIkFwcCIsIkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();