"use strict";
exports.id = 5424;
exports.ids = [5424];
exports.modules = {

/***/ 95424:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v1: () => (/* binding */ useQueryState)
});

// UNUSED EXPORTS: createParser, parseAsArrayOf, parseAsBoolean, parseAsFloat, parseAsHex, parseAsInteger, parseAsIsoDateTime, parseAsJson, parseAsString, parseAsStringEnum, parseAsTimestamp, queryTypes, subscribeToQueryUpdates, useQueryStates

;// CONCATENATED MODULE: ./node_modules/next-usequerystate/dist/chunk-UOIJVQM4.js
// src/lib/parsers.ts
function createParser(parser) {
  return {
    ...parser,
    parseServerSide(value = "") {
      let str = "";
      if (Array.isArray(value)) {
        str = value[0];
      }
      if (typeof value === "string") {
        str = value;
      }
      return this.parse(str);
    },
    withDefault(defaultValue) {
      const nullableParse = this.parseServerSide.bind(this);
      return {
        ...this,
        defaultValue,
        parseServerSide(value = "") {
          return nullableParse(value) ?? defaultValue;
        }
      };
    },
    withOptions(options) {
      return {
        ...this,
        ...options
      };
    }
  };
}
var parseAsString = createParser({
  parse: (v) => v,
  serialize: (v) => `${v}`
});
var parseAsInteger = createParser({
  parse: (v) => {
    const int = parseInt(v);
    if (Number.isNaN(int)) {
      return null;
    }
    return int;
  },
  serialize: (v) => Math.round(v).toFixed()
});
var parseAsHex = createParser({
  parse: (v) => {
    const int = parseInt(v, 16);
    if (Number.isNaN(int)) {
      return null;
    }
    return int;
  },
  serialize: (v) => {
    const hex = Math.round(v).toString(16);
    return hex.padStart(hex.length + hex.length % 2, "0");
  }
});
var parseAsFloat = createParser({
  parse: (v) => {
    const float = parseFloat(v);
    if (Number.isNaN(float)) {
      return null;
    }
    return float;
  },
  serialize: (v) => v.toString()
});
var parseAsBoolean = createParser({
  parse: (v) => v === "true",
  serialize: (v) => Boolean(v) ? "true" : "false"
});
var parseAsTimestamp = createParser({
  parse: (v) => new Date(parseInt(v)),
  serialize: (v) => v.valueOf().toString()
});
var parseAsIsoDateTime = createParser({
  parse: (v) => new Date(v),
  serialize: (v) => v.toISOString()
});
function parseAsStringEnum(validValues) {
  return createParser({
    parse: (query) => {
      const asEnum = query;
      if (validValues.includes(asEnum)) {
        return asEnum;
      }
      return null;
    },
    serialize: (value) => value.toString()
  });
}
function parseAsJson(parser) {
  return createParser({
    parse: (query) => {
      try {
        const obj = JSON.parse(query);
        if (typeof parser === "function") {
          return parser(obj);
        } else {
          return obj;
        }
      } catch {
        return null;
      }
    },
    serialize: (value) => JSON.stringify(value)
  });
}
function parseAsArrayOf(itemParser, separator = ",") {
  return createParser({
    parse: (query) => {
      if (query === "") {
        return [];
      }
      return query.split(separator).map((item) => decodeURIComponent(item)).map(itemParser.parse).filter((value) => value !== null && value !== void 0);
    },
    serialize: (values) => values.map((value) => {
      if (itemParser.serialize) {
        return itemParser.serialize(value);
      }
      return `${value}`;
    }).map(encodeURIComponent).join(separator)
  });
}



;// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.mjs
/* harmony default export */ function mitt(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}}
//# sourceMappingURL=mitt.mjs.map

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/next-usequerystate/dist/index.js
"use client";


// src/lib/deprecated.ts
var queryTypes = {
  /**
   * @deprecated use `parseAsString` instead.
   */
  string: parseAsString,
  /**
   * @deprecated use `parseAsInteger` instead.
   */
  integer: parseAsInteger,
  /**
   * @deprecated use `parseAsFloat` instead.
   */
  float: parseAsFloat,
  /**
   * @deprecated use `parseAsBoolean` instead.
   */
  boolean: parseAsBoolean,
  /**
   * @deprecated use `parseAsTimestamp` instead.
   */
  timestamp: parseAsTimestamp,
  /**
   * @deprecated use `parseAsIsoDateTime` instead.
   */
  isoDateTime: parseAsIsoDateTime,
  /**
   * @deprecated use `parseAsStringEnum` instead.
   */
  stringEnum: parseAsStringEnum,
  /**
   * @deprecated use `parseAsJson` instead.
   */
  json: parseAsJson,
  /**
   * @deprecated use `parseAsArrayOf` instead.
   */
  array: parseAsArrayOf
};

// src/lib/sync.ts

var SYNC_EVENT_KEY = Symbol("__nextUseQueryState__SYNC__");
var NOSYNC_MARKER = "__nextUseQueryState__NO_SYNC__";
var NOTIFY_EVENT_KEY = Symbol("__nextUseQueryState__NOTIFY__");
var emitter = mitt();
function subscribeToQueryUpdates(callback) {
  emitter.on(NOTIFY_EVENT_KEY, callback);
  return () => emitter.off(NOTIFY_EVENT_KEY, callback);
}
var patched = false;
if (!patched && typeof window === "object") {
  for (const method of ["pushState", "replaceState"]) {
    const original = window.history[method].bind(window.history);
    window.history[method] = function nextUseQueryState_patchedHistory(state, title, url) {
      if (!url) {
        return original(state, title, url);
      }
      const source = title === NOSYNC_MARKER ? "internal" : "external";
      const search = new URL(url, location.origin).searchParams;
      if (source === "external") {
        setTimeout(() => {
          emitter.emit(SYNC_EVENT_KEY, search);
          emitter.emit(NOTIFY_EVENT_KEY, { search, source });
        }, 0);
      } else {
        setTimeout(() => {
          emitter.emit(NOTIFY_EVENT_KEY, { search, source });
        }, 0);
      }
      return original(state, title === NOSYNC_MARKER ? "" : title, url);
    };
  }
  patched = true;
}

// src/lib/useQueryState.ts



// src/lib/update-queue.ts
var FLUSH_RATE_LIMIT_MS = 50;
var updateQueue = /* @__PURE__ */ new Map();
var queueOptions = {
  history: "replace",
  scroll: false,
  shallow: true
};
var lastFlushTimestamp = 0;
var flushPromiseCache = null;
function enqueueQueryStringUpdate(key, value, serialize, options) {
  updateQueue.set(key, value === null ? null : serialize(value));
  if (options.history === "push") {
    queueOptions.history = "push";
  }
  if (options.scroll) {
    queueOptions.scroll = true;
  }
  if (options.shallow === false) {
    queueOptions.shallow = false;
  }
}
function getInitialStateFromQueue(key) {
  return updateQueue.get(key) ?? null;
}
function flushToURL(router) {
  if (flushPromiseCache === null) {
    flushPromiseCache = new Promise((resolve, reject) => {
      const now = performance.now();
      const timeSinceLastFlush = now - lastFlushTimestamp;
      const flushInMs = Math.max(
        0,
        Math.min(FLUSH_RATE_LIMIT_MS, FLUSH_RATE_LIMIT_MS - timeSinceLastFlush)
      );
      setTimeout(() => {
        lastFlushTimestamp = performance.now();
        const search = flushUpdateQueue(router);
        if (!search) {
          reject();
        } else {
          resolve(search);
        }
        flushPromiseCache = null;
      }, flushInMs);
    });
  }
  return flushPromiseCache;
}
function flushUpdateQueue(router) {
  const search = new URLSearchParams(window.location.search);
  if (updateQueue.size === 0) {
    return search;
  }
  const items = Array.from(updateQueue.entries());
  const options = { ...queueOptions };
  queueOptions.history = "replace";
  queueOptions.scroll = false;
  queueOptions.shallow = true;
  updateQueue.clear();
  for (const [key, value] of items) {
    if (value === null) {
      search.delete(key);
    } else {
      search.set(key, value);
    }
  }
  const query = search.toString();
  const path = window.location.pathname;
  const hash = window.location.hash;
  const url = query ? `?${query}${hash}` : `${path}${hash}`;
  try {
    if (options.shallow) {
      const updateUrl = options.history === "push" ? window.history.pushState : window.history.replaceState;
      updateUrl.call(
        window.history,
        window.history.state,
        // Our own updates have a marker to prevent syncing
        // when the URL changes (we've already sync'd them up
        // via `emitter.emit(key, newValue)` above, without
        // going through the parsers).
        NOSYNC_MARKER,
        url
      );
      if (options.scroll) {
        window.scrollTo(0, 0);
      }
    } else {
      const updateUrl = options.history === "push" ? router.push : router.replace;
      updateUrl.call(router, url, { scroll: options.scroll });
    }
    return search;
  } catch (error) {
    console.error(
      // This may fail due to rate-limiting of history methods,
      // for example Safari only allows 100 updates in a 30s window.
      `useQueryState error updating URL: ${error}`
    );
    return null;
  }
}

// src/lib/useQueryState.ts
function useQueryState(key, {
  history = "replace",
  shallow = true,
  scroll = false,
  parse = (x) => x,
  serialize = String,
  defaultValue = void 0
} = {
  history: "replace",
  scroll: false,
  shallow: true,
  parse: (x) => x,
  serialize: String,
  defaultValue: void 0
}) {
  const router = (0,navigation.useRouter)();
  const initialSearchParams = (0,navigation.useSearchParams)();
  const [internalState, setInternalState] = react_.useState(() => {
    const queueValue = getInitialStateFromQueue(key);
    const urlValue = typeof window !== "object" ? (
      // SSR
      initialSearchParams?.get(key) ?? null
    ) : (
      // Components mounted after page load must use the current URL value
      new URLSearchParams(window.location.search).get(key) ?? null
    );
    const value = queueValue ?? urlValue;
    return value === null ? null : parse(value);
  });
  const stateRef = react_.useRef(internalState);
  react_.useInsertionEffect(() => {
    function updateInternalState(state) {
      stateRef.current = state;
      setInternalState(state);
    }
    function syncFromURL(search) {
      const value = search.get(key) ?? null;
      const state = value === null ? null : parse(value);
      updateInternalState(state);
    }
    emitter.on(SYNC_EVENT_KEY, syncFromURL);
    emitter.on(key, updateInternalState);
    return () => {
      emitter.off(SYNC_EVENT_KEY, syncFromURL);
      emitter.off(key, updateInternalState);
    };
  }, [key]);
  const update = react_.useCallback(
    (stateUpdater, options = {}) => {
      const newValue = isUpdaterFunction(stateUpdater) ? stateUpdater(stateRef.current ?? defaultValue ?? null) : stateUpdater;
      emitter.emit(key, newValue);
      enqueueQueryStringUpdate(key, newValue, serialize, {
        // Call-level options take precedence over hook declaration options.
        history: options.history ?? history,
        shallow: options.shallow ?? shallow,
        scroll: options.scroll ?? scroll
      });
      return flushToURL(router);
    },
    [
      key,
      history,
      shallow,
      scroll
      //  internalState, defaultValue
    ]
  );
  return [internalState ?? defaultValue ?? null, update];
}
function isUpdaterFunction(stateUpdater) {
  return typeof stateUpdater === "function";
}

// src/lib/useQueryStates.ts


function useQueryStates(keyMap, {
  history = "replace",
  scroll = false,
  shallow = true
} = {}) {
  const router = useRouter2();
  const initialSearchParams = useSearchParams2();
  const [internalState, setInternalState] = React2.useState(() => {
    if (typeof window !== "object") {
      return parseMap(keyMap, initialSearchParams ?? new URLSearchParams());
    }
    return parseMap(keyMap, new URLSearchParams(window.location.search));
  });
  const stateRef = React2.useRef(internalState);
  React2.useInsertionEffect(() => {
    function updateInternalState(state) {
      stateRef.current = state;
      setInternalState(state);
    }
    function syncFromURL(search) {
      const state = parseMap(keyMap, search);
      updateInternalState(state);
    }
    const handlers = Object.keys(keyMap).reduce((handlers2, key) => {
      handlers2[key] = (value) => {
        const { defaultValue } = keyMap[key];
        stateRef.current = {
          ...stateRef.current,
          [key]: value ?? defaultValue ?? null
        };
        updateInternalState(stateRef.current);
      };
      return handlers2;
    }, {});
    emitter.on(SYNC_EVENT_KEY, syncFromURL);
    for (const key of Object.keys(keyMap)) {
      emitter.on(key, handlers[key]);
    }
    return () => {
      emitter.off(SYNC_EVENT_KEY, syncFromURL);
      for (const key of Object.keys(keyMap)) {
        emitter.off(key, handlers[key]);
      }
    };
  }, [keyMap]);
  const update = React2.useCallback(
    (stateUpdater, options = {}) => {
      const newState = typeof stateUpdater === "function" ? stateUpdater(stateRef.current) : stateUpdater;
      for (const [key, value] of Object.entries(newState)) {
        const { serialize } = keyMap[key];
        emitter.emit(key, value);
        enqueueQueryStringUpdate(key, value, serialize ?? String, {
          // Call-level options take precedence over hook declaration options.
          history: options.history ?? history,
          shallow: options.shallow ?? shallow,
          scroll: options.scroll ?? scroll
        });
      }
      return flushToURL(router);
    },
    [keyMap, history, shallow, scroll]
  );
  return [internalState, update];
}
function parseMap(keyMap, searchParams) {
  return Object.keys(keyMap).reduce((obj, key) => {
    const { defaultValue, parse } = keyMap[key];
    const urlQuery = searchParams?.get(key) ?? null;
    const queueQuery = getInitialStateFromQueue(key);
    const query = queueQuery ?? urlQuery;
    const value = query === null ? null : parse(query);
    obj[key] = value ?? defaultValue ?? null;
    return obj;
  }, {});
}



/***/ })

};
;