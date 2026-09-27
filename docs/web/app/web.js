var Ys = { exports: {} }, Fa = {}, Ks = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr = Symbol.for("react.element"), Md = Symbol.for("react.portal"), Td = Symbol.for("react.fragment"), Ld = Symbol.for("react.strict_mode"), Rd = Symbol.for("react.profiler"), Ad = Symbol.for("react.provider"), Id = Symbol.for("react.context"), Dd = Symbol.for("react.forward_ref"), $d = Symbol.for("react.suspense"), Od = Symbol.for("react.memo"), Fd = Symbol.for("react.lazy"), Tl = Symbol.iterator;
function Bd(e) {
  return e === null || typeof e != "object" ? null : (e = Tl && e[Tl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Js = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xs = Object.assign, Zs = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Js;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function eu() {
}
eu.prototype = Fn.prototype;
function To(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Js;
}
var Lo = To.prototype = new eu();
Lo.constructor = To;
Xs(Lo, Fn.prototype);
Lo.isPureReactComponent = !0;
var Ll = Array.isArray, tu = Object.prototype.hasOwnProperty, Ro = { current: null }, nu = { key: !0, ref: !0, __self: !0, __source: !0 };
function ru(e, t, n) {
  var r, a = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) tu.call(t, r) && !nu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), p = 0; p < u; p++) s[p] = arguments[p + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Mr, type: e, key: i, ref: l, props: a, _owner: Ro.current };
}
function Ud(e, t) {
  return { $$typeof: Mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ao(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function Vd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Rl = /\/+/g;
function ri(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vd("" + e.key) : t.toString(36);
}
function ea(e, t, n, r, a) {
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
        case Mr:
        case Md:
          l = !0;
      }
  }
  if (l) return l = e, a = a(l), e = r === "" ? "." + ri(l, 0) : r, Ll(a) ? (n = "", e != null && (n = e.replace(Rl, "$&/") + "/"), ea(a, t, n, "", function(p) {
    return p;
  })) : a != null && (Ao(a) && (a = Ud(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Rl, "$&/") + "/") + e)), t.push(a)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Ll(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + ri(i, u);
    l += ea(i, t, n, s, a);
  }
  else if (s = Bd(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + ri(i, u++), l += ea(i, t, n, s, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return ea(e, r, "", "", function(i) {
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
var _e = { current: null }, ta = { transition: null }, qd = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: ta, ReactCurrentOwner: Ro };
function au() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: Dr, forEach: function(e, t, n) {
  Dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ao(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Fn;
U.Fragment = Td;
U.Profiler = Rd;
U.PureComponent = To;
U.StrictMode = Ld;
U.Suspense = $d;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qd;
U.act = au;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xs({}, e.props), a = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ro.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) tu.call(t, s) && !nu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var p = 0; p < s; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: Mr, type: e.type, key: a, ref: i, props: r, _owner: l };
};
U.createContext = function(e) {
  return e = { $$typeof: Id, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ad, _context: e }, e.Consumer = e;
};
U.createElement = ru;
U.createFactory = function(e) {
  var t = ru.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Dd, render: e };
};
U.isValidElement = Ao;
U.lazy = function(e) {
  return { $$typeof: Fd, _payload: { _status: -1, _result: e }, _init: Gd };
};
U.memo = function(e, t) {
  return { $$typeof: Od, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = ta.transition;
  ta.transition = {};
  try {
    e();
  } finally {
    ta.transition = t;
  }
};
U.unstable_act = au;
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
Ks.exports = U;
var k = Ks.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd = k, Wd = Symbol.for("react.element"), Qd = Symbol.for("react.fragment"), Yd = Object.prototype.hasOwnProperty, Kd = Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function iu(e, t, n) {
  var r, a = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Yd.call(t, r) && !Jd.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Wd, type: e, key: i, ref: l, props: a, _owner: Kd.current };
}
Fa.Fragment = Qd;
Fa.jsx = iu;
Fa.jsxs = iu;
Ys.exports = Fa;
var o = Ys.exports, ou = { exports: {} }, Oe = {}, lu = { exports: {} }, su = {};
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
      var q = F - 1 >>> 1, W = b[q];
      if (0 < a(W, O)) b[q] = O, b[F] = W, F = q;
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
      e: for (var q = 0, W = b.length, T = W >>> 1; q < T; ) {
        var Q = 2 * (q + 1) - 1, Pe = b[Q], Be = Q + 1, Ye = b[Be];
        if (0 > a(Pe, F)) Be < W && 0 > a(Ye, Pe) ? (b[q] = Ye, b[Be] = F, q = Be) : (b[q] = Pe, b[Q] = F, q = Q);
        else if (Be < W && 0 > a(Ye, F)) b[q] = Ye, b[Be] = F, q = Be;
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
  var s = [], p = [], h = 1, g = null, m = 3, j = !1, C = !1, y = !1, R = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(b) {
    for (var O = n(p); O !== null; ) {
      if (O.callback === null) r(p);
      else if (O.startTime <= b) r(p), O.sortIndex = O.expirationTime, t(s, O);
      else break;
      O = n(p);
    }
  }
  function w(b) {
    if (y = !1, d(b), !C) if (n(s) !== null) C = !0, je(x);
    else {
      var O = n(p);
      O !== null && Ee(w, O.startTime - b);
    }
  }
  function x(b, O) {
    C = !1, y && (y = !1, f(E), E = -1), j = !0;
    var F = m;
    try {
      for (d(O), g = n(s); g !== null && (!(g.expirationTime > O) || b && !I()); ) {
        var q = g.callback;
        if (typeof q == "function") {
          g.callback = null, m = g.priorityLevel;
          var W = q(g.expirationTime <= O);
          O = e.unstable_now(), typeof W == "function" ? g.callback = W : g === n(s) && r(s), d(O);
        } else r(s);
        g = n(s);
      }
      if (g !== null) var T = !0;
      else {
        var Q = n(p);
        Q !== null && Ee(w, Q.startTime - O), T = !1;
      }
      return T;
    } finally {
      g = null, m = F, j = !1;
    }
  }
  var _ = !1, N = null, E = -1, v = 5, S = -1;
  function I() {
    return !(e.unstable_now() - S < v);
  }
  function oe() {
    if (N !== null) {
      var b = e.unstable_now();
      S = b;
      var O = !0;
      try {
        O = N(!0, b);
      } finally {
        O ? ce() : (_ = !1, N = null);
      }
    } else _ = !1;
  }
  var ce;
  if (typeof c == "function") ce = function() {
    c(oe);
  };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(), at = Re.port2;
    Re.port1.onmessage = oe, ce = function() {
      at.postMessage(null);
    };
  } else ce = function() {
    R(oe, 0);
  };
  function je(b) {
    N = b, _ || (_ = !0, ce());
  }
  function Ee(b, O) {
    E = R(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    C || j || (C = !0, je(x));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : v = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(b) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var F = m;
    m = O;
    try {
      return b();
    } finally {
      m = F;
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
    var F = m;
    m = b;
    try {
      return O();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(b, O, F) {
    var q = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? q + F : q) : F = q, b) {
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
    return W = F + W, b = { id: h++, callback: O, priorityLevel: b, startTime: F, expirationTime: W, sortIndex: -1 }, F > q ? (b.sortIndex = F, t(p, b), n(s) === null && b === n(p) && (y ? (f(E), E = -1) : y = !0, Ee(w, F - q))) : (b.sortIndex = W, t(s, b), C || j || (C = !0, je(x))), b;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(b) {
    var O = m;
    return function() {
      var F = m;
      m = O;
      try {
        return b.apply(this, arguments);
      } finally {
        m = F;
      }
    };
  };
})(su);
lu.exports = su;
var Xd = lu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd = k, $e = Xd;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var uu = /* @__PURE__ */ new Set(), pr = {};
function dn(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (pr[e] = t, e = 0; e < t.length; e++) uu.add(t[e]);
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = Object.prototype.hasOwnProperty, ep = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Al = {}, Il = {};
function tp(e) {
  return Mi.call(Il, e) ? !0 : Mi.call(Al, e) ? !1 : ep.test(e) ? Il[e] = !0 : (Al[e] = !0, !1);
}
function np(e, t, n, r) {
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
function rp(e, t, n, r) {
  if (t === null || typeof t > "u" || np(e, t, n, r)) return !0;
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
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rp(t, n, a, r) && (n = null), r || a === null ? tp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $r = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Oo = Symbol.for("react.strict_mode"), Ti = Symbol.for("react.profiler"), cu = Symbol.for("react.provider"), du = Symbol.for("react.context"), Fo = Symbol.for("react.forward_ref"), Li = Symbol.for("react.suspense"), Ri = Symbol.for("react.suspense_list"), Bo = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), pu = Symbol.for("react.offscreen"), Dl = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object" ? null : (e = Dl && e[Dl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, ai;
function Xn(e) {
  if (ai === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ai = t && t[1] || "";
  }
  return `
` + ai + e;
}
var ii = !1;
function oi(e, t) {
  if (!e || ii) return "";
  ii = !0;
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
    ii = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function ap(e) {
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
      return e = oi(e.type, !1), e;
    case 11:
      return e = oi(e.type.render, !1), e;
    case 1:
      return e = oi(e.type, !0), e;
    default:
      return "";
  }
}
function Ai(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Ti:
      return "Profiler";
    case Oo:
      return "StrictMode";
    case Li:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case du:
      return (e.displayName || "Context") + ".Consumer";
    case cu:
      return (e._context.displayName || "Context") + ".Provider";
    case Fo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Bo:
      return t = e.displayName || null, t !== null ? t : Ai(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return Ai(e(t));
      } catch {
      }
  }
  return null;
}
function ip(e) {
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
      return Ai(t);
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
function fu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function op(e) {
  var t = fu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Or(e) {
  e._valueTracker || (e._valueTracker = op(e));
}
function mu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = fu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ma(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ii(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $l(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hu(e, t) {
  t = t.checked, t != null && $o(e, "checked", t, !1);
}
function Di(e, t) {
  hu(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? $i(e, t.type, n) : t.hasOwnProperty("defaultValue") && $i(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ol(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function $i(e, t, n) {
  (t !== "number" || ma(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function Oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Fl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(P(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function gu(e, t) {
  var n = Ht(t.value), r = Ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Bl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? vu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Fr, yu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Fr = Fr || document.createElement("div"), Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function fr(e, t) {
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
}, lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
  lp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
  });
});
function xu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
}
function wu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = xu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var sp = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Bi(e, t) {
  if (t) {
    if (sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Ui(e, t) {
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
var Vi = null;
function Uo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Gi = null, Pn = null, zn = null;
function Ul(e) {
  if (e = Rr(e)) {
    if (typeof Gi != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = qa(t), Gi(e.stateNode, e.type, t));
  }
}
function ku(e) {
  Pn ? zn ? zn.push(e) : zn = [e] : Pn = e;
}
function ju() {
  if (Pn) {
    var e = Pn, t = zn;
    if (zn = Pn = null, Ul(e), t) for (e = 0; e < t.length; e++) Ul(t[e]);
  }
}
function Su(e, t) {
  return e(t);
}
function Cu() {
}
var li = !1;
function _u(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return Su(e, t, n);
  } finally {
    li = !1, (Pn !== null || zn !== null) && (Cu(), ju());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qa(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var qi = !1;
if (St) try {
  var qn = {};
  Object.defineProperty(qn, "passive", { get: function() {
    qi = !0;
  } }), window.addEventListener("test", qn, qn), window.removeEventListener("test", qn, qn);
} catch {
  qi = !1;
}
function up(e, t, n, r, a, i, l, u, s) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (h) {
    this.onError(h);
  }
}
var rr = !1, ha = null, ga = !1, Hi = null, cp = { onError: function(e) {
  rr = !0, ha = e;
} };
function dp(e, t, n, r, a, i, l, u, s) {
  rr = !1, ha = null, up.apply(cp, arguments);
}
function pp(e, t, n, r, a, i, l, u, s) {
  if (dp.apply(this, arguments), rr) {
    if (rr) {
      var p = ha;
      rr = !1, ha = null;
    } else throw Error(P(198));
    ga || (ga = !0, Hi = p);
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
function Nu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vl(e) {
  if (pn(e) !== e) throw Error(P(188));
}
function fp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = pn(e), t === null) throw Error(P(188));
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
      throw Error(P(188));
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
        if (!l) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Eu(e) {
  return e = fp(e), e !== null ? Pu(e) : null;
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
var zu = $e.unstable_scheduleCallback, Gl = $e.unstable_cancelCallback, mp = $e.unstable_shouldYield, hp = $e.unstable_requestPaint, ie = $e.unstable_now, gp = $e.unstable_getCurrentPriorityLevel, Vo = $e.unstable_ImmediatePriority, bu = $e.unstable_UserBlockingPriority, va = $e.unstable_NormalPriority, vp = $e.unstable_LowPriority, Mu = $e.unstable_IdlePriority, Ba = null, ct = null;
function yp(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function") try {
    ct.onCommitFiberRoot(Ba, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : kp, xp = Math.log, wp = Math.LN2;
function kp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (xp(e) / wp | 0) | 0;
}
var Br = 64, Ur = 4194304;
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
function ya(e, t) {
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
function jp(e, t) {
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
function Sp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - et(i), u = 1 << l, s = a[l];
    s === -1 ? (!(u & n) || u & r) && (a[l] = jp(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Wi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Tu() {
  var e = Br;
  return Br <<= 1, !(Br & 4194240) && (Br = 64), e;
}
function si(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function Cp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - et(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Go(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var H = 0;
function Lu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ru, qo, Au, Iu, Du, Qi = !1, Vr = [], $t = null, Ot = null, Ft = null, hr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Rt = [], _p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ql(e, t) {
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
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Rr(t), t !== null && qo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Np(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return $t = Hn($t, e, t, n, r, a), !0;
    case "dragenter":
      return Ot = Hn(Ot, e, t, n, r, a), !0;
    case "mouseover":
      return Ft = Hn(Ft, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return hr.set(i, Hn(hr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, gr.set(i, Hn(gr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function $u(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Nu(n), t !== null) {
          e.blockedOn = t, Du(e.priority, function() {
            Au(n);
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
function na(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Vi = r, n.target.dispatchEvent(r), Vi = null;
    } else return t = Rr(n), t !== null && qo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Hl(e, t, n) {
  na(e) && n.delete(t);
}
function Ep() {
  Qi = !1, $t !== null && na($t) && ($t = null), Ot !== null && na(Ot) && (Ot = null), Ft !== null && na(Ft) && (Ft = null), hr.forEach(Hl), gr.forEach(Hl);
}
function Wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Qi || (Qi = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, Ep)));
}
function vr(e) {
  function t(a) {
    return Wn(a, e);
  }
  if (0 < Vr.length) {
    Wn(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && Wn($t, e), Ot !== null && Wn(Ot, e), Ft !== null && Wn(Ft, e), hr.forEach(t), gr.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); ) $u(n), n.blockedOn === null && Rt.shift();
}
var bn = Et.ReactCurrentBatchConfig, xa = !0;
function Pp(e, t, n, r) {
  var a = H, i = bn.transition;
  bn.transition = null;
  try {
    H = 1, Ho(e, t, n, r);
  } finally {
    H = a, bn.transition = i;
  }
}
function zp(e, t, n, r) {
  var a = H, i = bn.transition;
  bn.transition = null;
  try {
    H = 4, Ho(e, t, n, r);
  } finally {
    H = a, bn.transition = i;
  }
}
function Ho(e, t, n, r) {
  if (xa) {
    var a = Yi(e, t, n, r);
    if (a === null) yi(e, t, r, wa, n), ql(e, r);
    else if (Np(a, e, t, n, r)) r.stopPropagation();
    else if (ql(e, r), t & 4 && -1 < _p.indexOf(e)) {
      for (; a !== null; ) {
        var i = Rr(a);
        if (i !== null && Ru(i), i = Yi(e, t, n, r), i === null && yi(e, t, r, wa, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else yi(e, t, r, null, n);
  }
}
var wa = null;
function Yi(e, t, n, r) {
  if (wa = null, e = Uo(r), e = en(e), e !== null) if (t = pn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Nu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wa = e, null;
}
function Ou(e) {
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
      switch (gp()) {
        case Vo:
          return 1;
        case bu:
          return 4;
        case va:
        case vp:
          return 16;
        case Mu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null, Wo = null, ra = null;
function Fu() {
  if (ra) return ra;
  var e, t = Wo, n = t.length, r, a = "value" in It ? It.value : It.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[i - r]; r++) ;
  return ra = a.slice(e, 1 < r ? 1 - r : void 0);
}
function aa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Gr() {
  return !0;
}
function Wl() {
  return !1;
}
function Fe(e) {
  function t(n, r, a, i, l) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Gr : Wl, this.isPropagationStopped = Wl, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gr);
  }, persist: function() {
  }, isPersistent: Gr }), t;
}
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Qo = Fe(Bn), Lr = ne({}, Bn, { view: 0, detail: 0 }), bp = Fe(Lr), ui, ci, Qn, Ua = ne({}, Lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (ui = e.screenX - Qn.screenX, ci = e.screenY - Qn.screenY) : ci = ui = 0, Qn = e), ui);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ci;
} }), Ql = Fe(Ua), Mp = ne({}, Ua, { dataTransfer: 0 }), Tp = Fe(Mp), Lp = ne({}, Lr, { relatedTarget: 0 }), di = Fe(Lp), Rp = ne({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ap = Fe(Rp), Ip = ne({}, Bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Dp = Fe(Ip), $p = ne({}, Bn, { data: 0 }), Yl = Fe($p), Op = {
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
}, Fp = {
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
}, Bp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bp[e]) ? !!t[e] : !1;
}
function Yo() {
  return Up;
}
var Vp = ne({}, Lr, { key: function(e) {
  if (e.key) {
    var t = Op[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = aa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yo, charCode: function(e) {
  return e.type === "keypress" ? aa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? aa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Gp = Fe(Vp), qp = ne({}, Ua, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kl = Fe(qp), Hp = ne({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yo }), Wp = Fe(Hp), Qp = ne({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = Fe(Qp), Kp = ne({}, Ua, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Jp = Fe(Kp), Xp = [9, 13, 27, 32], Ko = St && "CompositionEvent" in window, ar = null;
St && "documentMode" in document && (ar = document.documentMode);
var Zp = St && "TextEvent" in window && !ar, Bu = St && (!Ko || ar && 8 < ar && 11 >= ar), Jl = " ", Xl = !1;
function Uu(e, t) {
  switch (e) {
    case "keyup":
      return Xp.indexOf(t.keyCode) !== -1;
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
function ef(e, t) {
  switch (e) {
    case "compositionend":
      return Vu(t);
    case "keypress":
      return t.which !== 32 ? null : (Xl = !0, Jl);
    case "textInput":
      return e = t.data, e === Jl && Xl ? null : e;
    default:
      return null;
  }
}
function tf(e, t) {
  if (vn) return e === "compositionend" || !Ko && Uu(e, t) ? (e = Fu(), ra = Wo = It = null, vn = !1, e) : null;
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
      return Bu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Zl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nf[e.type] : t === "textarea";
}
function Gu(e, t, n, r) {
  ku(r), t = ka(t, "onChange"), 0 < t.length && (n = new Qo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ir = null, yr = null;
function rf(e) {
  tc(e, 0);
}
function Va(e) {
  var t = wn(e);
  if (mu(t)) return e;
}
function af(e, t) {
  if (e === "change") return t;
}
var qu = !1;
if (St) {
  var pi;
  if (St) {
    var fi = "oninput" in document;
    if (!fi) {
      var es = document.createElement("div");
      es.setAttribute("oninput", "return;"), fi = typeof es.oninput == "function";
    }
    pi = fi;
  } else pi = !1;
  qu = pi && (!document.documentMode || 9 < document.documentMode);
}
function ts() {
  ir && (ir.detachEvent("onpropertychange", Hu), yr = ir = null);
}
function Hu(e) {
  if (e.propertyName === "value" && Va(yr)) {
    var t = [];
    Gu(t, yr, e, Uo(e)), _u(rf, t);
  }
}
function of(e, t, n) {
  e === "focusin" ? (ts(), ir = t, yr = n, ir.attachEvent("onpropertychange", Hu)) : e === "focusout" && ts();
}
function lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Va(yr);
}
function sf(e, t) {
  if (e === "click") return Va(t);
}
function uf(e, t) {
  if (e === "input" || e === "change") return Va(t);
}
function cf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : cf;
function xr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Mi.call(t, a) || !nt(e[a], t[a])) return !1;
  }
  return !0;
}
function ns(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rs(e, t) {
  var n = ns(e);
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
    n = ns(n);
  }
}
function Wu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Qu() {
  for (var e = window, t = ma(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ma(e.document);
  }
  return t;
}
function Jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function df(e) {
  var t = Qu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Wu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Jo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = rs(n, i);
        var l = rs(
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
var pf = St && "documentMode" in document && 11 >= document.documentMode, yn = null, Ki = null, or = null, Ji = !1;
function as(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ji || yn == null || yn !== ma(r) || (r = yn, "selectionStart" in r && Jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && xr(or, r) || (or = r, r = ka(Ki, "onSelect"), 0 < r.length && (t = new Qo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, mi = {}, Yu = {};
St && (Yu = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
function Ga(e) {
  if (mi[e]) return mi[e];
  if (!xn[e]) return e;
  var t = xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yu) return mi[e] = t[n];
  return e;
}
var Ku = Ga("animationend"), Ju = Ga("animationiteration"), Xu = Ga("animationstart"), Zu = Ga("transitionend"), ec = /* @__PURE__ */ new Map(), is = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  ec.set(e, t), dn(t, [e]);
}
for (var hi = 0; hi < is.length; hi++) {
  var gi = is[hi], ff = gi.toLowerCase(), mf = gi[0].toUpperCase() + gi.slice(1);
  Qt(ff, "on" + mf);
}
Qt(Ku, "onAnimationEnd");
Qt(Ju, "onAnimationIteration");
Qt(Xu, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Zu, "onTransitionEnd");
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
var tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function os(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, pp(r, t, void 0, e), e.currentTarget = null;
}
function tc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, p = u.currentTarget;
        if (u = u.listener, s !== i && a.isPropagationStopped()) break e;
        os(a, u, p), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, p = u.currentTarget, u = u.listener, s !== i && a.isPropagationStopped()) break e;
        os(a, u, p), i = s;
      }
    }
  }
  if (ga) throw e = Hi, ga = !1, Hi = null, e;
}
function K(e, t) {
  var n = t[no];
  n === void 0 && (n = t[no] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nc(t, e, 2, !1), n.add(r));
}
function vi(e, t, n) {
  var r = 0;
  t && (r |= 4), nc(n, e, r, t);
}
var Hr = "_reactListening" + Math.random().toString(36).slice(2);
function wr(e) {
  if (!e[Hr]) {
    e[Hr] = !0, uu.forEach(function(n) {
      n !== "selectionchange" && (hf.has(n) || vi(n, !1, e), vi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hr] || (t[Hr] = !0, vi("selectionchange", !1, t));
  }
}
function nc(e, t, n, r) {
  switch (Ou(t)) {
    case 1:
      var a = Pp;
      break;
    case 4:
      a = zp;
      break;
    default:
      a = Ho;
  }
  n = a.bind(null, t, n, e), a = void 0, !qi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function yi(e, t, n, r, a) {
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
  _u(function() {
    var p = i, h = Uo(n), g = [];
    e: {
      var m = ec.get(e);
      if (m !== void 0) {
        var j = Qo, C = e;
        switch (e) {
          case "keypress":
            if (aa(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Gp;
            break;
          case "focusin":
            C = "focus", j = di;
            break;
          case "focusout":
            C = "blur", j = di;
            break;
          case "beforeblur":
          case "afterblur":
            j = di;
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
            j = Ql;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Tp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Wp;
            break;
          case Ku:
          case Ju:
          case Xu:
            j = Ap;
            break;
          case Zu:
            j = Yp;
            break;
          case "scroll":
            j = bp;
            break;
          case "wheel":
            j = Jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Dp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Kl;
        }
        var y = (t & 4) !== 0, R = !y && e === "scroll", f = y ? m !== null ? m + "Capture" : null : m;
        y = [];
        for (var c = p, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = mr(c, f), w != null && y.push(kr(c, w, d)))), R) break;
          c = c.return;
        }
        0 < y.length && (m = new j(m, C, null, n, h), g.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", m && n !== Vi && (C = n.relatedTarget || n.fromElement) && (en(C) || C[Ct])) break e;
        if ((j || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, j ? (C = n.relatedTarget || n.toElement, j = p, C = C ? en(C) : null, C !== null && (R = pn(C), C !== R || C.tag !== 5 && C.tag !== 6) && (C = null)) : (j = null, C = p), j !== C)) {
          if (y = Ql, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Kl, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), R = j == null ? m : wn(j), d = C == null ? m : wn(C), m = new y(w, c + "leave", j, n, h), m.target = R, m.relatedTarget = d, w = null, en(h) === p && (y = new y(f, c + "enter", C, n, h), y.target = d, y.relatedTarget = R, w = y), R = w, j && C) t: {
            for (y = j, f = C, c = 0, d = y; d; d = mn(d)) c++;
            for (d = 0, w = f; w; w = mn(w)) d++;
            for (; 0 < c - d; ) y = mn(y), c--;
            for (; 0 < d - c; ) f = mn(f), d--;
            for (; c--; ) {
              if (y === f || f !== null && y === f.alternate) break t;
              y = mn(y), f = mn(f);
            }
            y = null;
          }
          else y = null;
          j !== null && ls(g, m, j, y, !1), C !== null && R !== null && ls(g, R, C, y, !0);
        }
      }
      e: {
        if (m = p ? wn(p) : window, j = m.nodeName && m.nodeName.toLowerCase(), j === "select" || j === "input" && m.type === "file") var x = af;
        else if (Zl(m)) if (qu) x = uf;
        else {
          x = lf;
          var _ = of;
        }
        else (j = m.nodeName) && j.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = sf);
        if (x && (x = x(e, p))) {
          Gu(g, x, n, h);
          break e;
        }
        _ && _(e, m, p), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && $i(m, "number", m.value);
      }
      switch (_ = p ? wn(p) : window, e) {
        case "focusin":
          (Zl(_) || _.contentEditable === "true") && (yn = _, Ki = p, or = null);
          break;
        case "focusout":
          or = Ki = yn = null;
          break;
        case "mousedown":
          Ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ji = !1, as(g, n, h);
          break;
        case "selectionchange":
          if (pf) break;
        case "keydown":
        case "keyup":
          as(g, n, h);
      }
      var N;
      if (Ko) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else vn ? Uu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Bu && n.locale !== "ko" && (vn || E !== "onCompositionStart" ? E === "onCompositionEnd" && vn && (N = Fu()) : (It = h, Wo = "value" in It ? It.value : It.textContent, vn = !0)), _ = ka(p, E), 0 < _.length && (E = new Yl(E, e, null, n, h), g.push({ event: E, listeners: _ }), N ? E.data = N : (N = Vu(n), N !== null && (E.data = N)))), (N = Zp ? ef(e, n) : tf(e, n)) && (p = ka(p, "onBeforeInput"), 0 < p.length && (h = new Yl("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: p }), h.data = N));
    }
    tc(g, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ka(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = mr(e, n), i != null && r.unshift(kr(e, i, a)), i = mr(e, t), i != null && r.push(kr(e, i, a))), e = e.return;
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
function ls(e, t, n, r, a) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, p = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && p !== null && (u = p, a ? (s = mr(n, i), s != null && l.unshift(kr(n, s, u))) : a || (s = mr(n, i), s != null && l.push(kr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var gf = /\r\n?/g, vf = /\u0000|\uFFFD/g;
function ss(e) {
  return (typeof e == "string" ? e : "" + e).replace(gf, `
`).replace(vf, "");
}
function Wr(e, t, n) {
  if (t = ss(t), ss(e) !== t && n) throw Error(P(425));
}
function ja() {
}
var Xi = null, Zi = null;
function eo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var to = typeof setTimeout == "function" ? setTimeout : void 0, yf = typeof clearTimeout == "function" ? clearTimeout : void 0, us = typeof Promise == "function" ? Promise : void 0, xf = typeof queueMicrotask == "function" ? queueMicrotask : typeof us < "u" ? function(e) {
  return us.resolve(null).then(e).catch(wf);
} : to;
function wf(e) {
  setTimeout(function() {
    throw e;
  });
}
function xi(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  vr(t);
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
function cs(e) {
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
var Un = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Un, jr = "__reactProps$" + Un, Ct = "__reactContainer$" + Un, no = "__reactEvents$" + Un, kf = "__reactListeners$" + Un, jf = "__reactHandles$" + Un;
function en(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ct] || n[ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = cs(e); e !== null; ) {
        if (n = e[ut]) return n;
        e = cs(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Rr(e) {
  return e = e[ut] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function qa(e) {
  return e[jr] || null;
}
var ro = [], kn = -1;
function Yt(e) {
  return { current: e };
}
function J(e) {
  0 > kn || (e.current = ro[kn], ro[kn] = null, kn--);
}
function Y(e, t) {
  kn++, ro[kn] = e.current, e.current = t;
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
function Sa() {
  J(Me), J(ke);
}
function ds(e, t, n) {
  if (ke.current !== Wt) throw Error(P(168));
  Y(ke, t), Y(Me, n);
}
function rc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(P(108, ip(e) || "Unknown", a));
  return ne({}, n, r);
}
function Ca(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, on = ke.current, Y(ke, e), Y(Me, Me.current), !0;
}
function ps(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = rc(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, J(Me), J(ke), Y(ke, e)) : J(Me), Y(Me, n);
}
var yt = null, Ha = !1, wi = !1;
function ac(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function Sf(e) {
  Ha = !0, ac(e);
}
function Kt() {
  if (!wi && yt !== null) {
    wi = !0;
    var e = 0, t = H;
    try {
      var n = yt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Ha = !1;
    } catch (a) {
      throw yt !== null && (yt = yt.slice(e + 1)), zu(Vo, Kt), a;
    } finally {
      H = t, wi = !1;
    }
  }
  return null;
}
var jn = [], Sn = 0, _a = null, Na = 0, Ve = [], Ge = 0, ln = null, wt = 1, kt = "";
function Xt(e, t) {
  jn[Sn++] = Na, jn[Sn++] = _a, _a = e, Na = t;
}
function ic(e, t, n) {
  Ve[Ge++] = wt, Ve[Ge++] = kt, Ve[Ge++] = ln, ln = e;
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
  e.return !== null && (Xt(e, 1), ic(e, 1, 0));
}
function Zo(e) {
  for (; e === _a; ) _a = jn[--Sn], jn[Sn] = null, Na = jn[--Sn], jn[Sn] = null;
  for (; e === ln; ) ln = Ve[--Ge], Ve[Ge] = null, kt = Ve[--Ge], Ve[Ge] = null, wt = Ve[--Ge], Ve[Ge] = null;
}
var De = null, Ie = null, Z = !1, Ze = null;
function oc(e, t) {
  var n = qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function fs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Ie = Bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: wt, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function io(e) {
  if (Z) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!fs(e, t)) {
        if (ao(e)) throw Error(P(418));
        t = Bt(n.nextSibling);
        var r = De;
        t && fs(e, t) ? oc(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, De = e);
      }
    } else {
      if (ao(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, Z = !1, De = e;
    }
  }
}
function ms(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Qr(e) {
  if (e !== De) return !1;
  if (!Z) return ms(e), Z = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !eo(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (ao(e)) throw lc(), Error(P(418));
    for (; t; ) oc(e, t), t = Bt(t.nextSibling);
  }
  if (ms(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
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
function lc() {
  for (var e = Ie; e; ) e = Bt(e.nextSibling);
}
function An() {
  Ie = De = null, Z = !1;
}
function el(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var Cf = Et.ReactCurrentBatchConfig;
function Yn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = a.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Yr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function hs(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function a(f, c) {
    return f = qt(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6 ? (c = Ei(d, f.mode, w), c.return = f, c) : (c = a(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var x = d.type;
    return x === gn ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Tt && hs(x) === c.type) ? (w = a(c, d.props), w.ref = Yn(f, c, d), w.return = f, w) : (w = da(d.type, d.key, d.props, null, f.mode, w), w.ref = Yn(f, c, d), w.return = f, w);
  }
  function p(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = Pi(d, f.mode, w), c.return = f, c) : (c = a(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, x) {
    return c === null || c.tag !== 7 ? (c = an(d, f.mode, w, x), c.return = f, c) : (c = a(c, d), c.return = f, c);
  }
  function g(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ei("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case $r:
          return d = da(c.type, c.key, c.props, null, f.mode, d), d.ref = Yn(f, null, c), d.return = f, d;
        case hn:
          return c = Pi(c, f.mode, d), c.return = f, c;
        case Tt:
          var w = c._init;
          return g(f, w(c._payload), d);
      }
      if (Zn(c) || Gn(c)) return c = an(c, f.mode, d, null), c.return = f, c;
      Yr(f, c);
    }
    return null;
  }
  function m(f, c, d, w) {
    var x = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return x !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case $r:
          return d.key === x ? s(f, c, d, w) : null;
        case hn:
          return d.key === x ? p(f, c, d, w) : null;
        case Tt:
          return x = d._init, m(
            f,
            c,
            x(d._payload),
            w
          );
      }
      if (Zn(d) || Gn(d)) return x !== null ? null : h(f, c, d, w, null);
      Yr(f, d);
    }
    return null;
  }
  function j(f, c, d, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case $r:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
        case hn:
          return f = f.get(w.key === null ? d : w.key) || null, p(c, f, w, x);
        case Tt:
          var _ = w._init;
          return j(f, c, d, _(w._payload), x);
      }
      if (Zn(w) || Gn(w)) return f = f.get(d) || null, h(c, f, w, x, null);
      Yr(c, w);
    }
    return null;
  }
  function C(f, c, d, w) {
    for (var x = null, _ = null, N = c, E = c = 0, v = null; N !== null && E < d.length; E++) {
      N.index > E ? (v = N, N = null) : v = N.sibling;
      var S = m(f, N, d[E], w);
      if (S === null) {
        N === null && (N = v);
        break;
      }
      e && N && S.alternate === null && t(f, N), c = i(S, c, E), _ === null ? x = S : _.sibling = S, _ = S, N = v;
    }
    if (E === d.length) return n(f, N), Z && Xt(f, E), x;
    if (N === null) {
      for (; E < d.length; E++) N = g(f, d[E], w), N !== null && (c = i(N, c, E), _ === null ? x = N : _.sibling = N, _ = N);
      return Z && Xt(f, E), x;
    }
    for (N = r(f, N); E < d.length; E++) v = j(N, f, E, d[E], w), v !== null && (e && v.alternate !== null && N.delete(v.key === null ? E : v.key), c = i(v, c, E), _ === null ? x = v : _.sibling = v, _ = v);
    return e && N.forEach(function(I) {
      return t(f, I);
    }), Z && Xt(f, E), x;
  }
  function y(f, c, d, w) {
    var x = Gn(d);
    if (typeof x != "function") throw Error(P(150));
    if (d = x.call(d), d == null) throw Error(P(151));
    for (var _ = x = null, N = c, E = c = 0, v = null, S = d.next(); N !== null && !S.done; E++, S = d.next()) {
      N.index > E ? (v = N, N = null) : v = N.sibling;
      var I = m(f, N, S.value, w);
      if (I === null) {
        N === null && (N = v);
        break;
      }
      e && N && I.alternate === null && t(f, N), c = i(I, c, E), _ === null ? x = I : _.sibling = I, _ = I, N = v;
    }
    if (S.done) return n(
      f,
      N
    ), Z && Xt(f, E), x;
    if (N === null) {
      for (; !S.done; E++, S = d.next()) S = g(f, S.value, w), S !== null && (c = i(S, c, E), _ === null ? x = S : _.sibling = S, _ = S);
      return Z && Xt(f, E), x;
    }
    for (N = r(f, N); !S.done; E++, S = d.next()) S = j(N, f, E, S.value, w), S !== null && (e && S.alternate !== null && N.delete(S.key === null ? E : S.key), c = i(S, c, E), _ === null ? x = S : _.sibling = S, _ = S);
    return e && N.forEach(function(oe) {
      return t(f, oe);
    }), Z && Xt(f, E), x;
  }
  function R(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === gn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case $r:
          e: {
            for (var x = d.key, _ = c; _ !== null; ) {
              if (_.key === x) {
                if (x = d.type, x === gn) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = a(_, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Tt && hs(x) === _.type) {
                  n(f, _.sibling), c = a(_, d.props), c.ref = Yn(f, _, d), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === gn ? (c = an(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = da(d.type, d.key, d.props, null, f.mode, w), w.ref = Yn(f, c, d), w.return = f, f = w);
          }
          return l(f);
        case hn:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                n(f, c.sibling), c = a(c, d.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = Pi(d, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case Tt:
          return _ = d._init, R(f, c, _(d._payload), w);
      }
      if (Zn(d)) return C(f, c, d, w);
      if (Gn(d)) return y(f, c, d, w);
      Yr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = a(c, d), c.return = f, f = c) : (n(f, c), c = Ei(d, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return R;
}
var In = sc(!0), uc = sc(!1), Ea = Yt(null), Pa = null, Cn = null, tl = null;
function nl() {
  tl = Cn = Pa = null;
}
function rl(e) {
  var t = Ea.current;
  J(Ea), e._currentValue = t;
}
function oo(e, t, n) {
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
    if (Pa === null) throw Error(P(308));
    Cn = e, Pa.dependencies = { lanes: 0, firstContext: e };
  } else Cn = Cn.next = e;
  return t;
}
var tn = null;
function al(e) {
  tn === null ? tn = [e] : tn.push(e);
}
function cc(e, t, n, r) {
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
function dc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, G & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, _t(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, al(r)) : (t.next = a.next, a.next = t), r.interleaved = t, _t(e, n);
}
function ia(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Go(e, n);
  }
}
function gs(e, t) {
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
function za(e, t, n, r) {
  var a = e.updateQueue;
  Lt = !1;
  var i = a.firstBaseUpdate, l = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, p = s.next;
    s.next = null, l === null ? i = p : l.next = p, l = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== l && (u === null ? h.firstBaseUpdate = p : u.next = p, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var g = a.baseState;
    l = 0, h = p = s = null, u = i;
    do {
      var m = u.lane, j = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: j,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, y = u;
          switch (m = t, j = n, y.tag) {
            case 1:
              if (C = y.payload, typeof C == "function") {
                g = C.call(j, g, m);
                break e;
              }
              g = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = y.payload, m = typeof C == "function" ? C.call(j, g, m) : C, m == null) break e;
              g = ne({}, g, m);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = a.effects, m === null ? a.effects = [u] : m.push(u));
      } else j = { eventTime: j, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (p = h = j, s = g) : h = h.next = j, l |= m;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, a.lastBaseUpdate = m, a.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = g), a.baseState = s, a.firstBaseUpdate = p, a.lastBaseUpdate = h, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        l |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    un |= l, e.lanes = l, e.memoizedState = g;
  }
}
function vs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(P(191, a));
      a.call(r);
    }
  }
}
var Ar = {}, dt = Yt(Ar), Sr = Yt(Ar), Cr = Yt(Ar);
function nn(e) {
  if (e === Ar) throw Error(P(174));
  return e;
}
function ol(e, t) {
  switch (Y(Cr, t), Y(Sr, e), Y(dt, Ar), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fi(t, e);
  }
  J(dt), Y(dt, t);
}
function Dn() {
  J(dt), J(Sr), J(Cr);
}
function pc(e) {
  nn(Cr.current);
  var t = nn(dt.current), n = Fi(t, e.type);
  t !== n && (Y(Sr, e), Y(dt, n));
}
function ll(e) {
  Sr.current === e && (J(dt), J(Sr));
}
var ee = Yt(0);
function ba(e) {
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
var ki = [];
function sl() {
  for (var e = 0; e < ki.length; e++) ki[e]._workInProgressVersionPrimary = null;
  ki.length = 0;
}
var oa = Et.ReactCurrentDispatcher, ji = Et.ReactCurrentBatchConfig, sn = 0, te = null, se = null, de = null, Ma = !1, lr = !1, _r = 0, _f = 0;
function ye() {
  throw Error(P(321));
}
function ul(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function cl(e, t, n, r, a, i) {
  if (sn = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oa.current = e === null || e.memoizedState === null ? zf : bf, e = n(r, a), lr) {
    i = 0;
    do {
      if (lr = !1, _r = 0, 25 <= i) throw Error(P(301));
      i += 1, de = se = null, t.updateQueue = null, oa.current = Mf, e = n(r, a);
    } while (lr);
  }
  if (oa.current = Ta, t = se !== null && se.next !== null, sn = 0, de = se = te = null, Ma = !1, t) throw Error(P(300));
  return e;
}
function dl() {
  var e = _r !== 0;
  return _r = 0, e;
}
function st() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? te.memoizedState = de = e : de = de.next = e, de;
}
function Qe() {
  if (se === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) de = t, se = e;
  else {
    if (e === null) throw Error(P(310));
    se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, de === null ? te.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Si(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = se, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var l = a.next;
      a.next = i.next, i.next = l;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var u = l = null, s = null, p = i;
    do {
      var h = p.lane;
      if ((sn & h) === h) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var g = {
          lane: h,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        s === null ? (u = s = g, l = r) : s = s.next = g, te.lanes |= h, un |= h;
      }
      p = p.next;
    } while (p !== null && p !== i);
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
function Ci(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(P(311));
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
function fc() {
}
function mc(e, t) {
  var n = te, r = Qe(), a = t(), i = !nt(r.memoizedState, a);
  if (i && (r.memoizedState = a, be = !0), r = r.queue, pl(vc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, Er(9, gc.bind(null, n, r, a, t), void 0, null), pe === null) throw Error(P(349));
    sn & 30 || hc(n, t, a);
  }
  return a;
}
function hc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yc(t) && xc(e);
}
function vc(e, t, n) {
  return n(function() {
    yc(t) && xc(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function xc(e) {
  var t = _t(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function ys(e) {
  var t = st();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Pf.bind(null, te, e), [t.memoizedState, e];
}
function Er(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function wc() {
  return Qe().memoizedState;
}
function la(e, t, n, r) {
  var a = st();
  te.flags |= e, a.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r);
}
function Wa(e, t, n, r) {
  var a = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (i = l.destroy, r !== null && ul(r, l.deps)) {
      a.memoizedState = Er(t, n, i, r);
      return;
    }
  }
  te.flags |= e, a.memoizedState = Er(1 | t, n, i, r);
}
function xs(e, t) {
  return la(8390656, 8, e, t);
}
function pl(e, t) {
  return Wa(2048, 8, e, t);
}
function kc(e, t) {
  return Wa(4, 2, e, t);
}
function jc(e, t) {
  return Wa(4, 4, e, t);
}
function Sc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Cc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wa(4, 4, Sc.bind(null, t, e), n);
}
function fl() {
}
function _c(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Nc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ec(e, t, n) {
  return sn & 21 ? (nt(n, t) || (n = Tu(), te.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n);
}
function Nf(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ji.transition;
  ji.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, ji.transition = r;
  }
}
function Pc() {
  return Qe().memoizedState;
}
function Ef(e, t, n) {
  var r = Gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zc(e)) bc(t, n);
  else if (n = cc(e, t, n, r), n !== null) {
    var a = Ce();
    tt(n, e, r, a), Mc(n, t, r);
  }
}
function Pf(e, t, n) {
  var r = Gt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zc(e)) bc(t, a);
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
    n = cc(e, t, a, r), n !== null && (a = Ce(), tt(n, e, r, a), Mc(n, t, r));
  }
}
function zc(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function bc(e, t) {
  lr = Ma = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Go(e, n);
  }
}
var Ta = { readContext: We, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, zf = { readContext: We, useCallback: function(e, t) {
  return st().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: xs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, la(
    4194308,
    4,
    Sc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return la(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return la(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = st();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = st();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ef.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = st();
  return e = { current: e }, t.memoizedState = e;
}, useState: ys, useDebugValue: fl, useDeferredValue: function(e) {
  return st().memoizedState = e;
}, useTransition: function() {
  var e = ys(!1), t = e[0];
  return e = Nf.bind(null, e[1]), st().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, a = st();
  if (Z) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(P(349));
    sn & 30 || hc(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, xs(vc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Er(9, gc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = st(), t = pe.identifierPrefix;
  if (Z) {
    var n = kt, r = wt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = _f++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bf = {
  readContext: We,
  useCallback: _c,
  useContext: We,
  useEffect: pl,
  useImperativeHandle: Cc,
  useInsertionEffect: kc,
  useLayoutEffect: jc,
  useMemo: Nc,
  useReducer: Si,
  useRef: wc,
  useState: function() {
    return Si(Nr);
  },
  useDebugValue: fl,
  useDeferredValue: function(e) {
    var t = Qe();
    return Ec(t, se.memoizedState, e);
  },
  useTransition: function() {
    var e = Si(Nr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: fc,
  useSyncExternalStore: mc,
  useId: Pc,
  unstable_isNewReconciler: !1
}, Mf = { readContext: We, useCallback: _c, useContext: We, useEffect: pl, useImperativeHandle: Cc, useInsertionEffect: kc, useLayoutEffect: jc, useMemo: Nc, useReducer: Ci, useRef: wc, useState: function() {
  return Ci(Nr);
}, useDebugValue: fl, useDeferredValue: function(e) {
  var t = Qe();
  return se === null ? t.memoizedState = e : Ec(t, se.memoizedState, e);
}, useTransition: function() {
  var e = Ci(Nr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: fc, useSyncExternalStore: mc, useId: Pc, unstable_isNewReconciler: !1 };
function Je(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function lo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qa = { isMounted: function(e) {
  return (e = e._reactInternals) ? pn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), a = Gt(e), i = jt(r, a);
  i.payload = t, n != null && (i.callback = n), t = Ut(e, i, a), t !== null && (tt(t, e, a, r), ia(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), a = Gt(e), i = jt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ut(e, i, a), t !== null && (tt(t, e, a, r), ia(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ce(), r = Gt(e), a = jt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Ut(e, a, r), t !== null && (tt(t, e, r, n), ia(t, e, r));
} };
function ws(e, t, n, r, a, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !xr(n, r) || !xr(a, i) : !0;
}
function Tc(e, t, n) {
  var r = !1, a = Wt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = We(i) : (a = Te(t) ? on : ke.current, r = t.contextTypes, i = (r = r != null) ? Rn(e, a) : Wt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ks(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qa.enqueueReplaceState(t, t.state, null);
}
function so(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, il(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = We(i) : (i = Te(t) ? on : ke.current, a.context = Rn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lo(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Qa.enqueueReplaceState(a, a.state, null), za(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += ap(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function _i(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Tf = typeof WeakMap == "function" ? WeakMap : Map;
function Lc(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ra || (Ra = !0, wo = r), uo(e, t);
  }, n;
}
function Rc(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      uo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    uo(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Tf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Hf.bind(null, e, t, n), t.then(e, e));
}
function Ss(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cs(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e);
}
var Lf = Et.ReactCurrentOwner, be = !1;
function Se(e, t, n, r) {
  t.child = e === null ? uc(t, null, n, r) : In(t, e.child, n, r);
}
function _s(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Mn(t, a), r = cl(e, t, n, r, i, a), n = dl(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Nt(e, t, a)) : (Z && n && Xo(t), t.flags |= 1, Se(e, t, r, a), t.child);
}
function Ns(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !kl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ac(e, t, i, r, a)) : (e = da(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : xr, n(l, r) && e.ref === t.ref) return Nt(e, t, a);
  }
  return t.flags |= 1, e = qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ac(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xr(i, r) && e.ref === t.ref) if (be = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (be = !0);
    else return t.lanes = e.lanes, Nt(e, t, a);
  }
  return co(e, t, n, r, a);
}
function Ic(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Nn, Ae), Ae |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Nn, Ae), Ae |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(Nn, Ae), Ae |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(Nn, Ae), Ae |= r;
  return Se(e, t, a, n), t.child;
}
function Dc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function co(e, t, n, r, a) {
  var i = Te(n) ? on : ke.current;
  return i = Rn(t, i), Mn(t, a), n = cl(e, t, n, r, i, a), r = dl(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Nt(e, t, a)) : (Z && r && Xo(t), t.flags |= 1, Se(e, t, n, a), t.child);
}
function Es(e, t, n, r, a) {
  if (Te(n)) {
    var i = !0;
    Ca(t);
  } else i = !1;
  if (Mn(t, a), t.stateNode === null) sa(e, t), Tc(t, n, r), so(t, n, r, a), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = We(p) : (p = Te(n) ? on : ke.current, p = Rn(t, p));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    g || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== p) && ks(t, l, r, p), Lt = !1;
    var m = t.memoizedState;
    l.state = m, za(t, r, l, a), s = t.memoizedState, u !== r || m !== s || Me.current || Lt ? (typeof h == "function" && (lo(t, n, h, r), s = t.memoizedState), (u = Lt || ws(t, n, u, r, m, s, p)) ? (g || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = p, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, dc(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : Je(t.type, u), l.props = p, g = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Te(n) ? on : ke.current, s = Rn(t, s));
    var j = n.getDerivedStateFromProps;
    (h = typeof j == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== g || m !== s) && ks(t, l, r, s), Lt = !1, m = t.memoizedState, l.state = m, za(t, r, l, a);
    var C = t.memoizedState;
    u !== g || m !== C || Me.current || Lt ? (typeof j == "function" && (lo(t, n, j, r), C = t.memoizedState), (p = Lt || ws(t, n, p, r, m, C, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, C, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, C, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), l.props = r, l.state = C, l.context = s, r = p) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return po(e, t, n, r, i, a);
}
function po(e, t, n, r, a, i) {
  Dc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && ps(t, n, !1), Nt(e, t, i);
  r = t.stateNode, Lf.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = In(t, e.child, null, i), t.child = In(t, null, u, i)) : Se(e, t, u, i), t.memoizedState = r.state, a && ps(t, n, !0), t.child;
}
function $c(e) {
  var t = e.stateNode;
  t.pendingContext ? ds(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ds(e, t.context, !1), ol(e, t.containerInfo);
}
function Ps(e, t, n, r, a) {
  return An(), el(a), t.flags |= 256, Se(e, t, n, r), t.child;
}
var fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oc(e, t, n) {
  var r = t.pendingProps, a = ee.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Y(ee, a & 1), e === null)
    return io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Ja(l, r, 0, null), e = an(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mo(n), t.memoizedState = fo, e) : ml(t, l));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Rf(e, t, l, r, u, a, n);
  if (i) {
    i = r.fallback, l = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = qt(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? i = qt(u, i) : (i = an(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? mo(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = fo, r;
  }
  return i = e.child, e = i.sibling, r = qt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ml(e, t) {
  return t = Ja({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Kr(e, t, n, r) {
  return r !== null && el(r), In(t, e.child, null, n), e = ml(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Rf(e, t, n, r, a, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = _i(Error(P(422))), Kr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Ja({ mode: "visible", children: r.children }, a, 0, null), i = an(i, a, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && In(t, e.child, null, l), t.child.memoizedState = mo(l), t.memoizedState = fo, i);
  if (!(t.mode & 1)) return Kr(e, t, l, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(P(419)), r = _i(i, r, void 0), Kr(e, t, l, r);
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
    return wl(), r = _i(Error(P(421))), Kr(e, t, l, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wf.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Ie = Bt(a.nextSibling), De = t, Z = !0, Ze = null, e !== null && (Ve[Ge++] = wt, Ve[Ge++] = kt, Ve[Ge++] = ln, wt = e.id, kt = e.overflow, ln = t), t = ml(t, r.children), t.flags |= 4096, t);
}
function zs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), oo(e.return, t, n);
}
function Ni(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function Fc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Se(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && zs(e, n, t);
      else if (e.tag === 19) zs(e, n, t);
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
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && ba(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ni(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && ba(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Ni(t, !0, n, null, i);
      break;
    case "together":
      Ni(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function sa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Af(e, t, n) {
  switch (t.tag) {
    case 3:
      $c(t), An();
      break;
    case 5:
      pc(t);
      break;
    case 1:
      Te(t.type) && Ca(t);
      break;
    case 4:
      ol(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      Y(Ea, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Oc(e, t, n) : (Y(ee, ee.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ic(e, t, n);
  }
  return Nt(e, t, n);
}
var Bc, ho, Uc, Vc;
Bc = function(e, t) {
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
ho = function() {
};
Uc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, nn(dt.current);
    var i = null;
    switch (n) {
      case "input":
        a = Ii(e, a), r = Ii(e, r), i = [];
        break;
      case "select":
        a = ne({}, a, { value: void 0 }), r = ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = Oi(e, a), r = Oi(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ja);
    }
    Bi(n, r);
    var l;
    n = null;
    for (p in a) if (!r.hasOwnProperty(p) && a.hasOwnProperty(p) && a[p] != null) if (p === "style") {
      var u = a[p];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (pr.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
    for (p in r) {
      var s = r[p];
      if (u = a != null ? a[p] : void 0, r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        p,
        n
      )), n = s;
      else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (pr.hasOwnProperty(p) ? (s != null && p === "onScroll" && K("scroll", e), i || u === s || (i = [])) : (i = i || []).push(p, s));
    }
    n && (i = i || []).push("style", n);
    var p = i;
    (t.updateQueue = p) && (t.flags |= 4);
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
function If(e, t, n) {
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
      return Te(t.type) && Sa(), xe(t), null;
    case 3:
      return r = t.stateNode, Dn(), J(Me), J(ke), sl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (So(Ze), Ze = null))), ho(e, t), xe(t), null;
    case 5:
      ll(t);
      var a = nn(Cr.current);
      if (n = t.type, e !== null && t.stateNode != null) Uc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return xe(t), null;
        }
        if (e = nn(dt.current), Qr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ut] = t, r[jr] = i, e = (t.mode & 1) !== 0, n) {
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
              $l(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              Fl(r, i), K("invalid", r);
          }
          Bi(n, i), a = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Wr(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Wr(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : pr.hasOwnProperty(l) && u != null && l === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), Ol(r, i, !0);
              break;
            case "textarea":
              Or(r), Bl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ja);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ut] = t, e[jr] = r, Bc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ui(n, r), n) {
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
                $l(e, r), a = Ii(e, r), K("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ne({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                Fl(e, r), a = Oi(e, r), K("invalid", e);
                break;
              default:
                a = r;
            }
            Bi(n, a), u = a;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? wu(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && yu(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && fr(e, s) : typeof s == "number" && fr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (pr.hasOwnProperty(i) ? s != null && i === "onScroll" && K("scroll", e) : s != null && $o(e, i, s, l));
            }
            switch (n) {
              case "input":
                Or(e), Ol(e, r, !1);
                break;
              case "textarea":
                Or(e), Bl(e);
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
                typeof a.onClick == "function" && (e.onclick = ja);
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
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = nn(Cr.current), nn(dt.current), Qr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (i = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              Wr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Wr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (J(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Z && Ie !== null && t.mode & 1 && !(t.flags & 128)) lc(), An(), t.flags |= 98560, i = !1;
        else if (i = Qr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
            i[ut] = t;
          } else An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), i = !1;
        } else Ze !== null && (So(Ze), Ze = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ue === 0 && (ue = 3) : wl())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return Dn(), ho(e, t), e === null && wr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return rl(t.type._context), xe(t), null;
    case 17:
      return Te(t.type) && Sa(), xe(t), null;
    case 19:
      if (J(ee), i = t.memoizedState, i === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Kn(i, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = ba(e), l !== null) {
            for (t.flags |= 128, Kn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ie() > On && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ba(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Z) return xe(t), null;
        } else 2 * ie() - i.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ie(), t.sibling = null, n = ee.current, Y(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return xl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Df(e, t) {
  switch (Zo(t), t.tag) {
    case 1:
      return Te(t.type) && Sa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), J(Me), J(ke), sl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ll(t), null;
    case 13:
      if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
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
var Jr = !1, we = !1, $f = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ae(e, t, r);
  }
  else n.current = null;
}
function go(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var bs = !1;
function Of(e, t) {
  if (Xi = xa, e = Qu(), Jo(e)) {
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
        var l = 0, u = -1, s = -1, p = 0, h = 0, g = e, m = null;
        t: for (; ; ) {
          for (var j; g !== n || a !== 0 && g.nodeType !== 3 || (u = l + a), g !== i || r !== 0 && g.nodeType !== 3 || (s = l + r), g.nodeType === 3 && (l += g.nodeValue.length), (j = g.firstChild) !== null; )
            m = g, g = j;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++p === a && (u = l), m === i && ++h === r && (s = l), (j = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = j;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zi = { focusedElem: e, selectionRange: n }, xa = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var y = C.memoizedProps, R = C.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Je(t.type, y), R);
            f.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(P(163));
      }
    } catch (w) {
      ae(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return C = bs, bs = !1, C;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && go(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ya(e, t) {
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
function vo(e) {
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
  t !== null && (e.alternate = null, Gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[jr], delete t[no], delete t[kf], delete t[jf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ms(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || qc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ja));
  else if (r !== 4 && (e = e.child, e !== null)) for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), e = e.sibling;
}
function xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (xo(e, t, n), e = e.sibling; e !== null; ) xo(e, t, n), e = e.sibling;
}
var me = null, Xe = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Hc(e, t, n), n = n.sibling;
}
function Hc(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function") try {
    ct.onCommitFiberUnmount(Ba, n);
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
      me !== null && (Xe ? (e = me, n = n.stateNode, e.nodeType === 8 ? xi(e.parentNode, n) : e.nodeType === 1 && xi(e, n), vr(e)) : xi(me, n.stateNode));
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
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && go(n, t, l), a = a.next;
        } while (a !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (!we && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ae(n, t, u);
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
function Ts(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $f()), t.forEach(function(r) {
      var a = Qf.bind(null, e, r);
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
      if (me === null) throw Error(P(160));
      Hc(i, l, a), me = null, Xe = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (p) {
      ae(a, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wc(t, e), t = t.sibling;
}
function Wc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), lt(e), r & 4) {
        try {
          sr(3, e, e.return), Ya(3, e);
        } catch (y) {
          ae(e, e.return, y);
        }
        try {
          sr(5, e, e.return);
        } catch (y) {
          ae(e, e.return, y);
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
          fr(a, "");
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && hu(a, i), Ui(u, l);
          var p = Ui(u, i);
          for (l = 0; l < s.length; l += 2) {
            var h = s[l], g = s[l + 1];
            h === "style" ? wu(a, g) : h === "dangerouslySetInnerHTML" ? yu(a, g) : h === "children" ? fr(a, g) : $o(a, h, g, p);
          }
          switch (u) {
            case "input":
              Di(a, i);
              break;
            case "textarea":
              gu(a, i);
              break;
            case "select":
              var m = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var j = i.value;
              j != null ? En(a, !!i.multiple, j, !1) : m !== !!i.multiple && (i.defaultValue != null ? En(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : En(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[jr] = i;
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Ke(t, e), lt(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ke(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        vr(t.containerInfo);
      } catch (y) {
        ae(e, e.return, y);
      }
      break;
    case 4:
      Ke(t, e), lt(e);
      break;
    case 13:
      Ke(t, e), lt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (vl = ie())), r & 4 && Ts(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (p = we) || h, Ke(t, e), we = p) : Ke(t, e), lt(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !h && e.mode & 1) for (M = e, h = e.child; h !== null; ) {
          for (g = M = h; M !== null; ) {
            switch (m = M, j = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                sr(4, m, m.return);
                break;
              case 1:
                _n(m, m.return);
                var C = m.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (y) {
                    ae(r, n, y);
                  }
                }
                break;
              case 5:
                _n(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Rs(g);
                  continue;
                }
            }
            j !== null ? (j.return = m, M = j) : Rs(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                a = g.stateNode, p ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = g.stateNode, s = g.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = xu("display", l));
              } catch (y) {
                ae(e, e.return, y);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = p ? "" : g.memoizedProps;
            } catch (y) {
              ae(e, e.return, y);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            h === g && (h = null), g = g.return;
          }
          h === g && (h = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      Ke(t, e), lt(e), r & 4 && Ts(e);
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
          if (qc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (fr(a, ""), r.flags &= -33);
          var i = Ms(e);
          xo(e, i, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Ms(e);
          yo(e, u, l);
          break;
        default:
          throw Error(P(161));
      }
    } catch (s) {
      ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ff(e, t, n) {
  M = e, Qc(e);
}
function Qc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var a = M, i = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || Jr;
      if (!l) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || we;
        u = Jr;
        var p = we;
        if (Jr = l, (we = s) && !p) for (M = a; M !== null; ) l = M, s = l.child, l.tag === 22 && l.memoizedState !== null ? As(a) : s !== null ? (s.return = l, M = s) : As(a);
        for (; i !== null; ) M = i, Qc(i), i = i.sibling;
        M = a, Jr = u, we = p;
      }
      Ls(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, M = i) : Ls(e);
  }
}
function Ls(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            we || Ya(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !we) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && vs(t, i, r);
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
              vs(t, l, n);
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
              var p = t.alternate;
              if (p !== null) {
                var h = p.memoizedState;
                if (h !== null) {
                  var g = h.dehydrated;
                  g !== null && vr(g);
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
            throw Error(P(163));
        }
        we || t.flags & 512 && vo(t);
      } catch (m) {
        ae(t, t.return, m);
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
function Rs(e) {
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
function As(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ya(4, t);
          } catch (s) {
            ae(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ae(t, a, s);
            }
          }
          var i = t.return;
          try {
            vo(t);
          } catch (s) {
            ae(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            vo(t);
          } catch (s) {
            ae(t, l, s);
          }
      }
    } catch (s) {
      ae(t, t.return, s);
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
var Bf = Math.ceil, La = Et.ReactCurrentDispatcher, hl = Et.ReactCurrentOwner, He = Et.ReactCurrentBatchConfig, G = 0, pe = null, le = null, he = 0, Ae = 0, Nn = Yt(0), ue = 0, Pr = null, un = 0, Ka = 0, gl = 0, ur = null, ze = null, vl = 0, On = 1 / 0, vt = null, Ra = !1, wo = null, Vt = null, Xr = !1, Dt = null, Aa = 0, cr = 0, ko = null, ua = -1, ca = 0;
function Ce() {
  return G & 6 ? ie() : ua !== -1 ? ua : ua = ie();
}
function Gt(e) {
  return e.mode & 1 ? G & 2 && he !== 0 ? he & -he : Cf.transition !== null ? (ca === 0 && (ca = Tu()), ca) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ou(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < cr) throw cr = 0, ko = null, Error(P(185));
  Tr(e, n, r), (!(G & 2) || e !== pe) && (e === pe && (!(G & 2) && (Ka |= n), ue === 4 && At(e, he)), Le(e, r), n === 1 && G === 0 && !(t.mode & 1) && (On = ie() + 500, Ha && Kt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Sp(e, t);
  var r = ya(e, e === pe ? he : 0);
  if (r === 0) n !== null && Gl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Gl(n), t === 1) e.tag === 0 ? Sf(Is.bind(null, e)) : ac(Is.bind(null, e)), xf(function() {
      !(G & 6) && Kt();
    }), n = null;
    else {
      switch (Lu(r)) {
        case 1:
          n = Vo;
          break;
        case 4:
          n = bu;
          break;
        case 16:
          n = va;
          break;
        case 536870912:
          n = Mu;
          break;
        default:
          n = va;
      }
      n = nd(n, Yc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Yc(e, t) {
  if (ua = -1, ca = 0, G & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = ya(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ia(e, r);
  else {
    t = r;
    var a = G;
    G |= 2;
    var i = Jc();
    (pe !== e || he !== t) && (vt = null, On = ie() + 500, rn(e, t));
    do
      try {
        Gf();
        break;
      } catch (u) {
        Kc(e, u);
      }
    while (!0);
    nl(), La.current = i, G = a, le !== null ? t = 0 : (pe = null, he = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (a = Wi(e), a !== 0 && (r = a, t = jo(e, a))), t === 1) throw n = Pr, rn(e, 0), At(e, r), Le(e, ie()), n;
    if (t === 6) At(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Uf(a) && (t = Ia(e, r), t === 2 && (i = Wi(e), i !== 0 && (r = i, t = jo(e, i))), t === 1)) throw n = Pr, rn(e, 0), At(e, r), Le(e, ie()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Zt(e, ze, vt);
          break;
        case 3:
          if (At(e, r), (r & 130023424) === r && (t = vl + 500 - ie(), 10 < t)) {
            if (ya(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Ce(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = to(Zt.bind(null, e, ze, vt), t);
            break;
          }
          Zt(e, ze, vt);
          break;
        case 4:
          if (At(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - et(r);
            i = 1 << l, l = t[l], l > a && (a = l), r &= ~i;
          }
          if (r = a, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = to(Zt.bind(null, e, ze, vt), r);
            break;
          }
          Zt(e, ze, vt);
          break;
        case 5:
          Zt(e, ze, vt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Le(e, ie()), e.callbackNode === n ? Yc.bind(null, e) : null;
}
function jo(e, t) {
  var n = ur;
  return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Ia(e, t), e !== 2 && (t = ze, ze = n, t !== null && So(t)), e;
}
function So(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function Uf(e) {
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
  for (t &= ~gl, t &= ~Ka, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Is(e) {
  if (G & 6) throw Error(P(327));
  Tn();
  var t = ya(e, 0);
  if (!(t & 1)) return Le(e, ie()), null;
  var n = Ia(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wi(e);
    r !== 0 && (t = r, n = jo(e, r));
  }
  if (n === 1) throw n = Pr, rn(e, 0), At(e, t), Le(e, ie()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, ze, vt), Le(e, ie()), null;
}
function yl(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    G = n, G === 0 && (On = ie() + 500, Ha && Kt());
  }
}
function cn(e) {
  Dt !== null && Dt.tag === 0 && !(G & 6) && Tn();
  var t = G;
  G |= 1;
  var n = He.transition, r = H;
  try {
    if (He.transition = null, H = 1, e) return e();
  } finally {
    H = r, He.transition = n, G = t, !(G & 6) && Kt();
  }
}
function xl() {
  Ae = Nn.current, J(Nn);
}
function rn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, yf(n)), le !== null) for (n = le.return; n !== null; ) {
    var r = n;
    switch (Zo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Sa();
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
  if (pe = e, le = e = qt(e.current, null), he = Ae = t, ue = 0, Pr = null, gl = Ka = un = 0, ze = ur = null, tn !== null) {
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
function Kc(e, t) {
  do {
    var n = le;
    try {
      if (nl(), oa.current = Ta, Ma) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ma = !1;
      }
      if (sn = 0, de = se = te = null, lr = !1, _r = 0, hl.current = null, n === null || n.return === null) {
        ue = 1, Pr = t, le = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = he, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var p = s, h = u, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var j = Ss(l);
          if (j !== null) {
            j.flags &= -257, Cs(j, l, u, i, t), j.mode & 1 && js(i, p, t), t = j, s = p;
            var C = t.updateQueue;
            if (C === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else C.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              js(i, p, t), wl();
              break e;
            }
            s = Error(P(426));
          }
        } else if (Z && u.mode & 1) {
          var R = Ss(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Cs(R, l, u, i, t), el($n(s, u));
            break e;
          }
        }
        i = s = $n(s, u), ue !== 4 && (ue = 2), ur === null ? ur = [i] : ur.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Lc(i, s, t);
              gs(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Vt === null || !Vt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Rc(i, u, t);
                gs(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Zc(n);
    } catch (x) {
      t = x, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jc() {
  var e = La.current;
  return La.current = Ta, e === null ? Ta : e;
}
function wl() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), pe === null || !(un & 268435455) && !(Ka & 268435455) || At(pe, he);
}
function Ia(e, t) {
  var n = G;
  G |= 2;
  var r = Jc();
  (pe !== e || he !== t) && (vt = null, rn(e, t));
  do
    try {
      Vf();
      break;
    } catch (a) {
      Kc(e, a);
    }
  while (!0);
  if (nl(), G = n, La.current = r, le !== null) throw Error(P(261));
  return pe = null, he = 0, ue;
}
function Vf() {
  for (; le !== null; ) Xc(le);
}
function Gf() {
  for (; le !== null && !mp(); ) Xc(le);
}
function Xc(e) {
  var t = td(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? Zc(e) : le = t, hl.current = null;
}
function Zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Df(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, le = null;
        return;
      }
    } else if (n = If(n, t, Ae), n !== null) {
      le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Zt(e, t, n) {
  var r = H, a = He.transition;
  try {
    He.transition = null, H = 1, qf(e, t, n, r);
  } finally {
    He.transition = a, H = r;
  }
  return null;
}
function qf(e, t, n, r) {
  do
    Tn();
  while (Dt !== null);
  if (G & 6) throw Error(P(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Cp(e, i), e === pe && (le = pe = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xr || (Xr = !0, nd(va, function() {
    return Tn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = He.transition, He.transition = null;
    var l = H;
    H = 1;
    var u = G;
    G |= 4, hl.current = null, Of(e, n), Wc(n, e), df(Zi), xa = !!Xi, Zi = Xi = null, e.current = n, Ff(n), hp(), G = u, H = l, He.transition = i;
  } else e.current = n;
  if (Xr && (Xr = !1, Dt = e, Aa = a), i = e.pendingLanes, i === 0 && (Vt = null), yp(n.stateNode), Le(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ra) throw Ra = !1, e = wo, wo = null, e;
  return Aa & 1 && e.tag !== 0 && Tn(), i = e.pendingLanes, i & 1 ? e === ko ? cr++ : (cr = 0, ko = e) : cr = 0, Kt(), null;
}
function Tn() {
  if (Dt !== null) {
    var e = Lu(Aa), t = He.transition, n = H;
    try {
      if (He.transition = null, H = 16 > e ? 16 : e, Dt === null) var r = !1;
      else {
        if (e = Dt, Dt = null, Aa = 0, G & 6) throw Error(P(331));
        var a = G;
        for (G |= 4, M = e.current; M !== null; ) {
          var i = M, l = i.child;
          if (M.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var p = u[s];
                for (M = p; M !== null; ) {
                  var h = M;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, i);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, M = g;
                  else for (; M !== null; ) {
                    h = M;
                    var m = h.sibling, j = h.return;
                    if (Gc(h), h === p) {
                      M = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = j, M = m;
                      break;
                    }
                    M = j;
                  }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var y = C.child;
                if (y !== null) {
                  C.child = null;
                  do {
                    var R = y.sibling;
                    y.sibling = null, y = R;
                  } while (y !== null);
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
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, M = f;
              break e;
            }
            M = i.return;
          }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          l = M;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) d.return = l, M = d;
          else e: for (l = c; M !== null; ) {
            if (u = M, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ya(9, u);
              }
            } catch (x) {
              ae(u, u.return, x);
            }
            if (u === l) {
              M = null;
              break e;
            }
            var w = u.sibling;
            if (w !== null) {
              w.return = u.return, M = w;
              break e;
            }
            M = u.return;
          }
        }
        if (G = a, Kt(), ct && typeof ct.onPostCommitFiberRoot == "function") try {
          ct.onPostCommitFiberRoot(Ba, e);
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
function Ds(e, t, n) {
  t = $n(n, t), t = Lc(e, t, 1), e = Ut(e, t, 1), t = Ce(), e !== null && (Tr(e, 1, t), Le(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) Ds(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ds(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
        e = $n(n, e), e = Rc(t, e, 1), t = Ut(t, e, 1), e = Ce(), t !== null && (Tr(t, 1, e), Le(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Hf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (he & n) === n && (ue === 4 || ue === 3 && (he & 130023424) === he && 500 > ie() - vl ? rn(e, 0) : gl |= n), Le(e, t);
}
function ed(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ur, Ur <<= 1, !(Ur & 130023424) && (Ur = 4194304)) : t = 1);
  var n = Ce();
  e = _t(e, t), e !== null && (Tr(e, t, n), Le(e, n));
}
function Wf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ed(e, n);
}
function Qf(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), ed(e, n);
}
var td;
td = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) be = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return be = !1, Af(e, t, n);
    be = !!(e.flags & 131072);
  }
  else be = !1, Z && t.flags & 1048576 && ic(t, Na, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      sa(e, t), e = t.pendingProps;
      var a = Rn(t, ke.current);
      Mn(t, n), a = cl(null, t, r, e, a, n);
      var i = dl();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (i = !0, Ca(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, il(t), a.updater = Qa, t.stateNode = a, a._reactInternals = t, so(t, r, e, n), t = po(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && Xo(t), Se(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (sa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Kf(r), e = Je(r, e), a) {
          case 0:
            t = co(null, t, r, e, n);
            break e;
          case 1:
            t = Es(null, t, r, e, n);
            break e;
          case 11:
            t = _s(null, t, r, e, n);
            break e;
          case 14:
            t = Ns(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), co(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), Es(e, t, r, a, n);
    case 3:
      e: {
        if ($c(t), e === null) throw Error(P(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, dc(e, t), za(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = $n(Error(P(423)), t), t = Ps(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = $n(Error(P(424)), t), t = Ps(e, t, r, n, a);
          break e;
        } else for (Ie = Bt(t.stateNode.containerInfo.firstChild), De = t, Z = !0, Ze = null, n = uc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return pc(t), e === null && io(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = a.children, eo(r, a) ? l = null : i !== null && eo(r, i) && (t.flags |= 32), Dc(e, t), Se(e, t, l, n), t.child;
    case 6:
      return e === null && io(t), null;
    case 13:
      return Oc(e, t, n);
    case 4:
      return ol(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), _s(e, t, r, a, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Y(Ea, r._currentValue), r._currentValue = l, i !== null) if (nt(i.value, l)) {
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
                  var p = i.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var h = p.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), p.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), oo(
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
            if (l = i.return, l === null) throw Error(P(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), oo(l, n, t), l = i.sibling;
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
      return r = t.type, a = Je(r, t.pendingProps), a = Je(r.type, a), Ns(e, t, r, a, n);
    case 15:
      return Ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Je(r, a), sa(e, t), t.tag = 1, Te(r) ? (e = !0, Ca(t)) : e = !1, Mn(t, n), Tc(t, r, a), so(t, r, a, n), po(null, t, r, !0, e, n);
    case 19:
      return Fc(e, t, n);
    case 22:
      return Ic(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function nd(e, t) {
  return zu(e, t);
}
function Yf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function qe(e, t, n, r) {
  return new Yf(e, t, n, r);
}
function kl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kf(e) {
  if (typeof e == "function") return kl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Fo) return 11;
    if (e === Bo) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function da(e, t, n, r, a, i) {
  var l = 2;
  if (r = e, typeof e == "function") kl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case gn:
      return an(n.children, a, i, t);
    case Oo:
      l = 8, a |= 8;
      break;
    case Ti:
      return e = qe(12, n, t, a | 2), e.elementType = Ti, e.lanes = i, e;
    case Li:
      return e = qe(13, n, t, a), e.elementType = Li, e.lanes = i, e;
    case Ri:
      return e = qe(19, n, t, a), e.elementType = Ri, e.lanes = i, e;
    case pu:
      return Ja(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case cu:
          l = 10;
          break e;
        case du:
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
      throw Error(P(130, e == null ? e : typeof e, ""));
  }
  return t = qe(l, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function an(e, t, n, r) {
  return e = qe(7, e, r, t), e.lanes = n, e;
}
function Ja(e, t, n, r) {
  return e = qe(22, e, r, t), e.elementType = pu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ei(e, t, n) {
  return e = qe(6, e, null, t), e.lanes = n, e;
}
function Pi(e, t, n) {
  return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Jf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = si(0), this.expirationTimes = si(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = si(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function jl(e, t, n, r, a, i, l, u, s) {
  return e = new Jf(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = qe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, il(i), e;
}
function Xf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rd(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(P(170));
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
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return rc(e, n, t);
  }
  return t;
}
function ad(e, t, n, r, a, i, l, u, s) {
  return e = jl(n, r, !0, e, a, i, l, u, s), e.context = rd(null), n = e.current, r = Ce(), a = Gt(n), i = jt(r, a), i.callback = t ?? null, Ut(n, i, a), e.current.lanes = a, Tr(e, a, r), Le(e, r), e;
}
function Xa(e, t, n, r) {
  var a = t.current, i = Ce(), l = Gt(a);
  return n = rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(a, t, l), e !== null && (tt(e, a, l, i), ia(e, a, l)), l;
}
function Da(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $s(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sl(e, t) {
  $s(e, t), (e = e.alternate) && $s(e, t);
}
function Zf() {
  return null;
}
var id = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Cl(e) {
  this._internalRoot = e;
}
Za.prototype.render = Cl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Xa(e, t, null, null);
};
Za.prototype.unmount = Cl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function() {
      Xa(null, e, null, null);
    }), t[Ct] = null;
  }
};
function Za(e) {
  this._internalRoot = e;
}
Za.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++) ;
    Rt.splice(n, 0, e), n === 0 && $u(e);
  }
};
function _l(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ei(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Os() {
}
function em(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Da(l);
        i.call(p);
      };
    }
    var l = ad(t, r, e, 0, null, !1, !1, "", Os);
    return e._reactRootContainer = l, e[Ct] = l.current, wr(e.nodeType === 8 ? e.parentNode : e), cn(), l;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var p = Da(s);
      u.call(p);
    };
  }
  var s = jl(e, 0, !1, null, null, !1, !1, "", Os);
  return e._reactRootContainer = s, e[Ct] = s.current, wr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
    Xa(t, s, n, r);
  }), s;
}
function ti(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = Da(l);
        u.call(s);
      };
    }
    Xa(t, l, e, a);
  } else l = em(n, t, e, a, r);
  return Da(l);
}
Ru = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 && (Go(t, n | 1), Le(t, ie()), !(G & 6) && (On = ie() + 500, Kt()));
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
qo = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ce();
      tt(t, e, 134217728, n);
    }
    Sl(e, 134217728);
  }
};
Au = function(e) {
  if (e.tag === 13) {
    var t = Gt(e), n = _t(e, t);
    if (n !== null) {
      var r = Ce();
      tt(n, e, t, r);
    }
    Sl(e, t);
  }
};
Iu = function() {
  return H;
};
Du = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
Gi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Di(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = qa(r);
            if (!a) throw Error(P(90));
            mu(r), Di(r, a);
          }
        }
      }
      break;
    case "textarea":
      gu(e, n);
      break;
    case "select":
      t = n.value, t != null && En(e, !!n.multiple, t, !1);
  }
};
Su = yl;
Cu = cn;
var tm = { usingClientEntryPoint: !1, Events: [Rr, wn, qa, ku, ju, yl] }, Jn = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, nm = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Eu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Jn.findFiberByHostInstance || Zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber) try {
    Ba = Zr.inject(nm), ct = Zr;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_l(t)) throw Error(P(200));
  return Xf(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!_l(e)) throw Error(P(299));
  var n = !1, r = "", a = id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = jl(e, 1, !1, null, null, n, !1, r, a), e[Ct] = t.current, wr(e.nodeType === 8 ? e.parentNode : e), new Cl(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = Eu(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return cn(e);
};
Oe.hydrate = function(e, t, n) {
  if (!ei(t)) throw Error(P(200));
  return ti(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!_l(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", l = id;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ad(t, null, e, 1, n ?? null, a, !1, i, l), e[Ct] = t.current, wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Za(t);
};
Oe.render = function(e, t, n) {
  if (!ei(t)) throw Error(P(200));
  return ti(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!ei(e)) throw Error(P(40));
  return e._reactRootContainer ? (cn(function() {
    ti(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = yl;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ei(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return ti(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function od() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od);
    } catch (e) {
      console.error(e);
    }
}
od(), ou.exports = Oe;
var rm = ou.exports, ld, Fs = rm;
ld = Fs.createRoot, Fs.hydrateRoot;
const Bs = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, am = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, im = [
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
], om = [
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
function zr(e) {
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
function lm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, i = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(i) ? i : 0 };
}
const $a = () => globalThis.__crycatBase || "";
async function V(e, t) {
  const n = await fetch($a() + e, t);
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
  health: () => V("/api/health"),
  getSettings: () => V(
    "/api/settings"
  ),
  putSettings: (e) => V("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), V("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => V("/api/assets"),
  patchAsset: (e, t) => V(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => V(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 16) => V(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => V("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => V(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => V(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), V(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  blobs: (e) => V(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => V(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  previewUrl: (e) => `/api/assets/${e}/preview.png`,
  optimize: (e, t = !1) => V("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => V(`/api/job/${e}`),
  result: () => V("/api/result"),
  version: () => V("/api/version"),
  checkVersion: () => V("/api/version/check", { method: "POST" }),
  updateVersion: () => V(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => V("/api/version/open", { method: "POST" }),
  estimate: () => V("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1) => `${$a().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
  move: (e, t, n) => V(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => V("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => V("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => V(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => V("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => V("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => V(
    "/api/presets/factory"
  ),
  assetsFolder: () => V("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), V("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${$a()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => V("/api/presets"),
  savePreset: (e) => V("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => V(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => V(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  )
};
async function sm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((h, g) => {
      a.onload = () => h(), a.onerror = () => g(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, l = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(i * u), s.height = Math.round(l * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (h) => s.toBlob((g) => h(g), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function sd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await sm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Co = [
  {
    key: "wiwi",
    label: "Wiwi",
    colors: {
      bg: "#f9d7e4",
      panel: "#fff7f2",
      panel2: "#ffffff",
      accent: "#f2a0b7",
      accent2: "#ff8a9b",
      accent3: "#d94f6a",
      text: "#5e4a64",
      textSoft: "#a4889b",
      border: "#f3c6d4",
      danger: "#e96a7e",
      guide: "#e8556b"
    }
  },
  {
    key: "eevee",
    label: "Eevee",
    colors: {
      bg: "#f0e3cf",
      panel: "#fdf6ea",
      panel2: "#ffffff",
      accent: "#c99a5f",
      accent2: "#a9713d",
      accent3: "#8a5a2b",
      text: "#5a4632",
      textSoft: "#a08b70",
      border: "#e0cba8",
      danger: "#c26a4a",
      guide: "#a9713d"
    }
  },
  {
    key: "fidough",
    label: "Fidough",
    colors: {
      bg: "#f6ecd2",
      panel: "#fffaef",
      panel2: "#ffffff",
      accent: "#e8b64c",
      accent2: "#e07a5f",
      accent3: "#b3593f",
      text: "#5c4a2f",
      textSoft: "#a68f66",
      border: "#e8d9a8",
      danger: "#d4694f",
      guide: "#d4694f"
    }
  },
  {
    key: "sprigatito",
    label: "Sprigatito",
    colors: {
      bg: "#ddefdb",
      panel: "#f3faf0",
      panel2: "#ffffff",
      accent: "#8cc98a",
      accent2: "#5fae72",
      accent3: "#3f8f57",
      text: "#3f5a45",
      textSoft: "#88a68e",
      border: "#c2e2c0",
      danger: "#d4696f",
      guide: "#4d8f63"
    }
  },
  {
    key: "maushold",
    label: "Maushold",
    colors: {
      bg: "#eeeae2",
      panel: "#faf8f3",
      panel2: "#ffffff",
      accent: "#b9a98f",
      accent2: "#8f7c62",
      accent3: "#6f5f47",
      text: "#4f463a",
      textSoft: "#9c9081",
      border: "#d9d2c4",
      danger: "#c26a5a",
      guide: "#8f7c62"
    }
  },
  {
    key: "jirachi",
    label: "Jirachi",
    colors: {
      bg: "#fdf3d6",
      panel: "#fffbee",
      panel2: "#ffffff",
      accent: "#f5d75a",
      accent2: "#7fd1c8",
      accent3: "#c98a1e",
      text: "#5d5433",
      textSoft: "#ab9f74",
      border: "#efe3ab",
      danger: "#e07a8a",
      guide: "#5bb8ae"
    }
  },
  {
    key: "espeon",
    label: "Espeon",
    colors: {
      bg: "#e9e0f4",
      panel: "#f7f2fc",
      panel2: "#ffffff",
      accent: "#b79ae0",
      accent2: "#9d7cc9",
      accent3: "#8a5fc0",
      text: "#4f4366",
      textSoft: "#9b8bb0",
      border: "#d4c6e8",
      danger: "#d46a9a",
      guide: "#9d7cc9"
    }
  },
  {
    key: "espeon-shiny",
    label: "Espeon shiny",
    colors: {
      bg: "#e0f0f4",
      panel: "#f1fafc",
      panel2: "#ffffff",
      accent: "#8fd0dd",
      accent2: "#67b7c9",
      accent3: "#2f9aa8",
      text: "#3f5460",
      textSoft: "#8aacb6",
      border: "#c4e2e8",
      danger: "#d46a8a",
      guide: "#4fa3b5"
    }
  },
  {
    key: "umbreon",
    label: "Umbreon",
    colors: {
      bg: "#2e2b3a",
      panel: "#3a3749",
      panel2: "#454157",
      accent: "#f0c94a",
      accent2: "#8f7fd4",
      accent3: "#ffd76a",
      text: "#f0e9dc",
      textSoft: "#a99fc4",
      border: "#524d68",
      danger: "#e07a6a",
      guide: "#f0c94a"
    }
  },
  {
    key: "hippopotas",
    label: "Hippopotas",
    colors: {
      bg: "#efe0c3",
      panel: "#faf2df",
      panel2: "#ffffff",
      accent: "#c8a86a",
      accent2: "#a5854e",
      accent3: "#9a6f36",
      text: "#54432a",
      textSoft: "#a08c66",
      border: "#e0cda0",
      danger: "#c26a4a",
      guide: "#a5854e"
    }
  },
  {
    key: "vaporeon",
    label: "Vaporeon",
    colors: {
      bg: "#d7e8f2",
      panel: "#eff7fb",
      panel2: "#ffffff",
      accent: "#8ab6d9",
      accent2: "#5f96c4",
      accent3: "#3a7fb5",
      text: "#3a4f60",
      textSoft: "#84a2b5",
      border: "#c0daea",
      danger: "#d46a7e",
      guide: "#4a81ad"
    }
  },
  {
    key: "sylveon",
    label: "Sylveon",
    colors: {
      bg: "#f6e3ee",
      panel: "#fdf3f8",
      panel2: "#ffffff",
      accent: "#e8a8c8",
      accent2: "#a8d8e8",
      accent3: "#c95f9a",
      text: "#5e4a5c",
      textSoft: "#b08ea4",
      border: "#f0cddd",
      danger: "#e06a8a",
      guide: "#d47ca8"
    }
  }
];
function _o(e) {
  return Co.find((t) => t.key === e) ?? Co[0];
}
function Us(e) {
  const t = _o(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function ud() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return _o(e);
  } catch {
  }
  return _o("wiwi");
}
const cd = {
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
}, dd = k.createContext("es");
function um({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(dd.Provider, { value: e, children: t });
}
function Nl() {
  return k.useContext(dd);
}
function rt() {
  const e = Nl();
  return (t, n) => {
    let r = e === "en" ? cd[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function cm(e, t, n) {
  return e === "en" ? cd[t] ?? t : t;
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
function pd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function dm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9.5l5 5M21 9.5l-5 5" })
  ] });
}
function br({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function No({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function pm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function fm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Eo({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function mm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function fd({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function md({ size: e }) {
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
function Oa({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function hm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function gm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function vm({ size: e }) {
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
function pa({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Po({ size: e }) {
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
function gd({ size: e }) {
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
  const a = rt(), i = k.useMemo(() => t.map((v) => v.id), [t]), [l, u] = k.useState(/* @__PURE__ */ new Set()), [s, p] = k.useState("escala"), [h, g] = k.useState(100), [m, j] = k.useState(50), [C, y] = k.useState("mayor"), [R, f] = k.useState("");
  k.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), f(""));
  }, [e, i.join(",")]);
  const c = (v) => !l.has(v), d = (v) => u((S) => {
    const I = new Set(S);
    return I.has(v) ? I.delete(v) : I.add(v), I;
  }), w = () => u(
    l.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), x = (v) => {
    const S = v.w_mm_base || 0, I = v.h_mm_base || 0;
    return C === "mayor" ? Math.max(S, I) : C === "menor" ? Math.min(S, I) : 2 * Math.sqrt(Math.max(0, S * I) / Math.PI);
  }, _ = (v) => {
    if (s === "tamano") {
      const S = x(v);
      if (S > 0) return Math.min(10, Math.max(0.05, m / S));
    }
    return Math.min(10, Math.max(0.05, h / 100));
  }, N = (v) => {
    const S = _(v);
    return { w: (v.w_mm_base || 0) * S, h: (v.h_mm_base || 0) * S };
  }, E = async () => {
    let v = 0;
    for (const S of t) {
      if (!c(S.id)) continue;
      const I = _(S) * 100;
      await L.patchAsset(S.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(I * 10) / 10))
      }), v += 1;
    }
    await r(), f(a("{n} elementos ajustados ", { n: v })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((v) => {
          const S = N(v), I = Math.min(98, S.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${v.id}`,
              style: {
                width: `${I}%`,
                maxWidth: `${I}%`,
                aspectRatio: `${S.w || 1} / ${S.h || 1}`,
                opacity: c(v.id) ? 1 : 0.3
              },
              title: `${v.name} · ${S.w.toFixed(1)}×${S.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: L.previewUrl(v.id), alt: "" })
            },
            v.id
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
              onClick: w,
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
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((v) => {
          const S = N(v);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${v.id}`,
              className: c(v.id) ? "sel" : "",
              onClick: () => d(v.id),
              title: v.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: L.previewUrl(v.id), alt: v.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: v.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(v.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  S.w.toFixed(1),
                  "×",
                  S.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            v.id
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
              onClick: () => p("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: s === "tamano" ? "on" : "",
              onClick: () => p("tamano"),
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
                value: String(h),
                onChange: (v) => g(Number(v.target.value))
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
                  value: String(m),
                  onChange: (v) => j(Number(v.target.value))
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
                value: C,
                onChange: (v) => y(v.target.value),
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
          onClick: E,
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
function Pm({ saveSettings: e }) {
  const t = rt(), [n, r] = k.useState(
    {}
  ), [a, i] = k.useState([]), [l, u] = k.useState(!1), [s, p] = k.useState(!1), [h, g] = k.useState(""), [m, j] = k.useState(""), C = () => L.presets().then((c) => i(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  k.useEffect(() => {
    L.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), C();
  }, []);
  const y = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const d = c.slice(8);
          await e(n[d]), j(t("Perfil «{n}» aplicado", {
            n: t(Vs[d] ?? d)
          }));
        } else {
          const d = c.slice(9), w = await L.loadPreset(d);
          await e(w.settings), j(t("Perfil «{n}» cargado", { n: d }));
        }
      } catch {
        j(t("No se pudo aplicar el perfil"));
      }
  }, R = async () => {
    const c = h.trim();
    if (c)
      try {
        const d = await L.savePreset(c);
        i(Array.isArray(d.names) ? d.names : []), g(""), u(!1), j(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        j(t("No se pudo guardar el perfil"));
      }
  }, f = async (c) => {
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
          onChange: (c) => y(c.target.value),
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
            /* @__PURE__ */ o.jsx(Po, { size: 15 }),
            " ",
            t("Guardar perfil")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `chip${s ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => p(!s),
          children: /* @__PURE__ */ o.jsx(pa, { size: 15 })
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
          value: h,
          onChange: (c) => g(c.target.value),
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
      /* @__PURE__ */ o.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => y(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => f(c),
          children: /* @__PURE__ */ o.jsx(fd, { size: 15 })
        }
      )
    ] }, c)) }),
    m && /* @__PURE__ */ o.jsx("div", { className: "hint", children: m })
  ] });
}
function zm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a
}) {
  const i = rt(), [l, u] = k.useState(() => zr(e));
  k.useEffect(() => u(zr(e)), [e]);
  const s = k.useRef(null), p = lm(l), [h, g] = k.useState(""), m = k.useRef(!1), [j, C] = k.useState(""), y = k.useRef(!1), [R, f] = k.useState({ tamano: !1, borde: !1, mini: !1 });
  k.useEffect(() => {
    m.current || g(p.w > 0 ? p.w.toFixed(1) : ""), y.current || C(p.h > 0 ? p.h.toFixed(1) : "");
  }, [p.w, p.h]);
  const c = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, d = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, w = (v) => {
    g(v);
    const S = Number(v.replace(",", "."));
    !Number.isFinite(S) || S <= 0 || c <= 0 || E({ scale_pct: S / c * 100 });
  }, x = (v) => {
    C(v);
    const S = Number(v.replace(",", "."));
    !Number.isFinite(S) || S <= 0 || d <= 0 || E({ scale_pct: S / d * 100 });
  }, _ = (t == null ? void 0 : t.placements.filter((v) => v.asset_id === e.id && v.mini).length) ?? 0, N = (t == null ? void 0 : t.placements.filter((v) => v.asset_id === e.id && !v.mini).length) ?? 0, E = async (v) => {
    a == null || a(), "copies" in v && (v.copies = Math.max(0, v.copies ?? 0)), u((S) => ({ ...S, ...v }));
    try {
      await L.patchAsset(e.id, v);
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
            onClick: () => L.assetsFolder().then((v) => L.abrirCarpeta(v.path)).catch(() => L.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ o.jsx(br, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: i("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var v;
              return (v = s.current) == null ? void 0 : v.click();
            },
            children: /* @__PURE__ */ o.jsx(pm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            ref: s,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (v) => {
              var I;
              const S = (I = v.target.files) == null ? void 0 : I[0];
              if (v.target.value = "", !!S)
                try {
                  const { blob: oe, name: ce } = await sd(S);
                  await L.reemplazar(e.id, oe, ce), await n();
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
            children: /* @__PURE__ */ o.jsx(fm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? i("Restaurar fondo original") : i("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? L.restoreBackground(e.id) : L.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ o.jsx(mm, { size: 16 }) : /* @__PURE__ */ o.jsx(Eo, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: i("Eliminar imagen"),
            onClick: () => L.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ o.jsx(fd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: i("Copias"), children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => E({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => E({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            title: i("Incluir como mini (rellena huecos)"),
            onClick: () => E({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ o.jsx(Oa, { size: 15 }),
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
            onClick: () => f((v) => ({ ...v, tamano: !v.tamano })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.tamano ? "open" : ""}`, children: "›" }),
              i("Tamaño"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                p.w.toFixed(1),
                "×",
                p.h.toFixed(1),
                " mm · ",
                Math.round(l.scale_pct),
                "%"
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
                onChange: (v) => E({ scale_pct: Number(v.target.value) })
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
                value: h,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  m.current = !0, y.current = !1;
                },
                onBlur: () => {
                  m.current = !1, g(p.w > 0 ? p.w.toFixed(1) : "");
                },
                onChange: (v) => w(v.target.value)
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
                  y.current = !0, m.current = !1;
                },
                onBlur: () => {
                  y.current = !1, C(p.h > 0 ? p.h.toFixed(1) : "");
                },
                onChange: (v) => x(v.target.value)
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
            onClick: () => f((v) => ({ ...v, borde: !v.borde })),
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
                onClick: () => E({ offset_mm: Math.max(
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
                onChange: (v) => E({ offset_mm: Number(v.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => E({ offset_mm: Math.min(
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
            ].map(([v, S]) => /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === v ? "on" : ""}`,
                "data-testid": `offset-modo-${v}-${e.id}`,
                onClick: () => E({ offset_modo: v }),
                children: S
              },
              v
            )),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: i("Color del borde"),
                onChange: (v) => E({
                  offset_color: v.target.value,
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
            onClick: () => f((v) => ({ ...v, mini: !v.mini })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.mini ? "open" : ""}`, children: "›" }),
              i("Opciones de mini"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                _
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
              onClick: () => E({ mini_quota: Math.max(
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
              onClick: () => E({ mini_quota: Math.min(
                100,
                Math.round((l.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: i(" {n} minis", { n: _ }) })
        ] }) })
      ] }),
      N > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: i("Colocadas: {n}", { n: N }) }),
      l.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ o.jsx(gd, { size: 14 }),
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
  const u = rt(), s = k.useRef(null), [p, h] = k.useState(!1), [g, m] = k.useState(!1), [j, C] = k.useState(null), y = async (x) => {
    const _ = [];
    for (const N of Array.from(x))
      try {
        const { blob: E, name: v } = await sd(N);
        _.push(zr(await L.upload(E, v)));
      } catch (E) {
        console.error(E);
      }
    await r(), _.length > 1 && C(_);
  }, R = n.usar_minis, f = {
    90: "libre",
    libre: "no",
    no: "90"
  }, c = {
    90: "90°",
    libre: u("libre"),
    no: u("fijo")
  }, d = e.some((x) => x.demo), w = n.modo === "experto";
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "icon-btn",
          "data-testid": "btn-minimizar-imagenes",
          "data-tip": u(g ? "Desplegar el panel de imágenes" : "Minimizar el panel de imágenes"),
          onClick: () => m(!g),
          children: /* @__PURE__ */ o.jsx("span", { className: `chev ${g ? "open" : ""}`, children: "›" })
        }
      ),
      /* @__PURE__ */ o.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    g && /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Pulsa la flecha para desplegar el panel.") }),
    !g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
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
              /* @__PURE__ */ o.jsx(Oa, { size: 15 }),
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
              /* @__PURE__ */ o.jsx(No, { size: 15 }),
              " ",
              u("Auto")
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `chip${w ? " on" : ""}`,
            "data-testid": "chip-modo",
            "data-tip": u("Modo rápido (lo esencial) o experto (todo el control)"),
            onClick: () => a({
              modo: w ? "rapido" : "experto"
            }),
            children: u(w ? "Experto" : "Rápido")
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "chip",
            "data-testid": "chip-rotacion",
            "data-tip": u("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo"),
            onClick: () => a({
              rotacion: f[n.rotacion] ?? "90"
            }),
            children: [
              /* @__PURE__ */ o.jsx(hd, { size: 15 }),
              " ",
              c[n.rotacion] ?? "90°"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(Pm, { saveSettings: a }),
      d && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "aviso-demo", children: u("Estas figuras son de ejemplo: desaparecen solas al añadir tus imágenes.") }),
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: `dropzone${p ? " over" : ""}`,
          "data-testid": "dropzone",
          onClick: () => {
            var x;
            return (x = s.current) == null ? void 0 : x.click();
          },
          onDragOver: (x) => {
            x.preventDefault(), h(!0);
          },
          onDragLeave: () => h(!1),
          onDrop: (x) => {
            x.preventDefault(), h(!1), x.dataTransfer.files.length && y(x.dataTransfer.files);
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
                onChange: (x) => {
                  x.target.files && y(x.target.files), x.target.value = "";
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((x) => /* @__PURE__ */ o.jsx(
        zm,
        {
          a: x,
          result: t,
          onChange: r,
          onEditarContorno: i,
          onAntesDeCambiar: l
        },
        x.id
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
          onClose: () => C(null),
          onDone: async () => {
            await r();
          }
        }
      )
    ] })
  ] });
}
function vd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = rt(), [i, l] = k.useState(null), [u, s] = k.useState("");
  k.useEffect(() => {
    e && p(r || "");
  }, [e]);
  const p = async (h = "") => {
    s("");
    try {
      l(await L.fsList(h));
    } catch (g) {
      s(g.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (h) => h.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    u && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => p(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((h) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => p(`${i.path}/${h}`.replace("//", "/")),
          children: h
        },
        h
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
  const p = t.length > 0 && t.every((g) => g.startsWith("data:")), h = [
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
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((g) => /* @__PURE__ */ o.jsx("li", { title: g, children: g.split(/[\\/]/).pop() }, g)) }),
      !p && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      p && /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      p ? t.map((g, m) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${m}`,
          href: g,
          download: `crycat_pagina-${String(m + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(br, { size: 15 }),
            " ",
            l("Descargar página {n}", { n: m + 1 })
          ]
        },
        m
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(br, { size: 15 }),
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
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: h.map((g, m) => /* @__PURE__ */ o.jsx("li", { children: g }, m)) }),
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
function Tm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: l, onJob: u, onRecalc: s, editando: p, onFinEdicion: h, onDeshacer: g, onRehacer: m, puedeDeshacer: j, puedeRehacer: C }) {
  const y = rt(), R = Nl(), [f, c] = k.useState(1), [d, w] = k.useState({ x: 0, y: 0 }), [x, _] = k.useState(null), [N, E] = k.useState(() => Date.now()), [v, S] = k.useState(null), [I, oe] = k.useState(null), [ce, Re] = k.useState(!1), [at, je] = k.useState(2), [Ee, b] = k.useState([]), [O, F] = k.useState(""), [q, W] = k.useState(/* @__PURE__ */ new Set()), T = k.useRef(null), Q = k.useRef(null), Pe = R === "en" ? om : im, Be = k.useMemo(
    () => Pe[Math.floor(Math.random() * Pe.length)],
    [Pe]
  ), Ye = r.saveName.trim() || Be;
  k.useEffect(() => {
    E(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const pt = (t == null ? void 0 : t.pages) ?? 0, Vn = !!t && t.efficiency < 0.8;
  k.useEffect(() => {
    const z = T.current;
    if (!z) return;
    const A = (D) => {
      D.preventDefault(), D.stopPropagation();
      const fe = z.getBoundingClientRect(), Ue = D.clientX - fe.left, ht = D.clientY - fe.top;
      c((ot) => {
        const ve = D.deltaY < 0 ? 1.05 : 0.9523809523809523, re = Math.min(12, Math.max(0.05, ot * ve)), zt = re / ot;
        return w((bt) => ({ x: Ue - (Ue - bt.x) * zt, y: ht - (ht - bt.y) * zt })), re;
      });
    };
    return z.addEventListener("wheel", A, { passive: !1 }), () => z.removeEventListener("wheel", A);
  }, []);
  const $ = (z) => {
    if (z.target.closest(".item-box")) return;
    Q.current = { x: z.clientX - d.x, y: z.clientY - d.y };
    const A = (fe) => {
      Q.current && w({ x: fe.clientX - Q.current.x, y: fe.clientY - Q.current.y });
    }, D = () => {
      Q.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", D);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", D);
  };
  k.useEffect(() => {
    const z = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((D) => Math.min(12, D * 1.08)) : A.key === "-" || A.key === "_" ? c((D) => Math.max(0.05, D / 1.08)) : A.key === "0" ? (c(1), w({ x: 0, y: 0 })) : A.key === "Escape" ? _(null) : A.key === "g" ? a((D) => ({ ...D, guidesVisible: !D.guidesVisible })) : A.key === "t" && a((D) => D.eyeFosforito ? { ...D, eyeFosforito: !1, eyeTransparent: !1 } : D.eyeTransparent ? { ...D, eyeTransparent: !1, eyeFosforito: !0 } : { ...D, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [a]);
  const B = k.useRef(null), ft = k.useRef(null), mt = (z, A) => {
    z.preventDefault(), z.stopPropagation();
    const D = z.currentTarget.closest(".page-box");
    if (!D || !t) return;
    const fe = t.page_mm[0] / D.clientWidth, Ue = {
      uid: A.uid,
      startX: z.clientX,
      startY: z.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: fe
    };
    B.current = Ue, ft.current = { x: A.x, y: A.y }, S(Ue), oe({ uid: A.uid, x: A.x, y: A.y });
    const ht = (ve) => {
      const re = B.current;
      if (!re) return;
      const zt = (ve.clientX - re.startX) * re.mmPerPx / f, bt = (ve.clientY - re.startY) * re.mmPerPx / f;
      ft.current = { x: re.origX + zt, y: re.origY + bt }, oe({ uid: re.uid, x: re.origX + zt, y: re.origY + bt });
    }, ot = (ve) => {
      window.removeEventListener("mousemove", ht), window.removeEventListener("mouseup", ot);
      const re = B.current;
      if (B.current = null, !re) return;
      const zt = (ve.clientX - re.startX) * re.mmPerPx / f, bt = (ve.clientY - re.startY) * re.mmPerPx / f;
      S(null), oe(null), !(Math.abs(zt) < 0.5 && Math.abs(bt) < 0.5) && Ir(re.uid, re.origX + zt, re.origY + bt);
    };
    window.addEventListener("mousemove", ht), window.addEventListener("mouseup", ot);
  }, Ir = async (z, A, D) => {
    try {
      const fe = await L.move(z, A, D);
      fe.job ? u(fe.job) : await l();
    } catch {
      await l();
    } finally {
      E(Date.now());
    }
  }, Pt = async (z) => {
    const A = await L.unpin(z);
    u(A);
  };
  k.useEffect(() => {
    if (!p) {
      b([]), F(""), W(/* @__PURE__ */ new Set());
      return;
    }
    L.blobs(p.id).then((z) => {
      b(z.blobs), je(z.union_mm ?? 2), F(z.preview_png), W(new Set(z.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      b([]), F("");
    });
  }, [p]);
  const El = async () => {
    if (p)
      try {
        await L.limpiarContorno(p.id, Array.from(q));
      } finally {
        await (h == null ? void 0 : h());
      }
  }, wd = (z) => {
    W((A) => {
      const D = new Set(A);
      return D.has(z) ? D.delete(z) : D.add(z), D;
    });
  }, [it, Jt] = k.useState(null), kd = async () => {
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
    const z = document.createElement("iframe");
    z.setAttribute("aria-hidden", "true"), z.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", z.src = "/api/print.pdf", z.onload = () => {
      var A, D;
      try {
        (A = z.contentWindow) == null || A.focus(), (D = z.contentWindow) == null || D.print();
      } finally {
        window.setTimeout(() => z.remove(), 6e4);
      }
    }, document.body.appendChild(z);
  }, jd = async () => {
    try {
      const z = await L.export(Ye);
      Jt({ files: z.files, folder: z.folder });
    } catch (z) {
      Jt({ files: [], folder: "", error: z.message });
    }
  }, Sd = () => {
    Re(!0);
  }, Cd = async (z) => {
    try {
      const A = await L.export(Ye, z);
      Jt({ files: A.files, folder: A.folder });
    } catch (A) {
      Jt({ files: [], folder: "", error: A.message });
    }
  }, Pl = (t == null ? void 0 : t.poly_mm) ?? [], [_d, Nd] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Ed, Pd] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], fn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Ed, ni = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Pd, zl = n.lienzo === "pagina" ? 0 : _d, bl = n.lienzo === "pagina" ? 0 : Nd, Ml = Pl.length ? "M" + Pl.map(([z, A]) => `${z - zl},${A - bl}`).join(" L") + " Z" : "", zd = (z) => {
    const A = (t == null ? void 0 : t.placements.filter((D) => D.page === z)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (D) => {
          pt > 1 && x === null && !D.target.closest(".item-box") && _(z);
        },
        "data-testid": `page-${z}`,
        children: [
          /* @__PURE__ */ o.jsx("img", { className: "sheet", src: L.pageUrl(z, N, n.simular_impresion === !0, r.verBordes), alt: y("Página {i}", { i: z + 1 }), draggable: !1 }),
          r.guidesVisible && Ml && /* @__PURE__ */ o.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${fn} ${ni}`, preserveAspectRatio: "none", children: /* @__PURE__ */ o.jsx(
            "path",
            {
              d: Ml,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, fn / 250),
              strokeDasharray: `${fn / 55} ${fn / 85}`,
              opacity: 0.85
            }
          ) }),
          A.map((D) => {
            const fe = e.find((ve) => ve.id === D.asset_id), Ue = (I == null ? void 0 : I.uid) === D.uid ? I : null, ht = ((Ue ? Ue.x : D.x) - zl) / (fn || 1) * 100, ot = ((Ue ? Ue.y : D.y) - bl) / (ni || 1) * 100;
            return /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `item-box ${D.pinned ? "pinned" : ""} ${(v == null ? void 0 : v.uid) === D.uid ? "dragging" : ""}`,
                style: {
                  left: `${ht}%`,
                  top: `${ot}%`,
                  width: `${D.w / (fn || 1) * 100}%`,
                  height: `${D.h / (ni || 1) * 100}%`
                },
                title: (fe == null ? void 0 : fe.name) ?? "",
                onMouseDown: (ve) => mt(ve, D),
                onContextMenu: (ve) => {
                  ve.preventDefault(), Pt(D.uid);
                },
                "data-testid": `item-${D.uid}`,
                children: D.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
              },
              D.uid
            );
          })
        ]
      },
      z
    );
  }, bd = x !== null ? [x] : Array.from({ length: pt }, (z, A) => A);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-deshacer",
            title: y("Deshacer (Ctrl+Z)"),
            onClick: () => g(),
            disabled: !j,
            children: [
              /* @__PURE__ */ o.jsx(hm, { size: 15 }),
              " ",
              y("Deshacer")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-rehacer",
            title: y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => m(),
            disabled: !C,
            children: [
              /* @__PURE__ */ o.jsx(gm, { size: 15 }),
              " ",
              y("Rehacer")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          title: y("Ver los contornos reales: en un color la silueta que se corta (con borde y cambios) y en otro el dibujo sin borde"),
          onClick: () => a((z) => ({ ...z, verBordes: !z.verBordes })),
          children: [
            /* @__PURE__ */ o.jsx(md, { size: 15 }),
            " ",
            r.verBordes ? y("Bordes") : y("Sin bordes")
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          title: y("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final"),
          onClick: () => a((z) => ({ ...z, guidesVisible: !z.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(vm, { size: 15 }),
            " ",
            r.guidesVisible ? y("Guías") : y("Sin guías")
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          title: y("Forzar la recolocación de todo (ignora los elementos fijados)"),
          onClick: () => s(Vn ? "rapido" : "optimo"),
          children: y(Vn ? " Recalcular rápido" : " Recalcular óptimo")
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        pt > 1 && x === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 4 })), children: "4" })
        ] }),
        x !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => _(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-ojo",
            title: y("Fondo: blanco  transparente  verde fosforito (tecla T)"),
            onClick: () => a((z) => z.eyeFosforito ? { ...z, eyeFosforito: !1, eyeTransparent: !1 } : z.eyeTransparent ? { ...z, eyeTransparent: !1, eyeFosforito: !0 } : { ...z, eyeTransparent: !0, eyeFosforito: !1 }),
            children: (r.eyeFosforito || r.eyeTransparent, "")
          }
        ),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((z) => Math.min(12, z * 1.08)), title: y("Acercar (+)"), children: /* @__PURE__ */ o.jsx(ym, { size: 15 }) }),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((z) => Math.max(0.05, z / 1.08)), title: y("Alejar (−)"), children: /* @__PURE__ */ o.jsx(xm, { size: 15 }) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              c(1), w({ x: 0, y: 0 });
            },
            title: y("Volver al zoom original (tecla 0)"),
            children: "100%"
          }
        )
      ] })
    ] }),
    p ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: L.previewUrl(p.id) + `?t=${N}`,
            alt: p.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: p && Ee.filter((z) => !z.principal).map((z, A) => {
          const [D, fe, Ue, ht] = z.bbox, ot = p.w_px || 1, ve = p.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${q.has(z.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: z.area_px,
                accion: q.has(z.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${D / ot * 100}%`,
                top: `${fe / ve * 100}%`,
                width: `${(Ue - D) / ot * 100}%`,
                height: `${(ht - fe) / ve * 100}%`
              },
              onClick: () => wd(z.id)
            },
            z.id
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
              title: y("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: at }),
              onClick: async () => {
                p && (await L.patchAsset(p.id, {
                  offset_mm: at,
                  offset_modo: "unir_curvo"
                }), await (h == null ? void 0 : h()));
              },
              children: y("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: El,
              children: y(
                "Quitar marcados ({n})",
                { n: q.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: y("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: T,
        className: `canvas ${v ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: $,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${d.x}px, ${d.y}px) scale(${f})` },
            children: [
              pt === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${x !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: bd.map(zd)
                }
              )
            ]
          }
        )
      }
    ),
    p ? /* @__PURE__ */ o.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: El,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => h == null ? void 0 : h(),
          children: y("Descartar")
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
          onChange: (z) => a((A) => ({ ...A, saveName: z.target.value }))
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: y("Abrir la carpeta de guardado en el explorador"),
            "aria-label": y("Abrir carpeta de guardado"),
            onClick: () => L.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(br, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: jd, children: y("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: Sd, children: y("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: kd,
            disabled: pt === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      vd,
      {
        open: ce,
        initial: n.carpeta_export,
        onClose: () => Re(!1),
        onPick: Cd
      }
    ),
    /* @__PURE__ */ o.jsx(
      Mm,
      {
        open: !!it,
        files: (it == null ? void 0 : it.files) ?? [],
        folder: (it == null ? void 0 : it.folder) ?? "",
        error: it == null ? void 0 : it.error,
        onOpenFolder: (z) => void L.fsOpen(z).catch(() => {
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
        onChange: (p) => r(Math.min(99, Math.max(1, Number(p.target.value))))
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
        onChange: (p) => {
          if (u(p.target.value), !n) return;
          const h = Number(p.target.value);
          isFinite(h) && h > 0 && r(Math.min(99, Math.max(
            1,
            Math.round(h / n * 1e3) / 10
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
function gt({ id: e, title: t, open: n, toggle: r, children: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
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
  }), [s, p] = k.useState(!1), h = k.useMemo(() => {
    const d = (n ?? []).filter((x) => x.mini_enabled);
    return (d.length ? d : n ?? []).slice().sort((x, _) => Math.min(_.w_mm, _.h_mm) - Math.min(x.w_mm, x.h_mm))[0] ?? null;
  }, [n]), g = h ? Math.min(h.w_mm, h.h_mm) : 0, m = e.modo === "experto", j = ({ children: d }) => m ? /* @__PURE__ */ o.jsx(o.Fragment, { children: d }) : null, C = (d) => u((w) => ({ ...w, [d]: !w[d] })), y = (d) => t(d), R = k.useRef(null), f = (d, w, x, _, N = 1, E = "", v) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(d) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "number",
          min: x,
          max: _,
          step: N,
          "data-testid": `set-${w}`,
          value: String(e[w]),
          onChange: (S) => {
            const I = Number(S.target.value);
            Number.isNaN(I) || y({ [w]: I });
          }
        }
      ),
      E && /* @__PURE__ */ o.jsx("span", { className: "hint", children: E }),
      v
    ] })
  ] }), c = (d, w, x, _) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(d) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${w}`,
        value: String(e[w]),
        onChange: (N) => y({ [w]: N.target.value }),
        children: x.map(([N, E]) => /* @__PURE__ */ o.jsx("option", { value: N, children: r(E) }, N))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: "panel-head",
        "data-testid": "panel-ajustes",
        onClick: () => i((d) => !d),
        children: [
          /* @__PURE__ */ o.jsx("span", { className: `chev ${a ? "open" : ""}`, children: "›" }),
          /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
          /* @__PURE__ */ o.jsx("span", { className: "fold-val", children: e.tema })
        ]
      }
    ),
    !a && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Pulsa para desplegar los ajustes") }),
    a && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !m && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo rápido: solo lo esencial. Cambia a Experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(gt, { id: "general", title: r("General"), open: !0, toggle: () => {
      }, children: [
        f("Espacio entre elementos", "espacio_mm", 0, 20, 0.5, "mm"),
        f("Margen de seguridad a los límites", "margen_mm", 0, 20, 0.5, "mm"),
        c("Rotación admitida", "rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        /* @__PURE__ */ o.jsx(j, { children: f("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              "data-testid": "set-pagina",
              value: e.pagina,
              onChange: (d) => {
                const w = d.target.value, x = am[w];
                y(x ? { pagina: w, pagina_w: x[0], pagina_h: x[1] } : { pagina: w });
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
                onChange: (d) => y({ pagina_w: Number(d.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-h",
                value: String(e.pagina_h),
                onChange: (d) => y({ pagina_h: Number(d.target.value) })
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
        ]),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-usar-minis",
              checked: e.usar_minis,
              onChange: (d) => y({ usar_minis: d.target.checked })
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
                onChange: (d) => y({ auto_recalcular: d.target.checked })
              }
            ),
            r("Recalcular automáticamente con cada cambio")
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(gt, { id: "minis", title: r("Minis"), open: l.minis, toggle: C, children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
        f("Tamaño mínimo", "mini_min_mm", 1, 50, 0.5, "mm"),
        /* @__PURE__ */ o.jsxs(j, { children: [
          f(
            "Tamaño máximo del mini (% del original)",
            "mini_max_rescale",
            10,
            100,
            5,
            "%"
          ),
          c("Rotaciones admitidas", "mini_rotacion", [
            ["no", "No girar"],
            ["90", "Giros de 0º / 90º / 180º / 270º"],
            ["libre", "Cualquier ángulo"]
          ]),
          c("Selección de tamaños", "mini_tamanos", [
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
                onChange: (d) => y({ mini_usar_lista: d.target.checked })
              }
            ),
            r("Usar lista de tamaños (en vez de los automáticos)")
          ] }) }),
          e.mini_usar_lista && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
            /* @__PURE__ */ o.jsx("label", { children: r("Tamaños deseados (% y tamaño final)") }),
            /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
              (e.mini_tamanos_lista ?? []).map((d, w) => /* @__PURE__ */ o.jsx(
                Lm,
                {
                  i: w,
                  valor: d,
                  refBase: g,
                  t: r,
                  onPct: (x) => {
                    const _ = [...e.mini_tamanos_lista ?? []];
                    _[w] = x, y({ mini_tamanos_lista: _ });
                  },
                  onQuitar: () => y({
                    mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                      (x, _) => _ !== w
                    )
                  })
                },
                w
              )),
              /* @__PURE__ */ o.jsx(
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
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: h ? r(
              "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
              { nombre: h.name, mm: g.toFixed(1) }
            ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(gt, { id: "optimizacion", title: r("Optimización"), open: l.optimizacion, toggle: C, children: [
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
        /* @__PURE__ */ o.jsxs(j, { children: [
          /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "checkbox",
                "data-testid": "set-opt_tiempo_auto",
                checked: e.opt_tiempo_auto !== !1,
                onChange: (d) => y({ opt_tiempo_auto: d.target.checked })
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
          ) }) : f("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
      ] }),
      /* @__PURE__ */ o.jsxs(gt, { id: "imagen", title: r("Imagen"), open: l.imagen, toggle: C, children: [
        f("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
        c("Espacio de color de impresión", "espacio_color", [
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
                onChange: (d) => y({ simular_impresion: d.target.checked })
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
                  onChange: (d) => y({ sim_cmyk: d.target.checked })
                }
              ),
              r("Simular el recorte de CMYK (amarillea azules/verdes)")
            ] }),
            f("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
            f("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
            f("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
          ] })
        ] }),
        c("Formato de color de salida", "color_formato", [
          ["rgba", "PNG con transparencia (recomendado)"],
          ["rgb", "PNG con fondo blanco"]
        ]),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-chequear-lineas",
              checked: e.chequear_lineas,
              onChange: (d) => y({ chequear_lineas: d.target.checked })
            }
          ),
          r("Comprobación de líneas anómalas")
        ] }) }),
        f(
          "DPI de importación en Design Space",
          "dpi_importacion",
          72,
          600,
          1,
          "ppp"
        ),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
        c("Lienzo del archivo final", "lienzo", [
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
                onClick: () => p(!0),
                children: r("Elegir carpeta…")
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Se guarda para la próxima vez que abras CryCat.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(gt, { id: "offset", title: r("Offset / borde"), open: l.offset, toggle: C, children: [
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-offset-activo",
              checked: e.offset_activo === !0,
              onChange: (d) => y({ offset_activo: d.target.checked })
            }
          ),
          r("Añadir borde a todos los elementos")
        ] }) }),
        e.offset_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          f("Grosor del borde", "offset_mm", 0.1, 20, 0.1, "mm"),
          c("Tipo de borde", "offset_modo", [
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
                  onChange: (d) => y({ offset_color: d.target.value })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "hint", children: e.offset_color })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
        ] })
      ] }),
      m && /* @__PURE__ */ o.jsxs(gt, { id: "corte", title: r("Estimación de corte"), open: l.corte, toggle: C, children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: Gs(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Bs[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Bs[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        f("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        f("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        f("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        f("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      m && /* @__PURE__ */ o.jsxs(
        gt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: l.historial,
          toggle: C,
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
                  onChange: (d) => y({ historial: d.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              f("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (d) => y({ hist_tamano: d.target.checked })
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
                    onChange: (d) => y({ hist_copias: d.target.checked })
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
                    onChange: (d) => y({ hist_borde: d.target.checked })
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
                    onChange: (d) => y({ hist_minis: d.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(gt, { id: "visualizacion", title: r("Visualización"), open: l.visualizacion, toggle: C, children: [
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
          /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Co.map((d) => /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `theme-chip ${e.tema === d.key ? "active" : ""}`,
              "data-testid": `tema-${d.key}`,
              onClick: () => t({ tema: d.key }),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: d.colors.accent } }),
                /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: d.colors.accent2 } }),
                d.label
              ]
            },
            d.key
          )) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-ver-guias",
              checked: e.ver_guias,
              onChange: (d) => t({ ver_guias: d.target.checked })
            }
          ),
          r("Mostrar guías de límites al inicio")
        ] }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
          /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ o.jsx("img", { src: L.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
            /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
              var d;
              return (d = R.current) == null ? void 0 : d.click();
            }, children: r("Cargar nuevo icono") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: R,
                type: "file",
                hidden: !0,
                accept: "image/*",
                onChange: (d) => {
                  var x;
                  const w = (x = d.target.files) == null ? void 0 : x[0];
                  w && L.setIcon(w).then(() => {
                    window.location.reload();
                  }), d.target.value = "";
                }
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
        ] })
      ] }),
      m && /* @__PURE__ */ o.jsxs(gt, { id: "extras", title: r("Extras"), open: l.extras, toggle: C, children: [
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-activo",
              checked: e.pikmin_activo !== !1,
              onChange: (d) => y({ pikmin_activo: d.target.checked })
            }
          ),
          r("Mostrar Pikmin de vez en cuando")
        ] }) }),
        f("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido",
              checked: e.pikmin_sonido !== !1,
              onChange: (d) => y({ pikmin_sonido: d.target.checked })
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
              onChange: (d) => y({ pikmin_sonido_morir: d.target.checked })
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
              onChange: (d) => t({ comprobar_versiones: d.target.checked })
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
      vd,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => p(!1),
        onPick: (d) => t({ carpeta_export: d })
      }
    )
  ] });
}
const xt = (e) => (globalThis.__crycatAssets || "") + e;
function qs(e) {
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
  onEasterEgg: p,
  onAyuda: h,
  onReportar: g
}) {
  var q, W;
  const m = rt(), j = Nl(), [C, y] = k.useState([]), [R, f] = k.useState(0), [c, d] = k.useState(null), [w, x] = k.useState(!1), [_, N] = k.useState(""), E = k.useRef(!1), v = k.useRef([]);
  k.useEffect(() => {
    fetch("/api/funmsgs").then((T) => T.ok ? T.json() : { msgs: [] }).then((T) => y(T.msgs ?? [])).catch(() => {
    });
  }, []), k.useEffect(() => {
    let T = !0;
    return L.version().then((Q) => {
      T && (d(Q), !Q.comprobado && !E.current && (E.current = !0, L.checkVersion().then((Pe) => T && d(Pe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      T = !1;
    };
  }, []);
  const S = ((q = c == null ? void 0 : c.actualizacion) == null ? void 0 : q.estado) === "descargando" || ((W = c == null ? void 0 : c.actualizacion) == null ? void 0 : W.estado) === "instalando";
  k.useEffect(() => {
    if (!S) return;
    const T = setInterval(() => {
      L.version().then(d).catch(() => {
      });
    }, 700);
    return () => clearInterval(T);
  }, [S]);
  const I = !!(e && !e.done);
  k.useEffect(() => {
    if (!I) return;
    const T = setInterval(() => f((Q) => Q + 1), 1200);
    return () => clearInterval(T);
  }, [I]);
  const oe = C.length ? C : [
    m("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], ce = k.useMemo(() => {
    if (_) return _;
    if (S) {
      const T = c == null ? void 0 : c.actualizacion;
      if ((T == null ? void 0 : T.estado) === "instalando") return m("Instalando y reiniciando…");
      const Q = (T == null ? void 0 : T.progreso) != null ? Math.round(T.progreso) : null;
      return Q != null ? m("Descargando… {p}%", { p: Q }) : (T == null ? void 0 : T.mensaje) || m("Descargando actualización…");
    }
    if (I)
      return oe[R % oe.length];
    if (e && e.status === "error") return e.message || "Error";
    if (n && n.pages > 0) {
      const T = Math.round(n.efficiency * 100);
      return m(
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
    return m("Listo para empezar");
  }, [_, S, I, e, oe, R, n, m, c]), Re = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), at = k.useMemo(() => {
    const T = e == null ? void 0 : e.eta_s;
    return !I || T === void 0 || T === null || T <= 0.5 ? "" : m(" · {x} restante", { x: qs(T) });
  }, [e == null ? void 0 : e.eta_s, I, m]), je = k.useMemo(() => !r || !r.segundos ? "" : qs(r.segundos), [r]), Ee = async () => {
    x(!0), N("");
    try {
      const T = await L.checkVersion();
      d(T), T.error ? N(m("Sin conexión")) : T.hay_nueva || N(m("Estás en la última versión"));
    } catch {
      N(m("Sin conexión"));
    } finally {
      x(!1);
    }
  }, b = async () => {
    N("");
    try {
      const T = await L.updateVersion();
      T.ok ? N(m("Instalando y reiniciando…")) : T.modo === "dev" && T.url ? (N(m("Modo desarrollo: se actualiza con git")), await L.openReleases().catch(() => {
      })) : N(T.mensaje || m("No se pudo actualizar")), L.version().then(d).catch(() => {
      });
    } catch {
      N(m("No se pudo actualizar"));
    }
  }, F = !!(c != null && c.hay_nueva && !I && !S) ? m("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ o.jsx(
        "img",
        {
          src: L.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: m("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const T = Date.now();
            v.current = [...v.current, T].filter((Q) => T - Q < 2500), v.current.length >= 5 && (v.current = [], N(m("¡Fiesta Pikmin!")), window.setTimeout(() => N(""), 4e3), p == null || p());
          }
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      /* @__PURE__ */ o.jsx("span", { className: "msg", children: ce }),
      !!n && n.pages > 1 && /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: m("No cabe todo en una página: se usarán varias"),
          children: m("No cabe en una página: {n} páginas", { n: n.pages })
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
            title: m("Pensando…"),
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
          "data-tip": m("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => h == null ? void 0 : h(),
          children: [
            /* @__PURE__ */ o.jsx(_m, { size: 15 }),
            " ",
            m("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "app-info reportar",
          "data-testid": "btn-reportar",
          "data-tip": m("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ o.jsx(gd, { size: 15 }),
            " ",
            m("Reportar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          "data-tip": m("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ o.jsx(Nm, { size: 15 }),
            " ",
            m("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: m("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ o.jsx(km, { size: 15 })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: m("Idioma"),
          onClick: () => s == null ? void 0 : s(j === "es" ? "en" : "es"),
          children: j.toUpperCase()
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: m("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !S && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: F || m("Hay una versión nueva"),
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
                title: m("Comprobar versiones"),
                onClick: Ee,
                disabled: w,
                children: w ? "…" : /* @__PURE__ */ o.jsx(Cm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: m("Descargar e instalar la nueva versión"),
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
            title: m(i ? "Activar sonido" : "Silenciar"),
            "aria-label": m(i ? "Activar sonido" : "Silenciar"),
            onClick: () => u == null ? void 0 : u(!i),
            children: i ? /* @__PURE__ */ o.jsx(dm, {}) : /* @__PURE__ */ o.jsx(pd, {})
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
            title: m("Volumen"),
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
          title: m(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: m("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            m("Corte"),
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
], Om = "/pikmin_bloom/", Hs = "/pikmin/alma.png", Fm = "/sonidos/pikmin.mp3", Bm = "/sonidos/pikmin_morir.mp3";
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
function Vm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: l = !1,
  minDelay: u,
  maxDelay: s,
  fuentes: p
}) {
  const h = Um(p), [g, m] = k.useState([]), j = k.useRef(void 0), C = k.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = k.useRef(l);
  y.current = l;
  const R = Math.max(5e3, t * 6e4), f = (x) => {
    if (!(!n || i))
      try {
        const _ = new Audio(xt(x ? Bm : Fm));
        _.volume = Math.min(1, Math.max(0, a)), _.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const x = r && Math.random() < 0.25, _ = x ? xt(Hs) : h[Math.floor(Math.random() * h.length)] ?? xt(Hs);
    m((N) => [...N, {
      src: _,
      left: 3 + Math.random() * 92,
      key: Date.now() + N.length,
      morir: x,
      estado: "paseando"
    }]), f(x);
  }, d = () => {
    if (!e) return;
    const x = u ?? Math.round(R * 0.5), _ = s ?? Math.round(R * 1.5), N = x + Math.random() * Math.max(1, _ - x);
    j.current = window.setTimeout(c, N);
  };
  k.useEffect(() => {
    if (!e) {
      window.clearTimeout(j.current), m([]);
      return;
    }
    return d(), () => window.clearTimeout(j.current);
  }, [e, t, n, r, a, i, h]), k.useEffect(() => {
    const x = () => {
      C.current = document.visibilityState === "hidden", !C.current && y.current && window.setTimeout(() => {
        m((_) => _.length ? (f(!1), _.map((N) => ({ ...N, estado: "festejando" }))) : _), window.setTimeout(() => {
          m([]), d();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", x), () => document.removeEventListener("visibilitychange", x);
  }, []);
  const w = (x) => {
    if (y.current && C.current) {
      m((_) => _.map((N) => N.key === x ? { ...N, estado: "quieto" } : N));
      return;
    }
    m((_) => _.filter((N) => N.key !== x)), d();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: g.map((x) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${x.estado}${x.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": x.estado,
      "data-morir": x.morir ? "1" : "0",
      style: { left: `${x.left}%` },
      onAnimationEnd: () => w(x.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: x.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => w(x.key)
        }
      )
    },
    x.key
  )) });
}
const Ws = "crycat_bienvenida_v2";
function Gm() {
  const [e, t] = k.useState(!1);
  return k.useEffect(() => {
    try {
      localStorage.getItem(Ws) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Ws, "1");
    } catch {
    }
    t(!1);
  } };
}
function qm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = rt(), [a, i] = k.useState("inicio");
  if (!e) return null;
  const l = [
    [
      /* @__PURE__ */ o.jsx(Eo, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ o.jsx(pa, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ o.jsx(Oa, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ o.jsx(No, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(Po, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ o.jsx(Eo, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ o.jsx(md, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ o.jsx(Oa, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ o.jsx(No, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ o.jsx(hd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(pa, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(Po, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(wm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(pd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ o.jsx(pa, { size: 18 }),
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
  ], p = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: p[a] }),
    a === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: s.map((h, g) => /* @__PURE__ */ o.jsx("li", { children: h }, g)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? l : u).map(([h, g, m], j) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: h }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: g }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: m })
      ] })
    ] }, j)) }),
    a === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ o.jsx(br, { size: 15 }),
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
  const i = rt(), [l, u] = k.useState(""), [s, p] = k.useState(""), [h, g] = k.useState(""), [m, j] = k.useState(!0), [C, y] = k.useState(!0), [R, f] = k.useState(!0), [c, d] = k.useState(!1);
  k.useEffect(() => {
    e && (L.version().then((v) => u(v.actual)).catch(() => {
    }), d(!1));
  }, [e]);
  const w = () => (globalThis.__crycatErrores ?? []).map(
    (S) => `- [${S.t}] ${S.msg} (${S.donde || "?"})`
  );
  if (!e) return null;
  const x = () => {
    var oe, ce;
    const v = navigator.userAgent, S = !!globalThis.__crycatBase, I = [
      `- CryCat: v${l || "?"}`,
      `- Modo: ${S ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${v}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((oe = window.screen) == null ? void 0 : oe.width) ?? "?"}x${((ce = window.screen) == null ? void 0 : ce.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && I.push(`- Elementos: ${a.pages} página(s)`), r && I.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), I.join(`
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
`) : "", N = () => {
    const v = [
      "### Qué pasó",
      s.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      h.trim() || "1. …",
      ""
    ];
    m && v.push("### Entorno", x(), ""), C && n && v.push("### Ajustes", _(), "");
    const S = w();
    return R && S.length && v.push("### Errores recogidos", S.join(`
`), ""), v.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), v.join(`
`);
  }, E = () => {
    const v = `[Bug] ${s.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, S = `${Hm}/issues/new?` + new URLSearchParams({
      title: v,
      body: N(),
      labels: "bug"
    }).toString();
    window.open(S, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: Wm.map(([v, S]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${v}`,
        onClick: () => p((I) => (I ? I + `
` : "") + S),
        children: i(v)
      },
      v
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
          onChange: (v) => p(v.target.value)
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
          value: h,
          placeholder: i("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (v) => g(v.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: m,
          onChange: (v) => j(v.target.checked)
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
          checked: C,
          onChange: (v) => y(v.target.checked)
        }
      ),
      i("Incluir mis ajustes actuales")
    ] }),
    w().length > 0 && /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: R,
          onChange: (v) => f(v.target.checked)
        }
      ),
      i(
        "Incluir los {n} errores recogidos de la consola",
        { n: w().length }
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

${h}

${N()}`
              ), d(!0);
            } catch {
            }
          },
          children: i(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: E, children: i("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function Ym() {
  const [e, t] = k.useState([]), [n, r] = k.useState(null), [a, i] = k.useState(null), [l, u] = k.useState(null), [s, p] = k.useState(null), [h, g] = k.useState(null), [m, j] = k.useState(!0), [C, y] = k.useState(!1), [R, f] = k.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !1,
    viewMode: 1,
    saveName: ""
  }), [c, d] = k.useState(33.3), [w, x] = k.useState(33.3), _ = Gm(), N = k.useRef(null), E = k.useRef(null);
  k.useEffect(() => {
    (async () => {
      try {
        const $ = await L.getSettings();
        p($.settings), Us($.settings.tema), f((B) => ({
          ...B,
          guidesVisible: $.settings.ver_guias,
          eyeTransparent: $.settings.fondo_transparente
        })), t((await L.listAssets()).map(zr)), i(await L.result());
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
  const v = k.useCallback(async () => {
    try {
      t((await L.listAssets()).map(zr)), i(await L.result());
      try {
        u(await L.estimate());
      } catch {
      }
    } catch {
      j(!1);
    }
  }, []), S = k.useCallback(($) => {
    E.current && window.clearInterval(E.current), E.current = window.setInterval(async () => {
      try {
        const B = await L.job($);
        g(B), B.done && (window.clearInterval(E.current), E.current = null, await v(), B.status === "done" && window.setTimeout(() => g(null), 2500));
      } catch {
        window.clearInterval(E.current), E.current = null;
      }
    }, 300);
  }, []), I = k.useCallback(async () => {
    try {
      const $ = await L.optimize();
      g($), S($.id);
    } catch {
      j(!1);
    }
  }, [S]), oe = k.useCallback(
    async ($) => {
      try {
        const B = await L.optimize($, !0);
        g(B), S(B.id);
      } catch {
        j(!1);
      }
    },
    [S]
  ), ce = k.useCallback(() => {
    s && s.auto_recalcular === !1 || (N.current && window.clearTimeout(N.current), N.current = window.setTimeout(I, 400));
  }, [I, s]), Re = k.useRef(null);
  k.useEffect(() => {
    Re.current = ce;
  }, [ce]);
  const at = k.useRef(!1);
  k.useEffect(() => {
    if (!(!s || at.current)) {
      if (e.length > 0) {
        at.current = !0;
        return;
      }
      at.current = !0, L.crearDemo().then(async ($) => {
        var B;
        $.ok && (await v(), (B = Re.current) == null || B.call(Re));
      }).catch(() => {
      });
    }
  }, [s, e.length, v]);
  const je = k.useCallback(
    async ($) => {
      p((B) => B && { ...B, ...$ }), $.tema && Us($.tema);
      try {
        const B = await L.putSettings($);
        if (B.job)
          g(B.job), S(B.job.id);
        else
          try {
            u(await L.estimate());
          } catch {
          }
      } catch {
        j(!1);
      }
    },
    [S]
  ), Ee = k.useRef([]), b = k.useRef([]), [O, F] = k.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), q = (s == null ? void 0 : s.historial) !== !1, W = (s == null ? void 0 : s.historial_max) ?? 40, T = () => F({
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
  ]), Pe = k.useCallback(($) => {
    const B = {};
    for (const ft of Q()) B[ft] = $[ft];
    return B;
  }, [Q]), Be = k.useCallback(() => {
    q && (Ee.current = [...Ee.current, e].slice(-W), b.current = [], T());
  }, [e, q, W]), Ye = k.useCallback(async () => {
    const $ = Ee.current.pop();
    if ($) {
      b.current = [...b.current, e], t($), T();
      for (const B of $)
        await L.patchAsset(B.id, Pe(B)).catch(() => {
        });
      await v();
    }
  }, [e, v, Pe]), pt = k.useCallback(async () => {
    const $ = b.current.pop();
    if ($) {
      Ee.current = [...Ee.current, e], t($), T();
      for (const B of $)
        await L.patchAsset(B.id, Pe(B)).catch(() => {
        });
      await v();
    }
  }, [e, v, Pe]);
  k.useEffect(() => {
    const $ = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const mt = B.target;
      if (mt && (mt.tagName === "INPUT" || mt.tagName === "TEXTAREA" || mt.tagName === "SELECT" || mt.isContentEditable)) return;
      const Pt = B.key.toLowerCase();
      Pt === "z" && !B.shiftKey ? (B.preventDefault(), Ye()) : (Pt === "y" || Pt === "z" && B.shiftKey) && (B.preventDefault(), pt());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [Ye, pt]);
  const Vn = k.useCallback(
    ($) => {
      const B = (mt) => {
        const Ir = window.innerWidth, Pt = mt.clientX / Ir * 100;
        $ === "left" ? d(Math.min(45, Math.max(12, Pt))) : x(Math.min(60, Math.max(20, Pt - c)));
      }, ft = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", ft);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", ft);
    },
    [c]
  );
  return k.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ o.jsx(um, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        bm,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await v(), ce();
          },
          saveSettings: je,
          onEditarContorno: ($) => r($),
          onAntesDeCambiar: Be
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Vn("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${w}%` }, children: /* @__PURE__ */ o.jsx(
        Tm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: R,
          setUi: f,
          saveSettings: je,
          optimize: I,
          onRefresh: v,
          onJob: ($) => {
            g($), S($.id);
          },
          onRecalc: oe,
          editando: n,
          onFinEdicion: async () => {
            r(null), await v();
          },
          onDeshacer: Ye,
          onRehacer: pt,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Vn("center") }),
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
        job: h,
        backendOk: m,
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
        onAyuda: _.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Vm,
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
      qm,
      {
        open: _.visible,
        onClose: _.cerrar,
        onAbrirCarpeta: () => void L.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qm,
      {
        open: C,
        onClose: () => y(!1),
        settings: s,
        job: h,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: cm("es", "Cargando CryCat…") });
}
const yd = document.getElementById("root"), zi = [
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
], zo = 7, fa = [];
globalThis.__crycatErrores = fa;
const xd = (e, t) => {
  fa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), fa.length > 12 && fa.shift();
};
window.addEventListener("error", (e) => xd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => xd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let bo;
function Qs(e, t = !1) {
  window.clearTimeout(bo);
  const n = ud().colors;
  if (yd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + zo}</div>
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
  let r = Math.floor(Math.random() * zi.length);
  const a = () => {
    const l = document.getElementById("carga-fun");
    l && (l.textContent = zi[r++ % zi.length]);
  }, i = () => {
    a(), bo = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const bi = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${zo}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / zo * 100)}%`);
  }
};
let dr = null;
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
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((g, m) => {
    l[m] = g;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [g, m] = await Jm(s);
    u = g, l["content-type"] = m;
  } else s instanceof Blob ? u = Mo(await s.arrayBuffer()) : typeof s == "string" && (u = Mo(new TextEncoder().encode(s).buffer));
  const p = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(i) + ", " + JSON.stringify(JSON.stringify(l)) + ", " + JSON.stringify(u) + ")", h = JSON.parse(await dr.runPythonAsync(p));
  return new Response(Km(h.body), {
    status: h.status || 200,
    headers: h.headers || { "content-type": "application/json" }
  });
}
function Zm() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && dr)
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
    if (Qs("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    dr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(bi), bi("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await dr.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", l = await dr.runPythonAsync(i);
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
      const n = ud().key;
      n && n !== "wiwi" && await fetch($a() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    bi("Abriendo la aplicación…", 7), window.clearTimeout(bo), ld(yd).render(/* @__PURE__ */ o.jsx(Ym, {}));
  } catch (e) {
    Qs("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
eh();
