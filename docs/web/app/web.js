var ou = { exports: {} }, Ya = {}, iu = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur = Symbol.for("react.element"), Fd = Symbol.for("react.portal"), Bd = Symbol.for("react.fragment"), Ud = Symbol.for("react.strict_mode"), qd = Symbol.for("react.profiler"), Vd = Symbol.for("react.provider"), Gd = Symbol.for("react.context"), Hd = Symbol.for("react.forward_ref"), Wd = Symbol.for("react.suspense"), Qd = Symbol.for("react.memo"), Yd = Symbol.for("react.lazy"), Fs = Symbol.iterator;
function Kd(e) {
  return e === null || typeof e != "object" ? null : (e = Fs && e[Fs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var su = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lu = Object.assign, uu = {};
function Qn(e, t, n) {
  this.props = e, this.context = t, this.refs = uu, this.updater = n || su;
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cu() {
}
cu.prototype = Qn.prototype;
function Bi(e, t, n) {
  this.props = e, this.context = t, this.refs = uu, this.updater = n || su;
}
var Ui = Bi.prototype = new cu();
Ui.constructor = Bi;
lu(Ui, Qn.prototype);
Ui.isPureReactComponent = !0;
var Bs = Array.isArray, du = Object.prototype.hasOwnProperty, qi = { current: null }, pu = { key: !0, ref: !0, __self: !0, __source: !0 };
function fu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) du.call(t, r) && !pu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), d = 0; d < u; d++) l[d] = arguments[d + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Ur, type: e, key: o, ref: s, props: a, _owner: qi.current };
}
function Jd(e, t) {
  return { $$typeof: Ur, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Vi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ur;
}
function Xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Us = /\/+/g;
function mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xd("" + e.key) : t.toString(36);
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
        case Ur:
        case Fd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + mo(s, 0) : r, Bs(a) ? (n = "", e != null && (n = e.replace(Us, "$&/") + "/"), da(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Vi(a) && (a = Jd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Us, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Bs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + mo(o, u);
    s += da(o, t, n, l, a);
  }
  else if (l = Kd(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + mo(o, u++), s += da(o, t, n, l, a);
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
function Zd(e) {
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
var Me = { current: null }, pa = { transition: null }, ep = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: pa, ReactCurrentOwner: qi };
function mu() {
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
U.Component = Qn;
U.Fragment = Bd;
U.Profiler = qd;
U.PureComponent = Bi;
U.StrictMode = Ud;
U.Suspense = Wd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
U.act = mu;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lu({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = qi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) du.call(t, l) && !pu.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var d = 0; d < l; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Ur, type: e.type, key: a, ref: o, props: r, _owner: s };
};
U.createContext = function(e) {
  return e = { $$typeof: Gd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vd, _context: e }, e.Consumer = e;
};
U.createElement = fu;
U.createFactory = function(e) {
  var t = fu.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Hd, render: e };
};
U.isValidElement = Vi;
U.lazy = function(e) {
  return { $$typeof: Yd, _payload: { _status: -1, _result: e }, _init: Zd };
};
U.memo = function(e, t) {
  return { $$typeof: Qd, type: e, compare: t === void 0 ? null : t };
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
U.unstable_act = mu;
U.useCallback = function(e, t) {
  return Me.current.useCallback(e, t);
};
U.useContext = function(e) {
  return Me.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return Me.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return Me.current.useEffect(e, t);
};
U.useId = function() {
  return Me.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return Me.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return Me.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return Me.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return Me.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return Me.current.useRef(e);
};
U.useState = function(e) {
  return Me.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return Me.current.useTransition();
};
U.version = "18.3.1";
iu.exports = U;
var x = iu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp = x, np = Symbol.for("react.element"), rp = Symbol.for("react.fragment"), ap = Object.prototype.hasOwnProperty, op = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function hu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ap.call(t, r) && !ip.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: np, type: e, key: o, ref: s, props: a, _owner: op.current };
}
Ya.Fragment = rp;
Ya.jsx = hu;
Ya.jsxs = hu;
ou.exports = Ya;
var i = ou.exports, gu = { exports: {} }, Ve = {}, vu = { exports: {} }, yu = {};
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
  function t(M, O) {
    var B = M.length;
    M.push(O);
    e: for (; 0 < B; ) {
      var W = B - 1 >>> 1, Y = M[W];
      if (0 < a(Y, O)) M[W] = O, M[B] = Y, B = W;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var O = M[0], B = M.pop();
    if (B !== O) {
      M[0] = B;
      e: for (var W = 0, Y = M.length, $ = Y >>> 1; W < $; ) {
        var K = 2 * (W + 1) - 1, de = M[K], ge = K + 1, Re = M[ge];
        if (0 > a(de, B)) ge < Y && 0 > a(Re, de) ? (M[W] = Re, M[ge] = B, W = ge) : (M[W] = de, M[K] = B, W = K);
        else if (ge < Y && 0 > a(Re, B)) M[W] = Re, M[ge] = B, W = ge;
        else break e;
      }
    }
    return O;
  }
  function a(M, O) {
    var B = M.sortIndex - O.sortIndex;
    return B !== 0 ? B : M.id - O.id;
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
  var l = [], d = [], v = 1, g = null, p = 3, j = !1, C = !1, y = !1, T = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(M) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= M) r(d), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = n(d);
    }
  }
  function h(M) {
    if (y = !1, f(M), !C) if (n(l) !== null) C = !0, Ne(w);
    else {
      var O = n(d);
      O !== null && Le(h, O.startTime - M);
    }
  }
  function w(M, O) {
    C = !1, y && (y = !1, m(b), b = -1), j = !0;
    var B = p;
    try {
      for (f(O), g = n(l); g !== null && (!(g.expirationTime > O) || M && !N()); ) {
        var W = g.callback;
        if (typeof W == "function") {
          g.callback = null, p = g.priorityLevel;
          var Y = W(g.expirationTime <= O);
          O = e.unstable_now(), typeof Y == "function" ? g.callback = Y : g === n(l) && r(l), f(O);
        } else r(l);
        g = n(l);
      }
      if (g !== null) var $ = !0;
      else {
        var K = n(d);
        K !== null && Le(h, K.startTime - O), $ = !1;
      }
      return $;
    } finally {
      g = null, p = B, j = !1;
    }
  }
  var _ = !1, E = null, b = -1, k = 5, S = -1;
  function N() {
    return !(e.unstable_now() - S < k);
  }
  function V() {
    if (E !== null) {
      var M = e.unstable_now();
      S = M;
      var O = !0;
      try {
        O = E(!0, M);
      } finally {
        O ? ie() : (_ = !1, E = null);
      }
    } else _ = !1;
  }
  var ie;
  if (typeof c == "function") ie = function() {
    c(V);
  };
  else if (typeof MessageChannel < "u") {
    var _e = new MessageChannel(), He = _e.port2;
    _e.port1.onmessage = V, ie = function() {
      He.postMessage(null);
    };
  } else ie = function() {
    T(V, 0);
  };
  function Ne(M) {
    E = M, _ || (_ = !0, ie());
  }
  function Le(M, O) {
    b = T(function() {
      M(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    C || j || (C = !0, Ne(w));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(M) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = p;
    }
    var B = p;
    p = O;
    try {
      return M();
    } finally {
      p = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, O) {
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
    var B = p;
    p = M;
    try {
      return O();
    } finally {
      p = B;
    }
  }, e.unstable_scheduleCallback = function(M, O, B) {
    var W = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, M) {
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
    return Y = B + Y, M = { id: v++, callback: O, priorityLevel: M, startTime: B, expirationTime: Y, sortIndex: -1 }, B > W ? (M.sortIndex = B, t(d, M), n(l) === null && M === n(d) && (y ? (m(b), b = -1) : y = !0, Le(h, B - W))) : (M.sortIndex = Y, t(l, M), C || j || (C = !0, Ne(w))), M;
  }, e.unstable_shouldYield = N, e.unstable_wrapCallback = function(M) {
    var O = p;
    return function() {
      var B = p;
      p = O;
      try {
        return M.apply(this, arguments);
      } finally {
        p = B;
      }
    };
  };
})(yu);
vu.exports = yu;
var sp = vu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp = x, qe = sp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xu = /* @__PURE__ */ new Set(), kr = {};
function vn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) xu.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Uo = Object.prototype.hasOwnProperty, up = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qs = {}, Vs = {};
function cp(e) {
  return Uo.call(Vs, e) ? !0 : Uo.call(qs, e) ? !1 : up.test(e) ? Vs[e] = !0 : (qs[e] = !0, !1);
}
function dp(e, t, n, r) {
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
function pp(e, t, n, r) {
  if (t === null || typeof t > "u" || dp(e, t, n, r)) return !0;
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
function Te(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  xe[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gi, Hi);
  xe[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gi, Hi);
  xe[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var a = xe.hasOwnProperty(t) ? xe[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pp(t, n, a, r) && (n = null), r || a === null ? cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), Sn = Symbol.for("react.portal"), Cn = Symbol.for("react.fragment"), Qi = Symbol.for("react.strict_mode"), qo = Symbol.for("react.profiler"), wu = Symbol.for("react.provider"), ku = Symbol.for("react.context"), Yi = Symbol.for("react.forward_ref"), Vo = Symbol.for("react.suspense"), Go = Symbol.for("react.suspense_list"), Ki = Symbol.for("react.memo"), $t = Symbol.for("react.lazy"), ju = Symbol.for("react.offscreen"), Gs = Symbol.iterator;
function Jn(e) {
  return e === null || typeof e != "object" ? null : (e = Gs && e[Gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ho;
function or(e) {
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
    go = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? or(e) : "";
}
function fp(e) {
  switch (e.tag) {
    case 5:
      return or(e.type);
    case 16:
      return or("Lazy");
    case 13:
      return or("Suspense");
    case 19:
      return or("SuspenseList");
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
    case Cn:
      return "Fragment";
    case Sn:
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
    case ku:
      return (e.displayName || "Context") + ".Consumer";
    case wu:
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
function mp(e) {
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
function Su(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hp(e) {
  var t = Su(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = hp(e));
}
function Cu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Su(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
function Hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Zt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function _u(e, t) {
  t = t.checked, t != null && Wi(e, "checked", t, !1);
}
function Qo(e, t) {
  _u(e, t);
  var n = Zt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yo(e, t.type, Zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ws(e, t, n) {
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
var ir = Array.isArray;
function An(e, t, n, r) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Qs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function Nu(e, t) {
  var n = Zt(t.value), r = Zt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Eu(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Eu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, zu = function(e) {
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
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ur = {
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
}, gp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ur).forEach(function(e) {
  gp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ur[t] = ur[e];
  });
});
function Pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ur.hasOwnProperty(e) && ur[e] ? ("" + t).trim() : t + "px";
}
function bu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Pu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var vp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xo(e, t) {
  if (t) {
    if (vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
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
var ti = null, In = null, Dn = null;
function Ks(e) {
  if (e = Gr(e)) {
    if (typeof ti != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = eo(t), ti(e.stateNode, e.type, t));
  }
}
function Mu(e) {
  In ? Dn ? Dn.push(e) : Dn = [e] : In = e;
}
function Tu() {
  if (In) {
    var e = In, t = Dn;
    if (Dn = In = null, Ks(e), t) for (e = 0; e < t.length; e++) Ks(t[e]);
  }
}
function Lu(e, t) {
  return e(t);
}
function Ru() {
}
var yo = !1;
function Au(e, t, n) {
  if (yo) return e(t, n);
  yo = !0;
  try {
    return Lu(e, t, n);
  } finally {
    yo = !1, (In !== null || Dn !== null) && (Ru(), Tu());
  }
}
function Sr(e, t) {
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
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var ni = !1;
if (zt) try {
  var Xn = {};
  Object.defineProperty(Xn, "passive", { get: function() {
    ni = !0;
  } }), window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn);
} catch {
  ni = !1;
}
function yp(e, t, n, r, a, o, s, u, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var cr = !1, _a = null, Na = !1, ri = null, xp = { onError: function(e) {
  cr = !0, _a = e;
} };
function wp(e, t, n, r, a, o, s, u, l) {
  cr = !1, _a = null, yp.apply(xp, arguments);
}
function kp(e, t, n, r, a, o, s, u, l) {
  if (wp.apply(this, arguments), cr) {
    if (cr) {
      var d = _a;
      cr = !1, _a = null;
    } else throw Error(z(198));
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
function Iu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Js(e) {
  if (yn(e) !== e) throw Error(z(188));
}
function jp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yn(e), t === null) throw Error(z(188));
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
        if (o === n) return Js(a), e;
        if (o === r) return Js(a), t;
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
function Du(e) {
  return e = jp(e), e !== null ? $u(e) : null;
}
function $u(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $u(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ou = qe.unstable_scheduleCallback, Xs = qe.unstable_cancelCallback, Sp = qe.unstable_shouldYield, Cp = qe.unstable_requestPaint, ue = qe.unstable_now, _p = qe.unstable_getCurrentPriorityLevel, Xi = qe.unstable_ImmediatePriority, Fu = qe.unstable_UserBlockingPriority, Ea = qe.unstable_NormalPriority, Np = qe.unstable_LowPriority, Bu = qe.unstable_IdlePriority, Ka = null, vt = null;
function Ep(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function") try {
    vt.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : bp, zp = Math.log, Pp = Math.LN2;
function bp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Pp | 0) | 0;
}
var Xr = 64, Zr = 4194304;
function sr(e) {
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
    var u = s & ~a;
    u !== 0 ? r = sr(u) : (o &= s, o !== 0 && (r = sr(o)));
  } else s = n & ~a, s !== 0 ? r = sr(s) : o !== 0 && (r = sr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Mp(e, t) {
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
function Tp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ct(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Mp(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ai(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Uu() {
  var e = Xr;
  return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e;
}
function xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Lp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ct(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function Zi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var Q = 0;
function qu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vu, es, Gu, Hu, Wu, oi = !1, ea = [], Gt = null, Ht = null, Wt = null, Cr = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), Ft = [], Rp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zs(e, t) {
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
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function Zn(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Gr(t), t !== null && es(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Ap(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Gt = Zn(Gt, e, t, n, r, a), !0;
    case "dragenter":
      return Ht = Zn(Ht, e, t, n, r, a), !0;
    case "mouseover":
      return Wt = Zn(Wt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Cr.set(o, Zn(Cr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, _r.set(o, Zn(_r.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Qu(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Iu(n), t !== null) {
          e.blockedOn = t, Wu(e.priority, function() {
            Gu(n);
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
    } else return t = Gr(n), t !== null && es(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function el(e, t, n) {
  fa(e) && n.delete(t);
}
function Ip() {
  oi = !1, Gt !== null && fa(Gt) && (Gt = null), Ht !== null && fa(Ht) && (Ht = null), Wt !== null && fa(Wt) && (Wt = null), Cr.forEach(el), _r.forEach(el);
}
function er(e, t) {
  e.blockedOn === t && (e.blockedOn = null, oi || (oi = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Ip)));
}
function Nr(e) {
  function t(a) {
    return er(a, e);
  }
  if (0 < ea.length) {
    er(ea[0], e);
    for (var n = 1; n < ea.length; n++) {
      var r = ea[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gt !== null && er(Gt, e), Ht !== null && er(Ht, e), Wt !== null && er(Wt, e), Cr.forEach(t), _r.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) Qu(n), n.blockedOn === null && Ft.shift();
}
var $n = Tt.ReactCurrentBatchConfig, Pa = !0;
function Dp(e, t, n, r) {
  var a = Q, o = $n.transition;
  $n.transition = null;
  try {
    Q = 1, ts(e, t, n, r);
  } finally {
    Q = a, $n.transition = o;
  }
}
function $p(e, t, n, r) {
  var a = Q, o = $n.transition;
  $n.transition = null;
  try {
    Q = 4, ts(e, t, n, r);
  } finally {
    Q = a, $n.transition = o;
  }
}
function ts(e, t, n, r) {
  if (Pa) {
    var a = ii(e, t, n, r);
    if (a === null) Po(e, t, r, ba, n), Zs(e, r);
    else if (Ap(a, e, t, n, r)) r.stopPropagation();
    else if (Zs(e, r), t & 4 && -1 < Rp.indexOf(e)) {
      for (; a !== null; ) {
        var o = Gr(a);
        if (o !== null && Vu(o), o = ii(e, t, n, r), o === null && Po(e, t, r, ba, n), o === a) break;
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
    if (e = Iu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ba = e, null;
}
function Yu(e) {
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
      switch (_p()) {
        case Xi:
          return 1;
        case Fu:
          return 4;
        case Ea:
        case Np:
          return 16;
        case Bu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null, ns = null, ma = null;
function Ku() {
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
function tl() {
  return !1;
}
function Ge(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ta : tl, this.isPropagationStopped = tl, this;
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
var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, rs = Ge(Yn), Vr = oe({}, Yn, { view: 0, detail: 0 }), Op = Ge(Vr), wo, ko, tr, Ja = oe({}, Vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: as, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== tr && (tr && e.type === "mousemove" ? (wo = e.screenX - tr.screenX, ko = e.screenY - tr.screenY) : ko = wo = 0, tr = e), wo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ko;
} }), nl = Ge(Ja), Fp = oe({}, Ja, { dataTransfer: 0 }), Bp = Ge(Fp), Up = oe({}, Vr, { relatedTarget: 0 }), jo = Ge(Up), qp = oe({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = Ge(qp), Gp = oe({}, Yn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Hp = Ge(Gp), Wp = oe({}, Yn, { data: 0 }), rl = Ge(Wp), Qp = {
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
}, Yp = {
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
}, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1;
}
function as() {
  return Jp;
}
var Xp = oe({}, Vr, { key: function(e) {
  if (e.key) {
    var t = Qp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ha(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: as, charCode: function(e) {
  return e.type === "keypress" ? ha(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ha(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Zp = Ge(Xp), ef = oe({}, Ja, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), al = Ge(ef), tf = oe({}, Vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: as }), nf = Ge(tf), rf = oe({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), af = Ge(rf), of = oe({}, Ja, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), sf = Ge(of), lf = [9, 13, 27, 32], os = zt && "CompositionEvent" in window, dr = null;
zt && "documentMode" in document && (dr = document.documentMode);
var uf = zt && "TextEvent" in window && !dr, Ju = zt && (!os || dr && 8 < dr && 11 >= dr), ol = " ", il = !1;
function Xu(e, t) {
  switch (e) {
    case "keyup":
      return lf.indexOf(t.keyCode) !== -1;
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
function Zu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function cf(e, t) {
  switch (e) {
    case "compositionend":
      return Zu(t);
    case "keypress":
      return t.which !== 32 ? null : (il = !0, ol);
    case "textInput":
      return e = t.data, e === ol && il ? null : e;
    default:
      return null;
  }
}
function df(e, t) {
  if (_n) return e === "compositionend" || !os && Xu(e, t) ? (e = Ku(), ma = ns = qt = null, _n = !1, e) : null;
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
      return Ju && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pf[e.type] : t === "textarea";
}
function ec(e, t, n, r) {
  Mu(r), t = Ma(t, "onChange"), 0 < t.length && (n = new rs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var pr = null, Er = null;
function ff(e) {
  dc(e, 0);
}
function Xa(e) {
  var t = zn(e);
  if (Cu(t)) return e;
}
function mf(e, t) {
  if (e === "change") return t;
}
var tc = !1;
if (zt) {
  var So;
  if (zt) {
    var Co = "oninput" in document;
    if (!Co) {
      var ll = document.createElement("div");
      ll.setAttribute("oninput", "return;"), Co = typeof ll.oninput == "function";
    }
    So = Co;
  } else So = !1;
  tc = So && (!document.documentMode || 9 < document.documentMode);
}
function ul() {
  pr && (pr.detachEvent("onpropertychange", nc), Er = pr = null);
}
function nc(e) {
  if (e.propertyName === "value" && Xa(Er)) {
    var t = [];
    ec(t, Er, e, Ji(e)), Au(ff, t);
  }
}
function hf(e, t, n) {
  e === "focusin" ? (ul(), pr = t, Er = n, pr.attachEvent("onpropertychange", nc)) : e === "focusout" && ul();
}
function gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xa(Er);
}
function vf(e, t) {
  if (e === "click") return Xa(t);
}
function yf(e, t) {
  if (e === "input" || e === "change") return Xa(t);
}
function xf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : xf;
function zr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Uo.call(t, a) || !pt(e[a], t[a])) return !1;
  }
  return !0;
}
function cl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dl(e, t) {
  var n = cl(e);
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
    n = cl(n);
  }
}
function rc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ac() {
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
function wf(e) {
  var t = ac(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && rc(n.ownerDocument.documentElement, n)) {
    if (r !== null && is(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = dl(n, o);
        var s = dl(
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
var kf = zt && "documentMode" in document && 11 >= document.documentMode, Nn = null, si = null, fr = null, li = !1;
function pl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li || Nn == null || Nn !== Ca(r) || (r = Nn, "selectionStart" in r && is(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fr && zr(fr, r) || (fr = r, r = Ma(si, "onSelect"), 0 < r.length && (t = new rs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Nn)));
}
function na(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var En = { animationend: na("Animation", "AnimationEnd"), animationiteration: na("Animation", "AnimationIteration"), animationstart: na("Animation", "AnimationStart"), transitionend: na("Transition", "TransitionEnd") }, _o = {}, oc = {};
zt && (oc = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
function Za(e) {
  if (_o[e]) return _o[e];
  if (!En[e]) return e;
  var t = En[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in oc) return _o[e] = t[n];
  return e;
}
var ic = Za("animationend"), sc = Za("animationiteration"), lc = Za("animationstart"), uc = Za("transitionend"), cc = /* @__PURE__ */ new Map(), fl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tn(e, t) {
  cc.set(e, t), vn(t, [e]);
}
for (var No = 0; No < fl.length; No++) {
  var Eo = fl[No], jf = Eo.toLowerCase(), Sf = Eo[0].toUpperCase() + Eo.slice(1);
  tn(jf, "on" + Sf);
}
tn(ic, "onAnimationEnd");
tn(sc, "onAnimationIteration");
tn(lc, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(uc, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function ml(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, kp(r, t, void 0, e), e.currentTarget = null;
}
function dc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, d = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        ml(a, u, d), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, d = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        ml(a, u, d), o = l;
      }
    }
  }
  if (Na) throw e = ri, Na = !1, ri = null, e;
}
function Z(e, t) {
  var n = t[fi];
  n === void 0 && (n = t[fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pc(t, e, 2, !1), n.add(r));
}
function zo(e, t, n) {
  var r = 0;
  t && (r |= 4), pc(n, e, r, t);
}
var ra = "_reactListening" + Math.random().toString(36).slice(2);
function Pr(e) {
  if (!e[ra]) {
    e[ra] = !0, xu.forEach(function(n) {
      n !== "selectionchange" && (Cf.has(n) || zo(n, !1, e), zo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ra] || (t[ra] = !0, zo("selectionchange", !1, t));
  }
}
function pc(e, t, n, r) {
  switch (Yu(t)) {
    case 1:
      var a = Dp;
      break;
    case 4:
      a = $p;
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
      var u = r.stateNode.containerInfo;
      if (u === a || u.nodeType === 8 && u.parentNode === a) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === a || l.nodeType === 8 && l.parentNode === a)) return;
        s = s.return;
      }
      for (; u !== null; ) {
        if (s = sn(u), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Au(function() {
    var d = o, v = Ji(n), g = [];
    e: {
      var p = cc.get(e);
      if (p !== void 0) {
        var j = rs, C = e;
        switch (e) {
          case "keypress":
            if (ha(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Zp;
            break;
          case "focusin":
            C = "focus", j = jo;
            break;
          case "focusout":
            C = "blur", j = jo;
            break;
          case "beforeblur":
          case "afterblur":
            j = jo;
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
            j = nl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = nf;
            break;
          case ic:
          case sc:
          case lc:
            j = Vp;
            break;
          case uc:
            j = af;
            break;
          case "scroll":
            j = Op;
            break;
          case "wheel":
            j = sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Hp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = al;
        }
        var y = (t & 4) !== 0, T = !y && e === "scroll", m = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var h = f.stateNode;
          if (f.tag === 5 && h !== null && (f = h, m !== null && (h = Sr(c, m), h != null && y.push(br(c, h, f)))), T) break;
          c = c.return;
        }
        0 < y.length && (p = new j(p, C, null, n, v), g.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", p && n !== ei && (C = n.relatedTarget || n.fromElement) && (sn(C) || C[Pt])) break e;
        if ((j || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window, j ? (C = n.relatedTarget || n.toElement, j = d, C = C ? sn(C) : null, C !== null && (T = yn(C), C !== T || C.tag !== 5 && C.tag !== 6) && (C = null)) : (j = null, C = d), j !== C)) {
          if (y = nl, h = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = al, h = "onPointerLeave", m = "onPointerEnter", c = "pointer"), T = j == null ? p : zn(j), f = C == null ? p : zn(C), p = new y(h, c + "leave", j, n, v), p.target = T, p.relatedTarget = f, h = null, sn(v) === d && (y = new y(m, c + "enter", C, n, v), y.target = f, y.relatedTarget = T, h = y), T = h, j && C) t: {
            for (y = j, m = C, c = 0, f = y; f; f = jn(f)) c++;
            for (f = 0, h = m; h; h = jn(h)) f++;
            for (; 0 < c - f; ) y = jn(y), c--;
            for (; 0 < f - c; ) m = jn(m), f--;
            for (; c--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = jn(y), m = jn(m);
            }
            y = null;
          }
          else y = null;
          j !== null && hl(g, p, j, y, !1), C !== null && T !== null && hl(g, T, C, y, !0);
        }
      }
      e: {
        if (p = d ? zn(d) : window, j = p.nodeName && p.nodeName.toLowerCase(), j === "select" || j === "input" && p.type === "file") var w = mf;
        else if (sl(p)) if (tc) w = yf;
        else {
          w = gf;
          var _ = hf;
        }
        else (j = p.nodeName) && j.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = vf);
        if (w && (w = w(e, d))) {
          ec(g, w, n, v);
          break e;
        }
        _ && _(e, p, d), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && Yo(p, "number", p.value);
      }
      switch (_ = d ? zn(d) : window, e) {
        case "focusin":
          (sl(_) || _.contentEditable === "true") && (Nn = _, si = d, fr = null);
          break;
        case "focusout":
          fr = si = Nn = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          li = !1, pl(g, n, v);
          break;
        case "selectionchange":
          if (kf) break;
        case "keydown":
        case "keyup":
          pl(g, n, v);
      }
      var E;
      if (os) e: {
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
      else _n ? Xu(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Ju && n.locale !== "ko" && (_n || b !== "onCompositionStart" ? b === "onCompositionEnd" && _n && (E = Ku()) : (qt = v, ns = "value" in qt ? qt.value : qt.textContent, _n = !0)), _ = Ma(d, b), 0 < _.length && (b = new rl(b, e, null, n, v), g.push({ event: b, listeners: _ }), E ? b.data = E : (E = Zu(n), E !== null && (b.data = E)))), (E = uf ? cf(e, n) : df(e, n)) && (d = Ma(d, "onBeforeInput"), 0 < d.length && (v = new rl("onBeforeInput", "beforeinput", null, n, v), g.push({ event: v, listeners: d }), v.data = E));
    }
    dc(g, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Sr(e, n), o != null && r.unshift(br(e, o, a)), o = Sr(e, t), o != null && r.push(br(e, o, a))), e = e.return;
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hl(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, d = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && d !== null && (u = d, a ? (l = Sr(n, o), l != null && s.unshift(br(n, l, u))) : a || (l = Sr(n, o), l != null && s.push(br(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _f = /\r\n?/g, Nf = /\u0000|\uFFFD/g;
function gl(e) {
  return (typeof e == "string" ? e : "" + e).replace(_f, `
`).replace(Nf, "");
}
function aa(e, t, n) {
  if (t = gl(t), gl(e) !== t && n) throw Error(z(425));
}
function Ta() {
}
var ui = null, ci = null;
function di(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var pi = typeof setTimeout == "function" ? setTimeout : void 0, Ef = typeof clearTimeout == "function" ? clearTimeout : void 0, vl = typeof Promise == "function" ? Promise : void 0, zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof vl < "u" ? function(e) {
  return vl.resolve(null).then(e).catch(Pf);
} : pi;
function Pf(e) {
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
        e.removeChild(a), Nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Nr(t);
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
function yl(e) {
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
var Kn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + Kn, Mr = "__reactProps$" + Kn, Pt = "__reactContainer$" + Kn, fi = "__reactEvents$" + Kn, bf = "__reactListeners$" + Kn, Mf = "__reactHandles$" + Kn;
function sn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Pt] || n[gt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yl(e); e !== null; ) {
        if (n = e[gt]) return n;
        e = yl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Gr(e) {
  return e = e[gt] || e[Pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function eo(e) {
  return e[Mr] || null;
}
var mi = [], Pn = -1;
function nn(e) {
  return { current: e };
}
function ee(e) {
  0 > Pn || (e.current = mi[Pn], mi[Pn] = null, Pn--);
}
function X(e, t) {
  Pn++, mi[Pn] = e.current, e.current = t;
}
var en = {}, Ce = nn(en), De = nn(!1), pn = en;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function $e(e) {
  return e = e.childContextTypes, e != null;
}
function La() {
  ee(De), ee(Ce);
}
function xl(e, t, n) {
  if (Ce.current !== en) throw Error(z(168));
  X(Ce, t), X(De, n);
}
function fc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, mp(e) || "Unknown", a));
  return oe({}, n, r);
}
function Ra(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || en, pn = Ce.current, X(Ce, e), X(De, De.current), !0;
}
function wl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = fc(e, t, pn), r.__reactInternalMemoizedMergedChildContext = e, ee(De), ee(Ce), X(Ce, e)) : ee(De), X(De, n);
}
var St = null, to = !1, Mo = !1;
function mc(e) {
  St === null ? St = [e] : St.push(e);
}
function Tf(e) {
  to = !0, mc(e);
}
function rn() {
  if (!Mo && St !== null) {
    Mo = !0;
    var e = 0, t = Q;
    try {
      var n = St;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      St = null, to = !1;
    } catch (a) {
      throw St !== null && (St = St.slice(e + 1)), Ou(Xi, rn), a;
    } finally {
      Q = t, Mo = !1;
    }
  }
  return null;
}
var bn = [], Mn = 0, Aa = null, Ia = 0, Qe = [], Ye = 0, fn = null, _t = 1, Nt = "";
function an(e, t) {
  bn[Mn++] = Ia, bn[Mn++] = Aa, Aa = e, Ia = t;
}
function hc(e, t, n) {
  Qe[Ye++] = _t, Qe[Ye++] = Nt, Qe[Ye++] = fn, fn = e;
  var r = _t;
  e = Nt;
  var a = 32 - ct(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ct(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, _t = 1 << 32 - ct(t) + a | n << a | r, Nt = o + e;
  } else _t = 1 << o | n << a | r, Nt = e;
}
function ss(e) {
  e.return !== null && (an(e, 1), hc(e, 1, 0));
}
function ls(e) {
  for (; e === Aa; ) Aa = bn[--Mn], bn[Mn] = null, Ia = bn[--Mn], bn[Mn] = null;
  for (; e === fn; ) fn = Qe[--Ye], Qe[Ye] = null, Nt = Qe[--Ye], Qe[Ye] = null, _t = Qe[--Ye], Qe[Ye] = null;
}
var Ue = null, Be = null, te = !1, ut = null;
function gc(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function kl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = Qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: _t, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Be = null, !0) : !1;
    default:
      return !1;
  }
}
function hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gi(e) {
  if (te) {
    var t = Be;
    if (t) {
      var n = t;
      if (!kl(e, t)) {
        if (hi(e)) throw Error(z(418));
        t = Qt(n.nextSibling);
        var r = Ue;
        t && kl(e, t) ? gc(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, Ue = e);
      }
    } else {
      if (hi(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, te = !1, Ue = e;
    }
  }
}
function jl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function oa(e) {
  if (e !== Ue) return !1;
  if (!te) return jl(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !di(e.type, e.memoizedProps)), t && (t = Be)) {
    if (hi(e)) throw vc(), Error(z(418));
    for (; t; ) gc(e, t), t = Qt(t.nextSibling);
  }
  if (jl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Ue ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function vc() {
  for (var e = Be; e; ) e = Qt(e.nextSibling);
}
function qn() {
  Be = Ue = null, te = !1;
}
function us(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Lf = Tt.ReactCurrentBatchConfig;
function nr(e, t, n) {
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
function ia(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Sl(e) {
  var t = e._init;
  return t(e._payload);
}
function yc(e) {
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
  function u(m, c, f, h) {
    return c === null || c.tag !== 6 ? (c = $o(f, m.mode, h), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function l(m, c, f, h) {
    var w = f.type;
    return w === Cn ? v(m, c, f.props.children, h, f.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === $t && Sl(w) === c.type) ? (h = a(c, f.props), h.ref = nr(m, c, f), h.return = m, h) : (h = ja(f.type, f.key, f.props, null, m.mode, h), h.ref = nr(m, c, f), h.return = m, h);
  }
  function d(m, c, f, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Oo(f, m.mode, h), c.return = m, c) : (c = a(c, f.children || []), c.return = m, c);
  }
  function v(m, c, f, h, w) {
    return c === null || c.tag !== 7 ? (c = dn(f, m.mode, h, w), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function g(m, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = $o("" + c, m.mode, f), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Yr:
          return f = ja(c.type, c.key, c.props, null, m.mode, f), f.ref = nr(m, null, c), f.return = m, f;
        case Sn:
          return c = Oo(c, m.mode, f), c.return = m, c;
        case $t:
          var h = c._init;
          return g(m, h(c._payload), f);
      }
      if (ir(c) || Jn(c)) return c = dn(c, m.mode, f, null), c.return = m, c;
      ia(m, c);
    }
    return null;
  }
  function p(m, c, f, h) {
    var w = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return w !== null ? null : u(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yr:
          return f.key === w ? l(m, c, f, h) : null;
        case Sn:
          return f.key === w ? d(m, c, f, h) : null;
        case $t:
          return w = f._init, p(
            m,
            c,
            w(f._payload),
            h
          );
      }
      if (ir(f) || Jn(f)) return w !== null ? null : v(m, c, f, h, null);
      ia(m, f);
    }
    return null;
  }
  function j(m, c, f, h, w) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(f) || null, u(c, m, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Yr:
          return m = m.get(h.key === null ? f : h.key) || null, l(c, m, h, w);
        case Sn:
          return m = m.get(h.key === null ? f : h.key) || null, d(c, m, h, w);
        case $t:
          var _ = h._init;
          return j(m, c, f, _(h._payload), w);
      }
      if (ir(h) || Jn(h)) return m = m.get(f) || null, v(c, m, h, w, null);
      ia(c, h);
    }
    return null;
  }
  function C(m, c, f, h) {
    for (var w = null, _ = null, E = c, b = c = 0, k = null; E !== null && b < f.length; b++) {
      E.index > b ? (k = E, E = null) : k = E.sibling;
      var S = p(m, E, f[b], h);
      if (S === null) {
        E === null && (E = k);
        break;
      }
      e && E && S.alternate === null && t(m, E), c = o(S, c, b), _ === null ? w = S : _.sibling = S, _ = S, E = k;
    }
    if (b === f.length) return n(m, E), te && an(m, b), w;
    if (E === null) {
      for (; b < f.length; b++) E = g(m, f[b], h), E !== null && (c = o(E, c, b), _ === null ? w = E : _.sibling = E, _ = E);
      return te && an(m, b), w;
    }
    for (E = r(m, E); b < f.length; b++) k = j(E, m, b, f[b], h), k !== null && (e && k.alternate !== null && E.delete(k.key === null ? b : k.key), c = o(k, c, b), _ === null ? w = k : _.sibling = k, _ = k);
    return e && E.forEach(function(N) {
      return t(m, N);
    }), te && an(m, b), w;
  }
  function y(m, c, f, h) {
    var w = Jn(f);
    if (typeof w != "function") throw Error(z(150));
    if (f = w.call(f), f == null) throw Error(z(151));
    for (var _ = w = null, E = c, b = c = 0, k = null, S = f.next(); E !== null && !S.done; b++, S = f.next()) {
      E.index > b ? (k = E, E = null) : k = E.sibling;
      var N = p(m, E, S.value, h);
      if (N === null) {
        E === null && (E = k);
        break;
      }
      e && E && N.alternate === null && t(m, E), c = o(N, c, b), _ === null ? w = N : _.sibling = N, _ = N, E = k;
    }
    if (S.done) return n(
      m,
      E
    ), te && an(m, b), w;
    if (E === null) {
      for (; !S.done; b++, S = f.next()) S = g(m, S.value, h), S !== null && (c = o(S, c, b), _ === null ? w = S : _.sibling = S, _ = S);
      return te && an(m, b), w;
    }
    for (E = r(m, E); !S.done; b++, S = f.next()) S = j(E, m, b, S.value, h), S !== null && (e && S.alternate !== null && E.delete(S.key === null ? b : S.key), c = o(S, c, b), _ === null ? w = S : _.sibling = S, _ = S);
    return e && E.forEach(function(V) {
      return t(m, V);
    }), te && an(m, b), w;
  }
  function T(m, c, f, h) {
    if (typeof f == "object" && f !== null && f.type === Cn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yr:
          e: {
            for (var w = f.key, _ = c; _ !== null; ) {
              if (_.key === w) {
                if (w = f.type, w === Cn) {
                  if (_.tag === 7) {
                    n(m, _.sibling), c = a(_, f.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (_.elementType === w || typeof w == "object" && w !== null && w.$$typeof === $t && Sl(w) === _.type) {
                  n(m, _.sibling), c = a(_, f.props), c.ref = nr(m, _, f), c.return = m, m = c;
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            f.type === Cn ? (c = dn(f.props.children, m.mode, h, f.key), c.return = m, m = c) : (h = ja(f.type, f.key, f.props, null, m.mode, h), h.ref = nr(m, c, f), h.return = m, m = h);
          }
          return s(m);
        case Sn:
          e: {
            for (_ = f.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
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
          return _ = f._init, T(m, c, _(f._payload), h);
      }
      if (ir(f)) return C(m, c, f, h);
      if (Jn(f)) return y(m, c, f, h);
      ia(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, f), c.return = m, m = c) : (n(m, c), c = $o(f, m.mode, h), c.return = m, m = c), s(m)) : n(m, c);
  }
  return T;
}
var Vn = yc(!0), xc = yc(!1), Da = nn(null), $a = null, Tn = null, cs = null;
function ds() {
  cs = Tn = $a = null;
}
function ps(e) {
  var t = Da.current;
  ee(Da), e._currentValue = t;
}
function vi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function On(e, t) {
  $a = e, cs = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Xe(e) {
  var t = e._currentValue;
  if (cs !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
    if ($a === null) throw Error(z(308));
    Tn = e, $a.dependencies = { lanes: 0, firstContext: e };
  } else Tn = Tn.next = e;
  return t;
}
var ln = null;
function fs(e) {
  ln === null ? ln = [e] : ln.push(e);
}
function wc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, fs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, bt(e, r);
}
function bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ot = !1;
function ms(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function kc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, G & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, bt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, fs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, bt(e, n);
}
function ga(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
  }
}
function Cl(e, t) {
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
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, d = l.next;
    l.next = null, s === null ? o = d : s.next = d, s = l;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== s && (u === null ? v.firstBaseUpdate = d : u.next = d, v.lastBaseUpdate = l));
  }
  if (o !== null) {
    var g = a.baseState;
    s = 0, v = d = l = null, u = o;
    do {
      var p = u.lane, j = u.eventTime;
      if ((r & p) === p) {
        v !== null && (v = v.next = {
          eventTime: j,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, y = u;
          switch (p = t, j = n, y.tag) {
            case 1:
              if (C = y.payload, typeof C == "function") {
                g = C.call(j, g, p);
                break e;
              }
              g = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = y.payload, p = typeof C == "function" ? C.call(j, g, p) : C, p == null) break e;
              g = oe({}, g, p);
              break e;
            case 2:
              Ot = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [u] : p.push(u));
      } else j = { eventTime: j, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (d = v = j, l = g) : v = v.next = j, s |= p;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (v === null && (l = g), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = v, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    hn |= s, e.lanes = s, e.memoizedState = g;
  }
}
function _l(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Hr = {}, yt = nn(Hr), Tr = nn(Hr), Lr = nn(Hr);
function un(e) {
  if (e === Hr) throw Error(z(174));
  return e;
}
function hs(e, t) {
  switch (X(Lr, t), X(Tr, e), X(yt, Hr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jo(t, e);
  }
  ee(yt), X(yt, t);
}
function Gn() {
  ee(yt), ee(Tr), ee(Lr);
}
function jc(e) {
  un(Lr.current);
  var t = un(yt.current), n = Jo(t, e.type);
  t !== n && (X(Tr, e), X(yt, n));
}
function gs(e) {
  Tr.current === e && (ee(yt), ee(Tr));
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
var va = Tt.ReactCurrentDispatcher, Lo = Tt.ReactCurrentBatchConfig, mn = 0, ae = null, pe = null, me = null, Ba = !1, mr = !1, Rr = 0, Rf = 0;
function ke() {
  throw Error(z(321));
}
function ys(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
  return !0;
}
function xs(e, t, n, r, a, o) {
  if (mn = o, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, va.current = e === null || e.memoizedState === null ? $f : Of, e = n(r, a), mr) {
    o = 0;
    do {
      if (mr = !1, Rr = 0, 25 <= o) throw Error(z(301));
      o += 1, me = pe = null, t.updateQueue = null, va.current = Ff, e = n(r, a);
    } while (mr);
  }
  if (va.current = Ua, t = pe !== null && pe.next !== null, mn = 0, me = pe = ae = null, Ba = !1, t) throw Error(z(300));
  return e;
}
function ws() {
  var e = Rr !== 0;
  return Rr = 0, e;
}
function ht() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ae.memoizedState = me = e : me = me.next = e, me;
}
function Ze() {
  if (pe === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = me === null ? ae.memoizedState : me.next;
  if (t !== null) me = t, pe = e;
  else {
    if (e === null) throw Error(z(310));
    pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, me === null ? ae.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ro(e) {
  var t = Ze(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = pe, a = r.baseQueue, o = n.pending;
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
      var v = d.lane;
      if ((mn & v) === v) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var g = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (u = l = g, s = r) : l = l.next = g, ae.lanes |= v, hn |= v;
      }
      d = d.next;
    } while (d !== null && d !== o);
    l === null ? s = r : l.next = u, pt(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
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
  var t = Ze(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    pt(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Sc() {
}
function Cc(e, t) {
  var n = ae, r = Ze(), a = t(), o = !pt(r.memoizedState, a);
  if (o && (r.memoizedState = a, Ie = !0), r = r.queue, ks(Ec.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ir(9, Nc.bind(null, n, r, a, t), void 0, null), he === null) throw Error(z(349));
    mn & 30 || _c(n, t, a);
  }
  return a;
}
function _c(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Nc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, zc(t) && Pc(e);
}
function Ec(e, t, n) {
  return n(function() {
    zc(t) && Pc(e);
  });
}
function zc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Pc(e) {
  var t = bt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function Nl(e) {
  var t = ht();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = Df.bind(null, ae, e), [t.memoizedState, e];
}
function Ir(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function bc() {
  return Ze().memoizedState;
}
function ya(e, t, n, r) {
  var a = ht();
  ae.flags |= e, a.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r);
}
function no(e, t, n, r) {
  var a = Ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (pe !== null) {
    var s = pe.memoizedState;
    if (o = s.destroy, r !== null && ys(r, s.deps)) {
      a.memoizedState = Ir(t, n, o, r);
      return;
    }
  }
  ae.flags |= e, a.memoizedState = Ir(1 | t, n, o, r);
}
function El(e, t) {
  return ya(8390656, 8, e, t);
}
function ks(e, t) {
  return no(2048, 8, e, t);
}
function Mc(e, t) {
  return no(4, 2, e, t);
}
function Tc(e, t) {
  return no(4, 4, e, t);
}
function Lc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, no(4, 4, Lc.bind(null, t, e), n);
}
function js() {
}
function Ac(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ic(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Dc(e, t, n) {
  return mn & 21 ? (pt(n, t) || (n = Uu(), ae.lanes |= n, hn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function Af(e, t) {
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
function $c() {
  return Ze().memoizedState;
}
function If(e, t, n) {
  var r = Jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Oc(e)) Fc(t, n);
  else if (n = wc(e, t, n, r), n !== null) {
    var a = be();
    dt(n, e, r, a), Bc(n, t, r);
  }
}
function Df(e, t, n) {
  var r = Jt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oc(e)) Fc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, pt(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, fs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = wc(e, t, a, r), n !== null && (a = be(), dt(n, e, r, a), Bc(n, t, r));
  }
}
function Oc(e) {
  var t = e.alternate;
  return e === ae || t !== null && t === ae;
}
function Fc(e, t) {
  mr = Ba = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Bc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
  }
}
var Ua = { readContext: Xe, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, $f = { readContext: Xe, useCallback: function(e, t) {
  return ht().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xe, useEffect: El, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ya(
    4194308,
    4,
    Lc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ya(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ya(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ht();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ht();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = If.bind(null, ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ht();
  return e = { current: e }, t.memoizedState = e;
}, useState: Nl, useDebugValue: js, useDeferredValue: function(e) {
  return ht().memoizedState = e;
}, useTransition: function() {
  var e = Nl(!1), t = e[0];
  return e = Af.bind(null, e[1]), ht().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ae, a = ht();
  if (te) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(z(349));
    mn & 30 || _c(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, El(Ec.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Ir(9, Nc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ht(), t = he.identifierPrefix;
  if (te) {
    var n = Nt, r = _t;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Of = {
  readContext: Xe,
  useCallback: Ac,
  useContext: Xe,
  useEffect: ks,
  useImperativeHandle: Rc,
  useInsertionEffect: Mc,
  useLayoutEffect: Tc,
  useMemo: Ic,
  useReducer: Ro,
  useRef: bc,
  useState: function() {
    return Ro(Ar);
  },
  useDebugValue: js,
  useDeferredValue: function(e) {
    var t = Ze();
    return Dc(t, pe.memoizedState, e);
  },
  useTransition: function() {
    var e = Ro(Ar)[0], t = Ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Sc,
  useSyncExternalStore: Cc,
  useId: $c,
  unstable_isNewReconciler: !1
}, Ff = { readContext: Xe, useCallback: Ac, useContext: Xe, useEffect: ks, useImperativeHandle: Rc, useInsertionEffect: Mc, useLayoutEffect: Tc, useMemo: Ic, useReducer: Ao, useRef: bc, useState: function() {
  return Ao(Ar);
}, useDebugValue: js, useDeferredValue: function(e) {
  var t = Ze();
  return pe === null ? t.memoizedState = e : Dc(t, pe.memoizedState, e);
}, useTransition: function() {
  var e = Ao(Ar)[0], t = Ze().memoizedState;
  return [e, t];
}, useMutableSource: Sc, useSyncExternalStore: Cc, useId: $c, unstable_isNewReconciler: !1 };
function st(e, t) {
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
  var r = be(), a = Jt(e), o = Et(r, a);
  o.payload = t, n != null && (o.callback = n), t = Yt(e, o, a), t !== null && (dt(t, e, a, r), ga(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Jt(e), o = Et(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Yt(e, o, a), t !== null && (dt(t, e, a, r), ga(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = Jt(e), a = Et(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Yt(e, a, r), t !== null && (dt(t, e, r, n), ga(t, e, r));
} };
function zl(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(a, o) : !0;
}
function Uc(e, t, n) {
  var r = !1, a = en, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Xe(o) : (a = $e(t) ? pn : Ce.current, r = t.contextTypes, o = (r = r != null) ? Un(e, a) : en), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Pl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function xi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Xe(o) : (o = $e(t) ? pn : Ce.current, a.context = Un(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (yi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ro.enqueueReplaceState(a, a.state, null), Oa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += fp(r), r = r.return;
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
var Bf = typeof WeakMap == "function" ? WeakMap : Map;
function qc(e, t, n) {
  n = Et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Va || (Va = !0, bi = r), wi(e, t);
  }, n;
}
function Vc(e, t, n) {
  n = Et(-1, n), n.tag = 3;
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
function bl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = tm.bind(null, e, t, n), t.then(e, e));
}
function Ml(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tl(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Yt(n, t, 1))), n.lanes |= 1), e);
}
var Uf = Tt.ReactCurrentOwner, Ie = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? xc(t, null, n, r) : Vn(t, e.child, n, r);
}
function Ll(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return On(t, a), r = xs(e, t, n, r, o, a), n = ws(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Mt(e, t, a)) : (te && n && ss(t), t.flags |= 1, Pe(e, t, r, a), t.child);
}
function Rl(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !bs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Gc(e, t, o, r, a)) : (e = ja(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zr, n(s, r) && e.ref === t.ref) return Mt(e, t, a);
  }
  return t.flags |= 1, e = Xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, Mt(e, t, a);
  }
  return ki(e, t, n, r, a);
}
function Hc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Rn, Fe), Fe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(Rn, Fe), Fe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, X(Rn, Fe), Fe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, X(Rn, Fe), Fe |= r;
  return Pe(e, t, a, n), t.child;
}
function Wc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ki(e, t, n, r, a) {
  var o = $e(n) ? pn : Ce.current;
  return o = Un(t, o), On(t, a), n = xs(e, t, n, r, o, a), r = ws(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Mt(e, t, a)) : (te && r && ss(t), t.flags |= 1, Pe(e, t, n, a), t.child);
}
function Al(e, t, n, r, a) {
  if ($e(n)) {
    var o = !0;
    Ra(t);
  } else o = !1;
  if (On(t, a), t.stateNode === null) xa(e, t), Uc(t, n, r), xi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Xe(d) : (d = $e(n) ? pn : Ce.current, d = Un(t, d));
    var v = n.getDerivedStateFromProps, g = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== d) && Pl(t, s, r, d), Ot = !1;
    var p = t.memoizedState;
    s.state = p, Oa(t, r, s, a), l = t.memoizedState, u !== r || p !== l || De.current || Ot ? (typeof v == "function" && (yi(t, n, v, r), l = t.memoizedState), (u = Ot || zl(t, n, u, r, p, l, d)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, kc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : st(t.type, u), s.props = d, g = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Xe(l) : (l = $e(n) ? pn : Ce.current, l = Un(t, l));
    var j = n.getDerivedStateFromProps;
    (v = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== g || p !== l) && Pl(t, s, r, l), Ot = !1, p = t.memoizedState, s.state = p, Oa(t, r, s, a);
    var C = t.memoizedState;
    u !== g || p !== C || De.current || Ot ? (typeof j == "function" && (yi(t, n, j, r), C = t.memoizedState), (d = Ot || zl(t, n, d, r, p, C, l) || !1) ? (v || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, C, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, C, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), s.props = r, s.state = C, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ji(e, t, n, r, o, a);
}
function ji(e, t, n, r, a, o) {
  Wc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && wl(t, n, !1), Mt(e, t, o);
  r = t.stateNode, Uf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Vn(t, e.child, null, o), t.child = Vn(t, null, u, o)) : Pe(e, t, u, o), t.memoizedState = r.state, a && wl(t, n, !0), t.child;
}
function Qc(e) {
  var t = e.stateNode;
  t.pendingContext ? xl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xl(e, t.context, !1), hs(e, t.containerInfo);
}
function Il(e, t, n, r, a) {
  return qn(), us(a), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yc(e, t, n) {
  var r = t.pendingProps, a = re.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), X(re, a & 1), e === null)
    return gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = io(s, r, 0, null), e = dn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ci(n), t.memoizedState = Si, e) : Ss(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return qf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Xt(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Xt(u, o) : (o = dn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ci(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Si, r;
  }
  return o = e.child, e = o.sibling, r = Xt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ss(e, t) {
  return t = io({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sa(e, t, n, r) {
  return r !== null && us(r), Vn(t, e.child, null, n), e = Ss(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Io(Error(z(422))), sa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = io({ mode: "visible", children: r.children }, a, 0, null), o = dn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Vn(t, e.child, null, s), t.child.memoizedState = Ci(s), t.memoizedState = Si, o);
  if (!(t.mode & 1)) return sa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Io(o, r, void 0), sa(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Ie || u) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, bt(e, a), dt(r, e, a, -1));
    }
    return Ps(), r = Io(Error(z(421))), sa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Be = Qt(a.nextSibling), Ue = t, te = !0, ut = null, e !== null && (Qe[Ye++] = _t, Qe[Ye++] = Nt, Qe[Ye++] = fn, _t = e.id, Nt = e.overflow, fn = t), t = Ss(t, r.children), t.flags |= 4096, t);
}
function Dl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vi(e.return, t, n);
}
function Do(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Kc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Pe(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Dl(e, n, t);
      else if (e.tag === 19) Dl(e, n, t);
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
  if (X(re, r), !(t.mode & 1)) t.memoizedState = null;
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
function Mt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), hn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Vf(e, t, n) {
  switch (t.tag) {
    case 3:
      Qc(t), qn();
      break;
    case 5:
      jc(t);
      break;
    case 1:
      $e(t.type) && Ra(t);
      break;
    case 4:
      hs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      X(Da, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (X(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yc(e, t, n) : (X(re, re.current & 1), e = Mt(e, t, n), e !== null ? e.sibling : null);
      X(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Kc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), X(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hc(e, t, n);
  }
  return Mt(e, t, n);
}
var Jc, _i, Xc, Zc;
Jc = function(e, t) {
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
Xc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, un(yt.current);
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
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (kr.hasOwnProperty(d) ? (l != null && d === "onScroll" && Z("scroll", e), o || u === l || (o = [])) : (o = o || []).push(d, l));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Zc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!te) switch (e.tailMode) {
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
function Gf(e, t, n) {
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
      return $e(t.type) && La(), je(t), null;
    case 3:
      return r = t.stateNode, Gn(), ee(De), ee(Ce), vs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Li(ut), ut = null))), _i(e, t), je(t), null;
    case 5:
      gs(t);
      var a = un(Lr.current);
      if (n = t.type, e !== null && t.stateNode != null) Xc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return je(t), null;
        }
        if (e = un(yt.current), oa(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[gt] = t, r[Mr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < lr.length; a++) Z(lr[a], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z(
                "error",
                r
              ), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Hs(r, o), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Z("invalid", r);
              break;
            case "textarea":
              Qs(r, o), Z("invalid", r);
          }
          Xo(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && aa(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && aa(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : kr.hasOwnProperty(s) && u != null && s === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              Kr(r), Ws(r, o, !0);
              break;
            case "textarea":
              Kr(r), Ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ta);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Eu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[gt] = t, e[Mr] = r, Jc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Zo(n, r), n) {
              case "dialog":
                Z("cancel", e), Z("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < lr.length; a++) Z(lr[a], e);
                a = r;
                break;
              case "source":
                Z("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  e
                ), Z("load", e), a = r;
                break;
              case "details":
                Z("toggle", e), a = r;
                break;
              case "input":
                Hs(e, r), a = Wo(e, r), Z("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = oe({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                Qs(e, r), a = Ko(e, r), Z("invalid", e);
                break;
              default:
                a = r;
            }
            Xo(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? bu(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && zu(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && jr(e, l) : typeof l == "number" && jr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (kr.hasOwnProperty(o) ? l != null && o === "onScroll" && Z("scroll", e) : l != null && Wi(e, o, l, s));
            }
            switch (n) {
              case "input":
                Kr(e), Ws(e, r, !1);
                break;
              case "textarea":
                Kr(e), Ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? An(e, !!r.multiple, o, !1) : r.defaultValue != null && An(
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
      if (e && t.stateNode != null) Zc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = un(Lr.current), un(yt.current), oa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[gt] = t, (o = r.nodeValue !== n) && (e = Ue, e !== null)) switch (e.tag) {
            case 3:
              aa(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && aa(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[gt] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (ee(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Be !== null && t.mode & 1 && !(t.flags & 128)) vc(), qn(), t.flags |= 98560, o = !1;
        else if (o = oa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[gt] = t;
          } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), o = !1;
        } else ut !== null && (Li(ut), ut = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? fe === 0 && (fe = 3) : Ps())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return Gn(), _i(e, t), e === null && Pr(t.stateNode.containerInfo), je(t), null;
    case 10:
      return ps(t.type._context), je(t), null;
    case 17:
      return $e(t.type) && La(), je(t), null;
    case 19:
      if (ee(re), o = t.memoizedState, o === null) return je(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) rr(o, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Fa(e), s !== null) {
            for (t.flags |= 128, rr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return X(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ue() > Wn && (t.flags |= 128, r = !0, rr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Fa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !te) return je(t), null;
        } else 2 * ue() - o.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, rr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = re.current, X(re, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return zs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Fe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Hf(e, t) {
  switch (ls(t), t.tag) {
    case 1:
      return $e(t.type) && La(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Gn(), ee(De), ee(Ce), vs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return gs(t), null;
    case 13:
      if (ee(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ee(re), null;
    case 4:
      return Gn(), null;
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
var la = !1, Se = !1, Wf = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function Ni(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var $l = !1;
function Qf(e, t) {
  if (ui = Pa, e = ac(), is(e)) {
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
        var s = 0, u = -1, l = -1, d = 0, v = 0, g = e, p = null;
        t: for (; ; ) {
          for (var j; g !== n || a !== 0 && g.nodeType !== 3 || (u = s + a), g !== o || r !== 0 && g.nodeType !== 3 || (l = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (j = g.firstChild) !== null; )
            p = g, g = j;
          for (; ; ) {
            if (g === e) break t;
            if (p === n && ++d === a && (u = s), p === o && ++v === r && (l = s), (j = g.nextSibling) !== null) break;
            g = p, p = g.parentNode;
          }
          g = j;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ci = { focusedElem: e, selectionRange: n }, Pa = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var y = C.memoizedProps, T = C.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : st(t.type, y), T);
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
          throw Error(z(163));
      }
    } catch (h) {
      le(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return C = $l, $l = !1, C;
}
function hr(e, t, n) {
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
function ed(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[Mr], delete t[fi], delete t[bf], delete t[Mf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ol(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
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
var ve = null, lt = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), n = n.sibling;
}
function nd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function") try {
    vt.onCommitFiberUnmount(Ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Ln(n, t);
    case 6:
      var r = ve, a = lt;
      ve = null, Dt(e, t, n), ve = r, lt = a, ve !== null && (lt ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (lt ? (e = ve, n = n.stateNode, e.nodeType === 8 ? bo(e.parentNode, n) : e.nodeType === 1 && bo(e, n), Nr(e)) : bo(ve, n.stateNode));
      break;
    case 4:
      r = ve, a = lt, ve = n.stateNode.containerInfo, lt = !0, Dt(e, t, n), ve = r, lt = a;
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
      if (!Se && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Dt(e, t, n), Se = r) : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function Fl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Wf()), t.forEach(function(r) {
      var a = rm.bind(null, e, r);
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
            ve = u.stateNode, lt = !1;
            break e;
          case 3:
            ve = u.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            ve = u.stateNode.containerInfo, lt = !0;
            break e;
        }
        u = u.return;
      }
      if (ve === null) throw Error(z(160));
      nd(o, s, a), ve = null, lt = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      le(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rd(t, e), t = t.sibling;
}
function rd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), mt(e), r & 4) {
        try {
          hr(3, e, e.return), ao(3, e);
        } catch (y) {
          le(e, e.return, y);
        }
        try {
          hr(5, e, e.return);
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 1:
      it(t, e), mt(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (it(t, e), mt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          jr(a, "");
        } catch (y) {
          le(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && _u(a, o), Zo(u, s);
          var d = Zo(u, o);
          for (s = 0; s < l.length; s += 2) {
            var v = l[s], g = l[s + 1];
            v === "style" ? bu(a, g) : v === "dangerouslySetInnerHTML" ? zu(a, g) : v === "children" ? jr(a, g) : Wi(a, v, g, d);
          }
          switch (u) {
            case "input":
              Qo(a, o);
              break;
            case "textarea":
              Nu(a, o);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var j = o.value;
              j != null ? An(a, !!o.multiple, j, !1) : p !== !!o.multiple && (o.defaultValue != null ? An(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : An(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Mr] = o;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 6:
      if (it(t, e), mt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (it(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (y) {
        le(e, e.return, y);
      }
      break;
    case 4:
      it(t, e), mt(e);
      break;
    case 13:
      it(t, e), mt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ns = ue())), r & 4 && Fl(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (d = Se) || v, it(t, e), Se = d) : it(t, e), mt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1) for (R = e, v = e.child; v !== null; ) {
          for (g = R = v; R !== null; ) {
            switch (p = R, j = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                hr(4, p, p.return);
                break;
              case 1:
                Ln(p, p.return);
                var C = p.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (y) {
                    le(r, n, y);
                  }
                }
                break;
              case 5:
                Ln(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Ul(g);
                  continue;
                }
            }
            j !== null ? (j.return = p, R = j) : Ul(g);
          }
          v = v.sibling;
        }
        e: for (v = null, g = e; ; ) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                a = g.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, l = g.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Pu("display", s));
              } catch (y) {
                le(e, e.return, y);
              }
            }
          } else if (g.tag === 6) {
            if (v === null) try {
              g.stateNode.nodeValue = d ? "" : g.memoizedProps;
            } catch (y) {
              le(e, e.return, y);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            v === g && (v = null), g = g.return;
          }
          v === g && (v = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      it(t, e), mt(e), r & 4 && Fl(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (td(n)) {
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
          r.flags & 32 && (jr(a, ""), r.flags &= -33);
          var o = Ol(e);
          Pi(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Ol(e);
          zi(e, u, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yf(e, t, n) {
  R = e, ad(e);
}
function ad(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var a = R, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || la;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || Se;
        u = la;
        var d = Se;
        if (la = s, (Se = l) && !d) for (R = a; R !== null; ) s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? ql(a) : l !== null ? (l.return = s, R = l) : ql(a);
        for (; o !== null; ) R = o, ad(o), o = o.sibling;
        R = a, la = u, Se = d;
      }
      Bl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, R = o) : Bl(e);
  }
}
function Bl(e) {
  for (; R !== null; ) {
    var t = R;
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
              var a = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && _l(t, o, r);
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
              _l(t, s, n);
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
                var v = d.memoizedState;
                if (v !== null) {
                  var g = v.dehydrated;
                  g !== null && Nr(g);
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
        Se || t.flags & 512 && Ei(t);
      } catch (p) {
        le(t, t.return, p);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Ul(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function ql(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ao(4, t);
          } catch (l) {
            le(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              le(t, a, l);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (l) {
            le(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ei(t);
          } catch (l) {
            le(t, s, l);
          }
      }
    } catch (l) {
      le(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, R = u;
      break;
    }
    R = t.return;
  }
}
var Kf = Math.ceil, qa = Tt.ReactCurrentDispatcher, Cs = Tt.ReactCurrentOwner, Je = Tt.ReactCurrentBatchConfig, G = 0, he = null, ce = null, ye = 0, Fe = 0, Rn = nn(0), fe = 0, Dr = null, hn = 0, oo = 0, _s = 0, gr = null, Ae = null, Ns = 0, Wn = 1 / 0, jt = null, Va = !1, bi = null, Kt = null, ua = !1, Vt = null, Ga = 0, vr = 0, Mi = null, wa = -1, ka = 0;
function be() {
  return G & 6 ? ue() : wa !== -1 ? wa : wa = ue();
}
function Jt(e) {
  return e.mode & 1 ? G & 2 && ye !== 0 ? ye & -ye : Lf.transition !== null ? (ka === 0 && (ka = Uu()), ka) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yu(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < vr) throw vr = 0, Mi = null, Error(z(185));
  qr(e, n, r), (!(G & 2) || e !== he) && (e === he && (!(G & 2) && (oo |= n), fe === 4 && Bt(e, ye)), Oe(e, r), n === 1 && G === 0 && !(t.mode & 1) && (Wn = ue() + 500, to && rn()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Tp(e, t);
  var r = za(e, e === he ? ye : 0);
  if (r === 0) n !== null && Xs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Xs(n), t === 1) e.tag === 0 ? Tf(Vl.bind(null, e)) : mc(Vl.bind(null, e)), zf(function() {
      !(G & 6) && rn();
    }), n = null;
    else {
      switch (qu(r)) {
        case 1:
          n = Xi;
          break;
        case 4:
          n = Fu;
          break;
        case 16:
          n = Ea;
          break;
        case 536870912:
          n = Bu;
          break;
        default:
          n = Ea;
      }
      n = pd(n, od.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function od(e, t) {
  if (wa = -1, ka = 0, G & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = za(e, e === he ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ha(e, r);
  else {
    t = r;
    var a = G;
    G |= 2;
    var o = sd();
    (he !== e || ye !== t) && (jt = null, Wn = ue() + 500, cn(e, t));
    do
      try {
        Zf();
        break;
      } catch (u) {
        id(e, u);
      }
    while (!0);
    ds(), qa.current = o, G = a, ce !== null ? t = 0 : (he = null, ye = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (a = ai(e), a !== 0 && (r = a, t = Ti(e, a))), t === 1) throw n = Dr, cn(e, 0), Bt(e, r), Oe(e, ue()), n;
    if (t === 6) Bt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Jf(a) && (t = Ha(e, r), t === 2 && (o = ai(e), o !== 0 && (r = o, t = Ti(e, o))), t === 1)) throw n = Dr, cn(e, 0), Bt(e, r), Oe(e, ue()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          on(e, Ae, jt);
          break;
        case 3:
          if (Bt(e, r), (r & 130023424) === r && (t = Ns + 500 - ue(), 10 < t)) {
            if (za(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              be(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = pi(on.bind(null, e, Ae, jt), t);
            break;
          }
          on(e, Ae, jt);
          break;
        case 4:
          if (Bt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ct(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pi(on.bind(null, e, Ae, jt), r);
            break;
          }
          on(e, Ae, jt);
          break;
        case 5:
          on(e, Ae, jt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Oe(e, ue()), e.callbackNode === n ? od.bind(null, e) : null;
}
function Ti(e, t) {
  var n = gr;
  return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Ha(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && Li(t)), e;
}
function Li(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function Jf(e) {
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
function Bt(e, t) {
  for (t &= ~_s, t &= ~oo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Vl(e) {
  if (G & 6) throw Error(z(327));
  Fn();
  var t = za(e, 0);
  if (!(t & 1)) return Oe(e, ue()), null;
  var n = Ha(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && (t = r, n = Ti(e, r));
  }
  if (n === 1) throw n = Dr, cn(e, 0), Bt(e, t), Oe(e, ue()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, Ae, jt), Oe(e, ue()), null;
}
function Es(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    G = n, G === 0 && (Wn = ue() + 500, to && rn());
  }
}
function gn(e) {
  Vt !== null && Vt.tag === 0 && !(G & 6) && Fn();
  var t = G;
  G |= 1;
  var n = Je.transition, r = Q;
  try {
    if (Je.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, Je.transition = n, G = t, !(G & 6) && rn();
  }
}
function zs() {
  Fe = Rn.current, ee(Rn);
}
function cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ef(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (ls(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && La();
        break;
      case 3:
        Gn(), ee(De), ee(Ce), vs();
        break;
      case 5:
        gs(r);
        break;
      case 4:
        Gn();
        break;
      case 13:
        ee(re);
        break;
      case 19:
        ee(re);
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
  if (he = e, ce = e = Xt(e.current, null), ye = Fe = t, fe = 0, Dr = null, _s = oo = hn = 0, Ae = gr = null, ln !== null) {
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
function id(e, t) {
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
      if (mn = 0, me = pe = ae = null, mr = !1, Rr = 0, Cs.current = null, n === null || n.return === null) {
        fe = 1, Dr = t, ce = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = ye, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, v = u, g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var p = v.alternate;
            p ? (v.updateQueue = p.updateQueue, v.memoizedState = p.memoizedState, v.lanes = p.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var j = Ml(s);
          if (j !== null) {
            j.flags &= -257, Tl(j, s, u, o, t), j.mode & 1 && bl(o, d, t), t = j, l = d;
            var C = t.updateQueue;
            if (C === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else C.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bl(o, d, t), Ps();
              break e;
            }
            l = Error(z(426));
          }
        } else if (te && u.mode & 1) {
          var T = Ml(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Tl(T, s, u, o, t), us(Hn(l, u));
            break e;
          }
        }
        o = l = Hn(l, u), fe !== 4 && (fe = 2), gr === null ? gr = [o] : gr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = qc(o, l, t);
              Cl(o, m);
              break e;
            case 1:
              u = l;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Kt === null || !Kt.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = Vc(o, u, t);
                Cl(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ud(n);
    } catch (w) {
      t = w, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sd() {
  var e = qa.current;
  return qa.current = Ua, e === null ? Ua : e;
}
function Ps() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), he === null || !(hn & 268435455) && !(oo & 268435455) || Bt(he, ye);
}
function Ha(e, t) {
  var n = G;
  G |= 2;
  var r = sd();
  (he !== e || ye !== t) && (jt = null, cn(e, t));
  do
    try {
      Xf();
      break;
    } catch (a) {
      id(e, a);
    }
  while (!0);
  if (ds(), G = n, qa.current = r, ce !== null) throw Error(z(261));
  return he = null, ye = 0, fe;
}
function Xf() {
  for (; ce !== null; ) ld(ce);
}
function Zf() {
  for (; ce !== null && !Sp(); ) ld(ce);
}
function ld(e) {
  var t = dd(e.alternate, e, Fe);
  e.memoizedProps = e.pendingProps, t === null ? ud(e) : ce = t, Cs.current = null;
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Hf(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = Gf(n, t, Fe), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function on(e, t, n) {
  var r = Q, a = Je.transition;
  try {
    Je.transition = null, Q = 1, em(e, t, n, r);
  } finally {
    Je.transition = a, Q = r;
  }
  return null;
}
function em(e, t, n, r) {
  do
    Fn();
  while (Vt !== null);
  if (G & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Lp(e, o), e === he && (ce = he = null, ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ua || (ua = !0, pd(Ea, function() {
    return Fn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Je.transition, Je.transition = null;
    var s = Q;
    Q = 1;
    var u = G;
    G |= 4, Cs.current = null, Qf(e, n), rd(n, e), wf(ci), Pa = !!ui, ci = ui = null, e.current = n, Yf(n), Cp(), G = u, Q = s, Je.transition = o;
  } else e.current = n;
  if (ua && (ua = !1, Vt = e, Ga = a), o = e.pendingLanes, o === 0 && (Kt = null), Ep(n.stateNode), Oe(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Va) throw Va = !1, e = bi, bi = null, e;
  return Ga & 1 && e.tag !== 0 && Fn(), o = e.pendingLanes, o & 1 ? e === Mi ? vr++ : (vr = 0, Mi = e) : vr = 0, rn(), null;
}
function Fn() {
  if (Vt !== null) {
    var e = qu(Ga), t = Je.transition, n = Q;
    try {
      if (Je.transition = null, Q = 16 > e ? 16 : e, Vt === null) var r = !1;
      else {
        if (e = Vt, Vt = null, Ga = 0, G & 6) throw Error(z(331));
        var a = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var o = R, s = o.child;
          if (R.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var d = u[l];
                for (R = d; R !== null; ) {
                  var v = R;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, v, o);
                  }
                  var g = v.child;
                  if (g !== null) g.return = v, R = g;
                  else for (; R !== null; ) {
                    v = R;
                    var p = v.sibling, j = v.return;
                    if (ed(v), v === d) {
                      R = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = j, R = p;
                      break;
                    }
                    R = j;
                  }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var y = C.child;
                if (y !== null) {
                  C.child = null;
                  do {
                    var T = y.sibling;
                    y.sibling = null, y = T;
                  } while (y !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, R = s;
          else e: for (; R !== null; ) {
            if (o = R, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                hr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, R = m;
              break e;
            }
            R = o.return;
          }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          s = R;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) f.return = s, R = f;
          else e: for (s = c; R !== null; ) {
            if (u = R, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ao(9, u);
              }
            } catch (w) {
              le(u, u.return, w);
            }
            if (u === s) {
              R = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, R = h;
              break e;
            }
            R = u.return;
          }
        }
        if (G = a, rn(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
          vt.onPostCommitFiberRoot(Ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, Je.transition = t;
    }
  }
  return !1;
}
function Gl(e, t, n) {
  t = Hn(n, t), t = qc(e, t, 1), e = Yt(e, t, 1), t = be(), e !== null && (qr(e, 1, t), Oe(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Gl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Gl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Hn(n, e), e = Vc(t, e, 1), t = Yt(t, e, 1), e = be(), t !== null && (qr(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function tm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > ue() - Ns ? cn(e, 0) : _s |= n), Oe(e, t);
}
function cd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = be();
  e = bt(e, t), e !== null && (qr(e, t, n), Oe(e, n));
}
function nm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), cd(e, n);
}
function rm(e, t) {
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
  r !== null && r.delete(t), cd(e, n);
}
var dd;
dd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || De.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Vf(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, te && t.flags & 1048576 && hc(t, Ia, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xa(e, t), e = t.pendingProps;
      var a = Un(t, Ce.current);
      On(t, n), a = xs(null, t, r, e, a, n);
      var o = ws();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (o = !0, Ra(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ms(t), a.updater = ro, t.stateNode = a, a._reactInternals = t, xi(t, r, e, n), t = ji(null, t, r, !0, o, n)) : (t.tag = 0, te && o && ss(t), Pe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = om(r), e = st(r, e), a) {
          case 0:
            t = ki(null, t, r, e, n);
            break e;
          case 1:
            t = Al(null, t, r, e, n);
            break e;
          case 11:
            t = Ll(null, t, r, e, n);
            break e;
          case 14:
            t = Rl(null, t, r, st(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), ki(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Al(e, t, r, a, n);
    case 3:
      e: {
        if (Qc(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, kc(e, t), Oa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Hn(Error(z(423)), t), t = Il(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Hn(Error(z(424)), t), t = Il(e, t, r, n, a);
          break e;
        } else for (Be = Qt(t.stateNode.containerInfo.firstChild), Ue = t, te = !0, ut = null, n = xc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qn(), r === a) {
            t = Mt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return jc(t), e === null && gi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, di(r, a) ? s = null : o !== null && di(r, o) && (t.flags |= 32), Wc(e, t), Pe(e, t, s, n), t.child;
    case 6:
      return e === null && gi(t), null;
    case 13:
      return Yc(e, t, n);
    case 4:
      return hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Ll(e, t, r, a, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, X(Da, r._currentValue), r._currentValue = s, o !== null) if (pt(o.value, s)) {
          if (o.children === a.children && !De.current) {
            t = Mt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = Et(-1, n & -n), l.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var v = d.pending;
                    v === null ? l.next = l : (l.next = v.next, v.next = l), d.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), vi(
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
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), vi(s, n, t), s = o.sibling;
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
      return a = t.type, r = t.pendingProps.children, On(t, n), a = Xe(a), r = r(a), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = st(r, t.pendingProps), a = st(r.type, a), Rl(e, t, r, a, n);
    case 15:
      return Gc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), xa(e, t), t.tag = 1, $e(r) ? (e = !0, Ra(t)) : e = !1, On(t, n), Uc(t, r, a), xi(t, r, a, n), ji(null, t, r, !0, e, n);
    case 19:
      return Kc(e, t, n);
    case 22:
      return Hc(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function pd(e, t) {
  return Ou(e, t);
}
function am(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ke(e, t, n, r) {
  return new am(e, t, n, r);
}
function bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function om(e) {
  if (typeof e == "function") return bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yi) return 11;
    if (e === Ki) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ja(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Cn:
      return dn(n.children, a, o, t);
    case Qi:
      s = 8, a |= 8;
      break;
    case qo:
      return e = Ke(12, n, t, a | 2), e.elementType = qo, e.lanes = o, e;
    case Vo:
      return e = Ke(13, n, t, a), e.elementType = Vo, e.lanes = o, e;
    case Go:
      return e = Ke(19, n, t, a), e.elementType = Go, e.lanes = o, e;
    case ju:
      return io(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case wu:
          s = 10;
          break e;
        case ku:
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
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = Ke(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function dn(e, t, n, r) {
  return e = Ke(7, e, r, t), e.lanes = n, e;
}
function io(e, t, n, r) {
  return e = Ke(22, e, r, t), e.elementType = ju, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function $o(e, t, n) {
  return e = Ke(6, e, null, t), e.lanes = n, e;
}
function Oo(e, t, n) {
  return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function im(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xo(0), this.expirationTimes = xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Ms(e, t, n, r, a, o, s, u, l) {
  return e = new im(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ke(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ms(o), e;
}
function sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Sn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fd(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
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
    if ($e(n)) return fc(e, n, t);
  }
  return t;
}
function md(e, t, n, r, a, o, s, u, l) {
  return e = Ms(n, r, !0, e, a, o, s, u, l), e.context = fd(null), n = e.current, r = be(), a = Jt(n), o = Et(r, a), o.callback = t ?? null, Yt(n, o, a), e.current.lanes = a, qr(e, a, r), Oe(e, r), e;
}
function so(e, t, n, r) {
  var a = t.current, o = be(), s = Jt(a);
  return n = fd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yt(a, t, s), e !== null && (dt(e, a, s, o), ga(e, a, s)), s;
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
function Hl(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ts(e, t) {
  Hl(e, t), (e = e.alternate) && Hl(e, t);
}
function lm() {
  return null;
}
var hd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ls(e) {
  this._internalRoot = e;
}
lo.prototype.render = Ls.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  so(e, t, null, null);
};
lo.prototype.unmount = Ls.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function() {
      so(null, e, null, null);
    }), t[Pt] = null;
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
    Ft.splice(n, 0, e), n === 0 && Qu(e);
  }
};
function Rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function uo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wl() {
}
function um(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Wa(s);
        o.call(d);
      };
    }
    var s = md(t, r, e, 0, null, !1, !1, "", Wl);
    return e._reactRootContainer = s, e[Pt] = s.current, Pr(e.nodeType === 8 ? e.parentNode : e), gn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Wa(l);
      u.call(d);
    };
  }
  var l = Ms(e, 0, !1, null, null, !1, !1, "", Wl);
  return e._reactRootContainer = l, e[Pt] = l.current, Pr(e.nodeType === 8 ? e.parentNode : e), gn(function() {
    so(t, l, n, r);
  }), l;
}
function co(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = Wa(s);
        u.call(l);
      };
    }
    so(t, s, e, a);
  } else s = um(n, t, e, a, r);
  return Wa(s);
}
Vu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = sr(t.pendingLanes);
        n !== 0 && (Zi(t, n | 1), Oe(t, ue()), !(G & 6) && (Wn = ue() + 500, rn()));
      }
      break;
    case 13:
      gn(function() {
        var r = bt(e, 1);
        if (r !== null) {
          var a = be();
          dt(r, e, 1, a);
        }
      }), Ts(e, 1);
  }
};
es = function(e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728);
    if (t !== null) {
      var n = be();
      dt(t, e, 134217728, n);
    }
    Ts(e, 134217728);
  }
};
Gu = function(e) {
  if (e.tag === 13) {
    var t = Jt(e), n = bt(e, t);
    if (n !== null) {
      var r = be();
      dt(n, e, t, r);
    }
    Ts(e, t);
  }
};
Hu = function() {
  return Q;
};
Wu = function(e, t) {
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
            if (!a) throw Error(z(90));
            Cu(r), Qo(r, a);
          }
        }
      }
      break;
    case "textarea":
      Nu(e, n);
      break;
    case "select":
      t = n.value, t != null && An(e, !!n.multiple, t, !1);
  }
};
Lu = Es;
Ru = gn;
var cm = { usingClientEntryPoint: !1, Events: [Gr, zn, eo, Mu, Tu, Es] }, ar = { findFiberByHostInstance: sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dm = { bundleType: ar.bundleType, version: ar.version, rendererPackageName: ar.rendererPackageName, rendererConfig: ar.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Tt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Du(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ar.findFiberByHostInstance || lm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ca.isDisabled && ca.supportsFiber) try {
    Ka = ca.inject(dm), vt = ca;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cm;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rs(t)) throw Error(z(200));
  return sm(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!Rs(e)) throw Error(z(299));
  var n = !1, r = "", a = hd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ms(e, 1, !1, null, null, n, !1, r, a), e[Pt] = t.current, Pr(e.nodeType === 8 ? e.parentNode : e), new Ls(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Du(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return gn(e);
};
Ve.hydrate = function(e, t, n) {
  if (!uo(t)) throw Error(z(200));
  return co(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!Rs(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = hd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = md(t, null, e, 1, n ?? null, a, !1, o, s), e[Pt] = t.current, Pr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new lo(t);
};
Ve.render = function(e, t, n) {
  if (!uo(t)) throw Error(z(200));
  return co(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!uo(e)) throw Error(z(40));
  return e._reactRootContainer ? (gn(function() {
    co(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Pt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = Es;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!uo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return co(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function gd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd);
    } catch (e) {
      console.error(e);
    }
}
gd(), gu.exports = Ve;
var pm = gu.exports, vd, Ql = pm;
vd = Ql.createRoot, Ql.hydrateRoot;
const Yl = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, fm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, mm = [
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
], hm = [
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
function $r(e) {
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
function gm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const yr = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(yr() + e, t);
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
  previewUrl: (e, t = !0, n = 0) => `${yr()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}`,
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
  pageUrl: (e, t, n = !1, r = !1, a = 0) => `${yr().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}` : ""}`,
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
  iconUrl: () => `${yr()}/api/icon.png?v=${Date.now()}`,
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
async function vm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((v, g) => {
      a.onload = () => v(), a.onerror = () => g(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (v) => l.toBlob((g) => v(g), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function yd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await vm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
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
function Kl(e) {
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
const xd = {
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
}, wd = x.createContext("es");
function ym({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(wd.Provider, { value: e, children: t });
}
function As() {
  return x.useContext(wd);
}
function et() {
  const e = As();
  return (t, n) => {
    let r = e === "en" ? xd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function xm(e, t, n) {
  return e === "en" ? xd[t] ?? t : t;
}
function ne({ size: e = 18, children: t }) {
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
function kd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Or({ size: e }) {
  return /* @__PURE__ */ i.jsx(ne, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Fr({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Qa({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function jd({ size: e }) {
  return /* @__PURE__ */ i.jsx(ne, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
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
        /* @__PURE__ */ i.jsx("path", { d: "M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" }),
        /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "3" })
      ]
    }
  );
}
function Sm({ size: e }) {
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
function Xl({ size: e }) {
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
function Sd({ size: e }) {
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
function Br({ size: e }) {
  return /* @__PURE__ */ i.jsx(ne, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Cd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function xr({ size: e }) {
  return /* @__PURE__ */ i.jsx(ne, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Di({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function zm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function _d({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ne, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsx(ne, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Am({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = et(), o = x.useMemo(() => t.map((k) => k.id), [t]), [s, u] = x.useState(/* @__PURE__ */ new Set()), [l, d] = x.useState("escala"), [v, g] = x.useState(100), [p, j] = x.useState(50), [C, y] = x.useState("mayor"), [T, m] = x.useState("");
  x.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const c = (k) => !s.has(k), f = (k) => u((S) => {
    const N = new Set(S);
    return N.has(k) ? N.delete(k) : N.add(k), N;
  }), h = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), w = (k) => {
    const S = k.w_mm_base || 0, N = k.h_mm_base || 0;
    return C === "mayor" ? Math.max(S, N) : C === "menor" ? Math.min(S, N) : 2 * Math.sqrt(Math.max(0, S * N) / Math.PI);
  }, _ = (k) => {
    if (l === "tamano") {
      const S = w(k);
      if (S > 0) return Math.min(10, Math.max(0.05, p / S));
    }
    return Math.min(10, Math.max(0.05, v / 100));
  }, E = (k) => {
    const S = _(k);
    return { w: (k.w_mm_base || 0) * S, h: (k.h_mm_base || 0) * S };
  }, b = async () => {
    let k = 0;
    for (const S of t) {
      if (!c(S.id)) continue;
      const N = _(S) * 100;
      await I.patchAsset(S.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(N * 10) / 10))
      }), k += 1;
    }
    await r(), m(a("{n} elementos ajustados ", { n: k })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((k) => {
          const S = E(k), N = Math.min(98, S.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${k.id}`,
              style: {
                width: `${N}%`,
                maxWidth: `${N}%`,
                aspectRatio: `${S.w || 1} / ${S.h || 1}`,
                opacity: c(k.id) ? 1 : 0.3
              },
              title: `${k.name} · ${S.w.toFixed(1)}×${S.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(k.id), alt: "" })
            },
            k.id
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((k) => {
          const S = E(k);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${k.id}`,
              className: c(k.id) ? "sel" : "",
              onClick: () => f(k.id),
              title: k.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(k.id), alt: k.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: k.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(k.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  S.w.toFixed(1),
                  "×",
                  S.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            k.id
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
                value: String(v),
                onChange: (k) => g(Number(k.target.value))
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
                  onChange: (k) => j(Number(k.target.value))
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
                onChange: (k) => y(k.target.value),
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
        T && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: T })
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
function Im({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  faseBordes: s = 0
}) {
  const u = et(), [l, d] = x.useState(() => $r(e));
  x.useEffect(() => d($r(e)), [e]);
  const v = x.useRef(null), g = gm(l), [p, j] = x.useState(""), C = x.useRef(!1), [y, T] = x.useState(""), m = x.useRef(!1), [c, f] = x.useState({ tamano: !1, borde: !1, mini: !1 });
  x.useEffect(() => {
    C.current || j(g.w > 0 ? g.w.toFixed(1) : ""), m.current || T(g.h > 0 ? g.h.toFixed(1) : "");
  }, [g.w, g.h]);
  const h = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, w = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, _ = (N) => {
    j(N);
    const V = Number(N.replace(",", "."));
    !Number.isFinite(V) || V <= 0 || h <= 0 || S({ scale_pct: V / h * 100 });
  }, E = (N) => {
    T(N);
    const V = Number(N.replace(",", "."));
    !Number.isFinite(V) || V <= 0 || w <= 0 || S({ scale_pct: V / w * 100 });
  }, b = (t == null ? void 0 : t.placements.filter((N) => N.asset_id === e.id && N.mini).length) ?? 0, k = (t == null ? void 0 : t.placements.filter((N) => N.asset_id === e.id && !N.mini).length) ?? 0, S = async (N) => {
    a == null || a(), "copies" in N && (N.copies = Math.max(0, N.copies ?? 0)), d((V) => ({ ...V, ...N }));
    try {
      await I.patchAsset(e.id, N);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ i.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: u("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => I.assetsFolder().then((N) => I.abrirCarpeta(N.path)).catch(() => I.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ i.jsx(Or, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: u("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var N;
              return (N = v.current) == null ? void 0 : N.click();
            },
            children: /* @__PURE__ */ i.jsx(wm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: v,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (N) => {
              var ie;
              const V = (ie = N.target.files) == null ? void 0 : ie[0];
              if (N.target.value = "", !!V)
                try {
                  const { blob: _e, name: He } = await yd(V);
                  await I.reemplazar(e.id, _e, He), await n();
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
            title: u("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ i.jsx(km, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? u("Restaurar fondo original") : u("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? I.restoreBackground(e.id) : I.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ i.jsx(jm, { size: 16 }) : /* @__PURE__ */ i.jsx(Qa, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: u("Eliminar imagen"),
            onClick: () => I.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ i.jsx(jd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: u("Copias"), children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => S({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => S({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            "data-tip": u("Incluir como mini (rellena huecos)"),
            onClick: () => S({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ i.jsx(Br, { size: 15 }),
              " ",
              u("Mini")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${l.offset_mm > 0 ? "on" : ""}`,
            "data-testid": `borde-${e.id}`,
            "data-tip": u("Borde adicional para este elemento (unir trozos, margen al cortar)"),
            onClick: () => f((N) => ({ ...N, borde: !N.borde })),
            children: [
              /* @__PURE__ */ i.jsx(po, { size: 15 }),
              " ",
              u("Borde")
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
            onClick: () => f((N) => ({ ...N, tamano: !N.tamano })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${c.tamano ? "open" : ""}`, children: "›" }),
              u("Tamaño"),
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
        c.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: u("Escala del elemento (100% = tamaño natural)"), children: u("Escala") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: l.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (N) => S({ scale_pct: Number(N.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
              Math.round(l.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: u("Tamaño exacto en milímetros (mantiene la proporción)"), children: u("Ancho") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: p,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  C.current = !0, m.current = !1;
                },
                onBlur: () => {
                  C.current = !1, j(g.w > 0 ? g.w.toFixed(1) : "");
                },
                onChange: (N) => _(N.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" }),
            /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ i.jsx("span", { title: u("Tamaño exacto en milímetros (mantiene la proporción)"), children: u("Alto") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: y,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  m.current = !0, C.current = !1;
                },
                onBlur: () => {
                  m.current = !1, T(g.h > 0 ? g.h.toFixed(1) : "");
                },
                onChange: (N) => E(N.target.value)
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
            onClick: () => f((N) => ({ ...N, borde: !N.borde })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${c.borde ? "open" : ""}`, children: "›" }),
              u("Borde adicional"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                l.offset_mm.toFixed(1),
                " mm",
                l.offset_mm <= 0 ? ` · ${u("global")}` : ""
              ] })
            ]
          }
        ),
        c.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${e.id}`,
                onClick: () => S({ offset_mm: Math.max(
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
                onChange: (N) => S({ offset_mm: Number(N.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => S({ offset_mm: Math.min(
                  20,
                  Math.round((l.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", u("Extender")],
              ["blanco", u("Blanco")],
              ["color", u("Color")],
              ["unir_recto", u("Unir recto")],
              ["unir_curvo", u("Unir curvo")]
            ].map(([N, V]) => /* @__PURE__ */ i.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === N ? "on" : ""}`,
                "data-testid": `offset-modo-${N}-${e.id}`,
                onClick: () => S({ offset_modo: N }),
                children: V
              },
              N
            )),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: u("Color del borde"),
                onChange: (N) => S({
                  offset_color: N.target.value,
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
            onClick: () => f((N) => ({ ...N, mini: !N.mini })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${c.mini ? "open" : ""}`, children: "›" }),
              u("Opciones de mini"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                b
              ] })
            ]
          }
        ),
        c.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ i.jsx("span", { title: u("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: u("Cuota") }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => S({ mini_quota: Math.max(
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
              onClick: () => S({ mini_quota: Math.min(
                100,
                Math.round((l.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: u(" {n} minis", { n: b }) })
        ] }) })
      ] }),
      k > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: u("Colocadas: {n}", { n: k }) }),
      l.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ i.jsx(_d, { size: 14 }),
        " ",
        l.warnings[0],
        " ",
        l.warnings.some((N) => /blob|trozos sueltos/i.test(N)) && /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: u("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function Dm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0
}) {
  const l = et(), d = x.useRef(null), [v, g] = x.useState(!1), [p, j] = x.useState(null), C = async (T) => {
    const m = [];
    for (const c of Array.from(T))
      try {
        const { blob: f, name: h } = await yd(c);
        m.push($r(await I.upload(f, h)));
      } catch (f) {
        console.error(f);
      }
    await r(), m.length > 1 && j(m);
  }, y = n.usar_minis;
  return e.some((T) => T.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: l("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${v ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var T;
          return (T = d.current) == null ? void 0 : T.click();
        },
        onDragOver: (T) => {
          T.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: (T) => {
          T.preventDefault(), g(!1), T.dataTransfer.files.length && C(T.dataTransfer.files);
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
              ref: d,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (T) => {
                T.target.files && C(T.target.files), T.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((T) => /* @__PURE__ */ i.jsx(
      Im,
      {
        a: T,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        bordeGlobal: n.offset_activo === !0
      },
      T.id
    )) }),
    !y && /* @__PURE__ */ i.jsx("div", { className: "hint", children: l("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => I.clearAssets().then(r),
        children: l("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Am,
      {
        open: !!p,
        assets: p ?? [],
        onClose: () => j(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
function Nd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = et(), [o, s] = x.useState(null), [u, l] = x.useState("");
  x.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (v = "") => {
    l("");
    try {
      s(await I.fsList(v));
    } catch (g) {
      l(g.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (v) => v.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => d(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((v) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => d(`${o.path}/${v}`.replace("//", "/")),
          children: v
        },
        v
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
function $m({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = et(), [u, l] = x.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((g) => g.startsWith("data:")), v = [
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
      !d && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      d && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      d ? t.map((g, p) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${p}`,
          href: g,
          download: `crycat_pagina-${String(p + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Or, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(Or, { size: 15 }),
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
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: v.map((g, p) => /* @__PURE__ */ i.jsx("li", { children: g }, p)) }),
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
function Om({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: d, onFinEdicion: v, onDeshacer: g, onRehacer: p, puedeDeshacer: j, puedeRehacer: C }) {
  const y = et(), T = As(), [m, c] = x.useState(1), [f, h] = x.useState({ x: 0, y: 0 }), [w, _] = x.useState(null), [E, b] = x.useState(() => Date.now()), [k, S] = x.useState(null), [N, V] = x.useState(null), [ie, _e] = x.useState(!1), [He, Ne] = x.useState(2), [Le, M] = x.useState(0);
  x.useEffect(() => {
    if (!r.verBordes) return;
    const P = window.setInterval(
      () => M((A) => (A + 6) % 12),
      1100
    );
    return () => window.clearInterval(P);
  }, [r.verBordes]);
  const [O, B] = x.useState([]), [W, Y] = x.useState([]), [$, K] = x.useState(""), [de, ge] = x.useState(/* @__PURE__ */ new Set()), Re = x.useRef(null), xt = x.useRef(null), xn = T === "en" ? hm : mm, D = x.useMemo(
    () => xn[Math.floor(Math.random() * xn.length)],
    [xn]
  ), F = r.saveName.trim() || D;
  x.useEffect(() => {
    b(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const Ee = (t == null ? void 0 : t.pages) ?? 0, wt = !!t && t.efficiency < 0.8;
  x.useEffect(() => {
    const P = Re.current;
    if (!P) return;
    const A = (L) => {
      L.preventDefault(), L.stopPropagation();
      const H = P.getBoundingClientRect(), J = L.clientX - H.left, ze = L.clientY - H.top;
      c((We) => {
        const we = L.deltaY < 0 ? 1.05 : 0.9523809523809523, se = Math.min(12, Math.max(0.05, We * we)), At = se / We;
        return h((It) => ({ x: J - (J - It.x) * At, y: ze - (ze - It.y) * At })), se;
      });
    };
    return P.addEventListener("wheel", A, { passive: !1 }), () => P.removeEventListener("wheel", A);
  }, []);
  const Wr = (P) => {
    if (P.target.closest(".item-box")) return;
    xt.current = { x: P.clientX - f.x, y: P.clientY - f.y };
    const A = (H) => {
      xt.current && h({ x: H.clientX - xt.current.x, y: H.clientY - xt.current.y });
    }, L = () => {
      xt.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", L);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", L);
  };
  x.useEffect(() => {
    const P = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((L) => Math.min(12, L * 1.08)) : A.key === "-" || A.key === "_" ? c((L) => Math.max(0.05, L / 1.08)) : A.key === "0" ? (c(1), h({ x: 0, y: 0 })) : A.key === "Escape" ? _(null) : A.key === "g" ? a((L) => ({ ...L, guidesVisible: !L.guidesVisible })) : A.key === "t" && a((L) => L.eyeFosforito ? { ...L, eyeFosforito: !1, eyeTransparent: !1 } : L.eyeTransparent ? { ...L, eyeTransparent: !1, eyeFosforito: !0 } : { ...L, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", P), () => window.removeEventListener("keydown", P);
  }, [a]);
  const tt = x.useRef(null), Is = x.useRef(null), Pd = (P, A) => {
    P.preventDefault(), P.stopPropagation();
    const L = P.currentTarget.closest(".page-box");
    if (!L || !t) return;
    const H = t.page_mm[0] / L.clientWidth, J = {
      uid: A.uid,
      startX: P.clientX,
      startY: P.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: H
    };
    tt.current = J, Is.current = { x: A.x, y: A.y }, S(J), V({ uid: A.uid, x: A.x, y: A.y });
    const ze = (we) => {
      const se = tt.current;
      if (!se) return;
      const At = (we.clientX - se.startX) * se.mmPerPx / m, It = (we.clientY - se.startY) * se.mmPerPx / m;
      Is.current = { x: se.origX + At, y: se.origY + It }, V({ uid: se.uid, x: se.origX + At, y: se.origY + It });
    }, We = (we) => {
      window.removeEventListener("mousemove", ze), window.removeEventListener("mouseup", We);
      const se = tt.current;
      if (tt.current = null, !se) return;
      const At = (we.clientX - se.startX) * se.mmPerPx / m, It = (we.clientY - se.startY) * se.mmPerPx / m;
      S(null), V(null), !(Math.abs(At) < 0.5 && Math.abs(It) < 0.5) && bd(se.uid, se.origX + At, se.origY + It);
    };
    window.addEventListener("mousemove", ze), window.addEventListener("mouseup", We);
  }, bd = async (P, A, L) => {
    try {
      const H = await I.move(P, A, L);
      H.job ? u(H.job) : await s();
    } catch {
      await s();
    } finally {
      b(Date.now());
    }
  }, Md = async (P) => {
    const A = await I.unpin(P);
    u(A);
  }, Td = !1;
  x.useEffect(() => {
    {
      B([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, E]), x.useEffect(() => {
    if (!d) {
      Y([]), K(""), ge(/* @__PURE__ */ new Set());
      return;
    }
    I.blobs(d.id).then((P) => {
      Y(P.blobs), Ne(P.union_mm ?? 2), K(P.preview_png), ge(new Set(P.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      Y([]), K("");
    });
  }, [d]);
  const Ds = async () => {
    if (d)
      try {
        await I.limpiarContorno(d.id, Array.from(de));
      } finally {
        await (v == null ? void 0 : v());
      }
  }, Ld = (P) => {
    ge((A) => {
      const L = new Set(A);
      return L.has(P) ? L.delete(P) : L.add(P), L;
    });
  }, [ft, Lt] = x.useState(null), Rd = async () => {
    try {
      const L = await I.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Lt({ files: L.files, folder: L.folder });
    } catch (L) {
      Lt({ files: [], folder: "", error: L.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const H = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), J = URL.createObjectURL(H), ze = document.createElement("a");
        ze.href = J, ze.download = `${r.saveName || "crycat"}-cricut.pdf`, ze.click(), setTimeout(() => URL.revokeObjectURL(J), 4e3);
      } catch (L) {
        Lt({
          files: [],
          folder: "",
          error: L.message
        });
      }
      return;
    }
    const A = document.createElement("iframe");
    A.setAttribute("aria-hidden", "true"), A.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", A.src = "/api/print.pdf", A.onload = () => {
      var L, H;
      try {
        (L = A.contentWindow) == null || L.focus(), (H = A.contentWindow) == null || H.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, Ad = async () => {
    try {
      const P = await I.export(F);
      Lt({ files: P.files, folder: P.folder });
    } catch (P) {
      Lt({ files: [], folder: "", error: P.message });
    }
  }, Id = () => {
    _e(!0);
  }, Dd = async (P) => {
    try {
      const A = await I.export(F, P);
      Lt({ files: A.files, folder: A.folder });
    } catch (A) {
      Lt({ files: [], folder: "", error: A.message });
    }
  }, $s = (t == null ? void 0 : t.poly_mm) ?? [], [nt, rt] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [wn, kn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Rt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : wn, fo = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : kn, at = n.lienzo === "pagina" ? 0 : nt, ot = n.lienzo === "pagina" ? 0 : rt, Os = $s.length ? "M" + $s.map(([P, A]) => `${P - at},${A - ot}`).join(" L") + " Z" : "", $d = (P) => {
    const A = (t == null ? void 0 : t.placements.filter((L) => L.page === P)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (L) => {
          Ee > 1 && w === null && !L.target.closest(".item-box") && _(P);
        },
        "data-testid": `page-${P}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: "sheet", src: I.pageUrl(P, E, n.simular_impresion === !0, r.verBordes, Le), alt: y("Página {i}", { i: P + 1 }), draggable: !1 }),
          r.guidesVisible && Os && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Rt} ${fo}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Rt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((nt - at + wn) / 10) + 1 },
                    (L, H) => {
                      const J = H * 10 - (at - nt);
                      return J >= nt - at - 0.01 && J <= nt - at + wn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: J,
                          y1: rt - ot,
                          x2: J,
                          y2: rt - ot + kn
                        },
                        `v${H}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((rt - ot + kn) / 10) + 1 },
                    (L, H) => {
                      const J = H * 10 - (ot - rt);
                      return J >= rt - ot - 0.01 && J <= rt - ot + kn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: nt - at,
                          y1: J,
                          x2: nt - at + wn,
                          y2: J
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
                  [nt, rt, 1, 1],
                  [nt + wn, rt, -1, 1],
                  [nt, rt + kn, 1, -1],
                  [nt + wn, rt + kn, -1, -1]
                ].map(
                  ([L, H, J, ze], We) => /* @__PURE__ */ i.jsx(
                    "path",
                    {
                      d: `M ${L - at + 9 * J} ${H - ot} L ${L - at} ${H - ot} L ${L - at} ${H - ot + 9 * ze}`
                    },
                    We
                  )
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: Os,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Rt / 250),
                strokeDasharray: `${Rt / 55} ${Rt / 85}`,
                opacity: 0.85
              }
            ),
            Td
          ] }),
          A.map((L) => {
            const H = e.find((we) => we.id === L.asset_id), J = (N == null ? void 0 : N.uid) === L.uid ? N : null, ze = ((J ? J.x : L.x) - at) / (Rt || 1) * 100, We = ((J ? J.y : L.y) - ot) / (fo || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${L.pinned ? "pinned" : ""} ${(k == null ? void 0 : k.uid) === L.uid ? "dragging" : ""}`,
                style: {
                  left: `${ze}%`,
                  top: `${We}%`,
                  width: `${L.w / (Rt || 1) * 100}%`,
                  height: `${L.h / (fo || 1) * 100}%`
                },
                title: (H == null ? void 0 : H.name) ?? "",
                onMouseDown: (we) => Pd(we, L),
                onContextMenu: (we) => {
                  we.preventDefault(), Md(L.uid);
                },
                "data-testid": `item-${L.uid}`,
                children: L.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              L.uid
            );
          })
        ]
      },
      P
    );
  }, Od = w !== null ? [w] : Array.from({ length: Ee }, (P, A) => A);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": y("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((P) => ({ ...P, verBordes: !P.verBordes })),
          children: /* @__PURE__ */ i.jsx(po, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": y("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((P) => ({ ...P, guidesVisible: !P.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(Cd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": y("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(wt ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Fr, { size: 16 }),
            " ",
            y("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        Ee > 1 && w === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 4 })), children: "4" })
        ] }),
        w !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => _(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": y("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((P) => P.eyeFosforito ? { ...P, eyeFosforito: !1, eyeTransparent: !1 } : P.eyeTransparent ? { ...P, eyeTransparent: !1, eyeFosforito: !0 } : { ...P, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(Sm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(Jl, { size: 16 }) : /* @__PURE__ */ i.jsx(Jl, { size: 16 }),
              r.eyeFosforito ? y("Fosforito") : r.eyeTransparent ? y("Transparente") : y("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-disposicion",
            "data-tip": y("Cambiar la disposición: menús anchos o hoja más grande"),
            onClick: () => {
              const P = !window.__crycatAncho;
              window.__crycatAncho = P, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: P }
              ));
            },
            children: /* @__PURE__ */ i.jsx(Xl, { size: 16 })
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
            "data-tip": y("Deshacer (Ctrl+Z)"),
            onClick: () => g(),
            disabled: !j,
            children: /* @__PURE__ */ i.jsx(Cm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !C,
            children: /* @__PURE__ */ i.jsx(_m, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Acercar (+)"),
            onClick: () => c((P) => Math.min(12, P * 1.08)),
            children: /* @__PURE__ */ i.jsx(Nm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": y("Centrar la hoja y volver al tamaño original (tecla 0)"),
            onClick: () => {
              c(1), h({ x: 0, y: 0 });
            },
            children: /* @__PURE__ */ i.jsx(Xl, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Alejar (−)"),
            onClick: () => c((P) => Math.max(0.05, P / 1.08)),
            children: /* @__PURE__ */ i.jsx(Em, { size: 15 })
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
            src: I.previewUrl(d.id) + `?t=${E}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && W.filter((P) => !P.principal).map((P, A) => {
          const [L, H, J, ze] = P.bbox, We = d.w_px || 1, we = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${de.has(P.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: P.area_px,
                accion: de.has(P.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${L / We * 100}%`,
                top: `${H / we * 100}%`,
                width: `${(J - L) / We * 100}%`,
                height: `${(ze - H) / we * 100}%`
              },
              onClick: () => Ld(P.id)
            },
            P.id
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
              title: y("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: He }),
              onClick: async () => {
                d && (await I.patchAsset(d.id, {
                  offset_mm: He,
                  offset_modo: "unir_curvo"
                }), await (v == null ? void 0 : v()));
              },
              children: y("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Ds,
              children: y(
                "Quitar marcados ({n})",
                { n: de.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: y("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: Re,
        className: `canvas ${k ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: Wr,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${m})` },
            children: [
              Ee === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
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
                  children: Od.map($d)
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
          onClick: Ds,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => v == null ? void 0 : v(),
          children: y("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: D,
          value: r.saveName,
          onChange: (P) => a((A) => ({ ...A, saveName: P.target.value }))
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: y("Abrir la carpeta de guardado en el explorador"),
            "aria-label": y("Abrir carpeta de guardado"),
            onClick: () => I.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Or, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Ad, children: y("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Id, children: y("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Rd,
            disabled: Ee === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Nd,
      {
        open: ie,
        initial: n.carpeta_export,
        onClose: () => _e(!1),
        onPick: Dd
      }
    ),
    /* @__PURE__ */ i.jsx(
      $m,
      {
        open: !!ft,
        files: (ft == null ? void 0 : ft.files) ?? [],
        folder: (ft == null ? void 0 : ft.folder) ?? "",
        error: ft == null ? void 0 : ft.error,
        onOpenFolder: (P) => void I.fsOpen(P).catch(() => {
        }),
        onClose: () => Lt(null)
      }
    )
  ] });
}
const Zl = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function Fm({ saveSettings: e }) {
  const t = et(), [n, r] = x.useState(
    {}
  ), [a, o] = x.useState([]), [s, u] = x.useState(!1), [l, d] = x.useState(!1), [v, g] = x.useState(""), [p, j] = x.useState(""), C = () => I.presets().then((c) => o(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  x.useEffect(() => {
    I.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), C();
  }, []);
  const y = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const f = c.slice(8);
          await e(n[f]), j(t("Perfil «{n}» aplicado", {
            n: t(Zl[f] ?? f)
          }));
        } else {
          const f = c.slice(9), h = await I.loadPreset(f);
          await e(h.settings), j(t("Perfil «{n}» cargado", { n: f }));
        }
      } catch {
        j(t("No se pudo aplicar el perfil"));
      }
  }, T = async () => {
    const c = v.trim();
    if (c)
      try {
        const f = await I.savePreset(c);
        o(Array.isArray(f.names) ? f.names : []), g(""), u(!1), j(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        j(t("No se pudo guardar el perfil"));
      }
  }, m = async (c) => {
    try {
      o((await I.deletePreset(c)).names ?? []), j(t("Perfil «{n}» borrado", { n: c }));
    } catch {
      j(t("No se pudo borrar el perfil"));
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
          onChange: (c) => y(c.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((c) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${c}`, children: t(Zl[c] ?? c) }, c)) }),
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
          onClick: () => u(!0),
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
          className: `chip${l ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => d(!l),
          children: /* @__PURE__ */ i.jsx(xr, { size: 15 })
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
          value: v,
          onChange: (c) => g(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && T(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: T, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    l && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((c) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: c, children: c }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => y(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => m(c),
          children: /* @__PURE__ */ i.jsx(jd, { size: 15 })
        }
      )
    ] }, c)) }),
    p && /* @__PURE__ */ i.jsx("div", { className: "hint", children: p })
  ] });
}
function Bm({ settings: e, saveSettings: t }) {
  const n = et(), r = e.usar_minis, a = e.modo === "experto", o = {
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
            /* @__PURE__ */ i.jsx(Br, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Fr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Sd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Fm, { saveSettings: t })
  ] });
}
function Um({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
          const v = Number(d.target.value);
          Number.isFinite(v) && v > 0 && r(v);
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
function kt({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function eu(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const qm = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Vm = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Gm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = et(), [a, o] = x.useState(!0), [s, u] = x.useState({
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
  }), [l, d] = x.useState(!1), v = x.useMemo(() => {
    const h = (n ?? []).filter((_) => _.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((_, E) => Math.min(E.w_mm, E.h_mm) - Math.min(_.w_mm, _.h_mm))[0] ?? null;
  }, [n]), g = v ? Math.min(v.w_mm, v.h_mm) : 0, p = e.modo === "experto", j = ({ children: h }) => p ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, C = (h) => u((w) => ({ ...w, [h]: !w[h] })), y = (h) => t(h), T = x.useRef(null), m = ({ titulo: h, children: w }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(h) }),
    w
  ] }), c = (h, w, _, E, b = 1, k = "", S, N) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...N ? { "data-tip": r(N) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: _,
          max: E,
          step: b,
          "data-testid": `set-${w}`,
          value: String(e[w]),
          onChange: (V) => {
            const ie = Number(V.target.value);
            Number.isNaN(ie) || y({ [w]: ie });
          }
        }
      ),
      k && /* @__PURE__ */ i.jsx("span", { className: "hint", children: k }),
      S
    ] })
  ] }), f = (h, w, _, E, b) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { children: r(h) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${w}`,
        value: String(e[w]),
        onChange: (k) => y({ [w]: k.target.value }),
        children: _.map(([k, S]) => /* @__PURE__ */ i.jsx("option", { value: k, children: r(S) }, k))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Bm, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !p && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        kt,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(xr, { size: 15 }),
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
              /* @__PURE__ */ i.jsx(j, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (h) => {
                      const w = h.target.value, _ = fm[w];
                      y(_ ? { pagina: w, pagina_w: _[0], pagina_h: _[1] } : { pagina: w });
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
              /* @__PURE__ */ i.jsx(j, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (h) => y({ pagina_w: Number(h.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (h) => y({ pagina_h: Number(h.target.value) })
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
        kt,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Br, { size: 15 }),
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
                    onClick: () => y({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => y({ mini_usar_lista: !1 }),
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
            /* @__PURE__ */ i.jsx(m, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(j, { children: [
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
                      onClick: () => y({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => y({ mini_lista_modo: "pct" }),
                      children: r("En % del original")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((h, w) => /* @__PURE__ */ i.jsx(
                    Um,
                    {
                      i: w,
                      valor: h,
                      refBase: g,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (_) => {
                        const E = [...e.mini_tamanos_lista ?? []];
                        E[w] = _, y({ mini_tamanos_lista: E });
                      },
                      onQuitar: () => y({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (_, E) => E !== w
                        )
                      })
                    },
                    w
                  )),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => y({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: r("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: v ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: v.name, mm: g.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        kt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
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
            /* @__PURE__ */ i.jsxs(j, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (h) => y({ opt_tiempo_auto: h.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Se usarán {s} s con «{m}» (el resto de métodos tienen el suyo).",
                {
                  s: qm[e.opt_metodo] ?? 8,
                  m: r(Vm[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        kt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: C,
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
              /* @__PURE__ */ i.jsxs(j, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (h) => y({ simular_impresion: h.target.checked })
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
                        onChange: (h) => y({ sim_cmyk: h.target.checked })
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
                    onChange: (h) => y({ chequear_lineas: h.target.checked })
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
        kt,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(po, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (h) => y({ offset_activo: h.target.checked })
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
                      onChange: (h) => y({ offset_color: h.target.value })
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
      p && /* @__PURE__ */ i.jsxs(kt, { id: "corte", title: r("Estimación de corte"), open: s.corte, toggle: C, children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: eu(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Yl[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Yl[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        c("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        c("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        c("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        c("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      p && /* @__PURE__ */ i.jsxs(
        kt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: C,
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
                  onChange: (h) => y({ historial: h.target.checked })
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
                    onChange: (h) => y({ hist_tamano: h.target.checked })
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
                    onChange: (h) => y({ hist_copias: h.target.checked })
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
                    onChange: (h) => y({ hist_borde: h.target.checked })
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
                    onChange: (h) => y({ hist_minis: h.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        kt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Cd, { size: 15 }),
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
                /* @__PURE__ */ i.jsx("img", { src: I.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var h;
                  return (h = T.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: T,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (h) => {
                      var _;
                      const w = (_ = h.target.files) == null ? void 0 : _[0];
                      w && I.setIcon(w).then(() => {
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
        kt,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(kd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(m, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => y({ mute: !e.mute }),
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
                    onChange: (h) => y({ volumen: Number(h.target.value) })
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
                    onChange: (h) => y({ pikmin_activo: h.target.checked })
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
                    onChange: (h) => y({ pikmin_sonido: h.target.checked })
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
                    onChange: (h) => y({ pikmin_sonido_morir: h.target.checked })
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
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: eu(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Nd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (h) => t({ carpeta_export: h })
      }
    )
  ] });
}
const Ct = (e) => (globalThis.__crycatAssets || "") + e;
function tu(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Hm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: o = !1,
  onVolumen: s,
  onMute: u,
  onIdioma: l,
  onEasterEgg: d,
  onAyuda: v,
  onReportar: g
}) {
  var W, Y;
  const p = et(), j = As(), [C, y] = x.useState([]), [T, m] = x.useState(0), [c, f] = x.useState(null), [h, w] = x.useState(!1), [_, E] = x.useState(""), b = x.useRef(!1), k = x.useRef([]);
  x.useEffect(() => {
    fetch("/api/funmsgs").then(($) => $.ok ? $.json() : { msgs: [] }).then(($) => y($.msgs ?? [])).catch(() => {
    });
  }, []), x.useEffect(() => {
    let $ = !0;
    return I.version().then((K) => {
      $ && (f(K), !K.comprobado && !b.current && (b.current = !0, I.checkVersion().then((de) => $ && f(de)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      $ = !1;
    };
  }, []);
  const S = ((W = c == null ? void 0 : c.actualizacion) == null ? void 0 : W.estado) === "descargando" || ((Y = c == null ? void 0 : c.actualizacion) == null ? void 0 : Y.estado) === "instalando";
  x.useEffect(() => {
    if (!S) return;
    const $ = setInterval(() => {
      I.version().then(f).catch(() => {
      });
    }, 700);
    return () => clearInterval($);
  }, [S]);
  const N = !!(e && !e.done);
  x.useEffect(() => {
    if (!N) return;
    const $ = setInterval(() => m((K) => K + 1), 1200);
    return () => clearInterval($);
  }, [N]);
  const V = C.length ? C : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], ie = x.useMemo(() => {
    if (_) return _;
    if (S) {
      const $ = c == null ? void 0 : c.actualizacion;
      if (($ == null ? void 0 : $.estado) === "instalando") return p("Instalando y reiniciando…");
      const K = ($ == null ? void 0 : $.progreso) != null ? Math.round($.progreso) : null;
      return K != null ? p("Descargando… {p}%", { p: K }) : ($ == null ? void 0 : $.mensaje) || p("Descargando actualización…");
    }
    return N ? V[T % V.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? p("Listo") : p("Listo para empezar");
  }, [_, S, N, e, V, T, n, p, c]), _e = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), He = x.useMemo(() => {
    const $ = e == null ? void 0 : e.eta_s;
    return !N || $ === void 0 || $ === null || $ <= 0.5 ? "" : p(" · {x} restante", { x: tu($) });
  }, [e == null ? void 0 : e.eta_s, N, p]), Ne = x.useMemo(() => !r || !r.segundos ? "" : tu(r.segundos), [r]), Le = async () => {
    w(!0), E("");
    try {
      const $ = await I.checkVersion();
      f($), $.error ? E(p("Sin conexión")) : $.hay_nueva || E(p("Estás en la última versión"));
    } catch {
      E(p("Sin conexión"));
    } finally {
      w(!1);
    }
  }, M = async () => {
    E("");
    try {
      const $ = await I.updateVersion();
      $.ok ? E(p("Instalando y reiniciando…")) : $.modo === "dev" && $.url ? (E(p("Modo desarrollo: se actualiza con git")), await I.openReleases().catch(() => {
      })) : E($.mensaje || p("No se pudo actualizar")), I.version().then(f).catch(() => {
      });
    } catch {
      E(p("No se pudo actualizar"));
    }
  }, B = !!(c != null && c.hay_nueva && !N && !S) ? p("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: I.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: p("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const $ = Date.now();
            k.current = [...k.current, $].filter((K) => $ - K < 2500), k.current.length >= 5 && (k.current = [], E(p("¡Fiesta Pikmin!")), window.setTimeout(() => E(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !N && (() => {
        const $ = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), K = n.placed || 1, de = Math.min(80, Math.max(
          30,
          48 + 22 * $ - Math.min(18, K * 0.08)
        )), ge = n.efficiency * 100, Re = ge >= de ? "buena" : ge >= de * 0.72 ? "normal" : "baja";
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
              className: `stat-card eficiencia ${Re}`,
              "data-testid": "eficiencia-card",
              "data-nivel": Re,
              "data-tip": p("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: K, e: Math.round(de) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(ge),
                  "%"
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: p("eficiencia") })
              ]
            }
          )
        ] });
      })(),
      !(n && n.pages > 0 && !N) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: ie }),
      !!n && n.pages > 1 && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: p("No cabe todo en una página: se usarán varias"),
          children: p("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      N && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, _e)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          _e,
          "%",
          He
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: Ct("/piensa.gif"),
            alt: "",
            title: p("Pensando…"),
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
          "data-tip": p("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ i.jsx(Lm, { size: 15 }),
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
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ i.jsx(_d, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(Rm, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(Pm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: p("Idioma"),
          onClick: () => l == null ? void 0 : l(j === "es" ? "en" : "es"),
          children: j.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: p("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !S && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: B || p("Hay una versión nueva"),
                onClick: M,
                children: /* @__PURE__ */ i.jsx(bm, { size: 14 })
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
                onClick: Le,
                disabled: h,
                children: h ? "…" : /* @__PURE__ */ i.jsx(Tm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: M,
                children: /* @__PURE__ */ i.jsx(Mm, { size: 14 })
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
const Wm = [
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
], Qm = "/pikmin_bloom/", nu = "/pikmin/alma.png", Ym = "/sonidos/pikmin.mp3", Km = "/sonidos/pikmin_morir.mp3";
function Jm(e) {
  const [t, n] = x.useState(Wm), [r, a] = x.useState([]);
  return x.useEffect(() => {
    fetch(Ct("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(Ct("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => Ct(Qm + u)));
    }).catch(() => {
    });
  }, []), x.useMemo(
    () => e && e.length ? [...e, ...r].map(Ct) : [...t, ...r].map(Ct),
    [e, t, r]
  );
}
function Xm({
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
  const v = Jm(d), [g, p] = x.useState([]), j = x.useRef(void 0), C = x.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = x.useRef(s);
  y.current = s;
  const T = Math.max(5e3, t * 6e4), m = (w) => {
    if (!(!n || o))
      try {
        const _ = new Audio(Ct(w ? Km : Ym));
        _.volume = Math.min(1, Math.max(0, a)), _.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const w = r && Math.random() < 0.25, _ = w ? Ct(nu) : v[Math.floor(Math.random() * v.length)] ?? Ct(nu);
    p((E) => [...E, {
      src: _,
      left: 3 + Math.random() * 92,
      key: Date.now() + E.length,
      morir: w,
      estado: "paseando"
    }]), m(w);
  }, f = () => {
    if (!e) return;
    const w = u ?? Math.round(T * 0.5), _ = l ?? Math.round(T * 1.5), E = w + Math.random() * Math.max(1, _ - w);
    j.current = window.setTimeout(c, E);
  };
  x.useEffect(() => {
    if (!e) {
      window.clearTimeout(j.current), p([]);
      return;
    }
    return f(), () => window.clearTimeout(j.current);
  }, [e, t, n, r, a, o, v]), x.useEffect(() => {
    const w = () => {
      C.current = document.visibilityState === "hidden", !C.current && y.current && window.setTimeout(() => {
        p((_) => _.length ? (m(!1), _.map((E) => ({ ...E, estado: "festejando" }))) : _), window.setTimeout(() => {
          p([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []);
  const h = (w) => {
    if (y.current && C.current) {
      p((_) => _.map((E) => E.key === w ? { ...E, estado: "quieto" } : E));
      return;
    }
    p((_) => _.filter((E) => E.key !== w)), f();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: g.map((w) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${w.estado}${w.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": w.estado,
      "data-morir": w.morir ? "1" : "0",
      style: { left: `${w.left}%` },
      onAnimationEnd: () => h(w.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: w.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => h(w.key)
        }
      )
    },
    w.key
  )) });
}
const ru = "crycat_bienvenida_v2";
function Zm() {
  const [e, t] = x.useState(!1);
  return x.useEffect(() => {
    try {
      localStorage.getItem(ru) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(ru, "1");
    } catch {
    }
    t(!1);
  } };
}
function eh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = et(), [a, o] = x.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(Qa, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(xr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Br, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(Fr, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Di, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
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
      /* @__PURE__ */ i.jsx(Br, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(Fr, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(Sd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(xr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Di, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(zm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(kd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(xr, { size: 18 }),
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((v, g) => /* @__PURE__ */ i.jsx("li", { children: v }, g)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([v, g, p], j) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: v }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: g }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: p })
      ] })
    ] }, j)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Or, { size: 15 }),
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
const th = "https://github.com/dhernandezgit/CryCat-Tool", nh = [
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
function rh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = et(), [s, u] = x.useState(""), [l, d] = x.useState(""), [v, g] = x.useState(""), [p, j] = x.useState(!0), [C, y] = x.useState(!0), [T, m] = x.useState(!0), [c, f] = x.useState(!1);
  x.useEffect(() => {
    e && (I.version().then((k) => u(k.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (S) => `- [${S.t}] ${S.msg} (${S.donde || "?"})`
  );
  if (!e) return null;
  const w = () => {
    var V, ie;
    const k = navigator.userAgent, S = !!globalThis.__crycatBase, N = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${S ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${k}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((V = window.screen) == null ? void 0 : V.width) ?? "?"}x${((ie = window.screen) == null ? void 0 : ie.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && N.push(`- Elementos: ${a.pages} página(s)`), r && N.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), N.join(`
`);
  }, _ = () => n ? [
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
  ].map((S) => `- ${S}: ${String(n[S])}`).join(`
`) : "", E = () => {
    const k = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      v.trim() || "1. …",
      ""
    ];
    p && k.push("### Entorno", w(), ""), C && n && k.push("### Ajustes", _(), "");
    const S = h();
    return T && S.length && k.push("### Errores recogidos", S.join(`
`), ""), k.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), k.join(`
`);
  }, b = () => {
    const k = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, S = `${th}/issues/new?` + new URLSearchParams({
      title: k,
      body: E(),
      labels: "bug"
    }).toString();
    window.open(S, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: nh.map(([k, S]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${k}`,
        onClick: () => d((N) => (N ? N + `
` : "") + S),
        children: o(k)
      },
      k
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
          onChange: (k) => d(k.target.value)
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
          value: v,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (k) => g(k.target.value)
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
          onChange: (k) => j(k.target.checked)
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
          onChange: (k) => y(k.target.checked)
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
          checked: T,
          onChange: (k) => m(k.target.checked)
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

${v}

${E()}`
              ), f(!0);
            } catch {
            }
          },
          children: o(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: b, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function ah() {
  const [e, t] = x.useState([]), [n, r] = x.useState(null), [a, o] = x.useState(null), [s, u] = x.useState(null), [l, d] = x.useState(null), [v, g] = x.useState(null), [p, j] = x.useState(!0), [C, y] = x.useState(!1), [T, m] = x.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, f] = x.useState(33.3), [h, w] = x.useState(33.3), _ = Zm(), E = x.useRef(null), b = x.useRef(null);
  x.useEffect(() => {
    (async () => {
      try {
        const D = await I.getSettings();
        d(D.settings), Kl(D.settings.tema), m((F) => ({
          ...F,
          guidesVisible: D.settings.ver_guias,
          eyeTransparent: D.settings.fondo_transparente
        })), t((await I.listAssets()).map($r)), o(await I.result());
      } catch {
        j(!1);
      }
    })();
  }, []), x.useEffect(() => {
    const D = (F) => {
      const Ee = F.detail;
      f(Ee ? 19 : 33.3), w(Ee ? 62 : 33.3);
    };
    return window.addEventListener("crycat:disposicion", D), () => window.removeEventListener("crycat:disposicion", D);
  }, []), x.useEffect(() => {
    const D = setInterval(async () => {
      try {
        await I.health(), j(!0);
      } catch {
        j(!1);
      }
    }, 5e3);
    return () => clearInterval(D);
  }, []);
  const k = x.useCallback(async () => {
    try {
      t((await I.listAssets()).map($r)), o(await I.result());
      try {
        u(await I.estimate());
      } catch {
      }
    } catch {
      j(!1);
    }
  }, []), S = x.useCallback((D) => {
    b.current && window.clearInterval(b.current), b.current = window.setInterval(async () => {
      try {
        const F = await I.job(D);
        g(F), F.done && (window.clearInterval(b.current), b.current = null, await k(), F.status === "done" && window.setTimeout(() => g(null), 2500));
      } catch {
        window.clearInterval(b.current), b.current = null;
      }
    }, 300);
  }, []), N = x.useCallback(async () => {
    try {
      const D = await I.optimize();
      g(D), S(D.id);
    } catch {
      j(!1);
    }
  }, [S]), V = x.useCallback(
    async (D) => {
      try {
        const F = await I.optimize(D, !0);
        g(F), S(F.id);
      } catch {
        j(!1);
      }
    },
    [S]
  ), ie = x.useCallback(() => {
    l && l.auto_recalcular === !1 || (E.current && window.clearTimeout(E.current), E.current = window.setTimeout(N, 400));
  }, [N, l]), _e = x.useRef(null);
  x.useEffect(() => {
    _e.current = ie;
  }, [ie]);
  const He = x.useRef(!1);
  x.useEffect(() => {
    if (!(!l || He.current)) {
      if (e.length > 0) {
        He.current = !0;
        return;
      }
      He.current = !0, I.crearDemo().then(async (D) => {
        var F;
        D.ok && (await k(), (F = _e.current) == null || F.call(_e));
      }).catch(() => {
      });
    }
  }, [l, e.length, k]);
  const Ne = x.useCallback(
    async (D) => {
      d((F) => F && { ...F, ...D }), D.tema && Kl(D.tema);
      try {
        const F = await I.putSettings(D);
        if (F.job)
          g(F.job), S(F.job.id);
        else
          try {
            u(await I.estimate());
          } catch {
          }
      } catch {
        j(!1);
      }
    },
    [S]
  ), Le = x.useRef([]), M = x.useRef([]), [O, B] = x.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), W = (l == null ? void 0 : l.historial) !== !1, Y = (l == null ? void 0 : l.historial_max) ?? 40, $ = () => B({
    puedeDeshacer: Le.current.length > 0,
    puedeRehacer: M.current.length > 0
  }), K = x.useCallback(() => {
    const D = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && D.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && D.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && D.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && D.push("mini_enabled", "mini_quota"), D;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), de = x.useCallback((D) => {
    const F = {};
    for (const Ee of K()) F[Ee] = D[Ee];
    return F;
  }, [K]), ge = x.useCallback(() => {
    W && (Le.current = [...Le.current, e].slice(-Y), M.current = [], $());
  }, [e, W, Y]), Re = x.useCallback(async () => {
    const D = Le.current.pop();
    if (D) {
      M.current = [...M.current, e], t(D), $();
      for (const F of D)
        await I.patchAsset(F.id, de(F)).catch(() => {
        });
      await k();
    }
  }, [e, k, de]), xt = x.useCallback(async () => {
    const D = M.current.pop();
    if (D) {
      Le.current = [...Le.current, e], t(D), $();
      for (const F of D)
        await I.patchAsset(F.id, de(F)).catch(() => {
        });
      await k();
    }
  }, [e, k, de]);
  x.useEffect(() => {
    const D = (F) => {
      if (!(F.ctrlKey || F.metaKey)) return;
      const wt = F.target;
      if (wt && (wt.tagName === "INPUT" || wt.tagName === "TEXTAREA" || wt.tagName === "SELECT" || wt.isContentEditable)) return;
      const tt = F.key.toLowerCase();
      tt === "z" && !F.shiftKey ? (F.preventDefault(), Re()) : (tt === "y" || tt === "z" && F.shiftKey) && (F.preventDefault(), xt());
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [Re, xt]);
  const xn = x.useCallback(
    (D) => {
      const F = (wt) => {
        const Wr = window.innerWidth, tt = wt.clientX / Wr * 100;
        D === "left" ? f(Math.min(45, Math.max(12, tt))) : w(Math.min(60, Math.max(20, tt - c)));
      }, Ee = () => {
        window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", Ee);
      };
      window.addEventListener("mousemove", F), window.addEventListener("mouseup", Ee);
    },
    [c]
  );
  return x.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(ym, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Dm,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await k(), ie();
          },
          saveSettings: Ne,
          onEditarContorno: (D) => r(D),
          onAntesDeCambiar: ge
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => xn("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ i.jsx(
        Om,
        {
          assets: e,
          result: a,
          settings: l,
          ui: T,
          setUi: m,
          saveSettings: Ne,
          optimize: N,
          onRefresh: k,
          onJob: (D) => {
            g(D), S(D.id);
          },
          onRecalc: V,
          editando: n,
          onFinEdicion: async () => {
            r(null), await k();
          },
          onDeshacer: Re,
          onRehacer: xt,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => xn("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Gm,
        {
          settings: l,
          assets: e,
          saveSettings: Ne
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Hm,
      {
        job: v,
        backendOk: p,
        result: a,
        estimate: s,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (D) => Ne({ volumen: D }),
        onMute: (D) => Ne({ mute: D }),
        onIdioma: (D) => Ne({ idioma: D }),
        onEasterEgg: () => Ne({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: _.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      Xm,
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
      eh,
      {
        open: _.visible,
        onClose: _.cerrar,
        onAbrirCarpeta: () => void I.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      rh,
      {
        open: C,
        onClose: () => y(!1),
        settings: l,
        job: v,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: xm("es", "Cargando CryCat…") });
}
const Ed = document.getElementById("root"), Ut = [
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
const zd = (e, t) => {
  Sa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Sa.length > 12 && Sa.shift();
};
window.addEventListener("error", (e) => zd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => zd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Oi;
function au(e, t = !1) {
  window.clearTimeout(Oi);
  const n = Ii().colors;
  if (Ed.innerHTML = `
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
let wr = null, Bo;
const Fi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, oh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function ih(e) {
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
async function sh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((g, p) => {
    s[p] = g;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [g, p] = await ih(l);
    u = g, s["content-type"] = p;
  } else l instanceof Blob ? u = Fi(await l.arrayBuffer()) : typeof l == "string" && (u = Fi(new TextEncoder().encode(l).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(u) + ")", v = JSON.parse(await wr.runPythonAsync(d));
  return new Response(oh(v.body), {
    status: v.status || 200,
    headers: v.headers || { "content-type": "application/json" }
  });
}
function lh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && wr)
      try {
        return await sh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function uh() {
  try {
    if (au("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const s = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: s }).then(() => navigator.serviceWorker.ready),
          new Promise((u) => setTimeout(u, 6e3))
        ]);
      } catch {
      }
    wr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Fo), Fo("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await wr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (s) => {
      const u = s.data;
      if (!u || u.tipo !== "api") return;
      const l = s.ports && s.ports[0];
      if (l)
        try {
          const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(u.method) + ", " + JSON.stringify(u.path) + ", " + JSON.stringify(JSON.stringify(u.headers || {})) + ", " + JSON.stringify(u.body || "") + ")", v = await wr.runPythonAsync(d);
          l.postMessage(JSON.parse(v));
        } catch (d) {
          l.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (d && d.message ? d.message : d))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, lh();
    const n = document.createElement("div");
    n.id = "crycat-espera";
    const r = Ii().colors;
    n.style.cssText = "position:fixed;inset:0;display:none;z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:" + r.bg + "f2;font:16px system-ui;color:" + r.textSoft + ";text-align:center;padding:24px", n.innerHTML = '<img src="./app/icono.png" alt="" style="width:72px;height:72px;border-radius:20px" /><div id="espera-frase" style="font-size:20px;font-weight:800;color:' + r.text + ';max-width:620px;line-height:1.25"></div><div style="font-size:13px">Optimizando de verdad: el cálculo se hace en tu equipo y puede tardar unos segundos.</div>', document.body.appendChild(n);
    const a = window.fetch.bind(window), o = async (s, u) => {
      const l = String((s == null ? void 0 : s.url) ?? s ?? ""), d = l.includes("/api/optimize") || l.includes("/api/demo");
      if (d) {
        n.style.display = "flex";
        const v = document.getElementById("espera-frase");
        let g = Math.floor(Math.random() * Ut.length);
        v && (v.textContent = Ut[g++ % Ut.length]), window.clearInterval(Bo), Bo = window.setInterval(() => {
          const p = document.getElementById("espera-frase");
          p && (p.textContent = Ut[g++ % Ut.length]);
        }, 1200);
      }
      try {
        return await a(s, u);
      } finally {
        d && (window.clearInterval(Bo), n.style.display = "none");
      }
    };
    window.fetch = o;
    try {
      const s = Ii().key;
      s && s !== "wiwi" && await fetch(yr() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: s })
      });
    } catch {
    }
    Fo("Abriendo la aplicación…", 7), window.clearTimeout(Oi), vd(Ed).render(/* @__PURE__ */ i.jsx(ah, {}));
  } catch (e) {
    au("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
uh();
