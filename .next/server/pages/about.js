(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 7989:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "about_main__dsX7K",
	"contributer": "about_contributer__1VgGU",
	"links": "about_links__UykFr",
	"blob": "about_blob__o_M8S",
	"one": "about_one__3DouO",
	"rotate": "about_rotate__ffray",
	"two": "about_two__IJCPb",
	"three": "about_three__bRQXD",
	"developImg": "about_developImg__uW0yk"
};


/***/ }),

/***/ 8424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7989);
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9595);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6495);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(382);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(934);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([types__WEBPACK_IMPORTED_MODULE_3__, contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__, utils__WEBPACK_IMPORTED_MODULE_6__]);
([types__WEBPACK_IMPORTED_MODULE_3__, contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__, utils__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const About = ({ data  })=>{
    const { sharedState: { theme  } ,  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_5__/* .useAppContext */ .bp)();
    let ThemedVscLogo = ()=>{
        return theme == types__WEBPACK_IMPORTED_MODULE_3__/* ["default"].THEME.DARK */ .Z.THEME.DARK ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscGithub, {
            style: {
                color: "white"
            }
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscGithubInverted, {
            style: {
                color: "black"
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Fchain Explorer V0.1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "A Redesigned Explorer for the Fchain Blockchain."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "The Explorer  aims to be visually modern by design, and present the user with realtime statistics with graphically illustrated data to inspect the Fchain Blockchain as deeply as possible."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "based on Nexus explorer v2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contributer),
                            children: "Happines delivered"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: assets__WEBPACK_IMPORTED_MODULE_2__/* ["default"].IMAGE.BLOB.THREE */ .Z.IMAGE.BLOB.THREE,
                            alt: "blob_three",
                            layout: "fill",
                            className: (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .cls */ .yI)((_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().blob), (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().three))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: assets__WEBPACK_IMPORTED_MODULE_2__/* ["default"].IMAGE.BLOB.TWO */ .Z.IMAGE.BLOB.TWO,
                            alt: "blob_two",
                            layout: "fill",
                            className: (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .cls */ .yI)((_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().blob), (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().two))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: assets__WEBPACK_IMPORTED_MODULE_2__/* ["default"].IMAGE.BLOB.ONE */ .Z.IMAGE.BLOB.ONE,
                            alt: "blob_one",
                            layout: "fill",
                            className: (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .cls */ .yI)((_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().blob), (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().one))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().developImg),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: assets__WEBPACK_IMPORTED_MODULE_2__/* ["default"].IMAGE.DEVELOPMENT.ONE */ .Z.IMAGE.DEVELOPMENT.ONE,
                            alt: "blob_one",
                            layout: "fill"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8424);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_About__WEBPACK_IMPORTED_MODULE_0__]);
_About__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types_LinksTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5572);
/* harmony import */ var components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5193);
/* harmony import */ var components_Views_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6314);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_2__, components_Views_About__WEBPACK_IMPORTED_MODULE_3__, components_Layout__WEBPACK_IMPORTED_MODULE_4__]);
([components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_2__, components_Views_About__WEBPACK_IMPORTED_MODULE_3__, components_Layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getStaticProps = async ()=>{
    const res = await fetch(types_LinksTypes__WEBPACK_IMPORTED_MODULE_1__/* .LinksTypes.LINKS.CONTRIBUTORS_API */ .b.LINKS.CONTRIBUTORS_API);
    const data = await res.json();
    return {
        props: {
            data: data
        }
    };
};
const About = ({ data  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                page: "about"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Views_About__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 764:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/si");

/***/ }),

/***/ 382:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/vsc");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,398,473,193], () => (__webpack_exec__(7366)));
module.exports = __webpack_exports__;

})();