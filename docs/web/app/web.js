var au = { exports: {} }, Ya = {}, ou = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br = Symbol.for("react.element"), Ad = Symbol.for("react.portal"), Id = Symbol.for("react.fragment"), Dd = Symbol.for("react.strict_mode"), $d = Symbol.for("react.profiler"), Od = Symbol.for("react.provider"), Fd = Symbol.for("react.context"), Bd = Symbol.for("react.forward_ref"), Ud = Symbol.for("react.suspense"), qd = Symbol.for("react.memo"), Vd = Symbol.for("react.lazy"), Os = Symbol.iterator;
function Gd(e) {
  return e === null || typeof e != "object" ? null : (e = Os && e[Os] || e["@@iterator"], typeof e == "function" ? e : null);
}
var iu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, su = Object.assign, lu = {};
function Wn(e, t, n) {
  this.props = e, this.context = t, this.refs = lu, this.updater = n || iu;
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uu() {
}
uu.prototype = Wn.prototype;
function Bi(e, t, n) {
  this.props = e, this.context = t, this.refs = lu, this.updater = n || iu;
}
var Ui = Bi.prototype = new uu();
Ui.constructor = Bi;
su(Ui, Wn.prototype);
Ui.isPureReactComponent = !0;
var Fs = Array.isArray, cu = Object.prototype.hasOwnProperty, qi = { current: null }, du = { key: !0, ref: !0, __self: !0, __source: !0 };
function pu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) cu.call(t, r) && !du.hasOwnProperty(r) && (a[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) a.children = n;
  else if (1 < l) {
    for (var u = Array(l), d = 0; d < l; d++) u[d] = arguments[d + 2];
    a.children = u;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) a[r] === void 0 && (a[r] = l[r]);
  return { $$typeof: Br, type: e, key: o, ref: s, props: a, _owner: qi.current };
}
function Hd(e, t) {
  return { $$typeof: Br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Vi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Br;
}
function Wd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Bs = /\/+/g;
function mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wd("" + e.key) : t.toString(36);
}
function da(e, t, n, r, a) {
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
        case Br:
        case Ad:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + mo(s, 0) : r, Fs(a) ? (n = "", e != null && (n = e.replace(Bs, "$&/") + "/"), da(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Vi(a) && (a = Hd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Bs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Fs(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var u = r + mo(o, l);
    s += da(o, t, n, u, a);
  }
  else if (u = Gd(e), typeof u == "function") for (e = u.call(e), l = 0; !(o = e.next()).done; ) o = o.value, u = r + mo(o, l++), s += da(o, t, n, u, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Qr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return da(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function Qd(e) {
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
var be = { current: null }, pa = { transition: null }, Yd = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: pa, ReactCurrentOwner: qi };
function fu() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: Qr, forEach: function(e, t, n) {
  Qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Vi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Wn;
U.Fragment = Id;
U.Profiler = $d;
U.PureComponent = Bi;
U.StrictMode = Dd;
U.Suspense = Ud;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yd;
U.act = fu;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = su({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = qi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (u in t) cu.call(t, u) && !du.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var d = 0; d < u; d++) l[d] = arguments[d + 2];
    r.children = l;
  }
  return { $$typeof: Br, type: e.type, key: a, ref: o, props: r, _owner: s };
};
U.createContext = function(e) {
  return e = { $$typeof: Fd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Od, _context: e }, e.Consumer = e;
};
U.createElement = pu;
U.createFactory = function(e) {
  var t = pu.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Bd, render: e };
};
U.isValidElement = Vi;
U.lazy = function(e) {
  return { $$typeof: Vd, _payload: { _status: -1, _result: e }, _init: Qd };
};
U.memo = function(e, t) {
  return { $$typeof: qd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = pa.transition;
  pa.transition = {};
  try {
    e();
  } finally {
    pa.transition = t;
  }
};
U.unstable_act = fu;
U.useCallback = function(e, t) {
  return be.current.useCallback(e, t);
};
U.useContext = function(e) {
  return be.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return be.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return be.current.useEffect(e, t);
};
U.useId = function() {
  return be.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return be.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return be.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return be.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return be.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return be.current.useRef(e);
};
U.useState = function(e) {
  return be.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return be.current.useTransition();
};
U.version = "18.3.1";
ou.exports = U;
var j = ou.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd = j, Jd = Symbol.for("react.element"), Xd = Symbol.for("react.fragment"), Zd = Object.prototype.hasOwnProperty, ep = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function mu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Zd.call(t, r) && !tp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Jd, type: e, key: o, ref: s, props: a, _owner: ep.current };
}
Ya.Fragment = Xd;
Ya.jsx = mu;
Ya.jsxs = mu;
au.exports = Ya;
var i = au.exports, hu = { exports: {} }, qe = {}, gu = { exports: {} }, vu = {};
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
  function t(b, F) {
    var B = b.length;
    b.push(F);
    e: for (; 0 < B; ) {
      var G = B - 1 >>> 1, Y = b[G];
      if (0 < a(Y, F)) b[G] = F, b[B] = Y, B = G;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var F = b[0], B = b.pop();
    if (B !== F) {
      b[0] = B;
      e: for (var G = 0, Y = b.length, D = Y >>> 1; G < D; ) {
        var W = 2 * (G + 1) - 1, fe = b[W], xe = W + 1, Le = b[xe];
        if (0 > a(fe, B)) xe < Y && 0 > a(Le, fe) ? (b[G] = Le, b[xe] = B, G = xe) : (b[G] = fe, b[W] = B, G = W);
        else if (xe < Y && 0 > a(Le, B)) b[G] = Le, b[xe] = B, G = xe;
        else break e;
      }
    }
    return F;
  }
  function a(b, F) {
    var B = b.sortIndex - F.sortIndex;
    return B !== 0 ? B : b.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var u = [], d = [], g = 1, y = null, p = 3, S = !1, N = !1, v = !1, $ = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(b) {
    for (var F = n(d); F !== null; ) {
      if (F.callback === null) r(d);
      else if (F.startTime <= b) r(d), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(d);
    }
  }
  function h(b) {
    if (v = !1, f(b), !N) if (n(u) !== null) N = !0, Ne(k);
    else {
      var F = n(d);
      F !== null && Te(h, F.startTime - b);
    }
  }
  function k(b, F) {
    N = !1, v && (v = !1, m(P), P = -1), S = !0;
    var B = p;
    try {
      for (f(F), y = n(u); y !== null && (!(y.expirationTime > F) || b && !M()); ) {
        var G = y.callback;
        if (typeof G == "function") {
          y.callback = null, p = y.priorityLevel;
          var Y = G(y.expirationTime <= F);
          F = e.unstable_now(), typeof Y == "function" ? y.callback = Y : y === n(u) && r(u), f(F);
        } else r(u);
        y = n(u);
      }
      if (y !== null) var D = !0;
      else {
        var W = n(d);
        W !== null && Te(h, W.startTime - F), D = !1;
      }
      return D;
    } finally {
      y = null, p = B, S = !1;
    }
  }
  var C = !1, _ = null, P = -1, w = 5, x = -1;
  function M() {
    return !(e.unstable_now() - x < w);
  }
  function ne() {
    if (_ !== null) {
      var b = e.unstable_now();
      x = b;
      var F = !0;
      try {
        F = _(!0, b);
      } finally {
        F ? le() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var le;
  if (typeof c == "function") le = function() {
    c(ne);
  };
  else if (typeof MessageChannel < "u") {
    var _e = new MessageChannel(), dt = _e.port2;
    _e.port1.onmessage = ne, le = function() {
      dt.postMessage(null);
    };
  } else le = function() {
    $(ne, 0);
  };
  function Ne(b) {
    _ = b, C || (C = !0, le());
  }
  function Te(b, F) {
    P = $(function() {
      b(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    N || S || (N = !0, Ne(k));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(b) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = p;
    }
    var B = p;
    p = F;
    try {
      return b();
    } finally {
      p = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, F) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var B = p;
    p = b;
    try {
      return F();
    } finally {
      p = B;
    }
  }, e.unstable_scheduleCallback = function(b, F, B) {
    var G = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? G + B : G) : B = G, b) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = B + Y, b = { id: g++, callback: F, priorityLevel: b, startTime: B, expirationTime: Y, sortIndex: -1 }, B > G ? (b.sortIndex = B, t(d, b), n(u) === null && b === n(d) && (v ? (m(P), P = -1) : v = !0, Te(h, B - G))) : (b.sortIndex = Y, t(u, b), N || S || (N = !0, Ne(k))), b;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(b) {
    var F = p;
    return function() {
      var B = p;
      p = F;
      try {
        return b.apply(this, arguments);
      } finally {
        p = B;
      }
    };
  };
})(vu);
gu.exports = vu;
var np = gu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rp = j, Ue = np;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yu = /* @__PURE__ */ new Set(), wr = {};
function vn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++) yu.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Uo = Object.prototype.hasOwnProperty, ap = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Us = {}, qs = {};
function op(e) {
  return Uo.call(qs, e) ? !0 : Uo.call(Us, e) ? !1 : ap.test(e) ? qs[e] = !0 : (Us[e] = !0, !1);
}
function ip(e, t, n, r) {
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
function sp(e, t, n, r) {
  if (t === null || typeof t > "u" || ip(e, t, n, r)) return !0;
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
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gi = /[\-:]([a-z])/g;
function Hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Gi,
    Hi
  );
  ye[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gi, Hi);
  ye[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gi, Hi);
  ye[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var a = ye.hasOwnProperty(t) ? ye[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sp(t, n, a, r) && (n = null), r || a === null ? op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), jn = Symbol.for("react.portal"), Sn = Symbol.for("react.fragment"), Qi = Symbol.for("react.strict_mode"), qo = Symbol.for("react.profiler"), xu = Symbol.for("react.provider"), wu = Symbol.for("react.context"), Yi = Symbol.for("react.forward_ref"), Vo = Symbol.for("react.suspense"), Go = Symbol.for("react.suspense_list"), Ki = Symbol.for("react.memo"), $t = Symbol.for("react.lazy"), ku = Symbol.for("react.offscreen"), Vs = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object" ? null : (e = Vs && e[Vs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ho;
function ar(e) {
  if (ho === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ho = t && t[1] || "";
  }
  return `
` + ho + e;
}
var go = !1;
function vo(e, t) {
  if (!e || go) return "";
  go = !0;
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
`), s = a.length - 1, l = o.length - 1; 1 <= s && 0 <= l && a[s] !== o[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (a[s] !== o[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || a[s] !== o[l]) {
              var u = `
` + a[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    go = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function lp(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = vo(e.type, !1), e;
    case 11:
      return e = vo(e.type.render, !1), e;
    case 1:
      return e = vo(e.type, !0), e;
    default:
      return "";
  }
}
function Ho(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case jn:
      return "Portal";
    case qo:
      return "Profiler";
    case Qi:
      return "StrictMode";
    case Vo:
      return "Suspense";
    case Go:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wu:
      return (e.displayName || "Context") + ".Consumer";
    case xu:
      return (e._context.displayName || "Context") + ".Provider";
    case Yi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ki:
      return t = e.displayName || null, t !== null ? t : Ho(e.type) || "Memo";
    case $t:
      t = e._payload, e = e._init;
      try {
        return Ho(e(t));
      } catch {
      }
  }
  return null;
}
function up(e) {
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
      return Ho(t);
    case 8:
      return t === Qi ? "StrictMode" : "Mode";
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
function Zt(e) {
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
function ju(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function cp(e) {
  var t = ju(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Kr(e) {
  e._valueTracker || (e._valueTracker = cp(e));
}
function Su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ju(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ca(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wo(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Gs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Zt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cu(e, t) {
  t = t.checked, t != null && Wi(e, "checked", t, !1);
}
function Qo(e, t) {
  Cu(e, t);
  var n = Zt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yo(e, t.type, Zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Hs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Yo(e, t, n) {
  (t !== "number" || Ca(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var or = Array.isArray;
function Rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (or(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function _u(e, t) {
  var n = Zt(t.value), r = Zt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, Eu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var lr = {
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
}, dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(lr).forEach(function(e) {
  dp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e];
  });
});
function zu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px";
}
function Pu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = zu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var pp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xo(e, t) {
  if (t) {
    if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Zo(e, t) {
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
var ei = null;
function Ji(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ti = null, An = null, In = null;
function Ys(e) {
  if (e = Vr(e)) {
    if (typeof ti != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = eo(t), ti(e.stateNode, e.type, t));
  }
}
function bu(e) {
  An ? In ? In.push(e) : In = [e] : An = e;
}
function Mu() {
  if (An) {
    var e = An, t = In;
    if (In = An = null, Ys(e), t) for (e = 0; e < t.length; e++) Ys(t[e]);
  }
}
function Tu(e, t) {
  return e(t);
}
function Lu() {
}
var yo = !1;
function Ru(e, t, n) {
  if (yo) return e(t, n);
  yo = !0;
  try {
    return Tu(e, t, n);
  } finally {
    yo = !1, (An !== null || In !== null) && (Lu(), Mu());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = eo(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ni = !1;
if (Et) try {
  var Jn = {};
  Object.defineProperty(Jn, "passive", { get: function() {
    ni = !0;
  } }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
  ni = !1;
}
function fp(e, t, n, r, a, o, s, l, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var ur = !1, _a = null, Na = !1, ri = null, mp = { onError: function(e) {
  ur = !0, _a = e;
} };
function hp(e, t, n, r, a, o, s, l, u) {
  ur = !1, _a = null, fp.apply(mp, arguments);
}
function gp(e, t, n, r, a, o, s, l, u) {
  if (hp.apply(this, arguments), ur) {
    if (ur) {
      var d = _a;
      ur = !1, _a = null;
    } else throw Error(E(198));
    Na || (Na = !0, ri = d);
  }
}
function yn(e) {
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
function Au(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ks(e) {
  if (yn(e) !== e) throw Error(E(188));
}
function vp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yn(e), t === null) throw Error(E(188));
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
        if (o === n) return Ks(a), e;
        if (o === r) return Ks(a), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = a, r = o;
    else {
      for (var s = !1, l = a.child; l; ) {
        if (l === n) {
          s = !0, n = a, r = o;
          break;
        }
        if (l === r) {
          s = !0, r = a, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            s = !0, n = o, r = a;
            break;
          }
          if (l === r) {
            s = !0, r = o, n = a;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Iu(e) {
  return e = vp(e), e !== null ? Du(e) : null;
}
function Du(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Du(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $u = Ue.unstable_scheduleCallback, Js = Ue.unstable_cancelCallback, yp = Ue.unstable_shouldYield, xp = Ue.unstable_requestPaint, ue = Ue.unstable_now, wp = Ue.unstable_getCurrentPriorityLevel, Xi = Ue.unstable_ImmediatePriority, Ou = Ue.unstable_UserBlockingPriority, Ea = Ue.unstable_NormalPriority, kp = Ue.unstable_LowPriority, Fu = Ue.unstable_IdlePriority, Ka = null, gt = null;
function jp(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function") try {
    gt.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var lt = Math.clz32 ? Math.clz32 : _p, Sp = Math.log, Cp = Math.LN2;
function _p(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sp(e) / Cp | 0) | 0;
}
var Xr = 64, Zr = 4194304;
function ir(e) {
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
function za(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~a;
    l !== 0 ? r = ir(l) : (o &= s, o !== 0 && (r = ir(o)));
  } else s = n & ~a, s !== 0 ? r = ir(s) : o !== 0 && (r = ir(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - lt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Np(e, t) {
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
function Ep(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - lt(o), l = 1 << s, u = a[s];
    u === -1 ? (!(l & n) || l & r) && (a[s] = Np(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ai(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Bu() {
  var e = Xr;
  return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e;
}
function xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ur(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function zp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - lt(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function Zi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var Q = 0;
function Uu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qu, es, Vu, Gu, Hu, oi = !1, ea = [], Gt = null, Ht = null, Wt = null, Sr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Ft = [], Pp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Vr(t), t !== null && es(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function bp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Gt = Xn(Gt, e, t, n, r, a), !0;
    case "dragenter":
      return Ht = Xn(Ht, e, t, n, r, a), !0;
    case "mouseover":
      return Wt = Xn(Wt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Sr.set(o, Xn(Sr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Cr.set(o, Xn(Cr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Wu(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Au(n), t !== null) {
          e.blockedOn = t, Hu(e.priority, function() {
            Vu(n);
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
function fa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ei = r, n.target.dispatchEvent(r), ei = null;
    } else return t = Vr(n), t !== null && es(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zs(e, t, n) {
  fa(e) && n.delete(t);
}
function Mp() {
  oi = !1, Gt !== null && fa(Gt) && (Gt = null), Ht !== null && fa(Ht) && (Ht = null), Wt !== null && fa(Wt) && (Wt = null), Sr.forEach(Zs), Cr.forEach(Zs);
}
function Zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, oi || (oi = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Mp)));
}
function _r(e) {
  function t(a) {
    return Zn(a, e);
  }
  if (0 < ea.length) {
    Zn(ea[0], e);
    for (var n = 1; n < ea.length; n++) {
      var r = ea[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gt !== null && Zn(Gt, e), Ht !== null && Zn(Ht, e), Wt !== null && Zn(Wt, e), Sr.forEach(t), Cr.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) Wu(n), n.blockedOn === null && Ft.shift();
}
var Dn = Mt.ReactCurrentBatchConfig, Pa = !0;
function Tp(e, t, n, r) {
  var a = Q, o = Dn.transition;
  Dn.transition = null;
  try {
    Q = 1, ts(e, t, n, r);
  } finally {
    Q = a, Dn.transition = o;
  }
}
function Lp(e, t, n, r) {
  var a = Q, o = Dn.transition;
  Dn.transition = null;
  try {
    Q = 4, ts(e, t, n, r);
  } finally {
    Q = a, Dn.transition = o;
  }
}
function ts(e, t, n, r) {
  if (Pa) {
    var a = ii(e, t, n, r);
    if (a === null) Po(e, t, r, ba, n), Xs(e, r);
    else if (bp(a, e, t, n, r)) r.stopPropagation();
    else if (Xs(e, r), t & 4 && -1 < Pp.indexOf(e)) {
      for (; a !== null; ) {
        var o = Vr(a);
        if (o !== null && qu(o), o = ii(e, t, n, r), o === null && Po(e, t, r, ba, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var ba = null;
function ii(e, t, n, r) {
  if (ba = null, e = Ji(r), e = sn(e), e !== null) if (t = yn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Au(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ba = e, null;
}
function Qu(e) {
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
      switch (wp()) {
        case Xi:
          return 1;
        case Ou:
          return 4;
        case Ea:
        case kp:
          return 16;
        case Fu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null, ns = null, ma = null;
function Yu() {
  if (ma) return ma;
  var e, t = ns, n = t.length, r, a = "value" in qt ? qt.value : qt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return ma = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ha(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ta() {
  return !0;
}
function el() {
  return !1;
}
function Ve(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ta : el, this.isPropagationStopped = el, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ta);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ta);
  }, persist: function() {
  }, isPersistent: ta }), t;
}
var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, rs = Ve(Qn), qr = oe({}, Qn, { view: 0, detail: 0 }), Rp = Ve(qr), wo, ko, er, Ja = oe({}, qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: as, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (wo = e.screenX - er.screenX, ko = e.screenY - er.screenY) : ko = wo = 0, er = e), wo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ko;
} }), tl = Ve(Ja), Ap = oe({}, Ja, { dataTransfer: 0 }), Ip = Ve(Ap), Dp = oe({}, qr, { relatedTarget: 0 }), jo = Ve(Dp), $p = oe({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Op = Ve($p), Fp = oe({}, Qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Bp = Ve(Fp), Up = oe({}, Qn, { data: 0 }), nl = Ve(Up), qp = {
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
}, Vp = {
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
}, Gp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gp[e]) ? !!t[e] : !1;
}
function as() {
  return Hp;
}
var Wp = oe({}, qr, { key: function(e) {
  if (e.key) {
    var t = qp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ha(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: as, charCode: function(e) {
  return e.type === "keypress" ? ha(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ha(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qp = Ve(Wp), Yp = oe({}, Ja, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rl = Ve(Yp), Kp = oe({}, qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: as }), Jp = Ve(Kp), Xp = oe({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zp = Ve(Xp), ef = oe({}, Ja, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), tf = Ve(ef), nf = [9, 13, 27, 32], os = Et && "CompositionEvent" in window, cr = null;
Et && "documentMode" in document && (cr = document.documentMode);
var rf = Et && "TextEvent" in window && !cr, Ku = Et && (!os || cr && 8 < cr && 11 >= cr), al = " ", ol = !1;
function Ju(e, t) {
  switch (e) {
    case "keyup":
      return nf.indexOf(t.keyCode) !== -1;
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
function Xu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function af(e, t) {
  switch (e) {
    case "compositionend":
      return Xu(t);
    case "keypress":
      return t.which !== 32 ? null : (ol = !0, al);
    case "textInput":
      return e = t.data, e === al && ol ? null : e;
    default:
      return null;
  }
}
function of(e, t) {
  if (Cn) return e === "compositionend" || !os && Ju(e, t) ? (e = Yu(), ma = ns = qt = null, Cn = !1, e) : null;
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
      return Ku && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sf[e.type] : t === "textarea";
}
function Zu(e, t, n, r) {
  bu(r), t = Ma(t, "onChange"), 0 < t.length && (n = new rs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var dr = null, Nr = null;
function lf(e) {
  cc(e, 0);
}
function Xa(e) {
  var t = En(e);
  if (Su(t)) return e;
}
function uf(e, t) {
  if (e === "change") return t;
}
var ec = !1;
if (Et) {
  var So;
  if (Et) {
    var Co = "oninput" in document;
    if (!Co) {
      var sl = document.createElement("div");
      sl.setAttribute("oninput", "return;"), Co = typeof sl.oninput == "function";
    }
    So = Co;
  } else So = !1;
  ec = So && (!document.documentMode || 9 < document.documentMode);
}
function ll() {
  dr && (dr.detachEvent("onpropertychange", tc), Nr = dr = null);
}
function tc(e) {
  if (e.propertyName === "value" && Xa(Nr)) {
    var t = [];
    Zu(t, Nr, e, Ji(e)), Ru(lf, t);
  }
}
function cf(e, t, n) {
  e === "focusin" ? (ll(), dr = t, Nr = n, dr.attachEvent("onpropertychange", tc)) : e === "focusout" && ll();
}
function df(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xa(Nr);
}
function pf(e, t) {
  if (e === "click") return Xa(t);
}
function ff(e, t) {
  if (e === "input" || e === "change") return Xa(t);
}
function mf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ct = typeof Object.is == "function" ? Object.is : mf;
function Er(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Uo.call(t, a) || !ct(e[a], t[a])) return !1;
  }
  return !0;
}
function ul(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cl(e, t) {
  var n = ul(e);
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
    n = ul(n);
  }
}
function nc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rc() {
  for (var e = window, t = Ca(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ca(e.document);
  }
  return t;
}
function is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function hf(e) {
  var t = rc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nc(n.ownerDocument.documentElement, n)) {
    if (r !== null && is(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cl(n, o);
        var s = cl(
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
var gf = Et && "documentMode" in document && 11 >= document.documentMode, _n = null, si = null, pr = null, li = !1;
function dl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li || _n == null || _n !== Ca(r) || (r = _n, "selectionStart" in r && is(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), pr && Er(pr, r) || (pr = r, r = Ma(si, "onSelect"), 0 < r.length && (t = new rs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _n)));
}
function na(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nn = { animationend: na("Animation", "AnimationEnd"), animationiteration: na("Animation", "AnimationIteration"), animationstart: na("Animation", "AnimationStart"), transitionend: na("Transition", "TransitionEnd") }, _o = {}, ac = {};
Et && (ac = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
function Za(e) {
  if (_o[e]) return _o[e];
  if (!Nn[e]) return e;
  var t = Nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ac) return _o[e] = t[n];
  return e;
}
var oc = Za("animationend"), ic = Za("animationiteration"), sc = Za("animationstart"), lc = Za("transitionend"), uc = /* @__PURE__ */ new Map(), pl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tn(e, t) {
  uc.set(e, t), vn(t, [e]);
}
for (var No = 0; No < pl.length; No++) {
  var Eo = pl[No], vf = Eo.toLowerCase(), yf = Eo[0].toUpperCase() + Eo.slice(1);
  tn(vf, "on" + yf);
}
tn(oc, "onAnimationEnd");
tn(ic, "onAnimationIteration");
tn(sc, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(lc, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));
function fl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, gp(r, t, void 0, e), e.currentTarget = null;
}
function cc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], u = l.instance, d = l.currentTarget;
        if (l = l.listener, u !== o && a.isPropagationStopped()) break e;
        fl(a, l, d), o = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], u = l.instance, d = l.currentTarget, l = l.listener, u !== o && a.isPropagationStopped()) break e;
        fl(a, l, d), o = u;
      }
    }
  }
  if (Na) throw e = ri, Na = !1, ri = null, e;
}
function X(e, t) {
  var n = t[fi];
  n === void 0 && (n = t[fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dc(t, e, 2, !1), n.add(r));
}
function zo(e, t, n) {
  var r = 0;
  t && (r |= 4), dc(n, e, r, t);
}
var ra = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[ra]) {
    e[ra] = !0, yu.forEach(function(n) {
      n !== "selectionchange" && (xf.has(n) || zo(n, !1, e), zo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ra] || (t[ra] = !0, zo("selectionchange", !1, t));
  }
}
function dc(e, t, n, r) {
  switch (Qu(t)) {
    case 1:
      var a = Tp;
      break;
    case 4:
      a = Lp;
      break;
    default:
      a = ts;
  }
  n = a.bind(null, t, n, e), a = void 0, !ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Po(e, t, n, r, a) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === a || l.nodeType === 8 && l.parentNode === a) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === a || u.nodeType === 8 && u.parentNode === a)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = sn(l), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = o = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ru(function() {
    var d = o, g = Ji(n), y = [];
    e: {
      var p = uc.get(e);
      if (p !== void 0) {
        var S = rs, N = e;
        switch (e) {
          case "keypress":
            if (ha(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Qp;
            break;
          case "focusin":
            N = "focus", S = jo;
            break;
          case "focusout":
            N = "blur", S = jo;
            break;
          case "beforeblur":
          case "afterblur":
            S = jo;
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
            S = tl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Ip;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Jp;
            break;
          case oc:
          case ic:
          case sc:
            S = Op;
            break;
          case lc:
            S = Zp;
            break;
          case "scroll":
            S = Rp;
            break;
          case "wheel":
            S = tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Bp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = rl;
        }
        var v = (t & 4) !== 0, $ = !v && e === "scroll", m = v ? p !== null ? p + "Capture" : null : p;
        v = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var h = f.stateNode;
          if (f.tag === 5 && h !== null && (f = h, m !== null && (h = jr(c, m), h != null && v.push(Pr(c, h, f)))), $) break;
          c = c.return;
        }
        0 < v.length && (p = new S(p, N, null, n, g), y.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== ei && (N = n.relatedTarget || n.fromElement) && (sn(N) || N[zt])) break e;
        if ((S || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (N = n.relatedTarget || n.toElement, S = d, N = N ? sn(N) : null, N !== null && ($ = yn(N), N !== $ || N.tag !== 5 && N.tag !== 6) && (N = null)) : (S = null, N = d), S !== N)) {
          if (v = tl, h = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = rl, h = "onPointerLeave", m = "onPointerEnter", c = "pointer"), $ = S == null ? p : En(S), f = N == null ? p : En(N), p = new v(h, c + "leave", S, n, g), p.target = $, p.relatedTarget = f, h = null, sn(g) === d && (v = new v(m, c + "enter", N, n, g), v.target = f, v.relatedTarget = $, h = v), $ = h, S && N) t: {
            for (v = S, m = N, c = 0, f = v; f; f = kn(f)) c++;
            for (f = 0, h = m; h; h = kn(h)) f++;
            for (; 0 < c - f; ) v = kn(v), c--;
            for (; 0 < f - c; ) m = kn(m), f--;
            for (; c--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = kn(v), m = kn(m);
            }
            v = null;
          }
          else v = null;
          S !== null && ml(y, p, S, v, !1), N !== null && $ !== null && ml(y, $, N, v, !0);
        }
      }
      e: {
        if (p = d ? En(d) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var k = uf;
        else if (il(p)) if (ec) k = ff;
        else {
          k = df;
          var C = cf;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = pf);
        if (k && (k = k(e, d))) {
          Zu(y, k, n, g);
          break e;
        }
        C && C(e, p, d), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Yo(p, "number", p.value);
      }
      switch (C = d ? En(d) : window, e) {
        case "focusin":
          (il(C) || C.contentEditable === "true") && (_n = C, si = d, pr = null);
          break;
        case "focusout":
          pr = si = _n = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          li = !1, dl(y, n, g);
          break;
        case "selectionchange":
          if (gf) break;
        case "keydown":
        case "keyup":
          dl(y, n, g);
      }
      var _;
      if (os) e: {
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
      else Cn ? Ju(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ku && n.locale !== "ko" && (Cn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Cn && (_ = Yu()) : (qt = g, ns = "value" in qt ? qt.value : qt.textContent, Cn = !0)), C = Ma(d, P), 0 < C.length && (P = new nl(P, e, null, n, g), y.push({ event: P, listeners: C }), _ ? P.data = _ : (_ = Xu(n), _ !== null && (P.data = _)))), (_ = rf ? af(e, n) : of(e, n)) && (d = Ma(d, "onBeforeInput"), 0 < d.length && (g = new nl("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: d }), g.data = _));
    }
    cc(y, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = jr(e, n), o != null && r.unshift(Pr(e, o, a)), o = jr(e, t), o != null && r.push(Pr(e, o, a))), e = e.return;
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ml(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, u = l.alternate, d = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 && d !== null && (l = d, a ? (u = jr(n, o), u != null && s.unshift(Pr(n, u, l))) : a || (u = jr(n, o), u != null && s.push(Pr(n, u, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var wf = /\r\n?/g, kf = /\u0000|\uFFFD/g;
function hl(e) {
  return (typeof e == "string" ? e : "" + e).replace(wf, `
`).replace(kf, "");
}
function aa(e, t, n) {
  if (t = hl(t), hl(e) !== t && n) throw Error(E(425));
}
function Ta() {
}
var ui = null, ci = null;
function di(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var pi = typeof setTimeout == "function" ? setTimeout : void 0, jf = typeof clearTimeout == "function" ? clearTimeout : void 0, gl = typeof Promise == "function" ? Promise : void 0, Sf = typeof queueMicrotask == "function" ? queueMicrotask : typeof gl < "u" ? function(e) {
  return gl.resolve(null).then(e).catch(Cf);
} : pi;
function Cf(e) {
  setTimeout(function() {
    throw e;
  });
}
function bo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), _r(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  _r(t);
}
function Qt(e) {
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
function vl(e) {
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
var Yn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + Yn, br = "__reactProps$" + Yn, zt = "__reactContainer$" + Yn, fi = "__reactEvents$" + Yn, _f = "__reactListeners$" + Yn, Nf = "__reactHandles$" + Yn;
function sn(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[ht]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vl(e); e !== null; ) {
        if (n = e[ht]) return n;
        e = vl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Vr(e) {
  return e = e[ht] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function eo(e) {
  return e[br] || null;
}
var mi = [], zn = -1;
function nn(e) {
  return { current: e };
}
function Z(e) {
  0 > zn || (e.current = mi[zn], mi[zn] = null, zn--);
}
function J(e, t) {
  zn++, mi[zn] = e.current, e.current = t;
}
var en = {}, Ce = nn(en), Ie = nn(!1), pn = en;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function La() {
  Z(Ie), Z(Ce);
}
function yl(e, t, n) {
  if (Ce.current !== en) throw Error(E(168));
  J(Ce, t), J(Ie, n);
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, up(e) || "Unknown", a));
  return oe({}, n, r);
}
function Ra(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || en, pn = Ce.current, J(Ce, e), J(Ie, Ie.current), !0;
}
function xl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = pc(e, t, pn), r.__reactInternalMemoizedMergedChildContext = e, Z(Ie), Z(Ce), J(Ce, e)) : Z(Ie), J(Ie, n);
}
var jt = null, to = !1, Mo = !1;
function fc(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function Ef(e) {
  to = !0, fc(e);
}
function rn() {
  if (!Mo && jt !== null) {
    Mo = !0;
    var e = 0, t = Q;
    try {
      var n = jt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      jt = null, to = !1;
    } catch (a) {
      throw jt !== null && (jt = jt.slice(e + 1)), $u(Xi, rn), a;
    } finally {
      Q = t, Mo = !1;
    }
  }
  return null;
}
var Pn = [], bn = 0, Aa = null, Ia = 0, We = [], Qe = 0, fn = null, Ct = 1, _t = "";
function an(e, t) {
  Pn[bn++] = Ia, Pn[bn++] = Aa, Aa = e, Ia = t;
}
function mc(e, t, n) {
  We[Qe++] = Ct, We[Qe++] = _t, We[Qe++] = fn, fn = e;
  var r = Ct;
  e = _t;
  var a = 32 - lt(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - lt(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Ct = 1 << 32 - lt(t) + a | n << a | r, _t = o + e;
  } else Ct = 1 << o | n << a | r, _t = e;
}
function ss(e) {
  e.return !== null && (an(e, 1), mc(e, 1, 0));
}
function ls(e) {
  for (; e === Aa; ) Aa = Pn[--bn], Pn[bn] = null, Ia = Pn[--bn], Pn[bn] = null;
  for (; e === fn; ) fn = We[--Qe], We[Qe] = null, _t = We[--Qe], We[Qe] = null, Ct = We[--Qe], We[Qe] = null;
}
var Be = null, Fe = null, ee = !1, st = null;
function hc(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function wl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Fe = Qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Fe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: Ct, overflow: _t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Fe = null, !0) : !1;
    default:
      return !1;
  }
}
function hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gi(e) {
  if (ee) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!wl(e, t)) {
        if (hi(e)) throw Error(E(418));
        t = Qt(n.nextSibling);
        var r = Be;
        t && wl(e, t) ? hc(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Be = e);
      }
    } else {
      if (hi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Be = e;
    }
  }
}
function kl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Be = e;
}
function oa(e) {
  if (e !== Be) return !1;
  if (!ee) return kl(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !di(e.type, e.memoizedProps)), t && (t = Fe)) {
    if (hi(e)) throw gc(), Error(E(418));
    for (; t; ) hc(e, t), t = Qt(t.nextSibling);
  }
  if (kl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Be ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function gc() {
  for (var e = Fe; e; ) e = Qt(e.nextSibling);
}
function Un() {
  Fe = Be = null, ee = !1;
}
function us(e) {
  st === null ? st = [e] : st.push(e);
}
var zf = Mt.ReactCurrentBatchConfig;
function tr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var l = a.refs;
        s === null ? delete l[o] : l[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function ia(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function jl(e) {
  var t = e._init;
  return t(e._payload);
}
function vc(e) {
  function t(m, c) {
    if (e) {
      var f = m.deletions;
      f === null ? (m.deletions = [c], m.flags |= 16) : f.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), c = c.sibling;
    return null;
  }
  function r(m, c) {
    for (m = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? m.set(c.key, c) : m.set(c.index, c), c = c.sibling;
    return m;
  }
  function a(m, c) {
    return m = Xt(m, c), m.index = 0, m.sibling = null, m;
  }
  function o(m, c, f) {
    return m.index = f, e ? (f = m.alternate, f !== null ? (f = f.index, f < c ? (m.flags |= 2, c) : f) : (m.flags |= 2, c)) : (m.flags |= 1048576, c);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, c, f, h) {
    return c === null || c.tag !== 6 ? (c = $o(f, m.mode, h), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function u(m, c, f, h) {
    var k = f.type;
    return k === Sn ? g(m, c, f.props.children, h, f.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === $t && jl(k) === c.type) ? (h = a(c, f.props), h.ref = tr(m, c, f), h.return = m, h) : (h = ja(f.type, f.key, f.props, null, m.mode, h), h.ref = tr(m, c, f), h.return = m, h);
  }
  function d(m, c, f, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Oo(f, m.mode, h), c.return = m, c) : (c = a(c, f.children || []), c.return = m, c);
  }
  function g(m, c, f, h, k) {
    return c === null || c.tag !== 7 ? (c = dn(f, m.mode, h, k), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function y(m, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = $o("" + c, m.mode, f), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Yr:
          return f = ja(c.type, c.key, c.props, null, m.mode, f), f.ref = tr(m, null, c), f.return = m, f;
        case jn:
          return c = Oo(c, m.mode, f), c.return = m, c;
        case $t:
          var h = c._init;
          return y(m, h(c._payload), f);
      }
      if (or(c) || Kn(c)) return c = dn(c, m.mode, f, null), c.return = m, c;
      ia(m, c);
    }
    return null;
  }
  function p(m, c, f, h) {
    var k = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return k !== null ? null : l(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yr:
          return f.key === k ? u(m, c, f, h) : null;
        case jn:
          return f.key === k ? d(m, c, f, h) : null;
        case $t:
          return k = f._init, p(
            m,
            c,
            k(f._payload),
            h
          );
      }
      if (or(f) || Kn(f)) return k !== null ? null : g(m, c, f, h, null);
      ia(m, f);
    }
    return null;
  }
  function S(m, c, f, h, k) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(f) || null, l(c, m, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Yr:
          return m = m.get(h.key === null ? f : h.key) || null, u(c, m, h, k);
        case jn:
          return m = m.get(h.key === null ? f : h.key) || null, d(c, m, h, k);
        case $t:
          var C = h._init;
          return S(m, c, f, C(h._payload), k);
      }
      if (or(h) || Kn(h)) return m = m.get(f) || null, g(c, m, h, k, null);
      ia(c, h);
    }
    return null;
  }
  function N(m, c, f, h) {
    for (var k = null, C = null, _ = c, P = c = 0, w = null; _ !== null && P < f.length; P++) {
      _.index > P ? (w = _, _ = null) : w = _.sibling;
      var x = p(m, _, f[P], h);
      if (x === null) {
        _ === null && (_ = w);
        break;
      }
      e && _ && x.alternate === null && t(m, _), c = o(x, c, P), C === null ? k = x : C.sibling = x, C = x, _ = w;
    }
    if (P === f.length) return n(m, _), ee && an(m, P), k;
    if (_ === null) {
      for (; P < f.length; P++) _ = y(m, f[P], h), _ !== null && (c = o(_, c, P), C === null ? k = _ : C.sibling = _, C = _);
      return ee && an(m, P), k;
    }
    for (_ = r(m, _); P < f.length; P++) w = S(_, m, P, f[P], h), w !== null && (e && w.alternate !== null && _.delete(w.key === null ? P : w.key), c = o(w, c, P), C === null ? k = w : C.sibling = w, C = w);
    return e && _.forEach(function(M) {
      return t(m, M);
    }), ee && an(m, P), k;
  }
  function v(m, c, f, h) {
    var k = Kn(f);
    if (typeof k != "function") throw Error(E(150));
    if (f = k.call(f), f == null) throw Error(E(151));
    for (var C = k = null, _ = c, P = c = 0, w = null, x = f.next(); _ !== null && !x.done; P++, x = f.next()) {
      _.index > P ? (w = _, _ = null) : w = _.sibling;
      var M = p(m, _, x.value, h);
      if (M === null) {
        _ === null && (_ = w);
        break;
      }
      e && _ && M.alternate === null && t(m, _), c = o(M, c, P), C === null ? k = M : C.sibling = M, C = M, _ = w;
    }
    if (x.done) return n(
      m,
      _
    ), ee && an(m, P), k;
    if (_ === null) {
      for (; !x.done; P++, x = f.next()) x = y(m, x.value, h), x !== null && (c = o(x, c, P), C === null ? k = x : C.sibling = x, C = x);
      return ee && an(m, P), k;
    }
    for (_ = r(m, _); !x.done; P++, x = f.next()) x = S(_, m, P, x.value, h), x !== null && (e && x.alternate !== null && _.delete(x.key === null ? P : x.key), c = o(x, c, P), C === null ? k = x : C.sibling = x, C = x);
    return e && _.forEach(function(ne) {
      return t(m, ne);
    }), ee && an(m, P), k;
  }
  function $(m, c, f, h) {
    if (typeof f == "object" && f !== null && f.type === Sn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yr:
          e: {
            for (var k = f.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (k = f.type, k === Sn) {
                  if (C.tag === 7) {
                    n(m, C.sibling), c = a(C, f.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === $t && jl(k) === C.type) {
                  n(m, C.sibling), c = a(C, f.props), c.ref = tr(m, C, f), c.return = m, m = c;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            f.type === Sn ? (c = dn(f.props.children, m.mode, h, f.key), c.return = m, m = c) : (h = ja(f.type, f.key, f.props, null, m.mode, h), h.ref = tr(m, c, f), h.return = m, m = h);
          }
          return s(m);
        case jn:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(m, c.sibling), c = a(c, f.children || []), c.return = m, m = c;
                break e;
              } else {
                n(m, c);
                break;
              }
              else t(m, c);
              c = c.sibling;
            }
            c = Oo(f, m.mode, h), c.return = m, m = c;
          }
          return s(m);
        case $t:
          return C = f._init, $(m, c, C(f._payload), h);
      }
      if (or(f)) return N(m, c, f, h);
      if (Kn(f)) return v(m, c, f, h);
      ia(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, f), c.return = m, m = c) : (n(m, c), c = $o(f, m.mode, h), c.return = m, m = c), s(m)) : n(m, c);
  }
  return $;
}
var qn = vc(!0), yc = vc(!1), Da = nn(null), $a = null, Mn = null, cs = null;
function ds() {
  cs = Mn = $a = null;
}
function ps(e) {
  var t = Da.current;
  Z(Da), e._currentValue = t;
}
function vi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  $a = e, cs = Mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), e.firstContext = null);
}
function Je(e) {
  var t = e._currentValue;
  if (cs !== e) if (e = { context: e, memoizedValue: t, next: null }, Mn === null) {
    if ($a === null) throw Error(E(308));
    Mn = e, $a.dependencies = { lanes: 0, firstContext: e };
  } else Mn = Mn.next = e;
  return t;
}
var ln = null;
function fs(e) {
  ln === null ? ln = [e] : ln.push(e);
}
function xc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, fs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Pt(e, r);
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ot = !1;
function ms(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Pt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, fs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Pt(e, n);
}
function ga(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
  }
}
function Sl(e, t) {
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
function Oa(e, t, n, r) {
  var a = e.updateQueue;
  Ot = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, l = a.shared.pending;
  if (l !== null) {
    a.shared.pending = null;
    var u = l, d = u.next;
    u.next = null, s === null ? o = d : s.next = d, s = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, l = g.lastBaseUpdate, l !== s && (l === null ? g.firstBaseUpdate = d : l.next = d, g.lastBaseUpdate = u));
  }
  if (o !== null) {
    var y = a.baseState;
    s = 0, g = d = u = null, l = o;
    do {
      var p = l.lane, S = l.eventTime;
      if ((r & p) === p) {
        g !== null && (g = g.next = {
          eventTime: S,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var N = e, v = l;
          switch (p = t, S = n, v.tag) {
            case 1:
              if (N = v.payload, typeof N == "function") {
                y = N.call(S, y, p);
                break e;
              }
              y = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = v.payload, p = typeof N == "function" ? N.call(S, y, p) : N, p == null) break e;
              y = oe({}, y, p);
              break e;
            case 2:
              Ot = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [l] : p.push(l));
      } else S = { eventTime: S, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, g === null ? (d = g = S, u = y) : g = g.next = S, s |= p;
      if (l = l.next, l === null) {
        if (l = a.shared.pending, l === null) break;
        p = l, l = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = y), a.baseState = u, a.firstBaseUpdate = d, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    hn |= s, e.lanes = s, e.memoizedState = y;
  }
}
function Cl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var Gr = {}, vt = nn(Gr), Mr = nn(Gr), Tr = nn(Gr);
function un(e) {
  if (e === Gr) throw Error(E(174));
  return e;
}
function hs(e, t) {
  switch (J(Tr, t), J(Mr, e), J(vt, Gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jo(t, e);
  }
  Z(vt), J(vt, t);
}
function Vn() {
  Z(vt), Z(Mr), Z(Tr);
}
function kc(e) {
  un(Tr.current);
  var t = un(vt.current), n = Jo(t, e.type);
  t !== n && (J(Mr, e), J(vt, n));
}
function gs(e) {
  Mr.current === e && (Z(vt), Z(Mr));
}
var re = nn(0);
function Fa(e) {
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
var To = [];
function vs() {
  for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var va = Mt.ReactCurrentDispatcher, Lo = Mt.ReactCurrentBatchConfig, mn = 0, ae = null, de = null, me = null, Ba = !1, fr = !1, Lr = 0, Pf = 0;
function ke() {
  throw Error(E(321));
}
function ys(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
  return !0;
}
function xs(e, t, n, r, a, o) {
  if (mn = o, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, va.current = e === null || e.memoizedState === null ? Lf : Rf, e = n(r, a), fr) {
    o = 0;
    do {
      if (fr = !1, Lr = 0, 25 <= o) throw Error(E(301));
      o += 1, me = de = null, t.updateQueue = null, va.current = Af, e = n(r, a);
    } while (fr);
  }
  if (va.current = Ua, t = de !== null && de.next !== null, mn = 0, me = de = ae = null, Ba = !1, t) throw Error(E(300));
  return e;
}
function ws() {
  var e = Lr !== 0;
  return Lr = 0, e;
}
function mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ae.memoizedState = me = e : me = me.next = e, me;
}
function Xe() {
  if (de === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? ae.memoizedState : me.next;
  if (t !== null) me = t, de = e;
  else {
    if (e === null) throw Error(E(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? ae.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function Rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ro(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = de, a = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = o.next, o.next = s;
    }
    r.baseQueue = a = o, n.pending = null;
  }
  if (a !== null) {
    o = a.next, r = r.baseState;
    var l = s = null, u = null, d = o;
    do {
      var g = d.lane;
      if ((mn & g) === g) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (l = u = y, s = r) : u = u.next = y, ae.lanes |= g, hn |= g;
      }
      d = d.next;
    } while (d !== null && d !== o);
    u === null ? s = r : u.next = l, ct(r, t.memoizedState) || (Ae = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ae.lanes |= o, hn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ao(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    ct(o, t.memoizedState) || (Ae = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function jc() {
}
function Sc(e, t) {
  var n = ae, r = Xe(), a = t(), o = !ct(r.memoizedState, a);
  if (o && (r.memoizedState = a, Ae = !0), r = r.queue, ks(Nc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ar(9, _c.bind(null, n, r, a, t), void 0, null), he === null) throw Error(E(349));
    mn & 30 || Cc(n, t, a);
  }
  return a;
}
function Cc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _c(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ec(t) && zc(e);
}
function Nc(e, t, n) {
  return n(function() {
    Ec(t) && zc(e);
  });
}
function Ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function zc(e) {
  var t = Pt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function _l(e) {
  var t = mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Rr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tf.bind(null, ae, e), [t.memoizedState, e];
}
function Ar(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pc() {
  return Xe().memoizedState;
}
function ya(e, t, n, r) {
  var a = mt();
  ae.flags |= e, a.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r);
}
function no(e, t, n, r) {
  var a = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var s = de.memoizedState;
    if (o = s.destroy, r !== null && ys(r, s.deps)) {
      a.memoizedState = Ar(t, n, o, r);
      return;
    }
  }
  ae.flags |= e, a.memoizedState = Ar(1 | t, n, o, r);
}
function Nl(e, t) {
  return ya(8390656, 8, e, t);
}
function ks(e, t) {
  return no(2048, 8, e, t);
}
function bc(e, t) {
  return no(4, 2, e, t);
}
function Mc(e, t) {
  return no(4, 4, e, t);
}
function Tc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Lc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, no(4, 4, Tc.bind(null, t, e), n);
}
function js() {
}
function Rc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ac(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ic(e, t, n) {
  return mn & 21 ? (ct(n, t) || (n = Bu(), ae.lanes |= n, hn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ae = !0), e.memoizedState = n);
}
function bf(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Lo.transition;
  Lo.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, Lo.transition = r;
  }
}
function Dc() {
  return Xe().memoizedState;
}
function Mf(e, t, n) {
  var r = Jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $c(e)) Oc(t, n);
  else if (n = xc(e, t, n, r), n !== null) {
    var a = Pe();
    ut(n, e, r, a), Fc(n, t, r);
  }
}
function Tf(e, t, n) {
  var r = Jt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($c(e)) Oc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, l = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = l, ct(l, s)) {
        var u = t.interleaved;
        u === null ? (a.next = a, fs(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = xc(e, t, a, r), n !== null && (a = Pe(), ut(n, e, r, a), Fc(n, t, r));
  }
}
function $c(e) {
  var t = e.alternate;
  return e === ae || t !== null && t === ae;
}
function Oc(e, t) {
  fr = Ba = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
  }
}
var Ua = { readContext: Je, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, Lf = { readContext: Je, useCallback: function(e, t) {
  return mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Je, useEffect: Nl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ya(
    4194308,
    4,
    Tc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ya(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ya(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = mt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = mt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Mf.bind(null, ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: _l, useDebugValue: js, useDeferredValue: function(e) {
  return mt().memoizedState = e;
}, useTransition: function() {
  var e = _l(!1), t = e[0];
  return e = bf.bind(null, e[1]), mt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ae, a = mt();
  if (ee) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(E(349));
    mn & 30 || Cc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Nl(Nc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Ar(9, _c.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = mt(), t = he.identifierPrefix;
  if (ee) {
    var n = _t, r = Ct;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Pf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Rf = {
  readContext: Je,
  useCallback: Rc,
  useContext: Je,
  useEffect: ks,
  useImperativeHandle: Lc,
  useInsertionEffect: bc,
  useLayoutEffect: Mc,
  useMemo: Ac,
  useReducer: Ro,
  useRef: Pc,
  useState: function() {
    return Ro(Rr);
  },
  useDebugValue: js,
  useDeferredValue: function(e) {
    var t = Xe();
    return Ic(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Ro(Rr)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: jc,
  useSyncExternalStore: Sc,
  useId: Dc,
  unstable_isNewReconciler: !1
}, Af = { readContext: Je, useCallback: Rc, useContext: Je, useEffect: ks, useImperativeHandle: Lc, useInsertionEffect: bc, useLayoutEffect: Mc, useMemo: Ac, useReducer: Ao, useRef: Pc, useState: function() {
  return Ao(Rr);
}, useDebugValue: js, useDeferredValue: function(e) {
  var t = Xe();
  return de === null ? t.memoizedState = e : Ic(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Ao(Rr)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: jc, useSyncExternalStore: Sc, useId: Dc, unstable_isNewReconciler: !1 };
function ot(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ro = { isMounted: function(e) {
  return (e = e._reactInternals) ? yn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), a = Jt(e), o = Nt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Yt(e, o, a), t !== null && (ut(t, e, a, r), ga(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), a = Jt(e), o = Nt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Yt(e, o, a), t !== null && (ut(t, e, a, r), ga(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Pe(), r = Jt(e), a = Nt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Yt(e, a, r), t !== null && (ut(t, e, r, n), ga(t, e, r));
} };
function El(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(a, o) : !0;
}
function Bc(e, t, n) {
  var r = !1, a = en, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Je(o) : (a = De(t) ? pn : Ce.current, r = t.contextTypes, o = (r = r != null) ? Bn(e, a) : en), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function zl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function xi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Je(o) : (o = De(t) ? pn : Ce.current, a.context = Bn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (yi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ro.enqueueReplaceState(a, a.state, null), Oa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += lp(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function wi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var If = typeof WeakMap == "function" ? WeakMap : Map;
function Uc(e, t, n) {
  n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Va || (Va = !0, bi = r), wi(e, t);
  }, n;
}
function qc(e, t, n) {
  n = Nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      wi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    wi(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Pl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new If();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Kf.bind(null, e, t, n), t.then(e, e));
}
function bl(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ml(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Yt(n, t, 1))), n.lanes |= 1), e);
}
var Df = Mt.ReactCurrentOwner, Ae = !1;
function ze(e, t, n, r) {
  t.child = e === null ? yc(t, null, n, r) : qn(t, e.child, n, r);
}
function Tl(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return $n(t, a), r = xs(e, t, n, r, o, a), n = ws(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (ee && n && ss(t), t.flags |= 1, ze(e, t, r, a), t.child);
}
function Ll(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !bs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Vc(e, t, o, r, a)) : (e = ja(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Er, n(s, r) && e.ref === t.ref) return bt(e, t, a);
  }
  return t.flags |= 1, e = Xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Er(o, r) && e.ref === t.ref) if (Ae = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Ae = !0);
    else return t.lanes = e.lanes, bt(e, t, a);
  }
  return ki(e, t, n, r, a);
}
function Gc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Ln, Oe), Oe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Ln, Oe), Oe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, J(Ln, Oe), Oe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, J(Ln, Oe), Oe |= r;
  return ze(e, t, a, n), t.child;
}
function Hc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ki(e, t, n, r, a) {
  var o = De(n) ? pn : Ce.current;
  return o = Bn(t, o), $n(t, a), n = xs(e, t, n, r, o, a), r = ws(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (ee && r && ss(t), t.flags |= 1, ze(e, t, n, a), t.child);
}
function Rl(e, t, n, r, a) {
  if (De(n)) {
    var o = !0;
    Ra(t);
  } else o = !1;
  if ($n(t, a), t.stateNode === null) xa(e, t), Bc(t, n, r), xi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Je(d) : (d = De(n) ? pn : Ce.current, d = Bn(t, d));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    y || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== d) && zl(t, s, r, d), Ot = !1;
    var p = t.memoizedState;
    s.state = p, Oa(t, r, s, a), u = t.memoizedState, l !== r || p !== u || Ie.current || Ot ? (typeof g == "function" && (yi(t, n, g, r), u = t.memoizedState), (l = Ot || El(t, n, l, r, p, u, d)) ? (y || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, wc(e, t), l = t.memoizedProps, d = t.type === t.elementType ? l : ot(t.type, l), s.props = d, y = t.pendingProps, p = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Je(u) : (u = De(n) ? pn : Ce.current, u = Bn(t, u));
    var S = n.getDerivedStateFromProps;
    (g = typeof S == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== y || p !== u) && zl(t, s, r, u), Ot = !1, p = t.memoizedState, s.state = p, Oa(t, r, s, a);
    var N = t.memoizedState;
    l !== y || p !== N || Ie.current || Ot ? (typeof S == "function" && (yi(t, n, S, r), N = t.memoizedState), (d = Ot || El(t, n, d, r, p, N, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, N, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, N, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), s.props = r, s.state = N, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ji(e, t, n, r, o, a);
}
function ji(e, t, n, r, a, o) {
  Hc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && xl(t, n, !1), bt(e, t, o);
  r = t.stateNode, Df.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = qn(t, e.child, null, o), t.child = qn(t, null, l, o)) : ze(e, t, l, o), t.memoizedState = r.state, a && xl(t, n, !0), t.child;
}
function Wc(e) {
  var t = e.stateNode;
  t.pendingContext ? yl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yl(e, t.context, !1), hs(e, t.containerInfo);
}
function Al(e, t, n, r, a) {
  return Un(), us(a), t.flags |= 256, ze(e, t, n, r), t.child;
}
var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qc(e, t, n) {
  var r = t.pendingProps, a = re.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), J(re, a & 1), e === null)
    return gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = io(s, r, 0, null), e = dn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ci(n), t.memoizedState = Si, e) : Ss(t, s));
  if (a = e.memoizedState, a !== null && (l = a.dehydrated, l !== null)) return $f(e, t, s, r, l, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, l = a.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Xt(a, u), r.subtreeFlags = a.subtreeFlags & 14680064), l !== null ? o = Xt(l, o) : (o = dn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ci(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Si, r;
  }
  return o = e.child, e = o.sibling, r = Xt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ss(e, t) {
  return t = io({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sa(e, t, n, r) {
  return r !== null && us(r), qn(t, e.child, null, n), e = Ss(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function $f(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Io(Error(E(422))), sa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = io({ mode: "visible", children: r.children }, a, 0, null), o = dn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && qn(t, e.child, null, s), t.child.memoizedState = Ci(s), t.memoizedState = Si, o);
  if (!(t.mode & 1)) return sa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(E(419)), r = Io(o, r, void 0), sa(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Ae || l) {
    if (r = he, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Pt(e, a), ut(r, e, a, -1));
    }
    return Ps(), r = Io(Error(E(421))), sa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jf.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Fe = Qt(a.nextSibling), Be = t, ee = !0, st = null, e !== null && (We[Qe++] = Ct, We[Qe++] = _t, We[Qe++] = fn, Ct = e.id, _t = e.overflow, fn = t), t = Ss(t, r.children), t.flags |= 4096, t);
}
function Il(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vi(e.return, t, n);
}
function Do(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Yc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (ze(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Il(e, n, t);
      else if (e.tag === 19) Il(e, n, t);
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
  if (J(re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Fa(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Do(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Fa(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Do(t, !0, n, null, o);
      break;
    case "together":
      Do(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function xa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), hn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Of(e, t, n) {
  switch (t.tag) {
    case 3:
      Wc(t), Un();
      break;
    case 5:
      kc(t);
      break;
    case 1:
      De(t.type) && Ra(t);
      break;
    case 4:
      hs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      J(Da, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (J(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qc(e, t, n) : (J(re, re.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
      J(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Yc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), J(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Gc(e, t, n);
  }
  return bt(e, t, n);
}
var Kc, _i, Jc, Xc;
Kc = function(e, t) {
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
_i = function() {
};
Jc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, un(vt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Wo(e, a), r = Wo(e, r), o = [];
        break;
      case "select":
        a = oe({}, a, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = Ko(e, a), r = Ko(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ta);
    }
    Xo(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var l = a[d];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (wr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (l = a != null ? a[d] : void 0, r.hasOwnProperty(d) && u !== l && (u != null || l != null)) if (d === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (wr.hasOwnProperty(d) ? (u != null && d === "onScroll" && X("scroll", e), o || l === u || (o = [])) : (o = o || []).push(d, u));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Xc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!ee) switch (e.tailMode) {
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
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ff(e, t, n) {
  var r = t.pendingProps;
  switch (ls(t), t.tag) {
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
      return je(t), null;
    case 1:
      return De(t.type) && La(), je(t), null;
    case 3:
      return r = t.stateNode, Vn(), Z(Ie), Z(Ce), vs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (Li(st), st = null))), _i(e, t), je(t), null;
    case 5:
      gs(t);
      var a = un(Tr.current);
      if (n = t.type, e !== null && t.stateNode != null) Jc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return je(t), null;
        }
        if (e = un(vt.current), oa(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ht] = t, r[br] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < sr.length; a++) X(sr[a], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X(
                "error",
                r
              ), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Gs(r, o), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
              break;
            case "textarea":
              Ws(r, o), X("invalid", r);
          }
          Xo(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var l = o[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && aa(r.textContent, l, e), a = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && aa(
              r.textContent,
              l,
              e
            ), a = ["children", "" + l]) : wr.hasOwnProperty(s) && l != null && s === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              Kr(r), Hs(r, o, !0);
              break;
            case "textarea":
              Kr(r), Qs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ta);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ht] = t, e[br] = r, Kc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Zo(n, r), n) {
              case "dialog":
                X("cancel", e), X("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < sr.length; a++) X(sr[a], e);
                a = r;
                break;
              case "source":
                X("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                X(
                  "error",
                  e
                ), X("load", e), a = r;
                break;
              case "details":
                X("toggle", e), a = r;
                break;
              case "input":
                Gs(e, r), a = Wo(e, r), X("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = oe({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                Ws(e, r), a = Ko(e, r), X("invalid", e);
                break;
              default:
                a = r;
            }
            Xo(n, a), l = a;
            for (o in l) if (l.hasOwnProperty(o)) {
              var u = l[o];
              o === "style" ? Pu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Eu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && kr(e, u) : typeof u == "number" && kr(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (wr.hasOwnProperty(o) ? u != null && o === "onScroll" && X("scroll", e) : u != null && Wi(e, o, u, s));
            }
            switch (n) {
              case "input":
                Kr(e), Hs(e, r, !1);
                break;
              case "textarea":
                Kr(e), Qs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Rn(e, !!r.multiple, o, !1) : r.defaultValue != null && Rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ta);
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Xc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = un(Tr.current), un(vt.current), oa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (o = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
            case 3:
              aa(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && aa(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (Z(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128)) gc(), Un(), t.flags |= 98560, o = !1;
        else if (o = oa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[ht] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), o = !1;
        } else st !== null && (Li(st), st = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? pe === 0 && (pe = 3) : Ps())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return Vn(), _i(e, t), e === null && zr(t.stateNode.containerInfo), je(t), null;
    case 10:
      return ps(t.type._context), je(t), null;
    case 17:
      return De(t.type) && La(), je(t), null;
    case 19:
      if (Z(re), o = t.memoizedState, o === null) return je(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) nr(o, !1);
      else {
        if (pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Fa(e), s !== null) {
            for (t.flags |= 128, nr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return J(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ue() > Hn && (t.flags |= 128, r = !0, nr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Fa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee) return je(t), null;
        } else 2 * ue() - o.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, nr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = re.current, J(re, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return zs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Bf(e, t) {
  switch (ls(t), t.tag) {
    case 1:
      return De(t.type) && La(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vn(), Z(Ie), Z(Ce), vs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return gs(t), null;
    case 13:
      if (Z(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(re), null;
    case 4:
      return Vn(), null;
    case 10:
      return ps(t.type._context), null;
    case 22:
    case 23:
      return zs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var la = !1, Se = !1, Uf = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    se(e, t, r);
  }
  else n.current = null;
}
function Ni(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Dl = !1;
function qf(e, t) {
  if (ui = Pa, e = rc(), is(e)) {
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
        var s = 0, l = -1, u = -1, d = 0, g = 0, y = e, p = null;
        t: for (; ; ) {
          for (var S; y !== n || a !== 0 && y.nodeType !== 3 || (l = s + a), y !== o || r !== 0 && y.nodeType !== 3 || (u = s + r), y.nodeType === 3 && (s += y.nodeValue.length), (S = y.firstChild) !== null; )
            p = y, y = S;
          for (; ; ) {
            if (y === e) break t;
            if (p === n && ++d === a && (l = s), p === o && ++g === r && (u = s), (S = y.nextSibling) !== null) break;
            y = p, p = y.parentNode;
          }
          y = S;
        }
        n = l === -1 || u === -1 ? null : { start: l, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ci = { focusedElem: e, selectionRange: n }, Pa = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var v = N.memoizedProps, $ = N.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ot(t.type, v), $);
            m.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(E(163));
      }
    } catch (h) {
      se(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return N = Dl, Dl = !1, N;
}
function mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Ni(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function ao(e, t) {
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
function Ei(e) {
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
function Zc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[br], delete t[fi], delete t[_f], delete t[Nf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ed(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $l(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ed(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ta));
  else if (r !== 4 && (e = e.child, e !== null)) for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), e = e.sibling;
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), e = e.sibling;
}
var ge = null, it = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) td(e, t, n), n = n.sibling;
}
function td(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function") try {
    gt.onCommitFiberUnmount(Ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Tn(n, t);
    case 6:
      var r = ge, a = it;
      ge = null, Dt(e, t, n), ge = r, it = a, ge !== null && (it ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (it ? (e = ge, n = n.stateNode, e.nodeType === 8 ? bo(e.parentNode, n) : e.nodeType === 1 && bo(e, n), _r(e)) : bo(ge, n.stateNode));
      break;
    case 4:
      r = ge, a = it, ge = n.stateNode.containerInfo, it = !0, Dt(e, t, n), ge = r, it = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ni(n, t, s), a = a.next;
        } while (a !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (!Se && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        se(n, t, l);
      }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Dt(e, t, n), Se = r) : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function Ol(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uf()), t.forEach(function(r) {
      var a = Xf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            ge = l.stateNode, it = !1;
            break e;
          case 3:
            ge = l.stateNode.containerInfo, it = !0;
            break e;
          case 4:
            ge = l.stateNode.containerInfo, it = !0;
            break e;
        }
        l = l.return;
      }
      if (ge === null) throw Error(E(160));
      td(o, s, a), ge = null, it = !1;
      var u = a.alternate;
      u !== null && (u.return = null), a.return = null;
    } catch (d) {
      se(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) nd(t, e), t = t.sibling;
}
function nd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (at(t, e), ft(e), r & 4) {
        try {
          mr(3, e, e.return), ao(3, e);
        } catch (v) {
          se(e, e.return, v);
        }
        try {
          mr(5, e, e.return);
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 1:
      at(t, e), ft(e), r & 512 && n !== null && Tn(n, n.return);
      break;
    case 5:
      if (at(t, e), ft(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          kr(a, "");
        } catch (v) {
          se(e, e.return, v);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, l = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          l === "input" && o.type === "radio" && o.name != null && Cu(a, o), Zo(l, s);
          var d = Zo(l, o);
          for (s = 0; s < u.length; s += 2) {
            var g = u[s], y = u[s + 1];
            g === "style" ? Pu(a, y) : g === "dangerouslySetInnerHTML" ? Eu(a, y) : g === "children" ? kr(a, y) : Wi(a, g, y, d);
          }
          switch (l) {
            case "input":
              Qo(a, o);
              break;
            case "textarea":
              _u(a, o);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var S = o.value;
              S != null ? Rn(a, !!o.multiple, S, !1) : p !== !!o.multiple && (o.defaultValue != null ? Rn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Rn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[br] = o;
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 6:
      if (at(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 3:
      if (at(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        _r(t.containerInfo);
      } catch (v) {
        se(e, e.return, v);
      }
      break;
    case 4:
      at(t, e), ft(e);
      break;
    case 13:
      at(t, e), ft(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ns = ue())), r & 4 && Ol(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (d = Se) || g, at(t, e), Se = d) : at(t, e), ft(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1) for (L = e, g = e.child; g !== null; ) {
          for (y = L = g; L !== null; ) {
            switch (p = L, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                mr(4, p, p.return);
                break;
              case 1:
                Tn(p, p.return);
                var N = p.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (v) {
                    se(r, n, v);
                  }
                }
                break;
              case 5:
                Tn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Bl(y);
                  continue;
                }
            }
            S !== null ? (S.return = p, L = S) : Bl(y);
          }
          g = g.sibling;
        }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                a = y.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = y.stateNode, u = y.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = zu("display", s));
              } catch (v) {
                se(e, e.return, v);
              }
            }
          } else if (y.tag === 6) {
            if (g === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (v) {
              se(e, e.return, v);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            g === y && (g = null), y = y.return;
          }
          g === y && (g = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      at(t, e), ft(e), r & 4 && Ol(e);
      break;
    case 21:
      break;
    default:
      at(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ed(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (kr(a, ""), r.flags &= -33);
          var o = $l(e);
          Pi(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = $l(e);
          zi(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vf(e, t, n) {
  L = e, rd(e);
}
function rd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var a = L, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || la;
      if (!s) {
        var l = a.alternate, u = l !== null && l.memoizedState !== null || Se;
        l = la;
        var d = Se;
        if (la = s, (Se = u) && !d) for (L = a; L !== null; ) s = L, u = s.child, s.tag === 22 && s.memoizedState !== null ? Ul(a) : u !== null ? (u.return = s, L = u) : Ul(a);
        for (; o !== null; ) L = o, rd(o), o = o.sibling;
        L = a, la = l, Se = d;
      }
      Fl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, L = o) : Fl(e);
  }
}
function Fl(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || ao(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Cl(t, o, r);
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
              Cl(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
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
                var g = d.memoizedState;
                if (g !== null) {
                  var y = g.dehydrated;
                  y !== null && _r(y);
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
            throw Error(E(163));
        }
        Se || t.flags & 512 && Ei(t);
      } catch (p) {
        se(t, t.return, p);
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
function Bl(e) {
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
function Ul(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ao(4, t);
          } catch (u) {
            se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              se(t, a, u);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (u) {
            se(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ei(t);
          } catch (u) {
            se(t, s, u);
          }
      }
    } catch (u) {
      se(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, L = l;
      break;
    }
    L = t.return;
  }
}
var Gf = Math.ceil, qa = Mt.ReactCurrentDispatcher, Cs = Mt.ReactCurrentOwner, Ke = Mt.ReactCurrentBatchConfig, V = 0, he = null, ce = null, ve = 0, Oe = 0, Ln = nn(0), pe = 0, Ir = null, hn = 0, oo = 0, _s = 0, hr = null, Re = null, Ns = 0, Hn = 1 / 0, kt = null, Va = !1, bi = null, Kt = null, ua = !1, Vt = null, Ga = 0, gr = 0, Mi = null, wa = -1, ka = 0;
function Pe() {
  return V & 6 ? ue() : wa !== -1 ? wa : wa = ue();
}
function Jt(e) {
  return e.mode & 1 ? V & 2 && ve !== 0 ? ve & -ve : zf.transition !== null ? (ka === 0 && (ka = Bu()), ka) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qu(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < gr) throw gr = 0, Mi = null, Error(E(185));
  Ur(e, n, r), (!(V & 2) || e !== he) && (e === he && (!(V & 2) && (oo |= n), pe === 4 && Bt(e, ve)), $e(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Hn = ue() + 500, to && rn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Ep(e, t);
  var r = za(e, e === he ? ve : 0);
  if (r === 0) n !== null && Js(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Js(n), t === 1) e.tag === 0 ? Ef(ql.bind(null, e)) : fc(ql.bind(null, e)), Sf(function() {
      !(V & 6) && rn();
    }), n = null;
    else {
      switch (Uu(r)) {
        case 1:
          n = Xi;
          break;
        case 4:
          n = Ou;
          break;
        case 16:
          n = Ea;
          break;
        case 536870912:
          n = Fu;
          break;
        default:
          n = Ea;
      }
      n = dd(n, ad.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ad(e, t) {
  if (wa = -1, ka = 0, V & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (On() && e.callbackNode !== n) return null;
  var r = za(e, e === he ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ha(e, r);
  else {
    t = r;
    var a = V;
    V |= 2;
    var o = id();
    (he !== e || ve !== t) && (kt = null, Hn = ue() + 500, cn(e, t));
    do
      try {
        Qf();
        break;
      } catch (l) {
        od(e, l);
      }
    while (!0);
    ds(), qa.current = o, V = a, ce !== null ? t = 0 : (he = null, ve = 0, t = pe);
  }
  if (t !== 0) {
    if (t === 2 && (a = ai(e), a !== 0 && (r = a, t = Ti(e, a))), t === 1) throw n = Ir, cn(e, 0), Bt(e, r), $e(e, ue()), n;
    if (t === 6) Bt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Hf(a) && (t = Ha(e, r), t === 2 && (o = ai(e), o !== 0 && (r = o, t = Ti(e, o))), t === 1)) throw n = Ir, cn(e, 0), Bt(e, r), $e(e, ue()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          on(e, Re, kt);
          break;
        case 3:
          if (Bt(e, r), (r & 130023424) === r && (t = Ns + 500 - ue(), 10 < t)) {
            if (za(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = pi(on.bind(null, e, Re, kt), t);
            break;
          }
          on(e, Re, kt);
          break;
        case 4:
          if (Bt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - lt(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pi(on.bind(null, e, Re, kt), r);
            break;
          }
          on(e, Re, kt);
          break;
        case 5:
          on(e, Re, kt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return $e(e, ue()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function Ti(e, t) {
  var n = hr;
  return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Ha(e, t), e !== 2 && (t = Re, Re = n, t !== null && Li(t)), e;
}
function Li(e) {
  Re === null ? Re = e : Re.push.apply(Re, e);
}
function Hf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!ct(o(), a)) return !1;
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
function Bt(e, t) {
  for (t &= ~_s, t &= ~oo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ql(e) {
  if (V & 6) throw Error(E(327));
  On();
  var t = za(e, 0);
  if (!(t & 1)) return $e(e, ue()), null;
  var n = Ha(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && (t = r, n = Ti(e, r));
  }
  if (n === 1) throw n = Ir, cn(e, 0), Bt(e, t), $e(e, ue()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, Re, kt), $e(e, ue()), null;
}
function Es(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (Hn = ue() + 500, to && rn());
  }
}
function gn(e) {
  Vt !== null && Vt.tag === 0 && !(V & 6) && On();
  var t = V;
  V |= 1;
  var n = Ke.transition, r = Q;
  try {
    if (Ke.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, Ke.transition = n, V = t, !(V & 6) && rn();
  }
}
function zs() {
  Oe = Ln.current, Z(Ln);
}
function cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, jf(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (ls(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && La();
        break;
      case 3:
        Vn(), Z(Ie), Z(Ce), vs();
        break;
      case 5:
        gs(r);
        break;
      case 4:
        Vn();
        break;
      case 13:
        Z(re);
        break;
      case 19:
        Z(re);
        break;
      case 10:
        ps(r.type._context);
        break;
      case 22:
      case 23:
        zs();
    }
    n = n.return;
  }
  if (he = e, ce = e = Xt(e.current, null), ve = Oe = t, pe = 0, Ir = null, _s = oo = hn = 0, Re = hr = null, ln !== null) {
    for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    ln = null;
  }
  return e;
}
function od(e, t) {
  do {
    var n = ce;
    try {
      if (ds(), va.current = Ua, Ba) {
        for (var r = ae.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ba = !1;
      }
      if (mn = 0, me = de = ae = null, fr = !1, Lr = 0, Cs.current = null, n === null || n.return === null) {
        pe = 1, Ir = t, ce = null;
        break;
      }
      e: {
        var o = e, s = n.return, l = n, u = t;
        if (t = ve, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, g = l, y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var p = g.alternate;
            p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var S = bl(s);
          if (S !== null) {
            S.flags &= -257, Ml(S, s, l, o, t), S.mode & 1 && Pl(o, d, t), t = S, u = d;
            var N = t.updateQueue;
            if (N === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(u), t.updateQueue = v;
            } else N.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Pl(o, d, t), Ps();
              break e;
            }
            u = Error(E(426));
          }
        } else if (ee && l.mode & 1) {
          var $ = bl(s);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256), Ml($, s, l, o, t), us(Gn(u, l));
            break e;
          }
        }
        o = u = Gn(u, l), pe !== 4 && (pe = 2), hr === null ? hr = [o] : hr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Uc(o, u, t);
              Sl(o, m);
              break e;
            case 1:
              l = u;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Kt === null || !Kt.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = qc(o, l, t);
                Sl(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ld(n);
    } catch (k) {
      t = k, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function id() {
  var e = qa.current;
  return qa.current = Ua, e === null ? Ua : e;
}
function Ps() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4), he === null || !(hn & 268435455) && !(oo & 268435455) || Bt(he, ve);
}
function Ha(e, t) {
  var n = V;
  V |= 2;
  var r = id();
  (he !== e || ve !== t) && (kt = null, cn(e, t));
  do
    try {
      Wf();
      break;
    } catch (a) {
      od(e, a);
    }
  while (!0);
  if (ds(), V = n, qa.current = r, ce !== null) throw Error(E(261));
  return he = null, ve = 0, pe;
}
function Wf() {
  for (; ce !== null; ) sd(ce);
}
function Qf() {
  for (; ce !== null && !yp(); ) sd(ce);
}
function sd(e) {
  var t = cd(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? ld(e) : ce = t, Cs.current = null;
}
function ld(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Bf(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pe = 6, ce = null;
        return;
      }
    } else if (n = Ff(n, t, Oe), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function on(e, t, n) {
  var r = Q, a = Ke.transition;
  try {
    Ke.transition = null, Q = 1, Yf(e, t, n, r);
  } finally {
    Ke.transition = a, Q = r;
  }
  return null;
}
function Yf(e, t, n, r) {
  do
    On();
  while (Vt !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (zp(e, o), e === he && (ce = he = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ua || (ua = !0, dd(Ea, function() {
    return On(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ke.transition, Ke.transition = null;
    var s = Q;
    Q = 1;
    var l = V;
    V |= 4, Cs.current = null, qf(e, n), nd(n, e), hf(ci), Pa = !!ui, ci = ui = null, e.current = n, Vf(n), xp(), V = l, Q = s, Ke.transition = o;
  } else e.current = n;
  if (ua && (ua = !1, Vt = e, Ga = a), o = e.pendingLanes, o === 0 && (Kt = null), jp(n.stateNode), $e(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Va) throw Va = !1, e = bi, bi = null, e;
  return Ga & 1 && e.tag !== 0 && On(), o = e.pendingLanes, o & 1 ? e === Mi ? gr++ : (gr = 0, Mi = e) : gr = 0, rn(), null;
}
function On() {
  if (Vt !== null) {
    var e = Uu(Ga), t = Ke.transition, n = Q;
    try {
      if (Ke.transition = null, Q = 16 > e ? 16 : e, Vt === null) var r = !1;
      else {
        if (e = Vt, Vt = null, Ga = 0, V & 6) throw Error(E(331));
        var a = V;
        for (V |= 4, L = e.current; L !== null; ) {
          var o = L, s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var d = l[u];
                for (L = d; L !== null; ) {
                  var g = L;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(8, g, o);
                  }
                  var y = g.child;
                  if (y !== null) y.return = g, L = y;
                  else for (; L !== null; ) {
                    g = L;
                    var p = g.sibling, S = g.return;
                    if (Zc(g), g === d) {
                      L = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = S, L = p;
                      break;
                    }
                    L = S;
                  }
                }
              }
              var N = o.alternate;
              if (N !== null) {
                var v = N.child;
                if (v !== null) {
                  N.child = null;
                  do {
                    var $ = v.sibling;
                    v.sibling = null, v = $;
                  } while (v !== null);
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
                mr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, L = m;
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
            if (l = L, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ao(9, l);
              }
            } catch (k) {
              se(l, l.return, k);
            }
            if (l === s) {
              L = null;
              break e;
            }
            var h = l.sibling;
            if (h !== null) {
              h.return = l.return, L = h;
              break e;
            }
            L = l.return;
          }
        }
        if (V = a, rn(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
          gt.onPostCommitFiberRoot(Ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, Ke.transition = t;
    }
  }
  return !1;
}
function Vl(e, t, n) {
  t = Gn(n, t), t = Uc(e, t, 1), e = Yt(e, t, 1), t = Pe(), e !== null && (Ur(e, 1, t), $e(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Vl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Vl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Gn(n, e), e = qc(t, e, 1), t = Yt(t, e, 1), e = Pe(), t !== null && (Ur(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Kf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ve & n) === n && (pe === 4 || pe === 3 && (ve & 130023424) === ve && 500 > ue() - Ns ? cn(e, 0) : _s |= n), $e(e, t);
}
function ud(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = Pe();
  e = Pt(e, t), e !== null && (Ur(e, t, n), $e(e, n));
}
function Jf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ud(e, n);
}
function Xf(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), ud(e, n);
}
var cd;
cd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) Ae = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ae = !1, Of(e, t, n);
    Ae = !!(e.flags & 131072);
  }
  else Ae = !1, ee && t.flags & 1048576 && mc(t, Ia, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xa(e, t), e = t.pendingProps;
      var a = Bn(t, Ce.current);
      $n(t, n), a = xs(null, t, r, e, a, n);
      var o = ws();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (o = !0, Ra(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ms(t), a.updater = ro, t.stateNode = a, a._reactInternals = t, xi(t, r, e, n), t = ji(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && ss(t), ze(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = em(r), e = ot(r, e), a) {
          case 0:
            t = ki(null, t, r, e, n);
            break e;
          case 1:
            t = Rl(null, t, r, e, n);
            break e;
          case 11:
            t = Tl(null, t, r, e, n);
            break e;
          case 14:
            t = Ll(null, t, r, ot(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), ki(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), Rl(e, t, r, a, n);
    case 3:
      e: {
        if (Wc(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, wc(e, t), Oa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Gn(Error(E(423)), t), t = Al(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Gn(Error(E(424)), t), t = Al(e, t, r, n, a);
          break e;
        } else for (Fe = Qt(t.stateNode.containerInfo.firstChild), Be = t, ee = !0, st = null, n = yc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === a) {
            t = bt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kc(t), e === null && gi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, di(r, a) ? s = null : o !== null && di(r, o) && (t.flags |= 32), Hc(e, t), ze(e, t, s, n), t.child;
    case 6:
      return e === null && gi(t), null;
    case 13:
      return Qc(e, t, n);
    case 4:
      return hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qn(t, null, r, n) : ze(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), Tl(e, t, r, a, n);
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, J(Da, r._currentValue), r._currentValue = s, o !== null) if (ct(o.value, s)) {
          if (o.children === a.children && !Ie.current) {
            t = bt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            s = o.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = Nt(-1, n & -n), u.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var g = d.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), d.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), vi(
                  o.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(E(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), vi(s, n, t), s = o.sibling;
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
      return a = t.type, r = t.pendingProps.children, $n(t, n), a = Je(a), r = r(a), t.flags |= 1, ze(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ot(r, t.pendingProps), a = ot(r.type, a), Ll(e, t, r, a, n);
    case 15:
      return Vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), xa(e, t), t.tag = 1, De(r) ? (e = !0, Ra(t)) : e = !1, $n(t, n), Bc(t, r, a), xi(t, r, a, n), ji(null, t, r, !0, e, n);
    case 19:
      return Yc(e, t, n);
    case 22:
      return Gc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function dd(e, t) {
  return $u(e, t);
}
function Zf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new Zf(e, t, n, r);
}
function bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function em(e) {
  if (typeof e == "function") return bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yi) return 11;
    if (e === Ki) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ja(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Sn:
      return dn(n.children, a, o, t);
    case Qi:
      s = 8, a |= 8;
      break;
    case qo:
      return e = Ye(12, n, t, a | 2), e.elementType = qo, e.lanes = o, e;
    case Vo:
      return e = Ye(13, n, t, a), e.elementType = Vo, e.lanes = o, e;
    case Go:
      return e = Ye(19, n, t, a), e.elementType = Go, e.lanes = o, e;
    case ku:
      return io(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xu:
          s = 10;
          break e;
        case wu:
          s = 9;
          break e;
        case Yi:
          s = 11;
          break e;
        case Ki:
          s = 14;
          break e;
        case $t:
          s = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function dn(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function io(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = ku, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function $o(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Oo(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function tm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xo(0), this.expirationTimes = xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Ms(e, t, n, r, a, o, s, l, u) {
  return e = new tm(e, t, n, l, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ms(o), e;
}
function nm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pd(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return pc(e, n, t);
  }
  return t;
}
function fd(e, t, n, r, a, o, s, l, u) {
  return e = Ms(n, r, !0, e, a, o, s, l, u), e.context = pd(null), n = e.current, r = Pe(), a = Jt(n), o = Nt(r, a), o.callback = t ?? null, Yt(n, o, a), e.current.lanes = a, Ur(e, a, r), $e(e, r), e;
}
function so(e, t, n, r) {
  var a = t.current, o = Pe(), s = Jt(a);
  return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yt(a, t, s), e !== null && (ut(e, a, s, o), ga(e, a, s)), s;
}
function Wa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gl(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ts(e, t) {
  Gl(e, t), (e = e.alternate) && Gl(e, t);
}
function rm() {
  return null;
}
var md = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ls(e) {
  this._internalRoot = e;
}
lo.prototype.render = Ls.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  so(e, t, null, null);
};
lo.prototype.unmount = Ls.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function() {
      so(null, e, null, null);
    }), t[zt] = null;
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Gu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
    Ft.splice(n, 0, e), n === 0 && Wu(e);
  }
};
function Rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function uo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Hl() {
}
function am(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Wa(s);
        o.call(d);
      };
    }
    var s = fd(t, r, e, 0, null, !1, !1, "", Hl);
    return e._reactRootContainer = s, e[zt] = s.current, zr(e.nodeType === 8 ? e.parentNode : e), gn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var d = Wa(u);
      l.call(d);
    };
  }
  var u = Ms(e, 0, !1, null, null, !1, !1, "", Hl);
  return e._reactRootContainer = u, e[zt] = u.current, zr(e.nodeType === 8 ? e.parentNode : e), gn(function() {
    so(t, u, n, r);
  }), u;
}
function co(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var l = a;
      a = function() {
        var u = Wa(s);
        l.call(u);
      };
    }
    so(t, s, e, a);
  } else s = am(n, t, e, a, r);
  return Wa(s);
}
qu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ir(t.pendingLanes);
        n !== 0 && (Zi(t, n | 1), $e(t, ue()), !(V & 6) && (Hn = ue() + 500, rn()));
      }
      break;
    case 13:
      gn(function() {
        var r = Pt(e, 1);
        if (r !== null) {
          var a = Pe();
          ut(r, e, 1, a);
        }
      }), Ts(e, 1);
  }
};
es = function(e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ut(t, e, 134217728, n);
    }
    Ts(e, 134217728);
  }
};
Vu = function(e) {
  if (e.tag === 13) {
    var t = Jt(e), n = Pt(e, t);
    if (n !== null) {
      var r = Pe();
      ut(n, e, t, r);
    }
    Ts(e, t);
  }
};
Gu = function() {
  return Q;
};
Hu = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
ti = function(e, t, n) {
  switch (t) {
    case "input":
      if (Qo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = eo(r);
            if (!a) throw Error(E(90));
            Su(r), Qo(r, a);
          }
        }
      }
      break;
    case "textarea":
      _u(e, n);
      break;
    case "select":
      t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
  }
};
Tu = Es;
Lu = gn;
var om = { usingClientEntryPoint: !1, Events: [Vr, En, eo, bu, Mu, Es] }, rr = { findFiberByHostInstance: sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, im = { bundleType: rr.bundleType, version: rr.version, rendererPackageName: rr.rendererPackageName, rendererConfig: rr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Iu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: rr.findFiberByHostInstance || rm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ca.isDisabled && ca.supportsFiber) try {
    Ka = ca.inject(im), gt = ca;
  } catch {
  }
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = om;
qe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rs(t)) throw Error(E(200));
  return nm(e, t, null, n);
};
qe.createRoot = function(e, t) {
  if (!Rs(e)) throw Error(E(299));
  var n = !1, r = "", a = md;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ms(e, 1, !1, null, null, n, !1, r, a), e[zt] = t.current, zr(e.nodeType === 8 ? e.parentNode : e), new Ls(t);
};
qe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Iu(t), e = e === null ? null : e.stateNode, e;
};
qe.flushSync = function(e) {
  return gn(e);
};
qe.hydrate = function(e, t, n) {
  if (!uo(t)) throw Error(E(200));
  return co(null, e, t, !0, n);
};
qe.hydrateRoot = function(e, t, n) {
  if (!Rs(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = md;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = fd(t, null, e, 1, n ?? null, a, !1, o, s), e[zt] = t.current, zr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new lo(t);
};
qe.render = function(e, t, n) {
  if (!uo(t)) throw Error(E(200));
  return co(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function(e) {
  if (!uo(e)) throw Error(E(40));
  return e._reactRootContainer ? (gn(function() {
    co(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
qe.unstable_batchedUpdates = Es;
qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!uo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return co(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function hd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd);
    } catch (e) {
      console.error(e);
    }
}
hd(), hu.exports = qe;
var sm = hu.exports, gd, Wl = sm;
gd = Wl.createRoot, Wl.hydrateRoot;
const Ql = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, lm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, um = [
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
], cm = [
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
function Dr(e) {
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
function dm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const vr = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(vr() + e, t);
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
const R = {
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
  blobs: (e) => q(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => q(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0) => `${vr()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}`,
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
  pageUrl: (e, t, n = !1, r = !1) => `${vr().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
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
  iconUrl: () => `${vr()}/api/icon.png?v=${Date.now()}`,
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
  )
};
async function pm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, y) => {
      a.onload = () => g(), a.onerror = () => y(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, l = Math.min(4, Math.max(0.5, 300 / 96)), u = document.createElement("canvas");
    return u.width = Math.round(o * l), u.height = Math.round(s * l), u.getContext("2d").drawImage(a, 0, 0, u.width, u.height), await new Promise(
      (g) => u.toBlob((y) => g(y), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function vd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await pm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Ri = [
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
function Ai(e) {
  return Ri.find((t) => t.key === e) ?? Ri[0];
}
function Yl(e) {
  const t = Ai(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Ii() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Ai(e);
  } catch {
  }
  return Ai("wiwi");
}
const yd = {
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
}, xd = j.createContext("es");
function fm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(xd.Provider, { value: e, children: t });
}
function As() {
  return j.useContext(xd);
}
function Ze() {
  const e = As();
  return (t, n) => {
    let r = e === "en" ? yd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function mm(e, t, n) {
  return e === "en" ? yd[t] ?? t : t;
}
function te({ size: e = 18, children: t }) {
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
function wd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function $r({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Or({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function hm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function gm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Qa({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function vm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function kd({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function po({ size: e }) {
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
function Kl({ size: e }) {
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
function ym({ size: e }) {
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
function Jl({ size: e }) {
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
function jd({ size: e }) {
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
function Fr({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function xm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Sd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function yr({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Di({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Cd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function zm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function bm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ze(), o = j.useMemo(() => t.map((w) => w.id), [t]), [s, l] = j.useState(/* @__PURE__ */ new Set()), [u, d] = j.useState("escala"), [g, y] = j.useState(100), [p, S] = j.useState(50), [N, v] = j.useState("mayor"), [$, m] = j.useState("");
  j.useEffect(() => {
    e && (l(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const c = (w) => !s.has(w), f = (w) => l((x) => {
    const M = new Set(x);
    return M.has(w) ? M.delete(w) : M.add(w), M;
  }), h = () => l(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), k = (w) => {
    const x = w.w_mm_base || 0, M = w.h_mm_base || 0;
    return N === "mayor" ? Math.max(x, M) : N === "menor" ? Math.min(x, M) : 2 * Math.sqrt(Math.max(0, x * M) / Math.PI);
  }, C = (w) => {
    if (u === "tamano") {
      const x = k(w);
      if (x > 0) return Math.min(10, Math.max(0.05, p / x));
    }
    return Math.min(10, Math.max(0.05, g / 100));
  }, _ = (w) => {
    const x = C(w);
    return { w: (w.w_mm_base || 0) * x, h: (w.h_mm_base || 0) * x };
  }, P = async () => {
    let w = 0;
    for (const x of t) {
      if (!c(x.id)) continue;
      const M = C(x) * 100;
      await R.patchAsset(x.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(M * 10) / 10))
      }), w += 1;
    }
    await r(), m(a("{n} elementos ajustados ", { n: w })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((w) => {
          const x = _(w), M = Math.min(98, x.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${w.id}`,
              style: {
                width: `${M}%`,
                maxWidth: `${M}%`,
                aspectRatio: `${x.w || 1} / ${x.h || 1}`,
                opacity: c(w.id) ? 1 : 0.3
              },
              title: `${w.name} · ${x.w.toFixed(1)}×${x.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: R.previewUrl(w.id), alt: "" })
            },
            w.id
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((w) => {
          const x = _(w);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${w.id}`,
              className: c(w.id) ? "sel" : "",
              onClick: () => f(w.id),
              title: w.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: R.previewUrl(w.id), alt: w.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: w.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(w.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  x.w.toFixed(1),
                  "×",
                  x.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            w.id
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
              className: u === "escala" ? "on" : "",
              onClick: () => d("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: u === "tamano" ? "on" : "",
              onClick: () => d("tamano"),
              children: a("Tamaño fijo (mm)")
            }
          )
        ] }),
        u === "escala" ? /* @__PURE__ */ i.jsxs("label", { children: [
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
                value: String(g),
                onChange: (w) => y(Number(w.target.value))
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
                  value: String(p),
                  onChange: (w) => S(Number(w.target.value))
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
                value: N,
                onChange: (w) => v(w.target.value),
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
        $ && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: $ })
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
function Mm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1
}) {
  const s = Ze(), [l, u] = j.useState(() => Dr(e));
  j.useEffect(() => u(Dr(e)), [e]);
  const d = j.useRef(null), g = dm(l), [y, p] = j.useState(""), S = j.useRef(!1), [N, v] = j.useState(""), $ = j.useRef(!1), [m, c] = j.useState({ tamano: !1, borde: !1, mini: !1 });
  j.useEffect(() => {
    S.current || p(g.w > 0 ? g.w.toFixed(1) : ""), $.current || v(g.h > 0 ? g.h.toFixed(1) : "");
  }, [g.w, g.h]);
  const f = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, h = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, k = (x) => {
    p(x);
    const M = Number(x.replace(",", "."));
    !Number.isFinite(M) || M <= 0 || f <= 0 || w({ scale_pct: M / f * 100 });
  }, C = (x) => {
    v(x);
    const M = Number(x.replace(",", "."));
    !Number.isFinite(M) || M <= 0 || h <= 0 || w({ scale_pct: M / h * 100 });
  }, _ = (t == null ? void 0 : t.placements.filter((x) => x.asset_id === e.id && x.mini).length) ?? 0, P = (t == null ? void 0 : t.placements.filter((x) => x.asset_id === e.id && !x.mini).length) ?? 0, w = async (x) => {
    a == null || a(), "copies" in x && (x.copies = Math.max(0, x.copies ?? 0)), u((M) => ({ ...M, ...x }));
    try {
      await R.patchAsset(e.id, x);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx("img", { src: R.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ i.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: s("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => R.assetsFolder().then((x) => R.abrirCarpeta(x.path)).catch(() => R.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ i.jsx($r, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: s("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var x;
              return (x = d.current) == null ? void 0 : x.click();
            },
            children: /* @__PURE__ */ i.jsx(hm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: d,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (x) => {
              var ne;
              const M = (ne = x.target.files) == null ? void 0 : ne[0];
              if (x.target.value = "", !!M)
                try {
                  const { blob: le, name: _e } = await vd(M);
                  await R.reemplazar(e.id, le, _e), await n();
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
            title: s("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ i.jsx(gm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? s("Restaurar fondo original") : s("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? R.restoreBackground(e.id) : R.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ i.jsx(vm, { size: 16 }) : /* @__PURE__ */ i.jsx(Qa, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: s("Eliminar imagen"),
            onClick: () => R.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ i.jsx(kd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: s("Copias"), children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => w({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => w({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            "data-tip": s("Incluir como mini (rellena huecos)"),
            onClick: () => w({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
              " ",
              s("Mini")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${l.offset_mm > 0 ? "on" : ""}`,
            "data-testid": `borde-${e.id}`,
            "data-tip": s("Borde adicional para este elemento (unir trozos, margen al cortar)"),
            onClick: () => c((x) => ({ ...x, borde: !x.borde })),
            children: [
              /* @__PURE__ */ i.jsx(po, { size: 15 }),
              " ",
              s("Borde")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-tamano-${e.id}`,
            onClick: () => c((x) => ({ ...x, tamano: !x.tamano })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.tamano ? "open" : ""}`, children: "›" }),
              s("Tamaño"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                g.w.toFixed(1),
                "×",
                g.h.toFixed(1),
                " · ",
                Math.round(l.scale_pct),
                " %"
              ] })
            ]
          }
        ),
        m.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: s("Escala del elemento (100% = tamaño natural)"), children: s("Escala") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: l.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (x) => w({ scale_pct: Number(x.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
              Math.round(l.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: s("Tamaño exacto en milímetros (mantiene la proporción)"), children: s("Ancho") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: y,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  S.current = !0, $.current = !1;
                },
                onBlur: () => {
                  S.current = !1, p(g.w > 0 ? g.w.toFixed(1) : "");
                },
                onChange: (x) => k(x.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" }),
            /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ i.jsx("span", { title: s("Tamaño exacto en milímetros (mantiene la proporción)"), children: s("Alto") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: N,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  $.current = !0, S.current = !1;
                },
                onBlur: () => {
                  $.current = !1, v(g.h > 0 ? g.h.toFixed(1) : "");
                },
                onChange: (x) => C(x.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      (l.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${e.id}`,
            onClick: () => c((x) => ({ ...x, borde: !x.borde })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.borde ? "open" : ""}`, children: "›" }),
              s("Borde adicional"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                l.offset_mm.toFixed(1),
                " mm",
                l.offset_mm <= 0 ? ` · ${s("global")}` : ""
              ] })
            ]
          }
        ),
        m.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${e.id}`,
                onClick: () => w({ offset_mm: Math.max(
                  0,
                  Math.round((l.offset_mm - 0.5) * 2) / 2
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
                value: l.offset_mm,
                onChange: (x) => w({ offset_mm: Number(x.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => w({ offset_mm: Math.min(
                  20,
                  Math.round((l.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", s("Extender")],
              ["blanco", s("Blanco")],
              ["color", s("Color")],
              ["unir_recto", s("Unir recto")],
              ["unir_curvo", s("Unir curvo")]
            ].map(([x, M]) => /* @__PURE__ */ i.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === x ? "on" : ""}`,
                "data-testid": `offset-modo-${x}-${e.id}`,
                onClick: () => w({ offset_modo: x }),
                children: M
              },
              x
            )),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: s("Color del borde"),
                onChange: (x) => w({
                  offset_color: x.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      l.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${e.id}`,
            onClick: () => c((x) => ({ ...x, mini: !x.mini })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.mini ? "open" : ""}`, children: "›" }),
              s("Opciones de mini"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                _
              ] })
            ]
          }
        ),
        m.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ i.jsx("span", { title: s("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: s("Cuota") }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => w({ mini_quota: Math.max(
                1,
                Math.round((l.mini_quota - 0.5) * 2) / 2
              ) }),
              children: "−"
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
            "×",
            l.mini_quota
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-mas-${e.id}`,
              onClick: () => w({ mini_quota: Math.min(
                100,
                Math.round((l.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: s(" {n} minis", { n: _ }) })
        ] }) })
      ] }),
      P > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: s("Colocadas: {n}", { n: P }) }),
      l.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ i.jsx(Cd, { size: 14 }),
        " ",
        l.warnings[0],
        " ",
        l.warnings.some((x) => /blob|trozos sueltos/i.test(x)) && /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: s("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function Tm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s
}) {
  const l = Ze(), u = j.useRef(null), [d, g] = j.useState(!1), [y, p] = j.useState(null), S = async (v) => {
    const $ = [];
    for (const m of Array.from(v))
      try {
        const { blob: c, name: f } = await vd(m);
        $.push(Dr(await R.upload(c, f)));
      } catch (c) {
        console.error(c);
      }
    await r(), $.length > 1 && p($);
  }, N = n.usar_minis;
  return e.some((v) => v.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: l("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${d ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var v;
          return (v = u.current) == null ? void 0 : v.click();
        },
        onDragOver: (v) => {
          v.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: (v) => {
          v.preventDefault(), g(!1), v.dataTransfer.files.length && S(v.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            l("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: u,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (v) => {
                v.target.files && S(v.target.files), v.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((v) => /* @__PURE__ */ i.jsx(
      Mm,
      {
        a: v,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        bordeGlobal: n.offset_activo === !0
      },
      v.id
    )) }),
    !N && /* @__PURE__ */ i.jsx("div", { className: "hint", children: l("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => R.clearAssets().then(r),
        children: l("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      bm,
      {
        open: !!y,
        assets: y ?? [],
        onClose: () => p(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
function _d({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ze(), [o, s] = j.useState(null), [l, u] = j.useState("");
  j.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (g = "") => {
    u("");
    try {
      s(await R.fsList(g));
    } catch (y) {
      u(y.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (g) => g.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    l && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      l
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => d(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((g) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => d(`${o.path}/${g}`.replace("//", "/")),
          children: g
        },
        g
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
function Lm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Ze(), [l, u] = j.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((y) => y.startsWith("data:")), g = [
    s("Abre Cricut Design Space."),
    s("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    s("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    s("Pulsa «Crear» para preparar el lienzo."),
    s("Comprueba que las dimensiones coinciden con las del archivo."),
    s("Imprime en papel mate blanco y colócalo en la esterilla."),
    s("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ i.jsx("div", { className: "modal", children: l === "resumen" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
      d ? t.map((y, p) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${p}`,
          href: y,
          download: `crycat_pagina-${String(p + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx($r, { size: 15 }),
            " ",
            s("Descargar página {n}", { n: p + 1 })
          ]
        },
        p
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx($r, { size: 15 }),
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
          onClick: () => u("cricut"),
          children: s("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { children: s("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: g.map((y, p) => /* @__PURE__ */ i.jsx("li", { children: y }, p)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => u("resumen"),
          children: s("Volver")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { onClick: o, children: s("Entendido") })
    ] })
  ] }) }) });
}
function Rm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: l, onRecalc: u, editando: d, onFinEdicion: g, onDeshacer: y, onRehacer: p, puedeDeshacer: S, puedeRehacer: N }) {
  const v = Ze(), $ = As(), [m, c] = j.useState(1), [f, h] = j.useState({ x: 0, y: 0 }), [k, C] = j.useState(null), [_, P] = j.useState(() => Date.now()), [w, x] = j.useState(null), [M, ne] = j.useState(null), [le, _e] = j.useState(!1), [dt, Ne] = j.useState(2), [Te, b] = j.useState([]), [F, B] = j.useState(""), [G, Y] = j.useState(/* @__PURE__ */ new Set()), D = j.useRef(null), W = j.useRef(null), fe = $ === "en" ? cm : um, xe = j.useMemo(
    () => fe[Math.floor(Math.random() * fe.length)],
    [fe]
  ), Le = r.saveName.trim() || xe;
  j.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const yt = (t == null ? void 0 : t.pages) ?? 0, Hr = !!t && t.efficiency < 0.8;
  j.useEffect(() => {
    const z = D.current;
    if (!z) return;
    const A = (T) => {
      T.preventDefault(), T.stopPropagation();
      const H = z.getBoundingClientRect(), K = T.clientX - H.left, Ee = T.clientY - H.top;
      c((He) => {
        const we = T.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, He * we)), At = ie / He;
        return h((It) => ({ x: K - (K - It.x) * At, y: Ee - (Ee - It.y) * At })), ie;
      });
    };
    return z.addEventListener("wheel", A, { passive: !1 }), () => z.removeEventListener("wheel", A);
  }, []);
  const I = (z) => {
    if (z.target.closest(".item-box")) return;
    W.current = { x: z.clientX - f.x, y: z.clientY - f.y };
    const A = (H) => {
      W.current && h({ x: H.clientX - W.current.x, y: H.clientY - W.current.y });
    }, T = () => {
      W.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", T);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", T);
  };
  j.useEffect(() => {
    const z = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((T) => Math.min(12, T * 1.08)) : A.key === "-" || A.key === "_" ? c((T) => Math.max(0.05, T / 1.08)) : A.key === "0" ? (c(1), h({ x: 0, y: 0 })) : A.key === "Escape" ? C(null) : A.key === "g" ? a((T) => ({ ...T, guidesVisible: !T.guidesVisible })) : A.key === "t" && a((T) => T.eyeFosforito ? { ...T, eyeFosforito: !1, eyeTransparent: !1 } : T.eyeTransparent ? { ...T, eyeTransparent: !1, eyeFosforito: !0 } : { ...T, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [a]);
  const O = j.useRef(null), Ge = j.useRef(null), xt = (z, A) => {
    z.preventDefault(), z.stopPropagation();
    const T = z.currentTarget.closest(".page-box");
    if (!T || !t) return;
    const H = t.page_mm[0] / T.clientWidth, K = {
      uid: A.uid,
      startX: z.clientX,
      startY: z.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: H
    };
    O.current = K, Ge.current = { x: A.x, y: A.y }, x(K), ne({ uid: A.uid, x: A.x, y: A.y });
    const Ee = (we) => {
      const ie = O.current;
      if (!ie) return;
      const At = (we.clientX - ie.startX) * ie.mmPerPx / m, It = (we.clientY - ie.startY) * ie.mmPerPx / m;
      Ge.current = { x: ie.origX + At, y: ie.origY + It }, ne({ uid: ie.uid, x: ie.origX + At, y: ie.origY + It });
    }, He = (we) => {
      window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", He);
      const ie = O.current;
      if (O.current = null, !ie) return;
      const At = (we.clientX - ie.startX) * ie.mmPerPx / m, It = (we.clientY - ie.startY) * ie.mmPerPx / m;
      x(null), ne(null), !(Math.abs(At) < 0.5 && Math.abs(It) < 0.5) && Wr(ie.uid, ie.origX + At, ie.origY + It);
    };
    window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", He);
  }, Wr = async (z, A, T) => {
    try {
      const H = await R.move(z, A, T);
      H.job ? l(H.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, Tt = async (z) => {
    const A = await R.unpin(z);
    l(A);
  };
  j.useEffect(() => {
    if (!d) {
      b([]), B(""), Y(/* @__PURE__ */ new Set());
      return;
    }
    R.blobs(d.id).then((z) => {
      b(z.blobs), Ne(z.union_mm ?? 2), B(z.preview_png), Y(new Set(z.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      b([]), B("");
    });
  }, [d]);
  const Is = async () => {
    if (d)
      try {
        await R.limpiarContorno(d.id, Array.from(G));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, zd = (z) => {
    Y((A) => {
      const T = new Set(A);
      return T.has(z) ? T.delete(z) : T.add(z), T;
    });
  }, [pt, Lt] = j.useState(null), Pd = async () => {
    try {
      const T = await R.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Lt({ files: T.files, folder: T.folder });
    } catch (T) {
      Lt({ files: [], folder: "", error: T.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const H = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), K = URL.createObjectURL(H), Ee = document.createElement("a");
        Ee.href = K, Ee.download = `${r.saveName || "crycat"}-cricut.pdf`, Ee.click(), setTimeout(() => URL.revokeObjectURL(K), 4e3);
      } catch (T) {
        Lt({
          files: [],
          folder: "",
          error: T.message
        });
      }
      return;
    }
    const A = document.createElement("iframe");
    A.setAttribute("aria-hidden", "true"), A.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", A.src = "/api/print.pdf", A.onload = () => {
      var T, H;
      try {
        (T = A.contentWindow) == null || T.focus(), (H = A.contentWindow) == null || H.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, bd = async () => {
    try {
      const z = await R.export(Le);
      Lt({ files: z.files, folder: z.folder });
    } catch (z) {
      Lt({ files: [], folder: "", error: z.message });
    }
  }, Md = () => {
    _e(!0);
  }, Td = async (z) => {
    try {
      const A = await R.export(Le, z);
      Lt({ files: A.files, folder: A.folder });
    } catch (A) {
      Lt({ files: [], folder: "", error: A.message });
    }
  }, Ds = (t == null ? void 0 : t.poly_mm) ?? [], [et, tt] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [xn, wn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Rt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : xn, fo = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : wn, nt = n.lienzo === "pagina" ? 0 : et, rt = n.lienzo === "pagina" ? 0 : tt, $s = Ds.length ? "M" + Ds.map(([z, A]) => `${z - nt},${A - rt}`).join(" L") + " Z" : "", Ld = (z) => {
    const A = (t == null ? void 0 : t.placements.filter((T) => T.page === z)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (T) => {
          yt > 1 && k === null && !T.target.closest(".item-box") && C(z);
        },
        "data-testid": `page-${z}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: "sheet", src: R.pageUrl(z, _, n.simular_impresion === !0, r.verBordes), alt: v("Página {i}", { i: z + 1 }), draggable: !1 }),
          r.guidesVisible && $s && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Rt} ${fo}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Rt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((et - nt + xn) / 10) + 1 },
                    (T, H) => {
                      const K = H * 10 - (nt - et);
                      return K >= et - nt - 0.01 && K <= et - nt + xn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: K,
                          y1: tt - rt,
                          x2: K,
                          y2: tt - rt + wn
                        },
                        `v${H}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((tt - rt + wn) / 10) + 1 },
                    (T, H) => {
                      const K = H * 10 - (rt - tt);
                      return K >= tt - rt - 0.01 && K <= tt - rt + wn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: et - nt,
                          y1: K,
                          x2: et - nt + xn,
                          y2: K
                        },
                        `h${H}`
                      ) : null;
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsx(
              "g",
              {
                stroke: "#111",
                strokeWidth: Math.max(0.5, Rt / 320),
                fill: "none",
                opacity: 0.9,
                children: [
                  [et, tt, 1, 1],
                  [et + xn, tt, -1, 1],
                  [et, tt + wn, 1, -1],
                  [et + xn, tt + wn, -1, -1]
                ].map(
                  ([T, H, K, Ee], He) => /* @__PURE__ */ i.jsx(
                    "path",
                    {
                      d: `M ${T - nt + 9 * K} ${H - rt} L ${T - nt} ${H - rt} L ${T - nt} ${H - rt + 9 * Ee}`
                    },
                    He
                  )
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: $s,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Rt / 250),
                strokeDasharray: `${Rt / 55} ${Rt / 85}`,
                opacity: 0.85
              }
            )
          ] }),
          A.map((T) => {
            const H = e.find((we) => we.id === T.asset_id), K = (M == null ? void 0 : M.uid) === T.uid ? M : null, Ee = ((K ? K.x : T.x) - nt) / (Rt || 1) * 100, He = ((K ? K.y : T.y) - rt) / (fo || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${T.pinned ? "pinned" : ""} ${(w == null ? void 0 : w.uid) === T.uid ? "dragging" : ""}`,
                style: {
                  left: `${Ee}%`,
                  top: `${He}%`,
                  width: `${T.w / (Rt || 1) * 100}%`,
                  height: `${T.h / (fo || 1) * 100}%`
                },
                title: (H == null ? void 0 : H.name) ?? "",
                onMouseDown: (we) => xt(we, T),
                onContextMenu: (we) => {
                  we.preventDefault(), Tt(T.uid);
                },
                "data-testid": `item-${T.uid}`,
                children: T.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              T.uid
            );
          })
        ]
      },
      z
    );
  }, Rd = k !== null ? [k] : Array.from({ length: yt }, (z, A) => A);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": v("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((z) => ({ ...z, verBordes: !z.verBordes })),
          children: /* @__PURE__ */ i.jsx(po, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": v("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((z) => ({ ...z, guidesVisible: !z.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(Sd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": v("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => u(Hr ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Or, { size: 16 }),
            " ",
            v("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        yt > 1 && k === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 4 })), children: "4" })
        ] }),
        k !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => C(null), title: v("Volver a la cuadrícula (Esc)"), children: v(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": v("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((z) => z.eyeFosforito ? { ...z, eyeFosforito: !1, eyeTransparent: !1 } : z.eyeTransparent ? { ...z, eyeTransparent: !1, eyeFosforito: !0 } : { ...z, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(ym, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(Kl, { size: 16 }) : /* @__PURE__ */ i.jsx(Kl, { size: 16 }),
              r.eyeFosforito ? v("Fosforito") : r.eyeTransparent ? v("Transparente") : v("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-disposicion",
            "data-tip": v("Cambiar la disposición: menús anchos o hoja más grande"),
            onClick: () => {
              const z = !window.__crycatAncho;
              window.__crycatAncho = z, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: z }
              ));
            },
            children: /* @__PURE__ */ i.jsx(Jl, { size: 16 })
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
            "data-tip": v("Deshacer (Ctrl+Z)"),
            onClick: () => y(),
            disabled: !S,
            children: /* @__PURE__ */ i.jsx(xm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": v("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !N,
            children: /* @__PURE__ */ i.jsx(wm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": v("Acercar (+)"),
            onClick: () => c((z) => Math.min(12, z * 1.08)),
            children: /* @__PURE__ */ i.jsx(km, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": v("Centrar la hoja y volver al tamaño original (tecla 0)"),
            onClick: () => {
              c(1), h({ x: 0, y: 0 });
            },
            children: /* @__PURE__ */ i.jsx(Jl, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": v("Alejar (−)"),
            onClick: () => c((z) => Math.max(0.05, z / 1.08)),
            children: /* @__PURE__ */ i.jsx(jm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(m * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: R.previewUrl(d.id) + `?t=${_}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && Te.filter((z) => !z.principal).map((z, A) => {
          const [T, H, K, Ee] = z.bbox, He = d.w_px || 1, we = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${G.has(z.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: v("Trozo de {px} px — clic para {accion}", {
                px: z.area_px,
                accion: G.has(z.id) ? v("conservar") : v("quitar")
              }),
              style: {
                left: `${T / He * 100}%`,
                top: `${H / we * 100}%`,
                width: `${(K - T) / He * 100}%`,
                height: `${(Ee - H) / we * 100}%`
              },
              onClick: () => zd(z.id)
            },
            z.id
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
              title: v("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: dt }),
              onClick: async () => {
                d && (await R.patchAsset(d.id, {
                  offset_mm: dt,
                  offset_modo: "unir_curvo"
                }), await (g == null ? void 0 : g()));
              },
              children: v("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Is,
              children: v(
                "Quitar marcados ({n})",
                { n: G.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: v("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: D,
        className: `canvas ${w ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: I,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${m})` },
            children: [
              yt === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: v("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${k !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Rd.map(Ld)
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
          onClick: Is,
          children: v("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => g == null ? void 0 : g(),
          children: v("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: xe,
          value: r.saveName,
          onChange: (z) => a((A) => ({ ...A, saveName: z.target.value }))
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: v("Abrir la carpeta de guardado en el explorador"),
            "aria-label": v("Abrir carpeta de guardado"),
            onClick: () => R.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx($r, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: bd, children: v("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Md, children: v("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Pd,
            disabled: yt === 0,
            children: v("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      _d,
      {
        open: le,
        initial: n.carpeta_export,
        onClose: () => _e(!1),
        onPick: Td
      }
    ),
    /* @__PURE__ */ i.jsx(
      Lm,
      {
        open: !!pt,
        files: (pt == null ? void 0 : pt.files) ?? [],
        folder: (pt == null ? void 0 : pt.folder) ?? "",
        error: pt == null ? void 0 : pt.error,
        onOpenFolder: (z) => void R.fsOpen(z).catch(() => {
        }),
        onClose: () => Lt(null)
      }
    )
  ] });
}
const Xl = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function Am({ saveSettings: e }) {
  const t = Ze(), [n, r] = j.useState(
    {}
  ), [a, o] = j.useState([]), [s, l] = j.useState(!1), [u, d] = j.useState(!1), [g, y] = j.useState(""), [p, S] = j.useState(""), N = () => R.presets().then((c) => o(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  j.useEffect(() => {
    R.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), N();
  }, []);
  const v = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const f = c.slice(8);
          await e(n[f]), S(t("Perfil «{n}» aplicado", {
            n: t(Xl[f] ?? f)
          }));
        } else {
          const f = c.slice(9), h = await R.loadPreset(f);
          await e(h.settings), S(t("Perfil «{n}» cargado", { n: f }));
        }
      } catch {
        S(t("No se pudo aplicar el perfil"));
      }
  }, $ = async () => {
    const c = g.trim();
    if (c)
      try {
        const f = await R.savePreset(c);
        o(Array.isArray(f.names) ? f.names : []), y(""), l(!1), S(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        S(t("No se pudo guardar el perfil"));
      }
  }, m = async (c) => {
    try {
      o((await R.deletePreset(c)).names ?? []), S(t("Perfil «{n}» borrado", { n: c }));
    } catch {
      S(t("No se pudo borrar el perfil"));
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "perfiles-barra", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "perfil-select",
          "data-testid": "perfil-select",
          value: "",
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (c) => v(c.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((c) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${c}`, children: t(Xl[c] ?? c) }, c)) }),
            a.length > 0 && /* @__PURE__ */ i.jsx("optgroup", { label: t("Guardados"), children: a.map((c) => /* @__PURE__ */ i.jsx("option", { value: `guardado:${c}`, children: c }, c)) })
          ]
        }
      ),
      !s && /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "perfil-guardar",
          title: t("Guardar los ajustes actuales como perfil"),
          onClick: () => l(!0),
          children: [
            /* @__PURE__ */ i.jsx(Di, { size: 15 }),
            " ",
            t("Guardar")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `chip${u ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => d(!u),
          children: /* @__PURE__ */ i.jsx(yr, { size: 15 })
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
          value: g,
          onChange: (c) => y(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && $(), c.key === "Escape" && l(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: $, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => l(!1), children: t("Cancelar") })
    ] }),
    u && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((c) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: c, children: c }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => v(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => m(c),
          children: /* @__PURE__ */ i.jsx(kd, { size: 15 })
        }
      )
    ] }, c)) }),
    p && /* @__PURE__ */ i.jsx("div", { className: "hint", children: p })
  ] });
}
function Im({ settings: e, saveSettings: t }) {
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
            /* @__PURE__ */ i.jsx(Fr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Or, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(jd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Am, { saveSettings: t })
  ] });
}
function Dm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
  const l = s === "mm" ? t : t / 100 * n, u = s === "mm" ? n ? t / n * 100 : 0 : t;
  return /* @__PURE__ */ i.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: s === "mm" ? 200 : 99,
        step: s === "mm" ? 1 : 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(s === "mm" ? t : Math.round(u * 10) / 10),
        title: o("Tamaño del mini"),
        onChange: (d) => {
          const g = Number(d.target.value);
          Number.isFinite(g) && g > 0 && r(g);
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
        value: s === "mm" ? n ? u.toFixed(1) : "" : l.toFixed(1),
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
function wt({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Zl(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const $m = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Om = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Fm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ze(), [a, o] = j.useState(!0), [s, l] = j.useState({
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
  }), [u, d] = j.useState(!1), g = j.useMemo(() => {
    const h = (n ?? []).filter((C) => C.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((C, _) => Math.min(_.w_mm, _.h_mm) - Math.min(C.w_mm, C.h_mm))[0] ?? null;
  }, [n]), y = g ? Math.min(g.w_mm, g.h_mm) : 0, p = e.modo === "experto", S = ({ children: h }) => p ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, N = (h) => l((k) => ({ ...k, [h]: !k[h] })), v = (h) => t(h), $ = j.useRef(null), m = ({ titulo: h, children: k }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(h) }),
    k
  ] }), c = (h, k, C, _, P = 1, w = "", x, M) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...M ? { "data-tip": r(M) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: C,
          max: _,
          step: P,
          "data-testid": `set-${k}`,
          value: String(e[k]),
          onChange: (ne) => {
            const le = Number(ne.target.value);
            Number.isNaN(le) || v({ [k]: le });
          }
        }
      ),
      w && /* @__PURE__ */ i.jsx("span", { className: "hint", children: w }),
      x
    ] })
  ] }), f = (h, k, C, _, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { children: r(h) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${k}`,
        value: String(e[k]),
        onChange: (w) => v({ [k]: w.target.value }),
        children: C.map(([w, x]) => /* @__PURE__ */ i.jsx("option", { value: w, children: r(x) }, w))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Im, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !p && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(yr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Colocación", children: [
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
            /* @__PURE__ */ i.jsxs(m, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(S, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (h) => {
                      const k = h.target.value, C = lm[k];
                      v(C ? { pagina: k, pagina_w: C[0], pagina_h: C[1] } : { pagina: k });
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
              /* @__PURE__ */ i.jsx(S, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (h) => v({ pagina_w: Number(h.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (h) => v({ pagina_h: Number(h.target.value) })
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
        wt,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
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
                    onClick: () => v({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => v({ mini_usar_lista: !1 }),
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
            /* @__PURE__ */ i.jsx(m, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(S, { children: [
              f("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              f("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ]),
              e.mini_usar_lista && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaños deseados") }),
                /* @__PURE__ */ i.jsxs("div", { className: "seg", style: { maxWidth: 260 }, children: [
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-mm",
                      className: (e.mini_lista_modo ?? "mm") === "mm" ? "on" : "",
                      onClick: () => v({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => v({ mini_lista_modo: "pct" }),
                      children: r("En % del original")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((h, k) => /* @__PURE__ */ i.jsx(
                    Dm,
                    {
                      i: k,
                      valor: h,
                      refBase: y,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (C) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[k] = C, v({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => v({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (C, _) => _ !== k
                        )
                      })
                    },
                    k
                  )),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => v({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: r("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: g ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: g.name, mm: y.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Or, { size: 15 }),
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
            /* @__PURE__ */ i.jsxs(S, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (h) => v({ opt_tiempo_auto: h.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Se usarán {s} s con «{m}» (el resto de métodos tienen el suyo).",
                {
                  s: $m[e.opt_metodo] ?? 8,
                  m: r(Om[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Qa, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Impresión", children: [
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
              /* @__PURE__ */ i.jsxs(S, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (h) => v({ simular_impresion: h.target.checked })
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
                        onChange: (h) => v({ sim_cmyk: h.target.checked })
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
            /* @__PURE__ */ i.jsxs(m, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (h) => v({ chequear_lineas: h.target.checked })
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
      p && /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(po, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (h) => v({ offset_activo: h.target.checked })
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
                      onChange: (h) => v({ offset_color: h.target.value })
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
      p && /* @__PURE__ */ i.jsxs(wt, { id: "corte", title: r("Estimación de corte"), open: s.corte, toggle: N, children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: Zl(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Ql[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Ql[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        c("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        c("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        c("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        c("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      p && /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: N,
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
                  onChange: (h) => v({ historial: h.target.checked })
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
                    onChange: (h) => v({ hist_tamano: h.target.checked })
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
                    onChange: (h) => v({ hist_copias: h.target.checked })
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
                    onChange: (h) => v({ hist_borde: h.target.checked })
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
                    onChange: (h) => v({ hist_minis: h.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Sd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Ri.map((h) => /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("img", { src: R.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var h;
                  return (h = $.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: $,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (h) => {
                      var C;
                      const k = (C = h.target.files) == null ? void 0 : C[0];
                      k && R.setIcon(k).then(() => {
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
        wt,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(wd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(m, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => v({ mute: !e.mute }),
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
                    onChange: (h) => v({ volumen: Number(h.target.value) })
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
                    onChange: (h) => v({ pikmin_activo: h.target.checked })
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
                    onChange: (h) => v({ pikmin_sonido: h.target.checked })
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
                    onChange: (h) => v({ pikmin_sonido_morir: h.target.checked })
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
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: Zl(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      _d,
      {
        open: u,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (h) => t({ carpeta_export: h })
      }
    )
  ] });
}
const St = (e) => (globalThis.__crycatAssets || "") + e;
function eu(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Bm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: o = !1,
  onVolumen: s,
  onMute: l,
  onIdioma: u,
  onEasterEgg: d,
  onAyuda: g,
  onReportar: y
}) {
  var G, Y;
  const p = Ze(), S = As(), [N, v] = j.useState([]), [$, m] = j.useState(0), [c, f] = j.useState(null), [h, k] = j.useState(!1), [C, _] = j.useState(""), P = j.useRef(!1), w = j.useRef([]);
  j.useEffect(() => {
    fetch("/api/funmsgs").then((D) => D.ok ? D.json() : { msgs: [] }).then((D) => v(D.msgs ?? [])).catch(() => {
    });
  }, []), j.useEffect(() => {
    let D = !0;
    return R.version().then((W) => {
      D && (f(W), !W.comprobado && !P.current && (P.current = !0, R.checkVersion().then((fe) => D && f(fe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      D = !1;
    };
  }, []);
  const x = ((G = c == null ? void 0 : c.actualizacion) == null ? void 0 : G.estado) === "descargando" || ((Y = c == null ? void 0 : c.actualizacion) == null ? void 0 : Y.estado) === "instalando";
  j.useEffect(() => {
    if (!x) return;
    const D = setInterval(() => {
      R.version().then(f).catch(() => {
      });
    }, 700);
    return () => clearInterval(D);
  }, [x]);
  const M = !!(e && !e.done);
  j.useEffect(() => {
    if (!M) return;
    const D = setInterval(() => m((W) => W + 1), 1200);
    return () => clearInterval(D);
  }, [M]);
  const ne = N.length ? N : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], le = j.useMemo(() => {
    if (C) return C;
    if (x) {
      const D = c == null ? void 0 : c.actualizacion;
      if ((D == null ? void 0 : D.estado) === "instalando") return p("Instalando y reiniciando…");
      const W = (D == null ? void 0 : D.progreso) != null ? Math.round(D.progreso) : null;
      return W != null ? p("Descargando… {p}%", { p: W }) : (D == null ? void 0 : D.mensaje) || p("Descargando actualización…");
    }
    return M ? ne[$ % ne.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? p("Listo") : p("Listo para empezar");
  }, [C, x, M, e, ne, $, n, p, c]), _e = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), dt = j.useMemo(() => {
    const D = e == null ? void 0 : e.eta_s;
    return !M || D === void 0 || D === null || D <= 0.5 ? "" : p(" · {x} restante", { x: eu(D) });
  }, [e == null ? void 0 : e.eta_s, M, p]), Ne = j.useMemo(() => !r || !r.segundos ? "" : eu(r.segundos), [r]), Te = async () => {
    k(!0), _("");
    try {
      const D = await R.checkVersion();
      f(D), D.error ? _(p("Sin conexión")) : D.hay_nueva || _(p("Estás en la última versión"));
    } catch {
      _(p("Sin conexión"));
    } finally {
      k(!1);
    }
  }, b = async () => {
    _("");
    try {
      const D = await R.updateVersion();
      D.ok ? _(p("Instalando y reiniciando…")) : D.modo === "dev" && D.url ? (_(p("Modo desarrollo: se actualiza con git")), await R.openReleases().catch(() => {
      })) : _(D.mensaje || p("No se pudo actualizar")), R.version().then(f).catch(() => {
      });
    } catch {
      _(p("No se pudo actualizar"));
    }
  }, B = !!(c != null && c.hay_nueva && !M && !x) ? p("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: R.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: p("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const D = Date.now();
            w.current = [...w.current, D].filter((W) => D - W < 2500), w.current.length >= 5 && (w.current = [], _(p("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !M && (() => {
        const D = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), W = n.placed || 1, fe = Math.min(80, Math.max(
          30,
          48 + 22 * D - Math.min(18, W * 0.08)
        )), xe = n.efficiency * 100, Le = xe >= fe ? "buena" : xe >= fe * 0.72 ? "normal" : "baja";
        return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Imágenes colocadas en las hojas"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.placed }),
            /* @__PURE__ */ i.jsx("span", { children: p("imágenes") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Páginas que ocupa el trabajo"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.pages }),
            /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? p("páginas") : p("página") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Copias pequeñas extra que rellenan huecos"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.minis }),
            /* @__PURE__ */ i.jsx("span", { children: p("minis") })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `stat-card eficiencia ${Le}`,
              "data-testid": "eficiencia-card",
              "data-nivel": Le,
              "data-tip": p("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: W, e: Math.round(fe) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(xe),
                  "%"
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: p("eficiencia") })
              ]
            }
          )
        ] });
      })(),
      !(n && n.pages > 0 && !M) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: le }),
      !!n && n.pages > 1 && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: p("No cabe todo en una página: se usarán varias"),
          children: p("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      M && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, _e)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          _e,
          "%",
          dt
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: St("/piensa.gif"),
            alt: "",
            title: p("Pensando…"),
            onError: (D) => {
              D.currentTarget.style.display = "none";
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
          "data-tip": p("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ i.jsx(zm, { size: 15 }),
            " ",
            p("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info reportar",
          "data-testid": "btn-reportar",
          "data-tip": p("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => y == null ? void 0 : y(),
          children: [
            /* @__PURE__ */ i.jsx(Cd, { size: 15 }),
            " ",
            p("Reportar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          "data-tip": p("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ i.jsx(Pm, { size: 15 }),
            " ",
            p("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: p("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ i.jsx(Cm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: p("Idioma"),
          onClick: () => u == null ? void 0 : u(S === "es" ? "en" : "es"),
          children: S.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: p("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !x && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: B || p("Hay una versión nueva"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(_m, { size: 14 })
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
                title: p("Comprobar versiones"),
                onClick: Te,
                disabled: h,
                children: h ? "…" : /* @__PURE__ */ i.jsx(Em, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(Nm, { size: 14 })
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
          title: p(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: p("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            p("Corte"),
            " ",
            Ne || "—"
          ]
        }
      )
    ] })
  ] });
}
const Um = [
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
], qm = "/pikmin_bloom/", tu = "/pikmin/alma.png", Vm = "/sonidos/pikmin.mp3", Gm = "/sonidos/pikmin_morir.mp3";
function Hm(e) {
  const [t, n] = j.useState(Um), [r, a] = j.useState([]);
  return j.useEffect(() => {
    fetch(St("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(St("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let l = s.length - 1; l > 0; l--) {
        const u = Math.floor(Math.random() * (l + 1));
        [s[l], s[u]] = [s[u], s[l]];
      }
      a(s.slice(0, 60).map((l) => St(qm + l)));
    }).catch(() => {
    });
  }, []), j.useMemo(
    () => e && e.length ? [...e, ...r].map(St) : [...t, ...r].map(St),
    [e, t, r]
  );
}
function Wm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: s = !1,
  minDelay: l,
  maxDelay: u,
  fuentes: d
}) {
  const g = Hm(d), [y, p] = j.useState([]), S = j.useRef(void 0), N = j.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), v = j.useRef(s);
  v.current = s;
  const $ = Math.max(5e3, t * 6e4), m = (k) => {
    if (!(!n || o))
      try {
        const C = new Audio(St(k ? Gm : Vm));
        C.volume = Math.min(1, Math.max(0, a)), C.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const k = r && Math.random() < 0.25, C = k ? St(tu) : g[Math.floor(Math.random() * g.length)] ?? St(tu);
    p((_) => [..._, {
      src: C,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: k,
      estado: "paseando"
    }]), m(k);
  }, f = () => {
    if (!e) return;
    const k = l ?? Math.round($ * 0.5), C = u ?? Math.round($ * 1.5), _ = k + Math.random() * Math.max(1, C - k);
    S.current = window.setTimeout(c, _);
  };
  j.useEffect(() => {
    if (!e) {
      window.clearTimeout(S.current), p([]);
      return;
    }
    return f(), () => window.clearTimeout(S.current);
  }, [e, t, n, r, a, o, g]), j.useEffect(() => {
    const k = () => {
      N.current = document.visibilityState === "hidden", !N.current && v.current && window.setTimeout(() => {
        p((C) => C.length ? (m(!1), C.map((_) => ({ ..._, estado: "festejando" }))) : C), window.setTimeout(() => {
          p([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, []);
  const h = (k) => {
    if (v.current && N.current) {
      p((C) => C.map((_) => _.key === k ? { ..._, estado: "quieto" } : _));
      return;
    }
    p((C) => C.filter((_) => _.key !== k)), f();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: y.map((k) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${k.estado}${k.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": k.estado,
      "data-morir": k.morir ? "1" : "0",
      style: { left: `${k.left}%` },
      onAnimationEnd: () => h(k.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: k.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => h(k.key)
        }
      )
    },
    k.key
  )) });
}
const nu = "crycat_bienvenida_v2";
function Qm() {
  const [e, t] = j.useState(!1);
  return j.useEffect(() => {
    try {
      localStorage.getItem(nu) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(nu, "1");
    } catch {
    }
    t(!1);
  } };
}
function Ym({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ze(), [a, o] = j.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(Qa, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(yr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Fr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(Or, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Di, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], l = [
    [
      /* @__PURE__ */ i.jsx(Qa, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(po, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Fr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(Or, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(jd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(yr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Di, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Sm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(wd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(yr, { size: 18 }),
      r("Temas y mascota"),
      r("12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.")
    ]
  ], u = [
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: u.map((g, y) => /* @__PURE__ */ i.jsx("li", { children: g }, y)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : l).map(([g, y, p], S) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: g }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: y }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: p })
      ] })
    ] }, S)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx($r, { size: 15 }),
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
const Km = "https://github.com/dhernandezgit/CryCat-Tool", Jm = [
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
function Xm({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Ze(), [s, l] = j.useState(""), [u, d] = j.useState(""), [g, y] = j.useState(""), [p, S] = j.useState(!0), [N, v] = j.useState(!0), [$, m] = j.useState(!0), [c, f] = j.useState(!1);
  j.useEffect(() => {
    e && (R.version().then((w) => l(w.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (x) => `- [${x.t}] ${x.msg} (${x.donde || "?"})`
  );
  if (!e) return null;
  const k = () => {
    var ne, le;
    const w = navigator.userAgent, x = !!globalThis.__crycatBase, M = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${x ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${w}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((ne = window.screen) == null ? void 0 : ne.width) ?? "?"}x${((le = window.screen) == null ? void 0 : le.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && M.push(`- Elementos: ${a.pages} página(s)`), r && M.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), M.join(`
`);
  }, C = () => n ? [
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
  ].map((x) => `- ${x}: ${String(n[x])}`).join(`
`) : "", _ = () => {
    const w = [
      "### Qué pasó",
      u.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    p && w.push("### Entorno", k(), ""), N && n && w.push("### Ajustes", C(), "");
    const x = h();
    return $ && x.length && w.push("### Errores recogidos", x.join(`
`), ""), w.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), w.join(`
`);
  }, P = () => {
    const w = `[Bug] ${u.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, x = `${Km}/issues/new?` + new URLSearchParams({
      title: w,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(x, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: Jm.map(([w, x]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${w}`,
        onClick: () => d((M) => (M ? M + `
` : "") + x),
        children: o(w)
      },
      w
    )) }),
    /* @__PURE__ */ i.jsxs("label", { className: "col", children: [
      o("¿Qué ha pasado?"),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          "data-testid": "reportar-texto",
          rows: 4,
          value: u,
          placeholder: o("Cuéntalo con tus palabras: qué esperabas y qué pasó."),
          onChange: (w) => d(w.target.value)
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
          value: g,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (w) => y(w.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: p,
          onChange: (w) => S(w.target.checked)
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
          checked: N,
          onChange: (w) => v(w.target.checked)
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
          checked: $,
          onChange: (w) => m(w.target.checked)
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
                `${u}

${g}

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
function Zm() {
  const [e, t] = j.useState([]), [n, r] = j.useState(null), [a, o] = j.useState(null), [s, l] = j.useState(null), [u, d] = j.useState(null), [g, y] = j.useState(null), [p, S] = j.useState(!0), [N, v] = j.useState(!1), [$, m] = j.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, f] = j.useState(33.3), [h, k] = j.useState(33.3), C = Qm(), _ = j.useRef(null), P = j.useRef(null);
  j.useEffect(() => {
    (async () => {
      try {
        const I = await R.getSettings();
        d(I.settings), Yl(I.settings.tema), m((O) => ({
          ...O,
          guidesVisible: I.settings.ver_guias,
          eyeTransparent: I.settings.fondo_transparente
        })), t((await R.listAssets()).map(Dr)), o(await R.result());
      } catch {
        S(!1);
      }
    })();
  }, []), j.useEffect(() => {
    const I = (O) => {
      const Ge = O.detail;
      f(Ge ? 19 : 33.3), k(Ge ? 62 : 33.3);
    };
    return window.addEventListener("crycat:disposicion", I), () => window.removeEventListener("crycat:disposicion", I);
  }, []), j.useEffect(() => {
    const I = setInterval(async () => {
      try {
        await R.health(), S(!0);
      } catch {
        S(!1);
      }
    }, 5e3);
    return () => clearInterval(I);
  }, []);
  const w = j.useCallback(async () => {
    try {
      t((await R.listAssets()).map(Dr)), o(await R.result());
      try {
        l(await R.estimate());
      } catch {
      }
    } catch {
      S(!1);
    }
  }, []), x = j.useCallback((I) => {
    P.current && window.clearInterval(P.current), P.current = window.setInterval(async () => {
      try {
        const O = await R.job(I);
        y(O), O.done && (window.clearInterval(P.current), P.current = null, await w(), O.status === "done" && window.setTimeout(() => y(null), 2500));
      } catch {
        window.clearInterval(P.current), P.current = null;
      }
    }, 300);
  }, []), M = j.useCallback(async () => {
    try {
      const I = await R.optimize();
      y(I), x(I.id);
    } catch {
      S(!1);
    }
  }, [x]), ne = j.useCallback(
    async (I) => {
      try {
        const O = await R.optimize(I, !0);
        y(O), x(O.id);
      } catch {
        S(!1);
      }
    },
    [x]
  ), le = j.useCallback(() => {
    u && u.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(M, 400));
  }, [M, u]), _e = j.useRef(null);
  j.useEffect(() => {
    _e.current = le;
  }, [le]);
  const dt = j.useRef(!1);
  j.useEffect(() => {
    if (!(!u || dt.current)) {
      if (e.length > 0) {
        dt.current = !0;
        return;
      }
      dt.current = !0, R.crearDemo().then(async (I) => {
        var O;
        I.ok && (await w(), (O = _e.current) == null || O.call(_e));
      }).catch(() => {
      });
    }
  }, [u, e.length, w]);
  const Ne = j.useCallback(
    async (I) => {
      d((O) => O && { ...O, ...I }), I.tema && Yl(I.tema);
      try {
        const O = await R.putSettings(I);
        if (O.job)
          y(O.job), x(O.job.id);
        else
          try {
            l(await R.estimate());
          } catch {
          }
      } catch {
        S(!1);
      }
    },
    [x]
  ), Te = j.useRef([]), b = j.useRef([]), [F, B] = j.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), G = (u == null ? void 0 : u.historial) !== !1, Y = (u == null ? void 0 : u.historial_max) ?? 40, D = () => B({
    puedeDeshacer: Te.current.length > 0,
    puedeRehacer: b.current.length > 0
  }), W = j.useCallback(() => {
    const I = [];
    return (u == null ? void 0 : u.hist_tamano) !== !1 && I.push("scale_pct"), (u == null ? void 0 : u.hist_copias) !== !1 && I.push("copies"), (u == null ? void 0 : u.hist_borde) !== !1 && I.push("offset_mm", "offset_modo", "offset_color"), (u == null ? void 0 : u.hist_minis) !== !1 && I.push("mini_enabled", "mini_quota"), I;
  }, [
    u == null ? void 0 : u.hist_tamano,
    u == null ? void 0 : u.hist_copias,
    u == null ? void 0 : u.hist_borde,
    u == null ? void 0 : u.hist_minis
  ]), fe = j.useCallback((I) => {
    const O = {};
    for (const Ge of W()) O[Ge] = I[Ge];
    return O;
  }, [W]), xe = j.useCallback(() => {
    G && (Te.current = [...Te.current, e].slice(-Y), b.current = [], D());
  }, [e, G, Y]), Le = j.useCallback(async () => {
    const I = Te.current.pop();
    if (I) {
      b.current = [...b.current, e], t(I), D();
      for (const O of I)
        await R.patchAsset(O.id, fe(O)).catch(() => {
        });
      await w();
    }
  }, [e, w, fe]), yt = j.useCallback(async () => {
    const I = b.current.pop();
    if (I) {
      Te.current = [...Te.current, e], t(I), D();
      for (const O of I)
        await R.patchAsset(O.id, fe(O)).catch(() => {
        });
      await w();
    }
  }, [e, w, fe]);
  j.useEffect(() => {
    const I = (O) => {
      if (!(O.ctrlKey || O.metaKey)) return;
      const xt = O.target;
      if (xt && (xt.tagName === "INPUT" || xt.tagName === "TEXTAREA" || xt.tagName === "SELECT" || xt.isContentEditable)) return;
      const Tt = O.key.toLowerCase();
      Tt === "z" && !O.shiftKey ? (O.preventDefault(), Le()) : (Tt === "y" || Tt === "z" && O.shiftKey) && (O.preventDefault(), yt());
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [Le, yt]);
  const Hr = j.useCallback(
    (I) => {
      const O = (xt) => {
        const Wr = window.innerWidth, Tt = xt.clientX / Wr * 100;
        I === "left" ? f(Math.min(45, Math.max(12, Tt))) : k(Math.min(60, Math.max(20, Tt - c)));
      }, Ge = () => {
        window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", Ge);
      };
      window.addEventListener("mousemove", O), window.addEventListener("mouseup", Ge);
    },
    [c]
  );
  return j.useEffect(() => {
    document.documentElement.lang = (u == null ? void 0 : u.idioma) ?? "es";
  }, [u == null ? void 0 : u.idioma]), u ? /* @__PURE__ */ i.jsx(fm, { idioma: u.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Tm,
        {
          assets: e,
          result: a,
          settings: u,
          onChange: async () => {
            await w(), le();
          },
          saveSettings: Ne,
          onEditarContorno: (I) => r(I),
          onAntesDeCambiar: xe
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Hr("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ i.jsx(
        Rm,
        {
          assets: e,
          result: a,
          settings: u,
          ui: $,
          setUi: m,
          saveSettings: Ne,
          optimize: M,
          onRefresh: w,
          onJob: (I) => {
            y(I), x(I.id);
          },
          onRecalc: ne,
          editando: n,
          onFinEdicion: async () => {
            r(null), await w();
          },
          onDeshacer: Le,
          onRehacer: yt,
          puedeDeshacer: F.puedeDeshacer,
          puedeRehacer: F.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Hr("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Fm,
        {
          settings: u,
          assets: e,
          saveSettings: Ne
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Bm,
      {
        job: g,
        backendOk: p,
        result: a,
        estimate: s,
        volumen: u.volumen ?? 0.5,
        mute: u.mute ?? !1,
        onVolumen: (I) => Ne({ volumen: I }),
        onMute: (I) => Ne({ mute: I }),
        onIdioma: (I) => Ne({ idioma: I }),
        onEasterEgg: () => Ne({
          pikmin_fiesta: !u.pikmin_fiesta
        }),
        onAyuda: C.abrir,
        onReportar: () => v(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      Wm,
      {
        activo: u.pikmin_activo !== !1,
        frecuenciaMin: u.pikmin_frecuencia_min ?? 1,
        sonido: u.pikmin_sonido !== !1,
        sonidoMorir: u.pikmin_sonido_morir !== !1,
        volumen: u.volumen ?? 0.5,
        mute: u.mute ?? !1,
        fiesta: u.pikmin_fiesta === !0
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ym,
      {
        open: C.visible,
        onClose: C.cerrar,
        onAbrirCarpeta: () => void R.fsOpen(
          u.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      Xm,
      {
        open: N,
        onClose: () => v(!1),
        settings: u,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: mm("es", "Cargando CryCat…") });
}
const Nd = document.getElementById("root"), Ut = [
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
], $i = 7, Sa = [];
globalThis.__crycatErrores = Sa;
const Ed = (e, t) => {
  Sa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Sa.length > 12 && Sa.shift();
};
window.addEventListener("error", (e) => Ed(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Ed(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Oi;
function ru(e, t = !1) {
  window.clearTimeout(Oi);
  const n = Ii().colors;
  if (Nd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + $i}</div>
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
  let r = Math.floor(Math.random() * Ut.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Ut[r++ % Ut.length]);
  }, o = () => {
    a(), Oi = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const Fo = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${$i}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / $i * 100)}%`);
  }
};
let xr = null, Bo;
const Fi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, eh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function th(e) {
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
    Fi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function nh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((y, p) => {
    s[p] = y;
  });
  let l = "";
  const u = n == null ? void 0 : n.body;
  if (u instanceof FormData) {
    const [y, p] = await th(u);
    l = y, s["content-type"] = p;
  } else u instanceof Blob ? l = Fi(await u.arrayBuffer()) : typeof u == "string" && (l = Fi(new TextEncoder().encode(u).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(l) + ")", g = JSON.parse(await xr.runPythonAsync(d));
  return new Response(eh(g.body), {
    status: g.status || 200,
    headers: g.headers || { "content-type": "application/json" }
  });
}
function rh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && xr)
      try {
        return await nh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function ah() {
  try {
    if (ru("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const s = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: s }).then(() => navigator.serviceWorker.ready),
          new Promise((l) => setTimeout(l, 6e3))
        ]);
      } catch {
      }
    xr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Fo), Fo("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await xr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (s) => {
      const l = s.data;
      if (!l || l.tipo !== "api") return;
      const u = s.ports && s.ports[0];
      if (u)
        try {
          const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(l.method) + ", " + JSON.stringify(l.path) + ", " + JSON.stringify(JSON.stringify(l.headers || {})) + ", " + JSON.stringify(l.body || "") + ")", g = await xr.runPythonAsync(d);
          u.postMessage(JSON.parse(g));
        } catch (d) {
          u.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (d && d.message ? d.message : d))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, rh();
    const n = document.createElement("div");
    n.id = "crycat-espera";
    const r = Ii().colors;
    n.style.cssText = "position:fixed;inset:0;display:none;z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:" + r.bg + "f2;font:16px system-ui;color:" + r.textSoft + ";text-align:center;padding:24px", n.innerHTML = '<img src="./app/icono.png" alt="" style="width:72px;height:72px;border-radius:20px" /><div id="espera-frase" style="font-size:20px;font-weight:800;color:' + r.text + ';max-width:620px;line-height:1.25"></div><div style="font-size:13px">Optimizando de verdad: el cálculo se hace en tu equipo y puede tardar unos segundos.</div>', document.body.appendChild(n);
    const a = window.fetch.bind(window), o = async (s, l) => {
      const u = String((s == null ? void 0 : s.url) ?? s ?? ""), d = u.includes("/api/optimize") || u.includes("/api/demo");
      if (d) {
        n.style.display = "flex";
        const g = document.getElementById("espera-frase");
        let y = Math.floor(Math.random() * Ut.length);
        g && (g.textContent = Ut[y++ % Ut.length]), window.clearInterval(Bo), Bo = window.setInterval(() => {
          const p = document.getElementById("espera-frase");
          p && (p.textContent = Ut[y++ % Ut.length]);
        }, 1200);
      }
      try {
        return await a(s, l);
      } finally {
        d && (window.clearInterval(Bo), n.style.display = "none");
      }
    };
    window.fetch = o;
    try {
      const s = Ii().key;
      s && s !== "wiwi" && await fetch(vr() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: s })
      });
    } catch {
    }
    Fo("Abriendo la aplicación…", 7), window.clearTimeout(Oi), gd(Nd).render(/* @__PURE__ */ i.jsx(Zm, {}));
  } catch (e) {
    ru("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
ah();
