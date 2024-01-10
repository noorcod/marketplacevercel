(() => {
var exports = {};
exports.id = 3114;
exports.ids = [3114];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 89871:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/client");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 1830:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 66864:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 52210:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config");

/***/ }),

/***/ 35359:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 98658:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 45343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(18038);

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

var _default = isDOM || isReactNative ? _react.useLayoutEffect : _react.useEffect;

exports["default"] = _default;

/***/ }),

/***/ 62961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52673);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89419);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    const tree = {
        children: [
        '',
        {
        children: [
        'store',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38542)), "D:\\TechBazaar\\marketplacevercel\\src\\app\\store\\page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47985)), "D:\\TechBazaar\\marketplacevercel\\src\\app\\layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50717)), "D:\\TechBazaar\\marketplacevercel\\src\\app\\loading.tsx"],
          
        }
      ]
      }.children;
    const pages = ["D:\\TechBazaar\\marketplacevercel\\src\\app\\store\\page.tsx"];
    
    const originalPathname = "/store/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    
  

/***/ }),

/***/ 52619:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46758))

/***/ }),

/***/ 46758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38371);
/* harmony import */ var _styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63542);
/* harmony import */ var _apis_getApis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59023);
/* harmony import */ var _components_PaginationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34939);
/* harmony import */ var _styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89071);
/* harmony import */ var _styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19857);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23899);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import Listing from "../../../sections/Seller/Listing";








const StoreCard = ({ shop_name, cities, username })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 col-xxl-3 col-xl-3 col-sm-6 col-md-4 col-lg-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: `/store/${username}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().card)} h-100 rounded-3 shadow-sm`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `card-body px-2 py-1 mt-0`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `row align-items-center justify-content-center ${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().shopnamerow)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: ` ${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().shopname)} text-center text-uppercase fs-6 m-0 align-middle`,
                                children: shop_name
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row align-items-center justify-content-between mx-0 mt-2 mb-1 p-0 fs-9",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col d-flex text-end align-middle w-100 flex-nowrap align-items-center justify-content-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: _public_icons__WEBPACK_IMPORTED_MODULE_4__/* .location */ .xh.src,
                                    alt: "location icon",
                                    width: 16,
                                    height: 16,
                                    className: "me-1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-nowrap",
                                    children: cities.length > 1 ? `${cities[0]} and more` : cities[0]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
const LoadingStoreCard = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 col-xxl-3 col-xl-3 col-sm-6 col-md-4 col-lg-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().card)} ${(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_9___default().skeleton)} h-100 rounded-3 shadow-sm`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `card-body px-2 py-1 mt-0`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `row align-items-center justify-content-center ${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().shopnamerow)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: ` ${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().shopname)} text-center text-uppercase fs-6 m-0 align-middle`
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row align-items-center justify-content-between mx-0 mt-2 mb-1 p-0 fs-9",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col text-end align-middle",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bx bx-map-pin align-middle me-1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                        ]
                    })
                })
            ]
        })
    });
};
const StoreList = ()=>{
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [sizeOfPages, setSizeOfPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(40);
    // stores Data
    const getStoresData = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__/* .useQuery */ .a)({
        queryKey: [
            "storesList",
            currentPage,
            sizeOfPages
        ],
        queryFn: ()=>(0,_apis_getApis__WEBPACK_IMPORTED_MODULE_2__/* .fetchAllStores */ .sj)(currentPage, sizeOfPages),
        enabled: true,
        cacheTime: 0,
        refetchOnWindowFocus: false
    });
    const changePage = (page)=>{
        setCurrentPage(page);
        window.scrollTo(0, 500);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "display-6 text-center",
                    children: [
                        "Tech",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Bazaar"
                        }),
                        " Stores"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_StoreList_module_css__WEBPACK_IMPORTED_MODULE_8___default().containerDiv)}  row p-2 g-3`,
                children: getStoresData?.isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: Array.from(Array(sizeOfPages)).map(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingStoreCard, {}))
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: getStoresData?.data?.data?.body?.data && getStoresData?.data?.data?.body?.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoreCard, {
                            shop_name: item.shop_name,
                            cities: item.cities,
                            username: item.username
                        }))
                })
            }),
            getStoresData?.data?.data?.body?.paginationInfo?.totalPages > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center d-flex justify-content-center w-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    noOfPages: getStoresData?.data?.data?.body?.paginationInfo?.totalPages ?? 1,
                    currentPage: currentPage,
                    changePage: changePage
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreList);


/***/ }),

/***/ 34939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47884);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_PaginationBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36362);
/* harmony import */ var _styles_PaginationBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PaginationBar_module_css__WEBPACK_IMPORTED_MODULE_3__);



// import { useNavigate } from "react-router-dom";

const PaginationBar = ({ noOfPages, currentPage, changePage })=>{
    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //   const navigate = useNavigate();
    const changePageHandle = (i)=>{
        changePage(i);
    };
    const createPaginationItem = (i)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Item), {
            active: i === currentPage,
            onClick: ()=>changePageHandle(i),
            children: i
        }, i);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let row = [];
        if (noOfPages < 10) {
            for(var i = 1; i <= noOfPages; i++){
                row.push(createPaginationItem(i));
            }
        } else {
            row.push(createPaginationItem(1));
            if (currentPage - 2 > 1) {
                row.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Ellipsis), {}));
            }
            let midpoint = currentPage - 1;
            if (midpoint <= 1) {
                midpoint = 2;
            } else if (midpoint + 4 >= noOfPages) {
                midpoint = noOfPages - 5;
            }
            for(let i = midpoint; i <= midpoint + 4; i++){
                row.push(createPaginationItem(i));
            }
            if (currentPage + 4 < noOfPages) {
                row.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Ellipsis), {}));
            }
            row.push(createPaginationItem(noOfPages));
        }
        setPages(row);
    }, [
        noOfPages,
        currentPage
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: `mb-5 justify-content-center align-items-center mt-5 ${(_styles_PaginationBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().paginationItems)} `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Prev), {
                    disabled: currentPage === 1,
                    onClick: ()=>changePageHandle(currentPage - 1)
                }),
                pages,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Next), {
                    disabled: currentPage === noOfPages,
                    onClick: ()=>changePageHandle(currentPage + 1)
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationBar);


/***/ }),

/***/ 89071:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "LoadingCard_content__0lKj3",
	"skeleton": "LoadingCard_skeleton__X_brr",
	"loader": "LoadingCard_loader__fHSqB",
	"cover": "LoadingCard_cover__nl0hk",
	"secondcover": "LoadingCard_secondcover__o0EoW"
};


/***/ }),

/***/ 36362:
/***/ ((module) => {

// Exports
module.exports = {
	"paginationItems": "PaginationBar_paginationItems__Wk9W7"
};


/***/ }),

/***/ 38371:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "StoreList_card___e420",
	"fs-8": "StoreList_fs-8__8zRG0",
	"fs-9": "StoreList_fs-9__sp_PF",
	"shopname": "StoreList_shopname__8pjud",
	"shopnamerow": "StoreList_shopnamerow__6rsm5",
	"containerDiv": "StoreList_containerDiv__PRi8i"
};


/***/ }),

/***/ 38542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./src/app/store/StoreList.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\TechBazaar\marketplacevercel\src\app\store\StoreList.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const StoreList = (__default__);
;// CONCATENATED MODULE: ./src/app/store/page.tsx
// import dynamic from "next/dynamic";



// const StoreList = dynamic(() => import("./StoreList"), {
//   loading: () => (
//     <div
//       style={{ width: "100%", height: "100vh" }}
//       className="justify-content-center d-flex align-items-center"
//     >
//       <ScreenLoader />
//     </div>
//   ),
// });
const page = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "main",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row p-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(StoreList, {})
            })
        })
    });
};
/* harmony default export */ const store_page = (page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [761,1621,253,7344,319,8421,2698,6642,7884,3617,5643,538,1436,5458,1036,4229], () => (__webpack_exec__(62961)));
module.exports = __webpack_exports__;

})();