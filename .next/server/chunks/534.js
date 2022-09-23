exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 1203:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "error_container__b6Zyl",
	"errorText": "error_errorText___xt16",
	"detail": "error_detail__R__OL",
	"cta": "error_cta__adMMM",
	"cta-back": "error_cta-back__b9mMu",
	"cta-home": "error_cta-home__1WOwc",
	"errorImage": "error_errorImage__akUAn"
};


/***/ }),

/***/ 8143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9595);
/* harmony import */ var components_common_NE_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6127);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1203);
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_error_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_NE_Button__WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_6__]);
([components_common_NE_Button__WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CustomError = ({ statusCode  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default().errorText),
                children: [
                    !!statusCode && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            `ERROR`,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: statusCode
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: statusCode == 404 ? "Page not Found" : "Something went Wrong!!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cta),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                type: types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].BUTTON.PRIMARY */ .Z.BUTTON.PRIMARY,
                                className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["cta-back"]),
                                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_5___default().back()
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].FALLBACK.GO_BACK */ .Z.FALLBACK.GO_BACK
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/",
                                replace: true,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    type: types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].BUTTON.SECONDARY */ .Z.BUTTON.SECONDARY,
                                    className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["cta-home"]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].FALLBACK.BACK_TO_HOME */ .Z.FALLBACK.BACK_TO_HOME
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default().detail),
                        children: "Request contains bad syntax or the server cannot fulfill the request"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_7___default().errorImage),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    alt: "error-image",
                    src: assets__WEBPACK_IMPORTED_MODULE_1__/* ["default"].IMAGE.GENRAL_ERROR */ .Z.IMAGE.GENRAL_ERROR,
                    width: 768,
                    height: 512
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomError);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Error__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Error__WEBPACK_IMPORTED_MODULE_0__]);
_Error__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;