var fu = { exports: {} }, ro = {}, mu = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr = Symbol.for("react.element"), Yd = Symbol.for("react.portal"), Kd = Symbol.for("react.fragment"), Xd = Symbol.for("react.strict_mode"), Jd = Symbol.for("react.profiler"), Zd = Symbol.for("react.provider"), ep = Symbol.for("react.context"), tp = Symbol.for("react.forward_ref"), np = Symbol.for("react.suspense"), rp = Symbol.for("react.memo"), ap = Symbol.for("react.lazy"), Xs = Symbol.iterator;
function op(e) {
  return e === null || typeof e != "object" ? null : (e = Xs && e[Xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var hu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, gu = Object.assign, vu = {};
function er(e, t, n) {
  this.props = e, this.context = t, this.refs = vu, this.updater = n || hu;
}
er.prototype.isReactComponent = {};
er.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yu() {
}
yu.prototype = er.prototype;
function Ji(e, t, n) {
  this.props = e, this.context = t, this.refs = vu, this.updater = n || hu;
}
var Zi = Ji.prototype = new yu();
Zi.constructor = Ji;
gu(Zi, er.prototype);
Zi.isPureReactComponent = !0;
var Js = Array.isArray, xu = Object.prototype.hasOwnProperty, es = { current: null }, wu = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) xu.call(t, r) && !wu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), p = 0; p < u; p++) l[p] = arguments[p + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Hr, type: e, key: o, ref: s, props: a, _owner: es.current };
}
function ip(e, t) {
  return { $$typeof: Hr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ts(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Zs = /\/+/g;
function So(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sp("" + e.key) : t.toString(36);
}
function va(e, t, n, r, a) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Hr:
        case Yd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + So(s, 0) : r, Js(a) ? (n = "", e != null && (n = e.replace(Zs, "$&/") + "/"), va(a, t, n, "", function(p) {
    return p;
  })) : a != null && (ts(a) && (a = ip(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Zs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Js(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + So(o, u);
    s += va(o, t, n, l, a);
  }
  else if (l = op(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + So(o, u++), s += va(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ea(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return va(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function lp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null }, ya = { transition: null }, up = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: ya, ReactCurrentOwner: es };
function ku() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: ea, forEach: function(e, t, n) {
  ea(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ea(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ea(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ts(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = er;
G.Fragment = Kd;
G.Profiler = Jd;
G.PureComponent = Ji;
G.StrictMode = Xd;
G.Suspense = np;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
G.act = ku;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = gu({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = es.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) xu.call(t, l) && !wu.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var p = 0; p < l; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: Hr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
G.createContext = function(e) {
  return e = { $$typeof: ep, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Zd, _context: e }, e.Consumer = e;
};
G.createElement = ju;
G.createFactory = function(e) {
  var t = ju.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: tp, render: e };
};
G.isValidElement = ts;
G.lazy = function(e) {
  return { $$typeof: ap, _payload: { _status: -1, _result: e }, _init: lp };
};
G.memo = function(e, t) {
  return { $$typeof: rp, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = ya.transition;
  ya.transition = {};
  try {
    e();
  } finally {
    ya.transition = t;
  }
};
G.unstable_act = ku;
G.useCallback = function(e, t) {
  return Ie.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Ie.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Ie.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Ie.current.useEffect(e, t);
};
G.useId = function() {
  return Ie.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Ie.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Ie.current.useRef(e);
};
G.useState = function(e) {
  return Ie.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Ie.current.useTransition();
};
G.version = "18.3.1";
mu.exports = G;
var w = mu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp = w, dp = Symbol.for("react.element"), pp = Symbol.for("react.fragment"), fp = Object.prototype.hasOwnProperty, mp = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Su(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) fp.call(t, r) && !hp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: dp, type: e, key: o, ref: s, props: a, _owner: mp.current };
}
ro.Fragment = pp;
ro.jsx = Su;
ro.jsxs = Su;
fu.exports = ro;
var i = fu.exports, Cu = { exports: {} }, Ye = {}, _u = { exports: {} }, Nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, D) {
    var O = T.length;
    T.push(D);
    e: for (; 0 < O; ) {
      var Y = O - 1 >>> 1, K = T[Y];
      if (0 < a(K, D)) T[Y] = D, T[O] = K, O = Y;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var D = T[0], O = T.pop();
    if (O !== D) {
      T[0] = O;
      e: for (var Y = 0, K = T.length, Ct = K >>> 1; Y < Ct; ) {
        var Me = 2 * (Y + 1) - 1, $e = T[Me], we = Me + 1, De = T[we];
        if (0 > a($e, O)) we < K && 0 > a(De, $e) ? (T[Y] = De, T[we] = O, Y = we) : (T[Y] = $e, T[Me] = O, Y = Me);
        else if (we < K && 0 > a(De, O)) T[Y] = De, T[we] = O, Y = we;
        else break e;
      }
    }
    return D;
  }
  function a(T, D) {
    var O = T.sortIndex - D.sortIndex;
    return O !== 0 ? O : T.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, u = s.now();
    e.unstable_now = function() {
      return s.now() - u;
    };
  }
  var l = [], p = [], h = 1, f = null, v = 3, y = !1, k = !1, x = !1, F = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(T) {
    for (var D = n(p); D !== null; ) {
      if (D.callback === null) r(p);
      else if (D.startTime <= T) r(p), D.sortIndex = D.expirationTime, t(l, D);
      else break;
      D = n(p);
    }
  }
  function g(T) {
    if (x = !1, c(T), !k) if (n(l) !== null) k = !0, te(j);
    else {
      var D = n(p);
      D !== null && be(g, D.startTime - T);
    }
  }
  function j(T, D) {
    k = !1, x && (x = !1, m(P), P = -1), y = !0;
    var O = v;
    try {
      for (c(D), f = n(l); f !== null && (!(f.expirationTime > D) || T && !B()); ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          f.callback = null, v = f.priorityLevel;
          var K = Y(f.expirationTime <= D);
          D = e.unstable_now(), typeof K == "function" ? f.callback = K : f === n(l) && r(l), c(D);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Ct = !0;
      else {
        var Me = n(p);
        Me !== null && be(g, Me.startTime - D), Ct = !1;
      }
      return Ct;
    } finally {
      f = null, v = O, y = !1;
    }
  }
  var S = !1, N = null, P = -1, C = 5, E = -1;
  function B() {
    return !(e.unstable_now() - E < C);
  }
  function oe() {
    if (N !== null) {
      var T = e.unstable_now();
      E = T;
      var D = !0;
      try {
        D = N(!0, T);
      } finally {
        D ? Q() : (S = !1, N = null);
      }
    } else S = !1;
  }
  var Q;
  if (typeof d == "function") Q = function() {
    d(oe);
  };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(), L = V.port2;
    V.port1.onmessage = oe, Q = function() {
      L.postMessage(null);
    };
  } else Q = function() {
    F(oe, 0);
  };
  function te(T) {
    N = T, S || (S = !0, Q());
  }
  function be(T, D) {
    P = F(function() {
      T(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, te(j));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(T) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = v;
    }
    var O = v;
    v = D;
    try {
      return T();
    } finally {
      v = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, D) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var O = v;
    v = T;
    try {
      return D();
    } finally {
      v = O;
    }
  }, e.unstable_scheduleCallback = function(T, D, O) {
    var Y = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? Y + O : Y) : O = Y, T) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = O + K, T = { id: h++, callback: D, priorityLevel: T, startTime: O, expirationTime: K, sortIndex: -1 }, O > Y ? (T.sortIndex = O, t(p, T), n(l) === null && T === n(p) && (x ? (m(P), P = -1) : x = !0, be(g, O - Y))) : (T.sortIndex = K, t(l, T), k || y || (k = !0, te(j))), T;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(T) {
    var D = v;
    return function() {
      var O = v;
      v = D;
      try {
        return T.apply(this, arguments);
      } finally {
        v = O;
      }
    };
  };
})(Nu);
_u.exports = Nu;
var gp = _u.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp = w, Qe = gp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Eu = /* @__PURE__ */ new Set(), Nr = {};
function Sn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) Eu.add(t[e]);
}
var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, el = {}, tl = {};
function xp(e) {
  return ei.call(tl, e) ? !0 : ei.call(el, e) ? !1 : yp.test(e) ? tl[e] = !0 : (el[e] = !0, !1);
}
function wp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jp(e, t, n, r) {
  if (t === null || typeof t > "u" || wp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ae(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new Ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ns = /[\-:]([a-z])/g;
function rs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ns,
    rs
  );
  _e[t] = new Ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ns, rs);
  _e[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ns, rs);
  _e[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function as(e, t, n, r) {
  var a = _e.hasOwnProperty(t) ? _e[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jp(t, n, a, r) && (n = null), r || a === null ? xp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ta = Symbol.for("react.element"), Pn = Symbol.for("react.portal"), bn = Symbol.for("react.fragment"), os = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), zu = Symbol.for("react.provider"), Pu = Symbol.for("react.context"), is = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), ss = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), bu = Symbol.for("react.offscreen"), nl = Symbol.iterator;
function or(e) {
  return e === null || typeof e != "object" ? null : (e = nl && e[nl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, Co;
function fr(e) {
  if (Co === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Co = t && t[1] || "";
  }
  return `
` + Co + e;
}
var _o = !1;
function No(e, t) {
  if (!e || _o) return "";
  _o = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (p) {
        var r = p;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (p) {
        r = p;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (var a = p.stack.split(`
`), o = r.stack.split(`
`), s = a.length - 1, u = o.length - 1; 1 <= s && 0 <= u && a[s] !== o[u]; ) u--;
      for (; 1 <= s && 0 <= u; s--, u--) if (a[s] !== o[u]) {
        if (s !== 1 || u !== 1)
          do
            if (s--, u--, 0 > u || a[s] !== o[u]) {
              var l = `
` + a[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= u);
        break;
      }
    }
  } finally {
    _o = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function kp(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = No(e.type, !1), e;
    case 11:
      return e = No(e.type.render, !1), e;
    case 1:
      return e = No(e.type, !0), e;
    default:
      return "";
  }
}
function ai(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Pn:
      return "Portal";
    case ti:
      return "Profiler";
    case os:
      return "StrictMode";
    case ni:
      return "Suspense";
    case ri:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Pu:
      return (e.displayName || "Context") + ".Consumer";
    case zu:
      return (e._context.displayName || "Context") + ".Provider";
    case is:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ss:
      return t = e.displayName || null, t !== null ? t : ai(e.type) || "Memo";
    case qt:
      t = e._payload, e = e._init;
      try {
        return ai(e(t));
      } catch {
      }
  }
  return null;
}
function Sp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ai(t);
    case 8:
      return t === os ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cp(e) {
  var t = Mu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function na(e) {
  e._valueTracker || (e._valueTracker = Cp(e));
}
function Tu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Mu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ma(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oi(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function rl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = rn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Lu(e, t) {
  t = t.checked, t != null && as(e, "checked", t, !1);
}
function ii(e, t) {
  Lu(e, t);
  var n = rn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? si(e, t.type, n) : t.hasOwnProperty("defaultValue") && si(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function al(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function si(e, t, n) {
  (t !== "number" || Ma(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
function Bn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ol(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: rn(n) };
}
function Ru(e, t) {
  var n = rn(t.value), r = rn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function il(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ui(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ra, Au = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ra = ra || document.createElement("div"), ra.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ra.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, _p = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function(e) {
  _p.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), vr[t] = vr[e];
  });
});
function $u(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vr.hasOwnProperty(e) && vr[e] ? ("" + t).trim() : t + "px";
}
function Du(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = $u(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Np = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Np[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function di(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pi = null;
function ls(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fi = null, Un = null, qn = null;
function sl(e) {
  if (e = Yr(e)) {
    if (typeof fi != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = lo(t), fi(e.stateNode, e.type, t));
  }
}
function Ou(e) {
  Un ? qn ? qn.push(e) : qn = [e] : Un = e;
}
function Fu() {
  if (Un) {
    var e = Un, t = qn;
    if (qn = Un = null, sl(e), t) for (e = 0; e < t.length; e++) sl(t[e]);
  }
}
function Bu(e, t) {
  return e(t);
}
function Uu() {
}
var Eo = !1;
function qu(e, t, n) {
  if (Eo) return e(t, n);
  Eo = !0;
  try {
    return Bu(e, t, n);
  } finally {
    Eo = !1, (Un !== null || qn !== null) && (Uu(), Fu());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = lo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var mi = !1;
if (Lt) try {
  var ir = {};
  Object.defineProperty(ir, "passive", { get: function() {
    mi = !0;
  } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
} catch {
  mi = !1;
}
function Ep(e, t, n, r, a, o, s, u, l) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (h) {
    this.onError(h);
  }
}
var yr = !1, Ta = null, La = !1, hi = null, zp = { onError: function(e) {
  yr = !0, Ta = e;
} };
function Pp(e, t, n, r, a, o, s, u, l) {
  yr = !1, Ta = null, Ep.apply(zp, arguments);
}
function bp(e, t, n, r, a, o, s, u, l) {
  if (Pp.apply(this, arguments), yr) {
    if (yr) {
      var p = Ta;
      yr = !1, Ta = null;
    } else throw Error(z(198));
    La || (La = !0, hi = p);
  }
}
function Cn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ll(e) {
  if (Cn(e) !== e) throw Error(z(188));
}
function Mp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var o = a.alternate;
    if (o === null) {
      if (r = a.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === o.child) {
      for (o = a.child; o; ) {
        if (o === n) return ll(a), e;
        if (o === r) return ll(a), t;
        o = o.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) n = a, r = o;
    else {
      for (var s = !1, u = a.child; u; ) {
        if (u === n) {
          s = !0, n = a, r = o;
          break;
        }
        if (u === r) {
          s = !0, r = a, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!s) {
        for (u = o.child; u; ) {
          if (u === n) {
            s = !0, n = o, r = a;
            break;
          }
          if (u === r) {
            s = !0, r = o, n = a;
            break;
          }
          u = u.sibling;
        }
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function Gu(e) {
  return e = Mp(e), e !== null ? Hu(e) : null;
}
function Hu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wu = Qe.unstable_scheduleCallback, ul = Qe.unstable_cancelCallback, Tp = Qe.unstable_shouldYield, Lp = Qe.unstable_requestPaint, pe = Qe.unstable_now, Rp = Qe.unstable_getCurrentPriorityLevel, us = Qe.unstable_ImmediatePriority, Qu = Qe.unstable_UserBlockingPriority, Ra = Qe.unstable_NormalPriority, Ip = Qe.unstable_LowPriority, Yu = Qe.unstable_IdlePriority, ao = null, kt = null;
function Ap(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function") try {
    kt.onCommitFiberRoot(ao, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : Op, $p = Math.log, Dp = Math.LN2;
function Op(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - ($p(e) / Dp | 0) | 0;
}
var aa = 64, oa = 4194304;
function hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ia(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~a;
    u !== 0 ? r = hr(u) : (o &= s, o !== 0 && (r = hr(o)));
  } else s = n & ~a, s !== 0 ? r = hr(s) : o !== 0 && (r = hr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Fp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - pt(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Fp(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function gi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ku() {
  var e = aa;
  return aa <<= 1, !(aa & 4194240) && (aa = 64), e;
}
function zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
}
function Up(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - pt(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function cs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var Z = 0;
function Xu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ju, ds, Zu, ec, tc, vi = !1, ia = [], Yt = null, Kt = null, Xt = null, Pr = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), Gt = [], qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      br.delete(t.pointerId);
  }
}
function sr(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Yr(t), t !== null && ds(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Vp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Yt = sr(Yt, e, t, n, r, a), !0;
    case "dragenter":
      return Kt = sr(Kt, e, t, n, r, a), !0;
    case "mouseover":
      return Xt = sr(Xt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Pr.set(o, sr(Pr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, br.set(o, sr(br.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function nc(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Vu(n), t !== null) {
          e.blockedOn = t, tc(e.priority, function() {
            Zu(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      pi = r, n.target.dispatchEvent(r), pi = null;
    } else return t = Yr(n), t !== null && ds(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function dl(e, t, n) {
  xa(e) && n.delete(t);
}
function Gp() {
  vi = !1, Yt !== null && xa(Yt) && (Yt = null), Kt !== null && xa(Kt) && (Kt = null), Xt !== null && xa(Xt) && (Xt = null), Pr.forEach(dl), br.forEach(dl);
}
function lr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vi || (vi = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Gp)));
}
function Mr(e) {
  function t(a) {
    return lr(a, e);
  }
  if (0 < ia.length) {
    lr(ia[0], e);
    for (var n = 1; n < ia.length; n++) {
      var r = ia[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Yt !== null && lr(Yt, e), Kt !== null && lr(Kt, e), Xt !== null && lr(Xt, e), Pr.forEach(t), br.forEach(t), n = 0; n < Gt.length; n++) r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) nc(n), n.blockedOn === null && Gt.shift();
}
var Vn = $t.ReactCurrentBatchConfig, Aa = !0;
function Hp(e, t, n, r) {
  var a = Z, o = Vn.transition;
  Vn.transition = null;
  try {
    Z = 1, ps(e, t, n, r);
  } finally {
    Z = a, Vn.transition = o;
  }
}
function Wp(e, t, n, r) {
  var a = Z, o = Vn.transition;
  Vn.transition = null;
  try {
    Z = 4, ps(e, t, n, r);
  } finally {
    Z = a, Vn.transition = o;
  }
}
function ps(e, t, n, r) {
  if (Aa) {
    var a = yi(e, t, n, r);
    if (a === null) Do(e, t, r, $a, n), cl(e, r);
    else if (Vp(a, e, t, n, r)) r.stopPropagation();
    else if (cl(e, r), t & 4 && -1 < qp.indexOf(e)) {
      for (; a !== null; ) {
        var o = Yr(a);
        if (o !== null && Ju(o), o = yi(e, t, n, r), o === null && Do(e, t, r, $a, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Do(e, t, r, null, n);
  }
}
var $a = null;
function yi(e, t, n, r) {
  if ($a = null, e = ls(r), e = pn(e), e !== null) if (t = Cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Vu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $a = e, null;
}
function rc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rp()) {
        case us:
          return 1;
        case Qu:
          return 4;
        case Ra:
        case Ip:
          return 16;
        case Yu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, fs = null, wa = null;
function ac() {
  if (wa) return wa;
  var e, t = fs, n = t.length, r, a = "value" in Wt ? Wt.value : Wt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return wa = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ja(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sa() {
  return !0;
}
function pl() {
  return !1;
}
function Ke(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? sa : pl, this.isPropagationStopped = pl, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sa);
  }, persist: function() {
  }, isPersistent: sa }), t;
}
var tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ms = Ke(tr), Qr = ce({}, tr, { view: 0, detail: 0 }), Qp = Ke(Qr), Po, bo, ur, oo = ce({}, Qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (Po = e.screenX - ur.screenX, bo = e.screenY - ur.screenY) : bo = Po = 0, ur = e), Po);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : bo;
} }), fl = Ke(oo), Yp = ce({}, oo, { dataTransfer: 0 }), Kp = Ke(Yp), Xp = ce({}, Qr, { relatedTarget: 0 }), Mo = Ke(Xp), Jp = ce({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zp = Ke(Jp), ef = ce({}, tr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), tf = Ke(ef), nf = ce({}, tr, { data: 0 }), ml = Ke(nf), rf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, af = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, of = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function sf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = of[e]) ? !!t[e] : !1;
}
function hs() {
  return sf;
}
var lf = ce({}, Qr, { key: function(e) {
  if (e.key) {
    var t = rf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ja(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? af[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hs, charCode: function(e) {
  return e.type === "keypress" ? ja(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ja(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), uf = Ke(lf), cf = ce({}, oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hl = Ke(cf), df = ce({}, Qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hs }), pf = Ke(df), ff = ce({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), mf = Ke(ff), hf = ce({}, oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), gf = Ke(hf), vf = [9, 13, 27, 32], gs = Lt && "CompositionEvent" in window, xr = null;
Lt && "documentMode" in document && (xr = document.documentMode);
var yf = Lt && "TextEvent" in window && !xr, oc = Lt && (!gs || xr && 8 < xr && 11 >= xr), gl = " ", vl = !1;
function ic(e, t) {
  switch (e) {
    case "keyup":
      return vf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function sc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Mn = !1;
function xf(e, t) {
  switch (e) {
    case "compositionend":
      return sc(t);
    case "keypress":
      return t.which !== 32 ? null : (vl = !0, gl);
    case "textInput":
      return e = t.data, e === gl && vl ? null : e;
    default:
      return null;
  }
}
function wf(e, t) {
  if (Mn) return e === "compositionend" || !gs && ic(e, t) ? (e = ac(), wa = fs = Wt = null, Mn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return oc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jf[e.type] : t === "textarea";
}
function lc(e, t, n, r) {
  Ou(r), t = Da(t, "onChange"), 0 < t.length && (n = new ms("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wr = null, Tr = null;
function kf(e) {
  xc(e, 0);
}
function io(e) {
  var t = Rn(e);
  if (Tu(t)) return e;
}
function Sf(e, t) {
  if (e === "change") return t;
}
var uc = !1;
if (Lt) {
  var To;
  if (Lt) {
    var Lo = "oninput" in document;
    if (!Lo) {
      var xl = document.createElement("div");
      xl.setAttribute("oninput", "return;"), Lo = typeof xl.oninput == "function";
    }
    To = Lo;
  } else To = !1;
  uc = To && (!document.documentMode || 9 < document.documentMode);
}
function wl() {
  wr && (wr.detachEvent("onpropertychange", cc), Tr = wr = null);
}
function cc(e) {
  if (e.propertyName === "value" && io(Tr)) {
    var t = [];
    lc(t, Tr, e, ls(e)), qu(kf, t);
  }
}
function Cf(e, t, n) {
  e === "focusin" ? (wl(), wr = t, Tr = n, wr.attachEvent("onpropertychange", cc)) : e === "focusout" && wl();
}
function _f(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return io(Tr);
}
function Nf(e, t) {
  if (e === "click") return io(t);
}
function Ef(e, t) {
  if (e === "input" || e === "change") return io(t);
}
function zf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mt = typeof Object.is == "function" ? Object.is : zf;
function Lr(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!ei.call(t, a) || !mt(e[a], t[a])) return !1;
  }
  return !0;
}
function jl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function kl(e, t) {
  var n = jl(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = jl(n);
  }
}
function dc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function pc() {
  for (var e = window, t = Ma(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ma(e.document);
  }
  return t;
}
function vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Pf(e) {
  var t = pc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && dc(n.ownerDocument.documentElement, n)) {
    if (r !== null && vs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = kl(n, o);
        var s = kl(
          n,
          r
        );
        a && s && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var bf = Lt && "documentMode" in document && 11 >= document.documentMode, Tn = null, xi = null, jr = null, wi = !1;
function Sl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wi || Tn == null || Tn !== Ma(r) || (r = Tn, "selectionStart" in r && vs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && Lr(jr, r) || (jr = r, r = Da(xi, "onSelect"), 0 < r.length && (t = new ms("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tn)));
}
function la(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ln = { animationend: la("Animation", "AnimationEnd"), animationiteration: la("Animation", "AnimationIteration"), animationstart: la("Animation", "AnimationStart"), transitionend: la("Transition", "TransitionEnd") }, Ro = {}, fc = {};
Lt && (fc = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
function so(e) {
  if (Ro[e]) return Ro[e];
  if (!Ln[e]) return e;
  var t = Ln[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in fc) return Ro[e] = t[n];
  return e;
}
var mc = so("animationend"), hc = so("animationiteration"), gc = so("animationstart"), vc = so("transitionend"), yc = /* @__PURE__ */ new Map(), Cl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function on(e, t) {
  yc.set(e, t), Sn(t, [e]);
}
for (var Io = 0; Io < Cl.length; Io++) {
  var Ao = Cl[Io], Mf = Ao.toLowerCase(), Tf = Ao[0].toUpperCase() + Ao.slice(1);
  on(Mf, "on" + Tf);
}
on(mc, "onAnimationEnd");
on(hc, "onAnimationIteration");
on(gc, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(vc, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function _l(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, bp(r, t, void 0, e), e.currentTarget = null;
}
function xc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, p = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        _l(a, u, p), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, p = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        _l(a, u, p), o = l;
      }
    }
  }
  if (La) throw e = hi, La = !1, hi = null, e;
}
function re(e, t) {
  var n = t[_i];
  n === void 0 && (n = t[_i] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (wc(t, e, 2, !1), n.add(r));
}
function $o(e, t, n) {
  var r = 0;
  t && (r |= 4), wc(n, e, r, t);
}
var ua = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[ua]) {
    e[ua] = !0, Eu.forEach(function(n) {
      n !== "selectionchange" && (Lf.has(n) || $o(n, !1, e), $o(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ua] || (t[ua] = !0, $o("selectionchange", !1, t));
  }
}
function wc(e, t, n, r) {
  switch (rc(t)) {
    case 1:
      var a = Hp;
      break;
    case 4:
      a = Wp;
      break;
    default:
      a = ps;
  }
  n = a.bind(null, t, n, e), a = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Do(e, t, n, r, a) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var u = r.stateNode.containerInfo;
      if (u === a || u.nodeType === 8 && u.parentNode === a) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === a || l.nodeType === 8 && l.parentNode === a)) return;
        s = s.return;
      }
      for (; u !== null; ) {
        if (s = pn(u), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  qu(function() {
    var p = o, h = ls(n), f = [];
    e: {
      var v = yc.get(e);
      if (v !== void 0) {
        var y = ms, k = e;
        switch (e) {
          case "keypress":
            if (ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = uf;
            break;
          case "focusin":
            k = "focus", y = Mo;
            break;
          case "focusout":
            k = "blur", y = Mo;
            break;
          case "beforeblur":
          case "afterblur":
            y = Mo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = fl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = pf;
            break;
          case mc:
          case hc:
          case gc:
            y = Zp;
            break;
          case vc:
            y = mf;
            break;
          case "scroll":
            y = Qp;
            break;
          case "wheel":
            y = gf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = hl;
        }
        var x = (t & 4) !== 0, F = !x && e === "scroll", m = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var d = p, c; d !== null; ) {
          c = d;
          var g = c.stateNode;
          if (c.tag === 5 && g !== null && (c = g, m !== null && (g = zr(d, m), g != null && x.push(Ir(d, g, c)))), F) break;
          d = d.return;
        }
        0 < x.length && (v = new y(v, k, null, n, h), f.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== pi && (k = n.relatedTarget || n.fromElement) && (pn(k) || k[Rt])) break e;
        if ((y || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = p, k = k ? pn(k) : null, k !== null && (F = Cn(k), k !== F || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = p), y !== k)) {
          if (x = fl, g = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = hl, g = "onPointerLeave", m = "onPointerEnter", d = "pointer"), F = y == null ? v : Rn(y), c = k == null ? v : Rn(k), v = new x(g, d + "leave", y, n, h), v.target = F, v.relatedTarget = c, g = null, pn(h) === p && (x = new x(m, d + "enter", k, n, h), x.target = c, x.relatedTarget = F, g = x), F = g, y && k) t: {
            for (x = y, m = k, d = 0, c = x; c; c = En(c)) d++;
            for (c = 0, g = m; g; g = En(g)) c++;
            for (; 0 < d - c; ) x = En(x), d--;
            for (; 0 < c - d; ) m = En(m), c--;
            for (; d--; ) {
              if (x === m || m !== null && x === m.alternate) break t;
              x = En(x), m = En(m);
            }
            x = null;
          }
          else x = null;
          y !== null && Nl(f, v, y, x, !1), k !== null && F !== null && Nl(f, F, k, x, !0);
        }
      }
      e: {
        if (v = p ? Rn(p) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var j = Sf;
        else if (yl(v)) if (uc) j = Ef;
        else {
          j = _f;
          var S = Cf;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (j = Nf);
        if (j && (j = j(e, p))) {
          lc(f, j, n, h);
          break e;
        }
        S && S(e, v, p), e === "focusout" && (S = v._wrapperState) && S.controlled && v.type === "number" && si(v, "number", v.value);
      }
      switch (S = p ? Rn(p) : window, e) {
        case "focusin":
          (yl(S) || S.contentEditable === "true") && (Tn = S, xi = p, jr = null);
          break;
        case "focusout":
          jr = xi = Tn = null;
          break;
        case "mousedown":
          wi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wi = !1, Sl(f, n, h);
          break;
        case "selectionchange":
          if (bf) break;
        case "keydown":
        case "keyup":
          Sl(f, n, h);
      }
      var N;
      if (gs) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Mn ? ic(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (oc && n.locale !== "ko" && (Mn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Mn && (N = ac()) : (Wt = h, fs = "value" in Wt ? Wt.value : Wt.textContent, Mn = !0)), S = Da(p, P), 0 < S.length && (P = new ml(P, e, null, n, h), f.push({ event: P, listeners: S }), N ? P.data = N : (N = sc(n), N !== null && (P.data = N)))), (N = yf ? xf(e, n) : wf(e, n)) && (p = Da(p, "onBeforeInput"), 0 < p.length && (h = new ml("onBeforeInput", "beforeinput", null, n, h), f.push({ event: h, listeners: p }), h.data = N));
    }
    xc(f, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Da(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = zr(e, n), o != null && r.unshift(Ir(e, o, a)), o = zr(e, t), o != null && r.push(Ir(e, o, a))), e = e.return;
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nl(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, p = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && p !== null && (u = p, a ? (l = zr(n, o), l != null && s.unshift(Ir(n, l, u))) : a || (l = zr(n, o), l != null && s.push(Ir(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Rf = /\r\n?/g, If = /\u0000|\uFFFD/g;
function El(e) {
  return (typeof e == "string" ? e : "" + e).replace(Rf, `
`).replace(If, "");
}
function ca(e, t, n) {
  if (t = El(t), El(e) !== t && n) throw Error(z(425));
}
function Oa() {
}
var ji = null, ki = null;
function Si(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ci = typeof setTimeout == "function" ? setTimeout : void 0, Af = typeof clearTimeout == "function" ? clearTimeout : void 0, zl = typeof Promise == "function" ? Promise : void 0, $f = typeof queueMicrotask == "function" ? queueMicrotask : typeof zl < "u" ? function(e) {
  return zl.resolve(null).then(e).catch(Df);
} : Ci;
function Df(e) {
  setTimeout(function() {
    throw e;
  });
}
function Oo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Mr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Mr(t);
}
function Jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pl(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var nr = Math.random().toString(36).slice(2), wt = "__reactFiber$" + nr, Ar = "__reactProps$" + nr, Rt = "__reactContainer$" + nr, _i = "__reactEvents$" + nr, Of = "__reactListeners$" + nr, Ff = "__reactHandles$" + nr;
function pn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rt] || n[wt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pl(e); e !== null; ) {
        if (n = e[wt]) return n;
        e = Pl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Yr(e) {
  return e = e[wt] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function lo(e) {
  return e[Ar] || null;
}
var Ni = [], In = -1;
function sn(e) {
  return { current: e };
}
function ae(e) {
  0 > In || (e.current = Ni[In], Ni[In] = null, In--);
}
function ne(e, t) {
  In++, Ni[In] = e.current, e.current = t;
}
var an = {}, Pe = sn(an), Be = sn(!1), yn = an;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ue(e) {
  return e = e.childContextTypes, e != null;
}
function Fa() {
  ae(Be), ae(Pe);
}
function bl(e, t, n) {
  if (Pe.current !== an) throw Error(z(168));
  ne(Pe, t), ne(Be, n);
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, Sp(e) || "Unknown", a));
  return ce({}, n, r);
}
function Ba(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, yn = Pe.current, ne(Pe, e), ne(Be, Be.current), !0;
}
function Ml(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = jc(e, t, yn), r.__reactInternalMemoizedMergedChildContext = e, ae(Be), ae(Pe), ne(Pe, e)) : ae(Be), ne(Be, n);
}
var Pt = null, uo = !1, Fo = !1;
function kc(e) {
  Pt === null ? Pt = [e] : Pt.push(e);
}
function Bf(e) {
  uo = !0, kc(e);
}
function ln() {
  if (!Fo && Pt !== null) {
    Fo = !0;
    var e = 0, t = Z;
    try {
      var n = Pt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Pt = null, uo = !1;
    } catch (a) {
      throw Pt !== null && (Pt = Pt.slice(e + 1)), Wu(us, ln), a;
    } finally {
      Z = t, Fo = !1;
    }
  }
  return null;
}
var An = [], $n = 0, Ua = null, qa = 0, Je = [], Ze = 0, xn = null, bt = 1, Mt = "";
function cn(e, t) {
  An[$n++] = qa, An[$n++] = Ua, Ua = e, qa = t;
}
function Sc(e, t, n) {
  Je[Ze++] = bt, Je[Ze++] = Mt, Je[Ze++] = xn, xn = e;
  var r = bt;
  e = Mt;
  var a = 32 - pt(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - pt(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, bt = 1 << 32 - pt(t) + a | n << a | r, Mt = o + e;
  } else bt = 1 << o | n << a | r, Mt = e;
}
function ys(e) {
  e.return !== null && (cn(e, 1), Sc(e, 1, 0));
}
function xs(e) {
  for (; e === Ua; ) Ua = An[--$n], An[$n] = null, qa = An[--$n], An[$n] = null;
  for (; e === xn; ) xn = Je[--Ze], Je[Ze] = null, Mt = Je[--Ze], Je[Ze] = null, bt = Je[--Ze], Je[Ze] = null;
}
var We = null, He = null, se = !1, dt = null;
function Cc(e, t) {
  var n = et(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Tl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, He = Jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, He = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? { id: bt, overflow: Mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, He = null, !0) : !1;
    default:
      return !1;
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zi(e) {
  if (se) {
    var t = He;
    if (t) {
      var n = t;
      if (!Tl(e, t)) {
        if (Ei(e)) throw Error(z(418));
        t = Jt(n.nextSibling);
        var r = We;
        t && Tl(e, t) ? Cc(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, We = e);
      }
    } else {
      if (Ei(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, se = !1, We = e;
    }
  }
}
function Ll(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function da(e) {
  if (e !== We) return !1;
  if (!se) return Ll(e), se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Si(e.type, e.memoizedProps)), t && (t = He)) {
    if (Ei(e)) throw _c(), Error(z(418));
    for (; t; ) Cc(e, t), t = Jt(t.nextSibling);
  }
  if (Ll(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = We ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function _c() {
  for (var e = He; e; ) e = Jt(e.nextSibling);
}
function Yn() {
  He = We = null, se = !1;
}
function ws(e) {
  dt === null ? dt = [e] : dt.push(e);
}
var Uf = $t.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var u = a.refs;
        s === null ? delete u[o] : u[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function pa(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Rl(e) {
  var t = e._init;
  return t(e._payload);
}
function Nc(e) {
  function t(m, d) {
    if (e) {
      var c = m.deletions;
      c === null ? (m.deletions = [d], m.flags |= 16) : c.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), d = d.sibling;
    return null;
  }
  function r(m, d) {
    for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
    return m;
  }
  function a(m, d) {
    return m = nn(m, d), m.index = 0, m.sibling = null, m;
  }
  function o(m, d, c) {
    return m.index = c, e ? (c = m.alternate, c !== null ? (c = c.index, c < d ? (m.flags |= 2, d) : c) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, d, c, g) {
    return d === null || d.tag !== 6 ? (d = Wo(c, m.mode, g), d.return = m, d) : (d = a(d, c), d.return = m, d);
  }
  function l(m, d, c, g) {
    var j = c.type;
    return j === bn ? h(m, d, c.props.children, g, c.key) : d !== null && (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qt && Rl(j) === d.type) ? (g = a(d, c.props), g.ref = cr(m, d, c), g.return = m, g) : (g = za(c.type, c.key, c.props, null, m.mode, g), g.ref = cr(m, d, c), g.return = m, g);
  }
  function p(m, d, c, g) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== c.containerInfo || d.stateNode.implementation !== c.implementation ? (d = Qo(c, m.mode, g), d.return = m, d) : (d = a(d, c.children || []), d.return = m, d);
  }
  function h(m, d, c, g, j) {
    return d === null || d.tag !== 7 ? (d = gn(c, m.mode, g, j), d.return = m, d) : (d = a(d, c), d.return = m, d);
  }
  function f(m, d, c) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Wo("" + d, m.mode, c), d.return = m, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ta:
          return c = za(d.type, d.key, d.props, null, m.mode, c), c.ref = cr(m, null, d), c.return = m, c;
        case Pn:
          return d = Qo(d, m.mode, c), d.return = m, d;
        case qt:
          var g = d._init;
          return f(m, g(d._payload), c);
      }
      if (mr(d) || or(d)) return d = gn(d, m.mode, c, null), d.return = m, d;
      pa(m, d);
    }
    return null;
  }
  function v(m, d, c, g) {
    var j = d !== null ? d.key : null;
    if (typeof c == "string" && c !== "" || typeof c == "number") return j !== null ? null : u(m, d, "" + c, g);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ta:
          return c.key === j ? l(m, d, c, g) : null;
        case Pn:
          return c.key === j ? p(m, d, c, g) : null;
        case qt:
          return j = c._init, v(
            m,
            d,
            j(c._payload),
            g
          );
      }
      if (mr(c) || or(c)) return j !== null ? null : h(m, d, c, g, null);
      pa(m, c);
    }
    return null;
  }
  function y(m, d, c, g, j) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return m = m.get(c) || null, u(d, m, "" + g, j);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ta:
          return m = m.get(g.key === null ? c : g.key) || null, l(d, m, g, j);
        case Pn:
          return m = m.get(g.key === null ? c : g.key) || null, p(d, m, g, j);
        case qt:
          var S = g._init;
          return y(m, d, c, S(g._payload), j);
      }
      if (mr(g) || or(g)) return m = m.get(c) || null, h(d, m, g, j, null);
      pa(d, g);
    }
    return null;
  }
  function k(m, d, c, g) {
    for (var j = null, S = null, N = d, P = d = 0, C = null; N !== null && P < c.length; P++) {
      N.index > P ? (C = N, N = null) : C = N.sibling;
      var E = v(m, N, c[P], g);
      if (E === null) {
        N === null && (N = C);
        break;
      }
      e && N && E.alternate === null && t(m, N), d = o(E, d, P), S === null ? j = E : S.sibling = E, S = E, N = C;
    }
    if (P === c.length) return n(m, N), se && cn(m, P), j;
    if (N === null) {
      for (; P < c.length; P++) N = f(m, c[P], g), N !== null && (d = o(N, d, P), S === null ? j = N : S.sibling = N, S = N);
      return se && cn(m, P), j;
    }
    for (N = r(m, N); P < c.length; P++) C = y(N, m, P, c[P], g), C !== null && (e && C.alternate !== null && N.delete(C.key === null ? P : C.key), d = o(C, d, P), S === null ? j = C : S.sibling = C, S = C);
    return e && N.forEach(function(B) {
      return t(m, B);
    }), se && cn(m, P), j;
  }
  function x(m, d, c, g) {
    var j = or(c);
    if (typeof j != "function") throw Error(z(150));
    if (c = j.call(c), c == null) throw Error(z(151));
    for (var S = j = null, N = d, P = d = 0, C = null, E = c.next(); N !== null && !E.done; P++, E = c.next()) {
      N.index > P ? (C = N, N = null) : C = N.sibling;
      var B = v(m, N, E.value, g);
      if (B === null) {
        N === null && (N = C);
        break;
      }
      e && N && B.alternate === null && t(m, N), d = o(B, d, P), S === null ? j = B : S.sibling = B, S = B, N = C;
    }
    if (E.done) return n(
      m,
      N
    ), se && cn(m, P), j;
    if (N === null) {
      for (; !E.done; P++, E = c.next()) E = f(m, E.value, g), E !== null && (d = o(E, d, P), S === null ? j = E : S.sibling = E, S = E);
      return se && cn(m, P), j;
    }
    for (N = r(m, N); !E.done; P++, E = c.next()) E = y(N, m, P, E.value, g), E !== null && (e && E.alternate !== null && N.delete(E.key === null ? P : E.key), d = o(E, d, P), S === null ? j = E : S.sibling = E, S = E);
    return e && N.forEach(function(oe) {
      return t(m, oe);
    }), se && cn(m, P), j;
  }
  function F(m, d, c, g) {
    if (typeof c == "object" && c !== null && c.type === bn && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ta:
          e: {
            for (var j = c.key, S = d; S !== null; ) {
              if (S.key === j) {
                if (j = c.type, j === bn) {
                  if (S.tag === 7) {
                    n(m, S.sibling), d = a(S, c.props.children), d.return = m, m = d;
                    break e;
                  }
                } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qt && Rl(j) === S.type) {
                  n(m, S.sibling), d = a(S, c.props), d.ref = cr(m, S, c), d.return = m, m = d;
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            c.type === bn ? (d = gn(c.props.children, m.mode, g, c.key), d.return = m, m = d) : (g = za(c.type, c.key, c.props, null, m.mode, g), g.ref = cr(m, d, c), g.return = m, m = g);
          }
          return s(m);
        case Pn:
          e: {
            for (S = c.key; d !== null; ) {
              if (d.key === S) if (d.tag === 4 && d.stateNode.containerInfo === c.containerInfo && d.stateNode.implementation === c.implementation) {
                n(m, d.sibling), d = a(d, c.children || []), d.return = m, m = d;
                break e;
              } else {
                n(m, d);
                break;
              }
              else t(m, d);
              d = d.sibling;
            }
            d = Qo(c, m.mode, g), d.return = m, m = d;
          }
          return s(m);
        case qt:
          return S = c._init, F(m, d, S(c._payload), g);
      }
      if (mr(c)) return k(m, d, c, g);
      if (or(c)) return x(m, d, c, g);
      pa(m, c);
    }
    return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, d !== null && d.tag === 6 ? (n(m, d.sibling), d = a(d, c), d.return = m, m = d) : (n(m, d), d = Wo(c, m.mode, g), d.return = m, m = d), s(m)) : n(m, d);
  }
  return F;
}
var Kn = Nc(!0), Ec = Nc(!1), Va = sn(null), Ga = null, Dn = null, js = null;
function ks() {
  js = Dn = Ga = null;
}
function Ss(e) {
  var t = Va.current;
  ae(Va), e._currentValue = t;
}
function Pi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Gn(e, t) {
  Ga = e, js = Dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function nt(e) {
  var t = e._currentValue;
  if (js !== e) if (e = { context: e, memoizedValue: t, next: null }, Dn === null) {
    if (Ga === null) throw Error(z(308));
    Dn = e, Ga.dependencies = { lanes: 0, firstContext: e };
  } else Dn = Dn.next = e;
  return t;
}
var fn = null;
function Cs(e) {
  fn === null ? fn = [e] : fn.push(e);
}
function zc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Cs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function _s(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Pc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, W & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, It(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Cs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, It(e, n);
}
function ka(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, cs(e, n);
  }
}
function Il(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? a = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? a = o = t : o = o.next = t;
    } else a = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ha(e, t, n, r) {
  var a = e.updateQueue;
  Vt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, p = l.next;
    l.next = null, s === null ? o = p : s.next = p, s = l;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== s && (u === null ? h.firstBaseUpdate = p : u.next = p, h.lastBaseUpdate = l));
  }
  if (o !== null) {
    var f = a.baseState;
    s = 0, h = p = l = null, u = o;
    do {
      var v = u.lane, y = u.eventTime;
      if ((r & v) === v) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var k = e, x = u;
          switch (v = t, y = n, x.tag) {
            case 1:
              if (k = x.payload, typeof k == "function") {
                f = k.call(y, f, v);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, v = typeof k == "function" ? k.call(y, f, v) : k, v == null) break e;
              f = ce({}, f, v);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = a.effects, v === null ? a.effects = [u] : v.push(u));
      } else y = { eventTime: y, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (p = h = y, l = f) : h = h.next = y, s |= v;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, a.lastBaseUpdate = v, a.shared.pending = null;
      }
    } while (!0);
    if (h === null && (l = f), a.baseState = l, a.firstBaseUpdate = p, a.lastBaseUpdate = h, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    jn |= s, e.lanes = s, e.memoizedState = f;
  }
}
function Al(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Kr = {}, St = sn(Kr), $r = sn(Kr), Dr = sn(Kr);
function mn(e) {
  if (e === Kr) throw Error(z(174));
  return e;
}
function Ns(e, t) {
  switch (ne(Dr, t), ne($r, e), ne(St, Kr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ui(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ui(t, e);
  }
  ae(St), ne(St, t);
}
function Xn() {
  ae(St), ae($r), ae(Dr);
}
function bc(e) {
  mn(Dr.current);
  var t = mn(St.current), n = ui(t, e.type);
  t !== n && (ne($r, e), ne(St, n));
}
function Es(e) {
  $r.current === e && (ae(St), ae($r));
}
var le = sn(0);
function Wa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Bo = [];
function zs() {
  for (var e = 0; e < Bo.length; e++) Bo[e]._workInProgressVersionPrimary = null;
  Bo.length = 0;
}
var Sa = $t.ReactCurrentDispatcher, Uo = $t.ReactCurrentBatchConfig, wn = 0, ue = null, he = null, ye = null, Qa = !1, kr = !1, Or = 0, qf = 0;
function Ne() {
  throw Error(z(321));
}
function Ps(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
  return !0;
}
function bs(e, t, n, r, a, o) {
  if (wn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sa.current = e === null || e.memoizedState === null ? Wf : Qf, e = n(r, a), kr) {
    o = 0;
    do {
      if (kr = !1, Or = 0, 25 <= o) throw Error(z(301));
      o += 1, ye = he = null, t.updateQueue = null, Sa.current = Yf, e = n(r, a);
    } while (kr);
  }
  if (Sa.current = Ya, t = he !== null && he.next !== null, wn = 0, ye = he = ue = null, Qa = !1, t) throw Error(z(300));
  return e;
}
function Ms() {
  var e = Or !== 0;
  return Or = 0, e;
}
function xt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? ue.memoizedState = ye = e : ye = ye.next = e, ye;
}
function rt() {
  if (he === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ye === null ? ue.memoizedState : ye.next;
  if (t !== null) ye = t, he = e;
  else {
    if (e === null) throw Error(z(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ye === null ? ue.memoizedState = ye = e : ye = ye.next = e;
  }
  return ye;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qo(e) {
  var t = rt(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = he, a = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = o.next, o.next = s;
    }
    r.baseQueue = a = o, n.pending = null;
  }
  if (a !== null) {
    o = a.next, r = r.baseState;
    var u = s = null, l = null, p = o;
    do {
      var h = p.lane;
      if ((wn & h) === h) l !== null && (l = l.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var f = {
          lane: h,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        l === null ? (u = l = f, s = r) : l = l.next = f, ue.lanes |= h, jn |= h;
      }
      p = p.next;
    } while (p !== null && p !== o);
    l === null ? s = r : l.next = u, mt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ue.lanes |= o, jn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vo(e) {
  var t = rt(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    mt(o, t.memoizedState) || (Fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Mc() {
}
function Tc(e, t) {
  var n = ue, r = rt(), a = t(), o = !mt(r.memoizedState, a);
  if (o && (r.memoizedState = a, Fe = !0), r = r.queue, Ts(Ic.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ye !== null && ye.memoizedState.tag & 1) {
    if (n.flags |= 2048, Br(9, Rc.bind(null, n, r, a, t), void 0, null), xe === null) throw Error(z(349));
    wn & 30 || Lc(n, t, a);
  }
  return a;
}
function Lc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Rc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ac(t) && $c(e);
}
function Ic(e, t, n) {
  return n(function() {
    Ac(t) && $c(e);
  });
}
function Ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function $c(e) {
  var t = It(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function $l(e) {
  var t = xt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hf.bind(null, ue, e), [t.memoizedState, e];
}
function Br(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Dc() {
  return rt().memoizedState;
}
function Ca(e, t, n, r) {
  var a = xt();
  ue.flags |= e, a.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r);
}
function co(e, t, n, r) {
  var a = rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (o = s.destroy, r !== null && Ps(r, s.deps)) {
      a.memoizedState = Br(t, n, o, r);
      return;
    }
  }
  ue.flags |= e, a.memoizedState = Br(1 | t, n, o, r);
}
function Dl(e, t) {
  return Ca(8390656, 8, e, t);
}
function Ts(e, t) {
  return co(2048, 8, e, t);
}
function Oc(e, t) {
  return co(4, 2, e, t);
}
function Fc(e, t) {
  return co(4, 4, e, t);
}
function Bc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Uc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, co(4, 4, Bc.bind(null, t, e), n);
}
function Ls() {
}
function qc(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Vc(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gc(e, t, n) {
  return wn & 21 ? (mt(n, t) || (n = Ku(), ue.lanes |= n, jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function Vf(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Uo.transition;
  Uo.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, Uo.transition = r;
  }
}
function Hc() {
  return rt().memoizedState;
}
function Gf(e, t, n) {
  var r = tn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wc(e)) Qc(t, n);
  else if (n = zc(e, t, n, r), n !== null) {
    var a = Re();
    ft(n, e, r, a), Yc(n, t, r);
  }
}
function Hf(e, t, n) {
  var r = tn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wc(e)) Qc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, mt(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, Cs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = zc(e, t, a, r), n !== null && (a = Re(), ft(n, e, r, a), Yc(n, t, r));
  }
}
function Wc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Qc(e, t) {
  kr = Qa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Yc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, cs(e, n);
  }
}
var Ya = { readContext: nt, useCallback: Ne, useContext: Ne, useEffect: Ne, useImperativeHandle: Ne, useInsertionEffect: Ne, useLayoutEffect: Ne, useMemo: Ne, useReducer: Ne, useRef: Ne, useState: Ne, useDebugValue: Ne, useDeferredValue: Ne, useTransition: Ne, useMutableSource: Ne, useSyncExternalStore: Ne, useId: Ne, unstable_isNewReconciler: !1 }, Wf = { readContext: nt, useCallback: function(e, t) {
  return xt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: nt, useEffect: Dl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ca(
    4194308,
    4,
    Bc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ca(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ca(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = xt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = xt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gf.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = xt();
  return e = { current: e }, t.memoizedState = e;
}, useState: $l, useDebugValue: Ls, useDeferredValue: function(e) {
  return xt().memoizedState = e;
}, useTransition: function() {
  var e = $l(!1), t = e[0];
  return e = Vf.bind(null, e[1]), xt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, a = xt();
  if (se) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(z(349));
    wn & 30 || Lc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Dl(Ic.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Br(9, Rc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = xt(), t = xe.identifierPrefix;
  if (se) {
    var n = Mt, r = bt;
    n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = qf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Qf = {
  readContext: nt,
  useCallback: qc,
  useContext: nt,
  useEffect: Ts,
  useImperativeHandle: Uc,
  useInsertionEffect: Oc,
  useLayoutEffect: Fc,
  useMemo: Vc,
  useReducer: qo,
  useRef: Dc,
  useState: function() {
    return qo(Fr);
  },
  useDebugValue: Ls,
  useDeferredValue: function(e) {
    var t = rt();
    return Gc(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = qo(Fr)[0], t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: Mc,
  useSyncExternalStore: Tc,
  useId: Hc,
  unstable_isNewReconciler: !1
}, Yf = { readContext: nt, useCallback: qc, useContext: nt, useEffect: Ts, useImperativeHandle: Uc, useInsertionEffect: Oc, useLayoutEffect: Fc, useMemo: Vc, useReducer: Vo, useRef: Dc, useState: function() {
  return Vo(Fr);
}, useDebugValue: Ls, useDeferredValue: function(e) {
  var t = rt();
  return he === null ? t.memoizedState = e : Gc(t, he.memoizedState, e);
}, useTransition: function() {
  var e = Vo(Fr)[0], t = rt().memoizedState;
  return [e, t];
}, useMutableSource: Mc, useSyncExternalStore: Tc, useId: Hc, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var po = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), a = tn(e), o = Tt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Zt(e, o, a), t !== null && (ft(t, e, a, r), ka(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), a = tn(e), o = Tt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Zt(e, o, a), t !== null && (ft(t, e, a, r), ka(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = tn(e), a = Tt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Zt(e, a, r), t !== null && (ft(t, e, r, n), ka(t, e, r));
} };
function Ol(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(a, o) : !0;
}
function Kc(e, t, n) {
  var r = !1, a = an, o = t.contextType;
  return typeof o == "object" && o !== null ? o = nt(o) : (a = Ue(t) ? yn : Pe.current, r = t.contextTypes, o = (r = r != null) ? Qn(e, a) : an), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = po, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Fl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && po.enqueueReplaceState(t, t.state, null);
}
function Mi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, _s(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = nt(o) : (o = Ue(t) ? yn : Pe.current, a.context = Qn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (bi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && po.enqueueReplaceState(a, a.state, null), Ha(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += kp(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Go(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Kf = typeof WeakMap == "function" ? WeakMap : Map;
function Xc(e, t, n) {
  n = Tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Xa || (Xa = !0, Ui = r), Ti(e, t);
  }, n;
}
function Jc(e, t, n) {
  n = Tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      Ti(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ti(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Bl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = cm.bind(null, e, t, n), t.then(e, e));
}
function Ul(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ql(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Zt(n, t, 1))), n.lanes |= 1), e);
}
var Xf = $t.ReactCurrentOwner, Fe = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Ec(t, null, n, r) : Kn(t, e.child, n, r);
}
function Vl(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Gn(t, a), r = bs(e, t, n, r, o, a), n = Ms(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, At(e, t, a)) : (se && n && ys(t), t.flags |= 1, Le(e, t, r, a), t.child);
}
function Gl(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Bs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Zc(e, t, o, r, a)) : (e = za(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Lr, n(s, r) && e.ref === t.ref) return At(e, t, a);
  }
  return t.flags |= 1, e = nn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Zc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Lr(o, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, At(e, t, a);
  }
  return Li(e, t, n, r, a);
}
function ed(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(Fn, Ge), Ge |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(Fn, Ge), Ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ne(Fn, Ge), Ge |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ne(Fn, Ge), Ge |= r;
  return Le(e, t, a, n), t.child;
}
function td(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Li(e, t, n, r, a) {
  var o = Ue(n) ? yn : Pe.current;
  return o = Qn(t, o), Gn(t, a), n = bs(e, t, n, r, o, a), r = Ms(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, At(e, t, a)) : (se && r && ys(t), t.flags |= 1, Le(e, t, n, a), t.child);
}
function Hl(e, t, n, r, a) {
  if (Ue(n)) {
    var o = !0;
    Ba(t);
  } else o = !1;
  if (Gn(t, a), t.stateNode === null) _a(e, t), Kc(t, n, r), Mi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = nt(p) : (p = Ue(n) ? yn : Pe.current, p = Qn(t, p));
    var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== p) && Fl(t, s, r, p), Vt = !1;
    var v = t.memoizedState;
    s.state = v, Ha(t, r, s, a), l = t.memoizedState, u !== r || v !== l || Be.current || Vt ? (typeof h == "function" && (bi(t, n, h, r), l = t.memoizedState), (u = Vt || Ol(t, n, u, r, v, l, p)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = p, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Pc(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : ut(t.type, u), s.props = p, f = t.pendingProps, v = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = nt(l) : (l = Ue(n) ? yn : Pe.current, l = Qn(t, l));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== f || v !== l) && Fl(t, s, r, l), Vt = !1, v = t.memoizedState, s.state = v, Ha(t, r, s, a);
    var k = t.memoizedState;
    u !== f || v !== k || Be.current || Vt ? (typeof y == "function" && (bi(t, n, y, r), k = t.memoizedState), (p = Vt || Ol(t, n, p, r, v, k, l) || !1) ? (h || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = l, r = p) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, o, a);
}
function Ri(e, t, n, r, a, o) {
  td(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Ml(t, n, !1), At(e, t, o);
  r = t.stateNode, Xf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Kn(t, e.child, null, o), t.child = Kn(t, null, u, o)) : Le(e, t, u, o), t.memoizedState = r.state, a && Ml(t, n, !0), t.child;
}
function nd(e) {
  var t = e.stateNode;
  t.pendingContext ? bl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bl(e, t.context, !1), Ns(e, t.containerInfo);
}
function Wl(e, t, n, r, a) {
  return Yn(), ws(a), t.flags |= 256, Le(e, t, n, r), t.child;
}
var Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ai(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rd(e, t, n) {
  var r = t.pendingProps, a = le.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ne(le, a & 1), e === null)
    return zi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = ho(s, r, 0, null), e = gn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ai(n), t.memoizedState = Ii, e) : Rs(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Jf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = nn(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = nn(u, o) : (o = gn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ai(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ii, r;
  }
  return o = e.child, e = o.sibling, r = nn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Rs(e, t) {
  return t = ho({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fa(e, t, n, r) {
  return r !== null && ws(r), Kn(t, e.child, null, n), e = Rs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Go(Error(z(422))), fa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = ho({ mode: "visible", children: r.children }, a, 0, null), o = gn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Kn(t, e.child, null, s), t.child.memoizedState = Ai(s), t.memoizedState = Ii, o);
  if (!(t.mode & 1)) return fa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Go(o, r, void 0), fa(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Fe || u) {
    if (r = xe, r !== null) {
      switch (s & -s) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, It(e, a), ft(r, e, a, -1));
    }
    return Fs(), r = Go(Error(z(421))), fa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, He = Jt(a.nextSibling), We = t, se = !0, dt = null, e !== null && (Je[Ze++] = bt, Je[Ze++] = Mt, Je[Ze++] = xn, bt = e.id, Mt = e.overflow, xn = t), t = Rs(t, r.children), t.flags |= 4096, t);
}
function Ql(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pi(e.return, t, n);
}
function Ho(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function ad(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Le(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ql(e, n, t);
      else if (e.tag === 19) Ql(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ne(le, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Wa(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ho(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Wa(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Ho(t, !0, n, null, o);
      break;
    case "together":
      Ho(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function _a(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function At(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Zf(e, t, n) {
  switch (t.tag) {
    case 3:
      nd(t), Yn();
      break;
    case 5:
      bc(t);
      break;
    case 1:
      Ue(t.type) && Ba(t);
      break;
    case 4:
      Ns(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      ne(Va, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ne(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? rd(e, t, n) : (ne(le, le.current & 1), e = At(e, t, n), e !== null ? e.sibling : null);
      ne(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ad(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ne(le, le.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ed(e, t, n);
  }
  return At(e, t, n);
}
var od, $i, id, sd;
od = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
$i = function() {
};
id = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, mn(St.current);
    var o = null;
    switch (n) {
      case "input":
        a = oi(e, a), r = oi(e, r), o = [];
        break;
      case "select":
        a = ce({}, a, { value: void 0 }), r = ce({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = li(e, a), r = li(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Oa);
    }
    ci(n, r);
    var s;
    n = null;
    for (p in a) if (!r.hasOwnProperty(p) && a.hasOwnProperty(p) && a[p] != null) if (p === "style") {
      var u = a[p];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Nr.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
    for (p in r) {
      var l = r[p];
      if (u = a != null ? a[p] : void 0, r.hasOwnProperty(p) && l !== u && (l != null || u != null)) if (p === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        p,
        n
      )), n = l;
      else p === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(p, l)) : p === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(p, "" + l) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Nr.hasOwnProperty(p) ? (l != null && p === "onScroll" && re("scroll", e), o || u === l || (o = [])) : (o = o || []).push(p, l));
    }
    n && (o = o || []).push("style", n);
    var p = o;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
sd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!se) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function em(e, t, n) {
  var r = t.pendingProps;
  switch (xs(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ee(t), null;
    case 1:
      return Ue(t.type) && Fa(), Ee(t), null;
    case 3:
      return r = t.stateNode, Xn(), ae(Be), ae(Pe), zs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (da(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Gi(dt), dt = null))), $i(e, t), Ee(t), null;
    case 5:
      Es(t);
      var a = mn(Dr.current);
      if (n = t.type, e !== null && t.stateNode != null) id(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Ee(t), null;
        }
        if (e = mn(St.current), da(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[wt] = t, r[Ar] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < gr.length; a++) re(gr[a], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re(
                "error",
                r
              ), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              rl(r, o), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
              break;
            case "textarea":
              ol(r, o), re("invalid", r);
          }
          ci(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ca(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ca(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : Nr.hasOwnProperty(s) && u != null && s === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              na(r), al(r, o, !0);
              break;
            case "textarea":
              na(r), il(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Oa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[wt] = t, e[Ar] = r, od(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = di(n, r), n) {
              case "dialog":
                re("cancel", e), re("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < gr.length; a++) re(gr[a], e);
                a = r;
                break;
              case "source":
                re("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  e
                ), re("load", e), a = r;
                break;
              case "details":
                re("toggle", e), a = r;
                break;
              case "input":
                rl(e, r), a = oi(e, r), re("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ce({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                ol(e, r), a = li(e, r), re("invalid", e);
                break;
              default:
                a = r;
            }
            ci(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Du(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Au(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Er(e, l) : typeof l == "number" && Er(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Nr.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && as(e, o, l, s));
            }
            switch (n) {
              case "input":
                na(e), al(e, r, !1);
                break;
              case "textarea":
                na(e), il(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Bn(e, !!r.multiple, o, !1) : r.defaultValue != null && Bn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Oa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) sd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = mn(Dr.current), mn(St.current), da(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (o = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
            case 3:
              ca(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ca(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
      }
      return Ee(t), null;
    case 13:
      if (ae(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (se && He !== null && t.mode & 1 && !(t.flags & 128)) _c(), Yn(), t.flags |= 98560, o = !1;
        else if (o = da(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[wt] = t;
          } else Yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ee(t), o = !1;
        } else dt !== null && (Gi(dt), dt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ge === 0 && (ge = 3) : Fs())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
    case 4:
      return Xn(), $i(e, t), e === null && Rr(t.stateNode.containerInfo), Ee(t), null;
    case 10:
      return Ss(t.type._context), Ee(t), null;
    case 17:
      return Ue(t.type) && Fa(), Ee(t), null;
    case 19:
      if (ae(le), o = t.memoizedState, o === null) return Ee(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) dr(o, !1);
      else {
        if (ge !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Wa(e), s !== null) {
            for (t.flags |= 128, dr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && pe() > Zn && (t.flags |= 128, r = !0, dr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Wa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !se) return Ee(t), null;
        } else 2 * pe() - o.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = pe(), t.sibling = null, n = le.current, ne(le, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
    case 22:
    case 23:
      return Os(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function tm(e, t) {
  switch (xs(t), t.tag) {
    case 1:
      return Ue(t.type) && Fa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), ae(Be), ae(Pe), zs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Es(t), null;
    case 13:
      if (ae(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(le), null;
    case 4:
      return Xn(), null;
    case 10:
      return Ss(t.type._context), null;
    case 22:
    case 23:
      return Os(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ma = !1, ze = !1, nm = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function Di(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Yl = !1;
function rm(e, t) {
  if (ji = Aa, e = pc(), vs(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var a = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, u = -1, l = -1, p = 0, h = 0, f = e, v = null;
        t: for (; ; ) {
          for (var y; f !== n || a !== 0 && f.nodeType !== 3 || (u = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null; )
            v = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (v === n && ++p === a && (u = s), v === o && ++h === r && (l = s), (y = f.nextSibling) !== null) break;
            f = v, v = f.parentNode;
          }
          f = y;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ki = { focusedElem: e, selectionRange: n }, Aa = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, F = k.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ut(t.type, x), F);
            m.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var c = t.stateNode.containerInfo;
          c.nodeType === 1 ? c.textContent = "" : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(z(163));
      }
    } catch (g) {
      de(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return k = Yl, Yl = !1, k;
}
function Sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Di(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function fo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function ld(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[Ar], delete t[_i], delete t[Of], delete t[Ff])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Kl(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ud(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Oa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), e = e.sibling;
}
function Bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), e = e.sibling;
}
var Se = null, ct = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) cd(e, t, n), n = n.sibling;
}
function cd(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function") try {
    kt.onCommitFiberUnmount(ao, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ze || On(n, t);
    case 6:
      var r = Se, a = ct;
      Se = null, Ut(e, t, n), Se = r, ct = a, Se !== null && (ct ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null && (ct ? (e = Se, n = n.stateNode, e.nodeType === 8 ? Oo(e.parentNode, n) : e.nodeType === 1 && Oo(e, n), Mr(e)) : Oo(Se, n.stateNode));
      break;
    case 4:
      r = Se, a = ct, Se = n.stateNode.containerInfo, ct = !0, Ut(e, t, n), Se = r, ct = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Di(n, t, s), a = a.next;
        } while (a !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (!ze && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        de(n, t, u);
      }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, Ut(e, t, n), ze = r) : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function Xl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nm()), t.forEach(function(r) {
      var a = pm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Se = u.stateNode, ct = !1;
            break e;
          case 3:
            Se = u.stateNode.containerInfo, ct = !0;
            break e;
          case 4:
            Se = u.stateNode.containerInfo, ct = !0;
            break e;
        }
        u = u.return;
      }
      if (Se === null) throw Error(z(160));
      cd(o, s, a), Se = null, ct = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (p) {
      de(a, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) dd(t, e), t = t.sibling;
}
function dd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (lt(t, e), yt(e), r & 4) {
        try {
          Sr(3, e, e.return), fo(3, e);
        } catch (x) {
          de(e, e.return, x);
        }
        try {
          Sr(5, e, e.return);
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 1:
      lt(t, e), yt(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (lt(t, e), yt(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Er(a, "");
        } catch (x) {
          de(e, e.return, x);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Lu(a, o), di(u, s);
          var p = di(u, o);
          for (s = 0; s < l.length; s += 2) {
            var h = l[s], f = l[s + 1];
            h === "style" ? Du(a, f) : h === "dangerouslySetInnerHTML" ? Au(a, f) : h === "children" ? Er(a, f) : as(a, h, f, p);
          }
          switch (u) {
            case "input":
              ii(a, o);
              break;
            case "textarea":
              Ru(a, o);
              break;
            case "select":
              var v = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? Bn(a, !!o.multiple, y, !1) : v !== !!o.multiple && (o.defaultValue != null ? Bn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Bn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Ar] = o;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 6:
      if (lt(t, e), yt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 3:
      if (lt(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Mr(t.containerInfo);
      } catch (x) {
        de(e, e.return, x);
      }
      break;
    case 4:
      lt(t, e), yt(e);
      break;
    case 13:
      lt(t, e), yt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || ($s = pe())), r & 4 && Xl(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (p = ze) || h, lt(t, e), ze = p) : lt(t, e), yt(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !h && e.mode & 1) for (I = e, h = e.child; h !== null; ) {
          for (f = I = h; I !== null; ) {
            switch (v = I, y = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Sr(4, v, v.return);
                break;
              case 1:
                On(v, v.return);
                var k = v.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (x) {
                    de(r, n, x);
                  }
                }
                break;
              case 5:
                On(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Zl(f);
                  continue;
                }
            }
            y !== null ? (y.return = v, I = y) : Zl(f);
          }
          h = h.sibling;
        }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                a = f.stateNode, p ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = $u("display", s));
              } catch (x) {
                de(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (h === null) try {
              f.stateNode.nodeValue = p ? "" : f.memoizedProps;
            } catch (x) {
              de(e, e.return, x);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), f = f.return;
          }
          h === f && (h = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      lt(t, e), yt(e), r & 4 && Xl(e);
      break;
    case 21:
      break;
    default:
      lt(
        t,
        e
      ), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ud(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (Er(a, ""), r.flags &= -33);
          var o = Kl(e);
          Bi(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Kl(e);
          Fi(e, u, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      de(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function am(e, t, n) {
  I = e, pd(e);
}
function pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var a = I, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || ma;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || ze;
        u = ma;
        var p = ze;
        if (ma = s, (ze = l) && !p) for (I = a; I !== null; ) s = I, l = s.child, s.tag === 22 && s.memoizedState !== null ? eu(a) : l !== null ? (l.return = s, I = l) : eu(a);
        for (; o !== null; ) I = o, pd(o), o = o.sibling;
        I = a, ma = u, ze = p;
      }
      Jl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, I = o) : Jl(e);
  }
}
function Jl(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || fo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Al(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Al(t, s, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var p = t.alternate;
              if (p !== null) {
                var h = p.memoizedState;
                if (h !== null) {
                  var f = h.dehydrated;
                  f !== null && Mr(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(z(163));
        }
        ze || t.flags & 512 && Oi(t);
      } catch (v) {
        de(t, t.return, v);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function Zl(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function eu(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fo(4, t);
          } catch (l) {
            de(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(t, a, l);
            }
          }
          var o = t.return;
          try {
            Oi(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Oi(t);
          } catch (l) {
            de(t, s, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, I = u;
      break;
    }
    I = t.return;
  }
}
var om = Math.ceil, Ka = $t.ReactCurrentDispatcher, Is = $t.ReactCurrentOwner, tt = $t.ReactCurrentBatchConfig, W = 0, xe = null, fe = null, Ce = 0, Ge = 0, Fn = sn(0), ge = 0, Ur = null, jn = 0, mo = 0, As = 0, Cr = null, Oe = null, $s = 0, Zn = 1 / 0, zt = null, Xa = !1, Ui = null, en = null, ha = !1, Qt = null, Ja = 0, _r = 0, qi = null, Na = -1, Ea = 0;
function Re() {
  return W & 6 ? pe() : Na !== -1 ? Na : Na = pe();
}
function tn(e) {
  return e.mode & 1 ? W & 2 && Ce !== 0 ? Ce & -Ce : Uf.transition !== null ? (Ea === 0 && (Ea = Ku()), Ea) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rc(e.type)), e) : 1;
}
function ft(e, t, n, r) {
  if (50 < _r) throw _r = 0, qi = null, Error(z(185));
  Wr(e, n, r), (!(W & 2) || e !== xe) && (e === xe && (!(W & 2) && (mo |= n), ge === 4 && Ht(e, Ce)), qe(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Zn = pe() + 500, uo && ln()));
}
function qe(e, t) {
  var n = e.callbackNode;
  Bp(e, t);
  var r = Ia(e, e === xe ? Ce : 0);
  if (r === 0) n !== null && ul(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ul(n), t === 1) e.tag === 0 ? Bf(tu.bind(null, e)) : kc(tu.bind(null, e)), $f(function() {
      !(W & 6) && ln();
    }), n = null;
    else {
      switch (Xu(r)) {
        case 1:
          n = us;
          break;
        case 4:
          n = Qu;
          break;
        case 16:
          n = Ra;
          break;
        case 536870912:
          n = Yu;
          break;
        default:
          n = Ra;
      }
      n = wd(n, fd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fd(e, t) {
  if (Na = -1, Ea = 0, W & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ia(e, e === xe ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Za(e, r);
  else {
    t = r;
    var a = W;
    W |= 2;
    var o = hd();
    (xe !== e || Ce !== t) && (zt = null, Zn = pe() + 500, hn(e, t));
    do
      try {
        lm();
        break;
      } catch (u) {
        md(e, u);
      }
    while (!0);
    ks(), Ka.current = o, W = a, fe !== null ? t = 0 : (xe = null, Ce = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (a = gi(e), a !== 0 && (r = a, t = Vi(e, a))), t === 1) throw n = Ur, hn(e, 0), Ht(e, r), qe(e, pe()), n;
    if (t === 6) Ht(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !im(a) && (t = Za(e, r), t === 2 && (o = gi(e), o !== 0 && (r = o, t = Vi(e, o))), t === 1)) throw n = Ur, hn(e, 0), Ht(e, r), qe(e, pe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          dn(e, Oe, zt);
          break;
        case 3:
          if (Ht(e, r), (r & 130023424) === r && (t = $s + 500 - pe(), 10 < t)) {
            if (Ia(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Ci(dn.bind(null, e, Oe, zt), t);
            break;
          }
          dn(e, Oe, zt);
          break;
        case 4:
          if (Ht(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - pt(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * om(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ci(dn.bind(null, e, Oe, zt), r);
            break;
          }
          dn(e, Oe, zt);
          break;
        case 5:
          dn(e, Oe, zt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return qe(e, pe()), e.callbackNode === n ? fd.bind(null, e) : null;
}
function Vi(e, t) {
  var n = Cr;
  return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256), e = Za(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && Gi(t)), e;
}
function Gi(e) {
  Oe === null ? Oe = e : Oe.push.apply(Oe, e);
}
function im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!mt(o(), a)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ht(e, t) {
  for (t &= ~As, t &= ~mo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function tu(e) {
  if (W & 6) throw Error(z(327));
  Hn();
  var t = Ia(e, 0);
  if (!(t & 1)) return qe(e, pe()), null;
  var n = Za(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gi(e);
    r !== 0 && (t = r, n = Vi(e, r));
  }
  if (n === 1) throw n = Ur, hn(e, 0), Ht(e, t), qe(e, pe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Oe, zt), qe(e, pe()), null;
}
function Ds(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (Zn = pe() + 500, uo && ln());
  }
}
function kn(e) {
  Qt !== null && Qt.tag === 0 && !(W & 6) && Hn();
  var t = W;
  W |= 1;
  var n = tt.transition, r = Z;
  try {
    if (tt.transition = null, Z = 1, e) return e();
  } finally {
    Z = r, tt.transition = n, W = t, !(W & 6) && ln();
  }
}
function Os() {
  Ge = Fn.current, ae(Fn);
}
function hn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Af(n)), fe !== null) for (n = fe.return; n !== null; ) {
    var r = n;
    switch (xs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Fa();
        break;
      case 3:
        Xn(), ae(Be), ae(Pe), zs();
        break;
      case 5:
        Es(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        ae(le);
        break;
      case 19:
        ae(le);
        break;
      case 10:
        Ss(r.type._context);
        break;
      case 22:
      case 23:
        Os();
    }
    n = n.return;
  }
  if (xe = e, fe = e = nn(e.current, null), Ce = Ge = t, ge = 0, Ur = null, As = mo = jn = 0, Oe = Cr = null, fn !== null) {
    for (t = 0; t < fn.length; t++) if (n = fn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    fn = null;
  }
  return e;
}
function md(e, t) {
  do {
    var n = fe;
    try {
      if (ks(), Sa.current = Ya, Qa) {
        for (var r = ue.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Qa = !1;
      }
      if (wn = 0, ye = he = ue = null, kr = !1, Or = 0, Is.current = null, n === null || n.return === null) {
        ge = 1, Ur = t, fe = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = Ce, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var p = l, h = u, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = h.alternate;
            v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = Ul(s);
          if (y !== null) {
            y.flags &= -257, ql(y, s, u, o, t), y.mode & 1 && Bl(o, p, t), t = y, l = p;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else k.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Bl(o, p, t), Fs();
              break e;
            }
            l = Error(z(426));
          }
        } else if (se && u.mode & 1) {
          var F = Ul(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), ql(F, s, u, o, t), ws(Jn(l, u));
            break e;
          }
        }
        o = l = Jn(l, u), ge !== 4 && (ge = 2), Cr === null ? Cr = [o] : Cr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Xc(o, l, t);
              Il(o, m);
              break e;
            case 1:
              u = l;
              var d = o.type, c = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (en === null || !en.has(c)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = Jc(o, u, t);
                Il(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vd(n);
    } catch (j) {
      t = j, fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hd() {
  var e = Ka.current;
  return Ka.current = Ya, e === null ? Ya : e;
}
function Fs() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), xe === null || !(jn & 268435455) && !(mo & 268435455) || Ht(xe, Ce);
}
function Za(e, t) {
  var n = W;
  W |= 2;
  var r = hd();
  (xe !== e || Ce !== t) && (zt = null, hn(e, t));
  do
    try {
      sm();
      break;
    } catch (a) {
      md(e, a);
    }
  while (!0);
  if (ks(), W = n, Ka.current = r, fe !== null) throw Error(z(261));
  return xe = null, Ce = 0, ge;
}
function sm() {
  for (; fe !== null; ) gd(fe);
}
function lm() {
  for (; fe !== null && !Tp(); ) gd(fe);
}
function gd(e) {
  var t = xd(e.alternate, e, Ge);
  e.memoizedProps = e.pendingProps, t === null ? vd(e) : fe = t, Is.current = null;
}
function vd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = tm(n, t), n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, fe = null;
        return;
      }
    } else if (n = em(n, t, Ge), n !== null) {
      fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function dn(e, t, n) {
  var r = Z, a = tt.transition;
  try {
    tt.transition = null, Z = 1, um(e, t, n, r);
  } finally {
    tt.transition = a, Z = r;
  }
  return null;
}
function um(e, t, n, r) {
  do
    Hn();
  while (Qt !== null);
  if (W & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Up(e, o), e === xe && (fe = xe = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ha || (ha = !0, wd(Ra, function() {
    return Hn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = tt.transition, tt.transition = null;
    var s = Z;
    Z = 1;
    var u = W;
    W |= 4, Is.current = null, rm(e, n), dd(n, e), Pf(ki), Aa = !!ji, ki = ji = null, e.current = n, am(n), Lp(), W = u, Z = s, tt.transition = o;
  } else e.current = n;
  if (ha && (ha = !1, Qt = e, Ja = a), o = e.pendingLanes, o === 0 && (en = null), Ap(n.stateNode), qe(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Xa) throw Xa = !1, e = Ui, Ui = null, e;
  return Ja & 1 && e.tag !== 0 && Hn(), o = e.pendingLanes, o & 1 ? e === qi ? _r++ : (_r = 0, qi = e) : _r = 0, ln(), null;
}
function Hn() {
  if (Qt !== null) {
    var e = Xu(Ja), t = tt.transition, n = Z;
    try {
      if (tt.transition = null, Z = 16 > e ? 16 : e, Qt === null) var r = !1;
      else {
        if (e = Qt, Qt = null, Ja = 0, W & 6) throw Error(z(331));
        var a = W;
        for (W |= 4, I = e.current; I !== null; ) {
          var o = I, s = o.child;
          if (I.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var p = u[l];
                for (I = p; I !== null; ) {
                  var h = I;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sr(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null) f.return = h, I = f;
                  else for (; I !== null; ) {
                    h = I;
                    var v = h.sibling, y = h.return;
                    if (ld(h), h === p) {
                      I = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = y, I = v;
                      break;
                    }
                    I = y;
                  }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var F = x.sibling;
                    x.sibling = null, x = F;
                  } while (x !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, I = s;
          else e: for (; I !== null; ) {
            if (o = I, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Sr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, I = m;
              break e;
            }
            I = o.return;
          }
        }
        var d = e.current;
        for (I = d; I !== null; ) {
          s = I;
          var c = s.child;
          if (s.subtreeFlags & 2064 && c !== null) c.return = s, I = c;
          else e: for (s = d; I !== null; ) {
            if (u = I, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  fo(9, u);
              }
            } catch (j) {
              de(u, u.return, j);
            }
            if (u === s) {
              I = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, I = g;
              break e;
            }
            I = u.return;
          }
        }
        if (W = a, ln(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
          kt.onPostCommitFiberRoot(ao, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Z = n, tt.transition = t;
    }
  }
  return !1;
}
function nu(e, t, n) {
  t = Jn(n, t), t = Xc(e, t, 1), e = Zt(e, t, 1), t = Re(), e !== null && (Wr(e, 1, t), qe(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) nu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      nu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
        e = Jn(n, e), e = Jc(t, e, 1), t = Zt(t, e, 1), e = Re(), t !== null && (Wr(t, 1, e), qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function cm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Ce & n) === n && (ge === 4 || ge === 3 && (Ce & 130023424) === Ce && 500 > pe() - $s ? hn(e, 0) : As |= n), qe(e, t);
}
function yd(e, t) {
  t === 0 && (e.mode & 1 ? (t = oa, oa <<= 1, !(oa & 130023424) && (oa = 4194304)) : t = 1);
  var n = Re();
  e = It(e, t), e !== null && (Wr(e, t, n), qe(e, n));
}
function dm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yd(e, n);
}
function pm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), yd(e, n);
}
var xd;
xd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Zf(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, se && t.flags & 1048576 && Sc(t, qa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      _a(e, t), e = t.pendingProps;
      var a = Qn(t, Pe.current);
      Gn(t, n), a = bs(null, t, r, e, a, n);
      var o = Ms();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (o = !0, Ba(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, _s(t), a.updater = po, t.stateNode = a, a._reactInternals = t, Mi(t, r, e, n), t = Ri(null, t, r, !0, o, n)) : (t.tag = 0, se && o && ys(t), Le(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (_a(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = mm(r), e = ut(r, e), a) {
          case 0:
            t = Li(null, t, r, e, n);
            break e;
          case 1:
            t = Hl(null, t, r, e, n);
            break e;
          case 11:
            t = Vl(null, t, r, e, n);
            break e;
          case 14:
            t = Gl(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(z(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ut(r, a), Li(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ut(r, a), Hl(e, t, r, a, n);
    case 3:
      e: {
        if (nd(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, Pc(e, t), Ha(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Jn(Error(z(423)), t), t = Wl(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Jn(Error(z(424)), t), t = Wl(e, t, r, n, a);
          break e;
        } else for (He = Jt(t.stateNode.containerInfo.firstChild), We = t, se = !0, dt = null, n = Ec(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Yn(), r === a) {
            t = At(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bc(t), e === null && zi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, Si(r, a) ? s = null : o !== null && Si(r, o) && (t.flags |= 32), td(e, t), Le(e, t, s, n), t.child;
    case 6:
      return e === null && zi(t), null;
    case 13:
      return rd(e, t, n);
    case 4:
      return Ns(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ut(r, a), Vl(e, t, r, a, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, ne(Va, r._currentValue), r._currentValue = s, o !== null) if (mt(o.value, s)) {
          if (o.children === a.children && !Be.current) {
            t = At(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = Tt(-1, n & -n), l.tag = 2;
                  var p = o.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var h = p.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), p.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Pi(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(z(341));
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Pi(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        Le(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Gn(t, n), a = nt(a), r = r(a), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ut(r, t.pendingProps), a = ut(r.type, a), Gl(e, t, r, a, n);
    case 15:
      return Zc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ut(r, a), _a(e, t), t.tag = 1, Ue(r) ? (e = !0, Ba(t)) : e = !1, Gn(t, n), Kc(t, r, a), Mi(t, r, a, n), Ri(null, t, r, !0, e, n);
    case 19:
      return ad(e, t, n);
    case 22:
      return ed(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function wd(e, t) {
  return Wu(e, t);
}
function fm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function et(e, t, n, r) {
  return new fm(e, t, n, r);
}
function Bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function mm(e) {
  if (typeof e == "function") return Bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === is) return 11;
    if (e === ss) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return n === null ? (n = et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function za(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") Bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case bn:
      return gn(n.children, a, o, t);
    case os:
      s = 8, a |= 8;
      break;
    case ti:
      return e = et(12, n, t, a | 2), e.elementType = ti, e.lanes = o, e;
    case ni:
      return e = et(13, n, t, a), e.elementType = ni, e.lanes = o, e;
    case ri:
      return e = et(19, n, t, a), e.elementType = ri, e.lanes = o, e;
    case bu:
      return ho(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case zu:
          s = 10;
          break e;
        case Pu:
          s = 9;
          break e;
        case is:
          s = 11;
          break e;
        case ss:
          s = 14;
          break e;
        case qt:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = et(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function gn(e, t, n, r) {
  return e = et(7, e, r, t), e.lanes = n, e;
}
function ho(e, t, n, r) {
  return e = et(22, e, r, t), e.elementType = bu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Wo(e, t, n) {
  return e = et(6, e, null, t), e.lanes = n, e;
}
function Qo(e, t, n) {
  return t = et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zo(0), this.expirationTimes = zo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Us(e, t, n, r, a, o, s, u, l) {
  return e = new hm(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = et(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _s(o), e;
}
function gm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Pn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jd(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return jc(e, n, t);
  }
  return t;
}
function kd(e, t, n, r, a, o, s, u, l) {
  return e = Us(n, r, !0, e, a, o, s, u, l), e.context = jd(null), n = e.current, r = Re(), a = tn(n), o = Tt(r, a), o.callback = t ?? null, Zt(n, o, a), e.current.lanes = a, Wr(e, a, r), qe(e, r), e;
}
function go(e, t, n, r) {
  var a = t.current, o = Re(), s = tn(a);
  return n = jd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zt(a, t, s), e !== null && (ft(e, a, s, o), ka(e, a, s)), s;
}
function eo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ru(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qs(e, t) {
  ru(e, t), (e = e.alternate) && ru(e, t);
}
function vm() {
  return null;
}
var Sd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vs(e) {
  this._internalRoot = e;
}
vo.prototype.render = Vs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  go(e, t, null, null);
};
vo.prototype.unmount = Vs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function() {
      go(null, e, null, null);
    }), t[Rt] = null;
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ec();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
    Gt.splice(n, 0, e), n === 0 && nc(e);
  }
};
function Gs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function au() {
}
function ym(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = eo(s);
        o.call(p);
      };
    }
    var s = kd(t, r, e, 0, null, !1, !1, "", au);
    return e._reactRootContainer = s, e[Rt] = s.current, Rr(e.nodeType === 8 ? e.parentNode : e), kn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var p = eo(l);
      u.call(p);
    };
  }
  var l = Us(e, 0, !1, null, null, !1, !1, "", au);
  return e._reactRootContainer = l, e[Rt] = l.current, Rr(e.nodeType === 8 ? e.parentNode : e), kn(function() {
    go(t, l, n, r);
  }), l;
}
function xo(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = eo(s);
        u.call(l);
      };
    }
    go(t, s, e, a);
  } else s = ym(n, t, e, a, r);
  return eo(s);
}
Ju = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes);
        n !== 0 && (cs(t, n | 1), qe(t, pe()), !(W & 6) && (Zn = pe() + 500, ln()));
      }
      break;
    case 13:
      kn(function() {
        var r = It(e, 1);
        if (r !== null) {
          var a = Re();
          ft(r, e, 1, a);
        }
      }), qs(e, 1);
  }
};
ds = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Re();
      ft(t, e, 134217728, n);
    }
    qs(e, 134217728);
  }
};
Zu = function(e) {
  if (e.tag === 13) {
    var t = tn(e), n = It(e, t);
    if (n !== null) {
      var r = Re();
      ft(n, e, t, r);
    }
    qs(e, t);
  }
};
ec = function() {
  return Z;
};
tc = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
  }
};
fi = function(e, t, n) {
  switch (t) {
    case "input":
      if (ii(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = lo(r);
            if (!a) throw Error(z(90));
            Tu(r), ii(r, a);
          }
        }
      }
      break;
    case "textarea":
      Ru(e, n);
      break;
    case "select":
      t = n.value, t != null && Bn(e, !!n.multiple, t, !1);
  }
};
Bu = Ds;
Uu = kn;
var xm = { usingClientEntryPoint: !1, Events: [Yr, Rn, lo, Ou, Fu, Ds] }, pr = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wm = { bundleType: pr.bundleType, version: pr.version, rendererPackageName: pr.rendererPackageName, rendererConfig: pr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pr.findFiberByHostInstance || vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ga.isDisabled && ga.supportsFiber) try {
    ao = ga.inject(wm), kt = ga;
  } catch {
  }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
Ye.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gs(t)) throw Error(z(200));
  return gm(e, t, null, n);
};
Ye.createRoot = function(e, t) {
  if (!Gs(e)) throw Error(z(299));
  var n = !1, r = "", a = Sd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Us(e, 1, !1, null, null, n, !1, r, a), e[Rt] = t.current, Rr(e.nodeType === 8 ? e.parentNode : e), new Vs(t);
};
Ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Gu(t), e = e === null ? null : e.stateNode, e;
};
Ye.flushSync = function(e) {
  return kn(e);
};
Ye.hydrate = function(e, t, n) {
  if (!yo(t)) throw Error(z(200));
  return xo(null, e, t, !0, n);
};
Ye.hydrateRoot = function(e, t, n) {
  if (!Gs(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = Sd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = kd(t, null, e, 1, n ?? null, a, !1, o, s), e[Rt] = t.current, Rr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new vo(t);
};
Ye.render = function(e, t, n) {
  if (!yo(t)) throw Error(z(200));
  return xo(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function(e) {
  if (!yo(e)) throw Error(z(40));
  return e._reactRootContainer ? (kn(function() {
    xo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rt] = null;
    });
  }), !0) : !1;
};
Ye.unstable_batchedUpdates = Ds;
Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!yo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return xo(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function Cd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd);
    } catch (e) {
      console.error(e);
    }
}
Cd(), Cu.exports = Ye;
var jm = Cu.exports, _d, ou = jm;
_d = ou.createRoot, ou.hydrateRoot;
const iu = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, km = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Sm = [
  "copia_final_FINAL_v3",
  "esto_ya_no_es_un_circulo",
  "ayuda_por_favor",
  "sin_tiempo_para_mas",
  "el_cliente_lo_aprobo",
  "ultima_prueba_de_verdad",
  "no_miro_mas_las_esquinas",
  "el_gato_lo_tiño",
  "mañana_lo_arreglo",
  "esto_lo_vio_mi_yo_del_pasado",
  "posdata_perdon"
], Cm = [
  "Final stickers",
  "Cricut, now for real",
  "Tonotini tonotin",
  "Kawaii stickers",
  "Sticker sheet",
  "CryCat little things",
  "Little wonders",
  "Stick stick sticking",
  "Top-notch stickers",
  "Cut and stick"
];
function qr(e) {
  const t = Number.isFinite(e.w_mm) ? e.w_mm : 0, n = Number.isFinite(e.h_mm) ? e.h_mm : 0;
  return {
    ...e,
    copies: Number.isFinite(e.copies) ? e.copies : 1,
    mini_quota: Number.isFinite(e.mini_quota) ? e.mini_quota : 1,
    offset_mm: Number.isFinite(e.offset_mm) ? e.offset_mm : 0,
    offset_modo: e.offset_modo ?? "",
    offset_color: e.offset_color ?? "",
    scale_pct: Number.isFinite(e.scale_pct) ? e.scale_pct : 100,
    w_mm: t,
    h_mm: n,
    w_mm_base: Number.isFinite(e.w_mm_base) ? e.w_mm_base : t,
    h_mm_base: Number.isFinite(e.h_mm_base) ? e.h_mm_base : n,
    warnings: e.warnings ?? []
  };
}
function _m(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const vn = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(vn() + e, t);
  if (!n.ok) {
    let r = `${n.status}`;
    try {
      r = (await n.json()).detail || r;
    } catch {
    }
    throw new Error(r);
  }
  return n.json();
}
const A = {
  health: () => q("/api/health"),
  getSettings: () => q(
    "/api/settings"
  ),
  putSettings: (e) => q("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), q("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => q("/api/assets"),
  patchAsset: (e, t) => q(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => q(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 16) => q(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => q("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => q(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => q(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), q(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => q(
    "/api/contornos"
  ),
  blobs: (e) => q(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => q(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0, r = "final") => `${vn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
  previewUrlSinBordes: (e, t = 0) => `/api/assets/${e}/preview.png?r=${t}`,
  optimize: (e, t = !1) => q("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => q(`/api/job/${e}`),
  /** Restaura una colocación anterior (deshacer/rehacer con resultados). */
  restoreResult: (e) => q("/api/result/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  result: () => q("/api/result"),
  version: () => q("/api/version"),
  checkVersion: () => q("/api/version/check", { method: "POST" }),
  updateVersion: () => q(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => q("/api/version/open", { method: "POST" }),
  estimate: () => q("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0, o = "final") => `${vn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${o}` : ""}`,
  move: (e, t, n) => q(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => q("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => q("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => q(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => q("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => q("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => q(
    "/api/presets/factory"
  ),
  assetsFolder: () => q("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), q("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${vn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => q("/api/presets"),
  savePreset: (e) => q("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => q(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => q(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  ),
  // ------------------------------------------------------- modos --
  modos: () => q("/api/modos"),
  saveModo: (e, t) => q(`/api/modos/${e}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  renameModo: (e, t) => q(`/api/modos/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  loadModo: (e) => q(
    `/api/modos/${e}/load`,
    { method: "POST" }
  ),
  deleteModo: (e) => q(
    `/api/modos/${e}`,
    { method: "DELETE" }
  )
};
async function Nm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((h, f) => {
      a.onload = () => h(), a.onerror = () => f(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (h) => l.toBlob((f) => h(f), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Nd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Nm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Hi = [
  {
    key: "wiwi",
    label: "Wiwi",
    colors: {
      bg: "#f9d7e4",
      panel: "#fff7f2",
      panel2: "#ffffff",
      accent: "#f991ae",
      accent2: "#ff8a9b",
      accent3: "#d94f6a",
      text: "#5e4a64",
      textSoft: "#a4889b",
      border: "#f3c6d4",
      danger: "#e96a7e",
      guide: "#f5425d"
    }
  },
  {
    key: "eevee",
    label: "Eevee",
    colors: {
      bg: "#f0e3cf",
      panel: "#fdf6ea",
      panel2: "#ffffff",
      accent: "#d19851",
      accent2: "#a9713d",
      accent3: "#8a5a2b",
      text: "#5a4632",
      textSoft: "#a08b70",
      border: "#e0cba8",
      danger: "#c26a4a",
      guide: "#af6e32"
    }
  },
  {
    key: "fidough",
    label: "Fidough",
    colors: {
      bg: "#f6ecd2",
      panel: "#fffaef",
      panel2: "#ffffff",
      accent: "#f6b938",
      accent2: "#e07a5f",
      accent3: "#b3593f",
      text: "#5c4a2f",
      textSoft: "#a68f66",
      border: "#e8d9a8",
      danger: "#d4694f",
      guide: "#df5e3e"
    }
  },
  {
    key: "sprigatito",
    label: "Sprigatito",
    colors: {
      bg: "#ddefdb",
      panel: "#f3faf0",
      panel2: "#ffffff",
      accent: "#82cd7f",
      accent2: "#5fae72",
      accent3: "#3f8f57",
      text: "#3f5a45",
      textSoft: "#88a68e",
      border: "#c2e2c0",
      danger: "#d4696f",
      guide: "#46925f"
    }
  },
  {
    key: "maushold",
    label: "Maushold",
    colors: {
      bg: "#eeeae2",
      panel: "#faf8f3",
      panel2: "#ffffff",
      accent: "#baa787",
      accent2: "#8f7c62",
      accent3: "#6f5f47",
      text: "#4f463a",
      textSoft: "#9c9081",
      border: "#d9d2c4",
      danger: "#c26a5a",
      guide: "#907a5c"
    }
  },
  {
    key: "jirachi",
    label: "Jirachi",
    colors: {
      bg: "#fdf3d6",
      panel: "#fffbee",
      panel2: "#ffffff",
      accent: "#ffdc49",
      accent2: "#7fd1c8",
      accent3: "#c98a1e",
      text: "#5d5433",
      textSoft: "#ab9f74",
      border: "#efe3ab",
      danger: "#e07a8a",
      guide: "#4fbfb3"
    }
  },
  {
    key: "espeon",
    label: "Espeon",
    colors: {
      bg: "#e9e0f4",
      panel: "#f7f2fc",
      panel2: "#ffffff",
      accent: "#b28ee5",
      accent2: "#9d7cc9",
      accent3: "#8a5fc0",
      text: "#4f4366",
      textSoft: "#9b8bb0",
      border: "#d4c6e8",
      danger: "#d46a9a",
      guide: "#9970ce"
    }
  },
  {
    key: "espeon-shiny",
    label: "Espeon shiny",
    colors: {
      bg: "#e0f0f4",
      panel: "#f1fafc",
      panel2: "#ffffff",
      accent: "#82d3e3",
      accent2: "#67b7c9",
      accent3: "#2f9aa8",
      text: "#3f5460",
      textSoft: "#8aacb6",
      border: "#c4e2e8",
      danger: "#d46a8a",
      guide: "#42a7bd"
    }
  },
  {
    key: "umbreon",
    label: "Umbreon",
    colors: {
      bg: "#2e2b3a",
      panel: "#3a3749",
      panel2: "#454157",
      accent: "#ffcf35",
      accent2: "#8f7fd4",
      accent3: "#ffd76a",
      text: "#f0e9dc",
      textSoft: "#a99fc4",
      border: "#524d68",
      danger: "#e07a6a",
      guide: "#ffcf35"
    }
  },
  {
    key: "hippopotas",
    label: "Hippopotas",
    colors: {
      bg: "#efe0c3",
      panel: "#faf2df",
      panel2: "#ffffff",
      accent: "#cfa85d",
      accent2: "#a5854e",
      accent3: "#9a6f36",
      text: "#54432a",
      textSoft: "#a08c66",
      border: "#e0cda0",
      danger: "#c26a4a",
      guide: "#a98445"
    }
  },
  {
    key: "vaporeon",
    label: "Vaporeon",
    colors: {
      bg: "#d7e8f2",
      panel: "#eff7fb",
      panel2: "#ffffff",
      accent: "#7db4df",
      accent2: "#5f96c4",
      accent3: "#3a7fb5",
      text: "#3a4f60",
      textSoft: "#84a2b5",
      border: "#c0daea",
      danger: "#d46a7e",
      guide: "#407fb2"
    }
  },
  {
    key: "sylveon",
    label: "Sylveon",
    colors: {
      bg: "#f6e3ee",
      panel: "#fdf3f8",
      panel2: "#ffffff",
      accent: "#ed9bc4",
      accent2: "#a8d8e8",
      accent3: "#c95f9a",
      text: "#5e4a5c",
      textSoft: "#b08ea4",
      border: "#f0cddd",
      danger: "#e06a8a",
      guide: "#db6fa5"
    }
  }
];
function Wi(e) {
  return Hi.find((t) => t.key === e) ?? Hi[0];
}
function su(e) {
  const t = Wi(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Ed() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Wi(e);
  } catch {
  }
  return Wi("wiwi");
}
const zd = {
  // ----- modos (chapas / pegatinas / carteles) y actualización -----
  Chapas: "Badges",
  "Redondas, sin girar": "Round, no rotation",
  Pegatinas: "Stickers",
  "Siluetas, cualquier ángulo": "Silhouettes, any angle",
  Carteles: "Posters",
  "Rectángulos, giros de 90°": "Rectangles, 90° turns",
  "Modo {n}: {d}": "Mode {n}: {d}",
  "Modo «{n}» aplicado": "Mode “{n}” applied",
  "Ajustes guardados en «{n}»": "Settings saved to “{n}”",
  "No se pudo guardar el modo": "Could not save the mode",
  "No se pudo cambiar el nombre": "Could not rename",
  "No se pudo vaciar el hueco": "Could not clear the slot",
  "Cambiar el nombre de este modo": "Rename this mode",
  "Aplicar este modo": "Apply this mode",
  "Sobrescribir con los ajustes actuales": "Overwrite with current settings",
  "Vaciar este hueco": "Clear this slot",
  "Guardar aquí los ajustes actuales": "Save current settings here",
  "Nombre del modo": "Mode name",
  "Actualizando CryCat…": "Updating CryCat…",
  "Reiniciando con la versión nueva…": "Restarting with the new version…",
  "Preparando la actualización…": "Preparing the update…",
  "Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.": "Your settings, images and layout are saved before updating: when it comes back, everything is exactly as it was.",
  "La página se recargará sola cuando el motor nuevo esté listo…": "The page will reload by itself when the new engine is ready…",
  Cerrar: "Close",
  // ------------------------------------------------------------- general --
  "Cargando CryCat…": "Loading CryCat…",
  // ----------------------------------------------------------- status bar --
  "Optimizando…": "Optimizing…",
  "Pensando…": "Thinking…",
  "Listo para empezar": "Ready to start",
  "Activar sonido": "Enable sound",
  Silenciar: "Mute",
  Volumen: "Volume",
  "Backend conectado": "Backend connected",
  "Backend desconectado": "Backend disconnected",
  "Tiempo estimado de corte (Cricut Maker 5)": "Estimated cutting time (Cricut Maker 5)",
  " · {x} restante": " · {x} remaining",
  "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis": "{n} images on {p} page{s} · efficiency {ef}% · {m} minis",
  Idioma: "Language",
  "Versión actual": "Current version",
  "Comprobar versiones": "Check for updates",
  "Descargar e instalar la nueva versión": "Download and install the new version",
  "Nueva versión {v} disponible": "New version {v} available",
  "No cabe en una página: {n} páginas": "Doesn't fit on one page: {n} pages",
  "No cabe todo en una página: se usarán varias": "It doesn't all fit on one page: several will be used",
  Actualizar: "Update",
  "Estás en la última versión": "You're on the latest version",
  "Comprobando…": "Checking…",
  "Sin conexión": "Offline",
  "Descargando… {p}%": "Downloading… {p}%",
  "Instalando y reiniciando…": "Installing and restarting…",
  "No se pudo actualizar": "Update failed",
  "Se abrirá la página de descargas": "The download page will open",
  "Modo desarrollo: se actualiza con git": "Development mode: update with git",
  "Ir a la página de descargas": "Go to the download page",
  "Abrir el repositorio del proyecto en una pestaña nueva": "Open the project repository in a new tab",
  "App info": "App info",
  // ------------------------------------------------------------- ajustes --
  Ajustes: "Settings",
  General: "General",
  Minis: "Minis",
  "Ver los contornos reales: en un color la silueta que se corta (con borde y cambios) y en otro el dibujo sin borde": "Show the real outlines: one colour for the silhouette that gets cut (border and changes included) and another for the drawing without border",
  Bordes: "Outlines",
  "Sin bordes": "No outlines",
  "El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.": "The initial size comes from each file's real DPI (if it has no data, 300 is assumed). Tick the ones you want to change and press Apply changes.",
  "Cómo quedan sobre la hoja": "How they fit on the sheet",
  "Seleccionar todos": "Select all",
  "Quitar selección": "Clear selection",
  "Escala (%)": "Scale (%)",
  "Tamaño fijo (mm)": "Fixed size (mm)",
  "La previsualización usa la hoja y los ajustes actuales.": "The preview uses the sheet and the current settings.",
  Siguiente: "Next",
  "Aplicar cambios": "Apply changes",
  Reportar: "Report",
  Colocación: "Placement",
  "Hoja y máquina": "Sheet and machine",
  Tamaños: "Sizes",
  Comportamiento: "Behaviour",
  Impresión: "Printing",
  "Separación mínima entre piezas al colocarlas. Para chapa, 0,5; para pegatinas que se recortan una a una, 2 mm.": "Minimum gap between pieces when placing them. For badges, 0.5; for stickers cut one by one, 2 mm.",
  "Cuánto se separan las piezas del borde del área recortable. Súbelo si tu Cricut corta justo al límite.": "How far pieces stay from the cut-area edge. Raise it if your Cricut cuts right at the limit.",
  "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (15 mm va bien para pegatinas).": "No mini will go below this size: avoids pieces that can't be cut (15 mm works well for stickers).",
  "Tope de tamaño de los minis. Siempre son algo más pequeños que el original (99 % como máximo).": "Size cap for minis. They are always a bit smaller than the original (99% at most).",
  "Repite el color hacia fuera para que no salga reborde blanco si la impresora no está alineada al 100 %.": "Repeats the colour outwards so no white fringe appears if the printer isn't perfectly aligned.",
  "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar.": "Border in millimetres OF THE RESULT (it doesn't grow when scaling). Use it to join loose pieces or to leave a cutting margin.",
  "1 · Suelta tus imágenes": "1 · Drop your images",
  "PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.": "PNG, JPG, WEBP, PSD, AI, SVG… they get trimmed automatically.",
  "2 · Ajusta el tamaño": "2 · Set the size",
  "Escala o milímetros exactos, por lado mayor o menor.": "Scale or exact millimetres, by longer or shorter side.",
  "3 · Minis (opcional)": "3 · Minis (optional)",
  "Actívalos en lo que quieras repetir rellenando huecos.": "Turn them on for whatever you want repeated to fill gaps.",
  "4 · Se coloca solo": "4 · It lays itself out",
  "Automático; «Recalcular» afina la colocación cuando quieras.": "Automatic; “Recalculate” fine-tunes the layout whenever you want.",
  "5 · Guarda": "5 · Save",
  "PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.": "A 300 dpi PNG ready to print. It never overwrites anything.",
  "Guía detallada: todo lo que puedes hacer": "Detailed guide: everything you can do",
  "Guía detallada": "Detailed guide",
  "Pasos en Cricut": "Cricut steps",
  "Fondo y trozos sueltos": "Background and loose pieces",
  "Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».": "Remove the background in one click. If loose pieces remain, the item's warning opens “clean outline”: delete them or JOIN them into a single shape with “Join everything into one piece”.",
  "Bordes (offset)": "Borders (offset)",
  "Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.": "Per-item or global border, in mm of the result: extend the colour, white, custom colour, or join pieces with a straight or round border. The original is never modified.",
  "Minis con cuota": "Minis with quota",
  "La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.": "The quota decides how many minis each item gets compared to the others (1 = fair share, 3 = triple). The size is chosen by the optimiser within the minimum and the cap.",
  "Optimización a tu gusto": "Optimisation your way",
  "Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).": "Methods (Greedy, Largest, Voronoi, Genetic), quality, time (recommended per method), spacing, margins, rotations and paper (A4, A3, A5, Letter or whatever you want).",
  "Modo rápido y experto": "Quick and expert modes",
  "Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.": "Top right of the images panel: Quick leaves only the essentials; Expert shows every fine control.",
  Perfiles: "Profiles",
  "Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.": "At the top of the panel: apply a factory profile (badge, sticker, sheet, magnet, vinyl) or save your own with a name and load it anytime.",
  "Deshacer y rehacer": "Undo and redo",
  "Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).": "Ctrl+Z and Ctrl+Y (configurable): choose what goes into the history (size, copies, border, minis).",
  "Imprimir con marcas de Cricut": "Print with Cricut marks",
  "Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.": "Saves first and produces a 300 dpi PDF with the real black marks: print and cut without going through Design Space.",
  "Vista previa": "Preview",
  "Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.": "Cut-area guides, real outlines (with and without border in two colours), transparent background, zoom and move or pin pieces by hand.",
  "Temas y mascota": "Themes and pet",
  "12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.": "12 pastel themes. The Pikmin pet shows up now and then; click the cat 5 times in a row for a surprise.",
  "Minimizar el panel de imágenes": "Minimise the images panel",
  "Desplegar el panel de imágenes": "Expand the images panel",
  "Pulsa la flecha para desplegar el panel.": "Press the arrow to expand the panel.",
  Rápido: "Quick",
  imágenes: "images",
  página: "page",
  páginas: "pages",
  eficiencia: "efficiency",
  "Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.": "Real efficiency (silhouettes / useful area). With these shapes and {n} pieces, ~{e}% is to be expected.",
  minis: "minis",
  "Imágenes colocadas en las hojas": "Images placed on the sheets",
  "Páginas que ocupa el trabajo": "Pages the job takes",
  "Eficiencia real: superficie de las siluetas sobre el área ÚTIL de la hoja (contando los límites)": "Real efficiency: silhouette area over the USEFUL area of the sheet (limits included)",
  "Copias pequeñas extra que rellenan huecos": "Small extra copies that fill gaps",
  "Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde": "Dotted outlines: dashes = what gets cut; dots = the drawing without border",
  "Guías del área recortable (tecla G): solo en la vista previa": "Cut-area guides (key G): preview only",
  "Recalcular la colocación (ignora los elementos fijados)": "Recalculate the layout (ignores pinned items)",
  " · ~{x} restante (máx {y})": " · ~{x} left (max {y})",
  " · ~{x} restante": " · ~{x} remaining",
  "Tiempo máximo de este cálculo: {y}": "Maximum time for this run: {y}",
  "Contorno: {modo} (pulsa para cambiar)": "Outline: {modo} (press to change)",
  "Contorno exterior (con bordes)": "Outer outline (with borders)",
  "Contorno sin bordes": "Outline without borders",
  "Contornos (con y sin bordes)": "Outlines (with and without borders)",
  "Sin contornos": "No outlines",
  "Borde de los minis": "Mini border",
  "Proporcional (se reduce con el mini)": "Proportional (shrinks with the mini)",
  "Mantener el mismo borde (mm del original)": "Keep the same border (mm of the original)",
  "Sin borde": "No border",
  "Qué hacer con el borde de cada mini al reducirlo": "What to do with each mini's border when shrinking it",
  "Lista de tamaños": "Size list",
  "Automático (mínimo + %)": "Automatic (minimum + %)",
  "En milímetros": "In millimetres",
  "En % del original": "As % of the original",
  "Tamaños deseados": "Desired sizes",
  "Auto optimizar": "Auto-optimise",
  Optimizar: "Optimise",
  "Optimizar: vuelve a colocar todo (ignora los fijados)": "Optimise: re-places everything (ignores pinned items)",
  "Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)": "What shows behind: white, transparent or neon green (key T)",
  Transparente: "Transparent",
  Fosforito: "Neon",
  Centrar: "Centre",
  "Cambiar la disposición: menús anchos o hoja más grande": "Switch the layout: wide menus or a bigger sheet",
  "Centrar la hoja y volver al tamaño original (tecla 0)": "Centre the sheet and go back to the original size (key 0)",
  "Modo básico": "Basic mode",
  "Modo experto": "Expert mode",
  "Modo básico (lo esencial) o experto (todos los menús)": "Basic mode (the essentials) or expert (all the menus)",
  "Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.": "Basic mode: only the essentials. Switch to Expert mode to see everything.",
  Experto: "Expert",
  "Modo rápido (lo esencial) o experto (todo el control)": "Quick mode (the essentials) or expert (full control)",
  "Modo rápido: solo lo esencial. Cambia a Experto para verlo todo.": "Quick mode: only the essentials. Switch to Expert to see everything.",
  "Unir todo en una pieza": "Join everything into one piece",
  "Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)": "Joins all the pieces into a single shape with a {mm} mm border (round)",
  "Quitar marcados ({n})": "Remove marked ({n})",
  "Toca un trozo para marcarlo. El principal nunca se borra.": "Tap a piece to mark it. The main one is never deleted.",
  "Unir recto": "Join straight",
  "Unir curvo": "Join round",
  "Extender el color del borde (suave)": "Extend the border colour (smooth)",
  "Unir trozos: borde recto (envolvente)": "Join pieces: straight border (convex hull)",
  "Unir trozos: borde curvo (redondeado)": "Join pieces: round border (rounded hull)",
  "Sugerencias (pulsa para añadirla):": "Suggestions (tap to add):",
  "Incluir los {n} errores recogidos de la consola": "Include the {n} collected console errors",
  "Copiar informe": "Copy report",
  "¡Copiado!": "Copied!",
  "Copia el informe entero al portapapeles (por si no usas GitHub)": "Copy the whole report to the clipboard (in case you don't use GitHub)",
  "Se solapan elementos": "Elements overlap",
  "No caben todas las copias": "Not all copies fit",
  "Los bordes no quedan bien": "Borders don't look right",
  "La impresión sale movida": "Print comes out shifted",
  "El Pikmin no aparece": "The Pikmin never shows up",
  "Se queda pensando": "It keeps thinking forever",
  "La web no arranca": "The web version won't start",
  "Reportar un bug": "Report a bug",
  "Reportar un bug: abre un issue en GitHub ya rellenado": "Report a bug: opens a pre-filled GitHub issue",
  "Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».": "The GitHub page will open with the report already written: check it, tweak it and press “Submit new issue”.",
  "¿Qué ha pasado?": "What happened?",
  "Cuéntalo con tus palabras: qué esperabas y qué pasó.": "Tell it in your own words: what you expected and what happened.",
  "¿Cómo lo repetimos? (opcional)": "How can we reproduce it? (optional)",
  "1. Abro… 2. Pulso… 3. Pasa…": "1. I open… 2. I press… 3. It happens…",
  "Incluir versión y sistema (ayuda mucho)": "Include version and system (helps a lot)",
  "Incluir mis ajustes actuales": "Include my current settings",
  "Abrir issue en GitHub": "Open issue on GitHub",
  "Tiempo automático (el recomendado para cada método)": "Automatic time (the recommended one per method)",
  "Se usarán {s} s con «{m}» (el resto de métodos tienen el suyo).": "{s} s will be used with “{m}” (the other methods have their own).",
  "Perfil…": "Profile…",
  "De fábrica": "Factory",
  Guardados: "Saved",
  "Guardar perfil": "Save profile",
  "Aplicar un perfil de fábrica o uno guardado": "Apply a factory or saved profile",
  "Guardar los ajustes actuales como perfil": "Save the current settings as a profile",
  "Gestionar los perfiles guardados": "Manage saved profiles",
  "Perfil «{n}» aplicado": "Profile “{n}” applied",
  "Perfil «{n}» guardado": "Profile “{n}” saved",
  "Perfil «{n}» borrado": "Profile “{n}” deleted",
  "No se pudo aplicar el perfil": "Could not apply the profile",
  libre: "free",
  fijo: "fixed",
  "Generar minis: rellenar los huecos con copias pequeñas": "Generate minis: fill the gaps with small copies",
  "Rotación admitida: pulsa para cambiar entre 90°, libre y fijo": "Allowed rotation: press to switch between 90°, free and fixed",
  "Estas figuras son de ejemplo: desaparecen solas al añadir tus imágenes.": "These shapes are samples: they disappear on their own when you add your images.",
  Optimización: "Optimization",
  Imagen: "Image",
  "Historial (deshacer/rehacer)": "History (undo/redo)",
  "Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.": "Stores changes on your machine so you can undo and redo (Ctrl+Z / Ctrl+Y). Choose what is saved.",
  "Activar historial": "Enable history",
  "Cambios que se guardan": "Changes kept",
  "Tamaño y escala": "Size and scale",
  "Borde por elemento": "Per-item border",
  "Deshacer (Ctrl+Z)": "Undo (Ctrl+Z)",
  "Rehacer (Ctrl+Y / Ctrl+Shift+Z)": "Redo (Ctrl+Y / Ctrl+Shift+Z)",
  Deshacer: "Undo",
  Rehacer: "Redo",
  "Hay una versión nueva": "A new version is available",
  "Borde de este elemento": "This item's border",
  Extender: "Extend",
  "Color (borde)": "Color",
  "Estimación de corte": "Cut time estimate",
  Visualización: "Appearance",
  "Perfiles de configuración": "Configuration profiles",
  Extras: "Extras",
  "Espacio entre elementos": "Spacing between items",
  "Margen de seguridad a los límites": "Safety margin to the limits",
  "Rotación admitida": "Allowed rotation",
  "No girar": "Don't rotate",
  "Giros de 0º / 90º / 180º / 270º": "0º / 90º / 180º / 270º turns",
  "Cualquier ángulo": "Any angle",
  "Resolución de salida": "Output resolution",
  "Tamaño de salida (vertical)": "Output size (portrait)",
  "Ancho × alto (mm)": "Width × height (mm)",
  "Máquina Cricut": "Cricut machine",
  "Usar minis (rellenar huecos con copias pequeñas)": "Use minis (fill gaps with small copies)",
  "Recalcular automáticamente con cada cambio": "Recalculate automatically on every change",
  "Si lo desactivas, solo se recolocará al pulsar «Recalcular».": "If disabled, it will only re-place when you press “Recalculate”.",
  "Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.": "Minis fill gaps (they don't count as copies): they add efficiency and extra stickers. Each item's quota decides how many it gets compared to the others: everyone starts at 1 (even split) and 3 means triple. The size is chosen by the optimizer, always smaller than the original.",
  "Tamaño mínimo": "Minimum size",
  "Tamaño máximo del mini (% del original)": "Maximum mini size (% of the original)",
  "Rotaciones admitidas": "Allowed rotations",
  "Selección de tamaños": "Size selection",
  "Priorizar que sean iguales": "Prefer equal sizes",
  "Priorizar grandes": "Prefer large",
  "Usar lista de tamaños (en vez de los automáticos)": "Use a size list (instead of automatic)",
  "Tamaños deseados (mayor a menor)": "Desired sizes (largest to smallest)",
  "Quitar tamaño": "Remove size",
  "Añadir tamaño": "Add size",
  "Cada valor es el tamaño del mini respecto al original; se prueban de mayor a menor hasta que quepan.": "Each value is the mini's size relative to the original; they are tried from largest to smallest until they fit.",
  Método: "Method",
  "Greedy / Bottom-Left (rápido)": "Greedy / Bottom-Left (fast)",
  "Largest First (mayor primero)": "Largest First (biggest first)",
  "Voronoi (huecos más grandes)": "Voronoi (largest gaps)",
  "Genético (máxima calidad)": "Genetic (best quality)",
  "Calidad de cálculo": "Calculation quality",
  "Exacta (más fina, más lenta)": "Exact (finest, slower)",
  "Normal (equilibrada)": "Normal (balanced)",
  "Rápida (más gruesa, para bocetos)": "Fast (coarser, for drafts)",
  "Ajustes rápidos": "Quick settings",
  Chapa: "Badge",
  "Perfiles listos": "Ready-made presets",
  Imán: "Magnet",
  "Pegatina grande": "Large sticker",
  Vinilo: "Vinyl",
  "Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde · Imán: borde blanco": "Badge: almost no spacing · Sticker: spacing and border · Sheet: no spacing or border · Magnet: white border",
  Pegatina: "Sticker",
  "Chapa: casi sin espacio entre piezas": "Badge: almost no spacing between pieces",
  "Pegatina: espacio y borde de 1 mm para cortar fácil": "Sticker: spacing and a 1 mm border for easy cutting",
  "Hoja de pegatinas: sin espacio ni borde entre piezas": "Sticker sheet: no spacing or border between pieces",
  "Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde": "Badge: almost no spacing · Sticker: spacing and border · Sheet: no spacing or border",
  "Tiempo máximo": "Maximum time",
  "La eficiencia del último cálculo se muestra en la barra de estado.": "The efficiency of the last run is shown in the status bar.",
  "Formato de color de salida": "Output color format",
  "Espacio de color de impresión": "Print color space",
  "Sangrado de impresión": "Print bleed",
  "Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).": "Extends the edge colour outwards so no white fringe appears if the printer is not perfectly aligned (0 = no bleed).",
  "sRGB (estándar, el más seguro)": "sRGB (standard, safest)",
  "AdobeRGB (más gamas verdes/azules)": "AdobeRGB (wider greens/blues)",
  "Previsualizar la impresión (simular el espacio de color)": "Preview the print (simulate the color space)",
  "Simular el recorte de CMYK (amarillea azules/verdes)": "Simulate CMYK clipping (yellowing of blues/greens)",
  "Saturación de la simulación": "Simulation saturation",
  "Contraste de la simulación": "Simulation contrast",
  "Brillo de la simulación": "Simulation brightness",
  "Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.": "Raise saturation/contrast to offset what printing dulls. The file is not modified: preview only.",
  "PNG con transparencia (recomendado)": "PNG with transparency (recommended)",
  "PNG con fondo blanco": "PNG with white background",
  "Comprobación de líneas anómalas": "Odd line detection",
  "DPI de importación en Design Space": "Import DPI in Design Space",
  "Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.": "If Design Space imports the image at a different size, try 144 (the value it usually uses) or match your version. 300 keeps print quality.",
  "Lienzo del archivo final": "Final file canvas",
  "Solo área recortable (recomendado)": "Cut area only (recommended)",
  "Página completa con márgenes": "Full page with margins",
  "Carpeta predeterminada de exportación": "Default export folder",
  "(Documentos)": "(Documents)",
  "Elegir carpeta…": "Choose folder…",
  "Se guarda para la próxima vez que abras CryCat.": "It is saved for the next time you open CryCat.",
  "Añadir borde a todos los elementos": "Add a border to all items",
  "Grosor del borde": "Border thickness",
  "Tipo de borde": "Border type",
  "Extender el color del borde": "Extend the border color",
  Blanco: "White",
  "Color personalizado": "Custom color",
  "Color del borde": "Border color",
  "El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.": "The border is part of the piece (it is taken into account when placing and saved in the final image). The original is never modified.",
  "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.": "Estimated cutting time for the {maquina}, calculated from the outline perimeter and the travel between shapes.",
  "Velocidad de corte": "Cutting speed",
  "Velocidad de viaje (sin cortar)": "Travel speed (not cutting)",
  "Tiempo extra por forma": "Extra time per shape",
  "Factor de corrección": "Correction factor",
  "Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.": "Adjust the factor to correct with your real machine and material; it is saved for next time.",
  Tema: "Theme",
  "Mostrar guías de límites al inicio": "Show limit guides at start",
  "Icono de la aplicación": "Application icon",
  "Cargar nuevo icono": "Upload new icon",
  "Actualiza la barra de estado, la pestaña y el lanzador.": "It updates the status bar, the tab and the launcher.",
  "Guardar la configuración actual con un nombre": "Save the current settings with a name",
  "Nombre del perfil (p. ej. «Pikmin A4»)": "Profile name (e.g. “Pikmin A4”)",
  Guardar: "Save",
  "Guardar ajustes para la próxima vez": "Save settings for next time",
  "Ajustes guardados": "Settings saved",
  "Perfil guardado": "Profile saved",
  "No se pudo guardar el perfil": "Could not save the profile",
  "Perfil «{n}» cargado": "Profile “{n}” loaded",
  "No se pudo cargar el perfil": "Could not load the profile",
  "No se pudo borrar el perfil": "Could not delete the profile",
  "Perfiles guardados": "Saved profiles",
  "Todavía no hay perfiles guardados.": "No saved profiles yet.",
  Cargar: "Load",
  "Borrar perfil": "Delete profile",
  "Los ajustes se guardan solos al cambiarlos; los perfiles permiten tener varias configuraciones con nombre y recuperarlas cuando quieras.": "Settings are saved automatically when changed; profiles let you keep several named configurations and restore them whenever you want.",
  "Mostrar Pikmin de vez en cuando": "Show Pikmin once in a while",
  "Frecuencia media": "Average frequency",
  "Sonido de Pikmin": "Pikmin sound",
  "De vez en cuando se muere (alma + sonido)": "Sometimes it dies (soul + sound)",
  "Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.": "Images rotate between the project's own and Pikmin Bloom ones.",
  "Comprobar si hay versiones nuevas al iniciar": "Check for new versions on startup",
  "CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas.": "CryCat · made by Daniel Hernández Ferrándiz and Wivi.eve, for the artists.",
  // -------------------------------------------------------------- visor --
  "Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final": "Show/hide Cricut limit guides (key G) — preview only, never in the final file",
  Guías: "Guides",
  "Sin guías": "No guides",
  "Forzar la recolocación de todo (ignora los elementos fijados)": "Force re-placement of everything (ignores pinned items)",
  "Recalcular rápido": "Recalculate fast",
  "Recalcular óptimo": "Recalculate optimal",
  "Volver a la cuadrícula (Esc)": "Back to grid (Esc)",
  "Ver todo": "View all",
  "Fondo: blanco → transparente → verde fosforito (tecla T)": "Background: white → transparent → neon green (key T)",
  "Acercar (+)": "Zoom in (+)",
  "Alejar (−)": "Zoom out (−)",
  "Volver al zoom original (tecla 0)": "Reset zoom (key 0)",
  "Trozo de {px} px — clic para {accion}": "Piece of {px} px — click to {accion}",
  conservar: "keep",
  quitar: "remove",
  "Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El contorno principal nunca se elimina. El archivo original no se toca.": "Click the loose pieces to mark them (they will be removed on save). The main outline is never deleted. The original file is untouched.",
  "Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.": "Add images and they will be placed here optimally, respecting the Cricut cut area.",
  "Página {i}": "Page {i}",
  "Guardar limpieza": "Save cleanup",
  Descartar: "Discard",
  "Abrir la carpeta de guardado en el explorador": "Open the save folder in the file explorer",
  "Abrir carpeta de guardado": "Open save folder",
  "Descargar página {n}": "Download page {n}",
  "Descarga el resultado y ábrelo en Cricut Design Space.": "Download the result and open it in Cricut Design Space.",
  "Guardar como…": "Save as…",
  Imprimir: "Print",
  "Guardado en:\n{folder}": `Saved in:
{folder}`,
  "No se pudo guardar: {e}": "Could not save: {e}",
  "CryCat · Imprimir": "CryCat · Print",
  // -------------------------------------------------------- panel archivos --
  Imágenes: "Images",
  "Arrastra imágenes aquí": "Drag images here",
  "Abrir en el explorador la carpeta de las imágenes de la sesión": "Open the session images folder in the file explorer",
  "Reemplazar por otro archivo de la carpeta": "Replace with another file from the folder",
  "Limpiar contorno (quitar trozos sueltos) sin tocar el original": "Clean outline (remove loose pieces) without touching the original",
  "Restaurar fondo original": "Restore original background",
  "Quitar fondo (inteligente)": "Remove background (smart)",
  "Eliminar imagen": "Delete image",
  "Escala del elemento (100% = tamaño natural)": "Item scale (100% = natural size)",
  "Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)": "How many minis you want of this item compared to the others (1 = even split; 3 = triple)",
  Cuota: "Quota",
  "Colocadas: {n}": "Placed: {n}",
  "LIMPIA EL CONTORNO": "CLEAN THE OUTLINE",
  "Incluir como mini": "Include as mini",
  "Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.": "Tip: enable “Use minis” in Settings to fill gaps with small copies.",
  "Descartar imágenes": "Discard images",
  // ------------------------------------------------------ selector carpeta --
  "Elegir carpeta de guardado": "Choose save folder",
  "Seleccionar esta carpeta": "Select this folder",
  Cancelar: "Cancel",
  // ---------------------------------------------------------- sugerencias --
  "Hoja de pegatinas": "Sticker sheet",
  // ------------------------------------------------------------- varios --
  Personalizado: "Custom",
  Escala: "Scale",
  Borde: "Border",
  "Borde adicional": "Extra border",
  "Borde solo de este elemento para unir trozos flotantes (0 = ajuste global)": "Border for this item only, to merge floating pieces (0 = global setting)",
  Ancho: "Width",
  Alto: "Height",
  "Tamaño exacto en milímetros (mantiene la proporción)": "Exact size in millimetres (keeps the proportion)",
  icono: "icon",
  "→ {n} minis": "→ {n} minis",
  "Imagen guardada ✓": "Image saved ✓",
  "Archivos:": "Files:",
  Carpeta: "Folder",
  "Abrir carpeta": "Open folder",
  Continuar: "Continue",
  "Adaptar los tamaños importados": "Adjust imported sizes",
  "Cómo quedan sobre un A4": "How they fit on A4",
  "Selecciona los que quieras (todos por defecto)": "Select the ones you want (all by default)",
  "Escala de los seleccionados": "Scale of the selected",
  "Tamaño del lado": "Side size",
  "Medir el tamaño por": "Measure size by",
  "Lado mayor": "Longest side",
  "Lado menor": "Shortest side",
  "Círculo equivalente (aprox.)": "Equivalent circle (approx.)",
  "Aplicar a los seleccionados": "Apply to selected",
  "Conservar cambios": "Keep changes",
  "Importar con tamaño original": "Import at original size",
  "Los cambios se previsualizan en el A4 y se aplican al conservarlos.": "Changes are previewed on the A4 and applied when kept.",
  "{n} elementos ajustados ✓": "{n} items adjusted ✓",
  "Pasos en Cricut Design Space": "Steps in Cricut Design Space",
  "Cómo usar tu PNG en Cricut Design Space": "How to use your PNG in Cricut Design Space",
  Volver: "Back",
  Entendido: "Got it",
  "Cómo usar": "How to use",
  Apoyar: "Support us",
  "Apoyar el proyecto (PayPal)": "Support the project (PayPal)",
  "Cómo usar CryCat": "How to use CryCat",
  "Cómo usar CryCat (vuelve a mostrar la ayuda)": "How to use CryCat (shows the help again)",
  "Arrastra tus imágenes al panel de la izquierda (PNG, JPG, PSD, AI, SVG…).": "Drag your images into the left panel (PNG, JPG, PSD, AI, SVG…).",
  "Ajusta el tamaño: usa la escala o escribe el ancho/alto exacto en mm.": "Set the size: use the scale or type the exact width/height in mm.",
  "Activa «Mini» en las imágenes que quieras repetir rellenando huecos.": "Turn on “Mini” on the images you want repeated to fill gaps.",
  "Pulsa «Recalcular» si quieres recolocarlo a fondo (o déjalo en automático).": "Press “Recalculate” for a deep re-layout (or leave it automatic).",
  "Guarda: un PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.": "Save: a 300 dpi PNG ready to print. It never overwrites anything.",
  "Sube el PNG y elige «Imagen completa» (conserva la transparencia).": "Upload the PNG and choose “Full image” (keeps transparency).",
  "Redimensiónala al tamaño real que ves en CryCat.": "Resize it to the real size you see in CryCat.",
  "Pulsa «Crear» y comprueba que las medidas coinciden.": "Press “Create” and check the measurements match.",
  "Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla.": "Print on matte white paper (or use the Cricut marks) and place it on the mat.",
  "Los archivos originales nunca se modifican y la exportación nunca sobrescribe.": "Your original files are never modified and exports never overwrite.",
  "Carga la imagen y elige «Imagen completa» (conserva la transparencia).": "Upload the image and choose “Full image” (keeps transparency).",
  "Redimensiónala al tamaño real (el que se muestra en CryCat).": "Resize it to the real size (the one shown in CryCat).",
  "Pulsa «Crear» para preparar el lienzo.": "Press “Create” to set the canvas.",
  "Comprueba que las dimensiones coinciden con las del archivo.": "Check that the dimensions match the file.",
  "Imprime en papel mate blanco y colócalo en la esterilla.": "Print on matte white paper and place it on the mat.",
  "¡Fiesta Pikmin!": "Pikmin party!"
}, Pd = w.createContext("es");
function Em({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(Pd.Provider, { value: e, children: t });
}
function Hs() {
  return w.useContext(Pd);
}
function Xe() {
  const e = Hs();
  return (t, n) => {
    let r = e === "en" ? zd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function zm(e, t, n) {
  return e === "en" ? zd[t] ?? t : t;
}
function ee({ size: e = 18, children: t }) {
  return /* @__PURE__ */ i.jsx(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: t
    }
  );
}
function bd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Vr({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function to({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function no({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function wo({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("rect", { x: "3", y: "4", width: "14", height: "14", rx: "2", strokeDasharray: "3 2" }),
        /* @__PURE__ */ i.jsx("rect", { x: "7", y: "8", width: "14", height: "12", rx: "2" })
      ]
    }
  );
}
function lu({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("path", { d: "M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" }),
        /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "3" })
      ]
    }
  );
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("path", { d: "M12 3l7 7-7 11L5 10z" }),
        /* @__PURE__ */ i.jsx("path", { d: "M12 8v6" })
      ]
    }
  );
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("circle", { cx: "6", cy: "6", r: "2.6" }),
        /* @__PURE__ */ i.jsx("circle", { cx: "6", cy: "18", r: "2.6" }),
        /* @__PURE__ */ i.jsx("path", { d: "M8.4 7.6L20 18M8.4 16.4L20 6" })
      ]
    }
  );
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("rect", { x: "3", y: "3", width: "8", height: "18", rx: "1.5" }),
        /* @__PURE__ */ i.jsx("rect", { x: "13", y: "7", width: "8", height: "10", rx: "1.5" }),
        /* @__PURE__ */ i.jsx("path", { d: "M17 3v2.5M17 18.5V21", strokeDasharray: "1.5 2.5" })
      ]
    }
  );
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }),
        /* @__PURE__ */ i.jsx("path", { d: "M12 3v18M3 12h18", strokeDasharray: "2 3" })
      ]
    }
  );
}
function Md({ size: e }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i.jsx("path", { d: "M21 12a9 9 0 1 1-2.6-6.4" }),
        /* @__PURE__ */ i.jsx("path", { d: "M21 3v5h-5" })
      ]
    }
  );
}
function Gr({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Td({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function $m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Ld({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Om({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Pa({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function uu({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Fm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Um({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Rd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function qm({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Id({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Vm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Gm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Hm({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Wm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function Qm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function Ym({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Xe(), o = w.useMemo(() => t.map((C) => C.id), [t]), [s, u] = w.useState(/* @__PURE__ */ new Set()), [l, p] = w.useState("escala"), [h, f] = w.useState(100), [v, y] = w.useState(50), [k, x] = w.useState("mayor"), [F, m] = w.useState("");
  w.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const d = (C) => !s.has(C), c = (C) => u((E) => {
    const B = new Set(E);
    return B.has(C) ? B.delete(C) : B.add(C), B;
  }), g = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), j = (C) => {
    const E = C.w_mm_base || 0, B = C.h_mm_base || 0;
    return k === "mayor" ? Math.max(E, B) : k === "menor" ? Math.min(E, B) : 2 * Math.sqrt(Math.max(0, E * B) / Math.PI);
  }, S = (C) => {
    if (l === "tamano") {
      const E = j(C);
      if (E > 0) return Math.min(10, Math.max(0.05, v / E));
    }
    return Math.min(10, Math.max(0.05, h / 100));
  }, N = (C) => {
    const E = S(C);
    return { w: (C.w_mm_base || 0) * E, h: (C.h_mm_base || 0) * E };
  }, P = async () => {
    let C = 0;
    for (const E of t) {
      if (!d(E.id)) continue;
      const B = S(E) * 100;
      await A.patchAsset(E.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(B * 10) / 10))
      }), C += 1;
    }
    await r(), m(a("{n} elementos ajustados ", { n: C })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((C) => {
          const E = N(C), B = Math.min(98, E.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${C.id}`,
              style: {
                width: `${B}%`,
                maxWidth: `${B}%`,
                aspectRatio: `${E.w || 1} / ${E.h || 1}`,
                opacity: d(C.id) ? 1 : 0.3
              },
              title: `${C.name} · ${E.w.toFixed(1)}×${E.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(C.id), alt: "" })
            },
            C.id
          );
        }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "hint row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "mini-link",
              "data-testid": "import-todos",
              onClick: g,
              children: s.size === o.length ? a("Seleccionar todos") : a("Quitar selección")
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "— ",
            o.length - s.size,
            "/",
            o.length
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((C) => {
          const E = N(C);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${C.id}`,
              className: d(C.id) ? "sel" : "",
              onClick: () => c(C.id),
              title: C.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(C.id), alt: C.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: C.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(C.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  E.w.toFixed(1),
                  "×",
                  E.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            C.id
          );
        }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "import-ajustes", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "seg", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-escala",
              className: l === "escala" ? "on" : "",
              onClick: () => p("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: l === "tamano" ? "on" : "",
              onClick: () => p("tamano"),
              children: a("Tamaño fijo (mm)")
            }
          )
        ] }),
        l === "escala" ? /* @__PURE__ */ i.jsxs("label", { children: [
          a("Escala de los seleccionados"),
          /* @__PURE__ */ i.jsxs("span", { className: "row", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 5,
                max: 1e3,
                step: 5,
                "data-testid": "import-escala",
                value: String(h),
                onChange: (C) => f(Number(C.target.value))
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "%" })
          ] })
        ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs("label", { children: [
            a("Tamaño del lado"),
            /* @__PURE__ */ i.jsxs("span", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "number",
                  min: 5,
                  max: 2e3,
                  step: 1,
                  "data-testid": "import-tamano",
                  value: String(v),
                  onChange: (C) => y(Number(C.target.value))
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: "mm" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("label", { children: [
            a("Medir el tamaño por"),
            /* @__PURE__ */ i.jsxs(
              "select",
              {
                "data-testid": "import-modo",
                value: k,
                onChange: (C) => x(C.target.value),
                children: [
                  /* @__PURE__ */ i.jsx("option", { value: "mayor", children: a("Lado mayor") }),
                  /* @__PURE__ */ i.jsx("option", { value: "menor", children: a("Lado menor") }),
                  /* @__PURE__ */ i.jsx("option", { value: "circulo", children: a("Círculo equivalente (aprox.)") })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("La previsualización usa la hoja y los ajustes actuales.") }),
        F && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: F })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ i.jsxs("button", { "data-testid": "import-siguiente", onClick: n, children: [
        a("Siguiente"),
        " ▸"
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "import-conservar",
          onClick: P,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function Km({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  faseBordes: s = 0,
  verBordes: u = !0,
  contornoModo: l = "final",
  destacado: p = !1
}) {
  const h = Xe(), [f, v] = w.useState(() => qr(e));
  w.useEffect(() => v(qr(e)), [e]);
  const y = w.useRef(null), k = _m(f), [x, F] = w.useState(""), m = w.useRef(!1), [d, c] = w.useState(""), g = w.useRef(!1), [j, S] = w.useState({ tamano: !1, borde: !1, mini: !1 }), N = w.useRef(null);
  w.useEffect(() => {
    var L;
    p && (S({ tamano: !0, borde: !0, mini: !0 }), (L = N.current) == null || L.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [p]), w.useEffect(() => {
    m.current || F(k.w > 0 ? k.w.toFixed(1) : ""), g.current || c(k.h > 0 ? k.h.toFixed(1) : "");
  }, [k.w, k.h]);
  const P = Number.isFinite(f.w_mm_base) ? f.w_mm_base : 0, C = Number.isFinite(f.h_mm_base) ? f.h_mm_base : 0, E = (L) => {
    F(L);
    const te = Number(L.replace(",", "."));
    !Number.isFinite(te) || te <= 0 || P <= 0 || V({ scale_pct: te / P * 100 });
  }, B = (L) => {
    c(L);
    const te = Number(L.replace(",", "."));
    !Number.isFinite(te) || te <= 0 || C <= 0 || V({ scale_pct: te / C * 100 });
  }, oe = (t == null ? void 0 : t.placements.filter((L) => L.asset_id === e.id && L.mini).length) ?? 0, Q = (t == null ? void 0 : t.placements.filter((L) => L.asset_id === e.id && !L.mini).length) ?? 0, V = async (L) => {
    a == null || a(), "copies" in L && (L.copies = Math.max(0, L.copies ?? 0)), v((te) => ({ ...te, ...L }));
    try {
      await A.patchAsset(e.id, L);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: N,
      "data-asset": e.id,
      className: `asset-card${p ? " destacada" : ""}`,
      "data-testid": "asset-card",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: A.previewUrlSinBordes(e.id, e.rev ?? 0),
            alt: e.name,
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ i.jsxs("div", { className: "info", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "name-row", children: [
            /* @__PURE__ */ i.jsx("span", { className: "name", title: e.name, children: e.name }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `abrir-carpeta-${e.id}`,
                title: h("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => A.assetsFolder().then((L) => A.abrirCarpeta(L.path)).catch(() => A.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ i.jsx(Vr, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: h("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var L;
                  return (L = y.current) == null ? void 0 : L.click();
                },
                children: /* @__PURE__ */ i.jsx(Pm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: y,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (L) => {
                  var be;
                  const te = (be = L.target.files) == null ? void 0 : be[0];
                  if (L.target.value = "", !!te)
                    try {
                      const { blob: T, name: D } = await Nd(te);
                      await A.reemplazar(e.id, T, D), await n();
                    } catch {
                    }
                }
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `limpiar-${e.id}`,
                title: h("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ i.jsx(bm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                title: f.bg_removed ? h("Restaurar fondo original") : h("Quitar fondo (inteligente)"),
                onClick: () => (f.bg_removed ? A.restoreBackground(e.id) : A.removeBackground(e.id)).then(n),
                children: f.bg_removed ? /* @__PURE__ */ i.jsx(Mm, { size: 16 }) : /* @__PURE__ */ i.jsx(no, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: h("Eliminar imagen"),
                onClick: () => A.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ i.jsx(Tm, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${f.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": h("Incluir como mini (rellena huecos)"),
                onClick: () => V({ mini_enabled: !f.mini_enabled }),
                children: [
                  /* @__PURE__ */ i.jsx(Gr, { size: 15 }),
                  " ",
                  h("Mini")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${f.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": h("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => S((L) => ({ ...L, borde: !L.borde })),
                children: [
                  /* @__PURE__ */ i.jsx(wo, { size: 15 }),
                  " ",
                  h("Borde")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: h("Copias"), children: [
              /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => V({ copies: f.copies - 1 }), children: "−" }),
              /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: f.copies }),
              /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => V({ copies: f.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => S((L) => ({ ...L, tamano: !L.tamano })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${j.tamano ? "open" : ""}`, children: "›" }),
                  h("Tamaño"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    k.w.toFixed(1),
                    "×",
                    k.h.toFixed(1),
                    " · ",
                    Math.round(f.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            j.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: h("Escala del elemento (100% = tamaño natural)"), children: h("Escala") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: f.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (L) => V({ scale_pct: Number(L.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
                  Math.round(f.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: h("Tamaño exacto en milímetros (mantiene la proporción)"), children: h("Ancho") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: x,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      m.current = !0, g.current = !1;
                    },
                    onBlur: () => {
                      m.current = !1, F(k.w > 0 ? k.w.toFixed(1) : "");
                    },
                    onChange: (L) => E(L.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" }),
                /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ i.jsx("span", { title: h("Tamaño exacto en milímetros (mantiene la proporción)"), children: h("Alto") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: d,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      g.current = !0, m.current = !1;
                    },
                    onBlur: () => {
                      g.current = !1, c(k.h > 0 ? k.h.toFixed(1) : "");
                    },
                    onChange: (L) => B(L.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-borde-${e.id}`,
                onClick: () => S((L) => ({ ...L, borde: !L.borde })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${j.borde ? "open" : ""}`, children: "›" }),
                  h("Borde adicional"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    f.offset_mm.toFixed(1),
                    " mm",
                    f.offset_mm <= 0 ? ` · ${h("global")}` : ""
                  ] })
                ]
              }
            ),
            j.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => V({ offset_mm: Math.max(
                      0,
                      Math.round((f.offset_mm - 0.5) * 2) / 2
                    ) }),
                    children: "−"
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: 10,
                    step: 0.5,
                    "data-testid": `offset-range-${e.id}`,
                    value: f.offset_mm,
                    onChange: (L) => V({ offset_mm: Number(L.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => V({ offset_mm: Math.min(
                      20,
                      Math.round((f.offset_mm + 0.5) * 2) / 2
                    ) }),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", h("Extender")],
                  ["blanco", h("Blanco")],
                  ["color", h("Color")],
                  ["unir_recto", h("Unir recto")],
                  ["unir_curvo", h("Unir curvo")]
                ].map(([L, te]) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: `seg ${(f.offset_modo || "") === L ? "on" : ""}`,
                    "data-testid": `offset-modo-${L}-${e.id}`,
                    onClick: () => V({ offset_modo: L }),
                    children: te
                  },
                  L
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: f.offset_color || "#ffffff",
                    title: h("Color del borde"),
                    onChange: (L) => V({
                      offset_color: L.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          f.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => S((L) => ({ ...L, mini: !L.mini })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${j.mini ? "open" : ""}`, children: "›" }),
                  h("Opciones de mini"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    f.mini_quota,
                    " · ",
                    oe
                  ] })
                ]
              }
            ),
            j.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ i.jsx("span", { title: h("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: h("Cuota") }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => V({ mini_quota: Math.max(
                    1,
                    Math.round((f.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                f.mini_quota
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => V({ mini_quota: Math.min(
                    100,
                    Math.round((f.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: h(" {n} minis", { n: oe }) })
            ] }) })
          ] }),
          Q > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: h("Colocadas: {n}", { n: Q }) }),
          f.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ i.jsx(Rd, { size: 14 }),
            " ",
            f.warnings[0],
            " ",
            f.warnings.some((L) => /blob|trozos sueltos/i.test(L)) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: h("LIMPIA EL CONTORNO")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Xm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0,
  verBordes: l = !0,
  contornoModo: p = "final",
  destacado: h = ""
}) {
  const f = Xe(), v = w.useRef(null), [y, k] = w.useState(!1), [x, F] = w.useState(null), m = async (c) => {
    const g = [];
    for (const j of Array.from(c))
      try {
        const { blob: S, name: N } = await Nd(j);
        g.push(qr(await A.upload(S, N)));
      } catch (S) {
        console.error(S);
      }
    await r(), g.length > 1 && F(g);
  }, d = n.usar_minis;
  return e.some((c) => c.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: f("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${y ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = v.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), k(!0);
        },
        onDragLeave: () => k(!1),
        onDrop: (c) => {
          c.preventDefault(), k(!1), c.dataTransfer.files.length && m(c.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            f("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: v,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (c) => {
                c.target.files && m(c.target.files), c.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((c) => /* @__PURE__ */ i.jsx(
      Km,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        contornoModo: p,
        destacado: h === c.id,
        bordeGlobal: n.offset_activo === !0
      },
      c.id
    )) }),
    !d && /* @__PURE__ */ i.jsx("div", { className: "hint", children: f("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => A.clearAssets().then(r),
        children: f("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ym,
      {
        open: !!x,
        assets: x ?? [],
        onClose: () => F(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const jt = (e) => (globalThis.__crycatAssets || "") + e;
function Ad({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Xe(), [o, s] = w.useState(null), [u, l] = w.useState("");
  w.useEffect(() => {
    e && p(r || "");
  }, [e]);
  const p = async (h = "") => {
    l("");
    try {
      s(await A.fsList(h));
    } catch (f) {
      l(f.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (h) => h.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => p(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((h) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => p(`${o.path}/${h}`.replace("//", "/")),
          children: h
        },
        h
      ))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "elegir-carpeta-ok",
          disabled: !o,
          onClick: () => {
            o && n(o.path), t();
          },
          children: a("Seleccionar esta carpeta")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { onClick: t, children: a("Cancelar") })
    ] })
  ] }) }) : null;
}
function Jm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Xe(), [u, l] = w.useState("resumen");
  if (!e) return null;
  const p = t.length > 0 && t.every((f) => f.startsWith("data:")), h = [
    s("Abre Cricut Design Space."),
    s("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    s("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    s("Pulsa «Crear» para preparar el lienzo."),
    s("Comprueba que las dimensiones coinciden con las del archivo."),
    s("Imprime en papel mate blanco y colócalo en la esterilla."),
    s("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ i.jsx("div", { className: "modal", children: u === "resumen" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { "data-testid": "save-titulo", children: s(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ i.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Archivos:") }),
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((f) => /* @__PURE__ */ i.jsx("li", { title: f, children: f.split(/[\\/]/).pop() }, f)) }),
      !p && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      p && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      p ? t.map((f, v) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${v}`,
          href: f,
          download: `crycat_pagina-${String(v + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Vr, { size: 15 }),
            " ",
            s("Descargar página {n}", { n: v + 1 })
          ]
        },
        v
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx(Vr, { size: 15 }),
            " ",
            s("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-continuar", onClick: o, children: s("Continuar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => l("cricut"),
          children: s("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { children: s("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: h.map((f, v) => /* @__PURE__ */ i.jsx("li", { children: f }, v)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => l("resumen"),
          children: s("Volver")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { onClick: o, children: s("Entendido") })
    ] })
  ] }) }) });
}
function Zm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: p, onFinEdicion: h, onDeshacer: f, onRehacer: v, puedeDeshacer: y, puedeRehacer: k }) {
  const x = Xe(), F = Hs(), [m, d] = w.useState(1), [c, g] = w.useState({ x: 0, y: 0 }), [j, S] = w.useState(null), [N, P] = w.useState(1), [C, E] = w.useState(null), [B, oe] = w.useState(null), [Q, V] = w.useState(!1), [L, te] = w.useState(2), [be, T] = w.useState(0);
  w.useEffect(() => {
    if (!r.verBordes) return;
    const _ = window.setInterval(
      () => T((R) => (R + 3) % 12),
      260
    );
    return () => window.clearInterval(_);
  }, [r.verBordes]);
  const [D, O] = w.useState([]), [Y, K] = w.useState([]), [Ct, Me] = w.useState(""), [$e, we] = w.useState(/* @__PURE__ */ new Set()), De = w.useRef(null), $ = w.useRef(null), me = F === "en" ? Cm : Sm, ht = w.useMemo(
    () => me[Math.floor(Math.random() * me.length)],
    [me]
  ), at = r.saveName.trim() || ht;
  w.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const je = (t == null ? void 0 : t.pages) ?? 0, rr = !!t && t.efficiency < 0.8;
  w.useEffect(() => {
    const _ = De.current;
    if (!_) return;
    const R = (b) => {
      b.preventDefault(), b.stopPropagation();
      const H = _.getBoundingClientRect(), X = b.clientX - H.left, ve = b.clientY - H.top;
      d((Te) => {
        const J = b.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, Te * J)), vt = ie / Te;
        return g((Bt) => ({ x: X - (X - Bt.x) * vt, y: ve - (ve - Bt.y) * vt })), ie;
      });
    };
    return _.addEventListener("wheel", R, { passive: !1 }), () => _.removeEventListener("wheel", R);
  }, []);
  const Xr = (_) => {
    if (_.target.closest(".item-box")) return;
    $.current = { x: _.clientX - c.x, y: _.clientY - c.y };
    const R = (H) => {
      $.current && g({ x: H.clientX - $.current.x, y: H.clientY - $.current.y });
    }, b = () => {
      $.current = null, window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", b);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", b);
  };
  w.useEffect(() => {
    const _ = (R) => {
      R.target.tagName !== "INPUT" && (R.key === "+" || R.key === "=" ? d((b) => Math.min(12, b * 1.08)) : R.key === "-" || R.key === "_" ? d((b) => Math.max(0.05, b / 1.08)) : R.key === "0" ? ar() : R.key === "Escape" ? S(null) : R.key === "g" ? a((b) => ({ ...b, guidesVisible: !b.guidesVisible })) : R.key === "t" && a((b) => b.eyeFosforito ? { ...b, eyeFosforito: !1, eyeTransparent: !1 } : b.eyeTransparent ? { ...b, eyeTransparent: !1, eyeFosforito: !0 } : { ...b, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _);
  }, [a]);
  const M = w.useRef(null), U = w.useRef(null), ke = (_, R) => {
    _.preventDefault(), _.stopPropagation();
    const b = _.currentTarget.closest(".page-box");
    if (!b || !t) return;
    const H = t.page_mm[0] / b.clientWidth, X = {
      uid: R.uid,
      startX: _.clientX,
      startY: _.clientY,
      origX: R.x,
      origY: R.y,
      mmPerPx: H
    };
    M.current = X, U.current = { x: R.x, y: R.y }, E(X), oe({ uid: R.uid, x: R.x, y: R.y });
    const ve = (J) => {
      const ie = M.current;
      if (!ie) return;
      const vt = (J.clientX - ie.startX) * ie.mmPerPx / m, Bt = (J.clientY - ie.startY) * ie.mmPerPx / m;
      U.current = { x: ie.origX + vt, y: ie.origY + Bt }, oe({ uid: ie.uid, x: ie.origX + vt, y: ie.origY + Bt });
    }, Te = (J) => {
      window.removeEventListener("mousemove", ve), window.removeEventListener("mouseup", Te);
      const ie = M.current;
      if (M.current = null, !ie) return;
      const vt = (J.clientX - ie.startX) * ie.mmPerPx / m, Bt = (J.clientY - ie.startY) * ie.mmPerPx / m;
      E(null), oe(null), !(Math.abs(vt) < 0.5 && Math.abs(Bt) < 0.5) && Ve(ie.uid, ie.origX + vt, ie.origY + Bt);
    };
    window.addEventListener("mousemove", ve), window.addEventListener("mouseup", Te);
  }, Ve = async (_, R, b) => {
    try {
      const H = await A.move(_, R, b);
      H.job ? u(H.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, Jr = async (_) => {
    const R = await A.unpin(_);
    u(R);
  }, Dt = !1;
  w.useEffect(() => {
    {
      O([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, N]), w.useEffect(() => {
    if (!p) {
      K([]), Me(""), we(/* @__PURE__ */ new Set());
      return;
    }
    A.blobs(p.id).then((_) => {
      K(_.blobs), te(p.offset_mm > 0 ? p.offset_mm : _.union_mm ?? 2), Me(_.preview_png), we(new Set(_.blobs.filter((R) => !R.principal).map((R) => R.id)));
    }).catch(() => {
      K([]), Me("");
    });
  }, [p]);
  const Ws = async () => {
    if (p)
      try {
        await A.limpiarContorno(p.id, Array.from($e));
      } finally {
        await (h == null ? void 0 : h());
      }
  }, Bd = (_) => {
    we((R) => {
      const b = new Set(R);
      return b.has(_) ? b.delete(_) : b.add(_), b;
    });
  }, [gt, Ot] = w.useState(null), Ud = async () => {
    try {
      const b = await A.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Ot({ files: b.files, folder: b.folder });
    } catch (b) {
      Ot({ files: [], folder: "", error: b.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const H = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), X = URL.createObjectURL(H), ve = document.createElement("a");
        ve.href = X, ve.download = `${r.saveName || "crycat"}-cricut.pdf`, ve.click(), setTimeout(() => URL.revokeObjectURL(X), 4e3);
      } catch (b) {
        Ot({
          files: [],
          folder: "",
          error: b.message
        });
      }
      return;
    }
    const R = document.createElement("iframe");
    R.setAttribute("aria-hidden", "true"), R.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", R.src = "/api/print.pdf", R.onload = () => {
      var b, H;
      try {
        (b = R.contentWindow) == null || b.focus(), (H = R.contentWindow) == null || H.print();
      } finally {
        window.setTimeout(() => R.remove(), 6e4);
      }
    }, document.body.appendChild(R);
  }, qd = async () => {
    try {
      const _ = await A.export(at);
      Ot({ files: _.files, folder: _.folder });
    } catch (_) {
      Ot({ files: [], folder: "", error: _.message });
    }
  }, Vd = () => {
    V(!0);
  }, Gd = async (_) => {
    try {
      const R = await A.export(at, _);
      Ot({ files: R.files, folder: R.folder });
    } catch (R) {
      Ot({ files: [], folder: "", error: R.message });
    }
  }, Qs = (t == null ? void 0 : t.poly_mm) ?? [], [ot, it] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [_n, Nn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], st = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : _n, un = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Nn, ar = w.useCallback(() => {
    const _ = De.current;
    if (!_) return;
    const R = _.querySelector(".page-box");
    if (!R) return;
    const b = _.querySelector(".canvas-inner"), H = _.clientWidth, X = _.clientHeight, ve = (b == null ? void 0 : b.offsetWidth) || R.offsetWidth || 1, Te = (b == null ? void 0 : b.offsetHeight) || R.offsetHeight || 1, J = Math.min(1, H / ve, X / Te);
    d(J), g({ x: (H - ve * J) / 2, y: (X - Te * J) / 2 });
  }, []);
  w.useEffect(() => {
    if (je <= 0) return;
    const _ = window.setTimeout(ar, 60);
    return () => window.clearTimeout(_);
  }, [
    je,
    st,
    un,
    r.viewMode,
    r.hojaGirada,
    j,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    ar
  ]);
  const _t = n.lienzo === "pagina" ? 0 : ot, Nt = n.lienzo === "pagina" ? 0 : it, Ys = Qs.length ? "M" + Qs.map(([_, R]) => `${_ - _t},${R - Nt}`).join(" L") + " Z" : "", Ks = w.useRef(0);
  w.useEffect(() => {
    if (!t) return;
    const _ = t.pages || 0;
    _ > 0 && _ !== Ks.current && (Ks.current = _, a((R) => ({ ...R, viewMode: _ <= 1 ? 1 : _ === 2 ? 2 : 4 })), S(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const jo = {
    final: {
      etiqueta: "Contorno exterior (con bordes)",
      corto: "Contorno",
      clase: "modo-final"
    },
    orig: {
      etiqueta: "Contorno sin bordes",
      corto: "Sin borde",
      clase: "modo-orig"
    },
    ambos: {
      etiqueta: "Contornos (con y sin bordes)",
      corto: "Ambos",
      clase: "modo-ambos"
    },
    ninguno: {
      etiqueta: "Sin contornos",
      corto: "Sin contorno",
      clase: "modo-ninguno"
    }
  }, Zr = r.contornoModo ?? "final", Hd = r.verBordes && Zr !== "ninguno", Ft = r.hojaGirada === !0, ko = Ft ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${st / (un || 1) * 100}%`,
    height: `${un / (st || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(90deg)"
  } : void 0, Wd = (_) => {
    const R = (t == null ? void 0 : t.placements.filter((b) => b.page === _)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}${Ft ? " girada" : ""}`,
        style: Ft ? {
          width: "100%",
          aspectRatio: `${un} / ${st}`
        } : { width: "100%" },
        onClick: (b) => {
          je > 1 && j === null && !b.target.closest(".item-box") && S(_);
        },
        "data-testid": `page-${_}`,
        children: [
          /* @__PURE__ */ i.jsx(
            "img",
            {
              className: `sheet${Ft ? " girada" : ""}`,
              style: ko,
              onLoad: _ === 0 ? ar : void 0,
              src: A.pageUrl(_, N, n.simular_impresion === !0, Hd, be, Zr),
              alt: x("Página {i}", { i: _ + 1 }),
              draggable: !1
            }
          ),
          r.guidesVisible && Ys && /* @__PURE__ */ i.jsxs(
            "svg",
            {
              className: `overlay-svg${Ft ? " girada" : ""}`,
              style: ko,
              viewBox: `0 0 ${st} ${un}`,
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ i.jsxs(
                  "g",
                  {
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.15, st / 1400),
                    opacity: 0.28,
                    children: [
                      Array.from(
                        { length: Math.floor((ot - _t + _n) / 10) + 1 },
                        (b, H) => {
                          const X = H * 10 - (_t - ot);
                          return X >= ot - _t - 0.01 && X <= ot - _t + _n + 0.01 ? /* @__PURE__ */ i.jsx(
                            "line",
                            {
                              x1: X,
                              y1: it - Nt,
                              x2: X,
                              y2: it - Nt + Nn
                            },
                            `v${H}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((it - Nt + Nn) / 10) + 1 },
                        (b, H) => {
                          const X = H * 10 - (Nt - it);
                          return X >= it - Nt - 0.01 && X <= it - Nt + Nn + 0.01 ? /* @__PURE__ */ i.jsx(
                            "line",
                            {
                              x1: ot - _t,
                              y1: X,
                              x2: ot - _t + _n,
                              y2: X
                            },
                            `h${H}`
                          ) : null;
                        }
                      )
                    ]
                  }
                ),
                (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
                  ["esquina_flecha", ot, it, !1, !1],
                  ["esquina_sd", ot + _n, it, !0, !1],
                  ["esquina_ii", ot, it + Nn, !1, !0],
                  ["esquina_id", ot + _n, it + Nn, !0, !0]
                ].map(([b, H, X, ve, Te]) => {
                  const J = t.marcas[b];
                  if (!J) return null;
                  const ie = H - _t - (ve ? J[0] : 0), vt = X - Nt - (Te ? J[1] : 0);
                  return /* @__PURE__ */ i.jsx(
                    "image",
                    {
                      href: jt(`/marcas/${b}.png`),
                      x: ie,
                      y: vt,
                      width: J[0],
                      height: J[1],
                      preserveAspectRatio: "none"
                    },
                    b
                  );
                }) }),
                /* @__PURE__ */ i.jsx(
                  "path",
                  {
                    d: Ys,
                    fill: "none",
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.6, st / 250),
                    strokeDasharray: `${st / 55} ${st / 85}`,
                    opacity: 0.85
                  }
                ),
                Dt
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `capa-piezas${Ft ? " girada" : ""}`,
              style: ko,
              children: R.map((b) => {
                const H = e.find((J) => J.id === b.asset_id), X = (B == null ? void 0 : B.uid) === b.uid ? B : null, ve = ((X ? X.x : b.x) - _t) / (st || 1) * 100, Te = ((X ? X.y : b.y) - Nt) / (un || 1) * 100;
                return /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `item-box ${b.pinned ? "pinned" : ""} ${(C == null ? void 0 : C.uid) === b.uid ? "dragging" : ""}`,
                    style: {
                      left: `${ve}%`,
                      top: `${Te}%`,
                      width: `${b.w / (st || 1) * 100}%`,
                      height: `${b.h / (un || 1) * 100}%`
                    },
                    title: (H == null ? void 0 : H.name) ?? "",
                    onMouseDown: (J) => ke(J, b),
                    onContextMenu: (J) => {
                      J.preventDefault(), Jr(b.uid);
                    },
                    "data-testid": `item-${b.uid}`,
                    onClick: (J) => {
                      J.stopPropagation(), J.currentTarget.scrollIntoView({
                        block: "center",
                        inline: "center",
                        behavior: "smooth"
                      }), window.dispatchEvent(new CustomEvent(
                        "crycat:seleccion",
                        { detail: b.asset_id }
                      ));
                    },
                    children: b.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
                  },
                  b.uid
                );
              })
            }
          )
        ]
      },
      _
    );
  }, Qd = j !== null ? [j] : Array.from({ length: je }, (_, R) => R);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    je > 1 && /* @__PURE__ */ i.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: x("No cabe en una página: {n} páginas", { n: je }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${jo[Zr].clase}`,
          "data-tip": x("Contorno: {modo} (pulsa para cambiar)", {
            modo: x(jo[r.contornoModo ?? "final"].etiqueta)
          }),
          onClick: () => {
            const _ = ["final", "orig", "ambos", "ninguno"], R = _.indexOf(r.contornoModo ?? "final"), b = _[(R + 1) % 4];
            a((H) => ({
              ...H,
              contornoModo: b,
              verBordes: b !== "ninguno"
            })), o({
              contorno_modo: b,
              ver_contornos: b !== "ninguno"
            });
          },
          children: [
            /* @__PURE__ */ i.jsx(wo, { size: 16 }),
            " ",
            x(jo[Zr].corto)
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          className: r.guidesVisible ? "primary" : "",
          "data-tip": x("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((_) => ({ ..._, guidesVisible: !_.guidesVisible })),
          children: [
            /* @__PURE__ */ i.jsx(Ld, { size: 16 }),
            " ",
            x("Marcas")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-ojo",
          "data-tip": x("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
          onClick: () => a((_) => _.eyeFosforito ? { ..._, eyeFosforito: !1, eyeTransparent: !1 } : _.eyeTransparent ? { ..._, eyeTransparent: !1, eyeFosforito: !0 } : { ..._, eyeTransparent: !0, eyeFosforito: !1 }),
          children: [
            r.eyeFosforito ? /* @__PURE__ */ i.jsx(Lm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(lu, { size: 16 }) : /* @__PURE__ */ i.jsx(lu, { size: 16 }),
            r.eyeFosforito ? x("Fosforito") : r.eyeTransparent ? x("Transparente") : x("Blanco")
          ]
        }
      ),
      (je > 1 && j === null || j !== null) && /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        je > 1 && j === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((_) => ({ ..._, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((_) => ({ ..._, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((_) => ({ ..._, viewMode: 4 })), children: "4" })
        ] }),
        j !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => S(null), title: x("Volver a la cuadrícula (Esc)"), children: x(" Ver todo") })
      ] }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Ft ? "primary" : "",
          "data-tip": x("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const _ = !window.__crycatAncho;
            window.__crycatAncho = _, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: _ }
            ));
          },
          children: [
            /* @__PURE__ */ i.jsx(Im, { size: 16 }),
            x(Ft ? "Vertical" : "Horizontal")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-flotantes", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "vf-izq", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": x("Deshacer (Ctrl+Z)"),
            onClick: () => f(),
            disabled: !y,
            children: /* @__PURE__ */ i.jsx(Td, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": x("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => v(),
            disabled: !k,
            children: /* @__PURE__ */ i.jsx($m, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "vf-centro", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "btn-optimizar-flotante",
          "data-testid": "btn-recalcular",
          "data-tip": x("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(rr ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "estrella", children: "✦" }),
            x("Optimizar"),
            /* @__PURE__ */ i.jsx("span", { className: "estrella", children: "✦" })
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": x("Acercar (+)"),
            onClick: () => d((_) => Math.min(12, _ * 1.08)),
            children: /* @__PURE__ */ i.jsx(Dm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": x("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: ar,
            children: /* @__PURE__ */ i.jsx(Am, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": x("Alejar (−)"),
            onClick: () => d((_) => Math.max(0.05, _ / 1.08)),
            children: /* @__PURE__ */ i.jsx(Om, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(m * 100),
          "%"
        ] })
      ] })
    ] }),
    p ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: A.previewUrl(p.id) + `?t=${N}`,
            alt: p.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: p && Y.filter((_) => !_.principal).map((_, R) => {
          const [b, H, X, ve] = _.bbox, Te = p.w_px || 1, J = p.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${$e.has(_.id) ? " sel" : ""}`,
              "data-testid": `blob-${R}`,
              title: x("Trozo de {px} px — clic para {accion}", {
                px: _.area_px,
                accion: $e.has(_.id) ? x("conservar") : x("quitar")
              }),
              style: {
                left: `${b / Te * 100}%`,
                top: `${H / J * 100}%`,
                width: `${(X - b) / Te * 100}%`,
                height: `${(ve - H) / J * 100}%`
              },
              onClick: () => Bd(_.id)
            },
            _.id
          );
        }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ i.jsxs("span", { className: "row", style: { gap: 6, alignItems: "center" }, children: [
            /* @__PURE__ */ i.jsx("span", { className: "hint", children: x("Borde para unir") }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-menos",
                onClick: () => te((_) => Math.max(0.5, Math.round((_ - 0.5) * 2) / 2)),
                children: "−"
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": "union-mm", children: [
              L,
              " mm"
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-mas",
                onClick: () => te((_) => Math.min(20, Math.round((_ + 0.5) * 2) / 2)),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "primary",
              "data-testid": "btn-unir-contorno",
              title: x("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: L }),
              onClick: async () => {
                p && (await A.patchAsset(p.id, {
                  offset_mm: L,
                  offset_modo: "unir_curvo"
                }), await (h == null ? void 0 : h()));
              },
              children: x("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Ws,
              children: x(
                "Quitar marcados ({n})",
                { n: $e.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: x("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: De,
        className: `canvas ${C ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: Xr,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${c.x}px, ${c.y}px) scale(${m})` },
            children: [
              je === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: x("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${j !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Qd.map(Wd)
                }
              )
            ]
          }
        )
      }
    ),
    p ? /* @__PURE__ */ i.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: Ws,
          children: x("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => h == null ? void 0 : h(),
          children: x("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: ht,
          value: r.saveName,
          onChange: (_) => a((R) => ({ ...R, saveName: _.target.value }))
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: x("Abrir la carpeta de guardado en el explorador"),
            "aria-label": x("Abrir carpeta de guardado"),
            onClick: () => A.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Vr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: qd, children: x("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Vd, children: x("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Ud,
            disabled: je === 0,
            children: x("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Ad,
      {
        open: Q,
        initial: n.carpeta_export,
        onClose: () => V(!1),
        onPick: Gd
      }
    ),
    /* @__PURE__ */ i.jsx(
      Jm,
      {
        open: !!gt,
        files: (gt == null ? void 0 : gt.files) ?? [],
        folder: (gt == null ? void 0 : gt.folder) ?? "",
        error: gt == null ? void 0 : gt.error,
        onOpenFolder: (_) => void A.fsOpen(_).catch(() => {
        }),
        onClose: () => Ot(null)
      }
    )
  ] });
}
function eh({ settings: e, saveSettings: t }) {
  const n = Xe(), r = e.usar_minis, a = e.modo === "experto", o = {
    90: "libre",
    libre: "no",
    no: "90"
  }, s = {
    90: "90°",
    libre: n("libre"),
    no: n("fijo")
  };
  return /* @__PURE__ */ i.jsx("div", { className: "acciones-panel", children: /* @__PURE__ */ i.jsxs("div", { className: "acciones-rapidas", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: `chip${r ? " on" : ""}`,
        "data-testid": "chip-minis",
        "data-tip": n("Generar minis: rellenar los huecos con copias pequeñas"),
        onClick: () => t({
          usar_minis: !r,
          // al activarlos se desactiva el recálculo automático (solo ahora)
          ...r ? {} : { auto_recalcular: !1 }
        }),
        children: [
          /* @__PURE__ */ i.jsx(Gr, { size: 16 }),
          " ",
          n("Minis")
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: `chip${e.auto_recalcular ? " on" : ""}`,
        "data-testid": "chip-auto",
        "data-tip": n("Recalcular automáticamente con cada cambio"),
        onClick: () => t({ auto_recalcular: !e.auto_recalcular }),
        children: [
          /* @__PURE__ */ i.jsx(to, { size: 16 }),
          " ",
          n("Auto optimizar")
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: `chip${a ? " on" : ""}`,
        "data-testid": "chip-modo",
        "data-tip": n("Modo básico (lo esencial) o experto (todos los menús)"),
        onClick: () => t({ modo: a ? "rapido" : "experto" }),
        children: n(a ? "Modo experto" : "Modo básico")
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "chip",
        "data-testid": "chip-rotacion",
        "data-tip": n("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo"),
        onClick: () => t({
          rotacion: o[e.rotacion] ?? "90"
        }),
        children: [
          /* @__PURE__ */ i.jsx(Md, { size: 16 }),
          " ",
          s[e.rotacion] ?? "90°"
        ]
      }
    )
  ] }) });
}
const Yo = [
  {
    clave: "silueta",
    nombre: "Silueta",
    desc: "Forma real, cualquier ángulo",
    Icono: Wm,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: Qm,
    forma: "rectangulos"
  }
];
function th({ settings: e, saveSettings: t }) {
  var h;
  const n = Xe(), [r, a] = w.useState(
    {}
  ), [o, s] = w.useState("");
  w.useEffect(() => {
    A.modos().then((f) => a(f.modos ?? {})).catch(() => {
    });
  }, []);
  const u = e.modo_forma ?? "siluetas", l = ((h = Yo.find((f) => f.forma === u)) == null ? void 0 : h.clave) ?? "silueta", p = async (f) => {
    var y;
    const v = r[f];
    v && (await t(v), s(n("Modo «{n}» aplicado", {
      n: n(((y = Yo.find((k) => k.clave === f)) == null ? void 0 : y.nombre) ?? f)
    })));
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "modos-seg",
        role: "tablist",
        title: n("Modo de empaquetado: elige UNO"),
        children: Yo.map((f) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": l === f.clave,
            "data-testid": `modo-${f.clave}`,
            className: `modo-btn${l === f.clave ? " on" : ""}`,
            title: n("Modo {n}: {d}", { n: n(f.nombre), d: n(f.desc) }),
            onClick: () => p(f.clave),
            children: [
              /* @__PURE__ */ i.jsx(f.Icono, { size: 24 }),
              /* @__PURE__ */ i.jsxs("span", { className: "modo-txt", children: [
                /* @__PURE__ */ i.jsx("b", { children: n(f.nombre) }),
                /* @__PURE__ */ i.jsx("i", { children: n(f.desc) })
              ] }),
              l === f.clave && /* @__PURE__ */ i.jsx("span", { className: "modo-check", children: "✓" })
            ]
          },
          f.clave
        ))
      }
    ),
    o && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modos-aviso", children: o })
  ] });
}
function nh({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
  const u = s === "mm" ? t : t / 100 * n, l = s === "mm" ? n ? t / n * 100 : 0 : t;
  return /* @__PURE__ */ i.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: s === "mm" ? 200 : 99,
        step: s === "mm" ? 1 : 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(s === "mm" ? t : Math.round(l * 10) / 10),
        title: o("Tamaño del mini"),
        onChange: (p) => {
          const h = Number(p.target.value);
          Number.isFinite(h) && h > 0 && r(h);
        }
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "hint", children: s === "mm" ? "mm" : "%" }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        disabled: !0,
        className: "suave",
        "data-testid": `mini-tamano-mm-${e}`,
        value: s === "mm" ? n ? l.toFixed(1) : "" : u.toFixed(1),
        title: o("Equivale a este tamaño en la otra unidad")
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "hint suave", children: s === "mm" ? "%" : "mm" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "icon-btn danger",
        title: o("Quitar tamaño"),
        "data-testid": `mini-tamano-quitar-${e}`,
        onClick: a,
        children: "✕"
      }
    )
  ] });
}
function Et({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function cu(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const rh = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, ah = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function oh({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Xe(), [a, o] = w.useState(!0), [s, u] = w.useState({
    general: !0,
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [l, p] = w.useState(!1), h = w.useMemo(() => {
    const g = (n ?? []).filter((S) => S.mini_enabled);
    return (g.length ? g : n ?? []).slice().sort((S, N) => Math.min(N.w_mm, N.h_mm) - Math.min(S.w_mm, S.h_mm))[0] ?? null;
  }, [n]), f = h ? Math.min(h.w_mm, h.h_mm) : 0, v = e.modo === "experto", y = ({ children: g }) => v ? /* @__PURE__ */ i.jsx(i.Fragment, { children: g }) : null, k = (g) => u((j) => ({ ...j, [g]: !j[g] })), x = (g) => t(g), F = w.useRef(null), m = ({ titulo: g, children: j }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(g) }),
    j
  ] }), d = (g, j, S, N, P = 1, C = "", E, B) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...B ? { "data-tip": r(B) } : {}, children: r(g) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: S,
          max: N,
          step: P,
          "data-testid": `set-${j}`,
          value: String(e[j]),
          onChange: (oe) => {
            const Q = Number(oe.target.value);
            Number.isNaN(Q) || x({ [j]: Q });
          }
        }
      ),
      C && /* @__PURE__ */ i.jsx("span", { className: "hint", children: C }),
      E
    ] })
  ] }), c = (g, j, S, N, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...P ? { "data-tip": r(P) } : {}, children: r(g) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${j}`,
        value: String(e[j]),
        onChange: (C) => x({ [j]: C.target.value }),
        children: S.map(([C, E]) => /* @__PURE__ */ i.jsx("option", { value: C, children: r(E) }, C))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(th, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsx(eh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !v && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Pa, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Colocación", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "ctl-fila", children: [
                d(
                  "Espacio entre elementos",
                  "espacio_mm",
                  0,
                  20,
                  0.5,
                  "mm",
                  void 0,
                  "Separación mínima entre piezas al colocarlas. Para chapa, 0,5; para pegatinas que se recortan una a una, 2 mm."
                ),
                d(
                  "Margen a los límites",
                  "margen_mm",
                  0,
                  20,
                  0.5,
                  "mm",
                  void 0,
                  "Cuánto se separan las piezas del borde del área recortable. Súbelo si tu Cricut corta justo al límite."
                )
              ] }),
              c("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(y, { children: d("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (g) => {
                      const j = g.target.value, S = km[j];
                      x(S ? { pagina: j, pagina_w: S[0], pagina_h: S[1] } : { pagina: j });
                    },
                    children: [
                      /* @__PURE__ */ i.jsx("option", { value: "A4", children: "A4 (210×297)" }),
                      /* @__PURE__ */ i.jsx("option", { value: "A3", children: "A3 (297×420)" }),
                      /* @__PURE__ */ i.jsx("option", { value: "A5", children: "A5 (148×210)" }),
                      /* @__PURE__ */ i.jsx("option", { value: "Letter", children: "Letter (216×279)" }),
                      /* @__PURE__ */ i.jsx("option", { value: "custom", children: r("Personalizado") })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx(y, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (g) => x({ pagina_w: Number(g.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (g) => x({ pagina_h: Number(g.target.value) })
                    }
                  )
                ] })
              ] }) }),
              c("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ])
            ] }),
            /* @__PURE__ */ i.jsx(m, { titulo: "Referencia", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (g) => x({ marcas_delimitar: g.target.checked })
                  }
                ),
                r("Marcas para delimitar")
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Añade dos cuadrados blancos de 2 mm (arriba-izquierda y abajo-derecha) en los límites del área. Sirven de referencia para que la colocación quede EXACTA siempre en Cricut Design Space. No cuentan para la optimización.") })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Gr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Tamaños", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => x({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => x({ mini_usar_lista: !1 }),
                    children: r("Automático (mínimo + %)")
                  }
                )
              ] }),
              !e.mini_usar_lista && d(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas)."
              ),
              !e.mini_usar_lista && d(
                "Tamaño máximo del mini (% del original)",
                "mini_max_rescale",
                10,
                100,
                5,
                "%",
                void 0,
                "Tope de tamaño de los minis. Siempre son algo más pequeños que el original (99 % como máximo)."
              )
            ] }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Comportamiento", children: [
              /* @__PURE__ */ i.jsxs(y, { children: [
                c("Rotaciones admitidas", "mini_rotacion", [
                  ["no", "No girar"],
                  ["90", "Giros de 0º / 90º / 180º / 270º"],
                  ["libre", "Cualquier ángulo"]
                ]),
                c("Selección de tamaños", "mini_tamanos", [
                  ["iguales", "Priorizar que sean iguales"],
                  ["grandes", "Priorizar grandes"]
                ]),
                c("Borde de los minis", "mini_borde_modo", [
                  ["proporcional", "Proporcional (se reduce con el mini)"],
                  ["igual", "Mantener el mismo borde (mm del original)"],
                  ["sin", "Sin borde"]
                ], void 0, "Qué hacer con el borde de cada mini al reducirlo")
              ] }),
              e.mini_usar_lista && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaños deseados") }),
                /* @__PURE__ */ i.jsxs("div", { className: "seg", style: { maxWidth: 260 }, children: [
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-mm",
                      className: (e.mini_lista_modo ?? "mm") === "mm" ? "on" : "",
                      onClick: () => x({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => x({ mini_lista_modo: "pct" }),
                      children: r("En % del original")
                    }
                  )
                ] }),
                (e.mini_lista_modo ?? "mm") === "mm" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                  /* @__PURE__ */ i.jsx("label", { children: r("Medir el tamaño por") }),
                  /* @__PURE__ */ i.jsxs(
                    "select",
                    {
                      "data-testid": "mini-lista-medida",
                      value: e.mini_lista_medida ?? "menor",
                      onChange: (g) => x({ mini_lista_medida: g.target.value }),
                      children: [
                        /* @__PURE__ */ i.jsx("option", { value: "menor", children: r("Lado menor") }),
                        /* @__PURE__ */ i.jsx("option", { value: "mayor", children: r("Lado mayor") }),
                        /* @__PURE__ */ i.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((g, j) => /* @__PURE__ */ i.jsx(
                    nh,
                    {
                      i: j,
                      valor: g,
                      refBase: f,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (S) => {
                        const N = [...e.mini_tamanos_lista ?? []];
                        N[j] = S, x({ mini_tamanos_lista: N });
                      },
                      onQuitar: () => x({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (S, N) => N !== j
                        )
                      })
                    },
                    j
                  )),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => x({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: r("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: h ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: h.name, mm: f.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(to, { size: 15 }),
          children: [
            c("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            c("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ i.jsxs(y, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (g) => x({ opt_tiempo_auto: g.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: rh[e.opt_metodo] ?? 8,
                  m: r(ah[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : d("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(no, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Impresión", children: [
              d(
                "Sangrado de impresión",
                "bleed_mm",
                0,
                5,
                0.2,
                "mm",
                void 0,
                "Repite el color hacia fuera para que no salga reborde blanco si la impresora no está alineada al 100 %."
              ),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
              c("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ i.jsxs(y, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (g) => x({ simular_impresion: g.target.checked })
                    }
                  ),
                  r("Previsualizar la impresión (simular el espacio de color)")
                ] }),
                e.simular_impresion && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                    /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        type: "checkbox",
                        "data-testid": "set-sim_cmyk",
                        checked: e.sim_cmyk === !0,
                        onChange: (g) => x({ sim_cmyk: g.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  d("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  d("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  d("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              c("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (g) => x({ chequear_lineas: g.target.checked })
                  }
                ),
                r("Comprobación de líneas anómalas")
              ] }) }),
              d(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              c("Lienzo del archivo final", "lienzo", [
                ["recortable", "Solo área recortable (recomendado)"],
                ["pagina", "Página completa con márgenes"]
              ]),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Carpeta predeterminada de exportación") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx("span", { className: "path-text", "data-testid": "set-carpeta", children: e.carpeta_export || r("(Documentos)") }),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      "data-testid": "btn-elegir-carpeta",
                      onClick: () => p(!0),
                      children: r("Elegir carpeta…")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Se guarda para la próxima vez que abras CryCat.") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "offset",
          title: r("Borde"),
          open: s.offset,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(wo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (g) => x({ offset_activo: g.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              d(
                "Grosor del borde",
                "offset_mm",
                0.1,
                20,
                0.1,
                "mm",
                void 0,
                "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar."
              ),
              c("Tipo de borde", "offset_modo", [
                ["extender", "Extender el color del borde (suave)"],
                ["blanco", "Blanco"],
                ["color", "Color personalizado"],
                ["unir_recto", "Unir trozos: borde recto (envolvente)"],
                ["unir_curvo", "Unir trozos: borde curvo (redondeado)"]
              ]),
              e.offset_modo === "color" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Color del borde") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "color",
                      "data-testid": "set-offset-color",
                      value: e.offset_color || "#ffffff",
                      onChange: (g) => x({ offset_color: g.target.value })
                    }
                  ),
                  /* @__PURE__ */ i.jsx("span", { className: "hint", children: e.offset_color })
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
            ] })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Rm, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: cu(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: iu[e.maquina] ?? "Cricut Maker 3" }
              ),
              [iu[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            d("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            d("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            d("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            d("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Td, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.") }),
            /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "switch",
                  "data-testid": "set-historial",
                  checked: e.historial !== !1,
                  onChange: (g) => x({ historial: g.target.checked })
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              d("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (g) => x({ hist_tamano: g.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Tamaño y escala") })
              ] }),
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-copias",
                    checked: e.hist_copias !== !1,
                    onChange: (g) => x({ hist_copias: g.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Copias") })
              ] }),
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-borde",
                    checked: e.hist_borde !== !1,
                    onChange: (g) => x({ hist_borde: g.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Borde por elemento") })
              ] }),
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-minis",
                    checked: e.hist_minis !== !1,
                    onChange: (g) => x({ hist_minis: g.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Ld, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Hi.map((g) => /* @__PURE__ */ i.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === g.key ? "active" : ""}`,
                  "data-testid": `tema-${g.key}`,
                  onClick: () => t({ tema: g.key }),
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: g.colors.accent } }),
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: g.colors.accent2 } }),
                    g.label
                  ]
                },
                g.key
              )) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (g) => t({ ver_guias: g.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx("img", { src: A.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var g;
                  return (g = F.current) == null ? void 0 : g.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: F,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (g) => {
                      var S;
                      const j = (S = g.target.files) == null ? void 0 : S[0];
                      j && A.setIcon(j).then(() => {
                        window.location.reload();
                      }), g.target.value = "";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        Et,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(bd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(m, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => x({ mute: !e.mute }),
                    children: e.mute ? r("Silenciado") : r("Con sonido")
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: 1,
                    step: 0.05,
                    "data-testid": "set-volumen",
                    value: e.volumen ?? 0.5,
                    onChange: (g) => x({ volumen: Number(g.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Pikmin", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (g) => x({ pikmin_activo: g.target.checked })
                  }
                ),
                r("Mostrar Pikmin de vez en cuando")
              ] }) }),
              d("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (g) => x({ pikmin_sonido: g.target.checked })
                  }
                ),
                r("Sonido de Pikmin")
              ] }) }),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido-morir",
                    checked: e.pikmin_sonido_morir !== !1,
                    onChange: (g) => x({ pikmin_sonido_morir: g.target.checked })
                  }
                ),
                r("De vez en cuando se muere (alma + sonido)")
              ] }) }),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-comprobar_versiones",
                    checked: e.comprobar_versiones !== !1,
                    onChange: (g) => t({ comprobar_versiones: g.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: cu(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Ad,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => p(!1),
        onPick: (g) => t({ carpeta_export: g })
      }
    )
  ] });
}
function ih({ ver: e, onCerrar: t }) {
  const n = Xe(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", o = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = w.useRef((e == null ? void 0 : e.actual) ?? ""), [u, l] = w.useState(!1), p = a === "error", h = a === "reiniciando";
  return w.useEffect(() => {
    if (!h) return;
    l(!0);
    let f = !0;
    const v = window.setInterval(async () => {
      try {
        const y = await A.version();
        if (!f) return;
        y.actual && s.current && y.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      f = !1, window.clearInterval(v);
    };
  }, [h]), /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ i.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ i.jsx("div", { className: `dialogo-icono${p ? " error" : ""}`, children: p ? "!" : h ? /* @__PURE__ */ i.jsx(qm, { size: 26 }) : /* @__PURE__ */ i.jsx(Id, { size: 26 }) }),
    /* @__PURE__ */ i.jsx("h3", { children: n(p ? "No se pudo actualizar" : h ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
    !p && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("div", { className: "progreso-act", "data-testid": "progreso-actualizacion", children: /* @__PURE__ */ i.jsx(
        "div",
        {
          className: o == null ? "indeterminado" : "",
          style: { width: o == null ? "100%" : `${Math.max(4, o)}%` }
        }
      ) }),
      /* @__PURE__ */ i.jsxs("div", { className: "fase", "data-testid": "fase-actualizacion", children: [
        n((r == null ? void 0 : r.mensaje) || "Preparando la actualización…"),
        o != null && !h ? ` · ${o}%` : ""
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "nota", children: n("Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.") }),
      u && /* @__PURE__ */ i.jsx("div", { className: "fase suave", "data-testid": "recarga-aviso", children: n("La página se recargará sola cuando el motor nuevo esté listo…") })
    ] }),
    p && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("div", { className: "nota", children: (r == null ? void 0 : r.mensaje) || n("Error desconocido") }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "cerrar-actualizacion", onClick: t, children: n("Cerrar") })
    ] })
  ] }) });
}
function Ko(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function sh({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: o = 0.5,
  mute: s = !1,
  onVolumen: u,
  onMute: l,
  onIdioma: p,
  onEasterEgg: h,
  onAyuda: f,
  onReportar: v
}) {
  var $e, we, De;
  const y = Xe(), k = Hs(), [x, F] = w.useState([]), [m, d] = w.useState(0), [c, g] = w.useState(null), [j, S] = w.useState(!1), [N, P] = w.useState(""), [C, E] = w.useState(!1), B = w.useRef(!1), oe = w.useRef([]);
  w.useEffect(() => {
    fetch("/api/funmsgs").then(($) => $.ok ? $.json() : { msgs: [] }).then(($) => F($.msgs ?? [])).catch(() => {
    });
  }, []), w.useEffect(() => {
    let $ = !0;
    return A.version().then((me) => {
      $ && (g(me), !me.comprobado && !B.current && (B.current = !0, A.checkVersion().then((ht) => $ && g(ht)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      $ = !1;
    };
  }, []);
  const Q = (($e = c == null ? void 0 : c.actualizacion) == null ? void 0 : $e.estado) === "descargando" || ((we = c == null ? void 0 : c.actualizacion) == null ? void 0 : we.estado) === "instalando" || ((De = c == null ? void 0 : c.actualizacion) == null ? void 0 : De.estado) === "reiniciando";
  w.useEffect(() => {
    if (!Q) return;
    const $ = setInterval(() => {
      A.version().then(g).catch(() => {
      });
    }, 700);
    return () => clearInterval($);
  }, [Q]);
  const V = a || !!(e && !e.done);
  w.useEffect(() => {
    if (!V) return;
    const $ = setInterval(() => d((me) => me + 1), 1200);
    return () => clearInterval($);
  }, [V]);
  const L = x.length ? x : [
    y("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], te = w.useMemo(() => {
    if (N) return N;
    if (Q) {
      const $ = c == null ? void 0 : c.actualizacion;
      if (($ == null ? void 0 : $.estado) === "instalando") return y("Instalando y reiniciando…");
      const me = ($ == null ? void 0 : $.progreso) != null ? Math.round($.progreso) : null;
      return me != null ? y("Descargando… {p}%", { p: me }) : ($ == null ? void 0 : $.mensaje) || y("Descargando actualización…");
    }
    return V ? L[m % L.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? y("Listo") : y("Listo para empezar");
  }, [N, Q, V, e, L, m, n, y, c]), be = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), T = V && !e, D = w.useMemo(() => {
    const $ = e == null ? void 0 : e.eta_s;
    return !V || $ === void 0 || $ === null || $ <= 0.5 ? "" : (e == null || e.tope_s, y(" · ~{x} restante", { x: Ko($) }));
  }, [e == null ? void 0 : e.eta_s, V, y]), O = w.useMemo(() => !r || !r.segundos ? "" : Ko(r.segundos), [r]), Y = async () => {
    S(!0), P("");
    try {
      const $ = await A.checkVersion();
      g($), $.error ? P(y("Sin conexión")) : $.hay_nueva || P(y("Estás en la última versión"));
    } catch {
      P(y("Sin conexión"));
    } finally {
      S(!1);
    }
  }, K = async () => {
    P("");
    try {
      const $ = await A.updateVersion();
      $.ok ? E(!0) : $.modo === "dev" && $.url ? (P(y("Modo desarrollo: se actualiza con git")), await A.openReleases().catch(() => {
      })) : P($.mensaje || y("No se pudo actualizar")), A.version().then(g).catch(() => {
      });
    } catch {
      P(y("No se pudo actualizar"));
    }
  }, Me = !!(c != null && c.hay_nueva && !V && !Q) ? y("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    C && /* @__PURE__ */ i.jsx(
      ih,
      {
        ver: c,
        onCerrar: () => E(!1)
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: A.iconUrl(),
            alt: "CryCat",
            "data-testid": "brand-icon",
            title: y("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const $ = Date.now();
              oe.current = [...oe.current, $].filter((me) => $ - me < 2500), oe.current.length >= 5 && (oe.current = [], P(y("¡Fiesta Pikmin!")), window.setTimeout(() => P(""), 4e3), h == null || h());
            }
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !V && (() => {
          const $ = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), me = n.placed || 1, ht = Math.min(80, Math.max(
            30,
            48 + 22 * $ - Math.min(18, me * 0.08)
          )), at = n.efficiency * 100, je = at >= ht ? "buena" : at >= ht * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": y("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.placed }),
              /* @__PURE__ */ i.jsx("span", { children: y("imágenes") })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": y("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.pages }),
              /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? y("páginas") : y("página") })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": y("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.minis }),
              /* @__PURE__ */ i.jsx("span", { children: y("minis") })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${je}`,
                "data-testid": "eficiencia-card",
                "data-nivel": je,
                "data-tip": y("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: me, e: Math.round(ht) }),
                children: [
                  /* @__PURE__ */ i.jsxs("b", { children: [
                    Math.round(at),
                    "%"
                  ] }),
                  /* @__PURE__ */ i.jsx("span", { children: y("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !V) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: te }),
        V && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `progress${T ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, be)}%` } })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? y("Tiempo máximo de este cálculo: {y}", { y: Ko(e.tope_s) }) : void 0,
              children: [
                be,
                "%",
                D
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: jt("/piensa.gif"),
              alt: "",
              title: y("Pensando…"),
              onError: ($) => {
                $.currentTarget.style.display = "none";
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "right", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-info",
            "data-tip": y("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
            onClick: () => f == null ? void 0 : f(),
            children: [
              /* @__PURE__ */ i.jsx(Gm, { size: 15 }),
              " ",
              y("Cómo usar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "app-info reportar",
            "data-testid": "btn-reportar",
            "data-tip": y("Reportar un bug: abre un issue en GitHub ya rellenado"),
            onClick: () => v == null ? void 0 : v(),
            children: [
              /* @__PURE__ */ i.jsx(Rd, { size: 15 }),
              " ",
              y("Reportar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "app-info apoyar",
            "data-testid": "btn-apoyar",
            "data-tip": y("Apoyar el proyecto (PayPal)"),
            onClick: () => window.open(
              "https://paypal.me/Darkniel42",
              "_blank",
              "noopener"
            ),
            children: [
              /* @__PURE__ */ i.jsx(Hm, { size: 15 }),
              " ",
              y("Apoyar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-repo",
            title: y("Abrir el repositorio del proyecto en una pestaña nueva"),
            onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ i.jsx(Bm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: y("Idioma"),
            onClick: () => p == null ? void 0 : p(k === "es" ? "en" : "es"),
            children: k.toUpperCase()
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "span",
          {
            className: "version-chip",
            "data-testid": "version-chip",
            title: y("Versión actual"),
            children: [
              (c == null ? void 0 : c.hay_nueva) && !Q && /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: Me || y("Hay una versión nueva"),
                  onClick: K,
                  children: /* @__PURE__ */ i.jsx(Um, { size: 14 })
                }
              ),
              "v",
              (c == null ? void 0 : c.actual) ?? "—",
              (c == null ? void 0 : c.hay_nueva) && (c == null ? void 0 : c.ultima) && /* @__PURE__ */ i.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
                "v",
                c.ultima
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "btn-mini",
                  "data-testid": "btn-comprobar",
                  title: y("Comprobar versiones"),
                  onClick: Y,
                  disabled: j,
                  children: j ? "…" : /* @__PURE__ */ i.jsx(Vm, { size: 14 })
                }
              ),
              (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: y("Descargar e instalar la nueva versión"),
                  onClick: K,
                  children: /* @__PURE__ */ i.jsx(Id, { size: 14 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "span",
          {
            className: `dot ${t ? "" : "off"}`,
            "data-testid": "backend-status",
            title: y(t ? "Backend conectado" : "Backend desconectado")
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "span",
          {
            className: "eta",
            "data-testid": "corte-estimado",
            title: y("Tiempo estimado de corte (Cricut Maker 5)"),
            children: [
              y("Corte"),
              " ",
              O || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const lh = [
  "/pikmin/01_yellow_lay_bud.png",
  "/pikmin/02_white.webp",
  "/pikmin/03_unnamed.webp",
  "/pikmin/04_blue.webp",
  "/pikmin/05_yellow.png",
  "/pikmin/06_red.png",
  "/pikmin/07_red_lay_leaf.png",
  "/pikmin/01_red_hd.png",
  "/pikmin/02_yellow_hd.png",
  "/pikmin/03_blue_hd.png",
  "/pikmin/04_white_hd.png",
  "/pikmin/05_purple_hd.png",
  "/pikmin/06_winged_hd.png",
  "/pikmin/07_rock_hd.png",
  "/pikmin/08_ice.png",
  "/pikmin/09_glow.png",
  "/pikmin/10_p3_red.png",
  "/pikmin/11_p3_blue.png",
  "/pikmin/12_p3_purple.png",
  "/pikmin/13_white.png",
  "/pikmin/15_winged.png",
  "/pikmin/16_red.png",
  "/pikmin/17_blue.png",
  "/pikmin/18_rock.png",
  "/pikmin/alma.png"
], uh = "/pikmin_bloom/", du = "/pikmin/alma.png", ch = "/sonidos/pikmin.mp3", dh = "/sonidos/pikmin_morir.mp3";
function ph(e) {
  const [t, n] = w.useState(lh), [r, a] = w.useState([]);
  return w.useEffect(() => {
    fetch(jt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(jt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => jt(uh + u)));
    }).catch(() => {
    });
  }, []), w.useMemo(
    () => e && e.length ? [...e, ...r].map(jt) : [...t, ...r].map(jt),
    [e, t, r]
  );
}
function fh({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: s = !1,
  minDelay: u,
  maxDelay: l,
  fuentes: p
}) {
  const h = ph(p), [f, v] = w.useState([]), y = w.useRef(void 0), k = w.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), x = w.useRef(s);
  x.current = s;
  const F = Math.max(5e3, t * 6e4), m = (j) => {
    if (!(!n || o))
      try {
        const S = new Audio(jt(j ? dh : ch));
        S.volume = Math.min(1, Math.max(0, a)), S.play().catch(() => {
        });
      } catch {
      }
  }, d = () => {
    const j = r && Math.random() < 0.25, S = j ? jt(du) : h[Math.floor(Math.random() * h.length)] ?? jt(du);
    v((N) => [...N, {
      src: S,
      left: 3 + Math.random() * 92,
      key: Date.now() + N.length,
      morir: j,
      estado: "paseando"
    }]), m(j);
  }, c = () => {
    if (!e) return;
    const j = u ?? Math.round(F * 0.5), S = l ?? Math.round(F * 1.5), N = j + Math.random() * Math.max(1, S - j);
    y.current = window.setTimeout(d, N);
  };
  w.useEffect(() => {
    if (!e) {
      window.clearTimeout(y.current), v([]);
      return;
    }
    return c(), () => window.clearTimeout(y.current);
  }, [e, t, n, r, a, o, h]), w.useEffect(() => {
    const j = () => {
      k.current = document.visibilityState === "hidden", !k.current && x.current && window.setTimeout(() => {
        v((S) => S.length ? (m(!1), S.map((N) => ({ ...N, estado: "festejando" }))) : S), window.setTimeout(() => {
          v([]), c();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", j), () => document.removeEventListener("visibilitychange", j);
  }, []);
  const g = (j) => {
    if (x.current && k.current) {
      v((S) => S.map((N) => N.key === j ? { ...N, estado: "quieto" } : N));
      return;
    }
    v((S) => S.filter((N) => N.key !== j)), c();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: f.map((j) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${j.estado}${j.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": j.estado,
      "data-morir": j.morir ? "1" : "0",
      style: { left: `${j.left}%` },
      onAnimationEnd: () => g(j.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: j.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => g(j.key)
        }
      )
    },
    j.key
  )) });
}
const pu = "crycat_bienvenida_v2";
function mh() {
  const [e, t] = w.useState(!1);
  return w.useEffect(() => {
    try {
      localStorage.getItem(pu) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(pu, "1");
    } catch {
    }
    t(!1);
  } };
}
function hh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Xe(), [a, o] = w.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(no, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(Pa, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Gr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(to, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(uu, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(no, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(wo, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Gr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(to, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(Md, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(Pa, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(uu, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Fm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(bd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(Pa, { size: 18 }),
      r("Temas y mascota"),
      r("12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.")
    ]
  ], l = [
    r("Abre Cricut Design Space."),
    r("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    r("Redimensiónala al tamaño real que ves en CryCat."),
    r("Pulsa «Crear» y comprueba que las medidas coinciden."),
    r("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    r("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ], p = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: p[a] }),
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((h, f) => /* @__PURE__ */ i.jsx("li", { children: h }, f)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([h, f, v], y) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: h }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: f }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: v })
      ] })
    ] }, y)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Vr, { size: 15 }),
          " ",
          r("Abrir carpeta de guardado")
        ] }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "ayuda-detallada",
            onClick: () => o("detallada"),
            children: r("Guía detallada")
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "ayuda-cricut", onClick: () => o("cricut"), children: r("Pasos en Cricut") }),
        /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "ayuda-cerrar", onClick: t, children: r("¡Entendido!") })
      ] }),
      a === "detallada" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("button", { "data-testid": "ayuda-volver", onClick: () => o("inicio"), children: r("Volver") }),
        /* @__PURE__ */ i.jsx("button", { className: "primary", onClick: t, children: r("¡Entendido!") })
      ] }),
      a === "cricut" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("button", { "data-testid": "ayuda-volver", onClick: () => o("inicio"), children: r("Volver") }),
        /* @__PURE__ */ i.jsx("button", { className: "primary", onClick: t, children: r("¡Entendido!") })
      ] })
    ] })
  ] }) });
}
const gh = "https://github.com/dhernandezgit/CryCat-Tool", vh = [
  [
    "Se solapan elementos",
    "He visto dos pegatinas que se pisan entre sí. Adjunto los ajustes que usé."
  ],
  [
    "No caben todas las copias",
    "Hay copias que no se colocan y no entiendo por qué (¿tamaño, rotación, espacio?)."
  ],
  [
    "Los bordes no quedan bien",
    "El borde de un elemento no rodea bien el dibujo o deja trozos sueltos."
  ],
  [
    "La impresión sale movida",
    "Al imprimir con las marcas, el corte no coincide con el dibujo."
  ],
  [
    "El Pikmin no aparece",
    "La mascota no sale nunca (o no suena) aunque esté activada."
  ],
  [
    "Se queda pensando",
    "La optimización se queda mucho tiempo pensando o no termina."
  ],
  [
    "La web no arranca",
    "La versión del navegador se queda en la pantalla de carga o da un error."
  ]
];
function yh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Xe(), [s, u] = w.useState(""), [l, p] = w.useState(""), [h, f] = w.useState(""), [v, y] = w.useState(!0), [k, x] = w.useState(!0), [F, m] = w.useState(!0), [d, c] = w.useState(!1);
  w.useEffect(() => {
    e && (A.version().then((C) => u(C.actual)).catch(() => {
    }), c(!1));
  }, [e]);
  const g = () => (globalThis.__crycatErrores ?? []).map(
    (E) => `- [${E.t}] ${E.msg} (${E.donde || "?"})`
  );
  if (!e) return null;
  const j = () => {
    var oe, Q;
    const C = navigator.userAgent, E = !!globalThis.__crycatBase, B = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${E ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${C}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((oe = window.screen) == null ? void 0 : oe.width) ?? "?"}x${((Q = window.screen) == null ? void 0 : Q.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && B.push(`- Elementos: ${a.pages} página(s)`), r && B.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), B.join(`
`);
  }, S = () => n ? [
    "espacio_mm",
    "margen_mm",
    "rotacion",
    "pagina",
    "maquina",
    "opt_metodo",
    "opt_calidad",
    "opt_tiempo_max_s",
    "usar_minis",
    "mini_min_mm",
    "offset_activo",
    "offset_mm",
    "offset_modo",
    "dpi_salida",
    "lienzo",
    "tema"
  ].map((E) => `- ${E}: ${String(n[E])}`).join(`
`) : "", N = () => {
    const C = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      h.trim() || "1. …",
      ""
    ];
    v && C.push("### Entorno", j(), ""), k && n && C.push("### Ajustes", S(), "");
    const E = g();
    return F && E.length && C.push("### Errores recogidos", E.join(`
`), ""), C.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), C.join(`
`);
  }, P = () => {
    const C = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, E = `${gh}/issues/new?` + new URLSearchParams({
      title: C,
      body: N(),
      labels: "bug"
    }).toString();
    window.open(E, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: vh.map(([C, E]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${C}`,
        onClick: () => p((B) => (B ? B + `
` : "") + E),
        children: o(C)
      },
      C
    )) }),
    /* @__PURE__ */ i.jsxs("label", { className: "col", children: [
      o("¿Qué ha pasado?"),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          "data-testid": "reportar-texto",
          rows: 4,
          value: l,
          placeholder: o("Cuéntalo con tus palabras: qué esperabas y qué pasó."),
          onChange: (C) => p(C.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "col", children: [
      o("¿Cómo lo repetimos? (opcional)"),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          "data-testid": "reportar-pasos",
          rows: 3,
          value: h,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (C) => f(C.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: v,
          onChange: (C) => y(C.target.checked)
        }
      ),
      o("Incluir versión y sistema (ayuda mucho)")
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-ajustes",
          checked: k,
          onChange: (C) => x(C.target.checked)
        }
      ),
      o("Incluir mis ajustes actuales")
    ] }),
    g().length > 0 && /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: F,
          onChange: (C) => m(C.target.checked)
        }
      ),
      o(
        "Incluir los {n} errores recogidos de la consola",
        { n: g().length }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ i.jsx("button", { onClick: t, children: o("Cancelar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "reportar-copiar",
          title: o("Copia el informe entero al portapapeles (por si no usas GitHub)"),
          onClick: async () => {
            try {
              await navigator.clipboard.writeText(
                `${l}

${h}

${N()}`
              ), c(!0);
            } catch {
            }
          },
          children: o(d ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: P, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function xh() {
  const [e, t] = w.useState([]), [n, r] = w.useState(null), [a, o] = w.useState(null), [s, u] = w.useState(null), [l, p] = w.useState(null), [h, f] = w.useState(null), [v, y] = w.useState(!0), [k, x] = w.useState(!1), [F, m] = w.useState(!1), [d, c] = w.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [g, j] = w.useState(33.3), [S, N] = w.useState(33.3), P = mh(), C = w.useRef(null), E = w.useRef(null);
  w.useEffect(() => {
    (async () => {
      try {
        const M = await A.getSettings();
        p(M.settings), su(M.settings.tema), c((U) => ({
          ...U,
          guidesVisible: M.settings.ver_guias,
          eyeTransparent: M.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: M.settings.ver_contornos !== !1,
          contornoModo: M.settings.contorno_modo ?? "final"
        })), t((await A.listAssets()).map(qr)), o(await A.result());
      } catch {
        y(!1);
      }
    })();
  }, []);
  const [B, oe] = w.useState("");
  w.useEffect(() => {
    const M = (U) => oe(String(U.detail || ""));
    return window.addEventListener("crycat:seleccion", M), () => window.removeEventListener("crycat:seleccion", M);
  }, []), w.useEffect(() => {
    const M = (U) => {
      const ke = U.detail;
      j(ke ? 19 : 33.3), N(ke ? 62 : 33.3), c((Ve) => ({ ...Ve, hojaGirada: ke }));
    };
    return window.addEventListener("crycat:disposicion", M), () => window.removeEventListener("crycat:disposicion", M);
  }, []), w.useEffect(() => {
    const M = setInterval(async () => {
      try {
        await A.health(), y(!0);
      } catch {
        y(!1);
      }
    }, 5e3);
    return () => clearInterval(M);
  }, []);
  const Q = w.useCallback(async () => {
    try {
      t((await A.listAssets()).map(qr)), o(await A.result());
      try {
        u(await A.estimate());
      } catch {
      }
    } catch {
      y(!1);
    }
  }, []), V = w.useCallback((M) => {
    E.current && window.clearInterval(E.current), E.current = window.setInterval(async () => {
      try {
        const U = await A.job(M);
        f(U), U.done && (window.clearInterval(E.current), E.current = null, await Q(), U.status === "done" && window.setTimeout(() => f(null), 2500));
      } catch {
        window.clearInterval(E.current), E.current = null;
      }
    }, 300);
  }, []), L = w.useCallback(async () => {
    m(!0), await new Promise((M) => setTimeout(M, 60));
    try {
      const M = await A.optimize();
      f(M), V(M.id);
    } catch {
      y(!1);
    } finally {
      m(!1);
    }
  }, [V]), te = w.useCallback(
    async (M) => {
      m(!0), await new Promise((U) => setTimeout(U, 60));
      try {
        const U = await A.optimize(M, !0);
        f(U), V(U.id);
      } catch {
        y(!1);
      } finally {
        m(!1);
      }
    },
    [V]
  ), be = w.useCallback(() => {
    l && l.auto_recalcular === !1 || (C.current && window.clearTimeout(C.current), C.current = window.setTimeout(L, 400));
  }, [L, l]), T = w.useRef(null);
  w.useEffect(() => {
    T.current = be;
  }, [be]), w.useEffect(() => {
    const M = (U) => {
      const ke = U.detail;
      f((Ve) => ({
        ...Ve ?? {
          id: "web",
          status: "running",
          done: !1,
          message: "",
          progress: 0,
          pages: 0
        },
        progress: ke.progress,
        pages: ke.pages,
        eta_s: ke.eta_s,
        tope_s: ke.tope_s
      }));
    };
    return window.addEventListener("crycat:progreso", M), () => window.removeEventListener("crycat:progreso", M);
  }, []);
  const D = w.useRef(!1);
  w.useEffect(() => {
    if (!(!l || D.current)) {
      if (e.length > 0) {
        D.current = !0;
        return;
      }
      D.current = !0, A.crearDemo().then(async (M) => {
        M.ok && await Q();
      }).catch(() => {
      });
    }
  }, [l, e.length, Q]);
  const O = w.useCallback(
    async (M) => {
      p((U) => U && { ...U, ...M }), M.tema && su(M.tema);
      try {
        const U = await A.putSettings(M);
        if (U.job)
          f(U.job), V(U.job.id);
        else
          try {
            u(await A.estimate());
          } catch {
          }
      } catch {
        y(!1);
      }
    },
    [V]
  ), Y = w.useRef([]), K = w.useRef([]), [Ct, Me] = w.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), $e = (l == null ? void 0 : l.historial) !== !1, we = (l == null ? void 0 : l.historial_max) ?? 40, De = () => Me({
    puedeDeshacer: Y.current.length > 0,
    puedeRehacer: K.current.length > 0
  }), $ = w.useCallback(() => {
    const M = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && M.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && M.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && M.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && M.push("mini_enabled", "mini_quota"), M;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), me = w.useCallback((M) => {
    const U = {};
    for (const ke of $()) U[ke] = M[ke];
    return U;
  }, [$]), ht = w.useCallback(() => {
    $e && (Y.current = [...Y.current, { assets: e, result: a }].slice(-we), K.current = [], De());
  }, [e, a, $e, we]), at = w.useCallback(async (M) => {
    t(M.assets), De();
    for (const U of M.assets)
      await A.patchAsset(U.id, me(U)).catch(() => {
      });
    if (M.result) {
      await A.restoreResult(M.result).catch(() => {
      }), o(M.result);
      try {
        u(await A.estimate());
      } catch {
      }
    } else
      await Q();
  }, [me, Q]), je = w.useCallback(async () => {
    const M = Y.current.pop();
    M && (K.current = [...K.current, { assets: e, result: a }], await at(M));
  }, [e, a, at]), rr = w.useCallback(async () => {
    const M = K.current.pop();
    M && (Y.current = [...Y.current, { assets: e, result: a }], await at(M));
  }, [e, a, at]);
  w.useEffect(() => {
    const M = (U) => {
      if (!(U.ctrlKey || U.metaKey)) return;
      const Ve = U.target;
      if (Ve && (Ve.tagName === "INPUT" || Ve.tagName === "TEXTAREA" || Ve.tagName === "SELECT" || Ve.isContentEditable)) return;
      const Dt = U.key.toLowerCase();
      Dt === "z" && !U.shiftKey ? (U.preventDefault(), je()) : (Dt === "y" || Dt === "z" && U.shiftKey) && (U.preventDefault(), rr());
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [je, rr]);
  const Xr = w.useCallback(
    (M) => {
      const U = (Ve) => {
        const Jr = window.innerWidth, Dt = Ve.clientX / Jr * 100;
        M === "left" ? j(Math.min(45, Math.max(12, Dt))) : N(Math.min(60, Math.max(20, Dt - g)));
      }, ke = () => {
        window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", ke);
      };
      window.addEventListener("mousemove", U), window.addEventListener("mouseup", ke);
    },
    [g]
  );
  return w.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(Em, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${g}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Xm,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await Q(), be();
          },
          saveSettings: O,
          onEditarContorno: (M) => r(M),
          onAntesDeCambiar: ht,
          verBordes: d.verBordes,
          contornoModo: d.contornoModo ?? "final",
          destacado: B
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Xr("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${S}%` }, children: /* @__PURE__ */ i.jsx(
        Zm,
        {
          assets: e,
          result: a,
          settings: l,
          ui: d,
          setUi: c,
          saveSettings: O,
          optimize: L,
          onRefresh: Q,
          onJob: (M) => {
            f(M), V(M.id);
          },
          onRecalc: te,
          editando: n,
          onFinEdicion: async () => {
            r(null), await Q();
          },
          onDeshacer: je,
          onRehacer: rr,
          puedeDeshacer: Ct.puedeDeshacer,
          puedeRehacer: Ct.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Xr("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        oh,
        {
          settings: l,
          assets: e,
          saveSettings: O
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      sh,
      {
        job: h,
        backendOk: v,
        result: a,
        estimate: s,
        optimizando: F,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (M) => O({ volumen: M }),
        onMute: (M) => O({ mute: M }),
        onIdioma: (M) => O({ idioma: M }),
        onEasterEgg: () => O({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: P.abrir,
        onReportar: () => x(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      fh,
      {
        activo: l.pikmin_activo !== !1,
        frecuenciaMin: l.pikmin_frecuencia_min ?? 1,
        sonido: l.pikmin_sonido !== !1,
        sonidoMorir: l.pikmin_sonido_morir !== !1,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        fiesta: l.pikmin_fiesta === !0
      }
    ),
    /* @__PURE__ */ i.jsx(
      hh,
      {
        open: P.visible,
        onClose: P.cerrar,
        onAbrirCarpeta: () => void A.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      yh,
      {
        open: k,
        onClose: () => x(!1),
        settings: l,
        job: h,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: zm("es", "Cargando CryCat…") });
}
const wh = "1790699804599", $d = document.getElementById("root"), Xo = [
  "Cargando peluches de apoyo emocional…",
  "Afilando tijeras de pegatinas…",
  "Preparando boba teas…",
  "Aplicando miel al mat para que pegue mejor…",
  "Chipi chipi chapeando…",
  "Calibrando el pulso para recortar a mano alzada…",
  "Ordenando la paleta de colores por vibes…",
  "Hidratando el pincel digital…",
  "Convenciendo al vector de que se cierre…",
  "Desenredando curvas Bézier…",
  "Sacando brillo a los highlights…",
  "Contando capas de la ilustración (otra vez)…",
  "Buscando el CMYK que no se apaga al imprimir…",
  "Despertando a los pikmin dibujantes…",
  "Puliendo bordes a 300 ppp…",
  "Repartiendo washi tape por el escritorio…",
  "Encontrando el rotulador que sí funciona…",
  "Centrando el sticker a ojo (como siempre)…",
  "Alejando al gato del teclado…",
  "Preparando la cola para el fanart del mes…",
  "Ajustando el sangrado para no cortar la carita…",
  "Guardando copia antes de tocar nada…",
  "Quitando restos de goma del plotter…",
  "Soplando el polvo de la tableta gráfica…",
  "Midiendo dos veces para cortar una…",
  "Pidiendo al degradado que no se pixele…",
  "Buscando la fuente que combine con todo…",
  "Organizando la carpeta de referencias (por fin)…",
  "Pidiendo permiso al mat de corte…",
  "Enrollando vinilo sin burbujas…",
  "Calentando la prensa de chapas…",
  "Rezando a los dioses del antialias…",
  "Recortando el fondo con paciencia de monje…",
  "Clasificando pegatinas por nivel de monos…",
  "Cargando la energía de las 3 de la mañana…",
  "Haciendo inventario de purpurina…",
  "Esperando a que seque el barniz…",
  "Alineando pupilas con precisión milimétrica…",
  "Dando retoques finales con zoom al 800 %…",
  "Preparando un té mientras compila…",
  "Contando cuántas pegatinas quedan (muchas)…",
  "Pegando una pegatina en la funda del portátil…",
  "Eligiendo el degradado más aesthetic…",
  "Comprobando que el blanco no es transparente…",
  "Buscando el papel de horno que no se arruga…",
  "Esperando a que el cutter deje de zumbar…",
  "Pintando los bordes con rotulador (truco viejo)…",
  "Cuadrando el círculo perfecto…",
  "Subiendo la resolución a 600 ppp por si acaso…",
  "Aplanando capas (sin miedo)…",
  "Añadiendo un brillito más…",
  "Moviendo el logo 1 px a la izquierda…",
  "Preparando el packaging para el envío…",
  "Cortando washi tape con los dientes…",
  "Buscando el color exacto del personaje…",
  "Recortando la cabeza para el troquelado…",
  "Repasando líneas con el pincel de tinta…",
  "Espantando al síndrome del impostor…",
  "Anotando ideas en una servilleta…",
  "Comprobando que se lee a tamaño chapa…",
  "Eligiendo la fuente de los créditos…",
  "Preparando la mesa para la feria…",
  "Cerrando el encargo justo a tiempo…",
  "Hidratando las manos antes de tocar el vinilo…",
  "Reciclando recortes para otro proyecto…",
  "Decidiendo si poner marca de agua…",
  "Encontrando el cable del plotter…",
  "Girando la imagen 3 grados porque sí…",
  "Preparando café de emergencia…",
  "Puliendo el trazo con zoom al 1600 %…",
  "Preguntando a la impresora qué quiere hoy…",
  "Guardando en la carpeta «final_final_v3»…",
  "Dibujando manitas de apoyo en los bordes…",
  "Contando los días para la próxima convención…",
  "Ajustando el troquel al milímetro…",
  "Respirando antes de imprimir la prueba…",
  "Untando el dedo en el mat para que pegue…"
], Qi = 8, ba = [];
globalThis.__crycatErrores = ba;
const Dd = (e, t) => {
  ba.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), ba.length > 12 && ba.shift();
};
window.addEventListener("error", (e) => Dd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Dd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Yi;
function Jo(e, t = !1) {
  window.clearTimeout(Yi);
  const n = Ed().colors;
  if ($d.innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;
                align-items:center;justify-content:center;gap:12px;
                font:16px/1.5 system-ui,sans-serif;color:${n.textSoft};
                background:${n.bg};padding:24px;text-align:center">
      <img src="./app/icono.png" alt="" style="width:88px;height:88px;border-radius:22px" />
      <div style="font-size:19px;font-weight:700;color:${n.text}">CryCat web</div>
      <div id="carga-fun" style="font-size:22px;font-weight:700;color:${n.text};
                min-height:2.2em;max-width:640px;line-height:1.25">${e}</div>
      <div id="carga-paso" style="font-size:12px;font-weight:700;
                letter-spacing:.06em;text-transform:uppercase;color:${n.accent3};
                min-height:1.2em">${t ? "" : "Paso 1 de " + Qi}</div>
      <div style="width:min(340px,80vw);height:8px;border-radius:99px;
                  background:${n.border};overflow:hidden">
        <div id="carga-barra" style="height:100%;width:${t ? 100 : 8}%;
             border-radius:99px;background:linear-gradient(90deg,${n.accent},${n.accent2});
             transition:width .45s ease"></div>
      </div>
      <div id="carga-txt" style="font-size:13px;color:${n.textSoft};min-height:1.2em">
        ${t ? "" : "Preparando todo…"}</div>
      <div style="max-width:520px;font-size:12px;color:${n.textSoft};margin-top:6px">
        El motor se descarga una vez y se queda en caché del navegador.
        Tus imágenes no salen de tu equipo.
      </div>
    </div>`, t) {
    const s = document.getElementById("carga-fun");
    s && (s.style.color = n.danger);
    return;
  }
  let r = Math.floor(Math.random() * Xo.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Xo[r++ % Xo.length]);
  }, o = () => {
    a(), Yi = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const Zo = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Qi}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Qi * 100)}%`);
  }
};
let zn = null, Od = !1, jh = 0;
const Ki = /* @__PURE__ */ new Map();
function Fd(e) {
  return new Promise((t) => {
    const n = ++jh;
    Ki.set(n, t), zn.postMessage({ ...e, id: n });
  });
}
const Xi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, kh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Sh(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((o, s) => r.push([s, o]));
  for (const [o, s] of r)
    s instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${o}"; filename="${s.name || "file"}"\r
Content-Type: ${s.type || "application/octet-stream"}\r
\r
`), n.push(s), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${o}"\r
\r
${s}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    Xi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Ch(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((h, f) => {
    s[f] = h;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [h, f] = await Sh(l);
    u = h, s["content-type"] = f;
  } else l instanceof Blob ? u = Xi(await l.arrayBuffer()) : typeof l == "string" && (u = Xi(new TextEncoder().encode(l).buffer));
  const p = await Fd({
    tipo: "api",
    method: e,
    path: o,
    headers: JSON.stringify(s),
    body: u
  });
  return p && p.error ? new Response("error: " + p.error, { status: 500 }) : new Response(kh(p.body), {
    status: p.status || 200,
    headers: p.headers || { "content-type": "application/json" }
  });
}
function _h() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && Od)
      try {
        return await Ch(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Nh() {
  try {
    if (Jo("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const t = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: t }).then(() => navigator.serviceWorker.ready),
          new Promise((n) => setTimeout(n, 6e3))
        ]);
      } catch {
      }
    const e = new URL(
      `worker-crycat.js?v=${wh}`,
      location.href
    ).href;
    zn = new Worker(e, { type: "module" }), zn.onmessage = (t) => {
      const n = t.data || {};
      if (n.tipo === "estado")
        Zo(n.t, n.paso);
      else if (n.tipo === "progreso")
        window.dispatchEvent(new CustomEvent(
          "crycat:progreso",
          { detail: {
            progress: n.frac,
            pages: n.pages,
            eta_s: n.eta,
            tope_s: n.tope
          } }
        ));
      else if (n.tipo === "api") {
        const r = Ki.get(n.id);
        Ki.delete(n.id), r && r(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && Jo("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (r) => {
        r.data && r.data.tipo === "listo" && (zn.removeEventListener("message", n), t());
      };
      zn.addEventListener("message", n), zn.postMessage({ tipo: "iniciar" });
    }), Od = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const r = t.ports && t.ports[0];
      if (r)
        try {
          const a = await Fd({
            tipo: "api",
            method: n.method,
            path: n.path,
            headers: JSON.stringify(n.headers || {}),
            body: n.body || ""
          });
          r.postMessage(a);
        } catch (a) {
          r.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (a && a.message ? a.message : a))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, _h();
    try {
      const t = Ed().key;
      t && t !== "wiwi" && await fetch(vn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: t })
      });
    } catch {
    }
    Zo("Optimizando la muestra inicial…", 7);
    try {
      const t = await fetch(vn() + "api/assets").then((n) => n.json());
      Array.isArray(t) && t.length === 0 && await fetch(vn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    Zo("Abriendo la aplicación…", 8), window.clearTimeout(Yi), _d($d).render(/* @__PURE__ */ i.jsx(xh, {}));
  } catch (e) {
    Jo("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Nh();
