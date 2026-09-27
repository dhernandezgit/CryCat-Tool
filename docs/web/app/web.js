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
var qr = Symbol.for("react.element"), $d = Symbol.for("react.portal"), Od = Symbol.for("react.fragment"), Fd = Symbol.for("react.strict_mode"), Bd = Symbol.for("react.profiler"), Ud = Symbol.for("react.provider"), qd = Symbol.for("react.context"), Vd = Symbol.for("react.forward_ref"), Gd = Symbol.for("react.suspense"), Hd = Symbol.for("react.memo"), Wd = Symbol.for("react.lazy"), Os = Symbol.iterator;
function Qd(e) {
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
  return { $$typeof: qr, type: e, key: o, ref: s, props: a, _owner: qi.current };
}
function Yd(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Vi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function Kd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Bs = /\/+/g;
function mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Kd("" + e.key) : t.toString(36);
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
        case qr:
        case $d:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + mo(s, 0) : r, Fs(a) ? (n = "", e != null && (n = e.replace(Bs, "$&/") + "/"), da(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Vi(a) && (a = Yd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Bs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Fs(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var u = r + mo(o, l);
    s += da(o, t, n, u, a);
  }
  else if (u = Qd(e), typeof u == "function") for (e = u.call(e), l = 0; !(o = e.next()).done; ) o = o.value, u = r + mo(o, l++), s += da(o, t, n, u, a);
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
function Jd(e) {
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
var Me = { current: null }, pa = { transition: null }, Xd = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: pa, ReactCurrentOwner: qi };
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
U.Fragment = Od;
U.Profiler = Bd;
U.PureComponent = Bi;
U.StrictMode = Fd;
U.Suspense = Gd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xd;
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
  return { $$typeof: qr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
U.createContext = function(e) {
  return e = { $$typeof: qd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ud, _context: e }, e.Consumer = e;
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
  return { $$typeof: Vd, render: e };
};
U.isValidElement = Vi;
U.lazy = function(e) {
  return { $$typeof: Wd, _payload: { _status: -1, _result: e }, _init: Jd };
};
U.memo = function(e, t) {
  return { $$typeof: Hd, type: e, compare: t === void 0 ? null : t };
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
ou.exports = U;
var k = ou.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd = k, ep = Symbol.for("react.element"), tp = Symbol.for("react.fragment"), np = Object.prototype.hasOwnProperty, rp = Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function mu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) np.call(t, r) && !ap.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: ep, type: e, key: o, ref: s, props: a, _owner: rp.current };
}
Ya.Fragment = tp;
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
  function t(b, O) {
    var F = b.length;
    b.push(O);
    e: for (; 0 < F; ) {
      var W = F - 1 >>> 1, Q = b[W];
      if (0 < a(Q, O)) b[W] = O, b[F] = Q, F = W;
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
      e: for (var W = 0, Q = b.length, I = Q >>> 1; W < I; ) {
        var Y = 2 * (W + 1) - 1, ge = b[Y], de = Y + 1, Ee = b[de];
        if (0 > a(ge, F)) de < Q && 0 > a(Ee, ge) ? (b[W] = Ee, b[de] = F, W = de) : (b[W] = ge, b[Y] = F, W = Y);
        else if (de < Q && 0 > a(Ee, F)) b[W] = Ee, b[de] = F, W = de;
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
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var u = [], d = [], g = 1, y = null, p = 3, S = !1, N = !1, v = !1, $ = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(b) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= b) r(d), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(d);
    }
  }
  function h(b) {
    if (v = !1, f(b), !N) if (n(u) !== null) N = !0, Ne(j);
    else {
      var O = n(d);
      O !== null && $e(h, O.startTime - b);
    }
  }
  function j(b, O) {
    N = !1, v && (v = !1, m(P), P = -1), S = !0;
    var F = p;
    try {
      for (f(O), y = n(u); y !== null && (!(y.expirationTime > O) || b && !M()); ) {
        var W = y.callback;
        if (typeof W == "function") {
          y.callback = null, p = y.priorityLevel;
          var Q = W(y.expirationTime <= O);
          O = e.unstable_now(), typeof Q == "function" ? y.callback = Q : y === n(u) && r(u), f(O);
        } else r(u);
        y = n(u);
      }
      if (y !== null) var I = !0;
      else {
        var Y = n(d);
        Y !== null && $e(h, Y.startTime - O), I = !1;
      }
      return I;
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
        O ? le() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var le;
  if (typeof c == "function") le = function() {
    c(ne);
  };
  else if (typeof MessageChannel < "u") {
    var _e = new MessageChannel(), pt = _e.port2;
    _e.port1.onmessage = ne, le = function() {
      pt.postMessage(null);
    };
  } else le = function() {
    $(ne, 0);
  };
  function Ne(b) {
    _ = b, C || (C = !0, le());
  }
  function $e(b, O) {
    P = $(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    N || S || (N = !0, Ne(j));
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
    var W = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, b) {
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
    return Q = F + Q, b = { id: g++, callback: O, priorityLevel: b, startTime: F, expirationTime: Q, sortIndex: -1 }, F > W ? (b.sortIndex = F, t(d, b), n(u) === null && b === n(d) && (v ? (m(P), P = -1) : v = !0, $e(h, F - W))) : (b.sortIndex = Q, t(u, b), N || S || (N = !0, Ne(j))), b;
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
})(vu);
gu.exports = vu;
var op = gu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip = k, Ue = op;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yu = /* @__PURE__ */ new Set(), jr = {};
function gn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) yu.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Uo = Object.prototype.hasOwnProperty, sp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Us = {}, qs = {};
function lp(e) {
  return Uo.call(qs, e) ? !0 : Uo.call(Us, e) ? !1 : sp.test(e) ? qs[e] = !0 : (Us[e] = !0, !1);
}
function up(e, t, n, r) {
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
function cp(e, t, n, r) {
  if (t === null || typeof t > "u" || up(e, t, n, r)) return !0;
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
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cp(t, n, a, r) && (n = null), r || a === null ? lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), jn = Symbol.for("react.portal"), Sn = Symbol.for("react.fragment"), Qi = Symbol.for("react.strict_mode"), qo = Symbol.for("react.profiler"), xu = Symbol.for("react.provider"), wu = Symbol.for("react.context"), Yi = Symbol.for("react.forward_ref"), Vo = Symbol.for("react.suspense"), Go = Symbol.for("react.suspense_list"), Ki = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), ku = Symbol.for("react.offscreen"), Vs = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != "object" ? null : (e = Vs && e[Vs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ho;
function ir(e) {
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
  return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
}
function dp(e) {
  switch (e.tag) {
    case 5:
      return ir(e.type);
    case 16:
      return ir("Lazy");
    case 13:
      return ir("Suspense");
    case 19:
      return ir("SuspenseList");
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
    case Dt:
      t = e._payload, e = e._init;
      try {
        return Ho(e(t));
      } catch {
      }
  }
  return null;
}
function pp(e) {
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
function ju(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function fp(e) {
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
  e._valueTracker || (e._valueTracker = fp(e));
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
  n = Xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cu(e, t) {
  t = t.checked, t != null && Wi(e, "checked", t, !1);
}
function Qo(e, t) {
  Cu(e, t);
  var n = Xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yo(e, t.type, Xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
var sr = Array.isArray;
function Rn(e, t, n, r) {
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
function Ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (sr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function _u(e, t) {
  var n = Xt(t.value), r = Xt(t.defaultValue);
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
var cr = {
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
}, mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
  mp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e];
  });
});
function zu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px";
}
function Pu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = zu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var hp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xo(e, t) {
  if (t) {
    if (hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
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
  if (e = Hr(e)) {
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
function Cr(e, t) {
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
if (Nt) try {
  var Zn = {};
  Object.defineProperty(Zn, "passive", { get: function() {
    ni = !0;
  } }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
} catch {
  ni = !1;
}
function gp(e, t, n, r, a, o, s, l, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var dr = !1, _a = null, Na = !1, ri = null, vp = { onError: function(e) {
  dr = !0, _a = e;
} };
function yp(e, t, n, r, a, o, s, l, u) {
  dr = !1, _a = null, gp.apply(vp, arguments);
}
function xp(e, t, n, r, a, o, s, l, u) {
  if (yp.apply(this, arguments), dr) {
    if (dr) {
      var d = _a;
      dr = !1, _a = null;
    } else throw Error(E(198));
    Na || (Na = !0, ri = d);
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
function Au(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ks(e) {
  if (vn(e) !== e) throw Error(E(188));
}
function wp(e) {
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
  return e = wp(e), e !== null ? Du(e) : null;
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
var $u = Ue.unstable_scheduleCallback, Js = Ue.unstable_cancelCallback, kp = Ue.unstable_shouldYield, jp = Ue.unstable_requestPaint, ue = Ue.unstable_now, Sp = Ue.unstable_getCurrentPriorityLevel, Xi = Ue.unstable_ImmediatePriority, Ou = Ue.unstable_UserBlockingPriority, Ea = Ue.unstable_NormalPriority, Cp = Ue.unstable_LowPriority, Fu = Ue.unstable_IdlePriority, Ka = null, vt = null;
function _p(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function") try {
    vt.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ut = Math.clz32 ? Math.clz32 : zp, Np = Math.log, Ep = Math.LN2;
function zp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Np(e) / Ep | 0) | 0;
}
var Xr = 64, Zr = 4194304;
function lr(e) {
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
    l !== 0 ? r = lr(l) : (o &= s, o !== 0 && (r = lr(o)));
  } else s = n & ~a, s !== 0 ? r = lr(s) : o !== 0 && (r = lr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ut(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Pp(e, t) {
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
function bp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ut(o), l = 1 << s, u = a[s];
    u === -1 ? (!(l & n) || l & r) && (a[s] = Pp(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l;
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
function Vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
}
function Mp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ut(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function Zi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var H = 0;
function Uu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qu, es, Vu, Gu, Hu, oi = !1, ea = [], Vt = null, Gt = null, Ht = null, _r = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Ot = [], Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xs(e, t) {
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
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function er(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Hr(t), t !== null && es(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Lp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Vt = er(Vt, e, t, n, r, a), !0;
    case "dragenter":
      return Gt = er(Gt, e, t, n, r, a), !0;
    case "mouseover":
      return Ht = er(Ht, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return _r.set(o, er(_r.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Nr.set(o, er(Nr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Wu(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = vn(t);
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
    } else return t = Hr(n), t !== null && es(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zs(e, t, n) {
  fa(e) && n.delete(t);
}
function Rp() {
  oi = !1, Vt !== null && fa(Vt) && (Vt = null), Gt !== null && fa(Gt) && (Gt = null), Ht !== null && fa(Ht) && (Ht = null), _r.forEach(Zs), Nr.forEach(Zs);
}
function tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, oi || (oi = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Rp)));
}
function Er(e) {
  function t(a) {
    return tr(a, e);
  }
  if (0 < ea.length) {
    tr(ea[0], e);
    for (var n = 1; n < ea.length; n++) {
      var r = ea[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vt !== null && tr(Vt, e), Gt !== null && tr(Gt, e), Ht !== null && tr(Ht, e), _r.forEach(t), Nr.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null); ) Wu(n), n.blockedOn === null && Ot.shift();
}
var Dn = bt.ReactCurrentBatchConfig, Pa = !0;
function Ap(e, t, n, r) {
  var a = H, o = Dn.transition;
  Dn.transition = null;
  try {
    H = 1, ts(e, t, n, r);
  } finally {
    H = a, Dn.transition = o;
  }
}
function Ip(e, t, n, r) {
  var a = H, o = Dn.transition;
  Dn.transition = null;
  try {
    H = 4, ts(e, t, n, r);
  } finally {
    H = a, Dn.transition = o;
  }
}
function ts(e, t, n, r) {
  if (Pa) {
    var a = ii(e, t, n, r);
    if (a === null) Po(e, t, r, ba, n), Xs(e, r);
    else if (Lp(a, e, t, n, r)) r.stopPropagation();
    else if (Xs(e, r), t & 4 && -1 < Tp.indexOf(e)) {
      for (; a !== null; ) {
        var o = Hr(a);
        if (o !== null && qu(o), o = ii(e, t, n, r), o === null && Po(e, t, r, ba, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var ba = null;
function ii(e, t, n, r) {
  if (ba = null, e = Ji(r), e = on(e), e !== null) if (t = vn(e), t === null) e = null;
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
      switch (Sp()) {
        case Xi:
          return 1;
        case Ou:
          return 4;
        case Ea:
        case Cp:
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
var Ut = null, ns = null, ma = null;
function Yu() {
  if (ma) return ma;
  var e, t = ns, n = t.length, r, a = "value" in Ut ? Ut.value : Ut.textContent, o = a.length;
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
}, defaultPrevented: 0, isTrusted: 0 }, rs = Ve(Qn), Gr = oe({}, Qn, { view: 0, detail: 0 }), Dp = Ve(Gr), wo, ko, nr, Ja = oe({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: as, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (wo = e.screenX - nr.screenX, ko = e.screenY - nr.screenY) : ko = wo = 0, nr = e), wo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ko;
} }), tl = Ve(Ja), $p = oe({}, Ja, { dataTransfer: 0 }), Op = Ve($p), Fp = oe({}, Gr, { relatedTarget: 0 }), jo = Ve(Fp), Bp = oe({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Up = Ve(Bp), qp = oe({}, Qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Vp = Ve(qp), Gp = oe({}, Qn, { data: 0 }), nl = Ve(Gp), Hp = {
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
}, Wp = {
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
}, Qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Yp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qp[e]) ? !!t[e] : !1;
}
function as() {
  return Yp;
}
var Kp = oe({}, Gr, { key: function(e) {
  if (e.key) {
    var t = Hp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ha(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: as, charCode: function(e) {
  return e.type === "keypress" ? ha(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ha(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Jp = Ve(Kp), Xp = oe({}, Ja, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rl = Ve(Xp), Zp = oe({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: as }), ef = Ve(Zp), tf = oe({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nf = Ve(tf), rf = oe({}, Ja, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), af = Ve(rf), of = [9, 13, 27, 32], os = Nt && "CompositionEvent" in window, pr = null;
Nt && "documentMode" in document && (pr = document.documentMode);
var sf = Nt && "TextEvent" in window && !pr, Ku = Nt && (!os || pr && 8 < pr && 11 >= pr), al = " ", ol = !1;
function Ju(e, t) {
  switch (e) {
    case "keyup":
      return of.indexOf(t.keyCode) !== -1;
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
function lf(e, t) {
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
function uf(e, t) {
  if (Cn) return e === "compositionend" || !os && Ju(e, t) ? (e = Yu(), ma = ns = Ut = null, Cn = !1, e) : null;
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
var cf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cf[e.type] : t === "textarea";
}
function Zu(e, t, n, r) {
  bu(r), t = Ma(t, "onChange"), 0 < t.length && (n = new rs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fr = null, zr = null;
function df(e) {
  cc(e, 0);
}
function Xa(e) {
  var t = En(e);
  if (Su(t)) return e;
}
function pf(e, t) {
  if (e === "change") return t;
}
var ec = !1;
if (Nt) {
  var So;
  if (Nt) {
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
  fr && (fr.detachEvent("onpropertychange", tc), zr = fr = null);
}
function tc(e) {
  if (e.propertyName === "value" && Xa(zr)) {
    var t = [];
    Zu(t, zr, e, Ji(e)), Ru(df, t);
  }
}
function ff(e, t, n) {
  e === "focusin" ? (ll(), fr = t, zr = n, fr.attachEvent("onpropertychange", tc)) : e === "focusout" && ll();
}
function mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xa(zr);
}
function hf(e, t) {
  if (e === "click") return Xa(t);
}
function gf(e, t) {
  if (e === "input" || e === "change") return Xa(t);
}
function vf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dt = typeof Object.is == "function" ? Object.is : vf;
function Pr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Uo.call(t, a) || !dt(e[a], t[a])) return !1;
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
function yf(e) {
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
var xf = Nt && "documentMode" in document && 11 >= document.documentMode, _n = null, si = null, mr = null, li = !1;
function dl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li || _n == null || _n !== Ca(r) || (r = _n, "selectionStart" in r && is(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && Pr(mr, r) || (mr = r, r = Ma(si, "onSelect"), 0 < r.length && (t = new rs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _n)));
}
function na(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nn = { animationend: na("Animation", "AnimationEnd"), animationiteration: na("Animation", "AnimationIteration"), animationstart: na("Animation", "AnimationStart"), transitionend: na("Transition", "TransitionEnd") }, _o = {}, ac = {};
Nt && (ac = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
function Za(e) {
  if (_o[e]) return _o[e];
  if (!Nn[e]) return e;
  var t = Nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ac) return _o[e] = t[n];
  return e;
}
var oc = Za("animationend"), ic = Za("animationiteration"), sc = Za("animationstart"), lc = Za("transitionend"), uc = /* @__PURE__ */ new Map(), pl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
  uc.set(e, t), gn(t, [e]);
}
for (var No = 0; No < pl.length; No++) {
  var Eo = pl[No], wf = Eo.toLowerCase(), kf = Eo[0].toUpperCase() + Eo.slice(1);
  en(wf, "on" + kf);
}
en(oc, "onAnimationEnd");
en(ic, "onAnimationIteration");
en(sc, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(lc, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function fl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, xp(r, t, void 0, e), e.currentTarget = null;
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
function br(e) {
  if (!e[ra]) {
    e[ra] = !0, yu.forEach(function(n) {
      n !== "selectionchange" && (jf.has(n) || zo(n, !1, e), zo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ra] || (t[ra] = !0, zo("selectionchange", !1, t));
  }
}
function dc(e, t, n, r) {
  switch (Qu(t)) {
    case 1:
      var a = Ap;
      break;
    case 4:
      a = Ip;
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
        if (s = on(l), s === null) return;
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
            S = Jp;
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
            S = Op;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = ef;
            break;
          case oc:
          case ic:
          case sc:
            S = Up;
            break;
          case lc:
            S = nf;
            break;
          case "scroll":
            S = Dp;
            break;
          case "wheel":
            S = af;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Vp;
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
          if (f.tag === 5 && h !== null && (f = h, m !== null && (h = Cr(c, m), h != null && v.push(Mr(c, h, f)))), $) break;
          c = c.return;
        }
        0 < v.length && (p = new S(p, N, null, n, g), y.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== ei && (N = n.relatedTarget || n.fromElement) && (on(N) || N[Et])) break e;
        if ((S || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (N = n.relatedTarget || n.toElement, S = d, N = N ? on(N) : null, N !== null && ($ = vn(N), N !== $ || N.tag !== 5 && N.tag !== 6) && (N = null)) : (S = null, N = d), S !== N)) {
          if (v = tl, h = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = rl, h = "onPointerLeave", m = "onPointerEnter", c = "pointer"), $ = S == null ? p : En(S), f = N == null ? p : En(N), p = new v(h, c + "leave", S, n, g), p.target = $, p.relatedTarget = f, h = null, on(g) === d && (v = new v(m, c + "enter", N, n, g), v.target = f, v.relatedTarget = $, h = v), $ = h, S && N) t: {
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
        if (p = d ? En(d) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var j = pf;
        else if (il(p)) if (ec) j = gf;
        else {
          j = mf;
          var C = ff;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (j = hf);
        if (j && (j = j(e, d))) {
          Zu(y, j, n, g);
          break e;
        }
        C && C(e, p, d), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Yo(p, "number", p.value);
      }
      switch (C = d ? En(d) : window, e) {
        case "focusin":
          (il(C) || C.contentEditable === "true") && (_n = C, si = d, mr = null);
          break;
        case "focusout":
          mr = si = _n = null;
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
          if (xf) break;
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
      P && (Ku && n.locale !== "ko" && (Cn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Cn && (_ = Yu()) : (Ut = g, ns = "value" in Ut ? Ut.value : Ut.textContent, Cn = !0)), C = Ma(d, P), 0 < C.length && (P = new nl(P, e, null, n, g), y.push({ event: P, listeners: C }), _ ? P.data = _ : (_ = Xu(n), _ !== null && (P.data = _)))), (_ = sf ? lf(e, n) : uf(e, n)) && (d = Ma(d, "onBeforeInput"), 0 < d.length && (g = new nl("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: d }), g.data = _));
    }
    cc(y, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Cr(e, n), o != null && r.unshift(Mr(e, o, a)), o = Cr(e, t), o != null && r.push(Mr(e, o, a))), e = e.return;
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
    l.tag === 5 && d !== null && (l = d, a ? (u = Cr(n, o), u != null && s.unshift(Mr(n, u, l))) : a || (u = Cr(n, o), u != null && s.push(Mr(n, u, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Sf = /\r\n?/g, Cf = /\u0000|\uFFFD/g;
function hl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(Cf, "");
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
var pi = typeof setTimeout == "function" ? setTimeout : void 0, _f = typeof clearTimeout == "function" ? clearTimeout : void 0, gl = typeof Promise == "function" ? Promise : void 0, Nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof gl < "u" ? function(e) {
  return gl.resolve(null).then(e).catch(Ef);
} : pi;
function Ef(e) {
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
        e.removeChild(a), Er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Er(t);
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
var Yn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + Yn, Tr = "__reactProps$" + Yn, Et = "__reactContainer$" + Yn, fi = "__reactEvents$" + Yn, zf = "__reactListeners$" + Yn, Pf = "__reactHandles$" + Yn;
function on(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Et] || n[gt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vl(e); e !== null; ) {
        if (n = e[gt]) return n;
        e = vl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Hr(e) {
  return e = e[gt] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function eo(e) {
  return e[Tr] || null;
}
var mi = [], zn = -1;
function tn(e) {
  return { current: e };
}
function Z(e) {
  0 > zn || (e.current = mi[zn], mi[zn] = null, zn--);
}
function J(e, t) {
  zn++, mi[zn] = e.current, e.current = t;
}
var Zt = {}, Ce = tn(Zt), Ae = tn(!1), dn = Zt;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ie(e) {
  return e = e.childContextTypes, e != null;
}
function La() {
  Z(Ae), Z(Ce);
}
function yl(e, t, n) {
  if (Ce.current !== Zt) throw Error(E(168));
  J(Ce, t), J(Ae, n);
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, pp(e) || "Unknown", a));
  return oe({}, n, r);
}
function Ra(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, dn = Ce.current, J(Ce, e), J(Ae, Ae.current), !0;
}
function xl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = pc(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, Z(Ae), Z(Ce), J(Ce, e)) : Z(Ae), J(Ae, n);
}
var kt = null, to = !1, Mo = !1;
function fc(e) {
  kt === null ? kt = [e] : kt.push(e);
}
function bf(e) {
  to = !0, fc(e);
}
function nn() {
  if (!Mo && kt !== null) {
    Mo = !0;
    var e = 0, t = H;
    try {
      var n = kt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      kt = null, to = !1;
    } catch (a) {
      throw kt !== null && (kt = kt.slice(e + 1)), $u(Xi, nn), a;
    } finally {
      H = t, Mo = !1;
    }
  }
  return null;
}
var Pn = [], bn = 0, Aa = null, Ia = 0, We = [], Qe = 0, pn = null, St = 1, Ct = "";
function rn(e, t) {
  Pn[bn++] = Ia, Pn[bn++] = Aa, Aa = e, Ia = t;
}
function mc(e, t, n) {
  We[Qe++] = St, We[Qe++] = Ct, We[Qe++] = pn, pn = e;
  var r = St;
  e = Ct;
  var a = 32 - ut(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ut(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, St = 1 << 32 - ut(t) + a | n << a | r, Ct = o + e;
  } else St = 1 << o | n << a | r, Ct = e;
}
function ss(e) {
  e.return !== null && (rn(e, 1), mc(e, 1, 0));
}
function ls(e) {
  for (; e === Aa; ) Aa = Pn[--bn], Pn[bn] = null, Ia = Pn[--bn], Pn[bn] = null;
  for (; e === pn; ) pn = We[--Qe], We[Qe] = null, Ct = We[--Qe], We[Qe] = null, St = We[--Qe], We[Qe] = null;
}
var Be = null, Fe = null, ee = !1, lt = null;
function hc(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function wl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Fe = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Fe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? { id: St, overflow: Ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Fe = null, !0) : !1;
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
        t = Wt(n.nextSibling);
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
    for (; t; ) hc(e, t), t = Wt(t.nextSibling);
  }
  if (kl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Be ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function gc() {
  for (var e = Fe; e; ) e = Wt(e.nextSibling);
}
function Un() {
  Fe = Be = null, ee = !1;
}
function us(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var Mf = bt.ReactCurrentBatchConfig;
function rr(e, t, n) {
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
    return m = Jt(m, c), m.index = 0, m.sibling = null, m;
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
    var j = f.type;
    return j === Sn ? g(m, c, f.props.children, h, f.key) : c !== null && (c.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Dt && jl(j) === c.type) ? (h = a(c, f.props), h.ref = rr(m, c, f), h.return = m, h) : (h = ja(f.type, f.key, f.props, null, m.mode, h), h.ref = rr(m, c, f), h.return = m, h);
  }
  function d(m, c, f, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Oo(f, m.mode, h), c.return = m, c) : (c = a(c, f.children || []), c.return = m, c);
  }
  function g(m, c, f, h, j) {
    return c === null || c.tag !== 7 ? (c = cn(f, m.mode, h, j), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function y(m, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = $o("" + c, m.mode, f), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Yr:
          return f = ja(c.type, c.key, c.props, null, m.mode, f), f.ref = rr(m, null, c), f.return = m, f;
        case jn:
          return c = Oo(c, m.mode, f), c.return = m, c;
        case Dt:
          var h = c._init;
          return y(m, h(c._payload), f);
      }
      if (sr(c) || Xn(c)) return c = cn(c, m.mode, f, null), c.return = m, c;
      ia(m, c);
    }
    return null;
  }
  function p(m, c, f, h) {
    var j = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return j !== null ? null : l(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yr:
          return f.key === j ? u(m, c, f, h) : null;
        case jn:
          return f.key === j ? d(m, c, f, h) : null;
        case Dt:
          return j = f._init, p(
            m,
            c,
            j(f._payload),
            h
          );
      }
      if (sr(f) || Xn(f)) return j !== null ? null : g(m, c, f, h, null);
      ia(m, f);
    }
    return null;
  }
  function S(m, c, f, h, j) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(f) || null, l(c, m, "" + h, j);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Yr:
          return m = m.get(h.key === null ? f : h.key) || null, u(c, m, h, j);
        case jn:
          return m = m.get(h.key === null ? f : h.key) || null, d(c, m, h, j);
        case Dt:
          var C = h._init;
          return S(m, c, f, C(h._payload), j);
      }
      if (sr(h) || Xn(h)) return m = m.get(f) || null, g(c, m, h, j, null);
      ia(c, h);
    }
    return null;
  }
  function N(m, c, f, h) {
    for (var j = null, C = null, _ = c, P = c = 0, w = null; _ !== null && P < f.length; P++) {
      _.index > P ? (w = _, _ = null) : w = _.sibling;
      var x = p(m, _, f[P], h);
      if (x === null) {
        _ === null && (_ = w);
        break;
      }
      e && _ && x.alternate === null && t(m, _), c = o(x, c, P), C === null ? j = x : C.sibling = x, C = x, _ = w;
    }
    if (P === f.length) return n(m, _), ee && rn(m, P), j;
    if (_ === null) {
      for (; P < f.length; P++) _ = y(m, f[P], h), _ !== null && (c = o(_, c, P), C === null ? j = _ : C.sibling = _, C = _);
      return ee && rn(m, P), j;
    }
    for (_ = r(m, _); P < f.length; P++) w = S(_, m, P, f[P], h), w !== null && (e && w.alternate !== null && _.delete(w.key === null ? P : w.key), c = o(w, c, P), C === null ? j = w : C.sibling = w, C = w);
    return e && _.forEach(function(M) {
      return t(m, M);
    }), ee && rn(m, P), j;
  }
  function v(m, c, f, h) {
    var j = Xn(f);
    if (typeof j != "function") throw Error(E(150));
    if (f = j.call(f), f == null) throw Error(E(151));
    for (var C = j = null, _ = c, P = c = 0, w = null, x = f.next(); _ !== null && !x.done; P++, x = f.next()) {
      _.index > P ? (w = _, _ = null) : w = _.sibling;
      var M = p(m, _, x.value, h);
      if (M === null) {
        _ === null && (_ = w);
        break;
      }
      e && _ && M.alternate === null && t(m, _), c = o(M, c, P), C === null ? j = M : C.sibling = M, C = M, _ = w;
    }
    if (x.done) return n(
      m,
      _
    ), ee && rn(m, P), j;
    if (_ === null) {
      for (; !x.done; P++, x = f.next()) x = y(m, x.value, h), x !== null && (c = o(x, c, P), C === null ? j = x : C.sibling = x, C = x);
      return ee && rn(m, P), j;
    }
    for (_ = r(m, _); !x.done; P++, x = f.next()) x = S(_, m, P, x.value, h), x !== null && (e && x.alternate !== null && _.delete(x.key === null ? P : x.key), c = o(x, c, P), C === null ? j = x : C.sibling = x, C = x);
    return e && _.forEach(function(ne) {
      return t(m, ne);
    }), ee && rn(m, P), j;
  }
  function $(m, c, f, h) {
    if (typeof f == "object" && f !== null && f.type === Sn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yr:
          e: {
            for (var j = f.key, C = c; C !== null; ) {
              if (C.key === j) {
                if (j = f.type, j === Sn) {
                  if (C.tag === 7) {
                    n(m, C.sibling), c = a(C, f.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (C.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Dt && jl(j) === C.type) {
                  n(m, C.sibling), c = a(C, f.props), c.ref = rr(m, C, f), c.return = m, m = c;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            f.type === Sn ? (c = cn(f.props.children, m.mode, h, f.key), c.return = m, m = c) : (h = ja(f.type, f.key, f.props, null, m.mode, h), h.ref = rr(m, c, f), h.return = m, m = h);
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
        case Dt:
          return C = f._init, $(m, c, C(f._payload), h);
      }
      if (sr(f)) return N(m, c, f, h);
      if (Xn(f)) return v(m, c, f, h);
      ia(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, f), c.return = m, m = c) : (n(m, c), c = $o(f, m.mode, h), c.return = m, m = c), s(m)) : n(m, c);
  }
  return $;
}
var qn = vc(!0), yc = vc(!1), Da = tn(null), $a = null, Mn = null, cs = null;
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
  $a = e, cs = Mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0), e.firstContext = null);
}
function Je(e) {
  var t = e._currentValue;
  if (cs !== e) if (e = { context: e, memoizedValue: t, next: null }, Mn === null) {
    if ($a === null) throw Error(E(308));
    Mn = e, $a.dependencies = { lanes: 0, firstContext: e };
  } else Mn = Mn.next = e;
  return t;
}
var sn = null;
function fs(e) {
  sn === null ? sn = [e] : sn.push(e);
}
function xc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, fs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, zt(e, r);
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function ms(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function _t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, zt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, fs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, zt(e, n);
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
  $t = !1;
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
              $t = !0;
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
    mn |= s, e.lanes = s, e.memoizedState = y;
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
var Wr = {}, yt = tn(Wr), Lr = tn(Wr), Rr = tn(Wr);
function ln(e) {
  if (e === Wr) throw Error(E(174));
  return e;
}
function hs(e, t) {
  switch (J(Rr, t), J(Lr, e), J(yt, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jo(t, e);
  }
  Z(yt), J(yt, t);
}
function Vn() {
  Z(yt), Z(Lr), Z(Rr);
}
function kc(e) {
  ln(Rr.current);
  var t = ln(yt.current), n = Jo(t, e.type);
  t !== n && (J(Lr, e), J(yt, n));
}
function gs(e) {
  Lr.current === e && (Z(yt), Z(Lr));
}
var re = tn(0);
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
var va = bt.ReactCurrentDispatcher, Lo = bt.ReactCurrentBatchConfig, fn = 0, ae = null, pe = null, me = null, Ba = !1, hr = !1, Ar = 0, Tf = 0;
function ke() {
  throw Error(E(321));
}
function ys(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
  return !0;
}
function xs(e, t, n, r, a, o) {
  if (fn = o, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, va.current = e === null || e.memoizedState === null ? If : Df, e = n(r, a), hr) {
    o = 0;
    do {
      if (hr = !1, Ar = 0, 25 <= o) throw Error(E(301));
      o += 1, me = pe = null, t.updateQueue = null, va.current = $f, e = n(r, a);
    } while (hr);
  }
  if (va.current = Ua, t = pe !== null && pe.next !== null, fn = 0, me = pe = ae = null, Ba = !1, t) throw Error(E(300));
  return e;
}
function ws() {
  var e = Ar !== 0;
  return Ar = 0, e;
}
function ht() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ae.memoizedState = me = e : me = me.next = e, me;
}
function Xe() {
  if (pe === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = me === null ? ae.memoizedState : me.next;
  if (t !== null) me = t, pe = e;
  else {
    if (e === null) throw Error(E(310));
    pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, me === null ? ae.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ro(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(E(311));
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
    var l = s = null, u = null, d = o;
    do {
      var g = d.lane;
      if ((fn & g) === g) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (l = u = y, s = r) : u = u.next = y, ae.lanes |= g, mn |= g;
      }
      d = d.next;
    } while (d !== null && d !== o);
    u === null ? s = r : u.next = l, dt(r, t.memoizedState) || (Re = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ae.lanes |= o, mn |= o, a = a.next;
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
    dt(o, t.memoizedState) || (Re = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function jc() {
}
function Sc(e, t) {
  var n = ae, r = Xe(), a = t(), o = !dt(r.memoizedState, a);
  if (o && (r.memoizedState = a, Re = !0), r = r.queue, ks(Nc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, _c.bind(null, n, r, a, t), void 0, null), he === null) throw Error(E(349));
    fn & 30 || Cc(n, t, a);
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
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function zc(e) {
  var t = zt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function _l(e) {
  var t = ht();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = Af.bind(null, ae, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pc() {
  return Xe().memoizedState;
}
function ya(e, t, n, r) {
  var a = ht();
  ae.flags |= e, a.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function no(e, t, n, r) {
  var a = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (pe !== null) {
    var s = pe.memoizedState;
    if (o = s.destroy, r !== null && ys(r, s.deps)) {
      a.memoizedState = Dr(t, n, o, r);
      return;
    }
  }
  ae.flags |= e, a.memoizedState = Dr(1 | t, n, o, r);
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
  return fn & 21 ? (dt(n, t) || (n = Bu(), ae.lanes |= n, mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = n);
}
function Lf(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Lo.transition;
  Lo.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Lo.transition = r;
  }
}
function Dc() {
  return Xe().memoizedState;
}
function Rf(e, t, n) {
  var r = Kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $c(e)) Oc(t, n);
  else if (n = xc(e, t, n, r), n !== null) {
    var a = be();
    ct(n, e, r, a), Fc(n, t, r);
  }
}
function Af(e, t, n) {
  var r = Kt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($c(e)) Oc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, l = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = l, dt(l, s)) {
        var u = t.interleaved;
        u === null ? (a.next = a, fs(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = xc(e, t, a, r), n !== null && (a = be(), ct(n, e, r, a), Fc(n, t, r));
  }
}
function $c(e) {
  var t = e.alternate;
  return e === ae || t !== null && t === ae;
}
function Oc(e, t) {
  hr = Ba = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
  }
}
var Ua = { readContext: Je, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, If = { readContext: Je, useCallback: function(e, t) {
  return ht().memoizedState = [e, t === void 0 ? null : t], e;
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
  var n = ht();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ht();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Rf.bind(null, ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ht();
  return e = { current: e }, t.memoizedState = e;
}, useState: _l, useDebugValue: js, useDeferredValue: function(e) {
  return ht().memoizedState = e;
}, useTransition: function() {
  var e = _l(!1), t = e[0];
  return e = Lf.bind(null, e[1]), ht().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ae, a = ht();
  if (ee) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(E(349));
    fn & 30 || Cc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Nl(Nc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Dr(9, _c.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ht(), t = he.identifierPrefix;
  if (ee) {
    var n = Ct, r = St;
    n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Tf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Df = {
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
    return Ro(Ir);
  },
  useDebugValue: js,
  useDeferredValue: function(e) {
    var t = Xe();
    return Ic(t, pe.memoizedState, e);
  },
  useTransition: function() {
    var e = Ro(Ir)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: jc,
  useSyncExternalStore: Sc,
  useId: Dc,
  unstable_isNewReconciler: !1
}, $f = { readContext: Je, useCallback: Rc, useContext: Je, useEffect: ks, useImperativeHandle: Lc, useInsertionEffect: bc, useLayoutEffect: Mc, useMemo: Ac, useReducer: Ao, useRef: Pc, useState: function() {
  return Ao(Ir);
}, useDebugValue: js, useDeferredValue: function(e) {
  var t = Xe();
  return pe === null ? t.memoizedState = e : Ic(t, pe.memoizedState, e);
}, useTransition: function() {
  var e = Ao(Ir)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: jc, useSyncExternalStore: Sc, useId: Dc, unstable_isNewReconciler: !1 };
function it(e, t) {
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
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Kt(e), o = _t(r, a);
  o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (ct(t, e, a, r), ga(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Kt(e), o = _t(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (ct(t, e, a, r), ga(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = Kt(e), a = _t(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Qt(e, a, r), t !== null && (ct(t, e, r, n), ga(t, e, r));
} };
function El(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(a, o) : !0;
}
function Bc(e, t, n) {
  var r = !1, a = Zt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Je(o) : (a = Ie(t) ? dn : Ce.current, r = t.contextTypes, o = (r = r != null) ? Bn(e, a) : Zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function zl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function xi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Je(o) : (o = Ie(t) ? dn : Ce.current, a.context = Bn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (yi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ro.enqueueReplaceState(a, a.state, null), Oa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += dp(r), r = r.return;
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
var Of = typeof WeakMap == "function" ? WeakMap : Map;
function Uc(e, t, n) {
  n = _t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Va || (Va = !0, bi = r), wi(e, t);
  }, n;
}
function qc(e, t, n) {
  n = _t(-1, n), n.tag = 3;
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
    wi(e, t), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Pl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Of();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Zf.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Ff = bt.ReactCurrentOwner, Re = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? yc(t, null, n, r) : qn(t, e.child, n, r);
}
function Tl(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return $n(t, a), r = xs(e, t, n, r, o, a), n = ws(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Pt(e, t, a)) : (ee && n && ss(t), t.flags |= 1, Pe(e, t, r, a), t.child);
}
function Ll(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !bs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Vc(e, t, o, r, a)) : (e = ja(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return Pt(e, t, a);
  }
  return t.flags |= 1, e = Jt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (Re = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Re = !0);
    else return t.lanes = e.lanes, Pt(e, t, a);
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
  return Pe(e, t, a, n), t.child;
}
function Hc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ki(e, t, n, r, a) {
  var o = Ie(n) ? dn : Ce.current;
  return o = Bn(t, o), $n(t, a), n = xs(e, t, n, r, o, a), r = ws(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Pt(e, t, a)) : (ee && r && ss(t), t.flags |= 1, Pe(e, t, n, a), t.child);
}
function Rl(e, t, n, r, a) {
  if (Ie(n)) {
    var o = !0;
    Ra(t);
  } else o = !1;
  if ($n(t, a), t.stateNode === null) xa(e, t), Bc(t, n, r), xi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Je(d) : (d = Ie(n) ? dn : Ce.current, d = Bn(t, d));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    y || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== d) && zl(t, s, r, d), $t = !1;
    var p = t.memoizedState;
    s.state = p, Oa(t, r, s, a), u = t.memoizedState, l !== r || p !== u || Ae.current || $t ? (typeof g == "function" && (yi(t, n, g, r), u = t.memoizedState), (l = $t || El(t, n, l, r, p, u, d)) ? (y || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, wc(e, t), l = t.memoizedProps, d = t.type === t.elementType ? l : it(t.type, l), s.props = d, y = t.pendingProps, p = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Je(u) : (u = Ie(n) ? dn : Ce.current, u = Bn(t, u));
    var S = n.getDerivedStateFromProps;
    (g = typeof S == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== y || p !== u) && zl(t, s, r, u), $t = !1, p = t.memoizedState, s.state = p, Oa(t, r, s, a);
    var N = t.memoizedState;
    l !== y || p !== N || Ae.current || $t ? (typeof S == "function" && (yi(t, n, S, r), N = t.memoizedState), (d = $t || El(t, n, d, r, p, N, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, N, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, N, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), s.props = r, s.state = N, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ji(e, t, n, r, o, a);
}
function ji(e, t, n, r, a, o) {
  Hc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && xl(t, n, !1), Pt(e, t, o);
  r = t.stateNode, Ff.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = qn(t, e.child, null, o), t.child = qn(t, null, l, o)) : Pe(e, t, l, o), t.memoizedState = r.state, a && xl(t, n, !0), t.child;
}
function Wc(e) {
  var t = e.stateNode;
  t.pendingContext ? yl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yl(e, t.context, !1), hs(e, t.containerInfo);
}
function Al(e, t, n, r, a) {
  return Un(), us(a), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qc(e, t, n) {
  var r = t.pendingProps, a = re.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), J(re, a & 1), e === null)
    return gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = io(s, r, 0, null), e = cn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ci(n), t.memoizedState = Si, e) : Ss(t, s));
  if (a = e.memoizedState, a !== null && (l = a.dehydrated, l !== null)) return Bf(e, t, s, r, l, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, l = a.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Jt(a, u), r.subtreeFlags = a.subtreeFlags & 14680064), l !== null ? o = Jt(l, o) : (o = cn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ci(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Si, r;
  }
  return o = e.child, e = o.sibling, r = Jt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ss(e, t) {
  return t = io({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sa(e, t, n, r) {
  return r !== null && us(r), qn(t, e.child, null, n), e = Ss(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Bf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Io(Error(E(422))), sa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = io({ mode: "visible", children: r.children }, a, 0, null), o = cn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && qn(t, e.child, null, s), t.child.memoizedState = Ci(s), t.memoizedState = Si, o);
  if (!(t.mode & 1)) return sa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(E(419)), r = Io(o, r, void 0), sa(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Re || l) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, zt(e, a), ct(r, e, a, -1));
    }
    return Ps(), r = Io(Error(E(421))), sa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = em.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Fe = Wt(a.nextSibling), Be = t, ee = !0, lt = null, e !== null && (We[Qe++] = St, We[Qe++] = Ct, We[Qe++] = pn, St = e.id, Ct = e.overflow, pn = t), t = Ss(t, r.children), t.flags |= 4096, t);
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
  if (Pe(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
function Pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Uf(e, t, n) {
  switch (t.tag) {
    case 3:
      Wc(t), Un();
      break;
    case 5:
      kc(t);
      break;
    case 1:
      Ie(t.type) && Ra(t);
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
        return r.dehydrated !== null ? (J(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qc(e, t, n) : (J(re, re.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
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
  return Pt(e, t, n);
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
    e = t.stateNode, ln(yt.current);
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
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (jr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (l = a != null ? a[d] : void 0, r.hasOwnProperty(d) && u !== l && (u != null || l != null)) if (d === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (jr.hasOwnProperty(d) ? (u != null && d === "onScroll" && X("scroll", e), o || l === u || (o = [])) : (o = o || []).push(d, u));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Xc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
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
function qf(e, t, n) {
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
      return Ie(t.type) && La(), je(t), null;
    case 3:
      return r = t.stateNode, Vn(), Z(Ae), Z(Ce), vs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (Li(lt), lt = null))), _i(e, t), je(t), null;
    case 5:
      gs(t);
      var a = ln(Rr.current);
      if (n = t.type, e !== null && t.stateNode != null) Jc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return je(t), null;
        }
        if (e = ln(yt.current), oa(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[gt] = t, r[Tr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < ur.length; a++) X(ur[a], r);
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
            ), a = ["children", "" + l]) : jr.hasOwnProperty(s) && l != null && s === "onScroll" && X("scroll", r);
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
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[gt] = t, e[Tr] = r, Kc(e, t, !1, !1), t.stateNode = e;
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
                for (a = 0; a < ur.length; a++) X(ur[a], e);
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
              o === "style" ? Pu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Eu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Sr(e, u) : typeof u == "number" && Sr(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (jr.hasOwnProperty(o) ? u != null && o === "onScroll" && X("scroll", e) : u != null && Wi(e, o, u, s));
            }
            switch (n) {
              case "input":
                Kr(e), Hs(e, r, !1);
                break;
              case "textarea":
                Kr(e), Qs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
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
        if (n = ln(Rr.current), ln(yt.current), oa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[gt] = t, (o = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
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
      if (Z(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128)) gc(), Un(), t.flags |= 98560, o = !1;
        else if (o = oa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[gt] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), o = !1;
        } else lt !== null && (Li(lt), lt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? fe === 0 && (fe = 3) : Ps())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return Vn(), _i(e, t), e === null && br(t.stateNode.containerInfo), je(t), null;
    case 10:
      return ps(t.type._context), je(t), null;
    case 17:
      return Ie(t.type) && La(), je(t), null;
    case 19:
      if (Z(re), o = t.memoizedState, o === null) return je(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) ar(o, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Fa(e), s !== null) {
            for (t.flags |= 128, ar(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return J(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ue() > Hn && (t.flags |= 128, r = !0, ar(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Fa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ar(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee) return je(t), null;
        } else 2 * ue() - o.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, ar(o, !1), t.lanes = 4194304);
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
function Vf(e, t) {
  switch (ls(t), t.tag) {
    case 1:
      return Ie(t.type) && La(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vn(), Z(Ae), Z(Ce), vs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
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
var la = !1, Se = !1, Gf = typeof WeakSet == "function" ? WeakSet : Set, L = null;
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
function Hf(e, t) {
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
            var v = N.memoizedProps, $ = N.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : it(t.type, v), $);
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
function gr(e, t, n) {
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
  t !== null && (e.alternate = null, Zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[Tr], delete t[fi], delete t[zf], delete t[Pf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
var ve = null, st = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) td(e, t, n), n = n.sibling;
}
function td(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function") try {
    vt.onCommitFiberUnmount(Ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Tn(n, t);
    case 6:
      var r = ve, a = st;
      ve = null, It(e, t, n), ve = r, st = a, ve !== null && (st ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (st ? (e = ve, n = n.stateNode, e.nodeType === 8 ? bo(e.parentNode, n) : e.nodeType === 1 && bo(e, n), Er(e)) : bo(ve, n.stateNode));
      break;
    case 4:
      r = ve, a = st, ve = n.stateNode.containerInfo, st = !0, It(e, t, n), ve = r, st = a;
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
      It(e, t, n);
      break;
    case 1:
      if (!Se && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        se(n, t, l);
      }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, It(e, t, n), Se = r) : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function Ol(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gf()), t.forEach(function(r) {
      var a = tm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            ve = l.stateNode, st = !1;
            break e;
          case 3:
            ve = l.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            ve = l.stateNode.containerInfo, st = !0;
            break e;
        }
        l = l.return;
      }
      if (ve === null) throw Error(E(160));
      td(o, s, a), ve = null, st = !1;
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
      if (ot(t, e), mt(e), r & 4) {
        try {
          gr(3, e, e.return), ao(3, e);
        } catch (v) {
          se(e, e.return, v);
        }
        try {
          gr(5, e, e.return);
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 1:
      ot(t, e), mt(e), r & 512 && n !== null && Tn(n, n.return);
      break;
    case 5:
      if (ot(t, e), mt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Sr(a, "");
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
            g === "style" ? Pu(a, y) : g === "dangerouslySetInnerHTML" ? Eu(a, y) : g === "children" ? Sr(a, y) : Wi(a, g, y, d);
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
          a[Tr] = o;
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 6:
      if (ot(t, e), mt(e), r & 4) {
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
      if (ot(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Er(t.containerInfo);
      } catch (v) {
        se(e, e.return, v);
      }
      break;
    case 4:
      ot(t, e), mt(e);
      break;
    case 13:
      ot(t, e), mt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ns = ue())), r & 4 && Ol(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (d = Se) || g, ot(t, e), Se = d) : ot(t, e), mt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1) for (L = e, g = e.child; g !== null; ) {
          for (y = L = g; L !== null; ) {
            switch (p = L, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, p, p.return);
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
      ot(t, e), mt(e), r & 4 && Ol(e);
      break;
    case 21:
      break;
    default:
      ot(
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
          r.flags & 32 && (Sr(a, ""), r.flags &= -33);
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
function Wf(e, t, n) {
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
              var a = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
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
var Qf = Math.ceil, qa = bt.ReactCurrentDispatcher, Cs = bt.ReactCurrentOwner, Ke = bt.ReactCurrentBatchConfig, V = 0, he = null, ce = null, ye = 0, Oe = 0, Ln = tn(0), fe = 0, $r = null, mn = 0, oo = 0, _s = 0, vr = null, Le = null, Ns = 0, Hn = 1 / 0, wt = null, Va = !1, bi = null, Yt = null, ua = !1, qt = null, Ga = 0, yr = 0, Mi = null, wa = -1, ka = 0;
function be() {
  return V & 6 ? ue() : wa !== -1 ? wa : wa = ue();
}
function Kt(e) {
  return e.mode & 1 ? V & 2 && ye !== 0 ? ye & -ye : Mf.transition !== null ? (ka === 0 && (ka = Bu()), ka) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qu(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < yr) throw yr = 0, Mi = null, Error(E(185));
  Vr(e, n, r), (!(V & 2) || e !== he) && (e === he && (!(V & 2) && (oo |= n), fe === 4 && Ft(e, ye)), De(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Hn = ue() + 500, to && nn()));
}
function De(e, t) {
  var n = e.callbackNode;
  bp(e, t);
  var r = za(e, e === he ? ye : 0);
  if (r === 0) n !== null && Js(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Js(n), t === 1) e.tag === 0 ? bf(ql.bind(null, e)) : fc(ql.bind(null, e)), Nf(function() {
      !(V & 6) && nn();
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
  var r = za(e, e === he ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ha(e, r);
  else {
    t = r;
    var a = V;
    V |= 2;
    var o = id();
    (he !== e || ye !== t) && (wt = null, Hn = ue() + 500, un(e, t));
    do
      try {
        Jf();
        break;
      } catch (l) {
        od(e, l);
      }
    while (!0);
    ds(), qa.current = o, V = a, ce !== null ? t = 0 : (he = null, ye = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (a = ai(e), a !== 0 && (r = a, t = Ti(e, a))), t === 1) throw n = $r, un(e, 0), Ft(e, r), De(e, ue()), n;
    if (t === 6) Ft(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Yf(a) && (t = Ha(e, r), t === 2 && (o = ai(e), o !== 0 && (r = o, t = Ti(e, o))), t === 1)) throw n = $r, un(e, 0), Ft(e, r), De(e, ue()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          an(e, Le, wt);
          break;
        case 3:
          if (Ft(e, r), (r & 130023424) === r && (t = Ns + 500 - ue(), 10 < t)) {
            if (za(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              be(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = pi(an.bind(null, e, Le, wt), t);
            break;
          }
          an(e, Le, wt);
          break;
        case 4:
          if (Ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ut(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pi(an.bind(null, e, Le, wt), r);
            break;
          }
          an(e, Le, wt);
          break;
        case 5:
          an(e, Le, wt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return De(e, ue()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function Ti(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = Ha(e, t), e !== 2 && (t = Le, Le = n, t !== null && Li(t)), e;
}
function Li(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function Yf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!dt(o(), a)) return !1;
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
function Ft(e, t) {
  for (t &= ~_s, t &= ~oo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ql(e) {
  if (V & 6) throw Error(E(327));
  On();
  var t = za(e, 0);
  if (!(t & 1)) return De(e, ue()), null;
  var n = Ha(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && (t = r, n = Ti(e, r));
  }
  if (n === 1) throw n = $r, un(e, 0), Ft(e, t), De(e, ue()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, an(e, Le, wt), De(e, ue()), null;
}
function Es(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (Hn = ue() + 500, to && nn());
  }
}
function hn(e) {
  qt !== null && qt.tag === 0 && !(V & 6) && On();
  var t = V;
  V |= 1;
  var n = Ke.transition, r = H;
  try {
    if (Ke.transition = null, H = 1, e) return e();
  } finally {
    H = r, Ke.transition = n, V = t, !(V & 6) && nn();
  }
}
function zs() {
  Oe = Ln.current, Z(Ln);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, _f(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (ls(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && La();
        break;
      case 3:
        Vn(), Z(Ae), Z(Ce), vs();
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
  if (he = e, ce = e = Jt(e.current, null), ye = Oe = t, fe = 0, $r = null, _s = oo = mn = 0, Le = vr = null, sn !== null) {
    for (t = 0; t < sn.length; t++) if (n = sn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    sn = null;
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
      if (fn = 0, me = pe = ae = null, hr = !1, Ar = 0, Cs.current = null, n === null || n.return === null) {
        fe = 1, $r = t, ce = null;
        break;
      }
      e: {
        var o = e, s = n.return, l = n, u = t;
        if (t = ye, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
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
        o = u = Gn(u, l), fe !== 4 && (fe = 2), vr === null ? vr = [o] : vr.push(o), o = s;
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
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Yt === null || !Yt.has(f)))) {
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
    } catch (j) {
      t = j, ce === n && n !== null && (ce = n = n.return);
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
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), he === null || !(mn & 268435455) && !(oo & 268435455) || Ft(he, ye);
}
function Ha(e, t) {
  var n = V;
  V |= 2;
  var r = id();
  (he !== e || ye !== t) && (wt = null, un(e, t));
  do
    try {
      Kf();
      break;
    } catch (a) {
      od(e, a);
    }
  while (!0);
  if (ds(), V = n, qa.current = r, ce !== null) throw Error(E(261));
  return he = null, ye = 0, fe;
}
function Kf() {
  for (; ce !== null; ) sd(ce);
}
function Jf() {
  for (; ce !== null && !kp(); ) sd(ce);
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
      if (n = Vf(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = qf(n, t, Oe), n !== null) {
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
function an(e, t, n) {
  var r = H, a = Ke.transition;
  try {
    Ke.transition = null, H = 1, Xf(e, t, n, r);
  } finally {
    Ke.transition = a, H = r;
  }
  return null;
}
function Xf(e, t, n, r) {
  do
    On();
  while (qt !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Mp(e, o), e === he && (ce = he = null, ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ua || (ua = !0, dd(Ea, function() {
    return On(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ke.transition, Ke.transition = null;
    var s = H;
    H = 1;
    var l = V;
    V |= 4, Cs.current = null, Hf(e, n), nd(n, e), yf(ci), Pa = !!ui, ci = ui = null, e.current = n, Wf(n), jp(), V = l, H = s, Ke.transition = o;
  } else e.current = n;
  if (ua && (ua = !1, qt = e, Ga = a), o = e.pendingLanes, o === 0 && (Yt = null), _p(n.stateNode), De(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Va) throw Va = !1, e = bi, bi = null, e;
  return Ga & 1 && e.tag !== 0 && On(), o = e.pendingLanes, o & 1 ? e === Mi ? yr++ : (yr = 0, Mi = e) : yr = 0, nn(), null;
}
function On() {
  if (qt !== null) {
    var e = Uu(Ga), t = Ke.transition, n = H;
    try {
      if (Ke.transition = null, H = 16 > e ? 16 : e, qt === null) var r = !1;
      else {
        if (e = qt, qt = null, Ga = 0, V & 6) throw Error(E(331));
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
                      gr(8, g, o);
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
                gr(9, o, o.return);
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
            } catch (j) {
              se(l, l.return, j);
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
        if (V = a, nn(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
          vt.onPostCommitFiberRoot(Ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, Ke.transition = t;
    }
  }
  return !1;
}
function Vl(e, t, n) {
  t = Gn(n, t), t = Uc(e, t, 1), e = Qt(e, t, 1), t = be(), e !== null && (Vr(e, 1, t), De(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Vl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Vl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
        e = Gn(n, e), e = qc(t, e, 1), t = Qt(t, e, 1), e = be(), t !== null && (Vr(t, 1, e), De(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Zf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > ue() - Ns ? un(e, 0) : _s |= n), De(e, t);
}
function ud(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = be();
  e = zt(e, t), e !== null && (Vr(e, t, n), De(e, n));
}
function em(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ud(e, n);
}
function tm(e, t) {
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
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) Re = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Re = !1, Uf(e, t, n);
    Re = !!(e.flags & 131072);
  }
  else Re = !1, ee && t.flags & 1048576 && mc(t, Ia, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xa(e, t), e = t.pendingProps;
      var a = Bn(t, Ce.current);
      $n(t, n), a = xs(null, t, r, e, a, n);
      var o = ws();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (o = !0, Ra(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ms(t), a.updater = ro, t.stateNode = a, a._reactInternals = t, xi(t, r, e, n), t = ji(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && ss(t), Pe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = rm(r), e = it(r, e), a) {
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
            t = Ll(null, t, r, it(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), ki(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), Rl(e, t, r, a, n);
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
        } else for (Fe = Wt(t.stateNode.containerInfo.firstChild), Be = t, ee = !0, lt = null, n = yc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === a) {
            t = Pt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kc(t), e === null && gi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, di(r, a) ? s = null : o !== null && di(r, o) && (t.flags |= 32), Hc(e, t), Pe(e, t, s, n), t.child;
    case 6:
      return e === null && gi(t), null;
    case 13:
      return Qc(e, t, n);
    case 4:
      return hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), Tl(e, t, r, a, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, J(Da, r._currentValue), r._currentValue = s, o !== null) if (dt(o.value, s)) {
          if (o.children === a.children && !Ae.current) {
            t = Pt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            s = o.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = _t(-1, n & -n), u.tag = 2;
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
        Pe(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, $n(t, n), a = Je(a), r = r(a), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = it(r, t.pendingProps), a = it(r.type, a), Ll(e, t, r, a, n);
    case 15:
      return Vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), xa(e, t), t.tag = 1, Ie(r) ? (e = !0, Ra(t)) : e = !1, $n(t, n), Bc(t, r, a), xi(t, r, a, n), ji(null, t, r, !0, e, n);
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
function nm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new nm(e, t, n, r);
}
function bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function rm(e) {
  if (typeof e == "function") return bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yi) return 11;
    if (e === Ki) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ja(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Sn:
      return cn(n.children, a, o, t);
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
        case Dt:
          s = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function cn(e, t, n, r) {
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
function am(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xo(0), this.expirationTimes = xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Ms(e, t, n, r, a, o, s, l, u) {
  return e = new am(e, t, n, l, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ms(o), e;
}
function om(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pd(e) {
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
          if (Ie(t.type)) {
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
    if (Ie(n)) return pc(e, n, t);
  }
  return t;
}
function fd(e, t, n, r, a, o, s, l, u) {
  return e = Ms(n, r, !0, e, a, o, s, l, u), e.context = pd(null), n = e.current, r = be(), a = Kt(n), o = _t(r, a), o.callback = t ?? null, Qt(n, o, a), e.current.lanes = a, Vr(e, a, r), De(e, r), e;
}
function so(e, t, n, r) {
  var a = t.current, o = be(), s = Kt(a);
  return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(a, t, s), e !== null && (ct(e, a, s, o), ga(e, a, s)), s;
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
function im() {
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
    hn(function() {
      so(null, e, null, null);
    }), t[Et] = null;
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Gu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++) ;
    Ot.splice(n, 0, e), n === 0 && Wu(e);
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
function sm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Wa(s);
        o.call(d);
      };
    }
    var s = fd(t, r, e, 0, null, !1, !1, "", Hl);
    return e._reactRootContainer = s, e[Et] = s.current, br(e.nodeType === 8 ? e.parentNode : e), hn(), s;
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
  return e._reactRootContainer = u, e[Et] = u.current, br(e.nodeType === 8 ? e.parentNode : e), hn(function() {
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
  } else s = sm(n, t, e, a, r);
  return Wa(s);
}
qu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lr(t.pendingLanes);
        n !== 0 && (Zi(t, n | 1), De(t, ue()), !(V & 6) && (Hn = ue() + 500, nn()));
      }
      break;
    case 13:
      hn(function() {
        var r = zt(e, 1);
        if (r !== null) {
          var a = be();
          ct(r, e, 1, a);
        }
      }), Ts(e, 1);
  }
};
es = function(e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = be();
      ct(t, e, 134217728, n);
    }
    Ts(e, 134217728);
  }
};
Vu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e), n = zt(e, t);
    if (n !== null) {
      var r = be();
      ct(n, e, t, r);
    }
    Ts(e, t);
  }
};
Gu = function() {
  return H;
};
Hu = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
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
Lu = hn;
var lm = { usingClientEntryPoint: !1, Events: [Hr, En, eo, bu, Mu, Es] }, or = { findFiberByHostInstance: on, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, um = { bundleType: or.bundleType, version: or.version, rendererPackageName: or.rendererPackageName, rendererConfig: or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Iu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: or.findFiberByHostInstance || im, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ca.isDisabled && ca.supportsFiber) try {
    Ka = ca.inject(um), vt = ca;
  } catch {
  }
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lm;
qe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rs(t)) throw Error(E(200));
  return om(e, t, null, n);
};
qe.createRoot = function(e, t) {
  if (!Rs(e)) throw Error(E(299));
  var n = !1, r = "", a = md;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ms(e, 1, !1, null, null, n, !1, r, a), e[Et] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Ls(t);
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
  return hn(e);
};
qe.hydrate = function(e, t, n) {
  if (!uo(t)) throw Error(E(200));
  return co(null, e, t, !0, n);
};
qe.hydrateRoot = function(e, t, n) {
  if (!Rs(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = md;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = fd(t, null, e, 1, n ?? null, a, !1, o, s), e[Et] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
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
  return e._reactRootContainer ? (hn(function() {
    co(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Et] = null;
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
var cm = hu.exports, gd, Wl = cm;
gd = Wl.createRoot, Wl.hydrateRoot;
const Ql = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, dm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, pm = [
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
], fm = [
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
function mm(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const xr = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(xr() + e, t);
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
  previewUrl: (e, t = !0) => `${xr()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}`,
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
  pageUrl: (e, t, n = !1, r = !1) => `${xr().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
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
  iconUrl: () => `${xr()}/api/icon.png?v=${Date.now()}`,
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
async function hm(e) {
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
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await hm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
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
}, xd = k.createContext("es");
function gm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(xd.Provider, { value: e, children: t });
}
function As() {
  return k.useContext(xd);
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
function vm(e, t, n) {
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
function Fr({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Br({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function ym({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function xm({ size: e }) {
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
function wm({ size: e }) {
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
function km({ size: e }) {
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
function Ur({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Sm({ size: e }) {
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
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function wr({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Di({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function zm({ size: e }) {
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
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(te, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsx(te, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Lm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ze(), o = k.useMemo(() => t.map((w) => w.id), [t]), [s, l] = k.useState(/* @__PURE__ */ new Set()), [u, d] = k.useState("escala"), [g, y] = k.useState(100), [p, S] = k.useState(50), [N, v] = k.useState("mayor"), [$, m] = k.useState("");
  k.useEffect(() => {
    e && (l(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const c = (w) => !s.has(w), f = (w) => l((x) => {
    const M = new Set(x);
    return M.has(w) ? M.delete(w) : M.add(w), M;
  }), h = () => l(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), j = (w) => {
    const x = w.w_mm_base || 0, M = w.h_mm_base || 0;
    return N === "mayor" ? Math.max(x, M) : N === "menor" ? Math.min(x, M) : 2 * Math.sqrt(Math.max(0, x * M) / Math.PI);
  }, C = (w) => {
    if (u === "tamano") {
      const x = j(w);
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
      await A.patchAsset(x.id, {
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
              children: /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(w.id), alt: "" })
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
                /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(w.id), alt: w.name }),
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
function Rm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1
}) {
  const s = Ze(), [l, u] = k.useState(() => Or(e));
  k.useEffect(() => u(Or(e)), [e]);
  const d = k.useRef(null), g = mm(l), [y, p] = k.useState(""), S = k.useRef(!1), [N, v] = k.useState(""), $ = k.useRef(!1), [m, c] = k.useState({ tamano: !1, borde: !1, mini: !1 });
  k.useEffect(() => {
    S.current || p(g.w > 0 ? g.w.toFixed(1) : ""), $.current || v(g.h > 0 ? g.h.toFixed(1) : "");
  }, [g.w, g.h]);
  const f = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, h = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, j = (x) => {
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
      await A.patchAsset(e.id, x);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ i.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: s("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => A.assetsFolder().then((x) => A.abrirCarpeta(x.path)).catch(() => A.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ i.jsx(Fr, { size: 16 })
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
            children: /* @__PURE__ */ i.jsx(ym, { size: 16 })
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
                  await A.reemplazar(e.id, le, _e), await n();
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
            children: /* @__PURE__ */ i.jsx(xm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? s("Restaurar fondo original") : s("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? A.restoreBackground(e.id) : A.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ i.jsx(wm, { size: 16 }) : /* @__PURE__ */ i.jsx(Qa, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: s("Eliminar imagen"),
            onClick: () => A.deleteAsset(e.id).then(n),
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
              /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
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
                onChange: (x) => j(x.target.value)
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
function Am({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s
}) {
  const l = Ze(), u = k.useRef(null), [d, g] = k.useState(!1), [y, p] = k.useState(null), S = async (v) => {
    const $ = [];
    for (const m of Array.from(v))
      try {
        const { blob: c, name: f } = await vd(m);
        $.push(Or(await A.upload(c, f)));
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
      Rm,
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
        onClick: () => A.clearAssets().then(r),
        children: l("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Lm,
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
  const a = Ze(), [o, s] = k.useState(null), [l, u] = k.useState("");
  k.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (g = "") => {
    u("");
    try {
      s(await A.fsList(g));
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
function Im({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Ze(), [l, u] = k.useState("resumen");
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
            /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
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
function Dm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: l, onRecalc: u, editando: d, onFinEdicion: g, onDeshacer: y, onRehacer: p, puedeDeshacer: S, puedeRehacer: N }) {
  const v = Ze(), $ = As(), [m, c] = k.useState(1), [f, h] = k.useState({ x: 0, y: 0 }), [j, C] = k.useState(null), [_, P] = k.useState(() => Date.now()), [w, x] = k.useState(null), [M, ne] = k.useState(null), [le, _e] = k.useState(!1), [pt, Ne] = k.useState(2), [$e, b] = k.useState([]), [O, F] = k.useState([]), [W, Q] = k.useState(""), [I, Y] = k.useState(/* @__PURE__ */ new Set()), ge = k.useRef(null), de = k.useRef(null), Ee = $ === "en" ? fm : pm, yn = k.useMemo(
    () => Ee[Math.floor(Math.random() * Ee.length)],
    [Ee]
  ), Kn = r.saveName.trim() || yn;
  k.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const R = (t == null ? void 0 : t.pages) ?? 0, B = !!t && t.efficiency < 0.8;
  k.useEffect(() => {
    const z = ge.current;
    if (!z) return;
    const D = (T) => {
      T.preventDefault(), T.stopPropagation();
      const G = z.getBoundingClientRect(), K = T.clientX - G.left, ze = T.clientY - G.top;
      c((He) => {
        const we = T.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, He * we)), Rt = ie / He;
        return h((At) => ({ x: K - (K - At.x) * Rt, y: ze - (ze - At.y) * Rt })), ie;
      });
    };
    return z.addEventListener("wheel", D, { passive: !1 }), () => z.removeEventListener("wheel", D);
  }, []);
  const et = (z) => {
    if (z.target.closest(".item-box")) return;
    de.current = { x: z.clientX - f.x, y: z.clientY - f.y };
    const D = (G) => {
      de.current && h({ x: G.clientX - de.current.x, y: G.clientY - de.current.y });
    }, T = () => {
      de.current = null, window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", T);
    };
    window.addEventListener("mousemove", D), window.addEventListener("mouseup", T);
  };
  k.useEffect(() => {
    const z = (D) => {
      D.target.tagName !== "INPUT" && (D.key === "+" || D.key === "=" ? c((T) => Math.min(12, T * 1.08)) : D.key === "-" || D.key === "_" ? c((T) => Math.max(0.05, T / 1.08)) : D.key === "0" ? (c(1), h({ x: 0, y: 0 })) : D.key === "Escape" ? C(null) : D.key === "g" ? a((T) => ({ ...T, guidesVisible: !T.guidesVisible })) : D.key === "t" && a((T) => T.eyeFosforito ? { ...T, eyeFosforito: !1, eyeTransparent: !1 } : T.eyeTransparent ? { ...T, eyeTransparent: !1, eyeFosforito: !0 } : { ...T, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [a]);
  const Ge = k.useRef(null), Jn = k.useRef(null), Mt = (z, D) => {
    z.preventDefault(), z.stopPropagation();
    const T = z.currentTarget.closest(".page-box");
    if (!T || !t) return;
    const G = t.page_mm[0] / T.clientWidth, K = {
      uid: D.uid,
      startX: z.clientX,
      startY: z.clientY,
      origX: D.x,
      origY: D.y,
      mmPerPx: G
    };
    Ge.current = K, Jn.current = { x: D.x, y: D.y }, x(K), ne({ uid: D.uid, x: D.x, y: D.y });
    const ze = (we) => {
      const ie = Ge.current;
      if (!ie) return;
      const Rt = (we.clientX - ie.startX) * ie.mmPerPx / m, At = (we.clientY - ie.startY) * ie.mmPerPx / m;
      Jn.current = { x: ie.origX + Rt, y: ie.origY + At }, ne({ uid: ie.uid, x: ie.origX + Rt, y: ie.origY + At });
    }, He = (we) => {
      window.removeEventListener("mousemove", ze), window.removeEventListener("mouseup", He);
      const ie = Ge.current;
      if (Ge.current = null, !ie) return;
      const Rt = (we.clientX - ie.startX) * ie.mmPerPx / m, At = (we.clientY - ie.startY) * ie.mmPerPx / m;
      x(null), ne(null), !(Math.abs(Rt) < 0.5 && Math.abs(At) < 0.5) && zd(ie.uid, ie.origX + Rt, ie.origY + At);
    };
    window.addEventListener("mousemove", ze), window.addEventListener("mouseup", He);
  }, zd = async (z, D, T) => {
    try {
      const G = await A.move(z, D, T);
      G.job ? l(G.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, Pd = async (z) => {
    const D = await A.unpin(z);
    l(D);
  }, bd = !1;
  k.useEffect(() => {
    {
      b([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, _]), k.useEffect(() => {
    if (!d) {
      F([]), Q(""), Y(/* @__PURE__ */ new Set());
      return;
    }
    A.blobs(d.id).then((z) => {
      F(z.blobs), Ne(z.union_mm ?? 2), Q(z.preview_png), Y(new Set(z.blobs.filter((D) => !D.principal).map((D) => D.id)));
    }).catch(() => {
      F([]), Q("");
    });
  }, [d]);
  const Is = async () => {
    if (d)
      try {
        await A.limpiarContorno(d.id, Array.from(I));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, Md = (z) => {
    Y((D) => {
      const T = new Set(D);
      return T.has(z) ? T.delete(z) : T.add(z), T;
    });
  }, [ft, Tt] = k.useState(null), Td = async () => {
    try {
      const T = await A.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Tt({ files: T.files, folder: T.folder });
    } catch (T) {
      Tt({ files: [], folder: "", error: T.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const G = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), K = URL.createObjectURL(G), ze = document.createElement("a");
        ze.href = K, ze.download = `${r.saveName || "crycat"}-cricut.pdf`, ze.click(), setTimeout(() => URL.revokeObjectURL(K), 4e3);
      } catch (T) {
        Tt({
          files: [],
          folder: "",
          error: T.message
        });
      }
      return;
    }
    const D = document.createElement("iframe");
    D.setAttribute("aria-hidden", "true"), D.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", D.src = "/api/print.pdf", D.onload = () => {
      var T, G;
      try {
        (T = D.contentWindow) == null || T.focus(), (G = D.contentWindow) == null || G.print();
      } finally {
        window.setTimeout(() => D.remove(), 6e4);
      }
    }, document.body.appendChild(D);
  }, Ld = async () => {
    try {
      const z = await A.export(Kn);
      Tt({ files: z.files, folder: z.folder });
    } catch (z) {
      Tt({ files: [], folder: "", error: z.message });
    }
  }, Rd = () => {
    _e(!0);
  }, Ad = async (z) => {
    try {
      const D = await A.export(Kn, z);
      Tt({ files: D.files, folder: D.folder });
    } catch (D) {
      Tt({ files: [], folder: "", error: D.message });
    }
  }, Ds = (t == null ? void 0 : t.poly_mm) ?? [], [tt, nt] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [xn, wn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Lt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : xn, fo = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : wn, rt = n.lienzo === "pagina" ? 0 : tt, at = n.lienzo === "pagina" ? 0 : nt, $s = Ds.length ? "M" + Ds.map(([z, D]) => `${z - rt},${D - at}`).join(" L") + " Z" : "", Id = (z) => {
    const D = (t == null ? void 0 : t.placements.filter((T) => T.page === z)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (T) => {
          R > 1 && j === null && !T.target.closest(".item-box") && C(z);
        },
        "data-testid": `page-${z}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: "sheet", src: A.pageUrl(z, _, n.simular_impresion === !0, r.verBordes), alt: v("Página {i}", { i: z + 1 }), draggable: !1 }),
          r.guidesVisible && $s && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Lt} ${fo}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Lt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((tt - rt + xn) / 10) + 1 },
                    (T, G) => {
                      const K = G * 10 - (rt - tt);
                      return K >= tt - rt - 0.01 && K <= tt - rt + xn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: K,
                          y1: nt - at,
                          x2: K,
                          y2: nt - at + wn
                        },
                        `v${G}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((nt - at + wn) / 10) + 1 },
                    (T, G) => {
                      const K = G * 10 - (at - nt);
                      return K >= nt - at - 0.01 && K <= nt - at + wn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: tt - rt,
                          y1: K,
                          x2: tt - rt + xn,
                          y2: K
                        },
                        `h${G}`
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
                strokeWidth: Math.max(0.5, Lt / 320),
                fill: "none",
                opacity: 0.9,
                children: [
                  [tt, nt, 1, 1],
                  [tt + xn, nt, -1, 1],
                  [tt, nt + wn, 1, -1],
                  [tt + xn, nt + wn, -1, -1]
                ].map(
                  ([T, G, K, ze], He) => /* @__PURE__ */ i.jsx(
                    "path",
                    {
                      d: `M ${T - rt + 9 * K} ${G - at} L ${T - rt} ${G - at} L ${T - rt} ${G - at + 9 * ze}`
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
                strokeWidth: Math.max(0.6, Lt / 250),
                strokeDasharray: `${Lt / 55} ${Lt / 85}`,
                opacity: 0.85
              }
            ),
            bd
          ] }),
          D.map((T) => {
            const G = e.find((we) => we.id === T.asset_id), K = (M == null ? void 0 : M.uid) === T.uid ? M : null, ze = ((K ? K.x : T.x) - rt) / (Lt || 1) * 100, He = ((K ? K.y : T.y) - at) / (fo || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${T.pinned ? "pinned" : ""} ${(w == null ? void 0 : w.uid) === T.uid ? "dragging" : ""}`,
                style: {
                  left: `${ze}%`,
                  top: `${He}%`,
                  width: `${T.w / (Lt || 1) * 100}%`,
                  height: `${T.h / (fo || 1) * 100}%`
                },
                title: (G == null ? void 0 : G.name) ?? "",
                onMouseDown: (we) => Mt(we, T),
                onContextMenu: (we) => {
                  we.preventDefault(), Pd(T.uid);
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
  }, Dd = j !== null ? [j] : Array.from({ length: R }, (z, D) => D);
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
          onClick: () => u(B ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Br, { size: 16 }),
            " ",
            v("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        R > 1 && j === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 4 })), children: "4" })
        ] }),
        j !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => C(null), title: v("Volver a la cuadrícula (Esc)"), children: v(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": v("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((z) => z.eyeFosforito ? { ...z, eyeFosforito: !1, eyeTransparent: !1 } : z.eyeTransparent ? { ...z, eyeTransparent: !1, eyeFosforito: !0 } : { ...z, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(km, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(Kl, { size: 16 }) : /* @__PURE__ */ i.jsx(Kl, { size: 16 }),
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
            children: /* @__PURE__ */ i.jsx(jm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": v("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !N,
            children: /* @__PURE__ */ i.jsx(Sm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": v("Acercar (+)"),
            onClick: () => c((z) => Math.min(12, z * 1.08)),
            children: /* @__PURE__ */ i.jsx(Cm, { size: 15 })
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
            children: /* @__PURE__ */ i.jsx(_m, { size: 15 })
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
            src: A.previewUrl(d.id) + `?t=${_}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && O.filter((z) => !z.principal).map((z, D) => {
          const [T, G, K, ze] = z.bbox, He = d.w_px || 1, we = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${I.has(z.id) ? " sel" : ""}`,
              "data-testid": `blob-${D}`,
              title: v("Trozo de {px} px — clic para {accion}", {
                px: z.area_px,
                accion: I.has(z.id) ? v("conservar") : v("quitar")
              }),
              style: {
                left: `${T / He * 100}%`,
                top: `${G / we * 100}%`,
                width: `${(K - T) / He * 100}%`,
                height: `${(ze - G) / we * 100}%`
              },
              onClick: () => Md(z.id)
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
              title: v("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: pt }),
              onClick: async () => {
                d && (await A.patchAsset(d.id, {
                  offset_mm: pt,
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
                { n: I.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: v("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: ge,
        className: `canvas ${w ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: et,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${m})` },
            children: [
              R === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: v("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
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
                  children: Dd.map(Id)
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
          placeholder: yn,
          value: r.saveName,
          onChange: (z) => a((D) => ({ ...D, saveName: z.target.value }))
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
            onClick: () => A.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Fr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Ld, children: v("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Rd, children: v("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Td,
            disabled: R === 0,
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
        onPick: Ad
      }
    ),
    /* @__PURE__ */ i.jsx(
      Im,
      {
        open: !!ft,
        files: (ft == null ? void 0 : ft.files) ?? [],
        folder: (ft == null ? void 0 : ft.folder) ?? "",
        error: ft == null ? void 0 : ft.error,
        onOpenFolder: (z) => void A.fsOpen(z).catch(() => {
        }),
        onClose: () => Tt(null)
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
function $m({ saveSettings: e }) {
  const t = Ze(), [n, r] = k.useState(
    {}
  ), [a, o] = k.useState([]), [s, l] = k.useState(!1), [u, d] = k.useState(!1), [g, y] = k.useState(""), [p, S] = k.useState(""), N = () => A.presets().then((c) => o(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  k.useEffect(() => {
    A.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
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
          const f = c.slice(9), h = await A.loadPreset(f);
          await e(h.settings), S(t("Perfil «{n}» cargado", { n: f }));
        }
      } catch {
        S(t("No se pudo aplicar el perfil"));
      }
  }, $ = async () => {
    const c = g.trim();
    if (c)
      try {
        const f = await A.savePreset(c);
        o(Array.isArray(f.names) ? f.names : []), y(""), l(!1), S(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        S(t("No se pudo guardar el perfil"));
      }
  }, m = async (c) => {
    try {
      o((await A.deletePreset(c)).names ?? []), S(t("Perfil «{n}» borrado", { n: c }));
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
function Om({ settings: e, saveSettings: t }) {
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
            /* @__PURE__ */ i.jsx(jd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx($m, { saveSettings: t })
  ] });
}
function Fm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
function xt({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
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
const Bm = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Um = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function qm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ze(), [a, o] = k.useState(!0), [s, l] = k.useState({
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
  }), [u, d] = k.useState(!1), g = k.useMemo(() => {
    const h = (n ?? []).filter((C) => C.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((C, _) => Math.min(_.w_mm, _.h_mm) - Math.min(C.w_mm, C.h_mm))[0] ?? null;
  }, [n]), y = g ? Math.min(g.w_mm, g.h_mm) : 0, p = e.modo === "experto", S = ({ children: h }) => p ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, N = (h) => l((j) => ({ ...j, [h]: !j[h] })), v = (h) => t(h), $ = k.useRef(null), m = ({ titulo: h, children: j }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(h) }),
    j
  ] }), c = (h, j, C, _, P = 1, w = "", x, M) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...M ? { "data-tip": r(M) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: C,
          max: _,
          step: P,
          "data-testid": `set-${j}`,
          value: String(e[j]),
          onChange: (ne) => {
            const le = Number(ne.target.value);
            Number.isNaN(le) || v({ [j]: le });
          }
        }
      ),
      w && /* @__PURE__ */ i.jsx("span", { className: "hint", children: w }),
      x
    ] })
  ] }), f = (h, j, C, _, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { children: r(h) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${j}`,
        value: String(e[j]),
        onChange: (w) => v({ [j]: w.target.value }),
        children: C.map(([w, x]) => /* @__PURE__ */ i.jsx("option", { value: w, children: r(x) }, w))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Om, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !p && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        xt,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(wr, { size: 15 }),
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
                      const j = h.target.value, C = dm[j];
                      v(C ? { pagina: j, pagina_w: C[0], pagina_h: C[1] } : { pagina: j });
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
        xt,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
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
                  (e.mini_tamanos_lista ?? []).map((h, j) => /* @__PURE__ */ i.jsx(
                    Fm,
                    {
                      i: j,
                      valor: h,
                      refBase: y,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (C) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[j] = C, v({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => v({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (C, _) => _ !== j
                        )
                      })
                    },
                    j
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
        xt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: N,
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
                  s: Bm[e.opt_metodo] ?? 8,
                  m: r(Um[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        xt,
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
        xt,
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
      p && /* @__PURE__ */ i.jsxs(xt, { id: "corte", title: r("Estimación de corte"), open: s.corte, toggle: N, children: [
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
        xt,
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
        xt,
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
                /* @__PURE__ */ i.jsx("img", { src: A.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
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
                      const j = (C = h.target.files) == null ? void 0 : C[0];
                      j && A.setIcon(j).then(() => {
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
        xt,
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
const jt = (e) => (globalThis.__crycatAssets || "") + e;
function eu(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Vm({
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
  var W, Q;
  const p = Ze(), S = As(), [N, v] = k.useState([]), [$, m] = k.useState(0), [c, f] = k.useState(null), [h, j] = k.useState(!1), [C, _] = k.useState(""), P = k.useRef(!1), w = k.useRef([]);
  k.useEffect(() => {
    fetch("/api/funmsgs").then((I) => I.ok ? I.json() : { msgs: [] }).then((I) => v(I.msgs ?? [])).catch(() => {
    });
  }, []), k.useEffect(() => {
    let I = !0;
    return A.version().then((Y) => {
      I && (f(Y), !Y.comprobado && !P.current && (P.current = !0, A.checkVersion().then((ge) => I && f(ge)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      I = !1;
    };
  }, []);
  const x = ((W = c == null ? void 0 : c.actualizacion) == null ? void 0 : W.estado) === "descargando" || ((Q = c == null ? void 0 : c.actualizacion) == null ? void 0 : Q.estado) === "instalando";
  k.useEffect(() => {
    if (!x) return;
    const I = setInterval(() => {
      A.version().then(f).catch(() => {
      });
    }, 700);
    return () => clearInterval(I);
  }, [x]);
  const M = !!(e && !e.done);
  k.useEffect(() => {
    if (!M) return;
    const I = setInterval(() => m((Y) => Y + 1), 1200);
    return () => clearInterval(I);
  }, [M]);
  const ne = N.length ? N : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], le = k.useMemo(() => {
    if (C) return C;
    if (x) {
      const I = c == null ? void 0 : c.actualizacion;
      if ((I == null ? void 0 : I.estado) === "instalando") return p("Instalando y reiniciando…");
      const Y = (I == null ? void 0 : I.progreso) != null ? Math.round(I.progreso) : null;
      return Y != null ? p("Descargando… {p}%", { p: Y }) : (I == null ? void 0 : I.mensaje) || p("Descargando actualización…");
    }
    return M ? ne[$ % ne.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? p("Listo") : p("Listo para empezar");
  }, [C, x, M, e, ne, $, n, p, c]), _e = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), pt = k.useMemo(() => {
    const I = e == null ? void 0 : e.eta_s;
    return !M || I === void 0 || I === null || I <= 0.5 ? "" : p(" · {x} restante", { x: eu(I) });
  }, [e == null ? void 0 : e.eta_s, M, p]), Ne = k.useMemo(() => !r || !r.segundos ? "" : eu(r.segundos), [r]), $e = async () => {
    j(!0), _("");
    try {
      const I = await A.checkVersion();
      f(I), I.error ? _(p("Sin conexión")) : I.hay_nueva || _(p("Estás en la última versión"));
    } catch {
      _(p("Sin conexión"));
    } finally {
      j(!1);
    }
  }, b = async () => {
    _("");
    try {
      const I = await A.updateVersion();
      I.ok ? _(p("Instalando y reiniciando…")) : I.modo === "dev" && I.url ? (_(p("Modo desarrollo: se actualiza con git")), await A.openReleases().catch(() => {
      })) : _(I.mensaje || p("No se pudo actualizar")), A.version().then(f).catch(() => {
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
          src: A.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: p("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const I = Date.now();
            w.current = [...w.current, I].filter((Y) => I - Y < 2500), w.current.length >= 5 && (w.current = [], _(p("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !M && (() => {
        const I = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), Y = n.placed || 1, ge = Math.min(80, Math.max(
          30,
          48 + 22 * I - Math.min(18, Y * 0.08)
        )), de = n.efficiency * 100, Ee = de >= ge ? "buena" : de >= ge * 0.72 ? "normal" : "baja";
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
              className: `stat-card eficiencia ${Ee}`,
              "data-testid": "eficiencia-card",
              "data-nivel": Ee,
              "data-tip": p("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: Y, e: Math.round(ge) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(de),
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
          pt
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: jt("/piensa.gif"),
            alt: "",
            title: p("Pensando…"),
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
          "data-tip": p("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ i.jsx(Mm, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(Tm, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(Em, { size: 15 })
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
                title: F || p("Hay una versión nueva"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(zm, { size: 14 })
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
                onClick: $e,
                disabled: h,
                children: h ? "…" : /* @__PURE__ */ i.jsx(bm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(Pm, { size: 14 })
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
const Gm = [
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
], Hm = "/pikmin_bloom/", tu = "/pikmin/alma.png", Wm = "/sonidos/pikmin.mp3", Qm = "/sonidos/pikmin_morir.mp3";
function Ym(e) {
  const [t, n] = k.useState(Gm), [r, a] = k.useState([]);
  return k.useEffect(() => {
    fetch(jt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(jt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let l = s.length - 1; l > 0; l--) {
        const u = Math.floor(Math.random() * (l + 1));
        [s[l], s[u]] = [s[u], s[l]];
      }
      a(s.slice(0, 60).map((l) => jt(Hm + l)));
    }).catch(() => {
    });
  }, []), k.useMemo(
    () => e && e.length ? [...e, ...r].map(jt) : [...t, ...r].map(jt),
    [e, t, r]
  );
}
function Km({
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
  const g = Ym(d), [y, p] = k.useState([]), S = k.useRef(void 0), N = k.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), v = k.useRef(s);
  v.current = s;
  const $ = Math.max(5e3, t * 6e4), m = (j) => {
    if (!(!n || o))
      try {
        const C = new Audio(jt(j ? Qm : Wm));
        C.volume = Math.min(1, Math.max(0, a)), C.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const j = r && Math.random() < 0.25, C = j ? jt(tu) : g[Math.floor(Math.random() * g.length)] ?? jt(tu);
    p((_) => [..._, {
      src: C,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: j,
      estado: "paseando"
    }]), m(j);
  }, f = () => {
    if (!e) return;
    const j = l ?? Math.round($ * 0.5), C = u ?? Math.round($ * 1.5), _ = j + Math.random() * Math.max(1, C - j);
    S.current = window.setTimeout(c, _);
  };
  k.useEffect(() => {
    if (!e) {
      window.clearTimeout(S.current), p([]);
      return;
    }
    return f(), () => window.clearTimeout(S.current);
  }, [e, t, n, r, a, o, g]), k.useEffect(() => {
    const j = () => {
      N.current = document.visibilityState === "hidden", !N.current && v.current && window.setTimeout(() => {
        p((C) => C.length ? (m(!1), C.map((_) => ({ ..._, estado: "festejando" }))) : C), window.setTimeout(() => {
          p([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", j), () => document.removeEventListener("visibilitychange", j);
  }, []);
  const h = (j) => {
    if (v.current && N.current) {
      p((C) => C.map((_) => _.key === j ? { ..._, estado: "quieto" } : _));
      return;
    }
    p((C) => C.filter((_) => _.key !== j)), f();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: y.map((j) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${j.estado}${j.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": j.estado,
      "data-morir": j.morir ? "1" : "0",
      style: { left: `${j.left}%` },
      onAnimationEnd: () => h(j.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: j.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => h(j.key)
        }
      )
    },
    j.key
  )) });
}
const nu = "crycat_bienvenida_v2";
function Jm() {
  const [e, t] = k.useState(!1);
  return k.useEffect(() => {
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
function Xm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ze(), [a, o] = k.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(Qa, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(jd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Di, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Nm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(wd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
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
const Zm = "https://github.com/dhernandezgit/CryCat-Tool", eh = [
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
function th({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Ze(), [s, l] = k.useState(""), [u, d] = k.useState(""), [g, y] = k.useState(""), [p, S] = k.useState(!0), [N, v] = k.useState(!0), [$, m] = k.useState(!0), [c, f] = k.useState(!1);
  k.useEffect(() => {
    e && (A.version().then((w) => l(w.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (x) => `- [${x.t}] ${x.msg} (${x.donde || "?"})`
  );
  if (!e) return null;
  const j = () => {
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
    p && w.push("### Entorno", j(), ""), N && n && w.push("### Ajustes", C(), "");
    const x = h();
    return $ && x.length && w.push("### Errores recogidos", x.join(`
`), ""), w.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), w.join(`
`);
  }, P = () => {
    const w = `[Bug] ${u.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, x = `${Zm}/issues/new?` + new URLSearchParams({
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
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: eh.map(([w, x]) => /* @__PURE__ */ i.jsx(
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
function nh() {
  const [e, t] = k.useState([]), [n, r] = k.useState(null), [a, o] = k.useState(null), [s, l] = k.useState(null), [u, d] = k.useState(null), [g, y] = k.useState(null), [p, S] = k.useState(!0), [N, v] = k.useState(!1), [$, m] = k.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, f] = k.useState(33.3), [h, j] = k.useState(33.3), C = Jm(), _ = k.useRef(null), P = k.useRef(null);
  k.useEffect(() => {
    (async () => {
      try {
        const R = await A.getSettings();
        d(R.settings), Yl(R.settings.tema), m((B) => ({
          ...B,
          guidesVisible: R.settings.ver_guias,
          eyeTransparent: R.settings.fondo_transparente
        })), t((await A.listAssets()).map(Or)), o(await A.result());
      } catch {
        S(!1);
      }
    })();
  }, []), k.useEffect(() => {
    const R = (B) => {
      const et = B.detail;
      f(et ? 19 : 33.3), j(et ? 62 : 33.3);
    };
    return window.addEventListener("crycat:disposicion", R), () => window.removeEventListener("crycat:disposicion", R);
  }, []), k.useEffect(() => {
    const R = setInterval(async () => {
      try {
        await A.health(), S(!0);
      } catch {
        S(!1);
      }
    }, 5e3);
    return () => clearInterval(R);
  }, []);
  const w = k.useCallback(async () => {
    try {
      t((await A.listAssets()).map(Or)), o(await A.result());
      try {
        l(await A.estimate());
      } catch {
      }
    } catch {
      S(!1);
    }
  }, []), x = k.useCallback((R) => {
    P.current && window.clearInterval(P.current), P.current = window.setInterval(async () => {
      try {
        const B = await A.job(R);
        y(B), B.done && (window.clearInterval(P.current), P.current = null, await w(), B.status === "done" && window.setTimeout(() => y(null), 2500));
      } catch {
        window.clearInterval(P.current), P.current = null;
      }
    }, 300);
  }, []), M = k.useCallback(async () => {
    try {
      const R = await A.optimize();
      y(R), x(R.id);
    } catch {
      S(!1);
    }
  }, [x]), ne = k.useCallback(
    async (R) => {
      try {
        const B = await A.optimize(R, !0);
        y(B), x(B.id);
      } catch {
        S(!1);
      }
    },
    [x]
  ), le = k.useCallback(() => {
    u && u.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(M, 400));
  }, [M, u]), _e = k.useRef(null);
  k.useEffect(() => {
    _e.current = le;
  }, [le]);
  const pt = k.useRef(!1);
  k.useEffect(() => {
    if (!(!u || pt.current)) {
      if (e.length > 0) {
        pt.current = !0;
        return;
      }
      pt.current = !0, A.crearDemo().then(async (R) => {
        var B;
        R.ok && (await w(), (B = _e.current) == null || B.call(_e));
      }).catch(() => {
      });
    }
  }, [u, e.length, w]);
  const Ne = k.useCallback(
    async (R) => {
      d((B) => B && { ...B, ...R }), R.tema && Yl(R.tema);
      try {
        const B = await A.putSettings(R);
        if (B.job)
          y(B.job), x(B.job.id);
        else
          try {
            l(await A.estimate());
          } catch {
          }
      } catch {
        S(!1);
      }
    },
    [x]
  ), $e = k.useRef([]), b = k.useRef([]), [O, F] = k.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), W = (u == null ? void 0 : u.historial) !== !1, Q = (u == null ? void 0 : u.historial_max) ?? 40, I = () => F({
    puedeDeshacer: $e.current.length > 0,
    puedeRehacer: b.current.length > 0
  }), Y = k.useCallback(() => {
    const R = [];
    return (u == null ? void 0 : u.hist_tamano) !== !1 && R.push("scale_pct"), (u == null ? void 0 : u.hist_copias) !== !1 && R.push("copies"), (u == null ? void 0 : u.hist_borde) !== !1 && R.push("offset_mm", "offset_modo", "offset_color"), (u == null ? void 0 : u.hist_minis) !== !1 && R.push("mini_enabled", "mini_quota"), R;
  }, [
    u == null ? void 0 : u.hist_tamano,
    u == null ? void 0 : u.hist_copias,
    u == null ? void 0 : u.hist_borde,
    u == null ? void 0 : u.hist_minis
  ]), ge = k.useCallback((R) => {
    const B = {};
    for (const et of Y()) B[et] = R[et];
    return B;
  }, [Y]), de = k.useCallback(() => {
    W && ($e.current = [...$e.current, e].slice(-Q), b.current = [], I());
  }, [e, W, Q]), Ee = k.useCallback(async () => {
    const R = $e.current.pop();
    if (R) {
      b.current = [...b.current, e], t(R), I();
      for (const B of R)
        await A.patchAsset(B.id, ge(B)).catch(() => {
        });
      await w();
    }
  }, [e, w, ge]), yn = k.useCallback(async () => {
    const R = b.current.pop();
    if (R) {
      $e.current = [...$e.current, e], t(R), I();
      for (const B of R)
        await A.patchAsset(B.id, ge(B)).catch(() => {
        });
      await w();
    }
  }, [e, w, ge]);
  k.useEffect(() => {
    const R = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const Ge = B.target;
      if (Ge && (Ge.tagName === "INPUT" || Ge.tagName === "TEXTAREA" || Ge.tagName === "SELECT" || Ge.isContentEditable)) return;
      const Mt = B.key.toLowerCase();
      Mt === "z" && !B.shiftKey ? (B.preventDefault(), Ee()) : (Mt === "y" || Mt === "z" && B.shiftKey) && (B.preventDefault(), yn());
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [Ee, yn]);
  const Kn = k.useCallback(
    (R) => {
      const B = (Ge) => {
        const Jn = window.innerWidth, Mt = Ge.clientX / Jn * 100;
        R === "left" ? f(Math.min(45, Math.max(12, Mt))) : j(Math.min(60, Math.max(20, Mt - c)));
      }, et = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", et);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", et);
    },
    [c]
  );
  return k.useEffect(() => {
    document.documentElement.lang = (u == null ? void 0 : u.idioma) ?? "es";
  }, [u == null ? void 0 : u.idioma]), u ? /* @__PURE__ */ i.jsx(gm, { idioma: u.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Am,
        {
          assets: e,
          result: a,
          settings: u,
          onChange: async () => {
            await w(), le();
          },
          saveSettings: Ne,
          onEditarContorno: (R) => r(R),
          onAntesDeCambiar: de
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Kn("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ i.jsx(
        Dm,
        {
          assets: e,
          result: a,
          settings: u,
          ui: $,
          setUi: m,
          saveSettings: Ne,
          optimize: M,
          onRefresh: w,
          onJob: (R) => {
            y(R), x(R.id);
          },
          onRecalc: ne,
          editando: n,
          onFinEdicion: async () => {
            r(null), await w();
          },
          onDeshacer: Ee,
          onRehacer: yn,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Kn("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        qm,
        {
          settings: u,
          assets: e,
          saveSettings: Ne
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Vm,
      {
        job: g,
        backendOk: p,
        result: a,
        estimate: s,
        volumen: u.volumen ?? 0.5,
        mute: u.mute ?? !1,
        onVolumen: (R) => Ne({ volumen: R }),
        onMute: (R) => Ne({ mute: R }),
        onIdioma: (R) => Ne({ idioma: R }),
        onEasterEgg: () => Ne({
          pikmin_fiesta: !u.pikmin_fiesta
        }),
        onAyuda: C.abrir,
        onReportar: () => v(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      Km,
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
      Xm,
      {
        open: C.visible,
        onClose: C.cerrar,
        onAbrirCarpeta: () => void A.fsOpen(
          u.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      th,
      {
        open: N,
        onClose: () => v(!1),
        settings: u,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: vm("es", "Cargando CryCat…") });
}
const Nd = document.getElementById("root"), Bt = [
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
  let r = Math.floor(Math.random() * Bt.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Bt[r++ % Bt.length]);
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
let kr = null, Bo;
const Fi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, rh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function ah(e) {
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
async function oh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((y, p) => {
    s[p] = y;
  });
  let l = "";
  const u = n == null ? void 0 : n.body;
  if (u instanceof FormData) {
    const [y, p] = await ah(u);
    l = y, s["content-type"] = p;
  } else u instanceof Blob ? l = Fi(await u.arrayBuffer()) : typeof u == "string" && (l = Fi(new TextEncoder().encode(u).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(l) + ")", g = JSON.parse(await kr.runPythonAsync(d));
  return new Response(rh(g.body), {
    status: g.status || 200,
    headers: g.headers || { "content-type": "application/json" }
  });
}
function ih() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && kr)
      try {
        return await oh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function sh() {
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
    kr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Fo), Fo("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await kr.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(l.method) + ", " + JSON.stringify(l.path) + ", " + JSON.stringify(JSON.stringify(l.headers || {})) + ", " + JSON.stringify(l.body || "") + ")", g = await kr.runPythonAsync(d);
          u.postMessage(JSON.parse(g));
        } catch (d) {
          u.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (d && d.message ? d.message : d))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, ih();
    const n = document.createElement("div");
    n.id = "crycat-espera";
    const r = Ii().colors;
    n.style.cssText = "position:fixed;inset:0;display:none;z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:" + r.bg + "f2;font:16px system-ui;color:" + r.textSoft + ";text-align:center;padding:24px", n.innerHTML = '<img src="./app/icono.png" alt="" style="width:72px;height:72px;border-radius:20px" /><div id="espera-frase" style="font-size:20px;font-weight:800;color:' + r.text + ';max-width:620px;line-height:1.25"></div><div style="font-size:13px">Optimizando de verdad: el cálculo se hace en tu equipo y puede tardar unos segundos.</div>', document.body.appendChild(n);
    const a = window.fetch.bind(window), o = async (s, l) => {
      const u = String((s == null ? void 0 : s.url) ?? s ?? ""), d = u.includes("/api/optimize") || u.includes("/api/demo");
      if (d) {
        n.style.display = "flex";
        const g = document.getElementById("espera-frase");
        let y = Math.floor(Math.random() * Bt.length);
        g && (g.textContent = Bt[y++ % Bt.length]), window.clearInterval(Bo), Bo = window.setInterval(() => {
          const p = document.getElementById("espera-frase");
          p && (p.textContent = Bt[y++ % Bt.length]);
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
      s && s !== "wiwi" && await fetch(xr() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: s })
      });
    } catch {
    }
    Fo("Abriendo la aplicación…", 7), window.clearTimeout(Oi), gd(Nd).render(/* @__PURE__ */ i.jsx(nh, {}));
  } catch (e) {
    ru("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
sh();
