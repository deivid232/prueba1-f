exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 6963:
/***/ ((module) => {

// Exports
module.exports = {
	"backdrop": "invoiceModal_backdrop__b_L0B",
	"backdrop__action": "invoiceModal_backdrop__action__KCJpW",
	"modal": "invoiceModal_modal__3PgVf",
	"pop-up": "invoiceModal_pop-up__jcmnM",
	"close": "invoiceModal_close__8BnRl",
	"page": "invoiceModal_page__pFv2_",
	"content": "invoiceModal_content__1u_ho",
	"stamp": "invoiceModal_stamp__jlleK",
	"createdDate": "invoiceModal_createdDate__cl4sy",
	"dueStatus": "invoiceModal_dueStatus__I6eK9",
	"status": "invoiceModal_status__WfZlG",
	"address": "invoiceModal_address__zJo_S",
	"details": "invoiceModal_details__Bn_I3",
	"details__transaction": "invoiceModal_details__transaction__z6d6G",
	"details__summary": "invoiceModal_details__summary__rZElR",
	"details__items": "invoiceModal_details__items__Er8NQ",
	"item": "invoiceModal_item__qW2pY",
	"header": "invoiceModal_header__Qd_uv",
	"total": "invoiceModal_total___0zpm",
	"onclose_back": "invoiceModal_onclose_back__i6HHv"
};


/***/ }),

/***/ 6169:
/***/ ((module) => {

// Exports
module.exports = {
	"invoiceStatus": "invoiceStatus_invoiceStatus__7Qiu_",
	"paid": "invoiceStatus_paid__Ag3_C",
	"outstanding": "invoiceStatus_outstanding__CCKCj",
	"cancelled": "invoiceStatus_cancelled___fC_p"
};


/***/ }),

/***/ 1692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ InvoiceWithData),
/* harmony export */   "_": () => (/* binding */ InvoiceModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_icons_nexus_blue64_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var components_common_NE_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7707);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6495);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3185);
/* harmony import */ var _InvoiceStatus_invoiceStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8931);
/* harmony import */ var _invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6963);
/* harmony import */ var _invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([types__WEBPACK_IMPORTED_MODULE_7__, utils__WEBPACK_IMPORTED_MODULE_8__, _InvoiceStatus_invoiceStatus__WEBPACK_IMPORTED_MODULE_9__]);
([types__WEBPACK_IMPORTED_MODULE_7__, utils__WEBPACK_IMPORTED_MODULE_8__, _InvoiceStatus_invoiceStatus__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function InvoiceModal(props) {
    const { onClose , data  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().backdrop),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().backdrop__action),
                onClick: onClose
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InvoiceWithData, {
                data: data,
                onClose: onClose,
                ...props
            })
        ]
    });
}
const InvoiceWithData = ({ data , onBack , onClose , isPage  })=>{
    const { address , created , modified , owner , json  } = data;
    const { account =0 , amount =0 , sender_detail ="" , reference ="" , description ="" , status ="" , recipient ="" , items =[] ,  } = json;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isPage && onBack && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().onclose_back),
                onClick: onBack,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiArrowBack, {}),
                    "Back"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .cls */ .yI)((_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().modal), isPage && (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().page)),
                children: [
                    onClose && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().close),
                        onClick: onClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoClose, {
                            color: types__WEBPACK_IMPORTED_MODULE_7__/* ["default"].COLORS.MARKET_RED */ .Z.COLORS.MARKET_RED
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().stamp),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: assets_icons_nexus_blue64_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                                                width: 48,
                                                height: 48,
                                                alt: "nexus logo"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: " Invoice Details"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().createdDate),
                                                        children: [
                                                            "Created on ",
                                                            (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .timestampToDate */ .Ft)(created)
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dueStatus),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Modified on:"
                                                    }),
                                                    " ",
                                                    (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .timestampToDate */ .Ft)(modified)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().status),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Status:"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InvoiceStatus_invoiceStatus__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceStatus */ .U, {
                                                        status: status
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: !isPage && `/scan?invoice=${address}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                                    className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().address),
                                    children: [
                                        "Address/InvoiceID: ",
                                        address,
                                        !isPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiLink, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                                className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().details),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().details__transaction),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "From:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: owner
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                children: sender_detail
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Recipient:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: recipient
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Account:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: account
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().details__summary),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Summary"
                                            }),
                                            reference && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Reference: "
                                                    }),
                                                    reference
                                                ]
                                            }),
                                            description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Description: "
                                                    }),
                                                    description
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().details__items),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .cls */ .yI)((_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().item), (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header)),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Description"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Unit"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Unit Amount(NXS)"
                                                    })
                                                ]
                                            }),
                                            items.map((item, idx)=>{
                                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().item),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: item === null || item === void 0 ? void 0 : item.description
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: item.units
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: item === null || item === void 0 ? void 0 : item.unit_amount
                                                        })
                                                    ]
                                                }, idx);
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .cls */ .yI)((_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().item), (_invoiceModal_module_scss__WEBPACK_IMPORTED_MODULE_10___default().total)),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "Total Amount(NXS):"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .intlNum */ .QF)(amount)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ InvoiceStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3185);
/* harmony import */ var _invoiceStatus_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6169);
/* harmony import */ var _invoiceStatus_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_invoiceStatus_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_1__]);
utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const InvoiceStatus = ({ status =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .cls */ .yI)((_invoiceStatus_module_scss__WEBPACK_IMPORTED_MODULE_2___default().invoiceStatus), (_invoiceStatus_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[status.toLowerCase()]),
        children: status
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ErrorMessage({ error  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            background: "var(--theme-tab-bg)",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "var(--card-shadow)"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
            style: {
                color: "var(--theme-tab-text)",
                fontSize: "1rem"
            },
            children: JSON.stringify(error, null, 2)
        })
    });
};


/***/ })

};
;