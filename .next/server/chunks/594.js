exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 8302:
/***/ ((module) => {

// Exports
module.exports = {
	"toast__container": "Toast_toast__container__OdqjW"
};


/***/ }),

/***/ 9720:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ToastMessage_container__JQsY5",
	"slideIn": "ToastMessage_slideIn__CCjP3",
	"slideOut": "ToastMessage_slideOut__bRJvD",
	"container__icon": "ToastMessage_container__icon__uP3Pr",
	"icon": "ToastMessage_icon__nXiDh",
	"title": "ToastMessage_title__llyk0",
	"message": "ToastMessage_message__fTHqr",
	"divider": "ToastMessage_divider__pQ0c9",
	"close": "ToastMessage_close__rUKvF",
	"default": "ToastMessage_default__dpIbF",
	"success": "ToastMessage_success__bNm3U",
	"error": "ToastMessage_error__RgI1Y",
	"warning": "ToastMessage_warning___14_V"
};


/***/ }),

/***/ 9978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_NE_ToastMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2573);
/* harmony import */ var _Toast_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8302);
/* harmony import */ var _Toast_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Toast_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_NE_ToastMessage__WEBPACK_IMPORTED_MODULE_2__]);
_common_NE_ToastMessage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ToastListType = {
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
        prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
        prop_types__WEBPACK_IMPORTED_MODULE_3__.string
    ]),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    message: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
        prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
        prop_types__WEBPACK_IMPORTED_MODULE_3__.node
    ]),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    type: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([
        "default",
        "success",
        "error",
        "warning"
    ]),
    icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
        prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
        prop_types__WEBPACK_IMPORTED_MODULE_3__.element
    ])
};
/**
 *
 * @param {Array} toastList Array of toast Messages
 * @param {Number} duration Duration of the toast message
 * @returns
 */ const Toast = ({ toastList =[] , autoDelete =true , duration =4000  })=>{
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        return toastList;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setList([
            ...toastList
        ]);
    }, [
        toastList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, duration);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        toastList,
        autoDelete,
        duration,
        list
    ]);
    /**
   * deleteToast
   * @param {*} id number or string
   * @returns
   */ const deleteToast = (id)=>{
        if (!id) {
            toastList.shift();
            const newList = list;
            newList.shift();
            setList([
                ...newList
            ]);
            return;
        }
        const toastListItem = toastList.findIndex((item)=>item.id === id
        );
        toastList.splice(toastListItem, 1);
        setList(list.filter((item)=>item.id !== id
        ));
    };
    /**
   * onClose
   * @param {string|number} id id of the toast message
   */ const onClose = (id)=>{
        deleteToast(id) || false;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_4___default().toast__container),
        children: list.map((toast, idx)=>{
            /*#__PURE__*/ return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_common_NE_ToastMessage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...toast,
                duration: duration,
                key: idx,
                autoDelete: autoDelete,
                onClose: ()=>{
                    return onClose(toast === null || toast === void 0 ? void 0 : toast.id);
                }
            });
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);
Toast.propTypes = {
    toastList: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape(ToastListType)).isRequired,
    autoDelete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    duration: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CopyText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9978);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
/* harmony import */ var utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6374);
/* harmony import */ var hooks_useWindowSize_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(396);
/* harmony import */ var _NE_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_1__]);
components_Toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CopyText({ value , ellipsisAfter , link , className  }) {
    const windowSize = (0,hooks_useWindowSize_useWindowSize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: toastList , 1: setToastList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: indicator , 1: setIndicator  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIndicator(false);
        }, 2100);
        return ()=>clearTimeout(timer)
        ;
    }, [
        indicator
    ]);
    const handleCopyClick = ()=>{
        (0,utils_helper__WEBPACK_IMPORTED_MODULE_7__/* .handleCopy */ .r0)(value);
        setIndicator(true);
        setToastList((prev)=>{
            return [
                ...prev,
                {
                    message: `Copied ${value}`,
                    type: "success",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiClipboard, {
                        color: "inherit"
                    })
                }, 
            ];
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex"
                },
                className: className,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NE_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: link,
                            "data-copy": value,
                            children: value && `${value.toString().length > 12 ? (0,utils_converter__WEBPACK_IMPORTED_MODULE_4__/* .middleElipsis */ ._s)(value, ellipsisAfter || windowSize.width < 500 ? 5 : 12) : value}`
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: !indicator ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiCopy, {
                            onClick: handleCopyClick
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiCheck, {
                            color: "#28a745"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                toastList: toastList
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const PushLink = ({ children , href ="" , ...props })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClick = (e)=>{
        e.preventDefault();
        href && router.push(href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: href,
        ...props,
        onClick: handleClick,
        className: "jsx-edc62e6fa2d2288f" + " " + (props && props.className != null && props.className || ""),
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "edc62e6fa2d2288f",
                children: "span.jsx-edc62e6fa2d2288f{cursor:pointer}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PushLink);


/***/ }),

/***/ 2573:
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
/* harmony import */ var _ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9720);
/* harmony import */ var _ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__]);
utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * ToastMessage
 * @param {string} title - Title of the toast message
 * @param {string} message - Message of the toast message
 * @param {string} type - Type of the toast message
 * @param {string} icon - Icon of the toast message
 * @param {number} duration - Duration of the toast message
 * @param {Function} onClose - Colapse the toast message
 * @param {boolean} autoDelete - Auto delete the toast message
 * @returns Component
 */ const ToastMessage = ({ title , message , children , type ="default" , icon , duration =5000 , onClose , autoDelete =true , ...props })=>{
    const animationDuration = `${duration / 1000 - 0.8}s`;
    const messageBody = message !== null && message !== void 0 ? message : children;
    const Icon = typeof icon == "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: icon,
        alt: "toast icon",
        width: 40,
        height: 40
    }) : icon;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .cls */ .yI)((_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[type]),
            style: {
                ...props.style,
                "--duration": animationDuration
            },
            children: [
                !autoDelete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: onClose,
                    className: (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().close),
                    children: "x"
                }),
                Icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__icon),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
                            children: Icon
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divider)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ToastMessage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().message),
                            children: messageBody
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessage);
ToastMessage.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "default",
        "success",
        "error",
        "warning"
    ]),
    icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)
    ]),
    duration: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    autoDelete: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;