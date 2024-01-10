"use strict";
exports.id = 2258;
exports.ids = [2258];
exports.modules = {

/***/ 69114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.createBreakpointHook = createBreakpointHook;
exports["default"] = void 0;

var _useMediaQuery = _interopRequireDefault(__webpack_require__(36546));

var _react = __webpack_require__(18038);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a responsive hook we a set of breakpoint names and widths.
 * You can use any valid css units as well as a numbers (for pixels).
 *
 * **NOTE:** The object key order is important! it's assumed to be in order from smallest to largest
 *
 * ```ts
 * const useBreakpoint = createBreakpointHook({
 *  xs: 0,
 *  sm: 576,
 *  md: 768,
 *  lg: 992,
 *  xl: 1200,
 * })
 * ```
 *
 * **Watch out!** using string values will sometimes construct media queries using css `calc()` which
 * is NOT supported in media queries by all browsers at the moment. use numbers for
 * the widest range of browser support.
 *
 * @param breakpointValues A object hash of names to breakpoint dimensions
 */
function createBreakpointHook(breakpointValues) {
  var names = Object.keys(breakpointValues);

  function and(query, next) {
    if (query === next) {
      return next;
    }

    return query ? query + " and " + next : next;
  }

  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }

  function getMaxQuery(breakpoint) {
    var next = getNext(breakpoint);
    var value = breakpointValues[next];
    if (typeof value === 'number') value = value - 0.2 + "px";else value = "calc(" + value + " - 0.2px)";
    return "(max-width: " + value + ")";
  }

  function getMinQuery(breakpoint) {
    var value = breakpointValues[breakpoint];

    if (typeof value === 'number') {
      value = value + "px";
    }

    return "(min-width: " + value + ")";
  }
  /**
   * Match a set of breakpoints
   *
   * ```tsx
   * const MidSizeOnly = () => {
   *   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
   *
   *   if (isMid) return <div>On a Reasonable sized Screen!</div>
   *   return null;
   * }
   * ```
   * @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
   * breakpoints together
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */


  function useBreakpoint(breakpointOrMap, direction, window) {
    var breakpointMap;

    if (typeof breakpointOrMap === 'object') {
      breakpointMap = breakpointOrMap;
      window = direction;
      direction = true;
    } else {
      var _breakpointMap;

      direction = direction || true;
      breakpointMap = (_breakpointMap = {}, _breakpointMap[breakpointOrMap] = direction, _breakpointMap);
    }

    var query = (0, _react.useMemo)(function () {
      return Object.entries(breakpointMap).reduce(function (query, _ref) {
        var key = _ref[0],
            direction = _ref[1];

        if (direction === 'up' || direction === true) {
          query = and(query, getMinQuery(key));
        }

        if (direction === 'down' || direction === true) {
          query = and(query, getMaxQuery(key));
        }

        return query;
      }, '');
    }, [JSON.stringify(breakpointMap)]);
    return (0, _useMediaQuery.default)(query, window);
  }

  return useBreakpoint;
}

var useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
var _default = useBreakpoint;
exports["default"] = _default;

/***/ }),

/***/ 36546:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = useMediaQuery;

var _useIsomorphicEffect = _interopRequireDefault(__webpack_require__(45343));

var _react = __webpack_require__(18038);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchersByWindow = new WeakMap();

var getMatcher = function getMatcher(query, targetWindow) {
  if (!query || !targetWindow) return undefined;
  var matchers = matchersByWindow.get(targetWindow) || new Map();
  matchersByWindow.set(targetWindow, matchers);
  var mql = matchers.get(query);

  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }

  return mql;
};
/**
 * Match a media query and get updates as the match changes. The media string is
 * passed directly to `window.matchMedia` and run as a Layout Effect, so initial
 * matches are returned before the browser has a chance to paint.
 *
 * ```tsx
 * function Page() {
 *   const isWide = useMediaQuery('min-width: 1000px')
 *
 *   return isWide ? "very wide" : 'not so wide'
 * }
 * ```
 *
 * Media query lists are also reused globally, hook calls for the same query
 * will only create a matcher once under the hood.
 *
 * @param query A media query
 * @param targetWindow The window to match against, uses the globally available one as a default.
 */


function useMediaQuery(query, targetWindow) {
  if (targetWindow === void 0) {
    targetWindow = typeof window === 'undefined' ? undefined : window;
  }

  var mql = getMatcher(query, targetWindow);

  var _useState = (0, _react.useState)(function () {
    return mql ? mql.matches : false;
  }),
      matches = _useState[0],
      setMatches = _useState[1];

  (0, _useIsomorphicEffect.default)(function () {
    var mql = getMatcher(query, targetWindow);

    if (!mql) {
      return setMatches(false);
    }

    var matchers = matchersByWindow.get(targetWindow);

    var handleChange = function handleChange() {
      setMatches(mql.matches);
    };

    mql.refCount++;
    mql.addListener(handleChange);
    handleChange();
    return function () {
      mql.removeListener(handleChange);
      mql.refCount--;

      if (mql.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql.media);
      }

      mql = undefined;
    };
  }, [query]);
  return matches;
}

/***/ }),

/***/ 36568:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _uncontrollable = __webpack_require__(70106);
var _ThemeProvider = __webpack_require__(97956);
var _AccordionBody = _interopRequireDefault(__webpack_require__(38078));
var _AccordionButton = _interopRequireDefault(__webpack_require__(20183));
var _AccordionCollapse = _interopRequireDefault(__webpack_require__(89171));
var _AccordionContext = _interopRequireDefault(__webpack_require__(51079));
var _AccordionHeader = _interopRequireDefault(__webpack_require__(55810));
var _AccordionItem = _interopRequireDefault(__webpack_require__(56910));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Accordion = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  });
  const prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion');
  const contextValue = (0, React.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionContext.default.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
      ref: ref,
      ...controlledProps,
      className: (0, _classnames.default)(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = 'Accordion';
var _default = Object.assign(Accordion, {
  Button: _AccordionButton.default,
  Collapse: _AccordionCollapse.default,
  Item: _AccordionItem.default,
  Header: _AccordionHeader.default,
  Body: _AccordionBody.default
});
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 38078:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(97956);
var _AccordionCollapse = _interopRequireDefault(__webpack_require__(89171));
var _AccordionItemContext = _interopRequireDefault(__webpack_require__(60354));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const AccordionBody = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion-body');
  const {
    eventKey
  } = (0, React.useContext)(_AccordionItemContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionCollapse.default, {
    eventKey: eventKey,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
      ref: ref,
      ...props,
      className: (0, _classnames.default)(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = 'AccordionBody';
var _default = AccordionBody;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 20183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
exports.useAccordionButton = useAccordionButton;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _AccordionContext = _interopRequireWildcard(__webpack_require__(51079));
var _AccordionItemContext = _interopRequireDefault(__webpack_require__(60354));
var _ThemeProvider = __webpack_require__(97956);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0, React.useContext)(_AccordionContext.default);
  return e => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter(k => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        // activeEventKey is undefined.
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
const AccordionButton = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion-button');
  const {
    eventKey
  } = (0, React.useContext)(_AccordionItemContext.default);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0, React.useContext)(_AccordionContext.default);
  if (Component === 'button') {
    props.type = 'button';
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ref: ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": eventKey === activeEventKey,
    className: (0, _classnames.default)(className, bsPrefix, !(0, _AccordionContext.isAccordionItemSelected)(activeEventKey, eventKey) && 'collapsed')
  });
});
AccordionButton.displayName = 'AccordionButton';
var _default = AccordionButton;
exports["default"] = _default;

/***/ }),

/***/ 89171:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(97956);
var _Collapse = _interopRequireDefault(__webpack_require__(22481));
var _AccordionContext = _interopRequireWildcard(__webpack_require__(51079));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * This component accepts all of [`Collapse`'s props](/utilities/transitions/#collapse-props).
 */
const AccordionCollapse = /*#__PURE__*/React.forwardRef(({
  as: Component = 'div',
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0, React.useContext)(_AccordionContext.default);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion-collapse');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Collapse.default, {
    ref: ref,
    in: (0, _AccordionContext.isAccordionItemSelected)(activeEventKey, eventKey),
    ...props,
    className: (0, _classnames.default)(className, bsPrefix),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
      children: React.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = 'AccordionCollapse';
var _default = AccordionCollapse;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 51079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;
exports.isAccordionItemSelected = isAccordionItemSelected;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
const context = /*#__PURE__*/React.createContext({});
context.displayName = 'AccordionContext';
var _default = context;
exports["default"] = _default;

/***/ }),

/***/ 55810:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(97956);
var _AccordionButton = _interopRequireDefault(__webpack_require__(20183));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const AccordionHeader = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'h2',
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion-header');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ref: ref,
    ...props,
    className: (0, _classnames.default)(className, bsPrefix),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionButton.default, {
      onClick: onClick,
      children: children
    })
  });
});
AccordionHeader.displayName = 'AccordionHeader';
var _default = AccordionHeader;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 56910:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(97956);
var _AccordionItemContext = _interopRequireDefault(__webpack_require__(60354));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const AccordionItem = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion-item');
  const contextValue = (0, React.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionItemContext.default.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
      ref: ref,
      ...props,
      className: (0, _classnames.default)(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = 'AccordionItem';
var _default = AccordionItem;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 60354:
/***/ ((module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const context = /*#__PURE__*/React.createContext({
  eventKey: ''
});
context.displayName = 'AccordionItemContext';
var _default = context;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 22481:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _css = _interopRequireDefault(__webpack_require__(59374));
var _react = _interopRequireWildcard(__webpack_require__(18038));
var _Transition = __webpack_require__(44079);
var _transitionEndListener = _interopRequireDefault(__webpack_require__(70512));
var _createChainedFunction = _interopRequireDefault(__webpack_require__(74627));
var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__(56017));
var _TransitionWrapper = _interopRequireDefault(__webpack_require__(75265));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value +
  // @ts-ignore
  parseInt((0, _css.default)(elem, margins[0]), 10) +
  // @ts-ignore
  parseInt((0, _css.default)(elem, margins[1]), 10);
}
const collapseStyles = {
  [_Transition.EXITED]: 'collapse',
  [_Transition.EXITING]: 'collapsing',
  [_Transition.ENTERING]: 'collapsing',
  [_Transition.ENTERED]: 'collapse show'
};
const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
const Collapse = /*#__PURE__*/_react.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

  /* -- Expanding -- */
  const handleEnter = (0, _react.useMemo)(() => (0, _createChainedFunction.default)(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0, _react.useMemo)(() => (0, _createChainedFunction.default)(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0, _react.useMemo)(() => (0, _createChainedFunction.default)(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);

  /* -- Collapsing -- */
  const handleExit = (0, _react.useMemo)(() => (0, _createChainedFunction.default)(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    (0, _triggerBrowserReflow.default)(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0, _react.useMemo)(() => (0, _createChainedFunction.default)(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TransitionWrapper.default, {
    ref: ref,
    addEndListener: _transitionEndListener.default,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => /*#__PURE__*/_react.default.cloneElement(children, {
      ...innerProps,
      className: (0, _classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
});

// @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps;
var _default = Collapse;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 99419:
/***/ ((module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const context = /*#__PURE__*/React.createContext(null);
context.displayName = 'NavbarContext';
var _default = context;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 10730:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _useBreakpoint = _interopRequireDefault(__webpack_require__(69114));
var _useEventCallback = _interopRequireDefault(__webpack_require__(77772));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Modal = _interopRequireDefault(__webpack_require__(86647));
var _Fade = _interopRequireDefault(__webpack_require__(80599));
var _OffcanvasBody = _interopRequireDefault(__webpack_require__(96092));
var _OffcanvasToggling = _interopRequireDefault(__webpack_require__(3404));
var _ModalContext = _interopRequireDefault(__webpack_require__(82526));
var _NavbarContext = _interopRequireDefault(__webpack_require__(99419));
var _OffcanvasHeader = _interopRequireDefault(__webpack_require__(9032));
var _OffcanvasTitle = _interopRequireDefault(__webpack_require__(4492));
var _ThemeProvider = __webpack_require__(97956);
var _BootstrapModalManager = _interopRequireWildcard(__webpack_require__(90974));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: 'start',
  renderStaticNode: false
};
function DialogTransition(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OffcanvasToggling.default, {
    ...props
  });
}
function BackdropTransition(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
    ...props
  });
}
const Offcanvas = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  'aria-labelledby': ariaLabelledby,
  placement,
  responsive,
  /* BaseModal props */

  show,
  backdrop,
  keyboard,
  scroll,
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
  renderStaticNode,
  ...props
}, ref) => {
  const modalManager = (0, React.useRef)();
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'offcanvas');
  const {
    onToggle
  } = (0, React.useContext)(_NavbarContext.default) || {};
  const [showOffcanvas, setShowOffcanvas] = (0, React.useState)(false);
  const hideResponsiveOffcanvas = (0, _useBreakpoint.default)(responsive || 'xs', 'up');
  (0, React.useEffect)(() => {
    // Handles the case where screen is resized while the responsive
    // offcanvas is shown. If `responsive` not provided, just use `show`.
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const handleHide = (0, _useEventCallback.default)(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0, React.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager) return propsManager;
    if (scroll) {
      // Have to use a different modal manager since the shared
      // one handles overflow.
      if (!modalManager.current) modalManager.current = new _BootstrapModalManager.default({
        handleContainerOverflow: false
      });
      return modalManager.current;
    }
    return (0, _BootstrapModalManager.getSharedManager)();
  }
  const handleEnter = (node, ...args) => {
    if (node) node.style.visibility = 'visible';
    onEnter == null ? void 0 : onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node) node.style.visibility = '';
    onExited == null ? void 0 : onExited(...args);
  };
  const renderBackdrop = (0, React.useCallback)(backdropProps => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...backdropProps,
    className: (0, _classnames.default)(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = dialogProps => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...dialogProps,
    ...props,
    className: (0, _classnames.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children: children
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalContext.default.Provider, {
      value: modalContext,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
        show: showOffcanvas,
        ref: ref,
        backdrop: backdrop,
        container: container,
        keyboard: keyboard,
        autoFocus: autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus: restoreFocus,
        restoreFocusOptions: restoreFocusOptions,
        onEscapeKeyDown: onEscapeKeyDown,
        onShow: onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition,
        backdropTransition: BackdropTransition,
        renderBackdrop: renderBackdrop,
        renderDialog: renderDialog
      })
    })]
  });
});
Offcanvas.displayName = 'Offcanvas';
Offcanvas.defaultProps = defaultProps;
var _default = Object.assign(Offcanvas, {
  Body: _OffcanvasBody.default,
  Header: _OffcanvasHeader.default,
  Title: _OffcanvasTitle.default
});
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 96092:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(98118));
var _default = (0, _createWithBsPrefix.default)('offcanvas-body');
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 9032:
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
const OffcanvasHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'offcanvas-header');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AbstractModalHeader.default, {
    ref: ref,
    ...props,
    className: (0, _classnames.default)(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
OffcanvasHeader.defaultProps = defaultProps;
var _default = OffcanvasHeader;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 4492:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(98118));
var _divWithClassName = _interopRequireDefault(__webpack_require__(51506));
const DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var _default = (0, _createWithBsPrefix.default)('offcanvas-title', {
  Component: DivStyledAsH5
});
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 3404:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
exports.__esModule = true;
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Transition = __webpack_require__(44079);
var _transitionEndListener = _interopRequireDefault(__webpack_require__(70512));
var _TransitionWrapper = _interopRequireDefault(__webpack_require__(75265));
var _ThemeProvider = __webpack_require__(97956);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const transitionStyles = {
  [_Transition.ENTERING]: 'show',
  [_Transition.ENTERED]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'offcanvas');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TransitionWrapper.default, {
    ref: ref,
    addEndListener: _transitionEndListener.default,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, {
      ...innerProps,
      className: (0, _classnames.default)(className, children.props.className, (status === _Transition.ENTERING || status === _Transition.EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = defaultProps;
OffcanvasToggling.displayName = 'OffcanvasToggling';
var _default = OffcanvasToggling;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 74627:
/***/ ((module, exports) => {



exports.__esModule = true;
exports["default"] = void 0;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args);
      // @ts-ignore
      f.apply(this, args);
    };
  }, null);
}
var _default = createChainedFunction;
exports["default"] = _default;
module.exports = exports.default;

/***/ })

};
;