"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 12346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AW: () => (/* binding */ removeFromWishList),
/* harmony export */   Gy: () => (/* binding */ SendEmail),
/* harmony export */   Qb: () => (/* binding */ deleteAccountRequest),
/* harmony export */   Rl: () => (/* binding */ UpdateUser),
/* harmony export */   d4: () => (/* binding */ BeocmeSeller),
/* harmony export */   en: () => (/* binding */ UpdateListingViews),
/* harmony export */   nL: () => (/* binding */ SignupUser),
/* harmony export */   s3: () => (/* binding */ addToWishList),
/* harmony export */   sm: () => (/* binding */ SigninUser),
/* harmony export */   y3: () => (/* binding */ ReserveItem)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);
/* harmony import */ var _utility_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18148);


const api = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: _utility_env__WEBPACK_IMPORTED_MODULE_1__/* .marketplaceUrl */ .r5
});
async function SignupUser(data) {
    const res = await api.post(`/auth/signup`, data);
    return res;
}
async function SigninUser(data) {
    const res = await api.post(`/auth/login`, data);
    return res;
}
async function UpdateUser(data, token) {
    const res = await api.put(`/auth/update-user/${data.customer_id}`, {
        phone_number: data.customer_number
    }, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function ReserveItem(data, token) {
    const res = await api.post(`/reservation`, data?.data, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function BeocmeSeller(data) {
    const res = await api.post(`/become-seller`, data);
    return res;
}
async function SendEmail(data, token) {
    const { name, email, phone, message, recaptchaValue } = data.formData;
    await api.post(data.listingId === undefined ? `/shop/lead/${data.storeUsername}` : `/listings/lead/${data.storeUsername}/${data.listingId}`, {
        name: name,
        email: email,
        phone: phone,
        message: message,
        token: data.formData.token
    }, {
        headers: {
            Authorization: token
        }
    });
}
async function UpdateListingViews(data) {
    const { fk_listing_id, fk_user_id } = data;
    const requestBody = fk_user_id ? {
        fk_listing_id,
        fk_user_id
    } : {
        fk_listing_id
    };
    const res = await api.post(`/listing-views`, requestBody);
    return res;
}
async function addToWishList(data, token) {
    const res = await api.post(`/user-wishlist`, data, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function removeFromWishList(data, token) {
    const res = await api.delete(`/user-wishlist/${data}`, {
        headers: {
            Authorization: token
        }
    });
    return res;
}
async function deleteAccountRequest(deletion_reason, token) {
    const res = await api.post(`/user-deletion-requests`, deletion_reason, {
        headers: {
            Authorization: token
        }
    });
    return res;
}


/***/ }),

/***/ 58843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useUserStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13998);

const useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue)((set)=>({
        user: null,
        token: null,
        setUser: (user)=>{
            set((oldState)=>({
                    ...oldState,
                    user
                }));
        },
        setToken: (token)=>{
            set((oldState)=>({
                    ...oldState,
                    token
                }));
        },
        updatePhoneNumberOfUser: (phoneNumber)=>{
            set((oldUser)=>({
                    ...oldUser,
                    user: {
                        ...oldUser.user,
                        phone_number: phoneNumber
                    }
                }));
        }
    }));



/***/ }),

/***/ 18148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Og: () => (/* binding */ marketplaceWeb),
/* harmony export */   SC: () => (/* binding */ googleMapsKey),
/* harmony export */   r5: () => (/* binding */ marketplaceUrl)
/* harmony export */ });
const marketplaceUrl = "https://uat.api-marketplace.techbazaar.pk/api";
const googleMapsKey = "AIzaSyAbR84bxhw_nwO2B55Dv5DwtLcU9K2D20Y";
const marketplaceWeb = "https://uat.techbazaar.pk/";


/***/ })

};
;