var Ks = { exports: {} }, Ua = {}, Js = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr = Symbol.for("react.element"), Td = Symbol.for("react.portal"), Ld = Symbol.for("react.fragment"), Rd = Symbol.for("react.strict_mode"), Ad = Symbol.for("react.profiler"), Id = Symbol.for("react.provider"), Dd = Symbol.for("react.context"), $d = Symbol.for("react.forward_ref"), Od = Symbol.for("react.suspense"), Fd = Symbol.for("react.memo"), Bd = Symbol.for("react.lazy"), Ll = Symbol.iterator;
function Ud(e) {
  return e === null || typeof e != "object" ? null : (e = Ll && e[Ll] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zs = Object.assign, eu = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = eu, this.updater = n || Xs;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tu() {
}
tu.prototype = Fn.prototype;
function To(e, t, n) {
  this.props = e, this.context = t, this.refs = eu, this.updater = n || Xs;
}
var Lo = To.prototype = new tu();
Lo.constructor = To;
Zs(Lo, Fn.prototype);
Lo.isPureReactComponent = !0;
var Rl = Array.isArray, nu = Object.prototype.hasOwnProperty, Ro = { current: null }, ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function au(e, t, n) {
  var r, a = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) nu.call(t, r) && !ru.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Lr, type: e, key: i, ref: l, props: a, _owner: Ro.current };
}
function qd(e, t) {
  return { $$typeof: Lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ao(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lr;
}
function Vd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Al = /\/+/g;
function ii(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vd("" + e.key) : t.toString(36);
}
function na(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Lr:
        case Td:
          l = !0;
      }
  }
  if (l) return l = e, a = a(l), e = r === "" ? "." + ii(l, 0) : r, Rl(a) ? (n = "", e != null && (n = e.replace(Al, "$&/") + "/"), na(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Ao(a) && (a = qd(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Al, "$&/") + "/") + e)), t.push(a)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Rl(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + ii(i, u);
    l += na(i, t, n, s, a);
  }
  else if (s = Ud(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + ii(i, u++), l += na(i, t, n, s, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Or(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return na(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function Gd(e) {
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
var _e = { current: null }, ra = { transition: null }, Hd = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: ra, ReactCurrentOwner: Ro };
function iu() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: Or, forEach: function(e, t, n) {
  Or(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Or(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Or(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ao(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Fn;
U.Fragment = Ld;
U.Profiler = Ad;
U.PureComponent = To;
U.StrictMode = Rd;
U.Suspense = Od;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hd;
U.act = iu;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zs({}, e.props), a = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ro.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) nu.call(t, s) && !ru.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Lr, type: e.type, key: a, ref: i, props: r, _owner: l };
};
U.createContext = function(e) {
  return e = { $$typeof: Dd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Id, _context: e }, e.Consumer = e;
};
U.createElement = au;
U.createFactory = function(e) {
  var t = au.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: $d, render: e };
};
U.isValidElement = Ao;
U.lazy = function(e) {
  return { $$typeof: Bd, _payload: { _status: -1, _result: e }, _init: Gd };
};
U.memo = function(e, t) {
  return { $$typeof: Fd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = ra.transition;
  ra.transition = {};
  try {
    e();
  } finally {
    ra.transition = t;
  }
};
U.unstable_act = iu;
U.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
U.useContext = function(e) {
  return _e.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
U.useId = function() {
  return _e.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return _e.current.useRef(e);
};
U.useState = function(e) {
  return _e.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return _e.current.useTransition();
};
U.version = "18.3.1";
Js.exports = U;
var k = Js.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd = k, Qd = Symbol.for("react.element"), Yd = Symbol.for("react.fragment"), Kd = Object.prototype.hasOwnProperty, Jd = Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r, a = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Kd.call(t, r) && !Xd.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Qd, type: e, key: i, ref: l, props: a, _owner: Jd.current };
}
Ua.Fragment = Yd;
Ua.jsx = ou;
Ua.jsxs = ou;
Ks.exports = Ua;
var o = Ks.exports, lu = { exports: {} }, Oe = {}, su = { exports: {} }, uu = {};
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
      var G = F - 1 >>> 1, W = b[G];
      if (0 < a(W, O)) b[G] = O, b[F] = W, F = G;
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
      e: for (var G = 0, W = b.length, T = W >>> 1; G < T; ) {
        var Q = 2 * (G + 1) - 1, ze = b[Q], Be = Q + 1, Ye = b[Be];
        if (0 > a(ze, F)) Be < W && 0 > a(Ye, ze) ? (b[G] = Ye, b[Be] = F, G = Be) : (b[G] = ze, b[Q] = F, G = Q);
        else if (Be < W && 0 > a(Ye, F)) b[G] = Ye, b[Be] = F, G = Be;
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
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], d = [], v = 1, y = null, p = 3, j = !1, N = !1, x = !1, R = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
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
    if (x = !1, f(b), !N) if (n(s) !== null) N = !0, je(w);
    else {
      var O = n(d);
      O !== null && Ee(h, O.startTime - b);
    }
  }
  function w(b, O) {
    N = !1, x && (x = !1, m(z), z = -1), j = !0;
    var F = p;
    try {
      for (f(O), y = n(s); y !== null && (!(y.expirationTime > O) || b && !I()); ) {
        var G = y.callback;
        if (typeof G == "function") {
          y.callback = null, p = y.priorityLevel;
          var W = G(y.expirationTime <= O);
          O = e.unstable_now(), typeof W == "function" ? y.callback = W : y === n(s) && r(s), f(O);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var T = !0;
      else {
        var Q = n(d);
        Q !== null && Ee(h, Q.startTime - O), T = !1;
      }
      return T;
    } finally {
      y = null, p = F, j = !1;
    }
  }
  var S = !1, _ = null, z = -1, g = 5, C = -1;
  function I() {
    return !(e.unstable_now() - C < g);
  }
  function re() {
    if (_ !== null) {
      var b = e.unstable_now();
      C = b;
      var O = !0;
      try {
        O = _(!0, b);
      } finally {
        O ? oe() : (S = !1, _ = null);
      }
    } else S = !1;
  }
  var oe;
  if (typeof c == "function") oe = function() {
    c(re);
  };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(), at = Re.port2;
    Re.port1.onmessage = re, oe = function() {
      at.postMessage(null);
    };
  } else oe = function() {
    R(re, 0);
  };
  function je(b) {
    _ = b, S || (S = !0, oe());
  }
  function Ee(b, O) {
    z = R(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    N || j || (N = !0, je(w));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : g = 0 < b ? Math.floor(1e3 / b) : 5;
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
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = F + W, b = { id: v++, callback: O, priorityLevel: b, startTime: F, expirationTime: W, sortIndex: -1 }, F > G ? (b.sortIndex = F, t(d, b), n(s) === null && b === n(d) && (x ? (m(z), z = -1) : x = !0, Ee(h, F - G))) : (b.sortIndex = W, t(s, b), N || j || (N = !0, je(w))), b;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(b) {
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
})(uu);
su.exports = uu;
var Zd = su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep = k, $e = Zd;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cu = /* @__PURE__ */ new Set(), fr = {};
function dn(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) cu.add(t[e]);
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Li = Object.prototype.hasOwnProperty, tp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Il = {}, Dl = {};
function np(e) {
  return Li.call(Dl, e) ? !0 : Li.call(Il, e) ? !1 : tp.test(e) ? Dl[e] = !0 : (Il[e] = !0, !1);
}
function rp(e, t, n, r) {
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
function ap(e, t, n, r) {
  if (t === null || typeof t > "u" || rp(e, t, n, r)) return !0;
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
function Ne(e, t, n, r, a, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Io = /[\-:]([a-z])/g;
function Do(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Io,
    Do
  );
  ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Io, Do);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Io, Do);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $o(e, t, n, r) {
  var a = ge.hasOwnProperty(t) ? ge[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ap(t, n, a, r) && (n = null), r || a === null ? np(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fr = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Oo = Symbol.for("react.strict_mode"), Ri = Symbol.for("react.profiler"), du = Symbol.for("react.provider"), pu = Symbol.for("react.context"), Fo = Symbol.for("react.forward_ref"), Ai = Symbol.for("react.suspense"), Ii = Symbol.for("react.suspense_list"), Bo = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), fu = Symbol.for("react.offscreen"), $l = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = $l && e[$l] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, oi;
function Xn(e) {
  if (oi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    oi = t && t[1] || "";
  }
  return `
` + oi + e;
}
var li = !1;
function si(e, t) {
  if (!e || li) return "";
  li = !0;
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
`), i = r.stack.split(`
`), l = a.length - 1, u = i.length - 1; 1 <= l && 0 <= u && a[l] !== i[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (a[l] !== i[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || a[l] !== i[u]) {
              var s = `
` + a[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    li = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function ip(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = si(e.type, !1), e;
    case 11:
      return e = si(e.type.render, !1), e;
    case 1:
      return e = si(e.type, !0), e;
    default:
      return "";
  }
}
function Di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Ri:
      return "Profiler";
    case Oo:
      return "StrictMode";
    case Ai:
      return "Suspense";
    case Ii:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case pu:
      return (e.displayName || "Context") + ".Consumer";
    case du:
      return (e._context.displayName || "Context") + ".Provider";
    case Fo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Bo:
      return t = e.displayName || null, t !== null ? t : Di(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return Di(e(t));
      } catch {
      }
  }
  return null;
}
function op(e) {
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
      return Di(t);
    case 8:
      return t === Oo ? "StrictMode" : "Mode";
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
function Ht(e) {
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
function mu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function lp(e) {
  var t = mu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Br(e) {
  e._valueTracker || (e._valueTracker = lp(e));
}
function hu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = mu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ha(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $i(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ol(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gu(e, t) {
  t = t.checked, t != null && $o(e, "checked", t, !1);
}
function Oi(e, t) {
  gu(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Fi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fi(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Fl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Fi(e, t, n) {
  (t !== "number" || ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function En(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function vu(e, t) {
  var n = Ht(t.value), r = Ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ul(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ui(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? yu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ur, xu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ur = Ur || document.createElement("div"), Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ur.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
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
}, sp = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
  sp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
  });
});
function wu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
}
function ku(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = wu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var up = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function qi(e, t) {
  if (t) {
    if (up[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Vi(e, t) {
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
var Gi = null;
function Uo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hi = null, zn = null, Pn = null;
function ql(e) {
  if (e = Ir(e)) {
    if (typeof Hi != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Wa(t), Hi(e.stateNode, e.type, t));
  }
}
function ju(e) {
  zn ? Pn ? Pn.push(e) : Pn = [e] : zn = e;
}
function Su() {
  if (zn) {
    var e = zn, t = Pn;
    if (Pn = zn = null, ql(e), t) for (e = 0; e < t.length; e++) ql(t[e]);
  }
}
function Cu(e, t) {
  return e(t);
}
function _u() {
}
var ui = !1;
function Nu(e, t, n) {
  if (ui) return e(t, n);
  ui = !0;
  try {
    return Cu(e, t, n);
  } finally {
    ui = !1, (zn !== null || Pn !== null) && (_u(), Su());
  }
}
function hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wa(n);
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
var Wi = !1;
if (St) try {
  var Gn = {};
  Object.defineProperty(Gn, "passive", { get: function() {
    Wi = !0;
  } }), window.addEventListener("test", Gn, Gn), window.removeEventListener("test", Gn, Gn);
} catch {
  Wi = !1;
}
function cp(e, t, n, r, a, i, l, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var rr = !1, ga = null, va = !1, Qi = null, dp = { onError: function(e) {
  rr = !0, ga = e;
} };
function pp(e, t, n, r, a, i, l, u, s) {
  rr = !1, ga = null, cp.apply(dp, arguments);
}
function fp(e, t, n, r, a, i, l, u, s) {
  if (pp.apply(this, arguments), rr) {
    if (rr) {
      var d = ga;
      rr = !1, ga = null;
    } else throw Error(E(198));
    va || (va = !0, Qi = d);
  }
}
function pn(e) {
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
function Eu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vl(e) {
  if (pn(e) !== e) throw Error(E(188));
}
function mp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = pn(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var i = a.alternate;
    if (i === null) {
      if (r = a.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === i.child) {
      for (i = a.child; i; ) {
        if (i === n) return Vl(a), e;
        if (i === r) return Vl(a), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = a, r = i;
    else {
      for (var l = !1, u = a.child; u; ) {
        if (u === n) {
          l = !0, n = a, r = i;
          break;
        }
        if (u === r) {
          l = !0, r = a, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            l = !0, n = i, r = a;
            break;
          }
          if (u === r) {
            l = !0, r = i, n = a;
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
function zu(e) {
  return e = mp(e), e !== null ? Pu(e) : null;
}
function Pu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bu = $e.unstable_scheduleCallback, Gl = $e.unstable_cancelCallback, hp = $e.unstable_shouldYield, gp = $e.unstable_requestPaint, le = $e.unstable_now, vp = $e.unstable_getCurrentPriorityLevel, qo = $e.unstable_ImmediatePriority, Mu = $e.unstable_UserBlockingPriority, ya = $e.unstable_NormalPriority, yp = $e.unstable_LowPriority, Tu = $e.unstable_IdlePriority, qa = null, ct = null;
function xp(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function") try {
    ct.onCommitFiberRoot(qa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : jp, wp = Math.log, kp = Math.LN2;
function jp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (wp(e) / kp | 0) | 0;
}
var qr = 64, Vr = 4194304;
function er(e) {
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
function xa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~a;
    u !== 0 ? r = er(u) : (i &= l, i !== 0 && (r = er(i)));
  } else l = n & ~a, l !== 0 ? r = er(l) : i !== 0 && (r = er(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Sp(e, t) {
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
function Cp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - et(i), u = 1 << l, s = a[l];
    s === -1 ? (!(u & n) || u & r) && (a[l] = Sp(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Yi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lu() {
  var e = qr;
  return qr <<= 1, !(qr & 4194240) && (qr = 64), e;
}
function ci(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function _p(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - et(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Vo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var H = 0;
function Ru(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Au, Go, Iu, Du, $u, Ki = !1, Gr = [], $t = null, Ot = null, Ft = null, gr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Rt = [], Np = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Ir(t), t !== null && Go(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Ep(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return $t = Hn($t, e, t, n, r, a), !0;
    case "dragenter":
      return Ot = Hn(Ot, e, t, n, r, a), !0;
    case "mouseover":
      return Ft = Hn(Ft, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return gr.set(i, Hn(gr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, vr.set(i, Hn(vr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Ou(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Eu(n), t !== null) {
          e.blockedOn = t, $u(e.priority, function() {
            Iu(n);
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
function aa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Gi = r, n.target.dispatchEvent(r), Gi = null;
    } else return t = Ir(n), t !== null && Go(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Wl(e, t, n) {
  aa(e) && n.delete(t);
}
function zp() {
  Ki = !1, $t !== null && aa($t) && ($t = null), Ot !== null && aa(Ot) && (Ot = null), Ft !== null && aa(Ft) && (Ft = null), gr.forEach(Wl), vr.forEach(Wl);
}
function Wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ki || (Ki = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, zp)));
}
function yr(e) {
  function t(a) {
    return Wn(a, e);
  }
  if (0 < Gr.length) {
    Wn(Gr[0], e);
    for (var n = 1; n < Gr.length; n++) {
      var r = Gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && Wn($t, e), Ot !== null && Wn(Ot, e), Ft !== null && Wn(Ft, e), gr.forEach(t), vr.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); ) Ou(n), n.blockedOn === null && Rt.shift();
}
var bn = Et.ReactCurrentBatchConfig, wa = !0;
function Pp(e, t, n, r) {
  var a = H, i = bn.transition;
  bn.transition = null;
  try {
    H = 1, Ho(e, t, n, r);
  } finally {
    H = a, bn.transition = i;
  }
}
function bp(e, t, n, r) {
  var a = H, i = bn.transition;
  bn.transition = null;
  try {
    H = 4, Ho(e, t, n, r);
  } finally {
    H = a, bn.transition = i;
  }
}
function Ho(e, t, n, r) {
  if (wa) {
    var a = Ji(e, t, n, r);
    if (a === null) wi(e, t, r, ka, n), Hl(e, r);
    else if (Ep(a, e, t, n, r)) r.stopPropagation();
    else if (Hl(e, r), t & 4 && -1 < Np.indexOf(e)) {
      for (; a !== null; ) {
        var i = Ir(a);
        if (i !== null && Au(i), i = Ji(e, t, n, r), i === null && wi(e, t, r, ka, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else wi(e, t, r, null, n);
  }
}
var ka = null;
function Ji(e, t, n, r) {
  if (ka = null, e = Uo(r), e = en(e), e !== null) if (t = pn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Eu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ka = e, null;
}
function Fu(e) {
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
      switch (vp()) {
        case qo:
          return 1;
        case Mu:
          return 4;
        case ya:
        case yp:
          return 16;
        case Tu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null, Wo = null, ia = null;
function Bu() {
  if (ia) return ia;
  var e, t = Wo, n = t.length, r, a = "value" in It ? It.value : It.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[i - r]; r++) ;
  return ia = a.slice(e, 1 < r ? 1 - r : void 0);
}
function oa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Hr() {
  return !0;
}
function Ql() {
  return !1;
}
function Fe(e) {
  function t(n, r, a, i, l) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Hr : Ql, this.isPropagationStopped = Ql, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hr);
  }, persist: function() {
  }, isPersistent: Hr }), t;
}
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Qo = Fe(Bn), Ar = ne({}, Bn, { view: 0, detail: 0 }), Mp = Fe(Ar), di, pi, Qn, Va = ne({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (di = e.screenX - Qn.screenX, pi = e.screenY - Qn.screenY) : pi = di = 0, Qn = e), di);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pi;
} }), Yl = Fe(Va), Tp = ne({}, Va, { dataTransfer: 0 }), Lp = Fe(Tp), Rp = ne({}, Ar, { relatedTarget: 0 }), fi = Fe(Rp), Ap = ne({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ip = Fe(Ap), Dp = ne({}, Bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $p = Fe(Dp), Op = ne({}, Bn, { data: 0 }), Kl = Fe(Op), Fp = {
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
}, Bp = {
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
}, Up = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Up[e]) ? !!t[e] : !1;
}
function Yo() {
  return qp;
}
var Vp = ne({}, Ar, { key: function(e) {
  if (e.key) {
    var t = Fp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = oa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yo, charCode: function(e) {
  return e.type === "keypress" ? oa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? oa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Gp = Fe(Vp), Hp = ne({}, Va, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jl = Fe(Hp), Wp = ne({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yo }), Qp = Fe(Wp), Yp = ne({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kp = Fe(Yp), Jp = ne({}, Va, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xp = Fe(Jp), Zp = [9, 13, 27, 32], Ko = St && "CompositionEvent" in window, ar = null;
St && "documentMode" in document && (ar = document.documentMode);
var ef = St && "TextEvent" in window && !ar, Uu = St && (!Ko || ar && 8 < ar && 11 >= ar), Xl = " ", Zl = !1;
function qu(e, t) {
  switch (e) {
    case "keyup":
      return Zp.indexOf(t.keyCode) !== -1;
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
function Vu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vn = !1;
function tf(e, t) {
  switch (e) {
    case "compositionend":
      return Vu(t);
    case "keypress":
      return t.which !== 32 ? null : (Zl = !0, Xl);
    case "textInput":
      return e = t.data, e === Xl && Zl ? null : e;
    default:
      return null;
  }
}
function nf(e, t) {
  if (vn) return e === "compositionend" || !Ko && qu(e, t) ? (e = Bu(), ia = Wo = It = null, vn = !1, e) : null;
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
      return Uu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rf[e.type] : t === "textarea";
}
function Gu(e, t, n, r) {
  ju(r), t = ja(t, "onChange"), 0 < t.length && (n = new Qo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ir = null, xr = null;
function af(e) {
  nc(e, 0);
}
function Ga(e) {
  var t = wn(e);
  if (hu(t)) return e;
}
function of(e, t) {
  if (e === "change") return t;
}
var Hu = !1;
if (St) {
  var mi;
  if (St) {
    var hi = "oninput" in document;
    if (!hi) {
      var ts = document.createElement("div");
      ts.setAttribute("oninput", "return;"), hi = typeof ts.oninput == "function";
    }
    mi = hi;
  } else mi = !1;
  Hu = mi && (!document.documentMode || 9 < document.documentMode);
}
function ns() {
  ir && (ir.detachEvent("onpropertychange", Wu), xr = ir = null);
}
function Wu(e) {
  if (e.propertyName === "value" && Ga(xr)) {
    var t = [];
    Gu(t, xr, e, Uo(e)), Nu(af, t);
  }
}
function lf(e, t, n) {
  e === "focusin" ? (ns(), ir = t, xr = n, ir.attachEvent("onpropertychange", Wu)) : e === "focusout" && ns();
}
function sf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ga(xr);
}
function uf(e, t) {
  if (e === "click") return Ga(t);
}
function cf(e, t) {
  if (e === "input" || e === "change") return Ga(t);
}
function df(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : df;
function wr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Li.call(t, a) || !nt(e[a], t[a])) return !1;
  }
  return !0;
}
function rs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function as(e, t) {
  var n = rs(e);
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
    n = rs(n);
  }
}
function Qu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Yu() {
  for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ha(e.document);
  }
  return t;
}
function Jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function pf(e) {
  var t = Yu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Jo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = as(n, i);
        var l = as(
          n,
          r
        );
        a && l && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ff = St && "documentMode" in document && 11 >= document.documentMode, yn = null, Xi = null, or = null, Zi = !1;
function is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zi || yn == null || yn !== ha(r) || (r = yn, "selectionStart" in r && Jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && wr(or, r) || (or = r, r = ja(Xi, "onSelect"), 0 < r.length && (t = new Qo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function Wr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xn = { animationend: Wr("Animation", "AnimationEnd"), animationiteration: Wr("Animation", "AnimationIteration"), animationstart: Wr("Animation", "AnimationStart"), transitionend: Wr("Transition", "TransitionEnd") }, gi = {}, Ku = {};
St && (Ku = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
function Ha(e) {
  if (gi[e]) return gi[e];
  if (!xn[e]) return e;
  var t = xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ku) return gi[e] = t[n];
  return e;
}
var Ju = Ha("animationend"), Xu = Ha("animationiteration"), Zu = Ha("animationstart"), ec = Ha("transitionend"), tc = /* @__PURE__ */ new Map(), os = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  tc.set(e, t), dn(t, [e]);
}
for (var vi = 0; vi < os.length; vi++) {
  var yi = os[vi], mf = yi.toLowerCase(), hf = yi[0].toUpperCase() + yi.slice(1);
  Qt(mf, "on" + hf);
}
Qt(Ju, "onAnimationEnd");
Qt(Xu, "onAnimationIteration");
Qt(Zu, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(ec, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function ls(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, fp(r, t, void 0, e), e.currentTarget = null;
}
function nc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, d = u.currentTarget;
        if (u = u.listener, s !== i && a.isPropagationStopped()) break e;
        ls(a, u, d), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, d = u.currentTarget, u = u.listener, s !== i && a.isPropagationStopped()) break e;
        ls(a, u, d), i = s;
      }
    }
  }
  if (va) throw e = Qi, va = !1, Qi = null, e;
}
function K(e, t) {
  var n = t[ao];
  n === void 0 && (n = t[ao] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rc(t, e, 2, !1), n.add(r));
}
function xi(e, t, n) {
  var r = 0;
  t && (r |= 4), rc(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[Qr]) {
    e[Qr] = !0, cu.forEach(function(n) {
      n !== "selectionchange" && (gf.has(n) || xi(n, !1, e), xi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || (t[Qr] = !0, xi("selectionchange", !1, t));
  }
}
function rc(e, t, n, r) {
  switch (Fu(t)) {
    case 1:
      var a = Pp;
      break;
    case 4:
      a = bp;
      break;
    default:
      a = Ho;
  }
  n = a.bind(null, t, n, e), a = void 0, !Wi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function wi(e, t, n, r, a) {
  var i = r;
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
        if (l = en(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Nu(function() {
    var d = i, v = Uo(n), y = [];
    e: {
      var p = tc.get(e);
      if (p !== void 0) {
        var j = Qo, N = e;
        switch (e) {
          case "keypress":
            if (oa(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Gp;
            break;
          case "focusin":
            N = "focus", j = fi;
            break;
          case "focusout":
            N = "blur", j = fi;
            break;
          case "beforeblur":
          case "afterblur":
            j = fi;
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
            j = Yl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Lp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Qp;
            break;
          case Ju:
          case Xu:
          case Zu:
            j = Ip;
            break;
          case ec:
            j = Kp;
            break;
          case "scroll":
            j = Mp;
            break;
          case "wheel":
            j = Xp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = $p;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Jl;
        }
        var x = (t & 4) !== 0, R = !x && e === "scroll", m = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var h = f.stateNode;
          if (f.tag === 5 && h !== null && (f = h, m !== null && (h = hr(c, m), h != null && x.push(jr(c, h, f)))), R) break;
          c = c.return;
        }
        0 < x.length && (p = new j(p, N, null, n, v), y.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", p && n !== Gi && (N = n.relatedTarget || n.fromElement) && (en(N) || N[Ct])) break e;
        if ((j || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window, j ? (N = n.relatedTarget || n.toElement, j = d, N = N ? en(N) : null, N !== null && (R = pn(N), N !== R || N.tag !== 5 && N.tag !== 6) && (N = null)) : (j = null, N = d), j !== N)) {
          if (x = Yl, h = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Jl, h = "onPointerLeave", m = "onPointerEnter", c = "pointer"), R = j == null ? p : wn(j), f = N == null ? p : wn(N), p = new x(h, c + "leave", j, n, v), p.target = R, p.relatedTarget = f, h = null, en(v) === d && (x = new x(m, c + "enter", N, n, v), x.target = f, x.relatedTarget = R, h = x), R = h, j && N) t: {
            for (x = j, m = N, c = 0, f = x; f; f = mn(f)) c++;
            for (f = 0, h = m; h; h = mn(h)) f++;
            for (; 0 < c - f; ) x = mn(x), c--;
            for (; 0 < f - c; ) m = mn(m), f--;
            for (; c--; ) {
              if (x === m || m !== null && x === m.alternate) break t;
              x = mn(x), m = mn(m);
            }
            x = null;
          }
          else x = null;
          j !== null && ss(y, p, j, x, !1), N !== null && R !== null && ss(y, R, N, x, !0);
        }
      }
      e: {
        if (p = d ? wn(d) : window, j = p.nodeName && p.nodeName.toLowerCase(), j === "select" || j === "input" && p.type === "file") var w = of;
        else if (es(p)) if (Hu) w = cf;
        else {
          w = sf;
          var S = lf;
        }
        else (j = p.nodeName) && j.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = uf);
        if (w && (w = w(e, d))) {
          Gu(y, w, n, v);
          break e;
        }
        S && S(e, p, d), e === "focusout" && (S = p._wrapperState) && S.controlled && p.type === "number" && Fi(p, "number", p.value);
      }
      switch (S = d ? wn(d) : window, e) {
        case "focusin":
          (es(S) || S.contentEditable === "true") && (yn = S, Xi = d, or = null);
          break;
        case "focusout":
          or = Xi = yn = null;
          break;
        case "mousedown":
          Zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zi = !1, is(y, n, v);
          break;
        case "selectionchange":
          if (ff) break;
        case "keydown":
        case "keyup":
          is(y, n, v);
      }
      var _;
      if (Ko) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else vn ? qu(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (Uu && n.locale !== "ko" && (vn || z !== "onCompositionStart" ? z === "onCompositionEnd" && vn && (_ = Bu()) : (It = v, Wo = "value" in It ? It.value : It.textContent, vn = !0)), S = ja(d, z), 0 < S.length && (z = new Kl(z, e, null, n, v), y.push({ event: z, listeners: S }), _ ? z.data = _ : (_ = Vu(n), _ !== null && (z.data = _)))), (_ = ef ? tf(e, n) : nf(e, n)) && (d = ja(d, "onBeforeInput"), 0 < d.length && (v = new Kl("onBeforeInput", "beforeinput", null, n, v), y.push({ event: v, listeners: d }), v.data = _));
    }
    nc(y, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ja(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = hr(e, n), i != null && r.unshift(jr(e, i, a)), i = hr(e, t), i != null && r.push(jr(e, i, a))), e = e.return;
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ss(e, t, n, r, a) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && d !== null && (u = d, a ? (s = hr(n, i), s != null && l.unshift(jr(n, s, u))) : a || (s = hr(n, i), s != null && l.push(jr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var vf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function us(e) {
  return (typeof e == "string" ? e : "" + e).replace(vf, `
`).replace(yf, "");
}
function Yr(e, t, n) {
  if (t = us(t), us(e) !== t && n) throw Error(E(425));
}
function Sa() {
}
var eo = null, to = null;
function no(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ro = typeof setTimeout == "function" ? setTimeout : void 0, xf = typeof clearTimeout == "function" ? clearTimeout : void 0, cs = typeof Promise == "function" ? Promise : void 0, wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof cs < "u" ? function(e) {
  return cs.resolve(null).then(e).catch(kf);
} : ro;
function kf(e) {
  setTimeout(function() {
    throw e;
  });
}
function ki(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), yr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  yr(t);
}
function Bt(e) {
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
function ds(e) {
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
var Un = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Un, Sr = "__reactProps$" + Un, Ct = "__reactContainer$" + Un, ao = "__reactEvents$" + Un, jf = "__reactListeners$" + Un, Sf = "__reactHandles$" + Un;
function en(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ct] || n[ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ds(e); e !== null; ) {
        if (n = e[ut]) return n;
        e = ds(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ir(e) {
  return e = e[ut] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Wa(e) {
  return e[Sr] || null;
}
var io = [], kn = -1;
function Yt(e) {
  return { current: e };
}
function J(e) {
  0 > kn || (e.current = io[kn], io[kn] = null, kn--);
}
function Y(e, t) {
  kn++, io[kn] = e.current, e.current = t;
}
var Wt = {}, ke = Yt(Wt), Me = Yt(!1), on = Wt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function Ca() {
  J(Me), J(ke);
}
function ps(e, t, n) {
  if (ke.current !== Wt) throw Error(E(168));
  Y(ke, t), Y(Me, n);
}
function ac(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, op(e) || "Unknown", a));
  return ne({}, n, r);
}
function _a(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, on = ke.current, Y(ke, e), Y(Me, Me.current), !0;
}
function fs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = ac(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, J(Me), J(ke), Y(ke, e)) : J(Me), Y(Me, n);
}
var yt = null, Qa = !1, ji = !1;
function ic(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function Cf(e) {
  Qa = !0, ic(e);
}
function Kt() {
  if (!ji && yt !== null) {
    ji = !0;
    var e = 0, t = H;
    try {
      var n = yt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Qa = !1;
    } catch (a) {
      throw yt !== null && (yt = yt.slice(e + 1)), bu(qo, Kt), a;
    } finally {
      H = t, ji = !1;
    }
  }
  return null;
}
var jn = [], Sn = 0, Na = null, Ea = 0, qe = [], Ve = 0, ln = null, wt = 1, kt = "";
function Xt(e, t) {
  jn[Sn++] = Ea, jn[Sn++] = Na, Na = e, Ea = t;
}
function oc(e, t, n) {
  qe[Ve++] = wt, qe[Ve++] = kt, qe[Ve++] = ln, ln = e;
  var r = wt;
  e = kt;
  var a = 32 - et(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - et(t) + a;
  if (30 < i) {
    var l = a - a % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, wt = 1 << 32 - et(t) + a | n << a | r, kt = i + e;
  } else wt = 1 << i | n << a | r, kt = e;
}
function Xo(e) {
  e.return !== null && (Xt(e, 1), oc(e, 1, 0));
}
function Zo(e) {
  for (; e === Na; ) Na = jn[--Sn], jn[Sn] = null, Ea = jn[--Sn], jn[Sn] = null;
  for (; e === ln; ) ln = qe[--Ve], qe[Ve] = null, kt = qe[--Ve], qe[Ve] = null, wt = qe[--Ve], qe[Ve] = null;
}
var De = null, Ie = null, Z = !1, Ze = null;
function lc(e, t) {
  var n = Ge(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ms(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Ie = Bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: wt, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ge(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lo(e) {
  if (Z) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!ms(e, t)) {
        if (oo(e)) throw Error(E(418));
        t = Bt(n.nextSibling);
        var r = De;
        t && ms(e, t) ? lc(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, De = e);
      }
    } else {
      if (oo(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, Z = !1, De = e;
    }
  }
}
function hs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Kr(e) {
  if (e !== De) return !1;
  if (!Z) return hs(e), Z = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !no(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (oo(e)) throw sc(), Error(E(418));
    for (; t; ) lc(e, t), t = Bt(t.nextSibling);
  }
  if (hs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = De ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function sc() {
  for (var e = Ie; e; ) e = Bt(e.nextSibling);
}
function An() {
  Ie = De = null, Z = !1;
}
function el(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var _f = Et.ReactCurrentBatchConfig;
function Yn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = a.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Jr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function uc(e) {
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
    return m = Gt(m, c), m.index = 0, m.sibling = null, m;
  }
  function i(m, c, f) {
    return m.index = f, e ? (f = m.alternate, f !== null ? (f = f.index, f < c ? (m.flags |= 2, c) : f) : (m.flags |= 2, c)) : (m.flags |= 1048576, c);
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, c, f, h) {
    return c === null || c.tag !== 6 ? (c = Pi(f, m.mode, h), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function s(m, c, f, h) {
    var w = f.type;
    return w === gn ? v(m, c, f.props.children, h, f.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Tt && gs(w) === c.type) ? (h = a(c, f.props), h.ref = Yn(m, c, f), h.return = m, h) : (h = fa(f.type, f.key, f.props, null, m.mode, h), h.ref = Yn(m, c, f), h.return = m, h);
  }
  function d(m, c, f, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = bi(f, m.mode, h), c.return = m, c) : (c = a(c, f.children || []), c.return = m, c);
  }
  function v(m, c, f, h, w) {
    return c === null || c.tag !== 7 ? (c = an(f, m.mode, h, w), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function y(m, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Pi("" + c, m.mode, f), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Fr:
          return f = fa(c.type, c.key, c.props, null, m.mode, f), f.ref = Yn(m, null, c), f.return = m, f;
        case hn:
          return c = bi(c, m.mode, f), c.return = m, c;
        case Tt:
          var h = c._init;
          return y(m, h(c._payload), f);
      }
      if (Zn(c) || Vn(c)) return c = an(c, m.mode, f, null), c.return = m, c;
      Jr(m, c);
    }
    return null;
  }
  function p(m, c, f, h) {
    var w = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return w !== null ? null : u(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fr:
          return f.key === w ? s(m, c, f, h) : null;
        case hn:
          return f.key === w ? d(m, c, f, h) : null;
        case Tt:
          return w = f._init, p(
            m,
            c,
            w(f._payload),
            h
          );
      }
      if (Zn(f) || Vn(f)) return w !== null ? null : v(m, c, f, h, null);
      Jr(m, f);
    }
    return null;
  }
  function j(m, c, f, h, w) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(f) || null, u(c, m, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Fr:
          return m = m.get(h.key === null ? f : h.key) || null, s(c, m, h, w);
        case hn:
          return m = m.get(h.key === null ? f : h.key) || null, d(c, m, h, w);
        case Tt:
          var S = h._init;
          return j(m, c, f, S(h._payload), w);
      }
      if (Zn(h) || Vn(h)) return m = m.get(f) || null, v(c, m, h, w, null);
      Jr(c, h);
    }
    return null;
  }
  function N(m, c, f, h) {
    for (var w = null, S = null, _ = c, z = c = 0, g = null; _ !== null && z < f.length; z++) {
      _.index > z ? (g = _, _ = null) : g = _.sibling;
      var C = p(m, _, f[z], h);
      if (C === null) {
        _ === null && (_ = g);
        break;
      }
      e && _ && C.alternate === null && t(m, _), c = i(C, c, z), S === null ? w = C : S.sibling = C, S = C, _ = g;
    }
    if (z === f.length) return n(m, _), Z && Xt(m, z), w;
    if (_ === null) {
      for (; z < f.length; z++) _ = y(m, f[z], h), _ !== null && (c = i(_, c, z), S === null ? w = _ : S.sibling = _, S = _);
      return Z && Xt(m, z), w;
    }
    for (_ = r(m, _); z < f.length; z++) g = j(_, m, z, f[z], h), g !== null && (e && g.alternate !== null && _.delete(g.key === null ? z : g.key), c = i(g, c, z), S === null ? w = g : S.sibling = g, S = g);
    return e && _.forEach(function(I) {
      return t(m, I);
    }), Z && Xt(m, z), w;
  }
  function x(m, c, f, h) {
    var w = Vn(f);
    if (typeof w != "function") throw Error(E(150));
    if (f = w.call(f), f == null) throw Error(E(151));
    for (var S = w = null, _ = c, z = c = 0, g = null, C = f.next(); _ !== null && !C.done; z++, C = f.next()) {
      _.index > z ? (g = _, _ = null) : g = _.sibling;
      var I = p(m, _, C.value, h);
      if (I === null) {
        _ === null && (_ = g);
        break;
      }
      e && _ && I.alternate === null && t(m, _), c = i(I, c, z), S === null ? w = I : S.sibling = I, S = I, _ = g;
    }
    if (C.done) return n(
      m,
      _
    ), Z && Xt(m, z), w;
    if (_ === null) {
      for (; !C.done; z++, C = f.next()) C = y(m, C.value, h), C !== null && (c = i(C, c, z), S === null ? w = C : S.sibling = C, S = C);
      return Z && Xt(m, z), w;
    }
    for (_ = r(m, _); !C.done; z++, C = f.next()) C = j(_, m, z, C.value, h), C !== null && (e && C.alternate !== null && _.delete(C.key === null ? z : C.key), c = i(C, c, z), S === null ? w = C : S.sibling = C, S = C);
    return e && _.forEach(function(re) {
      return t(m, re);
    }), Z && Xt(m, z), w;
  }
  function R(m, c, f, h) {
    if (typeof f == "object" && f !== null && f.type === gn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fr:
          e: {
            for (var w = f.key, S = c; S !== null; ) {
              if (S.key === w) {
                if (w = f.type, w === gn) {
                  if (S.tag === 7) {
                    n(m, S.sibling), c = a(S, f.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (S.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Tt && gs(w) === S.type) {
                  n(m, S.sibling), c = a(S, f.props), c.ref = Yn(m, S, f), c.return = m, m = c;
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            f.type === gn ? (c = an(f.props.children, m.mode, h, f.key), c.return = m, m = c) : (h = fa(f.type, f.key, f.props, null, m.mode, h), h.ref = Yn(m, c, f), h.return = m, m = h);
          }
          return l(m);
        case hn:
          e: {
            for (S = f.key; c !== null; ) {
              if (c.key === S) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(m, c.sibling), c = a(c, f.children || []), c.return = m, m = c;
                break e;
              } else {
                n(m, c);
                break;
              }
              else t(m, c);
              c = c.sibling;
            }
            c = bi(f, m.mode, h), c.return = m, m = c;
          }
          return l(m);
        case Tt:
          return S = f._init, R(m, c, S(f._payload), h);
      }
      if (Zn(f)) return N(m, c, f, h);
      if (Vn(f)) return x(m, c, f, h);
      Jr(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, f), c.return = m, m = c) : (n(m, c), c = Pi(f, m.mode, h), c.return = m, m = c), l(m)) : n(m, c);
  }
  return R;
}
var In = uc(!0), cc = uc(!1), za = Yt(null), Pa = null, Cn = null, tl = null;
function nl() {
  tl = Cn = Pa = null;
}
function rl(e) {
  var t = za.current;
  J(za), e._currentValue = t;
}
function so(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mn(e, t) {
  Pa = e, tl = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if (tl !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
    if (Pa === null) throw Error(E(308));
    Cn = e, Pa.dependencies = { lanes: 0, firstContext: e };
  } else Cn = Cn.next = e;
  return t;
}
var tn = null;
function al(e) {
  tn === null ? tn = [e] : tn.push(e);
}
function dc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, al(t)) : (n.next = a.next, a.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function il(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, _t(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, al(r)) : (t.next = a.next, a.next = t), r.interleaved = t, _t(e, n);
}
function la(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vo(e, n);
  }
}
function vs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? a = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? a = i = t : i = i.next = t;
    } else a = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ba(e, t, n, r) {
  var a = e.updateQueue;
  Lt = !1;
  var i = a.firstBaseUpdate, l = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, d = s.next;
    s.next = null, l === null ? i = d : l.next = d, l = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== l && (u === null ? v.firstBaseUpdate = d : u.next = d, v.lastBaseUpdate = s));
  }
  if (i !== null) {
    var y = a.baseState;
    l = 0, v = d = s = null, u = i;
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
          var N = e, x = u;
          switch (p = t, j = n, x.tag) {
            case 1:
              if (N = x.payload, typeof N == "function") {
                y = N.call(j, y, p);
                break e;
              }
              y = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = x.payload, p = typeof N == "function" ? N.call(j, y, p) : N, p == null) break e;
              y = ne({}, y, p);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [u] : p.push(u));
      } else j = { eventTime: j, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (d = v = j, s = y) : v = v.next = j, l |= p;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = y), a.baseState = s, a.firstBaseUpdate = d, a.lastBaseUpdate = v, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        l |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    un |= l, e.lanes = l, e.memoizedState = y;
  }
}
function ys(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var Dr = {}, dt = Yt(Dr), Cr = Yt(Dr), _r = Yt(Dr);
function nn(e) {
  if (e === Dr) throw Error(E(174));
  return e;
}
function ol(e, t) {
  switch (Y(_r, t), Y(Cr, e), Y(dt, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ui(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ui(t, e);
  }
  J(dt), Y(dt, t);
}
function Dn() {
  J(dt), J(Cr), J(_r);
}
function fc(e) {
  nn(_r.current);
  var t = nn(dt.current), n = Ui(t, e.type);
  t !== n && (Y(Cr, e), Y(dt, n));
}
function ll(e) {
  Cr.current === e && (J(dt), J(Cr));
}
var ee = Yt(0);
function Ma(e) {
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
var Si = [];
function sl() {
  for (var e = 0; e < Si.length; e++) Si[e]._workInProgressVersionPrimary = null;
  Si.length = 0;
}
var sa = Et.ReactCurrentDispatcher, Ci = Et.ReactCurrentBatchConfig, sn = 0, te = null, ue = null, de = null, Ta = !1, lr = !1, Nr = 0, Nf = 0;
function ye() {
  throw Error(E(321));
}
function ul(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function cl(e, t, n, r, a, i) {
  if (sn = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, sa.current = e === null || e.memoizedState === null ? bf : Mf, e = n(r, a), lr) {
    i = 0;
    do {
      if (lr = !1, Nr = 0, 25 <= i) throw Error(E(301));
      i += 1, de = ue = null, t.updateQueue = null, sa.current = Tf, e = n(r, a);
    } while (lr);
  }
  if (sa.current = La, t = ue !== null && ue.next !== null, sn = 0, de = ue = te = null, Ta = !1, t) throw Error(E(300));
  return e;
}
function dl() {
  var e = Nr !== 0;
  return Nr = 0, e;
}
function st() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? te.memoizedState = de = e : de = de.next = e, de;
}
function Qe() {
  if (ue === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) de = t, ue = e;
  else {
    if (e === null) throw Error(E(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, de === null ? te.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _i(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ue, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var l = a.next;
      a.next = i.next, i.next = l;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var u = l = null, s = null, d = i;
    do {
      var v = d.lane;
      if ((sn & v) === v) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        s === null ? (u = s = y, l = r) : s = s.next = y, te.lanes |= v, un |= v;
      }
      d = d.next;
    } while (d !== null && d !== i);
    s === null ? l = r : s.next = u, nt(r, t.memoizedState) || (be = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, te.lanes |= i, un |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ni(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var l = a = a.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== a);
    nt(i, t.memoizedState) || (be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function mc() {
}
function hc(e, t) {
  var n = te, r = Qe(), a = t(), i = !nt(r.memoizedState, a);
  if (i && (r.memoizedState = a, be = !0), r = r.queue, pl(yc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, zr(9, vc.bind(null, n, r, a, t), void 0, null), pe === null) throw Error(E(349));
    sn & 30 || gc(n, t, a);
  }
  return a;
}
function gc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xc(t) && wc(e);
}
function yc(e, t, n) {
  return n(function() {
    xc(t) && wc(e);
  });
}
function xc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function wc(e) {
  var t = _t(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function xs(e) {
  var t = st();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Er, lastRenderedState: e }, t.queue = e, e = e.dispatch = Pf.bind(null, te, e), [t.memoizedState, e];
}
function zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kc() {
  return Qe().memoizedState;
}
function ua(e, t, n, r) {
  var a = st();
  te.flags |= e, a.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ya(e, t, n, r) {
  var a = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (i = l.destroy, r !== null && ul(r, l.deps)) {
      a.memoizedState = zr(t, n, i, r);
      return;
    }
  }
  te.flags |= e, a.memoizedState = zr(1 | t, n, i, r);
}
function ws(e, t) {
  return ua(8390656, 8, e, t);
}
function pl(e, t) {
  return Ya(2048, 8, e, t);
}
function jc(e, t) {
  return Ya(4, 2, e, t);
}
function Sc(e, t) {
  return Ya(4, 4, e, t);
}
function Cc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function _c(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ya(4, 4, Cc.bind(null, t, e), n);
}
function fl() {
}
function Nc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ec(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zc(e, t, n) {
  return sn & 21 ? (nt(n, t) || (n = Lu(), te.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n);
}
function Ef(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ci.transition;
  Ci.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Ci.transition = r;
  }
}
function Pc() {
  return Qe().memoizedState;
}
function zf(e, t, n) {
  var r = Vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bc(e)) Mc(t, n);
  else if (n = dc(e, t, n, r), n !== null) {
    var a = Ce();
    tt(n, e, r, a), Tc(n, t, r);
  }
}
function Pf(e, t, n) {
  var r = Vt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bc(e)) Mc(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (a.hasEagerState = !0, a.eagerState = u, nt(u, l)) {
        var s = t.interleaved;
        s === null ? (a.next = a, al(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = dc(e, t, a, r), n !== null && (a = Ce(), tt(n, e, r, a), Tc(n, t, r));
  }
}
function bc(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function Mc(e, t) {
  lr = Ta = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vo(e, n);
  }
}
var La = { readContext: We, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, bf = { readContext: We, useCallback: function(e, t) {
  return st().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: ws, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ua(
    4194308,
    4,
    Cc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ua(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ua(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = st();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = st();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = zf.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = st();
  return e = { current: e }, t.memoizedState = e;
}, useState: xs, useDebugValue: fl, useDeferredValue: function(e) {
  return st().memoizedState = e;
}, useTransition: function() {
  var e = xs(!1), t = e[0];
  return e = Ef.bind(null, e[1]), st().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, a = st();
  if (Z) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(E(349));
    sn & 30 || gc(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, ws(yc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, zr(9, vc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = st(), t = pe.identifierPrefix;
  if (Z) {
    var n = kt, r = wt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Nf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Mf = {
  readContext: We,
  useCallback: Nc,
  useContext: We,
  useEffect: pl,
  useImperativeHandle: _c,
  useInsertionEffect: jc,
  useLayoutEffect: Sc,
  useMemo: Ec,
  useReducer: _i,
  useRef: kc,
  useState: function() {
    return _i(Er);
  },
  useDebugValue: fl,
  useDeferredValue: function(e) {
    var t = Qe();
    return zc(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = _i(Er)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: mc,
  useSyncExternalStore: hc,
  useId: Pc,
  unstable_isNewReconciler: !1
}, Tf = { readContext: We, useCallback: Nc, useContext: We, useEffect: pl, useImperativeHandle: _c, useInsertionEffect: jc, useLayoutEffect: Sc, useMemo: Ec, useReducer: Ni, useRef: kc, useState: function() {
  return Ni(Er);
}, useDebugValue: fl, useDeferredValue: function(e) {
  var t = Qe();
  return ue === null ? t.memoizedState = e : zc(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = Ni(Er)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: mc, useSyncExternalStore: hc, useId: Pc, unstable_isNewReconciler: !1 };
function Je(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function uo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ka = { isMounted: function(e) {
  return (e = e._reactInternals) ? pn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), a = Vt(e), i = jt(r, a);
  i.payload = t, n != null && (i.callback = n), t = Ut(e, i, a), t !== null && (tt(t, e, a, r), la(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), a = Vt(e), i = jt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ut(e, i, a), t !== null && (tt(t, e, a, r), la(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ce(), r = Vt(e), a = jt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Ut(e, a, r), t !== null && (tt(t, e, r, n), la(t, e, r));
} };
function ks(e, t, n, r, a, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(a, i) : !0;
}
function Lc(e, t, n) {
  var r = !1, a = Wt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = We(i) : (a = Te(t) ? on : ke.current, r = t.contextTypes, i = (r = r != null) ? Rn(e, a) : Wt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ka, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function js(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ka.enqueueReplaceState(t, t.state, null);
}
function co(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, il(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = We(i) : (i = Te(t) ? on : ke.current, a.context = Rn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (uo(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Ka.enqueueReplaceState(a, a.state, null), ba(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += ip(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Ei(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function po(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Lf = typeof WeakMap == "function" ? WeakMap : Map;
function Rc(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Aa || (Aa = !0, jo = r), po(e, t);
  }, n;
}
function Ac(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      po(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    po(e, t), typeof r != "function" && (qt === null ? qt = /* @__PURE__ */ new Set([this]) : qt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Wf.bind(null, e, t, n), t.then(e, e));
}
function Cs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _s(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e);
}
var Rf = Et.ReactCurrentOwner, be = !1;
function Se(e, t, n, r) {
  t.child = e === null ? cc(t, null, n, r) : In(t, e.child, n, r);
}
function Ns(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Mn(t, a), r = cl(e, t, n, r, i, a), n = dl(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Nt(e, t, a)) : (Z && n && Xo(t), t.flags |= 1, Se(e, t, r, a), t.child);
}
function Es(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !kl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ic(e, t, i, r, a)) : (e = fa(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(l, r) && e.ref === t.ref) return Nt(e, t, a);
  }
  return t.flags |= 1, e = Gt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ic(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (wr(i, r) && e.ref === t.ref) if (be = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (be = !0);
    else return t.lanes = e.lanes, Nt(e, t, a);
  }
  return fo(e, t, n, r, a);
}
function Dc(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Nn, Ae), Ae |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Nn, Ae), Ae |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(Nn, Ae), Ae |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(Nn, Ae), Ae |= r;
  return Se(e, t, a, n), t.child;
}
function $c(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function fo(e, t, n, r, a) {
  var i = Te(n) ? on : ke.current;
  return i = Rn(t, i), Mn(t, a), n = cl(e, t, n, r, i, a), r = dl(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Nt(e, t, a)) : (Z && r && Xo(t), t.flags |= 1, Se(e, t, n, a), t.child);
}
function zs(e, t, n, r, a) {
  if (Te(n)) {
    var i = !0;
    _a(t);
  } else i = !1;
  if (Mn(t, a), t.stateNode === null) ca(e, t), Lc(t, n, r), co(t, n, r, a), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = We(d) : (d = Te(n) ? on : ke.current, d = Rn(t, d));
    var v = n.getDerivedStateFromProps, y = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    y || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== d) && js(t, l, r, d), Lt = !1;
    var p = t.memoizedState;
    l.state = p, ba(t, r, l, a), s = t.memoizedState, u !== r || p !== s || Me.current || Lt ? (typeof v == "function" && (uo(t, n, v, r), s = t.memoizedState), (u = Lt || ks(t, n, u, r, p, s, d)) ? (y || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = d, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, pc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Je(t.type, u), l.props = d, y = t.pendingProps, p = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Te(n) ? on : ke.current, s = Rn(t, s));
    var j = n.getDerivedStateFromProps;
    (v = typeof j == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== y || p !== s) && js(t, l, r, s), Lt = !1, p = t.memoizedState, l.state = p, ba(t, r, l, a);
    var N = t.memoizedState;
    u !== y || p !== N || Me.current || Lt ? (typeof j == "function" && (uo(t, n, j, r), N = t.memoizedState), (d = Lt || ks(t, n, d, r, p, N, s) || !1) ? (v || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, N, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, N, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), l.props = r, l.state = N, l.context = s, r = d) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return mo(e, t, n, r, i, a);
}
function mo(e, t, n, r, a, i) {
  $c(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && fs(t, n, !1), Nt(e, t, i);
  r = t.stateNode, Rf.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = In(t, e.child, null, i), t.child = In(t, null, u, i)) : Se(e, t, u, i), t.memoizedState = r.state, a && fs(t, n, !0), t.child;
}
function Oc(e) {
  var t = e.stateNode;
  t.pendingContext ? ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ps(e, t.context, !1), ol(e, t.containerInfo);
}
function Ps(e, t, n, r, a) {
  return An(), el(a), t.flags |= 256, Se(e, t, n, r), t.child;
}
var ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fc(e, t, n) {
  var r = t.pendingProps, a = ee.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Y(ee, a & 1), e === null)
    return lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Za(l, r, 0, null), e = an(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = go(n), t.memoizedState = ho, e) : ml(t, l));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Af(e, t, l, r, u, a, n);
  if (i) {
    i = r.fallback, l = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Gt(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? i = Gt(u, i) : (i = an(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? go(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ho, r;
  }
  return i = e.child, e = i.sibling, r = Gt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ml(e, t) {
  return t = Za({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Xr(e, t, n, r) {
  return r !== null && el(r), In(t, e.child, null, n), e = ml(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Af(e, t, n, r, a, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ei(Error(E(422))), Xr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Za({ mode: "visible", children: r.children }, a, 0, null), i = an(i, a, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && In(t, e.child, null, l), t.child.memoizedState = go(l), t.memoizedState = ho, i);
  if (!(t.mode & 1)) return Xr(e, t, l, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(E(419)), r = Ei(i, r, void 0), Xr(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, be || u) {
    if (r = pe, r !== null) {
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
      a = a & (r.suspendedLanes | l) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, _t(e, a), tt(r, e, a, -1));
    }
    return wl(), r = Ei(Error(E(421))), Xr(e, t, l, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qf.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Ie = Bt(a.nextSibling), De = t, Z = !0, Ze = null, e !== null && (qe[Ve++] = wt, qe[Ve++] = kt, qe[Ve++] = ln, wt = e.id, kt = e.overflow, ln = t), t = ml(t, r.children), t.flags |= 4096, t);
}
function bs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), so(e.return, t, n);
}
function zi(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function Bc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Se(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && bs(e, n, t);
      else if (e.tag === 19) bs(e, n, t);
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
  if (Y(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ma(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), zi(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Ma(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      zi(t, !0, n, null, i);
      break;
    case "together":
      zi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ca(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function If(e, t, n) {
  switch (t.tag) {
    case 3:
      Oc(t), An();
      break;
    case 5:
      fc(t);
      break;
    case 1:
      Te(t.type) && _a(t);
      break;
    case 4:
      ol(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      Y(za, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Fc(e, t, n) : (Y(ee, ee.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Bc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dc(e, t, n);
  }
  return Nt(e, t, n);
}
var Uc, vo, qc, Vc;
Uc = function(e, t) {
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
vo = function() {
};
qc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, nn(dt.current);
    var i = null;
    switch (n) {
      case "input":
        a = $i(e, a), r = $i(e, r), i = [];
        break;
      case "select":
        a = ne({}, a, { value: void 0 }), r = ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = Bi(e, a), r = Bi(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sa);
    }
    qi(n, r);
    var l;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var u = a[d];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (fr.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (u = a != null ? a[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = s;
      else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (fr.hasOwnProperty(d) ? (s != null && d === "onScroll" && K("scroll", e), i || u === s || (i = [])) : (i = i || []).push(d, s));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Vc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!Z) switch (e.tailMode) {
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Df(e, t, n) {
  var r = t.pendingProps;
  switch (Zo(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return Te(t.type) && Ca(), xe(t), null;
    case 3:
      return r = t.stateNode, Dn(), J(Me), J(ke), sl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (_o(Ze), Ze = null))), vo(e, t), xe(t), null;
    case 5:
      ll(t);
      var a = nn(_r.current);
      if (n = t.type, e !== null && t.stateNode != null) qc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return xe(t), null;
        }
        if (e = nn(dt.current), Kr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ut] = t, r[Sr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < tr.length; a++) K(tr[a], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Ol(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              Bl(r, i), K("invalid", r);
          }
          qi(n, i), a = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Yr(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Yr(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : fr.hasOwnProperty(l) && u != null && l === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              Br(r), Fl(r, i, !0);
              break;
            case "textarea":
              Br(r), Ul(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Sa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ut] = t, e[Sr] = r, Uc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Vi(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < tr.length; a++) K(tr[a], e);
                a = r;
                break;
              case "source":
                K("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), a = r;
                break;
              case "details":
                K("toggle", e), a = r;
                break;
              case "input":
                Ol(e, r), a = $i(e, r), K("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ne({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                Bl(e, r), a = Bi(e, r), K("invalid", e);
                break;
              default:
                a = r;
            }
            qi(n, a), u = a;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? ku(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && xu(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fr.hasOwnProperty(i) ? s != null && i === "onScroll" && K("scroll", e) : s != null && $o(e, i, s, l));
            }
            switch (n) {
              case "input":
                Br(e), Fl(e, r, !1);
                break;
              case "textarea":
                Br(e), Ul(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? En(e, !!r.multiple, i, !1) : r.defaultValue != null && En(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Sa);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = nn(_r.current), nn(dt.current), Kr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (i = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              Yr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (J(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Z && Ie !== null && t.mode & 1 && !(t.flags & 128)) sc(), An(), t.flags |= 98560, i = !1;
        else if (i = Kr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[ut] = t;
          } else An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), i = !1;
        } else Ze !== null && (_o(Ze), Ze = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ce === 0 && (ce = 3) : wl())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return Dn(), vo(e, t), e === null && kr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return rl(t.type._context), xe(t), null;
    case 17:
      return Te(t.type) && Ca(), xe(t), null;
    case 19:
      if (J(ee), i = t.memoizedState, i === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Kn(i, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ma(e), l !== null) {
            for (t.flags |= 128, Kn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && le() > On && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ma(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Z) return xe(t), null;
        } else 2 * le() - i.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = le(), t.sibling = null, n = ee.current, Y(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return xl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function $f(e, t) {
  switch (Zo(t), t.tag) {
    case 1:
      return Te(t.type) && Ca(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), J(Me), J(ke), sl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ll(t), null;
    case 13:
      if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        An();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ee), null;
    case 4:
      return Dn(), null;
    case 10:
      return rl(t.type._context), null;
    case 22:
    case 23:
      return xl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zr = !1, we = !1, Of = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function yo(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Ms = !1;
function Ff(e, t) {
  if (eo = wa, e = Yu(), Jo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var a = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, u = -1, s = -1, d = 0, v = 0, y = e, p = null;
        t: for (; ; ) {
          for (var j; y !== n || a !== 0 && y.nodeType !== 3 || (u = l + a), y !== i || r !== 0 && y.nodeType !== 3 || (s = l + r), y.nodeType === 3 && (l += y.nodeValue.length), (j = y.firstChild) !== null; )
            p = y, y = j;
          for (; ; ) {
            if (y === e) break t;
            if (p === n && ++d === a && (u = l), p === i && ++v === r && (s = l), (j = y.nextSibling) !== null) break;
            y = p, p = y.parentNode;
          }
          y = j;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (to = { focusedElem: e, selectionRange: n }, wa = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var x = N.memoizedProps, R = N.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Je(t.type, x), R);
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
      ie(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return N = Ms, Ms = !1, N;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && yo(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ja(e, t) {
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
function xo(e) {
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
function Gc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[Sr], delete t[ao], delete t[jf], delete t[Sf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ts(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sa));
  else if (r !== 4 && (e = e.child, e !== null)) for (wo(e, t, n), e = e.sibling; e !== null; ) wo(e, t, n), e = e.sibling;
}
function ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ko(e, t, n), e = e.sibling; e !== null; ) ko(e, t, n), e = e.sibling;
}
var me = null, Xe = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Wc(e, t, n), n = n.sibling;
}
function Wc(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function") try {
    ct.onCommitFiberUnmount(qa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      we || _n(n, t);
    case 6:
      var r = me, a = Xe;
      me = null, Mt(e, t, n), me = r, Xe = a, me !== null && (Xe ? (e = me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null && (Xe ? (e = me, n = n.stateNode, e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n), yr(e)) : ki(me, n.stateNode));
      break;
    case 4:
      r = me, a = Xe, me = n.stateNode.containerInfo, Xe = !0, Mt(e, t, n), me = r, Xe = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && yo(n, t, l), a = a.next;
        } while (a !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (!we && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ie(n, t, u);
      }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, Mt(e, t, n), we = r) : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Of()), t.forEach(function(r) {
      var a = Yf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            me = u.stateNode, Xe = !1;
            break e;
          case 3:
            me = u.stateNode.containerInfo, Xe = !0;
            break e;
          case 4:
            me = u.stateNode.containerInfo, Xe = !0;
            break e;
        }
        u = u.return;
      }
      if (me === null) throw Error(E(160));
      Wc(i, l, a), me = null, Xe = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (d) {
      ie(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qc(t, e), t = t.sibling;
}
function Qc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), lt(e), r & 4) {
        try {
          sr(3, e, e.return), Ja(3, e);
        } catch (x) {
          ie(e, e.return, x);
        }
        try {
          sr(5, e, e.return);
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 1:
      Ke(t, e), lt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (Ke(t, e), lt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          mr(a, "");
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && gu(a, i), Vi(u, l);
          var d = Vi(u, i);
          for (l = 0; l < s.length; l += 2) {
            var v = s[l], y = s[l + 1];
            v === "style" ? ku(a, y) : v === "dangerouslySetInnerHTML" ? xu(a, y) : v === "children" ? mr(a, y) : $o(a, v, y, d);
          }
          switch (u) {
            case "input":
              Oi(a, i);
              break;
            case "textarea":
              vu(a, i);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var j = i.value;
              j != null ? En(a, !!i.multiple, j, !1) : p !== !!i.multiple && (i.defaultValue != null ? En(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : En(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[Sr] = i;
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ke(t, e), lt(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ke(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        yr(t.containerInfo);
      } catch (x) {
        ie(e, e.return, x);
      }
      break;
    case 4:
      Ke(t, e), lt(e);
      break;
    case 13:
      Ke(t, e), lt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (vl = le())), r & 4 && Ls(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (d = we) || v, Ke(t, e), we = d) : Ke(t, e), lt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1) for (M = e, v = e.child; v !== null; ) {
          for (y = M = v; M !== null; ) {
            switch (p = M, j = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                sr(4, p, p.return);
                break;
              case 1:
                _n(p, p.return);
                var N = p.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (x) {
                    ie(r, n, x);
                  }
                }
                break;
              case 5:
                _n(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  As(y);
                  continue;
                }
            }
            j !== null ? (j.return = p, M = j) : As(y);
          }
          v = v.sibling;
        }
        e: for (v = null, y = e; ; ) {
          if (y.tag === 5) {
            if (v === null) {
              v = y;
              try {
                a = y.stateNode, d ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = y.stateNode, s = y.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = wu("display", l));
              } catch (x) {
                ie(e, e.return, x);
              }
            }
          } else if (y.tag === 6) {
            if (v === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (x) {
              ie(e, e.return, x);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            v === y && (v = null), y = y.return;
          }
          v === y && (v = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Ke(t, e), lt(e), r & 4 && Ls(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hc(n)) {
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
          r.flags & 32 && (mr(a, ""), r.flags &= -33);
          var i = Ts(e);
          ko(e, i, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Ts(e);
          wo(e, u, l);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bf(e, t, n) {
  M = e, Yc(e);
}
function Yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var a = M, i = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || Zr;
      if (!l) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || we;
        u = Zr;
        var d = we;
        if (Zr = l, (we = s) && !d) for (M = a; M !== null; ) l = M, s = l.child, l.tag === 22 && l.memoizedState !== null ? Is(a) : s !== null ? (s.return = l, M = s) : Is(a);
        for (; i !== null; ) M = i, Yc(i), i = i.sibling;
        M = a, Zr = u, we = d;
      }
      Rs(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, M = i) : Rs(e);
  }
}
function Rs(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            we || Ja(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !we) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ys(t, i, r);
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
              ys(t, l, n);
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
                var v = d.memoizedState;
                if (v !== null) {
                  var y = v.dehydrated;
                  y !== null && yr(y);
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
        we || t.flags & 512 && xo(t);
      } catch (p) {
        ie(t, t.return, p);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function As(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Is(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ja(4, t);
          } catch (s) {
            ie(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ie(t, a, s);
            }
          }
          var i = t.return;
          try {
            xo(t);
          } catch (s) {
            ie(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            xo(t);
          } catch (s) {
            ie(t, l, s);
          }
      }
    } catch (s) {
      ie(t, t.return, s);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, M = u;
      break;
    }
    M = t.return;
  }
}
var Uf = Math.ceil, Ra = Et.ReactCurrentDispatcher, hl = Et.ReactCurrentOwner, He = Et.ReactCurrentBatchConfig, V = 0, pe = null, se = null, he = 0, Ae = 0, Nn = Yt(0), ce = 0, Pr = null, un = 0, Xa = 0, gl = 0, ur = null, Pe = null, vl = 0, On = 1 / 0, vt = null, Aa = !1, jo = null, qt = null, ea = !1, Dt = null, Ia = 0, cr = 0, So = null, da = -1, pa = 0;
function Ce() {
  return V & 6 ? le() : da !== -1 ? da : da = le();
}
function Vt(e) {
  return e.mode & 1 ? V & 2 && he !== 0 ? he & -he : _f.transition !== null ? (pa === 0 && (pa = Lu()), pa) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fu(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < cr) throw cr = 0, So = null, Error(E(185));
  Rr(e, n, r), (!(V & 2) || e !== pe) && (e === pe && (!(V & 2) && (Xa |= n), ce === 4 && At(e, he)), Le(e, r), n === 1 && V === 0 && !(t.mode & 1) && (On = le() + 500, Qa && Kt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Cp(e, t);
  var r = xa(e, e === pe ? he : 0);
  if (r === 0) n !== null && Gl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Gl(n), t === 1) e.tag === 0 ? Cf(Ds.bind(null, e)) : ic(Ds.bind(null, e)), wf(function() {
      !(V & 6) && Kt();
    }), n = null;
    else {
      switch (Ru(r)) {
        case 1:
          n = qo;
          break;
        case 4:
          n = Mu;
          break;
        case 16:
          n = ya;
          break;
        case 536870912:
          n = Tu;
          break;
        default:
          n = ya;
      }
      n = rd(n, Kc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Kc(e, t) {
  if (da = -1, pa = 0, V & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = xa(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Da(e, r);
  else {
    t = r;
    var a = V;
    V |= 2;
    var i = Xc();
    (pe !== e || he !== t) && (vt = null, On = le() + 500, rn(e, t));
    do
      try {
        Gf();
        break;
      } catch (u) {
        Jc(e, u);
      }
    while (!0);
    nl(), Ra.current = i, V = a, se !== null ? t = 0 : (pe = null, he = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (a = Yi(e), a !== 0 && (r = a, t = Co(e, a))), t === 1) throw n = Pr, rn(e, 0), At(e, r), Le(e, le()), n;
    if (t === 6) At(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !qf(a) && (t = Da(e, r), t === 2 && (i = Yi(e), i !== 0 && (r = i, t = Co(e, i))), t === 1)) throw n = Pr, rn(e, 0), At(e, r), Le(e, le()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, Pe, vt);
          break;
        case 3:
          if (At(e, r), (r & 130023424) === r && (t = vl + 500 - le(), 10 < t)) {
            if (xa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Ce(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = ro(Zt.bind(null, e, Pe, vt), t);
            break;
          }
          Zt(e, Pe, vt);
          break;
        case 4:
          if (At(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - et(r);
            i = 1 << l, l = t[l], l > a && (a = l), r &= ~i;
          }
          if (r = a, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ro(Zt.bind(null, e, Pe, vt), r);
            break;
          }
          Zt(e, Pe, vt);
          break;
        case 5:
          Zt(e, Pe, vt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Le(e, le()), e.callbackNode === n ? Kc.bind(null, e) : null;
}
function Co(e, t) {
  var n = ur;
  return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Da(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && _o(t)), e;
}
function _o(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function qf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], i = a.getSnapshot;
        a = a.value;
        try {
          if (!nt(i(), a)) return !1;
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
function At(e, t) {
  for (t &= ~gl, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ds(e) {
  if (V & 6) throw Error(E(327));
  Tn();
  var t = xa(e, 0);
  if (!(t & 1)) return Le(e, le()), null;
  var n = Da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yi(e);
    r !== 0 && (t = r, n = Co(e, r));
  }
  if (n === 1) throw n = Pr, rn(e, 0), At(e, t), Le(e, le()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Pe, vt), Le(e, le()), null;
}
function yl(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (On = le() + 500, Qa && Kt());
  }
}
function cn(e) {
  Dt !== null && Dt.tag === 0 && !(V & 6) && Tn();
  var t = V;
  V |= 1;
  var n = He.transition, r = H;
  try {
    if (He.transition = null, H = 1, e) return e();
  } finally {
    H = r, He.transition = n, V = t, !(V & 6) && Kt();
  }
}
function xl() {
  Ae = Nn.current, J(Nn);
}
function rn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, xf(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (Zo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ca();
        break;
      case 3:
        Dn(), J(Me), J(ke), sl();
        break;
      case 5:
        ll(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        J(ee);
        break;
      case 19:
        J(ee);
        break;
      case 10:
        rl(r.type._context);
        break;
      case 22:
      case 23:
        xl();
    }
    n = n.return;
  }
  if (pe = e, se = e = Gt(e.current, null), he = Ae = t, ce = 0, Pr = null, gl = Xa = un = 0, Pe = ur = null, tn !== null) {
    for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = a, r.next = l;
      }
      n.pending = r;
    }
    tn = null;
  }
  return e;
}
function Jc(e, t) {
  do {
    var n = se;
    try {
      if (nl(), sa.current = La, Ta) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ta = !1;
      }
      if (sn = 0, de = ue = te = null, lr = !1, Nr = 0, hl.current = null, n === null || n.return === null) {
        ce = 1, Pr = t, se = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = he, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var d = s, v = u, y = v.tag;
          if (!(v.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var p = v.alternate;
            p ? (v.updateQueue = p.updateQueue, v.memoizedState = p.memoizedState, v.lanes = p.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var j = Cs(l);
          if (j !== null) {
            j.flags &= -257, _s(j, l, u, i, t), j.mode & 1 && Ss(i, d, t), t = j, s = d;
            var N = t.updateQueue;
            if (N === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(s), t.updateQueue = x;
            } else N.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ss(i, d, t), wl();
              break e;
            }
            s = Error(E(426));
          }
        } else if (Z && u.mode & 1) {
          var R = Cs(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), _s(R, l, u, i, t), el($n(s, u));
            break e;
          }
        }
        i = s = $n(s, u), ce !== 4 && (ce = 2), ur === null ? ur = [i] : ur.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Rc(i, s, t);
              vs(i, m);
              break e;
            case 1:
              u = s;
              var c = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (qt === null || !qt.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var h = Ac(i, u, t);
                vs(i, h);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ed(n);
    } catch (w) {
      t = w, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xc() {
  var e = Ra.current;
  return Ra.current = La, e === null ? La : e;
}
function wl() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), pe === null || !(un & 268435455) && !(Xa & 268435455) || At(pe, he);
}
function Da(e, t) {
  var n = V;
  V |= 2;
  var r = Xc();
  (pe !== e || he !== t) && (vt = null, rn(e, t));
  do
    try {
      Vf();
      break;
    } catch (a) {
      Jc(e, a);
    }
  while (!0);
  if (nl(), V = n, Ra.current = r, se !== null) throw Error(E(261));
  return pe = null, he = 0, ce;
}
function Vf() {
  for (; se !== null; ) Zc(se);
}
function Gf() {
  for (; se !== null && !hp(); ) Zc(se);
}
function Zc(e) {
  var t = nd(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? ed(e) : se = t, hl.current = null;
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = $f(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, se = null;
        return;
      }
    } else if (n = Df(n, t, Ae), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Zt(e, t, n) {
  var r = H, a = He.transition;
  try {
    He.transition = null, H = 1, Hf(e, t, n, r);
  } finally {
    He.transition = a, H = r;
  }
  return null;
}
function Hf(e, t, n, r) {
  do
    Tn();
  while (Dt !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (_p(e, i), e === pe && (se = pe = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ea || (ea = !0, rd(ya, function() {
    return Tn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = He.transition, He.transition = null;
    var l = H;
    H = 1;
    var u = V;
    V |= 4, hl.current = null, Ff(e, n), Qc(n, e), pf(to), wa = !!eo, to = eo = null, e.current = n, Bf(n), gp(), V = u, H = l, He.transition = i;
  } else e.current = n;
  if (ea && (ea = !1, Dt = e, Ia = a), i = e.pendingLanes, i === 0 && (qt = null), xp(n.stateNode), Le(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Aa) throw Aa = !1, e = jo, jo = null, e;
  return Ia & 1 && e.tag !== 0 && Tn(), i = e.pendingLanes, i & 1 ? e === So ? cr++ : (cr = 0, So = e) : cr = 0, Kt(), null;
}
function Tn() {
  if (Dt !== null) {
    var e = Ru(Ia), t = He.transition, n = H;
    try {
      if (He.transition = null, H = 16 > e ? 16 : e, Dt === null) var r = !1;
      else {
        if (e = Dt, Dt = null, Ia = 0, V & 6) throw Error(E(331));
        var a = V;
        for (V |= 4, M = e.current; M !== null; ) {
          var i = M, l = i.child;
          if (M.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (M = d; M !== null; ) {
                  var v = M;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, v, i);
                  }
                  var y = v.child;
                  if (y !== null) y.return = v, M = y;
                  else for (; M !== null; ) {
                    v = M;
                    var p = v.sibling, j = v.return;
                    if (Gc(v), v === d) {
                      M = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = j, M = p;
                      break;
                    }
                    M = j;
                  }
                }
              }
              var N = i.alternate;
              if (N !== null) {
                var x = N.child;
                if (x !== null) {
                  N.child = null;
                  do {
                    var R = x.sibling;
                    x.sibling = null, x = R;
                  } while (x !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, M = l;
          else e: for (; M !== null; ) {
            if (i = M, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                sr(9, i, i.return);
            }
            var m = i.sibling;
            if (m !== null) {
              m.return = i.return, M = m;
              break e;
            }
            M = i.return;
          }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          l = M;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, M = f;
          else e: for (l = c; M !== null; ) {
            if (u = M, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ja(9, u);
              }
            } catch (w) {
              ie(u, u.return, w);
            }
            if (u === l) {
              M = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, M = h;
              break e;
            }
            M = u.return;
          }
        }
        if (V = a, Kt(), ct && typeof ct.onPostCommitFiberRoot == "function") try {
          ct.onPostCommitFiberRoot(qa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, He.transition = t;
    }
  }
  return !1;
}
function $s(e, t, n) {
  t = $n(n, t), t = Rc(e, t, 1), e = Ut(e, t, 1), t = Ce(), e !== null && (Rr(e, 1, t), Le(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) $s(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      $s(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r))) {
        e = $n(n, e), e = Ac(t, e, 1), t = Ut(t, e, 1), e = Ce(), t !== null && (Rr(t, 1, e), Le(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (he & n) === n && (ce === 4 || ce === 3 && (he & 130023424) === he && 500 > le() - vl ? rn(e, 0) : gl |= n), Le(e, t);
}
function td(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vr, Vr <<= 1, !(Vr & 130023424) && (Vr = 4194304)) : t = 1);
  var n = Ce();
  e = _t(e, t), e !== null && (Rr(e, t, n), Le(e, n));
}
function Qf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), td(e, n);
}
function Yf(e, t) {
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
  r !== null && r.delete(t), td(e, n);
}
var nd;
nd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) be = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return be = !1, If(e, t, n);
    be = !!(e.flags & 131072);
  }
  else be = !1, Z && t.flags & 1048576 && oc(t, Ea, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ca(e, t), e = t.pendingProps;
      var a = Rn(t, ke.current);
      Mn(t, n), a = cl(null, t, r, e, a, n);
      var i = dl();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (i = !0, _a(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, il(t), a.updater = Ka, t.stateNode = a, a._reactInternals = t, co(t, r, e, n), t = mo(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && Xo(t), Se(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ca(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Jf(r), e = Je(r, e), a) {
          case 0:
            t = fo(null, t, r, e, n);
            break e;
          case 1:
            t = zs(null, t, r, e, n);
            break e;
          case 11:
            t = Ns(null, t, r, e, n);
            break e;
          case 14:
            t = Es(null, t, r, Je(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), fo(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), zs(e, t, r, a, n);
    case 3:
      e: {
        if (Oc(t), e === null) throw Error(E(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, pc(e, t), ba(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = $n(Error(E(423)), t), t = Ps(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = $n(Error(E(424)), t), t = Ps(e, t, r, n, a);
          break e;
        } else for (Ie = Bt(t.stateNode.containerInfo.firstChild), De = t, Z = !0, Ze = null, n = cc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (An(), r === a) {
            t = Nt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return fc(t), e === null && lo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = a.children, no(r, a) ? l = null : i !== null && no(r, i) && (t.flags |= 32), $c(e, t), Se(e, t, l, n), t.child;
    case 6:
      return e === null && lo(t), null;
    case 13:
      return Fc(e, t, n);
    case 4:
      return ol(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), Ns(e, t, r, a, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Y(za, r._currentValue), r._currentValue = l, i !== null) if (nt(i.value, l)) {
          if (i.children === a.children && !Me.current) {
            t = Nt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = jt(-1, n & -n), s.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var v = d.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), d.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), so(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(E(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), so(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        Se(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Mn(t, n), a = We(a), r = r(a), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Je(r, t.pendingProps), a = Je(r.type, a), Es(e, t, r, a, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), ca(e, t), t.tag = 1, Te(r) ? (e = !0, _a(t)) : e = !1, Mn(t, n), Lc(t, r, a), co(t, r, a, n), mo(null, t, r, !0, e, n);
    case 19:
      return Bc(e, t, n);
    case 22:
      return Dc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function rd(e, t) {
  return bu(e, t);
}
function Kf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ge(e, t, n, r) {
  return new Kf(e, t, n, r);
}
function kl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jf(e) {
  if (typeof e == "function") return kl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Fo) return 11;
    if (e === Bo) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ge(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function fa(e, t, n, r, a, i) {
  var l = 2;
  if (r = e, typeof e == "function") kl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case gn:
      return an(n.children, a, i, t);
    case Oo:
      l = 8, a |= 8;
      break;
    case Ri:
      return e = Ge(12, n, t, a | 2), e.elementType = Ri, e.lanes = i, e;
    case Ai:
      return e = Ge(13, n, t, a), e.elementType = Ai, e.lanes = i, e;
    case Ii:
      return e = Ge(19, n, t, a), e.elementType = Ii, e.lanes = i, e;
    case fu:
      return Za(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case du:
          l = 10;
          break e;
        case pu:
          l = 9;
          break e;
        case Fo:
          l = 11;
          break e;
        case Bo:
          l = 14;
          break e;
        case Tt:
          l = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = Ge(l, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function an(e, t, n, r) {
  return e = Ge(7, e, r, t), e.lanes = n, e;
}
function Za(e, t, n, r) {
  return e = Ge(22, e, r, t), e.elementType = fu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Pi(e, t, n) {
  return e = Ge(6, e, null, t), e.lanes = n, e;
}
function bi(e, t, n) {
  return t = Ge(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Xf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ci(0), this.expirationTimes = ci(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ci(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function jl(e, t, n, r, a, i, l, u, s) {
  return e = new Xf(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ge(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, il(i), e;
}
function Zf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ad(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
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
    if (Te(n)) return ac(e, n, t);
  }
  return t;
}
function id(e, t, n, r, a, i, l, u, s) {
  return e = jl(n, r, !0, e, a, i, l, u, s), e.context = ad(null), n = e.current, r = Ce(), a = Vt(n), i = jt(r, a), i.callback = t ?? null, Ut(n, i, a), e.current.lanes = a, Rr(e, a, r), Le(e, r), e;
}
function ei(e, t, n, r) {
  var a = t.current, i = Ce(), l = Vt(a);
  return n = ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(a, t, l), e !== null && (tt(e, a, l, i), la(e, a, l)), l;
}
function $a(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Os(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sl(e, t) {
  Os(e, t), (e = e.alternate) && Os(e, t);
}
function em() {
  return null;
}
var od = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Cl(e) {
  this._internalRoot = e;
}
ti.prototype.render = Cl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  ei(e, t, null, null);
};
ti.prototype.unmount = Cl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function() {
      ei(null, e, null, null);
    }), t[Ct] = null;
  }
};
function ti(e) {
  this._internalRoot = e;
}
ti.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Du();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++) ;
    Rt.splice(n, 0, e), n === 0 && Ou(e);
  }
};
function _l(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ni(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Fs() {
}
function tm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = $a(l);
        i.call(d);
      };
    }
    var l = id(t, r, e, 0, null, !1, !1, "", Fs);
    return e._reactRootContainer = l, e[Ct] = l.current, kr(e.nodeType === 8 ? e.parentNode : e), cn(), l;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = $a(s);
      u.call(d);
    };
  }
  var s = jl(e, 0, !1, null, null, !1, !1, "", Fs);
  return e._reactRootContainer = s, e[Ct] = s.current, kr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
    ei(t, s, n, r);
  }), s;
}
function ri(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = $a(l);
        u.call(s);
      };
    }
    ei(t, l, e, a);
  } else l = tm(n, t, e, a, r);
  return $a(l);
}
Au = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 && (Vo(t, n | 1), Le(t, le()), !(V & 6) && (On = le() + 500, Kt()));
      }
      break;
    case 13:
      cn(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var a = Ce();
          tt(r, e, 1, a);
        }
      }), Sl(e, 1);
  }
};
Go = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ce();
      tt(t, e, 134217728, n);
    }
    Sl(e, 134217728);
  }
};
Iu = function(e) {
  if (e.tag === 13) {
    var t = Vt(e), n = _t(e, t);
    if (n !== null) {
      var r = Ce();
      tt(n, e, t, r);
    }
    Sl(e, t);
  }
};
Du = function() {
  return H;
};
$u = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
Hi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Oi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Wa(r);
            if (!a) throw Error(E(90));
            hu(r), Oi(r, a);
          }
        }
      }
      break;
    case "textarea":
      vu(e, n);
      break;
    case "select":
      t = n.value, t != null && En(e, !!n.multiple, t, !1);
  }
};
Cu = yl;
_u = cn;
var nm = { usingClientEntryPoint: !1, Events: [Ir, wn, Wa, ju, Su, yl] }, Jn = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rm = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = zu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Jn.findFiberByHostInstance || em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ta.isDisabled && ta.supportsFiber) try {
    qa = ta.inject(rm), ct = ta;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_l(t)) throw Error(E(200));
  return Zf(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!_l(e)) throw Error(E(299));
  var n = !1, r = "", a = od;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = jl(e, 1, !1, null, null, n, !1, r, a), e[Ct] = t.current, kr(e.nodeType === 8 ? e.parentNode : e), new Cl(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = zu(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return cn(e);
};
Oe.hydrate = function(e, t, n) {
  if (!ni(t)) throw Error(E(200));
  return ri(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!_l(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", l = od;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = id(t, null, e, 1, n ?? null, a, !1, i, l), e[Ct] = t.current, kr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new ti(t);
};
Oe.render = function(e, t, n) {
  if (!ni(t)) throw Error(E(200));
  return ri(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!ni(e)) throw Error(E(40));
  return e._reactRootContainer ? (cn(function() {
    ri(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = yl;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ni(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ri(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function ld() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld);
    } catch (e) {
      console.error(e);
    }
}
ld(), lu.exports = Oe;
var am = lu.exports, sd, Bs = am;
sd = Bs.createRoot, Bs.hydrateRoot;
const Us = {
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
}, om = [
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
], lm = [
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
function br(e) {
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
function sm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, i = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(i) ? i : 0 };
}
const Oa = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(Oa() + e, t);
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
const L = {
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
  previewUrl: (e) => `/api/assets/${e}/preview.png`,
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
  pageUrl: (e, t, n = !1, r = !1) => `${Oa().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
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
  iconUrl: () => `${Oa()}/api/icon.png?v=${Date.now()}`,
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
async function um(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((v, y) => {
      a.onload = () => v(), a.onerror = () => y(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, l = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(i * u), s.height = Math.round(l * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (v) => s.toBlob((y) => v(y), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function ud(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await um(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const No = [
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
function Eo(e) {
  return No.find((t) => t.key === e) ?? No[0];
}
function qs(e) {
  const t = Eo(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function cd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Eo(e);
  } catch {
  }
  return Eo("wiwi");
}
const dd = {
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
}, pd = k.createContext("es");
function cm({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(pd.Provider, { value: e, children: t });
}
function Nl() {
  return k.useContext(pd);
}
function rt() {
  const e = Nl();
  return (t, n) => {
    let r = e === "en" ? dd[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function dm(e, t, n) {
  return e === "en" ? dd[t] ?? t : t;
}
function X({ size: e = 18, children: t }) {
  return /* @__PURE__ */ o.jsx(
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
function fd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function pm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9.5l5 5M21 9.5l-5 5" })
  ] });
}
function Mr({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Fa({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function fm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function mm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Ba({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function hm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function md({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function El({ size: e }) {
  return /* @__PURE__ */ o.jsxs(
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
        /* @__PURE__ */ o.jsx("rect", { x: "3", y: "4", width: "14", height: "14", rx: "2", strokeDasharray: "3 2" }),
        /* @__PURE__ */ o.jsx("rect", { x: "7", y: "8", width: "14", height: "12", rx: "2" })
      ]
    }
  );
}
function hd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(
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
        /* @__PURE__ */ o.jsx("path", { d: "M21 12a9 9 0 1 1-2.6-6.4" }),
        /* @__PURE__ */ o.jsx("path", { d: "M21 3v5h-5" })
      ]
    }
  );
}
function Tr({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function gm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function vm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function gd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function ym({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function xm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function dr({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function zo({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function vd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Em({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = rt(), i = k.useMemo(() => t.map((g) => g.id), [t]), [l, u] = k.useState(/* @__PURE__ */ new Set()), [s, d] = k.useState("escala"), [v, y] = k.useState(100), [p, j] = k.useState(50), [N, x] = k.useState("mayor"), [R, m] = k.useState("");
  k.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, i.join(",")]);
  const c = (g) => !l.has(g), f = (g) => u((C) => {
    const I = new Set(C);
    return I.has(g) ? I.delete(g) : I.add(g), I;
  }), h = () => u(
    l.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), w = (g) => {
    const C = g.w_mm_base || 0, I = g.h_mm_base || 0;
    return N === "mayor" ? Math.max(C, I) : N === "menor" ? Math.min(C, I) : 2 * Math.sqrt(Math.max(0, C * I) / Math.PI);
  }, S = (g) => {
    if (s === "tamano") {
      const C = w(g);
      if (C > 0) return Math.min(10, Math.max(0.05, p / C));
    }
    return Math.min(10, Math.max(0.05, v / 100));
  }, _ = (g) => {
    const C = S(g);
    return { w: (g.w_mm_base || 0) * C, h: (g.h_mm_base || 0) * C };
  }, z = async () => {
    let g = 0;
    for (const C of t) {
      if (!c(C.id)) continue;
      const I = S(C) * 100;
      await L.patchAsset(C.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(I * 10) / 10))
      }), g += 1;
    }
    await r(), m(a("{n} elementos ajustados ", { n: g })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((g) => {
          const C = _(g), I = Math.min(98, C.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${g.id}`,
              style: {
                width: `${I}%`,
                maxWidth: `${I}%`,
                aspectRatio: `${C.w || 1} / ${C.h || 1}`,
                opacity: c(g.id) ? 1 : 0.3
              },
              title: `${g.name} · ${C.w.toFixed(1)}×${C.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: L.previewUrl(g.id), alt: "" })
            },
            g.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "hint row", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "mini-link",
              "data-testid": "import-todos",
              onClick: h,
              children: l.size === i.length ? a("Seleccionar todos") : a("Quitar selección")
            }
          ),
          /* @__PURE__ */ o.jsxs("span", { children: [
            "— ",
            i.length - l.size,
            "/",
            i.length
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((g) => {
          const C = _(g);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${g.id}`,
              className: c(g.id) ? "sel" : "",
              onClick: () => f(g.id),
              title: g.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: L.previewUrl(g.id), alt: g.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: g.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(g.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  C.w.toFixed(1),
                  "×",
                  C.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            g.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "import-ajustes", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "seg", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-escala",
              className: s === "escala" ? "on" : "",
              onClick: () => d("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
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
        s === "escala" ? /* @__PURE__ */ o.jsxs("label", { children: [
          a("Escala de los seleccionados"),
          /* @__PURE__ */ o.jsxs("span", { className: "row", children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                min: 5,
                max: 1e3,
                step: 5,
                "data-testid": "import-escala",
                value: String(v),
                onChange: (g) => y(Number(g.target.value))
              }
            ),
            /* @__PURE__ */ o.jsx("span", { children: "%" })
          ] })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsxs("label", { children: [
            a("Tamaño del lado"),
            /* @__PURE__ */ o.jsxs("span", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "number",
                  min: 5,
                  max: 2e3,
                  step: 1,
                  "data-testid": "import-tamano",
                  value: String(p),
                  onChange: (g) => j(Number(g.target.value))
                }
              ),
              /* @__PURE__ */ o.jsx("span", { children: "mm" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("label", { children: [
            a("Medir el tamaño por"),
            /* @__PURE__ */ o.jsxs(
              "select",
              {
                "data-testid": "import-modo",
                value: N,
                onChange: (g) => x(g.target.value),
                children: [
                  /* @__PURE__ */ o.jsx("option", { value: "mayor", children: a("Lado mayor") }),
                  /* @__PURE__ */ o.jsx("option", { value: "menor", children: a("Lado menor") }),
                  /* @__PURE__ */ o.jsx("option", { value: "circulo", children: a("Círculo equivalente (aprox.)") })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("La previsualización usa la hoja y los ajustes actuales.") }),
        R && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: R })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsxs("button", { "data-testid": "import-siguiente", onClick: n, children: [
        a("Siguiente"),
        " ▸"
      ] }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "import-conservar",
          onClick: z,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
const Vs = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function zm({ saveSettings: e }) {
  const t = rt(), [n, r] = k.useState(
    {}
  ), [a, i] = k.useState([]), [l, u] = k.useState(!1), [s, d] = k.useState(!1), [v, y] = k.useState(""), [p, j] = k.useState(""), N = () => L.presets().then((c) => i(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  k.useEffect(() => {
    L.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), N();
  }, []);
  const x = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const f = c.slice(8);
          await e(n[f]), j(t("Perfil «{n}» aplicado", {
            n: t(Vs[f] ?? f)
          }));
        } else {
          const f = c.slice(9), h = await L.loadPreset(f);
          await e(h.settings), j(t("Perfil «{n}» cargado", { n: f }));
        }
      } catch {
        j(t("No se pudo aplicar el perfil"));
      }
  }, R = async () => {
    const c = v.trim();
    if (c)
      try {
        const f = await L.savePreset(c);
        i(Array.isArray(f.names) ? f.names : []), y(""), u(!1), j(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        j(t("No se pudo guardar el perfil"));
      }
  }, m = async (c) => {
    try {
      i((await L.deletePreset(c)).names ?? []), j(t("Perfil «{n}» borrado", { n: c }));
    } catch {
      j(t("No se pudo borrar el perfil"));
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "perfiles-barra", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: "perfil-select",
          "data-testid": "perfil-select",
          value: "",
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (c) => x(c.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ o.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((c) => /* @__PURE__ */ o.jsx("option", { value: `fabrica:${c}`, children: t(Vs[c] ?? c) }, c)) }),
            a.length > 0 && /* @__PURE__ */ o.jsx("optgroup", { label: t("Guardados"), children: a.map((c) => /* @__PURE__ */ o.jsx("option", { value: `guardado:${c}`, children: c }, c)) })
          ]
        }
      ),
      !l && /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "perfil-guardar",
          title: t("Guardar los ajustes actuales como perfil"),
          onClick: () => u(!0),
          children: [
            /* @__PURE__ */ o.jsx(zo, { size: 15 }),
            " ",
            t("Guardar")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `chip${s ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => d(!s),
          children: /* @__PURE__ */ o.jsx(dr, { size: 15 })
        }
      )
    ] }),
    l && /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          autoFocus: !0,
          type: "text",
          "data-testid": "perfil-nombre-nuevo",
          placeholder: t("Nombre del perfil (p. ej. «Pikmin A4»)"),
          value: v,
          onChange: (c) => y(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && R(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: R, children: t("Guardar") }),
      /* @__PURE__ */ o.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    s && a.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((c) => /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx("span", { className: "perfil-nombre", title: c, children: c }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => x(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => m(c),
          children: /* @__PURE__ */ o.jsx(md, { size: 15 })
        }
      )
    ] }, c)) }),
    p && /* @__PURE__ */ o.jsx("div", { className: "hint", children: p })
  ] });
}
function Pm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a
}) {
  const i = rt(), [l, u] = k.useState(() => br(e));
  k.useEffect(() => u(br(e)), [e]);
  const s = k.useRef(null), d = sm(l), [v, y] = k.useState(""), p = k.useRef(!1), [j, N] = k.useState(""), x = k.useRef(!1), [R, m] = k.useState({ tamano: !1, borde: !1, mini: !1 });
  k.useEffect(() => {
    p.current || y(d.w > 0 ? d.w.toFixed(1) : ""), x.current || N(d.h > 0 ? d.h.toFixed(1) : "");
  }, [d.w, d.h]);
  const c = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, f = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, h = (g) => {
    y(g);
    const C = Number(g.replace(",", "."));
    !Number.isFinite(C) || C <= 0 || c <= 0 || z({ scale_pct: C / c * 100 });
  }, w = (g) => {
    N(g);
    const C = Number(g.replace(",", "."));
    !Number.isFinite(C) || C <= 0 || f <= 0 || z({ scale_pct: C / f * 100 });
  }, S = (t == null ? void 0 : t.placements.filter((g) => g.asset_id === e.id && g.mini).length) ?? 0, _ = (t == null ? void 0 : t.placements.filter((g) => g.asset_id === e.id && !g.mini).length) ?? 0, z = async (g) => {
    a == null || a(), "copies" in g && (g.copies = Math.max(0, g.copies ?? 0)), u((C) => ({ ...C, ...g }));
    try {
      await L.patchAsset(e.id, g);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx("img", { src: L.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: i("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => L.assetsFolder().then((g) => L.abrirCarpeta(g.path)).catch(() => L.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ o.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: i("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var g;
              return (g = s.current) == null ? void 0 : g.click();
            },
            children: /* @__PURE__ */ o.jsx(fm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            ref: s,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (g) => {
              var I;
              const C = (I = g.target.files) == null ? void 0 : I[0];
              if (g.target.value = "", !!C)
                try {
                  const { blob: re, name: oe } = await ud(C);
                  await L.reemplazar(e.id, re, oe), await n();
                } catch {
                }
            }
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `limpiar-${e.id}`,
            title: i("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ o.jsx(mm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? i("Restaurar fondo original") : i("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? L.restoreBackground(e.id) : L.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ o.jsx(hm, { size: 16 }) : /* @__PURE__ */ o.jsx(Ba, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: i("Eliminar imagen"),
            onClick: () => L.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ o.jsx(md, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: i("Copias"), children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => z({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => z({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            title: i("Incluir como mini (rellena huecos)"),
            onClick: () => z({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ o.jsx(Tr, { size: 15 }),
              " ",
              i("Mini")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-tamano-${e.id}`,
            onClick: () => m((g) => ({ ...g, tamano: !g.tamano })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.tamano ? "open" : ""}`, children: "›" }),
              i("Tamaño"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                d.w.toFixed(1),
                "×",
                d.h.toFixed(1),
                " · ",
                Math.round(l.scale_pct),
                " %"
              ] })
            ]
          }
        ),
        R.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ o.jsx("span", { title: i("Escala del elemento (100% = tamaño natural)"), children: i("Escala") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: l.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (g) => z({ scale_pct: Number(g.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
              Math.round(l.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ o.jsx("span", { title: i("Tamaño exacto en milímetros (mantiene la proporción)"), children: i("Ancho") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: v,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  p.current = !0, x.current = !1;
                },
                onBlur: () => {
                  p.current = !1, y(d.w > 0 ? d.w.toFixed(1) : "");
                },
                onChange: (g) => h(g.target.value)
              }
            ),
            /* @__PURE__ */ o.jsx("span", { children: "mm" }),
            /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ o.jsx("span", { title: i("Tamaño exacto en milímetros (mantiene la proporción)"), children: i("Alto") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: j,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  x.current = !0, p.current = !1;
                },
                onBlur: () => {
                  x.current = !1, N(d.h > 0 ? d.h.toFixed(1) : "");
                },
                onChange: (g) => w(g.target.value)
              }
            ),
            /* @__PURE__ */ o.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${e.id}`,
            onClick: () => m((g) => ({ ...g, borde: !g.borde })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.borde ? "open" : ""}`, children: "›" }),
              i("Borde"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                l.offset_mm.toFixed(1),
                " mm",
                l.offset_mm <= 0 ? ` · ${i("global")}` : ""
              ] })
            ]
          }
        ),
        R.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${e.id}`,
                onClick: () => z({ offset_mm: Math.max(
                  0,
                  Math.round((l.offset_mm - 0.5) * 2) / 2
                ) }),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 10,
                step: 0.5,
                "data-testid": `offset-range-${e.id}`,
                value: l.offset_mm,
                onChange: (g) => z({ offset_mm: Number(g.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => z({ offset_mm: Math.min(
                  20,
                  Math.round((l.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", i("Extender")],
              ["blanco", i("Blanco")],
              ["color", i("Color")],
              ["unir_recto", i("Unir recto")],
              ["unir_curvo", i("Unir curvo")]
            ].map(([g, C]) => /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === g ? "on" : ""}`,
                "data-testid": `offset-modo-${g}-${e.id}`,
                onClick: () => z({ offset_modo: g }),
                children: C
              },
              g
            )),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: i("Color del borde"),
                onChange: (g) => z({
                  offset_color: g.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      l.mini_enabled && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${e.id}`,
            onClick: () => m((g) => ({ ...g, mini: !g.mini })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.mini ? "open" : ""}`, children: "›" }),
              i("Opciones de mini"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                S
              ] })
            ]
          }
        ),
        R.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ o.jsx("span", { title: i("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: i("Cuota") }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => z({ mini_quota: Math.max(
                1,
                Math.round((l.mini_quota - 0.5) * 2) / 2
              ) }),
              children: "−"
            }
          ),
          /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
            "×",
            l.mini_quota
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-mas-${e.id}`,
              onClick: () => z({ mini_quota: Math.min(
                100,
                Math.round((l.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: i(" {n} minis", { n: S }) })
        ] }) })
      ] }),
      _ > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: i("Colocadas: {n}", { n: _ }) }),
      l.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ o.jsx(vd, { size: 14 }),
        " ",
        l.warnings[0],
        " ",
        /blob|trozos sueltos/i.test(l.warnings[0]) && /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: i("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function bm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: l
}) {
  const u = rt(), s = k.useRef(null), [d, v] = k.useState(!1), [y, p] = k.useState(!1), [j, N] = k.useState(null), x = async (w) => {
    const S = [];
    for (const _ of Array.from(w))
      try {
        const { blob: z, name: g } = await ud(_);
        S.push(br(await L.upload(z, g)));
      } catch (z) {
        console.error(z);
      }
    await r(), S.length > 1 && N(S);
  }, R = n.usar_minis, m = {
    90: "libre",
    libre: "no",
    no: "90"
  }, c = {
    90: "90°",
    libre: u("libre"),
    no: u("fijo")
  }, f = e.some((w) => w.demo), h = n.modo === "experto";
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "icon-btn",
          "data-testid": "btn-minimizar-imagenes",
          "data-tip": u(y ? "Desplegar el panel de imágenes" : "Minimizar el panel de imágenes"),
          onClick: () => p(!y),
          children: /* @__PURE__ */ o.jsx("span", { className: `chev ${y ? "open" : ""}`, children: "›" })
        }
      ),
      /* @__PURE__ */ o.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    y && /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Pulsa la flecha para desplegar el panel.") }),
    !y && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsxs("div", { className: "acciones-rapidas", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `chip${R ? " on" : ""}`,
            "data-testid": "chip-minis",
            "data-tip": u("Generar minis: rellenar los huecos con copias pequeñas"),
            onClick: () => a({
              usar_minis: !R,
              // al activarlos se desactiva el recálculo automático (solo ahora)
              ...R ? {} : { auto_recalcular: !1 }
            }),
            children: [
              /* @__PURE__ */ o.jsx(Tr, { size: 15 }),
              " ",
              u("Minis")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `chip${n.auto_recalcular ? " on" : ""}`,
            "data-testid": "chip-auto",
            "data-tip": u("Recalcular automáticamente con cada cambio"),
            onClick: () => a({ auto_recalcular: !n.auto_recalcular }),
            children: [
              /* @__PURE__ */ o.jsx(Fa, { size: 15 }),
              " ",
              u("Auto")
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `chip${h ? " on" : ""}`,
            "data-testid": "chip-modo",
            "data-tip": u("Modo rápido (lo esencial) o experto (todo el control)"),
            onClick: () => a({
              modo: h ? "rapido" : "experto"
            }),
            children: u(h ? "Experto" : "Rápido")
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "chip",
            "data-testid": "chip-rotacion",
            "data-tip": u("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo"),
            onClick: () => a({
              rotacion: m[n.rotacion] ?? "90"
            }),
            children: [
              /* @__PURE__ */ o.jsx(hd, { size: 15 }),
              " ",
              c[n.rotacion] ?? "90°"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(zm, { saveSettings: a }),
      f && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "aviso-demo", children: u("Estas figuras son de ejemplo: desaparecen solas al añadir tus imágenes.") }),
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: `dropzone${d ? " over" : ""}`,
          "data-testid": "dropzone",
          onClick: () => {
            var w;
            return (w = s.current) == null ? void 0 : w.click();
          },
          onDragOver: (w) => {
            w.preventDefault(), v(!0);
          },
          onDragLeave: () => v(!1),
          onDrop: (w) => {
            w.preventDefault(), v(!1), w.dataTransfer.files.length && x(w.dataTransfer.files);
          },
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "plus", children: "+" }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              u("Arrastra imágenes aquí"),
              /* @__PURE__ */ o.jsx("br", {}),
              /* @__PURE__ */ o.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
            ] }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: s,
                type: "file",
                multiple: !0,
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: (w) => {
                  w.target.files && x(w.target.files), w.target.value = "";
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((w) => /* @__PURE__ */ o.jsx(
        Pm,
        {
          a: w,
          result: t,
          onChange: r,
          onEditarContorno: i,
          onAntesDeCambiar: l
        },
        w.id
      )) }),
      !R && /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "btn-clear-all danger",
          "data-testid": "borrar-todo",
          disabled: e.length === 0,
          onClick: () => L.clearAssets().then(r),
          children: u("Descartar imágenes")
        }
      ),
      /* @__PURE__ */ o.jsx(
        Em,
        {
          open: !!j,
          assets: j ?? [],
          onClose: () => N(null),
          onDone: async () => {
            await r();
          }
        }
      )
    ] })
  ] });
}
function yd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = rt(), [i, l] = k.useState(null), [u, s] = k.useState("");
  k.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (v = "") => {
    s("");
    try {
      l(await L.fsList(v));
    } catch (y) {
      s(y.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (v) => v.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    u && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => d(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((v) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => d(`${i.path}/${v}`.replace("//", "/")),
          children: v
        },
        v
      ))
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "elegir-carpeta-ok",
          disabled: !i,
          onClick: () => {
            i && n(i.path), t();
          },
          children: a("Seleccionar esta carpeta")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: t, children: a("Cancelar") })
    ] })
  ] }) }) : null;
}
function Mm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i
}) {
  const l = rt(), [u, s] = k.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((y) => y.startsWith("data:")), v = [
    l("Abre Cricut Design Space."),
    l("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    l("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    l("Pulsa «Crear» para preparar el lienzo."),
    l("Comprueba que las dimensiones coinciden con las del archivo."),
    l("Imprime en papel mate blanco y colócalo en la esterilla."),
    l("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ o.jsx("div", { className: "modal", children: u === "resumen" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { "data-testid": "save-titulo", children: l(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ o.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Archivos:") }),
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((y) => /* @__PURE__ */ o.jsx("li", { title: y, children: y.split(/[\\/]/).pop() }, y)) }),
      !d && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      d && /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      d ? t.map((y, p) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${p}`,
          href: y,
          download: `crycat_pagina-${String(p + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(Mr, { size: 15 }),
            " ",
            l("Descargar página {n}", { n: p + 1 })
          ]
        },
        p
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(Mr, { size: 15 }),
            " ",
            l("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-continuar", onClick: i, children: l("Continuar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => s("cricut"),
          children: l("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { children: l("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: v.map((y, p) => /* @__PURE__ */ o.jsx("li", { children: y }, p)) }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => s("resumen"),
          children: l("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: i, children: l("Entendido") })
    ] })
  ] }) }) });
}
function Tm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: l, onJob: u, onRecalc: s, editando: d, onFinEdicion: v, onDeshacer: y, onRehacer: p, puedeDeshacer: j, puedeRehacer: N }) {
  const x = rt(), R = Nl(), [m, c] = k.useState(1), [f, h] = k.useState({ x: 0, y: 0 }), [w, S] = k.useState(null), [_, z] = k.useState(() => Date.now()), [g, C] = k.useState(null), [I, re] = k.useState(null), [oe, Re] = k.useState(!1), [at, je] = k.useState(2), [Ee, b] = k.useState([]), [O, F] = k.useState(""), [G, W] = k.useState(/* @__PURE__ */ new Set()), T = k.useRef(null), Q = k.useRef(null), ze = R === "en" ? lm : om, Be = k.useMemo(
    () => ze[Math.floor(Math.random() * ze.length)],
    [ze]
  ), Ye = r.saveName.trim() || Be;
  k.useEffect(() => {
    z(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const pt = (t == null ? void 0 : t.pages) ?? 0, qn = !!t && t.efficiency < 0.8;
  k.useEffect(() => {
    const P = T.current;
    if (!P) return;
    const A = (D) => {
      D.preventDefault(), D.stopPropagation();
      const fe = P.getBoundingClientRect(), Ue = D.clientX - fe.left, ht = D.clientY - fe.top;
      c((ot) => {
        const ve = D.deltaY < 0 ? 1.05 : 0.9523809523809523, ae = Math.min(12, Math.max(0.05, ot * ve)), Pt = ae / ot;
        return h((bt) => ({ x: Ue - (Ue - bt.x) * Pt, y: ht - (ht - bt.y) * Pt })), ae;
      });
    };
    return P.addEventListener("wheel", A, { passive: !1 }), () => P.removeEventListener("wheel", A);
  }, []);
  const $ = (P) => {
    if (P.target.closest(".item-box")) return;
    Q.current = { x: P.clientX - f.x, y: P.clientY - f.y };
    const A = (fe) => {
      Q.current && h({ x: fe.clientX - Q.current.x, y: fe.clientY - Q.current.y });
    }, D = () => {
      Q.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", D);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", D);
  };
  k.useEffect(() => {
    const P = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((D) => Math.min(12, D * 1.08)) : A.key === "-" || A.key === "_" ? c((D) => Math.max(0.05, D / 1.08)) : A.key === "0" ? (c(1), h({ x: 0, y: 0 })) : A.key === "Escape" ? S(null) : A.key === "g" ? a((D) => ({ ...D, guidesVisible: !D.guidesVisible })) : A.key === "t" && a((D) => D.eyeFosforito ? { ...D, eyeFosforito: !1, eyeTransparent: !1 } : D.eyeTransparent ? { ...D, eyeTransparent: !1, eyeFosforito: !0 } : { ...D, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", P), () => window.removeEventListener("keydown", P);
  }, [a]);
  const B = k.useRef(null), ft = k.useRef(null), mt = (P, A) => {
    P.preventDefault(), P.stopPropagation();
    const D = P.currentTarget.closest(".page-box");
    if (!D || !t) return;
    const fe = t.page_mm[0] / D.clientWidth, Ue = {
      uid: A.uid,
      startX: P.clientX,
      startY: P.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: fe
    };
    B.current = Ue, ft.current = { x: A.x, y: A.y }, C(Ue), re({ uid: A.uid, x: A.x, y: A.y });
    const ht = (ve) => {
      const ae = B.current;
      if (!ae) return;
      const Pt = (ve.clientX - ae.startX) * ae.mmPerPx / m, bt = (ve.clientY - ae.startY) * ae.mmPerPx / m;
      ft.current = { x: ae.origX + Pt, y: ae.origY + bt }, re({ uid: ae.uid, x: ae.origX + Pt, y: ae.origY + bt });
    }, ot = (ve) => {
      window.removeEventListener("mousemove", ht), window.removeEventListener("mouseup", ot);
      const ae = B.current;
      if (B.current = null, !ae) return;
      const Pt = (ve.clientX - ae.startX) * ae.mmPerPx / m, bt = (ve.clientY - ae.startY) * ae.mmPerPx / m;
      C(null), re(null), !(Math.abs(Pt) < 0.5 && Math.abs(bt) < 0.5) && $r(ae.uid, ae.origX + Pt, ae.origY + bt);
    };
    window.addEventListener("mousemove", ht), window.addEventListener("mouseup", ot);
  }, $r = async (P, A, D) => {
    try {
      const fe = await L.move(P, A, D);
      fe.job ? u(fe.job) : await l();
    } catch {
      await l();
    } finally {
      z(Date.now());
    }
  }, zt = async (P) => {
    const A = await L.unpin(P);
    u(A);
  };
  k.useEffect(() => {
    if (!d) {
      b([]), F(""), W(/* @__PURE__ */ new Set());
      return;
    }
    L.blobs(d.id).then((P) => {
      b(P.blobs), je(P.union_mm ?? 2), F(P.preview_png), W(new Set(P.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      b([]), F("");
    });
  }, [d]);
  const zl = async () => {
    if (d)
      try {
        await L.limpiarContorno(d.id, Array.from(G));
      } finally {
        await (v == null ? void 0 : v());
      }
  }, kd = (P) => {
    W((A) => {
      const D = new Set(A);
      return D.has(P) ? D.delete(P) : D.add(P), D;
    });
  }, [it, Jt] = k.useState(null), jd = async () => {
    try {
      const A = await L.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Jt({ files: A.files, folder: A.folder });
    } catch (A) {
      Jt({ files: [], folder: "", error: A.message });
      return;
    }
    const P = document.createElement("iframe");
    P.setAttribute("aria-hidden", "true"), P.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", P.src = "/api/print.pdf", P.onload = () => {
      var A, D;
      try {
        (A = P.contentWindow) == null || A.focus(), (D = P.contentWindow) == null || D.print();
      } finally {
        window.setTimeout(() => P.remove(), 6e4);
      }
    }, document.body.appendChild(P);
  }, Sd = async () => {
    try {
      const P = await L.export(Ye);
      Jt({ files: P.files, folder: P.folder });
    } catch (P) {
      Jt({ files: [], folder: "", error: P.message });
    }
  }, Cd = () => {
    Re(!0);
  }, _d = async (P) => {
    try {
      const A = await L.export(Ye, P);
      Jt({ files: A.files, folder: A.folder });
    } catch (A) {
      Jt({ files: [], folder: "", error: A.message });
    }
  }, Pl = (t == null ? void 0 : t.poly_mm) ?? [], [Nd, Ed] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [zd, Pd] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], fn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : zd, ai = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Pd, bl = n.lienzo === "pagina" ? 0 : Nd, Ml = n.lienzo === "pagina" ? 0 : Ed, Tl = Pl.length ? "M" + Pl.map(([P, A]) => `${P - bl},${A - Ml}`).join(" L") + " Z" : "", bd = (P) => {
    const A = (t == null ? void 0 : t.placements.filter((D) => D.page === P)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (D) => {
          pt > 1 && w === null && !D.target.closest(".item-box") && S(P);
        },
        "data-testid": `page-${P}`,
        children: [
          /* @__PURE__ */ o.jsx("img", { className: "sheet", src: L.pageUrl(P, _, n.simular_impresion === !0, r.verBordes), alt: x("Página {i}", { i: P + 1 }), draggable: !1 }),
          r.guidesVisible && Tl && /* @__PURE__ */ o.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${fn} ${ai}`, preserveAspectRatio: "none", children: /* @__PURE__ */ o.jsx(
            "path",
            {
              d: Tl,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, fn / 250),
              strokeDasharray: `${fn / 55} ${fn / 85}`,
              opacity: 0.85
            }
          ) }),
          A.map((D) => {
            const fe = e.find((ve) => ve.id === D.asset_id), Ue = (I == null ? void 0 : I.uid) === D.uid ? I : null, ht = ((Ue ? Ue.x : D.x) - bl) / (fn || 1) * 100, ot = ((Ue ? Ue.y : D.y) - Ml) / (ai || 1) * 100;
            return /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `item-box ${D.pinned ? "pinned" : ""} ${(g == null ? void 0 : g.uid) === D.uid ? "dragging" : ""}`,
                style: {
                  left: `${ht}%`,
                  top: `${ot}%`,
                  width: `${D.w / (fn || 1) * 100}%`,
                  height: `${D.h / (ai || 1) * 100}%`
                },
                title: (fe == null ? void 0 : fe.name) ?? "",
                onMouseDown: (ve) => mt(ve, D),
                onContextMenu: (ve) => {
                  ve.preventDefault(), zt(D.uid);
                },
                "data-testid": `item-${D.uid}`,
                children: D.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
              },
              D.uid
            );
          })
        ]
      },
      P
    );
  }, Md = w !== null ? [w] : Array.from({ length: pt }, (P, A) => A);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-deshacer",
            title: x("Deshacer (Ctrl+Z)"),
            onClick: () => y(),
            disabled: !j,
            children: [
              /* @__PURE__ */ o.jsx(gm, { size: 15 }),
              " ",
              x("Deshacer")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-rehacer",
            title: x("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !N,
            children: [
              /* @__PURE__ */ o.jsx(vm, { size: 15 }),
              " ",
              x("Rehacer")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          title: x("Ver los contornos reales: en un color la silueta que se corta (con borde y cambios) y en otro el dibujo sin borde"),
          onClick: () => a((P) => ({ ...P, verBordes: !P.verBordes })),
          children: [
            /* @__PURE__ */ o.jsx(El, { size: 15 }),
            " ",
            r.verBordes ? x("Bordes") : x("Sin bordes")
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          title: x("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final"),
          onClick: () => a((P) => ({ ...P, guidesVisible: !P.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(gd, { size: 15 }),
            " ",
            r.guidesVisible ? x("Guías") : x("Sin guías")
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          title: x("Forzar la recolocación de todo (ignora los elementos fijados)"),
          onClick: () => s(qn ? "rapido" : "optimo"),
          children: x(qn ? " Recalcular rápido" : " Recalcular óptimo")
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        pt > 1 && w === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 4 })), children: "4" })
        ] }),
        w !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => S(null), title: x("Volver a la cuadrícula (Esc)"), children: x(" Ver todo") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-ojo",
            title: x("Fondo: blanco  transparente  verde fosforito (tecla T)"),
            onClick: () => a((P) => P.eyeFosforito ? { ...P, eyeFosforito: !1, eyeTransparent: !1 } : P.eyeTransparent ? { ...P, eyeTransparent: !1, eyeFosforito: !0 } : { ...P, eyeTransparent: !0, eyeFosforito: !1 }),
            children: (r.eyeFosforito || r.eyeTransparent, "")
          }
        ),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((P) => Math.min(12, P * 1.08)), title: x("Acercar (+)"), children: /* @__PURE__ */ o.jsx(ym, { size: 15 }) }),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((P) => Math.max(0.05, P / 1.08)), title: x("Alejar (−)"), children: /* @__PURE__ */ o.jsx(xm, { size: 15 }) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              c(1), h({ x: 0, y: 0 });
            },
            title: x("Volver al zoom original (tecla 0)"),
            children: "100%"
          }
        )
      ] })
    ] }),
    d ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: L.previewUrl(d.id) + `?t=${_}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: d && Ee.filter((P) => !P.principal).map((P, A) => {
          const [D, fe, Ue, ht] = P.bbox, ot = d.w_px || 1, ve = d.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${G.has(P.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: x("Trozo de {px} px — clic para {accion}", {
                px: P.area_px,
                accion: G.has(P.id) ? x("conservar") : x("quitar")
              }),
              style: {
                left: `${D / ot * 100}%`,
                top: `${fe / ve * 100}%`,
                width: `${(Ue - D) / ot * 100}%`,
                height: `${(ht - fe) / ve * 100}%`
              },
              onClick: () => kd(P.id)
            },
            P.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "primary",
              "data-testid": "btn-unir-contorno",
              title: x("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: at }),
              onClick: async () => {
                d && (await L.patchAsset(d.id, {
                  offset_mm: at,
                  offset_modo: "unir_curvo"
                }), await (v == null ? void 0 : v()));
              },
              children: x("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: zl,
              children: x(
                "Quitar marcados ({n})",
                { n: G.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: x("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: T,
        className: `canvas ${g ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: $,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${m})` },
            children: [
              pt === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: x("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${w !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Md.map(bd)
                }
              )
            ]
          }
        )
      }
    ),
    d ? /* @__PURE__ */ o.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: zl,
          children: x("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => v == null ? void 0 : v(),
          children: x("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Be,
          value: r.saveName,
          onChange: (P) => a((A) => ({ ...A, saveName: P.target.value }))
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: x("Abrir la carpeta de guardado en el explorador"),
            "aria-label": x("Abrir carpeta de guardado"),
            onClick: () => L.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: Sd, children: x("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: Cd, children: x("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: jd,
            disabled: pt === 0,
            children: x("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      yd,
      {
        open: oe,
        initial: n.carpeta_export,
        onClose: () => Re(!1),
        onPick: _d
      }
    ),
    /* @__PURE__ */ o.jsx(
      Mm,
      {
        open: !!it,
        files: (it == null ? void 0 : it.files) ?? [],
        folder: (it == null ? void 0 : it.folder) ?? "",
        error: it == null ? void 0 : it.error,
        onOpenFolder: (P) => void L.fsOpen(P).catch(() => {
        }),
        onClose: () => Jt(null)
      }
    )
  ] });
}
function Lm({ i: e, valor: t, refBase: n, onPct: r, onQuitar: a, t: i }) {
  const [l, u] = k.useState(null), s = n ? t / 100 * n : 0;
  return /* @__PURE__ */ o.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: 99,
        step: 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(t),
        onChange: (d) => r(Math.min(99, Math.max(1, Number(d.target.value))))
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "hint", children: "%" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        min: 1,
        step: 1,
        "data-testid": `mini-tamano-mm-${e}`,
        value: l ?? (n ? s.toFixed(1) : ""),
        disabled: !n,
        title: i("Tamaño final del mini para la imagen de referencia"),
        onChange: (d) => {
          if (u(d.target.value), !n) return;
          const v = Number(d.target.value);
          isFinite(v) && v > 0 && r(Math.min(99, Math.max(
            1,
            Math.round(v / n * 1e3) / 10
          )));
        },
        onBlur: () => u(null)
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "hint", children: "mm" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "icon-btn danger",
        title: i("Quitar tamaño"),
        "data-testid": `mini-tamano-quitar-${e}`,
        onClick: a
      }
    )
  ] });
}
function gt({ id: e, title: t, open: n, toggle: r, children: a, icon: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      i && /* @__PURE__ */ o.jsx("span", { className: "sect-icono", children: i }),
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Gs(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const Rm = {
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Am = {
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Im({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = rt(), [a, i] = k.useState(!0), [l, u] = k.useState({
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [s, d] = k.useState(!1), v = k.useMemo(() => {
    const h = (n ?? []).filter((S) => S.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((S, _) => Math.min(_.w_mm, _.h_mm) - Math.min(S.w_mm, S.h_mm))[0] ?? null;
  }, [n]), y = v ? Math.min(v.w_mm, v.h_mm) : 0, p = e.modo === "experto", j = ({ children: h }) => p ? /* @__PURE__ */ o.jsx(o.Fragment, { children: h }) : null, N = (h) => u((w) => ({ ...w, [h]: !w[h] })), x = (h) => t(h), R = k.useRef(null), m = ({ titulo: h, children: w }) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "ctl-grupo", children: r(h) }),
    w
  ] }), c = (h, w, S, _, z = 1, g = "", C, I) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...I ? { "data-tip": r(I) } : {}, children: r(h) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "number",
          min: S,
          max: _,
          step: z,
          "data-testid": `set-${w}`,
          value: String(e[w]),
          onChange: (re) => {
            const oe = Number(re.target.value);
            Number.isNaN(oe) || x({ [w]: oe });
          }
        }
      ),
      g && /* @__PURE__ */ o.jsx("span", { className: "hint", children: g }),
      C
    ] })
  ] }), f = (h, w, S, _, z) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(h) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${w}`,
        value: String(e[w]),
        onChange: (g) => x({ [w]: g.target.value }),
        children: S.map(([g, C]) => /* @__PURE__ */ o.jsx("option", { value: g, children: r(C) }, g))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: "panel-head",
        "data-testid": "panel-ajustes",
        onClick: () => i((h) => !h),
        children: [
          /* @__PURE__ */ o.jsx("span", { className: `chev ${a ? "open" : ""}`, children: "›" }),
          /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
          /* @__PURE__ */ o.jsx("span", { className: "fold-val", children: e.tema })
        ]
      }
    ),
    !a && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Pulsa para desplegar los ajustes") }),
    a && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !p && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo rápido: solo lo esencial. Cambia a Experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "general",
          title: r("General"),
          open: !0,
          toggle: () => {
          },
          icon: /* @__PURE__ */ o.jsx(dr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(m, { titulo: "Colocación", children: [
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
            /* @__PURE__ */ o.jsxs(m, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ o.jsx(j, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (h) => {
                      const w = h.target.value, S = im[w];
                      x(S ? { pagina: w, pagina_w: S[0], pagina_h: S[1] } : { pagina: w });
                    },
                    children: [
                      /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4 (210×297)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "A3", children: "A3 (297×420)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "A5", children: "A5 (148×210)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter (216×279)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "custom", children: r("Personalizado") })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx(j, { children: e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (h) => x({ pagina_w: Number(h.target.value) })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (h) => x({ pagina_h: Number(h.target.value) })
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
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-usar-minis",
                    checked: e.usar_minis,
                    onChange: (h) => x({ usar_minis: h.target.checked })
                  }
                ),
                r("Usar minis (rellenar huecos con copias pequeñas)")
              ] }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-auto-recalcular",
                      checked: e.auto_recalcular !== !1,
                      onChange: (h) => x({ auto_recalcular: h.target.checked })
                    }
                  ),
                  r("Recalcular automáticamente con cada cambio")
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "minis",
          title: r("Minis"),
          open: l.minis,
          toggle: N,
          icon: /* @__PURE__ */ o.jsx(Tr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ o.jsxs(m, { titulo: "Tamaños", children: [
              c(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (15 mm va bien para pegatinas)."
              ),
              c(
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
            /* @__PURE__ */ o.jsx(m, { titulo: "Comportamiento", children: /* @__PURE__ */ o.jsxs(j, { children: [
              f("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              f("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ]),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-mini-usar-lista",
                    checked: e.mini_usar_lista === !0,
                    onChange: (h) => x({ mini_usar_lista: h.target.checked })
                  }
                ),
                r("Usar lista de tamaños (en vez de los automáticos)")
              ] }) }),
              e.mini_usar_lista && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaños deseados (% y tamaño final)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((h, w) => /* @__PURE__ */ o.jsx(
                    Lm,
                    {
                      i: w,
                      valor: h,
                      refBase: y,
                      t: r,
                      onPct: (S) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[w] = S, x({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => x({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (S, _) => _ !== w
                        )
                      })
                    },
                    w
                  )),
                  /* @__PURE__ */ o.jsx(
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
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: v ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: v.name, mm: y.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: l.optimizacion,
          toggle: N,
          icon: /* @__PURE__ */ o.jsx(Fa, { size: 15 }),
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
            /* @__PURE__ */ o.jsxs(j, { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (h) => x({ opt_tiempo_auto: h.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Se usarán {s} s con «{m}» (el resto de métodos tienen el suyo).",
                {
                  s: Rm[e.opt_metodo] ?? 8,
                  m: r(Am[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: l.imagen,
          toggle: N,
          icon: /* @__PURE__ */ o.jsx(Ba, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(m, { titulo: "Impresión", children: [
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
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
              f("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ o.jsxs(j, { children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (h) => x({ simular_impresion: h.target.checked })
                    }
                  ),
                  r("Previsualizar la impresión (simular el espacio de color)")
                ] }),
                e.simular_impresion && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                    /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        type: "checkbox",
                        "data-testid": "set-sim_cmyk",
                        checked: e.sim_cmyk === !0,
                        onChange: (h) => x({ sim_cmyk: h.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  c("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  c("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  c("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              f("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(m, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (h) => x({ chequear_lineas: h.target.checked })
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
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              f("Lienzo del archivo final", "lienzo", [
                ["recortable", "Solo área recortable (recomendado)"],
                ["pagina", "Página completa con márgenes"]
              ]),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Carpeta predeterminada de exportación") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx("span", { className: "path-text", "data-testid": "set-carpeta", children: e.carpeta_export || r("(Documentos)") }),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      "data-testid": "btn-elegir-carpeta",
                      onClick: () => d(!0),
                      children: r("Elegir carpeta…")
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Se guarda para la próxima vez que abras CryCat.") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: l.offset,
          toggle: N,
          icon: /* @__PURE__ */ o.jsx(El, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (h) => x({ offset_activo: h.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
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
              e.offset_modo === "color" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Color del borde") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "color",
                      "data-testid": "set-offset-color",
                      value: e.offset_color || "#ffffff",
                      onChange: (h) => x({ offset_color: h.target.value })
                    }
                  ),
                  /* @__PURE__ */ o.jsx("span", { className: "hint", children: e.offset_color })
                ] })
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
            ] })
          ]
        }
      ),
      p && /* @__PURE__ */ o.jsxs(gt, { id: "corte", title: r("Estimación de corte"), open: l.corte, toggle: N, children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: Gs(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Us[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Us[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        c("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        c("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        c("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        c("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      p && /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: l.historial,
          toggle: N,
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.") }),
            /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "switch",
                  "data-testid": "set-historial",
                  checked: e.historial !== !1,
                  onChange: (h) => x({ historial: h.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              c("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (h) => x({ hist_tamano: h.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Tamaño y escala") })
              ] }),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-copias",
                    checked: e.hist_copias !== !1,
                    onChange: (h) => x({ hist_copias: h.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Copias") })
              ] }),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-borde",
                    checked: e.hist_borde !== !1,
                    onChange: (h) => x({ hist_borde: h.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Borde por elemento") })
              ] }),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-minis",
                    checked: e.hist_minis !== !1,
                    onChange: (h) => x({ hist_minis: h.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: l.visualizacion,
          toggle: N,
          icon: /* @__PURE__ */ o.jsx(gd, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: No.map((h) => /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === h.key ? "active" : ""}`,
                  "data-testid": `tema-${h.key}`,
                  onClick: () => t({ tema: h.key }),
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: h.colors.accent } }),
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: h.colors.accent2 } }),
                    h.label
                  ]
                },
                h.key
              )) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
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
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx("img", { src: L.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var h;
                  return (h = R.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ref: R,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (h) => {
                      var S;
                      const w = (S = h.target.files) == null ? void 0 : S[0];
                      w && L.setIcon(w).then(() => {
                        window.location.reload();
                      }), h.target.value = "";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
            ] })
          ]
        }
      ),
      p && /* @__PURE__ */ o.jsxs(gt, { id: "extras", title: r("Extras"), open: l.extras, toggle: N, children: [
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-activo",
              checked: e.pikmin_activo !== !1,
              onChange: (h) => x({ pikmin_activo: h.target.checked })
            }
          ),
          r("Mostrar Pikmin de vez en cuando")
        ] }) }),
        c("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido",
              checked: e.pikmin_sonido !== !1,
              onChange: (h) => x({ pikmin_sonido: h.target.checked })
            }
          ),
          r("Sonido de Pikmin")
        ] }) }),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido-morir",
              checked: e.pikmin_sonido_morir !== !1,
              onChange: (h) => x({ pikmin_sonido_morir: h.target.checked })
            }
          ),
          r("De vez en cuando se muere (alma + sonido)")
        ] }) }),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-comprobar_versiones",
              checked: e.comprobar_versiones !== !1,
              onChange: (h) => t({ comprobar_versiones: h.target.checked })
            }
          ),
          r("Comprobar si hay versiones nuevas al iniciar")
        ] }) }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: Gs(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      yd,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (h) => t({ carpeta_export: h })
      }
    )
  ] });
}
const xt = (e) => (globalThis.__crycatAssets || "") + e;
function Hs(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Dm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: i = !1,
  onVolumen: l,
  onMute: u,
  onIdioma: s,
  onEasterEgg: d,
  onAyuda: v,
  onReportar: y
}) {
  var G, W;
  const p = rt(), j = Nl(), [N, x] = k.useState([]), [R, m] = k.useState(0), [c, f] = k.useState(null), [h, w] = k.useState(!1), [S, _] = k.useState(""), z = k.useRef(!1), g = k.useRef([]);
  k.useEffect(() => {
    fetch("/api/funmsgs").then((T) => T.ok ? T.json() : { msgs: [] }).then((T) => x(T.msgs ?? [])).catch(() => {
    });
  }, []), k.useEffect(() => {
    let T = !0;
    return L.version().then((Q) => {
      T && (f(Q), !Q.comprobado && !z.current && (z.current = !0, L.checkVersion().then((ze) => T && f(ze)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      T = !1;
    };
  }, []);
  const C = ((G = c == null ? void 0 : c.actualizacion) == null ? void 0 : G.estado) === "descargando" || ((W = c == null ? void 0 : c.actualizacion) == null ? void 0 : W.estado) === "instalando";
  k.useEffect(() => {
    if (!C) return;
    const T = setInterval(() => {
      L.version().then(f).catch(() => {
      });
    }, 700);
    return () => clearInterval(T);
  }, [C]);
  const I = !!(e && !e.done);
  k.useEffect(() => {
    if (!I) return;
    const T = setInterval(() => m((Q) => Q + 1), 1200);
    return () => clearInterval(T);
  }, [I]);
  const re = N.length ? N : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], oe = k.useMemo(() => {
    if (S) return S;
    if (C) {
      const T = c == null ? void 0 : c.actualizacion;
      if ((T == null ? void 0 : T.estado) === "instalando") return p("Instalando y reiniciando…");
      const Q = (T == null ? void 0 : T.progreso) != null ? Math.round(T.progreso) : null;
      return Q != null ? p("Descargando… {p}%", { p: Q }) : (T == null ? void 0 : T.mensaje) || p("Descargando actualización…");
    }
    if (I)
      return re[R % re.length];
    if (e && e.status === "error") return e.message || "Error";
    if (n && n.pages > 0) {
      const T = Math.round(n.efficiency * 100);
      return p(
        "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis",
        {
          n: n.placed,
          p: n.pages,
          s: n.pages > 1 ? "s" : "",
          ef: T,
          m: n.minis
        }
      );
    }
    return p("Listo para empezar");
  }, [S, C, I, e, re, R, n, p, c]), Re = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), at = k.useMemo(() => {
    const T = e == null ? void 0 : e.eta_s;
    return !I || T === void 0 || T === null || T <= 0.5 ? "" : p(" · {x} restante", { x: Hs(T) });
  }, [e == null ? void 0 : e.eta_s, I, p]), je = k.useMemo(() => !r || !r.segundos ? "" : Hs(r.segundos), [r]), Ee = async () => {
    w(!0), _("");
    try {
      const T = await L.checkVersion();
      f(T), T.error ? _(p("Sin conexión")) : T.hay_nueva || _(p("Estás en la última versión"));
    } catch {
      _(p("Sin conexión"));
    } finally {
      w(!1);
    }
  }, b = async () => {
    _("");
    try {
      const T = await L.updateVersion();
      T.ok ? _(p("Instalando y reiniciando…")) : T.modo === "dev" && T.url ? (_(p("Modo desarrollo: se actualiza con git")), await L.openReleases().catch(() => {
      })) : _(T.mensaje || p("No se pudo actualizar")), L.version().then(f).catch(() => {
      });
    } catch {
      _(p("No se pudo actualizar"));
    }
  }, F = !!(c != null && c.hay_nueva && !I && !C) ? p("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ o.jsx(
        "img",
        {
          src: L.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: p("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const T = Date.now();
            g.current = [...g.current, T].filter((Q) => T - Q < 2500), g.current.length >= 5 && (g.current = [], _(p("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      /* @__PURE__ */ o.jsx("span", { className: "msg", children: oe }),
      !!n && n.pages > 1 && /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: p("No cabe todo en una página: se usarán varias"),
          children: p("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      I && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, Re)}%` } }) }),
        /* @__PURE__ */ o.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          Re,
          "%",
          at
        ] }),
        /* @__PURE__ */ o.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: xt("/piensa.gif"),
            alt: "",
            title: p("Pensando…"),
            onError: (T) => {
              T.currentTarget.style.display = "none";
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "right", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-info",
          "data-tip": p("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ o.jsx(_m, { size: 15 }),
            " ",
            p("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "app-info reportar",
          "data-testid": "btn-reportar",
          "data-tip": p("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => y == null ? void 0 : y(),
          children: [
            /* @__PURE__ */ o.jsx(vd, { size: 15 }),
            " ",
            p("Reportar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
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
            /* @__PURE__ */ o.jsx(Nm, { size: 15 }),
            " ",
            p("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: p("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ o.jsx(km, { size: 15 })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: p("Idioma"),
          onClick: () => s == null ? void 0 : s(j === "es" ? "en" : "es"),
          children: j.toUpperCase()
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: p("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !C && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: F || p("Hay una versión nueva"),
                onClick: b,
                children: /* @__PURE__ */ o.jsx(jm, { size: 14 })
              }
            ),
            "v",
            (c == null ? void 0 : c.actual) ?? "—",
            (c == null ? void 0 : c.hay_nueva) && (c == null ? void 0 : c.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
              "v",
              c.ultima
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini",
                "data-testid": "btn-comprobar",
                title: p("Comprobar versiones"),
                onClick: Ee,
                disabled: h,
                children: h ? "…" : /* @__PURE__ */ o.jsx(Cm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: b,
                children: /* @__PURE__ */ o.jsx(Sm, { size: 14 })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "vol-control", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-mute",
            className: "icon-sonido",
            title: p(i ? "Activar sonido" : "Silenciar"),
            "aria-label": p(i ? "Activar sonido" : "Silenciar"),
            onClick: () => u == null ? void 0 : u(!i),
            children: i ? /* @__PURE__ */ o.jsx(pm, {}) : /* @__PURE__ */ o.jsx(fd, {})
          }
        ),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 1,
            step: 0.05,
            "data-testid": "volumen",
            title: p("Volumen"),
            value: a,
            onChange: (T) => {
              l == null || l(Number(T.target.value)), i && Number(T.target.value) > 0 && (u == null || u(!1));
            }
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(
        "span",
        {
          className: `dot ${t ? "" : "off"}`,
          "data-testid": "backend-status",
          title: p(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: p("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            p("Corte"),
            " ",
            je || "—"
          ]
        }
      )
    ] })
  ] });
}
const $m = [
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
], Om = "/pikmin_bloom/", Ws = "/pikmin/alma.png", Fm = "/sonidos/pikmin.mp3", Bm = "/sonidos/pikmin_morir.mp3";
function Um(e) {
  const [t, n] = k.useState($m), [r, a] = k.useState([]);
  return k.useEffect(() => {
    fetch(xt("/pikmin/indice.json")).then((i) => i.ok ? i.json() : null).then((i) => {
      Array.isArray(i) && i.length && n(i.map((l) => "/pikmin/" + l));
    }).catch(() => {
    }), fetch(xt("/pikmin_bloom/indice.json")).then((i) => i.ok ? i.json() : []).then((i) => {
      if (!Array.isArray(i)) return;
      const l = [...i];
      for (let u = l.length - 1; u > 0; u--) {
        const s = Math.floor(Math.random() * (u + 1));
        [l[u], l[s]] = [l[s], l[u]];
      }
      a(l.slice(0, 60).map((u) => xt(Om + u)));
    }).catch(() => {
    });
  }, []), k.useMemo(
    () => e && e.length ? [...e, ...r].map(xt) : [...t, ...r].map(xt),
    [e, t, r]
  );
}
function qm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: l = !1,
  minDelay: u,
  maxDelay: s,
  fuentes: d
}) {
  const v = Um(d), [y, p] = k.useState([]), j = k.useRef(void 0), N = k.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), x = k.useRef(l);
  x.current = l;
  const R = Math.max(5e3, t * 6e4), m = (w) => {
    if (!(!n || i))
      try {
        const S = new Audio(xt(w ? Bm : Fm));
        S.volume = Math.min(1, Math.max(0, a)), S.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const w = r && Math.random() < 0.25, S = w ? xt(Ws) : v[Math.floor(Math.random() * v.length)] ?? xt(Ws);
    p((_) => [..._, {
      src: S,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: w,
      estado: "paseando"
    }]), m(w);
  }, f = () => {
    if (!e) return;
    const w = u ?? Math.round(R * 0.5), S = s ?? Math.round(R * 1.5), _ = w + Math.random() * Math.max(1, S - w);
    j.current = window.setTimeout(c, _);
  };
  k.useEffect(() => {
    if (!e) {
      window.clearTimeout(j.current), p([]);
      return;
    }
    return f(), () => window.clearTimeout(j.current);
  }, [e, t, n, r, a, i, v]), k.useEffect(() => {
    const w = () => {
      N.current = document.visibilityState === "hidden", !N.current && x.current && window.setTimeout(() => {
        p((S) => S.length ? (m(!1), S.map((_) => ({ ..._, estado: "festejando" }))) : S), window.setTimeout(() => {
          p([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []);
  const h = (w) => {
    if (x.current && N.current) {
      p((S) => S.map((_) => _.key === w ? { ..._, estado: "quieto" } : _));
      return;
    }
    p((S) => S.filter((_) => _.key !== w)), f();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: y.map((w) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${w.estado}${w.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": w.estado,
      "data-morir": w.morir ? "1" : "0",
      style: { left: `${w.left}%` },
      onAnimationEnd: () => h(w.key),
      children: /* @__PURE__ */ o.jsx(
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
const Qs = "crycat_bienvenida_v2";
function Vm() {
  const [e, t] = k.useState(!1);
  return k.useEffect(() => {
    try {
      localStorage.getItem(Qs) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Qs, "1");
    } catch {
    }
    t(!1);
  } };
}
function Gm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = rt(), [a, i] = k.useState("inicio");
  if (!e) return null;
  const l = [
    [
      /* @__PURE__ */ o.jsx(Ba, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ o.jsx(dr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ o.jsx(Tr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ o.jsx(Fa, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(zo, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ o.jsx(Ba, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ o.jsx(El, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ o.jsx(Tr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ o.jsx(Fa, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ o.jsx(hd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(dr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(zo, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(wm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(fd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ o.jsx(dr, { size: 18 }),
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
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: d[a] }),
    a === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: s.map((v, y) => /* @__PURE__ */ o.jsx("li", { children: v }, y)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? l : u).map(([v, y, p], j) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: v }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: y }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: p })
      ] })
    ] }, j)) }),
    a === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ o.jsx(Mr, { size: 15 }),
          " ",
          r("Abrir carpeta de guardado")
        ] }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "ayuda-detallada",
            onClick: () => i("detallada"),
            children: r("Guía detallada")
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-cricut", onClick: () => i("cricut"), children: r("Pasos en Cricut") }),
        /* @__PURE__ */ o.jsx("button", { className: "primary", "data-testid": "ayuda-cerrar", onClick: t, children: r("¡Entendido!") })
      ] }),
      a === "detallada" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-volver", onClick: () => i("inicio"), children: r("Volver") }),
        /* @__PURE__ */ o.jsx("button", { className: "primary", onClick: t, children: r("¡Entendido!") })
      ] }),
      a === "cricut" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-volver", onClick: () => i("inicio"), children: r("Volver") }),
        /* @__PURE__ */ o.jsx("button", { className: "primary", onClick: t, children: r("¡Entendido!") })
      ] })
    ] })
  ] }) });
}
const Hm = "https://github.com/dhernandezgit/CryCat-Tool", Wm = [
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
function Qm({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const i = rt(), [l, u] = k.useState(""), [s, d] = k.useState(""), [v, y] = k.useState(""), [p, j] = k.useState(!0), [N, x] = k.useState(!0), [R, m] = k.useState(!0), [c, f] = k.useState(!1);
  k.useEffect(() => {
    e && (L.version().then((g) => u(g.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (C) => `- [${C.t}] ${C.msg} (${C.donde || "?"})`
  );
  if (!e) return null;
  const w = () => {
    var re, oe;
    const g = navigator.userAgent, C = !!globalThis.__crycatBase, I = [
      `- CryCat: v${l || "?"}`,
      `- Modo: ${C ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${g}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((re = window.screen) == null ? void 0 : re.width) ?? "?"}x${((oe = window.screen) == null ? void 0 : oe.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && I.push(`- Elementos: ${a.pages} página(s)`), r && I.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), I.join(`
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
  ].map((C) => `- ${C}: ${String(n[C])}`).join(`
`) : "", _ = () => {
    const g = [
      "### Qué pasó",
      s.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      v.trim() || "1. …",
      ""
    ];
    p && g.push("### Entorno", w(), ""), N && n && g.push("### Ajustes", S(), "");
    const C = h();
    return R && C.length && g.push("### Errores recogidos", C.join(`
`), ""), g.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), g.join(`
`);
  }, z = () => {
    const g = `[Bug] ${s.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, C = `${Hm}/issues/new?` + new URLSearchParams({
      title: g,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(C, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: Wm.map(([g, C]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${g}`,
        onClick: () => d((I) => (I ? I + `
` : "") + C),
        children: i(g)
      },
      g
    )) }),
    /* @__PURE__ */ o.jsxs("label", { className: "col", children: [
      i("¿Qué ha pasado?"),
      /* @__PURE__ */ o.jsx(
        "textarea",
        {
          "data-testid": "reportar-texto",
          rows: 4,
          value: s,
          placeholder: i("Cuéntalo con tus palabras: qué esperabas y qué pasó."),
          onChange: (g) => d(g.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "col", children: [
      i("¿Cómo lo repetimos? (opcional)"),
      /* @__PURE__ */ o.jsx(
        "textarea",
        {
          "data-testid": "reportar-pasos",
          rows: 3,
          value: v,
          placeholder: i("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (g) => y(g.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: p,
          onChange: (g) => j(g.target.checked)
        }
      ),
      i("Incluir versión y sistema (ayuda mucho)")
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-ajustes",
          checked: N,
          onChange: (g) => x(g.target.checked)
        }
      ),
      i("Incluir mis ajustes actuales")
    ] }),
    h().length > 0 && /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: R,
          onChange: (g) => m(g.target.checked)
        }
      ),
      i(
        "Incluir los {n} errores recogidos de la consola",
        { n: h().length }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx("button", { onClick: t, children: i("Cancelar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "reportar-copiar",
          title: i("Copia el informe entero al portapapeles (por si no usas GitHub)"),
          onClick: async () => {
            try {
              await navigator.clipboard.writeText(
                `${s}

${v}

${_()}`
              ), f(!0);
            } catch {
            }
          },
          children: i(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: z, children: i("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function Ym() {
  const [e, t] = k.useState([]), [n, r] = k.useState(null), [a, i] = k.useState(null), [l, u] = k.useState(null), [s, d] = k.useState(null), [v, y] = k.useState(null), [p, j] = k.useState(!0), [N, x] = k.useState(!1), [R, m] = k.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !1,
    viewMode: 1,
    saveName: ""
  }), [c, f] = k.useState(33.3), [h, w] = k.useState(33.3), S = Vm(), _ = k.useRef(null), z = k.useRef(null);
  k.useEffect(() => {
    (async () => {
      try {
        const $ = await L.getSettings();
        d($.settings), qs($.settings.tema), m((B) => ({
          ...B,
          guidesVisible: $.settings.ver_guias,
          eyeTransparent: $.settings.fondo_transparente
        })), t((await L.listAssets()).map(br)), i(await L.result());
      } catch {
        j(!1);
      }
    })();
  }, []), k.useEffect(() => {
    const $ = setInterval(async () => {
      try {
        await L.health(), j(!0);
      } catch {
        j(!1);
      }
    }, 5e3);
    return () => clearInterval($);
  }, []);
  const g = k.useCallback(async () => {
    try {
      t((await L.listAssets()).map(br)), i(await L.result());
      try {
        u(await L.estimate());
      } catch {
      }
    } catch {
      j(!1);
    }
  }, []), C = k.useCallback(($) => {
    z.current && window.clearInterval(z.current), z.current = window.setInterval(async () => {
      try {
        const B = await L.job($);
        y(B), B.done && (window.clearInterval(z.current), z.current = null, await g(), B.status === "done" && window.setTimeout(() => y(null), 2500));
      } catch {
        window.clearInterval(z.current), z.current = null;
      }
    }, 300);
  }, []), I = k.useCallback(async () => {
    try {
      const $ = await L.optimize();
      y($), C($.id);
    } catch {
      j(!1);
    }
  }, [C]), re = k.useCallback(
    async ($) => {
      try {
        const B = await L.optimize($, !0);
        y(B), C(B.id);
      } catch {
        j(!1);
      }
    },
    [C]
  ), oe = k.useCallback(() => {
    s && s.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(I, 400));
  }, [I, s]), Re = k.useRef(null);
  k.useEffect(() => {
    Re.current = oe;
  }, [oe]);
  const at = k.useRef(!1);
  k.useEffect(() => {
    if (!(!s || at.current)) {
      if (e.length > 0) {
        at.current = !0;
        return;
      }
      at.current = !0, L.crearDemo().then(async ($) => {
        var B;
        $.ok && (await g(), (B = Re.current) == null || B.call(Re));
      }).catch(() => {
      });
    }
  }, [s, e.length, g]);
  const je = k.useCallback(
    async ($) => {
      d((B) => B && { ...B, ...$ }), $.tema && qs($.tema);
      try {
        const B = await L.putSettings($);
        if (B.job)
          y(B.job), C(B.job.id);
        else
          try {
            u(await L.estimate());
          } catch {
          }
      } catch {
        j(!1);
      }
    },
    [C]
  ), Ee = k.useRef([]), b = k.useRef([]), [O, F] = k.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), G = (s == null ? void 0 : s.historial) !== !1, W = (s == null ? void 0 : s.historial_max) ?? 40, T = () => F({
    puedeDeshacer: Ee.current.length > 0,
    puedeRehacer: b.current.length > 0
  }), Q = k.useCallback(() => {
    const $ = [];
    return (s == null ? void 0 : s.hist_tamano) !== !1 && $.push("scale_pct"), (s == null ? void 0 : s.hist_copias) !== !1 && $.push("copies"), (s == null ? void 0 : s.hist_borde) !== !1 && $.push("offset_mm", "offset_modo", "offset_color"), (s == null ? void 0 : s.hist_minis) !== !1 && $.push("mini_enabled", "mini_quota"), $;
  }, [
    s == null ? void 0 : s.hist_tamano,
    s == null ? void 0 : s.hist_copias,
    s == null ? void 0 : s.hist_borde,
    s == null ? void 0 : s.hist_minis
  ]), ze = k.useCallback(($) => {
    const B = {};
    for (const ft of Q()) B[ft] = $[ft];
    return B;
  }, [Q]), Be = k.useCallback(() => {
    G && (Ee.current = [...Ee.current, e].slice(-W), b.current = [], T());
  }, [e, G, W]), Ye = k.useCallback(async () => {
    const $ = Ee.current.pop();
    if ($) {
      b.current = [...b.current, e], t($), T();
      for (const B of $)
        await L.patchAsset(B.id, ze(B)).catch(() => {
        });
      await g();
    }
  }, [e, g, ze]), pt = k.useCallback(async () => {
    const $ = b.current.pop();
    if ($) {
      Ee.current = [...Ee.current, e], t($), T();
      for (const B of $)
        await L.patchAsset(B.id, ze(B)).catch(() => {
        });
      await g();
    }
  }, [e, g, ze]);
  k.useEffect(() => {
    const $ = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const mt = B.target;
      if (mt && (mt.tagName === "INPUT" || mt.tagName === "TEXTAREA" || mt.tagName === "SELECT" || mt.isContentEditable)) return;
      const zt = B.key.toLowerCase();
      zt === "z" && !B.shiftKey ? (B.preventDefault(), Ye()) : (zt === "y" || zt === "z" && B.shiftKey) && (B.preventDefault(), pt());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [Ye, pt]);
  const qn = k.useCallback(
    ($) => {
      const B = (mt) => {
        const $r = window.innerWidth, zt = mt.clientX / $r * 100;
        $ === "left" ? f(Math.min(45, Math.max(12, zt))) : w(Math.min(60, Math.max(20, zt - c)));
      }, ft = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", ft);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", ft);
    },
    [c]
  );
  return k.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ o.jsx(cm, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        bm,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await g(), oe();
          },
          saveSettings: je,
          onEditarContorno: ($) => r($),
          onAntesDeCambiar: Be
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => qn("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ o.jsx(
        Tm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: R,
          setUi: m,
          saveSettings: je,
          optimize: I,
          onRefresh: g,
          onJob: ($) => {
            y($), C($.id);
          },
          onRecalc: re,
          editando: n,
          onFinEdicion: async () => {
            r(null), await g();
          },
          onDeshacer: Ye,
          onRehacer: pt,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => qn("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        Im,
        {
          settings: s,
          assets: e,
          saveSettings: je
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Dm,
      {
        job: v,
        backendOk: p,
        result: a,
        estimate: l,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        onVolumen: ($) => je({ volumen: $ }),
        onMute: ($) => je({ mute: $ }),
        onIdioma: ($) => je({ idioma: $ }),
        onEasterEgg: () => je({
          pikmin_fiesta: !s.pikmin_fiesta
        }),
        onAyuda: S.abrir,
        onReportar: () => x(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      qm,
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
    /* @__PURE__ */ o.jsx(
      Gm,
      {
        open: S.visible,
        onClose: S.cerrar,
        onAbrirCarpeta: () => void L.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qm,
      {
        open: N,
        onClose: () => x(!1),
        settings: s,
        job: v,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: dm("es", "Cargando CryCat…") });
}
const xd = document.getElementById("root"), Mi = [
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
], Po = 7, ma = [];
globalThis.__crycatErrores = ma;
const wd = (e, t) => {
  ma.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), ma.length > 12 && ma.shift();
};
window.addEventListener("error", (e) => wd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => wd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let bo;
function Ys(e, t = !1) {
  window.clearTimeout(bo);
  const n = cd().colors;
  if (xd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Po}</div>
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
  let r = Math.floor(Math.random() * Mi.length);
  const a = () => {
    const l = document.getElementById("carga-fun");
    l && (l.textContent = Mi[r++ % Mi.length]);
  }, i = () => {
    a(), bo = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const Ti = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Po}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Po * 100)}%`);
  }
};
let pr = null;
const Mo = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Km = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Jm(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((i, l) => r.push([l, i]));
  for (const [i, l] of r)
    l instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"; filename="${l.name || "file"}"\r
Content-Type: ${l.type || "application/octet-stream"}\r
\r
`), n.push(l), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"\r
\r
${l}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    Mo(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Xm(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, l = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((y, p) => {
    l[p] = y;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [y, p] = await Jm(s);
    u = y, l["content-type"] = p;
  } else s instanceof Blob ? u = Mo(await s.arrayBuffer()) : typeof s == "string" && (u = Mo(new TextEncoder().encode(s).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(i) + ", " + JSON.stringify(JSON.stringify(l)) + ", " + JSON.stringify(u) + ")", v = JSON.parse(await pr.runPythonAsync(d));
  return new Response(Km(v.body), {
    status: v.status || 200,
    headers: v.headers || { "content-type": "application/json" }
  });
}
function Zm() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && pr)
      try {
        return await Xm(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function eh() {
  try {
    if (Ys("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    pr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Ti), Ti("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await pr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (n) => {
      const r = n.data;
      if (!r || r.tipo !== "api") return;
      const a = n.ports && n.ports[0];
      if (a)
        try {
          const i = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", l = await pr.runPythonAsync(i);
          a.postMessage(JSON.parse(l));
        } catch (i) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (i && i.message ? i.message : i))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Zm();
    try {
      const n = cd().key;
      n && n !== "wiwi" && await fetch(Oa() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    Ti("Abriendo la aplicación…", 7), window.clearTimeout(bo), sd(xd).render(/* @__PURE__ */ o.jsx(Ym, {}));
  } catch (e) {
    Ys("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
eh();
