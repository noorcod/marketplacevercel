exports.id = 5458;
exports.ids = [5458];
exports.modules = {

/***/ 59023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AC: () => (/* binding */ fetchdependentFilter),
/* harmony export */   AH: () => (/* binding */ getUserWishlist),
/* harmony export */   C4: () => (/* binding */ fetchPLPListing),
/* harmony export */   Ez: () => (/* binding */ fetchItems),
/* harmony export */   Ff: () => (/* binding */ fetchFacebookUser),
/* harmony export */   JW: () => (/* binding */ fetchRecommendedModels),
/* harmony export */   O3: () => (/* binding */ fetchRecommendedListing),
/* harmony export */   QG: () => (/* binding */ fetchRelatedItems),
/* harmony export */   TO: () => (/* binding */ getUserByToken),
/* harmony export */   Yu: () => (/* binding */ fetchShopByUser),
/* harmony export */   ec: () => (/* binding */ getCondition),
/* harmony export */   fm: () => (/* binding */ fetchModels),
/* harmony export */   hw: () => (/* binding */ getCity),
/* harmony export */   iY: () => (/* binding */ fetchItem),
/* harmony export */   jM: () => (/* binding */ fetchIsListingAvailableForModel),
/* harmony export */   kH: () => (/* binding */ fetchItemDetails),
/* harmony export */   n4: () => (/* binding */ fetchModelFilter),
/* harmony export */   nF: () => (/* binding */ fetchTopSeller),
/* harmony export */   r1: () => (/* binding */ fetchdependentFilterListing),
/* harmony export */   sj: () => (/* binding */ fetchAllStores),
/* harmony export */   uN: () => (/* binding */ fetchIndependentFilter),
/* harmony export */   wI: () => (/* binding */ fetchAccessoriesType),
/* harmony export */   y5: () => (/* binding */ fetchGoogleUser),
/* harmony export */   yY: () => (/* binding */ fetchIndependentFilterListing)
/* harmony export */ });
/* unused harmony exports refreshToken, getNavMenuData, getSearchSuggestions, getReservations */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);
/* harmony import */ var _utility_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18148);


const api = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: _utility_env__WEBPACK_IMPORTED_MODULE_1__/* .marketplaceUrl */ .r5
});
async function fetchShopByUser(name) {
    const res = await api.get(`/shop/one/${name}`);
    return res;
}
async function fetchIndependentFilter(shopId, filters) {
    let paramss = new URLSearchParams(filters);
    // if (filters?.city_id?.length > 0) {
    //   paramss.append("city_id", filters?.city_id[filters?.city_id?.length - 1].id);
    // }
    // if (filters?.city_id?.length > 0) {
    //   paramss.append("category_id", filters?.category_id[filters?.category_id?.length - 1].id);
    // }
    // if (filters?.color_ids?.length > 0) {
    //   paramss.append("color_ids", `[${filters?.color_ids}]`);
    // }
    // if (filters?.condition_ids?.length > 0) {
    //   paramss.append("condition_ids", `[${filters?.condition_ids}]`);
    // }
    // if (filters?.location_ids?.length > 0) {
    //   paramss.append("location_ids", `[${filters?.location_ids}]`);
    // }
    paramss.delete("priceFrom");
    paramss.delete("priceTo");
    let request = {
        params: paramss
    };
    const res = await api.get(`/listings/filters/shop/${shopId}`, request);
    return res;
}
async function fetchdependentFilter(shopId, categoryId, dParams) {
    let params = new URLSearchParams(dParams);
    params.delete("category_id");
    let request = {
        params: params
    };
    const res = await api.get(`/listings/filters/shop/${shopId}/c/${categoryId}`, request);
    return res;
}
async function fetchItems(filters, currentPage, size, shopId, dParams) {
    let params = new URLSearchParams();
    let request = {
        params: dParams
    };
    const res = await api.get(`shop/${shopId}/items?page=${currentPage}&size=${size}`, request);
    return res;
}
async function fetchItemDetails(id) {
    const res = await api.get(`/listings/detail/${id}`);
    return res;
}
async function fetchRelatedItems(id) {
    const res = await api.get(`Listings/related-items/${id}`);
    return res;
}
async function fetchGoogleUser(token) {
    const res = await api.get(`/auth/google/${token}`);
    return res;
}
async function fetchFacebookUser(token) {
    const res = await api.get(`/auth/facebook/${token}`);
    return res;
}
async function fetchPLPListing(currentPage, size, lparam) {
    let params = new URLSearchParams(lparam);
    let request = {
        params: lparam
    };
    const res = await api.get(`/listings?page=${currentPage}&size=${size ? size : ""}`, request);
    return res;
}
async function fetchIndependentFilterListing(filters) {
    let paramss = new URLSearchParams(filters);
    // if (filters?.category_id?.length > 0) {
    //   paramss.append("category_id", filters?.category_id[filters?.category_id?.length - 1].id);
    // }
    // if (filters?.city_id?.length > 0) {
    //   paramss.append("city_id", filters?.city_id[filters?.city_id?.length - 1].id);
    // }
    // if (filters?.color_ids?.length > 0) {
    //   paramss.append("color_ids", `[${filters?.color_ids}]`);
    // }
    // if (filters?.condition_ids?.length > 0) {
    //   paramss.append("condition_ids", `[${filters?.condition_ids}]`);
    // }
    // if (filters?.location_ids?.length > 0) {
    //   paramss.append("location_ids", `[${filters?.location_ids}]`);
    // }
    // if (filters?.title) {
    //   paramss.append("search", filters?.title);
    // }
    paramss.delete("priceFrom");
    paramss.delete("priceTo");
    let request = {
        params: paramss
    };
    const res = await api.get(`/listings/filters`, request);
    return res;
}
async function fetchdependentFilterListing(categoryId, fParam) {
    let params = new URLSearchParams(fParam);
    params.delete("category_id");
    params.delete("sort");
    let request = {
        params: params
    };
    const res = await api.get(`/listings/filters/c/${categoryId}`, request);
    return res;
}
async function fetchRecommendedListing() {
    const res = await api.get(`/listings/random?count=` + 15);
    return res;
}
async function fetchTopSeller() {
    const res = await api.get(`/shop/all?page=${1}&size=${27}`);
    return res;
}
async function getUserByToken(token) {
    const res = await api.get(`/auth/get-user`, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function refreshToken(token) {
    const res = await api.get(`/auth/refresh-token/`, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function getUserWishlist(token, id, currentPage, sizeOfPage) {
    if (currentPage && sizeOfPage) {
        const res = await api.get(`/user-wishlist/${id}?page=${currentPage}&size=${sizeOfPage}`, {
            headers: {
                Authorization: token
            }
        });
        return res;
    } else {
        const res = await api.get(`/user-wishlist/${id}?returnIds=1`, {
            headers: {
                Authorization: token
            }
        });
        return res;
    }
}
// Navbar methods
async function getCity() {
    const res = await api.get(`/city`);
    return res;
}
async function getCondition() {
    const res = await api.get(`/condition`);
    return res;
}
async function getNavMenuData() {
    const res = await api.get(`/home/nav-categories`);
    return res;
}
async function getSearchSuggestions(search) {
    const res = await api.get(`/listings/search-suggestions?search=${search}`);
    return res;
}
async function getReservations(token, status) {
    const res = await api.get(`/reservation?status=${status}`, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function fetchModels(page, size, category_id, fParam) {
    let params = new URLSearchParams(fParam);
    let request = {
        params: params
    };
    let uri;
    if (category_id === 6) {
        // Fix the typo here, remove the extra '?'
        uri = `/model/${category_id}/all?${encodeURIComponent(`at_id=${params.get("at_id")}&page=${page}&size=${size}`)}`;
    } else {
        uri = `/model/${category_id}/all?page=${page}&size=${size}`;
    }
    const res = await api.get(uri, request);
    return res;
}
async function fetchAccessoriesType() {
    const res = await api.get(`/model/accessory-types`);
    return res;
}
async function fetchModelFilter(category_id, fParam) {
    let params = new URLSearchParams(fParam);
    params.delete("sort");
    let request = {
        params: params.size === 0 ? "" : params
    };
    const res = await api.get(`/model/filters/${category_id}`, request);
    return res;
}
async function fetchItem(model_id) {
    const res = await api.get(`/model/${model_id}`);
    return res;
}
async function fetchRecommendedModels(model_id) {
    const res = await api.get(`/model/${model_id}/related-models?page=1&size=10&criteria=mix`);
    return res;
}
async function fetchIsListingAvailableForModel(model_id) {
    const res = await api.get(`/model/${model_id}/related-listing`);
    return res;
}
async function fetchAllStores(page, size) {
    const res = await api.get(`/shop/all?page=${page}&size=${size}`);
    return res;
}


/***/ }),

/***/ 95458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86110);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89914);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31772);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77344);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21436);
/* harmony import */ var _styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68156);
/* harmony import */ var _styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _auth_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88971);
/* __next_internal_client_entry_do_not_use__ default auto */ 











function SignInModal(props) {
    const { googleLogin, navigate, fetchGoogleUserData } = (0,_auth_useAuth__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (fetchGoogleUserData.data) {
            props.onHide();
        }
    }, [
        fetchGoogleUserData.data
    ]);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default()), {
        ...props,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default().Body), {
            className: `d-grid  ${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modal)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: props.onHide,
                    className: `${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().cross)} cursor-pointer`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25",
                        height: "25",
                        viewBox: "0 0 25 25",
                        fill: "none",
                        role: "img",
                        className: "icon icon-24 lazyloaded",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                x: "3",
                                y: "5",
                                width: "18",
                                height: "16",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.5051 0.135254C14.9528 0.135152 17.3455 0.860879 19.3807 2.22066C21.416 3.58044 23.0022 5.51321 23.939 7.77453C24.8757 10.0359 25.1209 12.5242 24.6434 14.9248C24.166 17.3255 22.9873 19.5306 21.2566 21.2614C19.5259 22.9922 17.3207 24.1709 14.9201 24.6485C12.5195 25.126 10.0311 24.881 7.76979 23.9443C5.50843 23.0076 3.57561 21.4214 2.21576 19.3862C0.855913 17.3511 0.130107 14.9583 0.130127 12.5107C0.130141 9.22858 1.43392 6.08092 3.75467 3.76009C6.07542 1.43926 9.22304 0.135377 12.5051 0.135254V0.135254ZM7.13525 16.4156C6.9463 16.6101 6.84148 16.8711 6.84346 17.1423C6.84544 17.4135 6.95406 17.6729 7.14583 17.8647C7.3376 18.0564 7.59711 18.1649 7.86827 18.1668C8.13943 18.1687 8.40044 18.0638 8.59488 17.8748L12.4997 13.9699L16.4103 17.8805C16.6047 18.0698 16.8659 18.1749 17.1372 18.1731C17.4085 18.1712 17.6682 18.0626 17.8601 17.8707C18.0519 17.6788 18.1605 17.4191 18.1623 17.1478C18.164 16.8765 18.0589 16.6153 17.8695 16.421L13.9592 12.5106L17.8847 8.58516C18.072 8.39039 18.1754 8.12994 18.1727 7.85976C18.1701 7.58958 18.0616 7.33122 17.8705 7.14017C17.6795 6.94911 17.4211 6.8406 17.1509 6.83794C16.8808 6.83529 16.6203 6.93869 16.4255 7.12594L12.4997 11.051L8.57998 7.13125C8.38644 6.93769 8.12393 6.82894 7.8502 6.82892C7.57647 6.82891 7.31394 6.93763 7.12038 7.13118C6.92681 7.32472 6.81806 7.58724 6.81804 7.86097C6.81803 8.13469 6.92675 8.39722 7.1203 8.59078L11.0402 12.5106L7.13525 16.4156Z",
                                fill: "#979797"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9___default()), {
                    className: "p-0 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            md: 0,
                            lg: 5,
                            sm: 0,
                            className: ` h-100 bg-light  d-none justify-content-center d-lg-grid d-sm-none d-md-none align-items-center ${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().logoCol)}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "justify-content-center  d-grid ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            alt: "banner",
                                            className: "text-center",
                                            src: _public_images__WEBPACK_IMPORTED_MODULE_5__/* .tblogo */ .wP,
                                            width: 50,
                                            height: 50
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: "banner",
                                        className: "mb-0",
                                        src: _public_images__WEBPACK_IMPORTED_MODULE_5__/* .tblogoName */ .iP,
                                        width: 150,
                                        height: 30
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            md: 12,
                            lg: 7,
                            sm: 12,
                            className: ` h-100 justify-content-center d-grid align-items-center ${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().SignDiv)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerText)}`,
                                    children: "Already a TechBazaar User"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    onClick: ()=>{
                                        navigate(pathname);
                                        googleLogin();
                                    },
                                    className: "fs-14 w-100 py-3 mb-3 mt-3",
                                    variant: "dark",
                                    size: "lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "mx-2",
                                            height: 23,
                                            width: 23,
                                            src: "https://www.svgrepo.com/download/448227/google.svg"
                                        }),
                                        "Continue with Google"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().signup_content__line_break)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().divider)}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_SignInModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().signup_content__or)}`,
                                            children: "or"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    onClick: ()=>router.push("/login"),
                                    className: "fs-14 w-100 py-3 btn btn-outline-light",
                                    href: `/login?redirect=${pathname}`,
                                    size: "lg",
                                    children: "Continue with Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-4 d-flex justify-content-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            " Don't have an account? ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "link text-decoration-underline",
                                                href: "/signup",
                                                children: "Create an Account "
                                            }),
                                            " "
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInModal);


/***/ }),

/***/ 88971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70293);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63542);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33369);
/* harmony import */ var _app_apis_getApis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59023);
/* harmony import */ var _app_apis_postApis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12346);
/* harmony import */ var _store_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58843);
/* harmony import */ var _store_wishList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5347);
/* __next_internal_client_entry_do_not_use__ default auto */ 



 // Import the function for fetching user data



const useAuth = ()=>{
    const [Gtoken, setGToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [Ftoken, setFToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [Mtoken, setMToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { user, token, setUser, setToken, updatePhoneNumberOfUser } = (0,_store_User__WEBPACK_IMPORTED_MODULE_5__/* .useUserStore */ .L)((state)=>state);
    const { count, setWishlist } = (0,_store_wishList__WEBPACK_IMPORTED_MODULE_6__/* .useWishlistStore */ .Y)((store)=>store);
    const getToken = ()=>{
        return token;
    };
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("/");
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
    const param = new URLSearchParams(searchParam);
    param.delete("redirect");
    const path = searchParam.get("redirect");
    (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            "getUserByToken",
            token ? token : ""
        ],
        queryFn: ()=>(0,_app_apis_getApis__WEBPACK_IMPORTED_MODULE_3__/* .getUserByToken */ .TO)(token),
        enabled: !!token,
        onSuccess: (data)=>{
            setUser(data?.data?.body?.data);
        },
        onError: (err)=>{
            verifyToken();
            console.log(err);
        }
    });
    // useQuery({
    //   queryKey: ["queryForRefreshToken", Mtoken],
    //   queryFn: () => {
    //     refreshToken(Mtoken);
    //   },
    //   enabled: !!Mtoken,
    //   refetchInterval: 60000,
    //   onSuccess: (data: any, variables: any, context: any) => {
    //     localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
    //     setToken(data?.data?.body?.data?.accessToken);
    //   },
    //   onError: (err: any) => {
    //     console.log("error");
    //   },
    //   refetchOnWindowFocus:false
    // });
    const verifyToken = ()=>{
        const tokenLocallyUsed = token ? token :  false ? 0 : null;
        if (!tokenLocallyUsed) {
            setToken(null);
            return;
        }
        const tokenPart = tokenLocallyUsed.split(".")[1];
        if (!tokenPart) {
            setToken(null);
            return;
        }
        const base64 = tokenPart.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        const payload = JSON.parse(jsonPayload);
        if (!payload) {
            setToken(null);
            return;
        }
        if (!payload.exp) {
            setToken(null);
            return;
        }
        const expirationTime = payload.exp * 1000; // Convert expiration time to milliseconds
        const currentTime = Date.now(); // Get current time in milliseconds
        if (currentTime < expirationTime) {
            setToken(tokenLocallyUsed);
        } else {
            const refreshToken =  false ? 0 : null;
            if (!refreshToken) {
                setToken(null);
                return;
            } else {
                setMToken(refreshToken);
            }
        }
    };
    const signupMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__/* .useMutation */ .D)({
        mutationFn: _app_apis_postApis__WEBPACK_IMPORTED_MODULE_4__/* .SignupUser */ .nL,
        onSuccess: (data, variables, context)=>{
            localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
            localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
            setToken(data?.data?.body?.data?.accessToken);
            setUser(data?.data?.body?.data?.user);
            router.push(`/login`);
        // Boom baby!
        }
    });
    const getSignup = ()=>{
        return {
            ...signupMutation
        };
    };
    const manualLoginMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__/* .useMutation */ .D)({
        mutationFn: _app_apis_postApis__WEBPACK_IMPORTED_MODULE_4__/* .SigninUser */ .sm,
        onSuccess: (data, variables, context)=>{
            localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
            localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
            setUser(data?.data?.body?.data?.user);
            setToken(data?.data?.body?.data?.accessToken);
            setMToken(data?.data?.body?.data?.accessToken);
            if (path === null) {
                router.push("/");
            } else {
                router.push(`${path}${param}`);
            }
        // Boom baby!
        }
    });
    const setPhoneNumberMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__/* .useMutation */ .D)({
        mutationFn: (data)=>(0,_app_apis_postApis__WEBPACK_IMPORTED_MODULE_4__/* .UpdateUser */ .Rl)(data, token),
        onSuccess: (data, variables, context)=>{
            updatePhoneNumberOfUser(variables.customer_number);
        // Boom baby!
        }
    });
    const getSetPhoneNumber = ()=>{
        return {
            ...setPhoneNumberMutation
        };
    };
    const googleLogin = (0,_react_oauth_google__WEBPACK_IMPORTED_MODULE_0__/* .useGoogleLogin */ .Nq)({
        onSuccess: (codeResponse)=>{
            setGToken(codeResponse.access_token);
        },
        onError: (error)=>console.log("Login Failed:", error)
    });
    const navigate = (url)=>{
        setUrl(url);
    };
    const fetchGoogleUserData = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            "user",
            Gtoken
        ],
        queryFn: ()=>(0,_app_apis_getApis__WEBPACK_IMPORTED_MODULE_3__/* .fetchGoogleUser */ .y5)(Gtoken),
        onSuccess: (data)=>{
            localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
            localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
            setUser(data?.data?.body?.data?.user);
            setToken(data?.data?.body?.data?.accessToken);
            if (searchParam.get("redirect") === null) {} else if (pathname === "/login" && searchParam.get("redirect") === null) {
                router.push(`/`);
            } else {
                router.push(`${path}${param}`);
            }
        },
        enabled: !!Gtoken
    });
    const fetchFacebookUserData = (Ftoken)=>{
        setFToken(Ftoken);
    };
    (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            "user",
            Ftoken
        ],
        queryFn: ()=>(0,_app_apis_getApis__WEBPACK_IMPORTED_MODULE_3__/* .fetchFacebookUser */ .Ff)(Ftoken),
        onSuccess: (data)=>{
            localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
            localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
            setToken(data?.data?.body?.data?.accessToken);
            setUser(data?.data?.body?.data?.user);
            if (path === null) {
                router.push(`/`);
            } else {
                router.push(`${path}${param}`);
            }
        },
        enabled: !!Ftoken
    });
    const Logout = ()=>{
        if (false) {} else {
            return false;
        }
    };
    // useEffect(() => {
    //   if (!token && !user) {
    //     verifyToken();
    //   }
    // }, [Logout]);
    (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            "getUserWishlist",
            user,
            count
        ],
        queryFn: ()=>(0,_app_apis_getApis__WEBPACK_IMPORTED_MODULE_3__/* .getUserWishlist */ .AH)(token, user?.uuid),
        enabled: !!user,
        onSuccess: (data)=>{
            setWishlist(data.data.body.data.data);
        }
    });
    return {
        getToken,
        googleLogin,
        manualLoginMutation,
        navigate,
        Logout,
        verifyToken,
        fetchFacebookUserData,
        fetchGoogleUserData,
        getSetPhoneNumber,
        signupMutation
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);


/***/ }),

/***/ 5347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useWishlistStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13998);
/* harmony import */ var zukeeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11168);


const useWishlistStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue)((0,zukeeper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((set)=>({
        wishlistItems: [],
        count: 0,
        addToWishlist: (item)=>set((state)=>({
                    ...state,
                    wishlistItems: [
                        ...state.wishlistItems,
                        item
                    ],
                    count: state.count + 1
                })),
        removeFromWishlist: (item)=>set((state)=>{
                return {
                    ...state,
                    wishlistItems: state.wishlistItems.filter((fav)=>fav !== item),
                    count: state.count - 1
                };
            }),
        setWishlist: (items)=>set((state)=>({
                    ...state,
                    wishlistItems: items,
                    count: items.length
                }))
    })));


/***/ }),

/***/ 68156:
/***/ ((module) => {

// Exports
module.exports = {
	"SignDiv": "SignInModal_SignDiv__fg8YY",
	"bannerText": "SignInModal_bannerText__qKZkW",
	"signup_content__line_break": "SignInModal_signup_content__line_break__jLGDT",
	"divider": "SignInModal_divider__JVJVT",
	"signup_content__or": "SignInModal_signup_content__or__4OjbM",
	"modal": "SignInModal_modal__Orrns",
	"cross": "SignInModal_cross__GmqPK"
};


/***/ })

};
;