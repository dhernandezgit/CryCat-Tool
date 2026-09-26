var Ls = { exports: {} }, La = {}, Rs = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr = Symbol.for("react.element"), cd = Symbol.for("react.portal"), dd = Symbol.for("react.fragment"), fd = Symbol.for("react.strict_mode"), pd = Symbol.for("react.profiler"), md = Symbol.for("react.provider"), hd = Symbol.for("react.context"), vd = Symbol.for("react.forward_ref"), gd = Symbol.for("react.suspense"), yd = Symbol.for("react.memo"), xd = Symbol.for("react.lazy"), yo = Symbol.iterator;
function wd(e) {
  return e === null || typeof e != "object" ? null : (e = yo && e[yo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ds = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Is = Object.assign, As = {};
function On(e, t, n) {
  this.props = e, this.context = t, this.refs = As, this.updater = n || Ds;
}
On.prototype.isReactComponent = {};
On.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Os() {
}
Os.prototype = On.prototype;
function yl(e, t, n) {
  this.props = e, this.context = t, this.refs = As, this.updater = n || Ds;
}
var xl = yl.prototype = new Os();
xl.constructor = yl;
Is(xl, On.prototype);
xl.isPureReactComponent = !0;
var xo = Array.isArray, $s = Object.prototype.hasOwnProperty, wl = { current: null }, Fs = { key: !0, ref: !0, __self: !0, __source: !0 };
function bs(e, t, n) {
  var r, a = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) $s.call(t, r) && !Fs.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Pr, type: e, key: i, ref: o, props: a, _owner: wl.current };
}
function kd(e, t) {
  return { $$typeof: Pr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function kl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pr;
}
function Sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wo = /\/+/g;
function Ya(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sd("" + e.key) : t.toString(36);
}
function Kr(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Pr:
        case cd:
          o = !0;
      }
  }
  if (o) return o = e, a = a(o), e = r === "" ? "." + Ya(o, 0) : r, xo(a) ? (n = "", e != null && (n = e.replace(wo, "$&/") + "/"), Kr(a, t, n, "", function(f) {
    return f;
  })) : a != null && (kl(a) && (a = kd(a, n + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(wo, "$&/") + "/") + e)), t.push(a)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", xo(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ya(i, u);
    o += Kr(i, t, n, s, a);
  }
  else if (s = wd(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ya(i, u++), o += Kr(i, t, n, s, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Kr(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function jd(e) {
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
var Pe = { current: null }, Xr = { transition: null }, Cd = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Xr, ReactCurrentOwner: wl };
function Us() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: Rr, forEach: function(e, t, n) {
  Rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!kl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = On;
H.Fragment = dd;
H.Profiler = pd;
H.PureComponent = yl;
H.StrictMode = fd;
H.Suspense = gd;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cd;
H.act = Us;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Is({}, e.props), a = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = wl.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) $s.call(t, s) && !Fs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Pr, type: e.type, key: a, ref: i, props: r, _owner: o };
};
H.createContext = function(e) {
  return e = { $$typeof: hd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: md, _context: e }, e.Consumer = e;
};
H.createElement = bs;
H.createFactory = function(e) {
  var t = bs.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: vd, render: e };
};
H.isValidElement = kl;
H.lazy = function(e) {
  return { $$typeof: xd, _payload: { _status: -1, _result: e }, _init: jd };
};
H.memo = function(e, t) {
  return { $$typeof: yd, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = Xr.transition;
  Xr.transition = {};
  try {
    e();
  } finally {
    Xr.transition = t;
  }
};
H.unstable_act = Us;
H.useCallback = function(e, t) {
  return Pe.current.useCallback(e, t);
};
H.useContext = function(e) {
  return Pe.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return Pe.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return Pe.current.useEffect(e, t);
};
H.useId = function() {
  return Pe.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return Pe.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return Pe.current.useRef(e);
};
H.useState = function(e) {
  return Pe.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return Pe.current.useTransition();
};
H.version = "18.3.1";
Rs.exports = H;
var k = Rs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d = k, Nd = Symbol.for("react.element"), Ed = Symbol.for("react.fragment"), Pd = Object.prototype.hasOwnProperty, zd = _d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bs(e, t, n) {
  var r, a = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Pd.call(t, r) && !Td.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Nd, type: e, key: i, ref: o, props: a, _owner: zd.current };
}
La.Fragment = Ed;
La.jsx = Bs;
La.jsxs = Bs;
Ls.exports = La;
var l = Ls.exports, Vs = { exports: {} }, Fe = {}, Hs = { exports: {} }, Ws = {};
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
  function t(T, $) {
    var b = T.length;
    T.push($);
    e: for (; 0 < b; ) {
      var W = b - 1 >>> 1, M = T[W];
      if (0 < a(M, $)) T[W] = $, T[b] = M, b = W;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0], b = T.pop();
    if (b !== $) {
      T[0] = b;
      e: for (var W = 0, M = T.length, ae = M >>> 1; W < ae; ) {
        var we = 2 * (W + 1) - 1, ct = T[we], L = we + 1, U = T[L];
        if (0 > a(ct, b)) L < M && 0 > a(U, ct) ? (T[W] = U, T[L] = b, W = L) : (T[W] = ct, T[we] = b, W = we);
        else if (L < M && 0 > a(U, b)) T[W] = U, T[L] = b, W = L;
        else break e;
      }
    }
    return $;
  }
  function a(T, $) {
    var b = T.sortIndex - $.sortIndex;
    return b !== 0 ? b : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], f = [], v = 1, m = null, h = 3, C = !1, N = !1, y = !1, F = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var $ = n(f); $ !== null; ) {
      if ($.callback === null) r(f);
      else if ($.startTime <= T) r(f), $.sortIndex = $.expirationTime, t(s, $);
      else break;
      $ = n(f);
    }
  }
  function w(T) {
    if (y = !1, p(T), !N) if (n(s) !== null) N = !0, ce(S);
    else {
      var $ = n(f);
      $ !== null && he(w, $.startTime - T);
    }
  }
  function S(T, $) {
    N = !1, y && (y = !1, d(_), _ = -1), C = !0;
    var b = h;
    try {
      for (p($), m = n(s); m !== null && (!(m.expirationTime > $) || T && !B()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, h = m.priorityLevel;
          var M = W(m.expirationTime <= $);
          $ = e.unstable_now(), typeof M == "function" ? m.callback = M : m === n(s) && r(s), p($);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var ae = !0;
      else {
        var we = n(f);
        we !== null && he(w, we.startTime - $), ae = !1;
      }
      return ae;
    } finally {
      m = null, h = b, C = !1;
    }
  }
  var g = !1, j = null, _ = -1, P = 5, R = -1;
  function B() {
    return !(e.unstable_now() - R < P);
  }
  function Q() {
    if (j !== null) {
      var T = e.unstable_now();
      R = T;
      var $ = !0;
      try {
        $ = j(!0, T);
      } finally {
        $ ? x() : (g = !1, j = null);
      }
    } else g = !1;
  }
  var x;
  if (typeof c == "function") x = function() {
    c(Q);
  };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(), re = V.port2;
    V.port1.onmessage = Q, x = function() {
      re.postMessage(null);
    };
  } else x = function() {
    F(Q, 0);
  };
  function ce(T) {
    j = T, g || (g = !0, x());
  }
  function he(T, $) {
    _ = F(function() {
      T(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    N || C || (N = !0, ce(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = h;
    }
    var b = h;
    h = $;
    try {
      return T();
    } finally {
      h = b;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, $) {
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
    var b = h;
    h = T;
    try {
      return $();
    } finally {
      h = b;
    }
  }, e.unstable_scheduleCallback = function(T, $, b) {
    var W = e.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? W + b : W) : b = W, T) {
      case 1:
        var M = -1;
        break;
      case 2:
        M = 250;
        break;
      case 5:
        M = 1073741823;
        break;
      case 4:
        M = 1e4;
        break;
      default:
        M = 5e3;
    }
    return M = b + M, T = { id: v++, callback: $, priorityLevel: T, startTime: b, expirationTime: M, sortIndex: -1 }, b > W ? (T.sortIndex = b, t(f, T), n(s) === null && T === n(f) && (y ? (d(_), _ = -1) : y = !0, he(w, b - W))) : (T.sortIndex = M, t(s, T), N || C || (N = !0, ce(S))), T;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(T) {
    var $ = h;
    return function() {
      var b = h;
      h = $;
      try {
        return T.apply(this, arguments);
      } finally {
        h = b;
      }
    };
  };
})(Ws);
Hs.exports = Ws;
var Md = Hs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld = k, $e = Md;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Gs = /* @__PURE__ */ new Set(), ur = {};
function sn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Gs.add(t[e]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ji = Object.prototype.hasOwnProperty, Rd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ko = {}, So = {};
function Dd(e) {
  return ji.call(So, e) ? !0 : ji.call(ko, e) ? !1 : Rd.test(e) ? So[e] = !0 : (ko[e] = !0, !1);
}
function Id(e, t, n, r) {
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
function Ad(e, t, n, r) {
  if (t === null || typeof t > "u" || Id(e, t, n, r)) return !0;
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
function ze(e, t, n, r, a, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sl = /[\-:]([a-z])/g;
function jl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Sl,
    jl
  );
  xe[t] = new ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Sl, jl);
  xe[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Sl, jl);
  xe[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cl(e, t, n, r) {
  var a = xe.hasOwnProperty(t) ? xe[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ad(t, n, a, r) && (n = null), r || a === null ? Dd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dr = Symbol.for("react.element"), fn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), _l = Symbol.for("react.strict_mode"), Ci = Symbol.for("react.profiler"), qs = Symbol.for("react.provider"), Qs = Symbol.for("react.context"), Nl = Symbol.for("react.forward_ref"), _i = Symbol.for("react.suspense"), Ni = Symbol.for("react.suspense_list"), El = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Ys = Symbol.for("react.offscreen"), jo = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object" ? null : (e = jo && e[jo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, Ka;
function Yn(e) {
  if (Ka === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ka = t && t[1] || "";
  }
  return `
` + Ka + e;
}
var Xa = !1;
function Ja(e, t) {
  if (!e || Xa) return "";
  Xa = !0;
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
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var a = f.stack.split(`
`), i = r.stack.split(`
`), o = a.length - 1, u = i.length - 1; 1 <= o && 0 <= u && a[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (a[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || a[o] !== i[u]) {
              var s = `
` + a[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    Xa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Od(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ja(e.type, !1), e;
    case 11:
      return e = Ja(e.type.render, !1), e;
    case 1:
      return e = Ja(e.type, !0), e;
    default:
      return "";
  }
}
function Ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case fn:
      return "Portal";
    case Ci:
      return "Profiler";
    case _l:
      return "StrictMode";
    case _i:
      return "Suspense";
    case Ni:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Qs:
      return (e.displayName || "Context") + ".Consumer";
    case qs:
      return (e._context.displayName || "Context") + ".Provider";
    case Nl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case El:
      return t = e.displayName || null, t !== null ? t : Ei(e.type) || "Memo";
    case Pt:
      t = e._payload, e = e._init;
      try {
        return Ei(e(t));
      } catch {
      }
  }
  return null;
}
function $d(e) {
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
      return Ei(t);
    case 8:
      return t === _l ? "StrictMode" : "Mode";
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
function Bt(e) {
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
function Ks(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fd(e) {
  var t = Ks(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ir(e) {
  e._valueTracker || (e._valueTracker = Fd(e));
}
function Xs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ks(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function sa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pi(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Co(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Js(e, t) {
  t = t.checked, t != null && Cl(e, "checked", t, !1);
}
function zi(e, t) {
  Js(e, t);
  var n = Bt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ti(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _o(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ti(e, t, n) {
  (t !== "number" || sa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function Cn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function No(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function Zs(e, t) {
  var n = Bt(t.value), r = Bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Eo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function eu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? eu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ar, tu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
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
}, bd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function(e) {
  bd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zn[t] = Zn[e];
  });
});
function nu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zn.hasOwnProperty(e) && Zn[e] ? ("" + t).trim() : t + "px";
}
function ru(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = nu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Ud = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ri(e, t) {
  if (t) {
    if (Ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Di(e, t) {
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
var Ii = null;
function Pl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ai = null, _n = null, Nn = null;
function Po(e) {
  if (e = Mr(e)) {
    if (typeof Ai != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Oa(t), Ai(e.stateNode, e.type, t));
  }
}
function au(e) {
  _n ? Nn ? Nn.push(e) : Nn = [e] : _n = e;
}
function iu() {
  if (_n) {
    var e = _n, t = Nn;
    if (Nn = _n = null, Po(e), t) for (e = 0; e < t.length; e++) Po(t[e]);
  }
}
function lu(e, t) {
  return e(t);
}
function ou() {
}
var Za = !1;
function su(e, t, n) {
  if (Za) return e(t, n);
  Za = !0;
  try {
    return lu(e, t, n);
  } finally {
    Za = !1, (_n !== null || Nn !== null) && (ou(), iu());
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oa(n);
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
var Oi = !1;
if (gt) try {
  var Bn = {};
  Object.defineProperty(Bn, "passive", { get: function() {
    Oi = !0;
  } }), window.addEventListener("test", Bn, Bn), window.removeEventListener("test", Bn, Bn);
} catch {
  Oi = !1;
}
function Bd(e, t, n, r, a, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var er = !1, ua = null, ca = !1, $i = null, Vd = { onError: function(e) {
  er = !0, ua = e;
} };
function Hd(e, t, n, r, a, i, o, u, s) {
  er = !1, ua = null, Bd.apply(Vd, arguments);
}
function Wd(e, t, n, r, a, i, o, u, s) {
  if (Hd.apply(this, arguments), er) {
    if (er) {
      var f = ua;
      er = !1, ua = null;
    } else throw Error(E(198));
    ca || (ca = !0, $i = f);
  }
}
function un(e) {
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
function uu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function zo(e) {
  if (un(e) !== e) throw Error(E(188));
}
function Gd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = un(e), t === null) throw Error(E(188));
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
        if (i === n) return zo(a), e;
        if (i === r) return zo(a), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = a, r = i;
    else {
      for (var o = !1, u = a.child; u; ) {
        if (u === n) {
          o = !0, n = a, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = a, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = a;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = a;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function cu(e) {
  return e = Gd(e), e !== null ? du(e) : null;
}
function du(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = du(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fu = $e.unstable_scheduleCallback, To = $e.unstable_cancelCallback, qd = $e.unstable_shouldYield, Qd = $e.unstable_requestPaint, oe = $e.unstable_now, Yd = $e.unstable_getCurrentPriorityLevel, zl = $e.unstable_ImmediatePriority, pu = $e.unstable_UserBlockingPriority, da = $e.unstable_NormalPriority, Kd = $e.unstable_LowPriority, mu = $e.unstable_IdlePriority, Ra = null, st = null;
function Xd(e) {
  if (st && typeof st.onCommitFiberRoot == "function") try {
    st.onCommitFiberRoot(Ra, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ze = Math.clz32 ? Math.clz32 : ef, Jd = Math.log, Zd = Math.LN2;
function ef(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jd(e) / Zd | 0) | 0;
}
var Or = 64, $r = 4194304;
function Xn(e) {
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
function fa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~a;
    u !== 0 ? r = Xn(u) : (i &= o, i !== 0 && (r = Xn(i)));
  } else o = n & ~a, o !== 0 ? r = Xn(o) : i !== 0 && (r = Xn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ze(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function tf(e, t) {
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
function nf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Ze(i), u = 1 << o, s = a[o];
    s === -1 ? (!(u & n) || u & r) && (a[o] = tf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Fi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hu() {
  var e = Or;
  return Or <<= 1, !(Or & 4194240) && (Or = 64), e;
}
function ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function rf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - Ze(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Tl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var Y = 0;
function vu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gu, Ml, yu, xu, wu, bi = !1, Fr = [], Dt = null, It = null, At = null, fr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Tt = [], af = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Mo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Mr(t), t !== null && Ml(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function lf(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Dt = Vn(Dt, e, t, n, r, a), !0;
    case "dragenter":
      return It = Vn(It, e, t, n, r, a), !0;
    case "mouseover":
      return At = Vn(At, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return fr.set(i, Vn(fr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, pr.set(i, Vn(pr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function ku(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = uu(n), t !== null) {
          e.blockedOn = t, wu(e.priority, function() {
            yu(n);
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
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ii = r, n.target.dispatchEvent(r), Ii = null;
    } else return t = Mr(n), t !== null && Ml(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Lo(e, t, n) {
  Jr(e) && n.delete(t);
}
function of() {
  bi = !1, Dt !== null && Jr(Dt) && (Dt = null), It !== null && Jr(It) && (It = null), At !== null && Jr(At) && (At = null), fr.forEach(Lo), pr.forEach(Lo);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bi || (bi = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, of)));
}
function mr(e) {
  function t(a) {
    return Hn(a, e);
  }
  if (0 < Fr.length) {
    Hn(Fr[0], e);
    for (var n = 1; n < Fr.length; n++) {
      var r = Fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Dt !== null && Hn(Dt, e), It !== null && Hn(It, e), At !== null && Hn(At, e), fr.forEach(t), pr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) ku(n), n.blockedOn === null && Tt.shift();
}
var En = kt.ReactCurrentBatchConfig, pa = !0;
function sf(e, t, n, r) {
  var a = Y, i = En.transition;
  En.transition = null;
  try {
    Y = 1, Ll(e, t, n, r);
  } finally {
    Y = a, En.transition = i;
  }
}
function uf(e, t, n, r) {
  var a = Y, i = En.transition;
  En.transition = null;
  try {
    Y = 4, Ll(e, t, n, r);
  } finally {
    Y = a, En.transition = i;
  }
}
function Ll(e, t, n, r) {
  if (pa) {
    var a = Ui(e, t, n, r);
    if (a === null) ci(e, t, r, ma, n), Mo(e, r);
    else if (lf(a, e, t, n, r)) r.stopPropagation();
    else if (Mo(e, r), t & 4 && -1 < af.indexOf(e)) {
      for (; a !== null; ) {
        var i = Mr(a);
        if (i !== null && gu(i), i = Ui(e, t, n, r), i === null && ci(e, t, r, ma, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else ci(e, t, r, null, n);
  }
}
var ma = null;
function Ui(e, t, n, r) {
  if (ma = null, e = Pl(r), e = Kt(e), e !== null) if (t = un(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = uu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ma = e, null;
}
function Su(e) {
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
      switch (Yd()) {
        case zl:
          return 1;
        case pu:
          return 4;
        case da:
        case Kd:
          return 16;
        case mu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null, Rl = null, Zr = null;
function ju() {
  if (Zr) return Zr;
  var e, t = Rl, n = t.length, r, a = "value" in Lt ? Lt.value : Lt.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === a[i - r]; r++) ;
  return Zr = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ea(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function br() {
  return !0;
}
function Ro() {
  return !1;
}
function be(e) {
  function t(n, r, a, i, o) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? br : Ro, this.isPropagationStopped = Ro, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = br);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = br);
  }, persist: function() {
  }, isPersistent: br }), t;
}
var $n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Dl = be($n), Tr = ne({}, $n, { view: 0, detail: 0 }), cf = be(Tr), ti, ni, Wn, Da = ne({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Il, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Wn && (Wn && e.type === "mousemove" ? (ti = e.screenX - Wn.screenX, ni = e.screenY - Wn.screenY) : ni = ti = 0, Wn = e), ti);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ni;
} }), Do = be(Da), df = ne({}, Da, { dataTransfer: 0 }), ff = be(df), pf = ne({}, Tr, { relatedTarget: 0 }), ri = be(pf), mf = ne({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hf = be(mf), vf = ne({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), gf = be(vf), yf = ne({}, $n, { data: 0 }), Io = be(yf), xf = {
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
}, wf = {
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
}, kf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kf[e]) ? !!t[e] : !1;
}
function Il() {
  return Sf;
}
var jf = ne({}, Tr, { key: function(e) {
  if (e.key) {
    var t = xf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Il, charCode: function(e) {
  return e.type === "keypress" ? ea(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Cf = be(jf), _f = ne({}, Da, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ao = be(_f), Nf = ne({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Il }), Ef = be(Nf), Pf = ne({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zf = be(Pf), Tf = ne({}, Da, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mf = be(Tf), Lf = [9, 13, 27, 32], Al = gt && "CompositionEvent" in window, tr = null;
gt && "documentMode" in document && (tr = document.documentMode);
var Rf = gt && "TextEvent" in window && !tr, Cu = gt && (!Al || tr && 8 < tr && 11 >= tr), Oo = " ", $o = !1;
function _u(e, t) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(t.keyCode) !== -1;
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
function Nu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function Df(e, t) {
  switch (e) {
    case "compositionend":
      return Nu(t);
    case "keypress":
      return t.which !== 32 ? null : ($o = !0, Oo);
    case "textInput":
      return e = t.data, e === Oo && $o ? null : e;
    default:
      return null;
  }
}
function If(e, t) {
  if (mn) return e === "compositionend" || !Al && _u(e, t) ? (e = ju(), Zr = Rl = Lt = null, mn = !1, e) : null;
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
      return Cu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Af = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Af[e.type] : t === "textarea";
}
function Eu(e, t, n, r) {
  au(r), t = ha(t, "onChange"), 0 < t.length && (n = new Dl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var nr = null, hr = null;
function Of(e) {
  $u(e, 0);
}
function Ia(e) {
  var t = gn(e);
  if (Xs(t)) return e;
}
function $f(e, t) {
  if (e === "change") return t;
}
var Pu = !1;
if (gt) {
  var ai;
  if (gt) {
    var ii = "oninput" in document;
    if (!ii) {
      var bo = document.createElement("div");
      bo.setAttribute("oninput", "return;"), ii = typeof bo.oninput == "function";
    }
    ai = ii;
  } else ai = !1;
  Pu = ai && (!document.documentMode || 9 < document.documentMode);
}
function Uo() {
  nr && (nr.detachEvent("onpropertychange", zu), hr = nr = null);
}
function zu(e) {
  if (e.propertyName === "value" && Ia(hr)) {
    var t = [];
    Eu(t, hr, e, Pl(e)), su(Of, t);
  }
}
function Ff(e, t, n) {
  e === "focusin" ? (Uo(), nr = t, hr = n, nr.attachEvent("onpropertychange", zu)) : e === "focusout" && Uo();
}
function bf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ia(hr);
}
function Uf(e, t) {
  if (e === "click") return Ia(t);
}
function Bf(e, t) {
  if (e === "input" || e === "change") return Ia(t);
}
function Vf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tt = typeof Object.is == "function" ? Object.is : Vf;
function vr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!ji.call(t, a) || !tt(e[a], t[a])) return !1;
  }
  return !0;
}
function Bo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vo(e, t) {
  var n = Bo(e);
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
    n = Bo(n);
  }
}
function Tu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Mu() {
  for (var e = window, t = sa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sa(e.document);
  }
  return t;
}
function Ol(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Hf(e) {
  var t = Mu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Tu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ol(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Vo(n, i);
        var o = Vo(
          n,
          r
        );
        a && o && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Wf = gt && "documentMode" in document && 11 >= document.documentMode, hn = null, Bi = null, rr = null, Vi = !1;
function Ho(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vi || hn == null || hn !== sa(r) || (r = hn, "selectionStart" in r && Ol(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), rr && vr(rr, r) || (rr = r, r = ha(Bi, "onSelect"), 0 < r.length && (t = new Dl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
}
function Ur(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vn = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, li = {}, Lu = {};
gt && (Lu = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
function Aa(e) {
  if (li[e]) return li[e];
  if (!vn[e]) return e;
  var t = vn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lu) return li[e] = t[n];
  return e;
}
var Ru = Aa("animationend"), Du = Aa("animationiteration"), Iu = Aa("animationstart"), Au = Aa("transitionend"), Ou = /* @__PURE__ */ new Map(), Wo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
  Ou.set(e, t), sn(t, [e]);
}
for (var oi = 0; oi < Wo.length; oi++) {
  var si = Wo[oi], Gf = si.toLowerCase(), qf = si[0].toUpperCase() + si.slice(1);
  Ht(Gf, "on" + qf);
}
Ht(Ru, "onAnimationEnd");
Ht(Du, "onAnimationIteration");
Ht(Iu, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Au, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Go(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wd(r, t, void 0, e), e.currentTarget = null;
}
function $u(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && a.isPropagationStopped()) break e;
        Go(a, u, f), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && a.isPropagationStopped()) break e;
        Go(a, u, f), i = s;
      }
    }
  }
  if (ca) throw e = $i, ca = !1, $i = null, e;
}
function X(e, t) {
  var n = t[Qi];
  n === void 0 && (n = t[Qi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fu(t, e, 2, !1), n.add(r));
}
function ui(e, t, n) {
  var r = 0;
  t && (r |= 4), Fu(n, e, r, t);
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Br]) {
    e[Br] = !0, Gs.forEach(function(n) {
      n !== "selectionchange" && (Qf.has(n) || ui(n, !1, e), ui(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || (t[Br] = !0, ui("selectionchange", !1, t));
  }
}
function Fu(e, t, n, r) {
  switch (Su(t)) {
    case 1:
      var a = sf;
      break;
    case 4:
      a = uf;
      break;
    default:
      a = Ll;
  }
  n = a.bind(null, t, n, e), a = void 0, !Oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function ci(e, t, n, r, a) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === a || u.nodeType === 8 && u.parentNode === a) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === a || s.nodeType === 8 && s.parentNode === a)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = Kt(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  su(function() {
    var f = i, v = Pl(n), m = [];
    e: {
      var h = Ou.get(e);
      if (h !== void 0) {
        var C = Dl, N = e;
        switch (e) {
          case "keypress":
            if (ea(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Cf;
            break;
          case "focusin":
            N = "focus", C = ri;
            break;
          case "focusout":
            N = "blur", C = ri;
            break;
          case "beforeblur":
          case "afterblur":
            C = ri;
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
            C = Do;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Ef;
            break;
          case Ru:
          case Du:
          case Iu:
            C = hf;
            break;
          case Au:
            C = zf;
            break;
          case "scroll":
            C = cf;
            break;
          case "wheel":
            C = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Ao;
        }
        var y = (t & 4) !== 0, F = !y && e === "scroll", d = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, d !== null && (w = dr(c, d), w != null && y.push(yr(c, w, p)))), F) break;
          c = c.return;
        }
        0 < y.length && (h = new C(h, N, null, n, v), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", h && n !== Ii && (N = n.relatedTarget || n.fromElement) && (Kt(N) || N[yt])) break e;
        if ((C || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, C ? (N = n.relatedTarget || n.toElement, C = f, N = N ? Kt(N) : null, N !== null && (F = un(N), N !== F || N.tag !== 5 && N.tag !== 6) && (N = null)) : (C = null, N = f), C !== N)) {
          if (y = Do, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ao, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), F = C == null ? h : gn(C), p = N == null ? h : gn(N), h = new y(w, c + "leave", C, n, v), h.target = F, h.relatedTarget = p, w = null, Kt(v) === f && (y = new y(d, c + "enter", N, n, v), y.target = p, y.relatedTarget = F, w = y), F = w, C && N) t: {
            for (y = C, d = N, c = 0, p = y; p; p = dn(p)) c++;
            for (p = 0, w = d; w; w = dn(w)) p++;
            for (; 0 < c - p; ) y = dn(y), c--;
            for (; 0 < p - c; ) d = dn(d), p--;
            for (; c--; ) {
              if (y === d || d !== null && y === d.alternate) break t;
              y = dn(y), d = dn(d);
            }
            y = null;
          }
          else y = null;
          C !== null && qo(m, h, C, y, !1), N !== null && F !== null && qo(m, F, N, y, !0);
        }
      }
      e: {
        if (h = f ? gn(f) : window, C = h.nodeName && h.nodeName.toLowerCase(), C === "select" || C === "input" && h.type === "file") var S = $f;
        else if (Fo(h)) if (Pu) S = Bf;
        else {
          S = bf;
          var g = Ff;
        }
        else (C = h.nodeName) && C.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Uf);
        if (S && (S = S(e, f))) {
          Eu(m, S, n, v);
          break e;
        }
        g && g(e, h, f), e === "focusout" && (g = h._wrapperState) && g.controlled && h.type === "number" && Ti(h, "number", h.value);
      }
      switch (g = f ? gn(f) : window, e) {
        case "focusin":
          (Fo(g) || g.contentEditable === "true") && (hn = g, Bi = f, rr = null);
          break;
        case "focusout":
          rr = Bi = hn = null;
          break;
        case "mousedown":
          Vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vi = !1, Ho(m, n, v);
          break;
        case "selectionchange":
          if (Wf) break;
        case "keydown":
        case "keyup":
          Ho(m, n, v);
      }
      var j;
      if (Al) e: {
        switch (e) {
          case "compositionstart":
            var _ = "onCompositionStart";
            break e;
          case "compositionend":
            _ = "onCompositionEnd";
            break e;
          case "compositionupdate":
            _ = "onCompositionUpdate";
            break e;
        }
        _ = void 0;
      }
      else mn ? _u(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (Cu && n.locale !== "ko" && (mn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && mn && (j = ju()) : (Lt = v, Rl = "value" in Lt ? Lt.value : Lt.textContent, mn = !0)), g = ha(f, _), 0 < g.length && (_ = new Io(_, e, null, n, v), m.push({ event: _, listeners: g }), j ? _.data = j : (j = Nu(n), j !== null && (_.data = j)))), (j = Rf ? Df(e, n) : If(e, n)) && (f = ha(f, "onBeforeInput"), 0 < f.length && (v = new Io("onBeforeInput", "beforeinput", null, n, v), m.push({ event: v, listeners: f }), v.data = j));
    }
    $u(m, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ha(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = dr(e, n), i != null && r.unshift(yr(e, i, a)), i = dr(e, t), i != null && r.push(yr(e, i, a))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qo(e, t, n, r, a) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, a ? (s = dr(n, i), s != null && o.unshift(yr(n, s, u))) : a || (s = dr(n, i), s != null && o.push(yr(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Yf = /\r\n?/g, Kf = /\u0000|\uFFFD/g;
function Qo(e) {
  return (typeof e == "string" ? e : "" + e).replace(Yf, `
`).replace(Kf, "");
}
function Vr(e, t, n) {
  if (t = Qo(t), Qo(e) !== t && n) throw Error(E(425));
}
function va() {
}
var Hi = null, Wi = null;
function Gi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qi = typeof setTimeout == "function" ? setTimeout : void 0, Xf = typeof clearTimeout == "function" ? clearTimeout : void 0, Yo = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yo < "u" ? function(e) {
  return Yo.resolve(null).then(e).catch(Zf);
} : qi;
function Zf(e) {
  setTimeout(function() {
    throw e;
  });
}
function di(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), mr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  mr(t);
}
function Ot(e) {
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
function Ko(e) {
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
var Fn = Math.random().toString(36).slice(2), ot = "__reactFiber$" + Fn, xr = "__reactProps$" + Fn, yt = "__reactContainer$" + Fn, Qi = "__reactEvents$" + Fn, ep = "__reactListeners$" + Fn, tp = "__reactHandles$" + Fn;
function Kt(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[yt] || n[ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ko(e); e !== null; ) {
        if (n = e[ot]) return n;
        e = Ko(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Mr(e) {
  return e = e[ot] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Oa(e) {
  return e[xr] || null;
}
var Yi = [], yn = -1;
function Wt(e) {
  return { current: e };
}
function J(e) {
  0 > yn || (e.current = Yi[yn], Yi[yn] = null, yn--);
}
function K(e, t) {
  yn++, Yi[yn] = e.current, e.current = t;
}
var Vt = {}, _e = Wt(Vt), Le = Wt(!1), nn = Vt;
function Mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Re(e) {
  return e = e.childContextTypes, e != null;
}
function ga() {
  J(Le), J(_e);
}
function Xo(e, t, n) {
  if (_e.current !== Vt) throw Error(E(168));
  K(_e, t), K(Le, n);
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, $d(e) || "Unknown", a));
  return ne({}, n, r);
}
function ya(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, nn = _e.current, K(_e, e), K(Le, Le.current), !0;
}
function Jo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = bu(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, J(Le), J(_e), K(_e, e)) : J(Le), K(Le, n);
}
var pt = null, $a = !1, fi = !1;
function Uu(e) {
  pt === null ? pt = [e] : pt.push(e);
}
function np(e) {
  $a = !0, Uu(e);
}
function Gt() {
  if (!fi && pt !== null) {
    fi = !0;
    var e = 0, t = Y;
    try {
      var n = pt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      pt = null, $a = !1;
    } catch (a) {
      throw pt !== null && (pt = pt.slice(e + 1)), fu(zl, Gt), a;
    } finally {
      Y = t, fi = !1;
    }
  }
  return null;
}
var xn = [], wn = 0, xa = null, wa = 0, Ve = [], He = 0, rn = null, mt = 1, ht = "";
function Qt(e, t) {
  xn[wn++] = wa, xn[wn++] = xa, xa = e, wa = t;
}
function Bu(e, t, n) {
  Ve[He++] = mt, Ve[He++] = ht, Ve[He++] = rn, rn = e;
  var r = mt;
  e = ht;
  var a = 32 - Ze(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - Ze(t) + a;
  if (30 < i) {
    var o = a - a % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, mt = 1 << 32 - Ze(t) + a | n << a | r, ht = i + e;
  } else mt = 1 << i | n << a | r, ht = e;
}
function $l(e) {
  e.return !== null && (Qt(e, 1), Bu(e, 1, 0));
}
function Fl(e) {
  for (; e === xa; ) xa = xn[--wn], xn[wn] = null, wa = xn[--wn], xn[wn] = null;
  for (; e === rn; ) rn = Ve[--He], Ve[He] = null, ht = Ve[--He], Ve[He] = null, mt = Ve[--He], Ve[He] = null;
}
var Oe = null, Ae = null, Z = !1, Je = null;
function Vu(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, Ae = Ot(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: mt, overflow: ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xi(e) {
  if (Z) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Zo(e, t)) {
        if (Ki(e)) throw Error(E(418));
        t = Ot(n.nextSibling);
        var r = Oe;
        t && Zo(e, t) ? Vu(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Oe = e);
      }
    } else {
      if (Ki(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, Z = !1, Oe = e;
    }
  }
}
function es(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function Hr(e) {
  if (e !== Oe) return !1;
  if (!Z) return es(e), Z = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Gi(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (Ki(e)) throw Hu(), Error(E(418));
    for (; t; ) Vu(e, t), t = Ot(t.nextSibling);
  }
  if (es(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Oe ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function Hu() {
  for (var e = Ae; e; ) e = Ot(e.nextSibling);
}
function Ln() {
  Ae = Oe = null, Z = !1;
}
function bl(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var rp = kt.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = a.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ts(e) {
  var t = e._init;
  return t(e._payload);
}
function Wu(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function a(d, c) {
    return d = Ut(d, c), d.index = 0, d.sibling = null, d;
  }
  function i(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, p, w) {
    return c === null || c.tag !== 6 ? (c = xi(p, d.mode, w), c.return = d, c) : (c = a(c, p), c.return = d, c);
  }
  function s(d, c, p, w) {
    var S = p.type;
    return S === pn ? v(d, c, p.props.children, w, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Pt && ts(S) === c.type) ? (w = a(c, p.props), w.ref = Gn(d, c, p), w.return = d, w) : (w = oa(p.type, p.key, p.props, null, d.mode, w), w.ref = Gn(d, c, p), w.return = d, w);
  }
  function f(d, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = wi(p, d.mode, w), c.return = d, c) : (c = a(c, p.children || []), c.return = d, c);
  }
  function v(d, c, p, w, S) {
    return c === null || c.tag !== 7 ? (c = en(p, d.mode, w, S), c.return = d, c) : (c = a(c, p), c.return = d, c);
  }
  function m(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = xi("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Dr:
          return p = oa(c.type, c.key, c.props, null, d.mode, p), p.ref = Gn(d, null, c), p.return = d, p;
        case fn:
          return c = wi(c, d.mode, p), c.return = d, c;
        case Pt:
          var w = c._init;
          return m(d, w(c._payload), p);
      }
      if (Kn(c) || Un(c)) return c = en(c, d.mode, p, null), c.return = d, c;
      Wr(d, c);
    }
    return null;
  }
  function h(d, c, p, w) {
    var S = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : u(d, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          return p.key === S ? s(d, c, p, w) : null;
        case fn:
          return p.key === S ? f(d, c, p, w) : null;
        case Pt:
          return S = p._init, h(
            d,
            c,
            S(p._payload),
            w
          );
      }
      if (Kn(p) || Un(p)) return S !== null ? null : v(d, c, p, w, null);
      Wr(d, p);
    }
    return null;
  }
  function C(d, c, p, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(p) || null, u(c, d, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Dr:
          return d = d.get(w.key === null ? p : w.key) || null, s(c, d, w, S);
        case fn:
          return d = d.get(w.key === null ? p : w.key) || null, f(c, d, w, S);
        case Pt:
          var g = w._init;
          return C(d, c, p, g(w._payload), S);
      }
      if (Kn(w) || Un(w)) return d = d.get(p) || null, v(c, d, w, S, null);
      Wr(c, w);
    }
    return null;
  }
  function N(d, c, p, w) {
    for (var S = null, g = null, j = c, _ = c = 0, P = null; j !== null && _ < p.length; _++) {
      j.index > _ ? (P = j, j = null) : P = j.sibling;
      var R = h(d, j, p[_], w);
      if (R === null) {
        j === null && (j = P);
        break;
      }
      e && j && R.alternate === null && t(d, j), c = i(R, c, _), g === null ? S = R : g.sibling = R, g = R, j = P;
    }
    if (_ === p.length) return n(d, j), Z && Qt(d, _), S;
    if (j === null) {
      for (; _ < p.length; _++) j = m(d, p[_], w), j !== null && (c = i(j, c, _), g === null ? S = j : g.sibling = j, g = j);
      return Z && Qt(d, _), S;
    }
    for (j = r(d, j); _ < p.length; _++) P = C(j, d, _, p[_], w), P !== null && (e && P.alternate !== null && j.delete(P.key === null ? _ : P.key), c = i(P, c, _), g === null ? S = P : g.sibling = P, g = P);
    return e && j.forEach(function(B) {
      return t(d, B);
    }), Z && Qt(d, _), S;
  }
  function y(d, c, p, w) {
    var S = Un(p);
    if (typeof S != "function") throw Error(E(150));
    if (p = S.call(p), p == null) throw Error(E(151));
    for (var g = S = null, j = c, _ = c = 0, P = null, R = p.next(); j !== null && !R.done; _++, R = p.next()) {
      j.index > _ ? (P = j, j = null) : P = j.sibling;
      var B = h(d, j, R.value, w);
      if (B === null) {
        j === null && (j = P);
        break;
      }
      e && j && B.alternate === null && t(d, j), c = i(B, c, _), g === null ? S = B : g.sibling = B, g = B, j = P;
    }
    if (R.done) return n(
      d,
      j
    ), Z && Qt(d, _), S;
    if (j === null) {
      for (; !R.done; _++, R = p.next()) R = m(d, R.value, w), R !== null && (c = i(R, c, _), g === null ? S = R : g.sibling = R, g = R);
      return Z && Qt(d, _), S;
    }
    for (j = r(d, j); !R.done; _++, R = p.next()) R = C(j, d, _, R.value, w), R !== null && (e && R.alternate !== null && j.delete(R.key === null ? _ : R.key), c = i(R, c, _), g === null ? S = R : g.sibling = R, g = R);
    return e && j.forEach(function(Q) {
      return t(d, Q);
    }), Z && Qt(d, _), S;
  }
  function F(d, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === pn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          e: {
            for (var S = p.key, g = c; g !== null; ) {
              if (g.key === S) {
                if (S = p.type, S === pn) {
                  if (g.tag === 7) {
                    n(d, g.sibling), c = a(g, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Pt && ts(S) === g.type) {
                  n(d, g.sibling), c = a(g, p.props), c.ref = Gn(d, g, p), c.return = d, d = c;
                  break e;
                }
                n(d, g);
                break;
              } else t(d, g);
              g = g.sibling;
            }
            p.type === pn ? (c = en(p.props.children, d.mode, w, p.key), c.return = d, d = c) : (w = oa(p.type, p.key, p.props, null, d.mode, w), w.ref = Gn(d, c, p), w.return = d, d = w);
          }
          return o(d);
        case fn:
          e: {
            for (g = p.key; c !== null; ) {
              if (c.key === g) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = a(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = wi(p, d.mode, w), c.return = d, d = c;
          }
          return o(d);
        case Pt:
          return g = p._init, F(d, c, g(p._payload), w);
      }
      if (Kn(p)) return N(d, c, p, w);
      if (Un(p)) return y(d, c, p, w);
      Wr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = a(c, p), c.return = d, d = c) : (n(d, c), c = xi(p, d.mode, w), c.return = d, d = c), o(d)) : n(d, c);
  }
  return F;
}
var Rn = Wu(!0), Gu = Wu(!1), ka = Wt(null), Sa = null, kn = null, Ul = null;
function Bl() {
  Ul = kn = Sa = null;
}
function Vl(e) {
  var t = ka.current;
  J(ka), e._currentValue = t;
}
function Ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Pn(e, t) {
  Sa = e, Ul = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (Ul !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
    if (Sa === null) throw Error(E(308));
    kn = e, Sa.dependencies = { lanes: 0, firstContext: e };
  } else kn = kn.next = e;
  return t;
}
var Xt = null;
function Hl(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function qu(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Hl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, xt(e, r);
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function Wl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Qu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, q & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, xt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Hl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, xt(e, n);
}
function ta(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tl(e, n);
  }
}
function ns(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? a = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? a = i = t : i = i.next = t;
    } else a = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ja(e, t, n, r) {
  var a = e.updateQueue;
  zt = !1;
  var i = a.firstBaseUpdate, o = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, o === null ? i = f : o.next = f, o = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== o && (u === null ? v.firstBaseUpdate = f : u.next = f, v.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = a.baseState;
    o = 0, v = f = s = null, u = i;
    do {
      var h = u.lane, C = u.eventTime;
      if ((r & h) === h) {
        v !== null && (v = v.next = {
          eventTime: C,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var N = e, y = u;
          switch (h = t, C = n, y.tag) {
            case 1:
              if (N = y.payload, typeof N == "function") {
                m = N.call(C, m, h);
                break e;
              }
              m = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = y.payload, h = typeof N == "function" ? N.call(C, m, h) : N, h == null) break e;
              m = ne({}, m, h);
              break e;
            case 2:
              zt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = a.effects, h === null ? a.effects = [u] : h.push(u));
      } else C = { eventTime: C, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (f = v = C, s = m) : v = v.next = C, o |= h;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = m), a.baseState = s, a.firstBaseUpdate = f, a.lastBaseUpdate = v, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        o |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    ln |= o, e.lanes = o, e.memoizedState = m;
  }
}
function rs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var Lr = {}, ut = Wt(Lr), wr = Wt(Lr), kr = Wt(Lr);
function Jt(e) {
  if (e === Lr) throw Error(E(174));
  return e;
}
function Gl(e, t) {
  switch (K(kr, t), K(wr, e), K(ut, Lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Li(t, e);
  }
  J(ut), K(ut, t);
}
function Dn() {
  J(ut), J(wr), J(kr);
}
function Yu(e) {
  Jt(kr.current);
  var t = Jt(ut.current), n = Li(t, e.type);
  t !== n && (K(wr, e), K(ut, n));
}
function ql(e) {
  wr.current === e && (J(ut), J(wr));
}
var ee = Wt(0);
function Ca(e) {
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
var pi = [];
function Ql() {
  for (var e = 0; e < pi.length; e++) pi[e]._workInProgressVersionPrimary = null;
  pi.length = 0;
}
var na = kt.ReactCurrentDispatcher, mi = kt.ReactCurrentBatchConfig, an = 0, te = null, de = null, pe = null, _a = !1, ar = !1, Sr = 0, ap = 0;
function Se() {
  throw Error(E(321));
}
function Yl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Kl(e, t, n, r, a, i) {
  if (an = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, na.current = e === null || e.memoizedState === null ? sp : up, e = n(r, a), ar) {
    i = 0;
    do {
      if (ar = !1, Sr = 0, 25 <= i) throw Error(E(301));
      i += 1, pe = de = null, t.updateQueue = null, na.current = cp, e = n(r, a);
    } while (ar);
  }
  if (na.current = Na, t = de !== null && de.next !== null, an = 0, pe = de = te = null, _a = !1, t) throw Error(E(300));
  return e;
}
function Xl() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? te.memoizedState = pe = e : pe = pe.next = e, pe;
}
function Qe() {
  if (de === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = pe === null ? te.memoizedState : pe.next;
  if (t !== null) pe = t, de = e;
  else {
    if (e === null) throw Error(E(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, pe === null ? te.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hi(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = de, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var o = a.next;
      a.next = i.next, i.next = o;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var u = o = null, s = null, f = i;
    do {
      var v = f.lane;
      if ((an & v) === v) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = m, o = r) : s = s.next = m, te.lanes |= v, ln |= v;
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? o = r : s.next = u, tt(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, te.lanes |= i, ln |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vi(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var o = a = a.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== a);
    tt(i, t.memoizedState) || (Me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ku() {
}
function Xu(e, t) {
  var n = te, r = Qe(), a = t(), i = !tt(r.memoizedState, a);
  if (i && (r.memoizedState = a, Me = !0), r = r.queue, Jl(ec.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || pe !== null && pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Cr(9, Zu.bind(null, n, r, a, t), void 0, null), me === null) throw Error(E(349));
    an & 30 || Ju(n, t, a);
  }
  return a;
}
function Ju(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, tc(t) && nc(e);
}
function ec(e, t, n) {
  return n(function() {
    tc(t) && nc(e);
  });
}
function tc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function nc(e) {
  var t = xt(e, 1);
  t !== null && et(t, e, 1, -1);
}
function as(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: e }, t.queue = e, e = e.dispatch = op.bind(null, te, e), [t.memoizedState, e];
}
function Cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function rc() {
  return Qe().memoizedState;
}
function ra(e, t, n, r) {
  var a = lt();
  te.flags |= e, a.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Fa(e, t, n, r) {
  var a = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var o = de.memoizedState;
    if (i = o.destroy, r !== null && Yl(r, o.deps)) {
      a.memoizedState = Cr(t, n, i, r);
      return;
    }
  }
  te.flags |= e, a.memoizedState = Cr(1 | t, n, i, r);
}
function is(e, t) {
  return ra(8390656, 8, e, t);
}
function Jl(e, t) {
  return Fa(2048, 8, e, t);
}
function ac(e, t) {
  return Fa(4, 2, e, t);
}
function ic(e, t) {
  return Fa(4, 4, e, t);
}
function lc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function oc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fa(4, 4, lc.bind(null, t, e), n);
}
function Zl() {
}
function sc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function uc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cc(e, t, n) {
  return an & 21 ? (tt(n, t) || (n = hu(), te.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n);
}
function ip(e, t) {
  var n = Y;
  Y = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = mi.transition;
  mi.transition = {};
  try {
    e(!1), t();
  } finally {
    Y = n, mi.transition = r;
  }
}
function dc() {
  return Qe().memoizedState;
}
function lp(e, t, n) {
  var r = bt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fc(e)) pc(t, n);
  else if (n = qu(e, t, n, r), n !== null) {
    var a = Ee();
    et(n, e, r, a), mc(n, t, r);
  }
}
function op(e, t, n) {
  var r = bt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fc(e)) pc(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (a.hasEagerState = !0, a.eagerState = u, tt(u, o)) {
        var s = t.interleaved;
        s === null ? (a.next = a, Hl(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = qu(e, t, a, r), n !== null && (a = Ee(), et(n, e, r, a), mc(n, t, r));
  }
}
function fc(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function pc(e, t) {
  ar = _a = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function mc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tl(e, n);
  }
}
var Na = { readContext: qe, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, sp = { readContext: qe, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: is, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ra(
    4194308,
    4,
    lc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ra(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ra(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lp.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: as, useDebugValue: Zl, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = as(!1), t = e[0];
  return e = ip.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, a = lt();
  if (Z) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), me === null) throw Error(E(349));
    an & 30 || Ju(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, is(ec.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Cr(9, Zu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = me.identifierPrefix;
  if (Z) {
    var n = ht, r = mt;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ap++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, up = {
  readContext: qe,
  useCallback: sc,
  useContext: qe,
  useEffect: Jl,
  useImperativeHandle: oc,
  useInsertionEffect: ac,
  useLayoutEffect: ic,
  useMemo: uc,
  useReducer: hi,
  useRef: rc,
  useState: function() {
    return hi(jr);
  },
  useDebugValue: Zl,
  useDeferredValue: function(e) {
    var t = Qe();
    return cc(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = hi(jr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: Ku,
  useSyncExternalStore: Xu,
  useId: dc,
  unstable_isNewReconciler: !1
}, cp = { readContext: qe, useCallback: sc, useContext: qe, useEffect: Jl, useImperativeHandle: oc, useInsertionEffect: ac, useLayoutEffect: ic, useMemo: uc, useReducer: vi, useRef: rc, useState: function() {
  return vi(jr);
}, useDebugValue: Zl, useDeferredValue: function(e) {
  var t = Qe();
  return de === null ? t.memoizedState = e : cc(t, de.memoizedState, e);
}, useTransition: function() {
  var e = vi(jr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: Ku, useSyncExternalStore: Xu, useId: dc, unstable_isNewReconciler: !1 };
function Ke(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ba = { isMounted: function(e) {
  return (e = e._reactInternals) ? un(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), a = bt(e), i = vt(r, a);
  i.payload = t, n != null && (i.callback = n), t = $t(e, i, a), t !== null && (et(t, e, a, r), ta(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), a = bt(e), i = vt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = $t(e, i, a), t !== null && (et(t, e, a, r), ta(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = bt(e), a = vt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = $t(e, a, r), t !== null && (et(t, e, r, n), ta(t, e, r));
} };
function ls(e, t, n, r, a, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !vr(n, r) || !vr(a, i) : !0;
}
function hc(e, t, n) {
  var r = !1, a = Vt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qe(i) : (a = Re(t) ? nn : _e.current, r = t.contextTypes, i = (r = r != null) ? Mn(e, a) : Vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ba, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function os(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ba.enqueueReplaceState(t, t.state, null);
}
function el(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Wl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = qe(i) : (i = Re(t) ? nn : _e.current, a.context = Mn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Zi(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ba.enqueueReplaceState(a, a.state, null), ja(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t) {
  try {
    var n = "", r = t;
    do
      n += Od(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var dp = typeof WeakMap == "function" ? WeakMap : Map;
function vc(e, t, n) {
  n = vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pa || (Pa = !0, dl = r), tl(e, t);
  }, n;
}
function gc(e, t, n) {
  n = vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      tl(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    tl(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dp();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = _p.bind(null, e, t, n), t.then(e, e));
}
function us(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cs(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e);
}
var fp = kt.ReactCurrentOwner, Me = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Gu(t, null, n, r) : Rn(t, e.child, n, r);
}
function ds(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Pn(t, a), r = Kl(e, t, n, r, i, a), n = Xl(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, wt(e, t, a)) : (Z && n && $l(t), t.flags |= 1, Ne(e, t, r, a), t.child);
}
function fs(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !oo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, yc(e, t, i, r, a)) : (e = oa(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : vr, n(o, r) && e.ref === t.ref) return wt(e, t, a);
  }
  return t.flags |= 1, e = Ut(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yc(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (vr(i, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (Me = !0);
    else return t.lanes = e.lanes, wt(e, t, a);
  }
  return nl(e, t, n, r, a);
}
function xc(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(jn, Ie), Ie |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(jn, Ie), Ie |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, K(jn, Ie), Ie |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, K(jn, Ie), Ie |= r;
  return Ne(e, t, a, n), t.child;
}
function wc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function nl(e, t, n, r, a) {
  var i = Re(n) ? nn : _e.current;
  return i = Mn(t, i), Pn(t, a), n = Kl(e, t, n, r, i, a), r = Xl(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, wt(e, t, a)) : (Z && r && $l(t), t.flags |= 1, Ne(e, t, n, a), t.child);
}
function ps(e, t, n, r, a) {
  if (Re(n)) {
    var i = !0;
    ya(t);
  } else i = !1;
  if (Pn(t, a), t.stateNode === null) aa(e, t), hc(t, n, r), el(t, n, r, a), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = qe(f) : (f = Re(n) ? nn : _e.current, f = Mn(t, f));
    var v = n.getDerivedStateFromProps, m = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== f) && os(t, o, r, f), zt = !1;
    var h = t.memoizedState;
    o.state = h, ja(t, r, o, a), s = t.memoizedState, u !== r || h !== s || Le.current || zt ? (typeof v == "function" && (Zi(t, n, v, r), s = t.memoizedState), (u = zt || ls(t, n, u, r, h, s, f)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = f, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Qu(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Ke(t.type, u), o.props = f, m = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = qe(s) : (s = Re(n) ? nn : _e.current, s = Mn(t, s));
    var C = n.getDerivedStateFromProps;
    (v = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || h !== s) && os(t, o, r, s), zt = !1, h = t.memoizedState, o.state = h, ja(t, r, o, a);
    var N = t.memoizedState;
    u !== m || h !== N || Le.current || zt ? (typeof C == "function" && (Zi(t, n, C, r), N = t.memoizedState), (f = zt || ls(t, n, f, r, h, N, s) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, N, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, N, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), o.props = r, o.state = N, o.context = s, r = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return rl(e, t, n, r, i, a);
}
function rl(e, t, n, r, a, i) {
  wc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return a && Jo(t, n, !1), wt(e, t, i);
  r = t.stateNode, fp.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Rn(t, e.child, null, i), t.child = Rn(t, null, u, i)) : Ne(e, t, u, i), t.memoizedState = r.state, a && Jo(t, n, !0), t.child;
}
function kc(e) {
  var t = e.stateNode;
  t.pendingContext ? Xo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xo(e, t.context, !1), Gl(e, t.containerInfo);
}
function ms(e, t, n, r, a) {
  return Ln(), bl(a), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var al = { dehydrated: null, treeContext: null, retryLane: 0 };
function il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sc(e, t, n) {
  var r = t.pendingProps, a = ee.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), K(ee, a & 1), e === null)
    return Xi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Va(o, r, 0, null), e = en(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = il(n), t.memoizedState = al, e) : eo(t, o));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return pp(e, t, o, r, u, a, n);
  if (i) {
    i = r.fallback, o = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ut(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? i = Ut(u, i) : (i = en(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? il(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = al, r;
  }
  return i = e.child, e = i.sibling, r = Ut(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function eo(e, t) {
  return t = Va({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gr(e, t, n, r) {
  return r !== null && bl(r), Rn(t, e.child, null, n), e = eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function pp(e, t, n, r, a, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = gi(Error(E(422))), Gr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Va({ mode: "visible", children: r.children }, a, 0, null), i = en(i, a, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Rn(t, e.child, null, o), t.child.memoizedState = il(o), t.memoizedState = al, i);
  if (!(t.mode & 1)) return Gr(e, t, o, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(E(419)), r = gi(i, r, void 0), Gr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Me || u) {
    if (r = me, r !== null) {
      switch (o & -o) {
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
      a = a & (r.suspendedLanes | o) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, xt(e, a), et(r, e, a, -1));
    }
    return lo(), r = gi(Error(E(421))), Gr(e, t, o, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Np.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Ae = Ot(a.nextSibling), Oe = t, Z = !0, Je = null, e !== null && (Ve[He++] = mt, Ve[He++] = ht, Ve[He++] = rn, mt = e.id, ht = e.overflow, rn = t), t = eo(t, r.children), t.flags |= 4096, t);
}
function hs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ji(e.return, t, n);
}
function yi(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function jc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Ne(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && hs(e, n, t);
      else if (e.tag === 19) hs(e, n, t);
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
  if (K(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ca(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), yi(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Ca(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      yi(t, !0, n, null, i);
      break;
    case "together":
      yi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function aa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function mp(e, t, n) {
  switch (t.tag) {
    case 3:
      kc(t), Ln();
      break;
    case 5:
      Yu(t);
      break;
    case 1:
      Re(t.type) && ya(t);
      break;
    case 4:
      Gl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      K(ka, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sc(e, t, n) : (K(ee, ee.current & 1), e = wt(e, t, n), e !== null ? e.sibling : null);
      K(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return jc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), K(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, xc(e, t, n);
  }
  return wt(e, t, n);
}
var Cc, ll, _c, Nc;
Cc = function(e, t) {
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
ll = function() {
};
_c = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, Jt(ut.current);
    var i = null;
    switch (n) {
      case "input":
        a = Pi(e, a), r = Pi(e, r), i = [];
        break;
      case "select":
        a = ne({}, a, { value: void 0 }), r = ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = Mi(e, a), r = Mi(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = va);
    }
    Ri(n, r);
    var o;
    n = null;
    for (f in a) if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null) if (f === "style") {
      var u = a[f];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ur.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = a != null ? a[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (ur.hasOwnProperty(f) ? (s != null && f === "onScroll" && X("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Nc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
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
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function hp(e, t, n) {
  var r = t.pendingProps;
  switch (Fl(t), t.tag) {
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
      return Re(t.type) && ga(), je(t), null;
    case 3:
      return r = t.stateNode, Dn(), J(Le), J(_e), Ql(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (ml(Je), Je = null))), ll(e, t), je(t), null;
    case 5:
      ql(t);
      var a = Jt(kr.current);
      if (n = t.type, e !== null && t.stateNode != null) _c(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return je(t), null;
        }
        if (e = Jt(ut.current), Hr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ot] = t, r[xr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < Jn.length; a++) X(Jn[a], r);
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
              Co(r, i), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, X("invalid", r);
              break;
            case "textarea":
              No(r, i), X("invalid", r);
          }
          Ri(n, i), a = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Vr(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Vr(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : ur.hasOwnProperty(o) && u != null && o === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              Ir(r), _o(r, i, !0);
              break;
            case "textarea":
              Ir(r), Eo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = va);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = eu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ot] = t, e[xr] = r, Cc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Di(n, r), n) {
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
                for (a = 0; a < Jn.length; a++) X(Jn[a], e);
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
                Co(e, r), a = Pi(e, r), X("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ne({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                No(e, r), a = Mi(e, r), X("invalid", e);
                break;
              default:
                a = r;
            }
            Ri(n, a), u = a;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? ru(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && tu(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && cr(e, s) : typeof s == "number" && cr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ur.hasOwnProperty(i) ? s != null && i === "onScroll" && X("scroll", e) : s != null && Cl(e, i, s, o));
            }
            switch (n) {
              case "input":
                Ir(e), _o(e, r, !1);
                break;
              case "textarea":
                Ir(e), Eo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Cn(e, !!r.multiple, i, !1) : r.defaultValue != null && Cn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = va);
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
      if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = Jt(kr.current), Jt(ut.current), Hr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (i = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
            case 3:
              Vr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Vr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (J(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128)) Hu(), Ln(), t.flags |= 98560, i = !1;
        else if (i = Hr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[ot] = t;
          } else Ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), i = !1;
        } else Je !== null && (ml(Je), Je = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? fe === 0 && (fe = 3) : lo())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return Dn(), ll(e, t), e === null && gr(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Vl(t.type._context), je(t), null;
    case 17:
      return Re(t.type) && ga(), je(t), null;
    case 19:
      if (J(ee), i = t.memoizedState, i === null) return je(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) qn(i, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Ca(e), o !== null) {
            for (t.flags |= 128, qn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && oe() > An && (t.flags |= 128, r = !0, qn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ca(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Z) return je(t), null;
        } else 2 * oe() - i.renderingStartTime > An && n !== 1073741824 && (t.flags |= 128, r = !0, qn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = oe(), t.sibling = null, n = ee.current, K(ee, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return io(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function vp(e, t) {
  switch (Fl(t), t.tag) {
    case 1:
      return Re(t.type) && ga(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), J(Le), J(_e), Ql(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ql(t), null;
    case 13:
      if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ee), null;
    case 4:
      return Dn(), null;
    case 10:
      return Vl(t.type._context), null;
    case 22:
    case 23:
      return io(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1, Ce = !1, gp = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function Sn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function ol(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var vs = !1;
function yp(e, t) {
  if (Hi = pa, e = Mu(), Ol(e)) {
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
        var o = 0, u = -1, s = -1, f = 0, v = 0, m = e, h = null;
        t: for (; ; ) {
          for (var C; m !== n || a !== 0 && m.nodeType !== 3 || (u = o + a), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (C = m.firstChild) !== null; )
            h = m, m = C;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++f === a && (u = o), h === i && ++v === r && (s = o), (C = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = C;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, pa = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
  else for (; D !== null; ) {
    t = D;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var y = N.memoizedProps, F = N.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ke(t.type, y), F);
            d.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (w) {
      le(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, D = e;
      break;
    }
    D = t.return;
  }
  return N = vs, vs = !1, N;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && ol(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ua(e, t) {
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
function sl(e) {
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
function Ec(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ec(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[xr], delete t[Qi], delete t[ep], delete t[tp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = va));
  else if (r !== 4 && (e = e.child, e !== null)) for (ul(e, t, n), e = e.sibling; e !== null; ) ul(e, t, n), e = e.sibling;
}
function cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (cl(e, t, n), e = e.sibling; e !== null; ) cl(e, t, n), e = e.sibling;
}
var ge = null, Xe = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) zc(e, t, n), n = n.sibling;
}
function zc(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function") try {
    st.onCommitFiberUnmount(Ra, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ce || Sn(n, t);
    case 6:
      var r = ge, a = Xe;
      ge = null, Et(e, t, n), ge = r, Xe = a, ge !== null && (Xe ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (Xe ? (e = ge, n = n.stateNode, e.nodeType === 8 ? di(e.parentNode, n) : e.nodeType === 1 && di(e, n), mr(e)) : di(ge, n.stateNode));
      break;
    case 4:
      r = ge, a = Xe, ge = n.stateNode.containerInfo, Xe = !0, Et(e, t, n), ge = r, Xe = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && ol(n, t, o), a = a.next;
        } while (a !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!Ce && (Sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        le(n, t, u);
      }
      Et(e, t, n);
      break;
    case 21:
      Et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Et(e, t, n), Ce = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function ys(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gp()), t.forEach(function(r) {
      var a = Ep.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ge = u.stateNode, Xe = !1;
            break e;
          case 3:
            ge = u.stateNode.containerInfo, Xe = !0;
            break e;
          case 4:
            ge = u.stateNode.containerInfo, Xe = !0;
            break e;
        }
        u = u.return;
      }
      if (ge === null) throw Error(E(160));
      zc(i, o, a), ge = null, Xe = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (f) {
      le(a, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Tc(t, e), t = t.sibling;
}
function Tc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), at(e), r & 4) {
        try {
          ir(3, e, e.return), Ua(3, e);
        } catch (y) {
          le(e, e.return, y);
        }
        try {
          ir(5, e, e.return);
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 1:
      Ye(t, e), at(e), r & 512 && n !== null && Sn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), at(e), r & 512 && n !== null && Sn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          cr(a, "");
        } catch (y) {
          le(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Js(a, i), Di(u, o);
          var f = Di(u, i);
          for (o = 0; o < s.length; o += 2) {
            var v = s[o], m = s[o + 1];
            v === "style" ? ru(a, m) : v === "dangerouslySetInnerHTML" ? tu(a, m) : v === "children" ? cr(a, m) : Cl(a, v, m, f);
          }
          switch (u) {
            case "input":
              zi(a, i);
              break;
            case "textarea":
              Zs(a, i);
              break;
            case "select":
              var h = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var C = i.value;
              C != null ? Cn(a, !!i.multiple, C, !1) : h !== !!i.multiple && (i.defaultValue != null ? Cn(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Cn(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[xr] = i;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Ye(t, e), at(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ye(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        mr(t.containerInfo);
      } catch (y) {
        le(e, e.return, y);
      }
      break;
    case 4:
      Ye(t, e), at(e);
      break;
    case 13:
      Ye(t, e), at(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (ro = oe())), r & 4 && ys(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (f = Ce) || v, Ye(t, e), Ce = f) : Ye(t, e), at(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !v && e.mode & 1) for (D = e, v = e.child; v !== null; ) {
          for (m = D = v; D !== null; ) {
            switch (h = D, C = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ir(4, h, h.return);
                break;
              case 1:
                Sn(h, h.return);
                var N = h.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (y) {
                    le(r, n, y);
                  }
                }
                break;
              case 5:
                Sn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  ws(m);
                  continue;
                }
            }
            C !== null ? (C.return = h, D = C) : ws(m);
          }
          v = v.sibling;
        }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                a = m.stateNode, f ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = nu("display", o));
              } catch (y) {
                le(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (v === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (y) {
              le(e, e.return, y);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), m = m.return;
          }
          v === m && (v = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Ye(t, e), at(e), r & 4 && ys(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), at(e);
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pc(n)) {
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
          r.flags & 32 && (cr(a, ""), r.flags &= -33);
          var i = gs(e);
          cl(e, i, a);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = gs(e);
          ul(e, u, o);
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
function xp(e, t, n) {
  D = e, Mc(e);
}
function Mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var a = D, i = a.child;
    if (a.tag === 22 && r) {
      var o = a.memoizedState !== null || qr;
      if (!o) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || Ce;
        u = qr;
        var f = Ce;
        if (qr = o, (Ce = s) && !f) for (D = a; D !== null; ) o = D, s = o.child, o.tag === 22 && o.memoizedState !== null ? ks(a) : s !== null ? (s.return = o, D = s) : ks(a);
        for (; i !== null; ) D = i, Mc(i), i = i.sibling;
        D = a, qr = u, Ce = f;
      }
      xs(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, D = i) : xs(e);
  }
}
function xs(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || Ua(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && rs(t, i, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              rs(t, o, n);
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
              var f = t.alternate;
              if (f !== null) {
                var v = f.memoizedState;
                if (v !== null) {
                  var m = v.dehydrated;
                  m !== null && mr(m);
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
        Ce || t.flags & 512 && sl(t);
      } catch (h) {
        le(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function ws(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function ks(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ua(4, t);
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
          var i = t.return;
          try {
            sl(t);
          } catch (s) {
            le(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            sl(t);
          } catch (s) {
            le(t, o, s);
          }
      }
    } catch (s) {
      le(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, D = u;
      break;
    }
    D = t.return;
  }
}
var wp = Math.ceil, Ea = kt.ReactCurrentDispatcher, to = kt.ReactCurrentOwner, Ge = kt.ReactCurrentBatchConfig, q = 0, me = null, ue = null, ye = 0, Ie = 0, jn = Wt(0), fe = 0, _r = null, ln = 0, Ba = 0, no = 0, lr = null, Te = null, ro = 0, An = 1 / 0, ft = null, Pa = !1, dl = null, Ft = null, Qr = !1, Rt = null, za = 0, or = 0, fl = null, ia = -1, la = 0;
function Ee() {
  return q & 6 ? oe() : ia !== -1 ? ia : ia = oe();
}
function bt(e) {
  return e.mode & 1 ? q & 2 && ye !== 0 ? ye & -ye : rp.transition !== null ? (la === 0 && (la = hu()), la) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Su(e.type)), e) : 1;
}
function et(e, t, n, r) {
  if (50 < or) throw or = 0, fl = null, Error(E(185));
  zr(e, n, r), (!(q & 2) || e !== me) && (e === me && (!(q & 2) && (Ba |= n), fe === 4 && Mt(e, ye)), De(e, r), n === 1 && q === 0 && !(t.mode & 1) && (An = oe() + 500, $a && Gt()));
}
function De(e, t) {
  var n = e.callbackNode;
  nf(e, t);
  var r = fa(e, e === me ? ye : 0);
  if (r === 0) n !== null && To(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && To(n), t === 1) e.tag === 0 ? np(Ss.bind(null, e)) : Uu(Ss.bind(null, e)), Jf(function() {
      !(q & 6) && Gt();
    }), n = null;
    else {
      switch (vu(r)) {
        case 1:
          n = zl;
          break;
        case 4:
          n = pu;
          break;
        case 16:
          n = da;
          break;
        case 536870912:
          n = mu;
          break;
        default:
          n = da;
      }
      n = Fc(n, Lc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Lc(e, t) {
  if (ia = -1, la = 0, q & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n) return null;
  var r = fa(e, e === me ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ta(e, r);
  else {
    t = r;
    var a = q;
    q |= 2;
    var i = Dc();
    (me !== e || ye !== t) && (ft = null, An = oe() + 500, Zt(e, t));
    do
      try {
        jp();
        break;
      } catch (u) {
        Rc(e, u);
      }
    while (!0);
    Bl(), Ea.current = i, q = a, ue !== null ? t = 0 : (me = null, ye = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (a = Fi(e), a !== 0 && (r = a, t = pl(e, a))), t === 1) throw n = _r, Zt(e, 0), Mt(e, r), De(e, oe()), n;
    if (t === 6) Mt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !kp(a) && (t = Ta(e, r), t === 2 && (i = Fi(e), i !== 0 && (r = i, t = pl(e, i))), t === 1)) throw n = _r, Zt(e, 0), Mt(e, r), De(e, oe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Yt(e, Te, ft);
          break;
        case 3:
          if (Mt(e, r), (r & 130023424) === r && (t = ro + 500 - oe(), 10 < t)) {
            if (fa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = qi(Yt.bind(null, e, Te, ft), t);
            break;
          }
          Yt(e, Te, ft);
          break;
        case 4:
          if (Mt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - Ze(r);
            i = 1 << o, o = t[o], o > a && (a = o), r &= ~i;
          }
          if (r = a, r = oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qi(Yt.bind(null, e, Te, ft), r);
            break;
          }
          Yt(e, Te, ft);
          break;
        case 5:
          Yt(e, Te, ft);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return De(e, oe()), e.callbackNode === n ? Lc.bind(null, e) : null;
}
function pl(e, t) {
  var n = lr;
  return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), e = Ta(e, t), e !== 2 && (t = Te, Te = n, t !== null && ml(t)), e;
}
function ml(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function kp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], i = a.getSnapshot;
        a = a.value;
        try {
          if (!tt(i(), a)) return !1;
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
function Mt(e, t) {
  for (t &= ~no, t &= ~Ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ss(e) {
  if (q & 6) throw Error(E(327));
  zn();
  var t = fa(e, 0);
  if (!(t & 1)) return De(e, oe()), null;
  var n = Ta(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && (t = r, n = pl(e, r));
  }
  if (n === 1) throw n = _r, Zt(e, 0), Mt(e, t), De(e, oe()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, Te, ft), De(e, oe()), null;
}
function ao(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    q = n, q === 0 && (An = oe() + 500, $a && Gt());
  }
}
function on(e) {
  Rt !== null && Rt.tag === 0 && !(q & 6) && zn();
  var t = q;
  q |= 1;
  var n = Ge.transition, r = Y;
  try {
    if (Ge.transition = null, Y = 1, e) return e();
  } finally {
    Y = r, Ge.transition = n, q = t, !(q & 6) && Gt();
  }
}
function io() {
  Ie = jn.current, J(jn);
}
function Zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Xf(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Fl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ga();
        break;
      case 3:
        Dn(), J(Le), J(_e), Ql();
        break;
      case 5:
        ql(r);
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
        Vl(r.type._context);
        break;
      case 22:
      case 23:
        io();
    }
    n = n.return;
  }
  if (me = e, ue = e = Ut(e.current, null), ye = Ie = t, fe = 0, _r = null, no = Ba = ln = 0, Te = lr = null, Xt !== null) {
    for (t = 0; t < Xt.length; t++) if (n = Xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = a, r.next = o;
      }
      n.pending = r;
    }
    Xt = null;
  }
  return e;
}
function Rc(e, t) {
  do {
    var n = ue;
    try {
      if (Bl(), na.current = Na, _a) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        _a = !1;
      }
      if (an = 0, pe = de = te = null, ar = !1, Sr = 0, to.current = null, n === null || n.return === null) {
        fe = 1, _r = t, ue = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = ye, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, v = u, m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var C = us(o);
          if (C !== null) {
            C.flags &= -257, cs(C, o, u, i, t), C.mode & 1 && ss(i, f, t), t = C, s = f;
            var N = t.updateQueue;
            if (N === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else N.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ss(i, f, t), lo();
              break e;
            }
            s = Error(E(426));
          }
        } else if (Z && u.mode & 1) {
          var F = us(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), cs(F, o, u, i, t), bl(In(s, u));
            break e;
          }
        }
        i = s = In(s, u), fe !== 4 && (fe = 2), lr === null ? lr = [i] : lr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = vc(i, s, t);
              ns(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = gc(i, u, t);
                ns(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ac(n);
    } catch (S) {
      t = S, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Dc() {
  var e = Ea.current;
  return Ea.current = Na, e === null ? Na : e;
}
function lo() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), me === null || !(ln & 268435455) && !(Ba & 268435455) || Mt(me, ye);
}
function Ta(e, t) {
  var n = q;
  q |= 2;
  var r = Dc();
  (me !== e || ye !== t) && (ft = null, Zt(e, t));
  do
    try {
      Sp();
      break;
    } catch (a) {
      Rc(e, a);
    }
  while (!0);
  if (Bl(), q = n, Ea.current = r, ue !== null) throw Error(E(261));
  return me = null, ye = 0, fe;
}
function Sp() {
  for (; ue !== null; ) Ic(ue);
}
function jp() {
  for (; ue !== null && !qd(); ) Ic(ue);
}
function Ic(e) {
  var t = $c(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? Ac(e) : ue = t, to.current = null;
}
function Ac(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vp(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ue = null;
        return;
      }
    } else if (n = hp(n, t, Ie), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Yt(e, t, n) {
  var r = Y, a = Ge.transition;
  try {
    Ge.transition = null, Y = 1, Cp(e, t, n, r);
  } finally {
    Ge.transition = a, Y = r;
  }
  return null;
}
function Cp(e, t, n, r) {
  do
    zn();
  while (Rt !== null);
  if (q & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (rf(e, i), e === me && (ue = me = null, ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qr || (Qr = !0, Fc(da, function() {
    return zn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ge.transition, Ge.transition = null;
    var o = Y;
    Y = 1;
    var u = q;
    q |= 4, to.current = null, yp(e, n), Tc(n, e), Hf(Wi), pa = !!Hi, Wi = Hi = null, e.current = n, xp(n), Qd(), q = u, Y = o, Ge.transition = i;
  } else e.current = n;
  if (Qr && (Qr = !1, Rt = e, za = a), i = e.pendingLanes, i === 0 && (Ft = null), Xd(n.stateNode), De(e, oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Pa) throw Pa = !1, e = dl, dl = null, e;
  return za & 1 && e.tag !== 0 && zn(), i = e.pendingLanes, i & 1 ? e === fl ? or++ : (or = 0, fl = e) : or = 0, Gt(), null;
}
function zn() {
  if (Rt !== null) {
    var e = vu(za), t = Ge.transition, n = Y;
    try {
      if (Ge.transition = null, Y = 16 > e ? 16 : e, Rt === null) var r = !1;
      else {
        if (e = Rt, Rt = null, za = 0, q & 6) throw Error(E(331));
        var a = q;
        for (q |= 4, D = e.current; D !== null; ) {
          var i = D, o = i.child;
          if (D.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (D = f; D !== null; ) {
                  var v = D;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) m.return = v, D = m;
                  else for (; D !== null; ) {
                    v = D;
                    var h = v.sibling, C = v.return;
                    if (Ec(v), v === f) {
                      D = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = C, D = h;
                      break;
                    }
                    D = C;
                  }
                }
              }
              var N = i.alternate;
              if (N !== null) {
                var y = N.child;
                if (y !== null) {
                  N.child = null;
                  do {
                    var F = y.sibling;
                    y.sibling = null, y = F;
                  } while (y !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, D = o;
          else e: for (; D !== null; ) {
            if (i = D, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ir(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, D = d;
              break e;
            }
            D = i.return;
          }
        }
        var c = e.current;
        for (D = c; D !== null; ) {
          o = D;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, D = p;
          else e: for (o = c; D !== null; ) {
            if (u = D, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ua(9, u);
              }
            } catch (S) {
              le(u, u.return, S);
            }
            if (u === o) {
              D = null;
              break e;
            }
            var w = u.sibling;
            if (w !== null) {
              w.return = u.return, D = w;
              break e;
            }
            D = u.return;
          }
        }
        if (q = a, Gt(), st && typeof st.onPostCommitFiberRoot == "function") try {
          st.onPostCommitFiberRoot(Ra, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Y = n, Ge.transition = t;
    }
  }
  return !1;
}
function js(e, t, n) {
  t = In(n, t), t = vc(e, t, 1), e = $t(e, t, 1), t = Ee(), e !== null && (zr(e, 1, t), De(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) js(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      js(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = In(n, e), e = gc(t, e, 1), t = $t(t, e, 1), e = Ee(), t !== null && (zr(t, 1, e), De(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > oe() - ro ? Zt(e, 0) : no |= n), De(e, t);
}
function Oc(e, t) {
  t === 0 && (e.mode & 1 ? (t = $r, $r <<= 1, !($r & 130023424) && ($r = 4194304)) : t = 1);
  var n = Ee();
  e = xt(e, t), e !== null && (zr(e, t, n), De(e, n));
}
function Np(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Oc(e, n);
}
function Ep(e, t) {
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
  r !== null && r.delete(t), Oc(e, n);
}
var $c;
$c = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, mp(e, t, n);
    Me = !!(e.flags & 131072);
  }
  else Me = !1, Z && t.flags & 1048576 && Bu(t, wa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      aa(e, t), e = t.pendingProps;
      var a = Mn(t, _e.current);
      Pn(t, n), a = Kl(null, t, r, e, a, n);
      var i = Xl();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Re(r) ? (i = !0, ya(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Wl(t), a.updater = ba, t.stateNode = a, a._reactInternals = t, el(t, r, e, n), t = rl(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && $l(t), Ne(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (aa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = zp(r), e = Ke(r, e), a) {
          case 0:
            t = nl(null, t, r, e, n);
            break e;
          case 1:
            t = ps(null, t, r, e, n);
            break e;
          case 11:
            t = ds(null, t, r, e, n);
            break e;
          case 14:
            t = fs(null, t, r, Ke(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ke(r, a), nl(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ke(r, a), ps(e, t, r, a, n);
    case 3:
      e: {
        if (kc(t), e === null) throw Error(E(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, Qu(e, t), ja(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = In(Error(E(423)), t), t = ms(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = In(Error(E(424)), t), t = ms(e, t, r, n, a);
          break e;
        } else for (Ae = Ot(t.stateNode.containerInfo.firstChild), Oe = t, Z = !0, Je = null, n = Gu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ln(), r === a) {
            t = wt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Yu(t), e === null && Xi(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = a.children, Gi(r, a) ? o = null : i !== null && Gi(r, i) && (t.flags |= 32), wc(e, t), Ne(e, t, o, n), t.child;
    case 6:
      return e === null && Xi(t), null;
    case 13:
      return Sc(e, t, n);
    case 4:
      return Gl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ke(r, a), ds(e, t, r, a, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, K(ka, r._currentValue), r._currentValue = o, i !== null) if (tt(i.value, o)) {
          if (i.children === a.children && !Le.current) {
            t = wt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = vt(-1, n & -n), s.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var v = f.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), f.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ji(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(E(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ji(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        Ne(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Pn(t, n), a = qe(a), r = r(a), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Ke(r, t.pendingProps), a = Ke(r.type, a), fs(e, t, r, a, n);
    case 15:
      return yc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ke(r, a), aa(e, t), t.tag = 1, Re(r) ? (e = !0, ya(t)) : e = !1, Pn(t, n), hc(t, r, a), el(t, r, a, n), rl(null, t, r, !0, e, n);
    case 19:
      return jc(e, t, n);
    case 22:
      return xc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Fc(e, t) {
  return fu(e, t);
}
function Pp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new Pp(e, t, n, r);
}
function oo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zp(e) {
  if (typeof e == "function") return oo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Nl) return 11;
    if (e === El) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oa(e, t, n, r, a, i) {
  var o = 2;
  if (r = e, typeof e == "function") oo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case pn:
      return en(n.children, a, i, t);
    case _l:
      o = 8, a |= 8;
      break;
    case Ci:
      return e = We(12, n, t, a | 2), e.elementType = Ci, e.lanes = i, e;
    case _i:
      return e = We(13, n, t, a), e.elementType = _i, e.lanes = i, e;
    case Ni:
      return e = We(19, n, t, a), e.elementType = Ni, e.lanes = i, e;
    case Ys:
      return Va(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case qs:
          o = 10;
          break e;
        case Qs:
          o = 9;
          break e;
        case Nl:
          o = 11;
          break e;
        case El:
          o = 14;
          break e;
        case Pt:
          o = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = We(o, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function en(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function Va(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = Ys, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function xi(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function wi(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Tp(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ei(0), this.expirationTimes = ei(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function so(e, t, n, r, a, i, o, u, s) {
  return e = new Tp(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = We(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wl(i), e;
}
function Mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function bc(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
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
    if (Re(n)) return bu(e, n, t);
  }
  return t;
}
function Uc(e, t, n, r, a, i, o, u, s) {
  return e = so(n, r, !0, e, a, i, o, u, s), e.context = bc(null), n = e.current, r = Ee(), a = bt(n), i = vt(r, a), i.callback = t ?? null, $t(n, i, a), e.current.lanes = a, zr(e, a, r), De(e, r), e;
}
function Ha(e, t, n, r) {
  var a = t.current, i = Ee(), o = bt(a);
  return n = bc(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(a, t, o), e !== null && (et(e, a, o, i), ta(e, a, o)), o;
}
function Ma(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uo(e, t) {
  Cs(e, t), (e = e.alternate) && Cs(e, t);
}
function Lp() {
  return null;
}
var Bc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function co(e) {
  this._internalRoot = e;
}
Wa.prototype.render = co.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ha(e, t, null, null);
};
Wa.prototype.unmount = co.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function() {
      Ha(null, e, null, null);
    }), t[yt] = null;
  }
};
function Wa(e) {
  this._internalRoot = e;
}
Wa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = xu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && ku(e);
  }
};
function fo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ga(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _s() {
}
function Rp(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = Ma(o);
        i.call(f);
      };
    }
    var o = Uc(t, r, e, 0, null, !1, !1, "", _s);
    return e._reactRootContainer = o, e[yt] = o.current, gr(e.nodeType === 8 ? e.parentNode : e), on(), o;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = Ma(s);
      u.call(f);
    };
  }
  var s = so(e, 0, !1, null, null, !1, !1, "", _s);
  return e._reactRootContainer = s, e[yt] = s.current, gr(e.nodeType === 8 ? e.parentNode : e), on(function() {
    Ha(t, s, n, r);
  }), s;
}
function qa(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = Ma(o);
        u.call(s);
      };
    }
    Ha(t, o, e, a);
  } else o = Rp(n, t, e, a, r);
  return Ma(o);
}
gu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (Tl(t, n | 1), De(t, oe()), !(q & 6) && (An = oe() + 500, Gt()));
      }
      break;
    case 13:
      on(function() {
        var r = xt(e, 1);
        if (r !== null) {
          var a = Ee();
          et(r, e, 1, a);
        }
      }), uo(e, 1);
  }
};
Ml = function(e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      et(t, e, 134217728, n);
    }
    uo(e, 134217728);
  }
};
yu = function(e) {
  if (e.tag === 13) {
    var t = bt(e), n = xt(e, t);
    if (n !== null) {
      var r = Ee();
      et(n, e, t, r);
    }
    uo(e, t);
  }
};
xu = function() {
  return Y;
};
wu = function(e, t) {
  var n = Y;
  try {
    return Y = e, t();
  } finally {
    Y = n;
  }
};
Ai = function(e, t, n) {
  switch (t) {
    case "input":
      if (zi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Oa(r);
            if (!a) throw Error(E(90));
            Xs(r), zi(r, a);
          }
        }
      }
      break;
    case "textarea":
      Zs(e, n);
      break;
    case "select":
      t = n.value, t != null && Cn(e, !!n.multiple, t, !1);
  }
};
lu = ao;
ou = on;
var Dp = { usingClientEntryPoint: !1, Events: [Mr, gn, Oa, au, iu, ao] }, Qn = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ip = { bundleType: Qn.bundleType, version: Qn.version, rendererPackageName: Qn.rendererPackageName, rendererConfig: Qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Qn.findFiberByHostInstance || Lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yr.isDisabled && Yr.supportsFiber) try {
    Ra = Yr.inject(Ip), st = Yr;
  } catch {
  }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dp;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fo(t)) throw Error(E(200));
  return Mp(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!fo(e)) throw Error(E(299));
  var n = !1, r = "", a = Bc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = so(e, 1, !1, null, null, n, !1, r, a), e[yt] = t.current, gr(e.nodeType === 8 ? e.parentNode : e), new co(t);
};
Fe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = cu(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return on(e);
};
Fe.hydrate = function(e, t, n) {
  if (!Ga(t)) throw Error(E(200));
  return qa(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!fo(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", o = Bc;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Uc(t, null, e, 1, n ?? null, a, !1, i, o), e[yt] = t.current, gr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Wa(t);
};
Fe.render = function(e, t, n) {
  if (!Ga(t)) throw Error(E(200));
  return qa(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!Ga(e)) throw Error(E(40));
  return e._reactRootContainer ? (on(function() {
    qa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[yt] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = ao;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ga(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return qa(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function Vc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vc);
    } catch (e) {
      console.error(e);
    }
}
Vc(), Vs.exports = Fe;
var Ap = Vs.exports, Hc, Ns = Ap;
Hc = Ns.createRoot, Ns.hydrateRoot;
const Op = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, $p = [
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
], Fp = [
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
function Nr(e) {
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
function bp(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, i = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(i) ? i : 0 };
}
const hl = () => globalThis.__crycatBase || "";
async function G(e, t) {
  const n = await fetch(hl() + e, t);
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
  blobs: (e) => G(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => G(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  previewUrl: (e) => `/api/assets/${e}/preview.png`,
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
  pageUrl: (e, t, n = !1) => `${hl().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}`,
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
  iconUrl: () => `${hl()}/api/icon.png?v=${Date.now()}`,
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
async function Up(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((v, m) => {
      a.onload = () => v(), a.onerror = () => m(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, o = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(i * u), s.height = Math.round(o * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (v) => s.toBlob((m) => v(m), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Wc(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Up(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const vl = [
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
function Bp(e) {
  return vl.find((t) => t.key === e) ?? vl[0];
}
function ki(e) {
  const t = Bp(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
}
const Gc = {
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
  "Tiempo estimado de corte de la Cricut Maker 5, calculado a partir del perímetro de las siluetas y del recorrido entre formas.": "Estimated cutting time for the Cricut Maker 5, calculated from the outline perimeter and the travel between shapes.",
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
}, qc = k.createContext("es");
function Vp({ idioma: e, children: t }) {
  return /* @__PURE__ */ l.jsx(qc.Provider, { value: e, children: t });
}
function po() {
  return k.useContext(qc);
}
function St() {
  const e = po();
  return (t, n) => {
    let r = e === "en" ? Gc[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function Hp(e, t, n) {
  return e === "en" ? Gc[t] ?? t : t;
}
function se({ size: e = 18, children: t }) {
  return /* @__PURE__ */ l.jsx(
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
function Wp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Gp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 9.5l5 5M21 9.5l-5 5" })
  ] });
}
function Er({ size: e }) {
  return /* @__PURE__ */ l.jsx(se, { size: e, children: /* @__PURE__ */ l.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function qp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Qp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Yp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Kp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Xp({ size: e }) {
  return /* @__PURE__ */ l.jsx(se, { size: e, children: /* @__PURE__ */ l.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function Jp({ size: e }) {
  return /* @__PURE__ */ l.jsx(se, { size: e, children: /* @__PURE__ */ l.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Zp({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function em({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function tm({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function nm({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function rm({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function am({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function im({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function lm({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function om({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M4 20h16" })
  ] });
}
function sm({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function um({ size: e }) {
  return /* @__PURE__ */ l.jsxs(se, { size: e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function cm({ size: e }) {
  return /* @__PURE__ */ l.jsx(se, { size: e, children: /* @__PURE__ */ l.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function dm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = St(), i = k.useMemo(() => t.map((g) => g.id), [t]), [o, u] = k.useState(/* @__PURE__ */ new Set()), [s, f] = k.useState(100), [v, m] = k.useState(50), [h, C] = k.useState("mayor"), [N, y] = k.useState("");
  k.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), y(""));
  }, [e, i.join(",")]);
  const F = (g) => !o.has(g), d = (g) => u((j) => {
    const _ = new Set(j);
    return _.has(g) ? _.delete(g) : _.add(g), _;
  }), c = (g) => {
    const j = g.w_mm_base || 0, _ = g.h_mm_base || 0;
    return h === "mayor" ? Math.max(j, _) : h === "menor" ? Math.min(j, _) : 2 * Math.sqrt(Math.max(0, j * _) / Math.PI);
  }, p = (g) => {
    if (v > 0) {
      const j = c(g);
      if (j > 0) return Math.min(10, Math.max(0.05, v / j));
    }
    return Math.min(10, Math.max(0.05, s / 100));
  }, w = (g) => {
    const j = p(g);
    return { w: (g.w_mm_base || 0) * j, h: (g.h_mm_base || 0) * j };
  }, S = async () => {
    let g = 0;
    for (const j of t) {
      if (!F(j.id)) continue;
      const _ = p(j) * 100;
      await A.patchAsset(j.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(_ * 10) / 10))
      }), g += 1;
    }
    await r(), y(a("{n} elementos ajustados ", { n: g }));
  };
  return !e || !t.length ? null : /* @__PURE__ */ l.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ l.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ l.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ l.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: a("Cómo quedan sobre un A4") }),
        /* @__PURE__ */ l.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((g) => {
          const j = w(g), _ = Math.min(98, j.w / 210 * 100);
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${g.id}`,
              style: {
                width: `${_}%`,
                maxWidth: `${_}%`,
                aspectRatio: `${j.w || 1} / ${j.h || 1}`,
                opacity: F(g.id) ? 1 : 0.3
              },
              title: `${g.name} · ${j.w.toFixed(1)}×${j.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ l.jsx("img", { src: A.previewUrl(g.id), alt: "" })
            },
            g.id
          );
        }) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsxs("div", { className: "hint", children: [
          a("Selecciona los que quieras (todos por defecto)"),
          " —",
          " ",
          i.length - o.size,
          "/",
          i.length
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((g) => /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            "data-testid": `import-item-${g.id}`,
            className: F(g.id) ? "sel" : "",
            onClick: () => d(g.id),
            title: g.name,
            children: [
              /* @__PURE__ */ l.jsx("img", { src: A.previewUrl(g.id), alt: g.name }),
              /* @__PURE__ */ l.jsx("span", { children: g.name })
            ]
          },
          g.id
        )) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "import-ajustes", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          a("Escala de los seleccionados"),
          /* @__PURE__ */ l.jsxs("span", { className: "row", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "number",
                min: 5,
                max: 1e3,
                step: 5,
                "data-testid": "import-escala",
                value: String(s),
                onChange: (g) => f(Number(g.target.value))
              }
            ),
            /* @__PURE__ */ l.jsx("span", { children: "%" })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          a("Tamaño del lado"),
          /* @__PURE__ */ l.jsxs("span", { className: "row", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "number",
                min: 5,
                max: 2e3,
                step: 1,
                "data-testid": "import-tamano",
                value: String(v),
                onChange: (g) => m(Number(g.target.value))
              }
            ),
            /* @__PURE__ */ l.jsx("span", { children: "mm" })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          a("Medir el tamaño por"),
          /* @__PURE__ */ l.jsxs(
            "select",
            {
              "data-testid": "import-modo",
              value: h,
              onChange: (g) => C(g.target.value),
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "mayor", children: a("Lado mayor") }),
                /* @__PURE__ */ l.jsx("option", { value: "menor", children: a("Lado menor") }),
                /* @__PURE__ */ l.jsx("option", { value: "circulo", children: a("Círculo equivalente (aprox.)") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: a("Los cambios se previsualizan en el A4 y se aplican al conservarlos.") }),
        N && /* @__PURE__ */ l.jsx("div", { className: "hint", "data-testid": "import-aviso", children: N })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ l.jsx("button", { "data-testid": "import-original", onClick: () => {
        (async () => {
          for (const g of t)
            await A.patchAsset(g.id, { scale_pct: 100 });
          await r(), n();
        })();
      }, children: a("Importar con tamaño original") }),
      /* @__PURE__ */ l.jsx("button", { "data-testid": "import-conservar", onClick: S, children: a("Conservar cambios") })
    ] })
  ] }) });
}
function fm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a
}) {
  const i = St(), [o, u] = k.useState(() => Nr(e));
  k.useEffect(() => u(Nr(e)), [e]);
  const s = k.useRef(null), f = bp(o), [v, m] = k.useState(""), h = k.useRef(!1), [C, N] = k.useState(""), y = k.useRef(!1), [F, d] = k.useState({ tamano: !1, borde: !1, mini: !1 });
  k.useEffect(() => {
    h.current || m(f.w > 0 ? f.w.toFixed(1) : ""), y.current || N(f.h > 0 ? f.h.toFixed(1) : "");
  }, [f.w, f.h]);
  const c = Number.isFinite(o.w_mm_base) ? o.w_mm_base : 0, p = Number.isFinite(o.h_mm_base) ? o.h_mm_base : 0, w = (P) => {
    m(P);
    const R = Number(P.replace(",", "."));
    !Number.isFinite(R) || R <= 0 || c <= 0 || _({ scale_pct: R / c * 100 });
  }, S = (P) => {
    N(P);
    const R = Number(P.replace(",", "."));
    !Number.isFinite(R) || R <= 0 || p <= 0 || _({ scale_pct: R / p * 100 });
  }, g = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && P.mini).length) ?? 0, j = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && !P.mini).length) ?? 0, _ = async (P) => {
    a == null || a(), "copies" in P && (P.copies = Math.max(0, P.copies ?? 0)), u((R) => ({ ...R, ...P }));
    try {
      await A.patchAsset(e.id, P);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "preview", children: /* @__PURE__ */ l.jsx("img", { src: A.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ l.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: i("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => A.assetsFolder().then((P) => A.abrirCarpeta(P.path)).catch(() => A.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ l.jsx(Er, { size: 16 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: i("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var P;
              return (P = s.current) == null ? void 0 : P.click();
            },
            children: /* @__PURE__ */ l.jsx(qp, { size: 16 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: s,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (P) => {
              var B;
              const R = (B = P.target.files) == null ? void 0 : B[0];
              if (P.target.value = "", !!R)
                try {
                  const { blob: Q, name: x } = await Wc(R);
                  await A.reemplazar(e.id, Q, x), await n();
                } catch {
                }
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `limpiar-${e.id}`,
            title: i("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ l.jsx(Qp, { size: 16 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: "icon-btn",
            title: o.bg_removed ? i("Restaurar fondo original") : i("Quitar fondo (inteligente)"),
            onClick: () => (o.bg_removed ? A.restoreBackground(e.id) : A.removeBackground(e.id)).then(n),
            children: o.bg_removed ? /* @__PURE__ */ l.jsx(Kp, { size: 16 }) : /* @__PURE__ */ l.jsx(Yp, { size: 16 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: i("Eliminar imagen"),
            onClick: () => A.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ l.jsx(Xp, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "copies-row", title: i("Copias"), children: [
          /* @__PURE__ */ l.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => _({ copies: o.copies - 1 }), children: "−" }),
          /* @__PURE__ */ l.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: o.copies }),
          /* @__PURE__ */ l.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => _({ copies: o.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            className: `mini-toggle ${o.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            title: i("Incluir como mini (rellena huecos)"),
            onClick: () => _({ mini_enabled: !o.mini_enabled }),
            children: [
              /* @__PURE__ */ l.jsx(Jp, { size: 15 }),
              " ",
              i("Mini")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-tamano-${e.id}`,
            onClick: () => d((P) => ({ ...P, tamano: !P.tamano })),
            children: [
              /* @__PURE__ */ l.jsx("span", { className: `chev ${F.tamano ? "open" : ""}`, children: "›" }),
              i("Tamaño"),
              /* @__PURE__ */ l.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                f.w.toFixed(1),
                "×",
                f.h.toFixed(1),
                " mm · ",
                Math.round(o.scale_pct),
                "%"
              ] })
            ]
          }
        ),
        F.tamano && /* @__PURE__ */ l.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ l.jsx("span", { title: i("Escala del elemento (100% = tamaño natural)"), children: i("Escala") }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: o.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (P) => _({ scale_pct: Number(P.target.value) })
              }
            ),
            /* @__PURE__ */ l.jsxs("span", { className: "scale-val", children: [
              Math.round(o.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ l.jsx("span", { title: i("Tamaño exacto en milímetros (mantiene la proporción)"), children: i("Ancho") }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: v,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  h.current = !0, y.current = !1;
                },
                onBlur: () => {
                  h.current = !1, m(f.w > 0 ? f.w.toFixed(1) : "");
                },
                onChange: (P) => w(P.target.value)
              }
            ),
            /* @__PURE__ */ l.jsx("span", { children: "mm" }),
            /* @__PURE__ */ l.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ l.jsx("span", { title: i("Tamaño exacto en milímetros (mantiene la proporción)"), children: i("Alto") }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: C,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  y.current = !0, h.current = !1;
                },
                onBlur: () => {
                  y.current = !1, N(f.h > 0 ? f.h.toFixed(1) : "");
                },
                onChange: (P) => S(P.target.value)
              }
            ),
            /* @__PURE__ */ l.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${e.id}`,
            onClick: () => d((P) => ({ ...P, borde: !P.borde })),
            children: [
              /* @__PURE__ */ l.jsx("span", { className: `chev ${F.borde ? "open" : ""}`, children: "›" }),
              i("Borde"),
              /* @__PURE__ */ l.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                o.offset_mm.toFixed(1),
                " mm",
                o.offset_mm <= 0 ? ` · ${i("global")}` : ""
              ] })
            ]
          }
        ),
        F.borde && /* @__PURE__ */ l.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${e.id}`,
                onClick: () => _({ offset_mm: Math.max(
                  0,
                  Math.round((o.offset_mm - 0.5) * 2) / 2
                ) }),
                children: "−"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 10,
                step: 0.5,
                "data-testid": `offset-range-${e.id}`,
                value: o.offset_mm,
                onChange: (P) => _({ offset_mm: Number(P.target.value) })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => _({ offset_mm: Math.min(
                  20,
                  Math.round((o.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", i("Extender")],
              ["blanco", i("Blanco")],
              ["color", i("Color")]
            ].map(([P, R]) => /* @__PURE__ */ l.jsx(
              "button",
              {
                className: `seg ${(o.offset_modo || "") === P ? "on" : ""}`,
                "data-testid": `offset-modo-${P}-${e.id}`,
                onClick: () => _({ offset_modo: P }),
                children: R
              },
              P
            )),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: o.offset_color || "#ffffff",
                title: i("Color del borde"),
                onChange: (P) => _({
                  offset_color: P.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      o.mini_enabled && /* @__PURE__ */ l.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${e.id}`,
            onClick: () => d((P) => ({ ...P, mini: !P.mini })),
            children: [
              /* @__PURE__ */ l.jsx("span", { className: `chev ${F.mini ? "open" : ""}`, children: "›" }),
              i("Opciones de mini"),
              /* @__PURE__ */ l.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                o.mini_quota,
                " · ",
                g
              ] })
            ]
          }
        ),
        F.mini && /* @__PURE__ */ l.jsx("div", { className: "fold-body", children: /* @__PURE__ */ l.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ l.jsx("span", { title: i("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: i("Cuota") }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => _({ mini_quota: Math.max(
                1,
                Math.round((o.mini_quota - 0.5) * 2) / 2
              ) }),
              children: "−"
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
            "×",
            o.mini_quota
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-mas-${e.id}`,
              onClick: () => _({ mini_quota: Math.min(
                100,
                Math.round((o.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "mini-count", children: i(" {n} minis", { n: g }) })
        ] }) })
      ] }),
      j > 0 && /* @__PURE__ */ l.jsx("div", { className: "size-mm", children: i("Colocadas: {n}", { n: j }) }),
      o.warnings.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ l.jsx(lm, { size: 14 }),
        " ",
        o.warnings[0],
        " ",
        /blob|trozos sueltos/i.test(o.warnings[0]) && /* @__PURE__ */ l.jsx(
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
function pm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: o
}) {
  const u = St(), s = k.useRef(null), [f, v] = k.useState(!1), [m, h] = k.useState(null), C = async (y) => {
    const F = [];
    for (const d of Array.from(y))
      try {
        const { blob: c, name: p } = await Wc(d);
        F.push(Nr(await A.upload(c, p)));
      } catch (c) {
        console.error(c);
      }
    await r(), F.length > 1 && h(F);
  }, N = n.usar_minis;
  return /* @__PURE__ */ l.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ l.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ l.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `dropzone${f ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var y;
          return (y = s.current) == null ? void 0 : y.click();
        },
        onDragOver: (y) => {
          y.preventDefault(), v(!0);
        },
        onDragLeave: () => v(!1),
        onDrop: (y) => {
          y.preventDefault(), v(!1), y.dataTransfer.files.length && C(y.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            u("Arrastra imágenes aquí"),
            /* @__PURE__ */ l.jsx("br", {}),
            /* @__PURE__ */ l.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: s,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (y) => {
                y.target.files && C(y.target.files), y.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((y) => /* @__PURE__ */ l.jsx(
      fm,
      {
        a: y,
        result: t,
        onChange: r,
        onEditarContorno: i,
        onAntesDeCambiar: o
      },
      y.id
    )) }),
    !N && /* @__PURE__ */ l.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => A.clearAssets().then(r),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ l.jsx(
      dm,
      {
        open: !!m,
        assets: m ?? [],
        onClose: () => h(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
function Qc({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = St(), [i, o] = k.useState(null), [u, s] = k.useState("");
  k.useEffect(() => {
    e && f(r || "");
  }, [e]);
  const f = async (v = "") => {
    s("");
    try {
      o(await A.fsList(v));
    } catch (m) {
      s(m.message);
    }
  };
  return e ? /* @__PURE__ */ l.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ l.jsxs("div", { className: "modal", onClick: (v) => v.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ l.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ l.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    u && /* @__PURE__ */ l.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ l.jsx("button", { onClick: () => f(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((v) => /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: () => f(`${i.path}/${v}`.replace("//", "/")),
          children: v
        },
        v
      ))
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("button", { onClick: t, children: a("Cancelar") })
    ] })
  ] }) }) : null;
}
function mm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i
}) {
  const o = St(), [u, s] = k.useState("resumen");
  if (!e) return null;
  const f = t.length > 0 && t.every((m) => m.startsWith("data:")), v = [
    o("Abre Cricut Design Space."),
    o("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    o("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    o("Pulsa «Crear» para preparar el lienzo."),
    o("Comprueba que las dimensiones coinciden con las del archivo."),
    o("Imprime en papel mate blanco y colócalo en la esterilla."),
    o("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ l.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ l.jsx("div", { className: "modal", children: u === "resumen" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("h3", { "data-testid": "save-titulo", children: o(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ l.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("p", { className: "hint", children: o("Archivos:") }),
      /* @__PURE__ */ l.jsx("ul", { className: "lista-archivos", children: t.map((m) => /* @__PURE__ */ l.jsx("li", { title: m, children: m.split(/[\\/]/).pop() }, m)) }),
      !f && /* @__PURE__ */ l.jsxs("p", { className: "hint", children: [
        o("Carpeta"),
        ": ",
        /* @__PURE__ */ l.jsx("code", { children: n })
      ] }),
      f && /* @__PURE__ */ l.jsx("p", { className: "hint", children: o("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "modal-botones", children: [
      f ? t.map((m, h) => /* @__PURE__ */ l.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${h}`,
          href: m,
          download: `crycat_pagina-${String(h + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ l.jsx(Er, { size: 15 }),
            " ",
            o("Descargar página {n}", { n: h + 1 })
          ]
        },
        h
      )) : /* @__PURE__ */ l.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ l.jsx(Er, { size: 15 }),
            " ",
            o("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("button", { "data-testid": "btn-continuar", onClick: i, children: o("Continuar") }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => s("cricut"),
          children: o("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("h3", { children: o("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ l.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: v.map((m, h) => /* @__PURE__ */ l.jsx("li", { children: m }, h)) }),
    /* @__PURE__ */ l.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => s("resumen"),
          children: o("Volver")
        }
      ),
      /* @__PURE__ */ l.jsx("button", { onClick: i, children: o("Entendido") })
    ] })
  ] }) }) });
}
function hm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: o, onJob: u, onRecalc: s, editando: f, onFinEdicion: v, onDeshacer: m, onRehacer: h, puedeDeshacer: C, puedeRehacer: N }) {
  const y = St(), F = po(), [d, c] = k.useState(1), [p, w] = k.useState({ x: 0, y: 0 }), [S, g] = k.useState(null), [j, _] = k.useState(() => Date.now()), [P, R] = k.useState(null), [B, Q] = k.useState(null), [x, V] = k.useState(!1), [re, ce] = k.useState([]), [he, T] = k.useState(""), [$, b] = k.useState(/* @__PURE__ */ new Set()), W = k.useRef(null), M = k.useRef(null), ae = F === "en" ? Fp : $p, we = k.useMemo(
    () => ae[Math.floor(Math.random() * ae.length)],
    [ae]
  ), ct = r.saveName.trim() || we;
  k.useEffect(() => {
    _(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const L = (t == null ? void 0 : t.pages) ?? 0, U = !!t && t.efficiency < 0.8;
  k.useEffect(() => {
    const z = W.current;
    if (!z) return;
    const I = (O) => {
      O.preventDefault(), O.stopPropagation();
      const ve = z.getBoundingClientRect(), Be = O.clientX - ve.left, dt = O.clientY - ve.top;
      c((rt) => {
        const ke = O.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, rt * ke)), _t = ie / rt;
        return w((Nt) => ({ x: Be - (Be - Nt.x) * _t, y: dt - (dt - Nt.y) * _t })), ie;
      });
    };
    return z.addEventListener("wheel", I, { passive: !1 }), () => z.removeEventListener("wheel", I);
  }, []);
  const jt = (z) => {
    if (z.target.closest(".item-box")) return;
    M.current = { x: z.clientX - p.x, y: z.clientY - p.y };
    const I = (ve) => {
      M.current && w({ x: ve.clientX - M.current.x, y: ve.clientY - M.current.y });
    }, O = () => {
      M.current = null, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", O);
    };
    window.addEventListener("mousemove", I), window.addEventListener("mouseup", O);
  };
  k.useEffect(() => {
    const z = (I) => {
      I.target.tagName !== "INPUT" && (I.key === "+" || I.key === "=" ? c((O) => Math.min(12, O * 1.08)) : I.key === "-" || I.key === "_" ? c((O) => Math.max(0.05, O / 1.08)) : I.key === "0" ? (c(1), w({ x: 0, y: 0 })) : I.key === "Escape" ? g(null) : I.key === "g" ? a((O) => ({ ...O, guidesVisible: !O.guidesVisible })) : I.key === "t" && a((O) => O.eyeFosforito ? { ...O, eyeFosforito: !1, eyeTransparent: !1 } : O.eyeTransparent ? { ...O, eyeTransparent: !1, eyeFosforito: !0 } : { ...O, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [a]);
  const Ue = k.useRef(null), bn = k.useRef(null), Ct = (z, I) => {
    z.preventDefault(), z.stopPropagation();
    const O = z.currentTarget.closest(".page-box");
    if (!O || !t) return;
    const ve = t.page_mm[0] / O.clientWidth, Be = {
      uid: I.uid,
      startX: z.clientX,
      startY: z.clientY,
      origX: I.x,
      origY: I.y,
      mmPerPx: ve
    };
    Ue.current = Be, bn.current = { x: I.x, y: I.y }, R(Be), Q({ uid: I.uid, x: I.x, y: I.y });
    const dt = (ke) => {
      const ie = Ue.current;
      if (!ie) return;
      const _t = (ke.clientX - ie.startX) * ie.mmPerPx / d, Nt = (ke.clientY - ie.startY) * ie.mmPerPx / d;
      bn.current = { x: ie.origX + _t, y: ie.origY + Nt }, Q({ uid: ie.uid, x: ie.origX + _t, y: ie.origY + Nt });
    }, rt = (ke) => {
      window.removeEventListener("mousemove", dt), window.removeEventListener("mouseup", rt);
      const ie = Ue.current;
      if (Ue.current = null, !ie) return;
      const _t = (ke.clientX - ie.startX) * ie.mmPerPx / d, Nt = (ke.clientY - ie.startY) * ie.mmPerPx / d;
      R(null), Q(null), !(Math.abs(_t) < 0.5 && Math.abs(Nt) < 0.5) && Kc(ie.uid, ie.origX + _t, ie.origY + Nt);
    };
    window.addEventListener("mousemove", dt), window.addEventListener("mouseup", rt);
  }, Kc = async (z, I, O) => {
    try {
      const ve = await A.move(z, I, O);
      ve.job ? u(ve.job) : await o();
    } catch {
      await o();
    } finally {
      _(Date.now());
    }
  }, Xc = async (z) => {
    const I = await A.unpin(z);
    u(I);
  };
  k.useEffect(() => {
    if (!f) {
      ce([]), T(""), b(/* @__PURE__ */ new Set());
      return;
    }
    A.blobs(f.id).then((z) => {
      ce(z.blobs), T(z.preview_png), b(new Set(z.blobs.filter((I) => !I.principal).map((I) => I.id)));
    }).catch(() => {
      ce([]), T("");
    });
  }, [f]);
  const Jc = async () => {
    if (f)
      try {
        await A.limpiarContorno(f.id, Array.from($));
      } finally {
        await (v == null ? void 0 : v());
      }
  }, Zc = (z) => {
    b((I) => {
      const O = new Set(I);
      return O.has(z) ? O.delete(z) : O.add(z), O;
    });
  }, [nt, qt] = k.useState(null), ed = async () => {
    try {
      const I = await A.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      qt({ files: I.files, folder: I.folder });
    } catch (I) {
      qt({ files: [], folder: "", error: I.message });
      return;
    }
    const z = document.createElement("iframe");
    z.setAttribute("aria-hidden", "true"), z.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", z.src = "/api/print.pdf", z.onload = () => {
      var I, O;
      try {
        (I = z.contentWindow) == null || I.focus(), (O = z.contentWindow) == null || O.print();
      } finally {
        window.setTimeout(() => z.remove(), 6e4);
      }
    }, document.body.appendChild(z);
  }, td = async () => {
    try {
      const z = await A.export(ct);
      qt({ files: z.files, folder: z.folder });
    } catch (z) {
      qt({ files: [], folder: "", error: z.message });
    }
  }, nd = () => {
    V(!0);
  }, rd = async (z) => {
    try {
      const I = await A.export(ct, z);
      qt({ files: I.files, folder: I.folder });
    } catch (I) {
      qt({ files: [], folder: "", error: I.message });
    }
  }, mo = (t == null ? void 0 : t.poly_mm) ?? [], [ad, id] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [ld, od] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], cn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : ld, Qa = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : od, ho = n.lienzo === "pagina" ? 0 : ad, vo = n.lienzo === "pagina" ? 0 : id, go = mo.length ? "M" + mo.map(([z, I]) => `${z - ho},${I - vo}`).join(" L") + " Z" : "", sd = (z) => {
    const I = (t == null ? void 0 : t.placements.filter((O) => O.page === z)) ?? [];
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (O) => {
          L > 1 && S === null && !O.target.closest(".item-box") && g(z);
        },
        "data-testid": `page-${z}`,
        children: [
          /* @__PURE__ */ l.jsx("img", { className: "sheet", src: A.pageUrl(z, j, n.simular_impresion === !0), alt: y("Página {i}", { i: z + 1 }), draggable: !1 }),
          r.guidesVisible && go && /* @__PURE__ */ l.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${cn} ${Qa}`, preserveAspectRatio: "none", children: /* @__PURE__ */ l.jsx(
            "path",
            {
              d: go,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, cn / 250),
              strokeDasharray: `${cn / 55} ${cn / 85}`,
              opacity: 0.85
            }
          ) }),
          I.map((O) => {
            const ve = e.find((ke) => ke.id === O.asset_id), Be = (B == null ? void 0 : B.uid) === O.uid ? B : null, dt = ((Be ? Be.x : O.x) - ho) / (cn || 1) * 100, rt = ((Be ? Be.y : O.y) - vo) / (Qa || 1) * 100;
            return /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `item-box ${O.pinned ? "pinned" : ""} ${(P == null ? void 0 : P.uid) === O.uid ? "dragging" : ""}`,
                style: {
                  left: `${dt}%`,
                  top: `${rt}%`,
                  width: `${O.w / (cn || 1) * 100}%`,
                  height: `${O.h / (Qa || 1) * 100}%`
                },
                title: (ve == null ? void 0 : ve.name) ?? "",
                onMouseDown: (ke) => Ct(ke, O),
                onContextMenu: (ke) => {
                  ke.preventDefault(), Xc(O.uid);
                },
                "data-testid": `item-${O.uid}`,
                children: O.pinned && /* @__PURE__ */ l.jsx("span", { className: "pin" })
              },
              O.uid
            );
          })
        ]
      },
      z
    );
  }, ud = S !== null ? [S] : Array.from({ length: L }, (z, I) => I);
  return /* @__PURE__ */ l.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            "data-testid": "btn-deshacer",
            title: y("Deshacer (Ctrl+Z)"),
            onClick: () => m(),
            disabled: !C,
            children: [
              /* @__PURE__ */ l.jsx(Zp, { size: 15 }),
              " ",
              y("Deshacer")
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            "data-testid": "btn-rehacer",
            title: y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => h(),
            disabled: !N,
            children: [
              /* @__PURE__ */ l.jsx(em, { size: 15 }),
              " ",
              y("Rehacer")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "group", children: /* @__PURE__ */ l.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          title: y("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final"),
          onClick: () => a((z) => ({ ...z, guidesVisible: !z.guidesVisible })),
          children: [
            /* @__PURE__ */ l.jsx(tm, { size: 15 }),
            " ",
            r.guidesVisible ? y("Guías") : y("Sin guías")
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          title: y("Forzar la recolocación de todo (ignora los elementos fijados)"),
          onClick: () => s(U ? "rapido" : "optimo"),
          children: y(U ? " Recalcular rápido" : " Recalcular óptimo")
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "group", children: [
        L > 1 && S === null && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ l.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ l.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 4 })), children: "4" })
        ] }),
        S !== null && /* @__PURE__ */ l.jsx("button", { onClick: () => g(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            "data-testid": "btn-ojo",
            title: y("Fondo: blanco  transparente  verde fosforito (tecla T)"),
            onClick: () => a((z) => z.eyeFosforito ? { ...z, eyeFosforito: !1, eyeTransparent: !1 } : z.eyeTransparent ? { ...z, eyeTransparent: !1, eyeFosforito: !0 } : { ...z, eyeTransparent: !0, eyeFosforito: !1 }),
            children: (r.eyeFosforito || r.eyeTransparent, "")
          }
        ),
        /* @__PURE__ */ l.jsx("button", { onClick: () => c((z) => Math.min(12, z * 1.08)), title: y("Acercar (+)"), children: /* @__PURE__ */ l.jsx(nm, { size: 15 }) }),
        /* @__PURE__ */ l.jsx("button", { onClick: () => c((z) => Math.max(0.05, z / 1.08)), title: y("Alejar (−)"), children: /* @__PURE__ */ l.jsx(rm, { size: 15 }) }),
        /* @__PURE__ */ l.jsx(
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
    f ? /* @__PURE__ */ l.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ l.jsx(
          "img",
          {
            src: A.previewUrl(f.id) + `?t=${j}`,
            alt: f.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ l.jsx("div", { className: "editor-overlay", children: f && re.filter((z) => !z.principal).map((z, I) => {
          const [O, ve, Be, dt] = z.bbox, rt = f.w_px || 1, ke = f.h_px || 1;
          return /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `blob${$.has(z.id) ? " sel" : ""}`,
              "data-testid": `blob-${I}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: z.area_px,
                accion: $.has(z.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${O / rt * 100}%`,
                top: `${ve / ke * 100}%`,
                width: `${(Be - O) / rt * 100}%`,
                height: `${(dt - ve) / ke * 100}%`
              },
              onClick: () => Zc(z.id)
            },
            z.id
          );
        }) })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "hint", children: y("Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El contorno principal nunca se elimina. El archivo original no se toca.") })
    ] }) : /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: W,
        className: `canvas ${P ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: jt,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${p.x}px, ${p.y}px) scale(${d})` },
            children: [
              L === 0 && /* @__PURE__ */ l.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${S !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: ud.map(sd)
                }
              )
            ]
          }
        )
      }
    ),
    f ? /* @__PURE__ */ l.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ l.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: Jc,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => v == null ? void 0 : v(),
          children: y("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: we,
          value: r.saveName,
          onChange: (z) => a((I) => ({ ...I, saveName: z.target.value }))
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: y("Abrir la carpeta de guardado en el explorador"),
            "aria-label": y("Abrir carpeta de guardado"),
            onClick: () => A.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ l.jsx(Er, { size: 16 })
          }
        ),
        /* @__PURE__ */ l.jsx("button", { "data-testid": "btn-guardar", onClick: td, children: y("Guardar") }),
        /* @__PURE__ */ l.jsx("button", { "data-testid": "btn-guardar-como", onClick: nd, children: y("Guardar como…") }),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: ed,
            disabled: L === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      Qc,
      {
        open: x,
        initial: n.carpeta_export,
        onClose: () => V(!1),
        onPick: rd
      }
    ),
    /* @__PURE__ */ l.jsx(
      mm,
      {
        open: !!nt,
        files: (nt == null ? void 0 : nt.files) ?? [],
        folder: (nt == null ? void 0 : nt.folder) ?? "",
        error: nt == null ? void 0 : nt.error,
        onOpenFolder: (z) => void A.fsOpen(z).catch(() => {
        }),
        onClose: () => qt(null)
      }
    )
  ] });
}
function it({ id: e, title: t, open: n, toggle: r, children: a }) {
  return /* @__PURE__ */ l.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      /* @__PURE__ */ l.jsx("span", { children: t }),
      /* @__PURE__ */ l.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ l.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Es(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ l.jsx("strong", { children: n }, r) : n);
}
const vm = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function gm({ settings: e, saveSettings: t, applySettings: n }) {
  const r = St(), [a, i] = k.useState(!0), [o, u] = k.useState({
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [s, f] = k.useState(!1), [v, m] = k.useState([]), [h, C] = k.useState(""), [N, y] = k.useState(""), [F, d] = k.useState({});
  k.useEffect(() => {
    A.factoryPresets().then((x) => d(x.presets ?? {})).catch(() => {
    });
  }, []);
  const c = (x) => u((V) => ({ ...V, [x]: !V[x] })), p = (x) => t(x), w = k.useRef(null), S = k.useRef(void 0), g = (x) => {
    y(x), S.current && window.clearTimeout(S.current), S.current = window.setTimeout(() => y(""), 2e3);
  }, j = async () => {
    try {
      const x = await A.presets();
      m(Array.isArray(x.names) ? x.names : []);
    } catch {
    }
  };
  k.useEffect(() => {
    j();
  }, []);
  const _ = async () => {
    const x = h.trim();
    if (x)
      try {
        const V = await A.savePreset(x);
        m(V.names), C(""), g(r("Perfil guardado "));
      } catch {
        g(r("No se pudo guardar el perfil"));
      }
  }, P = async (x) => {
    try {
      const V = await A.loadPreset(x);
      n == null || n(V.settings, V.job), g(r("Perfil «{n}» cargado ", { n: x }));
    } catch {
      g(r("No se pudo cargar el perfil"));
    }
  }, R = async (x) => {
    try {
      m((await A.deletePreset(x)).names);
    } catch {
      g(r("No se pudo borrar el perfil"));
    }
  }, B = (x, V, re, ce, he = 1, T = "", $) => /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ l.jsx("label", { children: r(x) }),
    /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "number",
          min: re,
          max: ce,
          step: he,
          "data-testid": `set-${V}`,
          value: String(e[V]),
          onChange: (b) => {
            const W = Number(b.target.value);
            Number.isNaN(W) || p({ [V]: W });
          }
        }
      ),
      T && /* @__PURE__ */ l.jsx("span", { className: "hint", children: T }),
      $
    ] })
  ] }), Q = (x, V, re, ce) => /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ l.jsx("label", { children: r(x) }),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        "data-testid": `set-${V}`,
        value: String(e[V]),
        onChange: (he) => p({ [V]: he.target.value }),
        children: re.map(([he, T]) => /* @__PURE__ */ l.jsx("option", { value: he, children: r(T) }, he))
      }
    )
  ] });
  return /* @__PURE__ */ l.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: "panel-head",
        "data-testid": "panel-ajustes",
        onClick: () => i((x) => !x),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: `chev ${a ? "open" : ""}`, children: "›" }),
          /* @__PURE__ */ l.jsx("h2", { children: r("Ajustes") }),
          /* @__PURE__ */ l.jsx("span", { className: "fold-val", children: e.tema })
        ]
      }
    ),
    !a && /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Pulsa para desplegar los ajustes") }),
    a && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs(it, { id: "general", title: r("General"), open: !0, toggle: () => {
      }, children: [
        B("Espacio entre elementos", "espacio_mm", 0, 20, 0.5, "mm"),
        B("Margen de seguridad a los límites", "margen_mm", 0, 20, 0.5, "mm"),
        Q("Rotación admitida", "rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        B("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp"),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Tamaño de salida (vertical)") }),
          /* @__PURE__ */ l.jsxs(
            "select",
            {
              "data-testid": "set-pagina",
              value: e.pagina,
              onChange: (x) => {
                const V = x.target.value, re = Op[V];
                p(re ? { pagina: V, pagina_w: re[0], pagina_h: re[1] } : { pagina: V });
              },
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "A4", children: "A4 (210×297)" }),
                /* @__PURE__ */ l.jsx("option", { value: "A3", children: "A3 (297×420)" }),
                /* @__PURE__ */ l.jsx("option", { value: "A5", children: "A5 (148×210)" }),
                /* @__PURE__ */ l.jsx("option", { value: "Letter", children: "Letter (216×279)" }),
                /* @__PURE__ */ l.jsx("option", { value: "custom", children: r("Personalizado") })
              ]
            }
          )
        ] }),
        e.pagina === "custom" && /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Ancho × alto (mm)") }),
          /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-w",
                value: String(e.pagina_w),
                onChange: (x) => p({ pagina_w: Number(x.target.value) })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-h",
                value: String(e.pagina_h),
                onChange: (x) => p({ pagina_h: Number(x.target.value) })
              }
            )
          ] })
        ] }),
        Q("Máquina Cricut", "maquina", [
          ["maker5", "Cricut Maker 5"],
          ["estandar", "Explore / Joy Xtra / Venture"],
          ["joy", "Cricut Joy 2"]
        ]),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-usar-minis",
              checked: e.usar_minis,
              onChange: (x) => p({ usar_minis: x.target.checked })
            }
          ),
          r("Usar minis (rellenar huecos con copias pequeñas)")
        ] }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "checkbox",
                "data-testid": "set-auto-recalcular",
                checked: e.auto_recalcular !== !1,
                onChange: (x) => p({ auto_recalcular: x.target.checked })
              }
            ),
            r("Recalcular automáticamente con cada cambio")
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "minis", title: r("Minis"), open: o.minis, toggle: c, children: [
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
        B("Tamaño mínimo", "mini_min_mm", 1, 50, 0.5, "mm"),
        B(
          "Tamaño máximo del mini (% del original)",
          "mini_max_rescale",
          10,
          100,
          5,
          "%"
        ),
        Q("Rotaciones admitidas", "mini_rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        Q("Selección de tamaños", "mini_tamanos", [
          ["iguales", "Priorizar que sean iguales"],
          ["grandes", "Priorizar grandes"]
        ]),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-mini-usar-lista",
              checked: e.mini_usar_lista === !0,
              onChange: (x) => p({ mini_usar_lista: x.target.checked })
            }
          ),
          r("Usar lista de tamaños (en vez de los automáticos)")
        ] }) }),
        e.mini_usar_lista && /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Tamaños deseados (mayor a menor)") }),
          /* @__PURE__ */ l.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
            (e.mini_tamanos_lista ?? []).map((x, V) => /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "number",
                  min: 1,
                  max: 1e3,
                  step: 5,
                  "data-testid": `mini-tamano-${V}`,
                  value: String(x),
                  onChange: (re) => {
                    const ce = [...e.mini_tamanos_lista ?? []];
                    ce[V] = Number(re.target.value), p({ mini_tamanos_lista: ce });
                  }
                }
              ),
              /* @__PURE__ */ l.jsx("span", { className: "hint", children: "%" }),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  className: "icon-btn danger",
                  title: r("Quitar tamaño"),
                  "data-testid": `mini-tamano-quitar-${V}`,
                  onClick: () => p({
                    mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                      (re, ce) => ce !== V
                    )
                  })
                }
              )
            ] }, V)),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-testid": "btn-add-mini-tamano",
                onClick: () => p({
                  mini_tamanos_lista: [
                    ...e.mini_tamanos_lista ?? [],
                    50
                  ]
                }),
                children: r("Añadir tamaño")
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Cada valor es el tamaño del mini respecto al original; se prueban de mayor a menor hasta que quepan.") })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "optimizacion", title: r("Optimización"), open: o.optimizacion, toggle: c, children: [
        Q("Método", "opt_metodo", [
          ["greedy", "Greedy / Bottom-Left (rápido)"],
          ["largest", "Largest First (mayor primero)"],
          ["voronoi", "Voronoi (huecos más grandes)"],
          ["genetic", "Genético (máxima calidad)"]
        ]),
        Q("Calidad de cálculo", "opt_calidad", [
          ["exacta", "Exacta (más fina, más lenta)"],
          ["normal", "Normal (equilibrada)"],
          ["rapida", "Rápida (más gruesa, para bocetos)"]
        ]),
        B("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s"),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Perfiles listos") }),
          /* @__PURE__ */ l.jsx("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: Object.entries(F).map(([x, V]) => /* @__PURE__ */ l.jsx(
            "button",
            {
              "data-testid": `preset-${x}`,
              onClick: () => p(V),
              children: r(vm[x] ?? x)
            },
            x
          )) }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde · Imán: borde blanco") })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Ajustes rápidos") }),
          /* @__PURE__ */ l.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-testid": "preset-chapa",
                title: r("Chapa: casi sin espacio entre piezas"),
                onClick: () => p({
                  espacio_mm: 0.5,
                  margen_mm: 0.5,
                  offset_activo: !1
                }),
                children: r("Chapa")
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-testid": "preset-pegatina",
                title: r("Pegatina: espacio y borde de 1 mm para cortar fácil"),
                onClick: () => p({
                  espacio_mm: 2,
                  margen_mm: 1,
                  offset_activo: !0,
                  offset_mm: 1,
                  offset_modo: "extender"
                }),
                children: r("Pegatina")
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-testid": "preset-hoja",
                title: r("Hoja de pegatinas: sin espacio ni borde entre piezas"),
                onClick: () => p({
                  espacio_mm: 0,
                  margen_mm: 0.5,
                  offset_activo: !1
                }),
                children: r("Hoja de pegatinas")
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde") })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "imagen", title: r("Imagen"), open: o.imagen, toggle: c, children: [
        B("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm"),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
        Q("Espacio de color de impresión", "espacio_color", [
          ["srgb", "sRGB (estándar, el más seguro)"],
          ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
        ]),
        /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-simular_impresion",
              checked: e.simular_impresion === !0,
              onChange: (x) => p({ simular_impresion: x.target.checked })
            }
          ),
          r("Previsualizar la impresión (simular el espacio de color)")
        ] }),
        e.simular_impresion && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "checkbox",
                "data-testid": "set-sim_cmyk",
                checked: e.sim_cmyk === !0,
                onChange: (x) => p({ sim_cmyk: x.target.checked })
              }
            ),
            r("Simular el recorte de CMYK (amarillea azules/verdes)")
          ] }),
          B("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
          B("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
          B("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
        ] }),
        Q("Formato de color de salida", "color_formato", [
          ["rgba", "PNG con transparencia (recomendado)"],
          ["rgb", "PNG con fondo blanco"]
        ]),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-chequear-lineas",
              checked: e.chequear_lineas,
              onChange: (x) => p({ chequear_lineas: x.target.checked })
            }
          ),
          r("Comprobación de líneas anómalas")
        ] }) }),
        B(
          "DPI de importación en Design Space",
          "dpi_importacion",
          72,
          600,
          1,
          "ppp"
        ),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
        Q("Lienzo del archivo final", "lienzo", [
          ["recortable", "Solo área recortable (recomendado)"],
          ["pagina", "Página completa con márgenes"]
        ]),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Carpeta predeterminada de exportación") }),
          /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ l.jsx("span", { className: "path-text", "data-testid": "set-carpeta", children: e.carpeta_export || r("(Documentos)") }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-testid": "btn-elegir-carpeta",
                onClick: () => f(!0),
                children: r("Elegir carpeta…")
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Se guarda para la próxima vez que abras CryCat.") })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "offset", title: r("Offset / borde"), open: o.offset, toggle: c, children: [
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-offset-activo",
              checked: e.offset_activo === !0,
              onChange: (x) => p({ offset_activo: x.target.checked })
            }
          ),
          r("Añadir borde a todos los elementos")
        ] }) }),
        e.offset_activo && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          B("Grosor del borde", "offset_mm", 0.1, 20, 0.1, "mm"),
          Q("Tipo de borde", "offset_modo", [
            ["extender", "Extender el color del borde"],
            ["blanco", "Blanco"],
            ["color", "Color personalizado"]
          ]),
          e.offset_modo === "color" && /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
            /* @__PURE__ */ l.jsx("label", { children: r("Color del borde") }),
            /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "color",
                  "data-testid": "set-offset-color",
                  value: e.offset_color || "#ffffff",
                  onChange: (x) => p({ offset_color: x.target.value })
                }
              ),
              /* @__PURE__ */ l.jsx("span", { className: "hint", children: e.offset_color })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "corte", title: r("Estimación de corte"), open: o.corte, toggle: c, children: [
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: Es(
          r("Tiempo estimado de corte de la Cricut Maker 5, calculado a partir del perímetro de las siluetas y del recorrido entre formas."),
          ["Cricut Maker 5"]
        ) }),
        B("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        B("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        B("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        B("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      /* @__PURE__ */ l.jsxs(
        it,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: o.historial,
          toggle: c,
          children: [
            /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.") }),
            /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "switch",
                  "data-testid": "set-historial",
                  checked: e.historial !== !1,
                  onChange: (x) => p({ historial: x.target.checked })
                }
              ),
              /* @__PURE__ */ l.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              B("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (x) => p({ hist_tamano: x.target.checked })
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { className: "switch-text", children: r("Tamaño y escala") })
              ] }),
              /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-copias",
                    checked: e.hist_copias !== !1,
                    onChange: (x) => p({ hist_copias: x.target.checked })
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { className: "switch-text", children: r("Copias") })
              ] }),
              /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-borde",
                    checked: e.hist_borde !== !1,
                    onChange: (x) => p({ hist_borde: x.target.checked })
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { className: "switch-text", children: r("Borde por elemento") })
              ] }),
              /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-minis",
                    checked: e.hist_minis !== !1,
                    onChange: (x) => p({ hist_minis: x.target.checked })
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs(it, { id: "visualizacion", title: r("Visualización"), open: o.visualizacion, toggle: c, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Tema") }),
          /* @__PURE__ */ l.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: vl.map((x) => /* @__PURE__ */ l.jsxs(
            "button",
            {
              className: `theme-chip ${e.tema === x.key ? "active" : ""}`,
              "data-testid": `tema-${x.key}`,
              onClick: () => t({ tema: x.key }),
              children: [
                /* @__PURE__ */ l.jsx("span", { className: "dot", style: { background: x.colors.accent } }),
                /* @__PURE__ */ l.jsx("span", { className: "dot", style: { background: x.colors.accent2 } }),
                x.label
              ]
            },
            x.key
          )) })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-ver-guias",
              checked: e.ver_guias,
              onChange: (x) => t({ ver_guias: x.target.checked })
            }
          ),
          r("Mostrar guías de límites al inicio")
        ] }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Icono de la aplicación") }),
          /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ l.jsx("img", { src: A.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
            /* @__PURE__ */ l.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
              var x;
              return (x = w.current) == null ? void 0 : x.click();
            }, children: r("Cargar nuevo icono") }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: w,
                type: "file",
                hidden: !0,
                accept: "image/*",
                onChange: (x) => {
                  var re;
                  const V = (re = x.target.files) == null ? void 0 : re[0];
                  V && A.setIcon(V).then(() => {
                    window.location.reload();
                  }), x.target.value = "";
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "perfiles", title: r("Perfiles de configuración"), open: o.perfiles, toggle: c, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Guardar la configuración actual con un nombre") }),
          /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "text",
                "data-testid": "perfil-nombre",
                placeholder: r("Nombre del perfil (p. ej. «Pikmin A4»)"),
                value: h,
                onChange: (x) => C(x.target.value)
              }
            ),
            /* @__PURE__ */ l.jsx("button", { "data-testid": "btn-guardar-perfil", onClick: _, children: r("Guardar") })
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              "data-testid": "btn-guardar-ajustes",
              onClick: async () => {
                await t({}), g(r("Ajustes guardados "));
              },
              children: r("Guardar ajustes para la próxima vez")
            }
          ),
          N && /* @__PURE__ */ l.jsx("span", { className: "hint", children: N })
        ] }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ l.jsx("label", { children: r("Perfiles guardados") }),
          v.length === 0 && /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Todavía no hay perfiles guardados.") }),
          /* @__PURE__ */ l.jsx("div", { className: "profile-list", "data-testid": "perfil-lista", children: v.map((x) => /* @__PURE__ */ l.jsxs("div", { className: "profile-row", children: [
            /* @__PURE__ */ l.jsx("span", { className: "profile-name", title: x, children: x }),
            /* @__PURE__ */ l.jsx("button", { "data-testid": `cargar-${x}`, onClick: () => P(x), children: r("Cargar") }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: r("Borrar perfil"),
                onClick: () => R(x)
              }
            )
          ] }, x)) })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Los ajustes se guardan solos al cambiarlos; los perfiles permiten tener varias configuraciones con nombre y recuperarlas cuando quieras.") })
      ] }),
      /* @__PURE__ */ l.jsxs(it, { id: "extras", title: r("Extras"), open: o.extras, toggle: c, children: [
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-activo",
              checked: e.pikmin_activo !== !1,
              onChange: (x) => p({ pikmin_activo: x.target.checked })
            }
          ),
          r("Mostrar Pikmin de vez en cuando")
        ] }) }),
        B("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido",
              checked: e.pikmin_sonido !== !1,
              onChange: (x) => p({ pikmin_sonido: x.target.checked })
            }
          ),
          r("Sonido de Pikmin")
        ] }) }),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido-morir",
              checked: e.pikmin_sonido_morir !== !1,
              onChange: (x) => p({ pikmin_sonido_morir: x.target.checked })
            }
          ),
          r("De vez en cuando se muere (alma + sonido)")
        ] }) }),
        /* @__PURE__ */ l.jsx("div", { className: "ctl", children: /* @__PURE__ */ l.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-comprobar_versiones",
              checked: e.comprobar_versiones !== !1,
              onChange: (x) => t({ comprobar_versiones: x.target.checked })
            }
          ),
          r("Comprobar si hay versiones nuevas al iniciar")
        ] }) }),
        /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "creditos", "data-testid": "creditos", children: Es(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ l.jsx(
      Qc,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => f(!1),
        onPick: (x) => t({ carpeta_export: x })
      }
    )
  ] });
}
const tn = (e) => (globalThis.__crycatAssets || "") + e;
function Ps(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function ym({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: i = !1,
  onVolumen: o,
  onMute: u,
  onIdioma: s,
  onEasterEgg: f,
  onAyuda: v
}) {
  var b, W;
  const m = St(), h = po(), [C, N] = k.useState([]), [y, F] = k.useState(0), [d, c] = k.useState(null), [p, w] = k.useState(!1), [S, g] = k.useState(""), j = k.useRef(!1), _ = k.useRef([]);
  k.useEffect(() => {
    fetch("/api/funmsgs").then((M) => M.ok ? M.json() : { msgs: [] }).then((M) => N(M.msgs ?? [])).catch(() => {
    });
  }, []), k.useEffect(() => {
    let M = !0;
    return A.version().then((ae) => {
      M && (c(ae), !ae.comprobado && !j.current && (j.current = !0, A.checkVersion().then((we) => M && c(we)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      M = !1;
    };
  }, []);
  const P = ((b = d == null ? void 0 : d.actualizacion) == null ? void 0 : b.estado) === "descargando" || ((W = d == null ? void 0 : d.actualizacion) == null ? void 0 : W.estado) === "instalando";
  k.useEffect(() => {
    if (!P) return;
    const M = setInterval(() => {
      A.version().then(c).catch(() => {
      });
    }, 700);
    return () => clearInterval(M);
  }, [P]);
  const R = !!(e && !e.done);
  k.useEffect(() => {
    if (!R) return;
    const M = setInterval(() => F((ae) => ae + 1), 1200);
    return () => clearInterval(M);
  }, [R]);
  const B = C.length ? C : [
    m("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], Q = k.useMemo(() => {
    if (S) return S;
    if (P) {
      const M = d == null ? void 0 : d.actualizacion;
      if ((M == null ? void 0 : M.estado) === "instalando") return m("Instalando y reiniciando…");
      const ae = (M == null ? void 0 : M.progreso) != null ? Math.round(M.progreso) : null;
      return ae != null ? m("Descargando… {p}%", { p: ae }) : (M == null ? void 0 : M.mensaje) || m("Descargando actualización…");
    }
    if (R)
      return B[y % B.length];
    if (e && e.status === "error") return e.message || "Error";
    if (n && n.pages > 0) {
      const M = Math.round(n.efficiency * 100);
      return m(
        "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis",
        {
          n: n.placed,
          p: n.pages,
          s: n.pages > 1 ? "s" : "",
          ef: M,
          m: n.minis
        }
      );
    }
    return m("Listo para empezar");
  }, [S, P, R, e, B, y, n, m, d]), x = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), V = k.useMemo(() => {
    const M = e == null ? void 0 : e.eta_s;
    return !R || M === void 0 || M === null || M <= 0.5 ? "" : m(" · {x} restante", { x: Ps(M) });
  }, [e == null ? void 0 : e.eta_s, R, m]), re = k.useMemo(() => !r || !r.segundos ? "" : Ps(r.segundos), [r]), ce = async () => {
    w(!0), g("");
    try {
      const M = await A.checkVersion();
      c(M), M.error ? g(m("Sin conexión")) : M.hay_nueva || g(m("Estás en la última versión"));
    } catch {
      g(m("Sin conexión"));
    } finally {
      w(!1);
    }
  }, he = async () => {
    g("");
    try {
      const M = await A.updateVersion();
      M.ok ? g(m("Instalando y reiniciando…")) : M.modo === "dev" && M.url ? (g(m("Modo desarrollo: se actualiza con git")), await A.openReleases().catch(() => {
      })) : g(M.mensaje || m("No se pudo actualizar")), A.version().then(c).catch(() => {
      });
    } catch {
      g(m("No se pudo actualizar"));
    }
  }, $ = !!(d != null && d.hay_nueva && !R && !P) ? m("Nueva versión {v} disponible", { v: (d == null ? void 0 : d.ultima) ?? "" }) : "";
  return /* @__PURE__ */ l.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ l.jsx(
        "img",
        {
          src: A.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: m("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const M = Date.now();
            _.current = [..._.current, M].filter((ae) => M - ae < 2500), _.current.length >= 5 && (_.current = [], g(m("¡Fiesta Pikmin!")), window.setTimeout(() => g(""), 4e3), f == null || f());
          }
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      /* @__PURE__ */ l.jsx("span", { className: "msg", children: Q }),
      !!n && n.pages > 1 && /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: m("No cabe todo en una página: se usarán varias"),
          children: m("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      R && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ l.jsx("div", { style: { width: `${Math.max(4, x)}%` } }) }),
        /* @__PURE__ */ l.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          x,
          "%",
          V
        ] }),
        /* @__PURE__ */ l.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: tn("/piensa.gif"),
            alt: "",
            title: m("Pensando…"),
            onError: (M) => {
              M.currentTarget.style.display = "none";
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "right", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-info",
          title: m("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ l.jsx(um, { size: 15 }),
            " ",
            m("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          title: m("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ l.jsx(cm, { size: 15 }),
            " ",
            m("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: m("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((d == null ? void 0 : d.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ l.jsx(am, { size: 15 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: m("Idioma"),
          onClick: () => s == null ? void 0 : s(h === "es" ? "en" : "es"),
          children: h.toUpperCase()
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: m("Versión actual"),
          children: [
            (d == null ? void 0 : d.hay_nueva) && !P && /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: $ || m("Hay una versión nueva"),
                onClick: he,
                children: /* @__PURE__ */ l.jsx(im, { size: 14 })
              }
            ),
            "v",
            (d == null ? void 0 : d.actual) ?? "—",
            (d == null ? void 0 : d.hay_nueva) && (d == null ? void 0 : d.ultima) && /* @__PURE__ */ l.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
              "v",
              d.ultima
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "btn-mini",
                "data-testid": "btn-comprobar",
                title: m("Comprobar versiones"),
                onClick: ce,
                disabled: p,
                children: p ? "…" : /* @__PURE__ */ l.jsx(sm, { size: 14 })
              }
            ),
            (d == null ? void 0 : d.hay_nueva) && /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: m("Descargar e instalar la nueva versión"),
                onClick: he,
                children: /* @__PURE__ */ l.jsx(om, { size: 14 })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "vol-control", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            "data-testid": "btn-mute",
            className: "icon-sonido",
            title: m(i ? "Activar sonido" : "Silenciar"),
            "aria-label": m(i ? "Activar sonido" : "Silenciar"),
            onClick: () => u == null ? void 0 : u(!i),
            children: i ? /* @__PURE__ */ l.jsx(Gp, {}) : /* @__PURE__ */ l.jsx(Wp, {})
          }
        ),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 1,
            step: 0.05,
            "data-testid": "volumen",
            title: m("Volumen"),
            value: a,
            onChange: (M) => {
              o == null || o(Number(M.target.value)), i && Number(M.target.value) > 0 && (u == null || u(!1));
            }
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: `dot ${t ? "" : "off"}`,
          "data-testid": "backend-status",
          title: m(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: m("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            m("Corte"),
            " ",
            re || "—"
          ]
        }
      )
    ] })
  ] });
}
const xm = [
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
], wm = "/pikmin_bloom/", zs = "/pikmin/alma.png", km = "/sonidos/pikmin.mp3", Sm = "/sonidos/pikmin_morir.mp3";
function jm(e) {
  const [t, n] = k.useState([]);
  return k.useEffect(() => {
    fetch("/pikmin_bloom/indice.json").then((r) => r.ok ? r.json() : []).then((r) => {
      if (!Array.isArray(r)) return;
      const a = [...r];
      for (let i = a.length - 1; i > 0; i--) {
        const o = Math.floor(Math.random() * (i + 1));
        [a[i], a[o]] = [a[o], a[i]];
      }
      n(a.slice(0, 60).map((i) => tn(wm + i)));
    }).catch(() => {
    });
  }, []), k.useMemo(
    () => e && e.length ? [...e, ...t].map(tn) : [...xm, ...t].map(tn),
    [e, t]
  );
}
function Cm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: o = !1,
  minDelay: u,
  maxDelay: s,
  fuentes: f
}) {
  const v = jm(f), [m, h] = k.useState([]), C = k.useRef(void 0), N = k.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = k.useRef(o);
  y.current = o;
  const F = Math.max(5e3, t * 6e4), d = (S) => {
    if (!(!n || i))
      try {
        const g = new Audio(tn(S ? Sm : km));
        g.volume = Math.min(1, Math.max(0, a)), g.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const S = r && Math.random() < 0.25, g = S ? tn(zs) : v[Math.floor(Math.random() * v.length)] ?? tn(zs);
    h((j) => [...j, {
      src: g,
      left: 3 + Math.random() * 92,
      key: Date.now() + j.length,
      morir: S,
      estado: "paseando"
    }]), d(S);
  }, p = () => {
    if (!e) return;
    const S = u ?? Math.round(F * 0.5), g = s ?? Math.round(F * 1.5), j = S + Math.random() * Math.max(1, g - S);
    C.current = window.setTimeout(c, j);
  };
  k.useEffect(() => {
    if (!e) {
      window.clearTimeout(C.current), h([]);
      return;
    }
    return p(), () => window.clearTimeout(C.current);
  }, [e, t, n, r, a, i, v]), k.useEffect(() => {
    const S = () => {
      N.current = document.visibilityState === "hidden", !N.current && y.current && window.setTimeout(() => {
        h((g) => g.length ? (d(!1), g.map((j) => ({ ...j, estado: "festejando" }))) : g), window.setTimeout(() => {
          h([]), p();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, []);
  const w = (S) => {
    if (y.current && N.current) {
      h((g) => g.map((j) => j.key === S ? { ...j, estado: "quieto" } : j));
      return;
    }
    h((g) => g.filter((j) => j.key !== S)), p();
  };
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: m.map((S) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `pikmin-pet ${S.estado}${S.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": S.estado,
      "data-morir": S.morir ? "1" : "0",
      style: { left: `${S.left}%` },
      onAnimationEnd: () => w(S.key),
      children: /* @__PURE__ */ l.jsx(
        "img",
        {
          src: S.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => w(S.key)
        }
      )
    },
    S.key
  )) });
}
const Ts = "crycat_bienvenida_v1";
function _m() {
  const [e, t] = k.useState(!1);
  return k.useEffect(() => {
    try {
      localStorage.getItem(Ts) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Ts, "1");
    } catch {
    }
    t(!1);
  } };
}
function Nm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = St(), [a, i] = k.useState("inicio");
  if (!e) return null;
  const o = [
    r("Arrastra tus imágenes al panel de la izquierda (PNG, JPG, PSD, AI, SVG…)."),
    r("Ajusta el tamaño: usa la escala o escribe el ancho/alto exacto en mm."),
    r("Activa «Mini» en las imágenes que quieras repetir rellenando huecos."),
    r("Pulsa «Recalcular» si quieres recolocarlo a fondo (o déjalo en automático)."),
    r("Guarda: un PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
  ], u = [
    r("Abre Cricut Design Space."),
    r("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    r("Redimensiónala al tamaño real que ves en CryCat."),
    r("Pulsa «Crear» y comprueba que las medidas coinciden."),
    r("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    r("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ l.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ l.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ l.jsx("h3", { children: r(a === "inicio" ? "Cómo usar CryCat" : "Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ l.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: (a === "inicio" ? o : u).map((s, f) => /* @__PURE__ */ l.jsx("li", { children: s }, f)) }),
    a === "inicio" && /* @__PURE__ */ l.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ l.jsx("div", { className: "modal-botones", children: a === "inicio" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
        /* @__PURE__ */ l.jsx(Er, { size: 15 }),
        " ",
        r("Abrir carpeta de guardado")
      ] }),
      /* @__PURE__ */ l.jsx("button", { "data-testid": "ayuda-cricut", onClick: () => i("cricut"), children: r("Pasos en Cricut Design Space") }),
      /* @__PURE__ */ l.jsx("button", { className: "primary", "data-testid": "ayuda-cerrar", onClick: t, children: r("¡Entendido!") })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("button", { "data-testid": "ayuda-volver", onClick: () => i("inicio"), children: r("Volver") }),
      /* @__PURE__ */ l.jsx("button", { className: "primary", onClick: t, children: r("¡Entendido!") })
    ] }) })
  ] }) });
}
function Em() {
  const [e, t] = k.useState([]), [n, r] = k.useState(null), [a, i] = k.useState(null), [o, u] = k.useState(null), [s, f] = k.useState(null), [v, m] = k.useState(null), [h, C] = k.useState(!0), [N, y] = k.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    viewMode: 1,
    saveName: ""
  }), [F, d] = k.useState(33.3), [c, p] = k.useState(33.3), w = _m(), S = k.useRef(null), g = k.useRef(null);
  k.useEffect(() => {
    (async () => {
      try {
        const L = await A.getSettings();
        f(L.settings), ki(L.settings.tema), y((U) => ({
          ...U,
          guidesVisible: L.settings.ver_guias,
          eyeTransparent: L.settings.fondo_transparente
        })), t((await A.listAssets()).map(Nr)), i(await A.result());
      } catch {
        C(!1);
      }
    })();
  }, []), k.useEffect(() => {
    const L = setInterval(async () => {
      try {
        await A.health(), C(!0);
      } catch {
        C(!1);
      }
    }, 5e3);
    return () => clearInterval(L);
  }, []);
  const j = k.useCallback(async () => {
    try {
      t((await A.listAssets()).map(Nr)), i(await A.result());
      try {
        u(await A.estimate());
      } catch {
      }
    } catch {
      C(!1);
    }
  }, []), _ = k.useCallback((L) => {
    g.current && window.clearInterval(g.current), g.current = window.setInterval(async () => {
      try {
        const U = await A.job(L);
        m(U), U.done && (window.clearInterval(g.current), g.current = null, await j(), U.status === "done" && window.setTimeout(() => m(null), 2500));
      } catch {
        window.clearInterval(g.current), g.current = null;
      }
    }, 300);
  }, []), P = k.useCallback(async () => {
    try {
      const L = await A.optimize();
      m(L), _(L.id);
    } catch {
      C(!1);
    }
  }, [_]), R = k.useCallback(
    async (L) => {
      try {
        const U = await A.optimize(L, !0);
        m(U), _(U.id);
      } catch {
        C(!1);
      }
    },
    [_]
  ), B = k.useCallback(() => {
    s && s.auto_recalcular === !1 || (S.current && window.clearTimeout(S.current), S.current = window.setTimeout(P, 400));
  }, [P, s]), Q = k.useCallback(
    async (L) => {
      f((U) => U && { ...U, ...L }), L.tema && ki(L.tema);
      try {
        const U = await A.putSettings(L);
        if (U.job)
          m(U.job), _(U.job.id);
        else
          try {
            u(await A.estimate());
          } catch {
          }
      } catch {
        C(!1);
      }
    },
    [_]
  ), x = k.useRef([]), V = k.useRef([]), [re, ce] = k.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), he = (s == null ? void 0 : s.historial) !== !1, T = (s == null ? void 0 : s.historial_max) ?? 40, $ = () => ce({
    puedeDeshacer: x.current.length > 0,
    puedeRehacer: V.current.length > 0
  }), b = k.useCallback(() => {
    const L = [];
    return (s == null ? void 0 : s.hist_tamano) !== !1 && L.push("scale_pct"), (s == null ? void 0 : s.hist_copias) !== !1 && L.push("copies"), (s == null ? void 0 : s.hist_borde) !== !1 && L.push("offset_mm", "offset_modo", "offset_color"), (s == null ? void 0 : s.hist_minis) !== !1 && L.push("mini_enabled", "mini_quota"), L;
  }, [
    s == null ? void 0 : s.hist_tamano,
    s == null ? void 0 : s.hist_copias,
    s == null ? void 0 : s.hist_borde,
    s == null ? void 0 : s.hist_minis
  ]), W = k.useCallback((L) => {
    const U = {};
    for (const jt of b()) U[jt] = L[jt];
    return U;
  }, [b]), M = k.useCallback(() => {
    he && (x.current = [...x.current, e].slice(-T), V.current = [], $());
  }, [e, he, T]), ae = k.useCallback(async () => {
    const L = x.current.pop();
    if (L) {
      V.current = [...V.current, e], t(L), $();
      for (const U of L)
        await A.patchAsset(U.id, W(U)).catch(() => {
        });
      await j();
    }
  }, [e, j, W]), we = k.useCallback(async () => {
    const L = V.current.pop();
    if (L) {
      x.current = [...x.current, e], t(L), $();
      for (const U of L)
        await A.patchAsset(U.id, W(U)).catch(() => {
        });
      await j();
    }
  }, [e, j, W]);
  k.useEffect(() => {
    const L = (U) => {
      if (!(U.ctrlKey || U.metaKey)) return;
      const Ue = U.target;
      if (Ue && (Ue.tagName === "INPUT" || Ue.tagName === "TEXTAREA" || Ue.tagName === "SELECT" || Ue.isContentEditable)) return;
      const Ct = U.key.toLowerCase();
      Ct === "z" && !U.shiftKey ? (U.preventDefault(), ae()) : (Ct === "y" || Ct === "z" && U.shiftKey) && (U.preventDefault(), we());
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [ae, we]);
  const ct = k.useCallback(
    (L) => {
      const U = (Ue) => {
        const bn = window.innerWidth, Ct = Ue.clientX / bn * 100;
        L === "left" ? d(Math.min(45, Math.max(12, Ct))) : p(Math.min(60, Math.max(20, Ct - F)));
      }, jt = () => {
        window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", jt);
      };
      window.addEventListener("mousemove", U), window.addEventListener("mouseup", jt);
    },
    [F]
  );
  return k.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ l.jsx(Vp, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ l.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ l.jsx("div", { className: "panel left", style: { width: `${F}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ l.jsx(
        pm,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await j(), B();
          },
          saveSettings: Q,
          onEditarContorno: (L) => r(L),
          onAntesDeCambiar: M
        }
      ) }),
      /* @__PURE__ */ l.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => ct("left") }),
      /* @__PURE__ */ l.jsx("div", { className: "viewer-wrap", style: { width: `${c}%` }, children: /* @__PURE__ */ l.jsx(
        hm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: N,
          setUi: y,
          saveSettings: Q,
          optimize: P,
          onRefresh: j,
          onJob: (L) => {
            m(L), _(L.id);
          },
          onRecalc: R,
          editando: n,
          onFinEdicion: async () => {
            r(null), await j();
          },
          onDeshacer: ae,
          onRehacer: we,
          puedeDeshacer: re.puedeDeshacer,
          puedeRehacer: re.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ l.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => ct("center") }),
      /* @__PURE__ */ l.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ l.jsx(
        gm,
        {
          settings: s,
          saveSettings: Q,
          applySettings: (L, U) => {
            f(L), ki(L.tema), U && (m(U), _(U.id));
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ l.jsx(
      ym,
      {
        job: v,
        backendOk: h,
        result: a,
        estimate: o,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        onVolumen: (L) => Q({ volumen: L }),
        onMute: (L) => Q({ mute: L }),
        onIdioma: (L) => Q({ idioma: L }),
        onEasterEgg: () => Q({
          pikmin_fiesta: !s.pikmin_fiesta
        }),
        onAyuda: w.abrir
      }
    ),
    /* @__PURE__ */ l.jsx(
      Cm,
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
    /* @__PURE__ */ l.jsx(
      Nm,
      {
        open: w.visible,
        onClose: w.cerrar,
        onAbrirCarpeta: () => void A.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    )
  ] }) }) : /* @__PURE__ */ l.jsx("div", { style: { padding: 30 }, children: Hp("es", "Cargando CryCat…") });
}
const Yc = document.getElementById("root");
function Ms(e, t = !1) {
  Yc.innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;
                align-items:center;justify-content:center;gap:14px;
                font:16px/1.5 system-ui,sans-serif;color:${t ? "#d94f6a" : "#8a7480"};
                background:#fdf7f9;padding:24px;text-align:center">
      <img src="./app/icono.png" alt="" style="width:88px;height:88px;border-radius:22px" />
      <div style="font-size:20px;font-weight:700;color:#43303a">CryCat web</div>
      <div id="carga-txt">${e}</div>
      <div style="max-width:520px;font-size:13px;color:#8a7480">
        El motor se descarga una vez y se queda en caché del navegador.
        Tus imágenes no salen de tu equipo.
      </div>
    </div>`;
}
const Si = (e) => {
  const t = document.getElementById("carga-txt");
  t && (t.textContent = e);
};
let sr = null;
const gl = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Pm = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function zm(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((i, o) => r.push([o, i]));
  for (const [i, o] of r)
    o instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"; filename="${o.name || "file"}"\r
Content-Type: ${o.type || "application/octet-stream"}\r
\r
`), n.push(o), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"\r
\r
${o}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    gl(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Tm(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, o = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((m, h) => {
    o[h] = m;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [m, h] = await zm(s);
    u = m, o["content-type"] = h;
  } else s instanceof Blob ? u = gl(await s.arrayBuffer()) : typeof s == "string" && (u = gl(new TextEncoder().encode(s).buffer));
  const f = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(i) + ", " + JSON.stringify(JSON.stringify(o)) + ", " + JSON.stringify(u) + ")", v = JSON.parse(await sr.runPythonAsync(f));
  return new Response(Pm(v.body), {
    status: v.status || 200,
    headers: v.headers || { "content-type": "application/json" }
  });
}
function Mm() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && sr)
      try {
        return await Tm(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Lm() {
  try {
    if (Ms("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    sr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Si), Si("Instalando FastAPI en el navegador…"), await sr.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", o = await sr.runPythonAsync(i);
          a.postMessage(JSON.parse(o));
        } catch (i) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (i && i.message ? i.message : i))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Mm(), Si("Abriendo la aplicación…"), Hc(Yc).render(/* @__PURE__ */ l.jsx(Em, {}));
  } catch (e) {
    Ms("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Lm();
