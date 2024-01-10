"use strict";
exports.id = 2698;
exports.ids = [2698];
exports.modules = {

/***/ 70293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useLoadGsiScript(options = {}) {
    const { nonce, onScriptLoadSuccess, onScriptLoadError } = options;
    const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = React.useState(false);
    const onScriptLoadSuccessRef = React.useRef(onScriptLoadSuccess);
    onScriptLoadSuccessRef.current = onScriptLoadSuccess;
    const onScriptLoadErrorRef = React.useRef(onScriptLoadError);
    onScriptLoadErrorRef.current = onScriptLoadError;
    React.useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://accounts.google.com/gsi/client';
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.nonce = nonce;
        scriptTag.onload = () => {
            var _a;
            setScriptLoadedSuccessfully(true);
            (_a = onScriptLoadSuccessRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadSuccessRef);
        };
        scriptTag.onerror = () => {
            var _a;
            setScriptLoadedSuccessfully(false);
            (_a = onScriptLoadErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadErrorRef);
        };
        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, [nonce]);
    return scriptLoadedSuccessfully;
}

const GoogleOAuthContext = React.createContext(null);
function GoogleOAuthProvider({ clientId, nonce, onScriptLoadSuccess, onScriptLoadError, children, }) {
    const scriptLoadedSuccessfully = useLoadGsiScript({
        nonce,
        onScriptLoadSuccess,
        onScriptLoadError,
    });
    const contextValue = React.useMemo(() => ({
        clientId,
        scriptLoadedSuccessfully,
    }), [clientId, scriptLoadedSuccessfully]);
    return (React__default["default"].createElement(GoogleOAuthContext.Provider, { value: contextValue }, children));
}
function useGoogleOAuth() {
    const context = React.useContext(GoogleOAuthContext);
    if (!context) {
        throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
    }
    return context;
}

function extractClientId(credentialResponse) {
    var _a;
    const clientId = (_a = credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.clientId) !== null && _a !== void 0 ? _a : credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.client_id;
    return clientId;
}

const containerHeightMap = { large: 40, medium: 32, small: 20 };
function GoogleLogin({ onSuccess, onError, useOneTap, promptMomentNotification, type = 'standard', theme = 'outline', size = 'large', text, shape, logo_alignment, width, locale, click_listener, containerProps, ...props }) {
    const btnContainerRef = React.useRef(null);
    const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
    const onSuccessRef = React.useRef(onSuccess);
    onSuccessRef.current = onSuccess;
    const onErrorRef = React.useRef(onError);
    onErrorRef.current = onError;
    const promptMomentNotificationRef = React.useRef(promptMomentNotification);
    promptMomentNotificationRef.current = promptMomentNotification;
    React.useEffect(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!scriptLoadedSuccessfully)
            return;
        (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.initialize({
            client_id: clientId,
            callback: (credentialResponse) => {
                var _a;
                if (!(credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.credential)) {
                    return (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef);
                }
                const { credential, select_by } = credentialResponse;
                onSuccessRef.current({
                    credential,
                    clientId: extractClientId(credentialResponse),
                    select_by,
                });
            },
            ...props,
        });
        (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.google) === null || _d === void 0 ? void 0 : _d.accounts) === null || _e === void 0 ? void 0 : _e.id) === null || _f === void 0 ? void 0 : _f.renderButton(btnContainerRef.current, {
            type,
            theme,
            size,
            text,
            shape,
            logo_alignment,
            width,
            locale,
            click_listener,
        });
        if (useOneTap)
            (_j = (_h = (_g = window === null || window === void 0 ? void 0 : window.google) === null || _g === void 0 ? void 0 : _g.accounts) === null || _h === void 0 ? void 0 : _h.id) === null || _j === void 0 ? void 0 : _j.prompt(promptMomentNotificationRef.current);
        return () => {
            var _a, _b, _c;
            if (useOneTap)
                (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.cancel();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        clientId,
        scriptLoadedSuccessfully,
        useOneTap,
        type,
        theme,
        size,
        text,
        shape,
        logo_alignment,
        width,
        locale,
    ]);
    return (React__default["default"].createElement("div", { ...containerProps, ref: btnContainerRef, style: { height: containerHeightMap[size], ...containerProps === null || containerProps === void 0 ? void 0 : containerProps.style } }));
}

function googleLogout() {
    var _a, _b, _c;
    (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.disableAutoSelect();
}

/* eslint-disable import/export */
function useGoogleLogin({ flow = 'implicit', scope = '', onSuccess, onError, onNonOAuthError, overrideScope, state, ...props }) {
    const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
    const clientRef = React.useRef();
    const onSuccessRef = React.useRef(onSuccess);
    onSuccessRef.current = onSuccess;
    const onErrorRef = React.useRef(onError);
    onErrorRef.current = onError;
    const onNonOAuthErrorRef = React.useRef(onNonOAuthError);
    onNonOAuthErrorRef.current = onNonOAuthError;
    React.useEffect(() => {
        var _a;
        if (!scriptLoadedSuccessfully)
            return;
        const clientMethod = flow === 'implicit' ? 'initTokenClient' : 'initCodeClient';
        const client = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts.oauth2[clientMethod]({
            client_id: clientId,
            scope: overrideScope ? scope : `openid profile email ${scope}`,
            callback: (response) => {
                var _a, _b;
                if (response.error)
                    return (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef, response);
                (_b = onSuccessRef.current) === null || _b === void 0 ? void 0 : _b.call(onSuccessRef, response);
            },
            error_callback: (nonOAuthError) => {
                var _a;
                (_a = onNonOAuthErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onNonOAuthErrorRef, nonOAuthError);
            },
            state,
            ...props,
        });
        clientRef.current = client;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientId, scriptLoadedSuccessfully, flow, scope, state]);
    const loginImplicitFlow = React.useCallback((overrideConfig) => { var _a; return (_a = clientRef.current) === null || _a === void 0 ? void 0 : _a.requestAccessToken(overrideConfig); }, []);
    const loginAuthCodeFlow = React.useCallback(() => { var _a; return (_a = clientRef.current) === null || _a === void 0 ? void 0 : _a.requestCode(); }, []);
    return flow === 'implicit' ? loginImplicitFlow : loginAuthCodeFlow;
}

function useGoogleOneTapLogin({ onSuccess, onError, promptMomentNotification, cancel_on_tap_outside, prompt_parent_id, state_cookie_domain, hosted_domain, disabled, }) {
    const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
    const onSuccessRef = React.useRef(onSuccess);
    onSuccessRef.current = onSuccess;
    const onErrorRef = React.useRef(onError);
    onErrorRef.current = onError;
    const promptMomentNotificationRef = React.useRef(promptMomentNotification);
    promptMomentNotificationRef.current = promptMomentNotification;
    React.useEffect(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!scriptLoadedSuccessfully)
            return;
        if (disabled) {
            (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.cancel();
            return;
        }
        (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.google) === null || _d === void 0 ? void 0 : _d.accounts) === null || _e === void 0 ? void 0 : _e.id) === null || _f === void 0 ? void 0 : _f.initialize({
            client_id: clientId,
            callback: (credentialResponse) => {
                var _a;
                if (!(credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.credential)) {
                    return (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef);
                }
                const { credential, select_by } = credentialResponse;
                onSuccessRef.current({
                    credential,
                    clientId: extractClientId(credentialResponse),
                    select_by,
                });
            },
            hosted_domain,
            cancel_on_tap_outside,
            prompt_parent_id,
            state_cookie_domain,
        });
        (_j = (_h = (_g = window === null || window === void 0 ? void 0 : window.google) === null || _g === void 0 ? void 0 : _g.accounts) === null || _h === void 0 ? void 0 : _h.id) === null || _j === void 0 ? void 0 : _j.prompt(promptMomentNotificationRef.current);
        return () => {
            var _a, _b, _c;
            (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.cancel();
        };
    }, [
        clientId,
        scriptLoadedSuccessfully,
        cancel_on_tap_outside,
        prompt_parent_id,
        state_cookie_domain,
        hosted_domain,
        disabled,
    ]);
}

/**
 * Checks if the user granted all the specified scope or scopes
 * @returns True if all the scopes are granted
 */
function hasGrantedAllScopesGoogle(tokenResponse, firstScope, ...restScopes) {
    var _a, _b, _c;
    if (!(window === null || window === void 0 ? void 0 : window.google))
        return false;
    return (((_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.oauth2) === null || _c === void 0 ? void 0 : _c.hasGrantedAllScopes(tokenResponse, firstScope, ...restScopes)) || false);
}

/**
 * Checks if the user granted any of the specified scope or scopes.
 * @returns True if any of the scopes are granted
 */
function hasGrantedAnyScopeGoogle(tokenResponse, firstScope, ...restScopes) {
    var _a, _b, _c;
    if (!(window === null || window === void 0 ? void 0 : window.google))
        return false;
    return (((_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.oauth2) === null || _c === void 0 ? void 0 : _c.hasGrantedAnyScope(tokenResponse, firstScope, ...restScopes)) || false);
}

__webpack_unused_export__ = GoogleLogin;
__webpack_unused_export__ = GoogleOAuthProvider;
__webpack_unused_export__ = googleLogout;
__webpack_unused_export__ = hasGrantedAllScopesGoogle;
__webpack_unused_export__ = hasGrantedAnyScopeGoogle;
exports.Nq = useGoogleLogin;
__webpack_unused_export__ = useGoogleOneTapLogin;


/***/ }),

/***/ 39373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useCallbackRef;

var _react = __webpack_require__(18038);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */
function useCallbackRef() {
  return (0, _react.useState)(null);
}

/***/ }),

/***/ 85083:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(18038);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  var ref = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

var _default = useCommittedRef;
exports["default"] = _default;

/***/ }),

/***/ 77772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useEventCallback;

var _react = __webpack_require__(18038);

var _useCommittedRef = _interopRequireDefault(__webpack_require__(85083));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useEventCallback(fn) {
  var ref = (0, _useCommittedRef.default)(fn);
  return (0, _react.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ 99365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.mergeRefs = mergeRefs;
exports["default"] = void 0;

var _react = __webpack_require__(18038);

var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */


function useMergedRefs(refA, refB) {
  return (0, _react.useMemo)(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

var _default = useMergedRefs;
exports["default"] = _default;

/***/ }),

/***/ 60005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useMounted;

var _react = __webpack_require__(18038);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */
function useMounted() {
  var mounted = (0, _react.useRef)(true);
  var isMounted = (0, _react.useRef)(function () {
    return mounted.current;
  });
  (0, _react.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ 50821:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = usePrevious;

var _react = __webpack_require__(18038);

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */
function usePrevious(value) {
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ 86786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useUpdatedRef;

var _react = __webpack_require__(18038);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */
function useUpdatedRef(value) {
  var valueRef = (0, _react.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ 11689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useWillUnmount;

var _useUpdatedRef = _interopRequireDefault(__webpack_require__(86786));

var _react = __webpack_require__(18038);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */
function useWillUnmount(fn) {
  var onUnmount = (0, _useUpdatedRef.default)(fn);
  (0, _react.useEffect)(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ }),

/***/ 74225:
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
exports.dataAttr = dataAttr;
exports.dataProp = dataProp;
exports.PROPERTY_PREFIX = exports.ATTRIBUTE_PREFIX = void 0;
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
exports.ATTRIBUTE_PREFIX = ATTRIBUTE_PREFIX;
const PROPERTY_PREFIX = `rrUi`;
exports.PROPERTY_PREFIX = PROPERTY_PREFIX;

function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}

function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

/***/ }),

/***/ 86647:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;

var _activeElement = _interopRequireDefault(__webpack_require__(32117));

var _contains = _interopRequireDefault(__webpack_require__(41869));

var _canUseDOM = _interopRequireDefault(__webpack_require__(27725));

var _listen = _interopRequireDefault(__webpack_require__(31463));

var React = _interopRequireWildcard(__webpack_require__(18038));

var _reactDom = _interopRequireDefault(__webpack_require__(98704));

var _useMounted = _interopRequireDefault(__webpack_require__(60005));

var _useWillUnmount = _interopRequireDefault(__webpack_require__(11689));

var _usePrevious = _interopRequireDefault(__webpack_require__(50821));

var _useEventCallback = _interopRequireDefault(__webpack_require__(77772));

var _ModalManager = _interopRequireDefault(__webpack_require__(80382));

var _useWaitForDOMRef = _interopRequireDefault(__webpack_require__(41945));

var _useWindow = _interopRequireDefault(__webpack_require__(51320));

var _jsxRuntime = __webpack_require__(56786);

const _excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

let manager;

function getManager(window) {
  if (!manager) manager = new _ModalManager.default({
    ownerDocument: window == null ? void 0 : window.document
  });
  return manager;
}

function useModalManager(provided) {
  const window = (0, _useWindow.default)();
  const modalManager = provided || getManager(window);
  const modal = (0, React.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0, React.useCallback)(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, React.useCallback)(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal = /*#__PURE__*/(0, React.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const container = (0, _useWaitForDOMRef.default)(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = (0, _useMounted.default)();
  const prevShow = (0, _usePrevious.default)(show);
  const [exited, setExited] = (0, React.useState)(!show);
  const lastFocusRef = (0, React.useRef)(null);
  (0, React.useImperativeHandle)(ref, () => modal, [modal]);

  if (_canUseDOM.default && !prevShow && show) {
    lastFocusRef.current = (0, _activeElement.default)();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = (0, _useEventCallback.default)(() => {
    modal.add();
    removeKeydownListenerRef.current = (0, _listen.default)(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = (0, _listen.default)(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = (0, _activeElement.default)(document);

      if (modal.dialog && currentActiveElement && !(0, _contains.default)(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = (0, _useEventCallback.default)(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  (0, React.useEffect)(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  (0, React.useEffect)(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  (0, _useWillUnmount.default)(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = (0, _useEventCallback.default)(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = (0, _activeElement.default)();

    if (modal.dialog && currentActiveElement && !(0, _contains.default)(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = (0, _useEventCallback.default)(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = (0, _useEventCallback.default)(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0, React.useRef)();
  const removeKeydownListenerRef = (0, React.useRef)();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", Object.assign({}, dialogProps, {
    children: /*#__PURE__*/React.cloneElement(children, {
      role: 'document'
    })
  }));

  if (Transition) {
    dialog = /*#__PURE__*/(0, _jsxRuntime.jsx)(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: dialog
    });
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/(0, _jsxRuntime.jsx)(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = 'Modal';

var _default = Object.assign(Modal, {
  Manager: _ModalManager.default
});

exports["default"] = _default;

/***/ }),

/***/ 80382:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = exports.OPEN_DATA_ATTRIBUTE = void 0;

var _css = _interopRequireDefault(__webpack_require__(59374));

var _DataKey = __webpack_require__(74225);

var _getScrollbarWidth = _interopRequireDefault(__webpack_require__(64416));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OPEN_DATA_ATTRIBUTE = (0, _DataKey.dataAttr)('modal-open');
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */

exports.OPEN_DATA_ATTRIBUTE = OPEN_DATA_ATTRIBUTE;

class ModalManager {
  constructor({
    ownerDocument,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument;
  }

  getScrollbarWidth() {
    return (0, _getScrollbarWidth.default)(this.ownerDocument);
  }

  getElement() {
    return (this.ownerDocument || document).body;
  }

  setModalAttributes(_modal) {// For overriding
  }

  removeModalAttributes(_modal) {// For overriding
  }

  setContainerStyle(containerState) {
    const style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = `${parseInt((0, _css.default)(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    (0, _css.default)(container, style);
  }

  reset() {
    [...this.modals].forEach(m => this.remove(m));
  }

  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }

  add(modal) {
    let modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

var _default = ModalManager;
exports["default"] = _default;

/***/ }),

/***/ 64416:
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
exports["default"] = getBodyScrollbarWidth;

/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth(ownerDocument = document) {
  const window = ownerDocument.defaultView;
  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}

/***/ }),

/***/ 41945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useWaitForDOMRef;
exports.resolveContainerRef = void 0;

var _ownerDocument = _interopRequireDefault(__webpack_require__(74851));

var _canUseDOM = _interopRequireDefault(__webpack_require__(27725));

var _react = __webpack_require__(18038);

var _useWindow = _interopRequireDefault(__webpack_require__(51320));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolveContainerRef = (ref, document) => {
  if (!_canUseDOM.default) return null;
  if (ref == null) return (document || (0, _ownerDocument.default)()).body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if (ref && ('nodeType' in ref || ref.getBoundingClientRect)) return ref;
  return null;
};

exports.resolveContainerRef = resolveContainerRef;

function useWaitForDOMRef(ref, onResolved) {
  const window = (0, _useWindow.default)();
  const [resolvedRef, setRef] = (0, _react.useState)(() => resolveContainerRef(ref, window == null ? void 0 : window.document));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  (0, _react.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, _react.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/***/ }),

/***/ 51320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useWindow;
exports.WindowProvider = void 0;

var _react = __webpack_require__(18038);

var _canUseDOM = _interopRequireDefault(__webpack_require__(27725));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Context = /*#__PURE__*/(0, _react.createContext)(_canUseDOM.default ? window : undefined);
const WindowProvider = Context.Provider;
/**
 * The document "window" placed in React context. Helpful for determining
 * SSR context, or when rendering into an iframe.
 *
 * @returns the current window
 */

exports.WindowProvider = WindowProvider;

function useWindow() {
  return (0, _react.useContext)(Context);
}

/***/ }),

/***/ 32117:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = activeElement;

var _ownerDocument = _interopRequireDefault(__webpack_require__(74851));

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */
function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument.default)();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}

module.exports = exports["default"];

/***/ }),

/***/ 21590:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(5162));

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

module.exports = exports["default"];

/***/ }),

/***/ 13745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = exports.onceSupported = exports.optionsSupported = void 0;

var _canUseDOM = _interopRequireDefault(__webpack_require__(27725));

/* eslint-disable no-return-assign */
var optionsSupported = false;
exports.optionsSupported = optionsSupported;
var onceSupported = false;
exports.onceSupported = onceSupported;

try {
  var options = {
    get passive() {
      return exports.optionsSupported = optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return exports.onceSupported = onceSupported = exports.optionsSupported = optionsSupported = true;
    }

  };

  if (_canUseDOM.default) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

var _default = addEventListener;
exports["default"] = _default;

/***/ }),

/***/ 27725:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 41869:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = contains;

/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

module.exports = exports["default"];

/***/ }),

/***/ 59374:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = void 0;

var _getComputedStyle = _interopRequireDefault(__webpack_require__(6518));

var _hyphenateStyle = _interopRequireDefault(__webpack_require__(13665));

var _isTransform = _interopRequireDefault(__webpack_require__(50052));

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue((0, _hyphenateStyle.default)(property)) || (0, _getComputedStyle.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty((0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

var _default = style;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 6518:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = getComputedStyle;

var _ownerWindow = _interopRequireDefault(__webpack_require__(38942));

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */
function getComputedStyle(node, psuedoElement) {
  return (0, _ownerWindow.default)(node).getComputedStyle(node, psuedoElement);
}

module.exports = exports["default"];

/***/ }),

/***/ 5162:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = hasClass;

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ 22180:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];

/***/ }),

/***/ 13665:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(__webpack_require__(22180));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];

/***/ }),

/***/ 50052:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

module.exports = exports["default"];

/***/ }),

/***/ 31463:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = void 0;

var _addEventListener = _interopRequireDefault(__webpack_require__(13745));

var _removeEventListener = _interopRequireDefault(__webpack_require__(46034));

function listen(node, eventName, handler, options) {
  (0, _addEventListener.default)(node, eventName, handler, options);
  return function () {
    (0, _removeEventListener.default)(node, eventName, handler, options);
  };
}

var _default = listen;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 74851:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = ownerDocument;

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];

/***/ }),

/***/ 38942:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = ownerWindow;

var _ownerDocument = _interopRequireDefault(__webpack_require__(74851));

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */
function ownerWindow(node) {
  var doc = (0, _ownerDocument.default)(node);
  return doc && doc.defaultView || window;
}

module.exports = exports["default"];

/***/ }),

/***/ 44049:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = qsa;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

module.exports = exports["default"];

/***/ }),

/***/ 68123:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = removeClass;

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

module.exports = exports["default"];

/***/ }),

/***/ 46034:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = void 0;

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

var _default = removeEventListener;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 22426:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = scrollbarSize;

var _canUseDOM = _interopRequireDefault(__webpack_require__(27725));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ 58194:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);

exports.__esModule = true;
exports["default"] = transitionEnd;

var _css = _interopRequireDefault(__webpack_require__(59374));

var _listen = _interopRequireDefault(__webpack_require__(31463));

var _triggerEvent = _interopRequireDefault(__webpack_require__(93064));

function parseDuration(node) {
  var str = (0, _css.default)(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) (0, _triggerEvent.default)(element, 'transitionend', true);
  }, duration + padding);
  var remove = (0, _listen.default)(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = (0, _listen.default)(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

module.exports = exports["default"];

/***/ }),

/***/ 93064:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = triggerEvent;

/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

module.exports = exports["default"];

/***/ }),

/***/ 98138:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEventCallback = _interopRequireDefault(__webpack_require__(77772));
var _CloseButton = _interopRequireDefault(__webpack_require__(86689));
var _ModalContext = _interopRequireDefault(__webpack_require__(82526));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/React.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context = (0, React.useContext)(_ModalContext.default);
  const handleClick = (0, _useEventCallback.default)(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    ...props,
    children: [children, closeButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseButton.default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = defaultProps;
var _default = AbstractModalHeader;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 90974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
exports.getSharedManager = getSharedManager;
var _addClass = _interopRequireDefault(__webpack_require__(21590));
var _css = _interopRequireDefault(__webpack_require__(59374));
var _querySelectorAll = _interopRequireDefault(__webpack_require__(44049));
var _removeClass = _interopRequireDefault(__webpack_require__(68123));
var _ModalManager = _interopRequireDefault(__webpack_require__(80382));
const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};
class BootstrapModalManager extends _ModalManager.default {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore
    element.dataset[prop] = actual;
    (0, _css.default)(element, {
      [prop]: `${parseFloat((0, _css.default)(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== undefined) {
      delete element.dataset[prop];
      (0, _css.default)(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    (0, _addClass.default)(container, 'modal-open');
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    (0, _removeClass.default)(container, 'modal-open');
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
  }
}
let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
var _default = BootstrapModalManager;
exports["default"] = _default;

/***/ }),

/***/ 86689:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  'aria-label': _propTypes.default.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: _propTypes.default.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: _propTypes.default.oneOf(['white'])
};
const defaultProps = {
  'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/React.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
  ref: ref,
  type: "button",
  className: (0, _classnames.default)('btn-close', variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
var _default = CloseButton;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 80599:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Transition = __webpack_require__(44079);
var _transitionEndListener = _interopRequireDefault(__webpack_require__(70512));
var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__(56017));
var _TransitionWrapper = _interopRequireDefault(__webpack_require__(75265));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [_Transition.ENTERING]: 'show',
  [_Transition.ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = (0, React.useCallback)((node, isAppearing) => {
    (0, _triggerBrowserReflow.default)(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TransitionWrapper.default, {
    ref: ref,
    addEndListener: _transitionEndListener.default,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, {
      ...innerProps,
      className: (0, _classnames.default)('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
var _default = Fade;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 31772:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _addEventListener = _interopRequireDefault(__webpack_require__(13745));
var _canUseDOM = _interopRequireDefault(__webpack_require__(27725));
var _ownerDocument = _interopRequireDefault(__webpack_require__(74851));
var _removeEventListener = _interopRequireDefault(__webpack_require__(46034));
var _scrollbarSize = _interopRequireDefault(__webpack_require__(22426));
var _useCallbackRef = _interopRequireDefault(__webpack_require__(39373));
var _useEventCallback = _interopRequireDefault(__webpack_require__(77772));
var _useMergedRefs = _interopRequireDefault(__webpack_require__(99365));
var _useWillUnmount = _interopRequireDefault(__webpack_require__(11689));
var _transitionEnd = _interopRequireDefault(__webpack_require__(58194));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Modal = _interopRequireDefault(__webpack_require__(86647));
var _BootstrapModalManager = __webpack_require__(90974);
var _Fade = _interopRequireDefault(__webpack_require__(80599));
var _ModalBody = _interopRequireDefault(__webpack_require__(16385));
var _ModalContext = _interopRequireDefault(__webpack_require__(82526));
var _ModalDialog = _interopRequireDefault(__webpack_require__(19165));
var _ModalFooter = _interopRequireDefault(__webpack_require__(17340));
var _ModalHeader = _interopRequireDefault(__webpack_require__(63453));
var _ModalTitle = _interopRequireDefault(__webpack_require__(64799));
var _ThemeProvider = __webpack_require__(97956);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog.default
};

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
    ...props,
    timeout: null
  });
}
function BackdropTransition(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
    ...props,
    timeout: null
  });
}

/* eslint-enable no-use-before-define */
const Modal = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  style,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel,
  /* BaseModal props */

  show,
  animation,
  backdrop,
  keyboard,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = (0, React.useState)({});
  const [animateStaticModal, setAnimateStaticModal] = (0, React.useState)(false);
  const waitingForMouseUpRef = (0, React.useRef)(false);
  const ignoreBackdropClickRef = (0, React.useRef)(false);
  const removeStaticModalAnimationRef = (0, React.useRef)(null);
  const [modal, setModalRef] = (0, _useCallbackRef.default)();
  const mergedRef = (0, _useMergedRefs.default)(ref, setModalRef);
  const handleHide = (0, _useEventCallback.default)(onHide);
  const isRTL = (0, _ThemeProvider.useIsRTL)();
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  const modalContext = (0, React.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager) return propsManager;
    return (0, _BootstrapModalManager.getSharedManager)({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!_canUseDOM.default) return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > (0, _ownerDocument.default)(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined
    });
  }
  const handleWindowResize = (0, _useEventCallback.default)(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  (0, _useWillUnmount.default)(() => {
    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  });

  // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = e => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = (0, _transitionEnd.default)(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = e => {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null ? void 0 : onHide();
  };
  const handleEscapeKeyDown = e => {
    if (keyboard) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
    } else {
      // Call preventDefault to stop modal from closing in @restart/ui.
      e.preventDefault();
      if (backdrop === 'static') {
        // Play static modal animation.
        handleStaticModalAnimation();
      }
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };
  const handleExit = node => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing);

    // FIXME: This should work even when animation is disabled.
    (0, _addEventListener.default)(window, 'resize', handleWindowResize);
  };
  const handleExited = node => {
    if (node) node.style.display = ''; // RHL removes it sometimes
    onExited == null ? void 0 : onExited(node);

    // FIXME: This should work even when animation is disabled.
    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);
  };
  const renderBackdrop = (0, React.useCallback)(backdropProps => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...backdropProps,
    className: (0, _classnames.default)(`${bsPrefix}-backdrop`, backdropClassName, !animation && 'show')
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style,
    ...modalStyle
  };

  // If `display` is not set to block, autoFocus inside the modal fails
  // https://github.com/react-bootstrap/react-bootstrap/issues/5102
  baseModalStyle.display = 'block';
  const renderDialog = dialogProps => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: (0, _classnames.default)(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`, !animation && 'show'),
    onClick: backdrop ? handleClick : undefined,
    onMouseUp: handleMouseUp,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName,
      children: children
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalContext.default.Provider, {
    value: modalContext,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
      show: show,
      ref: mergedRef,
      backdrop: backdrop,
      container: container,
      keyboard: true // Always set true - see handleEscapeKeyDown
      ,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: onEntered,
      onExit: handleExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;
var _default = Object.assign(Modal, {
  Body: _ModalBody.default,
  Header: _ModalHeader.default,
  Title: _ModalTitle.default,
  Footer: _ModalFooter.default,
  Dialog: _ModalDialog.default,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 16385:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(98118));
var _default = (0, _createWithBsPrefix.default)('modal-body');
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 82526:
/***/ ((module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ModalContext = /*#__PURE__*/React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {}
});
var _default = ModalContext;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 19165:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(97956);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ModalDialog = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === 'string' ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...props,
    ref: ref,
    className: (0, _classnames.default)(dialogClass, className, size && `${bsPrefix}-${size}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)(`${bsPrefix}-content`, contentClassName),
      children: children
    })
  });
});
ModalDialog.displayName = 'ModalDialog';
var _default = ModalDialog;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 17340:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(98118));
var _default = (0, _createWithBsPrefix.default)('modal-footer');
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 63453:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(97956);
var _AbstractModalHeader = _interopRequireDefault(__webpack_require__(98138));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const ModalHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal-header');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AbstractModalHeader.default, {
    ref: ref,
    ...props,
    className: (0, _classnames.default)(className, bsPrefix)
  });
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 64799:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(98118));
var _divWithClassName = _interopRequireDefault(__webpack_require__(51506));
const DivStyledAsH4 = (0, _divWithClassName.default)('h4');
var _default = (0, _createWithBsPrefix.default)('modal-title', {
  Component: DivStyledAsH4
});
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 75265:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(18038));
var _Transition = _interopRequireDefault(__webpack_require__(44079));
var _useMergedRefs = _interopRequireDefault(__webpack_require__(99365));
var _safeFindDOMNode = _interopRequireDefault(__webpack_require__(77000));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/_react.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0, _react.useRef)(null);
  const mergedRef = (0, _useMergedRefs.default)(nodeRef, childRef);
  const attachRef = r => {
    mergedRef((0, _safeFindDOMNode.default)(r));
  };
  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  const handleEnter = (0, _react.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, _react.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, _react.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, _react.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, _react.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, _react.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, _react.useCallback)(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transition.default, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, {
      ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/_react.default.cloneElement(children, {
      ref: attachRef
    })
  });
});
var _default = TransitionWrapper;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 51506:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = className => /*#__PURE__*/React.forwardRef((p, ref) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  ...p,
  ref: ref,
  className: (0, _classnames.default)(p.className, className)
}));
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 77000:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = safeFindDOMNode;
var _reactDom = _interopRequireDefault(__webpack_require__(98704));
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return _reactDom.default.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
module.exports = exports.default;

/***/ }),

/***/ 70512:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = transitionEndListener;
var _css = _interopRequireDefault(__webpack_require__(59374));
var _transitionEnd = _interopRequireDefault(__webpack_require__(58194));
function parseDuration(node, property) {
  const str = (0, _css.default)(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = (0, _transitionEnd.default)(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}
module.exports = exports.default;

/***/ }),

/***/ 56017:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = triggerBrowserReflow;
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}
module.exports = exports.default;

/***/ }),

/***/ 44079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(69232));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _reactDom = _interopRequireDefault(__webpack_require__(98704));

var _config = _interopRequireDefault(__webpack_require__(39445));

var _PropTypes = __webpack_require__(4367);

var _TransitionGroupContext = _interopRequireDefault(__webpack_require__(7949));

var _reflow = __webpack_require__(1832);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0, _reflow.forceReflow)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [_reactDom.default.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config.default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : _reactDom.default.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config.default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : _react.default.cloneElement(_react.default.Children.only(children), childProps))
    );
  };

  return Transition;
}(_react.default.Component);

Transition.contextType = _TransitionGroupContext.default;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var _default = Transition;
exports["default"] = _default;

/***/ }),

/***/ 7949:
/***/ ((module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(18038));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react.default.createContext(null);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 39445:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = void 0;
var _default = {
  disabled: false
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 4367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(69232));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? 0 : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? 0 : null;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ 1832:
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
exports.forceReflow = void 0;

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

exports.forceReflow = forceReflow;

/***/ }),

/***/ 95600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// sweetalert2-react-content v5.0.7



var React = __webpack_require__(18038);
var client = __webpack_require__(89871);

const mounts = [{
  key: 'title',
  getter: swal => swal.getTitle()
}, {
  key: 'html',
  getter: swal => swal.getHtmlContainer()
}, {
  key: 'confirmButtonText',
  getter: swal => swal.getConfirmButton()
}, {
  key: 'denyButtonText',
  getter: swal => swal.getDenyButton()
}, {
  key: 'cancelButtonText',
  getter: swal => swal.getCancelButton()
}, {
  key: 'footer',
  getter: swal => swal.getFooter()
}, {
  key: 'closeButtonHtml',
  getter: swal => swal.getCloseButton()
}, {
  key: 'iconHtml',
  getter: swal => swal.getIconContent()
}, {
  key: 'loaderHtml',
  getter: swal => swal.getLoader()
}];

const noop = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

function withReactContent(ParentSwal) {
  /* Returns `params` separated into a tuple of `reactParams` (the React params that need to be rendered)
  and`otherParams` (all the other parameters, with any React params replaced with a space ' ') */
  function extractReactParams(params) {
    const reactParams = {};
    const otherParams = {};
    const mountKeys = mounts.map(mount => mount.key);
    Object.entries(params).forEach(_ref => {
      let [key, value] = _ref;
      if (mountKeys.includes(key) && /*#__PURE__*/React.isValidElement(value)) {
        reactParams[key] = value;
        otherParams[key] = ' ';
      } else {
        otherParams[key] = value;
      }
    });
    return [reactParams, otherParams];
  }
  function render(swal, reactParams) {
    Object.entries(reactParams).forEach(_ref2 => {
      let [key, value] = _ref2;
      const mount = mounts.find(mount => mount.key === key);
      const domElement = mount.getter(ParentSwal);
      const root = client.createRoot(domElement);
      root.render(value);
      swal.__roots.push(root);
    });
  }
  function unrender(swal) {
    swal.__roots.forEach(root => {
      root.unmount();
    });
    swal.__roots = [];
  }
  return class extends ParentSwal {
    static argsToParams(args) {
      if ( /*#__PURE__*/React.isValidElement(args[0]) || /*#__PURE__*/React.isValidElement(args[1])) {
        const params = {};
        ['title', 'html', 'icon'].forEach((name, index) => {
          if (args[index] !== undefined) {
            params[name] = args[index];
          }
        });
        return params;
      } else {
        return ParentSwal.argsToParams(args);
      }
    }
    _main(params, mixinParams) {
      this.__roots = [];
      this.__params = Object.assign({}, mixinParams, params);
      const [reactParams, otherParams] = extractReactParams(this.__params);
      const superWillOpen = otherParams.willOpen || noop;
      const superDidOpen = otherParams.didOpen || noop;
      const superDidDestroy = otherParams.didDestroy || noop;
      return super._main(Object.assign({}, otherParams, {
        willOpen: popup => {
          render(this, reactParams);
          superWillOpen(popup);
        },
        didOpen: popup => {
          // read more about why this setTimeout is needed here:
          // https://github.com/reactwg/react-18/discussions/5 (What about the render callback?)
          setTimeout(() => {
            superDidOpen(popup);
          });
        },
        didDestroy: popup => {
          superDidDestroy(popup);
          unrender(this);
        }
      }));
    }
    update(params) {
      Object.assign(this.__params, params);
      unrender(this);
      const [reactParams, otherParams] = extractReactParams(this.__params);
      super.update(otherParams);
      render(this, reactParams);
    }
  };
}

module.exports = withReactContent;
//# sourceMappingURL=sweetalert2-react-content.cjs.js.map


/***/ }),

/***/ 11168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function zukeeper(createFunction) {
  return (set, get) => {
    const store = createFunction(set, get);
    for (let key in store) {
      if (typeof store[key] === 'function') {
        let functionDefinition = store[key];
        store[key] = (...args) => {
          let currstate = get();
          window.postMessage({
            body: 'Innit',
            state: JSON.stringify(currstate)
          });
          functionDefinition(...args);
          currstate = get();
          window.postMessage({
            body: 'Data',
            state: JSON.stringify(currstate),
            actions: key,
          });
        };
      };
    };
    return store;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zukeeper);

/***/ }),

/***/ 63542:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ useQuery)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/utils.mjs
var utils = __webpack_require__(55971);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs
var notifyManager = __webpack_require__(96871);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/focusManager.mjs
var focusManager = __webpack_require__(66669);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/subscribable.mjs
var subscribable = __webpack_require__(92403);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/retryer.mjs
var retryer = __webpack_require__(5993);
;// CONCATENATED MODULE: ./node_modules/@tanstack/query-core/build/lib/queryObserver.mjs






class QueryObserver extends subscribable/* Subscribable */.l {
  constructor(client, options) {
    super();
    this.client = client;
    this.options = options;
    this.trackedProps = new Set();
    this.selectError = null;
    this.bindMethods();
    this.setOptions(options);
  }

  bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  }

  onSubscribe() {
    if (this.listeners.size === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }

  shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }

  shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }

  destroy() {
    this.listeners = new Set();
    this.clearStaleTimeout();
    this.clearRefetchInterval();
    this.currentQuery.removeObserver(this);
  }

  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryOptions(options);

    if (false) {}

    if (!(0,utils/* shallowEqualObjects */.VS)(prevOptions, this.options)) {
      this.client.getQueryCache().notify({
        type: 'observerOptionsUpdated',
        query: this.currentQuery,
        observer: this
      });
    }

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    const mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }

    const nextRefetchInterval = this.computeRefetchInterval(); // Update refetch interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  }

  getOptimisticResult(options) {
    const query = this.client.getQueryCache().build(this.client, options);
    return this.createResult(query, options);
  }

  getCurrentResult() {
    return this.currentResult;
  }

  trackResult(result) {
    const trackedResult = {};
    Object.keys(result).forEach(key => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackedProps.add(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }

  getCurrentQuery() {
    return this.currentQuery;
  }

  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }

  refetch({
    refetchPage,
    ...options
  } = {}) {
    return this.fetch({ ...options,
      meta: {
        refetchPage
      }
    });
  }

  fetchOptimistic(options) {
    const defaultedOptions = this.client.defaultQueryOptions(options);
    const query = this.client.getQueryCache().build(this.client, defaultedOptions);
    query.isFetchingOptimistic = true;
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }

  fetch(fetchOptions) {
    var _fetchOptions$cancelR;

    return this.executeFetch({ ...fetchOptions,
      cancelRefetch: (_fetchOptions$cancelR = fetchOptions.cancelRefetch) != null ? _fetchOptions$cancelR : true
    }).then(() => {
      this.updateResult();
      return this.currentResult;
    });
  }

  executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    let promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions != null && fetchOptions.throwOnError)) {
      promise = promise.catch(utils/* noop */.ZT);
    }

    return promise;
  }

  updateStaleTimeout() {
    this.clearStaleTimeout();

    if (utils/* isServer */.sk || this.currentResult.isStale || !(0,utils/* isValidTimeout */.PN)(this.options.staleTime)) {
      return;
    }

    const time = (0,utils/* timeUntilStale */.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    const timeout = time + 1;
    this.staleTimeoutId = setTimeout(() => {
      if (!this.currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }

  computeRefetchInterval() {
    var _this$options$refetch;

    return typeof this.options.refetchInterval === 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  }

  updateRefetchInterval(nextInterval) {
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;

    if (utils/* isServer */.sk || this.options.enabled === false || !(0,utils/* isValidTimeout */.PN)(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }

    this.refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager/* focusManager */.j.isFocused()) {
        this.executeFetch();
      }
    }, this.currentRefetchInterval);
  }

  updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  }

  clearStaleTimeout() {
    if (this.staleTimeoutId) {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = undefined;
    }
  }

  clearRefetchInterval() {
    if (this.refetchIntervalId) {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = undefined;
    }
  }

  createResult(query, options) {
    const prevQuery = this.currentQuery;
    const prevOptions = this.options;
    const prevResult = this.currentResult;
    const prevResultState = this.currentResultState;
    const prevResultOptions = this.currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    const prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    const {
      state
    } = query;
    let {
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      fetchStatus,
      status
    } = state;
    let isPreviousData = false;
    let isPlaceholderData = false;
    let data; // Optimistically set result in fetching state if needed

    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        fetchStatus = (0,retryer/* canFetch */.Kw)(query.options.networkMode) ? 'fetching' : 'paused';

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }

      if (options._optimisticResults === 'isRestoring') {
        fetchStatus = 'idle';
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdatedAt && prevQueryResult != null && prevQueryResult.isSuccess && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
      // Memoize select result
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
        data = this.selectResult;
      } else {
        try {
          this.selectFn = options.select;
          data = options.select(state.data);
          data = (0,utils/* replaceData */.oE)(prevResult == null ? void 0 : prevResult.data, data, options);
          this.selectResult = data;
          this.selectError = null;
        } catch (selectError) {
          if (false) {}

          this.selectError = selectError;
        }
      }
    } // Use query data
    else {
      data = state.data;
    } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && status === 'loading') {
      let placeholderData; // Memoize placeholder data

      if (prevResult != null && prevResult.isPlaceholderData && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);
            this.selectError = null;
          } catch (selectError) {
            if (false) {}

            this.selectError = selectError;
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = (0,utils/* replaceData */.oE)(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
        isPlaceholderData = true;
      }
    }

    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = 'error';
    }

    const isFetching = fetchStatus === 'fetching';
    const isLoading = status === 'loading';
    const isError = status === 'error';
    const result = {
      status,
      fetchStatus,
      isLoading,
      isSuccess: status === 'success',
      isError,
      isInitialLoading: isLoading && isFetching,
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isLoading,
      isLoadingError: isError && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === 'paused',
      isPlaceholderData,
      isPreviousData,
      isRefetchError: isError && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  }

  updateResult(notifyOptions) {
    const prevResult = this.currentResult;
    const nextResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify and update result if something has changed

    if ((0,utils/* shallowEqualObjects */.VS)(nextResult, prevResult)) {
      return;
    }

    this.currentResult = nextResult; // Determine which callbacks to trigger

    const defaultNotifyOptions = {
      cache: true
    };

    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }

      const {
        notifyOnChangeProps
      } = this.options;

      if (notifyOnChangeProps === 'all' || !notifyOnChangeProps && !this.trackedProps.size) {
        return true;
      }

      const includedProps = new Set(notifyOnChangeProps != null ? notifyOnChangeProps : this.trackedProps);

      if (this.options.useErrorBoundary) {
        includedProps.add('error');
      }

      return Object.keys(this.currentResult).some(key => {
        const typedKey = key;
        const changed = this.currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify({ ...defaultNotifyOptions,
      ...notifyOptions
    });
  }

  updateQuery() {
    const query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    const prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  }

  onQueryUpdate(action) {
    const notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = !action.manual;
    } else if (action.type === 'error' && !(0,retryer/* isCancelledError */.DV)(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  }

  notify(notifyOptions) {
    notifyManager/* notifyManager */.V.batch(() => {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        var _this$options$onSucce, _this$options, _this$options$onSettl, _this$options2;

        (_this$options$onSucce = (_this$options = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options, this.currentResult.data);
        (_this$options$onSettl = (_this$options2 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options2, this.currentResult.data, null);
      } else if (notifyOptions.onError) {
        var _this$options$onError, _this$options3, _this$options$onSettl2, _this$options4;

        (_this$options$onError = (_this$options3 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options3, this.currentResult.error);
        (_this$options$onSettl2 = (_this$options4 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options4, undefined, this.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        this.client.getQueryCache().notify({
          query: this.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  }

}

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}

function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    const value = typeof field === 'function' ? field(query) : field;
    return value === 'always' || value !== false && isStale(query, options);
  }

  return false;
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== 'error') && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}


//# sourceMappingURL=queryObserver.mjs.map

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs
var useSyncExternalStore = __webpack_require__(95814);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryErrorResetBoundary.mjs
'use client';


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}

const QueryErrorResetBoundaryContext = /*#__PURE__*/react_.createContext(createValue()); // HOOK

const useQueryErrorResetBoundary = () => react_.useContext(QueryErrorResetBoundaryContext); // COMPONENT

const QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /*#__PURE__*/React.createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};


//# sourceMappingURL=QueryErrorResetBoundary.mjs.map

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(98417);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/isRestoring.mjs
'use client';


const IsRestoringContext = /*#__PURE__*/react_.createContext(false);
const useIsRestoring = () => react_.useContext(IsRestoringContext);
const IsRestoringProvider = IsRestoringContext.Provider;


//# sourceMappingURL=isRestoring.mjs.map

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/utils.mjs
var lib_utils = __webpack_require__(2779);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/errorBoundaryUtils.mjs
'use client';



const ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
const useClearResetErrorBoundary = errorResetBoundary => {
  react_.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
const getHasError = ({
  result,
  errorResetBoundary,
  useErrorBoundary,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && (0,lib_utils/* shouldThrowError */.L)(useErrorBoundary, [result.error, query]);
};


//# sourceMappingURL=errorBoundaryUtils.mjs.map

;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/suspense.mjs
const ensureStaleTime = defaultedOptions => {
  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }
};
const willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
const shouldSuspend = (defaultedOptions, result, isRestoring) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
const fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).then(({
  data
}) => {
  defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
}).catch(error => {
  errorResetBoundary.clearReset();
  defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
});


//# sourceMappingURL=suspense.mjs.map

;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs









function useBaseQuery(options, Observer) {
  const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)({
    context: options.context
  });
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic'; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager/* notifyManager */.V.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager/* notifyManager */.V.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager/* notifyManager */.V.batchCalls(defaultedOptions.onSettled);
  }

  ensureStaleTime(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  useClearResetErrorBoundary(errorResetBoundary);
  const [observer] = react_.useState(() => new Observer(queryClient, defaultedOptions));
  const result = observer.getOptimisticResult(defaultedOptions);
  (0,useSyncExternalStore/* useSyncExternalStore */.$)(react_.useCallback(onStoreChange => {
    const unsubscribe = isRestoring ? () => undefined : observer.subscribe(notifyManager/* notifyManager */.V.batchCalls(onStoreChange)); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return unsubscribe;
  }, [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  react_.useEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (shouldSuspend(defaultedOptions, result, isRestoring)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  } // Handle error boundary


  if (getHasError({
    result,
    errorResetBoundary,
    useErrorBoundary: defaultedOptions.useErrorBoundary,
    query: observer.getCurrentQuery()
  })) {
    throw result.error;
  } // Handle result property usage tracking


  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}


//# sourceMappingURL=useBaseQuery.mjs.map

;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/useQuery.mjs



function useQuery(arg1, arg2, arg3) {
  const parsedOptions = (0,utils/* parseQueryArgs */._v)(arg1, arg2, arg3);
  return useBaseQuery(parsedOptions, QueryObserver);
}


//# sourceMappingURL=useQuery.mjs.map


/***/ })

};
;