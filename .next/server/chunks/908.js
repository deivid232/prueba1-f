exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 7400:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "dao_container__lGmyr",
	"block": "dao_block__LUj9m",
	"block__details": "dao_block__details__P39EJ"
};


/***/ }),

/***/ 8067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ DaoInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_NE_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6127);
/* harmony import */ var hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3185);
/* harmony import */ var _dao_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7400);
/* harmony import */ var _dao_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dao_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_NE_Button__WEBPACK_IMPORTED_MODULE_1__, hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_6__]);
([components_common_NE_Button__WEBPACK_IMPORTED_MODULE_1__, hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DaoInfo = (props)=>{
    const { title , daoObject  } = props;
    const { getAccount  } = (0,hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_2__/* .useNetwork */ .L)();
    // * make balance fetch for each dao account using useQuery hook and store it in an array
    const multiQuery = react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery;
    const daoInfoArr = Object.entries(daoObject);
    const accountQuerys = daoInfoArr.map(([, v])=>multiQuery([
            v.audit,
            "account"
        ], ()=>getAccount(v.audit)
        )
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .cls */ .yI)((_dao_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: title
            }),
            daoInfoArr.map(([daoKey, daoInfo], index)=>{
                var ref, ref1, ref2, ref3;
                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .cls */ .yI)((_dao_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block)),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_dao_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__details),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/scan/${daoInfo.audit}`,
                                        children: daoInfo.audit
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        daoInfo.desc,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/scan/${daoInfo.audit}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        children: [
                                            "Balance : ",
                                            (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .intlNum */ .QF)((ref = accountQuerys[index]) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.balance),
                                            " ",
                                            (ref2 = accountQuerys[index]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.ticker,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_7__.CgExternal, {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Chair : ",
                                        daoInfo.chair,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: daoInfo.social.replace("@", "https://t.me/"),
                                    children: [
                                        "Social : ",
                                        daoInfo.social,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_7__.CgExternal, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/dao/invoices/${daoInfo.audit}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                type: "primary",
                                children: " Check Invoices"
                            })
                        })
                    ]
                }, daoKey);
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YY": () => (/* binding */ DAO_AMBASSADORS),
/* harmony export */   "x4": () => (/* binding */ DAO_DEVELOPERS)
/* harmony export */ });
/* unused harmony export DAO_KEYS */
/* harmony import */ var utils_customLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9092);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_customLog__WEBPACK_IMPORTED_MODULE_0__]);
utils_customLog__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// todo: rename these to DAO keys
const DAO_KEYS = (/* unused pure expression or super */ null && ([
    "US:Interactions",
    "US:Impressions",
    "US:Relationships",
    "US:Media",
    "US:Communications",
    "US:Miners",
    "US:Interface",
    "US:Logical",
    "US:TAO", 
]));
// * done: first try to load this info from the env
let DAO_AMBASSADORS = {
    interactions: {
        chair: "Arun Pais",
        social: "@aeonwise",
        desc: "Wallet Support, Developer support, Social Media, and Promotions",
        audit: "US:Interactions"
    },
    impressions: {
        chair: "Mike Trick",
        social: "@MikeTrick",
        desc: "Website, Landing Pages, and Ads",
        audit: "US:Impressions"
    },
    relationships: {
        chair: "Guidi",
        social: "@guidisix",
        desc: "Outreach, Use-Cases, and Exchanges",
        audit: "US:Relationships"
    },
    media: {
        chair: "LeventeKovacs",
        social: "@themadblacksmith",
        desc: "Graphics, Videos, and Animations",
        audit: "US:Media"
    },
    communications: {
        chair: "Independence Henry",
        social: "@IndependenceHenry",
        desc: "Content, Translations",
        audit: "US:Communications"
    }
};
let DAO_DEVELOPERS = {
    miners: {
        chair: "",
        social: "@LHefe",
        desc: "Mining Pools, Miners, Ledger Level Adjustments",
        audit: "US:Miners"
    },
    interface: {
        chair: "Krysto",
        social: "@kwyiz",
        desc: "Mobile Wallet, Desktop Wallet, and Modules",
        audit: "US:Interface"
    },
    logical: {
        chair: "Kendal Cormany",
        social: "@KendalCormany_nexusio",
        desc: "Mobile Wallet Backend, Desktop Wallet Backend, Developer Operations (Builds), Modules",
        audit: "US:Logical"
    },
    tao: {
        chair: "Colin Cantrell",
        social: "@Videlicet",
        desc: "TAO Framework, LX-OS, and LLL",
        audit: "US:TAO"
    }
};
try {
    DAO_DEVELOPERS = JSON.parse(process.env.NEXT_PUBLIC_DAO_DEVELOPERS);
    utils_customLog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].error */ .ZP.error("Using DAO DEVELOPERS from .env.local");
} catch (err) {
    utils_customLog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].error */ .ZP.error(err, "Using DAO DEVELOPERS from Types/DaoAccounts.js");
}
try {
    DAO_AMBASSADORS = JSON.parse(process.env.NEXT_PUBLIC_DAO_AMBASSADORS);
    utils_customLog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].error */ .ZP.error("Using DAO AMBASSADORS from .env.local");
} catch (error) {
    utils_customLog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].error */ .ZP.error(error, "Using DAO AMBASSADORS from Types/DaoAccounts.js");
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;