exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 9747:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card___7baF",
	"card-live-state": "Card_card-live-state__A1x0V",
	"blink": "Card_blink__9Jotp"
};


/***/ }),

/***/ 6114:
/***/ ((module) => {

// Exports
module.exports = {
	"card-compact": "CompactCard_card-compact__DOZo5",
	"card-body": "CompactCard_card-body__cjnyG",
	"card-body-upper-part": "CompactCard_card-body-upper-part__6kH69",
	"card-body-lowwer-part": "CompactCard_card-body-lowwer-part__QKdBN",
	"hover": "CompactCard_hover__JYyGC",
	"card-icon": "CompactCard_card-icon__Ip5AZ"
};


/***/ }),

/***/ 6498:
/***/ ((module) => {

// Exports
module.exports = {
	"detailcard": "Basic_detailcard__Hwrgy",
	"flipCard": "Basic_flipCard__pNdyL",
	"body": "Basic_body__3fI0c",
	"body__text": "Basic_body__text__i5WUK",
	"txn__block": "Basic_txn__block__ssbW7",
	"txn__block__type": "Basic_txn__block__type__Efp3A",
	"txn__block__type__value": "Basic_txn__block__type__value__B194U",
	"txn__block__type__label": "Basic_txn__block__type__label__OGgd2"
};


/***/ }),

/***/ 2568:
/***/ ((module) => {

// Exports
module.exports = {
	"triangle__container": "DetailCard_triangle__container__rSy4H",
	"triangle__icon": "DetailCard_triangle__icon__e8Lif",
	"triangle__one": "DetailCard_triangle__one__XfLwx",
	"triangle__two": "DetailCard_triangle__two__EoFVD",
	"triangle__three": "DetailCard_triangle__three__T_mC9",
	"header": "DetailCard_header__ZhT3q",
	"label__container": "DetailCard_label__container__T4cJu",
	"label__sub": "DetailCard_label__sub__RxB6j",
	"label__title": "DetailCard_label__title__kyt0M",
	"ticker": "DetailCard_ticker__qYBPT",
	"pulse": "DetailCard_pulse__qm_Oz",
	"footer": "DetailCard_footer__p0x3e",
	"footer__label": "DetailCard_footer__label__QaNV7",
	"footer__value": "DetailCard_footer__value__Ojmn_",
	"value__unit": "DetailCard_value__unit__gIW5z",
	"value": "DetailCard_value__6lIrt",
	"unit": "DetailCard_unit__NgkTt"
};


/***/ }),

/***/ 3136:
/***/ ((module) => {

// Exports
module.exports = {
	"market__price": "Market_market__price__ND6uD",
	"market__price__icon": "Market_market__price__icon__9QLDD",
	"market__price__value": "Market_market__price__value__xABiA"
};


/***/ }),

/***/ 7396:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "SmallCard_card__cJDxe",
	"card-small": "SmallCard_card-small__dpsV7",
	"card-body": "SmallCard_card-body__Tda7c",
	"card-body-upper-part": "SmallCard_card-body-upper-part__IQMIw",
	"card-body-lowwer-part": "SmallCard_card-body-lowwer-part__Apdrt",
	"hover": "SmallCard_hover__H2zXV",
	"card-icon": "SmallCard_card-icon__XjxVF"
};


/***/ }),

/***/ 7340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ NE_CompactCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7155);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6114);
/* harmony import */ var _CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3593);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__, types__WEBPACK_IMPORTED_MODULE_4__]);
([___WEBPACK_IMPORTED_MODULE_1__, types__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/**
 * Compact card component with icon
 *
 * @param {string} label - Card label
 * @param {string} sublabel - Card sublabel
 * @param {string} value - Card value
 * @param {string} unit - Card unit
 * @param {string} text - Card value label
 * @param {JSX.Element} icon - Card icon
 * @param {Function} onClick - Card onClick function for card value
 * @param {Function} onClickLabel - Card onClick function for card label
 */ const NE_CompactCard = (props)=>{
    const Icon = (data)=>props.icon || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_icons__WEBPACK_IMPORTED_MODULE_3__/* .Nexus_SVG_Icon */ .vU, {
            ...data
        })
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        className: (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-compact"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-body"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-body-upper-part"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                onClick: props.onClickLabel,
                                className: !!props.onClickLabel && (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hover),
                                title: `${props.label}`,
                                children: props.label
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                title: `${props.sublabel}`,
                                children: props.sublabel
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-body-lowwer-part"]),
                        onClick: props.onClick,
                        children: [
                            props.text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                "data-right": true,
                                children: props.text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: !!props.onClick && (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hover),
                                title: `Value is ${props.value}`,
                                children: props.value
                            }),
                            props.unit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                "data-left": true,
                                children: props.unit
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CompactCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-icon"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    fill: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT,
                    color: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.NEXUS_BLUE */ .Z.COLORS.NEXUS_BLUE
                })
            })
        ]
    });
};
NE_CompactCard.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    ]).isRequired,
    sublabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    ]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    ]).isRequired,
    text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    unit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onClickLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ Basic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Basic_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6498);
/* harmony import */ var _Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9815);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_3__]);
([___WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/* Card body section */ const Card_Body = ({ text , reserveLabel , reserve , rewardLabel , reward , unit ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .cls */ .yI)((_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body__text),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ValueUnit */ .rL, {
                    value: text,
                    unit: unit
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block__type),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block__type__label),
                                title: reserveLabel,
                                children: reserveLabel
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block__type__value),
                                title: reserve,
                                children: reserve
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block__type),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block__type__label),
                                title: rewardLabel,
                                children: rewardLabel
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().txn__block__type__value),
                                title: reward,
                                children: reward
                            })
                        ]
                    })
                ]
            })
        ]
    })
;
const Basic = ({ label ="" , sublabel ="" , delayTime ="" , text ="" , unit ="" , reserve ="" , reserveLabel ="" , reward ="" , rewardLabel ="" , footerLabel ="" , footerValue ="" , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_Basic_module_scss__WEBPACK_IMPORTED_MODULE_4___default().detailcard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Card_Watermark */ .l8, {
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Card_Header */ .Ym, {
                label: label,
                sublabel: sublabel,
                ticker: delayTime,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card_Body, {
                text: text,
                reserve: reserve,
                reserveLabel: reserveLabel,
                reward: reward,
                rewardLabel: rewardLabel,
                unit: unit,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Card_Footer */ .sJ, {
                footerLabel: footerLabel,
                footerValue: footerValue,
                ...props
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Basic)));
Basic.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]).isRequired,
    sublabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]).isRequired,
    unit: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    delayTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    reserve: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    reserveLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    reward: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    rewardLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    footerLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    footerValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Market)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6498);
/* harmony import */ var _Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Market_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3136);
/* harmony import */ var _Market_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Market_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9815);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6495);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3185);
/* harmony import */ var utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_4__, utils__WEBPACK_IMPORTED_MODULE_5__, utils_common__WEBPACK_IMPORTED_MODULE_6__]);
([___WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_4__, utils__WEBPACK_IMPORTED_MODULE_5__, utils_common__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const MarketIconValue = ({ label , value  })=>{
    if ((0,utils__WEBPACK_IMPORTED_MODULE_5__/* .isNullOrUndefined */ .le)(value)) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .cls */ .yI)((_Market_module_scss__WEBPACK_IMPORTED_MODULE_7___default().market__price)),
        children: [
            value.match(/[-]/g) != "-" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineRise, {
                className: (_Market_module_scss__WEBPACK_IMPORTED_MODULE_7___default().market__price__icon),
                title: label,
                color: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.MARKET_GREEN */ .Z.COLORS.MARKET_GREEN
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineFall, {
                className: (_Market_module_scss__WEBPACK_IMPORTED_MODULE_7___default().market__price__icon),
                title: label,
                color: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.MARKET_RED */ .Z.COLORS.MARKET_RED
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                "data-state": `${value.match(/[-]/g) != "-"}`,
                className: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .cls */ .yI)((_Market_module_scss__WEBPACK_IMPORTED_MODULE_7___default().market__price__value)),
                title: value,
                children: value
            })
        ]
    });
};
const Card_Body = ({ text , reserveLabel , reserve , rewardLabel , reward , unit ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .cls */ .yI)((_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body__text),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ValueUnit */ .rL, {
                        value: "1",
                        unit: "FCX"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ValueUnit */ .rL, {
                        value: " = "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ValueUnit */ .rL, {
                        value: (0,utils_common__WEBPACK_IMPORTED_MODULE_6__/* .toFixedDigit */ .z7)(Number(text), 6),
                        unit: unit
                    }),
                    reserve && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarketIconValue, {
                        label: reserveLabel,
                        value: reserve
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().txn__block),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().txn__block__type),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().txn__block__type__label),
                            title: rewardLabel,
                            children: rewardLabel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().txn__block__type__value),
                            title: reward,
                            children: reward
                        })
                    ]
                })
            })
        ]
    })
;
const Market = ({ label ="" , sublabel ="" , delayTime ="" , text ="" , unit ="" , reserve ="" , reserveLabel ="" , reward ="" , rewardLabel ="" , footerLabel ="" , footerValue ="" , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_Basic_Basic_module_scss__WEBPACK_IMPORTED_MODULE_8___default().detailcard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Card_Watermark */ .l8, {
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Card_Header */ .Ym, {
                label: label,
                sublabel: sublabel,
                ticker: delayTime,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card_Body, {
                text: text,
                reserve: reserve,
                reserveLabel: reserveLabel,
                reward: reward,
                rewardLabel: rewardLabel,
                unit: unit,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Card_Footer */ .sJ, {
                footerLabel: footerLabel,
                footerValue: footerValue,
                ...props
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Market)));
Market.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]).isRequired,
    sublabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]).isRequired,
    unit: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    delayTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    reserve: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    reserveLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    reward: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    rewardLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    footerLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    footerValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ym": () => (/* binding */ Card_Header),
/* harmony export */   "a6": () => (/* binding */ NE_DetailCard),
/* harmony export */   "l8": () => (/* binding */ Card_Watermark),
/* harmony export */   "rL": () => (/* binding */ ValueUnit),
/* harmony export */   "sJ": () => (/* binding */ Card_Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6279);
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2400);
/* harmony import */ var assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3593);
/* harmony import */ var _DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2568);
/* harmony import */ var _DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6495);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Basic__WEBPACK_IMPORTED_MODULE_1__, _Market__WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_4__, utils__WEBPACK_IMPORTED_MODULE_5__]);
([_Basic__WEBPACK_IMPORTED_MODULE_1__, _Market__WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_4__, utils__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const NE_DetailCard = ({ type , ...props })=>{
    if (type === "market") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Market__WEBPACK_IMPORTED_MODULE_2__/* .Market */ .I, {
        ...props
    });
    if (type === "basic") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Basic__WEBPACK_IMPORTED_MODULE_1__/* .Basic */ .B, {
        ...props
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Basic__WEBPACK_IMPORTED_MODULE_1__/* .Basic */ .B, {
        ...props
    });
};
const Card_Watermark = ({ icon  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().triangle__container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().triangle__one)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().triangle__two)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().triangle__three)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().triangle__icon),
                children: icon || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_icons__WEBPACK_IMPORTED_MODULE_3__/* .Nexus_SVG_Icon */ .vU, {
                    fill: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT,
                    color: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.WHITE */ .Z.COLORS.WHITE
                })
            })
        ]
    })
;
/* Card Header section */ const Card_Header = ({ label , sublabel , ticker  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .cls */ .yI)((_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label__container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label__title),
                        children: label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label__sub),
                        children: sublabel
                    })
                ]
            }),
            !!ticker && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ticker),
                "data-ticker": ticker
            })
        ]
    })
;
/* Card footer section */ const Card_Footer = ({ footerLabel , footerValue  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .cls */ .yI)((_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer__label),
                children: footerLabel
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer__value),
                children: footerValue
            })
        ]
    })
;
const ValueUnit = ({ value , unit  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value__unit),
        title: `${value}${unit}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                children: value
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                className: (_DetailCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().unit),
                children: unit
            })
        ]
    })
;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NE_DetailCard)));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ NE_SmallCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7155);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7396);
/* harmony import */ var _SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3593);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__, types__WEBPACK_IMPORTED_MODULE_4__]);
([___WEBPACK_IMPORTED_MODULE_1__, types__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/**
 * Small card component with icon
 *
 * @param {string} label - Card label
 * @param {string} sublabel - Card sublabel
 * @param {string} value - Card value
 * @param {string} unit - Card unit
 * @param {string} text - Card value label
 * @param {JSX.Element} icon - Card icon
 * @param {Function} onClick - Card onClick function for card value
 * @param {Function} onClickLabel - Card onClick function for card label
 */ const NE_SmallCard = (props)=>{
    const Icon = (data)=>props.icon || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_icons__WEBPACK_IMPORTED_MODULE_3__/* .Nexus_SVG_Icon */ .vU, {
            ...data
        })
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        className: (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-small"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-body"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-body-upper-part"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                onClick: props.onClickLabel,
                                className: !!props.onClickLabel ? (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hover) : "",
                                title: `Label ${props.label}`,
                                children: props.label
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                title: `Sublabel ${props.sublabel}`,
                                children: props.sublabel
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-body-lowwer-part"]),
                        onClick: props.onClick,
                        children: [
                            props.text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                "data-right": true,
                                children: props.text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: !!props.onClick ? (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hover) : "",
                                title: `Value ${props.value}`,
                                children: props.value
                            }),
                            props.unit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                "data-left": true,
                                children: props.unit
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_SmallCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["card-icon"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    fill: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT,
                    color: types__WEBPACK_IMPORTED_MODULE_4__/* ["default"].COLORS.NEXUS_BLUE */ .Z.COLORS.NEXUS_BLUE
                })
            })
        ]
    });
};
NE_SmallCard.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    ]).isRequired,
    sublabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    ]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    ]).isRequired,
    text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    unit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onClickLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)
};
NE_SmallCard.defaultProps = {
    text: "",
    value: ""
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O6": () => (/* reexport safe */ _NE_SmallCard__WEBPACK_IMPORTED_MODULE_3__.O),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NE_CompactCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7340);
/* harmony import */ var _NE_SmallCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(893);
/* harmony import */ var _NE_DetailCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9815);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9747);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6495);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NE_CompactCard__WEBPACK_IMPORTED_MODULE_2__, _NE_SmallCard__WEBPACK_IMPORTED_MODULE_3__, _NE_DetailCard__WEBPACK_IMPORTED_MODULE_4__, types__WEBPACK_IMPORTED_MODULE_6__, utils__WEBPACK_IMPORTED_MODULE_7__]);
([_NE_CompactCard__WEBPACK_IMPORTED_MODULE_2__, _NE_SmallCard__WEBPACK_IMPORTED_MODULE_3__, _NE_DetailCard__WEBPACK_IMPORTED_MODULE_4__, types__WEBPACK_IMPORTED_MODULE_6__, utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Card = ({ type ="default" , ...props })=>{
    if (type === "small") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NE_SmallCard__WEBPACK_IMPORTED_MODULE_3__/* .NE_SmallCard */ .O, {
        ...props
    });
    if (type === "compact") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NE_CompactCard__WEBPACK_IMPORTED_MODULE_2__/* .NE_CompactCard */ .n, {
        ...props
    });
    if (type === "market" || type === "basic") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NE_DetailCard__WEBPACK_IMPORTED_MODULE_4__/* .NE_DetailCard */ .a6, {
        type: type,
        ...props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        ...props,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "bdd0f949e768a928",
                [
                    props.isLive ? types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.MARKET_GREEN */ .Z.COLORS.MARKET_GREEN : types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT
                ]
            ]
        ]) + " " + ((0,utils__WEBPACK_IMPORTED_MODULE_7__/* .cls */ .yI)(props.className, (_Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card)) || ""),
        children: [
            props.children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "bdd0f949e768a928",
                        [
                            props.isLive ? types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.MARKET_GREEN */ .Z.COLORS.MARKET_GREEN : types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT
                        ]
                    ]
                ]) + " " + ((0,utils__WEBPACK_IMPORTED_MODULE_7__/* .cls */ .yI)((_Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["card-live-state"]), "live-color") || "")
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "bdd0f949e768a928",
                dynamic: [
                    props.isLive ? types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.MARKET_GREEN */ .Z.COLORS.MARKET_GREEN : types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT
                ],
                children: `.live-color.__jsx-style-dynamic-selector{background-color:${props.isLive ? types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.MARKET_GREEN */ .Z.COLORS.MARKET_GREEN : types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.TRANSPARENT */ .Z.COLORS.TRANSPARENT}}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

Card.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf([
        "default",
        "small",
        "basic",
        "compact",
        "market"
    ])
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;