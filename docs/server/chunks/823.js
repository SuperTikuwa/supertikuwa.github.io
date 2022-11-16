"use strict";
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const App = ()=>{
    const [result, setResult] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const Settings = {
        1: {
            Big: 273.1,
            Reg: 439.8
        },
        2: {
            Big: 269.7,
            Reg: 399.1
        },
        3: {
            Big: 269.7,
            Reg: 331.0
        },
        4: {
            Big: 259.0,
            Reg: 315.1
        },
        5: {
            Big: 259.0,
            Reg: 255.0
        },
        6: {
            Big: 255.0,
            Reg: 255.0
        },
        0: {
            Big: 3.0,
            Reg: 3.0
        }
    };
    const setting = 6;
    const probability = Settings[setting];
    const message = (result)=>{
        if (result === "Big") {
            return "BIG Bonus";
        } else if (result === "Reg") {
            return "REG Bonus";
        } else {
            return "ハズレ";
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const b = Math.random() * probability.Big;
        const r = Math.random() * probability.Reg;
        if (0 <= b && b < 1) {
            setResult("Big");
        } else if (0 <= r && r < 1) {
            setResult("Reg");
        }
        console.log(b, r, result);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: message(result)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

};
;