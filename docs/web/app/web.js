var tu = { exports: {} }, Qa = {}, nu = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr = Symbol.for("react.element"), Ld = Symbol.for("react.portal"), Rd = Symbol.for("react.fragment"), Ad = Symbol.for("react.strict_mode"), Id = Symbol.for("react.profiler"), Dd = Symbol.for("react.provider"), $d = Symbol.for("react.context"), Od = Symbol.for("react.forward_ref"), Fd = Symbol.for("react.suspense"), Bd = Symbol.for("react.memo"), Ud = Symbol.for("react.lazy"), Dl = Symbol.iterator;
function qd(e) {
  return e === null || typeof e != "object" ? null : (e = Dl && e[Dl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ru = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, au = Object.assign, ou = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = ou, this.updater = n || ru;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function iu() {
}
iu.prototype = Hn.prototype;
function Oi(e, t, n) {
  this.props = e, this.context = t, this.refs = ou, this.updater = n || ru;
}
var Fi = Oi.prototype = new iu();
Fi.constructor = Oi;
au(Fi, Hn.prototype);
Fi.isPureReactComponent = !0;
var $l = Array.isArray, lu = Object.prototype.hasOwnProperty, Bi = { current: null }, su = { key: !0, ref: !0, __self: !0, __source: !0 };
function uu(e, t, n) {
  var r, a = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) lu.call(t, r) && !su.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Fr, type: e, key: o, ref: l, props: a, _owner: Bi.current };
}
function Vd(e, t) {
  return { $$typeof: Fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fr;
}
function Gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ol = /\/+/g;
function fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Gd("" + e.key) : t.toString(36);
}
function ca(e, t, n, r, a) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (o) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Fr:
        case Ld:
          l = !0;
      }
  }
  if (l) return l = e, a = a(l), e = r === "" ? "." + fo(l, 0) : r, $l(a) ? (n = "", e != null && (n = e.replace(Ol, "$&/") + "/"), ca(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Ui(a) && (a = Vd(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Ol, "$&/") + "/") + e)), t.push(a)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", $l(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + fo(o, u);
    l += ca(o, t, n, s, a);
  }
  else if (s = qd(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + fo(o, u++), l += ca(o, t, n, s, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Wr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return ca(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function Hd(e) {
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
var ze = { current: null }, da = { transition: null }, Wd = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: da, ReactCurrentOwner: Bi };
function cu() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: Wr, forEach: function(e, t, n) {
  Wr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Wr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Wr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ui(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Hn;
U.Fragment = Rd;
U.Profiler = Id;
U.PureComponent = Oi;
U.StrictMode = Ad;
U.Suspense = Fd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd;
U.act = cu;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = au({}, e.props), a = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Bi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) lu.call(t, s) && !su.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Fr, type: e.type, key: a, ref: o, props: r, _owner: l };
};
U.createContext = function(e) {
  return e = { $$typeof: $d, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Dd, _context: e }, e.Consumer = e;
};
U.createElement = uu;
U.createFactory = function(e) {
  var t = uu.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Od, render: e };
};
U.isValidElement = Ui;
U.lazy = function(e) {
  return { $$typeof: Ud, _payload: { _status: -1, _result: e }, _init: Hd };
};
U.memo = function(e, t) {
  return { $$typeof: Bd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = da.transition;
  da.transition = {};
  try {
    e();
  } finally {
    da.transition = t;
  }
};
U.unstable_act = cu;
U.useCallback = function(e, t) {
  return ze.current.useCallback(e, t);
};
U.useContext = function(e) {
  return ze.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return ze.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return ze.current.useEffect(e, t);
};
U.useId = function() {
  return ze.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return ze.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return ze.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return ze.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return ze.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return ze.current.useRef(e);
};
U.useState = function(e) {
  return ze.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return ze.current.useTransition();
};
U.version = "18.3.1";
nu.exports = U;
var j = nu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd = j, Yd = Symbol.for("react.element"), Kd = Symbol.for("react.fragment"), Jd = Object.prototype.hasOwnProperty, Xd = Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function du(e, t, n) {
  var r, a = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Jd.call(t, r) && !Zd.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Yd, type: e, key: o, ref: l, props: a, _owner: Xd.current };
}
Qa.Fragment = Kd;
Qa.jsx = du;
Qa.jsxs = du;
tu.exports = Qa;
var i = tu.exports, pu = { exports: {} }, Be = {}, fu = { exports: {} }, mu = {};
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
  function t(b, O) {
    var F = b.length;
    b.push(O);
    e: for (; 0 < F; ) {
      var G = F - 1 >>> 1, Q = b[G];
      if (0 < a(Q, O)) b[G] = O, b[F] = Q, F = G;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var O = b[0], F = b.pop();
    if (F !== O) {
      b[0] = F;
      e: for (var G = 0, Q = b.length, D = Q >>> 1; G < D; ) {
        var K = 2 * (G + 1) - 1, Me = b[K], qe = K + 1, Xe = b[qe];
        if (0 > a(Me, F)) qe < Q && 0 > a(Xe, Me) ? (b[G] = Xe, b[qe] = F, G = qe) : (b[G] = Me, b[K] = F, G = K);
        else if (qe < Q && 0 > a(Xe, F)) b[G] = Xe, b[qe] = F, G = qe;
        else break e;
      }
    }
    return O;
  }
  function a(b, O) {
    var F = b.sortIndex - O.sortIndex;
    return F !== 0 ? F : b.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], d = [], g = 1, y = null, p = 3, S = !1, N = !1, v = !1, I = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(b) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= b) r(d), O.sortIndex = O.expirationTime, t(s, O);
      else break;
      O = n(d);
    }
  }
  function h(b) {
    if (v = !1, f(b), !N) if (n(s) !== null) N = !0, Ce(k);
    else {
      var O = n(d);
      O !== null && be(h, O.startTime - b);
    }
  }
  function k(b, O) {
    N = !1, v && (v = !1, m(P), P = -1), S = !0;
    var F = p;
    try {
      for (f(O), y = n(s); y !== null && (!(y.expirationTime > O) || b && !M()); ) {
        var G = y.callback;
        if (typeof G == "function") {
          y.callback = null, p = y.priorityLevel;
          var Q = G(y.expirationTime <= O);
          O = e.unstable_now(), typeof Q == "function" ? y.callback = Q : y === n(s) && r(s), f(O);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var D = !0;
      else {
        var K = n(d);
        K !== null && be(h, K.startTime - O), D = !1;
      }
      return D;
    } finally {
      y = null, p = F, S = !1;
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
      var O = !0;
      try {
        O = _(!0, b);
      } finally {
        O ? se() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var se;
  if (typeof c == "function") se = function() {
    c(ne);
  };
  else if (typeof MessageChannel < "u") {
    var Se = new MessageChannel(), ct = Se.port2;
    Se.port1.onmessage = ne, se = function() {
      ct.postMessage(null);
    };
  } else se = function() {
    I(ne, 0);
  };
  function Ce(b) {
    _ = b, C || (C = !0, se());
  }
  function be(b, O) {
    P = I(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    N || S || (N = !0, Ce(k));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(b) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = p;
    }
    var F = p;
    p = O;
    try {
      return b();
    } finally {
      p = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, O) {
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
    var F = p;
    p = b;
    try {
      return O();
    } finally {
      p = F;
    }
  }, e.unstable_scheduleCallback = function(b, O, F) {
    var G = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? G + F : G) : F = G, b) {
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
    return Q = F + Q, b = { id: g++, callback: O, priorityLevel: b, startTime: F, expirationTime: Q, sortIndex: -1 }, F > G ? (b.sortIndex = F, t(d, b), n(s) === null && b === n(d) && (v ? (m(P), P = -1) : v = !0, be(h, F - G))) : (b.sortIndex = Q, t(s, b), N || S || (N = !0, Ce(k))), b;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(b) {
    var O = p;
    return function() {
      var F = p;
      p = O;
      try {
        return b.apply(this, arguments);
      } finally {
        p = F;
      }
    };
  };
})(mu);
fu.exports = mu;
var ep = fu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp = j, Fe = ep;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hu = /* @__PURE__ */ new Set(), xr = {};
function gn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (xr[e] = t, e = 0; e < t.length; e++) hu.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bo = Object.prototype.hasOwnProperty, np = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fl = {}, Bl = {};
function rp(e) {
  return Bo.call(Bl, e) ? !0 : Bo.call(Fl, e) ? !1 : np.test(e) ? Bl[e] = !0 : (Fl[e] = !0, !1);
}
function ap(e, t, n, r) {
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
function op(e, t, n, r) {
  if (t === null || typeof t > "u" || ap(e, t, n, r)) return !0;
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
function Pe(e, t, n, r, a, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new Pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qi = /[\-:]([a-z])/g;
function Vi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qi,
    Vi
  );
  ve[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qi, Vi);
  ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qi, Vi);
  ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gi(e, t, n, r) {
  var a = ve.hasOwnProperty(t) ? ve[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (op(t, n, a, r) && (n = null), r || a === null ? rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qr = Symbol.for("react.element"), kn = Symbol.for("react.portal"), jn = Symbol.for("react.fragment"), Hi = Symbol.for("react.strict_mode"), Uo = Symbol.for("react.profiler"), gu = Symbol.for("react.provider"), vu = Symbol.for("react.context"), Wi = Symbol.for("react.forward_ref"), qo = Symbol.for("react.suspense"), Vo = Symbol.for("react.suspense_list"), Qi = Symbol.for("react.memo"), $t = Symbol.for("react.lazy"), yu = Symbol.for("react.offscreen"), Ul = Symbol.iterator;
function Yn(e) {
  return e === null || typeof e != "object" ? null : (e = Ul && e[Ul] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, mo;
function rr(e) {
  if (mo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    mo = t && t[1] || "";
  }
  return `
` + mo + e;
}
var ho = !1;
function go(e, t) {
  if (!e || ho) return "";
  ho = !0;
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
`), l = a.length - 1, u = o.length - 1; 1 <= l && 0 <= u && a[l] !== o[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (a[l] !== o[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || a[l] !== o[u]) {
              var s = `
` + a[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    ho = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function ip(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = go(e.type, !1), e;
    case 11:
      return e = go(e.type.render, !1), e;
    case 1:
      return e = go(e.type, !0), e;
    default:
      return "";
  }
}
function Go(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case kn:
      return "Portal";
    case Uo:
      return "Profiler";
    case Hi:
      return "StrictMode";
    case qo:
      return "Suspense";
    case Vo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case vu:
      return (e.displayName || "Context") + ".Consumer";
    case gu:
      return (e._context.displayName || "Context") + ".Provider";
    case Wi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Qi:
      return t = e.displayName || null, t !== null ? t : Go(e.type) || "Memo";
    case $t:
      t = e._payload, e = e._init;
      try {
        return Go(e(t));
      } catch {
      }
  }
  return null;
}
function lp(e) {
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
      return Go(t);
    case 8:
      return t === Hi ? "StrictMode" : "Mode";
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
function Xt(e) {
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
function xu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sp(e) {
  var t = xu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Yr(e) {
  e._valueTracker || (e._valueTracker = sp(e));
}
function wu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = xu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Sa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ho(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ql(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ku(e, t) {
  t = t.checked, t != null && Gi(e, "checked", t, !1);
}
function Wo(e, t) {
  ku(e, t);
  var n = Xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qo(e, t.type, Xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qo(e, t, n) {
  (t !== "number" || Sa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function Ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xt(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function ju(e, t) {
  var n = Xt(t.value), r = Xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Hl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Su(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Su(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Kr, Cu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Kr = Kr || document.createElement("div"), Kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function wr(e, t) {
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
}, up = ["Webkit", "ms", "Moz", "O"];
Object.keys(lr).forEach(function(e) {
  up.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e];
  });
});
function _u(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px";
}
function Nu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = _u(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var cp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Jo(e, t) {
  if (t) {
    if (cp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Xo(e, t) {
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
var Zo = null;
function Yi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ei = null, Rn = null, An = null;
function Wl(e) {
  if (e = qr(e)) {
    if (typeof ei != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Za(t), ei(e.stateNode, e.type, t));
  }
}
function Eu(e) {
  Rn ? An ? An.push(e) : An = [e] : Rn = e;
}
function zu() {
  if (Rn) {
    var e = Rn, t = An;
    if (An = Rn = null, Wl(e), t) for (e = 0; e < t.length; e++) Wl(t[e]);
  }
}
function Pu(e, t) {
  return e(t);
}
function bu() {
}
var vo = !1;
function Mu(e, t, n) {
  if (vo) return e(t, n);
  vo = !0;
  try {
    return Pu(e, t, n);
  } finally {
    vo = !1, (Rn !== null || An !== null) && (bu(), zu());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Za(n);
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
var ti = !1;
if (Et) try {
  var Kn = {};
  Object.defineProperty(Kn, "passive", { get: function() {
    ti = !0;
  } }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
} catch {
  ti = !1;
}
function dp(e, t, n, r, a, o, l, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var sr = !1, Ca = null, _a = !1, ni = null, pp = { onError: function(e) {
  sr = !0, Ca = e;
} };
function fp(e, t, n, r, a, o, l, u, s) {
  sr = !1, Ca = null, dp.apply(pp, arguments);
}
function mp(e, t, n, r, a, o, l, u, s) {
  if (fp.apply(this, arguments), sr) {
    if (sr) {
      var d = Ca;
      sr = !1, Ca = null;
    } else throw Error(E(198));
    _a || (_a = !0, ni = d);
  }
}
function vn(e) {
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
function Tu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ql(e) {
  if (vn(e) !== e) throw Error(E(188));
}
function hp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null) throw Error(E(188));
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
        if (o === n) return Ql(a), e;
        if (o === r) return Ql(a), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = a, r = o;
    else {
      for (var l = !1, u = a.child; u; ) {
        if (u === n) {
          l = !0, n = a, r = o;
          break;
        }
        if (u === r) {
          l = !0, r = a, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            l = !0, n = o, r = a;
            break;
          }
          if (u === r) {
            l = !0, r = o, n = a;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Lu(e) {
  return e = hp(e), e !== null ? Ru(e) : null;
}
function Ru(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ru(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Au = Fe.unstable_scheduleCallback, Yl = Fe.unstable_cancelCallback, gp = Fe.unstable_shouldYield, vp = Fe.unstable_requestPaint, ue = Fe.unstable_now, yp = Fe.unstable_getCurrentPriorityLevel, Ki = Fe.unstable_ImmediatePriority, Iu = Fe.unstable_UserBlockingPriority, Na = Fe.unstable_NormalPriority, xp = Fe.unstable_LowPriority, Du = Fe.unstable_IdlePriority, Ya = null, ht = null;
function wp(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var lt = Math.clz32 ? Math.clz32 : Sp, kp = Math.log, jp = Math.LN2;
function Sp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (kp(e) / jp | 0) | 0;
}
var Jr = 64, Xr = 4194304;
function or(e) {
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
function Ea(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~a;
    u !== 0 ? r = or(u) : (o &= l, o !== 0 && (r = or(o)));
  } else l = n & ~a, l !== 0 ? r = or(l) : o !== 0 && (r = or(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - lt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Cp(e, t) {
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
function _p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - lt(o), u = 1 << l, s = a[l];
    s === -1 ? (!(u & n) || u & r) && (a[l] = Cp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ri(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $u() {
  var e = Jr;
  return Jr <<= 1, !(Jr & 4194240) && (Jr = 64), e;
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Br(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function Np(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - lt(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function Ji(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var W = 0;
function Ou(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fu, Xi, Bu, Uu, qu, ai = !1, Zr = [], Vt = null, Gt = null, Ht = null, jr = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Map(), Ft = [], Ep = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Kl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ht = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sr.delete(t.pointerId);
  }
}
function Jn(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = qr(t), t !== null && Xi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function zp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Vt = Jn(Vt, e, t, n, r, a), !0;
    case "dragenter":
      return Gt = Jn(Gt, e, t, n, r, a), !0;
    case "mouseover":
      return Ht = Jn(Ht, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return jr.set(o, Jn(jr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Sr.set(o, Jn(Sr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Vu(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Tu(n), t !== null) {
          e.blockedOn = t, qu(e.priority, function() {
            Bu(n);
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
function pa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Zo = r, n.target.dispatchEvent(r), Zo = null;
    } else return t = qr(n), t !== null && Xi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Jl(e, t, n) {
  pa(e) && n.delete(t);
}
function Pp() {
  ai = !1, Vt !== null && pa(Vt) && (Vt = null), Gt !== null && pa(Gt) && (Gt = null), Ht !== null && pa(Ht) && (Ht = null), jr.forEach(Jl), Sr.forEach(Jl);
}
function Xn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ai || (ai = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Pp)));
}
function Cr(e) {
  function t(a) {
    return Xn(a, e);
  }
  if (0 < Zr.length) {
    Xn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vt !== null && Xn(Vt, e), Gt !== null && Xn(Gt, e), Ht !== null && Xn(Ht, e), jr.forEach(t), Sr.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) Vu(n), n.blockedOn === null && Ft.shift();
}
var In = Mt.ReactCurrentBatchConfig, za = !0;
function bp(e, t, n, r) {
  var a = W, o = In.transition;
  In.transition = null;
  try {
    W = 1, Zi(e, t, n, r);
  } finally {
    W = a, In.transition = o;
  }
}
function Mp(e, t, n, r) {
  var a = W, o = In.transition;
  In.transition = null;
  try {
    W = 4, Zi(e, t, n, r);
  } finally {
    W = a, In.transition = o;
  }
}
function Zi(e, t, n, r) {
  if (za) {
    var a = oi(e, t, n, r);
    if (a === null) zo(e, t, r, Pa, n), Kl(e, r);
    else if (zp(a, e, t, n, r)) r.stopPropagation();
    else if (Kl(e, r), t & 4 && -1 < Ep.indexOf(e)) {
      for (; a !== null; ) {
        var o = qr(a);
        if (o !== null && Fu(o), o = oi(e, t, n, r), o === null && zo(e, t, r, Pa, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else zo(e, t, r, null, n);
  }
}
var Pa = null;
function oi(e, t, n, r) {
  if (Pa = null, e = Yi(r), e = on(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Tu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Pa = e, null;
}
function Gu(e) {
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
      switch (yp()) {
        case Ki:
          return 1;
        case Iu:
          return 4;
        case Na:
        case xp:
          return 16;
        case Du:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null, el = null, fa = null;
function Hu() {
  if (fa) return fa;
  var e, t = el, n = t.length, r, a = "value" in Ut ? Ut.value : Ut.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[o - r]; r++) ;
  return fa = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ma(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ea() {
  return !0;
}
function Xl() {
  return !1;
}
function Ue(e) {
  function t(n, r, a, o, l) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ea : Xl, this.isPropagationStopped = Xl, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ea);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ea);
  }, persist: function() {
  }, isPersistent: ea }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, tl = Ue(Wn), Ur = oe({}, Wn, { view: 0, detail: 0 }), Tp = Ue(Ur), xo, wo, Zn, Ka = oe({}, Ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (xo = e.screenX - Zn.screenX, wo = e.screenY - Zn.screenY) : wo = xo = 0, Zn = e), xo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : wo;
} }), Zl = Ue(Ka), Lp = oe({}, Ka, { dataTransfer: 0 }), Rp = Ue(Lp), Ap = oe({}, Ur, { relatedTarget: 0 }), ko = Ue(Ap), Ip = oe({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dp = Ue(Ip), $p = oe({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Op = Ue($p), Fp = oe({}, Wn, { data: 0 }), es = Ue(Fp), Bp = {
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
}, Up = {
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
}, qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Vp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qp[e]) ? !!t[e] : !1;
}
function nl() {
  return Vp;
}
var Gp = oe({}, Ur, { key: function(e) {
  if (e.key) {
    var t = Bp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ma(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Up[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nl, charCode: function(e) {
  return e.type === "keypress" ? ma(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ma(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Hp = Ue(Gp), Wp = oe({}, Ka, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ts = Ue(Wp), Qp = oe({}, Ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nl }), Yp = Ue(Qp), Kp = oe({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = Ue(Kp), Xp = oe({}, Ka, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zp = Ue(Xp), ef = [9, 13, 27, 32], rl = Et && "CompositionEvent" in window, ur = null;
Et && "documentMode" in document && (ur = document.documentMode);
var tf = Et && "TextEvent" in window && !ur, Wu = Et && (!rl || ur && 8 < ur && 11 >= ur), ns = " ", rs = !1;
function Qu(e, t) {
  switch (e) {
    case "keyup":
      return ef.indexOf(t.keyCode) !== -1;
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
function Yu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function nf(e, t) {
  switch (e) {
    case "compositionend":
      return Yu(t);
    case "keypress":
      return t.which !== 32 ? null : (rs = !0, ns);
    case "textInput":
      return e = t.data, e === ns && rs ? null : e;
    default:
      return null;
  }
}
function rf(e, t) {
  if (Sn) return e === "compositionend" || !rl && Qu(e, t) ? (e = Hu(), fa = el = Ut = null, Sn = !1, e) : null;
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
      return Wu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var af = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!af[e.type] : t === "textarea";
}
function Ku(e, t, n, r) {
  Eu(r), t = ba(t, "onChange"), 0 < t.length && (n = new tl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var cr = null, _r = null;
function of(e) {
  lc(e, 0);
}
function Ja(e) {
  var t = Nn(e);
  if (wu(t)) return e;
}
function lf(e, t) {
  if (e === "change") return t;
}
var Ju = !1;
if (Et) {
  var jo;
  if (Et) {
    var So = "oninput" in document;
    if (!So) {
      var os = document.createElement("div");
      os.setAttribute("oninput", "return;"), So = typeof os.oninput == "function";
    }
    jo = So;
  } else jo = !1;
  Ju = jo && (!document.documentMode || 9 < document.documentMode);
}
function is() {
  cr && (cr.detachEvent("onpropertychange", Xu), _r = cr = null);
}
function Xu(e) {
  if (e.propertyName === "value" && Ja(_r)) {
    var t = [];
    Ku(t, _r, e, Yi(e)), Mu(of, t);
  }
}
function sf(e, t, n) {
  e === "focusin" ? (is(), cr = t, _r = n, cr.attachEvent("onpropertychange", Xu)) : e === "focusout" && is();
}
function uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ja(_r);
}
function cf(e, t) {
  if (e === "click") return Ja(t);
}
function df(e, t) {
  if (e === "input" || e === "change") return Ja(t);
}
function pf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : pf;
function Nr(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Bo.call(t, a) || !ut(e[a], t[a])) return !1;
  }
  return !0;
}
function ls(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ss(e, t) {
  var n = ls(e);
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
    n = ls(n);
  }
}
function Zu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ec() {
  for (var e = window, t = Sa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sa(e.document);
  }
  return t;
}
function al(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ff(e) {
  var t = ec(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
    if (r !== null && al(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = ss(n, o);
        var l = ss(
          n,
          r
        );
        a && l && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var mf = Et && "documentMode" in document && 11 >= document.documentMode, Cn = null, ii = null, dr = null, li = !1;
function us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li || Cn == null || Cn !== Sa(r) || (r = Cn, "selectionStart" in r && al(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), dr && Nr(dr, r) || (dr = r, r = ba(ii, "onSelect"), 0 < r.length && (t = new tl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Cn)));
}
function ta(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var _n = { animationend: ta("Animation", "AnimationEnd"), animationiteration: ta("Animation", "AnimationIteration"), animationstart: ta("Animation", "AnimationStart"), transitionend: ta("Transition", "TransitionEnd") }, Co = {}, tc = {};
Et && (tc = document.createElement("div").style, "AnimationEvent" in window || (delete _n.animationend.animation, delete _n.animationiteration.animation, delete _n.animationstart.animation), "TransitionEvent" in window || delete _n.transitionend.transition);
function Xa(e) {
  if (Co[e]) return Co[e];
  if (!_n[e]) return e;
  var t = _n[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in tc) return Co[e] = t[n];
  return e;
}
var nc = Xa("animationend"), rc = Xa("animationiteration"), ac = Xa("animationstart"), oc = Xa("transitionend"), ic = /* @__PURE__ */ new Map(), cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
  ic.set(e, t), gn(t, [e]);
}
for (var _o = 0; _o < cs.length; _o++) {
  var No = cs[_o], hf = No.toLowerCase(), gf = No[0].toUpperCase() + No.slice(1);
  en(hf, "on" + gf);
}
en(nc, "onAnimationEnd");
en(rc, "onAnimationIteration");
en(ac, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(oc, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
function ds(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, mp(r, t, void 0, e), e.currentTarget = null;
}
function lc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, d = u.currentTarget;
        if (u = u.listener, s !== o && a.isPropagationStopped()) break e;
        ds(a, u, d), o = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, d = u.currentTarget, u = u.listener, s !== o && a.isPropagationStopped()) break e;
        ds(a, u, d), o = s;
      }
    }
  }
  if (_a) throw e = ni, _a = !1, ni = null, e;
}
function X(e, t) {
  var n = t[pi];
  n === void 0 && (n = t[pi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (sc(t, e, 2, !1), n.add(r));
}
function Eo(e, t, n) {
  var r = 0;
  t && (r |= 4), sc(n, e, r, t);
}
var na = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[na]) {
    e[na] = !0, hu.forEach(function(n) {
      n !== "selectionchange" && (vf.has(n) || Eo(n, !1, e), Eo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[na] || (t[na] = !0, Eo("selectionchange", !1, t));
  }
}
function sc(e, t, n, r) {
  switch (Gu(t)) {
    case 1:
      var a = bp;
      break;
    case 4:
      a = Mp;
      break;
    default:
      a = Zi;
  }
  n = a.bind(null, t, n, e), a = void 0, !ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function zo(e, t, n, r, a) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === a || u.nodeType === 8 && u.parentNode === a) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var s = l.tag;
        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === a || s.nodeType === 8 && s.parentNode === a)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = on(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = o = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Mu(function() {
    var d = o, g = Yi(n), y = [];
    e: {
      var p = ic.get(e);
      if (p !== void 0) {
        var S = tl, N = e;
        switch (e) {
          case "keypress":
            if (ma(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Hp;
            break;
          case "focusin":
            N = "focus", S = ko;
            break;
          case "focusout":
            N = "blur", S = ko;
            break;
          case "beforeblur":
          case "afterblur":
            S = ko;
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
            S = Zl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Rp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Yp;
            break;
          case nc:
          case rc:
          case ac:
            S = Dp;
            break;
          case oc:
            S = Jp;
            break;
          case "scroll":
            S = Tp;
            break;
          case "wheel":
            S = Zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ts;
        }
        var v = (t & 4) !== 0, I = !v && e === "scroll", m = v ? p !== null ? p + "Capture" : null : p;
        v = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var h = f.stateNode;
          if (f.tag === 5 && h !== null && (f = h, m !== null && (h = kr(c, m), h != null && v.push(zr(c, h, f)))), I) break;
          c = c.return;
        }
        0 < v.length && (p = new S(p, N, null, n, g), y.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== Zo && (N = n.relatedTarget || n.fromElement) && (on(N) || N[zt])) break e;
        if ((S || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (N = n.relatedTarget || n.toElement, S = d, N = N ? on(N) : null, N !== null && (I = vn(N), N !== I || N.tag !== 5 && N.tag !== 6) && (N = null)) : (S = null, N = d), S !== N)) {
          if (v = Zl, h = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = ts, h = "onPointerLeave", m = "onPointerEnter", c = "pointer"), I = S == null ? p : Nn(S), f = N == null ? p : Nn(N), p = new v(h, c + "leave", S, n, g), p.target = I, p.relatedTarget = f, h = null, on(g) === d && (v = new v(m, c + "enter", N, n, g), v.target = f, v.relatedTarget = I, h = v), I = h, S && N) t: {
            for (v = S, m = N, c = 0, f = v; f; f = wn(f)) c++;
            for (f = 0, h = m; h; h = wn(h)) f++;
            for (; 0 < c - f; ) v = wn(v), c--;
            for (; 0 < f - c; ) m = wn(m), f--;
            for (; c--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = wn(v), m = wn(m);
            }
            v = null;
          }
          else v = null;
          S !== null && ps(y, p, S, v, !1), N !== null && I !== null && ps(y, I, N, v, !0);
        }
      }
      e: {
        if (p = d ? Nn(d) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var k = lf;
        else if (as(p)) if (Ju) k = df;
        else {
          k = uf;
          var C = sf;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = cf);
        if (k && (k = k(e, d))) {
          Ku(y, k, n, g);
          break e;
        }
        C && C(e, p, d), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Qo(p, "number", p.value);
      }
      switch (C = d ? Nn(d) : window, e) {
        case "focusin":
          (as(C) || C.contentEditable === "true") && (Cn = C, ii = d, dr = null);
          break;
        case "focusout":
          dr = ii = Cn = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          li = !1, us(y, n, g);
          break;
        case "selectionchange":
          if (mf) break;
        case "keydown":
        case "keyup":
          us(y, n, g);
      }
      var _;
      if (rl) e: {
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
      else Sn ? Qu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Wu && n.locale !== "ko" && (Sn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Sn && (_ = Hu()) : (Ut = g, el = "value" in Ut ? Ut.value : Ut.textContent, Sn = !0)), C = ba(d, P), 0 < C.length && (P = new es(P, e, null, n, g), y.push({ event: P, listeners: C }), _ ? P.data = _ : (_ = Yu(n), _ !== null && (P.data = _)))), (_ = tf ? nf(e, n) : rf(e, n)) && (d = ba(d, "onBeforeInput"), 0 < d.length && (g = new es("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: d }), g.data = _));
    }
    lc(y, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ba(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = kr(e, n), o != null && r.unshift(zr(e, o, a)), o = kr(e, t), o != null && r.push(zr(e, o, a))), e = e.return;
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ps(e, t, n, r, a) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && d !== null && (u = d, a ? (s = kr(n, o), s != null && l.unshift(zr(n, s, u))) : a || (s = kr(n, o), s != null && l.push(zr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var yf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e).replace(yf, `
`).replace(xf, "");
}
function ra(e, t, n) {
  if (t = fs(t), fs(e) !== t && n) throw Error(E(425));
}
function Ma() {
}
var si = null, ui = null;
function ci(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var di = typeof setTimeout == "function" ? setTimeout : void 0, wf = typeof clearTimeout == "function" ? clearTimeout : void 0, ms = typeof Promise == "function" ? Promise : void 0, kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ms < "u" ? function(e) {
  return ms.resolve(null).then(e).catch(jf);
} : di;
function jf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Po(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Cr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Cr(t);
}
function Wt(e) {
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
function hs(e) {
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
var Qn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Qn, Pr = "__reactProps$" + Qn, zt = "__reactContainer$" + Qn, pi = "__reactEvents$" + Qn, Sf = "__reactListeners$" + Qn, Cf = "__reactHandles$" + Qn;
function on(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = hs(e); e !== null; ) {
        if (n = e[mt]) return n;
        e = hs(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function qr(e) {
  return e = e[mt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Za(e) {
  return e[Pr] || null;
}
var fi = [], En = -1;
function tn(e) {
  return { current: e };
}
function Z(e) {
  0 > En || (e.current = fi[En], fi[En] = null, En--);
}
function J(e, t) {
  En++, fi[En] = e.current, e.current = t;
}
var Zt = {}, je = tn(Zt), Re = tn(!1), dn = Zt;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ae(e) {
  return e = e.childContextTypes, e != null;
}
function Ta() {
  Z(Re), Z(je);
}
function gs(e, t, n) {
  if (je.current !== Zt) throw Error(E(168));
  J(je, t), J(Re, n);
}
function uc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, lp(e) || "Unknown", a));
  return oe({}, n, r);
}
function La(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, dn = je.current, J(je, e), J(Re, Re.current), !0;
}
function vs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = uc(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, Z(Re), Z(je), J(je, e)) : Z(Re), J(Re, n);
}
var jt = null, eo = !1, bo = !1;
function cc(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function _f(e) {
  eo = !0, cc(e);
}
function nn() {
  if (!bo && jt !== null) {
    bo = !0;
    var e = 0, t = W;
    try {
      var n = jt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      jt = null, eo = !1;
    } catch (a) {
      throw jt !== null && (jt = jt.slice(e + 1)), Au(Ki, nn), a;
    } finally {
      W = t, bo = !1;
    }
  }
  return null;
}
var zn = [], Pn = 0, Ra = null, Aa = 0, Ge = [], He = 0, pn = null, Ct = 1, _t = "";
function rn(e, t) {
  zn[Pn++] = Aa, zn[Pn++] = Ra, Ra = e, Aa = t;
}
function dc(e, t, n) {
  Ge[He++] = Ct, Ge[He++] = _t, Ge[He++] = pn, pn = e;
  var r = Ct;
  e = _t;
  var a = 32 - lt(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - lt(t) + a;
  if (30 < o) {
    var l = a - a % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, Ct = 1 << 32 - lt(t) + a | n << a | r, _t = o + e;
  } else Ct = 1 << o | n << a | r, _t = e;
}
function ol(e) {
  e.return !== null && (rn(e, 1), dc(e, 1, 0));
}
function il(e) {
  for (; e === Ra; ) Ra = zn[--Pn], zn[Pn] = null, Aa = zn[--Pn], zn[Pn] = null;
  for (; e === pn; ) pn = Ge[--He], Ge[He] = null, _t = Ge[--He], Ge[He] = null, Ct = Ge[--He], Ge[He] = null;
}
var Oe = null, $e = null, ee = !1, it = null;
function pc(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ys(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? { id: Ct, overflow: _t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hi(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!ys(e, t)) {
        if (mi(e)) throw Error(E(418));
        t = Wt(n.nextSibling);
        var r = Oe;
        t && ys(e, t) ? pc(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Oe = e);
      }
    } else {
      if (mi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Oe = e;
    }
  }
}
function xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function aa(e) {
  if (e !== Oe) return !1;
  if (!ee) return xs(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ci(e.type, e.memoizedProps)), t && (t = $e)) {
    if (mi(e)) throw fc(), Error(E(418));
    for (; t; ) pc(e, t), t = Wt(t.nextSibling);
  }
  if (xs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Oe ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function fc() {
  for (var e = $e; e; ) e = Wt(e.nextSibling);
}
function Bn() {
  $e = Oe = null, ee = !1;
}
function ll(e) {
  it === null ? it = [e] : it.push(e);
}
var Nf = Mt.ReactCurrentBatchConfig;
function er(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = a.refs;
        l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function oa(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ws(e) {
  var t = e._init;
  return t(e._payload);
}
function mc(e) {
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
    return m = Jt(m, c), m.index = 0, m.sibling = null, m;
  }
  function o(m, c, f) {
    return m.index = f, e ? (f = m.alternate, f !== null ? (f = f.index, f < c ? (m.flags |= 2, c) : f) : (m.flags |= 2, c)) : (m.flags |= 1048576, c);
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, c, f, h) {
    return c === null || c.tag !== 6 ? (c = Do(f, m.mode, h), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function s(m, c, f, h) {
    var k = f.type;
    return k === jn ? g(m, c, f.props.children, h, f.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === $t && ws(k) === c.type) ? (h = a(c, f.props), h.ref = er(m, c, f), h.return = m, h) : (h = ka(f.type, f.key, f.props, null, m.mode, h), h.ref = er(m, c, f), h.return = m, h);
  }
  function d(m, c, f, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = $o(f, m.mode, h), c.return = m, c) : (c = a(c, f.children || []), c.return = m, c);
  }
  function g(m, c, f, h, k) {
    return c === null || c.tag !== 7 ? (c = cn(f, m.mode, h, k), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function y(m, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Do("" + c, m.mode, f), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Qr:
          return f = ka(c.type, c.key, c.props, null, m.mode, f), f.ref = er(m, null, c), f.return = m, f;
        case kn:
          return c = $o(c, m.mode, f), c.return = m, c;
        case $t:
          var h = c._init;
          return y(m, h(c._payload), f);
      }
      if (ar(c) || Yn(c)) return c = cn(c, m.mode, f, null), c.return = m, c;
      oa(m, c);
    }
    return null;
  }
  function p(m, c, f, h) {
    var k = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return k !== null ? null : u(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Qr:
          return f.key === k ? s(m, c, f, h) : null;
        case kn:
          return f.key === k ? d(m, c, f, h) : null;
        case $t:
          return k = f._init, p(
            m,
            c,
            k(f._payload),
            h
          );
      }
      if (ar(f) || Yn(f)) return k !== null ? null : g(m, c, f, h, null);
      oa(m, f);
    }
    return null;
  }
  function S(m, c, f, h, k) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(f) || null, u(c, m, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Qr:
          return m = m.get(h.key === null ? f : h.key) || null, s(c, m, h, k);
        case kn:
          return m = m.get(h.key === null ? f : h.key) || null, d(c, m, h, k);
        case $t:
          var C = h._init;
          return S(m, c, f, C(h._payload), k);
      }
      if (ar(h) || Yn(h)) return m = m.get(f) || null, g(c, m, h, k, null);
      oa(c, h);
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
    if (P === f.length) return n(m, _), ee && rn(m, P), k;
    if (_ === null) {
      for (; P < f.length; P++) _ = y(m, f[P], h), _ !== null && (c = o(_, c, P), C === null ? k = _ : C.sibling = _, C = _);
      return ee && rn(m, P), k;
    }
    for (_ = r(m, _); P < f.length; P++) w = S(_, m, P, f[P], h), w !== null && (e && w.alternate !== null && _.delete(w.key === null ? P : w.key), c = o(w, c, P), C === null ? k = w : C.sibling = w, C = w);
    return e && _.forEach(function(M) {
      return t(m, M);
    }), ee && rn(m, P), k;
  }
  function v(m, c, f, h) {
    var k = Yn(f);
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
    ), ee && rn(m, P), k;
    if (_ === null) {
      for (; !x.done; P++, x = f.next()) x = y(m, x.value, h), x !== null && (c = o(x, c, P), C === null ? k = x : C.sibling = x, C = x);
      return ee && rn(m, P), k;
    }
    for (_ = r(m, _); !x.done; P++, x = f.next()) x = S(_, m, P, x.value, h), x !== null && (e && x.alternate !== null && _.delete(x.key === null ? P : x.key), c = o(x, c, P), C === null ? k = x : C.sibling = x, C = x);
    return e && _.forEach(function(ne) {
      return t(m, ne);
    }), ee && rn(m, P), k;
  }
  function I(m, c, f, h) {
    if (typeof f == "object" && f !== null && f.type === jn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Qr:
          e: {
            for (var k = f.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (k = f.type, k === jn) {
                  if (C.tag === 7) {
                    n(m, C.sibling), c = a(C, f.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === $t && ws(k) === C.type) {
                  n(m, C.sibling), c = a(C, f.props), c.ref = er(m, C, f), c.return = m, m = c;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            f.type === jn ? (c = cn(f.props.children, m.mode, h, f.key), c.return = m, m = c) : (h = ka(f.type, f.key, f.props, null, m.mode, h), h.ref = er(m, c, f), h.return = m, m = h);
          }
          return l(m);
        case kn:
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
            c = $o(f, m.mode, h), c.return = m, m = c;
          }
          return l(m);
        case $t:
          return C = f._init, I(m, c, C(f._payload), h);
      }
      if (ar(f)) return N(m, c, f, h);
      if (Yn(f)) return v(m, c, f, h);
      oa(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, f), c.return = m, m = c) : (n(m, c), c = Do(f, m.mode, h), c.return = m, m = c), l(m)) : n(m, c);
  }
  return I;
}
var Un = mc(!0), hc = mc(!1), Ia = tn(null), Da = null, bn = null, sl = null;
function ul() {
  sl = bn = Da = null;
}
function cl(e) {
  var t = Ia.current;
  Z(Ia), e._currentValue = t;
}
function gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Dn(e, t) {
  Da = e, sl = bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function Ye(e) {
  var t = e._currentValue;
  if (sl !== e) if (e = { context: e, memoizedValue: t, next: null }, bn === null) {
    if (Da === null) throw Error(E(308));
    bn = e, Da.dependencies = { lanes: 0, firstContext: e };
  } else bn = bn.next = e;
  return t;
}
var ln = null;
function dl(e) {
  ln === null ? ln = [e] : ln.push(e);
}
function gc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, dl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Pt(e, r);
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ot = !1;
function pl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Pt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, dl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Pt(e, n);
}
function ha(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ji(e, n);
  }
}
function ks(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? a = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? a = o = t : o = o.next = t;
    } else a = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function $a(e, t, n, r) {
  var a = e.updateQueue;
  Ot = !1;
  var o = a.firstBaseUpdate, l = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, d = s.next;
    s.next = null, l === null ? o = d : l.next = d, l = s;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== l && (u === null ? g.firstBaseUpdate = d : u.next = d, g.lastBaseUpdate = s));
  }
  if (o !== null) {
    var y = a.baseState;
    l = 0, g = d = s = null, u = o;
    do {
      var p = u.lane, S = u.eventTime;
      if ((r & p) === p) {
        g !== null && (g = g.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var N = e, v = u;
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
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [u] : p.push(u));
      } else S = { eventTime: S, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (d = g = S, s = y) : g = g.next = S, l |= p;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (s = y), a.baseState = s, a.firstBaseUpdate = d, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        l |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    mn |= l, e.lanes = l, e.memoizedState = y;
  }
}
function js(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var Vr = {}, gt = tn(Vr), br = tn(Vr), Mr = tn(Vr);
function sn(e) {
  if (e === Vr) throw Error(E(174));
  return e;
}
function fl(e, t) {
  switch (J(Mr, t), J(br, e), J(gt, Vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ko(t, e);
  }
  Z(gt), J(gt, t);
}
function qn() {
  Z(gt), Z(br), Z(Mr);
}
function yc(e) {
  sn(Mr.current);
  var t = sn(gt.current), n = Ko(t, e.type);
  t !== n && (J(br, e), J(gt, n));
}
function ml(e) {
  br.current === e && (Z(gt), Z(br));
}
var re = tn(0);
function Oa(e) {
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
var Mo = [];
function hl() {
  for (var e = 0; e < Mo.length; e++) Mo[e]._workInProgressVersionPrimary = null;
  Mo.length = 0;
}
var ga = Mt.ReactCurrentDispatcher, To = Mt.ReactCurrentBatchConfig, fn = 0, ae = null, de = null, fe = null, Fa = !1, pr = !1, Tr = 0, Ef = 0;
function xe() {
  throw Error(E(321));
}
function gl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
  return !0;
}
function vl(e, t, n, r, a, o) {
  if (fn = o, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ga.current = e === null || e.memoizedState === null ? Mf : Tf, e = n(r, a), pr) {
    o = 0;
    do {
      if (pr = !1, Tr = 0, 25 <= o) throw Error(E(301));
      o += 1, fe = de = null, t.updateQueue = null, ga.current = Lf, e = n(r, a);
    } while (pr);
  }
  if (ga.current = Ba, t = de !== null && de.next !== null, fn = 0, fe = de = ae = null, Fa = !1, t) throw Error(E(300));
  return e;
}
function yl() {
  var e = Tr !== 0;
  return Tr = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return fe === null ? ae.memoizedState = fe = e : fe = fe.next = e, fe;
}
function Ke() {
  if (de === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = fe === null ? ae.memoizedState : fe.next;
  if (t !== null) fe = t, de = e;
  else {
    if (e === null) throw Error(E(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, fe === null ? ae.memoizedState = fe = e : fe = fe.next = e;
  }
  return fe;
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lo(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = de, a = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var l = a.next;
      a.next = o.next, o.next = l;
    }
    r.baseQueue = a = o, n.pending = null;
  }
  if (a !== null) {
    o = a.next, r = r.baseState;
    var u = l = null, s = null, d = o;
    do {
      var g = d.lane;
      if ((fn & g) === g) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        s === null ? (u = s = y, l = r) : s = s.next = y, ae.lanes |= g, mn |= g;
      }
      d = d.next;
    } while (d !== null && d !== o);
    s === null ? l = r : s.next = u, ut(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ae.lanes |= o, mn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ro(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var l = a = a.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== a);
    ut(o, t.memoizedState) || (Le = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function xc() {
}
function wc(e, t) {
  var n = ae, r = Ke(), a = t(), o = !ut(r.memoizedState, a);
  if (o && (r.memoizedState = a, Le = !0), r = r.queue, xl(Sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || fe !== null && fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, jc.bind(null, n, r, a, t), void 0, null), me === null) throw Error(E(349));
    fn & 30 || kc(n, t, a);
  }
  return a;
}
function kc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cc(t) && _c(e);
}
function Sc(e, t, n) {
  return n(function() {
    Cc(t) && _c(e);
  });
}
function Cc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function _c(e) {
  var t = Pt(e, 1);
  t !== null && st(t, e, 1, -1);
}
function Ss(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = bf.bind(null, ae, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nc() {
  return Ke().memoizedState;
}
function va(e, t, n, r) {
  var a = ft();
  ae.flags |= e, a.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function to(e, t, n, r) {
  var a = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var l = de.memoizedState;
    if (o = l.destroy, r !== null && gl(r, l.deps)) {
      a.memoizedState = Rr(t, n, o, r);
      return;
    }
  }
  ae.flags |= e, a.memoizedState = Rr(1 | t, n, o, r);
}
function Cs(e, t) {
  return va(8390656, 8, e, t);
}
function xl(e, t) {
  return to(2048, 8, e, t);
}
function Ec(e, t) {
  return to(4, 2, e, t);
}
function zc(e, t) {
  return to(4, 4, e, t);
}
function Pc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, to(4, 4, Pc.bind(null, t, e), n);
}
function wl() {
}
function Mc(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tc(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Lc(e, t, n) {
  return fn & 21 ? (ut(n, t) || (n = $u(), ae.lanes |= n, mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function zf(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = To.transition;
  To.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, To.transition = r;
  }
}
function Rc() {
  return Ke().memoizedState;
}
function Pf(e, t, n) {
  var r = Kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ac(e)) Ic(t, n);
  else if (n = gc(e, t, n, r), n !== null) {
    var a = Ee();
    st(n, e, r, a), Dc(n, t, r);
  }
}
function bf(e, t, n) {
  var r = Kt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ac(e)) Ic(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, u = o(l, n);
      if (a.hasEagerState = !0, a.eagerState = u, ut(u, l)) {
        var s = t.interleaved;
        s === null ? (a.next = a, dl(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = gc(e, t, a, r), n !== null && (a = Ee(), st(n, e, r, a), Dc(n, t, r));
  }
}
function Ac(e) {
  var t = e.alternate;
  return e === ae || t !== null && t === ae;
}
function Ic(e, t) {
  pr = Fa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Dc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ji(e, n);
  }
}
var Ba = { readContext: Ye, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, Mf = { readContext: Ye, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ye, useEffect: Cs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, va(
    4194308,
    4,
    Pc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return va(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return va(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ft();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ft();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pf.bind(null, ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ss, useDebugValue: wl, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = Ss(!1), t = e[0];
  return e = zf.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ae, a = ft();
  if (ee) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), me === null) throw Error(E(349));
    fn & 30 || kc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Cs(Sc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Rr(9, jc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = me.identifierPrefix;
  if (ee) {
    var n = _t, r = Ct;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ef++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Tf = {
  readContext: Ye,
  useCallback: Mc,
  useContext: Ye,
  useEffect: xl,
  useImperativeHandle: bc,
  useInsertionEffect: Ec,
  useLayoutEffect: zc,
  useMemo: Tc,
  useReducer: Lo,
  useRef: Nc,
  useState: function() {
    return Lo(Lr);
  },
  useDebugValue: wl,
  useDeferredValue: function(e) {
    var t = Ke();
    return Lc(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Lo(Lr)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: xc,
  useSyncExternalStore: wc,
  useId: Rc,
  unstable_isNewReconciler: !1
}, Lf = { readContext: Ye, useCallback: Mc, useContext: Ye, useEffect: xl, useImperativeHandle: bc, useInsertionEffect: Ec, useLayoutEffect: zc, useMemo: Tc, useReducer: Ro, useRef: Nc, useState: function() {
  return Ro(Lr);
}, useDebugValue: wl, useDeferredValue: function(e) {
  var t = Ke();
  return de === null ? t.memoizedState = e : Lc(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Ro(Lr)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: xc, useSyncExternalStore: wc, useId: Rc, unstable_isNewReconciler: !1 };
function at(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var no = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), a = Kt(e), o = Nt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (st(t, e, a, r), ha(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), a = Kt(e), o = Nt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (st(t, e, a, r), ha(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = Kt(e), a = Nt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Qt(e, a, r), t !== null && (st(t, e, r, n), ha(t, e, r));
} };
function _s(e, t, n, r, a, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(a, o) : !0;
}
function $c(e, t, n) {
  var r = !1, a = Zt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ye(o) : (a = Ae(t) ? dn : je.current, r = t.contextTypes, o = (r = r != null) ? Fn(e, a) : Zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = no, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ns(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && no.enqueueReplaceState(t, t.state, null);
}
function yi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, pl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Ye(o) : (o = Ae(t) ? dn : je.current, a.context = Fn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (vi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && no.enqueueReplaceState(a, a.state, null), $a(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += ip(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Ao(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Rf = typeof WeakMap == "function" ? WeakMap : Map;
function Oc(e, t, n) {
  n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qa || (qa = !0, Pi = r), xi(e, t);
  }, n;
}
function Fc(e, t, n) {
  n = Nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      xi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    xi(e, t), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Es(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Qf.bind(null, e, t, n), t.then(e, e));
}
function zs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ps(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Af = Mt.ReactCurrentOwner, Le = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? hc(t, null, n, r) : Un(t, e.child, n, r);
}
function bs(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Dn(t, a), r = vl(e, t, n, r, o, a), n = yl(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (ee && n && ol(t), t.flags |= 1, Ne(e, t, r, a), t.child);
}
function Ms(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !zl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Bc(e, t, o, r, a)) : (e = ka(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Nr, n(l, r) && e.ref === t.ref) return bt(e, t, a);
  }
  return t.flags |= 1, e = Jt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Bc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Nr(o, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, bt(e, t, a);
  }
  return wi(e, t, n, r, a);
}
function Uc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Tn, De), De |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Tn, De), De |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, J(Tn, De), De |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, J(Tn, De), De |= r;
  return Ne(e, t, a, n), t.child;
}
function qc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wi(e, t, n, r, a) {
  var o = Ae(n) ? dn : je.current;
  return o = Fn(t, o), Dn(t, a), n = vl(e, t, n, r, o, a), r = yl(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (ee && r && ol(t), t.flags |= 1, Ne(e, t, n, a), t.child);
}
function Ts(e, t, n, r, a) {
  if (Ae(n)) {
    var o = !0;
    La(t);
  } else o = !1;
  if (Dn(t, a), t.stateNode === null) ya(e, t), $c(t, n, r), yi(t, n, r, a), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Ye(d) : (d = Ae(n) ? dn : je.current, d = Fn(t, d));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    y || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== d) && Ns(t, l, r, d), Ot = !1;
    var p = t.memoizedState;
    l.state = p, $a(t, r, l, a), s = t.memoizedState, u !== r || p !== s || Re.current || Ot ? (typeof g == "function" && (vi(t, n, g, r), s = t.memoizedState), (u = Ot || _s(t, n, u, r, p, s, d)) ? (y || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = d, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, vc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : at(t.type, u), l.props = d, y = t.pendingProps, p = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ye(s) : (s = Ae(n) ? dn : je.current, s = Fn(t, s));
    var S = n.getDerivedStateFromProps;
    (g = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== y || p !== s) && Ns(t, l, r, s), Ot = !1, p = t.memoizedState, l.state = p, $a(t, r, l, a);
    var N = t.memoizedState;
    u !== y || p !== N || Re.current || Ot ? (typeof S == "function" && (vi(t, n, S, r), N = t.memoizedState), (d = Ot || _s(t, n, d, r, p, N, s) || !1) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, N, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, N, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), l.props = r, l.state = N, l.context = s, r = d) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ki(e, t, n, r, o, a);
}
function ki(e, t, n, r, a, o) {
  qc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && vs(t, n, !1), bt(e, t, o);
  r = t.stateNode, Af.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Un(t, e.child, null, o), t.child = Un(t, null, u, o)) : Ne(e, t, u, o), t.memoizedState = r.state, a && vs(t, n, !0), t.child;
}
function Vc(e) {
  var t = e.stateNode;
  t.pendingContext ? gs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gs(e, t.context, !1), fl(e, t.containerInfo);
}
function Ls(e, t, n, r, a) {
  return Bn(), ll(a), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Si(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gc(e, t, n) {
  var r = t.pendingProps, a = re.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), J(re, a & 1), e === null)
    return hi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = oo(l, r, 0, null), e = cn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Si(n), t.memoizedState = ji, e) : kl(t, l));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return If(e, t, l, r, u, a, n);
  if (o) {
    o = r.fallback, l = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Jt(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Jt(u, o) : (o = cn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Si(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = ji, r;
  }
  return o = e.child, e = o.sibling, r = Jt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function kl(e, t) {
  return t = oo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ia(e, t, n, r) {
  return r !== null && ll(r), Un(t, e.child, null, n), e = kl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function If(e, t, n, r, a, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ao(Error(E(422))), ia(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = oo({ mode: "visible", children: r.children }, a, 0, null), o = cn(o, a, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Un(t, e.child, null, l), t.child.memoizedState = Si(l), t.memoizedState = ji, o);
  if (!(t.mode & 1)) return ia(e, t, l, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(E(419)), r = Ao(o, r, void 0), ia(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Le || u) {
    if (r = me, r !== null) {
      switch (l & -l) {
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
      a = a & (r.suspendedLanes | l) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Pt(e, a), st(r, e, a, -1));
    }
    return El(), r = Ao(Error(E(421))), ia(e, t, l, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yf.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, $e = Wt(a.nextSibling), Oe = t, ee = !0, it = null, e !== null && (Ge[He++] = Ct, Ge[He++] = _t, Ge[He++] = pn, Ct = e.id, _t = e.overflow, pn = t), t = kl(t, r.children), t.flags |= 4096, t);
}
function Rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gi(e.return, t, n);
}
function Io(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Hc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Ne(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
      else if (e.tag === 19) Rs(e, n, t);
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
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Oa(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Io(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Oa(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Io(t, !0, n, null, o);
      break;
    case "together":
      Io(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ya(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Df(e, t, n) {
  switch (t.tag) {
    case 3:
      Vc(t), Bn();
      break;
    case 5:
      yc(t);
      break;
    case 1:
      Ae(t.type) && La(t);
      break;
    case 4:
      fl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      J(Ia, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (J(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gc(e, t, n) : (J(re, re.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
      J(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Hc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), J(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uc(e, t, n);
  }
  return bt(e, t, n);
}
var Wc, Ci, Qc, Yc;
Wc = function(e, t) {
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
Ci = function() {
};
Qc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, sn(gt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Ho(e, a), r = Ho(e, r), o = [];
        break;
      case "select":
        a = oe({}, a, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = Yo(e, a), r = Yo(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ma);
    }
    Jo(n, r);
    var l;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var u = a[d];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (xr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (u = a != null ? a[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = s;
      else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (xr.hasOwnProperty(d) ? (s != null && d === "onScroll" && X("scroll", e), o || u === s || (o = [])) : (o = o || []).push(d, s));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Yc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
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
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $f(e, t, n) {
  var r = t.pendingProps;
  switch (il(t), t.tag) {
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
      return we(t), null;
    case 1:
      return Ae(t.type) && Ta(), we(t), null;
    case 3:
      return r = t.stateNode, qn(), Z(Re), Z(je), hl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (aa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (Ti(it), it = null))), Ci(e, t), we(t), null;
    case 5:
      ml(t);
      var a = sn(Mr.current);
      if (n = t.type, e !== null && t.stateNode != null) Qc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return we(t), null;
        }
        if (e = sn(gt.current), aa(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[mt] = t, r[Pr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < ir.length; a++) X(ir[a], r);
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
              ql(r, o), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
              break;
            case "textarea":
              Gl(r, o), X("invalid", r);
          }
          Jo(n, o), a = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var u = o[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ra(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ra(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : xr.hasOwnProperty(l) && u != null && l === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              Yr(r), Vl(r, o, !0);
              break;
            case "textarea":
              Yr(r), Hl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ma);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Su(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[mt] = t, e[Pr] = r, Wc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Xo(n, r), n) {
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
                for (a = 0; a < ir.length; a++) X(ir[a], e);
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
                ql(e, r), a = Ho(e, r), X("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = oe({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                Gl(e, r), a = Yo(e, r), X("invalid", e);
                break;
              default:
                a = r;
            }
            Jo(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Nu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Cu(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && wr(e, s) : typeof s == "number" && wr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? s != null && o === "onScroll" && X("scroll", e) : s != null && Gi(e, o, s, l));
            }
            switch (n) {
              case "input":
                Yr(e), Vl(e, r, !1);
                break;
              case "textarea":
                Yr(e), Hl(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Ln(e, !!r.multiple, o, !1) : r.defaultValue != null && Ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ma);
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
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Yc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = sn(Mr.current), sn(gt.current), aa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (o = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
            case 3:
              ra(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ra(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r;
      }
      return we(t), null;
    case 13:
      if (Z(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128)) fc(), Bn(), t.flags |= 98560, o = !1;
        else if (o = aa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[mt] = t;
          } else Bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          we(t), o = !1;
        } else it !== null && (Ti(it), it = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? pe === 0 && (pe = 3) : El())), t.updateQueue !== null && (t.flags |= 4), we(t), null);
    case 4:
      return qn(), Ci(e, t), e === null && Er(t.stateNode.containerInfo), we(t), null;
    case 10:
      return cl(t.type._context), we(t), null;
    case 17:
      return Ae(t.type) && Ta(), we(t), null;
    case 19:
      if (Z(re), o = t.memoizedState, o === null) return we(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) tr(o, !1);
      else {
        if (pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Oa(e), l !== null) {
            for (t.flags |= 128, tr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return J(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ue() > Gn && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Oa(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !ee) return we(t), null;
        } else 2 * ue() - o.renderingStartTime > Gn && n !== 1073741824 && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = re.current, J(re, r ? n & 1 | 2 : n & 1), t) : (we(t), null);
    case 22:
    case 23:
      return Nl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Of(e, t) {
  switch (il(t), t.tag) {
    case 1:
      return Ae(t.type) && Ta(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return qn(), Z(Re), Z(je), hl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ml(t), null;
    case 13:
      if (Z(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Bn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(re), null;
    case 4:
      return qn(), null;
    case 10:
      return cl(t.type._context), null;
    case 22:
    case 23:
      return Nl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var la = !1, ke = !1, Ff = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function _i(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var As = !1;
function Bf(e, t) {
  if (si = za, e = ec(), al(e)) {
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
        var l = 0, u = -1, s = -1, d = 0, g = 0, y = e, p = null;
        t: for (; ; ) {
          for (var S; y !== n || a !== 0 && y.nodeType !== 3 || (u = l + a), y !== o || r !== 0 && y.nodeType !== 3 || (s = l + r), y.nodeType === 3 && (l += y.nodeValue.length), (S = y.firstChild) !== null; )
            p = y, y = S;
          for (; ; ) {
            if (y === e) break t;
            if (p === n && ++d === a && (u = l), p === o && ++g === r && (s = l), (S = y.nextSibling) !== null) break;
            y = p, p = y.parentNode;
          }
          y = S;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ui = { focusedElem: e, selectionRange: n }, za = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
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
            var v = N.memoizedProps, I = N.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : at(t.type, v), I);
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
      le(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return N = As, As = !1, N;
}
function fr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && _i(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function ro(e, t) {
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
function Ni(e) {
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
function Kc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[Pr], delete t[pi], delete t[Sf], delete t[Cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Jc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Is(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ma));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ei(e, t, n), e = e.sibling; e !== null; ) Ei(e, t, n), e = e.sibling;
}
function zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), e = e.sibling;
}
var he = null, ot = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Xc(e, t, n), n = n.sibling;
}
function Xc(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(Ya, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || Mn(n, t);
    case 6:
      var r = he, a = ot;
      he = null, Dt(e, t, n), he = r, ot = a, he !== null && (ot ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null && (ot ? (e = he, n = n.stateNode, e.nodeType === 8 ? Po(e.parentNode, n) : e.nodeType === 1 && Po(e, n), Cr(e)) : Po(he, n.stateNode));
      break;
    case 4:
      r = he, a = ot, he = n.stateNode.containerInfo, ot = !0, Dt(e, t, n), he = r, ot = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && _i(n, t, l), a = a.next;
        } while (a !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (!ke && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        le(n, t, u);
      }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Dt(e, t, n), ke = r) : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function Ds(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ff()), t.forEach(function(r) {
      var a = Kf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            he = u.stateNode, ot = !1;
            break e;
          case 3:
            he = u.stateNode.containerInfo, ot = !0;
            break e;
          case 4:
            he = u.stateNode.containerInfo, ot = !0;
            break e;
        }
        u = u.return;
      }
      if (he === null) throw Error(E(160));
      Xc(o, l, a), he = null, ot = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (d) {
      le(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Zc(t, e), t = t.sibling;
}
function Zc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (rt(t, e), pt(e), r & 4) {
        try {
          fr(3, e, e.return), ro(3, e);
        } catch (v) {
          le(e, e.return, v);
        }
        try {
          fr(5, e, e.return);
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 1:
      rt(t, e), pt(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (rt(t, e), pt(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          wr(a, "");
        } catch (v) {
          le(e, e.return, v);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && ku(a, o), Xo(u, l);
          var d = Xo(u, o);
          for (l = 0; l < s.length; l += 2) {
            var g = s[l], y = s[l + 1];
            g === "style" ? Nu(a, y) : g === "dangerouslySetInnerHTML" ? Cu(a, y) : g === "children" ? wr(a, y) : Gi(a, g, y, d);
          }
          switch (u) {
            case "input":
              Wo(a, o);
              break;
            case "textarea":
              ju(a, o);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var S = o.value;
              S != null ? Ln(a, !!o.multiple, S, !1) : p !== !!o.multiple && (o.defaultValue != null ? Ln(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Ln(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Pr] = o;
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 6:
      if (rt(t, e), pt(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 3:
      if (rt(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Cr(t.containerInfo);
      } catch (v) {
        le(e, e.return, v);
      }
      break;
    case 4:
      rt(t, e), pt(e);
      break;
    case 13:
      rt(t, e), pt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Cl = ue())), r & 4 && Ds(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (d = ke) || g, rt(t, e), ke = d) : rt(t, e), pt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1) for (L = e, g = e.child; g !== null; ) {
          for (y = L = g; L !== null; ) {
            switch (p = L, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                fr(4, p, p.return);
                break;
              case 1:
                Mn(p, p.return);
                var N = p.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (v) {
                    le(r, n, v);
                  }
                }
                break;
              case 5:
                Mn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Os(y);
                  continue;
                }
            }
            S !== null ? (S.return = p, L = S) : Os(y);
          }
          g = g.sibling;
        }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                a = y.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, s = y.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = _u("display", l));
              } catch (v) {
                le(e, e.return, v);
              }
            }
          } else if (y.tag === 6) {
            if (g === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (v) {
              le(e, e.return, v);
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
      rt(t, e), pt(e), r & 4 && Ds(e);
      break;
    case 21:
      break;
    default:
      rt(
        t,
        e
      ), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jc(n)) {
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
          r.flags & 32 && (wr(a, ""), r.flags &= -33);
          var o = Is(e);
          zi(e, o, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Is(e);
          Ei(e, u, l);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      le(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Uf(e, t, n) {
  L = e, ed(e);
}
function ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var a = L, o = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || la;
      if (!l) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || ke;
        u = la;
        var d = ke;
        if (la = l, (ke = s) && !d) for (L = a; L !== null; ) l = L, s = l.child, l.tag === 22 && l.memoizedState !== null ? Fs(a) : s !== null ? (s.return = l, L = s) : Fs(a);
        for (; o !== null; ) L = o, ed(o), o = o.sibling;
        L = a, la = u, ke = d;
      }
      $s(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, L = o) : $s(e);
  }
}
function $s(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || ro(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && js(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              js(t, l, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
                  y !== null && Cr(y);
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
        ke || t.flags & 512 && Ni(t);
      } catch (p) {
        le(t, t.return, p);
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
function Os(e) {
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
function Fs(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ro(4, t);
          } catch (s) {
            le(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              le(t, a, s);
            }
          }
          var o = t.return;
          try {
            Ni(t);
          } catch (s) {
            le(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ni(t);
          } catch (s) {
            le(t, l, s);
          }
      }
    } catch (s) {
      le(t, t.return, s);
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
var qf = Math.ceil, Ua = Mt.ReactCurrentDispatcher, jl = Mt.ReactCurrentOwner, Qe = Mt.ReactCurrentBatchConfig, V = 0, me = null, ce = null, ge = 0, De = 0, Tn = tn(0), pe = 0, Ar = null, mn = 0, ao = 0, Sl = 0, mr = null, Te = null, Cl = 0, Gn = 1 / 0, kt = null, qa = !1, Pi = null, Yt = null, sa = !1, qt = null, Va = 0, hr = 0, bi = null, xa = -1, wa = 0;
function Ee() {
  return V & 6 ? ue() : xa !== -1 ? xa : xa = ue();
}
function Kt(e) {
  return e.mode & 1 ? V & 2 && ge !== 0 ? ge & -ge : Nf.transition !== null ? (wa === 0 && (wa = $u()), wa) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gu(e.type)), e) : 1;
}
function st(e, t, n, r) {
  if (50 < hr) throw hr = 0, bi = null, Error(E(185));
  Br(e, n, r), (!(V & 2) || e !== me) && (e === me && (!(V & 2) && (ao |= n), pe === 4 && Bt(e, ge)), Ie(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Gn = ue() + 500, eo && nn()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  _p(e, t);
  var r = Ea(e, e === me ? ge : 0);
  if (r === 0) n !== null && Yl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Yl(n), t === 1) e.tag === 0 ? _f(Bs.bind(null, e)) : cc(Bs.bind(null, e)), kf(function() {
      !(V & 6) && nn();
    }), n = null;
    else {
      switch (Ou(r)) {
        case 1:
          n = Ki;
          break;
        case 4:
          n = Iu;
          break;
        case 16:
          n = Na;
          break;
        case 536870912:
          n = Du;
          break;
        default:
          n = Na;
      }
      n = sd(n, td.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function td(e, t) {
  if (xa = -1, wa = 0, V & 6) throw Error(E(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = Ea(e, e === me ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ga(e, r);
  else {
    t = r;
    var a = V;
    V |= 2;
    var o = rd();
    (me !== e || ge !== t) && (kt = null, Gn = ue() + 500, un(e, t));
    do
      try {
        Hf();
        break;
      } catch (u) {
        nd(e, u);
      }
    while (!0);
    ul(), Ua.current = o, V = a, ce !== null ? t = 0 : (me = null, ge = 0, t = pe);
  }
  if (t !== 0) {
    if (t === 2 && (a = ri(e), a !== 0 && (r = a, t = Mi(e, a))), t === 1) throw n = Ar, un(e, 0), Bt(e, r), Ie(e, ue()), n;
    if (t === 6) Bt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Vf(a) && (t = Ga(e, r), t === 2 && (o = ri(e), o !== 0 && (r = o, t = Mi(e, o))), t === 1)) throw n = Ar, un(e, 0), Bt(e, r), Ie(e, ue()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          an(e, Te, kt);
          break;
        case 3:
          if (Bt(e, r), (r & 130023424) === r && (t = Cl + 500 - ue(), 10 < t)) {
            if (Ea(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = di(an.bind(null, e, Te, kt), t);
            break;
          }
          an(e, Te, kt);
          break;
        case 4:
          if (Bt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - lt(r);
            o = 1 << l, l = t[l], l > a && (a = l), r &= ~o;
          }
          if (r = a, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = di(an.bind(null, e, Te, kt), r);
            break;
          }
          an(e, Te, kt);
          break;
        case 5:
          an(e, Te, kt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ie(e, ue()), e.callbackNode === n ? td.bind(null, e) : null;
}
function Mi(e, t) {
  var n = mr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = Ga(e, t), e !== 2 && (t = Te, Te = n, t !== null && Ti(t)), e;
}
function Ti(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function Vf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!ut(o(), a)) return !1;
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
  for (t &= ~Sl, t &= ~ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Bs(e) {
  if (V & 6) throw Error(E(327));
  $n();
  var t = Ea(e, 0);
  if (!(t & 1)) return Ie(e, ue()), null;
  var n = Ga(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ri(e);
    r !== 0 && (t = r, n = Mi(e, r));
  }
  if (n === 1) throw n = Ar, un(e, 0), Bt(e, t), Ie(e, ue()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, an(e, Te, kt), Ie(e, ue()), null;
}
function _l(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (Gn = ue() + 500, eo && nn());
  }
}
function hn(e) {
  qt !== null && qt.tag === 0 && !(V & 6) && $n();
  var t = V;
  V |= 1;
  var n = Qe.transition, r = W;
  try {
    if (Qe.transition = null, W = 1, e) return e();
  } finally {
    W = r, Qe.transition = n, V = t, !(V & 6) && nn();
  }
}
function Nl() {
  De = Tn.current, Z(Tn);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wf(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (il(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ta();
        break;
      case 3:
        qn(), Z(Re), Z(je), hl();
        break;
      case 5:
        ml(r);
        break;
      case 4:
        qn();
        break;
      case 13:
        Z(re);
        break;
      case 19:
        Z(re);
        break;
      case 10:
        cl(r.type._context);
        break;
      case 22:
      case 23:
        Nl();
    }
    n = n.return;
  }
  if (me = e, ce = e = Jt(e.current, null), ge = De = t, pe = 0, Ar = null, Sl = ao = mn = 0, Te = mr = null, ln !== null) {
    for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = a, r.next = l;
      }
      n.pending = r;
    }
    ln = null;
  }
  return e;
}
function nd(e, t) {
  do {
    var n = ce;
    try {
      if (ul(), ga.current = Ba, Fa) {
        for (var r = ae.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Fa = !1;
      }
      if (fn = 0, fe = de = ae = null, pr = !1, Tr = 0, jl.current = null, n === null || n.return === null) {
        pe = 1, Ar = t, ce = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, s = t;
        if (t = ge, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var d = s, g = u, y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var p = g.alternate;
            p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var S = zs(l);
          if (S !== null) {
            S.flags &= -257, Ps(S, l, u, o, t), S.mode & 1 && Es(o, d, t), t = S, s = d;
            var N = t.updateQueue;
            if (N === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else N.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Es(o, d, t), El();
              break e;
            }
            s = Error(E(426));
          }
        } else if (ee && u.mode & 1) {
          var I = zs(l);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Ps(I, l, u, o, t), ll(Vn(s, u));
            break e;
          }
        }
        o = s = Vn(s, u), pe !== 4 && (pe = 2), mr === null ? mr = [o] : mr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Oc(o, s, t);
              ks(o, m);
              break e;
            case 1:
              u = s;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Yt === null || !Yt.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = Fc(o, u, t);
                ks(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      od(n);
    } catch (k) {
      t = k, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rd() {
  var e = Ua.current;
  return Ua.current = Ba, e === null ? Ba : e;
}
function El() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4), me === null || !(mn & 268435455) && !(ao & 268435455) || Bt(me, ge);
}
function Ga(e, t) {
  var n = V;
  V |= 2;
  var r = rd();
  (me !== e || ge !== t) && (kt = null, un(e, t));
  do
    try {
      Gf();
      break;
    } catch (a) {
      nd(e, a);
    }
  while (!0);
  if (ul(), V = n, Ua.current = r, ce !== null) throw Error(E(261));
  return me = null, ge = 0, pe;
}
function Gf() {
  for (; ce !== null; ) ad(ce);
}
function Hf() {
  for (; ce !== null && !gp(); ) ad(ce);
}
function ad(e) {
  var t = ld(e.alternate, e, De);
  e.memoizedProps = e.pendingProps, t === null ? od(e) : ce = t, jl.current = null;
}
function od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Of(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pe = 6, ce = null;
        return;
      }
    } else if (n = $f(n, t, De), n !== null) {
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
function an(e, t, n) {
  var r = W, a = Qe.transition;
  try {
    Qe.transition = null, W = 1, Wf(e, t, n, r);
  } finally {
    Qe.transition = a, W = r;
  }
  return null;
}
function Wf(e, t, n, r) {
  do
    $n();
  while (qt !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Np(e, o), e === me && (ce = me = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sa || (sa = !0, sd(Na, function() {
    return $n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Qe.transition, Qe.transition = null;
    var l = W;
    W = 1;
    var u = V;
    V |= 4, jl.current = null, Bf(e, n), Zc(n, e), ff(ui), za = !!si, ui = si = null, e.current = n, Uf(n), vp(), V = u, W = l, Qe.transition = o;
  } else e.current = n;
  if (sa && (sa = !1, qt = e, Va = a), o = e.pendingLanes, o === 0 && (Yt = null), wp(n.stateNode), Ie(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (qa) throw qa = !1, e = Pi, Pi = null, e;
  return Va & 1 && e.tag !== 0 && $n(), o = e.pendingLanes, o & 1 ? e === bi ? hr++ : (hr = 0, bi = e) : hr = 0, nn(), null;
}
function $n() {
  if (qt !== null) {
    var e = Ou(Va), t = Qe.transition, n = W;
    try {
      if (Qe.transition = null, W = 16 > e ? 16 : e, qt === null) var r = !1;
      else {
        if (e = qt, qt = null, Va = 0, V & 6) throw Error(E(331));
        var a = V;
        for (V |= 4, L = e.current; L !== null; ) {
          var o = L, l = o.child;
          if (L.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (L = d; L !== null; ) {
                  var g = L;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fr(8, g, o);
                  }
                  var y = g.child;
                  if (y !== null) y.return = g, L = y;
                  else for (; L !== null; ) {
                    g = L;
                    var p = g.sibling, S = g.return;
                    if (Kc(g), g === d) {
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
                    var I = v.sibling;
                    v.sibling = null, v = I;
                  } while (v !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, L = l;
          else e: for (; L !== null; ) {
            if (o = L, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                fr(9, o, o.return);
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
          l = L;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, L = f;
          else e: for (l = c; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ro(9, u);
              }
            } catch (k) {
              le(u, u.return, k);
            }
            if (u === l) {
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
        if (V = a, nn(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(Ya, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, Qe.transition = t;
    }
  }
  return !1;
}
function Us(e, t, n) {
  t = Vn(n, t), t = Oc(e, t, 1), e = Qt(e, t, 1), t = Ee(), e !== null && (Br(e, 1, t), Ie(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Us(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Us(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
        e = Vn(n, e), e = Fc(t, e, 1), t = Qt(t, e, 1), e = Ee(), t !== null && (Br(t, 1, e), Ie(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Qf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ge & n) === n && (pe === 4 || pe === 3 && (ge & 130023424) === ge && 500 > ue() - Cl ? un(e, 0) : Sl |= n), Ie(e, t);
}
function id(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
  var n = Ee();
  e = Pt(e, t), e !== null && (Br(e, t, n), Ie(e, n));
}
function Yf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), id(e, n);
}
function Kf(e, t) {
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
  r !== null && r.delete(t), id(e, n);
}
var ld;
ld = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, Df(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, ee && t.flags & 1048576 && dc(t, Aa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ya(e, t), e = t.pendingProps;
      var a = Fn(t, je.current);
      Dn(t, n), a = vl(null, t, r, e, a, n);
      var o = yl();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (o = !0, La(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, pl(t), a.updater = no, t.stateNode = a, a._reactInternals = t, yi(t, r, e, n), t = ki(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && ol(t), Ne(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ya(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Xf(r), e = at(r, e), a) {
          case 0:
            t = wi(null, t, r, e, n);
            break e;
          case 1:
            t = Ts(null, t, r, e, n);
            break e;
          case 11:
            t = bs(null, t, r, e, n);
            break e;
          case 14:
            t = Ms(null, t, r, at(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : at(r, a), wi(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : at(r, a), Ts(e, t, r, a, n);
    case 3:
      e: {
        if (Vc(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, vc(e, t), $a(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Vn(Error(E(423)), t), t = Ls(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Vn(Error(E(424)), t), t = Ls(e, t, r, n, a);
          break e;
        } else for ($e = Wt(t.stateNode.containerInfo.firstChild), Oe = t, ee = !0, it = null, n = hc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Bn(), r === a) {
            t = bt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yc(t), e === null && hi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = a.children, ci(r, a) ? l = null : o !== null && ci(r, o) && (t.flags |= 32), qc(e, t), Ne(e, t, l, n), t.child;
    case 6:
      return e === null && hi(t), null;
    case 13:
      return Gc(e, t, n);
    case 4:
      return fl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Un(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : at(r, a), bs(e, t, r, a, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, l = a.value, J(Ia, r._currentValue), r._currentValue = l, o !== null) if (ut(o.value, l)) {
          if (o.children === a.children && !Re.current) {
            t = bt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            l = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Nt(-1, n & -n), s.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var g = d.pending;
                    g === null ? s.next = s : (s.next = g.next, g.next = s), d.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), gi(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(E(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), gi(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        Ne(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Dn(t, n), a = Ye(a), r = r(a), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = at(r, t.pendingProps), a = at(r.type, a), Ms(e, t, r, a, n);
    case 15:
      return Bc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : at(r, a), ya(e, t), t.tag = 1, Ae(r) ? (e = !0, La(t)) : e = !1, Dn(t, n), $c(t, r, a), yi(t, r, a, n), ki(null, t, r, !0, e, n);
    case 19:
      return Hc(e, t, n);
    case 22:
      return Uc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function sd(e, t) {
  return Au(e, t);
}
function Jf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new Jf(e, t, n, r);
}
function zl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Xf(e) {
  if (typeof e == "function") return zl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Wi) return 11;
    if (e === Qi) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ka(e, t, n, r, a, o) {
  var l = 2;
  if (r = e, typeof e == "function") zl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case jn:
      return cn(n.children, a, o, t);
    case Hi:
      l = 8, a |= 8;
      break;
    case Uo:
      return e = We(12, n, t, a | 2), e.elementType = Uo, e.lanes = o, e;
    case qo:
      return e = We(13, n, t, a), e.elementType = qo, e.lanes = o, e;
    case Vo:
      return e = We(19, n, t, a), e.elementType = Vo, e.lanes = o, e;
    case yu:
      return oo(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case gu:
          l = 10;
          break e;
        case vu:
          l = 9;
          break e;
        case Wi:
          l = 11;
          break e;
        case Qi:
          l = 14;
          break e;
        case $t:
          l = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = We(l, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function cn(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function oo(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = yu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Do(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function $o(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Zf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yo(0), this.expirationTimes = yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Pl(e, t, n, r, a, o, l, u, s) {
  return e = new Zf(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pl(o), e;
}
function em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ud(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(E(170));
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
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return uc(e, n, t);
  }
  return t;
}
function cd(e, t, n, r, a, o, l, u, s) {
  return e = Pl(n, r, !0, e, a, o, l, u, s), e.context = ud(null), n = e.current, r = Ee(), a = Kt(n), o = Nt(r, a), o.callback = t ?? null, Qt(n, o, a), e.current.lanes = a, Br(e, a, r), Ie(e, r), e;
}
function io(e, t, n, r) {
  var a = t.current, o = Ee(), l = Kt(a);
  return n = ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(a, t, l), e !== null && (st(e, a, l, o), ha(e, a, l)), l;
}
function Ha(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bl(e, t) {
  qs(e, t), (e = e.alternate) && qs(e, t);
}
function tm() {
  return null;
}
var dd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ml(e) {
  this._internalRoot = e;
}
lo.prototype.render = Ml.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  io(e, t, null, null);
};
lo.prototype.unmount = Ml.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      io(null, e, null, null);
    }), t[zt] = null;
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Uu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
    Ft.splice(n, 0, e), n === 0 && Vu(e);
  }
};
function Tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function so(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vs() {
}
function nm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Ha(l);
        o.call(d);
      };
    }
    var l = cd(t, r, e, 0, null, !1, !1, "", Vs);
    return e._reactRootContainer = l, e[zt] = l.current, Er(e.nodeType === 8 ? e.parentNode : e), hn(), l;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Ha(s);
      u.call(d);
    };
  }
  var s = Pl(e, 0, !1, null, null, !1, !1, "", Vs);
  return e._reactRootContainer = s, e[zt] = s.current, Er(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    io(t, s, n, r);
  }), s;
}
function uo(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = Ha(l);
        u.call(s);
      };
    }
    io(t, l, e, a);
  } else l = nm(n, t, e, a, r);
  return Ha(l);
}
Fu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 && (Ji(t, n | 1), Ie(t, ue()), !(V & 6) && (Gn = ue() + 500, nn()));
      }
      break;
    case 13:
      hn(function() {
        var r = Pt(e, 1);
        if (r !== null) {
          var a = Ee();
          st(r, e, 1, a);
        }
      }), bl(e, 1);
  }
};
Xi = function(e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      st(t, e, 134217728, n);
    }
    bl(e, 134217728);
  }
};
Bu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e), n = Pt(e, t);
    if (n !== null) {
      var r = Ee();
      st(n, e, t, r);
    }
    bl(e, t);
  }
};
Uu = function() {
  return W;
};
qu = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
ei = function(e, t, n) {
  switch (t) {
    case "input":
      if (Wo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Za(r);
            if (!a) throw Error(E(90));
            wu(r), Wo(r, a);
          }
        }
      }
      break;
    case "textarea":
      ju(e, n);
      break;
    case "select":
      t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
  }
};
Pu = _l;
bu = hn;
var rm = { usingClientEntryPoint: !1, Events: [qr, Nn, Za, Eu, zu, _l] }, nr = { findFiberByHostInstance: on, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, am = { bundleType: nr.bundleType, version: nr.version, rendererPackageName: nr.rendererPackageName, rendererConfig: nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Lu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: nr.findFiberByHostInstance || tm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ua.isDisabled && ua.supportsFiber) try {
    Ya = ua.inject(am), ht = ua;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rm;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tl(t)) throw Error(E(200));
  return em(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Tl(e)) throw Error(E(299));
  var n = !1, r = "", a = dd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Pl(e, 1, !1, null, null, n, !1, r, a), e[zt] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new Ml(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Lu(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return hn(e);
};
Be.hydrate = function(e, t, n) {
  if (!so(t)) throw Error(E(200));
  return uo(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!Tl(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", l = dd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = cd(t, null, e, 1, n ?? null, a, !1, o, l), e[zt] = t.current, Er(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new lo(t);
};
Be.render = function(e, t, n) {
  if (!so(t)) throw Error(E(200));
  return uo(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!so(e)) throw Error(E(40));
  return e._reactRootContainer ? (hn(function() {
    uo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = _l;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!so(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return uo(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function pd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd);
    } catch (e) {
      console.error(e);
    }
}
pd(), pu.exports = Be;
var om = pu.exports, fd, Gs = om;
fd = Gs.createRoot, Gs.hydrateRoot;
const Hs = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, im = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, lm = [
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
], sm = [
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
function Ir(e) {
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
function um(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const gr = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(gr() + e, t);
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
  previewUrl: (e, t = !0) => `${gr()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}`,
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
  pageUrl: (e, t, n = !1, r = !1) => `${gr().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
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
  iconUrl: () => `${gr()}/api/icon.png?v=${Date.now()}`,
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
async function cm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, y) => {
      a.onload = () => g(), a.onerror = () => y(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, l = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(o * u), s.height = Math.round(l * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (g) => s.toBlob((y) => g(y), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function md(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await cm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Li = [
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
function Ri(e) {
  return Li.find((t) => t.key === e) ?? Li[0];
}
function Ws(e) {
  const t = Ri(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function hd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Ri(e);
  } catch {
  }
  return Ri("wiwi");
}
const gd = {
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
}, vd = j.createContext("es");
function dm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(vd.Provider, { value: e, children: t });
}
function Ll() {
  return j.useContext(vd);
}
function Je() {
  const e = Ll();
  return (t, n) => {
    let r = e === "en" ? gd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function pm(e, t, n) {
  return e === "en" ? gd[t] ?? t : t;
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
function yd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Dr({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function $r({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function fm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Wa({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function hm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function xd({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function co({ size: e }) {
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
function Qs({ size: e }) {
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
function gm({ size: e }) {
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
function vm({ size: e }) {
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
function wd({ size: e }) {
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
function Or({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function ym({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function xm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function kd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function vr({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Ai({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function jd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function zm({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Pm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Je(), o = j.useMemo(() => t.map((w) => w.id), [t]), [l, u] = j.useState(/* @__PURE__ */ new Set()), [s, d] = j.useState("escala"), [g, y] = j.useState(100), [p, S] = j.useState(50), [N, v] = j.useState("mayor"), [I, m] = j.useState("");
  j.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const c = (w) => !l.has(w), f = (w) => u((x) => {
    const M = new Set(x);
    return M.has(w) ? M.delete(w) : M.add(w), M;
  }), h = () => u(
    l.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), k = (w) => {
    const x = w.w_mm_base || 0, M = w.h_mm_base || 0;
    return N === "mayor" ? Math.max(x, M) : N === "menor" ? Math.min(x, M) : 2 * Math.sqrt(Math.max(0, x * M) / Math.PI);
  }, C = (w) => {
    if (s === "tamano") {
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
              children: l.size === o.length ? a("Seleccionar todos") : a("Quitar selección")
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "— ",
            o.length - l.size,
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
              className: s === "escala" ? "on" : "",
              onClick: () => d("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: s === "tamano" ? "on" : "",
              onClick: () => d("tamano"),
              children: a("Tamaño fijo (mm)")
            }
          )
        ] }),
        s === "escala" ? /* @__PURE__ */ i.jsxs("label", { children: [
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
        I && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: I })
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
function bm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1
}) {
  const l = Je(), [u, s] = j.useState(() => Ir(e));
  j.useEffect(() => s(Ir(e)), [e]);
  const d = j.useRef(null), g = um(u), [y, p] = j.useState(""), S = j.useRef(!1), [N, v] = j.useState(""), I = j.useRef(!1), [m, c] = j.useState({ tamano: !1, borde: !1, mini: !1 });
  j.useEffect(() => {
    S.current || p(g.w > 0 ? g.w.toFixed(1) : ""), I.current || v(g.h > 0 ? g.h.toFixed(1) : "");
  }, [g.w, g.h]);
  const f = Number.isFinite(u.w_mm_base) ? u.w_mm_base : 0, h = Number.isFinite(u.h_mm_base) ? u.h_mm_base : 0, k = (x) => {
    p(x);
    const M = Number(x.replace(",", "."));
    !Number.isFinite(M) || M <= 0 || f <= 0 || w({ scale_pct: M / f * 100 });
  }, C = (x) => {
    v(x);
    const M = Number(x.replace(",", "."));
    !Number.isFinite(M) || M <= 0 || h <= 0 || w({ scale_pct: M / h * 100 });
  }, _ = (t == null ? void 0 : t.placements.filter((x) => x.asset_id === e.id && x.mini).length) ?? 0, P = (t == null ? void 0 : t.placements.filter((x) => x.asset_id === e.id && !x.mini).length) ?? 0, w = async (x) => {
    a == null || a(), "copies" in x && (x.copies = Math.max(0, x.copies ?? 0)), s((M) => ({ ...M, ...x }));
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
            title: l("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => R.assetsFolder().then((x) => R.abrirCarpeta(x.path)).catch(() => R.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ i.jsx(Dr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: l("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var x;
              return (x = d.current) == null ? void 0 : x.click();
            },
            children: /* @__PURE__ */ i.jsx(fm, { size: 16 })
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
                  const { blob: se, name: Se } = await md(M);
                  await R.reemplazar(e.id, se, Se), await n();
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
            title: l("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ i.jsx(mm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            title: u.bg_removed ? l("Restaurar fondo original") : l("Quitar fondo (inteligente)"),
            onClick: () => (u.bg_removed ? R.restoreBackground(e.id) : R.removeBackground(e.id)).then(n),
            children: u.bg_removed ? /* @__PURE__ */ i.jsx(hm, { size: 16 }) : /* @__PURE__ */ i.jsx(Wa, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: l("Eliminar imagen"),
            onClick: () => R.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ i.jsx(xd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: l("Copias"), children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => w({ copies: u.copies - 1 }), children: "−" }),
          /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: u.copies }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => w({ copies: u.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${u.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            "data-tip": l("Incluir como mini (rellena huecos)"),
            onClick: () => w({ mini_enabled: !u.mini_enabled }),
            children: [
              /* @__PURE__ */ i.jsx(Or, { size: 15 }),
              " ",
              l("Mini")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${u.offset_mm > 0 ? "on" : ""}`,
            "data-testid": `borde-${e.id}`,
            "data-tip": l("Borde adicional para este elemento (unir trozos, margen al cortar)"),
            onClick: () => c((x) => ({ ...x, borde: !x.borde })),
            children: [
              /* @__PURE__ */ i.jsx(co, { size: 15 }),
              " ",
              l("Borde")
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
              l("Tamaño"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                g.w.toFixed(1),
                "×",
                g.h.toFixed(1),
                " · ",
                Math.round(u.scale_pct),
                " %"
              ] })
            ]
          }
        ),
        m.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: l("Escala del elemento (100% = tamaño natural)"), children: l("Escala") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: u.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (x) => w({ scale_pct: Number(x.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
              Math.round(u.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: l("Tamaño exacto en milímetros (mantiene la proporción)"), children: l("Ancho") }),
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
                  S.current = !0, I.current = !1;
                },
                onBlur: () => {
                  S.current = !1, p(g.w > 0 ? g.w.toFixed(1) : "");
                },
                onChange: (x) => k(x.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" }),
            /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ i.jsx("span", { title: l("Tamaño exacto en milímetros (mantiene la proporción)"), children: l("Alto") }),
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
                  I.current = !0, S.current = !1;
                },
                onBlur: () => {
                  I.current = !1, v(g.h > 0 ? g.h.toFixed(1) : "");
                },
                onChange: (x) => C(x.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      (u.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${e.id}`,
            onClick: () => c((x) => ({ ...x, borde: !x.borde })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.borde ? "open" : ""}`, children: "›" }),
              l("Borde adicional"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                u.offset_mm.toFixed(1),
                " mm",
                u.offset_mm <= 0 ? ` · ${l("global")}` : ""
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
                  Math.round((u.offset_mm - 0.5) * 2) / 2
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
                value: u.offset_mm,
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
                  Math.round((u.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", l("Extender")],
              ["blanco", l("Blanco")],
              ["color", l("Color")],
              ["unir_recto", l("Unir recto")],
              ["unir_curvo", l("Unir curvo")]
            ].map(([x, M]) => /* @__PURE__ */ i.jsx(
              "button",
              {
                className: `seg ${(u.offset_modo || "") === x ? "on" : ""}`,
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
                value: u.offset_color || "#ffffff",
                title: l("Color del borde"),
                onChange: (x) => w({
                  offset_color: x.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      u.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${e.id}`,
            onClick: () => c((x) => ({ ...x, mini: !x.mini })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.mini ? "open" : ""}`, children: "›" }),
              l("Opciones de mini"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                u.mini_quota,
                " · ",
                _
              ] })
            ]
          }
        ),
        m.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ i.jsx("span", { title: l("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: l("Cuota") }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => w({ mini_quota: Math.max(
                1,
                Math.round((u.mini_quota - 0.5) * 2) / 2
              ) }),
              children: "−"
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
            "×",
            u.mini_quota
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-mas-${e.id}`,
              onClick: () => w({ mini_quota: Math.min(
                100,
                Math.round((u.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: l(" {n} minis", { n: _ }) })
        ] }) })
      ] }),
      P > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: l("Colocadas: {n}", { n: P }) }),
      u.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ i.jsx(jd, { size: 14 }),
        " ",
        u.warnings[0],
        " ",
        /blob|trozos sueltos/i.test(u.warnings[0]) && /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: l("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function Mm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: l
}) {
  const u = Je(), s = j.useRef(null), [d, g] = j.useState(!1), [y, p] = j.useState(null), S = async (v) => {
    const I = [];
    for (const m of Array.from(v))
      try {
        const { blob: c, name: f } = await md(m);
        I.push(Ir(await R.upload(c, f)));
      } catch (c) {
        console.error(c);
      }
    await r(), I.length > 1 && p(I);
  }, N = n.usar_minis;
  return e.some((v) => v.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${d ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var v;
          return (v = s.current) == null ? void 0 : v.click();
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
            u("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: s,
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
      bm,
      {
        a: v,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: l,
        bordeGlobal: n.offset_activo === !0
      },
      v.id
    )) }),
    !N && /* @__PURE__ */ i.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => R.clearAssets().then(r),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Pm,
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
function Sd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Je(), [o, l] = j.useState(null), [u, s] = j.useState("");
  j.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (g = "") => {
    s("");
    try {
      l(await R.fsList(g));
    } catch (y) {
      s(y.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (g) => g.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
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
function Tm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const l = Je(), [u, s] = j.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((y) => y.startsWith("data:")), g = [
    l("Abre Cricut Design Space."),
    l("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    l("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    l("Pulsa «Crear» para preparar el lienzo."),
    l("Comprueba que las dimensiones coinciden con las del archivo."),
    l("Imprime en papel mate blanco y colócalo en la esterilla."),
    l("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ i.jsx("div", { className: "modal", children: u === "resumen" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { "data-testid": "save-titulo", children: l(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ i.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("p", { className: "hint", children: l("Archivos:") }),
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((y) => /* @__PURE__ */ i.jsx("li", { title: y, children: y.split(/[\\/]/).pop() }, y)) }),
      !d && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      d && /* @__PURE__ */ i.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
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
            /* @__PURE__ */ i.jsx(Dr, { size: 15 }),
            " ",
            l("Descargar página {n}", { n: p + 1 })
          ]
        },
        p
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx(Dr, { size: 15 }),
            " ",
            l("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-continuar", onClick: o, children: l("Continuar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => s("cricut"),
          children: l("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { children: l("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: g.map((y, p) => /* @__PURE__ */ i.jsx("li", { children: y }, p)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => s("resumen"),
          children: l("Volver")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { onClick: o, children: l("Entendido") })
    ] })
  ] }) }) });
}
function Lm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: l, onJob: u, onRecalc: s, editando: d, onFinEdicion: g, onDeshacer: y, onRehacer: p, puedeDeshacer: S, puedeRehacer: N }) {
  const v = Je(), I = Ll(), [m, c] = j.useState(1), [f, h] = j.useState({ x: 0, y: 0 }), [k, C] = j.useState(null), [_, P] = j.useState(() => Date.now()), [w, x] = j.useState(null), [M, ne] = j.useState(null), [se, Se] = j.useState(!1), [ct, Ce] = j.useState(2), [be, b] = j.useState([]), [O, F] = j.useState(""), [G, Q] = j.useState(/* @__PURE__ */ new Set()), D = j.useRef(null), K = j.useRef(null), Me = I === "en" ? sm : lm, qe = j.useMemo(
    () => Me[Math.floor(Math.random() * Me.length)],
    [Me]
  ), Xe = r.saveName.trim() || qe;
  j.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const vt = (t == null ? void 0 : t.pages) ?? 0, Gr = !!t && t.efficiency < 0.8;
  j.useEffect(() => {
    const z = D.current;
    if (!z) return;
    const A = (T) => {
      T.preventDefault(), T.stopPropagation();
      const H = z.getBoundingClientRect(), Y = T.clientX - H.left, _e = T.clientY - H.top;
      c((Ve) => {
        const ye = T.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, Ve * ye)), At = ie / Ve;
        return h((It) => ({ x: Y - (Y - It.x) * At, y: _e - (_e - It.y) * At })), ie;
      });
    };
    return z.addEventListener("wheel", A, { passive: !1 }), () => z.removeEventListener("wheel", A);
  }, []);
  const $ = (z) => {
    if (z.target.closest(".item-box")) return;
    K.current = { x: z.clientX - f.x, y: z.clientY - f.y };
    const A = (H) => {
      K.current && h({ x: H.clientX - K.current.x, y: H.clientY - K.current.y });
    }, T = () => {
      K.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", T);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", T);
  };
  j.useEffect(() => {
    const z = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((T) => Math.min(12, T * 1.08)) : A.key === "-" || A.key === "_" ? c((T) => Math.max(0.05, T / 1.08)) : A.key === "0" ? (c(1), h({ x: 0, y: 0 })) : A.key === "Escape" ? C(null) : A.key === "g" ? a((T) => ({ ...T, guidesVisible: !T.guidesVisible })) : A.key === "t" && a((T) => T.eyeFosforito ? { ...T, eyeFosforito: !1, eyeTransparent: !1 } : T.eyeTransparent ? { ...T, eyeTransparent: !1, eyeFosforito: !0 } : { ...T, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [a]);
  const B = j.useRef(null), yt = j.useRef(null), xt = (z, A) => {
    z.preventDefault(), z.stopPropagation();
    const T = z.currentTarget.closest(".page-box");
    if (!T || !t) return;
    const H = t.page_mm[0] / T.clientWidth, Y = {
      uid: A.uid,
      startX: z.clientX,
      startY: z.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: H
    };
    B.current = Y, yt.current = { x: A.x, y: A.y }, x(Y), ne({ uid: A.uid, x: A.x, y: A.y });
    const _e = (ye) => {
      const ie = B.current;
      if (!ie) return;
      const At = (ye.clientX - ie.startX) * ie.mmPerPx / m, It = (ye.clientY - ie.startY) * ie.mmPerPx / m;
      yt.current = { x: ie.origX + At, y: ie.origY + It }, ne({ uid: ie.uid, x: ie.origX + At, y: ie.origY + It });
    }, Ve = (ye) => {
      window.removeEventListener("mousemove", _e), window.removeEventListener("mouseup", Ve);
      const ie = B.current;
      if (B.current = null, !ie) return;
      const At = (ye.clientX - ie.startX) * ie.mmPerPx / m, It = (ye.clientY - ie.startY) * ie.mmPerPx / m;
      x(null), ne(null), !(Math.abs(At) < 0.5 && Math.abs(It) < 0.5) && Hr(ie.uid, ie.origX + At, ie.origY + It);
    };
    window.addEventListener("mousemove", _e), window.addEventListener("mouseup", Ve);
  }, Hr = async (z, A, T) => {
    try {
      const H = await R.move(z, A, T);
      H.job ? u(H.job) : await l();
    } catch {
      await l();
    } finally {
      P(Date.now());
    }
  }, Tt = async (z) => {
    const A = await R.unpin(z);
    u(A);
  };
  j.useEffect(() => {
    if (!d) {
      b([]), F(""), Q(/* @__PURE__ */ new Set());
      return;
    }
    R.blobs(d.id).then((z) => {
      b(z.blobs), Ce(z.union_mm ?? 2), F(z.preview_png), Q(new Set(z.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      b([]), F("");
    });
  }, [d]);
  const Rl = async () => {
    if (d)
      try {
        await R.limpiarContorno(d.id, Array.from(G));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, Nd = (z) => {
    Q((A) => {
      const T = new Set(A);
      return T.has(z) ? T.delete(z) : T.add(z), T;
    });
  }, [dt, Lt] = j.useState(null), Ed = async () => {
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
        )).blob(), Y = URL.createObjectURL(H), _e = document.createElement("a");
        _e.href = Y, _e.download = `${r.saveName || "crycat"}-cricut.pdf`, _e.click(), setTimeout(() => URL.revokeObjectURL(Y), 4e3);
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
  }, zd = async () => {
    try {
      const z = await R.export(Xe);
      Lt({ files: z.files, folder: z.folder });
    } catch (z) {
      Lt({ files: [], folder: "", error: z.message });
    }
  }, Pd = () => {
    Se(!0);
  }, bd = async (z) => {
    try {
      const A = await R.export(Xe, z);
      Lt({ files: A.files, folder: A.folder });
    } catch (A) {
      Lt({ files: [], folder: "", error: A.message });
    }
  }, Al = (t == null ? void 0 : t.poly_mm) ?? [], [Ze, et] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [yn, xn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Rt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : yn, po = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : xn, tt = n.lienzo === "pagina" ? 0 : Ze, nt = n.lienzo === "pagina" ? 0 : et, Il = Al.length ? "M" + Al.map(([z, A]) => `${z - tt},${A - nt}`).join(" L") + " Z" : "", Md = (z) => {
    const A = (t == null ? void 0 : t.placements.filter((T) => T.page === z)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (T) => {
          vt > 1 && k === null && !T.target.closest(".item-box") && C(z);
        },
        "data-testid": `page-${z}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: "sheet", src: R.pageUrl(z, _, n.simular_impresion === !0, r.verBordes), alt: v("Página {i}", { i: z + 1 }), draggable: !1 }),
          r.guidesVisible && Il && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Rt} ${po}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Rt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((Ze - tt + yn) / 10) + 1 },
                    (T, H) => {
                      const Y = H * 10 - (tt - Ze);
                      return Y >= Ze - tt - 0.01 && Y <= Ze - tt + yn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: Y,
                          y1: et - nt,
                          x2: Y,
                          y2: et - nt + xn
                        },
                        `v${H}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((et - nt + xn) / 10) + 1 },
                    (T, H) => {
                      const Y = H * 10 - (nt - et);
                      return Y >= et - nt - 0.01 && Y <= et - nt + xn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: Ze - tt,
                          y1: Y,
                          x2: Ze - tt + yn,
                          y2: Y
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
                  [Ze, et, 1, 1],
                  [Ze + yn, et, -1, 1],
                  [Ze, et + xn, 1, -1],
                  [Ze + yn, et + xn, -1, -1]
                ].map(
                  ([T, H, Y, _e], Ve) => /* @__PURE__ */ i.jsx(
                    "path",
                    {
                      d: `M ${T - tt + 9 * Y} ${H - nt} L ${T - tt} ${H - nt} L ${T - tt} ${H - nt + 9 * _e}`
                    },
                    Ve
                  )
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: Il,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Rt / 250),
                strokeDasharray: `${Rt / 55} ${Rt / 85}`,
                opacity: 0.85
              }
            )
          ] }),
          A.map((T) => {
            const H = e.find((ye) => ye.id === T.asset_id), Y = (M == null ? void 0 : M.uid) === T.uid ? M : null, _e = ((Y ? Y.x : T.x) - tt) / (Rt || 1) * 100, Ve = ((Y ? Y.y : T.y) - nt) / (po || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${T.pinned ? "pinned" : ""} ${(w == null ? void 0 : w.uid) === T.uid ? "dragging" : ""}`,
                style: {
                  left: `${_e}%`,
                  top: `${Ve}%`,
                  width: `${T.w / (Rt || 1) * 100}%`,
                  height: `${T.h / (po || 1) * 100}%`
                },
                title: (H == null ? void 0 : H.name) ?? "",
                onMouseDown: (ye) => xt(ye, T),
                onContextMenu: (ye) => {
                  ye.preventDefault(), Tt(T.uid);
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
  }, Td = k !== null ? [k] : Array.from({ length: vt }, (z, A) => A);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": v("Deshacer (Ctrl+Z)"),
            onClick: () => y(),
            disabled: !S,
            children: /* @__PURE__ */ i.jsx(ym, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": v("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !N,
            children: /* @__PURE__ */ i.jsx(xm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": v("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((z) => ({ ...z, verBordes: !z.verBordes })),
          children: /* @__PURE__ */ i.jsx(co, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": v("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((z) => ({ ...z, guidesVisible: !z.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(kd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": v("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => s(Gr ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx($r, { size: 16 }),
            " ",
            v("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        vt > 1 && k === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(gm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(Qs, { size: 16 }) : /* @__PURE__ */ i.jsx(Qs, { size: 16 }),
              r.eyeFosforito ? v("Fosforito") : r.eyeTransparent ? v("Transparente") : v("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx("button", { onClick: () => c((z) => Math.min(12, z * 1.08)), title: v("Acercar (+)"), children: /* @__PURE__ */ i.jsx(wm, { size: 15 }) }),
        /* @__PURE__ */ i.jsx("button", { onClick: () => c((z) => Math.max(0.05, z / 1.08)), title: v("Alejar (−)"), children: /* @__PURE__ */ i.jsx(km, { size: 15 }) }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              c(1), h({ x: 0, y: 0 });
            },
            "data-tip": v("Centrar la hoja y volver al tamaño original (tecla 0)"),
            children: [
              /* @__PURE__ */ i.jsx(vm, { size: 16 }),
              " ",
              v("Centrar")
            ]
          }
        )
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
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && be.filter((z) => !z.principal).map((z, A) => {
          const [T, H, Y, _e] = z.bbox, Ve = d.w_px || 1, ye = d.h_px || 1;
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
                left: `${T / Ve * 100}%`,
                top: `${H / ye * 100}%`,
                width: `${(Y - T) / Ve * 100}%`,
                height: `${(_e - H) / ye * 100}%`
              },
              onClick: () => Nd(z.id)
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
              title: v("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: ct }),
              onClick: async () => {
                d && (await R.patchAsset(d.id, {
                  offset_mm: ct,
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
              onClick: Rl,
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
        onMouseDown: $,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${m})` },
            children: [
              vt === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: v("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
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
                  children: Td.map(Md)
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
          onClick: Rl,
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
          placeholder: qe,
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
            children: /* @__PURE__ */ i.jsx(Dr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: zd, children: v("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Pd, children: v("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Ed,
            disabled: vt === 0,
            children: v("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Sd,
      {
        open: se,
        initial: n.carpeta_export,
        onClose: () => Se(!1),
        onPick: bd
      }
    ),
    /* @__PURE__ */ i.jsx(
      Tm,
      {
        open: !!dt,
        files: (dt == null ? void 0 : dt.files) ?? [],
        folder: (dt == null ? void 0 : dt.folder) ?? "",
        error: dt == null ? void 0 : dt.error,
        onOpenFolder: (z) => void R.fsOpen(z).catch(() => {
        }),
        onClose: () => Lt(null)
      }
    )
  ] });
}
const Ys = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function Rm({ saveSettings: e }) {
  const t = Je(), [n, r] = j.useState(
    {}
  ), [a, o] = j.useState([]), [l, u] = j.useState(!1), [s, d] = j.useState(!1), [g, y] = j.useState(""), [p, S] = j.useState(""), N = () => R.presets().then((c) => o(Array.isArray(c.names) ? c.names : [])).catch(() => {
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
            n: t(Ys[f] ?? f)
          }));
        } else {
          const f = c.slice(9), h = await R.loadPreset(f);
          await e(h.settings), S(t("Perfil «{n}» cargado", { n: f }));
        }
      } catch {
        S(t("No se pudo aplicar el perfil"));
      }
  }, I = async () => {
    const c = g.trim();
    if (c)
      try {
        const f = await R.savePreset(c);
        o(Array.isArray(f.names) ? f.names : []), y(""), u(!1), S(t("Perfil «{n}» guardado", { n: c }));
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
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((c) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${c}`, children: t(Ys[c] ?? c) }, c)) }),
            a.length > 0 && /* @__PURE__ */ i.jsx("optgroup", { label: t("Guardados"), children: a.map((c) => /* @__PURE__ */ i.jsx("option", { value: `guardado:${c}`, children: c }, c)) })
          ]
        }
      ),
      !l && /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "perfil-guardar",
          title: t("Guardar los ajustes actuales como perfil"),
          onClick: () => u(!0),
          children: [
            /* @__PURE__ */ i.jsx(Ai, { size: 15 }),
            " ",
            t("Guardar")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `chip${s ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => d(!s),
          children: /* @__PURE__ */ i.jsx(vr, { size: 15 })
        }
      )
    ] }),
    l && /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
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
            c.key === "Enter" && I(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: I, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    s && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((c) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: c, children: c }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => v(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => m(c),
          children: /* @__PURE__ */ i.jsx(xd, { size: 15 })
        }
      )
    ] }, c)) }),
    p && /* @__PURE__ */ i.jsx("div", { className: "hint", children: p })
  ] });
}
function Am({ settings: e, saveSettings: t }) {
  const n = Je(), r = e.usar_minis, a = e.modo === "experto", o = {
    90: "libre",
    libre: "no",
    no: "90"
  }, l = {
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
            /* @__PURE__ */ i.jsx(Or, { size: 16 }),
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
            /* @__PURE__ */ i.jsx($r, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(wd, { size: 16 }),
            " ",
            l[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Rm, { saveSettings: t })
  ] });
}
function Im({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: l = "mm" }) {
  const u = l === "mm" ? t : t / 100 * n, s = l === "mm" ? n ? t / n * 100 : 0 : t;
  return /* @__PURE__ */ i.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: l === "mm" ? 200 : 99,
        step: l === "mm" ? 1 : 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(l === "mm" ? t : Math.round(s * 10) / 10),
        title: o("Tamaño del mini"),
        onChange: (d) => {
          const g = Number(d.target.value);
          Number.isFinite(g) && g > 0 && r(g);
        }
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "hint", children: l === "mm" ? "mm" : "%" }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        disabled: !0,
        className: "suave",
        "data-testid": `mini-tamano-mm-${e}`,
        value: l === "mm" ? n ? s.toFixed(1) : "" : u.toFixed(1),
        title: o("Equivale a este tamaño en la otra unidad")
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "hint suave", children: l === "mm" ? "%" : "mm" }),
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
function Ks(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const Dm = {
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, $m = {
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Om({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Je(), [a, o] = j.useState(!0), [l, u] = j.useState({
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
  }), [s, d] = j.useState(!1), g = j.useMemo(() => {
    const h = (n ?? []).filter((C) => C.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((C, _) => Math.min(_.w_mm, _.h_mm) - Math.min(C.w_mm, C.h_mm))[0] ?? null;
  }, [n]), y = g ? Math.min(g.w_mm, g.h_mm) : 0, p = e.modo === "experto", S = ({ children: h }) => p ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, N = (h) => u((k) => ({ ...k, [h]: !k[h] })), v = (h) => t(h), I = j.useRef(null), m = ({ titulo: h, children: k }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
            const se = Number(ne.target.value);
            Number.isNaN(se) || v({ [k]: se });
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
    /* @__PURE__ */ i.jsx(Am, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !p && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "general",
          title: r("General"),
          open: l.general,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(vr, { size: 15 }),
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
                      const k = h.target.value, C = im[k];
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
              ]),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-usar-minis",
                    checked: e.usar_minis,
                    onChange: (h) => v({ usar_minis: h.target.checked })
                  }
                ),
                r("Usar minis (rellenar huecos con copias pequeñas)")
              ] }) }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-auto-recalcular",
                      checked: e.auto_recalcular !== !1,
                      onChange: (h) => v({ auto_recalcular: h.target.checked })
                    }
                  ),
                  r("Recalcular automáticamente con cada cambio")
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        wt,
        {
          id: "minis",
          title: r("Minis"),
          open: l.minis,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Or, { size: 15 }),
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
                    Im,
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
          open: l.optimizacion,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx($r, { size: 15 }),
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
                  s: Dm[e.opt_metodo] ?? 8,
                  m: r($m[e.opt_metodo] ?? e.opt_metodo)
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
          open: l.imagen,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Wa, { size: 15 }),
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
          open: l.offset,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(co, { size: 15 }),
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
      p && /* @__PURE__ */ i.jsxs(wt, { id: "corte", title: r("Estimación de corte"), open: l.corte, toggle: N, children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: Ks(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Hs[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Hs[e.maquina] ?? "Cricut Maker 3"]
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
          open: l.historial,
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
          open: l.visualizacion,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(kd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Li.map((h) => /* @__PURE__ */ i.jsxs(
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
                  return (h = I.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: I,
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
          open: l.extras,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(yd, { size: 15 }),
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
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: Ks(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Sd,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (h) => t({ carpeta_export: h })
      }
    )
  ] });
}
const St = (e) => (globalThis.__crycatAssets || "") + e;
function Js(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Fm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: o = !1,
  onVolumen: l,
  onMute: u,
  onIdioma: s,
  onEasterEgg: d,
  onAyuda: g,
  onReportar: y
}) {
  var G, Q;
  const p = Je(), S = Ll(), [N, v] = j.useState([]), [I, m] = j.useState(0), [c, f] = j.useState(null), [h, k] = j.useState(!1), [C, _] = j.useState(""), P = j.useRef(!1), w = j.useRef([]);
  j.useEffect(() => {
    fetch("/api/funmsgs").then((D) => D.ok ? D.json() : { msgs: [] }).then((D) => v(D.msgs ?? [])).catch(() => {
    });
  }, []), j.useEffect(() => {
    let D = !0;
    return R.version().then((K) => {
      D && (f(K), !K.comprobado && !P.current && (P.current = !0, R.checkVersion().then((Me) => D && f(Me)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      D = !1;
    };
  }, []);
  const x = ((G = c == null ? void 0 : c.actualizacion) == null ? void 0 : G.estado) === "descargando" || ((Q = c == null ? void 0 : c.actualizacion) == null ? void 0 : Q.estado) === "instalando";
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
    const D = setInterval(() => m((K) => K + 1), 1200);
    return () => clearInterval(D);
  }, [M]);
  const ne = N.length ? N : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], se = j.useMemo(() => {
    if (C) return C;
    if (x) {
      const D = c == null ? void 0 : c.actualizacion;
      if ((D == null ? void 0 : D.estado) === "instalando") return p("Instalando y reiniciando…");
      const K = (D == null ? void 0 : D.progreso) != null ? Math.round(D.progreso) : null;
      return K != null ? p("Descargando… {p}%", { p: K }) : (D == null ? void 0 : D.mensaje) || p("Descargando actualización…");
    }
    return M ? ne[I % ne.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? p("Listo") : p("Listo para empezar");
  }, [C, x, M, e, ne, I, n, p, c]), Se = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), ct = j.useMemo(() => {
    const D = e == null ? void 0 : e.eta_s;
    return !M || D === void 0 || D === null || D <= 0.5 ? "" : p(" · {x} restante", { x: Js(D) });
  }, [e == null ? void 0 : e.eta_s, M, p]), Ce = j.useMemo(() => !r || !r.segundos ? "" : Js(r.segundos), [r]), be = async () => {
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
  }, F = !!(c != null && c.hay_nueva && !M && !x) ? p("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
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
            w.current = [...w.current, D].filter((K) => D - K < 2500), w.current.length >= 5 && (w.current = [], _(p("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !M && /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Imágenes colocadas en las hojas"), children: [
          /* @__PURE__ */ i.jsx("b", { children: n.placed }),
          /* @__PURE__ */ i.jsx("span", { children: p("imágenes") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Páginas que ocupa el trabajo"), children: [
          /* @__PURE__ */ i.jsx("b", { children: n.pages }),
          /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? p("páginas") : p("página") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Eficiencia real: superficie de las siluetas sobre el área ÚTIL de la hoja (contando los límites)"), children: [
          /* @__PURE__ */ i.jsxs("b", { children: [
            Math.round(n.efficiency * 100),
            "%"
          ] }),
          /* @__PURE__ */ i.jsx("span", { children: p("eficiencia") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Copias pequeñas extra que rellenan huecos"), children: [
          /* @__PURE__ */ i.jsx("b", { children: n.minis }),
          /* @__PURE__ */ i.jsx("span", { children: p("minis") })
        ] })
      ] }),
      !(n && n.pages > 0 && !M) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: se }),
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
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, Se)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          Se,
          "%",
          ct
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
            /* @__PURE__ */ i.jsx(Em, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(jd, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(zm, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(Sm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: p("Idioma"),
          onClick: () => s == null ? void 0 : s(S === "es" ? "en" : "es"),
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
                title: F || p("Hay una versión nueva"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(Cm, { size: 14 })
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
                onClick: be,
                disabled: h,
                children: h ? "…" : /* @__PURE__ */ i.jsx(Nm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(_m, { size: 14 })
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
            Ce || "—"
          ]
        }
      )
    ] })
  ] });
}
const Bm = [
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
], Um = "/pikmin_bloom/", Xs = "/pikmin/alma.png", qm = "/sonidos/pikmin.mp3", Vm = "/sonidos/pikmin_morir.mp3";
function Gm(e) {
  const [t, n] = j.useState(Bm), [r, a] = j.useState([]);
  return j.useEffect(() => {
    fetch(St("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((l) => "/pikmin/" + l));
    }).catch(() => {
    }), fetch(St("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const l = [...o];
      for (let u = l.length - 1; u > 0; u--) {
        const s = Math.floor(Math.random() * (u + 1));
        [l[u], l[s]] = [l[s], l[u]];
      }
      a(l.slice(0, 60).map((u) => St(Um + u)));
    }).catch(() => {
    });
  }, []), j.useMemo(
    () => e && e.length ? [...e, ...r].map(St) : [...t, ...r].map(St),
    [e, t, r]
  );
}
function Hm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: l = !1,
  minDelay: u,
  maxDelay: s,
  fuentes: d
}) {
  const g = Gm(d), [y, p] = j.useState([]), S = j.useRef(void 0), N = j.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), v = j.useRef(l);
  v.current = l;
  const I = Math.max(5e3, t * 6e4), m = (k) => {
    if (!(!n || o))
      try {
        const C = new Audio(St(k ? Vm : qm));
        C.volume = Math.min(1, Math.max(0, a)), C.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const k = r && Math.random() < 0.25, C = k ? St(Xs) : g[Math.floor(Math.random() * g.length)] ?? St(Xs);
    p((_) => [..._, {
      src: C,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: k,
      estado: "paseando"
    }]), m(k);
  }, f = () => {
    if (!e) return;
    const k = u ?? Math.round(I * 0.5), C = s ?? Math.round(I * 1.5), _ = k + Math.random() * Math.max(1, C - k);
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
const Zs = "crycat_bienvenida_v2";
function Wm() {
  const [e, t] = j.useState(!1);
  return j.useEffect(() => {
    try {
      localStorage.getItem(Zs) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Zs, "1");
    } catch {
    }
    t(!1);
  } };
}
function Qm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Je(), [a, o] = j.useState("inicio");
  if (!e) return null;
  const l = [
    [
      /* @__PURE__ */ i.jsx(Wa, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(vr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Or, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx($r, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Ai, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(Wa, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(co, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Or, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx($r, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(wd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(vr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Ai, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(jm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(yd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(vr, { size: 18 }),
      r("Temas y mascota"),
      r("12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.")
    ]
  ], s = [
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: s.map((g, y) => /* @__PURE__ */ i.jsx("li", { children: g }, y)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? l : u).map(([g, y, p], S) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
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
          /* @__PURE__ */ i.jsx(Dr, { size: 15 }),
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
const Ym = "https://github.com/dhernandezgit/CryCat-Tool", Km = [
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
function Jm({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Je(), [l, u] = j.useState(""), [s, d] = j.useState(""), [g, y] = j.useState(""), [p, S] = j.useState(!0), [N, v] = j.useState(!0), [I, m] = j.useState(!0), [c, f] = j.useState(!1);
  j.useEffect(() => {
    e && (R.version().then((w) => u(w.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (x) => `- [${x.t}] ${x.msg} (${x.donde || "?"})`
  );
  if (!e) return null;
  const k = () => {
    var ne, se;
    const w = navigator.userAgent, x = !!globalThis.__crycatBase, M = [
      `- CryCat: v${l || "?"}`,
      `- Modo: ${x ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${w}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((ne = window.screen) == null ? void 0 : ne.width) ?? "?"}x${((se = window.screen) == null ? void 0 : se.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
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
      s.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    p && w.push("### Entorno", k(), ""), N && n && w.push("### Ajustes", C(), "");
    const x = h();
    return I && x.length && w.push("### Errores recogidos", x.join(`
`), ""), w.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), w.join(`
`);
  }, P = () => {
    const w = `[Bug] ${s.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, x = `${Ym}/issues/new?` + new URLSearchParams({
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
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: Km.map(([w, x]) => /* @__PURE__ */ i.jsx(
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
          value: s,
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
          checked: I,
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
                `${s}

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
function Xm() {
  const [e, t] = j.useState([]), [n, r] = j.useState(null), [a, o] = j.useState(null), [l, u] = j.useState(null), [s, d] = j.useState(null), [g, y] = j.useState(null), [p, S] = j.useState(!0), [N, v] = j.useState(!1), [I, m] = j.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, f] = j.useState(33.3), [h, k] = j.useState(33.3), C = Wm(), _ = j.useRef(null), P = j.useRef(null);
  j.useEffect(() => {
    (async () => {
      try {
        const $ = await R.getSettings();
        d($.settings), Ws($.settings.tema), m((B) => ({
          ...B,
          guidesVisible: $.settings.ver_guias,
          eyeTransparent: $.settings.fondo_transparente
        })), t((await R.listAssets()).map(Ir)), o(await R.result());
      } catch {
        S(!1);
      }
    })();
  }, []), j.useEffect(() => {
    const $ = setInterval(async () => {
      try {
        await R.health(), S(!0);
      } catch {
        S(!1);
      }
    }, 5e3);
    return () => clearInterval($);
  }, []);
  const w = j.useCallback(async () => {
    try {
      t((await R.listAssets()).map(Ir)), o(await R.result());
      try {
        u(await R.estimate());
      } catch {
      }
    } catch {
      S(!1);
    }
  }, []), x = j.useCallback(($) => {
    P.current && window.clearInterval(P.current), P.current = window.setInterval(async () => {
      try {
        const B = await R.job($);
        y(B), B.done && (window.clearInterval(P.current), P.current = null, await w(), B.status === "done" && window.setTimeout(() => y(null), 2500));
      } catch {
        window.clearInterval(P.current), P.current = null;
      }
    }, 300);
  }, []), M = j.useCallback(async () => {
    try {
      const $ = await R.optimize();
      y($), x($.id);
    } catch {
      S(!1);
    }
  }, [x]), ne = j.useCallback(
    async ($) => {
      try {
        const B = await R.optimize($, !0);
        y(B), x(B.id);
      } catch {
        S(!1);
      }
    },
    [x]
  ), se = j.useCallback(() => {
    s && s.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(M, 400));
  }, [M, s]), Se = j.useRef(null);
  j.useEffect(() => {
    Se.current = se;
  }, [se]);
  const ct = j.useRef(!1);
  j.useEffect(() => {
    if (!(!s || ct.current)) {
      if (e.length > 0) {
        ct.current = !0;
        return;
      }
      ct.current = !0, R.crearDemo().then(async ($) => {
        var B;
        $.ok && (await w(), (B = Se.current) == null || B.call(Se));
      }).catch(() => {
      });
    }
  }, [s, e.length, w]);
  const Ce = j.useCallback(
    async ($) => {
      d((B) => B && { ...B, ...$ }), $.tema && Ws($.tema);
      try {
        const B = await R.putSettings($);
        if (B.job)
          y(B.job), x(B.job.id);
        else
          try {
            u(await R.estimate());
          } catch {
          }
      } catch {
        S(!1);
      }
    },
    [x]
  ), be = j.useRef([]), b = j.useRef([]), [O, F] = j.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), G = (s == null ? void 0 : s.historial) !== !1, Q = (s == null ? void 0 : s.historial_max) ?? 40, D = () => F({
    puedeDeshacer: be.current.length > 0,
    puedeRehacer: b.current.length > 0
  }), K = j.useCallback(() => {
    const $ = [];
    return (s == null ? void 0 : s.hist_tamano) !== !1 && $.push("scale_pct"), (s == null ? void 0 : s.hist_copias) !== !1 && $.push("copies"), (s == null ? void 0 : s.hist_borde) !== !1 && $.push("offset_mm", "offset_modo", "offset_color"), (s == null ? void 0 : s.hist_minis) !== !1 && $.push("mini_enabled", "mini_quota"), $;
  }, [
    s == null ? void 0 : s.hist_tamano,
    s == null ? void 0 : s.hist_copias,
    s == null ? void 0 : s.hist_borde,
    s == null ? void 0 : s.hist_minis
  ]), Me = j.useCallback(($) => {
    const B = {};
    for (const yt of K()) B[yt] = $[yt];
    return B;
  }, [K]), qe = j.useCallback(() => {
    G && (be.current = [...be.current, e].slice(-Q), b.current = [], D());
  }, [e, G, Q]), Xe = j.useCallback(async () => {
    const $ = be.current.pop();
    if ($) {
      b.current = [...b.current, e], t($), D();
      for (const B of $)
        await R.patchAsset(B.id, Me(B)).catch(() => {
        });
      await w();
    }
  }, [e, w, Me]), vt = j.useCallback(async () => {
    const $ = b.current.pop();
    if ($) {
      be.current = [...be.current, e], t($), D();
      for (const B of $)
        await R.patchAsset(B.id, Me(B)).catch(() => {
        });
      await w();
    }
  }, [e, w, Me]);
  j.useEffect(() => {
    const $ = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const xt = B.target;
      if (xt && (xt.tagName === "INPUT" || xt.tagName === "TEXTAREA" || xt.tagName === "SELECT" || xt.isContentEditable)) return;
      const Tt = B.key.toLowerCase();
      Tt === "z" && !B.shiftKey ? (B.preventDefault(), Xe()) : (Tt === "y" || Tt === "z" && B.shiftKey) && (B.preventDefault(), vt());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [Xe, vt]);
  const Gr = j.useCallback(
    ($) => {
      const B = (xt) => {
        const Hr = window.innerWidth, Tt = xt.clientX / Hr * 100;
        $ === "left" ? f(Math.min(45, Math.max(12, Tt))) : k(Math.min(60, Math.max(20, Tt - c)));
      }, yt = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", yt);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", yt);
    },
    [c]
  );
  return j.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ i.jsx(dm, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Mm,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await w(), se();
          },
          saveSettings: Ce,
          onEditarContorno: ($) => r($),
          onAntesDeCambiar: qe
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Gr("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ i.jsx(
        Lm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: I,
          setUi: m,
          saveSettings: Ce,
          optimize: M,
          onRefresh: w,
          onJob: ($) => {
            y($), x($.id);
          },
          onRecalc: ne,
          editando: n,
          onFinEdicion: async () => {
            r(null), await w();
          },
          onDeshacer: Xe,
          onRehacer: vt,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Gr("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Om,
        {
          settings: s,
          assets: e,
          saveSettings: Ce
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Fm,
      {
        job: g,
        backendOk: p,
        result: a,
        estimate: l,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        onVolumen: ($) => Ce({ volumen: $ }),
        onMute: ($) => Ce({ mute: $ }),
        onIdioma: ($) => Ce({ idioma: $ }),
        onEasterEgg: () => Ce({
          pikmin_fiesta: !s.pikmin_fiesta
        }),
        onAyuda: C.abrir,
        onReportar: () => v(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      Hm,
      {
        activo: s.pikmin_activo !== !1,
        frecuenciaMin: s.pikmin_frecuencia_min ?? 1,
        sonido: s.pikmin_sonido !== !1,
        sonidoMorir: s.pikmin_sonido_morir !== !1,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        fiesta: s.pikmin_fiesta === !0
      }
    ),
    /* @__PURE__ */ i.jsx(
      Qm,
      {
        open: C.visible,
        onClose: C.cerrar,
        onAbrirCarpeta: () => void R.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      Jm,
      {
        open: N,
        onClose: () => v(!1),
        settings: s,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: pm("es", "Cargando CryCat…") });
}
const Cd = document.getElementById("root"), Oo = [
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
], Ii = 7, ja = [];
globalThis.__crycatErrores = ja;
const _d = (e, t) => {
  ja.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), ja.length > 12 && ja.shift();
};
window.addEventListener("error", (e) => _d(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => _d(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Di;
function eu(e, t = !1) {
  window.clearTimeout(Di);
  const n = hd().colors;
  if (Cd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Ii}</div>
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
    const l = document.getElementById("carga-fun");
    l && (l.style.color = n.danger);
    return;
  }
  let r = Math.floor(Math.random() * Oo.length);
  const a = () => {
    const l = document.getElementById("carga-fun");
    l && (l.textContent = Oo[r++ % Oo.length]);
  }, o = () => {
    a(), Di = window.setTimeout(
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
    r && (r.textContent = `Paso ${t} de ${Ii}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Ii * 100)}%`);
  }
};
let yr = null;
const $i = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Zm = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function eh(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((o, l) => r.push([l, o]));
  for (const [o, l] of r)
    l instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${o}"; filename="${l.name || "file"}"\r
Content-Type: ${l.type || "application/octet-stream"}\r
\r
`), n.push(l), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${o}"\r
\r
${l}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    $i(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function th(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, l = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((y, p) => {
    l[p] = y;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [y, p] = await eh(s);
    u = y, l["content-type"] = p;
  } else s instanceof Blob ? u = $i(await s.arrayBuffer()) : typeof s == "string" && (u = $i(new TextEncoder().encode(s).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(l)) + ", " + JSON.stringify(u) + ")", g = JSON.parse(await yr.runPythonAsync(d));
  return new Response(Zm(g.body), {
    status: g.status || 200,
    headers: g.headers || { "content-type": "application/json" }
  });
}
function nh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && yr)
      try {
        return await th(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function rh() {
  try {
    if (eu("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const o = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: o }).then(() => navigator.serviceWorker.ready),
          new Promise((l) => setTimeout(l, 6e3))
        ]);
      } catch {
      }
    yr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Fo), Fo("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await yr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (o) => {
      const l = o.data;
      if (!l || l.tipo !== "api") return;
      const u = o.ports && o.ports[0];
      if (u)
        try {
          const s = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(l.method) + ", " + JSON.stringify(l.path) + ", " + JSON.stringify(JSON.stringify(l.headers || {})) + ", " + JSON.stringify(l.body || "") + ")", d = await yr.runPythonAsync(s);
          u.postMessage(JSON.parse(d));
        } catch (s) {
          u.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (s && s.message ? s.message : s))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, nh();
    const n = document.createElement("div");
    n.id = "crycat-espera", n.style.cssText = "position:fixed;inset:0;display:none;z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:rgba(255,250,252,.88);font:16px system-ui", n.innerHTML = '<div style="font-size:20px;font-weight:800">Optimizando…</div><div style="font-size:13px;color:#8a7480">El cálculo se hace en tu equipo; puede tardar unos segundos.</div>', document.body.appendChild(n);
    const r = window.fetch.bind(window), a = async (o, l) => {
      const u = String((o == null ? void 0 : o.url) ?? o ?? ""), s = u.includes("/api/optimize") || u.includes("/api/demo");
      s && (n.style.display = "flex");
      try {
        return await r(o, l);
      } finally {
        s && (n.style.display = "none");
      }
    };
    window.fetch = a;
    try {
      const o = hd().key;
      o && o !== "wiwi" && await fetch(gr() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: o })
      });
    } catch {
    }
    Fo("Abriendo la aplicación…", 7), window.clearTimeout(Di), fd(Cd).render(/* @__PURE__ */ i.jsx(Xm, {}));
  } catch (e) {
    eu("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
rh();
