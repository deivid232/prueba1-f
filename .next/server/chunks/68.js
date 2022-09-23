exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 1119:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__XdP__",
	"circle": "Loader_circle__kK_vB",
	"circle-chord": "Loader_circle-chord__3rFuu",
	"spin": "Loader_spin___BLy6",
	"holder": "Loader_holder__rQJCR",
	"dot": "Loader_dot__E3VLA",
	"motion1": "Loader_motion1__n9WJv",
	"motion2": "Loader_motion2__5Eche",
	"motion3": "Loader_motion3__4_6sQ"
};


/***/ }),

/***/ 3843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1119);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([types__WEBPACK_IMPORTED_MODULE_1__, utils__WEBPACK_IMPORTED_MODULE_3__]);
([types__WEBPACK_IMPORTED_MODULE_1__, utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CircleLoader = ({ className ="" , size ="2.5rem" , color =types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].COLORS.NEXUS_BLUE */ .Z.COLORS.NEXUS_BLUE ,  })=>{
    const style = {
        "--color": color,
        "--c-size": size
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .cls */ .yI)(className, (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader)),
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circle),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["circle-chord"])
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["circle-chord"])
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["circle-chord"])
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleLoader);
CircleLoader.propTypes = {
    size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1119);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([types__WEBPACK_IMPORTED_MODULE_1__]);
types__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DotLoader = ({ size ="2.5rem" , color =types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].COLORS.NEXUS_BLUE */ .Z.COLORS.NEXUS_BLUE  })=>{
    const style = {
        "--color": color,
        "--d-size": size
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loader),
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().holder),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {})
            ]
        })
    });
};
const Dot = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dot)
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DotLoader);
DotLoader.propTypes = {
    size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _CircularLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3843);
/* harmony import */ var _DotLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3309);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([types__WEBPACK_IMPORTED_MODULE_1__, _CircularLoader__WEBPACK_IMPORTED_MODULE_2__, _DotLoader__WEBPACK_IMPORTED_MODULE_3__]);
([types__WEBPACK_IMPORTED_MODULE_1__, _CircularLoader__WEBPACK_IMPORTED_MODULE_2__, _DotLoader__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Loader({ type , ...props }) {
    if (type === types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOADER.DOT */ .Z.LOADER.DOT) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DotLoader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CircularLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props
    });
};
Loader.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([
        "circle",
        "dot"
    ]),
    size: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    color: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
Loader.defaultProps = {
    type: types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOADER.CIRCLE */ .Z.LOADER.CIRCLE,
    size: "3rem",
    color: types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].COLORS.NEXUS_BLUE */ .Z.COLORS.NEXUS_BLUE
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;