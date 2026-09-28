var uu = { exports: {} }, no = {}, cu = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr = Symbol.for("react.element"), Gd = Symbol.for("react.portal"), Hd = Symbol.for("react.fragment"), Wd = Symbol.for("react.strict_mode"), Qd = Symbol.for("react.profiler"), Yd = Symbol.for("react.provider"), Kd = Symbol.for("react.context"), Jd = Symbol.for("react.forward_ref"), Xd = Symbol.for("react.suspense"), Zd = Symbol.for("react.memo"), ep = Symbol.for("react.lazy"), Ws = Symbol.iterator;
function tp(e) {
  return e === null || typeof e != "object" ? null : (e = Ws && e[Ws] || e["@@iterator"], typeof e == "function" ? e : null);
}
var du = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, pu = Object.assign, fu = {};
function Jn(e, t, n) {
  this.props = e, this.context = t, this.refs = fu, this.updater = n || du;
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mu() {
}
mu.prototype = Jn.prototype;
function Qi(e, t, n) {
  this.props = e, this.context = t, this.refs = fu, this.updater = n || du;
}
var Yi = Qi.prototype = new mu();
Yi.constructor = Qi;
pu(Yi, Jn.prototype);
Yi.isPureReactComponent = !0;
var Qs = Array.isArray, hu = Object.prototype.hasOwnProperty, Ki = { current: null }, gu = { key: !0, ref: !0, __self: !0, __source: !0 };
function vu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) hu.call(t, r) && !gu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), p = 0; p < u; p++) l[p] = arguments[p + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Vr, type: e, key: o, ref: s, props: a, _owner: Ki.current };
}
function np(e, t) {
  return { $$typeof: Vr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ji(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function rp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ys = /\/+/g;
function ko(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rp("" + e.key) : t.toString(36);
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
        case Vr:
        case Gd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + ko(s, 0) : r, Qs(a) ? (n = "", e != null && (n = e.replace(Ys, "$&/") + "/"), va(a, t, n, "", function(p) {
    return p;
  })) : a != null && (Ji(a) && (a = np(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Ys, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Qs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + ko(o, u);
    s += va(o, t, n, l, a);
  }
  else if (l = tp(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + ko(o, u++), s += va(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Zr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return va(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function ap(e) {
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
var Te = { current: null }, ya = { transition: null }, op = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: ya, ReactCurrentOwner: Ki };
function yu() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: Zr, forEach: function(e, t, n) {
  Zr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Zr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Zr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ji(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = Jn;
G.Fragment = Hd;
G.Profiler = Qd;
G.PureComponent = Qi;
G.StrictMode = Wd;
G.Suspense = Xd;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = op;
G.act = yu;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = pu({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Ki.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) hu.call(t, l) && !gu.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var p = 0; p < l; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: Vr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
G.createContext = function(e) {
  return e = { $$typeof: Kd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Yd, _context: e }, e.Consumer = e;
};
G.createElement = vu;
G.createFactory = function(e) {
  var t = vu.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: Jd, render: e };
};
G.isValidElement = Ji;
G.lazy = function(e) {
  return { $$typeof: ep, _payload: { _status: -1, _result: e }, _init: ap };
};
G.memo = function(e, t) {
  return { $$typeof: Zd, type: e, compare: t === void 0 ? null : t };
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
G.unstable_act = yu;
G.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Te.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
G.useId = function() {
  return Te.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Te.current.useRef(e);
};
G.useState = function(e) {
  return Te.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Te.current.useTransition();
};
G.version = "18.3.1";
cu.exports = G;
var j = cu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip = j, sp = Symbol.for("react.element"), lp = Symbol.for("react.fragment"), up = Object.prototype.hasOwnProperty, cp = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function xu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) up.call(t, r) && !dp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: sp, type: e, key: o, ref: s, props: a, _owner: cp.current };
}
no.Fragment = lp;
no.jsx = xu;
no.jsxs = xu;
uu.exports = no;
var i = uu.exports, wu = { exports: {} }, He = {}, ju = { exports: {} }, ku = {};
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
  function t(P, O) {
    var F = P.length;
    P.push(O);
    e: for (; 0 < F; ) {
      var W = F - 1 >>> 1, K = P[W];
      if (0 < a(K, O)) P[W] = O, P[F] = K, F = W;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var O = P[0], F = P.pop();
    if (F !== O) {
      P[0] = F;
      e: for (var W = 0, K = P.length, ft = K >>> 1; W < ft; ) {
        var Se = 2 * (W + 1) - 1, Re = P[Se], xe = Se + 1, $ = P[xe];
        if (0 > a(Re, F)) xe < K && 0 > a($, Re) ? (P[W] = $, P[xe] = F, W = xe) : (P[W] = Re, P[Se] = F, W = Se);
        else if (xe < K && 0 > a($, F)) P[W] = $, P[xe] = F, W = xe;
        else break e;
      }
    }
    return O;
  }
  function a(P, O) {
    var F = P.sortIndex - O.sortIndex;
    return F !== 0 ? F : P.id - O.id;
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
  var l = [], p = [], m = 1, g = null, y = 3, x = !1, S = !1, w = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(P) {
    for (var O = n(p); O !== null; ) {
      if (O.callback === null) r(p);
      else if (O.startTime <= P) r(p), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = n(p);
    }
  }
  function h(P) {
    if (w = !1, c(P), !S) if (n(l) !== null) S = !0, oe(v);
    else {
      var O = n(p);
      O !== null && ze(h, O.startTime - P);
    }
  }
  function v(P, O) {
    S = !1, w && (w = !1, f(b), b = -1), x = !0;
    var F = y;
    try {
      for (c(O), g = n(l); g !== null && (!(g.expirationTime > O) || P && !B()); ) {
        var W = g.callback;
        if (typeof W == "function") {
          g.callback = null, y = g.priorityLevel;
          var K = W(g.expirationTime <= O);
          O = e.unstable_now(), typeof K == "function" ? g.callback = K : g === n(l) && r(l), c(O);
        } else r(l);
        g = n(l);
      }
      if (g !== null) var ft = !0;
      else {
        var Se = n(p);
        Se !== null && ze(h, Se.startTime - O), ft = !1;
      }
      return ft;
    } finally {
      g = null, y = F, x = !1;
    }
  }
  var k = !1, C = null, b = -1, _ = 5, N = -1;
  function B() {
    return !(e.unstable_now() - N < _);
  }
  function ae() {
    if (C !== null) {
      var P = e.unstable_now();
      N = P;
      var O = !0;
      try {
        O = C(!0, P);
      } finally {
        O ? H() : (k = !1, C = null);
      }
    } else k = !1;
  }
  var H;
  if (typeof d == "function") H = function() {
    d(ae);
  };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(), T = V.port2;
    V.port1.onmessage = ae, H = function() {
      T.postMessage(null);
    };
  } else H = function() {
    D(ae, 0);
  };
  function oe(P) {
    C = P, k || (k = !0, H());
  }
  function ze(P, O) {
    b = D(function() {
      P(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    S || x || (S = !0, oe(v));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = y;
    }
    var F = y;
    y = O;
    try {
      return P();
    } finally {
      y = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, O) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var F = y;
    y = P;
    try {
      return O();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function(P, O, F) {
    var W = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, P) {
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
    return K = F + K, P = { id: m++, callback: O, priorityLevel: P, startTime: F, expirationTime: K, sortIndex: -1 }, F > W ? (P.sortIndex = F, t(p, P), n(l) === null && P === n(p) && (w ? (f(b), b = -1) : w = !0, ze(h, F - W))) : (P.sortIndex = K, t(l, P), S || x || (S = !0, oe(v))), P;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(P) {
    var O = y;
    return function() {
      var F = y;
      y = O;
      try {
        return P.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(ku);
ju.exports = ku;
var pp = ju.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = j, Ge = pp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Su = /* @__PURE__ */ new Set(), Sr = {};
function jn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (Sr[e] = t, e = 0; e < t.length; e++) Su.add(t[e]);
}
var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jo = Object.prototype.hasOwnProperty, mp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ks = {}, Js = {};
function hp(e) {
  return Jo.call(Js, e) ? !0 : Jo.call(Ks, e) ? !1 : mp.test(e) ? Js[e] = !0 : (Ks[e] = !0, !1);
}
function gp(e, t, n, r) {
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
function vp(e, t, n, r) {
  if (t === null || typeof t > "u" || gp(e, t, n, r)) return !0;
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
function Le(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new Le(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xi = /[\-:]([a-z])/g;
function Zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xi,
    Zi
  );
  ke[t] = new Le(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xi, Zi);
  ke[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xi, Zi);
  ke[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function es(e, t, n, r) {
  var a = ke.hasOwnProperty(t) ? ke[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vp(t, n, a, r) && (n = null), r || a === null ? hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ea = Symbol.for("react.element"), Nn = Symbol.for("react.portal"), En = Symbol.for("react.fragment"), ts = Symbol.for("react.strict_mode"), Xo = Symbol.for("react.profiler"), Cu = Symbol.for("react.provider"), _u = Symbol.for("react.context"), ns = Symbol.for("react.forward_ref"), Zo = Symbol.for("react.suspense"), ei = Symbol.for("react.suspense_list"), rs = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), Nu = Symbol.for("react.offscreen"), Xs = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object" ? null : (e = Xs && e[Xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, So;
function lr(e) {
  if (So === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    So = t && t[1] || "";
  }
  return `
` + So + e;
}
var Co = !1;
function _o(e, t) {
  if (!e || Co) return "";
  Co = !0;
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
    Co = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function yp(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _o(e.type, !1), e;
    case 11:
      return e = _o(e.type.render, !1), e;
    case 1:
      return e = _o(e.type, !0), e;
    default:
      return "";
  }
}
function ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case Nn:
      return "Portal";
    case Xo:
      return "Profiler";
    case ts:
      return "StrictMode";
    case Zo:
      return "Suspense";
    case ei:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case _u:
      return (e.displayName || "Context") + ".Consumer";
    case Cu:
      return (e._context.displayName || "Context") + ".Provider";
    case ns:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case rs:
      return t = e.displayName || null, t !== null ? t : ti(e.type) || "Memo";
    case Ut:
      t = e._payload, e = e._init;
      try {
        return ti(e(t));
      } catch {
      }
  }
  return null;
}
function xp(e) {
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
      return ti(t);
    case 8:
      return t === ts ? "StrictMode" : "Mode";
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
function nn(e) {
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
function Eu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function wp(e) {
  var t = Eu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ta(e) {
  e._valueTracker || (e._valueTracker = wp(e));
}
function zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Eu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Pa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ni(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = nn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function bu(e, t) {
  t = t.checked, t != null && es(e, "checked", t, !1);
}
function ri(e, t) {
  bu(e, t);
  var n = nn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ai(e, t.type, n) : t.hasOwnProperty("defaultValue") && ai(e, t.type, nn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function el(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ai(e, t, n) {
  (t !== "number" || Pa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Pu(e, t) {
  var n = nn(t.value), r = nn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var na, Tu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (na = na || document.createElement("div"), na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = na.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pr = {
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
}, jp = ["Webkit", "ms", "Moz", "O"];
Object.keys(pr).forEach(function(e) {
  jp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), pr[t] = pr[e];
  });
});
function Lu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || pr.hasOwnProperty(e) && pr[e] ? ("" + t).trim() : t + "px";
}
function Ru(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Lu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var kp = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function si(e, t) {
  if (t) {
    if (kp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function li(e, t) {
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
var ui = null;
function as(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ci = null, On = null, Fn = null;
function rl(e) {
  if (e = Wr(e)) {
    if (typeof ci != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = so(t), ci(e.stateNode, e.type, t));
  }
}
function Au(e) {
  On ? Fn ? Fn.push(e) : Fn = [e] : On = e;
}
function Iu() {
  if (On) {
    var e = On, t = Fn;
    if (Fn = On = null, rl(e), t) for (e = 0; e < t.length; e++) rl(t[e]);
  }
}
function $u(e, t) {
  return e(t);
}
function Du() {
}
var No = !1;
function Ou(e, t, n) {
  if (No) return e(t, n);
  No = !0;
  try {
    return $u(e, t, n);
  } finally {
    No = !1, (On !== null || Fn !== null) && (Du(), Iu());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = so(n);
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
var di = !1;
if (Mt) try {
  var tr = {};
  Object.defineProperty(tr, "passive", { get: function() {
    di = !0;
  } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
} catch {
  di = !1;
}
function Sp(e, t, n, r, a, o, s, u, l) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (m) {
    this.onError(m);
  }
}
var fr = !1, Ma = null, Ta = !1, pi = null, Cp = { onError: function(e) {
  fr = !0, Ma = e;
} };
function _p(e, t, n, r, a, o, s, u, l) {
  fr = !1, Ma = null, Sp.apply(Cp, arguments);
}
function Np(e, t, n, r, a, o, s, u, l) {
  if (_p.apply(this, arguments), fr) {
    if (fr) {
      var p = Ma;
      fr = !1, Ma = null;
    } else throw Error(z(198));
    Ta || (Ta = !0, pi = p);
  }
}
function kn(e) {
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
function Fu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function al(e) {
  if (kn(e) !== e) throw Error(z(188));
}
function Ep(e) {
  var t = e.alternate;
  if (!t) {
    if (t = kn(e), t === null) throw Error(z(188));
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
        if (o === n) return al(a), e;
        if (o === r) return al(a), t;
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
function Bu(e) {
  return e = Ep(e), e !== null ? Uu(e) : null;
}
function Uu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Uu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qu = Ge.unstable_scheduleCallback, ol = Ge.unstable_cancelCallback, zp = Ge.unstable_shouldYield, bp = Ge.unstable_requestPaint, fe = Ge.unstable_now, Pp = Ge.unstable_getCurrentPriorityLevel, os = Ge.unstable_ImmediatePriority, Vu = Ge.unstable_UserBlockingPriority, La = Ge.unstable_NormalPriority, Mp = Ge.unstable_LowPriority, Gu = Ge.unstable_IdlePriority, ro = null, wt = null;
function Tp(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(ro, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Ap, Lp = Math.log, Rp = Math.LN2;
function Ap(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Lp(e) / Rp | 0) | 0;
}
var ra = 64, aa = 4194304;
function cr(e) {
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
function Ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~a;
    u !== 0 ? r = cr(u) : (o &= s, o !== 0 && (r = cr(o)));
  } else s = n & ~a, s !== 0 ? r = cr(s) : o !== 0 && (r = cr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Ip(e, t) {
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
function $p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ct(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Ip(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function fi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Hu() {
  var e = ra;
  return ra <<= 1, !(ra & 4194240) && (ra = 64), e;
}
function Eo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Dp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ct(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function is(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var J = 0;
function Wu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Qu, ss, Yu, Ku, Ju, mi = !1, oa = [], Qt = null, Yt = null, Kt = null, Nr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), Vt = [], Op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function il(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Er.delete(t.pointerId);
  }
}
function nr(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Wr(t), t !== null && ss(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Fp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Qt = nr(Qt, e, t, n, r, a), !0;
    case "dragenter":
      return Yt = nr(Yt, e, t, n, r, a), !0;
    case "mouseover":
      return Kt = nr(Kt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Nr.set(o, nr(Nr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Er.set(o, nr(Er.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Xu(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fu(n), t !== null) {
          e.blockedOn = t, Ju(e.priority, function() {
            Yu(n);
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
    var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ui = r, n.target.dispatchEvent(r), ui = null;
    } else return t = Wr(n), t !== null && ss(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function sl(e, t, n) {
  xa(e) && n.delete(t);
}
function Bp() {
  mi = !1, Qt !== null && xa(Qt) && (Qt = null), Yt !== null && xa(Yt) && (Yt = null), Kt !== null && xa(Kt) && (Kt = null), Nr.forEach(sl), Er.forEach(sl);
}
function rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, mi || (mi = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Bp)));
}
function zr(e) {
  function t(a) {
    return rr(a, e);
  }
  if (0 < oa.length) {
    rr(oa[0], e);
    for (var n = 1; n < oa.length; n++) {
      var r = oa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Qt !== null && rr(Qt, e), Yt !== null && rr(Yt, e), Kt !== null && rr(Kt, e), Nr.forEach(t), Er.forEach(t), n = 0; n < Vt.length; n++) r = Vt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && (n = Vt[0], n.blockedOn === null); ) Xu(n), n.blockedOn === null && Vt.shift();
}
var Bn = At.ReactCurrentBatchConfig, Aa = !0;
function Up(e, t, n, r) {
  var a = J, o = Bn.transition;
  Bn.transition = null;
  try {
    J = 1, ls(e, t, n, r);
  } finally {
    J = a, Bn.transition = o;
  }
}
function qp(e, t, n, r) {
  var a = J, o = Bn.transition;
  Bn.transition = null;
  try {
    J = 4, ls(e, t, n, r);
  } finally {
    J = a, Bn.transition = o;
  }
}
function ls(e, t, n, r) {
  if (Aa) {
    var a = hi(e, t, n, r);
    if (a === null) $o(e, t, r, Ia, n), il(e, r);
    else if (Fp(a, e, t, n, r)) r.stopPropagation();
    else if (il(e, r), t & 4 && -1 < Op.indexOf(e)) {
      for (; a !== null; ) {
        var o = Wr(a);
        if (o !== null && Qu(o), o = hi(e, t, n, r), o === null && $o(e, t, r, Ia, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else $o(e, t, r, null, n);
  }
}
var Ia = null;
function hi(e, t, n, r) {
  if (Ia = null, e = as(r), e = cn(e), e !== null) if (t = kn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ia = e, null;
}
function Zu(e) {
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
      switch (Pp()) {
        case os:
          return 1;
        case Vu:
          return 4;
        case La:
        case Mp:
          return 16;
        case Gu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ht = null, us = null, wa = null;
function ec() {
  if (wa) return wa;
  var e, t = us, n = t.length, r, a = "value" in Ht ? Ht.value : Ht.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return wa = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ja(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ia() {
  return !0;
}
function ll() {
  return !1;
}
function We(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ia : ll, this.isPropagationStopped = ll, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ia);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ia);
  }, persist: function() {
  }, isPersistent: ia }), t;
}
var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, cs = We(Xn), Hr = ce({}, Xn, { view: 0, detail: 0 }), Vp = We(Hr), zo, bo, ar, ao = ce({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ds, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ar && (ar && e.type === "mousemove" ? (zo = e.screenX - ar.screenX, bo = e.screenY - ar.screenY) : bo = zo = 0, ar = e), zo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : bo;
} }), ul = We(ao), Gp = ce({}, ao, { dataTransfer: 0 }), Hp = We(Gp), Wp = ce({}, Hr, { relatedTarget: 0 }), Po = We(Wp), Qp = ce({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = We(Qp), Kp = ce({}, Xn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Jp = We(Kp), Xp = ce({}, Xn, { data: 0 }), cl = We(Xp), Zp = {
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
}, ef = {
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
}, tf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tf[e]) ? !!t[e] : !1;
}
function ds() {
  return nf;
}
var rf = ce({}, Hr, { key: function(e) {
  if (e.key) {
    var t = Zp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ja(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ef[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ds, charCode: function(e) {
  return e.type === "keypress" ? ja(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ja(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), af = We(rf), of = ce({}, ao, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dl = We(of), sf = ce({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ds }), lf = We(sf), uf = ce({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cf = We(uf), df = ce({}, ao, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pf = We(df), ff = [9, 13, 27, 32], ps = Mt && "CompositionEvent" in window, mr = null;
Mt && "documentMode" in document && (mr = document.documentMode);
var mf = Mt && "TextEvent" in window && !mr, tc = Mt && (!ps || mr && 8 < mr && 11 >= mr), pl = " ", fl = !1;
function nc(e, t) {
  switch (e) {
    case "keyup":
      return ff.indexOf(t.keyCode) !== -1;
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
function rc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function hf(e, t) {
  switch (e) {
    case "compositionend":
      return rc(t);
    case "keypress":
      return t.which !== 32 ? null : (fl = !0, pl);
    case "textInput":
      return e = t.data, e === pl && fl ? null : e;
    default:
      return null;
  }
}
function gf(e, t) {
  if (zn) return e === "compositionend" || !ps && nc(e, t) ? (e = ec(), wa = us = Ht = null, zn = !1, e) : null;
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
      return tc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ml(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vf[e.type] : t === "textarea";
}
function ac(e, t, n, r) {
  Au(r), t = $a(t, "onChange"), 0 < t.length && (n = new cs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, br = null;
function yf(e) {
  hc(e, 0);
}
function oo(e) {
  var t = Mn(e);
  if (zu(t)) return e;
}
function xf(e, t) {
  if (e === "change") return t;
}
var oc = !1;
if (Mt) {
  var Mo;
  if (Mt) {
    var To = "oninput" in document;
    if (!To) {
      var hl = document.createElement("div");
      hl.setAttribute("oninput", "return;"), To = typeof hl.oninput == "function";
    }
    Mo = To;
  } else Mo = !1;
  oc = Mo && (!document.documentMode || 9 < document.documentMode);
}
function gl() {
  hr && (hr.detachEvent("onpropertychange", ic), br = hr = null);
}
function ic(e) {
  if (e.propertyName === "value" && oo(br)) {
    var t = [];
    ac(t, br, e, as(e)), Ou(yf, t);
  }
}
function wf(e, t, n) {
  e === "focusin" ? (gl(), hr = t, br = n, hr.attachEvent("onpropertychange", ic)) : e === "focusout" && gl();
}
function jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return oo(br);
}
function kf(e, t) {
  if (e === "click") return oo(t);
}
function Sf(e, t) {
  if (e === "input" || e === "change") return oo(t);
}
function Cf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : Cf;
function Pr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Jo.call(t, a) || !pt(e[a], t[a])) return !1;
  }
  return !0;
}
function vl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yl(e, t) {
  var n = vl(e);
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
    n = vl(n);
  }
}
function sc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function lc() {
  for (var e = window, t = Pa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Pa(e.document);
  }
  return t;
}
function fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _f(e) {
  var t = lc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sc(n.ownerDocument.documentElement, n)) {
    if (r !== null && fs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = yl(n, o);
        var s = yl(
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
var Nf = Mt && "documentMode" in document && 11 >= document.documentMode, bn = null, gi = null, gr = null, vi = !1;
function xl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi || bn == null || bn !== Pa(r) || (r = bn, "selectionStart" in r && fs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gr && Pr(gr, r) || (gr = r, r = $a(gi, "onSelect"), 0 < r.length && (t = new cs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bn)));
}
function sa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: sa("Animation", "AnimationEnd"), animationiteration: sa("Animation", "AnimationIteration"), animationstart: sa("Animation", "AnimationStart"), transitionend: sa("Transition", "TransitionEnd") }, Lo = {}, uc = {};
Mt && (uc = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function io(e) {
  if (Lo[e]) return Lo[e];
  if (!Pn[e]) return e;
  var t = Pn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in uc) return Lo[e] = t[n];
  return e;
}
var cc = io("animationend"), dc = io("animationiteration"), pc = io("animationstart"), fc = io("transitionend"), mc = /* @__PURE__ */ new Map(), wl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function an(e, t) {
  mc.set(e, t), jn(t, [e]);
}
for (var Ro = 0; Ro < wl.length; Ro++) {
  var Ao = wl[Ro], Ef = Ao.toLowerCase(), zf = Ao[0].toUpperCase() + Ao.slice(1);
  an(Ef, "on" + zf);
}
an(cc, "onAnimationEnd");
an(dc, "onAnimationIteration");
an(pc, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(fc, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function jl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Np(r, t, void 0, e), e.currentTarget = null;
}
function hc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, p = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        jl(a, u, p), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, p = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        jl(a, u, p), o = l;
      }
    }
  }
  if (Ta) throw e = pi, Ta = !1, pi = null, e;
}
function ne(e, t) {
  var n = t[ki];
  n === void 0 && (n = t[ki] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (gc(t, e, 2, !1), n.add(r));
}
function Io(e, t, n) {
  var r = 0;
  t && (r |= 4), gc(n, e, r, t);
}
var la = "_reactListening" + Math.random().toString(36).slice(2);
function Mr(e) {
  if (!e[la]) {
    e[la] = !0, Su.forEach(function(n) {
      n !== "selectionchange" && (bf.has(n) || Io(n, !1, e), Io(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[la] || (t[la] = !0, Io("selectionchange", !1, t));
  }
}
function gc(e, t, n, r) {
  switch (Zu(t)) {
    case 1:
      var a = Up;
      break;
    case 4:
      a = qp;
      break;
    default:
      a = ls;
  }
  n = a.bind(null, t, n, e), a = void 0, !di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function $o(e, t, n, r, a) {
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
        if (s = cn(u), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ou(function() {
    var p = o, m = as(n), g = [];
    e: {
      var y = mc.get(e);
      if (y !== void 0) {
        var x = cs, S = e;
        switch (e) {
          case "keypress":
            if (ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = af;
            break;
          case "focusin":
            S = "focus", x = Po;
            break;
          case "focusout":
            S = "blur", x = Po;
            break;
          case "beforeblur":
          case "afterblur":
            x = Po;
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
            x = ul;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = lf;
            break;
          case cc:
          case dc:
          case pc:
            x = Yp;
            break;
          case fc:
            x = cf;
            break;
          case "scroll":
            x = Vp;
            break;
          case "wheel":
            x = pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = dl;
        }
        var w = (t & 4) !== 0, D = !w && e === "scroll", f = w ? y !== null ? y + "Capture" : null : y;
        w = [];
        for (var d = p, c; d !== null; ) {
          c = d;
          var h = c.stateNode;
          if (c.tag === 5 && h !== null && (c = h, f !== null && (h = _r(d, f), h != null && w.push(Tr(d, h, c)))), D) break;
          d = d.return;
        }
        0 < w.length && (y = new x(y, S, null, n, m), g.push({ event: y, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", y && n !== ui && (S = n.relatedTarget || n.fromElement) && (cn(S) || S[Tt])) break e;
        if ((x || y) && (y = m.window === m ? m : (y = m.ownerDocument) ? y.defaultView || y.parentWindow : window, x ? (S = n.relatedTarget || n.toElement, x = p, S = S ? cn(S) : null, S !== null && (D = kn(S), S !== D || S.tag !== 5 && S.tag !== 6) && (S = null)) : (x = null, S = p), x !== S)) {
          if (w = ul, h = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = dl, h = "onPointerLeave", f = "onPointerEnter", d = "pointer"), D = x == null ? y : Mn(x), c = S == null ? y : Mn(S), y = new w(h, d + "leave", x, n, m), y.target = D, y.relatedTarget = c, h = null, cn(m) === p && (w = new w(f, d + "enter", S, n, m), w.target = c, w.relatedTarget = D, h = w), D = h, x && S) t: {
            for (w = x, f = S, d = 0, c = w; c; c = _n(c)) d++;
            for (c = 0, h = f; h; h = _n(h)) c++;
            for (; 0 < d - c; ) w = _n(w), d--;
            for (; 0 < c - d; ) f = _n(f), c--;
            for (; d--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = _n(w), f = _n(f);
            }
            w = null;
          }
          else w = null;
          x !== null && kl(g, y, x, w, !1), S !== null && D !== null && kl(g, D, S, w, !0);
        }
      }
      e: {
        if (y = p ? Mn(p) : window, x = y.nodeName && y.nodeName.toLowerCase(), x === "select" || x === "input" && y.type === "file") var v = xf;
        else if (ml(y)) if (oc) v = Sf;
        else {
          v = jf;
          var k = wf;
        }
        else (x = y.nodeName) && x.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (v = kf);
        if (v && (v = v(e, p))) {
          ac(g, v, n, m);
          break e;
        }
        k && k(e, y, p), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && ai(y, "number", y.value);
      }
      switch (k = p ? Mn(p) : window, e) {
        case "focusin":
          (ml(k) || k.contentEditable === "true") && (bn = k, gi = p, gr = null);
          break;
        case "focusout":
          gr = gi = bn = null;
          break;
        case "mousedown":
          vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vi = !1, xl(g, n, m);
          break;
        case "selectionchange":
          if (Nf) break;
        case "keydown":
        case "keyup":
          xl(g, n, m);
      }
      var C;
      if (ps) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      }
      else zn ? nc(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (tc && n.locale !== "ko" && (zn || b !== "onCompositionStart" ? b === "onCompositionEnd" && zn && (C = ec()) : (Ht = m, us = "value" in Ht ? Ht.value : Ht.textContent, zn = !0)), k = $a(p, b), 0 < k.length && (b = new cl(b, e, null, n, m), g.push({ event: b, listeners: k }), C ? b.data = C : (C = rc(n), C !== null && (b.data = C)))), (C = mf ? hf(e, n) : gf(e, n)) && (p = $a(p, "onBeforeInput"), 0 < p.length && (m = new cl("onBeforeInput", "beforeinput", null, n, m), g.push({ event: m, listeners: p }), m.data = C));
    }
    hc(g, t);
  });
}
function Tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $a(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = _r(e, n), o != null && r.unshift(Tr(e, o, a)), o = _r(e, t), o != null && r.push(Tr(e, o, a))), e = e.return;
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function kl(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, p = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && p !== null && (u = p, a ? (l = _r(n, o), l != null && s.unshift(Tr(n, l, u))) : a || (l = _r(n, o), l != null && s.push(Tr(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Pf = /\r\n?/g, Mf = /\u0000|\uFFFD/g;
function Sl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Pf, `
`).replace(Mf, "");
}
function ua(e, t, n) {
  if (t = Sl(t), Sl(e) !== t && n) throw Error(z(425));
}
function Da() {
}
var yi = null, xi = null;
function wi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ji = typeof setTimeout == "function" ? setTimeout : void 0, Tf = typeof clearTimeout == "function" ? clearTimeout : void 0, Cl = typeof Promise == "function" ? Promise : void 0, Lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cl < "u" ? function(e) {
  return Cl.resolve(null).then(e).catch(Rf);
} : ji;
function Rf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Do(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), zr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  zr(t);
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
function _l(e) {
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
var Zn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + Zn, Lr = "__reactProps$" + Zn, Tt = "__reactContainer$" + Zn, ki = "__reactEvents$" + Zn, Af = "__reactListeners$" + Zn, If = "__reactHandles$" + Zn;
function cn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tt] || n[yt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = _l(e); e !== null; ) {
        if (n = e[yt]) return n;
        e = _l(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Wr(e) {
  return e = e[yt] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function so(e) {
  return e[Lr] || null;
}
var Si = [], Tn = -1;
function on(e) {
  return { current: e };
}
function re(e) {
  0 > Tn || (e.current = Si[Tn], Si[Tn] = null, Tn--);
}
function ee(e, t) {
  Tn++, Si[Tn] = e.current, e.current = t;
}
var rn = {}, Ee = on(rn), De = on(!1), gn = rn;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function Oa() {
  re(De), re(Ee);
}
function Nl(e, t, n) {
  if (Ee.current !== rn) throw Error(z(168));
  ee(Ee, t), ee(De, n);
}
function vc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, xp(e) || "Unknown", a));
  return ce({}, n, r);
}
function Fa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, gn = Ee.current, ee(Ee, e), ee(De, De.current), !0;
}
function El(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = vc(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, re(De), re(Ee), ee(Ee, e)) : re(De), ee(De, n);
}
var Et = null, lo = !1, Oo = !1;
function yc(e) {
  Et === null ? Et = [e] : Et.push(e);
}
function $f(e) {
  lo = !0, yc(e);
}
function sn() {
  if (!Oo && Et !== null) {
    Oo = !0;
    var e = 0, t = J;
    try {
      var n = Et;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Et = null, lo = !1;
    } catch (a) {
      throw Et !== null && (Et = Et.slice(e + 1)), qu(os, sn), a;
    } finally {
      J = t, Oo = !1;
    }
  }
  return null;
}
var Ln = [], Rn = 0, Ba = null, Ua = 0, Ke = [], Je = 0, vn = null, zt = 1, bt = "";
function ln(e, t) {
  Ln[Rn++] = Ua, Ln[Rn++] = Ba, Ba = e, Ua = t;
}
function xc(e, t, n) {
  Ke[Je++] = zt, Ke[Je++] = bt, Ke[Je++] = vn, vn = e;
  var r = zt;
  e = bt;
  var a = 32 - ct(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ct(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, zt = 1 << 32 - ct(t) + a | n << a | r, bt = o + e;
  } else zt = 1 << o | n << a | r, bt = e;
}
function ms(e) {
  e.return !== null && (ln(e, 1), xc(e, 1, 0));
}
function hs(e) {
  for (; e === Ba; ) Ba = Ln[--Rn], Ln[Rn] = null, Ua = Ln[--Rn], Ln[Rn] = null;
  for (; e === vn; ) vn = Ke[--Je], Ke[Je] = null, bt = Ke[--Je], Ke[Je] = null, zt = Ke[--Je], Ke[Je] = null;
}
var Ve = null, qe = null, se = !1, ut = null;
function wc(e, t) {
  var n = Xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, qe = Jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vn !== null ? { id: zt, overflow: bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, qe = null, !0) : !1;
    default:
      return !1;
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _i(e) {
  if (se) {
    var t = qe;
    if (t) {
      var n = t;
      if (!zl(e, t)) {
        if (Ci(e)) throw Error(z(418));
        t = Jt(n.nextSibling);
        var r = Ve;
        t && zl(e, t) ? wc(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, Ve = e);
      }
    } else {
      if (Ci(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, se = !1, Ve = e;
    }
  }
}
function bl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function ca(e) {
  if (e !== Ve) return !1;
  if (!se) return bl(e), se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t && (t = qe)) {
    if (Ci(e)) throw jc(), Error(z(418));
    for (; t; ) wc(e, t), t = Jt(t.nextSibling);
  }
  if (bl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ve ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function jc() {
  for (var e = qe; e; ) e = Jt(e.nextSibling);
}
function Hn() {
  qe = Ve = null, se = !1;
}
function gs(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Df = At.ReactCurrentBatchConfig;
function or(e, t, n) {
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
function da(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Pl(e) {
  var t = e._init;
  return t(e._payload);
}
function kc(e) {
  function t(f, d) {
    if (e) {
      var c = f.deletions;
      c === null ? (f.deletions = [d], f.flags |= 16) : c.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function a(f, d) {
    return f = tn(f, d), f.index = 0, f.sibling = null, f;
  }
  function o(f, d, c) {
    return f.index = c, e ? (c = f.alternate, c !== null ? (c = c.index, c < d ? (f.flags |= 2, d) : c) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, d, c, h) {
    return d === null || d.tag !== 6 ? (d = Ho(c, f.mode, h), d.return = f, d) : (d = a(d, c), d.return = f, d);
  }
  function l(f, d, c, h) {
    var v = c.type;
    return v === En ? m(f, d, c.props.children, h, c.key) : d !== null && (d.elementType === v || typeof v == "object" && v !== null && v.$$typeof === Ut && Pl(v) === d.type) ? (h = a(d, c.props), h.ref = or(f, d, c), h.return = f, h) : (h = za(c.type, c.key, c.props, null, f.mode, h), h.ref = or(f, d, c), h.return = f, h);
  }
  function p(f, d, c, h) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== c.containerInfo || d.stateNode.implementation !== c.implementation ? (d = Wo(c, f.mode, h), d.return = f, d) : (d = a(d, c.children || []), d.return = f, d);
  }
  function m(f, d, c, h, v) {
    return d === null || d.tag !== 7 ? (d = mn(c, f.mode, h, v), d.return = f, d) : (d = a(d, c), d.return = f, d);
  }
  function g(f, d, c) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ho("" + d, f.mode, c), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ea:
          return c = za(d.type, d.key, d.props, null, f.mode, c), c.ref = or(f, null, d), c.return = f, c;
        case Nn:
          return d = Wo(d, f.mode, c), d.return = f, d;
        case Ut:
          var h = d._init;
          return g(f, h(d._payload), c);
      }
      if (ur(d) || er(d)) return d = mn(d, f.mode, c, null), d.return = f, d;
      da(f, d);
    }
    return null;
  }
  function y(f, d, c, h) {
    var v = d !== null ? d.key : null;
    if (typeof c == "string" && c !== "" || typeof c == "number") return v !== null ? null : u(f, d, "" + c, h);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ea:
          return c.key === v ? l(f, d, c, h) : null;
        case Nn:
          return c.key === v ? p(f, d, c, h) : null;
        case Ut:
          return v = c._init, y(
            f,
            d,
            v(c._payload),
            h
          );
      }
      if (ur(c) || er(c)) return v !== null ? null : m(f, d, c, h, null);
      da(f, c);
    }
    return null;
  }
  function x(f, d, c, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return f = f.get(c) || null, u(d, f, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ea:
          return f = f.get(h.key === null ? c : h.key) || null, l(d, f, h, v);
        case Nn:
          return f = f.get(h.key === null ? c : h.key) || null, p(d, f, h, v);
        case Ut:
          var k = h._init;
          return x(f, d, c, k(h._payload), v);
      }
      if (ur(h) || er(h)) return f = f.get(c) || null, m(d, f, h, v, null);
      da(d, h);
    }
    return null;
  }
  function S(f, d, c, h) {
    for (var v = null, k = null, C = d, b = d = 0, _ = null; C !== null && b < c.length; b++) {
      C.index > b ? (_ = C, C = null) : _ = C.sibling;
      var N = y(f, C, c[b], h);
      if (N === null) {
        C === null && (C = _);
        break;
      }
      e && C && N.alternate === null && t(f, C), d = o(N, d, b), k === null ? v = N : k.sibling = N, k = N, C = _;
    }
    if (b === c.length) return n(f, C), se && ln(f, b), v;
    if (C === null) {
      for (; b < c.length; b++) C = g(f, c[b], h), C !== null && (d = o(C, d, b), k === null ? v = C : k.sibling = C, k = C);
      return se && ln(f, b), v;
    }
    for (C = r(f, C); b < c.length; b++) _ = x(C, f, b, c[b], h), _ !== null && (e && _.alternate !== null && C.delete(_.key === null ? b : _.key), d = o(_, d, b), k === null ? v = _ : k.sibling = _, k = _);
    return e && C.forEach(function(B) {
      return t(f, B);
    }), se && ln(f, b), v;
  }
  function w(f, d, c, h) {
    var v = er(c);
    if (typeof v != "function") throw Error(z(150));
    if (c = v.call(c), c == null) throw Error(z(151));
    for (var k = v = null, C = d, b = d = 0, _ = null, N = c.next(); C !== null && !N.done; b++, N = c.next()) {
      C.index > b ? (_ = C, C = null) : _ = C.sibling;
      var B = y(f, C, N.value, h);
      if (B === null) {
        C === null && (C = _);
        break;
      }
      e && C && B.alternate === null && t(f, C), d = o(B, d, b), k === null ? v = B : k.sibling = B, k = B, C = _;
    }
    if (N.done) return n(
      f,
      C
    ), se && ln(f, b), v;
    if (C === null) {
      for (; !N.done; b++, N = c.next()) N = g(f, N.value, h), N !== null && (d = o(N, d, b), k === null ? v = N : k.sibling = N, k = N);
      return se && ln(f, b), v;
    }
    for (C = r(f, C); !N.done; b++, N = c.next()) N = x(C, f, b, N.value, h), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? b : N.key), d = o(N, d, b), k === null ? v = N : k.sibling = N, k = N);
    return e && C.forEach(function(ae) {
      return t(f, ae);
    }), se && ln(f, b), v;
  }
  function D(f, d, c, h) {
    if (typeof c == "object" && c !== null && c.type === En && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ea:
          e: {
            for (var v = c.key, k = d; k !== null; ) {
              if (k.key === v) {
                if (v = c.type, v === En) {
                  if (k.tag === 7) {
                    n(f, k.sibling), d = a(k, c.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (k.elementType === v || typeof v == "object" && v !== null && v.$$typeof === Ut && Pl(v) === k.type) {
                  n(f, k.sibling), d = a(k, c.props), d.ref = or(f, k, c), d.return = f, f = d;
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            c.type === En ? (d = mn(c.props.children, f.mode, h, c.key), d.return = f, f = d) : (h = za(c.type, c.key, c.props, null, f.mode, h), h.ref = or(f, d, c), h.return = f, f = h);
          }
          return s(f);
        case Nn:
          e: {
            for (k = c.key; d !== null; ) {
              if (d.key === k) if (d.tag === 4 && d.stateNode.containerInfo === c.containerInfo && d.stateNode.implementation === c.implementation) {
                n(f, d.sibling), d = a(d, c.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = Wo(c, f.mode, h), d.return = f, f = d;
          }
          return s(f);
        case Ut:
          return k = c._init, D(f, d, k(c._payload), h);
      }
      if (ur(c)) return S(f, d, c, h);
      if (er(c)) return w(f, d, c, h);
      da(f, c);
    }
    return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, d !== null && d.tag === 6 ? (n(f, d.sibling), d = a(d, c), d.return = f, f = d) : (n(f, d), d = Ho(c, f.mode, h), d.return = f, f = d), s(f)) : n(f, d);
  }
  return D;
}
var Wn = kc(!0), Sc = kc(!1), qa = on(null), Va = null, An = null, vs = null;
function ys() {
  vs = An = Va = null;
}
function xs(e) {
  var t = qa.current;
  re(qa), e._currentValue = t;
}
function Ni(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Un(e, t) {
  Va = e, vs = An = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), e.firstContext = null);
}
function et(e) {
  var t = e._currentValue;
  if (vs !== e) if (e = { context: e, memoizedValue: t, next: null }, An === null) {
    if (Va === null) throw Error(z(308));
    An = e, Va.dependencies = { lanes: 0, firstContext: e };
  } else An = An.next = e;
  return t;
}
var dn = null;
function ws(e) {
  dn === null ? dn = [e] : dn.push(e);
}
function Cc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, ws(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Lt(e, r);
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function js(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _c(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Y & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Lt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, ws(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Lt(e, n);
}
function ka(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, is(e, n);
  }
}
function Ml(e, t) {
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
function Ga(e, t, n, r) {
  var a = e.updateQueue;
  qt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, p = l.next;
    l.next = null, s === null ? o = p : s.next = p, s = l;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== s && (u === null ? m.firstBaseUpdate = p : u.next = p, m.lastBaseUpdate = l));
  }
  if (o !== null) {
    var g = a.baseState;
    s = 0, m = p = l = null, u = o;
    do {
      var y = u.lane, x = u.eventTime;
      if ((r & y) === y) {
        m !== null && (m = m.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, w = u;
          switch (y = t, x = n, w.tag) {
            case 1:
              if (S = w.payload, typeof S == "function") {
                g = S.call(x, g, y);
                break e;
              }
              g = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = w.payload, y = typeof S == "function" ? S.call(x, g, y) : S, y == null) break e;
              g = ce({}, g, y);
              break e;
            case 2:
              qt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = a.effects, y === null ? a.effects = [u] : y.push(u));
      } else x = { eventTime: x, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (p = m = x, l = g) : m = m.next = x, s |= y;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        y = u, u = y.next, y.next = null, a.lastBaseUpdate = y, a.shared.pending = null;
      }
    } while (!0);
    if (m === null && (l = g), a.baseState = l, a.firstBaseUpdate = p, a.lastBaseUpdate = m, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    xn |= s, e.lanes = s, e.memoizedState = g;
  }
}
function Tl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Qr = {}, jt = on(Qr), Rr = on(Qr), Ar = on(Qr);
function pn(e) {
  if (e === Qr) throw Error(z(174));
  return e;
}
function ks(e, t) {
  switch (ee(Ar, t), ee(Rr, e), ee(jt, Qr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ii(t, e);
  }
  re(jt), ee(jt, t);
}
function Qn() {
  re(jt), re(Rr), re(Ar);
}
function Nc(e) {
  pn(Ar.current);
  var t = pn(jt.current), n = ii(t, e.type);
  t !== n && (ee(Rr, e), ee(jt, n));
}
function Ss(e) {
  Rr.current === e && (re(jt), re(Rr));
}
var le = on(0);
function Ha(e) {
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
var Fo = [];
function Cs() {
  for (var e = 0; e < Fo.length; e++) Fo[e]._workInProgressVersionPrimary = null;
  Fo.length = 0;
}
var Sa = At.ReactCurrentDispatcher, Bo = At.ReactCurrentBatchConfig, yn = 0, ue = null, he = null, ve = null, Wa = !1, vr = !1, Ir = 0, Of = 0;
function Ce() {
  throw Error(z(321));
}
function _s(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Ns(e, t, n, r, a, o) {
  if (yn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sa.current = e === null || e.memoizedState === null ? qf : Vf, e = n(r, a), vr) {
    o = 0;
    do {
      if (vr = !1, Ir = 0, 25 <= o) throw Error(z(301));
      o += 1, ve = he = null, t.updateQueue = null, Sa.current = Gf, e = n(r, a);
    } while (vr);
  }
  if (Sa.current = Qa, t = he !== null && he.next !== null, yn = 0, ve = he = ue = null, Wa = !1, t) throw Error(z(300));
  return e;
}
function Es() {
  var e = Ir !== 0;
  return Ir = 0, e;
}
function vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? ue.memoizedState = ve = e : ve = ve.next = e, ve;
}
function tt() {
  if (he === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ve === null ? ue.memoizedState : ve.next;
  if (t !== null) ve = t, he = e;
  else {
    if (e === null) throw Error(z(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ve === null ? ue.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Uo(e) {
  var t = tt(), n = t.queue;
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
      var m = p.lane;
      if ((yn & m) === m) l !== null && (l = l.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var g = {
          lane: m,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        l === null ? (u = l = g, s = r) : l = l.next = g, ue.lanes |= m, xn |= m;
      }
      p = p.next;
    } while (p !== null && p !== o);
    l === null ? s = r : l.next = u, pt(r, t.memoizedState) || ($e = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ue.lanes |= o, xn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qo(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    pt(o, t.memoizedState) || ($e = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ec() {
}
function zc(e, t) {
  var n = ue, r = tt(), a = t(), o = !pt(r.memoizedState, a);
  if (o && (r.memoizedState = a, $e = !0), r = r.queue, zs(Mc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, Pc.bind(null, n, r, a, t), void 0, null), ye === null) throw Error(z(349));
    yn & 30 || bc(n, t, a);
  }
  return a;
}
function bc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Tc(t) && Lc(e);
}
function Mc(e, t, n) {
  return n(function() {
    Tc(t) && Lc(e);
  });
}
function Tc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Lc(e) {
  var t = Lt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function Ll(e) {
  var t = vt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $r, lastRenderedState: e }, t.queue = e, e = e.dispatch = Uf.bind(null, ue, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Rc() {
  return tt().memoizedState;
}
function Ca(e, t, n, r) {
  var a = vt();
  ue.flags |= e, a.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function uo(e, t, n, r) {
  var a = tt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (o = s.destroy, r !== null && _s(r, s.deps)) {
      a.memoizedState = Dr(t, n, o, r);
      return;
    }
  }
  ue.flags |= e, a.memoizedState = Dr(1 | t, n, o, r);
}
function Rl(e, t) {
  return Ca(8390656, 8, e, t);
}
function zs(e, t) {
  return uo(2048, 8, e, t);
}
function Ac(e, t) {
  return uo(4, 2, e, t);
}
function Ic(e, t) {
  return uo(4, 4, e, t);
}
function $c(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Dc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, uo(4, 4, $c.bind(null, t, e), n);
}
function bs() {
}
function Oc(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _s(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fc(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _s(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Bc(e, t, n) {
  return yn & 21 ? (pt(n, t) || (n = Hu(), ue.lanes |= n, xn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = n);
}
function Ff(e, t) {
  var n = J;
  J = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Bo.transition;
  Bo.transition = {};
  try {
    e(!1), t();
  } finally {
    J = n, Bo.transition = r;
  }
}
function Uc() {
  return tt().memoizedState;
}
function Bf(e, t, n) {
  var r = en(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qc(e)) Vc(t, n);
  else if (n = Cc(e, t, n, r), n !== null) {
    var a = Me();
    dt(n, e, r, a), Gc(n, t, r);
  }
}
function Uf(e, t, n) {
  var r = en(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qc(e)) Vc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, pt(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, ws(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = Cc(e, t, a, r), n !== null && (a = Me(), dt(n, e, r, a), Gc(n, t, r));
  }
}
function qc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Vc(e, t) {
  vr = Wa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, is(e, n);
  }
}
var Qa = { readContext: et, useCallback: Ce, useContext: Ce, useEffect: Ce, useImperativeHandle: Ce, useInsertionEffect: Ce, useLayoutEffect: Ce, useMemo: Ce, useReducer: Ce, useRef: Ce, useState: Ce, useDebugValue: Ce, useDeferredValue: Ce, useTransition: Ce, useMutableSource: Ce, useSyncExternalStore: Ce, useId: Ce, unstable_isNewReconciler: !1 }, qf = { readContext: et, useCallback: function(e, t) {
  return vt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: et, useEffect: Rl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ca(
    4194308,
    4,
    $c.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ca(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ca(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Bf.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ll, useDebugValue: bs, useDeferredValue: function(e) {
  return vt().memoizedState = e;
}, useTransition: function() {
  var e = Ll(!1), t = e[0];
  return e = Ff.bind(null, e[1]), vt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, a = vt();
  if (se) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), ye === null) throw Error(z(349));
    yn & 30 || bc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Rl(Mc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Dr(9, Pc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = vt(), t = ye.identifierPrefix;
  if (se) {
    var n = bt, r = zt;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Of++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Vf = {
  readContext: et,
  useCallback: Oc,
  useContext: et,
  useEffect: zs,
  useImperativeHandle: Dc,
  useInsertionEffect: Ac,
  useLayoutEffect: Ic,
  useMemo: Fc,
  useReducer: Uo,
  useRef: Rc,
  useState: function() {
    return Uo($r);
  },
  useDebugValue: bs,
  useDeferredValue: function(e) {
    var t = tt();
    return Bc(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = Uo($r)[0], t = tt().memoizedState;
    return [e, t];
  },
  useMutableSource: Ec,
  useSyncExternalStore: zc,
  useId: Uc,
  unstable_isNewReconciler: !1
}, Gf = { readContext: et, useCallback: Oc, useContext: et, useEffect: zs, useImperativeHandle: Dc, useInsertionEffect: Ac, useLayoutEffect: Ic, useMemo: Fc, useReducer: qo, useRef: Rc, useState: function() {
  return qo($r);
}, useDebugValue: bs, useDeferredValue: function(e) {
  var t = tt();
  return he === null ? t.memoizedState = e : Bc(t, he.memoizedState, e);
}, useTransition: function() {
  var e = qo($r)[0], t = tt().memoizedState;
  return [e, t];
}, useMutableSource: Ec, useSyncExternalStore: zc, useId: Uc, unstable_isNewReconciler: !1 };
function st(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ei(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = { isMounted: function(e) {
  return (e = e._reactInternals) ? kn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), a = en(e), o = Pt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Xt(e, o, a), t !== null && (dt(t, e, a, r), ka(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), a = en(e), o = Pt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xt(e, o, a), t !== null && (dt(t, e, a, r), ka(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Me(), r = en(e), a = Pt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Xt(e, a, r), t !== null && (dt(t, e, r, n), ka(t, e, r));
} };
function Al(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(a, o) : !0;
}
function Hc(e, t, n) {
  var r = !1, a = rn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = et(o) : (a = Oe(t) ? gn : Ee.current, r = t.contextTypes, o = (r = r != null) ? Gn(e, a) : rn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = co, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Il(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function zi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, js(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = et(o) : (o = Oe(t) ? gn : Ee.current, a.context = Gn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ei(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && co.enqueueReplaceState(a, a.state, null), Ga(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "", r = t;
    do
      n += yp(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Vo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Hf = typeof WeakMap == "function" ? WeakMap : Map;
function Wc(e, t, n) {
  n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ka || (Ka = !0, Oi = r), bi(e, t);
  }, n;
}
function Qc(e, t, n) {
  n = Pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      bi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    bi(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function $l(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = im.bind(null, e, t, n), t.then(e, e));
}
function Dl(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ol(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, Xt(n, t, 1))), n.lanes |= 1), e);
}
var Wf = At.ReactCurrentOwner, $e = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? Sc(t, null, n, r) : Wn(t, e.child, n, r);
}
function Fl(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Un(t, a), r = Ns(e, t, n, r, o, a), n = Es(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Rt(e, t, a)) : (se && n && ms(t), t.flags |= 1, Pe(e, t, r, a), t.child);
}
function Bl(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !$s(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Yc(e, t, o, r, a)) : (e = za(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return Rt(e, t, a);
  }
  return t.flags |= 1, e = tn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if ($e = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && ($e = !0);
    else return t.lanes = e.lanes, Rt(e, t, a);
  }
  return Pi(e, t, n, r, a);
}
function Kc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee($n, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee($n, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ee($n, Ue), Ue |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ee($n, Ue), Ue |= r;
  return Pe(e, t, a, n), t.child;
}
function Jc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Pi(e, t, n, r, a) {
  var o = Oe(n) ? gn : Ee.current;
  return o = Gn(t, o), Un(t, a), n = Ns(e, t, n, r, o, a), r = Es(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Rt(e, t, a)) : (se && r && ms(t), t.flags |= 1, Pe(e, t, n, a), t.child);
}
function Ul(e, t, n, r, a) {
  if (Oe(n)) {
    var o = !0;
    Fa(t);
  } else o = !1;
  if (Un(t, a), t.stateNode === null) _a(e, t), Hc(t, n, r), zi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = et(p) : (p = Oe(n) ? gn : Ee.current, p = Gn(t, p));
    var m = n.getDerivedStateFromProps, g = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== p) && Il(t, s, r, p), qt = !1;
    var y = t.memoizedState;
    s.state = y, Ga(t, r, s, a), l = t.memoizedState, u !== r || y !== l || De.current || qt ? (typeof m == "function" && (Ei(t, n, m, r), l = t.memoizedState), (u = qt || Al(t, n, u, r, y, l, p)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = p, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, _c(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : st(t.type, u), s.props = p, g = t.pendingProps, y = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = et(l) : (l = Oe(n) ? gn : Ee.current, l = Gn(t, l));
    var x = n.getDerivedStateFromProps;
    (m = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== g || y !== l) && Il(t, s, r, l), qt = !1, y = t.memoizedState, s.state = y, Ga(t, r, s, a);
    var S = t.memoizedState;
    u !== g || y !== S || De.current || qt ? (typeof x == "function" && (Ei(t, n, x, r), S = t.memoizedState), (p = qt || Al(t, n, p, r, y, S, l) || !1) ? (m || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = l, r = p) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Mi(e, t, n, r, o, a);
}
function Mi(e, t, n, r, a, o) {
  Jc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && El(t, n, !1), Rt(e, t, o);
  r = t.stateNode, Wf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Wn(t, e.child, null, o), t.child = Wn(t, null, u, o)) : Pe(e, t, u, o), t.memoizedState = r.state, a && El(t, n, !0), t.child;
}
function Xc(e) {
  var t = e.stateNode;
  t.pendingContext ? Nl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nl(e, t.context, !1), ks(e, t.containerInfo);
}
function ql(e, t, n, r, a) {
  return Hn(), gs(a), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zc(e, t, n) {
  var r = t.pendingProps, a = le.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ee(le, a & 1), e === null)
    return _i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = mo(s, r, 0, null), e = mn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Li(n), t.memoizedState = Ti, e) : Ps(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Qf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = tn(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = tn(u, o) : (o = mn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Li(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ti, r;
  }
  return o = e.child, e = o.sibling, r = tn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ps(e, t) {
  return t = mo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function pa(e, t, n, r) {
  return r !== null && gs(r), Wn(t, e.child, null, n), e = Ps(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Vo(Error(z(422))), pa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = mo({ mode: "visible", children: r.children }, a, 0, null), o = mn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Wn(t, e.child, null, s), t.child.memoizedState = Li(s), t.memoizedState = Ti, o);
  if (!(t.mode & 1)) return pa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Vo(o, r, void 0), pa(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, $e || u) {
    if (r = ye, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Lt(e, a), dt(r, e, a, -1));
    }
    return Is(), r = Vo(Error(z(421))), pa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, qe = Jt(a.nextSibling), Ve = t, se = !0, ut = null, e !== null && (Ke[Je++] = zt, Ke[Je++] = bt, Ke[Je++] = vn, zt = e.id, bt = e.overflow, vn = t), t = Ps(t, r.children), t.flags |= 4096, t);
}
function Vl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ni(e.return, t, n);
}
function Go(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function ed(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Pe(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Vl(e, n, t);
      else if (e.tag === 19) Vl(e, n, t);
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
  if (ee(le, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ha(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Go(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Ha(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Go(t, !0, n, null, o);
      break;
    case "together":
      Go(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function _a(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), xn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yf(e, t, n) {
  switch (t.tag) {
    case 3:
      Xc(t), Hn();
      break;
    case 5:
      Nc(t);
      break;
    case 1:
      Oe(t.type) && Fa(t);
      break;
    case 4:
      ks(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      ee(qa, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ee(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zc(e, t, n) : (ee(le, le.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
      ee(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ed(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ee(le, le.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Kc(e, t, n);
  }
  return Rt(e, t, n);
}
var td, Ri, nd, rd;
td = function(e, t) {
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
Ri = function() {
};
nd = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, pn(jt.current);
    var o = null;
    switch (n) {
      case "input":
        a = ni(e, a), r = ni(e, r), o = [];
        break;
      case "select":
        a = ce({}, a, { value: void 0 }), r = ce({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = oi(e, a), r = oi(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Da);
    }
    si(n, r);
    var s;
    n = null;
    for (p in a) if (!r.hasOwnProperty(p) && a.hasOwnProperty(p) && a[p] != null) if (p === "style") {
      var u = a[p];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Sr.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
    for (p in r) {
      var l = r[p];
      if (u = a != null ? a[p] : void 0, r.hasOwnProperty(p) && l !== u && (l != null || u != null)) if (p === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        p,
        n
      )), n = l;
      else p === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(p, l)) : p === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(p, "" + l) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Sr.hasOwnProperty(p) ? (l != null && p === "onScroll" && ne("scroll", e), o || u === l || (o = [])) : (o = o || []).push(p, l));
    }
    n && (o = o || []).push("style", n);
    var p = o;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
rd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
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
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Kf(e, t, n) {
  var r = t.pendingProps;
  switch (hs(t), t.tag) {
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
      return _e(t), null;
    case 1:
      return Oe(t.type) && Oa(), _e(t), null;
    case 3:
      return r = t.stateNode, Qn(), re(De), re(Ee), Cs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ca(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Ui(ut), ut = null))), Ri(e, t), _e(t), null;
    case 5:
      Ss(t);
      var a = pn(Ar.current);
      if (n = t.type, e !== null && t.stateNode != null) nd(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return _e(t), null;
        }
        if (e = pn(jt.current), ca(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[yt] = t, r[Lr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < dr.length; a++) ne(dr[a], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne(
                "error",
                r
              ), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Zs(r, o), ne("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ne("invalid", r);
              break;
            case "textarea":
              tl(r, o), ne("invalid", r);
          }
          si(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ua(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ua(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : Sr.hasOwnProperty(s) && u != null && s === "onScroll" && ne("scroll", r);
          }
          switch (n) {
            case "input":
              ta(r), el(r, o, !0);
              break;
            case "textarea":
              ta(r), nl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Da);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[yt] = t, e[Lr] = r, td(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = li(n, r), n) {
              case "dialog":
                ne("cancel", e), ne("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < dr.length; a++) ne(dr[a], e);
                a = r;
                break;
              case "source":
                ne("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                ne(
                  "error",
                  e
                ), ne("load", e), a = r;
                break;
              case "details":
                ne("toggle", e), a = r;
                break;
              case "input":
                Zs(e, r), a = ni(e, r), ne("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ce({}, r, { value: void 0 }), ne("invalid", e);
                break;
              case "textarea":
                tl(e, r), a = oi(e, r), ne("invalid", e);
                break;
              default:
                a = r;
            }
            si(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Ru(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Tu(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Cr(e, l) : typeof l == "number" && Cr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Sr.hasOwnProperty(o) ? l != null && o === "onScroll" && ne("scroll", e) : l != null && es(e, o, l, s));
            }
            switch (n) {
              case "input":
                ta(e), el(e, r, !1);
                break;
              case "textarea":
                ta(e), nl(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Dn(e, !!r.multiple, o, !1) : r.defaultValue != null && Dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Da);
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
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) rd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = pn(Ar.current), pn(jt.current), ca(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (o = r.nodeValue !== n) && (e = Ve, e !== null)) switch (e.tag) {
            case 3:
              ua(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ua(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (re(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (se && qe !== null && t.mode & 1 && !(t.flags & 128)) jc(), Hn(), t.flags |= 98560, o = !1;
        else if (o = ca(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[yt] = t;
          } else Hn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), o = !1;
        } else ut !== null && (Ui(ut), ut = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ge === 0 && (ge = 3) : Is())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return Qn(), Ri(e, t), e === null && Mr(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return xs(t.type._context), _e(t), null;
    case 17:
      return Oe(t.type) && Oa(), _e(t), null;
    case 19:
      if (re(le), o = t.memoizedState, o === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) ir(o, !1);
      else {
        if (ge !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ha(e), s !== null) {
            for (t.flags |= 128, ir(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ee(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && fe() > Kn && (t.flags |= 128, r = !0, ir(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ha(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ir(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !se) return _e(t), null;
        } else 2 * fe() - o.renderingStartTime > Kn && n !== 1073741824 && (t.flags |= 128, r = !0, ir(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = fe(), t.sibling = null, n = le.current, ee(le, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return As(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Jf(e, t) {
  switch (hs(t), t.tag) {
    case 1:
      return Oe(t.type) && Oa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Qn(), re(De), re(Ee), Cs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ss(t), null;
    case 13:
      if (re(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Hn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return re(le), null;
    case 4:
      return Qn(), null;
    case 10:
      return xs(t.type._context), null;
    case 22:
    case 23:
      return As(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fa = !1, Ne = !1, Xf = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function Ai(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Gl = !1;
function Zf(e, t) {
  if (yi = Aa, e = lc(), fs(e)) {
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
        var s = 0, u = -1, l = -1, p = 0, m = 0, g = e, y = null;
        t: for (; ; ) {
          for (var x; g !== n || a !== 0 && g.nodeType !== 3 || (u = s + a), g !== o || r !== 0 && g.nodeType !== 3 || (l = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
            y = g, g = x;
          for (; ; ) {
            if (g === e) break t;
            if (y === n && ++p === a && (u = s), y === o && ++m === r && (l = s), (x = g.nextSibling) !== null) break;
            g = y, y = g.parentNode;
          }
          g = x;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, Aa = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var w = S.memoizedProps, D = S.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : st(t.type, w), D);
            f.__reactInternalSnapshotBeforeUpdate = d;
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
    } catch (h) {
      de(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return S = Gl, Gl = !1, S;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Ai(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function po(e, t) {
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
function Ii(e) {
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
function ad(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ad(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[Lr], delete t[ki], delete t[Af], delete t[If])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function od(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hl(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || od(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Da));
  else if (r !== 4 && (e = e.child, e !== null)) for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), e = e.sibling;
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), e = e.sibling;
}
var we = null, lt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) id(e, t, n), n = n.sibling;
}
function id(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(ro, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || In(n, t);
    case 6:
      var r = we, a = lt;
      we = null, Bt(e, t, n), we = r, lt = a, we !== null && (lt ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (lt ? (e = we, n = n.stateNode, e.nodeType === 8 ? Do(e.parentNode, n) : e.nodeType === 1 && Do(e, n), zr(e)) : Do(we, n.stateNode));
      break;
    case 4:
      r = we, a = lt, we = n.stateNode.containerInfo, lt = !0, Bt(e, t, n), we = r, lt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ai(n, t, s), a = a.next;
        } while (a !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Ne && (In(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        de(n, t, u);
      }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, Bt(e, t, n), Ne = r) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function Wl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xf()), t.forEach(function(r) {
      var a = lm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            we = u.stateNode, lt = !1;
            break e;
          case 3:
            we = u.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            we = u.stateNode.containerInfo, lt = !0;
            break e;
        }
        u = u.return;
      }
      if (we === null) throw Error(z(160));
      id(o, s, a), we = null, lt = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (p) {
      de(a, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sd(t, e), t = t.sibling;
}
function sd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), gt(e), r & 4) {
        try {
          yr(3, e, e.return), po(3, e);
        } catch (w) {
          de(e, e.return, w);
        }
        try {
          yr(5, e, e.return);
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 1:
      it(t, e), gt(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (it(t, e), gt(e), r & 512 && n !== null && In(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Cr(a, "");
        } catch (w) {
          de(e, e.return, w);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && bu(a, o), li(u, s);
          var p = li(u, o);
          for (s = 0; s < l.length; s += 2) {
            var m = l[s], g = l[s + 1];
            m === "style" ? Ru(a, g) : m === "dangerouslySetInnerHTML" ? Tu(a, g) : m === "children" ? Cr(a, g) : es(a, m, g, p);
          }
          switch (u) {
            case "input":
              ri(a, o);
              break;
            case "textarea":
              Pu(a, o);
              break;
            case "select":
              var y = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var x = o.value;
              x != null ? Dn(a, !!o.multiple, x, !1) : y !== !!o.multiple && (o.defaultValue != null ? Dn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Dn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Lr] = o;
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 6:
      if (it(t, e), gt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 3:
      if (it(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        zr(t.containerInfo);
      } catch (w) {
        de(e, e.return, w);
      }
      break;
    case 4:
      it(t, e), gt(e);
      break;
    case 13:
      it(t, e), gt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ls = fe())), r & 4 && Wl(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (p = Ne) || m, it(t, e), Ne = p) : it(t, e), gt(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !m && e.mode & 1) for (L = e, m = e.child; m !== null; ) {
          for (g = L = m; L !== null; ) {
            switch (y = L, x = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                yr(4, y, y.return);
                break;
              case 1:
                In(y, y.return);
                var S = y.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (w) {
                    de(r, n, w);
                  }
                }
                break;
              case 5:
                In(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Yl(g);
                  continue;
                }
            }
            x !== null ? (x.return = y, L = x) : Yl(g);
          }
          m = m.sibling;
        }
        e: for (m = null, g = e; ; ) {
          if (g.tag === 5) {
            if (m === null) {
              m = g;
              try {
                a = g.stateNode, p ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, l = g.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Lu("display", s));
              } catch (w) {
                de(e, e.return, w);
              }
            }
          } else if (g.tag === 6) {
            if (m === null) try {
              g.stateNode.nodeValue = p ? "" : g.memoizedProps;
            } catch (w) {
              de(e, e.return, w);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            m === g && (m = null), g = g.return;
          }
          m === g && (m = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      it(t, e), gt(e), r & 4 && Wl(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (od(n)) {
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
          r.flags & 32 && (Cr(a, ""), r.flags &= -33);
          var o = Hl(e);
          Di(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Hl(e);
          $i(e, u, s);
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
function em(e, t, n) {
  L = e, ld(e);
}
function ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var a = L, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || fa;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || Ne;
        u = fa;
        var p = Ne;
        if (fa = s, (Ne = l) && !p) for (L = a; L !== null; ) s = L, l = s.child, s.tag === 22 && s.memoizedState !== null ? Kl(a) : l !== null ? (l.return = s, L = l) : Kl(a);
        for (; o !== null; ) L = o, ld(o), o = o.sibling;
        L = a, fa = u, Ne = p;
      }
      Ql(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, L = o) : Ql(e);
  }
}
function Ql(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ne || po(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Tl(t, o, r);
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
              Tl(t, s, n);
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
                var m = p.memoizedState;
                if (m !== null) {
                  var g = m.dehydrated;
                  g !== null && zr(g);
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
        Ne || t.flags & 512 && Ii(t);
      } catch (y) {
        de(t, t.return, y);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function Yl(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function Kl(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            po(4, t);
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
            Ii(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ii(t);
          } catch (l) {
            de(t, s, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, L = u;
      break;
    }
    L = t.return;
  }
}
var tm = Math.ceil, Ya = At.ReactCurrentDispatcher, Ms = At.ReactCurrentOwner, Ze = At.ReactCurrentBatchConfig, Y = 0, ye = null, me = null, je = 0, Ue = 0, $n = on(0), ge = 0, Or = null, xn = 0, fo = 0, Ts = 0, xr = null, Ie = null, Ls = 0, Kn = 1 / 0, Nt = null, Ka = !1, Oi = null, Zt = null, ma = !1, Wt = null, Ja = 0, wr = 0, Fi = null, Na = -1, Ea = 0;
function Me() {
  return Y & 6 ? fe() : Na !== -1 ? Na : Na = fe();
}
function en(e) {
  return e.mode & 1 ? Y & 2 && je !== 0 ? je & -je : Df.transition !== null ? (Ea === 0 && (Ea = Hu()), Ea) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zu(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < wr) throw wr = 0, Fi = null, Error(z(185));
  Gr(e, n, r), (!(Y & 2) || e !== ye) && (e === ye && (!(Y & 2) && (fo |= n), ge === 4 && Gt(e, je)), Fe(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (Kn = fe() + 500, lo && sn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  $p(e, t);
  var r = Ra(e, e === ye ? je : 0);
  if (r === 0) n !== null && ol(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ol(n), t === 1) e.tag === 0 ? $f(Jl.bind(null, e)) : yc(Jl.bind(null, e)), Lf(function() {
      !(Y & 6) && sn();
    }), n = null;
    else {
      switch (Wu(r)) {
        case 1:
          n = os;
          break;
        case 4:
          n = Vu;
          break;
        case 16:
          n = La;
          break;
        case 536870912:
          n = Gu;
          break;
        default:
          n = La;
      }
      n = gd(n, ud.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ud(e, t) {
  if (Na = -1, Ea = 0, Y & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = Ra(e, e === ye ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xa(e, r);
  else {
    t = r;
    var a = Y;
    Y |= 2;
    var o = dd();
    (ye !== e || je !== t) && (Nt = null, Kn = fe() + 500, fn(e, t));
    do
      try {
        am();
        break;
      } catch (u) {
        cd(e, u);
      }
    while (!0);
    ys(), Ya.current = o, Y = a, me !== null ? t = 0 : (ye = null, je = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (a = fi(e), a !== 0 && (r = a, t = Bi(e, a))), t === 1) throw n = Or, fn(e, 0), Gt(e, r), Fe(e, fe()), n;
    if (t === 6) Gt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !nm(a) && (t = Xa(e, r), t === 2 && (o = fi(e), o !== 0 && (r = o, t = Bi(e, o))), t === 1)) throw n = Or, fn(e, 0), Gt(e, r), Fe(e, fe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          un(e, Ie, Nt);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = Ls + 500 - fe(), 10 < t)) {
            if (Ra(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Me(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = ji(un.bind(null, e, Ie, Nt), t);
            break;
          }
          un(e, Ie, Nt);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ct(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ji(un.bind(null, e, Ie, Nt), r);
            break;
          }
          un(e, Ie, Nt);
          break;
        case 5:
          un(e, Ie, Nt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Fe(e, fe()), e.callbackNode === n ? ud.bind(null, e) : null;
}
function Bi(e, t) {
  var n = xr;
  return e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256), e = Xa(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && Ui(t)), e;
}
function Ui(e) {
  Ie === null ? Ie = e : Ie.push.apply(Ie, e);
}
function nm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!pt(o(), a)) return !1;
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
function Gt(e, t) {
  for (t &= ~Ts, t &= ~fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Jl(e) {
  if (Y & 6) throw Error(z(327));
  qn();
  var t = Ra(e, 0);
  if (!(t & 1)) return Fe(e, fe()), null;
  var n = Xa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fi(e);
    r !== 0 && (t = r, n = Bi(e, r));
  }
  if (n === 1) throw n = Or, fn(e, 0), Gt(e, t), Fe(e, fe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, Ie, Nt), Fe(e, fe()), null;
}
function Rs(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = n, Y === 0 && (Kn = fe() + 500, lo && sn());
  }
}
function wn(e) {
  Wt !== null && Wt.tag === 0 && !(Y & 6) && qn();
  var t = Y;
  Y |= 1;
  var n = Ze.transition, r = J;
  try {
    if (Ze.transition = null, J = 1, e) return e();
  } finally {
    J = r, Ze.transition = n, Y = t, !(Y & 6) && sn();
  }
}
function As() {
  Ue = $n.current, re($n);
}
function fn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Tf(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (hs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Oa();
        break;
      case 3:
        Qn(), re(De), re(Ee), Cs();
        break;
      case 5:
        Ss(r);
        break;
      case 4:
        Qn();
        break;
      case 13:
        re(le);
        break;
      case 19:
        re(le);
        break;
      case 10:
        xs(r.type._context);
        break;
      case 22:
      case 23:
        As();
    }
    n = n.return;
  }
  if (ye = e, me = e = tn(e.current, null), je = Ue = t, ge = 0, Or = null, Ts = fo = xn = 0, Ie = xr = null, dn !== null) {
    for (t = 0; t < dn.length; t++) if (n = dn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    dn = null;
  }
  return e;
}
function cd(e, t) {
  do {
    var n = me;
    try {
      if (ys(), Sa.current = Qa, Wa) {
        for (var r = ue.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Wa = !1;
      }
      if (yn = 0, ve = he = ue = null, vr = !1, Ir = 0, Ms.current = null, n === null || n.return === null) {
        ge = 1, Or = t, me = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = je, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var p = l, m = u, g = m.tag;
          if (!(m.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var y = m.alternate;
            y ? (m.updateQueue = y.updateQueue, m.memoizedState = y.memoizedState, m.lanes = y.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var x = Dl(s);
          if (x !== null) {
            x.flags &= -257, Ol(x, s, u, o, t), x.mode & 1 && $l(o, p, t), t = x, l = p;
            var S = t.updateQueue;
            if (S === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(l), t.updateQueue = w;
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              $l(o, p, t), Is();
              break e;
            }
            l = Error(z(426));
          }
        } else if (se && u.mode & 1) {
          var D = Dl(s);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Ol(D, s, u, o, t), gs(Yn(l, u));
            break e;
          }
        }
        o = l = Yn(l, u), ge !== 4 && (ge = 2), xr === null ? xr = [o] : xr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Wc(o, l, t);
              Ml(o, f);
              break e;
            case 1:
              u = l;
              var d = o.type, c = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Zt === null || !Zt.has(c)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = Qc(o, u, t);
                Ml(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      fd(n);
    } catch (v) {
      t = v, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dd() {
  var e = Ya.current;
  return Ya.current = Qa, e === null ? Qa : e;
}
function Is() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), ye === null || !(xn & 268435455) && !(fo & 268435455) || Gt(ye, je);
}
function Xa(e, t) {
  var n = Y;
  Y |= 2;
  var r = dd();
  (ye !== e || je !== t) && (Nt = null, fn(e, t));
  do
    try {
      rm();
      break;
    } catch (a) {
      cd(e, a);
    }
  while (!0);
  if (ys(), Y = n, Ya.current = r, me !== null) throw Error(z(261));
  return ye = null, je = 0, ge;
}
function rm() {
  for (; me !== null; ) pd(me);
}
function am() {
  for (; me !== null && !zp(); ) pd(me);
}
function pd(e) {
  var t = hd(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? fd(e) : me = t, Ms.current = null;
}
function fd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Jf(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, me = null;
        return;
      }
    } else if (n = Kf(n, t, Ue), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function un(e, t, n) {
  var r = J, a = Ze.transition;
  try {
    Ze.transition = null, J = 1, om(e, t, n, r);
  } finally {
    Ze.transition = a, J = r;
  }
  return null;
}
function om(e, t, n, r) {
  do
    qn();
  while (Wt !== null);
  if (Y & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Dp(e, o), e === ye && (me = ye = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ma || (ma = !0, gd(La, function() {
    return qn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ze.transition, Ze.transition = null;
    var s = J;
    J = 1;
    var u = Y;
    Y |= 4, Ms.current = null, Zf(e, n), sd(n, e), _f(xi), Aa = !!yi, xi = yi = null, e.current = n, em(n), bp(), Y = u, J = s, Ze.transition = o;
  } else e.current = n;
  if (ma && (ma = !1, Wt = e, Ja = a), o = e.pendingLanes, o === 0 && (Zt = null), Tp(n.stateNode), Fe(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ka) throw Ka = !1, e = Oi, Oi = null, e;
  return Ja & 1 && e.tag !== 0 && qn(), o = e.pendingLanes, o & 1 ? e === Fi ? wr++ : (wr = 0, Fi = e) : wr = 0, sn(), null;
}
function qn() {
  if (Wt !== null) {
    var e = Wu(Ja), t = Ze.transition, n = J;
    try {
      if (Ze.transition = null, J = 16 > e ? 16 : e, Wt === null) var r = !1;
      else {
        if (e = Wt, Wt = null, Ja = 0, Y & 6) throw Error(z(331));
        var a = Y;
        for (Y |= 4, L = e.current; L !== null; ) {
          var o = L, s = o.child;
          if (L.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var p = u[l];
                for (L = p; L !== null; ) {
                  var m = L;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, m, o);
                  }
                  var g = m.child;
                  if (g !== null) g.return = m, L = g;
                  else for (; L !== null; ) {
                    m = L;
                    var y = m.sibling, x = m.return;
                    if (ad(m), m === p) {
                      L = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = x, L = y;
                      break;
                    }
                    L = x;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var D = w.sibling;
                    w.sibling = null, w = D;
                  } while (w !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, L = s;
          else e: for (; L !== null; ) {
            if (o = L, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                yr(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, L = f;
              break e;
            }
            L = o.return;
          }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          s = L;
          var c = s.child;
          if (s.subtreeFlags & 2064 && c !== null) c.return = s, L = c;
          else e: for (s = d; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  po(9, u);
              }
            } catch (v) {
              de(u, u.return, v);
            }
            if (u === s) {
              L = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, L = h;
              break e;
            }
            L = u.return;
          }
        }
        if (Y = a, sn(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(ro, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      J = n, Ze.transition = t;
    }
  }
  return !1;
}
function Xl(e, t, n) {
  t = Yn(n, t), t = Wc(e, t, 1), e = Xt(e, t, 1), t = Me(), e !== null && (Gr(e, 1, t), Fe(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Xl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = Yn(n, e), e = Qc(t, e, 1), t = Xt(t, e, 1), e = Me(), t !== null && (Gr(t, 1, e), Fe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, ye === e && (je & n) === n && (ge === 4 || ge === 3 && (je & 130023424) === je && 500 > fe() - Ls ? fn(e, 0) : Ts |= n), Fe(e, t);
}
function md(e, t) {
  t === 0 && (e.mode & 1 ? (t = aa, aa <<= 1, !(aa & 130023424) && (aa = 4194304)) : t = 1);
  var n = Me();
  e = Lt(e, t), e !== null && (Gr(e, t, n), Fe(e, n));
}
function sm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), md(e, n);
}
function lm(e, t) {
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
  r !== null && r.delete(t), md(e, n);
}
var hd;
hd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || De.current) $e = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return $e = !1, Yf(e, t, n);
    $e = !!(e.flags & 131072);
  }
  else $e = !1, se && t.flags & 1048576 && xc(t, Ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      _a(e, t), e = t.pendingProps;
      var a = Gn(t, Ee.current);
      Un(t, n), a = Ns(null, t, r, e, a, n);
      var o = Es();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (o = !0, Fa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, js(t), a.updater = co, t.stateNode = a, a._reactInternals = t, zi(t, r, e, n), t = Mi(null, t, r, !0, o, n)) : (t.tag = 0, se && o && ms(t), Pe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (_a(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = cm(r), e = st(r, e), a) {
          case 0:
            t = Pi(null, t, r, e, n);
            break e;
          case 1:
            t = Ul(null, t, r, e, n);
            break e;
          case 11:
            t = Fl(null, t, r, e, n);
            break e;
          case 14:
            t = Bl(null, t, r, st(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Pi(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Ul(e, t, r, a, n);
    case 3:
      e: {
        if (Xc(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, _c(e, t), Ga(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Yn(Error(z(423)), t), t = ql(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Yn(Error(z(424)), t), t = ql(e, t, r, n, a);
          break e;
        } else for (qe = Jt(t.stateNode.containerInfo.firstChild), Ve = t, se = !0, ut = null, n = Sc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Hn(), r === a) {
            t = Rt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Nc(t), e === null && _i(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, wi(r, a) ? s = null : o !== null && wi(r, o) && (t.flags |= 32), Jc(e, t), Pe(e, t, s, n), t.child;
    case 6:
      return e === null && _i(t), null;
    case 13:
      return Zc(e, t, n);
    case 4:
      return ks(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Fl(e, t, r, a, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, ee(qa, r._currentValue), r._currentValue = s, o !== null) if (pt(o.value, s)) {
          if (o.children === a.children && !De.current) {
            t = Rt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = Pt(-1, n & -n), l.tag = 2;
                  var p = o.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var m = p.pending;
                    m === null ? l.next = l : (l.next = m.next, m.next = l), p.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ni(
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
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Ni(s, n, t), s = o.sibling;
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
        Pe(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Un(t, n), a = et(a), r = r(a), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = st(r, t.pendingProps), a = st(r.type, a), Bl(e, t, r, a, n);
    case 15:
      return Yc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), _a(e, t), t.tag = 1, Oe(r) ? (e = !0, Fa(t)) : e = !1, Un(t, n), Hc(t, r, a), zi(t, r, a, n), Mi(null, t, r, !0, e, n);
    case 19:
      return ed(e, t, n);
    case 22:
      return Kc(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function gd(e, t) {
  return qu(e, t);
}
function um(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Xe(e, t, n, r) {
  return new um(e, t, n, r);
}
function $s(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function cm(e) {
  if (typeof e == "function") return $s(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ns) return 11;
    if (e === rs) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function za(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") $s(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case En:
      return mn(n.children, a, o, t);
    case ts:
      s = 8, a |= 8;
      break;
    case Xo:
      return e = Xe(12, n, t, a | 2), e.elementType = Xo, e.lanes = o, e;
    case Zo:
      return e = Xe(13, n, t, a), e.elementType = Zo, e.lanes = o, e;
    case ei:
      return e = Xe(19, n, t, a), e.elementType = ei, e.lanes = o, e;
    case Nu:
      return mo(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cu:
          s = 10;
          break e;
        case _u:
          s = 9;
          break e;
        case ns:
          s = 11;
          break e;
        case rs:
          s = 14;
          break e;
        case Ut:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = Xe(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function mn(e, t, n, r) {
  return e = Xe(7, e, r, t), e.lanes = n, e;
}
function mo(e, t, n, r) {
  return e = Xe(22, e, r, t), e.elementType = Nu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ho(e, t, n) {
  return e = Xe(6, e, null, t), e.lanes = n, e;
}
function Wo(e, t, n) {
  return t = Xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function dm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Eo(0), this.expirationTimes = Eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Ds(e, t, n, r, a, o, s, u, l) {
  return e = new dm(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, js(o), e;
}
function pm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Nn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vd(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
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
    if (Oe(n)) return vc(e, n, t);
  }
  return t;
}
function yd(e, t, n, r, a, o, s, u, l) {
  return e = Ds(n, r, !0, e, a, o, s, u, l), e.context = vd(null), n = e.current, r = Me(), a = en(n), o = Pt(r, a), o.callback = t ?? null, Xt(n, o, a), e.current.lanes = a, Gr(e, a, r), Fe(e, r), e;
}
function ho(e, t, n, r) {
  var a = t.current, o = Me(), s = en(a);
  return n = vd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xt(a, t, s), e !== null && (dt(e, a, s, o), ka(e, a, s)), s;
}
function Za(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zl(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Os(e, t) {
  Zl(e, t), (e = e.alternate) && Zl(e, t);
}
function fm() {
  return null;
}
var xd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fs(e) {
  this._internalRoot = e;
}
go.prototype.render = Fs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  ho(e, t, null, null);
};
go.prototype.unmount = Fs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function() {
      ho(null, e, null, null);
    }), t[Tt] = null;
  }
};
function go(e) {
  this._internalRoot = e;
}
go.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ku();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++) ;
    Vt.splice(n, 0, e), n === 0 && Xu(e);
  }
};
function Bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function eu() {
}
function mm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = Za(s);
        o.call(p);
      };
    }
    var s = yd(t, r, e, 0, null, !1, !1, "", eu);
    return e._reactRootContainer = s, e[Tt] = s.current, Mr(e.nodeType === 8 ? e.parentNode : e), wn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var p = Za(l);
      u.call(p);
    };
  }
  var l = Ds(e, 0, !1, null, null, !1, !1, "", eu);
  return e._reactRootContainer = l, e[Tt] = l.current, Mr(e.nodeType === 8 ? e.parentNode : e), wn(function() {
    ho(t, l, n, r);
  }), l;
}
function yo(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = Za(s);
        u.call(l);
      };
    }
    ho(t, s, e, a);
  } else s = mm(n, t, e, a, r);
  return Za(s);
}
Qu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 && (is(t, n | 1), Fe(t, fe()), !(Y & 6) && (Kn = fe() + 500, sn()));
      }
      break;
    case 13:
      wn(function() {
        var r = Lt(e, 1);
        if (r !== null) {
          var a = Me();
          dt(r, e, 1, a);
        }
      }), Os(e, 1);
  }
};
ss = function(e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = Me();
      dt(t, e, 134217728, n);
    }
    Os(e, 134217728);
  }
};
Yu = function(e) {
  if (e.tag === 13) {
    var t = en(e), n = Lt(e, t);
    if (n !== null) {
      var r = Me();
      dt(n, e, t, r);
    }
    Os(e, t);
  }
};
Ku = function() {
  return J;
};
Ju = function(e, t) {
  var n = J;
  try {
    return J = e, t();
  } finally {
    J = n;
  }
};
ci = function(e, t, n) {
  switch (t) {
    case "input":
      if (ri(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = so(r);
            if (!a) throw Error(z(90));
            zu(r), ri(r, a);
          }
        }
      }
      break;
    case "textarea":
      Pu(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
$u = Rs;
Du = wn;
var hm = { usingClientEntryPoint: !1, Events: [Wr, Mn, so, Au, Iu, Rs] }, sr = { findFiberByHostInstance: cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gm = { bundleType: sr.bundleType, version: sr.version, rendererPackageName: sr.rendererPackageName, rendererConfig: sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: At.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sr.findFiberByHostInstance || fm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ha.isDisabled && ha.supportsFiber) try {
    ro = ha.inject(gm), wt = ha;
  } catch {
  }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bs(t)) throw Error(z(200));
  return pm(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!Bs(e)) throw Error(z(299));
  var n = !1, r = "", a = xd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ds(e, 1, !1, null, null, n, !1, r, a), e[Tt] = t.current, Mr(e.nodeType === 8 ? e.parentNode : e), new Fs(t);
};
He.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Bu(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return wn(e);
};
He.hydrate = function(e, t, n) {
  if (!vo(t)) throw Error(z(200));
  return yo(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!Bs(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = xd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = yd(t, null, e, 1, n ?? null, a, !1, o, s), e[Tt] = t.current, Mr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new go(t);
};
He.render = function(e, t, n) {
  if (!vo(t)) throw Error(z(200));
  return yo(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!vo(e)) throw Error(z(40));
  return e._reactRootContainer ? (wn(function() {
    yo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = Rs;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!vo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return yo(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function wd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wd);
    } catch (e) {
      console.error(e);
    }
}
wd(), wu.exports = He;
var vm = wu.exports, jd, tu = vm;
jd = tu.createRoot, tu.hydrateRoot;
const nu = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, ym = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, xm = [
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
], wm = [
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
function Fr(e) {
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
function jm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const hn = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(hn() + e, t);
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
const I = {
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
  previewUrl: (e, t = !0, n = 0, r = "final") => `${hn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
  previewUrlSinBordes: (e) => `/api/assets/${e}/preview.png`,
  optimize: (e, t = !1) => q("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => q(`/api/job/${e}`),
  result: () => q("/api/result"),
  version: () => q("/api/version"),
  checkVersion: () => q("/api/version/check", { method: "POST" }),
  updateVersion: () => q(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => q("/api/version/open", { method: "POST" }),
  estimate: () => q("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0, o = "final") => `${hn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${o}` : ""}`,
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
  iconUrl: () => `${hn()}/api/icon.png?v=${Date.now()}`,
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
async function km(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((m, g) => {
      a.onload = () => m(), a.onerror = () => g(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (m) => l.toBlob((g) => m(g), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function kd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await km(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const qi = [
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
function Vi(e) {
  return qi.find((t) => t.key === e) ?? qi[0];
}
function ru(e) {
  const t = Vi(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Sd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Vi(e);
  } catch {
  }
  return Vi("wiwi");
}
const Cd = {
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
  "Offset / borde": "Offset / border",
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
  "limpiar contorno": "clean outline",
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
}, _d = j.createContext("es");
function Sm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(_d.Provider, { value: e, children: t });
}
function Us() {
  return j.useContext(_d);
}
function Qe() {
  const e = Us();
  return (t, n) => {
    let r = e === "en" ? Cd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function Cm(e, t, n) {
  return e === "en" ? Cd[t] ?? t : t;
}
function X({ size: e = 18, children: t }) {
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
function Nd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Br({ size: e }) {
  return /* @__PURE__ */ i.jsx(X, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Ur({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function eo({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Ed({ size: e }) {
  return /* @__PURE__ */ i.jsx(X, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function xo({ size: e }) {
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
function au({ size: e }) {
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
function zm({ size: e }) {
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
function bm({ size: e }) {
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
function Pm({ size: e }) {
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
function Mm({ size: e }) {
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
function zd({ size: e }) {
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
function qr({ size: e }) {
  return /* @__PURE__ */ i.jsx(X, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function bd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Pd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function jr({ size: e }) {
  return /* @__PURE__ */ i.jsx(X, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function to({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function $m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Md({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ i.jsx(X, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Td({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Om({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Fm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Bm({ size: e }) {
  return /* @__PURE__ */ i.jsx(X, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Um({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "4.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M9.4 9.2a3.4 3.4 0 0 1 2.2-1" })
  ] });
}
function qm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function Vm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(X, { size: e, children: [
    /* @__PURE__ */ i.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function Gm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Qe(), o = j.useMemo(() => t.map((_) => _.id), [t]), [s, u] = j.useState(/* @__PURE__ */ new Set()), [l, p] = j.useState("escala"), [m, g] = j.useState(100), [y, x] = j.useState(50), [S, w] = j.useState("mayor"), [D, f] = j.useState("");
  j.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), f(""));
  }, [e, o.join(",")]);
  const d = (_) => !s.has(_), c = (_) => u((N) => {
    const B = new Set(N);
    return B.has(_) ? B.delete(_) : B.add(_), B;
  }), h = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), v = (_) => {
    const N = _.w_mm_base || 0, B = _.h_mm_base || 0;
    return S === "mayor" ? Math.max(N, B) : S === "menor" ? Math.min(N, B) : 2 * Math.sqrt(Math.max(0, N * B) / Math.PI);
  }, k = (_) => {
    if (l === "tamano") {
      const N = v(_);
      if (N > 0) return Math.min(10, Math.max(0.05, y / N));
    }
    return Math.min(10, Math.max(0.05, m / 100));
  }, C = (_) => {
    const N = k(_);
    return { w: (_.w_mm_base || 0) * N, h: (_.h_mm_base || 0) * N };
  }, b = async () => {
    let _ = 0;
    for (const N of t) {
      if (!d(N.id)) continue;
      const B = k(N) * 100;
      await I.patchAsset(N.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(B * 10) / 10))
      }), _ += 1;
    }
    await r(), f(a("{n} elementos ajustados ", { n: _ })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((_) => {
          const N = C(_), B = Math.min(98, N.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${_.id}`,
              style: {
                width: `${B}%`,
                maxWidth: `${B}%`,
                aspectRatio: `${N.w || 1} / ${N.h || 1}`,
                opacity: d(_.id) ? 1 : 0.3
              },
              title: `${_.name} · ${N.w.toFixed(1)}×${N.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(_.id), alt: "" })
            },
            _.id
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
              onClick: h,
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((_) => {
          const N = C(_);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${_.id}`,
              className: d(_.id) ? "sel" : "",
              onClick: () => c(_.id),
              title: _.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(_.id), alt: _.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: _.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(_.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  N.w.toFixed(1),
                  "×",
                  N.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            _.id
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
                value: String(m),
                onChange: (_) => g(Number(_.target.value))
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
                  value: String(y),
                  onChange: (_) => x(Number(_.target.value))
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
                value: S,
                onChange: (_) => w(_.target.value),
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
        D && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: D })
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
          onClick: b,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function Hm({
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
  const m = Qe(), [g, y] = j.useState(() => Fr(e));
  j.useEffect(() => y(Fr(e)), [e]);
  const x = j.useRef(null), S = jm(g), [w, D] = j.useState(""), f = j.useRef(!1), [d, c] = j.useState(""), h = j.useRef(!1), [v, k] = j.useState({ tamano: !1, borde: !1, mini: !1 }), C = j.useRef(null);
  j.useEffect(() => {
    var T;
    p && (k({ tamano: !0, borde: !0, mini: !0 }), (T = C.current) == null || T.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [p]), j.useEffect(() => {
    f.current || D(S.w > 0 ? S.w.toFixed(1) : ""), h.current || c(S.h > 0 ? S.h.toFixed(1) : "");
  }, [S.w, S.h]);
  const b = Number.isFinite(g.w_mm_base) ? g.w_mm_base : 0, _ = Number.isFinite(g.h_mm_base) ? g.h_mm_base : 0, N = (T) => {
    D(T);
    const oe = Number(T.replace(",", "."));
    !Number.isFinite(oe) || oe <= 0 || b <= 0 || V({ scale_pct: oe / b * 100 });
  }, B = (T) => {
    c(T);
    const oe = Number(T.replace(",", "."));
    !Number.isFinite(oe) || oe <= 0 || _ <= 0 || V({ scale_pct: oe / _ * 100 });
  }, ae = (t == null ? void 0 : t.placements.filter((T) => T.asset_id === e.id && T.mini).length) ?? 0, H = (t == null ? void 0 : t.placements.filter((T) => T.asset_id === e.id && !T.mini).length) ?? 0, V = async (T) => {
    a == null || a(), "copies" in T && (T.copies = Math.max(0, T.copies ?? 0)), y((oe) => ({ ...oe, ...T }));
    try {
      await I.patchAsset(e.id, T);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: C,
      "data-asset": e.id,
      className: `asset-card${p ? " destacada" : ""}`,
      "data-testid": "asset-card",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: I.previewUrl(e.id, u, s, l),
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
                title: m("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => I.assetsFolder().then((T) => I.abrirCarpeta(T.path)).catch(() => I.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ i.jsx(Br, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: m("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var T;
                  return (T = x.current) == null ? void 0 : T.click();
                },
                children: /* @__PURE__ */ i.jsx(_m, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: x,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (T) => {
                  var ze;
                  const oe = (ze = T.target.files) == null ? void 0 : ze[0];
                  if (T.target.value = "", !!oe)
                    try {
                      const { blob: P, name: O } = await kd(oe);
                      await I.reemplazar(e.id, P, O), await n();
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
                title: m("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ i.jsx(Nm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                title: g.bg_removed ? m("Restaurar fondo original") : m("Quitar fondo (inteligente)"),
                onClick: () => (g.bg_removed ? I.restoreBackground(e.id) : I.removeBackground(e.id)).then(n),
                children: g.bg_removed ? /* @__PURE__ */ i.jsx(Em, { size: 16 }) : /* @__PURE__ */ i.jsx(eo, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: m("Eliminar imagen"),
                onClick: () => I.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ i.jsx(Ed, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${g.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": m("Incluir como mini (rellena huecos)"),
                onClick: () => V({ mini_enabled: !g.mini_enabled }),
                children: [
                  /* @__PURE__ */ i.jsx(qr, { size: 15 }),
                  " ",
                  m("Mini")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${g.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": m("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => k((T) => ({ ...T, borde: !T.borde })),
                children: [
                  /* @__PURE__ */ i.jsx(xo, { size: 15 }),
                  " ",
                  m("Borde")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: m("Copias"), children: [
              /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => V({ copies: g.copies - 1 }), children: "−" }),
              /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: g.copies }),
              /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => V({ copies: g.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => k((T) => ({ ...T, tamano: !T.tamano })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${v.tamano ? "open" : ""}`, children: "›" }),
                  m("Tamaño"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    S.w.toFixed(1),
                    "×",
                    S.h.toFixed(1),
                    " · ",
                    Math.round(g.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            v.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: m("Escala del elemento (100% = tamaño natural)"), children: m("Escala") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: g.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (T) => V({ scale_pct: Number(T.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
                  Math.round(g.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: m("Tamaño exacto en milímetros (mantiene la proporción)"), children: m("Ancho") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: w,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      f.current = !0, h.current = !1;
                    },
                    onBlur: () => {
                      f.current = !1, D(S.w > 0 ? S.w.toFixed(1) : "");
                    },
                    onChange: (T) => N(T.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" }),
                /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ i.jsx("span", { title: m("Tamaño exacto en milímetros (mantiene la proporción)"), children: m("Alto") }),
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
                      h.current = !0, f.current = !1;
                    },
                    onBlur: () => {
                      h.current = !1, c(S.h > 0 ? S.h.toFixed(1) : "");
                    },
                    onChange: (T) => B(T.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" })
              ] })
            ] })
          ] }),
          (g.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-borde-${e.id}`,
                onClick: () => k((T) => ({ ...T, borde: !T.borde })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${v.borde ? "open" : ""}`, children: "›" }),
                  m("Borde adicional"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    g.offset_mm.toFixed(1),
                    " mm",
                    g.offset_mm <= 0 ? ` · ${m("global")}` : ""
                  ] })
                ]
              }
            ),
            v.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => V({ offset_mm: Math.max(
                      0,
                      Math.round((g.offset_mm - 0.5) * 2) / 2
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
                    value: g.offset_mm,
                    onChange: (T) => V({ offset_mm: Number(T.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => V({ offset_mm: Math.min(
                      20,
                      Math.round((g.offset_mm + 0.5) * 2) / 2
                    ) }),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", m("Extender")],
                  ["blanco", m("Blanco")],
                  ["color", m("Color")],
                  ["unir_recto", m("Unir recto")],
                  ["unir_curvo", m("Unir curvo")]
                ].map(([T, oe]) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: `seg ${(g.offset_modo || "") === T ? "on" : ""}`,
                    "data-testid": `offset-modo-${T}-${e.id}`,
                    onClick: () => V({ offset_modo: T }),
                    children: oe
                  },
                  T
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: g.offset_color || "#ffffff",
                    title: m("Color del borde"),
                    onChange: (T) => V({
                      offset_color: T.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          g.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => k((T) => ({ ...T, mini: !T.mini })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${v.mini ? "open" : ""}`, children: "›" }),
                  m("Opciones de mini"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    g.mini_quota,
                    " · ",
                    ae
                  ] })
                ]
              }
            ),
            v.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ i.jsx("span", { title: m("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: m("Cuota") }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => V({ mini_quota: Math.max(
                    1,
                    Math.round((g.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                g.mini_quota
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => V({ mini_quota: Math.min(
                    100,
                    Math.round((g.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: m(" {n} minis", { n: ae }) })
            ] }) })
          ] }),
          H > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: m("Colocadas: {n}", { n: H }) }),
          g.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ i.jsx(Md, { size: 14 }),
            " ",
            g.warnings[0],
            " ",
            g.warnings.some((T) => /blob|trozos sueltos/i.test(T)) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: m("limpiar contorno")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Wm({
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
  destacado: m = ""
}) {
  const g = Qe(), y = j.useRef(null), [x, S] = j.useState(!1), [w, D] = j.useState(null), f = async (c) => {
    const h = [];
    for (const v of Array.from(c))
      try {
        const { blob: k, name: C } = await kd(v);
        h.push(Fr(await I.upload(k, C)));
      } catch (k) {
        console.error(k);
      }
    await r(), h.length > 1 && D(h);
  }, d = n.usar_minis;
  return e.some((c) => c.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: g("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${x ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = y.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), S(!0);
        },
        onDragLeave: () => S(!1),
        onDrop: (c) => {
          c.preventDefault(), S(!1), c.dataTransfer.files.length && f(c.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            g("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: y,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (c) => {
                c.target.files && f(c.target.files), c.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((c) => /* @__PURE__ */ i.jsx(
      Hm,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        contornoModo: p,
        destacado: m === c.id,
        bordeGlobal: n.offset_activo === !0
      },
      c.id
    )) }),
    !d && /* @__PURE__ */ i.jsx("div", { className: "hint", children: g("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => I.clearAssets().then(r),
        children: g("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Gm,
      {
        open: !!w,
        assets: w ?? [],
        onClose: () => D(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const xt = (e) => (globalThis.__crycatAssets || "") + e;
function Ld({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Qe(), [o, s] = j.useState(null), [u, l] = j.useState("");
  j.useEffect(() => {
    e && p(r || "");
  }, [e]);
  const p = async (m = "") => {
    l("");
    try {
      s(await I.fsList(m));
    } catch (g) {
      l(g.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (m) => m.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => p(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((m) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => p(`${o.path}/${m}`.replace("//", "/")),
          children: m
        },
        m
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
function Qm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Qe(), [u, l] = j.useState("resumen");
  if (!e) return null;
  const p = t.length > 0 && t.every((g) => g.startsWith("data:")), m = [
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
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((g) => /* @__PURE__ */ i.jsx("li", { title: g, children: g.split(/[\\/]/).pop() }, g)) }),
      !p && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      p && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      p ? t.map((g, y) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${y}`,
          href: g,
          download: `crycat_pagina-${String(y + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Br, { size: 15 }),
            " ",
            s("Descargar página {n}", { n: y + 1 })
          ]
        },
        y
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx(Br, { size: 15 }),
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
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: m.map((g, y) => /* @__PURE__ */ i.jsx("li", { children: g }, y)) }),
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
function Ym({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: p, onFinEdicion: m, onDeshacer: g, onRehacer: y, puedeDeshacer: x, puedeRehacer: S }) {
  const w = Qe(), D = Us(), [f, d] = j.useState(1), [c, h] = j.useState({ x: 0, y: 0 }), [v, k] = j.useState(null), [C, b] = j.useState(() => Date.now()), [_, N] = j.useState(null), [B, ae] = j.useState(null), [H, V] = j.useState(!1), [T, oe] = j.useState(2), [ze, P] = j.useState(0);
  j.useEffect(() => {
    if (!r.verBordes) return;
    const E = window.setInterval(
      () => P((R) => (R + 3) % 12),
      260
    );
    return () => window.clearInterval(E);
  }, [r.verBordes]);
  const [O, F] = j.useState([]), [W, K] = j.useState([]), [ft, Se] = j.useState(""), [Re, xe] = j.useState(/* @__PURE__ */ new Set()), $ = j.useRef(null), pe = j.useRef(null), Ae = D === "en" ? wm : xm, It = j.useMemo(
    () => Ae[Math.floor(Math.random() * Ae.length)],
    [Ae]
  ), kt = r.saveName.trim() || It;
  j.useEffect(() => {
    b(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const nt = (t == null ? void 0 : t.pages) ?? 0, Yr = !!t && t.efficiency < 0.8;
  j.useEffect(() => {
    const E = $.current;
    if (!E) return;
    const R = (M) => {
      M.preventDefault(), M.stopPropagation();
      const Q = E.getBoundingClientRect(), Z = M.clientX - Q.left, be = M.clientY - Q.top;
      d((Ye) => {
        const te = M.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, Ye * te)), ht = ie / Ye;
        return h((Ft) => ({ x: Z - (Z - Ft.x) * ht, y: be - (be - Ft.y) * ht })), ie;
      });
    };
    return E.addEventListener("wheel", R, { passive: !1 }), () => E.removeEventListener("wheel", R);
  }, []);
  const A = (E) => {
    if (E.target.closest(".item-box")) return;
    pe.current = { x: E.clientX - c.x, y: E.clientY - c.y };
    const R = (Q) => {
      pe.current && h({ x: Q.clientX - pe.current.x, y: Q.clientY - pe.current.y });
    }, M = () => {
      pe.current = null, window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", M);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", M);
  };
  j.useEffect(() => {
    const E = (R) => {
      R.target.tagName !== "INPUT" && (R.key === "+" || R.key === "=" ? d((M) => Math.min(12, M * 1.08)) : R.key === "-" || R.key === "_" ? d((M) => Math.max(0.05, M / 1.08)) : R.key === "0" ? (d(1), h({ x: 0, y: 0 })) : R.key === "Escape" ? k(null) : R.key === "g" ? a((M) => ({ ...M, guidesVisible: !M.guidesVisible })) : R.key === "t" && a((M) => M.eyeFosforito ? { ...M, eyeFosforito: !1, eyeTransparent: !1 } : M.eyeTransparent ? { ...M, eyeTransparent: !1, eyeFosforito: !0 } : { ...M, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [a]);
  const U = j.useRef(null), Be = j.useRef(null), rt = (E, R) => {
    E.preventDefault(), E.stopPropagation();
    const M = E.currentTarget.closest(".page-box");
    if (!M || !t) return;
    const Q = t.page_mm[0] / M.clientWidth, Z = {
      uid: R.uid,
      startX: E.clientX,
      startY: E.clientY,
      origX: R.x,
      origY: R.y,
      mmPerPx: Q
    };
    U.current = Z, Be.current = { x: R.x, y: R.y }, N(Z), ae({ uid: R.uid, x: R.x, y: R.y });
    const be = (te) => {
      const ie = U.current;
      if (!ie) return;
      const ht = (te.clientX - ie.startX) * ie.mmPerPx / f, Ft = (te.clientY - ie.startY) * ie.mmPerPx / f;
      Be.current = { x: ie.origX + ht, y: ie.origY + Ft }, ae({ uid: ie.uid, x: ie.origX + ht, y: ie.origY + Ft });
    }, Ye = (te) => {
      window.removeEventListener("mousemove", be), window.removeEventListener("mouseup", Ye);
      const ie = U.current;
      if (U.current = null, !ie) return;
      const ht = (te.clientX - ie.startX) * ie.mmPerPx / f, Ft = (te.clientY - ie.startY) * ie.mmPerPx / f;
      N(null), ae(null), !(Math.abs(ht) < 0.5 && Math.abs(Ft) < 0.5) && Kr(ie.uid, ie.origX + ht, ie.origY + Ft);
    };
    window.addEventListener("mousemove", be), window.addEventListener("mouseup", Ye);
  }, Kr = async (E, R, M) => {
    try {
      const Q = await I.move(E, R, M);
      Q.job ? u(Q.job) : await s();
    } catch {
      await s();
    } finally {
      b(Date.now());
    }
  }, $t = async (E) => {
    const R = await I.unpin(E);
    u(R);
  }, Id = !1;
  j.useEffect(() => {
    {
      F([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, C]), j.useEffect(() => {
    if (!p) {
      K([]), Se(""), xe(/* @__PURE__ */ new Set());
      return;
    }
    I.blobs(p.id).then((E) => {
      K(E.blobs), oe(E.union_mm ?? 2), Se(E.preview_png), xe(new Set(E.blobs.filter((R) => !R.principal).map((R) => R.id)));
    }).catch(() => {
      K([]), Se("");
    });
  }, [p]);
  const qs = async () => {
    if (p)
      try {
        await I.limpiarContorno(p.id, Array.from(Re));
      } finally {
        await (m == null ? void 0 : m());
      }
  }, $d = (E) => {
    xe((R) => {
      const M = new Set(R);
      return M.has(E) ? M.delete(E) : M.add(E), M;
    });
  }, [mt, Dt] = j.useState(null), Dd = async () => {
    try {
      const M = await I.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Dt({ files: M.files, folder: M.folder });
    } catch (M) {
      Dt({ files: [], folder: "", error: M.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const Q = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), Z = URL.createObjectURL(Q), be = document.createElement("a");
        be.href = Z, be.download = `${r.saveName || "crycat"}-cricut.pdf`, be.click(), setTimeout(() => URL.revokeObjectURL(Z), 4e3);
      } catch (M) {
        Dt({
          files: [],
          folder: "",
          error: M.message
        });
      }
      return;
    }
    const R = document.createElement("iframe");
    R.setAttribute("aria-hidden", "true"), R.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", R.src = "/api/print.pdf", R.onload = () => {
      var M, Q;
      try {
        (M = R.contentWindow) == null || M.focus(), (Q = R.contentWindow) == null || Q.print();
      } finally {
        window.setTimeout(() => R.remove(), 6e4);
      }
    }, document.body.appendChild(R);
  }, Od = async () => {
    try {
      const E = await I.export(kt);
      Dt({ files: E.files, folder: E.folder });
    } catch (E) {
      Dt({ files: [], folder: "", error: E.message });
    }
  }, Fd = () => {
    V(!0);
  }, Bd = async (E) => {
    try {
      const R = await I.export(kt, E);
      Dt({ files: R.files, folder: R.folder });
    } catch (R) {
      Dt({ files: [], folder: "", error: R.message });
    }
  }, Vs = (t == null ? void 0 : t.poly_mm) ?? [], [at, ot] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Sn, Cn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Ot = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Sn, Jr = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Cn, St = n.lienzo === "pagina" ? 0 : at, Ct = n.lienzo === "pagina" ? 0 : ot, Gs = Vs.length ? "M" + Vs.map(([E, R]) => `${E - St},${R - Ct}`).join(" L") + " Z" : "", Hs = j.useRef(0);
  j.useEffect(() => {
    if (!t) return;
    const E = t.pages || 0;
    E > 0 && E !== Hs.current && (Hs.current = E, a((R) => ({ ...R, viewMode: E <= 1 ? 1 : E === 2 ? 2 : 4 })), k(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const wo = {
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
  }, Xr = r.contornoModo ?? "final", Ud = r.verBordes && Xr !== "ninguno", jo = r.hojaGirada === !0, qd = (E) => {
    const R = (t == null ? void 0 : t.placements.filter((M) => M.page === E)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}${jo ? " girada" : ""}`,
        style: jo ? {
          width: "100%",
          aspectRatio: `${Jr} / ${Ot}`
        } : { width: "100%" },
        onClick: (M) => {
          nt > 1 && v === null && !M.target.closest(".item-box") && k(E);
        },
        "data-testid": `page-${E}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: `sheet${jo ? " girada" : ""}`, src: I.pageUrl(E, C, n.simular_impresion === !0, Ud, ze, Xr), alt: w("Página {i}", { i: E + 1 }), draggable: !1 }),
          r.guidesVisible && Gs && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Ot} ${Jr}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Ot / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((at - St + Sn) / 10) + 1 },
                    (M, Q) => {
                      const Z = Q * 10 - (St - at);
                      return Z >= at - St - 0.01 && Z <= at - St + Sn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: Z,
                          y1: ot - Ct,
                          x2: Z,
                          y2: ot - Ct + Cn
                        },
                        `v${Q}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((ot - Ct + Cn) / 10) + 1 },
                    (M, Q) => {
                      const Z = Q * 10 - (Ct - ot);
                      return Z >= ot - Ct - 0.01 && Z <= ot - Ct + Cn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: at - St,
                          y1: Z,
                          x2: at - St + Sn,
                          y2: Z
                        },
                        `h${Q}`
                      ) : null;
                    }
                  )
                ]
              }
            ),
            (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
              ["esquina_flecha", at, ot, !1, !1],
              ["esquina_sd", at + Sn, ot, !0, !1],
              ["esquina_ii", at, ot + Cn, !1, !0],
              ["esquina_id", at + Sn, ot + Cn, !0, !0]
            ].map(([M, Q, Z, be, Ye]) => {
              const te = t.marcas[M];
              if (!te) return null;
              const ie = Q - St - (be ? te[0] : 0), ht = Z - Ct - (Ye ? te[1] : 0);
              return /* @__PURE__ */ i.jsx(
                "image",
                {
                  href: xt(`/marcas/${M}.png`),
                  x: ie,
                  y: ht,
                  width: te[0],
                  height: te[1],
                  preserveAspectRatio: "none"
                },
                M
              );
            }) }),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: Gs,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Ot / 250),
                strokeDasharray: `${Ot / 55} ${Ot / 85}`,
                opacity: 0.85
              }
            ),
            Id
          ] }),
          R.map((M) => {
            const Q = e.find((te) => te.id === M.asset_id), Z = (B == null ? void 0 : B.uid) === M.uid ? B : null, be = ((Z ? Z.x : M.x) - St) / (Ot || 1) * 100, Ye = ((Z ? Z.y : M.y) - Ct) / (Jr || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${M.pinned ? "pinned" : ""} ${(_ == null ? void 0 : _.uid) === M.uid ? "dragging" : ""}`,
                style: {
                  left: `${be}%`,
                  top: `${Ye}%`,
                  width: `${M.w / (Ot || 1) * 100}%`,
                  height: `${M.h / (Jr || 1) * 100}%`
                },
                title: (Q == null ? void 0 : Q.name) ?? "",
                onMouseDown: (te) => rt(te, M),
                onContextMenu: (te) => {
                  te.preventDefault(), $t(M.uid);
                },
                "data-testid": `item-${M.uid}`,
                onClick: (te) => {
                  te.stopPropagation(), te.currentTarget.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "smooth"
                  }), window.dispatchEvent(new CustomEvent(
                    "crycat:seleccion",
                    { detail: M.asset_id }
                  ));
                },
                children: M.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              M.uid
            );
          })
        ]
      },
      E
    );
  }, Vd = v !== null ? [v] : Array.from({ length: nt }, (E, R) => R);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    nt > 1 && /* @__PURE__ */ i.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: w("No cabe en una página: {n} páginas", { n: nt }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${wo[Xr].clase}`,
          "data-tip": w("Contorno: {modo} (pulsa para cambiar)", {
            modo: w(wo[r.contornoModo ?? "final"].etiqueta)
          }),
          onClick: () => a((E) => {
            const R = ["final", "orig", "ambos", "ninguno"], M = R.indexOf(E.contornoModo ?? "final"), Q = R[(M + 1) % 4];
            return {
              ...E,
              contornoModo: Q,
              verBordes: Q !== "ninguno"
            };
          }),
          children: [
            /* @__PURE__ */ i.jsx(xo, { size: 16 }),
            " ",
            w(wo[Xr].corto)
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          className: r.guidesVisible ? "primary" : "",
          "data-tip": w("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((E) => ({ ...E, guidesVisible: !E.guidesVisible })),
          children: [
            /* @__PURE__ */ i.jsx(Pd, { size: 16 }),
            " ",
            w("Marcas")
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": w("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(Yr ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Ur, { size: 16 }),
            " ",
            w("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        nt > 1 && v === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 4 })), children: "4" })
        ] }),
        v !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => k(null), title: w("Volver a la cuadrícula (Esc)"), children: w(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": w("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((E) => E.eyeFosforito ? { ...E, eyeFosforito: !1, eyeTransparent: !1 } : E.eyeTransparent ? { ...E, eyeTransparent: !1, eyeFosforito: !0 } : { ...E, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(zm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(au, { size: 16 }) : /* @__PURE__ */ i.jsx(au, { size: 16 }),
              r.eyeFosforito ? w("Fosforito") : r.eyeTransparent ? w("Transparente") : w("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-disposicion",
            "data-tip": w("Cambiar la disposición: menús anchos o hoja más grande"),
            onClick: () => {
              const E = !window.__crycatAncho;
              window.__crycatAncho = E, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: E }
              ));
            },
            children: /* @__PURE__ */ i.jsx(Pm, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-flotantes", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "vf-izq", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": w("Deshacer (Ctrl+Z)"),
            onClick: () => g(),
            disabled: !x,
            children: /* @__PURE__ */ i.jsx(bd, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": w("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => y(),
            disabled: !S,
            children: /* @__PURE__ */ i.jsx(Tm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": w("Acercar (+)"),
            onClick: () => d((E) => Math.min(12, E * 1.08)),
            children: /* @__PURE__ */ i.jsx(Lm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": w("Centrar la hoja y volver al tamaño original (tecla 0)"),
            onClick: () => {
              d(1), h({ x: 0, y: 0 });
            },
            children: /* @__PURE__ */ i.jsx(Mm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": w("Alejar (−)"),
            onClick: () => d((E) => Math.max(0.05, E / 1.08)),
            children: /* @__PURE__ */ i.jsx(Rm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(f * 100),
          "%"
        ] })
      ] })
    ] }),
    p ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: I.previewUrl(p.id) + `?t=${C}`,
            alt: p.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: p && W.filter((E) => !E.principal).map((E, R) => {
          const [M, Q, Z, be] = E.bbox, Ye = p.w_px || 1, te = p.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${Re.has(E.id) ? " sel" : ""}`,
              "data-testid": `blob-${R}`,
              title: w("Trozo de {px} px — clic para {accion}", {
                px: E.area_px,
                accion: Re.has(E.id) ? w("conservar") : w("quitar")
              }),
              style: {
                left: `${M / Ye * 100}%`,
                top: `${Q / te * 100}%`,
                width: `${(Z - M) / Ye * 100}%`,
                height: `${(be - Q) / te * 100}%`
              },
              onClick: () => $d(E.id)
            },
            E.id
          );
        }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "primary",
              "data-testid": "btn-unir-contorno",
              title: w("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: T }),
              onClick: async () => {
                p && (await I.patchAsset(p.id, {
                  offset_mm: T,
                  offset_modo: "unir_curvo"
                }), await (m == null ? void 0 : m()));
              },
              children: w("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: qs,
              children: w(
                "Quitar marcados ({n})",
                { n: Re.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: w("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: $,
        className: `canvas ${_ ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: A,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${c.x}px, ${c.y}px) scale(${f})` },
            children: [
              nt === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: w("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${v !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Vd.map(qd)
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
          onClick: qs,
          children: w("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => m == null ? void 0 : m(),
          children: w("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: It,
          value: r.saveName,
          onChange: (E) => a((R) => ({ ...R, saveName: E.target.value }))
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: w("Abrir la carpeta de guardado en el explorador"),
            "aria-label": w("Abrir carpeta de guardado"),
            onClick: () => I.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Br, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Od, children: w("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Fd, children: w("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Dd,
            disabled: nt === 0,
            children: w("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Ld,
      {
        open: H,
        initial: n.carpeta_export,
        onClose: () => V(!1),
        onPick: Bd
      }
    ),
    /* @__PURE__ */ i.jsx(
      Qm,
      {
        open: !!mt,
        files: (mt == null ? void 0 : mt.files) ?? [],
        folder: (mt == null ? void 0 : mt.folder) ?? "",
        error: mt == null ? void 0 : mt.error,
        onOpenFolder: (E) => void I.fsOpen(E).catch(() => {
        }),
        onClose: () => Dt(null)
      }
    )
  ] });
}
const Qo = [
  {
    clave: "chapas",
    nombre: "Chapas",
    desc: "Redondas, sin girar",
    Icono: Um,
    forma: "redondas"
  },
  {
    clave: "pegatinas",
    nombre: "Pegatinas",
    desc: "Siluetas, cualquier ángulo",
    Icono: qm,
    forma: "siluetas"
  },
  {
    clave: "carteles",
    nombre: "Carteles",
    desc: "Rectángulos, giros de 90°",
    Icono: Vm,
    forma: "rectangulos"
  }
];
function Km({ settings: e, saveSettings: t }) {
  var h;
  const n = Qe(), [r, a] = j.useState(
    {}
  ), [o, s] = j.useState([]), [u, l] = j.useState(null), [p, m] = j.useState(""), [g, y] = j.useState("");
  j.useEffect(() => {
    I.modos().then((v) => {
      a(v.modos ?? {}), s(v.slots ?? []);
    }).catch(() => {
    });
  }, []);
  const x = e.modo_forma ?? "siluetas", S = ((h = Qo.find((v) => v.forma === x)) == null ? void 0 : h.clave) ?? "pegatinas", w = async (v) => {
    var C;
    const k = r[v];
    k && (await t(k), y(n("Modo «{n}» aplicado", {
      n: n(((C = Qo.find((b) => b.clave === v)) == null ? void 0 : C.nombre) ?? v)
    })));
  }, D = async (v) => {
    const k = o[v];
    k != null && k.ajustes && (await t(k.ajustes), y(n("Modo «{n}» aplicado", { n: k.nombre })));
  }, f = async (v) => {
    var C;
    const k = u === v ? p : ((C = o[v]) == null ? void 0 : C.nombre) ?? "";
    try {
      const b = await I.saveModo(v, k);
      s(b.slots), l(null), y(n("Ajustes guardados en «{n}»", { n: b.slots[v].nombre }));
    } catch {
      y(n("No se pudo guardar el modo"));
    }
  }, d = async (v, k) => {
    var b;
    const C = k.trim();
    if (l(null), !(!C || C === ((b = o[v]) == null ? void 0 : b.nombre)))
      try {
        s((await I.renameModo(v, C)).slots);
      } catch {
        y(n("No se pudo cambiar el nombre"));
      }
  }, c = async (v) => {
    try {
      s((await I.deleteModo(v)).slots);
    } catch {
      y(n("No se pudo vaciar el hueco"));
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ i.jsx("div", { className: "modos-grandes", children: Qo.map((v) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        "data-testid": `modo-${v.clave}`,
        className: `modo-btn${v.clave === "pegatinas" ? " principal" : ""}${S === v.clave ? " on" : ""}`,
        title: n("Modo {n}: {d}", { n: n(v.nombre), d: n(v.desc) }),
        onClick: () => w(v.clave),
        children: [
          /* @__PURE__ */ i.jsx(v.Icono, { size: v.clave === "pegatinas" ? 26 : 21 }),
          /* @__PURE__ */ i.jsx("b", { children: n(v.nombre) }),
          /* @__PURE__ */ i.jsx("span", { children: n(v.desc) })
        ]
      },
      v.clave
    )) }),
    /* @__PURE__ */ i.jsx("div", { className: "modos-slots", "data-testid": "modos-slots", children: o.map((v, k) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `modo-slot${v.ajustes ? " lleno" : ""}`,
        "data-testid": `slot-${k}`,
        children: [
          u === k ? /* @__PURE__ */ i.jsx(
            "input",
            {
              autoFocus: !0,
              type: "text",
              className: "slot-input",
              "data-testid": `slot-${k}-nombre`,
              value: p,
              maxLength: 40,
              placeholder: n("Nombre del modo"),
              onChange: (C) => m(C.target.value),
              onBlur: () => d(k, p),
              onKeyDown: (C) => {
                C.key === "Enter" && d(k, p), C.key === "Escape" && l(null);
              }
            }
          ) : /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "slot-nombre",
              "data-testid": `slot-${k}-editar`,
              title: n("Cambiar el nombre de este modo"),
              onClick: () => {
                l(k), m(v.nombre);
              },
              children: v.nombre
            }
          ),
          v.ajustes ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "slot-btn",
                "data-testid": `slot-${k}-cargar`,
                title: n("Aplicar este modo"),
                onClick: () => D(k),
                children: /* @__PURE__ */ i.jsx(jr, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "slot-btn",
                "data-testid": `slot-${k}-guardar`,
                title: n("Sobrescribir con los ajustes actuales"),
                onClick: () => f(k),
                children: /* @__PURE__ */ i.jsx(to, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "slot-btn danger",
                "data-testid": `slot-${k}-borrar`,
                title: n("Vaciar este hueco"),
                onClick: () => c(k),
                children: /* @__PURE__ */ i.jsx(Ed, { size: 14 })
              }
            )
          ] }) : /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "slot-btn guardar",
              "data-testid": `slot-${k}-guardar`,
              title: n("Guardar aquí los ajustes actuales"),
              onClick: () => f(k),
              children: /* @__PURE__ */ i.jsx(to, { size: 14 })
            }
          )
        ]
      },
      k
    )) }),
    g && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modos-aviso", children: g })
  ] });
}
function Jm({ settings: e, saveSettings: t }) {
  const n = Qe(), r = e.usar_minis, a = e.modo === "experto", o = {
    90: "libre",
    libre: "no",
    no: "90"
  }, s = {
    90: "90°",
    libre: n("libre"),
    no: n("fijo")
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "acciones-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "acciones-rapidas", children: [
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
            /* @__PURE__ */ i.jsx(qr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Ur, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(zd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Km, { settings: e, saveSettings: t })
  ] });
}
function Xm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
          const m = Number(p.target.value);
          Number.isFinite(m) && m > 0 && r(m);
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
function _t({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function ou(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const Zm = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, eh = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function th({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Qe(), [a, o] = j.useState(!0), [s, u] = j.useState({
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
  }), [l, p] = j.useState(!1), m = j.useMemo(() => {
    const h = (n ?? []).filter((k) => k.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((k, C) => Math.min(C.w_mm, C.h_mm) - Math.min(k.w_mm, k.h_mm))[0] ?? null;
  }, [n]), g = m ? Math.min(m.w_mm, m.h_mm) : 0, y = e.modo === "experto", x = ({ children: h }) => y ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, S = (h) => u((v) => ({ ...v, [h]: !v[h] })), w = (h) => t(h), D = j.useRef(null), f = ({ titulo: h, children: v }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(h) }),
    v
  ] }), d = (h, v, k, C, b = 1, _ = "", N, B) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...B ? { "data-tip": r(B) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: k,
          max: C,
          step: b,
          "data-testid": `set-${v}`,
          value: String(e[v]),
          onChange: (ae) => {
            const H = Number(ae.target.value);
            Number.isNaN(H) || w({ [v]: H });
          }
        }
      ),
      _ && /* @__PURE__ */ i.jsx("span", { className: "hint", children: _ }),
      N
    ] })
  ] }), c = (h, v, k, C, b) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...b ? { "data-tip": r(b) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${v}`,
        value: String(e[v]),
        onChange: (_) => w({ [v]: _.target.value }),
        children: k.map(([_, N]) => /* @__PURE__ */ i.jsx("option", { value: _, children: r(N) }, _))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Jm, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !y && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(jr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(f, { titulo: "Colocación", children: [
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
                "Margen de seguridad a los límites",
                "margen_mm",
                0,
                20,
                0.5,
                "mm",
                void 0,
                "Cuánto se separan las piezas del borde del área recortable. Súbelo si tu Cricut corta justo al límite."
              ),
              c("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(f, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(x, { children: d("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (h) => {
                      const v = h.target.value, k = ym[v];
                      w(k ? { pagina: v, pagina_w: k[0], pagina_h: k[1] } : { pagina: v });
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
              /* @__PURE__ */ i.jsx(x, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (h) => w({ pagina_w: Number(h.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (h) => w({ pagina_h: Number(h.target.value) })
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
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(qr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ i.jsxs(f, { titulo: "Tamaños", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => w({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => w({ mini_usar_lista: !1 }),
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
            /* @__PURE__ */ i.jsxs(f, { titulo: "Comportamiento", children: [
              /* @__PURE__ */ i.jsxs(x, { children: [
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
                      onClick: () => w({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => w({ mini_lista_modo: "pct" }),
                      children: r("En % del original")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((h, v) => /* @__PURE__ */ i.jsx(
                    Xm,
                    {
                      i: v,
                      valor: h,
                      refBase: g,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (k) => {
                        const C = [...e.mini_tamanos_lista ?? []];
                        C[v] = k, w({ mini_tamanos_lista: C });
                      },
                      onQuitar: () => w({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (k, C) => C !== v
                        )
                      })
                    },
                    v
                  )),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => w({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: r("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: m ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: m.name, mm: g.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] })
          ]
        }
      ),
      y && /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
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
            /* @__PURE__ */ i.jsxs(x, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (h) => w({ opt_tiempo_auto: h.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: Zm[e.opt_metodo] ?? 8,
                  m: r(eh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : d("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      y && /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(eo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(f, { titulo: "Impresión", children: [
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
              /* @__PURE__ */ i.jsxs(x, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (h) => w({ simular_impresion: h.target.checked })
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
                        onChange: (h) => w({ sim_cmyk: h.target.checked })
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
            /* @__PURE__ */ i.jsxs(f, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (h) => w({ chequear_lineas: h.target.checked })
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
      y && /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(xo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (h) => w({ offset_activo: h.target.checked })
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
                      onChange: (h) => w({ offset_color: h.target.value })
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
      y && /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(bm, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: ou(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: nu[e.maquina] ?? "Cricut Maker 3" }
              ),
              [nu[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            d("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            d("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            d("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            d("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      y && /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(bd, { size: 15 }),
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
                  onChange: (h) => w({ historial: h.target.checked })
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
                    onChange: (h) => w({ hist_tamano: h.target.checked })
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
                    onChange: (h) => w({ hist_copias: h.target.checked })
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
                    onChange: (h) => w({ hist_borde: h.target.checked })
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
                    onChange: (h) => w({ hist_minis: h.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        _t,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(Pd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: qi.map((h) => /* @__PURE__ */ i.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === h.key ? "active" : ""}`,
                  "data-testid": `tema-${h.key}`,
                  onClick: () => t({ tema: h.key }),
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: h.colors.accent } }),
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: h.colors.accent2 } }),
                    h.label
                  ]
                },
                h.key
              )) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (h) => t({ ver_guias: h.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx("img", { src: I.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var h;
                  return (h = D.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: D,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (h) => {
                      var k;
                      const v = (k = h.target.files) == null ? void 0 : k[0];
                      v && I.setIcon(v).then(() => {
                        window.location.reload();
                      }), h.target.value = "";
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
        _t,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: S,
          icon: /* @__PURE__ */ i.jsx(Nd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(f, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => w({ mute: !e.mute }),
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
                    onChange: (h) => w({ volumen: Number(h.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ i.jsxs(f, { titulo: "Pikmin", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (h) => w({ pikmin_activo: h.target.checked })
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
                    onChange: (h) => w({ pikmin_sonido: h.target.checked })
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
                    onChange: (h) => w({ pikmin_sonido_morir: h.target.checked })
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
                    onChange: (h) => t({ comprobar_versiones: h.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: ou(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Ld,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => p(!1),
        onPick: (h) => t({ carpeta_export: h })
      }
    )
  ] });
}
function nh({ ver: e, onCerrar: t }) {
  const n = Qe(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", o = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = j.useRef((e == null ? void 0 : e.actual) ?? ""), [u, l] = j.useState(!1), p = a === "error", m = a === "reiniciando";
  return j.useEffect(() => {
    if (!m) return;
    l(!0);
    let g = !0;
    const y = window.setInterval(async () => {
      try {
        const x = await I.version();
        if (!g) return;
        x.actual && s.current && x.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      g = !1, window.clearInterval(y);
    };
  }, [m]), /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ i.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ i.jsx("div", { className: `dialogo-icono${p ? " error" : ""}`, children: p ? "!" : m ? /* @__PURE__ */ i.jsx(Dm, { size: 26 }) : /* @__PURE__ */ i.jsx(Td, { size: 26 }) }),
    /* @__PURE__ */ i.jsx("h3", { children: n(p ? "No se pudo actualizar" : m ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
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
        o != null && !m ? ` · ${o}%` : ""
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
function Yo(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function rh({
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
  onEasterEgg: m,
  onAyuda: g,
  onReportar: y
}) {
  var Se, Re, xe;
  const x = Qe(), S = Us(), [w, D] = j.useState([]), [f, d] = j.useState(0), [c, h] = j.useState(null), [v, k] = j.useState(!1), [C, b] = j.useState(""), [_, N] = j.useState(!1), B = j.useRef(!1), ae = j.useRef([]);
  j.useEffect(() => {
    fetch("/api/funmsgs").then(($) => $.ok ? $.json() : { msgs: [] }).then(($) => D($.msgs ?? [])).catch(() => {
    });
  }, []), j.useEffect(() => {
    let $ = !0;
    return I.version().then((pe) => {
      $ && (h(pe), !pe.comprobado && !B.current && (B.current = !0, I.checkVersion().then((Ae) => $ && h(Ae)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      $ = !1;
    };
  }, []);
  const H = ((Se = c == null ? void 0 : c.actualizacion) == null ? void 0 : Se.estado) === "descargando" || ((Re = c == null ? void 0 : c.actualizacion) == null ? void 0 : Re.estado) === "instalando" || ((xe = c == null ? void 0 : c.actualizacion) == null ? void 0 : xe.estado) === "reiniciando";
  j.useEffect(() => {
    if (!H) return;
    const $ = setInterval(() => {
      I.version().then(h).catch(() => {
      });
    }, 700);
    return () => clearInterval($);
  }, [H]);
  const V = a || !!(e && !e.done);
  j.useEffect(() => {
    if (!V) return;
    const $ = setInterval(() => d((pe) => pe + 1), 1200);
    return () => clearInterval($);
  }, [V]);
  const T = w.length ? w : [
    x("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], oe = j.useMemo(() => {
    if (C) return C;
    if (H) {
      const $ = c == null ? void 0 : c.actualizacion;
      if (($ == null ? void 0 : $.estado) === "instalando") return x("Instalando y reiniciando…");
      const pe = ($ == null ? void 0 : $.progreso) != null ? Math.round($.progreso) : null;
      return pe != null ? x("Descargando… {p}%", { p: pe }) : ($ == null ? void 0 : $.mensaje) || x("Descargando actualización…");
    }
    return V ? T[f % T.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? x("Listo") : x("Listo para empezar");
  }, [C, H, V, e, T, f, n, x, c]), ze = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), P = j.useMemo(() => {
    const $ = e == null ? void 0 : e.eta_s;
    return !V || $ === void 0 || $ === null || $ <= 0.5 ? "" : (e == null || e.tope_s, x(" · ~{x} restante", { x: Yo($) }));
  }, [e == null ? void 0 : e.eta_s, V, x]), O = j.useMemo(() => !r || !r.segundos ? "" : Yo(r.segundos), [r]), F = async () => {
    k(!0), b("");
    try {
      const $ = await I.checkVersion();
      h($), $.error ? b(x("Sin conexión")) : $.hay_nueva || b(x("Estás en la última versión"));
    } catch {
      b(x("Sin conexión"));
    } finally {
      k(!1);
    }
  }, W = async () => {
    b("");
    try {
      const $ = await I.updateVersion();
      $.ok ? N(!0) : $.modo === "dev" && $.url ? (b(x("Modo desarrollo: se actualiza con git")), await I.openReleases().catch(() => {
      })) : b($.mensaje || x("No se pudo actualizar")), I.version().then(h).catch(() => {
      });
    } catch {
      b(x("No se pudo actualizar"));
    }
  }, ft = !!(c != null && c.hay_nueva && !V && !H) ? x("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    _ && /* @__PURE__ */ i.jsx(
      nh,
      {
        ver: c,
        onCerrar: () => N(!1)
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: I.iconUrl(),
            alt: "CryCat",
            "data-testid": "brand-icon",
            title: x("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const $ = Date.now();
              ae.current = [...ae.current, $].filter((pe) => $ - pe < 2500), ae.current.length >= 5 && (ae.current = [], b(x("¡Fiesta Pikmin!")), window.setTimeout(() => b(""), 4e3), m == null || m());
            }
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !V && (() => {
          const $ = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), pe = n.placed || 1, Ae = Math.min(80, Math.max(
            30,
            48 + 22 * $ - Math.min(18, pe * 0.08)
          )), It = n.efficiency * 100, kt = It >= Ae ? "buena" : It >= Ae * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": x("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.placed }),
              /* @__PURE__ */ i.jsx("span", { children: x("imágenes") })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": x("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.pages }),
              /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? x("páginas") : x("página") })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": x("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.minis }),
              /* @__PURE__ */ i.jsx("span", { children: x("minis") })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${kt}`,
                "data-testid": "eficiencia-card",
                "data-nivel": kt,
                "data-tip": x("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: pe, e: Math.round(Ae) }),
                children: [
                  /* @__PURE__ */ i.jsxs("b", { children: [
                    Math.round(It),
                    "%"
                  ] }),
                  /* @__PURE__ */ i.jsx("span", { children: x("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !V) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: oe }),
        V && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, ze)}%` } }) }),
          /* @__PURE__ */ i.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? x("Tiempo máximo de este cálculo: {y}", { y: Yo(e.tope_s) }) : void 0,
              children: [
                ze,
                "%",
                P
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: xt("/piensa.gif"),
              alt: "",
              title: x("Pensando…"),
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
            "data-tip": x("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
            onClick: () => g == null ? void 0 : g(),
            children: [
              /* @__PURE__ */ i.jsx(Fm, { size: 15 }),
              " ",
              x("Cómo usar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "app-info reportar",
            "data-testid": "btn-reportar",
            "data-tip": x("Reportar un bug: abre un issue en GitHub ya rellenado"),
            onClick: () => y == null ? void 0 : y(),
            children: [
              /* @__PURE__ */ i.jsx(Md, { size: 15 }),
              " ",
              x("Reportar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "app-info apoyar",
            "data-testid": "btn-apoyar",
            "data-tip": x("Apoyar el proyecto (PayPal)"),
            onClick: () => window.open(
              "https://paypal.me/Darkniel42",
              "_blank",
              "noopener"
            ),
            children: [
              /* @__PURE__ */ i.jsx(Bm, { size: 15 }),
              " ",
              x("Apoyar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-repo",
            title: x("Abrir el repositorio del proyecto en una pestaña nueva"),
            onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ i.jsx(Im, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: x("Idioma"),
            onClick: () => p == null ? void 0 : p(S === "es" ? "en" : "es"),
            children: S.toUpperCase()
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "span",
          {
            className: "version-chip",
            "data-testid": "version-chip",
            title: x("Versión actual"),
            children: [
              (c == null ? void 0 : c.hay_nueva) && !H && /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: ft || x("Hay una versión nueva"),
                  onClick: W,
                  children: /* @__PURE__ */ i.jsx($m, { size: 14 })
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
                  title: x("Comprobar versiones"),
                  onClick: F,
                  disabled: v,
                  children: v ? "…" : /* @__PURE__ */ i.jsx(Om, { size: 14 })
                }
              ),
              (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: x("Descargar e instalar la nueva versión"),
                  onClick: W,
                  children: /* @__PURE__ */ i.jsx(Td, { size: 14 })
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
            title: x(t ? "Backend conectado" : "Backend desconectado")
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "span",
          {
            className: "eta",
            "data-testid": "corte-estimado",
            title: x("Tiempo estimado de corte (Cricut Maker 5)"),
            children: [
              x("Corte"),
              " ",
              O || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const ah = [
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
], oh = "/pikmin_bloom/", iu = "/pikmin/alma.png", ih = "/sonidos/pikmin.mp3", sh = "/sonidos/pikmin_morir.mp3";
function lh(e) {
  const [t, n] = j.useState(ah), [r, a] = j.useState([]);
  return j.useEffect(() => {
    fetch(xt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(xt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => xt(oh + u)));
    }).catch(() => {
    });
  }, []), j.useMemo(
    () => e && e.length ? [...e, ...r].map(xt) : [...t, ...r].map(xt),
    [e, t, r]
  );
}
function uh({
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
  const m = lh(p), [g, y] = j.useState([]), x = j.useRef(void 0), S = j.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), w = j.useRef(s);
  w.current = s;
  const D = Math.max(5e3, t * 6e4), f = (v) => {
    if (!(!n || o))
      try {
        const k = new Audio(xt(v ? sh : ih));
        k.volume = Math.min(1, Math.max(0, a)), k.play().catch(() => {
        });
      } catch {
      }
  }, d = () => {
    const v = r && Math.random() < 0.25, k = v ? xt(iu) : m[Math.floor(Math.random() * m.length)] ?? xt(iu);
    y((C) => [...C, {
      src: k,
      left: 3 + Math.random() * 92,
      key: Date.now() + C.length,
      morir: v,
      estado: "paseando"
    }]), f(v);
  }, c = () => {
    if (!e) return;
    const v = u ?? Math.round(D * 0.5), k = l ?? Math.round(D * 1.5), C = v + Math.random() * Math.max(1, k - v);
    x.current = window.setTimeout(d, C);
  };
  j.useEffect(() => {
    if (!e) {
      window.clearTimeout(x.current), y([]);
      return;
    }
    return c(), () => window.clearTimeout(x.current);
  }, [e, t, n, r, a, o, m]), j.useEffect(() => {
    const v = () => {
      S.current = document.visibilityState === "hidden", !S.current && w.current && window.setTimeout(() => {
        y((k) => k.length ? (f(!1), k.map((C) => ({ ...C, estado: "festejando" }))) : k), window.setTimeout(() => {
          y([]), c();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", v), () => document.removeEventListener("visibilitychange", v);
  }, []);
  const h = (v) => {
    if (w.current && S.current) {
      y((k) => k.map((C) => C.key === v ? { ...C, estado: "quieto" } : C));
      return;
    }
    y((k) => k.filter((C) => C.key !== v)), c();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: g.map((v) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${v.estado}${v.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": v.estado,
      "data-morir": v.morir ? "1" : "0",
      style: { left: `${v.left}%` },
      onAnimationEnd: () => h(v.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: v.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => h(v.key)
        }
      )
    },
    v.key
  )) });
}
const su = "crycat_bienvenida_v2";
function ch() {
  const [e, t] = j.useState(!1);
  return j.useEffect(() => {
    try {
      localStorage.getItem(su) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(su, "1");
    } catch {
    }
    t(!1);
  } };
}
function dh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Qe(), [a, o] = j.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(eo, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(jr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(qr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(Ur, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(to, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(eo, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(xo, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(qr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(Ur, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(zd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(jr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(to, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Am, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(Nd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(jr, { size: 18 }),
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((m, g) => /* @__PURE__ */ i.jsx("li", { children: m }, g)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([m, g, y], x) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: m }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: g }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: y })
      ] })
    ] }, x)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Br, { size: 15 }),
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
const ph = "https://github.com/dhernandezgit/CryCat-Tool", fh = [
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
function mh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Qe(), [s, u] = j.useState(""), [l, p] = j.useState(""), [m, g] = j.useState(""), [y, x] = j.useState(!0), [S, w] = j.useState(!0), [D, f] = j.useState(!0), [d, c] = j.useState(!1);
  j.useEffect(() => {
    e && (I.version().then((_) => u(_.actual)).catch(() => {
    }), c(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (N) => `- [${N.t}] ${N.msg} (${N.donde || "?"})`
  );
  if (!e) return null;
  const v = () => {
    var ae, H;
    const _ = navigator.userAgent, N = !!globalThis.__crycatBase, B = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${N ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${_}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((ae = window.screen) == null ? void 0 : ae.width) ?? "?"}x${((H = window.screen) == null ? void 0 : H.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && B.push(`- Elementos: ${a.pages} página(s)`), r && B.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), B.join(`
`);
  }, k = () => n ? [
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
  ].map((N) => `- ${N}: ${String(n[N])}`).join(`
`) : "", C = () => {
    const _ = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      m.trim() || "1. …",
      ""
    ];
    y && _.push("### Entorno", v(), ""), S && n && _.push("### Ajustes", k(), "");
    const N = h();
    return D && N.length && _.push("### Errores recogidos", N.join(`
`), ""), _.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), _.join(`
`);
  }, b = () => {
    const _ = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, N = `${ph}/issues/new?` + new URLSearchParams({
      title: _,
      body: C(),
      labels: "bug"
    }).toString();
    window.open(N, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: fh.map(([_, N]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${_}`,
        onClick: () => p((B) => (B ? B + `
` : "") + N),
        children: o(_)
      },
      _
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
          onChange: (_) => p(_.target.value)
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
          value: m,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (_) => g(_.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: y,
          onChange: (_) => x(_.target.checked)
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
          checked: S,
          onChange: (_) => w(_.target.checked)
        }
      ),
      o("Incluir mis ajustes actuales")
    ] }),
    h().length > 0 && /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: D,
          onChange: (_) => f(_.target.checked)
        }
      ),
      o(
        "Incluir los {n} errores recogidos de la consola",
        { n: h().length }
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

${m}

${C()}`
              ), c(!0);
            } catch {
            }
          },
          children: o(d ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: b, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function hh() {
  const [e, t] = j.useState([]), [n, r] = j.useState(null), [a, o] = j.useState(null), [s, u] = j.useState(null), [l, p] = j.useState(null), [m, g] = j.useState(null), [y, x] = j.useState(!0), [S, w] = j.useState(!1), [D, f] = j.useState(!1), [d, c] = j.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [h, v] = j.useState(33.3), [k, C] = j.useState(33.3), b = ch(), _ = j.useRef(null), N = j.useRef(null);
  j.useEffect(() => {
    (async () => {
      try {
        const A = await I.getSettings();
        p(A.settings), ru(A.settings.tema), c((U) => ({
          ...U,
          guidesVisible: A.settings.ver_guias,
          eyeTransparent: A.settings.fondo_transparente
        })), t((await I.listAssets()).map(Fr)), o(await I.result());
      } catch {
        x(!1);
      }
    })();
  }, []);
  const [B, ae] = j.useState("");
  j.useEffect(() => {
    const A = (U) => ae(String(U.detail || ""));
    return window.addEventListener("crycat:seleccion", A), () => window.removeEventListener("crycat:seleccion", A);
  }, []), j.useEffect(() => {
    const A = (U) => {
      const Be = U.detail;
      v(Be ? 19 : 33.3), C(Be ? 62 : 33.3), c((rt) => ({ ...rt, hojaGirada: Be }));
    };
    return window.addEventListener("crycat:disposicion", A), () => window.removeEventListener("crycat:disposicion", A);
  }, []), j.useEffect(() => {
    const A = setInterval(async () => {
      try {
        await I.health(), x(!0);
      } catch {
        x(!1);
      }
    }, 5e3);
    return () => clearInterval(A);
  }, []);
  const H = j.useCallback(async () => {
    try {
      t((await I.listAssets()).map(Fr)), o(await I.result());
      try {
        u(await I.estimate());
      } catch {
      }
    } catch {
      x(!1);
    }
  }, []), V = j.useCallback((A) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(async () => {
      try {
        const U = await I.job(A);
        g(U), U.done && (window.clearInterval(N.current), N.current = null, await H(), U.status === "done" && window.setTimeout(() => g(null), 2500));
      } catch {
        window.clearInterval(N.current), N.current = null;
      }
    }, 300);
  }, []), T = j.useCallback(async () => {
    f(!0);
    try {
      const A = await I.optimize();
      g(A), V(A.id);
    } catch {
      x(!1);
    } finally {
      f(!1);
    }
  }, [V]), oe = j.useCallback(
    async (A) => {
      try {
        const U = await I.optimize(A, !0);
        g(U), V(U.id);
      } catch {
        x(!1);
      }
    },
    [V]
  ), ze = j.useCallback(() => {
    l && l.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(T, 400));
  }, [T, l]), P = j.useRef(null);
  j.useEffect(() => {
    P.current = ze;
  }, [ze]);
  const O = j.useRef(!1);
  j.useEffect(() => {
    if (!(!l || O.current)) {
      if (e.length > 0) {
        O.current = !0;
        return;
      }
      O.current = !0, I.crearDemo().then(async (A) => {
        A.ok && await H();
      }).catch(() => {
      });
    }
  }, [l, e.length, H]);
  const F = j.useCallback(
    async (A) => {
      p((U) => U && { ...U, ...A }), A.tema && ru(A.tema);
      try {
        const U = await I.putSettings(A);
        if (U.job)
          g(U.job), V(U.job.id);
        else
          try {
            u(await I.estimate());
          } catch {
          }
      } catch {
        x(!1);
      }
    },
    [V]
  ), W = j.useRef([]), K = j.useRef([]), [ft, Se] = j.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), Re = (l == null ? void 0 : l.historial) !== !1, xe = (l == null ? void 0 : l.historial_max) ?? 40, $ = () => Se({
    puedeDeshacer: W.current.length > 0,
    puedeRehacer: K.current.length > 0
  }), pe = j.useCallback(() => {
    const A = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && A.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && A.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && A.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && A.push("mini_enabled", "mini_quota"), A;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), Ae = j.useCallback((A) => {
    const U = {};
    for (const Be of pe()) U[Be] = A[Be];
    return U;
  }, [pe]), It = j.useCallback(() => {
    Re && (W.current = [...W.current, e].slice(-xe), K.current = [], $());
  }, [e, Re, xe]), kt = j.useCallback(async () => {
    const A = W.current.pop();
    if (A) {
      K.current = [...K.current, e], t(A), $();
      for (const U of A)
        await I.patchAsset(U.id, Ae(U)).catch(() => {
        });
      await H();
    }
  }, [e, H, Ae]), nt = j.useCallback(async () => {
    const A = K.current.pop();
    if (A) {
      W.current = [...W.current, e], t(A), $();
      for (const U of A)
        await I.patchAsset(U.id, Ae(U)).catch(() => {
        });
      await H();
    }
  }, [e, H, Ae]);
  j.useEffect(() => {
    const A = (U) => {
      if (!(U.ctrlKey || U.metaKey)) return;
      const rt = U.target;
      if (rt && (rt.tagName === "INPUT" || rt.tagName === "TEXTAREA" || rt.tagName === "SELECT" || rt.isContentEditable)) return;
      const $t = U.key.toLowerCase();
      $t === "z" && !U.shiftKey ? (U.preventDefault(), kt()) : ($t === "y" || $t === "z" && U.shiftKey) && (U.preventDefault(), nt());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [kt, nt]);
  const Yr = j.useCallback(
    (A) => {
      const U = (rt) => {
        const Kr = window.innerWidth, $t = rt.clientX / Kr * 100;
        A === "left" ? v(Math.min(45, Math.max(12, $t))) : C(Math.min(60, Math.max(20, $t - h)));
      }, Be = () => {
        window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", Be);
      };
      window.addEventListener("mousemove", U), window.addEventListener("mouseup", Be);
    },
    [h]
  );
  return j.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(Sm, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${h}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Wm,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await H(), ze();
          },
          saveSettings: F,
          onEditarContorno: (A) => r(A),
          onAntesDeCambiar: It,
          verBordes: d.verBordes,
          contornoModo: d.contornoModo ?? "final",
          destacado: B
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Yr("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${k}%` }, children: /* @__PURE__ */ i.jsx(
        Ym,
        {
          assets: e,
          result: a,
          settings: l,
          ui: d,
          setUi: c,
          saveSettings: F,
          optimize: T,
          onRefresh: H,
          onJob: (A) => {
            g(A), V(A.id);
          },
          onRecalc: oe,
          editando: n,
          onFinEdicion: async () => {
            r(null), await H();
          },
          onDeshacer: kt,
          onRehacer: nt,
          puedeDeshacer: ft.puedeDeshacer,
          puedeRehacer: ft.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Yr("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        th,
        {
          settings: l,
          assets: e,
          saveSettings: F
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      rh,
      {
        job: m,
        backendOk: y,
        result: a,
        estimate: s,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (A) => F({ volumen: A }),
        onMute: (A) => F({ mute: A }),
        onIdioma: (A) => F({ idioma: A }),
        onEasterEgg: () => F({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: b.abrir,
        onReportar: () => w(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      uh,
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
      dh,
      {
        open: b.visible,
        onClose: b.cerrar,
        onAbrirCarpeta: () => void I.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      mh,
      {
        open: S,
        onClose: () => w(!1),
        settings: l,
        job: m,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: Cm("es", "Cargando CryCat…") });
}
const Rd = document.getElementById("root"), Ko = [
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
], Gi = 8, ba = [];
globalThis.__crycatErrores = ba;
const Ad = (e, t) => {
  ba.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), ba.length > 12 && ba.shift();
};
window.addEventListener("error", (e) => Ad(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Ad(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Hi;
function lu(e, t = !1) {
  window.clearTimeout(Hi);
  const n = Sd().colors;
  if (Rd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Gi}</div>
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
  let r = Math.floor(Math.random() * Ko.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Ko[r++ % Ko.length]);
  }, o = () => {
    a(), Hi = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const ga = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Gi}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Gi * 100)}%`);
  }
};
let kr = null;
const Wi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, gh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function vh(e) {
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
    Wi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function yh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((g, y) => {
    s[y] = g;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [g, y] = await vh(l);
    u = g, s["content-type"] = y;
  } else l instanceof Blob ? u = Wi(await l.arrayBuffer()) : typeof l == "string" && (u = Wi(new TextEncoder().encode(l).buffer));
  const p = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(u) + ")", m = JSON.parse(await kr.runPythonAsync(p));
  return new Response(gh(m.body), {
    status: m.status || 200,
    headers: m.headers || { "content-type": "application/json" }
  });
}
function xh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && kr)
      try {
        return await yh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function wh() {
  try {
    if (lu("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    kr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(ga), ga("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await kr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (n) => {
      const r = n.data;
      if (!r || r.tipo !== "api") return;
      const a = n.ports && n.ports[0];
      if (a)
        try {
          const o = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", s = await kr.runPythonAsync(o);
          a.postMessage(JSON.parse(s));
        } catch (o) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (o && o.message ? o.message : o))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, xh();
    try {
      const n = Sd().key;
      n && n !== "wiwi" && await fetch(hn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    ga("Optimizando la muestra inicial…", 7);
    try {
      const n = await fetch(hn() + "api/assets").then((r) => r.json());
      Array.isArray(n) && n.length === 0 && await fetch(hn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    ga("Abriendo la aplicación…", 8), window.clearTimeout(Hi), jd(Rd).render(/* @__PURE__ */ i.jsx(hh, {}));
  } catch (e) {
    lu("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
wh();
