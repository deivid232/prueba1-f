(() => {
var exports = {};
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 333:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "AccountDetail_details__tUWJ5",
	"details__text": "AccountDetail_details__text__iiiPl",
	"qrCode": "AccountDetail_qrCode__Hvv_G",
	"qrConatiner": "AccountDetail_qrConatiner__ZQbpZ"
};


/***/ }),

/***/ 5059:
/***/ ((module) => {

// Exports
module.exports = {
	"cardsContainer": "AccountInfo_cardsContainer__FUjaL"
};


/***/ }),

/***/ 5190:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "TransactionDetails_page__Old5g",
	"amount": "TransactionDetails_amount__akbzK"
};


/***/ }),

/***/ 6866:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "UserAccount_page____3cq",
	"amount": "UserAccount_amount__HF06K"
};


/***/ }),

/***/ 8117:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "InfoCard_container__77tLE",
	"row": "InfoCard_row__EyLXR",
	"rowKey": "InfoCard_rowKey___7lhw",
	"rowValue": "InfoCard_rowValue__pkBe9"
};


/***/ }),

/***/ 6940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ AccountDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(333);
/* harmony import */ var _AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1479);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_qr_code__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_NE_CopyText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4248);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6495);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_NE_CopyText__WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_3__]);
([components_common_NE_CopyText__WEBPACK_IMPORTED_MODULE_2__, types__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const AccountDetail = ({ data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().details),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: (_AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().details__text),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Account: ",
                                router.query.addr
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Address: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_CopyText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    value: data.address
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Owner: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_CopyText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    value: data.owner
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Created On: ",
                                new Date(data.created * 1000).toLocaleString()
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Last Modified: ",
                                new Date(data.modified * 1000).toLocaleString()
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Name: ",
                                data.name
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Stake Rate: ",
                                data.rate
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Token Name: ",
                                data.token
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "Ticker: ",
                                data.ticker
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: (_AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().qrConatiner),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_AccountDetail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().qrCode),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_qr_code__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fgColor: types__WEBPACK_IMPORTED_MODULE_3__/* ["default"].COLORS.NEXUS_BLUE */ .Z.COLORS.NEXUS_BLUE,
                            title: data.address,
                            value: data.address || "",
                            level: "L",
                            size: 200
                        })
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _AccountDetail__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _AccountDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccountDetail__WEBPACK_IMPORTED_MODULE_0__]);
_AccountDetail__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ AccountInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountInfo_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5059);
/* harmony import */ var _AccountInfo_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AccountInfo_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7155);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_common_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__]);
components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function AccountInfo({ data  }) {
    var ref, ref1;
    const isTrust = (data === null || data === void 0 ? void 0 : data.rate) === undefined ? false : true;
    const marketRQ = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "market"
    ], utils_common_fetch__WEBPACK_IMPORTED_MODULE_6__/* .fetchMarket */ .Bm);
    const marketData = marketRQ === null || marketRQ === void 0 ? void 0 : (ref = marketRQ.data) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.market_data;
    const preferredFiat = "USD";
    const currentPrice = marketData === null || marketData === void 0 ? void 0 : marketData.current_price[preferredFiat.toLowerCase()];
    const balanceFiat = ((data === null || data === void 0 ? void 0 : data.balance) * currentPrice || 0).toFixed(2);
    const stakeFiat = ((data === null || data === void 0 ? void 0 : data.stake) * currentPrice || 0).toFixed(2);
    const pendingFiat = ((data === null || data === void 0 ? void 0 : data.pending) * currentPrice || 0).toFixed(2);
    const unconfirmedFiat = ((data === null || data === void 0 ? void 0 : data.unconfirmed) * currentPrice || 0).toFixed(2);
    // todo: dropdown to select preffered fiat conversion.
    function fiatValue(value) {
        return `${new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD"
        }).format(value)} USD`;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: (_AccountInfo_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cardsContainer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__/* .NE_SmallCard */ .O6, {
                    label: "Balance",
                    sublabel: `${fiatValue(balanceFiat)}`,
                    value: new Intl.NumberFormat("en-US").format((data === null || data === void 0 ? void 0 : data.balance) || 0),
                    unit: "NXS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__/* .NE_SmallCard */ .O6, {
                    label: "Stake",
                    sublabel: `${fiatValue(stakeFiat)}`,
                    value: new Intl.NumberFormat("en-US").format((data === null || data === void 0 ? void 0 : data.stake) || 0),
                    unit: "NXS",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {})
                }),
                isTrust ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__/* .NE_SmallCard */ .O6, {
                    label: "Stake Rate",
                    sublabel: "",
                    value: data.rate || 0,
                    unit: "%",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChartBar, {})
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__/* .NE_SmallCard */ .O6, {
                    label: "Pending",
                    sublabel: `${fiatValue(pendingFiat)}`,
                    value: new Intl.NumberFormat().format((data === null || data === void 0 ? void 0 : data.pending) || 0),
                    unit: "NXS",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsFillClockFill, {})
                }),
                isTrust ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__/* .NE_SmallCard */ .O6, {
                    label: "Trust Score",
                    sublabel: "",
                    value: (data === null || data === void 0 ? void 0 : data.trust) || 0,
                    unit: "+",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaHandshake, {})
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Card__WEBPACK_IMPORTED_MODULE_1__/* .NE_SmallCard */ .O6, {
                    label: "Unconfirmed",
                    sublabel: `${fiatValue(unconfirmedFiat)}`,
                    value: (data === null || data === void 0 ? void 0 : data.unconfirmed) || 0,
                    unit: "NXS",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserClock, {})
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* reexport safe */ _AccountInfo__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _AccountInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccountInfo__WEBPACK_IMPORTED_MODULE_0__]);
_AccountInfo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ TransactionDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Table_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1337);
/* harmony import */ var _TransactionDetails_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5190);
/* harmony import */ var _TransactionDetails_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TransactionDetails_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7068);
/* harmony import */ var hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var components_common_NE_CopyText_CopyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(594);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6135);
/* harmony import */ var components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5582);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Table_Table__WEBPACK_IMPORTED_MODULE_1__, components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_2__, hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_3__, components_common_NE_CopyText_CopyText__WEBPACK_IMPORTED_MODULE_4__, types__WEBPACK_IMPORTED_MODULE_6__, components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_8__, utils__WEBPACK_IMPORTED_MODULE_10__]);
([components_Table_Table__WEBPACK_IMPORTED_MODULE_1__, components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_2__, hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_3__, components_common_NE_CopyText_CopyText__WEBPACK_IMPORTED_MODULE_4__, types__WEBPACK_IMPORTED_MODULE_6__, components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_8__, utils__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const TransactionDetails = ({ type , data  })=>{
    var ref3, ref1;
    const { 0: pageIndex1 , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
    const { 0: pageSize1 , 1: setPageSize  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(10);
    const { 0: pageCount  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(Infinity);
    const { 0: tableData , 1: setTableData  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const { network , getAccountTransactions , getTrustTransactions  } = (0,hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_3__/* .useNetwork */ .L)();
    const LoaderDiv = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                display: "grid",
                placeItems: "center",
                minHeight: "200px",
                margin: "auto"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: "circle",
                size: "5rem"
            })
        })
    ;
    const accountTransactionsRQ = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "accountTransactions",
        type,
        data.address,
        pageIndex1,
        pageSize1,
        network.name, 
    ], ()=>type == "user" ? getAccountTransactions(data.address, pageIndex1, pageSize1) : getTrustTransactions(data.address, pageIndex1, pageSize1)
    , {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enable: false
    });
    // * columns for the txns table
    const columns = [
        {
            Header: "Time",
            accessor: "timestamp",
            Cell: (props)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: new Date(props.value * 1000).toLocaleString()
                });
            }
        },
        {
            Header: "TXID",
            accessor: "txid",
            Cell: (props)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_CopyText_CopyText__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    value: props.value
                });
            }
        },
        {
            Header: "Operation",
            accessor: "operation"
        },
        {
            Header: "Amount",
            accessor: "amount",
            Cell: (props)=>{
                let cellColor = "var(--theme-page-text)";
                let sign = "+";
                if ([
                    "CREDIT",
                    "CREATE",
                    "TRUST"
                ].includes(props.row.values.operation)) {
                    cellColor = types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.MARKET_GREEN */ .Z.COLORS.MARKET_GREEN;
                    sign = "+";
                } else if ([
                    "DEBIT",
                    "FEE"
                ].includes(props.row.values.operation)) {
                    cellColor = types__WEBPACK_IMPORTED_MODULE_6__/* ["default"].COLORS.MARKET_RED */ .Z.COLORS.MARKET_RED;
                    sign = "-";
                }
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_TransactionDetails_module_scss__WEBPACK_IMPORTED_MODULE_11___default().amount),
                    style: {
                        background: cellColor
                    },
                    children: [
                        sign,
                        " ",
                        props.value
                    ]
                });
            }
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (accountTransactionsRQ.data) {
            var ref, ref2;
            let _tableData = (ref = accountTransactionsRQ.data) === null || ref === void 0 ? void 0 : (ref2 = ref.result) === null || ref2 === void 0 ? void 0 : ref2.map((txn)=>{
                return {
                    txid: txn.txid,
                    timestamp: txn.timestamp,
                    operation: txn.contracts[0].OP,
                    amount: `${(0,utils__WEBPACK_IMPORTED_MODULE_10__/* .intlNum */ .QF)(txn.contracts[0].amount || 0)} ${txn.contracts[0].ticker || ""}`
                };
            });
            setTableData(_tableData);
        }
    }, [
        accountTransactionsRQ.data
    ]);
    const dynamicPageControls = {
        canPreviousPage: pageIndex1 > 0,
        canNextPage: pageIndex1 < pageCount - 1,
        pageCount: pageCount,
        pageIndex: pageIndex1,
        pageSize: pageSize1,
        gotoPage: (pageIndex)=>{
            setPageIndex(pageIndex);
        },
        setPageSize: (pageSize)=>{
            setPageIndex(0);
            setPageSize(pageSize);
        },
        handleStartOfPageClick: ()=>{
            setPageIndex(0);
        },
        handlePreviousPageClick: ()=>{
            setPageIndex(pageIndex1 - 1);
        },
        handleNextPageClick: ()=>{
            setPageIndex(pageIndex1 + 1);
        }
    };
    if (accountTransactionsRQ.isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoaderDiv, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_TransactionDetails_module_scss__WEBPACK_IMPORTED_MODULE_11___default().page),
        style: {
            marginBottom: "1rem"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Table_Table__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                columns: columns,
                data: ((ref3 = accountTransactionsRQ.data) === null || ref3 === void 0 ? void 0 : ref3.error) ? [] : tableData,
                paginate: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginBottom: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    controls: dynamicPageControls,
                    isStaticPanination: false
                })
            }),
            ((ref1 = accountTransactionsRQ.data) === null || ref1 === void 0 ? void 0 : ref1.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                error: accountTransactionsRQ.data.error
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _TransactionDetails__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _TransactionDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8142);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TransactionDetails__WEBPACK_IMPORTED_MODULE_0__]);
_TransactionDetails__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserAccount)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserAccount_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6866);
/* harmony import */ var _UserAccount_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UserAccount_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AccountDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7179);
/* harmony import */ var _AccountInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4204);
/* harmony import */ var _TransactionDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2107);
/* harmony import */ var utils_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccountDetail__WEBPACK_IMPORTED_MODULE_1__, _AccountInfo__WEBPACK_IMPORTED_MODULE_2__, _TransactionDetails__WEBPACK_IMPORTED_MODULE_3__]);
([_AccountDetail__WEBPACK_IMPORTED_MODULE_1__, _AccountInfo__WEBPACK_IMPORTED_MODULE_2__, _TransactionDetails__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UserAccount({ type , data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_UserAccount_module_scss__WEBPACK_IMPORTED_MODULE_5___default().page),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                children: [
                    (0,utils_converter__WEBPACK_IMPORTED_MODULE_4__/* .toTitleCase */ .LF)(type),
                    " Info"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AccountInfo__WEBPACK_IMPORTED_MODULE_2__/* .AccountInfo */ .w, {
                data: data
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                children: [
                    (0,utils_converter__WEBPACK_IMPORTED_MODULE_4__/* .toTitleCase */ .LF)(type),
                    " Details"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AccountDetail__WEBPACK_IMPORTED_MODULE_1__/* .AccountDetail */ ._, {
                data: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Transaction Details"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionDetails__WEBPACK_IMPORTED_MODULE_3__/* .TransactionDetails */ .q, {
                type: type,
                data: data
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* reexport safe */ _UserAccount__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _AccountDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7179);
/* harmony import */ var _AccountInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4204);
/* harmony import */ var _UserAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccountDetail__WEBPACK_IMPORTED_MODULE_0__, _AccountInfo__WEBPACK_IMPORTED_MODULE_1__, _UserAccount__WEBPACK_IMPORTED_MODULE_2__]);
([_AccountDetail__WEBPACK_IMPORTED_MODULE_0__, _AccountInfo__WEBPACK_IMPORTED_MODULE_1__, _UserAccount__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ InfoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3513);
/* harmony import */ var _InfoCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8117);
/* harmony import */ var _InfoCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_InfoCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NE_CopyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NE_CopyText__WEBPACK_IMPORTED_MODULE_4__]);
_NE_CopyText__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const InfoCard = (props)=>{
    var ref, ref1;
    const { 0: isCollapsed , 1: setIsCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.collapse);
    function InfoRow({ label , value  }) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_InfoCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().row),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_InfoCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().rowKey),
                    children: `${(0,utils_converter__WEBPACK_IMPORTED_MODULE_1__/* .toTitleCase */ .LF)(label)}:`
                }),
                value.toString().length > 25 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NE_CopyText__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    value: value
                }) : (0,utils_converter__WEBPACK_IMPORTED_MODULE_1__/* .middleElipsis */ ._s)(value, 15)
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                maxHeight: isCollapsed ? "3.8rem" : "",
                marginBottom: "0.25rem"
            },
            className: (_InfoCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: (0,utils_converter__WEBPACK_IMPORTED_MODULE_1__/* .toTitleCase */ .LF)(props.type)
                        }),
                        props.collapse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setIsCollapsed((prev)=>!prev
                                )
                            ,
                            children: isCollapsed ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCaretDown, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCaretUp, {})
                        })
                    ]
                }),
                Object.entries(props === null || props === void 0 ? void 0 : props.data).map(([key, value])=>{
                    if (Array.isArray(value)) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoCard, {
                            collapse: true,
                            type: key,
                            data: value,
                            children: value.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoCard, {
                                    collapse: true,
                                    type: (index + 1).toString(),
                                    data: item
                                }, Math.random())
                            )
                        });
                    } else if (typeof value === "object") {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoCard, {
                            collapse: true,
                            type: isNaN(key) ? key : (parseInt(key) + 1).toString(),
                            data: value
                        }, Math.random());
                    }
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoRow, {
                        label: key,
                        value: value
                    }, Math.random());
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        display: "none",
                        flexDirection: "row",
                        gap: "1rem"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: (ref = props.data) === null || ref === void 0 ? void 0 : (ref1 = ref.contracts) === null || ref1 === void 0 ? void 0 : ref1.map((contract, index)=>{
                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoCard, {
                                        type: "contract",
                                        data: contract
                                    }, `contract-${index}`),
                                    (contract === null || contract === void 0 ? void 0 : contract.object) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoCard, {
                                        type: "object",
                                        data: contract === null || contract === void 0 ? void 0 : contract.object
                                    })
                                ]
                            });
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (InfoCard)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CopyText__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CopyText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CopyText__WEBPACK_IMPORTED_MODULE_0__]);
_CopyText__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_InfoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8339);
/* harmony import */ var components_common_NE_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6127);
/* harmony import */ var components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7068);
/* harmony import */ var components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5582);
/* harmony import */ var components_UserAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6971);
/* harmony import */ var hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_middleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6386);
/* harmony import */ var utils_customLog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9092);
/* harmony import */ var components_common_NE_ErrorCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7947);
/* harmony import */ var components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5193);
/* harmony import */ var types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1619);
/* harmony import */ var components_Views_Dao_InvoiceModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1692);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_InfoCard__WEBPACK_IMPORTED_MODULE_2__, components_common_NE_Button__WEBPACK_IMPORTED_MODULE_3__, components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_4__, components_UserAccount__WEBPACK_IMPORTED_MODULE_6__, hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_7__, utils_customLog__WEBPACK_IMPORTED_MODULE_10__, components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_12__, components_Views_Dao_InvoiceModal__WEBPACK_IMPORTED_MODULE_14__, components_Layout__WEBPACK_IMPORTED_MODULE_16__]);
([components_common_InfoCard__WEBPACK_IMPORTED_MODULE_2__, components_common_NE_Button__WEBPACK_IMPORTED_MODULE_3__, components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_4__, components_UserAccount__WEBPACK_IMPORTED_MODULE_6__, hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_7__, utils_customLog__WEBPACK_IMPORTED_MODULE_10__, components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_12__, components_Views_Dao_InvoiceModal__WEBPACK_IMPORTED_MODULE_14__, components_Layout__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const getServerSideProps = async (context)=>{
    let address = context.params.addr;
    return {
        props: {
            addr: address
        }
    };
};
function Scan({ addr: addr1  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const { 0: showRawResponse , 1: setShowRawResponse  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: cardType , 1: setCardType  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const { network , getScanResults  } = (0,hooks_useNetwork_useNetwork__WEBPACK_IMPORTED_MODULE_7__/* .useNetwork */ .L)();
    /**
   * identify the endpoint to use from the scan
   * @param {*} addr pass the address to scan
   * @returns {*} the {endpoint, params, type} to use
   */ async function getAPI(addr) {
        let endpoint = "";
        let params = {};
        let type = "";
        if (addr.includes(":trust")) {
            endpoint = "finance/get/trust";
            params = {
                name: addr
            };
            type = "trust";
        } else if (addr.includes(":")) {
            endpoint = "finance/get/account";
            params = {
                name: addr
            };
            type = "user";
        } else if (addr.includes("invoice-")) {
            endpoint = "invoices/get/invoice";
            params = {
                address: addr.substring(8)
            };
            type = "invoice";
        } else if (addr.length === 51) {
            // ? might be trust acc or user acc address, so query for both and identify which one is correct
            endpoint = "finance/get/account";
            params = {
                address: addr
            };
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${network.url}/${endpoint}`, {
                params: params
            });
            if (res.data.error) {
                endpoint = "finance/get/trust";
                type = "trust";
            } else {
                type = "user";
            }
        } else if (addr.length === 128) {
            endpoint = "ledger/get/transaction";
            params = {
                hash: addr
            };
            type = "transaction";
        } else if (addr.length === 256) {
            endpoint = "ledger/get/block";
            params = {
                hash: addr,
                verbose: "detail"
            };
            type = "block";
        } else {
            endpoint = "ledger/get/block";
            params = {
                height: addr,
                verbose: "detail"
            };
            type = "block";
        }
        return {
            endpoint,
            params,
            type
        };
    }
    const { isLoading , data , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)([
        "scan",
        addr1,
        network.name
    ], async ()=>{
        const { endpoint , params , type  } = await getAPI(addr1);
        (0,utils_customLog__WEBPACK_IMPORTED_MODULE_10__/* .Log */ .Zb)(endpoint, params, "type:", type);
        setCardType(type);
        return getScanResults(endpoint, params);
    });
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "center-loader",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                type: "circle",
                size: "5rem"
            })
        });
    }
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_ErrorCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        });
    }
    if (data.error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            error: data.error
        });
    }
    const rawInfo = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            margin: "1rem"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                type: "tertiary",
                onClick: ()=>setShowRawResponse((prev)=>!prev
                    )
                ,
                children: "Show RAW Response"
            }),
            showRawResponse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                style: {
                    overflow: "scroll",
                    color: "var(--theme-page-text)"
                },
                children: JSON.stringify(data, null, 2)
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header_PageHeader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                page: cardType
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    [
                        types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_13__/* .CARD_TYPES.BLOCK */ .QU.BLOCK,
                        types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_13__/* .CARD_TYPES.TRANSACTION */ .QU.TRANSACTION
                    ].includes(cardType) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_InfoCard__WEBPACK_IMPORTED_MODULE_2__/* .InfoCard */ .r, {
                        type: cardType,
                        data: data === null || data === void 0 ? void 0 : data.result
                    }),
                    [
                        types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_13__/* .CARD_TYPES.TRUST */ .QU.TRUST,
                        types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_13__/* .CARD_TYPES.USER */ .QU.USER
                    ].includes(cardType) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UserAccount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                        type: cardType,
                        data: data === null || data === void 0 ? void 0 : data.result
                    }),
                    cardType === types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_13__/* .CARD_TYPES.INVOICE */ .QU.INVOICE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Views_Dao_InvoiceModal__WEBPACK_IMPORTED_MODULE_14__/* .InvoiceWithData */ .K, {
                            data: data === null || data === void 0 ? void 0 : data.result,
                            onBack: router.back,
                            isPage: true
                        })
                    }),
                    utils_middleware__WEBPACK_IMPORTED_MODULE_17__/* .isDev */ .r && rawInfo
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scan);

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

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

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

/***/ 1479:
/***/ ((module) => {

"use strict";
module.exports = require("react-qr-code");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 2154:
/***/ ((module) => {

"use strict";
module.exports = require("react-table");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,398,473,193,68,947,337,594,127,155,602], () => (__webpack_exec__(2600)));
module.exports = __webpack_exports__;

})();