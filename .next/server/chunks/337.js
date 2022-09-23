exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 1743:
/***/ ((module) => {

// Exports
module.exports = {
	"tableContainer": "Table_tableContainer__KonQP",
	"table": "Table_table__2hmap",
	"thead": "Table_thead__dLx44",
	"th": "Table_th__LzIb2",
	"tbody": "Table_tbody__iBkH3",
	"tr": "Table_tr__1t7PP",
	"td": "Table_td__f7JH9",
	"noRecords": "Table_noRecords___JVBk"
};


/***/ }),

/***/ 6985:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "Pagination_pagination__0NRDZ",
	"pagination__btn": "Pagination_pagination__btn__hy0LX",
	"pagination__btn__icon": "Pagination_pagination__btn__icon__HQgBh",
	"pagination__btn__page": "Pagination_pagination__btn__page__4deSP",
	"pagination__goToPage": "Pagination_pagination__goToPage__A2r_7",
	"pagination__goToPage__pageSelect": "Pagination_pagination__goToPage__pageSelect__dSVWl",
	"pagination__goToPage__pageDropdown": "Pagination_pagination__goToPage__pageDropdown__bXLr_"
};


/***/ }),

/***/ 1337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2154);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1743);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Table_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_3__]);
components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Table({ columns , data =[] , paginate =true  }) {
    const tableInstance = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({
        data,
        columns
    }, react_table__WEBPACK_IMPORTED_MODULE_2__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_2__.usePagination);
    const { getTableProps , getTableBodyProps , headerGroups , prepareRow , page , rows , canPreviousPage , canNextPage , pageOptions , pageCount , gotoPage , nextPage , previousPage , setPageSize , state: { pageIndex , pageSize  } ,  } = tableInstance;
    const paginationControls = {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageSize,
        handleStartOfPageClick: ()=>gotoPage(0)
        ,
        handlePreviousPageClick: ()=>previousPage()
        ,
        handleNextPageClick: ()=>nextPage()
        ,
        handleEndOfPageClick: ()=>gotoPage(pageCount - 1)
    };
    // if (data?.length === 0) {
    //   return <div className={styles.tableContainer}>No Records</div>;
    // }
    return(// apply the table props
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().table),
                        ...getTableProps(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().thead),
                                children: // Loop over the header rows
                                headerGroups.map((headerGroup)=>// Apply the header row props
                                    // eslint-disable-next-line react/jsx-key
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                        className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tr),
                                        ...headerGroup.getHeaderGroupProps(),
                                        children: // Loop over the headers in each row
                                        headerGroup.headers.map((column)=>// Apply the header cell props
                                            // eslint-disable-next-line react/jsx-key
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().th),
                                                ...column.getHeaderProps(column.getSortByToggleProps()),
                                                children: [
                                                    // Render the header
                                                    column.render("Header"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: column.isSorted ? column.isSortedDesc ? " \uD83D\uDD3D" : " \uD83D\uDD3C" : ""
                                                    })
                                                ]
                                            })
                                        )
                                    })
                                )
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tbody),
                                ...getTableBodyProps(),
                                children: // Loop over the table rows
                                (paginate ? page : rows).map((row)=>{
                                    // Prepare the row for display
                                    prepareRow(row);
                                    return(// Apply the row props
                                    // eslint-disable-next-line react/jsx-key
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                        className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tr),
                                        ...row.getRowProps(),
                                        children: // Loop over the rows cells
                                        row.cells.map((cell)=>{
                                            // Apply the cell props
                                            return(// eslint-disable-next-line react/jsx-key
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().td),
                                                ...cell.getCellProps(),
                                                children: // Render the cell contents
                                                cell.render("Cell")
                                            }));
                                        })
                                    }));
                                })
                            })
                        ]
                    }),
                    data.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().noRecords),
                        children: "No Records"
                    })
                ]
            }),
            pageCount > 1 && paginate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginBottom: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_NE_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    controls: paginationControls,
                    isStaticPanination: paginate
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6985);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_common__WEBPACK_IMPORTED_MODULE_2__]);
utils_common__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Pagination = ({ controls , isStaticPanination  })=>{
    const { canPreviousPage , canNextPage , pageCount , gotoPage , setPageSize , pageIndex , pageSize: pageSize1 ,  } = controls;
    const currentPage = isStaticPanination ? ` ${pageIndex + 1} of ${pageCount}` : `${pageIndex + 1} ${pageCount != Infinity ? `of ${pageCount}` : ""}`;
    const defaultPageNumber = pageIndex + 1;
    const totalPages = pageCount;
    const dataPerPage = [
        10,
        25,
        50,
        100
    ];
    const _isStaticPanination = isStaticPanination ? true : pageCount != Infinity;
    const handleGotoPageInputChange = (e)=>{
        const page = e.target.value ? Number(e.target.value) - 1 : 0;
        (0,utils_common__WEBPACK_IMPORTED_MODULE_2__/* .debounce */ .Ds)(()=>gotoPage(page)
        , 2000);
    };
    const handlePageSizeChange = (e)=>{
        setPageSize(Number(e.target.value));
    };
    const handleStartOfPageClick = ()=>{
        gotoPage(0);
    };
    const handlePreviousPageClick = ()=>{
        gotoPage(pageIndex - 1);
    };
    const handleNextPageClick = ()=>{
        gotoPage(pageIndex + 1);
    };
    const handleEndOfPageClick = ()=>{
        gotoPage(pageCount - 1);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__btn),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "secondary",
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__btn__icon),
                            onClick: handleStartOfPageClick,
                            disabled: !canPreviousPage,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__.BiFirstPage, {
                                color: "inherit"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__btn__icon),
                            type: "secondary",
                            onClick: handlePreviousPageClick,
                            disabled: !canPreviousPage,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__.BiChevronLeft, {
                                color: "inherit"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__btn__page),
                            children: [
                                "Page",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: currentPage
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__btn__icon),
                            type: "secondary",
                            onClick: handleNextPageClick,
                            disabled: !canNextPage,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__.BiChevronRight, {
                                color: "inherit"
                            })
                        }),
                        _isStaticPanination && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__btn__icon),
                            type: "secondary",
                            onClick: handleEndOfPageClick,
                            disabled: !canNextPage,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__.BiLastPage, {
                                color: "inherit"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__goToPage),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__goToPage__pageSelect),
                            children: [
                                "Go to page:",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    defaultValue: defaultPageNumber,
                                    onChange: handleGotoPageInputChange,
                                    min: 1,
                                    max: totalPages,
                                    style: {
                                        width: "100px"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagination__goToPage__pageDropdown),
                            value: pageSize1,
                            onChange: handlePageSizeChange,
                            children: dataPerPage.map((pageSize)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                    value: pageSize,
                                    children: [
                                        "Show ",
                                        pageSize
                                    ]
                                }, pageSize)
                            )
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Pagination)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Pagination__WEBPACK_IMPORTED_MODULE_0__]);
_Pagination__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;