exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 4806:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__Ezh2h",
	"body": "Button_body__Ltagg",
	"primary": "Button_primary__EoZtE",
	"secondary": "Button_secondary__koUXx",
	"tertiary": "Button_tertiary__se1ap",
	"icon": "Button_icon__pvwwU"
};


/***/ }),

/***/ 6127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3593);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4806);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__]);
utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Button = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        ...props,
        className: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .cls */ .yI)(props.className, (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button), (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`${props.type}`]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
                children: props.children
            }),
            (!!props.icon || props.type === "tertiary") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
                children: props.icon || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .Keyboard_arrow */ .ZI, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
Button.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "primary",
        "secondary",
        "tertiary"
    ]).isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
    ])
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;