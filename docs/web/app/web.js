var su = { exports: {} }, to = {}, lu = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = Symbol.for("react.element"), Bd = Symbol.for("react.portal"), Ud = Symbol.for("react.fragment"), qd = Symbol.for("react.strict_mode"), Vd = Symbol.for("react.profiler"), Gd = Symbol.for("react.provider"), Hd = Symbol.for("react.context"), Wd = Symbol.for("react.forward_ref"), Qd = Symbol.for("react.suspense"), Yd = Symbol.for("react.memo"), Kd = Symbol.for("react.lazy"), Vs = Symbol.iterator;
function Jd(e) {
  return e === null || typeof e != "object" ? null : (e = Vs && e[Vs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var uu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, cu = Object.assign, du = {};
function Kn(e, t, n) {
  this.props = e, this.context = t, this.refs = du, this.updater = n || uu;
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pu() {
}
pu.prototype = Kn.prototype;
function Gi(e, t, n) {
  this.props = e, this.context = t, this.refs = du, this.updater = n || uu;
}
var Hi = Gi.prototype = new pu();
Hi.constructor = Gi;
cu(Hi, Kn.prototype);
Hi.isPureReactComponent = !0;
var Gs = Array.isArray, fu = Object.prototype.hasOwnProperty, Wi = { current: null }, mu = { key: !0, ref: !0, __self: !0, __source: !0 };
function hu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) fu.call(t, r) && !mu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), d = 0; d < u; d++) l[d] = arguments[d + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: qr, type: e, key: o, ref: s, props: a, _owner: Wi.current };
}
function Xd(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function Zd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Hs = /\/+/g;
function wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Zd("" + e.key) : t.toString(36);
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
        case qr:
        case Bd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + wo(s, 0) : r, Gs(a) ? (n = "", e != null && (n = e.replace(Hs, "$&/") + "/"), va(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Qi(a) && (a = Xd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Hs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Gs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + wo(o, u);
    s += va(o, t, n, l, a);
  }
  else if (l = Jd(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + wo(o, u++), s += va(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Xr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return va(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function ep(e) {
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
var be = { current: null }, ya = { transition: null }, tp = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: ya, ReactCurrentOwner: Wi };
function gu() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = { map: Xr, forEach: function(e, t, n) {
  Xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = Kn;
V.Fragment = Ud;
V.Profiler = Vd;
V.PureComponent = Gi;
V.StrictMode = qd;
V.Suspense = Qd;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
V.act = gu;
V.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = cu({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Wi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) fu.call(t, l) && !mu.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var d = 0; d < l; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: qr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
V.createContext = function(e) {
  return e = { $$typeof: Hd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Gd, _context: e }, e.Consumer = e;
};
V.createElement = hu;
V.createFactory = function(e) {
  var t = hu.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: Wd, render: e };
};
V.isValidElement = Qi;
V.lazy = function(e) {
  return { $$typeof: Kd, _payload: { _status: -1, _result: e }, _init: ep };
};
V.memo = function(e, t) {
  return { $$typeof: Yd, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = ya.transition;
  ya.transition = {};
  try {
    e();
  } finally {
    ya.transition = t;
  }
};
V.unstable_act = gu;
V.useCallback = function(e, t) {
  return be.current.useCallback(e, t);
};
V.useContext = function(e) {
  return be.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return be.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return be.current.useEffect(e, t);
};
V.useId = function() {
  return be.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return be.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return be.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return be.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return be.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return be.current.useRef(e);
};
V.useState = function(e) {
  return be.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return be.current.useTransition();
};
V.version = "18.3.1";
lu.exports = V;
var j = lu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np = j, rp = Symbol.for("react.element"), ap = Symbol.for("react.fragment"), op = Object.prototype.hasOwnProperty, ip = np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function vu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) op.call(t, r) && !sp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: rp, type: e, key: o, ref: s, props: a, _owner: ip.current };
}
to.Fragment = ap;
to.jsx = vu;
to.jsxs = vu;
su.exports = to;
var i = su.exports, yu = { exports: {} }, qe = {}, xu = { exports: {} }, wu = {};
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
  function t(M, F) {
    var B = M.length;
    M.push(F);
    e: for (; 0 < B; ) {
      var W = B - 1 >>> 1, Q = M[W];
      if (0 < a(Q, F)) M[W] = F, M[B] = Q, B = W;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var F = M[0], B = M.pop();
    if (B !== F) {
      M[0] = B;
      e: for (var W = 0, Q = M.length, et = Q >>> 1; W < et; ) {
        var I = 2 * (W + 1) - 1, X = M[I], fe = I + 1, Ne = M[fe];
        if (0 > a(X, B)) fe < Q && 0 > a(Ne, X) ? (M[W] = Ne, M[fe] = B, W = fe) : (M[W] = X, M[I] = B, W = I);
        else if (fe < Q && 0 > a(Ne, B)) M[W] = Ne, M[fe] = B, W = fe;
        else break e;
      }
    }
    return F;
  }
  function a(M, F) {
    var B = M.sortIndex - F.sortIndex;
    return B !== 0 ? B : M.id - F.id;
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
  var l = [], d = [], m = 1, y = null, v = 3, g = !1, C = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(M) {
    for (var F = n(d); F !== null; ) {
      if (F.callback === null) r(d);
      else if (F.startTime <= M) r(d), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = n(d);
    }
  }
  function p(M) {
    if (x = !1, f(M), !C) if (n(l) !== null) C = !0, Ge(w);
    else {
      var F = n(d);
      F !== null && De(p, F.startTime - M);
    }
  }
  function w(M, F) {
    C = !1, x && (x = !1, h(P), P = -1), g = !0;
    var B = v;
    try {
      for (f(F), y = n(l); y !== null && (!(y.expirationTime > F) || M && !$()); ) {
        var W = y.callback;
        if (typeof W == "function") {
          y.callback = null, v = y.priorityLevel;
          var Q = W(y.expirationTime <= F);
          F = e.unstable_now(), typeof Q == "function" ? y.callback = Q : y === n(l) && r(l), f(F);
        } else r(l);
        y = n(l);
      }
      if (y !== null) var et = !0;
      else {
        var I = n(d);
        I !== null && De(p, I.startTime - F), et = !1;
      }
      return et;
    } finally {
      y = null, v = B, g = !1;
    }
  }
  var k = !1, _ = null, P = -1, S = 5, N = -1;
  function $() {
    return !(e.unstable_now() - N < S);
  }
  function Y() {
    if (_ !== null) {
      var M = e.unstable_now();
      N = M;
      var F = !0;
      try {
        F = _(!0, M);
      } finally {
        F ? q() : (k = !1, _ = null);
      }
    } else k = !1;
  }
  var q;
  if (typeof c == "function") q = function() {
    c(Y);
  };
  else if (typeof MessageChannel < "u") {
    var b = new MessageChannel(), ee = b.port2;
    b.port1.onmessage = Y, q = function() {
      ee.postMessage(null);
    };
  } else q = function() {
    O(Y, 0);
  };
  function Ge(M) {
    _ = M, k || (k = !0, q());
  }
  function De(M, F) {
    P = O(function() {
      M(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    C || g || (C = !0, Ge(w));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(M) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = v;
    }
    var B = v;
    v = F;
    try {
      return M();
    } finally {
      v = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, F) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var B = v;
    v = M;
    try {
      return F();
    } finally {
      v = B;
    }
  }, e.unstable_scheduleCallback = function(M, F, B) {
    var W = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, M) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = B + Q, M = { id: m++, callback: F, priorityLevel: M, startTime: B, expirationTime: Q, sortIndex: -1 }, B > W ? (M.sortIndex = B, t(d, M), n(l) === null && M === n(d) && (x ? (h(P), P = -1) : x = !0, De(p, B - W))) : (M.sortIndex = Q, t(l, M), C || g || (C = !0, Ge(w))), M;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(M) {
    var F = v;
    return function() {
      var B = v;
      v = F;
      try {
        return M.apply(this, arguments);
      } finally {
        v = B;
      }
    };
  };
})(wu);
xu.exports = wu;
var lp = xu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up = j, Ue = lp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ju = /* @__PURE__ */ new Set(), kr = {};
function xn(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) ju.add(t[e]);
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wo = Object.prototype.hasOwnProperty, cp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ws = {}, Qs = {};
function dp(e) {
  return Wo.call(Qs, e) ? !0 : Wo.call(Ws, e) ? !1 : cp.test(e) ? Qs[e] = !0 : (Ws[e] = !0, !1);
}
function pp(e, t, n, r) {
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
function fp(e, t, n, r) {
  if (t === null || typeof t > "u" || pp(e, t, n, r)) return !0;
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
function Me(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  je[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  je[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  je[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  je[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  je[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  je[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  je[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  je[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  je[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yi,
    Ki
  );
  je[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yi, Ki);
  je[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yi, Ki);
  je[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  je[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  je[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var a = je.hasOwnProperty(t) ? je[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fp(t, n, a, r) && (n = null), r || a === null ? dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Zr = Symbol.for("react.element"), _n = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Xi = Symbol.for("react.strict_mode"), Qo = Symbol.for("react.profiler"), ku = Symbol.for("react.provider"), Su = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Yo = Symbol.for("react.suspense"), Ko = Symbol.for("react.suspense_list"), es = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), Cu = Symbol.for("react.offscreen"), Ys = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object" ? null : (e = Ys && e[Ys] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, jo;
function sr(e) {
  if (jo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    jo = t && t[1] || "";
  }
  return `
` + jo + e;
}
var ko = !1;
function So(e, t) {
  if (!e || ko) return "";
  ko = !0;
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
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var a = d.stack.split(`
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
    ko = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = So(e.type, !1), e;
    case 11:
      return e = So(e.type.render, !1), e;
    case 1:
      return e = So(e.type, !0), e;
    default:
      return "";
  }
}
function Jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case _n:
      return "Portal";
    case Qo:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Ko:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Su:
      return (e.displayName || "Context") + ".Consumer";
    case ku:
      return (e._context.displayName || "Context") + ".Provider";
    case Zi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case es:
      return t = e.displayName || null, t !== null ? t : Jo(e.type) || "Memo";
    case Ft:
      t = e._payload, e = e._init;
      try {
        return Jo(e(t));
      } catch {
      }
  }
  return null;
}
function hp(e) {
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
      return Jo(t);
    case 8:
      return t === Xi ? "StrictMode" : "Mode";
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
function en(e) {
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
function _u(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function gp(e) {
  var t = _u(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ea(e) {
  e._valueTracker || (e._valueTracker = gp(e));
}
function Nu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = _u(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ba(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ks(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = en(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Eu(e, t) {
  t = t.checked, t != null && Ji(e, "checked", t, !1);
}
function Zo(e, t) {
  Eu(e, t);
  var n = en(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ei(e, t.type, n) : t.hasOwnProperty("defaultValue") && ei(e, t.type, en(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Js(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ei(e, t, n) {
  (t !== "number" || ba(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: en(n) };
}
function zu(e, t) {
  var n = en(t.value), r = en(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Zs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Pu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ta, bu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ta = ta || document.createElement("div"), ta.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ta.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dr = {
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
}, vp = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
  vp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e];
  });
});
function Mu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px";
}
function Tu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Mu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var yp = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ri(e, t) {
  if (t) {
    if (yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function ai(e, t) {
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
var oi = null;
function ts(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ii = null, $n = null, On = null;
function el(e) {
  if (e = Hr(e)) {
    if (typeof ii != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = io(t), ii(e.stateNode, e.type, t));
  }
}
function Lu(e) {
  $n ? On ? On.push(e) : On = [e] : $n = e;
}
function Ru() {
  if ($n) {
    var e = $n, t = On;
    if (On = $n = null, el(e), t) for (e = 0; e < t.length; e++) el(t[e]);
  }
}
function Au(e, t) {
  return e(t);
}
function Iu() {
}
var Co = !1;
function Du(e, t, n) {
  if (Co) return e(t, n);
  Co = !0;
  try {
    return Au(e, t, n);
  } finally {
    Co = !1, ($n !== null || On !== null) && (Iu(), Ru());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = io(n);
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
var si = !1;
if (Pt) try {
  var er = {};
  Object.defineProperty(er, "passive", { get: function() {
    si = !0;
  } }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
} catch {
  si = !1;
}
function xp(e, t, n, r, a, o, s, u, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var pr = !1, Ma = null, Ta = !1, li = null, wp = { onError: function(e) {
  pr = !0, Ma = e;
} };
function jp(e, t, n, r, a, o, s, u, l) {
  pr = !1, Ma = null, xp.apply(wp, arguments);
}
function kp(e, t, n, r, a, o, s, u, l) {
  if (jp.apply(this, arguments), pr) {
    if (pr) {
      var d = Ma;
      pr = !1, Ma = null;
    } else throw Error(z(198));
    Ta || (Ta = !0, li = d);
  }
}
function wn(e) {
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
function $u(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function tl(e) {
  if (wn(e) !== e) throw Error(z(188));
}
function Sp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wn(e), t === null) throw Error(z(188));
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
        if (o === n) return tl(a), e;
        if (o === r) return tl(a), t;
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
function Ou(e) {
  return e = Sp(e), e !== null ? Fu(e) : null;
}
function Fu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bu = Ue.unstable_scheduleCallback, nl = Ue.unstable_cancelCallback, Cp = Ue.unstable_shouldYield, _p = Ue.unstable_requestPaint, pe = Ue.unstable_now, Np = Ue.unstable_getCurrentPriorityLevel, ns = Ue.unstable_ImmediatePriority, Uu = Ue.unstable_UserBlockingPriority, La = Ue.unstable_NormalPriority, Ep = Ue.unstable_LowPriority, qu = Ue.unstable_IdlePriority, no = null, xt = null;
function zp(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function") try {
    xt.onCommitFiberRoot(no, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Mp, Pp = Math.log, bp = Math.LN2;
function Mp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Pp(e) / bp | 0) | 0;
}
var na = 64, ra = 4194304;
function ur(e) {
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
    u !== 0 ? r = ur(u) : (o &= s, o !== 0 && (r = ur(o)));
  } else s = n & ~a, s !== 0 ? r = ur(s) : o !== 0 && (r = ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Tp(e, t) {
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
function Lp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ct(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Tp(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ui(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Vu() {
  var e = na;
  return na <<= 1, !(na & 4194240) && (na = 64), e;
}
function _o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Rp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ct(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function rs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var J = 0;
function Gu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hu, as, Wu, Qu, Yu, ci = !1, aa = [], Ht = null, Wt = null, Qt = null, _r = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Ut = [], Ap = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function tr(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Hr(t), t !== null && as(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Ip(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Ht = tr(Ht, e, t, n, r, a), !0;
    case "dragenter":
      return Wt = tr(Wt, e, t, n, r, a), !0;
    case "mouseover":
      return Qt = tr(Qt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return _r.set(o, tr(_r.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Nr.set(o, tr(Nr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Ku(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = $u(n), t !== null) {
          e.blockedOn = t, Yu(e.priority, function() {
            Wu(n);
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
    var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      oi = r, n.target.dispatchEvent(r), oi = null;
    } else return t = Hr(n), t !== null && as(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function al(e, t, n) {
  xa(e) && n.delete(t);
}
function Dp() {
  ci = !1, Ht !== null && xa(Ht) && (Ht = null), Wt !== null && xa(Wt) && (Wt = null), Qt !== null && xa(Qt) && (Qt = null), _r.forEach(al), Nr.forEach(al);
}
function nr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ci || (ci = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Dp)));
}
function Er(e) {
  function t(a) {
    return nr(a, e);
  }
  if (0 < aa.length) {
    nr(aa[0], e);
    for (var n = 1; n < aa.length; n++) {
      var r = aa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ht !== null && nr(Ht, e), Wt !== null && nr(Wt, e), Qt !== null && nr(Qt, e), _r.forEach(t), Nr.forEach(t), n = 0; n < Ut.length; n++) r = Ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && (n = Ut[0], n.blockedOn === null); ) Ku(n), n.blockedOn === null && Ut.shift();
}
var Fn = Lt.ReactCurrentBatchConfig, Aa = !0;
function $p(e, t, n, r) {
  var a = J, o = Fn.transition;
  Fn.transition = null;
  try {
    J = 1, os(e, t, n, r);
  } finally {
    J = a, Fn.transition = o;
  }
}
function Op(e, t, n, r) {
  var a = J, o = Fn.transition;
  Fn.transition = null;
  try {
    J = 4, os(e, t, n, r);
  } finally {
    J = a, Fn.transition = o;
  }
}
function os(e, t, n, r) {
  if (Aa) {
    var a = di(e, t, n, r);
    if (a === null) Ao(e, t, r, Ia, n), rl(e, r);
    else if (Ip(a, e, t, n, r)) r.stopPropagation();
    else if (rl(e, r), t & 4 && -1 < Ap.indexOf(e)) {
      for (; a !== null; ) {
        var o = Hr(a);
        if (o !== null && Hu(o), o = di(e, t, n, r), o === null && Ao(e, t, r, Ia, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Ao(e, t, r, null, n);
  }
}
var Ia = null;
function di(e, t, n, r) {
  if (Ia = null, e = ts(r), e = ln(e), e !== null) if (t = wn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = $u(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ia = e, null;
}
function Ju(e) {
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
      switch (Np()) {
        case ns:
          return 1;
        case Uu:
          return 4;
        case La:
        case Ep:
          return 16;
        case qu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null, is = null, wa = null;
function Xu() {
  if (wa) return wa;
  var e, t = is, n = t.length, r, a = "value" in Vt ? Vt.value : Vt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return wa = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ja(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function oa() {
  return !0;
}
function ol() {
  return !1;
}
function Ve(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? oa : ol, this.isPropagationStopped = ol, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = oa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = oa);
  }, persist: function() {
  }, isPersistent: oa }), t;
}
var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ss = Ve(Jn), Gr = ce({}, Jn, { view: 0, detail: 0 }), Fp = Ve(Gr), No, Eo, rr, ro = ce({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ls, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (No = e.screenX - rr.screenX, Eo = e.screenY - rr.screenY) : Eo = No = 0, rr = e), No);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Eo;
} }), il = Ve(ro), Bp = ce({}, ro, { dataTransfer: 0 }), Up = Ve(Bp), qp = ce({}, Gr, { relatedTarget: 0 }), zo = Ve(qp), Vp = ce({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gp = Ve(Vp), Hp = ce({}, Jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Wp = Ve(Hp), Qp = ce({}, Jn, { data: 0 }), sl = Ve(Qp), Yp = {
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
}, Kp = {
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
}, Jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Xp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jp[e]) ? !!t[e] : !1;
}
function ls() {
  return Xp;
}
var Zp = ce({}, Gr, { key: function(e) {
  if (e.key) {
    var t = Yp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ja(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ls, charCode: function(e) {
  return e.type === "keypress" ? ja(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ja(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ef = Ve(Zp), tf = ce({}, ro, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ll = Ve(tf), nf = ce({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ls }), rf = Ve(nf), af = ce({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), of = Ve(af), sf = ce({}, ro, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), lf = Ve(sf), uf = [9, 13, 27, 32], us = Pt && "CompositionEvent" in window, fr = null;
Pt && "documentMode" in document && (fr = document.documentMode);
var cf = Pt && "TextEvent" in window && !fr, Zu = Pt && (!us || fr && 8 < fr && 11 >= fr), ul = " ", cl = !1;
function ec(e, t) {
  switch (e) {
    case "keyup":
      return uf.indexOf(t.keyCode) !== -1;
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
function tc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function df(e, t) {
  switch (e) {
    case "compositionend":
      return tc(t);
    case "keypress":
      return t.which !== 32 ? null : (cl = !0, ul);
    case "textInput":
      return e = t.data, e === ul && cl ? null : e;
    default:
      return null;
  }
}
function pf(e, t) {
  if (En) return e === "compositionend" || !us && ec(e, t) ? (e = Xu(), wa = is = Vt = null, En = !1, e) : null;
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
      return Zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ff = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function dl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ff[e.type] : t === "textarea";
}
function nc(e, t, n, r) {
  Lu(r), t = Da(t, "onChange"), 0 < t.length && (n = new ss("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var mr = null, zr = null;
function mf(e) {
  fc(e, 0);
}
function ao(e) {
  var t = bn(e);
  if (Nu(t)) return e;
}
function hf(e, t) {
  if (e === "change") return t;
}
var rc = !1;
if (Pt) {
  var Po;
  if (Pt) {
    var bo = "oninput" in document;
    if (!bo) {
      var pl = document.createElement("div");
      pl.setAttribute("oninput", "return;"), bo = typeof pl.oninput == "function";
    }
    Po = bo;
  } else Po = !1;
  rc = Po && (!document.documentMode || 9 < document.documentMode);
}
function fl() {
  mr && (mr.detachEvent("onpropertychange", ac), zr = mr = null);
}
function ac(e) {
  if (e.propertyName === "value" && ao(zr)) {
    var t = [];
    nc(t, zr, e, ts(e)), Du(mf, t);
  }
}
function gf(e, t, n) {
  e === "focusin" ? (fl(), mr = t, zr = n, mr.attachEvent("onpropertychange", ac)) : e === "focusout" && fl();
}
function vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ao(zr);
}
function yf(e, t) {
  if (e === "click") return ao(t);
}
function xf(e, t) {
  if (e === "input" || e === "change") return ao(t);
}
function wf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : wf;
function Pr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Wo.call(t, a) || !pt(e[a], t[a])) return !1;
  }
  return !0;
}
function ml(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hl(e, t) {
  var n = ml(e);
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
    n = ml(n);
  }
}
function oc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ic() {
  for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ba(e.document);
  }
  return t;
}
function cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jf(e) {
  var t = ic(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && oc(n.ownerDocument.documentElement, n)) {
    if (r !== null && cs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = hl(n, o);
        var s = hl(
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
var kf = Pt && "documentMode" in document && 11 >= document.documentMode, zn = null, pi = null, hr = null, fi = !1;
function gl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fi || zn == null || zn !== ba(r) || (r = zn, "selectionStart" in r && cs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hr && Pr(hr, r) || (hr = r, r = Da(pi, "onSelect"), 0 < r.length && (t = new ss("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = zn)));
}
function ia(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: ia("Animation", "AnimationEnd"), animationiteration: ia("Animation", "AnimationIteration"), animationstart: ia("Animation", "AnimationStart"), transitionend: ia("Transition", "TransitionEnd") }, Mo = {}, sc = {};
Pt && (sc = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function oo(e) {
  if (Mo[e]) return Mo[e];
  if (!Pn[e]) return e;
  var t = Pn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in sc) return Mo[e] = t[n];
  return e;
}
var lc = oo("animationend"), uc = oo("animationiteration"), cc = oo("animationstart"), dc = oo("transitionend"), pc = /* @__PURE__ */ new Map(), vl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nn(e, t) {
  pc.set(e, t), xn(t, [e]);
}
for (var To = 0; To < vl.length; To++) {
  var Lo = vl[To], Sf = Lo.toLowerCase(), Cf = Lo[0].toUpperCase() + Lo.slice(1);
  nn(Sf, "on" + Cf);
}
nn(lc, "onAnimationEnd");
nn(uc, "onAnimationIteration");
nn(cc, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(dc, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _f = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function yl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, kp(r, t, void 0, e), e.currentTarget = null;
}
function fc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, d = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        yl(a, u, d), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, d = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        yl(a, u, d), o = l;
      }
    }
  }
  if (Ta) throw e = li, Ta = !1, li = null, e;
}
function re(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (mc(t, e, 2, !1), n.add(r));
}
function Ro(e, t, n) {
  var r = 0;
  t && (r |= 4), mc(n, e, r, t);
}
var sa = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[sa]) {
    e[sa] = !0, ju.forEach(function(n) {
      n !== "selectionchange" && (_f.has(n) || Ro(n, !1, e), Ro(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sa] || (t[sa] = !0, Ro("selectionchange", !1, t));
  }
}
function mc(e, t, n, r) {
  switch (Ju(t)) {
    case 1:
      var a = $p;
      break;
    case 4:
      a = Op;
      break;
    default:
      a = os;
  }
  n = a.bind(null, t, n, e), a = void 0, !si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Ao(e, t, n, r, a) {
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
        if (s = ln(u), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Du(function() {
    var d = o, m = ts(n), y = [];
    e: {
      var v = pc.get(e);
      if (v !== void 0) {
        var g = ss, C = e;
        switch (e) {
          case "keypress":
            if (ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ef;
            break;
          case "focusin":
            C = "focus", g = zo;
            break;
          case "focusout":
            C = "blur", g = zo;
            break;
          case "beforeblur":
          case "afterblur":
            g = zo;
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
            g = il;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Up;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = rf;
            break;
          case lc:
          case uc:
          case cc:
            g = Gp;
            break;
          case dc:
            g = of;
            break;
          case "scroll":
            g = Fp;
            break;
          case "wheel":
            g = lf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Wp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ll;
        }
        var x = (t & 4) !== 0, O = !x && e === "scroll", h = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var p = f.stateNode;
          if (f.tag === 5 && p !== null && (f = p, h !== null && (p = Cr(c, h), p != null && x.push(Mr(c, p, f)))), O) break;
          c = c.return;
        }
        0 < x.length && (v = new g(v, C, null, n, m), y.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", v && n !== oi && (C = n.relatedTarget || n.fromElement) && (ln(C) || C[bt])) break e;
        if ((g || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (C = n.relatedTarget || n.toElement, g = d, C = C ? ln(C) : null, C !== null && (O = wn(C), C !== O || C.tag !== 5 && C.tag !== 6) && (C = null)) : (g = null, C = d), g !== C)) {
          if (x = il, p = "onMouseLeave", h = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = ll, p = "onPointerLeave", h = "onPointerEnter", c = "pointer"), O = g == null ? v : bn(g), f = C == null ? v : bn(C), v = new x(p, c + "leave", g, n, m), v.target = O, v.relatedTarget = f, p = null, ln(m) === d && (x = new x(h, c + "enter", C, n, m), x.target = f, x.relatedTarget = O, p = x), O = p, g && C) t: {
            for (x = g, h = C, c = 0, f = x; f; f = Cn(f)) c++;
            for (f = 0, p = h; p; p = Cn(p)) f++;
            for (; 0 < c - f; ) x = Cn(x), c--;
            for (; 0 < f - c; ) h = Cn(h), f--;
            for (; c--; ) {
              if (x === h || h !== null && x === h.alternate) break t;
              x = Cn(x), h = Cn(h);
            }
            x = null;
          }
          else x = null;
          g !== null && xl(y, v, g, x, !1), C !== null && O !== null && xl(y, O, C, x, !0);
        }
      }
      e: {
        if (v = d ? bn(d) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file") var w = hf;
        else if (dl(v)) if (rc) w = xf;
        else {
          w = vf;
          var k = gf;
        }
        else (g = v.nodeName) && g.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (w = yf);
        if (w && (w = w(e, d))) {
          nc(y, w, n, m);
          break e;
        }
        k && k(e, v, d), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && ei(v, "number", v.value);
      }
      switch (k = d ? bn(d) : window, e) {
        case "focusin":
          (dl(k) || k.contentEditable === "true") && (zn = k, pi = d, hr = null);
          break;
        case "focusout":
          hr = pi = zn = null;
          break;
        case "mousedown":
          fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fi = !1, gl(y, n, m);
          break;
        case "selectionchange":
          if (kf) break;
        case "keydown":
        case "keyup":
          gl(y, n, m);
      }
      var _;
      if (us) e: {
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
      else En ? ec(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Zu && n.locale !== "ko" && (En || P !== "onCompositionStart" ? P === "onCompositionEnd" && En && (_ = Xu()) : (Vt = m, is = "value" in Vt ? Vt.value : Vt.textContent, En = !0)), k = Da(d, P), 0 < k.length && (P = new sl(P, e, null, n, m), y.push({ event: P, listeners: k }), _ ? P.data = _ : (_ = tc(n), _ !== null && (P.data = _)))), (_ = cf ? df(e, n) : pf(e, n)) && (d = Da(d, "onBeforeInput"), 0 < d.length && (m = new sl("onBeforeInput", "beforeinput", null, n, m), y.push({ event: m, listeners: d }), m.data = _));
    }
    fc(y, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Da(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Cr(e, n), o != null && r.unshift(Mr(e, o, a)), o = Cr(e, t), o != null && r.push(Mr(e, o, a))), e = e.return;
  }
  return r;
}
function Cn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xl(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, d = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && d !== null && (u = d, a ? (l = Cr(n, o), l != null && s.unshift(Mr(n, l, u))) : a || (l = Cr(n, o), l != null && s.push(Mr(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Nf = /\r\n?/g, Ef = /\u0000|\uFFFD/g;
function wl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Nf, `
`).replace(Ef, "");
}
function la(e, t, n) {
  if (t = wl(t), wl(e) !== t && n) throw Error(z(425));
}
function $a() {
}
var mi = null, hi = null;
function gi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0, zf = typeof clearTimeout == "function" ? clearTimeout : void 0, jl = typeof Promise == "function" ? Promise : void 0, Pf = typeof queueMicrotask == "function" ? queueMicrotask : typeof jl < "u" ? function(e) {
  return jl.resolve(null).then(e).catch(bf);
} : vi;
function bf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Io(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Er(t);
}
function Yt(e) {
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
function kl(e) {
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
var Xn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Xn, Tr = "__reactProps$" + Xn, bt = "__reactContainer$" + Xn, yi = "__reactEvents$" + Xn, Mf = "__reactListeners$" + Xn, Tf = "__reactHandles$" + Xn;
function ln(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[bt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = kl(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = kl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Hr(e) {
  return e = e[vt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function io(e) {
  return e[Tr] || null;
}
var xi = [], Mn = -1;
function rn(e) {
  return { current: e };
}
function ae(e) {
  0 > Mn || (e.current = xi[Mn], xi[Mn] = null, Mn--);
}
function te(e, t) {
  Mn++, xi[Mn] = e.current, e.current = t;
}
var tn = {}, _e = rn(tn), Re = rn(!1), mn = tn;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ae(e) {
  return e = e.childContextTypes, e != null;
}
function Oa() {
  ae(Re), ae(_e);
}
function Sl(e, t, n) {
  if (_e.current !== tn) throw Error(z(168));
  te(_e, t), te(Re, n);
}
function hc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, hp(e) || "Unknown", a));
  return ce({}, n, r);
}
function Fa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, mn = _e.current, te(_e, e), te(Re, Re.current), !0;
}
function Cl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = hc(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, ae(Re), ae(_e), te(_e, e)) : ae(Re), te(Re, n);
}
var _t = null, so = !1, Do = !1;
function gc(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function Lf(e) {
  so = !0, gc(e);
}
function an() {
  if (!Do && _t !== null) {
    Do = !0;
    var e = 0, t = J;
    try {
      var n = _t;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, so = !1;
    } catch (a) {
      throw _t !== null && (_t = _t.slice(e + 1)), Bu(ns, an), a;
    } finally {
      J = t, Do = !1;
    }
  }
  return null;
}
var Tn = [], Ln = 0, Ba = null, Ua = 0, We = [], Qe = 0, hn = null, Nt = 1, Et = "";
function on(e, t) {
  Tn[Ln++] = Ua, Tn[Ln++] = Ba, Ba = e, Ua = t;
}
function vc(e, t, n) {
  We[Qe++] = Nt, We[Qe++] = Et, We[Qe++] = hn, hn = e;
  var r = Nt;
  e = Et;
  var a = 32 - ct(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ct(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Nt = 1 << 32 - ct(t) + a | n << a | r, Et = o + e;
  } else Nt = 1 << o | n << a | r, Et = e;
}
function ds(e) {
  e.return !== null && (on(e, 1), vc(e, 1, 0));
}
function ps(e) {
  for (; e === Ba; ) Ba = Tn[--Ln], Tn[Ln] = null, Ua = Tn[--Ln], Tn[Ln] = null;
  for (; e === hn; ) hn = We[--Qe], We[Qe] = null, Et = We[--Qe], We[Qe] = null, Nt = We[--Qe], We[Qe] = null;
}
var Be = null, Fe = null, ie = !1, ut = null;
function yc(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _l(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Fe = Yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Fe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = hn !== null ? { id: Nt, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Fe = null, !0) : !1;
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ji(e) {
  if (ie) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!_l(e, t)) {
        if (wi(e)) throw Error(z(418));
        t = Yt(n.nextSibling);
        var r = Be;
        t && _l(e, t) ? yc(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Be = e);
      }
    } else {
      if (wi(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, ie = !1, Be = e;
    }
  }
}
function Nl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Be = e;
}
function ua(e) {
  if (e !== Be) return !1;
  if (!ie) return Nl(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps)), t && (t = Fe)) {
    if (wi(e)) throw xc(), Error(z(418));
    for (; t; ) yc(e, t), t = Yt(t.nextSibling);
  }
  if (Nl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Be ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function xc() {
  for (var e = Fe; e; ) e = Yt(e.nextSibling);
}
function Gn() {
  Fe = Be = null, ie = !1;
}
function fs(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Rf = Lt.ReactCurrentBatchConfig;
function ar(e, t, n) {
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
function ca(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function El(e) {
  var t = e._init;
  return t(e._payload);
}
function wc(e) {
  function t(h, c) {
    if (e) {
      var f = h.deletions;
      f === null ? (h.deletions = [c], h.flags |= 16) : f.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), c = c.sibling;
    return null;
  }
  function r(h, c) {
    for (h = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? h.set(c.key, c) : h.set(c.index, c), c = c.sibling;
    return h;
  }
  function a(h, c) {
    return h = Zt(h, c), h.index = 0, h.sibling = null, h;
  }
  function o(h, c, f) {
    return h.index = f, e ? (f = h.alternate, f !== null ? (f = f.index, f < c ? (h.flags |= 2, c) : f) : (h.flags |= 2, c)) : (h.flags |= 1048576, c);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, c, f, p) {
    return c === null || c.tag !== 6 ? (c = Vo(f, h.mode, p), c.return = h, c) : (c = a(c, f), c.return = h, c);
  }
  function l(h, c, f, p) {
    var w = f.type;
    return w === Nn ? m(h, c, f.props.children, p, f.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ft && El(w) === c.type) ? (p = a(c, f.props), p.ref = ar(h, c, f), p.return = h, p) : (p = za(f.type, f.key, f.props, null, h.mode, p), p.ref = ar(h, c, f), p.return = h, p);
  }
  function d(h, c, f, p) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Go(f, h.mode, p), c.return = h, c) : (c = a(c, f.children || []), c.return = h, c);
  }
  function m(h, c, f, p, w) {
    return c === null || c.tag !== 7 ? (c = pn(f, h.mode, p, w), c.return = h, c) : (c = a(c, f), c.return = h, c);
  }
  function y(h, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Vo("" + c, h.mode, f), c.return = h, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Zr:
          return f = za(c.type, c.key, c.props, null, h.mode, f), f.ref = ar(h, null, c), f.return = h, f;
        case _n:
          return c = Go(c, h.mode, f), c.return = h, c;
        case Ft:
          var p = c._init;
          return y(h, p(c._payload), f);
      }
      if (lr(c) || Zn(c)) return c = pn(c, h.mode, f, null), c.return = h, c;
      ca(h, c);
    }
    return null;
  }
  function v(h, c, f, p) {
    var w = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return w !== null ? null : u(h, c, "" + f, p);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Zr:
          return f.key === w ? l(h, c, f, p) : null;
        case _n:
          return f.key === w ? d(h, c, f, p) : null;
        case Ft:
          return w = f._init, v(
            h,
            c,
            w(f._payload),
            p
          );
      }
      if (lr(f) || Zn(f)) return w !== null ? null : m(h, c, f, p, null);
      ca(h, f);
    }
    return null;
  }
  function g(h, c, f, p, w) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return h = h.get(f) || null, u(c, h, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zr:
          return h = h.get(p.key === null ? f : p.key) || null, l(c, h, p, w);
        case _n:
          return h = h.get(p.key === null ? f : p.key) || null, d(c, h, p, w);
        case Ft:
          var k = p._init;
          return g(h, c, f, k(p._payload), w);
      }
      if (lr(p) || Zn(p)) return h = h.get(f) || null, m(c, h, p, w, null);
      ca(c, p);
    }
    return null;
  }
  function C(h, c, f, p) {
    for (var w = null, k = null, _ = c, P = c = 0, S = null; _ !== null && P < f.length; P++) {
      _.index > P ? (S = _, _ = null) : S = _.sibling;
      var N = v(h, _, f[P], p);
      if (N === null) {
        _ === null && (_ = S);
        break;
      }
      e && _ && N.alternate === null && t(h, _), c = o(N, c, P), k === null ? w = N : k.sibling = N, k = N, _ = S;
    }
    if (P === f.length) return n(h, _), ie && on(h, P), w;
    if (_ === null) {
      for (; P < f.length; P++) _ = y(h, f[P], p), _ !== null && (c = o(_, c, P), k === null ? w = _ : k.sibling = _, k = _);
      return ie && on(h, P), w;
    }
    for (_ = r(h, _); P < f.length; P++) S = g(_, h, P, f[P], p), S !== null && (e && S.alternate !== null && _.delete(S.key === null ? P : S.key), c = o(S, c, P), k === null ? w = S : k.sibling = S, k = S);
    return e && _.forEach(function($) {
      return t(h, $);
    }), ie && on(h, P), w;
  }
  function x(h, c, f, p) {
    var w = Zn(f);
    if (typeof w != "function") throw Error(z(150));
    if (f = w.call(f), f == null) throw Error(z(151));
    for (var k = w = null, _ = c, P = c = 0, S = null, N = f.next(); _ !== null && !N.done; P++, N = f.next()) {
      _.index > P ? (S = _, _ = null) : S = _.sibling;
      var $ = v(h, _, N.value, p);
      if ($ === null) {
        _ === null && (_ = S);
        break;
      }
      e && _ && $.alternate === null && t(h, _), c = o($, c, P), k === null ? w = $ : k.sibling = $, k = $, _ = S;
    }
    if (N.done) return n(
      h,
      _
    ), ie && on(h, P), w;
    if (_ === null) {
      for (; !N.done; P++, N = f.next()) N = y(h, N.value, p), N !== null && (c = o(N, c, P), k === null ? w = N : k.sibling = N, k = N);
      return ie && on(h, P), w;
    }
    for (_ = r(h, _); !N.done; P++, N = f.next()) N = g(_, h, P, N.value, p), N !== null && (e && N.alternate !== null && _.delete(N.key === null ? P : N.key), c = o(N, c, P), k === null ? w = N : k.sibling = N, k = N);
    return e && _.forEach(function(Y) {
      return t(h, Y);
    }), ie && on(h, P), w;
  }
  function O(h, c, f, p) {
    if (typeof f == "object" && f !== null && f.type === Nn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Zr:
          e: {
            for (var w = f.key, k = c; k !== null; ) {
              if (k.key === w) {
                if (w = f.type, w === Nn) {
                  if (k.tag === 7) {
                    n(h, k.sibling), c = a(k, f.props.children), c.return = h, h = c;
                    break e;
                  }
                } else if (k.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ft && El(w) === k.type) {
                  n(h, k.sibling), c = a(k, f.props), c.ref = ar(h, k, f), c.return = h, h = c;
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            f.type === Nn ? (c = pn(f.props.children, h.mode, p, f.key), c.return = h, h = c) : (p = za(f.type, f.key, f.props, null, h.mode, p), p.ref = ar(h, c, f), p.return = h, h = p);
          }
          return s(h);
        case _n:
          e: {
            for (k = f.key; c !== null; ) {
              if (c.key === k) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(h, c.sibling), c = a(c, f.children || []), c.return = h, h = c;
                break e;
              } else {
                n(h, c);
                break;
              }
              else t(h, c);
              c = c.sibling;
            }
            c = Go(f, h.mode, p), c.return = h, h = c;
          }
          return s(h);
        case Ft:
          return k = f._init, O(h, c, k(f._payload), p);
      }
      if (lr(f)) return C(h, c, f, p);
      if (Zn(f)) return x(h, c, f, p);
      ca(h, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(h, c.sibling), c = a(c, f), c.return = h, h = c) : (n(h, c), c = Vo(f, h.mode, p), c.return = h, h = c), s(h)) : n(h, c);
  }
  return O;
}
var Hn = wc(!0), jc = wc(!1), qa = rn(null), Va = null, Rn = null, ms = null;
function hs() {
  ms = Rn = Va = null;
}
function gs(e) {
  var t = qa.current;
  ae(qa), e._currentValue = t;
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Bn(e, t) {
  Va = e, ms = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function Je(e) {
  var t = e._currentValue;
  if (ms !== e) if (e = { context: e, memoizedValue: t, next: null }, Rn === null) {
    if (Va === null) throw Error(z(308));
    Rn = e, Va.dependencies = { lanes: 0, firstContext: e };
  } else Rn = Rn.next = e;
  return t;
}
var un = null;
function vs(e) {
  un === null ? un = [e] : un.push(e);
}
function kc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, vs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function ys(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Mt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, vs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Mt(e, n);
}
function ka(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rs(e, n);
  }
}
function zl(e, t) {
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
  Bt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, d = l.next;
    l.next = null, s === null ? o = d : s.next = d, s = l;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== s && (u === null ? m.firstBaseUpdate = d : u.next = d, m.lastBaseUpdate = l));
  }
  if (o !== null) {
    var y = a.baseState;
    s = 0, m = d = l = null, u = o;
    do {
      var v = u.lane, g = u.eventTime;
      if ((r & v) === v) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, x = u;
          switch (v = t, g = n, x.tag) {
            case 1:
              if (C = x.payload, typeof C == "function") {
                y = C.call(g, y, v);
                break e;
              }
              y = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = x.payload, v = typeof C == "function" ? C.call(g, y, v) : C, v == null) break e;
              y = ce({}, y, v);
              break e;
            case 2:
              Bt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = a.effects, v === null ? a.effects = [u] : v.push(u));
      } else g = { eventTime: g, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (d = m = g, l = y) : m = m.next = g, s |= v;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, a.lastBaseUpdate = v, a.shared.pending = null;
      }
    } while (!0);
    if (m === null && (l = y), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = m, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    vn |= s, e.lanes = s, e.memoizedState = y;
  }
}
function Pl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Wr = {}, wt = rn(Wr), Lr = rn(Wr), Rr = rn(Wr);
function cn(e) {
  if (e === Wr) throw Error(z(174));
  return e;
}
function xs(e, t) {
  switch (te(Rr, t), te(Lr, e), te(wt, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ni(t, e);
  }
  ae(wt), te(wt, t);
}
function Wn() {
  ae(wt), ae(Lr), ae(Rr);
}
function Cc(e) {
  cn(Rr.current);
  var t = cn(wt.current), n = ni(t, e.type);
  t !== n && (te(Lr, e), te(wt, n));
}
function ws(e) {
  Lr.current === e && (ae(wt), ae(Lr));
}
var le = rn(0);
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
var $o = [];
function js() {
  for (var e = 0; e < $o.length; e++) $o[e]._workInProgressVersionPrimary = null;
  $o.length = 0;
}
var Sa = Lt.ReactCurrentDispatcher, Oo = Lt.ReactCurrentBatchConfig, gn = 0, ue = null, he = null, ve = null, Wa = !1, gr = !1, Ar = 0, Af = 0;
function ke() {
  throw Error(z(321));
}
function ks(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Ss(e, t, n, r, a, o) {
  if (gn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sa.current = e === null || e.memoizedState === null ? Of : Ff, e = n(r, a), gr) {
    o = 0;
    do {
      if (gr = !1, Ar = 0, 25 <= o) throw Error(z(301));
      o += 1, ve = he = null, t.updateQueue = null, Sa.current = Bf, e = n(r, a);
    } while (gr);
  }
  if (Sa.current = Qa, t = he !== null && he.next !== null, gn = 0, ve = he = ue = null, Wa = !1, t) throw Error(z(300));
  return e;
}
function Cs() {
  var e = Ar !== 0;
  return Ar = 0, e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? ue.memoizedState = ve = e : ve = ve.next = e, ve;
}
function Xe() {
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
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fo(e) {
  var t = Xe(), n = t.queue;
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
    var u = s = null, l = null, d = o;
    do {
      var m = d.lane;
      if ((gn & m) === m) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (u = l = y, s = r) : l = l.next = y, ue.lanes |= m, vn |= m;
      }
      d = d.next;
    } while (d !== null && d !== o);
    l === null ? s = r : l.next = u, pt(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ue.lanes |= o, vn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bo(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    pt(o, t.memoizedState) || (Le = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function _c() {
}
function Nc(e, t) {
  var n = ue, r = Xe(), a = t(), o = !pt(r.memoizedState, a);
  if (o && (r.memoizedState = a, Le = !0), r = r.queue, _s(Pc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, zc.bind(null, n, r, a, t), void 0, null), ye === null) throw Error(z(349));
    gn & 30 || Ec(n, t, a);
  }
  return a;
}
function Ec(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function zc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, bc(t) && Mc(e);
}
function Pc(e, t, n) {
  return n(function() {
    bc(t) && Mc(e);
  });
}
function bc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Mc(e) {
  var t = Mt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function bl(e) {
  var t = gt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = $f.bind(null, ue, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tc() {
  return Xe().memoizedState;
}
function Ca(e, t, n, r) {
  var a = gt();
  ue.flags |= e, a.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function lo(e, t, n, r) {
  var a = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (o = s.destroy, r !== null && ks(r, s.deps)) {
      a.memoizedState = Dr(t, n, o, r);
      return;
    }
  }
  ue.flags |= e, a.memoizedState = Dr(1 | t, n, o, r);
}
function Ml(e, t) {
  return Ca(8390656, 8, e, t);
}
function _s(e, t) {
  return lo(2048, 8, e, t);
}
function Lc(e, t) {
  return lo(4, 2, e, t);
}
function Rc(e, t) {
  return lo(4, 4, e, t);
}
function Ac(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ic(e, t, n) {
  return n = n != null ? n.concat([e]) : null, lo(4, 4, Ac.bind(null, t, e), n);
}
function Ns() {
}
function Dc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function $c(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Oc(e, t, n) {
  return gn & 21 ? (pt(n, t) || (n = Vu(), ue.lanes |= n, vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function If(e, t) {
  var n = J;
  J = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Oo.transition;
  Oo.transition = {};
  try {
    e(!1), t();
  } finally {
    J = n, Oo.transition = r;
  }
}
function Fc() {
  return Xe().memoizedState;
}
function Df(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bc(e)) Uc(t, n);
  else if (n = kc(e, t, n, r), n !== null) {
    var a = Pe();
    dt(n, e, r, a), qc(n, t, r);
  }
}
function $f(e, t, n) {
  var r = Xt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bc(e)) Uc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, pt(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, vs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = kc(e, t, a, r), n !== null && (a = Pe(), dt(n, e, r, a), qc(n, t, r));
  }
}
function Bc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Uc(e, t) {
  gr = Wa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function qc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rs(e, n);
  }
}
var Qa = { readContext: Je, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, Of = { readContext: Je, useCallback: function(e, t) {
  return gt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Je, useEffect: Ml, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ca(
    4194308,
    4,
    Ac.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ca(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ca(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Df.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gt();
  return e = { current: e }, t.memoizedState = e;
}, useState: bl, useDebugValue: Ns, useDeferredValue: function(e) {
  return gt().memoizedState = e;
}, useTransition: function() {
  var e = bl(!1), t = e[0];
  return e = If.bind(null, e[1]), gt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, a = gt();
  if (ie) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), ye === null) throw Error(z(349));
    gn & 30 || Ec(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Ml(Pc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Dr(9, zc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = gt(), t = ye.identifierPrefix;
  if (ie) {
    var n = Et, r = Nt;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Af++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ff = {
  readContext: Je,
  useCallback: Dc,
  useContext: Je,
  useEffect: _s,
  useImperativeHandle: Ic,
  useInsertionEffect: Lc,
  useLayoutEffect: Rc,
  useMemo: $c,
  useReducer: Fo,
  useRef: Tc,
  useState: function() {
    return Fo(Ir);
  },
  useDebugValue: Ns,
  useDeferredValue: function(e) {
    var t = Xe();
    return Oc(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = Fo(Ir)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: _c,
  useSyncExternalStore: Nc,
  useId: Fc,
  unstable_isNewReconciler: !1
}, Bf = { readContext: Je, useCallback: Dc, useContext: Je, useEffect: _s, useImperativeHandle: Ic, useInsertionEffect: Lc, useLayoutEffect: Rc, useMemo: $c, useReducer: Bo, useRef: Tc, useState: function() {
  return Bo(Ir);
}, useDebugValue: Ns, useDeferredValue: function(e) {
  var t = Xe();
  return he === null ? t.memoizedState = e : Oc(t, he.memoizedState, e);
}, useTransition: function() {
  var e = Bo(Ir)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: _c, useSyncExternalStore: Nc, useId: Fc, unstable_isNewReconciler: !1 };
function st(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uo = { isMounted: function(e) {
  return (e = e._reactInternals) ? wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), a = Xt(e), o = zt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Kt(e, o, a), t !== null && (dt(t, e, a, r), ka(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), a = Xt(e), o = zt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Kt(e, o, a), t !== null && (dt(t, e, a, r), ka(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Pe(), r = Xt(e), a = zt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Kt(e, a, r), t !== null && (dt(t, e, r, n), ka(t, e, r));
} };
function Tl(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(a, o) : !0;
}
function Vc(e, t, n) {
  var r = !1, a = tn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Je(o) : (a = Ae(t) ? mn : _e.current, r = t.contextTypes, o = (r = r != null) ? Vn(e, a) : tn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = uo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ll(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && uo.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ys(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Je(o) : (o = Ae(t) ? mn : _e.current, a.context = Vn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Si(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && uo.enqueueReplaceState(a, a.state, null), Ga(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qn(e, t) {
  try {
    var n = "", r = t;
    do
      n += mp(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Uf = typeof WeakMap == "function" ? WeakMap : Map;
function Gc(e, t, n) {
  n = zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ka || (Ka = !0, Ai = r), _i(e, t);
  }, n;
}
function Hc(e, t, n) {
  n = zt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      _i(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    _i(e, t), typeof r != "function" && (Jt === null ? Jt = /* @__PURE__ */ new Set([this]) : Jt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Rl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = nm.bind(null, e, t, n), t.then(e, e));
}
function Al(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Il(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e);
}
var qf = Lt.ReactCurrentOwner, Le = !1;
function ze(e, t, n, r) {
  t.child = e === null ? jc(t, null, n, r) : Hn(t, e.child, n, r);
}
function Dl(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Bn(t, a), r = Ss(e, t, n, r, o, a), n = Cs(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Tt(e, t, a)) : (ie && n && ds(t), t.flags |= 1, ze(e, t, r, a), t.child);
}
function $l(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Rs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Wc(e, t, o, r, a)) : (e = za(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return Tt(e, t, a);
  }
  return t.flags |= 1, e = Zt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, Tt(e, t, a);
  }
  return Ni(e, t, n, r, a);
}
function Qc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(In, Oe), Oe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(In, Oe), Oe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, te(In, Oe), Oe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, te(In, Oe), Oe |= r;
  return ze(e, t, a, n), t.child;
}
function Yc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ni(e, t, n, r, a) {
  var o = Ae(n) ? mn : _e.current;
  return o = Vn(t, o), Bn(t, a), n = Ss(e, t, n, r, o, a), r = Cs(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Tt(e, t, a)) : (ie && r && ds(t), t.flags |= 1, ze(e, t, n, a), t.child);
}
function Ol(e, t, n, r, a) {
  if (Ae(n)) {
    var o = !0;
    Fa(t);
  } else o = !1;
  if (Bn(t, a), t.stateNode === null) _a(e, t), Vc(t, n, r), Ci(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Je(d) : (d = Ae(n) ? mn : _e.current, d = Vn(t, d));
    var m = n.getDerivedStateFromProps, y = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    y || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== d) && Ll(t, s, r, d), Bt = !1;
    var v = t.memoizedState;
    s.state = v, Ga(t, r, s, a), l = t.memoizedState, u !== r || v !== l || Re.current || Bt ? (typeof m == "function" && (Si(t, n, m, r), l = t.memoizedState), (u = Bt || Tl(t, n, u, r, v, l, d)) ? (y || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Sc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : st(t.type, u), s.props = d, y = t.pendingProps, v = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Je(l) : (l = Ae(n) ? mn : _e.current, l = Vn(t, l));
    var g = n.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== y || v !== l) && Ll(t, s, r, l), Bt = !1, v = t.memoizedState, s.state = v, Ga(t, r, s, a);
    var C = t.memoizedState;
    u !== y || v !== C || Re.current || Bt ? (typeof g == "function" && (Si(t, n, g, r), C = t.memoizedState), (d = Bt || Tl(t, n, d, r, v, C, l) || !1) ? (m || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, C, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, C, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), s.props = r, s.state = C, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ei(e, t, n, r, o, a);
}
function Ei(e, t, n, r, a, o) {
  Yc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Cl(t, n, !1), Tt(e, t, o);
  r = t.stateNode, qf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Hn(t, e.child, null, o), t.child = Hn(t, null, u, o)) : ze(e, t, u, o), t.memoizedState = r.state, a && Cl(t, n, !0), t.child;
}
function Kc(e) {
  var t = e.stateNode;
  t.pendingContext ? Sl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sl(e, t.context, !1), xs(e, t.containerInfo);
}
function Fl(e, t, n, r, a) {
  return Gn(), fs(a), t.flags |= 256, ze(e, t, n, r), t.child;
}
var zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jc(e, t, n) {
  var r = t.pendingProps, a = le.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), te(le, a & 1), e === null)
    return ji(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = fo(s, r, 0, null), e = pn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Pi(n), t.memoizedState = zi, e) : Es(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Vf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Zt(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Zt(u, o) : (o = pn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Pi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = zi, r;
  }
  return o = e.child, e = o.sibling, r = Zt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Es(e, t) {
  return t = fo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function da(e, t, n, r) {
  return r !== null && fs(r), Hn(t, e.child, null, n), e = Es(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Vf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Uo(Error(z(422))), da(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = fo({ mode: "visible", children: r.children }, a, 0, null), o = pn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Hn(t, e.child, null, s), t.child.memoizedState = Pi(s), t.memoizedState = zi, o);
  if (!(t.mode & 1)) return da(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Uo(o, r, void 0), da(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Le || u) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Mt(e, a), dt(r, e, a, -1));
    }
    return Ls(), r = Uo(Error(z(421))), da(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Fe = Yt(a.nextSibling), Be = t, ie = !0, ut = null, e !== null && (We[Qe++] = Nt, We[Qe++] = Et, We[Qe++] = hn, Nt = e.id, Et = e.overflow, hn = t), t = Es(t, r.children), t.flags |= 4096, t);
}
function Bl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function qo(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Xc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (ze(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bl(e, n, t);
      else if (e.tag === 19) Bl(e, n, t);
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
  if (te(le, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ha(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), qo(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Ha(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      qo(t, !0, n, null, o);
      break;
    case "together":
      qo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function _a(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Gf(e, t, n) {
  switch (t.tag) {
    case 3:
      Kc(t), Gn();
      break;
    case 5:
      Cc(t);
      break;
    case 1:
      Ae(t.type) && Fa(t);
      break;
    case 4:
      xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      te(qa, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jc(e, t, n) : (te(le, le.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
      te(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), te(le, le.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qc(e, t, n);
  }
  return Tt(e, t, n);
}
var Zc, bi, ed, td;
Zc = function(e, t) {
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
bi = function() {
};
ed = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, cn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Xo(e, a), r = Xo(e, r), o = [];
        break;
      case "select":
        a = ce({}, a, { value: void 0 }), r = ce({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = ti(e, a), r = ti(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $a);
    }
    ri(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var u = a[d];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (kr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var l = r[d];
      if (u = a != null ? a[d] : void 0, r.hasOwnProperty(d) && l !== u && (l != null || u != null)) if (d === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (kr.hasOwnProperty(d) ? (l != null && d === "onScroll" && re("scroll", e), o || u === l || (o = [])) : (o = o || []).push(d, l));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
td = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!ie) switch (e.tailMode) {
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
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Hf(e, t, n) {
  var r = t.pendingProps;
  switch (ps(t), t.tag) {
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
      return Se(t), null;
    case 1:
      return Ae(t.type) && Oa(), Se(t), null;
    case 3:
      return r = t.stateNode, Wn(), ae(Re), ae(_e), js(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ua(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && ($i(ut), ut = null))), bi(e, t), Se(t), null;
    case 5:
      ws(t);
      var a = cn(Rr.current);
      if (n = t.type, e !== null && t.stateNode != null) ed(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Se(t), null;
        }
        if (e = cn(wt.current), ua(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[vt] = t, r[Tr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < cr.length; a++) re(cr[a], r);
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
              Ks(r, o), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
              break;
            case "textarea":
              Xs(r, o), re("invalid", r);
          }
          ri(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && la(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && la(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : kr.hasOwnProperty(s) && u != null && s === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              ea(r), Js(r, o, !0);
              break;
            case "textarea":
              ea(r), Zs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $a);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[vt] = t, e[Tr] = r, Zc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ai(n, r), n) {
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
                for (a = 0; a < cr.length; a++) re(cr[a], e);
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
                Ks(e, r), a = Xo(e, r), re("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ce({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                Xs(e, r), a = ti(e, r), re("invalid", e);
                break;
              default:
                a = r;
            }
            ri(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Tu(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && bu(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Sr(e, l) : typeof l == "number" && Sr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (kr.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && Ji(e, o, l, s));
            }
            switch (n) {
              case "input":
                ea(e), Js(e, r, !1);
                break;
              case "textarea":
                ea(e), Zs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
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
                typeof a.onClick == "function" && (e.onclick = $a);
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
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = cn(Rr.current), cn(wt.current), ua(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (o = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
            case 3:
              la(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && la(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (ae(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Fe !== null && t.mode & 1 && !(t.flags & 128)) xc(), Gn(), t.flags |= 98560, o = !1;
        else if (o = ua(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[vt] = t;
          } else Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), o = !1;
        } else ut !== null && ($i(ut), ut = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ge === 0 && (ge = 3) : Ls())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return Wn(), bi(e, t), e === null && br(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return gs(t.type._context), Se(t), null;
    case 17:
      return Ae(t.type) && Oa(), Se(t), null;
    case 19:
      if (ae(le), o = t.memoizedState, o === null) return Se(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) or(o, !1);
      else {
        if (ge !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ha(e), s !== null) {
            for (t.flags |= 128, or(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && pe() > Yn && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ha(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), or(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ie) return Se(t), null;
        } else 2 * pe() - o.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = pe(), t.sibling = null, n = le.current, te(le, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return Ts(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Wf(e, t) {
  switch (ps(t), t.tag) {
    case 1:
      return Ae(t.type) && Oa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Wn(), ae(Re), ae(_e), js(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ws(t), null;
    case 13:
      if (ae(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Gn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(le), null;
    case 4:
      return Wn(), null;
    case 10:
      return gs(t.type._context), null;
    case 22:
    case 23:
      return Ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pa = !1, Ce = !1, Qf = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function Mi(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Ul = !1;
function Yf(e, t) {
  if (mi = Aa, e = ic(), cs(e)) {
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
        var s = 0, u = -1, l = -1, d = 0, m = 0, y = e, v = null;
        t: for (; ; ) {
          for (var g; y !== n || a !== 0 && y.nodeType !== 3 || (u = s + a), y !== o || r !== 0 && y.nodeType !== 3 || (l = s + r), y.nodeType === 3 && (s += y.nodeValue.length), (g = y.firstChild) !== null; )
            v = y, y = g;
          for (; ; ) {
            if (y === e) break t;
            if (v === n && ++d === a && (u = s), v === o && ++m === r && (l = s), (g = y.nextSibling) !== null) break;
            y = v, v = y.parentNode;
          }
          y = g;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hi = { focusedElem: e, selectionRange: n }, Aa = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var x = C.memoizedProps, O = C.memoizedState, h = t.stateNode, c = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : st(t.type, x), O);
            h.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(z(163));
      }
    } catch (p) {
      de(t, t.return, p);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return C = Ul, Ul = !1, C;
}
function vr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Mi(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function co(e, t) {
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
function Ti(e) {
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
function nd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Tr], delete t[yi], delete t[Mf], delete t[Tf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ql(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $a));
  else if (r !== 4 && (e = e.child, e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), e = e.sibling;
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), e = e.sibling;
}
var xe = null, lt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) ad(e, t, n), n = n.sibling;
}
function ad(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function") try {
    xt.onCommitFiberUnmount(no, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ce || An(n, t);
    case 6:
      var r = xe, a = lt;
      xe = null, Ot(e, t, n), xe = r, lt = a, xe !== null && (lt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null && (lt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? Io(e.parentNode, n) : e.nodeType === 1 && Io(e, n), Er(e)) : Io(xe, n.stateNode));
      break;
    case 4:
      r = xe, a = lt, xe = n.stateNode.containerInfo, lt = !0, Ot(e, t, n), xe = r, lt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Mi(n, t, s), a = a.next;
        } while (a !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!Ce && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        de(n, t, u);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Ot(e, t, n), Ce = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function Vl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qf()), t.forEach(function(r) {
      var a = am.bind(null, e, r);
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
            xe = u.stateNode, lt = !1;
            break e;
          case 3:
            xe = u.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            xe = u.stateNode.containerInfo, lt = !0;
            break e;
        }
        u = u.return;
      }
      if (xe === null) throw Error(z(160));
      ad(o, s, a), xe = null, lt = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      de(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) od(t, e), t = t.sibling;
}
function od(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), ht(e), r & 4) {
        try {
          vr(3, e, e.return), co(3, e);
        } catch (x) {
          de(e, e.return, x);
        }
        try {
          vr(5, e, e.return);
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 1:
      it(t, e), ht(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (it(t, e), ht(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Sr(a, "");
        } catch (x) {
          de(e, e.return, x);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Eu(a, o), ai(u, s);
          var d = ai(u, o);
          for (s = 0; s < l.length; s += 2) {
            var m = l[s], y = l[s + 1];
            m === "style" ? Tu(a, y) : m === "dangerouslySetInnerHTML" ? bu(a, y) : m === "children" ? Sr(a, y) : Ji(a, m, y, d);
          }
          switch (u) {
            case "input":
              Zo(a, o);
              break;
            case "textarea":
              zu(a, o);
              break;
            case "select":
              var v = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? Dn(a, !!o.multiple, g, !1) : v !== !!o.multiple && (o.defaultValue != null ? Dn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Dn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Tr] = o;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 6:
      if (it(t, e), ht(e), r & 4) {
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
      if (it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Er(t.containerInfo);
      } catch (x) {
        de(e, e.return, x);
      }
      break;
    case 4:
      it(t, e), ht(e);
      break;
    case 13:
      it(t, e), ht(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (bs = pe())), r & 4 && Vl(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (d = Ce) || m, it(t, e), Ce = d) : it(t, e), ht(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (L = e, m = e.child; m !== null; ) {
          for (y = L = m; L !== null; ) {
            switch (v = L, g = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                vr(4, v, v.return);
                break;
              case 1:
                An(v, v.return);
                var C = v.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (x) {
                    de(r, n, x);
                  }
                }
                break;
              case 5:
                An(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Hl(y);
                  continue;
                }
            }
            g !== null ? (g.return = v, L = g) : Hl(y);
          }
          m = m.sibling;
        }
        e: for (m = null, y = e; ; ) {
          if (y.tag === 5) {
            if (m === null) {
              m = y;
              try {
                a = y.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, l = y.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Mu("display", s));
              } catch (x) {
                de(e, e.return, x);
              }
            }
          } else if (y.tag === 6) {
            if (m === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (x) {
              de(e, e.return, x);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            m === y && (m = null), y = y.return;
          }
          m === y && (m = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      it(t, e), ht(e), r & 4 && Vl(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rd(n)) {
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
          r.flags & 32 && (Sr(a, ""), r.flags &= -33);
          var o = ql(e);
          Ri(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = ql(e);
          Li(e, u, s);
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
function Kf(e, t, n) {
  L = e, id(e);
}
function id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var a = L, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || pa;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || Ce;
        u = pa;
        var d = Ce;
        if (pa = s, (Ce = l) && !d) for (L = a; L !== null; ) s = L, l = s.child, s.tag === 22 && s.memoizedState !== null ? Wl(a) : l !== null ? (l.return = s, L = l) : Wl(a);
        for (; o !== null; ) L = o, id(o), o = o.sibling;
        L = a, pa = u, Ce = d;
      }
      Gl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, L = o) : Gl(e);
  }
}
function Gl(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || co(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Pl(t, o, r);
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
              Pl(t, s, n);
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
              var d = t.alternate;
              if (d !== null) {
                var m = d.memoizedState;
                if (m !== null) {
                  var y = m.dehydrated;
                  y !== null && Er(y);
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
        Ce || t.flags & 512 && Ti(t);
      } catch (v) {
        de(t, t.return, v);
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
function Hl(e) {
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
function Wl(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            co(4, t);
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
            Ti(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ti(t);
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
var Jf = Math.ceil, Ya = Lt.ReactCurrentDispatcher, zs = Lt.ReactCurrentOwner, Ke = Lt.ReactCurrentBatchConfig, H = 0, ye = null, me = null, we = 0, Oe = 0, In = rn(0), ge = 0, $r = null, vn = 0, po = 0, Ps = 0, yr = null, Te = null, bs = 0, Yn = 1 / 0, Ct = null, Ka = !1, Ai = null, Jt = null, fa = !1, Gt = null, Ja = 0, xr = 0, Ii = null, Na = -1, Ea = 0;
function Pe() {
  return H & 6 ? pe() : Na !== -1 ? Na : Na = pe();
}
function Xt(e) {
  return e.mode & 1 ? H & 2 && we !== 0 ? we & -we : Rf.transition !== null ? (Ea === 0 && (Ea = Vu()), Ea) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ju(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < xr) throw xr = 0, Ii = null, Error(z(185));
  Vr(e, n, r), (!(H & 2) || e !== ye) && (e === ye && (!(H & 2) && (po |= n), ge === 4 && qt(e, we)), Ie(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Yn = pe() + 500, so && an()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Lp(e, t);
  var r = Ra(e, e === ye ? we : 0);
  if (r === 0) n !== null && nl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && nl(n), t === 1) e.tag === 0 ? Lf(Ql.bind(null, e)) : gc(Ql.bind(null, e)), Pf(function() {
      !(H & 6) && an();
    }), n = null;
    else {
      switch (Gu(r)) {
        case 1:
          n = ns;
          break;
        case 4:
          n = Uu;
          break;
        case 16:
          n = La;
          break;
        case 536870912:
          n = qu;
          break;
        default:
          n = La;
      }
      n = md(n, sd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function sd(e, t) {
  if (Na = -1, Ea = 0, H & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Ra(e, e === ye ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xa(e, r);
  else {
    t = r;
    var a = H;
    H |= 2;
    var o = ud();
    (ye !== e || we !== t) && (Ct = null, Yn = pe() + 500, dn(e, t));
    do
      try {
        em();
        break;
      } catch (u) {
        ld(e, u);
      }
    while (!0);
    hs(), Ya.current = o, H = a, me !== null ? t = 0 : (ye = null, we = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (a = ui(e), a !== 0 && (r = a, t = Di(e, a))), t === 1) throw n = $r, dn(e, 0), qt(e, r), Ie(e, pe()), n;
    if (t === 6) qt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Xf(a) && (t = Xa(e, r), t === 2 && (o = ui(e), o !== 0 && (r = o, t = Di(e, o))), t === 1)) throw n = $r, dn(e, 0), qt(e, r), Ie(e, pe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          sn(e, Te, Ct);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = bs + 500 - pe(), 10 < t)) {
            if (Ra(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = vi(sn.bind(null, e, Te, Ct), t);
            break;
          }
          sn(e, Te, Ct);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ct(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vi(sn.bind(null, e, Te, Ct), r);
            break;
          }
          sn(e, Te, Ct);
          break;
        case 5:
          sn(e, Te, Ct);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ie(e, pe()), e.callbackNode === n ? sd.bind(null, e) : null;
}
function Di(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = Xa(e, t), e !== 2 && (t = Te, Te = n, t !== null && $i(t)), e;
}
function $i(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function Xf(e) {
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
function qt(e, t) {
  for (t &= ~Ps, t &= ~po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ql(e) {
  if (H & 6) throw Error(z(327));
  Un();
  var t = Ra(e, 0);
  if (!(t & 1)) return Ie(e, pe()), null;
  var n = Xa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && (t = r, n = Di(e, r));
  }
  if (n === 1) throw n = $r, dn(e, 0), qt(e, t), Ie(e, pe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Te, Ct), Ie(e, pe()), null;
}
function Ms(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Yn = pe() + 500, so && an());
  }
}
function yn(e) {
  Gt !== null && Gt.tag === 0 && !(H & 6) && Un();
  var t = H;
  H |= 1;
  var n = Ke.transition, r = J;
  try {
    if (Ke.transition = null, J = 1, e) return e();
  } finally {
    J = r, Ke.transition = n, H = t, !(H & 6) && an();
  }
}
function Ts() {
  Oe = In.current, ae(In);
}
function dn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zf(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (ps(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Oa();
        break;
      case 3:
        Wn(), ae(Re), ae(_e), js();
        break;
      case 5:
        ws(r);
        break;
      case 4:
        Wn();
        break;
      case 13:
        ae(le);
        break;
      case 19:
        ae(le);
        break;
      case 10:
        gs(r.type._context);
        break;
      case 22:
      case 23:
        Ts();
    }
    n = n.return;
  }
  if (ye = e, me = e = Zt(e.current, null), we = Oe = t, ge = 0, $r = null, Ps = po = vn = 0, Te = yr = null, un !== null) {
    for (t = 0; t < un.length; t++) if (n = un[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    un = null;
  }
  return e;
}
function ld(e, t) {
  do {
    var n = me;
    try {
      if (hs(), Sa.current = Qa, Wa) {
        for (var r = ue.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Wa = !1;
      }
      if (gn = 0, ve = he = ue = null, gr = !1, Ar = 0, zs.current = null, n === null || n.return === null) {
        ge = 1, $r = t, me = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = we, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, m = u, y = m.tag;
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var v = m.alternate;
            v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = Al(s);
          if (g !== null) {
            g.flags &= -257, Il(g, s, u, o, t), g.mode & 1 && Rl(o, d, t), t = g, l = d;
            var C = t.updateQueue;
            if (C === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else C.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Rl(o, d, t), Ls();
              break e;
            }
            l = Error(z(426));
          }
        } else if (ie && u.mode & 1) {
          var O = Al(s);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Il(O, s, u, o, t), fs(Qn(l, u));
            break e;
          }
        }
        o = l = Qn(l, u), ge !== 4 && (ge = 2), yr === null ? yr = [o] : yr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var h = Gc(o, l, t);
              zl(o, h);
              break e;
            case 1:
              u = l;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Jt === null || !Jt.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Hc(o, u, t);
                zl(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dd(n);
    } catch (w) {
      t = w, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ud() {
  var e = Ya.current;
  return Ya.current = Qa, e === null ? Qa : e;
}
function Ls() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), ye === null || !(vn & 268435455) && !(po & 268435455) || qt(ye, we);
}
function Xa(e, t) {
  var n = H;
  H |= 2;
  var r = ud();
  (ye !== e || we !== t) && (Ct = null, dn(e, t));
  do
    try {
      Zf();
      break;
    } catch (a) {
      ld(e, a);
    }
  while (!0);
  if (hs(), H = n, Ya.current = r, me !== null) throw Error(z(261));
  return ye = null, we = 0, ge;
}
function Zf() {
  for (; me !== null; ) cd(me);
}
function em() {
  for (; me !== null && !Cp(); ) cd(me);
}
function cd(e) {
  var t = fd(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? dd(e) : me = t, zs.current = null;
}
function dd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Wf(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, me = null;
        return;
      }
    } else if (n = Hf(n, t, Oe), n !== null) {
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
function sn(e, t, n) {
  var r = J, a = Ke.transition;
  try {
    Ke.transition = null, J = 1, tm(e, t, n, r);
  } finally {
    Ke.transition = a, J = r;
  }
  return null;
}
function tm(e, t, n, r) {
  do
    Un();
  while (Gt !== null);
  if (H & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Rp(e, o), e === ye && (me = ye = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fa || (fa = !0, md(La, function() {
    return Un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ke.transition, Ke.transition = null;
    var s = J;
    J = 1;
    var u = H;
    H |= 4, zs.current = null, Yf(e, n), od(n, e), jf(hi), Aa = !!mi, hi = mi = null, e.current = n, Kf(n), _p(), H = u, J = s, Ke.transition = o;
  } else e.current = n;
  if (fa && (fa = !1, Gt = e, Ja = a), o = e.pendingLanes, o === 0 && (Jt = null), zp(n.stateNode), Ie(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ka) throw Ka = !1, e = Ai, Ai = null, e;
  return Ja & 1 && e.tag !== 0 && Un(), o = e.pendingLanes, o & 1 ? e === Ii ? xr++ : (xr = 0, Ii = e) : xr = 0, an(), null;
}
function Un() {
  if (Gt !== null) {
    var e = Gu(Ja), t = Ke.transition, n = J;
    try {
      if (Ke.transition = null, J = 16 > e ? 16 : e, Gt === null) var r = !1;
      else {
        if (e = Gt, Gt = null, Ja = 0, H & 6) throw Error(z(331));
        var a = H;
        for (H |= 4, L = e.current; L !== null; ) {
          var o = L, s = o.child;
          if (L.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var d = u[l];
                for (L = d; L !== null; ) {
                  var m = L;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, m, o);
                  }
                  var y = m.child;
                  if (y !== null) y.return = m, L = y;
                  else for (; L !== null; ) {
                    m = L;
                    var v = m.sibling, g = m.return;
                    if (nd(m), m === d) {
                      L = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = g, L = v;
                      break;
                    }
                    L = g;
                  }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var x = C.child;
                if (x !== null) {
                  C.child = null;
                  do {
                    var O = x.sibling;
                    x.sibling = null, x = O;
                  } while (x !== null);
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
                vr(9, o, o.return);
            }
            var h = o.sibling;
            if (h !== null) {
              h.return = o.return, L = h;
              break e;
            }
            L = o.return;
          }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          s = L;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) f.return = s, L = f;
          else e: for (s = c; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  co(9, u);
              }
            } catch (w) {
              de(u, u.return, w);
            }
            if (u === s) {
              L = null;
              break e;
            }
            var p = u.sibling;
            if (p !== null) {
              p.return = u.return, L = p;
              break e;
            }
            L = u.return;
          }
        }
        if (H = a, an(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
          xt.onPostCommitFiberRoot(no, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      J = n, Ke.transition = t;
    }
  }
  return !1;
}
function Yl(e, t, n) {
  t = Qn(n, t), t = Gc(e, t, 1), e = Kt(e, t, 1), t = Pe(), e !== null && (Vr(e, 1, t), Ie(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Yl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Yl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
        e = Qn(n, e), e = Hc(t, e, 1), t = Kt(t, e, 1), e = Pe(), t !== null && (Vr(t, 1, e), Ie(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function nm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ye === e && (we & n) === n && (ge === 4 || ge === 3 && (we & 130023424) === we && 500 > pe() - bs ? dn(e, 0) : Ps |= n), Ie(e, t);
}
function pd(e, t) {
  t === 0 && (e.mode & 1 ? (t = ra, ra <<= 1, !(ra & 130023424) && (ra = 4194304)) : t = 1);
  var n = Pe();
  e = Mt(e, t), e !== null && (Vr(e, t, n), Ie(e, n));
}
function rm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), pd(e, n);
}
function am(e, t) {
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
  r !== null && r.delete(t), pd(e, n);
}
var fd;
fd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, Gf(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, ie && t.flags & 1048576 && vc(t, Ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      _a(e, t), e = t.pendingProps;
      var a = Vn(t, _e.current);
      Bn(t, n), a = Ss(null, t, r, e, a, n);
      var o = Cs();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (o = !0, Fa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ys(t), a.updater = uo, t.stateNode = a, a._reactInternals = t, Ci(t, r, e, n), t = Ei(null, t, r, !0, o, n)) : (t.tag = 0, ie && o && ds(t), ze(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (_a(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = im(r), e = st(r, e), a) {
          case 0:
            t = Ni(null, t, r, e, n);
            break e;
          case 1:
            t = Ol(null, t, r, e, n);
            break e;
          case 11:
            t = Dl(null, t, r, e, n);
            break e;
          case 14:
            t = $l(null, t, r, st(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Ni(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Ol(e, t, r, a, n);
    case 3:
      e: {
        if (Kc(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, Sc(e, t), Ga(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Qn(Error(z(423)), t), t = Fl(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Qn(Error(z(424)), t), t = Fl(e, t, r, n, a);
          break e;
        } else for (Fe = Yt(t.stateNode.containerInfo.firstChild), Be = t, ie = !0, ut = null, n = jc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gn(), r === a) {
            t = Tt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cc(t), e === null && ji(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, gi(r, a) ? s = null : o !== null && gi(r, o) && (t.flags |= 32), Yc(e, t), ze(e, t, s, n), t.child;
    case 6:
      return e === null && ji(t), null;
    case 13:
      return Jc(e, t, n);
    case 4:
      return xs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hn(t, null, r, n) : ze(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Dl(e, t, r, a, n);
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, te(qa, r._currentValue), r._currentValue = s, o !== null) if (pt(o.value, s)) {
          if (o.children === a.children && !Re.current) {
            t = Tt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = zt(-1, n & -n), l.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? l.next = l : (l.next = m.next, m.next = l), d.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ki(
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
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ki(s, n, t), s = o.sibling;
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
        ze(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Bn(t, n), a = Je(a), r = r(a), t.flags |= 1, ze(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = st(r, t.pendingProps), a = st(r.type, a), $l(e, t, r, a, n);
    case 15:
      return Wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), _a(e, t), t.tag = 1, Ae(r) ? (e = !0, Fa(t)) : e = !1, Bn(t, n), Vc(t, r, a), Ci(t, r, a, n), Ei(null, t, r, !0, e, n);
    case 19:
      return Xc(e, t, n);
    case 22:
      return Qc(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function md(e, t) {
  return Bu(e, t);
}
function om(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new om(e, t, n, r);
}
function Rs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function im(e) {
  if (typeof e == "function") return Rs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zi) return 11;
    if (e === es) return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function za(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") Rs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Nn:
      return pn(n.children, a, o, t);
    case Xi:
      s = 8, a |= 8;
      break;
    case Qo:
      return e = Ye(12, n, t, a | 2), e.elementType = Qo, e.lanes = o, e;
    case Yo:
      return e = Ye(13, n, t, a), e.elementType = Yo, e.lanes = o, e;
    case Ko:
      return e = Ye(19, n, t, a), e.elementType = Ko, e.lanes = o, e;
    case Cu:
      return fo(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ku:
          s = 10;
          break e;
        case Su:
          s = 9;
          break e;
        case Zi:
          s = 11;
          break e;
        case es:
          s = 14;
          break e;
        case Ft:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function pn(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function fo(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = Cu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Vo(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Go(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _o(0), this.expirationTimes = _o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _o(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function As(e, t, n, r, a, o, s, u, l) {
  return e = new sm(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ys(o), e;
}
function lm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hd(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
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
    if (Ae(n)) return hc(e, n, t);
  }
  return t;
}
function gd(e, t, n, r, a, o, s, u, l) {
  return e = As(n, r, !0, e, a, o, s, u, l), e.context = hd(null), n = e.current, r = Pe(), a = Xt(n), o = zt(r, a), o.callback = t ?? null, Kt(n, o, a), e.current.lanes = a, Vr(e, a, r), Ie(e, r), e;
}
function mo(e, t, n, r) {
  var a = t.current, o = Pe(), s = Xt(a);
  return n = hd(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(a, t, s), e !== null && (dt(e, a, s, o), ka(e, a, s)), s;
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
function Kl(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Is(e, t) {
  Kl(e, t), (e = e.alternate) && Kl(e, t);
}
function um() {
  return null;
}
var vd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ds(e) {
  this._internalRoot = e;
}
ho.prototype.render = Ds.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  mo(e, t, null, null);
};
ho.prototype.unmount = Ds.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function() {
      mo(null, e, null, null);
    }), t[bt] = null;
  }
};
function ho(e) {
  this._internalRoot = e;
}
ho.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Qu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++) ;
    Ut.splice(n, 0, e), n === 0 && Ku(e);
  }
};
function $s(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function go(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Jl() {
}
function cm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Za(s);
        o.call(d);
      };
    }
    var s = gd(t, r, e, 0, null, !1, !1, "", Jl);
    return e._reactRootContainer = s, e[bt] = s.current, br(e.nodeType === 8 ? e.parentNode : e), yn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Za(l);
      u.call(d);
    };
  }
  var l = As(e, 0, !1, null, null, !1, !1, "", Jl);
  return e._reactRootContainer = l, e[bt] = l.current, br(e.nodeType === 8 ? e.parentNode : e), yn(function() {
    mo(t, l, n, r);
  }), l;
}
function vo(e, t, n, r, a) {
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
    mo(t, s, e, a);
  } else s = cm(n, t, e, a, r);
  return Za(s);
}
Hu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (rs(t, n | 1), Ie(t, pe()), !(H & 6) && (Yn = pe() + 500, an()));
      }
      break;
    case 13:
      yn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var a = Pe();
          dt(r, e, 1, a);
        }
      }), Is(e, 1);
  }
};
as = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      dt(t, e, 134217728, n);
    }
    Is(e, 134217728);
  }
};
Wu = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = Mt(e, t);
    if (n !== null) {
      var r = Pe();
      dt(n, e, t, r);
    }
    Is(e, t);
  }
};
Qu = function() {
  return J;
};
Yu = function(e, t) {
  var n = J;
  try {
    return J = e, t();
  } finally {
    J = n;
  }
};
ii = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = io(r);
            if (!a) throw Error(z(90));
            Nu(r), Zo(r, a);
          }
        }
      }
      break;
    case "textarea":
      zu(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
Au = Ms;
Iu = yn;
var dm = { usingClientEntryPoint: !1, Events: [Hr, bn, io, Lu, Ru, Ms] }, ir = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, pm = { bundleType: ir.bundleType, version: ir.version, rendererPackageName: ir.rendererPackageName, rendererConfig: ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ou(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ir.findFiberByHostInstance || um, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ma.isDisabled && ma.supportsFiber) try {
    no = ma.inject(pm), xt = ma;
  } catch {
  }
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
qe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$s(t)) throw Error(z(200));
  return lm(e, t, null, n);
};
qe.createRoot = function(e, t) {
  if (!$s(e)) throw Error(z(299));
  var n = !1, r = "", a = vd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = As(e, 1, !1, null, null, n, !1, r, a), e[bt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Ds(t);
};
qe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Ou(t), e = e === null ? null : e.stateNode, e;
};
qe.flushSync = function(e) {
  return yn(e);
};
qe.hydrate = function(e, t, n) {
  if (!go(t)) throw Error(z(200));
  return vo(null, e, t, !0, n);
};
qe.hydrateRoot = function(e, t, n) {
  if (!$s(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = vd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = gd(t, null, e, 1, n ?? null, a, !1, o, s), e[bt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new ho(t);
};
qe.render = function(e, t, n) {
  if (!go(t)) throw Error(z(200));
  return vo(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function(e) {
  if (!go(e)) throw Error(z(40));
  return e._reactRootContainer ? (yn(function() {
    vo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[bt] = null;
    });
  }), !0) : !1;
};
qe.unstable_batchedUpdates = Ms;
qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!go(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return vo(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function yd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd);
    } catch (e) {
      console.error(e);
    }
}
yd(), yu.exports = qe;
var fm = yu.exports, xd, Xl = fm;
xd = Xl.createRoot, Xl.hydrateRoot;
const Zl = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, mm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, hm = [
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
], gm = [
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
function Or(e) {
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
function vm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const fn = () => globalThis.__crycatBase || "";
async function G(e, t) {
  const n = await fetch(fn() + e, t);
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
const D = {
  health: () => G("/api/health"),
  getSettings: () => G(
    "/api/settings"
  ),
  putSettings: (e) => G("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), G("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => G("/api/assets"),
  patchAsset: (e, t) => G(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => G(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 16) => G(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => G("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => G(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => G(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), G(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => G(
    "/api/contornos"
  ),
  blobs: (e) => G(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => G(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0) => `${fn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}`,
  previewUrlSinBordes: (e) => `/api/assets/${e}/preview.png`,
  optimize: (e, t = !1) => G("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => G(`/api/job/${e}`),
  result: () => G("/api/result"),
  version: () => G("/api/version"),
  checkVersion: () => G("/api/version/check", { method: "POST" }),
  updateVersion: () => G(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => G("/api/version/open", { method: "POST" }),
  estimate: () => G("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0) => `${fn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}` : ""}`,
  move: (e, t, n) => G(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => G("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => G("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => G(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => G("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => G("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => G(
    "/api/presets/factory"
  ),
  assetsFolder: () => G("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), G("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${fn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => G("/api/presets"),
  savePreset: (e) => G("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => G(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => G(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  )
};
async function ym(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((m, y) => {
      a.onload = () => m(), a.onerror = () => y(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (m) => l.toBlob((y) => m(y), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function wd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await ym(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Oi = [
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
function Fi(e) {
  return Oi.find((t) => t.key === e) ?? Oi[0];
}
function eu(e) {
  const t = Fi(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function jd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Fi(e);
  } catch {
  }
  return Fi("wiwi");
}
const kd = {
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
}, Sd = j.createContext("es");
function xm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(Sd.Provider, { value: e, children: t });
}
function Os() {
  return j.useContext(Sd);
}
function Ze() {
  const e = Os();
  return (t, n) => {
    let r = e === "en" ? kd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function wm(e, t, n) {
  return e === "en" ? kd[t] ?? t : t;
}
function se({ size: e = 18, children: t }) {
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
function Cd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Fr({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Br({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function eo({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function _d({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function yo({ size: e }) {
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
function tu({ size: e }) {
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
function Cm({ size: e }) {
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
function _m({ size: e }) {
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
function Nm({ size: e }) {
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
function Em({ size: e }) {
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
function Nd({ size: e }) {
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
function Ur({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Ed({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function zm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function zd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function wr({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Bi({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Pd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function $m({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ze(), o = j.useMemo(() => t.map((S) => S.id), [t]), [s, u] = j.useState(/* @__PURE__ */ new Set()), [l, d] = j.useState("escala"), [m, y] = j.useState(100), [v, g] = j.useState(50), [C, x] = j.useState("mayor"), [O, h] = j.useState("");
  j.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), h(""));
  }, [e, o.join(",")]);
  const c = (S) => !s.has(S), f = (S) => u((N) => {
    const $ = new Set(N);
    return $.has(S) ? $.delete(S) : $.add(S), $;
  }), p = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), w = (S) => {
    const N = S.w_mm_base || 0, $ = S.h_mm_base || 0;
    return C === "mayor" ? Math.max(N, $) : C === "menor" ? Math.min(N, $) : 2 * Math.sqrt(Math.max(0, N * $) / Math.PI);
  }, k = (S) => {
    if (l === "tamano") {
      const N = w(S);
      if (N > 0) return Math.min(10, Math.max(0.05, v / N));
    }
    return Math.min(10, Math.max(0.05, m / 100));
  }, _ = (S) => {
    const N = k(S);
    return { w: (S.w_mm_base || 0) * N, h: (S.h_mm_base || 0) * N };
  }, P = async () => {
    let S = 0;
    for (const N of t) {
      if (!c(N.id)) continue;
      const $ = k(N) * 100;
      await D.patchAsset(N.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round($ * 10) / 10))
      }), S += 1;
    }
    await r(), h(a("{n} elementos ajustados ", { n: S })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((S) => {
          const N = _(S), $ = Math.min(98, N.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${S.id}`,
              style: {
                width: `${$}%`,
                maxWidth: `${$}%`,
                aspectRatio: `${N.w || 1} / ${N.h || 1}`,
                opacity: c(S.id) ? 1 : 0.3
              },
              title: `${S.name} · ${N.w.toFixed(1)}×${N.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: D.previewUrl(S.id), alt: "" })
            },
            S.id
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
              onClick: p,
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((S) => {
          const N = _(S);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${S.id}`,
              className: c(S.id) ? "sel" : "",
              onClick: () => f(S.id),
              title: S.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: D.previewUrl(S.id), alt: S.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: S.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(S.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  N.w.toFixed(1),
                  "×",
                  N.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            S.id
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
              onClick: () => d("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: l === "tamano" ? "on" : "",
              onClick: () => d("tamano"),
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
                onChange: (S) => y(Number(S.target.value))
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
                  onChange: (S) => g(Number(S.target.value))
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
                value: C,
                onChange: (S) => x(S.target.value),
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
        O && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: O })
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
function Om({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  faseBordes: s = 0,
  verBordes: u = !0,
  destacado: l = !1
}) {
  const d = Ze(), [m, y] = j.useState(() => Or(e));
  j.useEffect(() => y(Or(e)), [e]);
  const v = j.useRef(null), g = vm(m), [C, x] = j.useState(""), O = j.useRef(!1), [h, c] = j.useState(""), f = j.useRef(!1), [p, w] = j.useState({ tamano: !1, borde: !1, mini: !1 }), k = j.useRef(null);
  j.useEffect(() => {
    var b;
    l && (w({ tamano: !0, borde: !0, mini: !0 }), (b = k.current) == null || b.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [l]), j.useEffect(() => {
    O.current || x(g.w > 0 ? g.w.toFixed(1) : ""), f.current || c(g.h > 0 ? g.h.toFixed(1) : "");
  }, [g.w, g.h]);
  const _ = Number.isFinite(m.w_mm_base) ? m.w_mm_base : 0, P = Number.isFinite(m.h_mm_base) ? m.h_mm_base : 0, S = (b) => {
    x(b);
    const ee = Number(b.replace(",", "."));
    !Number.isFinite(ee) || ee <= 0 || _ <= 0 || q({ scale_pct: ee / _ * 100 });
  }, N = (b) => {
    c(b);
    const ee = Number(b.replace(",", "."));
    !Number.isFinite(ee) || ee <= 0 || P <= 0 || q({ scale_pct: ee / P * 100 });
  }, $ = (t == null ? void 0 : t.placements.filter((b) => b.asset_id === e.id && b.mini).length) ?? 0, Y = (t == null ? void 0 : t.placements.filter((b) => b.asset_id === e.id && !b.mini).length) ?? 0, q = async (b) => {
    a == null || a(), "copies" in b && (b.copies = Math.max(0, b.copies ?? 0)), y((ee) => ({ ...ee, ...b }));
    try {
      await D.patchAsset(e.id, b);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: k,
      "data-asset": e.id,
      className: `asset-card${l ? " destacada" : ""}`,
      "data-testid": "asset-card",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: D.previewUrl(e.id, u, s),
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
                title: d("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => D.assetsFolder().then((b) => D.abrirCarpeta(b.path)).catch(() => D.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ i.jsx(Fr, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: d("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var b;
                  return (b = v.current) == null ? void 0 : b.click();
                },
                children: /* @__PURE__ */ i.jsx(jm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: v,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (b) => {
                  var Ge;
                  const ee = (Ge = b.target.files) == null ? void 0 : Ge[0];
                  if (b.target.value = "", !!ee)
                    try {
                      const { blob: De, name: M } = await wd(ee);
                      await D.reemplazar(e.id, De, M), await n();
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
                title: d("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ i.jsx(km, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                title: m.bg_removed ? d("Restaurar fondo original") : d("Quitar fondo (inteligente)"),
                onClick: () => (m.bg_removed ? D.restoreBackground(e.id) : D.removeBackground(e.id)).then(n),
                children: m.bg_removed ? /* @__PURE__ */ i.jsx(Sm, { size: 16 }) : /* @__PURE__ */ i.jsx(eo, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: d("Eliminar imagen"),
                onClick: () => D.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ i.jsx(_d, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${m.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": d("Incluir como mini (rellena huecos)"),
                onClick: () => q({ mini_enabled: !m.mini_enabled }),
                children: [
                  /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
                  " ",
                  d("Mini")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${m.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": d("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => w((b) => ({ ...b, borde: !b.borde })),
                children: [
                  /* @__PURE__ */ i.jsx(yo, { size: 15 }),
                  " ",
                  d("Borde")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: d("Copias"), children: [
              /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => q({ copies: m.copies - 1 }), children: "−" }),
              /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: m.copies }),
              /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => q({ copies: m.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => w((b) => ({ ...b, tamano: !b.tamano })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${p.tamano ? "open" : ""}`, children: "›" }),
                  d("Tamaño"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    g.w.toFixed(1),
                    "×",
                    g.h.toFixed(1),
                    " · ",
                    Math.round(m.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            p.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: d("Escala del elemento (100% = tamaño natural)"), children: d("Escala") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: m.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (b) => q({ scale_pct: Number(b.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
                  Math.round(m.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: d("Tamaño exacto en milímetros (mantiene la proporción)"), children: d("Ancho") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: C,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      O.current = !0, f.current = !1;
                    },
                    onBlur: () => {
                      O.current = !1, x(g.w > 0 ? g.w.toFixed(1) : "");
                    },
                    onChange: (b) => S(b.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" }),
                /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ i.jsx("span", { title: d("Tamaño exacto en milímetros (mantiene la proporción)"), children: d("Alto") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: h,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      f.current = !0, O.current = !1;
                    },
                    onBlur: () => {
                      f.current = !1, c(g.h > 0 ? g.h.toFixed(1) : "");
                    },
                    onChange: (b) => N(b.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" })
              ] })
            ] })
          ] }),
          (m.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-borde-${e.id}`,
                onClick: () => w((b) => ({ ...b, borde: !b.borde })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${p.borde ? "open" : ""}`, children: "›" }),
                  d("Borde adicional"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    m.offset_mm.toFixed(1),
                    " mm",
                    m.offset_mm <= 0 ? ` · ${d("global")}` : ""
                  ] })
                ]
              }
            ),
            p.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => q({ offset_mm: Math.max(
                      0,
                      Math.round((m.offset_mm - 0.5) * 2) / 2
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
                    value: m.offset_mm,
                    onChange: (b) => q({ offset_mm: Number(b.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => q({ offset_mm: Math.min(
                      20,
                      Math.round((m.offset_mm + 0.5) * 2) / 2
                    ) }),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", d("Extender")],
                  ["blanco", d("Blanco")],
                  ["color", d("Color")],
                  ["unir_recto", d("Unir recto")],
                  ["unir_curvo", d("Unir curvo")]
                ].map(([b, ee]) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: `seg ${(m.offset_modo || "") === b ? "on" : ""}`,
                    "data-testid": `offset-modo-${b}-${e.id}`,
                    onClick: () => q({ offset_modo: b }),
                    children: ee
                  },
                  b
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: m.offset_color || "#ffffff",
                    title: d("Color del borde"),
                    onChange: (b) => q({
                      offset_color: b.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          m.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => w((b) => ({ ...b, mini: !b.mini })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${p.mini ? "open" : ""}`, children: "›" }),
                  d("Opciones de mini"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    m.mini_quota,
                    " · ",
                    $
                  ] })
                ]
              }
            ),
            p.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ i.jsx("span", { title: d("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: d("Cuota") }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => q({ mini_quota: Math.max(
                    1,
                    Math.round((m.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                m.mini_quota
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => q({ mini_quota: Math.min(
                    100,
                    Math.round((m.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: d(" {n} minis", { n: $ }) })
            ] }) })
          ] }),
          Y > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: d("Colocadas: {n}", { n: Y }) }),
          m.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ i.jsx(Pd, { size: 14 }),
            " ",
            m.warnings[0],
            " ",
            m.warnings.some((b) => /blob|trozos sueltos/i.test(b)) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: d("limpiar contorno")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Fm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0,
  verBordes: l = !0,
  destacado: d = ""
}) {
  const m = Ze(), y = j.useRef(null), [v, g] = j.useState(!1), [C, x] = j.useState(null), O = async (c) => {
    const f = [];
    for (const p of Array.from(c))
      try {
        const { blob: w, name: k } = await wd(p);
        f.push(Or(await D.upload(w, k)));
      } catch (w) {
        console.error(w);
      }
    await r(), f.length > 1 && x(f);
  }, h = n.usar_minis;
  return e.some((c) => c.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: m("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${v ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = y.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: (c) => {
          c.preventDefault(), g(!1), c.dataTransfer.files.length && O(c.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            m("Arrastra imágenes aquí"),
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
                c.target.files && O(c.target.files), c.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((c) => /* @__PURE__ */ i.jsx(
      Om,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        destacado: d === c.id,
        bordeGlobal: n.offset_activo === !0
      },
      c.id
    )) }),
    !h && /* @__PURE__ */ i.jsx("div", { className: "hint", children: m("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => D.clearAssets().then(r),
        children: m("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      $m,
      {
        open: !!C,
        assets: C ?? [],
        onClose: () => x(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const yt = (e) => (globalThis.__crycatAssets || "") + e;
function bd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ze(), [o, s] = j.useState(null), [u, l] = j.useState("");
  j.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (m = "") => {
    l("");
    try {
      s(await D.fsList(m));
    } catch (y) {
      l(y.message);
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
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => d(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((m) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => d(`${o.path}/${m}`.replace("//", "/")),
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
function Bm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Ze(), [u, l] = j.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((y) => y.startsWith("data:")), m = [
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
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((y) => /* @__PURE__ */ i.jsx("li", { title: y, children: y.split(/[\\/]/).pop() }, y)) }),
      !d && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      d && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      d ? t.map((y, v) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${v}`,
          href: y,
          download: `crycat_pagina-${String(v + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
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
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: m.map((y, v) => /* @__PURE__ */ i.jsx("li", { children: y }, v)) }),
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
function Um({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: d, onFinEdicion: m, onDeshacer: y, onRehacer: v, puedeDeshacer: g, puedeRehacer: C }) {
  const x = Ze(), O = Os(), [h, c] = j.useState(1), [f, p] = j.useState({ x: 0, y: 0 }), [w, k] = j.useState(null), [_, P] = j.useState(() => Date.now()), [S, N] = j.useState(null), [$, Y] = j.useState(null), [q, b] = j.useState(!1), [ee, Ge] = j.useState(2), [De, M] = j.useState(0);
  j.useEffect(() => {
    if (!r.verBordes) return;
    const E = window.setInterval(
      () => M((R) => (R + 6) % 12),
      1100
    );
    return () => window.clearInterval(E);
  }, [r.verBordes]);
  const [F, B] = j.useState([]), [W, Q] = j.useState([]), [et, I] = j.useState(""), [X, fe] = j.useState(/* @__PURE__ */ new Set()), Ne = j.useRef(null), tt = j.useRef(null), Rt = O === "en" ? gm : hm, Qr = j.useMemo(
    () => Rt[Math.floor(Math.random() * Rt.length)],
    [Rt]
  ), jn = r.saveName.trim() || Qr;
  j.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const nt = (t == null ? void 0 : t.pages) ?? 0, Yr = !!t && t.efficiency < 0.8;
  j.useEffect(() => {
    const E = Ne.current;
    if (!E) return;
    const R = (T) => {
      T.preventDefault(), T.stopPropagation();
      const K = E.getBoundingClientRect(), Z = T.clientX - K.left, Ee = T.clientY - K.top;
      c((He) => {
        const ne = T.deltaY < 0 ? 1.05 : 0.9523809523809523, oe = Math.min(12, Math.max(0.05, He * ne)), mt = oe / He;
        return p(($t) => ({ x: Z - (Z - $t.x) * mt, y: Ee - (Ee - $t.y) * mt })), oe;
      });
    };
    return E.addEventListener("wheel", R, { passive: !1 }), () => E.removeEventListener("wheel", R);
  }, []);
  const A = (E) => {
    if (E.target.closest(".item-box")) return;
    tt.current = { x: E.clientX - f.x, y: E.clientY - f.y };
    const R = (K) => {
      tt.current && p({ x: K.clientX - tt.current.x, y: K.clientY - tt.current.y });
    }, T = () => {
      tt.current = null, window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", T);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", T);
  };
  j.useEffect(() => {
    const E = (R) => {
      R.target.tagName !== "INPUT" && (R.key === "+" || R.key === "=" ? c((T) => Math.min(12, T * 1.08)) : R.key === "-" || R.key === "_" ? c((T) => Math.max(0.05, T / 1.08)) : R.key === "0" ? (c(1), p({ x: 0, y: 0 })) : R.key === "Escape" ? k(null) : R.key === "g" ? a((T) => ({ ...T, guidesVisible: !T.guidesVisible })) : R.key === "t" && a((T) => T.eyeFosforito ? { ...T, eyeFosforito: !1, eyeTransparent: !1 } : T.eyeTransparent ? { ...T, eyeTransparent: !1, eyeFosforito: !0 } : { ...T, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [a]);
  const U = j.useRef(null), $e = j.useRef(null), rt = (E, R) => {
    E.preventDefault(), E.stopPropagation();
    const T = E.currentTarget.closest(".page-box");
    if (!T || !t) return;
    const K = t.page_mm[0] / T.clientWidth, Z = {
      uid: R.uid,
      startX: E.clientX,
      startY: E.clientY,
      origX: R.x,
      origY: R.y,
      mmPerPx: K
    };
    U.current = Z, $e.current = { x: R.x, y: R.y }, N(Z), Y({ uid: R.uid, x: R.x, y: R.y });
    const Ee = (ne) => {
      const oe = U.current;
      if (!oe) return;
      const mt = (ne.clientX - oe.startX) * oe.mmPerPx / h, $t = (ne.clientY - oe.startY) * oe.mmPerPx / h;
      $e.current = { x: oe.origX + mt, y: oe.origY + $t }, Y({ uid: oe.uid, x: oe.origX + mt, y: oe.origY + $t });
    }, He = (ne) => {
      window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", He);
      const oe = U.current;
      if (U.current = null, !oe) return;
      const mt = (ne.clientX - oe.startX) * oe.mmPerPx / h, $t = (ne.clientY - oe.startY) * oe.mmPerPx / h;
      N(null), Y(null), !(Math.abs(mt) < 0.5 && Math.abs($t) < 0.5) && Kr(oe.uid, oe.origX + mt, oe.origY + $t);
    };
    window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", He);
  }, Kr = async (E, R, T) => {
    try {
      const K = await D.move(E, R, T);
      K.job ? u(K.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, At = async (E) => {
    const R = await D.unpin(E);
    u(R);
  }, Ld = !1;
  j.useEffect(() => {
    {
      B([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, _]), j.useEffect(() => {
    if (!d) {
      Q([]), I(""), fe(/* @__PURE__ */ new Set());
      return;
    }
    D.blobs(d.id).then((E) => {
      Q(E.blobs), Ge(E.union_mm ?? 2), I(E.preview_png), fe(new Set(E.blobs.filter((R) => !R.principal).map((R) => R.id)));
    }).catch(() => {
      Q([]), I("");
    });
  }, [d]);
  const Fs = async () => {
    if (d)
      try {
        await D.limpiarContorno(d.id, Array.from(X));
      } finally {
        await (m == null ? void 0 : m());
      }
  }, Rd = (E) => {
    fe((R) => {
      const T = new Set(R);
      return T.has(E) ? T.delete(E) : T.add(E), T;
    });
  }, [ft, It] = j.useState(null), Ad = async () => {
    try {
      const T = await D.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      It({ files: T.files, folder: T.folder });
    } catch (T) {
      It({ files: [], folder: "", error: T.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const K = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), Z = URL.createObjectURL(K), Ee = document.createElement("a");
        Ee.href = Z, Ee.download = `${r.saveName || "crycat"}-cricut.pdf`, Ee.click(), setTimeout(() => URL.revokeObjectURL(Z), 4e3);
      } catch (T) {
        It({
          files: [],
          folder: "",
          error: T.message
        });
      }
      return;
    }
    const R = document.createElement("iframe");
    R.setAttribute("aria-hidden", "true"), R.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", R.src = "/api/print.pdf", R.onload = () => {
      var T, K;
      try {
        (T = R.contentWindow) == null || T.focus(), (K = R.contentWindow) == null || K.print();
      } finally {
        window.setTimeout(() => R.remove(), 6e4);
      }
    }, document.body.appendChild(R);
  }, Id = async () => {
    try {
      const E = await D.export(jn);
      It({ files: E.files, folder: E.folder });
    } catch (E) {
      It({ files: [], folder: "", error: E.message });
    }
  }, Dd = () => {
    b(!0);
  }, $d = async (E) => {
    try {
      const R = await D.export(jn, E);
      It({ files: R.files, folder: R.folder });
    } catch (R) {
      It({ files: [], folder: "", error: R.message });
    }
  }, Bs = (t == null ? void 0 : t.poly_mm) ?? [], [at, ot] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [kn, Sn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Dt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : kn, Jr = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Sn, jt = n.lienzo === "pagina" ? 0 : at, kt = n.lienzo === "pagina" ? 0 : ot, Us = Bs.length ? "M" + Bs.map(([E, R]) => `${E - jt},${R - kt}`).join(" L") + " Z" : "", qs = j.useRef(0);
  j.useEffect(() => {
    if (!t) return;
    const E = t.pages || 0;
    E > 0 && E !== qs.current && (qs.current = E, a((R) => ({ ...R, viewMode: E <= 1 ? 1 : E === 2 ? 2 : 4 })), k(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const xo = r.hojaGirada === !0, Od = (E) => {
    const R = (t == null ? void 0 : t.placements.filter((T) => T.page === E)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}${xo ? " girada" : ""}`,
        style: xo ? {
          width: "100%",
          aspectRatio: `${Jr} / ${Dt}`
        } : { width: "100%" },
        onClick: (T) => {
          nt > 1 && w === null && !T.target.closest(".item-box") && k(E);
        },
        "data-testid": `page-${E}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: `sheet${xo ? " girada" : ""}`, src: D.pageUrl(E, _, n.simular_impresion === !0, r.verBordes, De), alt: x("Página {i}", { i: E + 1 }), draggable: !1 }),
          r.guidesVisible && Us && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Dt} ${Jr}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Dt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((at - jt + kn) / 10) + 1 },
                    (T, K) => {
                      const Z = K * 10 - (jt - at);
                      return Z >= at - jt - 0.01 && Z <= at - jt + kn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: Z,
                          y1: ot - kt,
                          x2: Z,
                          y2: ot - kt + Sn
                        },
                        `v${K}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((ot - kt + Sn) / 10) + 1 },
                    (T, K) => {
                      const Z = K * 10 - (kt - ot);
                      return Z >= ot - kt - 0.01 && Z <= ot - kt + Sn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: at - jt,
                          y1: Z,
                          x2: at - jt + kn,
                          y2: Z
                        },
                        `h${K}`
                      ) : null;
                    }
                  )
                ]
              }
            ),
            (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
              ["esquina_flecha", at, ot, !1, !1],
              ["esquina_sd", at + kn, ot, !0, !1],
              ["esquina_ii", at, ot + Sn, !1, !0],
              ["esquina_id", at + kn, ot + Sn, !0, !0]
            ].map(([T, K, Z, Ee, He]) => {
              const ne = t.marcas[T];
              if (!ne) return null;
              const oe = K - jt - (Ee ? ne[0] : 0), mt = Z - kt - (He ? ne[1] : 0);
              return /* @__PURE__ */ i.jsx(
                "image",
                {
                  href: yt(`/marcas/${T}.png`),
                  x: oe,
                  y: mt,
                  width: ne[0],
                  height: ne[1],
                  preserveAspectRatio: "none"
                },
                T
              );
            }) }),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: Us,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Dt / 250),
                strokeDasharray: `${Dt / 55} ${Dt / 85}`,
                opacity: 0.85
              }
            ),
            Ld
          ] }),
          R.map((T) => {
            const K = e.find((ne) => ne.id === T.asset_id), Z = ($ == null ? void 0 : $.uid) === T.uid ? $ : null, Ee = ((Z ? Z.x : T.x) - jt) / (Dt || 1) * 100, He = ((Z ? Z.y : T.y) - kt) / (Jr || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${T.pinned ? "pinned" : ""} ${(S == null ? void 0 : S.uid) === T.uid ? "dragging" : ""}`,
                style: {
                  left: `${Ee}%`,
                  top: `${He}%`,
                  width: `${T.w / (Dt || 1) * 100}%`,
                  height: `${T.h / (Jr || 1) * 100}%`
                },
                title: (K == null ? void 0 : K.name) ?? "",
                onMouseDown: (ne) => rt(ne, T),
                onContextMenu: (ne) => {
                  ne.preventDefault(), At(T.uid);
                },
                "data-testid": `item-${T.uid}`,
                onClick: (ne) => {
                  ne.stopPropagation(), ne.currentTarget.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "smooth"
                  }), window.dispatchEvent(new CustomEvent(
                    "crycat:seleccion",
                    { detail: T.asset_id }
                  ));
                },
                children: T.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              T.uid
            );
          })
        ]
      },
      E
    );
  }, Fd = w !== null ? [w] : Array.from({ length: nt }, (E, R) => R);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    nt > 1 && /* @__PURE__ */ i.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: x("No cabe en una página: {n} páginas", { n: nt }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": x("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((E) => ({ ...E, verBordes: !E.verBordes })),
          children: /* @__PURE__ */ i.jsx(yo, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": x("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((E) => ({ ...E, guidesVisible: !E.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(zd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": x("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(Yr ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Br, { size: 16 }),
            " ",
            x("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        nt > 1 && w === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 4 })), children: "4" })
        ] }),
        w !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => k(null), title: x("Volver a la cuadrícula (Esc)"), children: x(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": x("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((E) => E.eyeFosforito ? { ...E, eyeFosforito: !1, eyeTransparent: !1 } : E.eyeTransparent ? { ...E, eyeTransparent: !1, eyeFosforito: !0 } : { ...E, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(Cm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(tu, { size: 16 }) : /* @__PURE__ */ i.jsx(tu, { size: 16 }),
              r.eyeFosforito ? x("Fosforito") : r.eyeTransparent ? x("Transparente") : x("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-disposicion",
            "data-tip": x("Cambiar la disposición: menús anchos o hoja más grande"),
            onClick: () => {
              const E = !window.__crycatAncho;
              window.__crycatAncho = E, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: E }
              ));
            },
            children: /* @__PURE__ */ i.jsx(Nm, { size: 16 })
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
            "data-tip": x("Deshacer (Ctrl+Z)"),
            onClick: () => y(),
            disabled: !g,
            children: /* @__PURE__ */ i.jsx(Ed, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": x("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => v(),
            disabled: !C,
            children: /* @__PURE__ */ i.jsx(zm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": x("Acercar (+)"),
            onClick: () => c((E) => Math.min(12, E * 1.08)),
            children: /* @__PURE__ */ i.jsx(Pm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": x("Centrar la hoja y volver al tamaño original (tecla 0)"),
            onClick: () => {
              c(1), p({ x: 0, y: 0 });
            },
            children: /* @__PURE__ */ i.jsx(Em, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": x("Alejar (−)"),
            onClick: () => c((E) => Math.max(0.05, E / 1.08)),
            children: /* @__PURE__ */ i.jsx(bm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(h * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: D.previewUrl(d.id) + `?t=${_}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && W.filter((E) => !E.principal).map((E, R) => {
          const [T, K, Z, Ee] = E.bbox, He = d.w_px || 1, ne = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${X.has(E.id) ? " sel" : ""}`,
              "data-testid": `blob-${R}`,
              title: x("Trozo de {px} px — clic para {accion}", {
                px: E.area_px,
                accion: X.has(E.id) ? x("conservar") : x("quitar")
              }),
              style: {
                left: `${T / He * 100}%`,
                top: `${K / ne * 100}%`,
                width: `${(Z - T) / He * 100}%`,
                height: `${(Ee - K) / ne * 100}%`
              },
              onClick: () => Rd(E.id)
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
              title: x("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: ee }),
              onClick: async () => {
                d && (await D.patchAsset(d.id, {
                  offset_mm: ee,
                  offset_modo: "unir_curvo"
                }), await (m == null ? void 0 : m()));
              },
              children: x("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Fs,
              children: x(
                "Quitar marcados ({n})",
                { n: X.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: x("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: Ne,
        className: `canvas ${S ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: A,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${h})` },
            children: [
              nt === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: x("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${w !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Fd.map(Od)
                }
              )
            ]
          }
        )
      }
    ),
    d ? /* @__PURE__ */ i.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: Fs,
          children: x("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => m == null ? void 0 : m(),
          children: x("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Qr,
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
            title: x("Abrir la carpeta de guardado en el explorador"),
            "aria-label": x("Abrir carpeta de guardado"),
            onClick: () => D.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Fr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Id, children: x("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Dd, children: x("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Ad,
            disabled: nt === 0,
            children: x("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      bd,
      {
        open: q,
        initial: n.carpeta_export,
        onClose: () => b(!1),
        onPick: $d
      }
    ),
    /* @__PURE__ */ i.jsx(
      Bm,
      {
        open: !!ft,
        files: (ft == null ? void 0 : ft.files) ?? [],
        folder: (ft == null ? void 0 : ft.folder) ?? "",
        error: ft == null ? void 0 : ft.error,
        onOpenFolder: (E) => void D.fsOpen(E).catch(() => {
        }),
        onClose: () => It(null)
      }
    )
  ] });
}
const nu = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function qm({ saveSettings: e }) {
  const t = Ze(), [n, r] = j.useState(
    {}
  ), [a, o] = j.useState([]), [s, u] = j.useState(!1), [l, d] = j.useState(!1), [m, y] = j.useState(""), [v, g] = j.useState(""), [C, x] = j.useState(""), O = () => D.presets().then((p) => o(Array.isArray(p.names) ? p.names : [])).catch(() => {
  });
  j.useEffect(() => {
    D.factoryPresets().then((p) => r(p.presets ?? {})).catch(() => {
    }), O();
  }, []);
  const h = async (p) => {
    if (p)
      try {
        if (p.startsWith("fabrica:")) {
          const w = p.slice(8);
          await e(n[w]), g(t("Perfil «{n}» aplicado", {
            n: t(nu[w] ?? w)
          }));
        } else {
          const w = p.slice(9), k = await D.loadPreset(w);
          await e(k.settings), g(t("Perfil «{n}» cargado", { n: w }));
        }
      } catch {
        g(t("No se pudo aplicar el perfil"));
      }
  }, c = async () => {
    const w = (C.startsWith("guardado:") ? C.slice(9) : "") || m.trim();
    if (w)
      try {
        const k = await D.savePreset(w);
        o(Array.isArray(k.names) ? k.names : []), y(""), u(!1), x(`guardado:${w}`), g(t("Perfil «{n}» guardado", { n: w }));
      } catch {
        g(t("No se pudo guardar el perfil"));
      }
  }, f = async (p) => {
    try {
      o((await D.deletePreset(p)).names ?? []), g(t("Perfil «{n}» borrado", { n: p }));
    } catch {
      g(t("No se pudo borrar el perfil"));
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "perfiles-barra", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "perfil-select",
          "data-testid": "perfil-select",
          value: C,
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (p) => {
            x(p.target.value), h(p.target.value);
          },
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((p) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${p}`, children: t(nu[p] ?? p) }, p)) }),
            a.length > 0 && /* @__PURE__ */ i.jsx("optgroup", { label: t("Guardados"), children: a.map((p) => /* @__PURE__ */ i.jsx("option", { value: `guardado:${p}`, children: p }, p)) })
          ]
        }
      ),
      !s && /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "perfil-guardar",
          title: t("Guardar los ajustes actuales como perfil"),
          onClick: () => u(!0),
          children: [
            /* @__PURE__ */ i.jsx(Bi, { size: 15 }),
            " ",
            t("Guardar")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `chip${l ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => d(!l),
          children: /* @__PURE__ */ i.jsx(wr, { size: 15 })
        }
      )
    ] }),
    s && /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          autoFocus: !0,
          type: "text",
          "data-testid": "perfil-nombre-nuevo",
          placeholder: t("Nombre del perfil (p. ej. «Pikmin A4»)"),
          value: m,
          onChange: (p) => y(p.target.value),
          onKeyDown: (p) => {
            p.key === "Enter" && c(), p.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: c, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    l && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((p) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: p, children: p }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${p}`, onClick: () => h(`guardado:${p}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${p}`,
          onClick: () => f(p),
          children: /* @__PURE__ */ i.jsx(_d, { size: 15 })
        }
      )
    ] }, p)) }),
    v && /* @__PURE__ */ i.jsx("div", { className: "hint", children: v })
  ] });
}
function Vm({ settings: e, saveSettings: t }) {
  const n = Ze(), r = e.usar_minis, a = e.modo === "experto", o = {
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
            /* @__PURE__ */ i.jsx(Ur, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Br, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Nd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(qm, { saveSettings: t })
  ] });
}
function Gm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
        onChange: (d) => {
          const m = Number(d.target.value);
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
function St({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function ru(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const Hm = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Wm = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Qm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ze(), [a, o] = j.useState(!0), [s, u] = j.useState({
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
  }), [l, d] = j.useState(!1), m = j.useMemo(() => {
    const p = (n ?? []).filter((k) => k.mini_enabled);
    return (p.length ? p : n ?? []).slice().sort((k, _) => Math.min(_.w_mm, _.h_mm) - Math.min(k.w_mm, k.h_mm))[0] ?? null;
  }, [n]), y = m ? Math.min(m.w_mm, m.h_mm) : 0, v = e.modo === "experto", g = ({ children: p }) => v ? /* @__PURE__ */ i.jsx(i.Fragment, { children: p }) : null, C = (p) => u((w) => ({ ...w, [p]: !w[p] })), x = (p) => t(p), O = j.useRef(null), h = ({ titulo: p, children: w }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(p) }),
    w
  ] }), c = (p, w, k, _, P = 1, S = "", N, $) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...$ ? { "data-tip": r($) } : {}, children: r(p) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: k,
          max: _,
          step: P,
          "data-testid": `set-${w}`,
          value: String(e[w]),
          onChange: (Y) => {
            const q = Number(Y.target.value);
            Number.isNaN(q) || x({ [w]: q });
          }
        }
      ),
      S && /* @__PURE__ */ i.jsx("span", { className: "hint", children: S }),
      N
    ] })
  ] }), f = (p, w, k, _, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...P ? { "data-tip": r(P) } : {}, children: r(p) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${w}`,
        value: String(e[w]),
        onChange: (S) => x({ [w]: S.target.value }),
        children: k.map(([S, N]) => /* @__PURE__ */ i.jsx("option", { value: S, children: r(N) }, S))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Vm, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !v && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(wr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(h, { titulo: "Colocación", children: [
              c(
                "Espacio entre elementos",
                "espacio_mm",
                0,
                20,
                0.5,
                "mm",
                void 0,
                "Separación mínima entre piezas al colocarlas. Para chapa, 0,5; para pegatinas que se recortan una a una, 2 mm."
              ),
              c(
                "Margen de seguridad a los límites",
                "margen_mm",
                0,
                20,
                0.5,
                "mm",
                void 0,
                "Cuánto se separan las piezas del borde del área recortable. Súbelo si tu Cricut corta justo al límite."
              ),
              f("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(h, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(g, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (p) => {
                      const w = p.target.value, k = mm[w];
                      x(k ? { pagina: w, pagina_w: k[0], pagina_h: k[1] } : { pagina: w });
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
              /* @__PURE__ */ i.jsx(g, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (p) => x({ pagina_w: Number(p.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (p) => x({ pagina_h: Number(p.target.value) })
                    }
                  )
                ] })
              ] }) }),
              f("Máquina Cricut", "maquina", [
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
        St,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ i.jsxs(h, { titulo: "Tamaños", children: [
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
              c(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas)."
              ),
              !e.mini_usar_lista && c(
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
            /* @__PURE__ */ i.jsx(h, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(g, { children: [
              f("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              f("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ]),
              f("Borde de los minis", "mini_borde_modo", [
                ["proporcional", "Proporcional (se reduce con el mini)"],
                ["igual", "Mantener el mismo borde (mm del original)"],
                ["sin", "Sin borde"]
              ], void 0, "Qué hacer con el borde de cada mini al reducirlo"),
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
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((p, w) => /* @__PURE__ */ i.jsx(
                    Gm,
                    {
                      i: w,
                      valor: p,
                      refBase: y,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (k) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[w] = k, x({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => x({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (k, _) => _ !== w
                        )
                      })
                    },
                    w
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
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: m ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: m.name, mm: y.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Br, { size: 15 }),
          children: [
            f("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            f("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ i.jsxs(g, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (p) => x({ opt_tiempo_auto: p.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: Hm[e.opt_metodo] ?? 8,
                  m: r(Wm[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(eo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(h, { titulo: "Impresión", children: [
              c(
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
              f("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ i.jsxs(g, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (p) => x({ simular_impresion: p.target.checked })
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
                        onChange: (p) => x({ sim_cmyk: p.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  c("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  c("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  c("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              f("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(h, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (p) => x({ chequear_lineas: p.target.checked })
                  }
                ),
                r("Comprobación de líneas anómalas")
              ] }) }),
              c(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              f("Lienzo del archivo final", "lienzo", [
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
                      onClick: () => d(!0),
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
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(yo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (p) => x({ offset_activo: p.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              c(
                "Grosor del borde",
                "offset_mm",
                0.1,
                20,
                0.1,
                "mm",
                void 0,
                "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar."
              ),
              f("Tipo de borde", "offset_modo", [
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
                      onChange: (p) => x({ offset_color: p.target.value })
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
        St,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(_m, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: ru(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: Zl[e.maquina] ?? "Cricut Maker 3" }
              ),
              [Zl[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            c("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            c("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            c("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            c("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Ed, { size: 15 }),
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
                  onChange: (p) => x({ historial: p.target.checked })
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              c("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (p) => x({ hist_tamano: p.target.checked })
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
                    onChange: (p) => x({ hist_copias: p.target.checked })
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
                    onChange: (p) => x({ hist_borde: p.target.checked })
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
                    onChange: (p) => x({ hist_minis: p.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(zd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Oi.map((p) => /* @__PURE__ */ i.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === p.key ? "active" : ""}`,
                  "data-testid": `tema-${p.key}`,
                  onClick: () => t({ tema: p.key }),
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: p.colors.accent } }),
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: p.colors.accent2 } }),
                    p.label
                  ]
                },
                p.key
              )) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (p) => t({ ver_guias: p.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx("img", { src: D.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var p;
                  return (p = O.current) == null ? void 0 : p.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: O,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (p) => {
                      var k;
                      const w = (k = p.target.files) == null ? void 0 : k[0];
                      w && D.setIcon(w).then(() => {
                        window.location.reload();
                      }), p.target.value = "";
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
        St,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Cd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(h, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
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
                    onChange: (p) => x({ volumen: Number(p.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ i.jsxs(h, { titulo: "Pikmin", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (p) => x({ pikmin_activo: p.target.checked })
                  }
                ),
                r("Mostrar Pikmin de vez en cuando")
              ] }) }),
              c("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (p) => x({ pikmin_sonido: p.target.checked })
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
                    onChange: (p) => x({ pikmin_sonido_morir: p.target.checked })
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
                    onChange: (p) => t({ comprobar_versiones: p.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: ru(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      bd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (p) => t({ carpeta_export: p })
      }
    )
  ] });
}
function ha(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Ym({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: o = 0.5,
  mute: s = !1,
  onVolumen: u,
  onMute: l,
  onIdioma: d,
  onEasterEgg: m,
  onAyuda: y,
  onReportar: v
}) {
  var Q, et;
  const g = Ze(), C = Os(), [x, O] = j.useState([]), [h, c] = j.useState(0), [f, p] = j.useState(null), [w, k] = j.useState(!1), [_, P] = j.useState(""), S = j.useRef(!1), N = j.useRef([]);
  j.useEffect(() => {
    fetch("/api/funmsgs").then((I) => I.ok ? I.json() : { msgs: [] }).then((I) => O(I.msgs ?? [])).catch(() => {
    });
  }, []), j.useEffect(() => {
    let I = !0;
    return D.version().then((X) => {
      I && (p(X), !X.comprobado && !S.current && (S.current = !0, D.checkVersion().then((fe) => I && p(fe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      I = !1;
    };
  }, []);
  const $ = ((Q = f == null ? void 0 : f.actualizacion) == null ? void 0 : Q.estado) === "descargando" || ((et = f == null ? void 0 : f.actualizacion) == null ? void 0 : et.estado) === "instalando";
  j.useEffect(() => {
    if (!$) return;
    const I = setInterval(() => {
      D.version().then(p).catch(() => {
      });
    }, 700);
    return () => clearInterval(I);
  }, [$]);
  const Y = a || !!(e && !e.done);
  j.useEffect(() => {
    if (!Y) return;
    const I = setInterval(() => c((X) => X + 1), 1200);
    return () => clearInterval(I);
  }, [Y]);
  const q = x.length ? x : [
    g("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], b = j.useMemo(() => {
    if (_) return _;
    if ($) {
      const I = f == null ? void 0 : f.actualizacion;
      if ((I == null ? void 0 : I.estado) === "instalando") return g("Instalando y reiniciando…");
      const X = (I == null ? void 0 : I.progreso) != null ? Math.round(I.progreso) : null;
      return X != null ? g("Descargando… {p}%", { p: X }) : (I == null ? void 0 : I.mensaje) || g("Descargando actualización…");
    }
    return Y ? q[h % q.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? g("Listo") : g("Listo para empezar");
  }, [_, $, Y, e, q, h, n, g, f]), ee = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), Ge = j.useMemo(() => {
    const I = e == null ? void 0 : e.eta_s;
    if (!Y || I === void 0 || I === null || I <= 0.5) return "";
    const X = e == null ? void 0 : e.tope_s;
    return X ? g(" · ~{x} restante (máx {y})", {
      x: ha(I),
      y: ha(X)
    }) : g(" · {x} restante", { x: ha(I) });
  }, [e == null ? void 0 : e.eta_s, Y, g]), De = j.useMemo(() => !r || !r.segundos ? "" : ha(r.segundos), [r]), M = async () => {
    k(!0), P("");
    try {
      const I = await D.checkVersion();
      p(I), I.error ? P(g("Sin conexión")) : I.hay_nueva || P(g("Estás en la última versión"));
    } catch {
      P(g("Sin conexión"));
    } finally {
      k(!1);
    }
  }, F = async () => {
    P("");
    try {
      const I = await D.updateVersion();
      I.ok ? P(g("Instalando y reiniciando…")) : I.modo === "dev" && I.url ? (P(g("Modo desarrollo: se actualiza con git")), await D.openReleases().catch(() => {
      })) : P(I.mensaje || g("No se pudo actualizar")), D.version().then(p).catch(() => {
      });
    } catch {
      P(g("No se pudo actualizar"));
    }
  }, W = !!(f != null && f.hay_nueva && !Y && !$) ? g("Nueva versión {v} disponible", { v: (f == null ? void 0 : f.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: D.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: g("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const I = Date.now();
            N.current = [...N.current, I].filter((X) => I - X < 2500), N.current.length >= 5 && (N.current = [], P(g("¡Fiesta Pikmin!")), window.setTimeout(() => P(""), 4e3), m == null || m());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !Y && (() => {
        const I = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), X = n.placed || 1, fe = Math.min(80, Math.max(
          30,
          48 + 22 * I - Math.min(18, X * 0.08)
        )), Ne = n.efficiency * 100, tt = Ne >= fe ? "buena" : Ne >= fe * 0.72 ? "normal" : "baja";
        return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": g("Imágenes colocadas en las hojas"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.placed }),
            /* @__PURE__ */ i.jsx("span", { children: g("imágenes") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": g("Páginas que ocupa el trabajo"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.pages }),
            /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? g("páginas") : g("página") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": g("Copias pequeñas extra que rellenan huecos"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.minis }),
            /* @__PURE__ */ i.jsx("span", { children: g("minis") })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `stat-card eficiencia ${tt}`,
              "data-testid": "eficiencia-card",
              "data-nivel": tt,
              "data-tip": g("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: X, e: Math.round(fe) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(Ne),
                  "%"
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: g("eficiencia") })
              ]
            }
          )
        ] });
      })(),
      !(n && n.pages > 0 && !Y) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: b }),
      Y && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, ee)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          ee,
          "%",
          Ge
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: yt("/piensa.gif"),
            alt: "",
            title: g("Pensando…"),
            onError: (I) => {
              I.currentTarget.style.display = "none";
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
          "data-tip": g("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => y == null ? void 0 : y(),
          children: [
            /* @__PURE__ */ i.jsx(Im, { size: 15 }),
            " ",
            g("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info reportar",
          "data-testid": "btn-reportar",
          "data-tip": g("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ i.jsx(Pd, { size: 15 }),
            " ",
            g("Reportar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          "data-tip": g("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ i.jsx(Dm, { size: 15 }),
            " ",
            g("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: g("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((f == null ? void 0 : f.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ i.jsx(Tm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: g("Idioma"),
          onClick: () => d == null ? void 0 : d(C === "es" ? "en" : "es"),
          children: C.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: g("Versión actual"),
          children: [
            (f == null ? void 0 : f.hay_nueva) && !$ && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: W || g("Hay una versión nueva"),
                onClick: F,
                children: /* @__PURE__ */ i.jsx(Lm, { size: 14 })
              }
            ),
            "v",
            (f == null ? void 0 : f.actual) ?? "—",
            (f == null ? void 0 : f.hay_nueva) && (f == null ? void 0 : f.ultima) && /* @__PURE__ */ i.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
              "v",
              f.ultima
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini",
                "data-testid": "btn-comprobar",
                title: g("Comprobar versiones"),
                onClick: M,
                disabled: w,
                children: w ? "…" : /* @__PURE__ */ i.jsx(Am, { size: 14 })
              }
            ),
            (f == null ? void 0 : f.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: g("Descargar e instalar la nueva versión"),
                onClick: F,
                children: /* @__PURE__ */ i.jsx(Rm, { size: 14 })
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
          title: g(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: g("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            g("Corte"),
            " ",
            De || "—"
          ]
        }
      )
    ] })
  ] });
}
const Km = [
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
], Jm = "/pikmin_bloom/", au = "/pikmin/alma.png", Xm = "/sonidos/pikmin.mp3", Zm = "/sonidos/pikmin_morir.mp3";
function eh(e) {
  const [t, n] = j.useState(Km), [r, a] = j.useState([]);
  return j.useEffect(() => {
    fetch(yt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(yt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => yt(Jm + u)));
    }).catch(() => {
    });
  }, []), j.useMemo(
    () => e && e.length ? [...e, ...r].map(yt) : [...t, ...r].map(yt),
    [e, t, r]
  );
}
function th({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: s = !1,
  minDelay: u,
  maxDelay: l,
  fuentes: d
}) {
  const m = eh(d), [y, v] = j.useState([]), g = j.useRef(void 0), C = j.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), x = j.useRef(s);
  x.current = s;
  const O = Math.max(5e3, t * 6e4), h = (w) => {
    if (!(!n || o))
      try {
        const k = new Audio(yt(w ? Zm : Xm));
        k.volume = Math.min(1, Math.max(0, a)), k.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const w = r && Math.random() < 0.25, k = w ? yt(au) : m[Math.floor(Math.random() * m.length)] ?? yt(au);
    v((_) => [..._, {
      src: k,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: w,
      estado: "paseando"
    }]), h(w);
  }, f = () => {
    if (!e) return;
    const w = u ?? Math.round(O * 0.5), k = l ?? Math.round(O * 1.5), _ = w + Math.random() * Math.max(1, k - w);
    g.current = window.setTimeout(c, _);
  };
  j.useEffect(() => {
    if (!e) {
      window.clearTimeout(g.current), v([]);
      return;
    }
    return f(), () => window.clearTimeout(g.current);
  }, [e, t, n, r, a, o, m]), j.useEffect(() => {
    const w = () => {
      C.current = document.visibilityState === "hidden", !C.current && x.current && window.setTimeout(() => {
        v((k) => k.length ? (h(!1), k.map((_) => ({ ..._, estado: "festejando" }))) : k), window.setTimeout(() => {
          v([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []);
  const p = (w) => {
    if (x.current && C.current) {
      v((k) => k.map((_) => _.key === w ? { ..._, estado: "quieto" } : _));
      return;
    }
    v((k) => k.filter((_) => _.key !== w)), f();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: y.map((w) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${w.estado}${w.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": w.estado,
      "data-morir": w.morir ? "1" : "0",
      style: { left: `${w.left}%` },
      onAnimationEnd: () => p(w.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: w.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => p(w.key)
        }
      )
    },
    w.key
  )) });
}
const ou = "crycat_bienvenida_v2";
function nh() {
  const [e, t] = j.useState(!1);
  return j.useEffect(() => {
    try {
      localStorage.getItem(ou) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(ou, "1");
    } catch {
    }
    t(!1);
  } };
}
function rh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ze(), [a, o] = j.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(eo, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Ur, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(Br, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Bi, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(yo, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Ur, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(Br, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(Nd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Bi, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Mm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(Cd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
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
  ], d = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: d[a] }),
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((m, y) => /* @__PURE__ */ i.jsx("li", { children: m }, y)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([m, y, v], g) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: m }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: y }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: v })
      ] })
    ] }, g)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
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
const ah = "https://github.com/dhernandezgit/CryCat-Tool", oh = [
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
function ih({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Ze(), [s, u] = j.useState(""), [l, d] = j.useState(""), [m, y] = j.useState(""), [v, g] = j.useState(!0), [C, x] = j.useState(!0), [O, h] = j.useState(!0), [c, f] = j.useState(!1);
  j.useEffect(() => {
    e && (D.version().then((S) => u(S.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const p = () => (globalThis.__crycatErrores ?? []).map(
    (N) => `- [${N.t}] ${N.msg} (${N.donde || "?"})`
  );
  if (!e) return null;
  const w = () => {
    var Y, q;
    const S = navigator.userAgent, N = !!globalThis.__crycatBase, $ = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${N ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${S}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((Y = window.screen) == null ? void 0 : Y.width) ?? "?"}x${((q = window.screen) == null ? void 0 : q.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && $.push(`- Elementos: ${a.pages} página(s)`), r && $.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), $.join(`
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
`) : "", _ = () => {
    const S = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      m.trim() || "1. …",
      ""
    ];
    v && S.push("### Entorno", w(), ""), C && n && S.push("### Ajustes", k(), "");
    const N = p();
    return O && N.length && S.push("### Errores recogidos", N.join(`
`), ""), S.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), S.join(`
`);
  }, P = () => {
    const S = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, N = `${ah}/issues/new?` + new URLSearchParams({
      title: S,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(N, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: oh.map(([S, N]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${S}`,
        onClick: () => d(($) => ($ ? $ + `
` : "") + N),
        children: o(S)
      },
      S
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
          onChange: (S) => d(S.target.value)
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
          onChange: (S) => y(S.target.value)
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
          onChange: (S) => g(S.target.checked)
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
          checked: C,
          onChange: (S) => x(S.target.checked)
        }
      ),
      o("Incluir mis ajustes actuales")
    ] }),
    p().length > 0 && /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: O,
          onChange: (S) => h(S.target.checked)
        }
      ),
      o(
        "Incluir los {n} errores recogidos de la consola",
        { n: p().length }
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

${_()}`
              ), f(!0);
            } catch {
            }
          },
          children: o(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: P, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function sh() {
  const [e, t] = j.useState([]), [n, r] = j.useState(null), [a, o] = j.useState(null), [s, u] = j.useState(null), [l, d] = j.useState(null), [m, y] = j.useState(null), [v, g] = j.useState(!0), [C, x] = j.useState(!1), [O, h] = j.useState(!1), [c, f] = j.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [p, w] = j.useState(33.3), [k, _] = j.useState(33.3), P = nh(), S = j.useRef(null), N = j.useRef(null);
  j.useEffect(() => {
    (async () => {
      try {
        const A = await D.getSettings();
        d(A.settings), eu(A.settings.tema), f((U) => ({
          ...U,
          guidesVisible: A.settings.ver_guias,
          eyeTransparent: A.settings.fondo_transparente
        })), t((await D.listAssets()).map(Or)), o(await D.result());
      } catch {
        g(!1);
      }
    })();
  }, []);
  const [$, Y] = j.useState("");
  j.useEffect(() => {
    const A = (U) => Y(String(U.detail || ""));
    return window.addEventListener("crycat:seleccion", A), () => window.removeEventListener("crycat:seleccion", A);
  }, []), j.useEffect(() => {
    const A = (U) => {
      const $e = U.detail;
      w($e ? 19 : 33.3), _($e ? 62 : 33.3), f((rt) => ({ ...rt, hojaGirada: $e }));
    };
    return window.addEventListener("crycat:disposicion", A), () => window.removeEventListener("crycat:disposicion", A);
  }, []), j.useEffect(() => {
    const A = setInterval(async () => {
      try {
        await D.health(), g(!0);
      } catch {
        g(!1);
      }
    }, 5e3);
    return () => clearInterval(A);
  }, []);
  const q = j.useCallback(async () => {
    try {
      t((await D.listAssets()).map(Or)), o(await D.result());
      try {
        u(await D.estimate());
      } catch {
      }
    } catch {
      g(!1);
    }
  }, []), b = j.useCallback((A) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(async () => {
      try {
        const U = await D.job(A);
        y(U), U.done && (window.clearInterval(N.current), N.current = null, await q(), U.status === "done" && window.setTimeout(() => y(null), 2500));
      } catch {
        window.clearInterval(N.current), N.current = null;
      }
    }, 300);
  }, []), ee = j.useCallback(async () => {
    h(!0);
    try {
      const A = await D.optimize();
      y(A), b(A.id);
    } catch {
      g(!1);
    } finally {
      h(!1);
    }
  }, [b]), Ge = j.useCallback(
    async (A) => {
      try {
        const U = await D.optimize(A, !0);
        y(U), b(U.id);
      } catch {
        g(!1);
      }
    },
    [b]
  ), De = j.useCallback(() => {
    l && l.auto_recalcular === !1 || (S.current && window.clearTimeout(S.current), S.current = window.setTimeout(ee, 400));
  }, [ee, l]), M = j.useRef(null);
  j.useEffect(() => {
    M.current = De;
  }, [De]);
  const F = j.useRef(!1);
  j.useEffect(() => {
    if (!(!l || F.current)) {
      if (e.length > 0) {
        F.current = !0;
        return;
      }
      F.current = !0, D.crearDemo().then(async (A) => {
        A.ok && await q();
      }).catch(() => {
      });
    }
  }, [l, e.length, q]);
  const B = j.useCallback(
    async (A) => {
      d((U) => U && { ...U, ...A }), A.tema && eu(A.tema);
      try {
        const U = await D.putSettings(A);
        if (U.job)
          y(U.job), b(U.job.id);
        else
          try {
            u(await D.estimate());
          } catch {
          }
      } catch {
        g(!1);
      }
    },
    [b]
  ), W = j.useRef([]), Q = j.useRef([]), [et, I] = j.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), X = (l == null ? void 0 : l.historial) !== !1, fe = (l == null ? void 0 : l.historial_max) ?? 40, Ne = () => I({
    puedeDeshacer: W.current.length > 0,
    puedeRehacer: Q.current.length > 0
  }), tt = j.useCallback(() => {
    const A = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && A.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && A.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && A.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && A.push("mini_enabled", "mini_quota"), A;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), Rt = j.useCallback((A) => {
    const U = {};
    for (const $e of tt()) U[$e] = A[$e];
    return U;
  }, [tt]), Qr = j.useCallback(() => {
    X && (W.current = [...W.current, e].slice(-fe), Q.current = [], Ne());
  }, [e, X, fe]), jn = j.useCallback(async () => {
    const A = W.current.pop();
    if (A) {
      Q.current = [...Q.current, e], t(A), Ne();
      for (const U of A)
        await D.patchAsset(U.id, Rt(U)).catch(() => {
        });
      await q();
    }
  }, [e, q, Rt]), nt = j.useCallback(async () => {
    const A = Q.current.pop();
    if (A) {
      W.current = [...W.current, e], t(A), Ne();
      for (const U of A)
        await D.patchAsset(U.id, Rt(U)).catch(() => {
        });
      await q();
    }
  }, [e, q, Rt]);
  j.useEffect(() => {
    const A = (U) => {
      if (!(U.ctrlKey || U.metaKey)) return;
      const rt = U.target;
      if (rt && (rt.tagName === "INPUT" || rt.tagName === "TEXTAREA" || rt.tagName === "SELECT" || rt.isContentEditable)) return;
      const At = U.key.toLowerCase();
      At === "z" && !U.shiftKey ? (U.preventDefault(), jn()) : (At === "y" || At === "z" && U.shiftKey) && (U.preventDefault(), nt());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [jn, nt]);
  const Yr = j.useCallback(
    (A) => {
      const U = (rt) => {
        const Kr = window.innerWidth, At = rt.clientX / Kr * 100;
        A === "left" ? w(Math.min(45, Math.max(12, At))) : _(Math.min(60, Math.max(20, At - p)));
      }, $e = () => {
        window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", $e);
      };
      window.addEventListener("mousemove", U), window.addEventListener("mouseup", $e);
    },
    [p]
  );
  return j.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(xm, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${p}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Fm,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await q(), De();
          },
          saveSettings: B,
          onEditarContorno: (A) => r(A),
          onAntesDeCambiar: Qr,
          verBordes: c.verBordes,
          destacado: $
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Yr("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${k}%` }, children: /* @__PURE__ */ i.jsx(
        Um,
        {
          assets: e,
          result: a,
          settings: l,
          ui: c,
          setUi: f,
          saveSettings: B,
          optimize: ee,
          onRefresh: q,
          onJob: (A) => {
            y(A), b(A.id);
          },
          onRecalc: Ge,
          editando: n,
          onFinEdicion: async () => {
            r(null), await q();
          },
          onDeshacer: jn,
          onRehacer: nt,
          puedeDeshacer: et.puedeDeshacer,
          puedeRehacer: et.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Yr("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Qm,
        {
          settings: l,
          assets: e,
          saveSettings: B
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Ym,
      {
        job: m,
        backendOk: v,
        result: a,
        estimate: s,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (A) => B({ volumen: A }),
        onMute: (A) => B({ mute: A }),
        onIdioma: (A) => B({ idioma: A }),
        onEasterEgg: () => B({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: P.abrir,
        onReportar: () => x(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      th,
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
      rh,
      {
        open: P.visible,
        onClose: P.cerrar,
        onAbrirCarpeta: () => void D.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      ih,
      {
        open: C,
        onClose: () => x(!1),
        settings: l,
        job: m,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: wm("es", "Cargando CryCat…") });
}
const Md = document.getElementById("root"), Ho = [
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
], Ui = 8, Pa = [];
globalThis.__crycatErrores = Pa;
const Td = (e, t) => {
  Pa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Pa.length > 12 && Pa.shift();
};
window.addEventListener("error", (e) => Td(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Td(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let qi;
function iu(e, t = !1) {
  window.clearTimeout(qi);
  const n = jd().colors;
  if (Md.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Ui}</div>
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
  let r = Math.floor(Math.random() * Ho.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Ho[r++ % Ho.length]);
  }, o = () => {
    a(), qi = window.setTimeout(
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
    r && (r.textContent = `Paso ${t} de ${Ui}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Ui * 100)}%`);
  }
};
let jr = null;
const Vi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, lh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function uh(e) {
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
    Vi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function ch(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((y, v) => {
    s[v] = y;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [y, v] = await uh(l);
    u = y, s["content-type"] = v;
  } else l instanceof Blob ? u = Vi(await l.arrayBuffer()) : typeof l == "string" && (u = Vi(new TextEncoder().encode(l).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(u) + ")", m = JSON.parse(await jr.runPythonAsync(d));
  return new Response(lh(m.body), {
    status: m.status || 200,
    headers: m.headers || { "content-type": "application/json" }
  });
}
function dh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && jr)
      try {
        return await ch(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function ph() {
  try {
    if (iu("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    jr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(ga), ga("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await jr.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", s = await jr.runPythonAsync(o);
          a.postMessage(JSON.parse(s));
        } catch (o) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (o && o.message ? o.message : o))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, dh();
    try {
      const n = jd().key;
      n && n !== "wiwi" && await fetch(fn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    ga("Optimizando la muestra inicial…", 7);
    try {
      const n = await fetch(fn() + "api/assets").then((r) => r.json());
      Array.isArray(n) && n.length === 0 && await fetch(fn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    ga("Abriendo la aplicación…", 8), window.clearTimeout(qi), xd(Md).render(/* @__PURE__ */ i.jsx(sh, {}));
  } catch (e) {
    iu("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
ph();
