"use strict";
(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 9548:
/***/ ((module) => {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ 9428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9548);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9365);


// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = (0,http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__.createProxyMiddleware)({
    target: "http://localhost:7080",
    changeOrigin: true,
    pathRewrite: {
        [`^${types_ConstantsTypes__WEBPACK_IMPORTED_MODULE_1__/* .API_URLS.TESTNET */ .Y9.TESTNET}`]: ""
    },
    secure: false
});
function handler(req, res) {
    apiProxy(req, res, (result)=>{
        if (result instanceof Error) {
            throw result;
        }
        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
};
const config = {
    api: {
        externalResolver: true,
        bodyParser: false
    }
};


/***/ }),

/***/ 9365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y9": () => (/* binding */ API_URLS)
/* harmony export */ });
/* unused harmony exports REFETCH_INTERVALS, CARD_TYPES, ConstantsTypes, NETWORKS */
const API_URLS = {
    MAINNET: "/api/v1/mainnet",
    TESTNET: "/api/v1/testnet"
};
const REFETCH_INTERVALS = {
    MINING: 1000 * 60,
    METRICS: 1000 * 60,
    MARKET: 1000 * 60 * 50,
    INFO: 1000 * 30,
    REGENERATE_SSG_INTERVAL: 1000 * 60 * 5
};
const CARD_TYPES = {
    BLOCK: "block",
    TRANSACTION: "transaction",
    USER: "user",
    TRUST: "trust",
    INVOICE: "invoice"
};
const MAX_SUPPLY = 72586439.41;
const ConstantsTypes = {
    REFETCH_INTERVALS,
    MAX_SUPPLY: {
        VALUE: MAX_SUPPLY
    }
};
const NETWORKS = {
    //* AVOID ADDING NETWORKS url TO THIS LIST
    MAINNET: {
        name: "Mainnet"
    },
    TESTNET: {
        name: "Testnet"
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9428));
module.exports = __webpack_exports__;

})();