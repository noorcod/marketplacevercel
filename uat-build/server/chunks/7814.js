exports.id = 7814;
exports.ids = [7814];
exports.modules = {

/***/ 57771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86110);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40049);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89071);
/* harmony import */ var _styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4__);






const LoadingCard = ({ recomended })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: `ms-2 ${recomended ? "" : "w-100 "}`,
            style: {
                width: "17rem",
                border: " 1px solid #D8E4F8"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().skeleton)} ${(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cover)} `,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        style: recomended ? {
                            width: "271px"
                        } : {
                            width: "100%"
                        },
                        // width = {recomended ? 271 : "100%"}
                        width: 0,
                        height: 0,
                        src: "https://www.bolnews.com/wp-content/uploads/2021/12/FotoJet-27-2.jpg",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Title), {
                            className: "mb-0 ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `fs-18 fw-700  mb-0 ${(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().skeleton)}`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `mb-0 ${(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().skeleton)} mt-3 w-50 `
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex align-items-baseline  "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                            className: `w-100 py-3 mb-2 ${(_styles_LoadingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().skeleton)}`,
                            variant: "secondary"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingCard);


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

/***/ 34729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86110);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89914);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94257);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31772);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77344);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40667);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88971);
/* harmony import */ var _store_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58843);










function PhoneNumberModal(props) {
    const { token, user } = (0,_store_User__WEBPACK_IMPORTED_MODULE_4__/* .useUserStore */ .L)((state)=>state);
    const { getSetPhoneNumber } = (0,_auth_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setValidated(true);
        let obj = {
            customer_number: number,
            customer_id: user?.uuid
        };
        if (number.length > 3 && number.length === 14) {
            getSetPhoneNumber().mutate(obj, {
                onSuccess: ()=>{
                    props.onHide("success");
                    setNumber("");
                },
                onError: (error)=>{
                    if (error.response.status === 400) {
                        setError("Phone number is already registered");
                    }
                // Handle other errors here
                }
            });
        }
    };
    const handleChange = (e)=>{
        e.preventDefault();
        const unmaskedValue = e.target.value.replace(/\D/g, "");
        const formattedValue = formatPhoneNumber(unmaskedValue);
        setNumber(formattedValue);
    };
    const formatPhoneNumber = (rawNumber)=>{
        if (rawNumber.length >= 4) {
            return `+92-${rawNumber.substring(3, 6)}-${rawNumber.substring(6)}`;
        }
        return `${rawNumber}`;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default()), {
            ...props,
            size: "sm",
            backdrop: "static",
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: true,
            keyboard: false,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-between align-items-center me-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default().Header), {
                            children: "Enter your phone number"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: props.onHide,
                            className: `cursor-pointer`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "25",
                                height: "25",
                                viewBox: "0 0 25 25",
                                fill: "none",
                                role: "img",
                                className: "icon icon-24 lazyloaded",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M12.5051 0.135254C14.9528 0.135152 17.3455 0.860879 19.3807 2.22066C21.416 3.58044 23.0022 5.51321 23.939 7.77453C24.8757 10.0359 25.1209 12.5242 24.6434 14.9248C24.166 17.3255 22.9873 19.5306 21.2566 21.2614C19.5259 22.9922 17.3207 24.1709 14.9201 24.6485C12.5195 25.126 10.0311 24.881 7.76979 23.9443C5.50843 23.0076 3.57561 21.4214 2.21576 19.3862C0.855913 17.3511 0.130107 14.9583 0.130127 12.5107C0.130141 9.22858 1.43392 6.08092 3.75467 3.76009C6.07542 1.43926 9.22304 0.135377 12.5051 0.135254V0.135254ZM7.13525 16.4156C6.9463 16.6101 6.84148 16.8711 6.84346 17.1423C6.84544 17.4135 6.95406 17.6729 7.14583 17.8647C7.3376 18.0564 7.59711 18.1649 7.86827 18.1668C8.13943 18.1687 8.40044 18.0638 8.59488 17.8748L12.4997 13.9699L16.4103 17.8805C16.6047 18.0698 16.8659 18.1749 17.1372 18.1731C17.4085 18.1712 17.6682 18.0626 17.8601 17.8707C18.0519 17.6788 18.1605 17.4191 18.1623 17.1478C18.164 16.8765 18.0589 16.6153 17.8695 16.421L13.9592 12.5106L17.8847 8.58516C18.072 8.39039 18.1754 8.12994 18.1727 7.85976C18.1701 7.58958 18.0616 7.33122 17.8705 7.14017C17.6795 6.94911 17.4211 6.8406 17.1509 6.83794C16.8808 6.83529 16.6203 6.93869 16.4255 7.12594L12.4997 11.051L8.57998 7.13125C8.38644 6.93769 8.12393 6.82894 7.8502 6.82892C7.57647 6.82891 7.31394 6.93763 7.12038 7.13118C6.92681 7.32472 6.81806 7.58724 6.81804 7.86097C6.81803 8.13469 6.92675 8.39722 7.1203 8.59078L11.0402 12.5106L7.13525 16.4156Z",
                                    fill: "#979797"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default().Body), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default()), {
                        onSubmit: handleSubmit,
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Group), {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Label), {
                                        className: "mb-1",
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "w-100",
                                        mask: "+\\92-399-9999999",
                                        value: number,
                                        onChange: handleChange,
                                        name: "customer_number",
                                        required: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control), {
                                            isValid: validated && number.length === 14,
                                            isInvalid: validated && number.length < 14,
                                            minLength: 14,
                                            className: "border-dark w-75",
                                            placeholder: "+92-3XX-XXXXXXX",
                                            type: "tel",
                                            required: true
                                        })
                                    }),
                                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-danger fs-6",
                                        children: error
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Control).Feedback, {
                                        type: "invalid",
                                        children: "* Please Enter Valid Phone Number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                                className: "mt-4 d-flex justify-content-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    className: "d-flex justify-content-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        type: "submit",
                                        variant: "dark",
                                        className: "btn w-75 py-2",
                                        children: "Submit"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneNumberModal);


/***/ }),

/***/ 27264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_ReserveDetails)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Button.js
var Button = __webpack_require__(86110);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Col.js
var Col = __webpack_require__(89914);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Form.js
var Form = __webpack_require__(94257);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Modal.js
var Modal = __webpack_require__(31772);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Row.js
var Row = __webpack_require__(77344);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useMutation.mjs + 1 modules
var useMutation = __webpack_require__(33369);
// EXTERNAL MODULE: ./src/app/apis/postApis.ts
var postApis = __webpack_require__(12346);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(113);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.cjs.js
var sweetalert2_react_content_cjs = __webpack_require__(95600);
var sweetalert2_react_content_cjs_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content_cjs);
// EXTERNAL MODULE: ./src/components/SignInModal.tsx
var SignInModal = __webpack_require__(95458);
// EXTERNAL MODULE: ./src/components/PhoneNumberModal.tsx
var PhoneNumberModal = __webpack_require__(34729);
// EXTERNAL MODULE: ./src/store/User.ts
var User = __webpack_require__(58843);
;// CONCATENATED MODULE: ./src/components/auth/withModalAuth.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const withModalAuth = (WrappedComponent)=>{
    return (props)=>{
        const { user, token } = (0,User/* useUserStore */.L)((state)=>state);
        const [signInModal, setSignInModal] = (0,react_.useState)(false);
        const [phoneNumberModal, setphoneNumberModal] = (0,react_.useState)(false);
        (0,react_.useEffect)(()=>{
            if (token) {
                setSignInModal(false);
            } else {
                if ("show" in props && props.show === true) {
                    setSignInModal(true);
                } else {
                    setSignInModal(false);
                }
            }
        }, [
            token,
            props
        ]);
        (0,react_.useEffect)(()=>{
            if (token && user) {
                if ("phone_number" in user) {
                    const { phone_number } = user;
                    if (phone_number === null && "show" in props && props.show === true) {
                        setphoneNumberModal(true);
                    }
                }
            }
        }, [
            token,
            user,
            props
        ]);
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: !token ? /*#__PURE__*/ jsx_runtime_.jsx(SignInModal/* default */.Z, {
                title: " To Reserve this item, please create an account.",
                show: signInModal,
                onHide: ()=>{
                    setSignInModal(false);
                    if ("onHide" in props && typeof props.onHide === "function") {
                        props?.onHide(false);
                    }
                }
            }) : phoneNumberModal ? /*#__PURE__*/ jsx_runtime_.jsx(PhoneNumberModal/* default */.Z, {
                show: phoneNumberModal,
                onHide: (response)=>{
                    setphoneNumberModal(false);
                    if (response !== "success") {
                        if ("onHide" in props && typeof props.onHide === "function") {
                            props?.onHide(true);
                        }
                    }
                }
            }) : /*#__PURE__*/ jsx_runtime_.jsx(WrappedComponent, {
                ...props
            })
        });
    };
};
/* harmony default export */ const auth_withModalAuth = (withModalAuth);

;// CONCATENATED MODULE: ./src/components/ReserveDetails.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












const ReserveDetails = (props)=>{
    const [validated, setValidated] = (0,react_.useState)(false);
    const [initialValues, setInitialValues] = (0,react_.useState)({
        quantity: undefined,
        note: ""
    });
    const onHide = (e)=>{
        setValidated(false);
        setInitialValues({
            quantity: undefined,
            note: ""
        });
        props.onHide(e);
    };
    const { user, token } = (0,User/* useUserStore */.L)((state)=>state);
    const MySwal = sweetalert2_react_content_cjs_default()((sweetalert2_all_default()));
    const mutation = (0,useMutation/* useMutation */.D)({
        mutationFn: (data)=>(0,postApis/* ReserveItem */.y3)(data, token),
        onSuccess: (data, variables, context)=>{
            setValidated(false);
            MySwal.fire({
                title: "Request Sent Successfully!",
                html: "Request for reserve product sent !",
                icon: "success",
                showConfirmButton: false,
                timer: 5000
            });
            setTimeout(()=>{
                MySwal.close();
            }, 5000);
            onHide(undefined);
        },
        onError: (error)=>{
            // setIsValidate(true);
            switch(error.response.status){
                case 500:
                    error.message = "Unfortunately, there was a problem in sending your email";
                    break;
                case 409:
                    error.message = error.response.data.body.message;
            }
            setValidated(true);
            sweetalert2_all_default().fire({
                title: "Sorry",
                text: error.message,
                icon: "error",
                showConfirmButton: false,
                timer: 5000
            });
        }
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setInitialValues({
            ...initialValues,
            [name]: value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const obj = {
            data: {
                customer_name: user?.first_name,
                customer_email: user?.email,
                fk_customer_id: user?.uuid,
                customer_number: user?.phone_number.replace("+92", "0").replace(/-/g, ""),
                status: "Pending",
                quantity: Number(initialValues.quantity),
                shop_id: props?.reserveData?.shop_id,
                location_id: props?.reserveData?.locationId,
                item_id: props?.reserveData?.itemId,
                notes: initialValues.note,
                listing_id: props?.reserveData?.listingId
            },
            token: token
        };
        setValidated(true);
        if (initialValues.note.length > 4 && initialValues.quantity !== undefined && initialValues.quantity > 0 && initialValues.quantity <= props.reserveData.listedQuantity) {
            console.log("Hello");
            mutation.mutate(obj);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
        ...props,
        size: "md",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        onHide: onHide,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                closeButton: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                    className: "py-2",
                    id: "contained-modal-title-vcenter",
                    children: "Send us reserve details"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
                    noValidate: true,
                    validated: validated,
                    onSubmit: handleSubmit,
                    className: "p-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Label, {
                                    className: "mb-1",
                                    children: [
                                        "Quantity ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-danger ",
                                            children: "*"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                    name: "quantity",
                                    onChange: handleChange,
                                    type: "number",
                                    value: initialValues.quantity,
                                    required: true,
                                    className: "ps-3 py-2",
                                    placeholder: "e.g. 1",
                                    min: 1,
                                    max: props.reserveData.listedQuantity
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control.Feedback, {
                                    type: "invalid",
                                    children: initialValues.quantity > props.reserveData.listedQuantity ? "* Not enough stock is available" : "* Invalid Quantity"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Label, {
                                    className: "mb-1",
                                    children: [
                                        "Reserve request details ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-danger ",
                                            children: "*"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                    required: true,
                                    value: initialValues.note,
                                    name: "note",
                                    onChange: handleChange,
                                    className: "ps-3 py-2",
                                    as: "textarea",
                                    rows: 3,
                                    minLength: 5,
                                    maxLength: 250,
                                    placeholder: "Enter details...",
                                    isInvalid: validated && (initialValues.note.length <= 4 || initialValues.note.length > 249),
                                    isValid: validated && initialValues.note.length > 4 && initialValues.note.length < 249
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control.Feedback, {
                                    type: "invalid",
                                    children: "* Message must be 5 to 250 characters long."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Col["default"], {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        type: "submit",
                                        className: "btn-primary w-100 py-2",
                                        children: "Reserve"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Col["default"], {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        className: "w-100 py-2 btn-outline-light",
                                        onClick: onHide,
                                        children: "Cancel"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_ReserveDetails = (auth_withModalAuth(ReserveDetails));


/***/ }),

/***/ 7814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Wo: () => (/* reexport */ LoadingCard/* default */.Z),
  lb: () => (/* reexport */ components_MobileSideFilter),
  Il: () => (/* reexport */ components_ProductCard),
  RH: () => (/* reexport */ components_SideFilters)
});

// UNUSED EXPORTS: Layout, Sidebar

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/icons/index.js + 47 modules
var icons = __webpack_require__(19857);
// EXTERNAL MODULE: ./src/components/auth/useAuth.ts
var auth_useAuth = __webpack_require__(88971);
// EXTERNAL MODULE: ./src/store/User.ts
var User = __webpack_require__(58843);
// EXTERNAL MODULE: ./src/store/wishList.ts
var wishList = __webpack_require__(5347);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/components/Topbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












const Topbar_Topbar = ({ handleOpenReservationOffcanvas, handleOpenWishlistOffcanvas })=>{
    const router = useRouter();
    const { user, token } = useUserStore((state)=>state);
    const pathname = usePathname();
    const { wishlistItems, count } = useWishlistStore((list)=>list);
    const { verifyToken, Logout } = useAuth();
    useEffect(()=>{
        if (!token) {
            verifyToken();
        }
    }, [
        token
    ]);
    return /*#__PURE__*/ _jsx("main", {
        className: "main",
        children: /*#__PURE__*/ _jsxs(Row, {
            className: `py-2 ${style.banner} border-bottom`,
            children: [
                /*#__PURE__*/ _jsxs(Col, {
                    className: `d-flex align-items-center px-0 gap-2 ${style.bannerText}`,
                    children: [
                        /*#__PURE__*/ _jsx(Image, {
                            className: style.announcement,
                            src: announcement,
                            alt: "announcement",
                            width: 20,
                            height: 20
                        }),
                        /*#__PURE__*/ _jsxs("span", {
                            children: [
                                "TechBazaar - Connecting Tech Retailers with Tech Lovers",
                                " ",
                                /*#__PURE__*/ _jsx(Link, {
                                    className: "link text-decoration-underline",
                                    href: "https://techbazaar.io/",
                                    children: "Know more"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Col, {
                    className: ` align-items-center justify-content-end pe-0 gap-3 ${style.rightBanner}`,
                    children: [
                        token ? // <Link href={"/wishlist"}>
                        /*#__PURE__*/ _jsxs("div", {
                            className: "d-flex ms-3 align-items-center gap-2 cursor-pointer",
                            onClick: handleOpenWishlistOffcanvas,
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "d-sm-inline d-none",
                                    children: "Wishlist"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "position-relative",
                                    style: {
                                        width: "20px",
                                        height: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(Image, {
                                            src: favourite,
                                            alt: "favourite",
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "position-absolute bg-white",
                                            style: {
                                                top: "0",
                                                right: "-50%",
                                                borderRadius: "50%",
                                                width: "20px",
                                                height: "20px",
                                                textAlign: "center",
                                                justifyContent: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                boxShadow: "0 0 1px black"
                                            },
                                            children: /*#__PURE__*/ _jsx("span", {
                                                className: "link",
                                                style: {
                                                    fontSize: "11px"
                                                },
                                                children: wishlistItems.length
                                            })
                                        })
                                    ]
                                })
                            ]
                        }) : // </Link>
                        /*#__PURE__*/ _jsx(_Fragment, {}),
                        /*#__PURE__*/ _jsx("div", {
                            children: token ? /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsxs(Dropdown, {
                                        className: "picon px-0",
                                        children: [
                                            /*#__PURE__*/ _jsxs(Dropdown.Toggle, {
                                                className: "px-0 d-flex align-items-center gap-2",
                                                variant: "",
                                                id: "dropdown-basic",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            width: "20px",
                                                            height: "20px"
                                                        },
                                                        children: /*#__PURE__*/ _jsx(Image, {
                                                            src: userIcon,
                                                            alt: "user",
                                                            style: {
                                                                width: "100%",
                                                                height: "100%"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "d-sm-inline",
                                                        children: user?.first_name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Dropdown.Menu, {
                                                children: [
                                                    /*#__PURE__*/ _jsx(Dropdown.Item, {
                                                        as: "span",
                                                        className: "cursor-pointer",
                                                        onClick: handleOpenReservationOffcanvas,
                                                        children: "Reservations"
                                                    }),
                                                    /*#__PURE__*/ _jsx(Dropdown.Divider, {}),
                                                    /*#__PURE__*/ _jsx(Dropdown.Item, {
                                                        onClick: ()=>{
                                                            Logout();
                                                        },
                                                        children: "Logout"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    " "
                                ]
                            }) : /*#__PURE__*/ _jsx(Link, {
                                href: `/login?redirect=${pathname}`,
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "d-flex align-items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "d-flex align-items-center",
                                            style: {
                                                width: "20px",
                                                height: "20px"
                                            },
                                            children: /*#__PURE__*/ _jsx(Image, {
                                                src: userIcon,
                                                alt: "user",
                                                style: {
                                                    width: "100%",
                                                    height: "100%"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "d-sm-inline",
                                            children: "Sign In"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Topbar = ((/* unused pure expression or super */ null && (Topbar_Topbar)));

// EXTERNAL MODULE: ./public/images/index.js
var public_images = __webpack_require__(21436);
;// CONCATENATED MODULE: ./src/components/Footer.tsx










const Footer_Footer = ()=>{
    const router = useRouter();
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData([
        "viewList"
    ]);
    return /*#__PURE__*/ _jsxs("footer", {
        className: "main ",
        children: [
            /*#__PURE__*/ _jsxs(Row, {
                className: `${styles.footerRow} p-2`,
                children: [
                    /*#__PURE__*/ _jsx(Col, {
                        lg: "12",
                        className: "px-0  d-none d-lg-block",
                        children: /*#__PURE__*/ _jsx("hr", {
                            className: `w-100 mt-0  ${styles.separator}`
                        })
                    }),
                    /*#__PURE__*/ _jsx(Col, {
                        xs: "12",
                        sm: "4",
                        md: "4",
                        lg: "12",
                        className: "px-0 pt-lg-0 pt-4",
                        children: /*#__PURE__*/ _jsxs(Row, {
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ _jsx(Col, {
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "2",
                                    children: /*#__PURE__*/ _jsx("h6", {
                                        className: "pb-lg-0 pb-4 mb-lg-0 mb-1",
                                        children: "Seller Point"
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Col, {
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "7",
                                    children: /*#__PURE__*/ _jsx("p", {
                                        className: `fst-italic fs-15 mb-4 mb-lg-0 ${styles.footerText}`,
                                        children: `If you wish to join TechBazaar as a seller, then click here to begin your seller journey.`
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Col, {
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "3",
                                    className: "text-lg-end",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: "/become-seller",
                                        children: /*#__PURE__*/ _jsx(Button, {
                                            className: `${styles.sellerBtn} rounded-2`,
                                            variant: "outline-primary",
                                            children: "Become a seller"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Col, {
                        lg: "12",
                        className: "px-0 d-none d-lg-block",
                        children: /*#__PURE__*/ _jsx("hr", {
                            className: `w-100 my-4 ${styles.separator}`
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Col, {
                        xs: "12",
                        sm: "4",
                        md: "4",
                        lg: "3",
                        className: "px-0 ps-0 ps-lg-0  pt-lg-0 pt-4 text-center d-flex flex-column  align-items-center ",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "pb-lg-0 pb-3 mb-0 text-uppercase ",
                                children: " A product by ."
                            }),
                            /*#__PURE__*/ _jsx(Image, {
                                className: "img-fluid",
                                alt: "ultracodes",
                                src: ultracodesLogo,
                                width: 180,
                                height: 150
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Col, {
                        xs: "12",
                        sm: "4",
                        md: "4",
                        lg: "4",
                        className: "px-0 ps-lg-5 pt-lg-0 pt-4",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "pb-lg-0",
                                children: "Techbazaar"
                            }),
                            /*#__PURE__*/ _jsxs("ul", {
                                className: `${styles.footerLinks}`,
                                children: [
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/about-us",
                                            as: "/about-us",
                                            shallow: true,
                                            children: "About Us"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/store",
                                            as: "/store",
                                            children: "Stores"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/specs",
                                            as: "/specs",
                                            children: "Specs"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/contact-us",
                                            as: "/contact-us",
                                            children: "Contact us"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/privacy-policy",
                                            as: "/privacy-policy",
                                            children: "Privacy Policy"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Col, {
                        md: "12",
                        className: "px-0 d-block d-lg-none",
                        children: /*#__PURE__*/ _jsx("hr", {
                            className: `w-100 my-4 ${styles.separator}`
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Col, {
                        xs: "12",
                        sm: "6",
                        md: "6",
                        lg: "5",
                        className: "px-0",
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                className: "img-fluid",
                                src: tblogoName,
                                alt: "logo",
                                width: 110,
                                height: 30
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Our primary mission is to digitally transform the retail tech industry by bridging the gap between tech retailers and potential customers."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex gap-2 mt-4",
                                children: [
                                    /*#__PURE__*/ _jsx(Image, {
                                        className: "cursor-pointer",
                                        onClick: ()=>{
                                            window.open("https://www.facebook.com/techbazaar.com.pk?mibextid=LQQJ4d", "_blank");
                                        },
                                        src: facebook,
                                        alt: "facebook",
                                        width: 22,
                                        height: 23
                                    }),
                                    /*#__PURE__*/ _jsx(Image, {
                                        onClick: ()=>{
                                            window.open("https://www.youtube.com/@TechBazaar-bl5nl", "_blank");
                                        },
                                        className: "cursor-pointer",
                                        src: youtube,
                                        alt: "youtube",
                                        width: 22,
                                        height: 23
                                    }),
                                    /*#__PURE__*/ _jsx(Image, {
                                        onClick: ()=>{
                                            window.open("https://www.instagram.com/techbazaar.com.pk/", "_blank");
                                        },
                                        className: "cursor-pointer",
                                        src: instagram,
                                        alt: "instagram",
                                        width: 22,
                                        height: 23
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx("hr", {
                    className: `w-100 my-4 ${styles.separator}`
                })
            }),
            /*#__PURE__*/ _jsxs("p", {
                className: "text-center fs-12",
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Techbazaar. All Rights Reserved."
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = ((/* unused pure expression or super */ null && (Footer_Footer)));

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(78195);
// EXTERNAL MODULE: ./src/app/apis/getApis.ts
var getApis = __webpack_require__(59023);
;// CONCATENATED MODULE: ./src/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 























const navImageMap = {
    LAPTOP: icons/* navLaptopIcon */.iL,
    ACCESSORY: icons/* navAccessoryIcon */.OS,
    "TV MONITOR": icons/* navLEDIcon */.Ts,
    TABLET: icons/* navTabletIcon */.zk,
    DESKTOP: icons/* navDesktopIcon */.li,
    MOBILE: icons/* navMobileIcon */.pE
};
const capitalizeText = (text)=>{
    const words = text.split(" ");
    const newWords = words.map((value)=>{
        return value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase();
    });
    return newWords.join(" ");
};
const Header_Header = ({ sandwichTriger, navData, handleOpenReservationOffcanvas, showClassicNav = false, handleOpenWishlistOffcanvas })=>{
    // const [active, setActive] = useState<any>();
    // const [navActive, setNavActive] = useState<any>();
    const { Logout } = useAuth();
    const { user, token } = useUserStore((state)=>state);
    const { wishlistItems, count } = useWishlistStore((list)=>list);
    const [smallScreenSearchShow, setSmallScreenSearchShow] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    return /*#__PURE__*/ _jsxs("div", {
        className: `${pathname === "/" ? styles.navContainer : ""} border-bottom  `,
        children: [
            /*#__PURE__*/ _jsx("main", {
                className: `main`,
                children: /*#__PURE__*/ _jsx("div", {
                    bg: "white",
                    className: ` ${styles.nav_bar}`,
                    expand: "lg",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex  justify-content-between align-items-center w-100",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex align-items-center p-0",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: `ps-3 pt-2 pe-2 d-lg-none    pb-2 text-center ${styles.hamburger} border-end`,
                                        onClick: ()=>{
                                            sandwichTriger();
                                        },
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            className: "me-2",
                                            alt: "hamburger",
                                            src: hanburger,
                                            height: "15",
                                            width: 18
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Link, {
                                        href: "/",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "d-flex  flex-nowrap ps-3",
                                            children: [
                                                /*#__PURE__*/ _jsx(Image, {
                                                    className: `me-2 ${styles.tblogo} `,
                                                    src: tblogo,
                                                    alt: "Logo",
                                                    height: "32",
                                                    width: 30
                                                }),
                                                /*#__PURE__*/ _jsx(Image, {
                                                    className: ` d-lg-inline d-md-inline d-none d-sm-inline ${styles.tblogoName}`,
                                                    src: tblogoName,
                                                    alt: "Logo name",
                                                    height: 30,
                                                    width: 135
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            pathname === "/" ? /*#__PURE__*/ _jsxs(Navbar, {
                                as: motion.div,
                                initial: {
                                    y: -10,
                                    opacity: 0
                                },
                                whileInView: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                },
                                className: `d-none ${showClassicNav ? "d-lg-flex" : ""} w-100 ps-3 d-flex justify-content-end`,
                                id: "classicNavbar",
                                children: [
                                    /*#__PURE__*/ _jsx(Navbar.Toggle, {
                                        "aria-controls": "navbarScroll"
                                    }),
                                    /*#__PURE__*/ _jsx(Navbar.Collapse, {
                                        className: `${styles.navrow}`,
                                        id: "navbarScroll",
                                        children: /*#__PURE__*/ _jsxs(Nav, {
                                            className: "me-auto my-2 my-lg-0",
                                            style: {
                                                maxHeight: "100px"
                                            },
                                            navbarScroll: true,
                                            children: [
                                                navData && navData.map((category, index)=>/*#__PURE__*/ _jsxs(NavDropdown, {
                                                        as: "span",
                                                        title: capitalizeText(category.label),
                                                        className: `w-100 text-capitalize ${styles.homeNavitem} ${styles.navitemActive} `,
                                                        id: `NavItemLink${index}`,
                                                        children: [
                                                            category.brands.map((brand, index)=>/*#__PURE__*/ _jsx(NavDropdown.Item, {
                                                                    as: Link,
                                                                    className: `d-grid  pb-3 ${styles.nav_content} ${(index + 1) % 7 === 0 ? "" : styles.nav_border} ${brand.has_items === 0 ? styles.disabledNavItem : ""}`,
                                                                    href: brand.has_items === 0 ? "#" : `/products?${createParams([
                                                                        [
                                                                            "brand_ids",
                                                                            `[${brand.id}]`
                                                                        ],
                                                                        [
                                                                            "category_id",
                                                                            category.id
                                                                        ]
                                                                    ])}`,
                                                                    children: /*#__PURE__*/ _jsxs(motion.span, {
                                                                        initial: {
                                                                            y: "10px",
                                                                            opacity: 0
                                                                        },
                                                                        whileInView: {
                                                                            y: "0px",
                                                                            opacity: 1
                                                                        },
                                                                        transition: {
                                                                            type: "tween",
                                                                            duration: 0.2
                                                                        },
                                                                        className: `${styles.navsubitems} `,
                                                                        children: [
                                                                            " ",
                                                                            brand.label
                                                                        ]
                                                                    })
                                                                }, brand.id)),
                                                            /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                                                className: `d-grid  pb-3 ${styles.nav_content}  ${(index + 1) % 7 === 0 ? "" : styles.nav_border}`,
                                                                href: `/products?${createParams([
                                                                    [
                                                                        "category_id",
                                                                        category.id
                                                                    ]
                                                                ])}`,
                                                                children: /*#__PURE__*/ _jsx(motion.span, {
                                                                    initial: {
                                                                        y: "10px",
                                                                        opacity: 0
                                                                    },
                                                                    whileInView: {
                                                                        y: "0px",
                                                                        opacity: 1
                                                                    },
                                                                    transition: {
                                                                        type: "tween",
                                                                        duration: 0.2
                                                                    },
                                                                    className: `${styles.navsubitems} ${styles.navViewAllOption}`,
                                                                    children: "View All"
                                                                })
                                                            })
                                                        ]
                                                    })),
                                                /*#__PURE__*/ _jsx(NavDropdown, {
                                                    title: " Specs Central",
                                                    onClick: ()=>{
                                                        router.push("/specs");
                                                    },
                                                    className: `me-3 w-100 mt-1 notArrow ${styles.homeNavitem} ${styles.navitemActivespecs} `,
                                                    id: "#action3",
                                                    children: "Specs Central"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ _jsx(_Fragment, {}),
                            /*#__PURE__*/ _jsxs(motion.div, {
                                initial: {
                                    y: -10,
                                    opacity: 0
                                },
                                whileInView: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                },
                                className: `${pathname === "/" && showClassicNav ? "d-none" : "d-none d-lg-flex"} w-100 ps-3 py-2 d-flex justify-content-between align-items-baseline`,
                                id: "HeaderNavbar",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(NavButton, {
                                            navData: navData
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "w-100 px-4",
                                        children: /*#__PURE__*/ _jsx(SearchBar, {})
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "d-flex align-items-baseline gap-2 ",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                className: `d-sm-inline d-none text-nowrap pe-1  ${styles.specs_central}`,
                                                href: `/specs`,
                                                children: "Specs Central"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex d-lg-none",
                                children: [
                                    smallScreenSearchShow ? "" : /*#__PURE__*/ _jsx("div", {
                                        className: "d-flex me-3 align-items-center gap-2",
                                        onClick: ()=>{
                                            setSmallScreenSearchShow(true);
                                        },
                                        children: /*#__PURE__*/ _jsx("div", {
                                            style: {
                                                width: "20px",
                                                height: "20px"
                                            },
                                            children: /*#__PURE__*/ _jsx(Image, {
                                                src: search,
                                                alt: "search",
                                                style: {
                                                    width: "100%",
                                                    height: "100%"
                                                }
                                            })
                                        })
                                    }),
                                    token ? /*#__PURE__*/ _jsxs("div", {
                                        className: "d-flex me-3 align-items-center gap-2  cursor-pointer",
                                        onClick: handleOpenWishlistOffcanvas,
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "d-sm-inline d-none",
                                                children: "Wishlist"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "position-relative",
                                                style: {
                                                    width: "20px",
                                                    height: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsx(Image, {
                                                        src: favourite,
                                                        alt: "favourite",
                                                        style: {
                                                            width: "100%",
                                                            height: "100%"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "position-absolute bg-white",
                                                        style: {
                                                            top: "0",
                                                            right: "-50%",
                                                            borderRadius: "50%",
                                                            width: "20px",
                                                            height: "20px",
                                                            textAlign: "center",
                                                            justifyContent: "center",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            boxShadow: "0 0 1px black"
                                                        },
                                                        children: /*#__PURE__*/ _jsx("span", {
                                                            className: "link",
                                                            style: {
                                                                fontSize: "11px"
                                                            },
                                                            children: wishlistItems.length
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ _jsx(_Fragment, {}),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "pe-3",
                                        children: token ? /*#__PURE__*/ _jsxs(_Fragment, {
                                            children: [
                                                /*#__PURE__*/ _jsxs(Dropdown, {
                                                    className: "picon px-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Dropdown.Toggle, {
                                                            className: "px-0 d-flex align-items-center gap-2",
                                                            variant: "",
                                                            id: "dropdown-basic",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    style: {
                                                                        width: "20px",
                                                                        height: "20px"
                                                                    },
                                                                    children: /*#__PURE__*/ _jsx(Image, {
                                                                        src: userIcon,
                                                                        alt: "user",
                                                                        style: {
                                                                            width: "100%",
                                                                            height: "100%"
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "d-sm-inline",
                                                                    children: user?.first_name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs(Dropdown.Menu, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx(Dropdown.Item, {
                                                                    onClick: handleOpenReservationOffcanvas,
                                                                    href: "#",
                                                                    children: "Reservations"
                                                                }),
                                                                /*#__PURE__*/ _jsx(Dropdown.Divider, {}),
                                                                /*#__PURE__*/ _jsx(Dropdown.Item, {
                                                                    onClick: ()=>{
                                                                        Logout();
                                                                    },
                                                                    href: "#",
                                                                    children: "Logout"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                " "
                                            ]
                                        }) : /*#__PURE__*/ _jsx(Link, {
                                            href: `/login?redirect=${pathname}`,
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "d-flex align-items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "d-flex align-items-center",
                                                        style: {
                                                            width: "20px",
                                                            height: "20px"
                                                        },
                                                        children: /*#__PURE__*/ _jsx(Image, {
                                                            src: userIcon,
                                                            alt: "user",
                                                            style: {
                                                                width: "100%",
                                                                height: "100%"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "d-sm-inline",
                                                        children: "Sign In"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            smallScreenSearchShow ? /*#__PURE__*/ _jsx("div", {
                className: "d-block d-lg-none ",
                style: {
                    backgroundColor: "#EDF2FA"
                },
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "main p-4 pe-0 d-flex flex-nowrap align-items-center ",
                    children: [
                        /*#__PURE__*/ _jsx(SearchBar, {}),
                        /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                            icon: faClose,
                            className: "px-3",
                            onClick: ()=>{
                                setSmallScreenSearchShow(false);
                            }
                        })
                    ]
                })
            }) : ""
        ]
    });
};
const createParams = (filters)=>{
    let paramss = new URLSearchParams();
    filters.forEach((filter)=>{
        paramss.append(...filter);
    });
    return `params=${encodeURIComponent(paramss)}`;
};
const SearchBar = ({})=>{
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [openSuggestions, setOpenSuggestions] = useState(false);
    const [searchKey, setSearchKey] = useState("");
    const pathname = usePathname();
    const router = useRouter();
    const suggestionDiv = useRef(null);
    const cityDataQuery = useQuery({
        queryKey: [
            "nabSearchCity"
        ],
        queryFn: getCity
    });
    const conditionDataQuery = useQuery({
        queryKey: [
            "nabSearchCondition"
        ],
        queryFn: getCondition
    });
    const searchOnChangeHandle = (e)=>{
        setSearchInput(e.target.value.replace(/\s+/g, " "));
        if (e.target.value.replace(/\s+/g, " ").length > 0) {
            setOpenSuggestions(true);
        } else {
            setOpenSuggestions(false);
        }
    };
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSearchKey(searchInput);
        }, 200);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        searchInput
    ]);
    const searchSuggestionQuery = useQuery({
        queryKey: [
            "searchSuggestion",
            searchKey
        ],
        queryFn: ()=>{
            return getSearchSuggestions(searchKey);
        }
    });
    const searchSubmitHandle = (e)=>{
        let paramss = new URLSearchParams();
        if (searchInput.trim().length > 0) {
            paramss.append("search", searchInput.trim());
        }
        if (selectedCondition) {
            paramss.append("condition_ids", `[${selectedCondition.id}]`);
        }
        if (selectedLocation) {
            paramss.append("city_id", `${selectedLocation.id}`);
        }
        if (pathname === "/products") {
            window.location.href = `/products?params=${encodeURIComponent(paramss)}`;
        } else {
            router.push(`/products?params=${encodeURIComponent(paramss)}`);
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "position-relative w-100",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: `d-flex flex-nowrap rounded w-100 bg-white ${styles.searchBox}`,
                style: {
                    border: "1px solid rgba(201, 201, 201, 1)"
                },
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: `position-absolute d-flex align-items-center ps-2 ${styles.searchIconDiv}`,
                        children: /*#__PURE__*/ _jsx(Image, {
                            alt: "",
                            className: "",
                            src: search,
                            width: 18,
                            height: 18
                        })
                    }),
                    /*#__PURE__*/ _jsx("input", {
                        type: "search",
                        value: searchInput,
                        onChange: searchOnChangeHandle,
                        onFocus: (e)=>{
                            if (searchInput.length > 0) {
                                setOpenSuggestions(true);
                            }
                        },
                        onBlur: (e)=>{
                            setTimeout(()=>{
                                setOpenSuggestions(false);
                            }, 300);
                        },
                        className: `border-0 w-100 ${styles.searcInput}`
                    }),
                    /*#__PURE__*/ _jsx(IconDropdown, {
                        icon: location,
                        data: cityDataQuery?.data && cityDataQuery?.data?.data.body.data ? [
                            ...cityDataQuery?.data.data.body.data.map(({ city_id, city_name })=>({
                                    id: city_id,
                                    label: city_name
                                }))
                        ] : [],
                        selectedOption: selectedLocation,
                        setSelectedOption: setSelectedLocation
                    }),
                    /*#__PURE__*/ _jsx(IconDropdown, {
                        icon: box,
                        data: conditionDataQuery?.data && conditionDataQuery?.data?.data.body.data ? conditionDataQuery?.data.data.body.data : [],
                        selectedOption: selectedCondition,
                        setSelectedOption: setSelectedCondition
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        className: `border-0  ${styles.searchButton}`,
                        onClick: searchSubmitHandle,
                        children: /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                            icon: faSearch
                        })
                    })
                ]
            }),
            openSuggestions ? /*#__PURE__*/ _jsx("div", {
                className: ` ${styles.suggestionMenue} position-absolute bg-white w-100 px-3 py-2 border rounded `,
                style: {
                    zIndex: "1000"
                },
                ref: suggestionDiv,
                children: searchSuggestionQuery?.data?.data.body.data.length > 0 ? (searchSuggestionQuery?.data?.data.body.data.map((suggestion, index)=>/*#__PURE__*/ _jsx("div", {
                        className: `py-2 cursor-pointer ${styles.suggestionValues} ${searchSuggestionQuery?.data?.data.body.data.length - 1 === index ? "" : "border-bottom"}`,
                        onClick: (e)=>{
                            setSearchInput(suggestion.listing_title);
                            setTimeout(()=>{
                                setOpenSuggestions(false);
                            }, 100);
                            e.stopPropagation();
                        },
                        children: suggestion.listing_title
                    }))) : /*#__PURE__*/ _jsx(_Fragment, {
                    children: "No Suggestion Available"
                })
            }) : /*#__PURE__*/ _jsx(_Fragment, {})
        ]
    });
};
const IconDropdown = ({ icon, data, setSelectedOption = (e)=>{
    console.log("Selected", e);
}, selectedOption = null })=>{
    const [open, setOpen] = useState(false);
    return /*#__PURE__*/ _jsxs(Dropdown, {
        children: [
            /*#__PURE__*/ _jsx(OverlayTrigger, {
                placement: "top",
                overlay: !!selectedOption ? /*#__PURE__*/ _jsx(Tooltip, {
                    children: selectedOption?.label
                }) : /*#__PURE__*/ _jsx(_Fragment, {}),
                children: /*#__PURE__*/ _jsx(Dropdown.Toggle, {
                    className: `${styles.iconDropdown}`,
                    children: /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                width: 40,
                                height: 20,
                                alt: "",
                                className: ``,
                                src: icon
                            }),
                            selectedOption ? /*#__PURE__*/ _jsx("div", {
                                className: styles.badge
                            }) : /*#__PURE__*/ _jsx(_Fragment, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsxs(Dropdown.Menu, {
                children: [
                    /*#__PURE__*/ _jsx(Dropdown.Item, {
                        className: `${styles.items} ${selectedOption === null ? styles.activeItem : ""}`,
                        onClick: ()=>{
                            setSelectedOption(null);
                        },
                        children: "All"
                    }),
                    data.map((option, index)=>/*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsx(Dropdown.Divider, {}),
                                /*#__PURE__*/ _jsx(Dropdown.Item, {
                                    className: `${styles.items} ${option.id === selectedOption?.id ? styles.activeItem : ""}`,
                                    style: data.length - 1 === index ? {
                                        borderBottom: "0"
                                    } : {},
                                    onClick: ()=>{
                                        setSelectedOption(option);
                                    },
                                    children: option.label
                                })
                            ]
                        }))
                ]
            })
        ]
    });
};
const A = ({ children })=>{
    return /*#__PURE__*/ _jsx("a", {
        children: children
    });
};
const NavButton = ({ navData })=>{
    const [categoryHovered, setCategoryHovered] = useState(null);
    const pathname = usePathname();
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Dropdown, {
            style: {
                position: "relative",
                cursor: "pointer"
            },
            children: [
                /*#__PURE__*/ _jsxs(Dropdown.Toggle, {
                    className: `border-0 p-0  ${styles.navButtonBootstrap}`,
                    children: [
                        /*#__PURE__*/ _jsx(Image, {
                            className: styles.openNavButton,
                            src: openNavButton,
                            alt: "openNavButton",
                            width: 35,
                            height: 35
                        }),
                        /*#__PURE__*/ _jsx(Image, {
                            className: styles.closeNavButton,
                            src: closeNavButton,
                            alt: "closeNavButton",
                            width: 35,
                            height: 35
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Dropdown.Menu, {
                    className: `${styles.navMenu}`,
                    children: navData && navData.map((category, index)=>/*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsxs(Dropdown.Item, {
                                    href: `/products?${createParams([
                                        [
                                            "category_id",
                                            category.id
                                        ]
                                    ])}`,
                                    onMouseEnter: ()=>{
                                        setCategoryHovered(index);
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(MainNavItem, {
                                            icon: navImageMap[category.label],
                                            title: category.label,
                                            isArrowIcon: true
                                        }),
                                        categoryHovered === index ? /*#__PURE__*/ _jsx("div", {
                                            className: `${styles.subNavContainer}`,
                                            style: {
                                                position: "absolute"
                                            },
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: `me-3 w-100 ${styles.navitem} `,
                                                children: [
                                                    category.brands.map((brand, index)=>/*#__PURE__*/ _jsx(_Fragment, {
                                                            children: pathname !== "/products" ? /*#__PURE__*/ _jsx(Link, {
                                                                href: brand.has_items === 0 ? "#" : `/products?${createParams([
                                                                    [
                                                                        "brand_ids",
                                                                        `[${brand.id}]`
                                                                    ],
                                                                    [
                                                                        "category_id",
                                                                        category.id
                                                                    ]
                                                                ])}`,
                                                                className: `${styles.nav_content} ${(index + 1) % 7 === 0 ? "" : styles.nav_border} ${brand.has_items === 0 ? styles.disabledItem : ""}`,
                                                                children: /*#__PURE__*/ _jsx(motion.span, {
                                                                    initial: {
                                                                        y: "10px",
                                                                        opacity: 0
                                                                    },
                                                                    whileInView: {
                                                                        y: "0px",
                                                                        opacity: 1
                                                                    },
                                                                    transition: {
                                                                        type: "tween",
                                                                        duration: 0.2
                                                                    },
                                                                    className: `${styles.navsubitems}`,
                                                                    children: brand.label
                                                                })
                                                            }, index) : /*#__PURE__*/ _jsx("a", {
                                                                href: brand.has_items === 0 ? "#" : `/products?${createParams([
                                                                    [
                                                                        "brand_ids",
                                                                        `[${brand.id}]`
                                                                    ],
                                                                    [
                                                                        "category_id",
                                                                        category.id
                                                                    ]
                                                                ])}`,
                                                                className: `${styles.nav_content} ${(index + 1) % 7 === 0 ? "" : styles.nav_border} ${brand.has_items === 0 ? styles.disabledItem : ""}`,
                                                                children: /*#__PURE__*/ _jsx(motion.span, {
                                                                    initial: {
                                                                        y: "10px",
                                                                        opacity: 0
                                                                    },
                                                                    whileInView: {
                                                                        y: "0px",
                                                                        opacity: 1
                                                                    },
                                                                    transition: {
                                                                        type: "tween",
                                                                        duration: 0.2
                                                                    },
                                                                    className: `${styles.navsubitems}`,
                                                                    children: brand.label
                                                                })
                                                            }, index)
                                                        })),
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: `/products?${createParams([
                                                            [
                                                                "category_id",
                                                                category.id
                                                            ]
                                                        ])}`,
                                                        className: `${styles.nav_content} ${styles.nav_border}`,
                                                        children: /*#__PURE__*/ _jsx(motion.span, {
                                                            initial: {
                                                                y: "10px",
                                                                opacity: 0
                                                            },
                                                            whileInView: {
                                                                y: "0px",
                                                                opacity: 1
                                                            },
                                                            transition: {
                                                                type: "tween",
                                                                duration: 0.2
                                                            },
                                                            className: `${styles.navsubitems} link`,
                                                            children: "View All"
                                                        })
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ _jsx(_Fragment, {})
                                    ]
                                }, index),
                                navData.length - 1 === index ? /*#__PURE__*/ _jsx(_Fragment, {}) : /*#__PURE__*/ _jsx(Dropdown.Divider, {})
                            ]
                        }))
                })
            ]
        })
    });
};
const MainNavItem = ({ icon, title, isArrowIcon })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: `d-flex justify-content-between ${styles.navMenuOption}`,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "d-flex align-items-center gap-2",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        style: {
                            width: "25px",
                            height: "25px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: icon,
                            alt: title + "icon",
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "d-sm-inline",
                        children: title
                    })
                ]
            }),
            isArrowIcon ? /*#__PURE__*/ _jsx("div", {
                className: "",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: navTriangleShape,
                    alt: "triangle icon",
                    width: 10,
                    height: 10
                })
            }) : /*#__PURE__*/ _jsx(_Fragment, {})
        ]
    });
};
/* harmony default export */ const components_Header = ((/* unused pure expression or super */ null && (Header_Header)));

// EXTERNAL MODULE: ./src/components/PaginationBar.tsx
var components_PaginationBar = __webpack_require__(34939);
// EXTERNAL MODULE: ./public/images/imagePlaceholder.png
var images_imagePlaceholder = __webpack_require__(71130);
;// CONCATENATED MODULE: ./src/components/ReservationOffcanvas.tsx
"use-client";
















const ReservationCard = ({ listing_title, listing_id, img, condition_item, quantity, online_discount, online_price, online_discount_unit, handleClose })=>{
    const [imageSrc, setImageSrc] = useState(img);
    const calculatePrice = (price, discount, discountUnit)=>{
        if (discountUnit === "percentage") {
            return price - price * (discount / 100);
        } else if (discountUnit === "fixed") {
            return price - discount;
        }
    };
    return /*#__PURE__*/ _jsx(Link, {
        href: `/products/${listing_title.replaceAll(" ", "-").replaceAll("/", "--")}-${listing_id}`,
        onClick: ()=>handleClose(),
        children: /*#__PURE__*/ _jsx(Row, {
            className: "p-1",
            children: /*#__PURE__*/ _jsx(Col, {
                xs: 12,
                className: "my-1",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: `row ${styles.custom_card} px-1 py-2 `,
                    children: [
                        /*#__PURE__*/ _jsx(Col, {
                            xs: 4,
                            className: "img-container border rounded rounded-1 d-flex justify-content-center p-0",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: imageSrc,
                                alt: "productImage",
                                height: 100,
                                width: 120,
                                sizes: "100vw",
                                style: {
                                    objectFit: "contain"
                                },
                                onError: (e)=>{
                                    setImageSrc(`${imagePlaceholder.src}`);
                                }
                            })
                        }),
                        /*#__PURE__*/ _jsxs(Col, {
                            xs: 8,
                            className: `${styles.custom_card_body}`,
                            children: [
                                /*#__PURE__*/ _jsx(Row, {
                                    children: /*#__PURE__*/ _jsx("p", {
                                        className: `${styles.custom_card_title}`,
                                        children: listing_title
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Col, {
                                    xs: 12,
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: `d-flex justify-content-between`,
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                children: /*#__PURE__*/ _jsx(Badge, {
                                                    pill: true,
                                                    text: "dark",
                                                    bg: "lavender",
                                                    style: {
                                                        background: "lavender"
                                                    },
                                                    children: condition_item
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                                className: `m-0`,
                                                children: [
                                                    "Quantity: ",
                                                    quantity
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Row, {
                                    className: "my-1",
                                    children: online_discount > 0 ? /*#__PURE__*/ _jsxs(_Fragment, {
                                        children: [
                                            /*#__PURE__*/ _jsx(Col, {
                                                xs: 6,
                                                className: "text-decoration-line-through text-muted",
                                                children: /*#__PURE__*/ _jsxs("p", {
                                                    className: "m-0",
                                                    children: [
                                                        "Rs. ",
                                                        online_price
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx(Col, {
                                                xs: 6,
                                                className: "fw-bold text-end",
                                                children: /*#__PURE__*/ _jsxs("p", {
                                                    className: "m-0",
                                                    children: [
                                                        "Rs.",
                                                        " ",
                                                        `${calculatePrice(online_price, online_discount, online_discount_unit)?.toLocaleString("en-IN")}`
                                                    ]
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ _jsx(Col, {
                                        xs: 12,
                                        className: "",
                                        children: /*#__PURE__*/ _jsxs("p", {
                                            className: "fw-bold m-0 text-end",
                                            children: [
                                                "Rs. ",
                                                online_price
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
function ReservationOffcanvas_ReservationOffcanvas({ show, handleClose }) {
    const [status, setStatus] = useState("Pending");
    const [currentPage, setCurrentPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(1);
    const [reservationsData, setReservationsData] = useState();
    const [noOfItems, setNoOfItems] = useState();
    const [sizeOfPages, setSizeOfPages] = useState(10);
    const { user, token } = useUserStore((state)=>state);
    const userId = user?.uuid;
    const router = useRouter();
    const getReservationsData = useQuery({
        queryKey: [
            "reservations",
            [
                userId,
                status,
                show
            ]
        ],
        queryFn: ()=>getReservations(token, status),
        enabled: !!userId,
        onSuccess: (data)=>{
            setReservationsData(data?.data?.body?.data);
            setNoOfPages(data?.data.body?.paginationInfo?.totalPages);
            setNoOfItems(data?.data?.body?.paginationInfo?.totalItems);
        }
    });
    useEffect(()=>{
        if (show === true) {
            setStatus("Pending");
            getReservationsData.refetch();
        }
    }, [
        show
    ]);
    const changePage = (page)=>{
        setCurrentPage(page);
        window.scrollTo(0, 500);
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Offcanvas, {
            show: show,
            onHide: handleClose,
            placement: "end",
            children: [
                /*#__PURE__*/ _jsx(Offcanvas.Header, {
                    closeButton: true,
                    children: /*#__PURE__*/ _jsx(Offcanvas.Title, {
                        children: "Reservation Details"
                    })
                }),
                /*#__PURE__*/ _jsxs(Offcanvas.Body, {
                    children: [
                        /*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsxs(Form.Select, {
                                    className: "d-block w-50 ms-auto mb-3",
                                    "aria-label": "Default select example",
                                    value: status,
                                    defaultValue: "",
                                    onChange: (e)=>{
                                        console.log(e.target.value);
                                        let value = e.target.value;
                                        if (value === "Pending") {
                                            setStatus("Pending");
                                        } else if (value === "Done") {
                                            setStatus("Done");
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("option", {
                                            id: "status",
                                            value: "Pending",
                                            children: "Pending"
                                        }),
                                        /*#__PURE__*/ _jsx("option", {
                                            id: "status",
                                            value: "Done",
                                            children: "Done"
                                        })
                                    ]
                                }),
                                getReservationsData?.data?.data?.body?.data?.map((data, index)=>/*#__PURE__*/ _jsx(_Fragment, {
                                        children: /*#__PURE__*/ _jsx(ReservationCard, {
                                            listing_title: data?.listings?.listing_title,
                                            listing_id: data.listing_id,
                                            img: data?.items?.itemImages?.img0,
                                            condition_item: data?.items?.condition_item,
                                            quantity: data?.quantity,
                                            online_discount: data?.listings?.online_discount,
                                            online_price: data?.listings?.online_price,
                                            online_discount_unit: data?.listings?.online_discount_unit,
                                            handleClose: handleClose
                                        }, index)
                                    })),
                                getReservationsData?.data?.data?.body?.data?.length > 0 && /*#__PURE__*/ _jsx(PaginationBar, {
                                    noOfPages: noOfPages,
                                    currentPage: currentPage,
                                    changePage: changePage
                                })
                            ]
                        }),
                        getReservationsData?.data?.data?.body?.data?.length === 0 && /*#__PURE__*/ _jsx("h5", {
                            className: "d-flex justify-content-center mt-5",
                            children: "No Result Found!"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_ReservationOffcanvas = ((/* unused pure expression or super */ null && (ReservationOffcanvas_ReservationOffcanvas)));

// EXTERNAL MODULE: ./src/components/WishlistIcon.tsx
var components_WishlistIcon = __webpack_require__(93608);
// EXTERNAL MODULE: ./src/components/ReserveDetails.tsx + 1 modules
var components_ReserveDetails = __webpack_require__(27264);
// EXTERNAL MODULE: ./src/components/SignInModal.tsx
var components_SignInModal = __webpack_require__(95458);
;// CONCATENATED MODULE: ./src/components/WishlistOffcanvas.tsx
"use-client";




















function WishlistOffcanvas_WishlistOffcanvas({ show, handleClose }) {
    const { user, token } = useUserStore((state)=>state);
    const [currentPage, setCurrentPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(1);
    const [noOfItems, setNoOfItems] = useState();
    const [sizeOfPages, setSizeOfPages] = useState(10);
    const { count } = useWishlistStore((store)=>store);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState();
    const [actionOverlay, setActionOverlay] = useState(null);
    const getItems = useQuery({
        queryKey: [
            "wishlistItems",
            {
                user,
                currentPage,
                count,
                show
            }
        ],
        queryFn: ()=>getUserWishlist(token, user?.uuid, currentPage, 10),
        enabled: !!user,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
        onSuccess: (data)=>{
            setItems(data.data.body.data);
            setNoOfPages(data?.data.body?.paginationInfo?.totalPages);
            setNoOfItems(data?.data?.body?.paginationInfo?.totalItems);
        }
    });
    const changePage = (page)=>{
        setCurrentPage(page);
        window.scrollTo(0, 500);
    };
    const onHide = ()=>{
        setActionOverlay(null);
        handleClose();
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Offcanvas, {
            show: show,
            onHide: onHide,
            placement: "end",
            onClick: ()=>setActionOverlay(null),
            children: [
                /*#__PURE__*/ _jsx(Offcanvas.Header, {
                    closeButton: true,
                    children: /*#__PURE__*/ _jsx(Offcanvas.Title, {
                        children: "Saved Items"
                    })
                }),
                /*#__PURE__*/ _jsxs(Offcanvas.Body, {
                    children: [
                        /*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "d-block text-align-left",
                                    children: [
                                        noOfItems,
                                        " Saved Items"
                                    ]
                                }),
                                " ",
                                /*#__PURE__*/ _jsx("div", {
                                    className: "container",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: getItems?.data?.data?.body?.data?.map((data, index)=>/*#__PURE__*/ _jsx(Wishlist, {
                                            index: index,
                                            listingId: data?.fk_listing_id,
                                            item: data?.listings.item,
                                            img: data?.listings.item.itemImages.img0,
                                            title: data?.listings.listing_title,
                                            condition: data?.listings?.item.condition_item,
                                            loading: getItems?.isLoading,
                                            discount: parseInt(data?.listings?.online_discount),
                                            discountUnit: data?.listings?.online_discount_unit,
                                            activationDate: data?.listings?.activation_date,
                                            isDeleted: data?.listings?.is_deleted,
                                            archivedOn: data?.listings?.archived_on,
                                            price: data?.listings?.online_price,
                                            listedQuantity: data?.listings?.listed_quantity,
                                            closeOffcanvas: handleClose,
                                            actionOverlay: actionOverlay,
                                            setActionOverlay: setActionOverlay
                                        }, data?.fk_listing_id))
                                }),
                                getItems?.data?.data?.body?.data?.length > 0 && /*#__PURE__*/ _jsx(PaginationBar, {
                                    noOfPages: noOfPages,
                                    currentPage: currentPage,
                                    changePage: changePage
                                })
                            ]
                        }),
                        getItems?.data?.data?.body?.data?.length === 0 && /*#__PURE__*/ _jsx("h5", {
                            className: "d-flex justify-content-center mt-5",
                            children: "No Result Found!"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_WishlistOffcanvas = ((/* unused pure expression or super */ null && (WishlistOffcanvas_WishlistOffcanvas)));
const Wishlist = ({ index, item, loading, img, title, price, condition, discount, listingId, discountUnit, activationDate, archivedOn, isDeleted, listedQuantity, closeOffcanvas, actionOverlay, setActionOverlay })=>{
    const [reserveModal, setReserveModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const [imageSrc, setImageSrc] = useState(img);
    const calculatePrice = (price, discount, discountUnit)=>{
        if (discountUnit === "percentage") {
            return price - price * (discount / 100);
        } else if (discountUnit === "fixed") {
            return price - discount;
        }
    };
    const handleReserveModal = ()=>{
        setReserveModal(true);
    };
    const handleActionOverlay = (id)=>{
        setActionOverlay(id);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: `${styles.custom_card} position-relative px-1 py-1 mb-3`,
                children: [
                    actionOverlay === index ? /*#__PURE__*/ _jsx("div", {
                        className: "position-absolute w-100 h-100 d-flex justify-content-center border-rounded top-0 start-0 align-items-center",
                        style: {
                            borderRadius: "5px",
                            background: "#0000007F"
                        },
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "position-relative d-flex justify-content-between gap-2",
                            style: {
                                color: "white",
                                height: "35px"
                            },
                            children: [
                                activationDate === null || archivedOn !== null || isDeleted === true ? "" : /*#__PURE__*/ _jsx(Button, {
                                    variant: "primary",
                                    onClick: handleReserveModal,
                                    children: "Reserve"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    href: `/store/${item?.shopTable?.username.replaceAll(" ", "-").replaceAll("/", "--")}`,
                                    children: /*#__PURE__*/ _jsx(Button, {
                                        onClick: closeOffcanvas,
                                        children: "Visit Stop"
                                    })
                                }),
                                /*#__PURE__*/ _jsx(WishlistIcon, {
                                    top: "0px",
                                    right: "0px",
                                    listingId: listingId,
                                    title: title,
                                    savedPage: true
                                })
                            ]
                        })
                    }) : "",
                    /*#__PURE__*/ _jsx(Link, {
                        href: `/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`,
                        className: styles.linktag,
                        onClick: closeOffcanvas,
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "d-flex justify-content-start w-100",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    style: {
                                        maxWidth: "120px"
                                    },
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "img-container border rounded rounded-1 d-flex justify-content-center p-0 w-100",
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            src: imageSrc,
                                            alt: "productImage",
                                            height: 100,
                                            width: 120,
                                            style: {
                                                objectFit: "contain"
                                            },
                                            onError: (e)=>{
                                                setImageSrc(`${imagePlaceholder.src}`);
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: `ps-1 ${styles.wishlist_card_body}`,
                                    children: [
                                        /*#__PURE__*/ _jsx(OverlayTrigger, {
                                            placement: "top",
                                            overlay: /*#__PURE__*/ _jsx(Tooltip, {
                                                id: "tooltip",
                                                children: title
                                            }),
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: `${styles.wishlist_card_title}`,
                                                children: title
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: `d-flex justify-content-between mt-2`,
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            children: /*#__PURE__*/ _jsx(Badge, {
                                                                pill: true,
                                                                text: "dark",
                                                                bg: "lavender",
                                                                style: {
                                                                    background: "lavender"
                                                                },
                                                                children: condition
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsx(Image, {
                                                                    className: "me-1 rounded-2",
                                                                    src: location,
                                                                    alt: "location",
                                                                    height: "12",
                                                                    width: "10"
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: `m-0`,
                                                                    children: item?.location?.city?.city_name
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mb-2 d-flex justify-content-between",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            children: Number(discount) > 0 && /*#__PURE__*/ _jsxs("span", {
                                                                className: `ms-1 discount`,
                                                                children: [
                                                                    "Rs ",
                                                                    price
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "fw-bold text-end",
                                                            children: [
                                                                "Rs. ",
                                                                activationDate === null || archivedOn !== null || isDeleted === true ? "--" : `${calculatePrice(price, discount, discountUnit)?.toLocaleString("en-IN")}`
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
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("span", {
                            className: "position-absolute top-0 end-0 p-2 cursor-pointer bg-white  d-flex justify-content-center align-items-center",
                            style: {
                                borderRadius: "0 5px",
                                height: "40px",
                                width: "37px"
                            },
                            onClick: ()=>actionOverlay === index ? handleActionOverlay(null) : handleActionOverlay(index),
                            children: actionOverlay === index ? /*#__PURE__*/ _jsx("button", {
                                type: "button",
                                className: "btn-close"
                            }) : /*#__PURE__*/ _jsx(Image, {
                                src: ellipsis,
                                alt: "actions"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(ReserveDetails, {
                show: reserveModal,
                onHide: ()=>setReserveModal(false),
                reserveData: {
                    shop_id: item?.shopTable?.shop_id,
                    locationId: item.location_id,
                    listingId: listingId,
                    itemId: item?.item_id,
                    listedQuantity
                }
            }),
            /*#__PURE__*/ _jsx(SignInModal, {
                title: " To Reserve this item, please create an account.",
                show: signInModal,
                onHide: ()=>setSignInModal(false)
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/layouts/Layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Layout = ({ children })=>{
    const [isMounted, setIsMounted] = useState(false);
    const [isReservationOffcanvasOpen, setIsReservationOffcanvasOpen] = useState(false);
    const [isWishlistOffcanvasOpen, setIsWishlistOffcanvasOpen] = useState(false);
    const pathname = usePathname();
    const [showHomeNavbar, setShowHomeNavbar] = useState(true);
    useEffect(()=>{
        const handleScroll = ()=>{
            const heroBanner = document.getElementById("heroBanner");
            if (heroBanner) {
                const offset = heroBanner.offsetHeight;
                setShowHomeNavbar(window.scrollY <= offset);
            }
        };
        document.addEventListener("scroll", handleScroll);
        // Cleanup the event listener on component unmount
        return ()=>{
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleOpenReservationOffcanvas = ()=>{
        setIsReservationOffcanvasOpen((prev)=>!prev);
    };
    const handleCloseOffcanvas = ()=>{
        setIsReservationOffcanvasOpen(false);
    };
    const [isSandwichOpen, setisSandwichOpen] = useState(false);
    const navDataQuery = useQuery({
        queryKey: [
            "navMenuData"
        ],
        queryFn: getNavMenuData
    });
    const sandwichTriger = ()=>{
        setisSandwichOpen((prev)=>!prev);
    };
    useEffect(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    const handleOpenWishlistOffcanvas = ()=>{
        setIsWishlistOffcanvasOpen((prev)=>!prev);
    };
    const handleCloseWishlistOffcanvas = ()=>{
        setIsWishlistOffcanvasOpen(false);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            pathname.includes("login") || pathname.includes("signup") ? /*#__PURE__*/ _jsx(_Fragment, {}) : /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsx(Sidebar, {
                        setisSandwichOpen: setisSandwichOpen,
                        isSandwichOpen: isSandwichOpen,
                        navData: navDataQuery?.data?.data.body.data
                    }),
                    /*#__PURE__*/ _jsx(Topbar, {
                        handleOpenReservationOffcanvas: handleOpenReservationOffcanvas,
                        handleOpenWishlistOffcanvas: handleOpenWishlistOffcanvas
                    }),
                    /*#__PURE__*/ _jsx(Header, {
                        sandwichTriger: sandwichTriger,
                        navData: navDataQuery?.data?.data.body.data,
                        handleOpenReservationOffcanvas: handleOpenReservationOffcanvas,
                        showClassicNav: showHomeNavbar,
                        handleOpenWishlistOffcanvas: handleOpenWishlistOffcanvas
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(_Fragment, {
                children: children
            }),
            pathname.includes("login") || pathname.includes("signup") ? /*#__PURE__*/ _jsx(_Fragment, {}) : /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsx(Footer, {}),
                    /*#__PURE__*/ _jsx(ReservationOffcanvas, {
                        show: isReservationOffcanvasOpen,
                        handleClose: handleCloseOffcanvas
                    }),
                    " ",
                    /*#__PURE__*/ _jsx(WishlistOffcanvas, {
                        show: isWishlistOffcanvasOpen,
                        handleClose: handleCloseWishlistOffcanvas
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Layout = ((/* unused pure expression or super */ null && (Layout)));

;// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.tsx









const Sidebar_Sidebar = ({ isSandwichOpen, setisSandwichOpen, navData })=>{
    // const wrapperRef = useRef(null);
    // useOutsideAlerter(wrapperRef, setIsSandwichOpen);
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();
    const handleCanvasClose = ()=>{
        setisSandwichOpen(false);
    };
    useEffect(()=>{
        setDomLoaded(true);
    }, []);
    const pathname = usePathname();
    const createParams = (filters)=>{
        let paramss = new URLSearchParams();
        filters.forEach((filter)=>{
            paramss.append(...filter);
        });
        return `params=${encodeURIComponent(paramss)}`;
    };
    const A = ({ children })=>{
        return /*#__PURE__*/ _jsx("a", {
            children: children
        });
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Offcanvas, {
            show: isSandwichOpen,
            onHide: handleCanvasClose,
            className: "d-block d-lg-none",
            backdropClassName: "d-block d-lg-none",
            children: [
                /*#__PURE__*/ _jsx(Offcanvas.Header, {
                    closeButton: true,
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        children: /*#__PURE__*/ _jsx(Offcanvas.Title, {
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex  flex-nowrap ps-1",
                                children: [
                                    /*#__PURE__*/ _jsx(Image, {
                                        className: `me-2 ${styles.tblogo} `,
                                        src: tblogo,
                                        alt: "Logo",
                                        height: "32",
                                        width: 30
                                    }),
                                    /*#__PURE__*/ _jsx(Image, {
                                        className: ` d-lg-inline d-md-inline d-none d-sm-inline ${styles.tblogoName}`,
                                        src: tblogoName,
                                        alt: "Logo name",
                                        height: 30,
                                        width: 135
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Offcanvas.Body, {
                    children: /*#__PURE__*/ _jsxs(Accordion, {
                        children: [
                            navData && navData.map((category)=>/*#__PURE__*/ _jsxs(Accordion.Item, {
                                    className: styles.acor_item,
                                    eventKey: category.id,
                                    children: [
                                        /*#__PURE__*/ _jsx(Accordion.Header, {
                                            className: `${styles.nav_header}`,
                                            children: /*#__PURE__*/ _jsx("div", {
                                                children: category.label
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Accordion.Body, {
                                            className: `${styles.accordianBodyContainer}`,
                                            style: {
                                                height: "35vh",
                                                overflowY: "auto"
                                            },
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "d-grid",
                                                children: [
                                                    category.brands.slice(0, 10).map((brand, index)=>/*#__PURE__*/ _jsx("div", {
                                                            className: ` d-flex justify-content-between p-3 border-bottom ${brand.has_items === 0 ? "text-muted " : "cursor-pointer"}`,
                                                            onClick: handleCanvasClose,
                                                            children: pathname !== "/products" ? /*#__PURE__*/ _jsx(Link, {
                                                                href: brand.has_items === 0 ? "#" : `/products?${createParams([
                                                                    [
                                                                        "brand_ids",
                                                                        `[${brand.id}]`
                                                                    ],
                                                                    [
                                                                        "category_id",
                                                                        category.id
                                                                    ]
                                                                ])}`,
                                                                className: "w-100",
                                                                children: brand.label
                                                            }) : /*#__PURE__*/ _jsx(Link, {
                                                                href: brand.has_items === 0 ? "#" : `/products?${createParams([
                                                                    [
                                                                        "brand_ids",
                                                                        `[${brand.id}]`
                                                                    ],
                                                                    [
                                                                        "category_id",
                                                                        category.id
                                                                    ]
                                                                ])}`,
                                                                className: "w-100",
                                                                children: brand.label
                                                            })
                                                        })),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: ` d-flex justify-content-between p-3 `,
                                                        onClick: handleCanvasClose,
                                                        children: /*#__PURE__*/ _jsx(Link, {
                                                            href: `/products?${createParams([
                                                                [
                                                                    "category_id",
                                                                    category.id
                                                                ]
                                                            ])}`,
                                                            className: "w-100 link",
                                                            children: "View All"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })),
                            /*#__PURE__*/ _jsx("div", {
                                className: styles.specsCentralSidebar,
                                children: /*#__PURE__*/ _jsx("h2", {
                                    children: /*#__PURE__*/ _jsx("button", {
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: `/specs`,
                                            onClick: handleCanvasClose,
                                            children: "SPECS CENTRAL"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Sidebar_Sidebar = ((/* unused pure expression or super */ null && (Sidebar_Sidebar)));

// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Card.js
var Card = __webpack_require__(40049);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Col.js
var cjs_Col = __webpack_require__(89914);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/OverlayTrigger.js
var cjs_OverlayTrigger = __webpack_require__(94843);
var OverlayTrigger_default = /*#__PURE__*/__webpack_require__.n(cjs_OverlayTrigger);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Tooltip.js
var cjs_Tooltip = __webpack_require__(73768);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(cjs_Tooltip);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 190 modules
var dom_motion = __webpack_require__(32317);
// EXTERNAL MODULE: ./src/components/LoadingCard.tsx
var LoadingCard = __webpack_require__(57771);
// EXTERNAL MODULE: ./src/styles/ProductCard.module.css
var ProductCard_module = __webpack_require__(63740);
var ProductCard_module_default = /*#__PURE__*/__webpack_require__.n(ProductCard_module);
;// CONCATENATED MODULE: ./src/components/ProductCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 














const ProductCard = ({ isRecommendationCards, item, loading, title, price, condition, discount, listingId, discount_unit, color })=>{
    // const [color,setColor]=useState()
    const shopDetails = item?.shopTable;
    const locations = item?.location;
    const image = item?.itemImages?.img0;
    const locationId = item?.location_id;
    const city = item?.location?.city?.city_name;
    const shopUsername = item.shopTable.username;
    console.log(discount, discount_unit, "discount");
    const [reserveModal, setReserveModal] = (0,react_.useState)(false);
    const [contactModal, setContactModal] = (0,react_.useState)(false);
    const [signInModal, setSignInModal] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    const handleReserveModal = ()=>{
        setReserveModal(true);
    };
    const handleContactModal = ()=>{
        setContactModal(true);
    };
    const calculateDiscountedPrice = ()=>{
        if (price < 0 || discount < 0) {
            // Handle invalid input
            return null;
        }
        if (discount_unit == "percentage") {
            let discountAmount = price * discount / 100;
            let discountedPrice = price - discountAmount;
            return discountedPrice;
        } else if (discount_unit == "fixed") {
            let discountedPrice = price - discount;
            return discountedPrice;
        }
    };
    const discountedPrice = calculateDiscountedPrice();
    return /*#__PURE__*/ jsx_runtime_.jsx(cjs_Col["default"], {
        className: "mt-4 gx-3 gy-2",
        lg: "4",
        xl: "3",
        md: "4",
        sm: "6",
        xs: "12",
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(LoadingCard/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            className: "h-100 rounded-3 shadow-sm",
            style: {
                maxHeight: "300px"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "card-container position-relative  ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row p-0 mx-0 ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "position-relative",
                                id: "card-img-container",
                                style: {
                                    height: "164px",
                                    maxHeight: "200px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(dom_motion/* motion */.E.img, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.4
                                            },
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                aspectRatio: "16/9"
                                            },
                                            className: "p-0",
                                            src: image,
                                            alt: "productImg",
                                            onError: (e)=>e.target.src = `${images_imagePlaceholder/* default */.Z.src}`
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "d-flex justify-content-between align-items-center"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "  rounded-circle text-center position-absolute top-0 end-0 m-0 p-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_WishlistIcon/* default */.Z, {
                                listingId: listingId,
                                title: title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `text-center position-absolute top-0 start-0 d-flex justify-content-center align-items-center`,
                            style: {
                                border: "1px 1px 1px 0 solid #D8E4F8",
                                borderTopLeftRadius: "7px",
                                borderBottomLeftRadius: "0",
                                borderBottomRightRadius: "7px",
                                background: "#D957F9B3"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "m-0 fs-9 py-1 fw-bold p-2 text-white",
                                style: {
                                    fontSize: "0.7rem"
                                },
                                children: condition
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Body, {
                                className: "px-2 py-1 mt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row align-items-start product-title-row",
                                        style: {
                                            height: "3rem"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((OverlayTrigger_default()), {
                                            placement: "top",
                                            overlay: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "tooltip",
                                                children: title
                                            }),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: `${(ProductCard_module_default()).product_title} `,
                                                children: title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex flex-row m-0 p-0 flex-wrap",
                                        style: {
                                            height: "1.5rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "fw-bold m-0 me-2 fw-700 fs-16",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "",
                                                        children: "Rs. "
                                                    }),
                                                    discountedPrice ? discountedPrice.toLocaleString() : price.toLocaleString()
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-decoration-line-through text-muted fw-500 fs-16",
                                                children: discountedPrice && discount !== 0 ? `Rs. ${price.toLocaleString()}` : null
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                isRecommendationCards ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        height: "3rem"
                    },
                    className: "mx-2 align-items-center d-flex justify-content-between  fs-9 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            className: "d-flex text-end align-middle gap-1  ",
                            href: `/store/${shopUsername}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: icons/* shopIcon */.yL.src
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `${(ProductCard_module_default()).store} text-decoration-none`,
                                    children: "Visit Store"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col text-end align-middle",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: icons/* location */.xh.src
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: city
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_ProductCard = (ProductCard);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Accordion.js
var cjs_Accordion = __webpack_require__(36568);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(cjs_Accordion);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Button.js
var cjs_Button = __webpack_require__(86110);
var Button_default = /*#__PURE__*/__webpack_require__.n(cjs_Button);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Form.js
var cjs_Form = __webpack_require__(94257);
var Form_default = /*#__PURE__*/__webpack_require__.n(cjs_Form);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Offcanvas.js
var cjs_Offcanvas = __webpack_require__(10730);
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(cjs_Offcanvas);
// EXTERNAL MODULE: ./src/styles/SideFilters.module.css
var SideFilters_module = __webpack_require__(61446);
var SideFilters_module_default = /*#__PURE__*/__webpack_require__.n(SideFilters_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(71198);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/MultiRangeSlider.tsx



const MultiRangeSlider = ({ min, max, minValue, maxValue, onChange })=>{
    const [minVal, setMinVal] = (0,react_.useState)(Number(min));
    const [maxVal, setMaxVal] = (0,react_.useState)(Number(max));
    const minValRef = (0,react_.useRef)(null);
    const maxValRef = (0,react_.useRef)(null);
    const range = (0,react_.useRef)(null);
    // Convert to percentage
    const getPercent = (0,react_.useCallback)((value)=>Math.round((value - min) / (max - min) * 100), [
        min,
        max
    ]);
    (0,react_.useEffect)(()=>{
        setMinVal(minValue);
        setMaxVal(maxValue);
    }, [
        minValue,
        maxValue
    ]);
    // Set width of the range to decrease from the left side
    (0,react_.useEffect)(()=>{
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef?.current?.value); // Preceding with '+' converts the value from type string to type number
            if (range.current) {
                range.current.style.left = `Rs. {minPercent}%`;
                range.current.style.width = `Rs. {maxPercent - minPercent}%`;
            }
        }
    }, [
        minVal,
        getPercent
    ]);
    // Set width of the range to decrease from the right side
    (0,react_.useEffect)(()=>{
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);
            if (range.current) {
                range.current.style.width = `Rs. {maxPercent - minPercent}%`;
            }
        }
    }, [
        maxVal,
        getPercent
    ]);
    // Get min and max values when their state changes
    (0,react_.useEffect)(()=>{
        onChange({
            min: minVal,
            max: maxVal
        });
    }, [
        minVal,
        maxVal
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container mt-4 mb-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex mb-0 fs-14 justify-content-center",
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "secondary-link fw-500 mx-2",
                        children: [
                            " Rs. ",
                            minVal?.toLocaleString("en-IN")
                        ]
                    }),
                    " to",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "secondary-link fw-500 mx-2",
                        children: [
                            " Rs. ",
                            maxVal?.toLocaleString("en-IN")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("datalist", {
                id: "steplist",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        children: "0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        children: "25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        children: "50"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        children: "75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        children: "100"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                min: min,
                max: max,
                value: minVal,
                ref: minValRef,
                onChange: (event)=>{
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                },
                className: classnames_default()("thumb thumb--zindex-3", {
                    "thumb--zindex-5": minVal > max - 100
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                min: min,
                max: max,
                value: maxVal,
                ref: maxValRef,
                onChange: (event)=>{
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                },
                className: "thumb thumb--zindex-4"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "slider",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "slider__track"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: range,
                        className: "slider__range"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_MultiRangeSlider = (MultiRangeSlider);

// EXTERNAL MODULE: ./src/styles/LoadingCard.module.css
var LoadingCard_module = __webpack_require__(89071);
var LoadingCard_module_default = /*#__PURE__*/__webpack_require__.n(LoadingCard_module);
;// CONCATENATED MODULE: ./src/components/SideFiltersLoader.tsx





function SideFiltersLoader() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "   ",
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(SideFilters_module_default()).sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "search_filter p-4 pb-3 ",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "d-flex mb-1 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    style: {
                                                        width: "160px",
                                                        height: "37px"
                                                    },
                                                    className: ` ${(LoadingCard_module_default()).skeleton} fw-bold  fs-16 m-0`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        width: "28px",
                                                        height: "37px"
                                                    },
                                                    className: `${(LoadingCard_module_default()).skeleton} ms-1 `
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                width: "100px",
                                                height: "15px"
                                            },
                                            className: ` ${(LoadingCard_module_default()).skeleton} fw-bold  fs-16 m-0`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                                    alwaysOpen: true,
                                    className: `${(SideFilters_module_default()).accordian_main}`,
                                    defaultActiveKey: "0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                width: "230px",
                                                height: "45px"
                                            },
                                            className: ` ${(LoadingCard_module_default()).skeleton} fw-bold mb-2 mx-2 fs-16 m-0`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                width: "230px",
                                                height: "45px"
                                            },
                                            className: ` ${(LoadingCard_module_default()).skeleton} fw-bold mb-2 mx-2 fs-16 m-0`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                width: "230px",
                                                height: "45px"
                                            },
                                            className: ` ${(LoadingCard_module_default()).skeleton} fw-bold mb-2 mx-2 fs-16 m-0`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                width: "230px",
                                                height: "45px"
                                            },
                                            className: ` ${(LoadingCard_module_default()).skeleton} fw-bold mb-2 mx-2 fs-16 m-0`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                width: "230px",
                                                height: "45px"
                                            },
                                            className: ` ${(LoadingCard_module_default()).skeleton} fw-bold mb-2 mx-2 fs-16 m-0`
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_SideFiltersLoader = (SideFiltersLoader);

;// CONCATENATED MODULE: ./src/components/SideFilters.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











const SideFilters = ({ filtersData, isLoading, dependentFilters, setdependentFilters, orderBy, setCatCahnge, setisSandwichOpen, isSandwichOpen, setOrderBy, filters, setfiltersData, removeDependentFiltersParam, search, setSearch, priceRange, setPriceRange, filterINDFilters, Dparams })=>{
    // const [search, setSearch] = useState<string>("");
    // const [priceRange, setPriceRange] = useState<any>();
    // const [filtersData, setfiltersData] = useState<any>([]);
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    (0,react_.useEffect)(()=>{
    // filtersCheckedData(filtersData,dependentFilters,search,priceRange)
    }, [
        filtersData,
        dependentFilters,
        search,
        priceRange,
        orderBy
    ]);
    // const data=await queryClient.getQueryData("todos")
    const handleCheckboxChange = (e)=>{
        let newValues = {
            ...filtersData
        };
        setCatCahnge(true);
        if (e.target.name === "categories" || e.target.name === "cities") {
            removeDependentFiltersParam(dependentFilters);
            newValues[e.target.name].map((item, index)=>{
                if (Number(index) === Number(e.target.id)) {
                    return {
                        ...item,
                        isChecked: e.target.checked
                    };
                } else {
                    return {
                        ...item,
                        isChecked: false
                    };
                }
            });
            newValues[e.target.name] = newValues[e.target.name].map((item, index)=>{
                if (Number(index) === Number(e.target.id)) {
                    return {
                        ...item,
                        isChecked: e.target.checked
                    };
                } else {
                    return {
                        ...item,
                        isChecked: false
                    };
                }
            });
        } else {
            newValues[e.target.name][e.target.id].isChecked = e.target.checked;
        }
        setfiltersData(newValues);
    };
    const handleChangeDependentFilter = (e, val, id)=>{
        setCatCahnge(true);
        setdependentFilters((prev)=>{
            const updated = prev[val]?.values?.map((item, i)=>{
                if (i === id && prev[val].inputType === "checkbox") {
                    return {
                        ...item,
                        isChecked: e.target.checked
                    };
                } else if (prev[val].inputType === "radio") {
                    if (i === id) {
                        return {
                            ...item,
                            isChecked: e.target.checked
                        };
                    } else {
                        return {
                            ...item,
                            isChecked: false
                        };
                    }
                }
                return item;
            });
            return {
                ...prev,
                [val]: {
                    ...prev[val],
                    values: updated
                }
            };
        });
    // let val={...dependentFilters}
    // val[e.target.name][e.target.id].isChecked = e.target.checked;
    // setdependentFilters(val)
    };
    const clearAllFilters = ()=>{
        // router.replace(pathname);
        setCatCahnge(true);
        setSearch("");
        if (filtersData) {
            setfiltersData({
                categories: filtersData?.categories?.map((category)=>({
                        ...category,
                        isChecked: false
                    })),
                colors: filtersData?.colors?.map((color)=>({
                        ...color,
                        isChecked: false
                    })),
                conditions: filtersData?.conditions?.map((condition)=>({
                        ...condition,
                        isChecked: false
                    })),
                locations: filtersData?.locations?.map((location)=>({
                        ...location,
                        isChecked: false
                    })),
                title: "",
                priceRange: filtersData?.priceRange
            });
        }
        if (priceRange) {
            setPriceRange("");
        }
        if (dependentFilters) {
            setdependentFilters((prev)=>{
                return Object.entries(prev).reduce((oldFilters, [fKey, fValue])=>{
                    return {
                        ...oldFilters,
                        [fKey]: {
                            ...fValue,
                            values: fValue.values.reduce((oldValue, value)=>{
                                return [
                                    ...oldValue,
                                    {
                                        ...value,
                                        isChecked: false
                                    }
                                ];
                            }, [])
                        }
                    };
                }, {});
            });
        }
        setOrderBy({
            price: ""
        });
    };
    const handlePriceChange = (min, max)=>{
        setCatCahnge(true);
        setPriceRange(min && max ? {
            from: min,
            to: max
        } : {});
    };
    const clearSingleFilter = (filter)=>{
        setCatCahnge(true);
        setfiltersData({
            ...filtersData,
            [filter]: filtersData?.[filter]?.map((item)=>({
                    ...item,
                    isChecked: false
                }))
        });
    };
    const clearDependentFilter = (filter)=>{
        setCatCahnge(true);
        setdependentFilters((prevState)=>{
            const updatedState = {};
            for(const category in prevState){
                if (prevState.hasOwnProperty(category)) {
                    updatedState[category] = prevState[category].values.map((item)=>({
                            ...item,
                            isChecked: false
                        }));
                }
            }
            return {
                ...prevState,
                [filter]: {
                    ...prevState[filter],
                    values: updatedState[filter]
                }
            };
        });
    };
    const debounce = (mainFunction, delay)=>{
        // Declare a variable called 'timer' to store the timer ID
        let timer;
        // Return an anonymous function that takes in any number of arguments
        return function(min, max) {
            // Clear the previous timer to prevent the execution of 'mainFunction'
            clearTimeout(timer);
            // Set a new timer that will execute 'mainFunction' after the specified delay
            timer = setTimeout(()=>{
                mainFunction(min, max);
            }, delay);
        };
    };
    // Create a new debounced version of the 'searchData'
    const debouncedSearchData = debounce(handlePriceChange, 1000);
    // Call the debounced version of 'searchData'
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            " ",
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(components_SideFiltersLoader, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(SideFilters_module_default()).sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search_filter p-2 pb-3 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex mb-1 ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "search",
                                                value: search,
                                                onChange: (e)=>{
                                                    setCatCahnge(true);
                                                    setSearch(e.target.value);
                                                },
                                                className: " rounded-0 fs-14 rounded-start border-0  w-100",
                                                placeholder: "Search by keyword(s)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                className: " h-100 rounded-0 rounded-end py-2 ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: icons/* searchLight */.bx,
                                                    alt: "searchLight",
                                                    width: 18,
                                                    height: 18
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        onClick: clearAllFilters,
                                        className: "secondary-link cursor-pointer text-decoration-underline ",
                                        children: [
                                            " ",
                                            "Clear All Filters",
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                                alwaysOpen: true,
                                className: `${(SideFilters_module_default()).accordian_main}`,
                                defaultActiveKey: [
                                    "0",
                                    "4",
                                    "3",
                                    "1",
                                    "2",
                                    "7"
                                ],
                                children: [
                                    filtersData?.categories?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: "3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header} `,
                                                children: [
                                                    "Categories",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                        onClick: ()=>{
                                                            clearSingleFilter("categories");
                                                            setdependentFilters([]);
                                                        },
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-3",
                                                            children: filtersData?.categories?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                    className: `${(SideFilters_module_default()).checkbox}`,
                                                                    onChange: handleCheckboxChange,
                                                                    name: "categories",
                                                                    checked: item.isChecked,
                                                                    type: "radio",
                                                                    id: `${index}`,
                                                                    label: `${item.label}`
                                                                }, index))
                                                        }, `default-1`)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    filtersData?.locations?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: filtersData.locations?.length > 0 ? "7" : "",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header}`,
                                                children: [
                                                    "Locations",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                        onClick: ()=>{
                                                            clearSingleFilter("locations");
                                                        },
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-3",
                                                            children: filtersData?.locations?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                    className: `${(SideFilters_module_default()).checkbox}`,
                                                                    onChange: handleCheckboxChange,
                                                                    name: "locations",
                                                                    checked: item.isChecked,
                                                                    type: "checkbox",
                                                                    id: `${index}`,
                                                                    label: `${item.location_nick}`
                                                                }, index))
                                                        }, `default-1`)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    !(filtersData?.colors?.length > 0) ? "" : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: filtersData.colors.length > 0 ? "1" : "",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header}`,
                                                children: [
                                                    "Colors",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                        onClick: ()=>{
                                                            clearSingleFilter("colors");
                                                        },
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-3",
                                                            children: filtersData.colors?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                    className: `${(SideFilters_module_default()).checkbox}`,
                                                                    onChange: handleCheckboxChange,
                                                                    name: "colors",
                                                                    checked: item.isChecked,
                                                                    type: "checkbox",
                                                                    id: `${index}`,
                                                                    label: `${item.label}`
                                                                }, index))
                                                        }, `default-1`)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    filtersData?.conditions?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: filtersData?.conditions?.length > 0 ? "2" : "",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header}`,
                                                children: [
                                                    "Condition",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                        onClick: ()=>{
                                                            clearSingleFilter("conditions");
                                                        },
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-3",
                                                            children: filtersData?.conditions?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                    className: `${(SideFilters_module_default()).checkbox}`,
                                                                    onChange: handleCheckboxChange,
                                                                    name: "conditions",
                                                                    checked: item.isChecked,
                                                                    type: "checkbox",
                                                                    id: `${index}`,
                                                                    label: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                        htmlFor: `${index}`,
                                                                        children: item.label
                                                                    })
                                                                }, item.id))
                                                        }, `default-1`)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    filtersData?.cities?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: "6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header}`,
                                                children: [
                                                    "Cities",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                        onClick: ()=>{
                                                            clearSingleFilter("cities");
                                                            setdependentFilters([]);
                                                        },
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-3",
                                                            children: filtersData?.cities?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                    className: `${(SideFilters_module_default()).checkbox}`,
                                                                    onChange: handleCheckboxChange,
                                                                    name: "cities",
                                                                    checked: item.isChecked,
                                                                    type: "radio",
                                                                    id: `${index}`,
                                                                    label: `${item.label}`
                                                                }, index))
                                                        }, `default-1`)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    filtersData?.priceRange?.maxPrice > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: filtersData?.priceRange ? "4" : "",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header}`,
                                                children: [
                                                    "Prices",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 secondary-link text-capitalize text-decoration-underline",
                                                        onClick: ()=>clearSingleFilter("conditions"),
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "d-grid position-relative justify-content-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb} mb-4 `
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            onClick: ()=>{
                                                                handlePriceChange(10000, 20000);
                                                            },
                                                            variant: "outline-secondary ",
                                                            className: "mt-2",
                                                            children: "Rs. 10,000 to Rs. 20,000"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            onClick: ()=>{
                                                                handlePriceChange(20000, 30000);
                                                            },
                                                            variant: "outline-secondary mt-2",
                                                            children: "Rs. 20,000 to Rs. 30,000"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            onClick: ()=>{
                                                                handlePriceChange(30000, 40000);
                                                            },
                                                            variant: "outline-secondary mt-2",
                                                            children: "Rs. 30,000 to Rs. 40,000"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            onClick: ()=>{
                                                                handlePriceChange(40000, 50000);
                                                            },
                                                            variant: "outline-secondary mt-2",
                                                            children: "Rs. 40,000 to Rs. 50,000"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_MultiRangeSlider, {
                                                            min: filtersData?.priceRange?.minPrice,
                                                            max: filtersData?.priceRange?.maxPrice,
                                                            minValue: filtersData?.priceRange?.minPrice,
                                                            maxValue: filtersData?.priceRange?.maxPrice,
                                                            onChange: (min, max)=>{
                                                                if (filtersData?.priceRange?.minPrice !== min.min && filtersData?.priceRange?.maxPrice !== min.max) {
                                                                    debouncedSearchData(min.min, min.max);
                                                                }
                                                            }
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    dependentFilters && Object.keys(dependentFilters).length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: ` ${(SideFilters_module_default()).sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4 mt-3 `,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()), {
                            alwaysOpen: true,
                            className: `${(SideFilters_module_default()).accordian_main} `,
                            defaultActiveKey: [
                                "0",
                                "1",
                                "2",
                                "3"
                            ],
                            children: dependentFilters && Object.keys(dependentFilters).map((val, i)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: dependentFilters[val].values.length > 0 && (filterINDFilters?.category_id || Dparams) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                        eventKey: dependentFilters[val].values.filter((item)=>item.isChecked === true).length > 0 ? "0" : i,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                className: `${(SideFilters_module_default()).nav_header} `,
                                                children: [
                                                    dependentFilters[val].label.toString().replaceAll("_", " ").replace(/\b\w/g, (c)=>c.toUpperCase()),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                        onClick: ()=>{
                                                            clearDependentFilter(val);
                                                        },
                                                        children: "Clear"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-3",
                                                            children: dependentFilters[val].values.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                    className: `${(SideFilters_module_default()).checkbox}`,
                                                                    onChange: (e)=>handleChangeDependentFilter(e, val, index),
                                                                    name: val,
                                                                    checked: item.isChecked,
                                                                    type: dependentFilters[val].inputType,
                                                                    id: `${index}`,
                                                                    label: `${item.label === 0 ? "No" : item.label === 1 ? "Yes" : item.label}${dependentFilters[val].unit !== null ? ` ${dependentFilters[val].unit}` : ""}(${item.count})`
                                                                }, index))
                                                        }, `default-1`)
                                                    })
                                                })
                                            })
                                        ]
                                    }, i)
                                }))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-lg-none d-md-block d-sm-block d-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pos-f-t",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()), {
                        backdrop: true,
                        scroll: true,
                        show: isSandwichOpen,
                        onHide: ()=>setisSandwichOpen(false),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(SideFilters_module_default()).filter_div} pt-3 `,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                                    closeButton: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: `${(SideFilters_module_default()).h2}`,
                                        children: "Filter by:"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Offcanvas_default()).Body, {
                                    style: {
                                        height: "90vh"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "search_filter p-4 pb-3 ",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "d-flex mb-1 ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `position-relative w-100 d-flex align-items-center ${(SideFilters_module_default()).searchbar}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "search",
                                                            value: search,
                                                            onChange: (e)=>{
                                                                setCatCahnge(true);
                                                                setSearch(e.target.value);
                                                            },
                                                            className: " rounded-0 fs-14 rounded-start w-100 h-100",
                                                            placeholder: "Search by keyword(s)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        className: " h-100 px-4 rounded-0 rounded-end py-1",
                                                        onClick: ()=>setisSandwichOpen(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: icons/* searchLight */.bx,
                                                            alt: "searchLightIcon",
                                                            width: 18,
                                                            height: 27
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                onClick: ()=>clearAllFilters(),
                                                className: "text-decoration-underline link  mb-2",
                                                children: "Clear all Filters"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                                            alwaysOpen: true,
                                            className: `${(SideFilters_module_default()).accordian_main}`,
                                            defaultActiveKey: [
                                                "0",
                                                "3"
                                            ],
                                            children: [
                                                filtersData?.categories?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                    eventKey: "3",
                                                    style: filtersData?.categories ? null : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                            className: `${(SideFilters_module_default()).nav_header}`,
                                                            children: [
                                                                "Categories",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ms-2 secondary-link",
                                                                    onClick: ()=>{
                                                                        clearSingleFilter("categories");
                                                                        setdependentFilters([]);
                                                                    },
                                                                    children: "Clear"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-grid",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "mb-3",
                                                                        children: filtersData?.categories?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                                className: `${(SideFilters_module_default()).checkbox}`,
                                                                                onChange: handleCheckboxChange,
                                                                                name: "categories",
                                                                                checked: item.isChecked,
                                                                                type: "radio",
                                                                                id: `${index}`,
                                                                                label: `${item.label}`
                                                                            }, index))
                                                                    }, `default-1`)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                filtersData?.locations?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                    eventKey: "4",
                                                    style: filtersData?.locations ? null : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                            className: `${(SideFilters_module_default()).nav_header}`,
                                                            children: [
                                                                "Locations",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                                    onClick: ()=>{
                                                                        clearSingleFilter("categories");
                                                                    },
                                                                    children: "Clear"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-grid",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "mb-3",
                                                                        children: filtersData?.locations?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                                className: `${(SideFilters_module_default()).checkbox}`,
                                                                                onChange: handleCheckboxChange,
                                                                                name: "locations",
                                                                                checked: item.isChecked,
                                                                                type: "checkbox",
                                                                                id: `${index}`,
                                                                                label: `${item.location_nick}`
                                                                            }, index))
                                                                    }, `default-1`)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                filtersData?.colors?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                    eventKey: "1",
                                                    style: filtersData?.colors ? null : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                            className: `${(SideFilters_module_default()).nav_header}`,
                                                            children: [
                                                                "Colors",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                                    onClick: ()=>{
                                                                        clearSingleFilter("colors");
                                                                    },
                                                                    children: "Clear"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-grid",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "mb-3",
                                                                        children: filtersData?.colors?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                                className: `${(SideFilters_module_default()).checkbox}`,
                                                                                onChange: handleCheckboxChange,
                                                                                name: "colors",
                                                                                checked: item.isChecked,
                                                                                type: "checkbox",
                                                                                id: `${index}`,
                                                                                label: `${item.label}`
                                                                            }, index))
                                                                    }, `default-1`)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                filtersData?.conditions?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                    eventKey: "2",
                                                    style: filtersData?.conditions ? null : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                            className: `${(SideFilters_module_default()).nav_header}`,
                                                            children: [
                                                                "Condition",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                                    onClick: ()=>{
                                                                        clearSingleFilter("conditions");
                                                                    },
                                                                    children: "Clear"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-grid",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "mb-3",
                                                                        children: filtersData?.conditions?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                                className: `${(SideFilters_module_default()).checkbox}`,
                                                                                onChange: handleCheckboxChange,
                                                                                name: "conditions",
                                                                                checked: item.isChecked,
                                                                                type: "checkbox",
                                                                                id: `${index}`,
                                                                                label: `${item.label}`
                                                                            }, index))
                                                                    }, `default-1`)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                filtersData?.cities?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                    eventKey: "6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                            className: `${(SideFilters_module_default()).nav_header}`,
                                                            children: [
                                                                "Cities",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                                    onClick: ()=>{
                                                                        clearSingleFilter("cities");
                                                                        setdependentFilters([]);
                                                                    },
                                                                    children: "Clear"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-grid",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "mb-3",
                                                                        children: filtersData?.cities?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                                className: `${(SideFilters_module_default()).checkbox}`,
                                                                                onChange: handleCheckboxChange,
                                                                                name: "cities",
                                                                                checked: item.isChecked,
                                                                                type: "radio",
                                                                                id: `${index}`,
                                                                                label: `${item.label}`
                                                                            }, index))
                                                                    }, `default-1`)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                filtersData?.priceRange?.minPrice ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                    eventKey: "7",
                                                    style: filtersData?.priceRange ? null : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                            className: `${(SideFilters_module_default()).nav_header}`,
                                                            children: [
                                                                "Prices",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ms-2 secondary-link text-decoration-underline",
                                                                    onClick: ()=>clearSingleFilter("priceRange"),
                                                                    children: "Clear"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-grid justify-content-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: ` d-flex justify-content-between position-relative ${(SideFilters_module_default()).nav_mb} mb-4 `,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_MultiRangeSlider, {
                                                                            min: filtersData?.priceRange?.minPrice,
                                                                            max: filtersData?.priceRange?.maxPrice,
                                                                            minValue: filtersData?.priceRange?.minPrice,
                                                                            maxValue: filtersData?.priceRange?.maxPrice,
                                                                            onChange: ({ min, max })=>debouncedSearchData(min, max)
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                        onClick: ()=>{
                                                                        // setMinValue(100);
                                                                        // setMaxValue(1500);
                                                                        },
                                                                        variant: "outline-secondary ",
                                                                        className: "mt-4",
                                                                        children: "Rs. 100 to Rs. 1500"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                        onClick: ()=>{
                                                                        // setMinValue(100);
                                                                        // setMaxValue(700);
                                                                        },
                                                                        variant: "outline-secondary mt-2",
                                                                        children: "Rs. 100 to Rs. 700"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                        onClick: ()=>{
                                                                        // setMinValue(100);
                                                                        // setMaxValue(3000);
                                                                        },
                                                                        variant: "outline-secondary mt-2",
                                                                        children: "Rs. 100 to Rs. 3000"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                        onClick: ()=>{
                                                                        // setMinValue(600);
                                                                        // setMaxValue(4000);
                                                                        },
                                                                        variant: "outline-secondary mt-2",
                                                                        children: "Rs. 600 to Rs. 4000"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()), {
                                                children: dependentFilters && Object.keys(dependentFilters).map((val, i)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: dependentFilters[val].values.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                                                            eventKey: i,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                                                    className: `${(SideFilters_module_default()).nav_header} `,
                                                                    children: [
                                                                        dependentFilters[val].label,
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ms-2 text-capitalize secondary-link text-decoration-underline",
                                                                            onClick: ()=>{
                                                                                clearDependentFilter(val);
                                                                            },
                                                                            children: "Clear"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "d-grid",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: ` d-flex justify-content-between ${(SideFilters_module_default()).nav_mb}  px-2`,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "mb-3",
                                                                                children: dependentFilters[val].values.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                                                        className: `${(SideFilters_module_default()).checkbox}`,
                                                                                        onChange: (e)=>handleChangeDependentFilter(e, val, index),
                                                                                        name: val,
                                                                                        checked: item.isChecked,
                                                                                        type: dependentFilters[val].inputType,
                                                                                        id: `${index}`,
                                                                                        label: `${item.label}${dependentFilters[val].unit !== null ? ` ${dependentFilters[val].unit}` : ""}(${item.count})`
                                                                                    }, index))
                                                                            }, `default-1`)
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }))
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_SideFilters = (SideFilters);

// EXTERNAL MODULE: ./src/styles/MobileSideFilter.module.css
var MobileSideFilter_module = __webpack_require__(36988);
var MobileSideFilter_module_default = /*#__PURE__*/__webpack_require__.n(MobileSideFilter_module);
;// CONCATENATED MODULE: ./src/components/MobileSideFilter.tsx









const MobileSideFilter = ({ filtersData, isLoading, setMobileFilter, setFilters })=>{
    const [minValue, setMinValue] = (0,react_.useState)(0);
    const [maxValue, setMaxValue] = (0,react_.useState)(1000);
    const [search, setSearch] = (0,react_.useState)("");
    const [updatedData, setUpdatedData] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        setUpdatedData(filtersData);
    }, [
        filtersData
    ]);
    (0,react_.useEffect)(()=>{
        const filteredCategories = updatedData.categories?.filter((category)=>category.isChecked === true);
        const filteredColors = updatedData.colors?.filter((color)=>color.isChecked === true);
        const filteredConditions = updatedData.conditions?.filter((condition)=>condition.isChecked === true);
        const filteredBrands = updatedData.brands?.filter((brand)=>brand.isChecked === true);
        const filteredLocations = updatedData.locations?.filter((brand)=>brand.isChecked === true);
        setFilters({
            categories: filteredCategories,
            colors: filteredColors,
            conditions: filteredConditions,
            brands: filteredBrands,
            title: search
        });
    }, [
        updatedData,
        search
    ]);
    // const data=await queryClient.getQueryData("todos")
    const handleCheckboxChange = (e)=>{
        let newValues = ({
            ...updatedData
        })(e.target.checked, "name", updatedData[e.target.name], newValues);
        newValues[e.target.name][e.target.id].isChecked = e.target.checked;
        setUpdatedData(newValues);
    };
    const clearAllFilters = ()=>{
        setSearch("");
        setUpdatedData({
            categories: updatedData?.categories?.map((category)=>({
                    ...category,
                    isChecked: false
                })),
            colors: updatedData?.colors?.map((color)=>({
                    ...color,
                    isChecked: false
                })),
            conditions: updatedData?.conditions?.map((condition)=>({
                    ...condition,
                    isChecked: false
                })),
            brands: updatedData?.brands?.map((brand)=>({
                    ...brand,
                    isChecked: false
                })),
            title: ""
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(MobileSideFilter_module_default()).filter_div} pt-3 `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex  mx-4 justify-content-between align-items-centrer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: `${(MobileSideFilter_module_default()).h2}`,
                        children: "Filter by:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: ()=>setMobileFilter(""),
                        children: "Close X"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search_filter p-4 pb-3 ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex mb-1 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `position-relative w-100 d-flex align-items-center ${(MobileSideFilter_module_default()).searchbar}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: `position-absolute `,
                                    src: search,
                                    alt: "searchIcon",
                                    width: 18,
                                    height: 18
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "search",
                                    className: "ps-5  rounded-0 rounded-start  py-2 w-100",
                                    placeholder: "Search by name"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            className: " h-100 px-4 rounded-0 rounded-end py-2 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: icons/* searchLight */.bx,
                                alt: "searchLightIcon",
                                width: 18,
                                height: 26
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                alwaysOpen: true,
                className: `${(MobileSideFilter_module_default()).accordian_main}`,
                defaultActiveKey: "0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                        eventKey: "3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                className: `${(MobileSideFilter_module_default()).nav_header}`,
                                children: [
                                    "Categories",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ms-2 secondary-link",
                                        children: [
                                            " ",
                                            "Clear"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-grid",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: ` d-flex justify-content-between ${(MobileSideFilter_module_default()).nav_mb}  px-2`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-3",
                                            children: updatedData.categories?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                    className: `${(MobileSideFilter_module_default()).checkbox}`,
                                                    onChange: handleCheckboxChange,
                                                    name: "categories",
                                                    checked: item.isChecked,
                                                    type: "checkbox",
                                                    id: `${index}`,
                                                    label: `${item.label}`
                                                }, index))
                                        }, `default-1`)
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                        eventKey: "0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                className: `${(MobileSideFilter_module_default()).nav_header} `,
                                children: [
                                    "Brand",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ms-2 secondary-link",
                                        children: [
                                            " ",
                                            "Clear"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-grid",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: ` d-flex justify-content-between ${(MobileSideFilter_module_default()).nav_mb}  px-2`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-3",
                                            children: updatedData.brands?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                    className: `${(MobileSideFilter_module_default()).checkbox}`,
                                                    onChange: handleCheckboxChange,
                                                    name: "brands",
                                                    checked: item.isChecked,
                                                    type: "checkbox",
                                                    id: `${index}`,
                                                    label: `${item.brand}(200)`
                                                }, index))
                                        }, `default-1`)
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                        eventKey: "1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                className: `${(MobileSideFilter_module_default()).nav_header}`,
                                children: [
                                    "Colors",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ms-2 secondary-link",
                                        children: [
                                            " ",
                                            "Clear"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-grid",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: ` d-flex justify-content-between ${(MobileSideFilter_module_default()).nav_mb}  px-2`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-3",
                                            children: updatedData.colors?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                    className: `${(MobileSideFilter_module_default()).checkbox}`,
                                                    onChange: handleCheckboxChange,
                                                    name: "colors",
                                                    checked: item.isChecked,
                                                    type: "checkbox",
                                                    id: `${index}`,
                                                    label: `${item.color}`
                                                }, index))
                                        }, `default-1`)
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                        eventKey: "2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                className: `${(MobileSideFilter_module_default()).nav_header}`,
                                children: [
                                    "Condition",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ms-2 secondary-link",
                                        children: [
                                            " ",
                                            "Clear"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-grid",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: ` d-flex justify-content-between ${(MobileSideFilter_module_default()).nav_mb}  px-2`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-3",
                                            children: updatedData.conditions?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                                                    className: `${(MobileSideFilter_module_default()).checkbox}`,
                                                    onChange: handleCheckboxChange,
                                                    name: "conditions",
                                                    checked: item.isChecked,
                                                    type: "checkbox",
                                                    id: `${index}`,
                                                    label: `${item.condition_item}`
                                                }, index))
                                        }, `default-1`)
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                        eventKey: "4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                                className: `${(MobileSideFilter_module_default()).nav_header}`,
                                children: [
                                    "Prices",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ms-2 secondary-link",
                                        children: [
                                            " ",
                                            "Clear"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-grid",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: ` d-flex justify-content-between ${(MobileSideFilter_module_default()).nav_mb} mb-4 `,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_MultiRangeSlider, {
                                            min: updatedData?.priceRange?.minPrice,
                                            max: updatedData?.priceRange?.maxPrice,
                                            minValue: updatedData?.priceRange?.minPrice,
                                            maxValue: updatedData?.priceRange?.maxPrice,
                                            onChange: ({ min, max })=>`min = ${min}, max = ${max}`
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_MobileSideFilter = (MobileSideFilter);

;// CONCATENATED MODULE: ./src/components/index.js








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

/***/ 36988:
/***/ ((module) => {

// Exports
module.exports = {
	"filter_div": "MobileSideFilter_filter_div__MmLJh",
	"searchbar": "MobileSideFilter_searchbar__3j7u7",
	"sideFilters": "MobileSideFilter_sideFilters__AUwQI",
	"nav_mb": "MobileSideFilter_nav_mb__qfEyU",
	"stock_span": "MobileSideFilter_stock_span__sdtts",
	"nav_header": "MobileSideFilter_nav_header__EImeJ",
	"collapsed": "MobileSideFilter_collapsed__0uwNZ",
	"checkbox": "MobileSideFilter_checkbox__RL5lL",
	"accordian_main": "MobileSideFilter_accordian_main__X9qYt",
	"h2": "MobileSideFilter_h2__xJmTJ",
	"bottom_div": "MobileSideFilter_bottom_div__yy3z3"
};


/***/ }),

/***/ 36362:
/***/ ((module) => {

// Exports
module.exports = {
	"paginationItems": "PaginationBar_paginationItems__Wk9W7"
};


/***/ }),

/***/ 63740:
/***/ ((module) => {

// Exports
module.exports = {
	"product_title": "ProductCard_product_title__Yr00S",
	"condition_container": "ProductCard_condition_container__HxXhP",
	"store": "ProductCard_store__KOkCT"
};


/***/ }),

/***/ 61446:
/***/ ((module) => {

// Exports
module.exports = {
	"sideFilters": "SideFilters_sideFilters__yQ5Sw",
	"nav_mb": "SideFilters_nav_mb__2NBgM",
	"stock_span": "SideFilters_stock_span___Au3O",
	"nav_header": "SideFilters_nav_header___01Yt",
	"collapsed": "SideFilters_collapsed__EUe4N",
	"checkbox": "SideFilters_checkbox__3yQ7N",
	"accordian_main": "SideFilters_accordian_main__6CGDW"
};


/***/ }),

/***/ 71130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/imagePlaceholder.e397bdb4.png","height":120,"width":180,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAALUlEQVR42h3GMQoAIAwEwfz/l4JiFcQ+2fOwGJgAURbOGsJRZbZwzp73h27EA2/jJw+i4QzLAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ })

};
;