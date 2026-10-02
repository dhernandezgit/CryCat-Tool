var Mc = { exports: {} }, xo = {}, Tc = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca = Symbol.for("react.element"), ip = Symbol.for("react.portal"), sp = Symbol.for("react.fragment"), lp = Symbol.for("react.strict_mode"), cp = Symbol.for("react.profiler"), up = Symbol.for("react.provider"), dp = Symbol.for("react.context"), pp = Symbol.for("react.forward_ref"), mp = Symbol.for("react.suspense"), fp = Symbol.for("react.memo"), hp = Symbol.for("react.lazy"), ml = Symbol.iterator;
function gp(e) {
  return e === null || typeof e != "object" ? null : (e = ml && e[ml] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Lc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rc = Object.assign, Ac = {};
function pr(e, t, n) {
  this.props = e, this.context = t, this.refs = Ac, this.updater = n || Lc;
}
pr.prototype.isReactComponent = {};
pr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
pr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ic() {
}
Ic.prototype = pr.prototype;
function gs(e, t, n) {
  this.props = e, this.context = t, this.refs = Ac, this.updater = n || Lc;
}
var vs = gs.prototype = new Ic();
vs.constructor = gs;
Rc(vs, pr.prototype);
vs.isPureReactComponent = !0;
var fl = Array.isArray, $c = Object.prototype.hasOwnProperty, ys = { current: null }, Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oc(e, t, n) {
  var r, a = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) $c.call(t, r) && !Dc.hasOwnProperty(r) && (a[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) a.children = n;
  else if (1 < c) {
    for (var l = Array(c), d = 0; d < c; d++) l[d] = arguments[d + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in c = e.defaultProps, c) a[r] === void 0 && (a[r] = c[r]);
  return { $$typeof: ca, type: e, key: i, ref: s, props: a, _owner: ys.current };
}
function vp(e, t) {
  return { $$typeof: ca, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ca;
}
function yp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var hl = /\/+/g;
function Do(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? yp("" + e.key) : t.toString(36);
}
function Aa(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ca:
        case ip:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + Do(s, 0) : r, fl(a) ? (n = "", e != null && (n = e.replace(hl, "$&/") + "/"), Aa(a, t, n, "", function(d) {
    return d;
  })) : a != null && (xs(a) && (a = vp(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(hl, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", fl(e)) for (var c = 0; c < e.length; c++) {
    i = e[c];
    var l = r + Do(i, c);
    s += Aa(i, t, n, l, a);
  }
  else if (l = gp(e), typeof l == "function") for (e = l.call(e), c = 0; !(i = e.next()).done; ) i = i.value, l = r + Do(i, c++), s += Aa(i, t, n, l, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function va(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Aa(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function xp(e) {
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
var Ve = { current: null }, Ia = { transition: null }, wp = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: Ia, ReactCurrentOwner: ys };
function Fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = { map: va, forEach: function(e, t, n) {
  va(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return va(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return va(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!xs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ne.Component = pr;
ne.Fragment = sp;
ne.Profiler = cp;
ne.PureComponent = gs;
ne.StrictMode = lp;
ne.Suspense = mp;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wp;
ne.act = Fc;
ne.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Rc({}, e.props), a = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = ys.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (l in t) $c.call(t, l) && !Dc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    c = Array(l);
    for (var d = 0; d < l; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  return { $$typeof: ca, type: e.type, key: a, ref: i, props: r, _owner: s };
};
ne.createContext = function(e) {
  return e = { $$typeof: dp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: up, _context: e }, e.Consumer = e;
};
ne.createElement = Oc;
ne.createFactory = function(e) {
  var t = Oc.bind(null, e);
  return t.type = e, t;
};
ne.createRef = function() {
  return { current: null };
};
ne.forwardRef = function(e) {
  return { $$typeof: pp, render: e };
};
ne.isValidElement = xs;
ne.lazy = function(e) {
  return { $$typeof: hp, _payload: { _status: -1, _result: e }, _init: xp };
};
ne.memo = function(e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function(e) {
  var t = Ia.transition;
  Ia.transition = {};
  try {
    e();
  } finally {
    Ia.transition = t;
  }
};
ne.unstable_act = Fc;
ne.useCallback = function(e, t) {
  return Ve.current.useCallback(e, t);
};
ne.useContext = function(e) {
  return Ve.current.useContext(e);
};
ne.useDebugValue = function() {
};
ne.useDeferredValue = function(e) {
  return Ve.current.useDeferredValue(e);
};
ne.useEffect = function(e, t) {
  return Ve.current.useEffect(e, t);
};
ne.useId = function() {
  return Ve.current.useId();
};
ne.useImperativeHandle = function(e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function(e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function(e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
ne.useMemo = function(e, t) {
  return Ve.current.useMemo(e, t);
};
ne.useReducer = function(e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
ne.useRef = function(e) {
  return Ve.current.useRef(e);
};
ne.useState = function(e) {
  return Ve.current.useState(e);
};
ne.useSyncExternalStore = function(e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function() {
  return Ve.current.useTransition();
};
ne.version = "18.3.1";
Tc.exports = ne;
var v = Tc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jp = v, kp = Symbol.for("react.element"), Cp = Symbol.for("react.fragment"), Sp = Object.prototype.hasOwnProperty, _p = jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Np = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r, a = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Sp.call(t, r) && !Np.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: kp, type: e, key: i, ref: s, props: a, _owner: _p.current };
}
xo.Fragment = Cp;
xo.jsx = qc;
xo.jsxs = qc;
Mc.exports = xo;
var o = Mc.exports, Uc = { exports: {} }, tt = {}, Vc = { exports: {} }, Bc = {};
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
  function t(L, F) {
    var W = L.length;
    L.push(F);
    e: for (; 0 < W; ) {
      var A = W - 1 >>> 1, P = L[A];
      if (0 < a(P, F)) L[A] = F, L[W] = P, W = A;
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var F = L[0], W = L.pop();
    if (W !== F) {
      L[0] = W;
      e: for (var A = 0, P = L.length, X = P >>> 1; A < X; ) {
        var ae = 2 * (A + 1) - 1, Se = L[ae], _e = ae + 1, Ge = L[_e];
        if (0 > a(Se, W)) _e < P && 0 > a(Ge, Se) ? (L[A] = Ge, L[_e] = W, A = _e) : (L[A] = Se, L[ae] = W, A = ae);
        else if (_e < P && 0 > a(Ge, W)) L[A] = Ge, L[_e] = W, A = _e;
        else break e;
      }
    }
    return F;
  }
  function a(L, F) {
    var W = L.sortIndex - F.sortIndex;
    return W !== 0 ? W : L.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, c = s.now();
    e.unstable_now = function() {
      return s.now() - c;
    };
  }
  var l = [], d = [], h = 1, m = null, x = 3, _ = !1, g = !1, S = !1, T = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(L) {
    for (var F = n(d); F !== null; ) {
      if (F.callback === null) r(d);
      else if (F.startTime <= L) r(d), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = n(d);
    }
  }
  function y(L) {
    if (S = !1, f(L), !g) if (n(l) !== null) g = !0, ee(C);
    else {
      var F = n(d);
      F !== null && te(y, F.startTime - L);
    }
  }
  function C(L, F) {
    g = !1, S && (S = !1, u(R), R = -1), _ = !0;
    var W = x;
    try {
      for (f(F), m = n(l); m !== null && (!(m.expirationTime > F) || L && !j()); ) {
        var A = m.callback;
        if (typeof A == "function") {
          m.callback = null, x = m.priorityLevel;
          var P = A(m.expirationTime <= F);
          F = e.unstable_now(), typeof P == "function" ? m.callback = P : m === n(l) && r(l), f(F);
        } else r(l);
        m = n(l);
      }
      if (m !== null) var X = !0;
      else {
        var ae = n(d);
        ae !== null && te(y, ae.startTime - F), X = !1;
      }
      return X;
    } finally {
      m = null, x = W, _ = !1;
    }
  }
  var E = !1, k = null, R = -1, B = 5, N = -1;
  function j() {
    return !(e.unstable_now() - N < B);
  }
  function w() {
    if (k !== null) {
      var L = e.unstable_now();
      N = L;
      var F = !0;
      try {
        F = k(!0, L);
      } finally {
        F ? $() : (E = !1, k = null);
      }
    } else E = !1;
  }
  var $;
  if (typeof p == "function") $ = function() {
    p(w);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), H = O.port2;
    O.port1.onmessage = w, $ = function() {
      H.postMessage(null);
    };
  } else $ = function() {
    T(w, 0);
  };
  function ee(L) {
    k = L, E || (E = !0, $());
  }
  function te(L, F) {
    R = T(function() {
      L(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    g || _ || (g = !0, ee(C));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(L) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = x;
    }
    var W = x;
    x = F;
    try {
      return L();
    } finally {
      x = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, F) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var W = x;
    x = L;
    try {
      return F();
    } finally {
      x = W;
    }
  }, e.unstable_scheduleCallback = function(L, F, W) {
    var A = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? A + W : A) : W = A, L) {
      case 1:
        var P = -1;
        break;
      case 2:
        P = 250;
        break;
      case 5:
        P = 1073741823;
        break;
      case 4:
        P = 1e4;
        break;
      default:
        P = 5e3;
    }
    return P = W + P, L = { id: h++, callback: F, priorityLevel: L, startTime: W, expirationTime: P, sortIndex: -1 }, W > A ? (L.sortIndex = W, t(d, L), n(l) === null && L === n(d) && (S ? (u(R), R = -1) : S = !0, te(y, W - A))) : (L.sortIndex = P, t(l, L), g || _ || (g = !0, ee(C))), L;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(L) {
    var F = x;
    return function() {
      var W = x;
      x = F;
      try {
        return L.apply(this, arguments);
      } finally {
        x = W;
      }
    };
  };
})(Bc);
Vc.exports = Bc;
var bp = Vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ep = v, et = bp;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Gc = /* @__PURE__ */ new Set(), Ur = {};
function Mn(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Gc.add(t[e]);
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hi = Object.prototype.hasOwnProperty, zp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gl = {}, vl = {};
function Pp(e) {
  return hi.call(vl, e) ? !0 : hi.call(gl, e) ? !1 : zp.test(e) ? vl[e] = !0 : (gl[e] = !0, !1);
}
function Mp(e, t, n, r) {
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
function Tp(e, t, n, r) {
  if (t === null || typeof t > "u" || Mp(e, t, n, r)) return !0;
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
function Be(e, t, n, r, a, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Re[e] = new Be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Re[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Re[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Re[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Re[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Re[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Re[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Re[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Re[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ws = /[\-:]([a-z])/g;
function js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ws,
    js
  );
  Re[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ws, js);
  Re[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ws, js);
  Re[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Re[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Re[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var a = Re.hasOwnProperty(t) ? Re[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tp(t, n, a, r) && (n = null), r || a === null ? Pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ya = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), qn = Symbol.for("react.fragment"), Cs = Symbol.for("react.strict_mode"), gi = Symbol.for("react.profiler"), Hc = Symbol.for("react.provider"), Wc = Symbol.for("react.context"), Ss = Symbol.for("react.forward_ref"), vi = Symbol.for("react.suspense"), yi = Symbol.for("react.suspense_list"), _s = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Qc = Symbol.for("react.offscreen"), yl = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object" ? null : (e = yl && e[yl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ve = Object.assign, Oo;
function Er(e) {
  if (Oo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Oo = t && t[1] || "";
  }
  return `
` + Oo + e;
}
var Fo = !1;
function qo(e, t) {
  if (!e || Fo) return "";
  Fo = !0;
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
`), s = a.length - 1, c = i.length - 1; 1 <= s && 0 <= c && a[s] !== i[c]; ) c--;
      for (; 1 <= s && 0 <= c; s--, c--) if (a[s] !== i[c]) {
        if (s !== 1 || c !== 1)
          do
            if (s--, c--, 0 > c || a[s] !== i[c]) {
              var l = `
` + a[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= c);
        break;
      }
    }
  } finally {
    Fo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Er(e) : "";
}
function Lp(e) {
  switch (e.tag) {
    case 5:
      return Er(e.type);
    case 16:
      return Er("Lazy");
    case 13:
      return Er("Suspense");
    case 19:
      return Er("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = qo(e.type, !1), e;
    case 11:
      return e = qo(e.type.render, !1), e;
    case 1:
      return e = qo(e.type, !0), e;
    default:
      return "";
  }
}
function xi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Fn:
      return "Portal";
    case gi:
      return "Profiler";
    case Cs:
      return "StrictMode";
    case vi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Wc:
      return (e.displayName || "Context") + ".Consumer";
    case Hc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ss:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case _s:
      return t = e.displayName || null, t !== null ? t : xi(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return xi(e(t));
      } catch {
      }
  }
  return null;
}
function Rp(e) {
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
      return xi(t);
    case 8:
      return t === Cs ? "StrictMode" : "Mode";
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
function cn(e) {
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
function Yc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ap(e) {
  var t = Yc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function xa(e) {
  e._valueTracker || (e._valueTracker = Ap(e));
}
function Kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Yc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wi(e, t) {
  var n = t.checked;
  return ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Xc(e, t) {
  t = t.checked, t != null && ks(e, "checked", t, !1);
}
function ji(e, t) {
  Xc(e, t);
  var n = cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && ki(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function wl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ki(e, t, n) {
  (t !== "number" || Qa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function Jn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function jl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Jc(e, t) {
  var n = cn(t.value), r = cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function kl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Zc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wa, eu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (wa = wa || document.createElement("div"), wa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wa.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
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
}, Ip = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function(e) {
  Ip.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tr[t] = Tr[e];
  });
});
function tu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px";
}
function nu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = tu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var $p = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _i(e, t) {
  if (t) {
    if ($p[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Ni(e, t) {
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
var bi = null;
function Ns(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ei = null, Zn = null, er = null;
function Cl(e) {
  if (e = pa(e)) {
    if (typeof Ei != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = So(t), Ei(e.stateNode, e.type, t));
  }
}
function ru(e) {
  Zn ? er ? er.push(e) : er = [e] : Zn = e;
}
function au() {
  if (Zn) {
    var e = Zn, t = er;
    if (er = Zn = null, Cl(e), t) for (e = 0; e < t.length; e++) Cl(t[e]);
  }
}
function ou(e, t) {
  return e(t);
}
function iu() {
}
var Uo = !1;
function su(e, t, n) {
  if (Uo) return e(t, n);
  Uo = !0;
  try {
    return ou(e, t, n);
  } finally {
    Uo = !1, (Zn !== null || er !== null) && (iu(), au());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = So(n);
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var zi = !1;
if (Dt) try {
  var jr = {};
  Object.defineProperty(jr, "passive", { get: function() {
    zi = !0;
  } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
} catch {
  zi = !1;
}
function Dp(e, t, n, r, a, i, s, c, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Lr = !1, Ya = null, Ka = !1, Pi = null, Op = { onError: function(e) {
  Lr = !0, Ya = e;
} };
function Fp(e, t, n, r, a, i, s, c, l) {
  Lr = !1, Ya = null, Dp.apply(Op, arguments);
}
function qp(e, t, n, r, a, i, s, c, l) {
  if (Fp.apply(this, arguments), Lr) {
    if (Lr) {
      var d = Ya;
      Lr = !1, Ya = null;
    } else throw Error(M(198));
    Ka || (Ka = !0, Pi = d);
  }
}
function Tn(e) {
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
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Sl(e) {
  if (Tn(e) !== e) throw Error(M(188));
}
function Up(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Tn(e), t === null) throw Error(M(188));
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
        if (i === n) return Sl(a), e;
        if (i === r) return Sl(a), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) n = a, r = i;
    else {
      for (var s = !1, c = a.child; c; ) {
        if (c === n) {
          s = !0, n = a, r = i;
          break;
        }
        if (c === r) {
          s = !0, r = a, n = i;
          break;
        }
        c = c.sibling;
      }
      if (!s) {
        for (c = i.child; c; ) {
          if (c === n) {
            s = !0, n = i, r = a;
            break;
          }
          if (c === r) {
            s = !0, r = i, n = a;
            break;
          }
          c = c.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function cu(e) {
  return e = Up(e), e !== null ? uu(e) : null;
}
function uu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var du = et.unstable_scheduleCallback, _l = et.unstable_cancelCallback, Vp = et.unstable_shouldYield, Bp = et.unstable_requestPaint, je = et.unstable_now, Gp = et.unstable_getCurrentPriorityLevel, bs = et.unstable_ImmediatePriority, pu = et.unstable_UserBlockingPriority, Xa = et.unstable_NormalPriority, Hp = et.unstable_LowPriority, mu = et.unstable_IdlePriority, wo = null, Nt = null;
function Wp(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var yt = Math.clz32 ? Math.clz32 : Kp, Qp = Math.log, Yp = Math.LN2;
function Kp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Qp(e) / Yp | 0) | 0;
}
var ja = 64, ka = 4194304;
function Pr(e) {
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
function Ja(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var c = s & ~a;
    c !== 0 ? r = Pr(c) : (i &= s, i !== 0 && (r = Pr(i)));
  } else s = n & ~a, s !== 0 ? r = Pr(s) : i !== 0 && (r = Pr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - yt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Xp(e, t) {
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
function Jp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - yt(i), c = 1 << s, l = a[s];
    l === -1 ? (!(c & n) || c & r) && (a[s] = Xp(c, t)) : l <= t && (e.expiredLanes |= c), i &= ~c;
  }
}
function Mi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fu() {
  var e = ja;
  return ja <<= 1, !(ja & 4194240) && (ja = 64), e;
}
function Vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ua(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n;
}
function Zp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - yt(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Es(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var ie = 0;
function hu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gu, zs, vu, yu, xu, Ti = !1, Ca = [], en = null, tn = null, nn = null, Gr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Kt = [], em = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function kr(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = pa(t), t !== null && zs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function tm(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return en = kr(en, e, t, n, r, a), !0;
    case "dragenter":
      return tn = kr(tn, e, t, n, r, a), !0;
    case "mouseover":
      return nn = kr(nn, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return Gr.set(i, kr(Gr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, Hr.set(i, kr(Hr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function wu(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lu(n), t !== null) {
          e.blockedOn = t, xu(e.priority, function() {
            vu(n);
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
function $a(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      bi = r, n.target.dispatchEvent(r), bi = null;
    } else return t = pa(n), t !== null && zs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function bl(e, t, n) {
  $a(e) && n.delete(t);
}
function nm() {
  Ti = !1, en !== null && $a(en) && (en = null), tn !== null && $a(tn) && (tn = null), nn !== null && $a(nn) && (nn = null), Gr.forEach(bl), Hr.forEach(bl);
}
function Cr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ti || (Ti = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, nm)));
}
function Wr(e) {
  function t(a) {
    return Cr(a, e);
  }
  if (0 < Ca.length) {
    Cr(Ca[0], e);
    for (var n = 1; n < Ca.length; n++) {
      var r = Ca[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && Cr(en, e), tn !== null && Cr(tn, e), nn !== null && Cr(nn, e), Gr.forEach(t), Hr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) wu(n), n.blockedOn === null && Kt.shift();
}
var tr = Ut.ReactCurrentBatchConfig, Za = !0;
function rm(e, t, n, r) {
  var a = ie, i = tr.transition;
  tr.transition = null;
  try {
    ie = 1, Ps(e, t, n, r);
  } finally {
    ie = a, tr.transition = i;
  }
}
function am(e, t, n, r) {
  var a = ie, i = tr.transition;
  tr.transition = null;
  try {
    ie = 4, Ps(e, t, n, r);
  } finally {
    ie = a, tr.transition = i;
  }
}
function Ps(e, t, n, r) {
  if (Za) {
    var a = Li(e, t, n, r);
    if (a === null) Zo(e, t, r, eo, n), Nl(e, r);
    else if (tm(a, e, t, n, r)) r.stopPropagation();
    else if (Nl(e, r), t & 4 && -1 < em.indexOf(e)) {
      for (; a !== null; ) {
        var i = pa(a);
        if (i !== null && gu(i), i = Li(e, t, n, r), i === null && Zo(e, t, r, eo, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else Zo(e, t, r, null, n);
  }
}
var eo = null;
function Li(e, t, n, r) {
  if (eo = null, e = Ns(r), e = xn(e), e !== null) if (t = Tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = lu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return eo = e, null;
}
function ju(e) {
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
      switch (Gp()) {
        case bs:
          return 1;
        case pu:
          return 4;
        case Xa:
        case Hp:
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
var Jt = null, Ms = null, Da = null;
function ku() {
  if (Da) return Da;
  var e, t = Ms, n = t.length, r, a = "value" in Jt ? Jt.value : Jt.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[i - r]; r++) ;
  return Da = a.slice(e, 1 < r ? 1 - r : void 0);
}
function Oa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sa() {
  return !0;
}
function El() {
  return !1;
}
function nt(e) {
  function t(n, r, a, i, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Sa : El, this.isPropagationStopped = El, this;
  }
  return ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sa);
  }, persist: function() {
  }, isPersistent: Sa }), t;
}
var mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ts = nt(mr), da = ve({}, mr, { view: 0, detail: 0 }), om = nt(da), Bo, Go, Sr, jo = ve({}, da, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ls, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Bo = e.screenX - Sr.screenX, Go = e.screenY - Sr.screenY) : Go = Bo = 0, Sr = e), Bo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Go;
} }), zl = nt(jo), im = ve({}, jo, { dataTransfer: 0 }), sm = nt(im), lm = ve({}, da, { relatedTarget: 0 }), Ho = nt(lm), cm = ve({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), um = nt(cm), dm = ve({}, mr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), pm = nt(dm), mm = ve({}, mr, { data: 0 }), Pl = nt(mm), fm = {
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
}, hm = {
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
}, gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gm[e]) ? !!t[e] : !1;
}
function Ls() {
  return vm;
}
var ym = ve({}, da, { key: function(e) {
  if (e.key) {
    var t = fm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Oa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ls, charCode: function(e) {
  return e.type === "keypress" ? Oa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Oa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xm = nt(ym), wm = ve({}, jo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ml = nt(wm), jm = ve({}, da, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ls }), km = nt(jm), Cm = ve({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sm = nt(Cm), _m = ve({}, jo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Nm = nt(_m), bm = [9, 13, 27, 32], Rs = Dt && "CompositionEvent" in window, Rr = null;
Dt && "documentMode" in document && (Rr = document.documentMode);
var Em = Dt && "TextEvent" in window && !Rr, Cu = Dt && (!Rs || Rr && 8 < Rr && 11 >= Rr), Tl = " ", Ll = !1;
function Su(e, t) {
  switch (e) {
    case "keyup":
      return bm.indexOf(t.keyCode) !== -1;
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
function _u(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function zm(e, t) {
  switch (e) {
    case "compositionend":
      return _u(t);
    case "keypress":
      return t.which !== 32 ? null : (Ll = !0, Tl);
    case "textInput":
      return e = t.data, e === Tl && Ll ? null : e;
    default:
      return null;
  }
}
function Pm(e, t) {
  if (Un) return e === "compositionend" || !Rs && Su(e, t) ? (e = ku(), Da = Ms = Jt = null, Un = !1, e) : null;
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
var Mm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Rl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mm[e.type] : t === "textarea";
}
function Nu(e, t, n, r) {
  ru(r), t = to(t, "onChange"), 0 < t.length && (n = new Ts("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ar = null, Qr = null;
function Tm(e) {
  $u(e, 0);
}
function ko(e) {
  var t = Gn(e);
  if (Kc(t)) return e;
}
function Lm(e, t) {
  if (e === "change") return t;
}
var bu = !1;
if (Dt) {
  var Wo;
  if (Dt) {
    var Qo = "oninput" in document;
    if (!Qo) {
      var Al = document.createElement("div");
      Al.setAttribute("oninput", "return;"), Qo = typeof Al.oninput == "function";
    }
    Wo = Qo;
  } else Wo = !1;
  bu = Wo && (!document.documentMode || 9 < document.documentMode);
}
function Il() {
  Ar && (Ar.detachEvent("onpropertychange", Eu), Qr = Ar = null);
}
function Eu(e) {
  if (e.propertyName === "value" && ko(Qr)) {
    var t = [];
    Nu(t, Qr, e, Ns(e)), su(Tm, t);
  }
}
function Rm(e, t, n) {
  e === "focusin" ? (Il(), Ar = t, Qr = n, Ar.attachEvent("onpropertychange", Eu)) : e === "focusout" && Il();
}
function Am(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ko(Qr);
}
function Im(e, t) {
  if (e === "click") return ko(t);
}
function $m(e, t) {
  if (e === "input" || e === "change") return ko(t);
}
function Dm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wt = typeof Object.is == "function" ? Object.is : Dm;
function Yr(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!hi.call(t, a) || !wt(e[a], t[a])) return !1;
  }
  return !0;
}
function $l(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dl(e, t) {
  var n = $l(e);
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
    n = $l(n);
  }
}
function zu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Pu() {
  for (var e = window, t = Qa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qa(e.document);
  }
  return t;
}
function As(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Om(e) {
  var t = Pu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zu(n.ownerDocument.documentElement, n)) {
    if (r !== null && As(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Dl(n, i);
        var s = Dl(
          n,
          r
        );
        a && s && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Fm = Dt && "documentMode" in document && 11 >= document.documentMode, Vn = null, Ri = null, Ir = null, Ai = !1;
function Ol(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai || Vn == null || Vn !== Qa(r) || (r = Vn, "selectionStart" in r && As(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Yr(Ir, r) || (Ir = r, r = to(Ri, "onSelect"), 0 < r.length && (t = new Ts("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vn)));
}
function _a(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bn = { animationend: _a("Animation", "AnimationEnd"), animationiteration: _a("Animation", "AnimationIteration"), animationstart: _a("Animation", "AnimationStart"), transitionend: _a("Transition", "TransitionEnd") }, Yo = {}, Mu = {};
Dt && (Mu = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);
function Co(e) {
  if (Yo[e]) return Yo[e];
  if (!Bn[e]) return e;
  var t = Bn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mu) return Yo[e] = t[n];
  return e;
}
var Tu = Co("animationend"), Lu = Co("animationiteration"), Ru = Co("animationstart"), Au = Co("transitionend"), Iu = /* @__PURE__ */ new Map(), Fl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Iu.set(e, t), Mn(t, [e]);
}
for (var Ko = 0; Ko < Fl.length; Ko++) {
  var Xo = Fl[Ko], qm = Xo.toLowerCase(), Um = Xo[0].toUpperCase() + Xo.slice(1);
  dn(qm, "on" + Um);
}
dn(Tu, "onAnimationEnd");
dn(Lu, "onAnimationIteration");
dn(Ru, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Au, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function ql(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qp(r, t, void 0, e), e.currentTarget = null;
}
function $u(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var c = r[s], l = c.instance, d = c.currentTarget;
        if (c = c.listener, l !== i && a.isPropagationStopped()) break e;
        ql(a, c, d), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (c = r[s], l = c.instance, d = c.currentTarget, c = c.listener, l !== i && a.isPropagationStopped()) break e;
        ql(a, c, d), i = l;
      }
    }
  }
  if (Ka) throw e = Pi, Ka = !1, Pi = null, e;
}
function pe(e, t) {
  var n = t[Fi];
  n === void 0 && (n = t[Fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Du(t, e, 2, !1), n.add(r));
}
function Jo(e, t, n) {
  var r = 0;
  t && (r |= 4), Du(n, e, r, t);
}
var Na = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Na]) {
    e[Na] = !0, Gc.forEach(function(n) {
      n !== "selectionchange" && (Vm.has(n) || Jo(n, !1, e), Jo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Na] || (t[Na] = !0, Jo("selectionchange", !1, t));
  }
}
function Du(e, t, n, r) {
  switch (ju(t)) {
    case 1:
      var a = rm;
      break;
    case 4:
      a = am;
      break;
    default:
      a = Ps;
  }
  n = a.bind(null, t, n, e), a = void 0, !zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Zo(e, t, n, r, a) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var c = r.stateNode.containerInfo;
      if (c === a || c.nodeType === 8 && c.parentNode === a) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === a || l.nodeType === 8 && l.parentNode === a)) return;
        s = s.return;
      }
      for (; c !== null; ) {
        if (s = xn(c), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  su(function() {
    var d = i, h = Ns(n), m = [];
    e: {
      var x = Iu.get(e);
      if (x !== void 0) {
        var _ = Ts, g = e;
        switch (e) {
          case "keypress":
            if (Oa(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = xm;
            break;
          case "focusin":
            g = "focus", _ = Ho;
            break;
          case "focusout":
            g = "blur", _ = Ho;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Ho;
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
            _ = zl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = km;
            break;
          case Tu:
          case Lu:
          case Ru:
            _ = um;
            break;
          case Au:
            _ = Sm;
            break;
          case "scroll":
            _ = om;
            break;
          case "wheel":
            _ = Nm;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = pm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Ml;
        }
        var S = (t & 4) !== 0, T = !S && e === "scroll", u = S ? x !== null ? x + "Capture" : null : x;
        S = [];
        for (var p = d, f; p !== null; ) {
          f = p;
          var y = f.stateNode;
          if (f.tag === 5 && y !== null && (f = y, u !== null && (y = Br(p, u), y != null && S.push(Xr(p, y, f)))), T) break;
          p = p.return;
        }
        0 < S.length && (x = new _(x, g, null, n, h), m.push({ event: x, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", x && n !== bi && (g = n.relatedTarget || n.fromElement) && (xn(g) || g[Ot])) break e;
        if ((_ || x) && (x = h.window === h ? h : (x = h.ownerDocument) ? x.defaultView || x.parentWindow : window, _ ? (g = n.relatedTarget || n.toElement, _ = d, g = g ? xn(g) : null, g !== null && (T = Tn(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (_ = null, g = d), _ !== g)) {
          if (S = zl, y = "onMouseLeave", u = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (S = Ml, y = "onPointerLeave", u = "onPointerEnter", p = "pointer"), T = _ == null ? x : Gn(_), f = g == null ? x : Gn(g), x = new S(y, p + "leave", _, n, h), x.target = T, x.relatedTarget = f, y = null, xn(h) === d && (S = new S(u, p + "enter", g, n, h), S.target = f, S.relatedTarget = T, y = S), T = y, _ && g) t: {
            for (S = _, u = g, p = 0, f = S; f; f = Dn(f)) p++;
            for (f = 0, y = u; y; y = Dn(y)) f++;
            for (; 0 < p - f; ) S = Dn(S), p--;
            for (; 0 < f - p; ) u = Dn(u), f--;
            for (; p--; ) {
              if (S === u || u !== null && S === u.alternate) break t;
              S = Dn(S), u = Dn(u);
            }
            S = null;
          }
          else S = null;
          _ !== null && Ul(m, x, _, S, !1), g !== null && T !== null && Ul(m, T, g, S, !0);
        }
      }
      e: {
        if (x = d ? Gn(d) : window, _ = x.nodeName && x.nodeName.toLowerCase(), _ === "select" || _ === "input" && x.type === "file") var C = Lm;
        else if (Rl(x)) if (bu) C = $m;
        else {
          C = Am;
          var E = Rm;
        }
        else (_ = x.nodeName) && _.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (C = Im);
        if (C && (C = C(e, d))) {
          Nu(m, C, n, h);
          break e;
        }
        E && E(e, x, d), e === "focusout" && (E = x._wrapperState) && E.controlled && x.type === "number" && ki(x, "number", x.value);
      }
      switch (E = d ? Gn(d) : window, e) {
        case "focusin":
          (Rl(E) || E.contentEditable === "true") && (Vn = E, Ri = d, Ir = null);
          break;
        case "focusout":
          Ir = Ri = Vn = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ai = !1, Ol(m, n, h);
          break;
        case "selectionchange":
          if (Fm) break;
        case "keydown":
        case "keyup":
          Ol(m, n, h);
      }
      var k;
      if (Rs) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Un ? Su(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Cu && n.locale !== "ko" && (Un || R !== "onCompositionStart" ? R === "onCompositionEnd" && Un && (k = ku()) : (Jt = h, Ms = "value" in Jt ? Jt.value : Jt.textContent, Un = !0)), E = to(d, R), 0 < E.length && (R = new Pl(R, e, null, n, h), m.push({ event: R, listeners: E }), k ? R.data = k : (k = _u(n), k !== null && (R.data = k)))), (k = Em ? zm(e, n) : Pm(e, n)) && (d = to(d, "onBeforeInput"), 0 < d.length && (h = new Pl("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: d }), h.data = k));
    }
    $u(m, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = Br(e, n), i != null && r.unshift(Xr(e, i, a)), i = Br(e, t), i != null && r.push(Xr(e, i, a))), e = e.return;
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ul(e, t, n, r, a) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var c = n, l = c.alternate, d = c.stateNode;
    if (l !== null && l === r) break;
    c.tag === 5 && d !== null && (c = d, a ? (l = Br(n, i), l != null && s.unshift(Xr(n, l, c))) : a || (l = Br(n, i), l != null && s.push(Xr(n, l, c)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Bm = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
function Vl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Bm, `
`).replace(Gm, "");
}
function ba(e, t, n) {
  if (t = Vl(t), Vl(e) !== t && n) throw Error(M(425));
}
function no() {
}
var Ii = null, $i = null;
function Di(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Oi = typeof setTimeout == "function" ? setTimeout : void 0, Hm = typeof clearTimeout == "function" ? clearTimeout : void 0, Bl = typeof Promise == "function" ? Promise : void 0, Wm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bl < "u" ? function(e) {
  return Bl.resolve(null).then(e).catch(Qm);
} : Oi;
function Qm(e) {
  setTimeout(function() {
    throw e;
  });
}
function ei(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Wr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Wr(t);
}
function rn(e) {
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
function Gl(e) {
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
var fr = Math.random().toString(36).slice(2), _t = "__reactFiber$" + fr, Jr = "__reactProps$" + fr, Ot = "__reactContainer$" + fr, Fi = "__reactEvents$" + fr, Ym = "__reactListeners$" + fr, Km = "__reactHandles$" + fr;
function xn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ot] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gl(e); e !== null; ) {
        if (n = e[_t]) return n;
        e = Gl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function pa(e) {
  return e = e[_t] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function So(e) {
  return e[Jr] || null;
}
var qi = [], Hn = -1;
function pn(e) {
  return { current: e };
}
function me(e) {
  0 > Hn || (e.current = qi[Hn], qi[Hn] = null, Hn--);
}
function de(e, t) {
  Hn++, qi[Hn] = e.current, e.current = t;
}
var un = {}, Oe = pn(un), Qe = pn(!1), _n = un;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ye(e) {
  return e = e.childContextTypes, e != null;
}
function ro() {
  me(Qe), me(Oe);
}
function Hl(e, t, n) {
  if (Oe.current !== un) throw Error(M(168));
  de(Oe, t), de(Qe, n);
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(M(108, Rp(e) || "Unknown", a));
  return ve({}, n, r);
}
function ao(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, _n = Oe.current, de(Oe, e), de(Qe, Qe.current), !0;
}
function Wl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Ou(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, me(Qe), me(Oe), de(Oe, e)) : me(Qe), de(Qe, n);
}
var Rt = null, _o = !1, ti = !1;
function Fu(e) {
  Rt === null ? Rt = [e] : Rt.push(e);
}
function Xm(e) {
  _o = !0, Fu(e);
}
function mn() {
  if (!ti && Rt !== null) {
    ti = !0;
    var e = 0, t = ie;
    try {
      var n = Rt;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Rt = null, _o = !1;
    } catch (a) {
      throw Rt !== null && (Rt = Rt.slice(e + 1)), du(bs, mn), a;
    } finally {
      ie = t, ti = !1;
    }
  }
  return null;
}
var Wn = [], Qn = 0, oo = null, io = 0, ot = [], it = 0, Nn = null, At = 1, It = "";
function vn(e, t) {
  Wn[Qn++] = io, Wn[Qn++] = oo, oo = e, io = t;
}
function qu(e, t, n) {
  ot[it++] = At, ot[it++] = It, ot[it++] = Nn, Nn = e;
  var r = At;
  e = It;
  var a = 32 - yt(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - yt(t) + a;
  if (30 < i) {
    var s = a - a % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, At = 1 << 32 - yt(t) + a | n << a | r, It = i + e;
  } else At = 1 << i | n << a | r, It = e;
}
function Is(e) {
  e.return !== null && (vn(e, 1), qu(e, 1, 0));
}
function $s(e) {
  for (; e === oo; ) oo = Wn[--Qn], Wn[Qn] = null, io = Wn[--Qn], Wn[Qn] = null;
  for (; e === Nn; ) Nn = ot[--it], ot[it] = null, It = ot[--it], ot[it] = null, At = ot[--it], ot[it] = null;
}
var Ze = null, Je = null, fe = !1, gt = null;
function Uu(e, t) {
  var n = st(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ql(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Je = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nn !== null ? { id: At, overflow: It } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Je = null, !0) : !1;
    default:
      return !1;
  }
}
function Ui(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if (fe) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Ql(e, t)) {
        if (Ui(e)) throw Error(M(418));
        t = rn(n.nextSibling);
        var r = Ze;
        t && Ql(e, t) ? Uu(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Ze = e);
      }
    } else {
      if (Ui(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, fe = !1, Ze = e;
    }
  }
}
function Yl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ze = e;
}
function Ea(e) {
  if (e !== Ze) return !1;
  if (!fe) return Yl(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Di(e.type, e.memoizedProps)), t && (t = Je)) {
    if (Ui(e)) throw Vu(), Error(M(418));
    for (; t; ) Uu(e, t), t = rn(t.nextSibling);
  }
  if (Yl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vu() {
  for (var e = Je; e; ) e = rn(e.nextSibling);
}
function ir() {
  Je = Ze = null, fe = !1;
}
function Ds(e) {
  gt === null ? gt = [e] : gt.push(e);
}
var Jm = Ut.ReactCurrentBatchConfig;
function _r(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var c = a.refs;
        s === null ? delete c[i] : c[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function za(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Kl(e) {
  var t = e._init;
  return t(e._payload);
}
function Bu(e) {
  function t(u, p) {
    if (e) {
      var f = u.deletions;
      f === null ? (u.deletions = [p], u.flags |= 16) : f.push(p);
    }
  }
  function n(u, p) {
    if (!e) return null;
    for (; p !== null; ) t(u, p), p = p.sibling;
    return null;
  }
  function r(u, p) {
    for (u = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? u.set(p.key, p) : u.set(p.index, p), p = p.sibling;
    return u;
  }
  function a(u, p) {
    return u = ln(u, p), u.index = 0, u.sibling = null, u;
  }
  function i(u, p, f) {
    return u.index = f, e ? (f = u.alternate, f !== null ? (f = f.index, f < p ? (u.flags |= 2, p) : f) : (u.flags |= 2, p)) : (u.flags |= 1048576, p);
  }
  function s(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function c(u, p, f, y) {
    return p === null || p.tag !== 6 ? (p = li(f, u.mode, y), p.return = u, p) : (p = a(p, f), p.return = u, p);
  }
  function l(u, p, f, y) {
    var C = f.type;
    return C === qn ? h(u, p, f.props.children, y, f.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Qt && Kl(C) === p.type) ? (y = a(p, f.props), y.ref = _r(u, p, f), y.return = u, y) : (y = Ha(f.type, f.key, f.props, null, u.mode, y), y.ref = _r(u, p, f), y.return = u, y);
  }
  function d(u, p, f, y) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== f.containerInfo || p.stateNode.implementation !== f.implementation ? (p = ci(f, u.mode, y), p.return = u, p) : (p = a(p, f.children || []), p.return = u, p);
  }
  function h(u, p, f, y, C) {
    return p === null || p.tag !== 7 ? (p = Cn(f, u.mode, y, C), p.return = u, p) : (p = a(p, f), p.return = u, p);
  }
  function m(u, p, f) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = li("" + p, u.mode, f), p.return = u, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ya:
          return f = Ha(p.type, p.key, p.props, null, u.mode, f), f.ref = _r(u, null, p), f.return = u, f;
        case Fn:
          return p = ci(p, u.mode, f), p.return = u, p;
        case Qt:
          var y = p._init;
          return m(u, y(p._payload), f);
      }
      if (zr(p) || wr(p)) return p = Cn(p, u.mode, f, null), p.return = u, p;
      za(u, p);
    }
    return null;
  }
  function x(u, p, f, y) {
    var C = p !== null ? p.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : c(u, p, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ya:
          return f.key === C ? l(u, p, f, y) : null;
        case Fn:
          return f.key === C ? d(u, p, f, y) : null;
        case Qt:
          return C = f._init, x(
            u,
            p,
            C(f._payload),
            y
          );
      }
      if (zr(f) || wr(f)) return C !== null ? null : h(u, p, f, y, null);
      za(u, f);
    }
    return null;
  }
  function _(u, p, f, y, C) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return u = u.get(f) || null, c(p, u, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ya:
          return u = u.get(y.key === null ? f : y.key) || null, l(p, u, y, C);
        case Fn:
          return u = u.get(y.key === null ? f : y.key) || null, d(p, u, y, C);
        case Qt:
          var E = y._init;
          return _(u, p, f, E(y._payload), C);
      }
      if (zr(y) || wr(y)) return u = u.get(f) || null, h(p, u, y, C, null);
      za(p, y);
    }
    return null;
  }
  function g(u, p, f, y) {
    for (var C = null, E = null, k = p, R = p = 0, B = null; k !== null && R < f.length; R++) {
      k.index > R ? (B = k, k = null) : B = k.sibling;
      var N = x(u, k, f[R], y);
      if (N === null) {
        k === null && (k = B);
        break;
      }
      e && k && N.alternate === null && t(u, k), p = i(N, p, R), E === null ? C = N : E.sibling = N, E = N, k = B;
    }
    if (R === f.length) return n(u, k), fe && vn(u, R), C;
    if (k === null) {
      for (; R < f.length; R++) k = m(u, f[R], y), k !== null && (p = i(k, p, R), E === null ? C = k : E.sibling = k, E = k);
      return fe && vn(u, R), C;
    }
    for (k = r(u, k); R < f.length; R++) B = _(k, u, R, f[R], y), B !== null && (e && B.alternate !== null && k.delete(B.key === null ? R : B.key), p = i(B, p, R), E === null ? C = B : E.sibling = B, E = B);
    return e && k.forEach(function(j) {
      return t(u, j);
    }), fe && vn(u, R), C;
  }
  function S(u, p, f, y) {
    var C = wr(f);
    if (typeof C != "function") throw Error(M(150));
    if (f = C.call(f), f == null) throw Error(M(151));
    for (var E = C = null, k = p, R = p = 0, B = null, N = f.next(); k !== null && !N.done; R++, N = f.next()) {
      k.index > R ? (B = k, k = null) : B = k.sibling;
      var j = x(u, k, N.value, y);
      if (j === null) {
        k === null && (k = B);
        break;
      }
      e && k && j.alternate === null && t(u, k), p = i(j, p, R), E === null ? C = j : E.sibling = j, E = j, k = B;
    }
    if (N.done) return n(
      u,
      k
    ), fe && vn(u, R), C;
    if (k === null) {
      for (; !N.done; R++, N = f.next()) N = m(u, N.value, y), N !== null && (p = i(N, p, R), E === null ? C = N : E.sibling = N, E = N);
      return fe && vn(u, R), C;
    }
    for (k = r(u, k); !N.done; R++, N = f.next()) N = _(k, u, R, N.value, y), N !== null && (e && N.alternate !== null && k.delete(N.key === null ? R : N.key), p = i(N, p, R), E === null ? C = N : E.sibling = N, E = N);
    return e && k.forEach(function(w) {
      return t(u, w);
    }), fe && vn(u, R), C;
  }
  function T(u, p, f, y) {
    if (typeof f == "object" && f !== null && f.type === qn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ya:
          e: {
            for (var C = f.key, E = p; E !== null; ) {
              if (E.key === C) {
                if (C = f.type, C === qn) {
                  if (E.tag === 7) {
                    n(u, E.sibling), p = a(E, f.props.children), p.return = u, u = p;
                    break e;
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Qt && Kl(C) === E.type) {
                  n(u, E.sibling), p = a(E, f.props), p.ref = _r(u, E, f), p.return = u, u = p;
                  break e;
                }
                n(u, E);
                break;
              } else t(u, E);
              E = E.sibling;
            }
            f.type === qn ? (p = Cn(f.props.children, u.mode, y, f.key), p.return = u, u = p) : (y = Ha(f.type, f.key, f.props, null, u.mode, y), y.ref = _r(u, p, f), y.return = u, u = y);
          }
          return s(u);
        case Fn:
          e: {
            for (E = f.key; p !== null; ) {
              if (p.key === E) if (p.tag === 4 && p.stateNode.containerInfo === f.containerInfo && p.stateNode.implementation === f.implementation) {
                n(u, p.sibling), p = a(p, f.children || []), p.return = u, u = p;
                break e;
              } else {
                n(u, p);
                break;
              }
              else t(u, p);
              p = p.sibling;
            }
            p = ci(f, u.mode, y), p.return = u, u = p;
          }
          return s(u);
        case Qt:
          return E = f._init, T(u, p, E(f._payload), y);
      }
      if (zr(f)) return g(u, p, f, y);
      if (wr(f)) return S(u, p, f, y);
      za(u, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, p !== null && p.tag === 6 ? (n(u, p.sibling), p = a(p, f), p.return = u, u = p) : (n(u, p), p = li(f, u.mode, y), p.return = u, u = p), s(u)) : n(u, p);
  }
  return T;
}
var sr = Bu(!0), Gu = Bu(!1), so = pn(null), lo = null, Yn = null, Os = null;
function Fs() {
  Os = Yn = lo = null;
}
function qs(e) {
  var t = so.current;
  me(so), e._currentValue = t;
}
function Bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function nr(e, t) {
  lo = e, Os = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function ct(e) {
  var t = e._currentValue;
  if (Os !== e) if (e = { context: e, memoizedValue: t, next: null }, Yn === null) {
    if (lo === null) throw Error(M(308));
    Yn = e, lo.dependencies = { lanes: 0, firstContext: e };
  } else Yn = Yn.next = e;
  return t;
}
var wn = null;
function Us(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function Hu(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Us(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Vs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Wu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, re & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ft(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Us(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ft(e, n);
}
function Fa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Es(e, n);
  }
}
function Xl(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? a = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? a = i = t : i = i.next = t;
    } else a = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function co(e, t, n, r) {
  var a = e.updateQueue;
  Yt = !1;
  var i = a.firstBaseUpdate, s = a.lastBaseUpdate, c = a.shared.pending;
  if (c !== null) {
    a.shared.pending = null;
    var l = c, d = l.next;
    l.next = null, s === null ? i = d : s.next = d, s = l;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, c = h.lastBaseUpdate, c !== s && (c === null ? h.firstBaseUpdate = d : c.next = d, h.lastBaseUpdate = l));
  }
  if (i !== null) {
    var m = a.baseState;
    s = 0, h = d = l = null, c = i;
    do {
      var x = c.lane, _ = c.eventTime;
      if ((r & x) === x) {
        h !== null && (h = h.next = {
          eventTime: _,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var g = e, S = c;
          switch (x = t, _ = n, S.tag) {
            case 1:
              if (g = S.payload, typeof g == "function") {
                m = g.call(_, m, x);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = S.payload, x = typeof g == "function" ? g.call(_, m, x) : g, x == null) break e;
              m = ve({}, m, x);
              break e;
            case 2:
              Yt = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (e.flags |= 64, x = a.effects, x === null ? a.effects = [c] : x.push(c));
      } else _ = { eventTime: _, lane: x, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, h === null ? (d = h = _, l = m) : h = h.next = _, s |= x;
      if (c = c.next, c === null) {
        if (c = a.shared.pending, c === null) break;
        x = c, c = x.next, x.next = null, a.lastBaseUpdate = x, a.shared.pending = null;
      }
    } while (!0);
    if (h === null && (l = m), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = h, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    En |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Jl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(M(191, a));
      a.call(r);
    }
  }
}
var ma = {}, bt = pn(ma), Zr = pn(ma), ea = pn(ma);
function jn(e) {
  if (e === ma) throw Error(M(174));
  return e;
}
function Bs(e, t) {
  switch (de(ea, t), de(Zr, e), de(bt, ma), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Si(t, e);
  }
  me(bt), de(bt, t);
}
function lr() {
  me(bt), me(Zr), me(ea);
}
function Qu(e) {
  jn(ea.current);
  var t = jn(bt.current), n = Si(t, e.type);
  t !== n && (de(Zr, e), de(bt, n));
}
function Gs(e) {
  Zr.current === e && (me(bt), me(Zr));
}
var he = pn(0);
function uo(e) {
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
var ni = [];
function Hs() {
  for (var e = 0; e < ni.length; e++) ni[e]._workInProgressVersionPrimary = null;
  ni.length = 0;
}
var qa = Ut.ReactCurrentDispatcher, ri = Ut.ReactCurrentBatchConfig, bn = 0, ge = null, Ne = null, Pe = null, po = !1, $r = !1, ta = 0, Zm = 0;
function Ie() {
  throw Error(M(321));
}
function Ws(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Qs(e, t, n, r, a, i) {
  if (bn = i, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qa.current = e === null || e.memoizedState === null ? rf : af, e = n(r, a), $r) {
    i = 0;
    do {
      if ($r = !1, ta = 0, 25 <= i) throw Error(M(301));
      i += 1, Pe = Ne = null, t.updateQueue = null, qa.current = of, e = n(r, a);
    } while ($r);
  }
  if (qa.current = mo, t = Ne !== null && Ne.next !== null, bn = 0, Pe = Ne = ge = null, po = !1, t) throw Error(M(300));
  return e;
}
function Ys() {
  var e = ta !== 0;
  return ta = 0, e;
}
function St() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pe === null ? ge.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
}
function ut() {
  if (Ne === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Pe === null ? ge.memoizedState : Pe.next;
  if (t !== null) Pe = t, Ne = e;
  else {
    if (e === null) throw Error(M(310));
    Ne = e, e = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, Pe === null ? ge.memoizedState = Pe = e : Pe = Pe.next = e;
  }
  return Pe;
}
function na(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ai(e) {
  var t = ut(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Ne, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = i.next, i.next = s;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var c = s = null, l = null, d = i;
    do {
      var h = d.lane;
      if ((bn & h) === h) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var m = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (c = l = m, s = r) : l = l.next = m, ge.lanes |= h, En |= h;
      }
      d = d.next;
    } while (d !== null && d !== i);
    l === null ? s = r : l.next = c, wt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, ge.lanes |= i, En |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oi(e) {
  var t = ut(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== a);
    wt(i, t.memoizedState) || (We = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Yu() {
}
function Ku(e, t) {
  var n = ge, r = ut(), a = t(), i = !wt(r.memoizedState, a);
  if (i && (r.memoizedState = a, We = !0), r = r.queue, Ks(Zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Pe !== null && Pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, ra(9, Ju.bind(null, n, r, a, t), void 0, null), Me === null) throw Error(M(349));
    bn & 30 || Xu(n, t, a);
  }
  return a;
}
function Xu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ju(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ed(t) && td(e);
}
function Zu(e, t, n) {
  return n(function() {
    ed(t) && td(e);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function td(e) {
  var t = Ft(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Zl(e) {
  var t = St();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: e }, t.queue = e, e = e.dispatch = nf.bind(null, ge, e), [t.memoizedState, e];
}
function ra(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nd() {
  return ut().memoizedState;
}
function Ua(e, t, n, r) {
  var a = St();
  ge.flags |= e, a.memoizedState = ra(1 | t, n, void 0, r === void 0 ? null : r);
}
function No(e, t, n, r) {
  var a = ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ne !== null) {
    var s = Ne.memoizedState;
    if (i = s.destroy, r !== null && Ws(r, s.deps)) {
      a.memoizedState = ra(t, n, i, r);
      return;
    }
  }
  ge.flags |= e, a.memoizedState = ra(1 | t, n, i, r);
}
function ec(e, t) {
  return Ua(8390656, 8, e, t);
}
function Ks(e, t) {
  return No(2048, 8, e, t);
}
function rd(e, t) {
  return No(4, 2, e, t);
}
function ad(e, t) {
  return No(4, 4, e, t);
}
function od(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function id(e, t, n) {
  return n = n != null ? n.concat([e]) : null, No(4, 4, od.bind(null, t, e), n);
}
function Xs() {
}
function sd(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ws(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ld(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ws(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cd(e, t, n) {
  return bn & 21 ? (wt(n, t) || (n = fu(), ge.lanes |= n, En |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function ef(e, t) {
  var n = ie;
  ie = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ri.transition;
  ri.transition = {};
  try {
    e(!1), t();
  } finally {
    ie = n, ri.transition = r;
  }
}
function ud() {
  return ut().memoizedState;
}
function tf(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dd(e)) pd(t, n);
  else if (n = Hu(e, t, n, r), n !== null) {
    var a = Ue();
    xt(n, e, r, a), md(n, t, r);
  }
}
function nf(e, t, n) {
  var r = sn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dd(e)) pd(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, c = i(s, n);
      if (a.hasEagerState = !0, a.eagerState = c, wt(c, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, Us(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = Hu(e, t, a, r), n !== null && (a = Ue(), xt(n, e, r, a), md(n, t, r));
  }
}
function dd(e) {
  var t = e.alternate;
  return e === ge || t !== null && t === ge;
}
function pd(e, t) {
  $r = po = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function md(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Es(e, n);
  }
}
var mo = { readContext: ct, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useInsertionEffect: Ie, useLayoutEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useMutableSource: Ie, useSyncExternalStore: Ie, useId: Ie, unstable_isNewReconciler: !1 }, rf = { readContext: ct, useCallback: function(e, t) {
  return St().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ct, useEffect: ec, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ua(
    4194308,
    4,
    od.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ua(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ua(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = St();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = St();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = tf.bind(null, ge, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = St();
  return e = { current: e }, t.memoizedState = e;
}, useState: Zl, useDebugValue: Xs, useDeferredValue: function(e) {
  return St().memoizedState = e;
}, useTransition: function() {
  var e = Zl(!1), t = e[0];
  return e = ef.bind(null, e[1]), St().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ge, a = St();
  if (fe) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), Me === null) throw Error(M(349));
    bn & 30 || Xu(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, ec(Zu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ra(9, Ju.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = St(), t = Me.identifierPrefix;
  if (fe) {
    var n = It, r = At;
    n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ta++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Zm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, af = {
  readContext: ct,
  useCallback: sd,
  useContext: ct,
  useEffect: Ks,
  useImperativeHandle: id,
  useInsertionEffect: rd,
  useLayoutEffect: ad,
  useMemo: ld,
  useReducer: ai,
  useRef: nd,
  useState: function() {
    return ai(na);
  },
  useDebugValue: Xs,
  useDeferredValue: function(e) {
    var t = ut();
    return cd(t, Ne.memoizedState, e);
  },
  useTransition: function() {
    var e = ai(na)[0], t = ut().memoizedState;
    return [e, t];
  },
  useMutableSource: Yu,
  useSyncExternalStore: Ku,
  useId: ud,
  unstable_isNewReconciler: !1
}, of = { readContext: ct, useCallback: sd, useContext: ct, useEffect: Ks, useImperativeHandle: id, useInsertionEffect: rd, useLayoutEffect: ad, useMemo: ld, useReducer: oi, useRef: nd, useState: function() {
  return oi(na);
}, useDebugValue: Xs, useDeferredValue: function(e) {
  var t = ut();
  return Ne === null ? t.memoizedState = e : cd(t, Ne.memoizedState, e);
}, useTransition: function() {
  var e = oi(na)[0], t = ut().memoizedState;
  return [e, t];
}, useMutableSource: Yu, useSyncExternalStore: Ku, useId: ud, unstable_isNewReconciler: !1 };
function ft(e, t) {
  if (e && e.defaultProps) {
    t = ve({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ue(), a = sn(e), i = $t(r, a);
  i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (xt(t, e, a, r), Fa(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ue(), a = sn(e), i = $t(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (xt(t, e, a, r), Fa(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ue(), r = sn(e), a = $t(n, r);
  a.tag = 2, t != null && (a.callback = t), t = an(e, a, r), t !== null && (xt(t, e, r, n), Fa(t, e, r));
} };
function tc(e, t, n, r, a, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Yr(n, r) || !Yr(a, i) : !0;
}
function fd(e, t, n) {
  var r = !1, a = un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ct(i) : (a = Ye(t) ? _n : Oe.current, r = t.contextTypes, i = (r = r != null) ? or(e, a) : un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function nc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bo.enqueueReplaceState(t, t.state, null);
}
function Hi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Vs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = ct(i) : (i = Ye(t) ? _n : Oe.current, a.context = or(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Gi(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && bo.enqueueReplaceState(a, a.state, null), co(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lp(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var sf = typeof WeakMap == "function" ? WeakMap : Map;
function hd(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ho || (ho = !0, rs = r), Wi(e, t);
  }, n;
}
function gd(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      Wi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Wi(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function rc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = jf.bind(null, e, t, n), t.then(e, e));
}
function ac(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oc(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
}
var lf = Ut.ReactCurrentOwner, We = !1;
function qe(e, t, n, r) {
  t.child = e === null ? Gu(t, null, n, r) : sr(t, e.child, n, r);
}
function ic(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return nr(t, a), r = Qs(e, t, n, r, i, a), n = Ys(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (fe && n && Is(t), t.flags |= 1, qe(e, t, r, a), t.child);
}
function sc(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ol(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, vd(e, t, i, r, a)) : (e = Ha(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yr, n(s, r) && e.ref === t.ref) return qt(e, t, a);
  }
  return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vd(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Yr(i, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (We = !0);
    else return t.lanes = e.lanes, qt(e, t, a);
  }
  return Qi(e, t, n, r, a);
}
function yd(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, de(Xn, Xe), Xe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, de(Xn, Xe), Xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, de(Xn, Xe), Xe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, de(Xn, Xe), Xe |= r;
  return qe(e, t, a, n), t.child;
}
function xd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Qi(e, t, n, r, a) {
  var i = Ye(n) ? _n : Oe.current;
  return i = or(t, i), nr(t, a), n = Qs(e, t, n, r, i, a), r = Ys(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (fe && r && Is(t), t.flags |= 1, qe(e, t, n, a), t.child);
}
function lc(e, t, n, r, a) {
  if (Ye(n)) {
    var i = !0;
    ao(t);
  } else i = !1;
  if (nr(t, a), t.stateNode === null) Va(e, t), fd(t, n, r), Hi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, c = t.memoizedProps;
    s.props = c;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ct(d) : (d = Ye(n) ? _n : Oe.current, d = or(t, d));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== r || l !== d) && nc(t, s, r, d), Yt = !1;
    var x = t.memoizedState;
    s.state = x, co(t, r, s, a), l = t.memoizedState, c !== r || x !== l || Qe.current || Yt ? (typeof h == "function" && (Gi(t, n, h, r), l = t.memoizedState), (c = Yt || tc(t, n, c, r, x, l, d)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = c) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Wu(e, t), c = t.memoizedProps, d = t.type === t.elementType ? c : ft(t.type, c), s.props = d, m = t.pendingProps, x = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ct(l) : (l = Ye(n) ? _n : Oe.current, l = or(t, l));
    var _ = n.getDerivedStateFromProps;
    (h = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== m || x !== l) && nc(t, s, r, l), Yt = !1, x = t.memoizedState, s.state = x, co(t, r, s, a);
    var g = t.memoizedState;
    c !== m || x !== g || Qe.current || Yt ? (typeof _ == "function" && (Gi(t, n, _, r), g = t.memoizedState), (d = Yt || tc(t, n, d, r, x, g, l) || !1) ? (h || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Yi(e, t, n, r, i, a);
}
function Yi(e, t, n, r, a, i) {
  xd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Wl(t, n, !1), qt(e, t, i);
  r = t.stateNode, lf.current = t;
  var c = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = sr(t, e.child, null, i), t.child = sr(t, null, c, i)) : qe(e, t, c, i), t.memoizedState = r.state, a && Wl(t, n, !0), t.child;
}
function wd(e) {
  var t = e.stateNode;
  t.pendingContext ? Hl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hl(e, t.context, !1), Bs(e, t.containerInfo);
}
function cc(e, t, n, r, a) {
  return ir(), Ds(a), t.flags |= 256, qe(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jd(e, t, n) {
  var r = t.pendingProps, a = he.current, i = !1, s = (t.flags & 128) !== 0, c;
  if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), de(he, a & 1), e === null)
    return Vi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Po(s, r, 0, null), e = Cn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Xi(n), t.memoizedState = Ki, e) : Js(t, s));
  if (a = e.memoizedState, a !== null && (c = a.dehydrated, c !== null)) return cf(e, t, s, r, c, a, n);
  if (i) {
    i = r.fallback, s = t.mode, a = e.child, c = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ln(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), c !== null ? i = ln(c, i) : (i = Cn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Xi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ki, r;
  }
  return i = e.child, e = i.sibling, r = ln(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Js(e, t) {
  return t = Po({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pa(e, t, n, r) {
  return r !== null && Ds(r), sr(t, e.child, null, n), e = Js(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function cf(e, t, n, r, a, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ii(Error(M(422))), Pa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Po({ mode: "visible", children: r.children }, a, 0, null), i = Cn(i, a, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && sr(t, e.child, null, s), t.child.memoizedState = Xi(s), t.memoizedState = Ki, i);
  if (!(t.mode & 1)) return Pa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
    return r = c, i = Error(M(419)), r = ii(i, r, void 0), Pa(e, t, s, r);
  }
  if (c = (s & e.childLanes) !== 0, We || c) {
    if (r = Me, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Ft(e, a), xt(r, e, a, -1));
    }
    return al(), r = ii(Error(M(421))), Pa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kf.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Je = rn(a.nextSibling), Ze = t, fe = !0, gt = null, e !== null && (ot[it++] = At, ot[it++] = It, ot[it++] = Nn, At = e.id, It = e.overflow, Nn = t), t = Js(t, r.children), t.flags |= 4096, t);
}
function uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bi(e.return, t, n);
}
function si(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function kd(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (qe(e, t, r.children, n), r = he.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && uc(e, n, t);
      else if (e.tag === 19) uc(e, n, t);
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
  if (de(he, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && uo(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), si(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && uo(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      si(t, !0, n, null, i);
      break;
    case "together":
      si(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Va(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), En |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function uf(e, t, n) {
  switch (t.tag) {
    case 3:
      wd(t), ir();
      break;
    case 5:
      Qu(t);
      break;
    case 1:
      Ye(t.type) && ao(t);
      break;
    case 4:
      Bs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      de(so, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (de(he, he.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jd(e, t, n) : (de(he, he.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
      de(he, he.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return kd(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), de(he, he.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yd(e, t, n);
  }
  return qt(e, t, n);
}
var Cd, Ji, Sd, _d;
Cd = function(e, t) {
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
Ji = function() {
};
Sd = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, jn(bt.current);
    var i = null;
    switch (n) {
      case "input":
        a = wi(e, a), r = wi(e, r), i = [];
        break;
      case "select":
        a = ve({}, a, { value: void 0 }), r = ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = Ci(e, a), r = Ci(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = no);
    }
    _i(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var c = a[d];
      for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ur.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var l = r[d];
      if (c = a != null ? a[d] : void 0, r.hasOwnProperty(d) && l !== c && (l != null || c != null)) if (d === "style") if (c) {
        for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (i = i || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Ur.hasOwnProperty(d) ? (l != null && d === "onScroll" && pe("scroll", e), i || c === l || (i = [])) : (i = i || []).push(d, l));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
_d = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!fe) switch (e.tailMode) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function df(e, t, n) {
  var r = t.pendingProps;
  switch ($s(t), t.tag) {
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
      return $e(t), null;
    case 1:
      return Ye(t.type) && ro(), $e(t), null;
    case 3:
      return r = t.stateNode, lr(), me(Qe), me(Oe), Hs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ea(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, gt !== null && (is(gt), gt = null))), Ji(e, t), $e(t), null;
    case 5:
      Gs(t);
      var a = jn(ea.current);
      if (n = t.type, e !== null && t.stateNode != null) Sd(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return $e(t), null;
        }
        if (e = jn(bt.current), Ea(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[_t] = t, r[Jr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Mr.length; a++) pe(Mr[a], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe(
                "error",
                r
              ), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              xl(r, i), pe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, pe("invalid", r);
              break;
            case "textarea":
              jl(r, i), pe("invalid", r);
          }
          _i(n, i), a = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var c = i[s];
            s === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && ba(r.textContent, c, e), a = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && ba(
              r.textContent,
              c,
              e
            ), a = ["children", "" + c]) : Ur.hasOwnProperty(s) && c != null && s === "onScroll" && pe("scroll", r);
          }
          switch (n) {
            case "input":
              xa(r), wl(r, i, !0);
              break;
            case "textarea":
              xa(r), kl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = no);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[Jr] = r, Cd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ni(n, r), n) {
              case "dialog":
                pe("cancel", e), pe("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Mr.length; a++) pe(Mr[a], e);
                a = r;
                break;
              case "source":
                pe("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                pe(
                  "error",
                  e
                ), pe("load", e), a = r;
                break;
              case "details":
                pe("toggle", e), a = r;
                break;
              case "input":
                xl(e, r), a = wi(e, r), pe("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ve({}, r, { value: void 0 }), pe("invalid", e);
                break;
              case "textarea":
                jl(e, r), a = Ci(e, r), pe("invalid", e);
                break;
              default:
                a = r;
            }
            _i(n, a), c = a;
            for (i in c) if (c.hasOwnProperty(i)) {
              var l = c[i];
              i === "style" ? nu(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && eu(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Vr(e, l) : typeof l == "number" && Vr(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ur.hasOwnProperty(i) ? l != null && i === "onScroll" && pe("scroll", e) : l != null && ks(e, i, l, s));
            }
            switch (n) {
              case "input":
                xa(e), wl(e, r, !1);
                break;
              case "textarea":
                xa(e), kl(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Jn(e, !!r.multiple, i, !1) : r.defaultValue != null && Jn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = no);
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
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) _d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = jn(ea.current), jn(bt.current), Ea(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
            case 3:
              ba(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ba(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (me(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && Je !== null && t.mode & 1 && !(t.flags & 128)) Vu(), ir(), t.flags |= 98560, i = !1;
        else if (i = Ea(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[_t] = t;
          } else ir(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), i = !1;
        } else gt !== null && (is(gt), gt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || he.current & 1 ? be === 0 && (be = 3) : al())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return lr(), Ji(e, t), e === null && Kr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return qs(t.type._context), $e(t), null;
    case 17:
      return Ye(t.type) && ro(), $e(t), null;
    case 19:
      if (me(he), i = t.memoizedState, i === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Nr(i, !1);
      else {
        if (be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = uo(e), s !== null) {
            for (t.flags |= 128, Nr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return de(he, he.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && je() > ur && (t.flags |= 128, r = !0, Nr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = uo(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe) return $e(t), null;
        } else 2 * je() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, Nr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = je(), t.sibling = null, n = he.current, de(he, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return rl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function pf(e, t) {
  switch ($s(t), t.tag) {
    case 1:
      return Ye(t.type) && ro(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return lr(), me(Qe), me(Oe), Hs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gs(t), null;
    case 13:
      if (me(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        ir();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return me(he), null;
    case 4:
      return lr(), null;
    case 10:
      return qs(t.type._context), null;
    case 22:
    case 23:
      return rl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ma = !1, De = !1, mf = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    xe(e, t, r);
  }
  else n.current = null;
}
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var dc = !1;
function ff(e, t) {
  if (Ii = Za, e = Pu(), As(e)) {
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
        var s = 0, c = -1, l = -1, d = 0, h = 0, m = e, x = null;
        t: for (; ; ) {
          for (var _; m !== n || a !== 0 && m.nodeType !== 3 || (c = s + a), m !== i || r !== 0 && m.nodeType !== 3 || (l = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (_ = m.firstChild) !== null; )
            x = m, m = _;
          for (; ; ) {
            if (m === e) break t;
            if (x === n && ++d === a && (c = s), x === i && ++h === r && (l = s), (_ = m.nextSibling) !== null) break;
            m = x, x = m.parentNode;
          }
          m = _;
        }
        n = c === -1 || l === -1 ? null : { start: c, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, Za = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
  else for (; q !== null; ) {
    t = q;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var S = g.memoizedProps, T = g.memoizedState, u = t.stateNode, p = u.getSnapshotBeforeUpdate(t.elementType === t.type ? S : ft(t.type, S), T);
            u.__reactInternalSnapshotBeforeUpdate = p;
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
          throw Error(M(163));
      }
    } catch (y) {
      xe(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return g = dc, dc = !1, g;
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && Zi(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Eo(e, t) {
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
function es(e) {
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
function Nd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[Jr], delete t[Fi], delete t[Ym], delete t[Km])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && (e = e.child, e !== null)) for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), e = e.sibling;
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), e = e.sibling;
}
var Te = null, ht = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) Ed(e, t, n), n = n.sibling;
}
function Ed(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(wo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      De || Kn(n, t);
    case 6:
      var r = Te, a = ht;
      Te = null, Wt(e, t, n), Te = r, ht = a, Te !== null && (ht ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null && (ht ? (e = Te, n = n.stateNode, e.nodeType === 8 ? ei(e.parentNode, n) : e.nodeType === 1 && ei(e, n), Wr(e)) : ei(Te, n.stateNode));
      break;
    case 4:
      r = Te, a = ht, Te = n.stateNode.containerInfo, ht = !0, Wt(e, t, n), Te = r, ht = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Zi(n, t, s), a = a.next;
        } while (a !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!De && (Kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        xe(n, t, c);
      }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, Wt(e, t, n), De = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mf()), t.forEach(function(r) {
      var a = Cf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var i = e, s = t, c = s;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Te = c.stateNode, ht = !1;
            break e;
          case 3:
            Te = c.stateNode.containerInfo, ht = !0;
            break e;
          case 4:
            Te = c.stateNode.containerInfo, ht = !0;
            break e;
        }
        c = c.return;
      }
      if (Te === null) throw Error(M(160));
      Ed(i, s, a), Te = null, ht = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      xe(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) zd(t, e), t = t.sibling;
}
function zd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), Ct(e), r & 4) {
        try {
          Dr(3, e, e.return), Eo(3, e);
        } catch (S) {
          xe(e, e.return, S);
        }
        try {
          Dr(5, e, e.return);
        } catch (S) {
          xe(e, e.return, S);
        }
      }
      break;
    case 1:
      mt(t, e), Ct(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if (mt(t, e), Ct(e), r & 512 && n !== null && Kn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Vr(a, "");
        } catch (S) {
          xe(e, e.return, S);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, c = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          c === "input" && i.type === "radio" && i.name != null && Xc(a, i), Ni(c, s);
          var d = Ni(c, i);
          for (s = 0; s < l.length; s += 2) {
            var h = l[s], m = l[s + 1];
            h === "style" ? nu(a, m) : h === "dangerouslySetInnerHTML" ? eu(a, m) : h === "children" ? Vr(a, m) : ks(a, h, m, d);
          }
          switch (c) {
            case "input":
              ji(a, i);
              break;
            case "textarea":
              Jc(a, i);
              break;
            case "select":
              var x = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var _ = i.value;
              _ != null ? Jn(a, !!i.multiple, _, !1) : x !== !!i.multiple && (i.defaultValue != null ? Jn(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Jn(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[Jr] = i;
        } catch (S) {
          xe(e, e.return, S);
        }
      }
      break;
    case 6:
      if (mt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (S) {
          xe(e, e.return, S);
        }
      }
      break;
    case 3:
      if (mt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Wr(t.containerInfo);
      } catch (S) {
        xe(e, e.return, S);
      }
      break;
    case 4:
      mt(t, e), Ct(e);
      break;
    case 13:
      mt(t, e), Ct(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (tl = je())), r & 4 && mc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (d = De) || h, mt(t, e), De = d) : mt(t, e), Ct(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (m = q = h; q !== null; ) {
            switch (x = q, _ = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Dr(4, x, x.return);
                break;
              case 1:
                Kn(x, x.return);
                var g = x.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = x, n = x.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (S) {
                    xe(r, n, S);
                  }
                }
                break;
              case 5:
                Kn(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  hc(m);
                  continue;
                }
            }
            _ !== null ? (_.return = x, q = _) : hc(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                a = m.stateNode, d ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = m.stateNode, l = m.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = tu("display", s));
              } catch (S) {
                xe(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = d ? "" : m.memoizedProps;
            } catch (S) {
              xe(e, e.return, S);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), Ct(e), r & 4 && mc(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (Vr(a, ""), r.flags &= -33);
          var i = pc(e);
          ns(e, i, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, c = pc(e);
          ts(e, c, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      xe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hf(e, t, n) {
  q = e, Pd(e);
}
function Pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var a = q, i = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || Ma;
      if (!s) {
        var c = a.alternate, l = c !== null && c.memoizedState !== null || De;
        c = Ma;
        var d = De;
        if (Ma = s, (De = l) && !d) for (q = a; q !== null; ) s = q, l = s.child, s.tag === 22 && s.memoizedState !== null ? gc(a) : l !== null ? (l.return = s, q = l) : gc(a);
        for (; i !== null; ) q = i, Pd(i), i = i.sibling;
        q = a, Ma = c, De = d;
      }
      fc(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, q = i) : fc(e);
  }
}
function fc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            De || Eo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !De) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Jl(t, i, r);
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
              Jl(t, s, n);
            }
            break;
          case 5:
            var c = t.stateNode;
            if (n === null && t.flags & 4) {
              n = c;
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
                var h = d.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Wr(m);
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
            throw Error(M(163));
        }
        De || t.flags & 512 && es(t);
      } catch (x) {
        xe(t, t.return, x);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function hc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function gc(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Eo(4, t);
          } catch (l) {
            xe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              xe(t, a, l);
            }
          }
          var i = t.return;
          try {
            es(t);
          } catch (l) {
            xe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            es(t);
          } catch (l) {
            xe(t, s, l);
          }
      }
    } catch (l) {
      xe(t, t.return, l);
    }
    if (t === e) {
      q = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      c.return = t.return, q = c;
      break;
    }
    q = t.return;
  }
}
var gf = Math.ceil, fo = Ut.ReactCurrentDispatcher, Zs = Ut.ReactCurrentOwner, lt = Ut.ReactCurrentBatchConfig, re = 0, Me = null, Ce = null, Le = 0, Xe = 0, Xn = pn(0), be = 0, aa = null, En = 0, zo = 0, el = 0, Or = null, He = null, tl = 0, ur = 1 / 0, Lt = null, ho = !1, rs = null, on = null, Ta = !1, Zt = null, go = 0, Fr = 0, as = null, Ba = -1, Ga = 0;
function Ue() {
  return re & 6 ? je() : Ba !== -1 ? Ba : Ba = je();
}
function sn(e) {
  return e.mode & 1 ? re & 2 && Le !== 0 ? Le & -Le : Jm.transition !== null ? (Ga === 0 && (Ga = fu()), Ga) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ju(e.type)), e) : 1;
}
function xt(e, t, n, r) {
  if (50 < Fr) throw Fr = 0, as = null, Error(M(185));
  ua(e, n, r), (!(re & 2) || e !== Me) && (e === Me && (!(re & 2) && (zo |= n), be === 4 && Xt(e, Le)), Ke(e, r), n === 1 && re === 0 && !(t.mode & 1) && (ur = je() + 500, _o && mn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = Ja(e, e === Me ? Le : 0);
  if (r === 0) n !== null && _l(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && _l(n), t === 1) e.tag === 0 ? Xm(vc.bind(null, e)) : Fu(vc.bind(null, e)), Wm(function() {
      !(re & 6) && mn();
    }), n = null;
    else {
      switch (hu(r)) {
        case 1:
          n = bs;
          break;
        case 4:
          n = pu;
          break;
        case 16:
          n = Xa;
          break;
        case 536870912:
          n = mu;
          break;
        default:
          n = Xa;
      }
      n = Dd(n, Md.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Md(e, t) {
  if (Ba = -1, Ga = 0, re & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = Ja(e, e === Me ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vo(e, r);
  else {
    t = r;
    var a = re;
    re |= 2;
    var i = Ld();
    (Me !== e || Le !== t) && (Lt = null, ur = je() + 500, kn(e, t));
    do
      try {
        xf();
        break;
      } catch (c) {
        Td(e, c);
      }
    while (!0);
    Fs(), fo.current = i, re = a, Ce !== null ? t = 0 : (Me = null, Le = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (a = Mi(e), a !== 0 && (r = a, t = os(e, a))), t === 1) throw n = aa, kn(e, 0), Xt(e, r), Ke(e, je()), n;
    if (t === 6) Xt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !vf(a) && (t = vo(e, r), t === 2 && (i = Mi(e), i !== 0 && (r = i, t = os(e, i))), t === 1)) throw n = aa, kn(e, 0), Xt(e, r), Ke(e, je()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          yn(e, He, Lt);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = tl + 500 - je(), 10 < t)) {
            if (Ja(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Ue(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Oi(yn.bind(null, e, He, Lt), t);
            break;
          }
          yn(e, He, Lt);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - yt(r);
            i = 1 << s, s = t[s], s > a && (a = s), r &= ~i;
          }
          if (r = a, r = je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Oi(yn.bind(null, e, He, Lt), r);
            break;
          }
          yn(e, He, Lt);
          break;
        case 5:
          yn(e, He, Lt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ke(e, je()), e.callbackNode === n ? Md.bind(null, e) : null;
}
function os(e, t) {
  var n = Or;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = vo(e, t), e !== 2 && (t = He, He = n, t !== null && is(t)), e;
}
function is(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function vf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], i = a.getSnapshot;
        a = a.value;
        try {
          if (!wt(i(), a)) return !1;
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
function Xt(e, t) {
  for (t &= ~el, t &= ~zo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - yt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vc(e) {
  if (re & 6) throw Error(M(327));
  rr();
  var t = Ja(e, 0);
  if (!(t & 1)) return Ke(e, je()), null;
  var n = vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mi(e);
    r !== 0 && (t = r, n = os(e, r));
  }
  if (n === 1) throw n = aa, kn(e, 0), Xt(e, t), Ke(e, je()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, He, Lt), Ke(e, je()), null;
}
function nl(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    re = n, re === 0 && (ur = je() + 500, _o && mn());
  }
}
function zn(e) {
  Zt !== null && Zt.tag === 0 && !(re & 6) && rr();
  var t = re;
  re |= 1;
  var n = lt.transition, r = ie;
  try {
    if (lt.transition = null, ie = 1, e) return e();
  } finally {
    ie = r, lt.transition = n, re = t, !(re & 6) && mn();
  }
}
function rl() {
  Xe = Xn.current, me(Xn);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Hm(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
    var r = n;
    switch ($s(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ro();
        break;
      case 3:
        lr(), me(Qe), me(Oe), Hs();
        break;
      case 5:
        Gs(r);
        break;
      case 4:
        lr();
        break;
      case 13:
        me(he);
        break;
      case 19:
        me(he);
        break;
      case 10:
        qs(r.type._context);
        break;
      case 22:
      case 23:
        rl();
    }
    n = n.return;
  }
  if (Me = e, Ce = e = ln(e.current, null), Le = Xe = t, be = 0, aa = null, el = zo = En = 0, He = Or = null, wn !== null) {
    for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = a, r.next = s;
      }
      n.pending = r;
    }
    wn = null;
  }
  return e;
}
function Td(e, t) {
  do {
    var n = Ce;
    try {
      if (Fs(), qa.current = mo, po) {
        for (var r = ge.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        po = !1;
      }
      if (bn = 0, Pe = Ne = ge = null, $r = !1, ta = 0, Zs.current = null, n === null || n.return === null) {
        be = 1, aa = t, Ce = null;
        break;
      }
      e: {
        var i = e, s = n.return, c = n, l = t;
        if (t = Le, c.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, h = c, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var x = h.alternate;
            x ? (h.updateQueue = x.updateQueue, h.memoizedState = x.memoizedState, h.lanes = x.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var _ = ac(s);
          if (_ !== null) {
            _.flags &= -257, oc(_, s, c, i, t), _.mode & 1 && rc(i, d, t), t = _, l = d;
            var g = t.updateQueue;
            if (g === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(l), t.updateQueue = S;
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              rc(i, d, t), al();
              break e;
            }
            l = Error(M(426));
          }
        } else if (fe && c.mode & 1) {
          var T = ac(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), oc(T, s, c, i, t), Ds(cr(l, c));
            break e;
          }
        }
        i = l = cr(l, c), be !== 4 && (be = 2), Or === null ? Or = [i] : Or.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var u = hd(i, l, t);
              Xl(i, u);
              break e;
            case 1:
              c = l;
              var p = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (on === null || !on.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = gd(i, c, t);
                Xl(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ad(n);
    } catch (C) {
      t = C, Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ld() {
  var e = fo.current;
  return fo.current = mo, e === null ? mo : e;
}
function al() {
  (be === 0 || be === 3 || be === 2) && (be = 4), Me === null || !(En & 268435455) && !(zo & 268435455) || Xt(Me, Le);
}
function vo(e, t) {
  var n = re;
  re |= 2;
  var r = Ld();
  (Me !== e || Le !== t) && (Lt = null, kn(e, t));
  do
    try {
      yf();
      break;
    } catch (a) {
      Td(e, a);
    }
  while (!0);
  if (Fs(), re = n, fo.current = r, Ce !== null) throw Error(M(261));
  return Me = null, Le = 0, be;
}
function yf() {
  for (; Ce !== null; ) Rd(Ce);
}
function xf() {
  for (; Ce !== null && !Vp(); ) Rd(Ce);
}
function Rd(e) {
  var t = $d(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? Ad(e) : Ce = t, Zs.current = null;
}
function Ad(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = pf(n, t), n !== null) {
        n.flags &= 32767, Ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, Ce = null;
        return;
      }
    } else if (n = df(n, t, Xe), n !== null) {
      Ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function yn(e, t, n) {
  var r = ie, a = lt.transition;
  try {
    lt.transition = null, ie = 1, wf(e, t, n, r);
  } finally {
    lt.transition = a, ie = r;
  }
  return null;
}
function wf(e, t, n, r) {
  do
    rr();
  while (Zt !== null);
  if (re & 6) throw Error(M(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Zp(e, i), e === Me && (Ce = Me = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ta || (Ta = !0, Dd(Xa, function() {
    return rr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = lt.transition, lt.transition = null;
    var s = ie;
    ie = 1;
    var c = re;
    re |= 4, Zs.current = null, ff(e, n), zd(n, e), Om($i), Za = !!Ii, $i = Ii = null, e.current = n, hf(n), Bp(), re = c, ie = s, lt.transition = i;
  } else e.current = n;
  if (Ta && (Ta = !1, Zt = e, go = a), i = e.pendingLanes, i === 0 && (on = null), Wp(n.stateNode), Ke(e, je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (ho) throw ho = !1, e = rs, rs = null, e;
  return go & 1 && e.tag !== 0 && rr(), i = e.pendingLanes, i & 1 ? e === as ? Fr++ : (Fr = 0, as = e) : Fr = 0, mn(), null;
}
function rr() {
  if (Zt !== null) {
    var e = hu(go), t = lt.transition, n = ie;
    try {
      if (lt.transition = null, ie = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, go = 0, re & 6) throw Error(M(331));
        var a = re;
        for (re |= 4, q = e.current; q !== null; ) {
          var i = q, s = i.child;
          if (q.flags & 16) {
            var c = i.deletions;
            if (c !== null) {
              for (var l = 0; l < c.length; l++) {
                var d = c[l];
                for (q = d; q !== null; ) {
                  var h = q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, q = m;
                  else for (; q !== null; ) {
                    h = q;
                    var x = h.sibling, _ = h.return;
                    if (Nd(h), h === d) {
                      q = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = _, q = x;
                      break;
                    }
                    q = _;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var T = S.sibling;
                    S.sibling = null, S = T;
                  } while (S !== null);
                }
              }
              q = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, q = s;
          else e: for (; q !== null; ) {
            if (i = q, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Dr(9, i, i.return);
            }
            var u = i.sibling;
            if (u !== null) {
              u.return = i.return, q = u;
              break e;
            }
            q = i.return;
          }
        }
        var p = e.current;
        for (q = p; q !== null; ) {
          s = q;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) f.return = s, q = f;
          else e: for (s = p; q !== null; ) {
            if (c = q, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Eo(9, c);
              }
            } catch (C) {
              xe(c, c.return, C);
            }
            if (c === s) {
              q = null;
              break e;
            }
            var y = c.sibling;
            if (y !== null) {
              y.return = c.return, q = y;
              break e;
            }
            q = c.return;
          }
        }
        if (re = a, mn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(wo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ie = n, lt.transition = t;
    }
  }
  return !1;
}
function yc(e, t, n) {
  t = cr(n, t), t = hd(e, t, 1), e = an(e, t, 1), t = Ue(), e !== null && (ua(e, 1, t), Ke(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) yc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      yc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = cr(n, e), e = gd(t, e, 1), t = an(t, e, 1), e = Ue(), t !== null && (ua(t, 1, e), Ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function jf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ue(), e.pingedLanes |= e.suspendedLanes & n, Me === e && (Le & n) === n && (be === 4 || be === 3 && (Le & 130023424) === Le && 500 > je() - tl ? kn(e, 0) : el |= n), Ke(e, t);
}
function Id(e, t) {
  t === 0 && (e.mode & 1 ? (t = ka, ka <<= 1, !(ka & 130023424) && (ka = 4194304)) : t = 1);
  var n = Ue();
  e = Ft(e, t), e !== null && (ua(e, t, n), Ke(e, n));
}
function kf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Id(e, n);
}
function Cf(e, t) {
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), Id(e, n);
}
var $d;
$d = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) We = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, uf(e, t, n);
    We = !!(e.flags & 131072);
  }
  else We = !1, fe && t.flags & 1048576 && qu(t, io, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Va(e, t), e = t.pendingProps;
      var a = or(t, Oe.current);
      nr(t, n), a = Qs(null, t, r, e, a, n);
      var i = Ys();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ye(r) ? (i = !0, ao(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Vs(t), a.updater = bo, t.stateNode = a, a._reactInternals = t, Hi(t, r, e, n), t = Yi(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && Is(t), qe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Va(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = _f(r), e = ft(r, e), a) {
          case 0:
            t = Qi(null, t, r, e, n);
            break e;
          case 1:
            t = lc(null, t, r, e, n);
            break e;
          case 11:
            t = ic(null, t, r, e, n);
            break e;
          case 14:
            t = sc(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), Qi(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), lc(e, t, r, a, n);
    case 3:
      e: {
        if (wd(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, Wu(e, t), co(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = cr(Error(M(423)), t), t = cc(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = cr(Error(M(424)), t), t = cc(e, t, r, n, a);
          break e;
        } else for (Je = rn(t.stateNode.containerInfo.firstChild), Ze = t, fe = !0, gt = null, n = Gu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ir(), r === a) {
            t = qt(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qu(t), e === null && Vi(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = a.children, Di(r, a) ? s = null : i !== null && Di(r, i) && (t.flags |= 32), xd(e, t), qe(e, t, s, n), t.child;
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return jd(e, t, n);
    case 4:
      return Bs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sr(t, null, r, n) : qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), ic(e, t, r, a, n);
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, s = a.value, de(so, r._currentValue), r._currentValue = s, i !== null) if (wt(i.value, s)) {
          if (i.children === a.children && !Qe.current) {
            t = qt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var c = i.dependencies;
          if (c !== null) {
            s = i.child;
            for (var l = c.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = $t(-1, n & -n), l.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), d.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Bi(
                  i.return,
                  n,
                  t
                ), c.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(M(341));
            s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Bi(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        qe(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, nr(t, n), a = ct(a), r = r(a), t.flags |= 1, qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ft(r, t.pendingProps), a = ft(r.type, a), sc(e, t, r, a, n);
    case 15:
      return vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), Va(e, t), t.tag = 1, Ye(r) ? (e = !0, ao(t)) : e = !1, nr(t, n), fd(t, r, a), Hi(t, r, a, n), Yi(null, t, r, !0, e, n);
    case 19:
      return kd(e, t, n);
    case 22:
      return yd(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Dd(e, t) {
  return du(e, t);
}
function Sf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function st(e, t, n, r) {
  return new Sf(e, t, n, r);
}
function ol(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _f(e) {
  if (typeof e == "function") return ol(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ss) return 11;
    if (e === _s) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ha(e, t, n, r, a, i) {
  var s = 2;
  if (r = e, typeof e == "function") ol(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case qn:
      return Cn(n.children, a, i, t);
    case Cs:
      s = 8, a |= 8;
      break;
    case gi:
      return e = st(12, n, t, a | 2), e.elementType = gi, e.lanes = i, e;
    case vi:
      return e = st(13, n, t, a), e.elementType = vi, e.lanes = i, e;
    case yi:
      return e = st(19, n, t, a), e.elementType = yi, e.lanes = i, e;
    case Qc:
      return Po(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Hc:
          s = 10;
          break e;
        case Wc:
          s = 9;
          break e;
        case Ss:
          s = 11;
          break e;
        case _s:
          s = 14;
          break e;
        case Qt:
          s = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = st(s, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Cn(e, t, n, r) {
  return e = st(7, e, r, t), e.lanes = n, e;
}
function Po(e, t, n, r) {
  return e = st(22, e, r, t), e.elementType = Qc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function li(e, t, n) {
  return e = st(6, e, null, t), e.lanes = n, e;
}
function ci(e, t, n) {
  return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Nf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vo(0), this.expirationTimes = Vo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function il(e, t, n, r, a, i, s, c, l) {
  return e = new Nf(e, t, n, c, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vs(i), e;
}
function bf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Od(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return Ou(e, n, t);
  }
  return t;
}
function Fd(e, t, n, r, a, i, s, c, l) {
  return e = il(n, r, !0, e, a, i, s, c, l), e.context = Od(null), n = e.current, r = Ue(), a = sn(n), i = $t(r, a), i.callback = t ?? null, an(n, i, a), e.current.lanes = a, ua(e, a, r), Ke(e, r), e;
}
function Mo(e, t, n, r) {
  var a = t.current, i = Ue(), s = sn(a);
  return n = Od(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(a, t, s), e !== null && (xt(e, a, s, i), Fa(e, a, s)), s;
}
function yo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sl(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function Ef() {
  return null;
}
var qd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ll(e) {
  this._internalRoot = e;
}
To.prototype.render = ll.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Mo(e, t, null, null);
};
To.prototype.unmount = ll.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function() {
      Mo(null, e, null, null);
    }), t[Ot] = null;
  }
};
function To(e) {
  this._internalRoot = e;
}
To.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = yu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && wu(e);
  }
};
function cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Lo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wc() {
}
function zf(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = yo(s);
        i.call(d);
      };
    }
    var s = Fd(t, r, e, 0, null, !1, !1, "", wc);
    return e._reactRootContainer = s, e[Ot] = s.current, Kr(e.nodeType === 8 ? e.parentNode : e), zn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var d = yo(l);
      c.call(d);
    };
  }
  var l = il(e, 0, !1, null, null, !1, !1, "", wc);
  return e._reactRootContainer = l, e[Ot] = l.current, Kr(e.nodeType === 8 ? e.parentNode : e), zn(function() {
    Mo(t, l, n, r);
  }), l;
}
function Ro(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof a == "function") {
      var c = a;
      a = function() {
        var l = yo(s);
        c.call(l);
      };
    }
    Mo(t, s, e, a);
  } else s = zf(n, t, e, a, r);
  return yo(s);
}
gu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pr(t.pendingLanes);
        n !== 0 && (Es(t, n | 1), Ke(t, je()), !(re & 6) && (ur = je() + 500, mn()));
      }
      break;
    case 13:
      zn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var a = Ue();
          xt(r, e, 1, a);
        }
      }), sl(e, 1);
  }
};
zs = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Ue();
      xt(t, e, 134217728, n);
    }
    sl(e, 134217728);
  }
};
vu = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = Ft(e, t);
    if (n !== null) {
      var r = Ue();
      xt(n, e, t, r);
    }
    sl(e, t);
  }
};
yu = function() {
  return ie;
};
xu = function(e, t) {
  var n = ie;
  try {
    return ie = e, t();
  } finally {
    ie = n;
  }
};
Ei = function(e, t, n) {
  switch (t) {
    case "input":
      if (ji(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = So(r);
            if (!a) throw Error(M(90));
            Kc(r), ji(r, a);
          }
        }
      }
      break;
    case "textarea":
      Jc(e, n);
      break;
    case "select":
      t = n.value, t != null && Jn(e, !!n.multiple, t, !1);
  }
};
ou = nl;
iu = zn;
var Pf = { usingClientEntryPoint: !1, Events: [pa, Gn, So, ru, au, nl] }, br = { findFiberByHostInstance: xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mf = { bundleType: br.bundleType, version: br.version, rendererPackageName: br.rendererPackageName, rendererConfig: br.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: br.findFiberByHostInstance || Ef, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var La = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!La.isDisabled && La.supportsFiber) try {
    wo = La.inject(Mf), Nt = La;
  } catch {
  }
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf;
tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cl(t)) throw Error(M(200));
  return bf(e, t, null, n);
};
tt.createRoot = function(e, t) {
  if (!cl(e)) throw Error(M(299));
  var n = !1, r = "", a = qd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = il(e, 1, !1, null, null, n, !1, r, a), e[Ot] = t.current, Kr(e.nodeType === 8 ? e.parentNode : e), new ll(t);
};
tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = cu(t), e = e === null ? null : e.stateNode, e;
};
tt.flushSync = function(e) {
  return zn(e);
};
tt.hydrate = function(e, t, n) {
  if (!Lo(t)) throw Error(M(200));
  return Ro(null, e, t, !0, n);
};
tt.hydrateRoot = function(e, t, n) {
  if (!cl(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", s = qd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Fd(t, null, e, 1, n ?? null, a, !1, i, s), e[Ot] = t.current, Kr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new To(t);
};
tt.render = function(e, t, n) {
  if (!Lo(t)) throw Error(M(200));
  return Ro(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function(e) {
  if (!Lo(e)) throw Error(M(40));
  return e._reactRootContainer ? (zn(function() {
    Ro(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
tt.unstable_batchedUpdates = nl;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Lo(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Ro(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Ud() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud);
    } catch (e) {
      console.error(e);
    }
}
Ud(), Uc.exports = tt;
var Tf = Uc.exports, Vd, jc = Tf;
Vd = jc.createRoot, jc.hydrateRoot;
const kc = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, Lf = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Rf = [
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
], Af = [
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
function oa(e) {
  const t = Number.isFinite(e.w_mm) ? e.w_mm : 0, n = Number.isFinite(e.h_mm) ? e.h_mm : 0;
  return {
    ...e,
    copies: Number.isFinite(e.copies) ? e.copies : 1,
    mini_quota: Number.isFinite(e.mini_quota) ? e.mini_quota : 1,
    offset_mm: Number.isFinite(e.offset_mm) ? e.offset_mm : 0,
    rata_enabled: e.rata_enabled === !0,
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
function Bd(e, t = 0) {
  const n = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, r = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, a = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, i = 2 * (Number.isFinite(t) ? t : 0), s = (Number.isFinite(r) ? r : 0) * n + i, c = (Number.isFinite(a) ? a : 0) * n + i;
  return { w: Number.isFinite(s) ? s : 0, h: Number.isFinite(c) ? c : 0 };
}
const Sn = () => globalThis.__crycatBase || "";
async function K(e, t) {
  const n = await fetch(Sn() + e, t);
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
const G = {
  health: () => K("/api/health"),
  getSettings: () => K(
    "/api/settings"
  ),
  putSettings: (e) => K("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), K("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => K("/api/assets"),
  patchAsset: (e, t) => K(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => K(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 24) => K(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => K("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => K(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => K(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), K(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => K(
    "/api/contornos"
  ),
  contornoPreview: (e, t) => K(`/api/assets/${e}/contorno-preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  blobs: (e) => K(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => K(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0, r = "final") => `${Sn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
  previewUrlSinBordes: (e, t = 0) => `/api/assets/${e}/preview.png?r=${t}`,
  optimize: (e, t = !1) => K("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => K(`/api/job/${e}`),
  /** Restaura una colocación anterior (deshacer/rehacer con resultados). */
  restoreResult: (e) => K("/api/result/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  result: () => K("/api/result"),
  version: () => K("/api/version"),
  checkVersion: () => K("/api/version/check", { method: "POST" }),
  updateVersion: () => K(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => K("/api/version/open", { method: "POST" }),
  estimate: () => K("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0, i = "final", s = !1) => `${Sn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${i}` : ""}${s ? "&marcas=1" : ""}`,
  move: (e, t, n) => K(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => K("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => K("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => K(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => K("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => K("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => K(
    "/api/presets/factory"
  ),
  assetsFolder: () => K("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), K("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${Sn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => K("/api/presets"),
  savePreset: (e) => K("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => K(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => K(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  ),
  // ------------------------------------------------------- modos --
  modos: () => K("/api/modos"),
  saveModo: (e, t) => K(`/api/modos/${e}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  renameModo: (e, t) => K(`/api/modos/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  loadModo: (e) => K(
    `/api/modos/${e}/load`,
    { method: "POST" }
  ),
  deleteModo: (e) => K(
    `/api/modos/${e}`,
    { method: "DELETE" }
  )
};
async function If(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((h, m) => {
      a.onload = () => h(), a.onerror = () => m(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, c = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(i * c), l.height = Math.round(s * c), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (h) => l.toBlob((m) => h(m), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Gd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await If(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const ss = [
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
function ls(e) {
  return ss.find((t) => t.key === e) ?? ss[0];
}
function Cc(e) {
  const t = ls(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Hd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return ls(e);
  } catch {
  }
  return ls("wiwi");
}
const Wd = {
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
  "Seleccionar todos los elementos": "Select every element",
  Invertir: "Invert",
  "Invertir la selección": "Invert selection",
  "Quitar selección": "Clear selection",
  "Quitar la selección": "Clear the selection",
  "Shift + clic = de una en una; Ctrl/Cmd + clic = por lista. Otra vez deselecciona.": "Shift + click = one by one; Ctrl/Cmd + click = by list. Click again to deselect.",
  "Clic = seleccionar; Shift + clic = de una en una; Ctrl/Cmd + clic = por lista (del último tocado hasta este). Otra vez deselecciona.": "Click = select; Shift + click = one by one; Ctrl/Cmd + click = by list (from the last one touched to this one). Click again to deselect.",
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
  "Marcas para delimitar": "Alignment marks",
  "Modo rata": "Rat mode",
  "Solo 1 página": "1 page only",
  "Varias páginas": "Multiple pages",
  "Solo 1 página (por defecto): nunca crea una segunda hoja; si no entra todo, avisa. Varias páginas: reparte como hasta ahora.": "1 page only (default): never creates a second sheet; warns if not everything fits. Multiple pages: spreads as before.",
  "Coloca copias EXTRA de los elementos marcados con la rata: solo para IMPRIMIR (no se guardan en el PNG normal), sin borde, en los márgenes de la hoja, separadas de las piezas y evitando las marcas. El tamaño máximo lo pone el hueco libre.": "Places EXTRA copies of the elements marked with the rat: print ONLY (not saved in the normal PNG), no border, in the sheet margins, away from the pieces and avoiding the marks. The max size is set by the free space.",
  "Modo rata: este elemento coloca copias extra al imprimir": "Rat mode: this element places extra copies when printing",
  "Separación de las piezas": "Separation from pieces",
  "Ctrl/Shift+clic = varios": "Ctrl/Shift+click = multi",
  "Clic en una tarjeta (o en una pieza del visor) para seleccionarla; Ctrl/Cmd o Shift + clic para seleccionar VARIAS y editarlas a la vez.": "Click a card (or a piece in the viewer) to select it; Ctrl/Cmd or Shift + click to select SEVERAL and edit them together.",
  "Separación entre elementos para el recorte": "Separation between items for cutting",
  "Píxeles que se separan las piezas AL RENDERIZAR (aunque se toquen o solapen): la Cricut las detecta como elementos distintos y las corta por separado. 3 px va bien a 300 ppp.": "Pixels the pieces are separated by WHEN RENDERING (even if they touch or overlap): Cricut detects them as separate items and cuts them apart. 3 px works well at 300 dpi.",
  "Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni login). También puedes copiarlo o abrirlo en GitHub si prefieres.": "Fill in the report and send it by EMAIL (no account or login needed). You can also copy it or open it on GitHub if you prefer.",
  "Enviar por email": "Send by email",
  "Abrir en GitHub (necesita cuenta)": "Open on GitHub (account needed)",
  "Vista previa de lo guardado": "Preview of what was saved",
  "Añade dos cuadrados blancos de 2 mm (arriba-izquierda y abajo-derecha) en los límites del área. Sirven de referencia para que la colocación quede EXACTA siempre en Cricut Design Space. No cuentan para la optimización.": "Adds two 2 mm white squares (top-left and bottom-right) at the area limits. They are a reference so the layout is ALWAYS exact in Cricut Design Space. They don't count for the optimization.",
  "Borde para unir": "Join border",
  "Ver sin marcados": "Preview without marked",
  "Ver unido": "Preview joined",
  "Ver cómo queda SIN los trozos marcados (solo vista previa)": "See how it looks WITHOUT the marked pieces (preview only)",
  "Ver cómo queda al UNIR todo con el borde actual (solo vista previa)": "See how it looks when joining everything with the current border (preview only)",
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
}, Qd = v.createContext("es");
function $f({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(Qd.Provider, { value: e, children: t });
}
function ul() {
  return v.useContext(Qd);
}
function rt() {
  const e = ul();
  return (t, n) => {
    let r = e === "en" ? Wd[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function Df(e, t, n) {
  return e === "en" ? Wd[t] ?? t : t;
}
function le({ size: e = 18, children: t }) {
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
function cs({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function ia({ size: e }) {
  return /* @__PURE__ */ o.jsx(le, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function sa({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Of({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Ff({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function la({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function qf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Uf({ size: e }) {
  return /* @__PURE__ */ o.jsx(le, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function dr({ size: e }) {
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
function Sc({ size: e }) {
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
        /* @__PURE__ */ o.jsx("path", { d: "M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" }),
        /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "3" })
      ]
    }
  );
}
function Vf({ size: e }) {
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
        /* @__PURE__ */ o.jsx("path", { d: "M12 3l7 7-7 11L5 10z" }),
        /* @__PURE__ */ o.jsx("path", { d: "M12 8v6" })
      ]
    }
  );
}
function _c({ size: e }) {
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
        /* @__PURE__ */ o.jsx("circle", { cx: "6", cy: "6", r: "2.6" }),
        /* @__PURE__ */ o.jsx("circle", { cx: "6", cy: "18", r: "2.6" }),
        /* @__PURE__ */ o.jsx("path", { d: "M8.4 7.6L20 18M8.4 16.4L20 6" })
      ]
    }
  );
}
function Bf({ size: e }) {
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
        /* @__PURE__ */ o.jsx("rect", { x: "3", y: "3", width: "8", height: "18", rx: "1.5" }),
        /* @__PURE__ */ o.jsx("rect", { x: "13", y: "7", width: "8", height: "10", rx: "1.5" }),
        /* @__PURE__ */ o.jsx("path", { d: "M17 3v2.5M17 18.5V21", strokeDasharray: "1.5 2.5" })
      ]
    }
  );
}
function Gf({ size: e }) {
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
        /* @__PURE__ */ o.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }),
        /* @__PURE__ */ o.jsx("path", { d: "M12 3v18M3 12h18", strokeDasharray: "2 3" })
      ]
    }
  );
}
function Yd({ size: e }) {
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
function Pn({ size: e }) {
  return /* @__PURE__ */ o.jsx(le, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function us({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Hf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function ds({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Wf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Qf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function qr({ size: e }) {
  return /* @__PURE__ */ o.jsx(le, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Nc({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Yf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Kf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Xf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Kd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Jf({ size: e }) {
  return /* @__PURE__ */ o.jsx(le, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Xd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function Zf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function eh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function th({ size: e }) {
  return /* @__PURE__ */ o.jsx(le, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function nh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function rh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(le, { size: e, children: [
    /* @__PURE__ */ o.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function ah({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = rt(), i = v.useMemo(() => t.map((N) => N.id), [t]), [s, c] = v.useState(/* @__PURE__ */ new Set()), [l, d] = v.useState("escala"), [h, m] = v.useState(100), [x, _] = v.useState(50), [g, S] = v.useState("mayor"), [T, u] = v.useState("");
  v.useEffect(() => {
    e && (c(/* @__PURE__ */ new Set()), u(""));
  }, [e, i.join(",")]);
  const p = (N) => !s.has(N), f = (N) => c((j) => {
    const w = new Set(j);
    return w.has(N) ? w.delete(N) : w.add(N), w;
  }), y = () => c(
    s.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), C = (N) => {
    const j = N.w_mm_base || 0, w = N.h_mm_base || 0;
    return g === "mayor" ? Math.max(j, w) : g === "menor" ? Math.min(j, w) : 2 * Math.sqrt(Math.max(0, j * w) / Math.PI);
  }, E = (N) => {
    if (l === "tamano") {
      const j = C(N);
      if (j > 0) return Math.min(10, Math.max(0.05, x / j));
    }
    return Math.min(10, Math.max(0.05, h / 100));
  }, k = (N) => {
    const j = E(N);
    return { w: (N.w_mm_base || 0) * j, h: (N.h_mm_base || 0) * j };
  }, R = async () => {
    let N = 0;
    for (const j of t) {
      if (!p(j.id)) continue;
      const w = E(j) * 100;
      await G.patchAsset(j.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(w * 10) / 10))
      }), N += 1;
    }
    await r(), u(a("{n} elementos ajustados ", { n: N }));
  }, B = async () => {
    await R(), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((N) => {
          const j = k(N), w = Math.min(98, j.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${N.id}`,
              style: {
                width: `${w}%`,
                maxWidth: `${w}%`,
                aspectRatio: `${j.w || 1} / ${j.h || 1}`,
                opacity: p(N.id) ? 1 : 0.3
              },
              title: `${N.name} · ${j.w.toFixed(1)}×${j.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: G.previewUrl(N.id), alt: "" })
            },
            N.id
          );
        }) }),
        /* @__PURE__ */ o.jsx("div", { className: "modal-botones", style: { marginTop: 8 }, children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "primary",
            "data-testid": "import-aplicar-izq",
            onClick: R,
            children: a("Aplicar tamaño")
          }
        ) }),
        T && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso-izq", children: T })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "hint row", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "mini-link",
              "data-testid": "import-todos",
              onClick: y,
              children: s.size === i.length ? a("Seleccionar todos") : a("Quitar selección")
            }
          ),
          /* @__PURE__ */ o.jsxs("span", { children: [
            "— ",
            i.length - s.size,
            "/",
            i.length
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((N) => {
          const j = k(N);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${N.id}`,
              className: p(N.id) ? "sel" : "",
              onClick: () => f(N.id),
              title: N.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: G.previewUrl(N.id), alt: N.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: N.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(N.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  j.w.toFixed(1),
                  "×",
                  j.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            N.id
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
              className: l === "escala" ? "on" : "",
              onClick: () => d("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
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
        l === "escala" ? /* @__PURE__ */ o.jsxs("label", { children: [
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
                onChange: (N) => m(Number(N.target.value))
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
                  value: String(x),
                  onChange: (N) => _(Number(N.target.value))
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
                value: g,
                onChange: (N) => S(N.target.value),
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
        T && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: T })
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
          onClick: B,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function oh({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: i = !1,
  bordeGlobalMm: s = 0,
  rataActivo: c = !1,
  faseBordes: l = 0,
  verBordes: d = !0,
  contornoModo: h = "final",
  destacado: m = !1,
  sel: x = !1,
  onSel: _
}) {
  const g = rt(), [S, T] = v.useState(() => oa(e));
  v.useEffect(() => T(oa(e)), [e]);
  const u = v.useRef(null), p = i && Number(s) || 0, f = Math.max(0, p + S.offset_mm), y = (P) => {
    const X = Math.max(0, Math.min(20, Math.round(P * 2) / 2));
    A({ offset_mm: X });
  }, C = Bd(S, f), [E, k] = v.useState(""), R = v.useRef(!1), [B, N] = v.useState(""), j = v.useRef(!1), [w, $] = v.useState({ tamano: !1, borde: !1, mini: !1 }), O = v.useRef(null);
  v.useEffect(() => {
    var P;
    m && ($({ tamano: !0, borde: !0, mini: !0 }), (P = O.current) == null || P.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [m]), v.useEffect(() => {
    R.current || k(C.w > 0 ? C.w.toFixed(1) : ""), j.current || N(C.h > 0 ? C.h.toFixed(1) : "");
  }, [C.w, C.h]);
  const H = Number.isFinite(S.w_mm_base) ? S.w_mm_base : 0, ee = Number.isFinite(S.h_mm_base) ? S.h_mm_base : 0, te = (P) => {
    k(P);
    const X = Number(P.replace(",", "."));
    !Number.isFinite(X) || X <= 0 || H <= 0 || A({ scale_pct: Math.max(5, (X - 2 * f) / H * 100) });
  }, L = (P) => {
    N(P);
    const X = Number(P.replace(",", "."));
    !Number.isFinite(X) || X <= 0 || ee <= 0 || A({ scale_pct: Math.max(5, (X - 2 * f) / ee * 100) });
  }, F = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && P.mini).length) ?? 0, W = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && !P.mini).length) ?? 0, A = async (P) => {
    a == null || a(), "copies" in P && (P.copies = Math.max(0, P.copies ?? 0)), T((X) => ({ ...X, ...P }));
    try {
      await G.patchAsset(e.id, P);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: O,
      "data-asset": e.id,
      className: `asset-card${m ? " destacada" : ""}${x ? " sel" : ""}`,
      "data-testid": "asset-card",
      onClick: (P) => {
        if (P.target.closest("button, input, select, textarea, a")) return;
        const ae = P.shiftKey ? "uno" : P.ctrlKey || P.metaKey ? "lista" : "solo";
        _ == null || _(e.id, ae);
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: G.previewUrlSinBordes(e.id, e.rev ?? 0),
            alt: e.name,
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "info", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "name-row", children: [
            /* @__PURE__ */ o.jsx("span", { className: "name", title: e.name, children: e.name }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `abrir-carpeta-${e.id}`,
                title: g("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => G.assetsFolder().then((P) => G.abrirCarpeta(P.path)).catch(() => G.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ o.jsx(ia, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: g("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var P;
                  return (P = u.current) == null ? void 0 : P.click();
                },
                children: /* @__PURE__ */ o.jsx(Of, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: u,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (P) => {
                  var ae;
                  const X = (ae = P.target.files) == null ? void 0 : ae[0];
                  if (P.target.value = "", !!X)
                    try {
                      const { blob: Se, name: _e } = await Gd(X);
                      await G.reemplazar(e.id, Se, _e), await n();
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
                title: g("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ o.jsx(Ff, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                title: S.bg_removed ? g("Restaurar fondo original") : g("Quitar fondo (inteligente)"),
                onClick: () => (S.bg_removed ? G.restoreBackground(e.id) : G.removeBackground(e.id)).then(n),
                children: S.bg_removed ? /* @__PURE__ */ o.jsx(qf, { size: 16 }) : /* @__PURE__ */ o.jsx(la, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: g("Eliminar imagen"),
                onClick: () => G.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ o.jsx(Uf, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${S.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": g("Incluir como mini (rellena huecos)"),
                onClick: () => A({ mini_enabled: !S.mini_enabled }),
                children: [
                  /* @__PURE__ */ o.jsx(Pn, { size: 15 }),
                  " ",
                  g("Mini")
                ]
              }
            ),
            c && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `mini-toggle rata ${S.rata_enabled ? "on" : ""}`,
                "data-testid": `rata-${e.id}`,
                "data-tip": g("Modo rata: este elemento coloca copias extra al imprimir"),
                onClick: () => A({ rata_enabled: !S.rata_enabled }),
                children: "🐀"
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${S.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": g("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => $((P) => ({ ...P, borde: !P.borde })),
                children: [
                  /* @__PURE__ */ o.jsx(dr, { size: 15 }),
                  " ",
                  g("Borde")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: g("Copias"), children: [
              /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => A({ copies: S.copies - 1 }), children: "−" }),
              /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: S.copies }),
              /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => A({ copies: S.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => $((P) => ({ ...P, tamano: !P.tamano })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${w.tamano ? "open" : ""}`, children: "›" }),
                  g("Tamaño"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    C.w.toFixed(1),
                    "×",
                    C.h.toFixed(1),
                    " · ",
                    Math.round(S.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            w.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: g("Escala del elemento (100% = tamaño natural)"), children: g("Escala") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: S.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (P) => A({ scale_pct: Number(P.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
                  Math.round(S.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: g("Tamaño exacto en milímetros (mantiene la proporción)"), children: g("Ancho") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: E,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      R.current = !0, j.current = !1;
                    },
                    onBlur: () => {
                      R.current = !1, k(C.w > 0 ? C.w.toFixed(1) : "");
                    },
                    onChange: (P) => te(P.target.value)
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" }),
                /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ o.jsx("span", { title: g("Tamaño exacto en milímetros (mantiene la proporción)"), children: g("Alto") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: B,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      j.current = !0, R.current = !1;
                    },
                    onBlur: () => {
                      j.current = !1, N(C.h > 0 ? C.h.toFixed(1) : "");
                    },
                    onChange: (P) => L(P.target.value)
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
                onClick: () => $((P) => ({ ...P, borde: !P.borde })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${w.borde ? "open" : ""}`, children: "›" }),
                  g("Borde adicional"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    S.offset_mm.toFixed(1),
                    " mm"
                  ] })
                ]
              }
            ),
            w.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => y(S.offset_mm - 0.5),
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
                    value: S.offset_mm,
                    onChange: (P) => y(Number(P.target.value))
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => y(S.offset_mm + 0.5),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: g("Adicional: {a} mm · Global: {g} mm · Total: {t} mm", {
                a: S.offset_mm.toFixed(1),
                g: p.toFixed(1),
                t: f.toFixed(1)
              }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", g("Extender")],
                  ["blanco", g("Blanco")],
                  ["color", g("Color")],
                  ["unir_recto", g("Unir recto")],
                  ["unir_curvo", g("Unir curvo")]
                ].map(([P, X]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `seg ${(S.offset_modo || "") === P ? "on" : ""}`,
                    "data-testid": `offset-modo-${P}-${e.id}`,
                    onClick: () => A({ offset_modo: P }),
                    children: X
                  },
                  P
                )),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: S.offset_color || "#ffffff",
                    title: g("Color del borde"),
                    onChange: (P) => A({
                      offset_color: P.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          S.mini_enabled && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => $((P) => ({ ...P, mini: !P.mini })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${w.mini ? "open" : ""}`, children: "›" }),
                  g("Opciones de mini"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    S.mini_quota,
                    " · ",
                    F
                  ] })
                ]
              }
            ),
            w.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx("span", { title: g("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: g("Cuota") }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => A({ mini_quota: Math.max(
                    1,
                    Math.round((S.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                S.mini_quota
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => A({ mini_quota: Math.min(
                    100,
                    Math.round((S.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: g(" {n} minis", { n: F }) })
            ] }) })
          ] }),
          W > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: g("Colocadas: {n}", { n: W }) }),
          S.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ o.jsx(Kd, { size: 14 }),
            " ",
            S.warnings[0],
            " ",
            S.warnings.some((P) => /blob|trozos sueltos/i.test(P)) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: g("LIMPIA EL CONTORNO")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ih({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: s,
  faseBordes: c = 0,
  verBordes: l = !0,
  contornoModo: d = "final",
  destacado: h = "",
  seleccion: m = [],
  onSeleccion: x,
  onSeleccionarTodo: _,
  onInvertirSeleccion: g,
  onLimpiarSeleccion: S,
  onBulk: T
}) {
  const u = rt(), p = v.useRef(null), [f, y] = v.useState(!1), [C, E] = v.useState(
    { tamano: !1, borde: !1, mini: !1 }
  ), [k, R] = v.useState(null), B = async (j) => {
    const w = [];
    for (const $ of Array.from(j))
      try {
        const { blob: O, name: H } = await Gd($);
        w.push(oa(await G.upload(O, H)));
      } catch (O) {
        console.error(O);
      }
    await r(), w.length > 1 && R(w);
  }, N = n.usar_minis;
  return e.some((j) => j.demo), /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "hint",
          style: { fontSize: 10.5 },
          title: u("Clic = seleccionar; Shift + clic = de una en una; Ctrl/Cmd + clic = por lista (del último tocado hasta este). Otra vez deselecciona."),
          children: u("Ctrl/Shift+clic = varios")
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `dropzone${f ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var j;
          return (j = p.current) == null ? void 0 : j.click();
        },
        onDragOver: (j) => {
          j.preventDefault(), y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: (j) => {
          j.preventDefault(), y(!1), j.dataTransfer.files.length && B(j.dataTransfer.files);
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
              ref: p,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (j) => {
                j.target.files && B(j.target.files), j.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "sel-tools", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "sel-todo",
          onClick: () => _ == null ? void 0 : _(),
          title: u("Seleccionar todos los elementos"),
          children: u("Seleccionar todos")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "sel-invertir",
          onClick: () => g == null ? void 0 : g(),
          title: u("Invertir la selección"),
          children: u("Invertir")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "sel-quitar",
          onClick: () => S == null ? void 0 : S(),
          title: u("Quitar la selección"),
          children: u("Quitar selección")
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "hint-seleccion", children: u("Shift + clic = de una en una; Ctrl/Cmd + clic = por lista. Otra vez deselecciona.") }),
    m.length >= 2 && (() => {
      const j = e.find((A) => A.id === m[0]), w = (j == null ? void 0 : j.copies) ?? 1, $ = Math.round((j == null ? void 0 : j.scale_pct) ?? 100), O = (j == null ? void 0 : j.mini_enabled) ?? !1, H = (j == null ? void 0 : j.rata_enabled) ?? !1, ee = (j == null ? void 0 : j.mini_quota) ?? 1, te = Number((j == null ? void 0 : j.offset_mm) ?? 0), L = (j == null ? void 0 : j.offset_modo) || "extender", F = (j == null ? void 0 : j.offset_color) || "#ffffff", W = (A, P) => {
        P > 0 && (T == null || T(m, (X) => {
          const ae = Number(A === "w" ? X.w_mm_base || X.w_mm : X.h_mm_base || X.h_mm) || 0;
          return ae > 0 ? { scale_pct: Math.max(10, Math.min(
            400,
            Math.round(P / ae * 100)
          )) } : {};
        }));
      };
      return /* @__PURE__ */ o.jsx("div", { className: "bulk-card asset-card", "data-testid": "bulk-card", children: /* @__PURE__ */ o.jsxs("div", { className: "info", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "name-row", children: [
          /* @__PURE__ */ o.jsx("span", { className: "name", children: u("{n} elementos seleccionados", { n: m.length }) }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "chip",
              "data-testid": "bulk-quitar",
              onClick: () => S ? S() : x == null ? void 0 : x(m[0], "uno"),
              children: u("Quitar selección")
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `mini-toggle${O ? " on" : ""}`,
              "data-testid": "bulk-mini",
              "data-tip": u("Incluir como mini (rellena huecos)"),
              onClick: () => T == null ? void 0 : T(m, { mini_enabled: !O }),
              children: [
                /* @__PURE__ */ o.jsx(Pn, { size: 15 }),
                " ",
                u("Mini")
              ]
            }
          ),
          n.rata_activo === !0 && /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `mini-toggle rata${H ? " on" : ""}`,
              "data-testid": "bulk-rata",
              "data-tip": u("Modo rata: estos elementos colocan copias extra al imprimir"),
              onClick: () => T == null ? void 0 : T(m, { rata_enabled: !H }),
              children: "🐀"
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `mini-toggle${te > 0 ? " on" : ""}`,
              "data-testid": "bulk-borde",
              "data-tip": u("Borde adicional"),
              onClick: () => E((A) => ({ ...A, borde: !A.borde })),
              children: [
                /* @__PURE__ */ o.jsx(dr, { size: 15 }),
                " ",
                u("Borde")
              ]
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: u("Copias"), children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                "data-testid": "bulk-copias-menos",
                onClick: () => T == null ? void 0 : T(
                  m,
                  { copies: Math.max(0, w - 1) }
                ),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsx("span", { className: "n", children: w }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                "data-testid": "bulk-copias-mas",
                onClick: () => T == null ? void 0 : T(m, { copies: w + 1 }),
                children: "+"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: "fold-head",
              "data-testid": "bulk-fold-tamano",
              onClick: () => E((A) => ({ ...A, tamano: !A.tamano })),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: `chev ${C.tamano ? "open" : ""}`, children: "›" }),
                u("Tamaño"),
                /* @__PURE__ */ o.jsxs("span", { className: "fold-val", children: [
                  $,
                  " %"
                ] })
              ]
            }
          ),
          C.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body bulk-tamano-body", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "bulk-tamano-controles", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: u("Escala de los elementos (100% = tamaño natural)"), children: u("Escala") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    "data-testid": "bulk-escala",
                    value: $,
                    onChange: (A) => T == null ? void 0 : T(
                      m,
                      { scale_pct: Number(A.target.value) }
                    )
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
                  $,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: u("Ancho exacto en milímetros (el que edites es el que se aplica)"), children: u("Ancho") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    "data-testid": "bulk-ancho-mm",
                    defaultValue: j ? j.w_mm.toFixed(1) : "",
                    onBlur: (A) => W("w", Number(A.target.value))
                  },
                  `w${m.join(",")}`
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" }),
                /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ o.jsx("span", { title: u("Alto exacto en milímetros (el que edites es el que se aplica)"), children: u("Alto") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    "data-testid": "bulk-alto-mm",
                    defaultValue: j ? j.h_mm.toFixed(1) : "",
                    onBlur: (A) => W("h", Number(A.target.value))
                  },
                  `h${m.join(",")}`
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "bulk-tamano-lista", "data-testid": "bulk-tamanos", children: m.map((A) => {
              const P = e.find((ae) => ae.id === A);
              if (!P) return null;
              const X = Bd(P);
              return /* @__PURE__ */ o.jsxs("div", { className: "bulk-tamano-fila", children: [
                /* @__PURE__ */ o.jsx("span", { className: "bulk-tamano-nombre", title: P.name, children: P.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "bulk-tamano-medida", children: [
                  X.w.toFixed(1),
                  "×",
                  X.h.toFixed(1),
                  " mm"
                ] })
              ] }, A);
            }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: "fold-head",
              "data-testid": "bulk-fold-borde",
              onClick: () => E((A) => ({ ...A, borde: !A.borde })),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: `chev ${C.borde ? "open" : ""}`, children: "›" }),
                u("Borde adicional"),
                /* @__PURE__ */ o.jsxs("span", { className: "fold-val", children: [
                  te.toFixed(1),
                  " mm"
                ] })
              ]
            }
          ),
          C.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": "bulk-offset-menos",
                  onClick: () => T == null ? void 0 : T(
                    m,
                    { offset_mm: Math.max(0, te - 0.5) }
                  ),
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
                  "data-testid": "bulk-offset-range",
                  value: te,
                  onChange: (A) => T == null ? void 0 : T(
                    m,
                    { offset_mm: Number(A.target.value) }
                  )
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": "bulk-offset-mas",
                  onClick: () => T == null ? void 0 : T(
                    m,
                    { offset_mm: te + 0.5 }
                  ),
                  children: "+"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              [
                ["extender", u("Extender")],
                ["blanco", u("Blanco")],
                ["color", u("Color")],
                ["unir_recto", u("Unir recto")],
                ["unir_curvo", u("Unir curvo")]
              ].map(([A, P]) => /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: `seg ${L === A ? "on" : ""}`,
                  "data-testid": `bulk-offset-modo-${A}`,
                  onClick: () => T == null ? void 0 : T(m, { offset_modo: A }),
                  children: P
                },
                A
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "color",
                  className: "color-pick",
                  "data-testid": "bulk-offset-color",
                  value: F,
                  title: u("Color del borde"),
                  onChange: (A) => T == null ? void 0 : T(
                    m,
                    { offset_color: A.target.value, offset_modo: "color" }
                  )
                }
              )
            ] })
          ] })
        ] }),
        O && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: "fold-head",
              "data-testid": "bulk-fold-mini",
              onClick: () => E((A) => ({ ...A, mini: !A.mini })),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: `chev ${C.mini ? "open" : ""}`, children: "›" }),
                u("Opciones de mini"),
                /* @__PURE__ */ o.jsxs("span", { className: "fold-val", children: [
                  "×",
                  ee
                ] })
              ]
            }
          ),
          C.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ o.jsx("span", { title: u("Cuántos minis quieres de estos elementos respecto a los demás"), children: u("Cuota") }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "bulk-cuota-menos",
                onClick: () => T == null ? void 0 : T(m, { mini_quota: Math.max(
                  1,
                  Math.round((ee - 0.5) * 2) / 2
                ) }),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "quota-val", children: [
              "×",
              ee
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "bulk-cuota-mas",
                onClick: () => T == null ? void 0 : T(m, { mini_quota: Math.min(
                  100,
                  Math.round((ee + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Los cambios se aplican a TODOS los elementos seleccionados.") })
      ] }) });
    })(),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "asset-list",
        "data-testid": "asset-list",
        onDragOver: (j) => {
          j.preventDefault(), y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: (j) => {
          j.preventDefault(), y(!1), j.dataTransfer.files.length && B(j.dataTransfer.files);
        },
        children: e.map((j) => /* @__PURE__ */ o.jsx(
          oh,
          {
            a: j,
            result: t,
            onChange: r,
            sel: m.includes(j.id),
            onSel: x,
            onEditarContorno: i,
            onAntesDeCambiar: s,
            faseBordes: c,
            verBordes: l,
            contornoModo: d,
            destacado: h === j.id,
            bordeGlobal: n.offset_activo === !0,
            bordeGlobalMm: Number(n.offset_mm) || 0,
            rataActivo: n.rata_activo === !0
          },
          j.id
        ))
      }
    ),
    !N && /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => G.clearAssets().then(r),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      ah,
      {
        open: !!k,
        assets: k ?? [],
        onClose: () => R(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const vt = (e) => (globalThis.__crycatAssets || "") + e;
function Jd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = rt(), [i, s] = v.useState(null), [c, l] = v.useState("");
  v.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (h = "") => {
    l("");
    try {
      s(await G.fsList(h));
    } catch (m) {
      l(m.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (h) => h.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    c && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      c
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => d(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((h) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => d(`${i.path}/${h}`.replace("//", "/")),
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
function sh({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i,
  preview: s
}) {
  const c = rt(), [l, d] = v.useState("resumen");
  if (!e) return null;
  const h = t.length > 0 && t.every((x) => x.startsWith("data:")), m = [
    c("Abre Cricut Design Space."),
    c("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    c("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    c("Pulsa «Crear» para preparar el lienzo."),
    c("Comprueba que las dimensiones coinciden con las del archivo."),
    c("Imprime en papel mate blanco y colócalo en la esterilla."),
    c("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ o.jsx("div", { className: "modal", children: l === "resumen" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { "data-testid": "save-titulo", children: c(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ o.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      s && /* @__PURE__ */ o.jsx(
        "img",
        {
          src: s,
          alt: c("Vista previa de lo guardado"),
          "data-testid": "save-preview",
          style: {
            maxWidth: 220,
            maxHeight: 220,
            display: "block",
            margin: "0 auto 10px",
            borderRadius: 10,
            border: "2px solid var(--border)",
            background: "#fff"
          }
        }
      ),
      /* @__PURE__ */ o.jsx("p", { className: "hint", children: c("Archivos:") }),
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((x) => /* @__PURE__ */ o.jsx("li", { title: x, children: x.split(/[\\/]/).pop() }, x)) }),
      !h && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        c("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      h && /* @__PURE__ */ o.jsx("p", { className: "hint", children: c("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      h ? t.map((x, _) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${_}`,
          href: x,
          download: `crycat_pagina-${String(_ + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(ia, { size: 15 }),
            " ",
            c("Descargar página {n}", { n: _ + 1 })
          ]
        },
        _
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(ia, { size: 15 }),
            " ",
            c("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-continuar", onClick: i, children: c("Continuar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => d("cricut"),
          children: c("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { children: c("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: m.map((x, _) => /* @__PURE__ */ o.jsx("li", { children: x }, _)) }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => d("resumen"),
          children: c("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: i, children: c("Entendido") })
    ] })
  ] }) }) });
}
function lh({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: s, onJob: c, onRecalc: l, editando: d, onFinEdicion: h, onDeshacer: m, onRehacer: x, puedeDeshacer: _, puedeRehacer: g, seleccion: S = [], onSeleccion: T }) {
  const u = rt(), p = ul(), [f, y] = v.useState(1), [C, E] = v.useState({ x: 0, y: 0 }), [k, R] = v.useState(null), [B, N] = v.useState(1), [j, w] = v.useState(null), [$, O] = v.useState(null), [H, ee] = v.useState(!1), [te, L] = v.useState(2), [F, W] = v.useState(0);
  v.useEffect(() => {
    if (!r.verBordes) return;
    const b = window.setInterval(
      () => W((D) => (D + 3) % 12),
      260
    );
    return () => window.clearInterval(b);
  }, [r.verBordes]);
  const [A, P] = v.useState([]), [X, ae] = v.useState([]), [Se, _e] = v.useState(""), [Ge, jt] = v.useState("normal"), [Q, ke] = v.useState(""), [ye, Ae] = v.useState(/* @__PURE__ */ new Set()), Et = v.useRef(null), fn = v.useRef(null), Vt = p === "en" ? Af : Rf, hn = v.useMemo(
    () => Vt[Math.floor(Math.random() * Vt.length)],
    [Vt]
  ), Ln = r.saveName.trim() || hn;
  v.useEffect(() => {
    N(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const Ee = (t == null ? void 0 : t.pages) ?? 0, fa = !!t && t.efficiency < 0.8;
  v.useEffect(() => {
    const b = Et.current;
    if (!b) return;
    const D = (U) => {
      U.preventDefault(), U.stopPropagation();
      const Z = b.getBoundingClientRect(), Y = U.clientX - Z.left, oe = U.clientY - Z.top;
      y((se) => {
        const ze = U.deltaY < 0 ? 1.05 : 0.9523809523809523, ce = Math.min(12, Math.max(0.05, se * ze)), ue = ce / se;
        return E((kt) => ({ x: Y - (Y - kt.x) * ue, y: oe - (oe - kt.y) * ue })), ce;
      });
    };
    return b.addEventListener("wheel", D, { passive: !1 }), () => b.removeEventListener("wheel", D);
  }, []);
  const Rn = (b) => {
    if (b.target.closest(".item-box")) return;
    fn.current = { x: b.clientX - C.x, y: b.clientY - C.y };
    const D = (Z) => {
      fn.current && E({ x: Z.clientX - fn.current.x, y: Z.clientY - fn.current.y });
    }, U = () => {
      fn.current = null, window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", U);
    };
    window.addEventListener("mousemove", D), window.addEventListener("mouseup", U);
  };
  v.useEffect(() => {
    const b = (D) => {
      D.target.tagName !== "INPUT" && (D.key === "+" || D.key === "=" ? y((U) => Math.min(12, U * 1.08)) : D.key === "-" || D.key === "_" ? y((U) => Math.max(0.05, U / 1.08)) : D.key === "0" ? xr() : D.key === "Escape" ? R(null) : D.key === "g" ? a((U) => ({ ...U, guidesVisible: !U.guidesVisible })) : D.key === "t" && a((U) => {
        const Z = [
          "blanco",
          "transparente",
          "fosforito",
          "rosa",
          "negro"
        ], Y = U.fondo ?? (U.eyeFosforito ? "fosforito" : U.eyeTransparent ? "transparente" : "blanco"), oe = Z[(Z.indexOf(Y) + 1) % Z.length];
        return {
          ...U,
          fondo: oe,
          eyeTransparent: oe === "transparente",
          eyeFosforito: oe === "fosforito"
        };
      }));
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [a]);
  const Bt = v.useRef(null), hr = v.useRef(null), Ao = (b, D) => {
    b.preventDefault(), b.stopPropagation();
    const U = b.currentTarget.closest(".page-box");
    if (!U || !t) return;
    const Z = t.page_mm[0] / U.clientWidth, Y = {
      uid: D.uid,
      startX: b.clientX,
      startY: b.clientY,
      origX: D.x,
      origY: D.y,
      mmPerPx: Z
    };
    Bt.current = Y, hr.current = { x: D.x, y: D.y }, w(Y), O({ uid: D.uid, x: D.x, y: D.y });
    const oe = (ze) => {
      const ce = Bt.current;
      if (!ce) return;
      const ue = (ze.clientX - ce.startX) * ce.mmPerPx / f, kt = (ze.clientY - ce.startY) * ce.mmPerPx / f;
      hr.current = { x: ce.origX + ue, y: ce.origY + kt }, O({ uid: ce.uid, x: ce.origX + ue, y: ce.origY + kt });
    }, se = (ze) => {
      window.removeEventListener("mousemove", oe), window.removeEventListener("mouseup", se);
      const ce = Bt.current;
      if (Bt.current = null, !ce) return;
      const ue = (ze.clientX - ce.startX) * ce.mmPerPx / f, kt = (ze.clientY - ce.startY) * ce.mmPerPx / f;
      w(null), O(null), !(Math.abs(ue) < 0.5 && Math.abs(kt) < 0.5) && An(ce.uid, ce.origX + ue, ce.origY + kt);
    };
    window.addEventListener("mousemove", oe), window.addEventListener("mouseup", se);
  }, An = async (b, D, U) => {
    try {
      const Z = await G.move(b, D, U);
      Z.job ? c(Z.job) : await s();
    } catch {
      await s();
    } finally {
      N(Date.now());
    }
  }, gr = async (b) => {
    const D = await G.unpin(b);
    c(D);
  }, vr = !1;
  v.useEffect(() => {
    {
      P([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, B]), v.useEffect(() => {
    if (jt("normal"), ke(""), !d) {
      ae([]), _e(""), Ae(/* @__PURE__ */ new Set());
      return;
    }
    G.blobs(d.id).then((b) => {
      ae(b.blobs), L(d.offset_mm > 0 ? d.offset_mm : b.union_mm ?? 2), _e(b.preview_png), Ae(new Set(b.blobs.filter((D) => !D.principal).map((D) => D.id)));
    }).catch(() => {
      ae([]), _e("");
    });
  }, [d]);
  const yr = async () => {
    if (d)
      try {
        await G.limpiarContorno(d.id, Array.from(ye));
      } finally {
        await (h == null ? void 0 : h());
      }
  }, z = (b) => {
    Ae((D) => {
      const U = new Set(D);
      return U.has(b) ? U.delete(b) : U.add(b), U;
    });
  }, [I, V] = v.useState(null), J = async () => {
    try {
      const U = await G.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      V({ files: U.files, folder: U.folder, preview: U.preview });
    } catch (U) {
      V({ files: [], folder: "", error: U.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const Z = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), Y = URL.createObjectURL(Z), oe = document.createElement("a");
        oe.href = Y, oe.download = `${r.saveName || "crycat"}-cricut.pdf`, oe.click(), setTimeout(() => URL.revokeObjectURL(Y), 4e3);
      } catch (U) {
        V({
          files: [],
          folder: "",
          error: U.message
        });
      }
      return;
    }
    const D = document.createElement("iframe");
    D.setAttribute("aria-hidden", "true"), D.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", D.src = "/api/print.pdf", D.onload = () => {
      var U, Z;
      try {
        (U = D.contentWindow) == null || U.focus(), (Z = D.contentWindow) == null || Z.print();
      } finally {
        window.setTimeout(() => D.remove(), 6e4);
      }
    }, document.body.appendChild(D);
  }, dt = async () => {
    try {
      const b = await G.export(Ln);
      V({ files: b.files, folder: b.folder, preview: b.preview });
    } catch (b) {
      V({ files: [], folder: "", error: b.message });
    }
  }, Fe = () => {
    ee(!0);
  }, In = async (b) => {
    try {
      const D = await G.export(Ln, b);
      V({ files: D.files, folder: D.folder, preview: D.preview });
    } catch (D) {
      V({ files: [], folder: "", error: D.message });
    }
  }, ha = (t == null ? void 0 : t.poly_mm) ?? [], [pt, at] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Gt, zt] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], we = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Gt, gn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : zt, xr = v.useCallback(() => {
    const b = Et.current;
    if (!b) return;
    const D = b.querySelector(".page-box");
    if (!D) return;
    const U = b.querySelector(".canvas-inner"), Z = b.clientWidth, Y = b.clientHeight, oe = (U == null ? void 0 : U.offsetWidth) || D.offsetWidth || 1, se = (U == null ? void 0 : U.offsetHeight) || D.offsetHeight || 1, ze = Math.min(1, Z / oe, Y / se);
    y(ze), E({ x: (Z - oe * ze) / 2, y: (Y - se * ze) / 2 });
  }, []);
  v.useEffect(() => {
    if (Ee <= 0) return;
    const b = window.setTimeout(xr, 60);
    return () => window.clearTimeout(b);
  }, [
    Ee,
    we,
    gn,
    r.viewMode,
    r.hojaGirada,
    k,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    xr
  ]);
  const Pt = n.lienzo === "pagina" ? 0 : pt, Mt = n.lienzo === "pagina" ? 0 : at, dl = ha.length ? "M" + ha.map(([b, D]) => `${b - Pt},${D - Mt}`).join(" L") + " Z" : "", pl = v.useRef(0);
  v.useEffect(() => {
    if (!t) return;
    const b = t.pages || 0;
    b > 0 && b !== pl.current && (pl.current = b, a((D) => ({ ...D, viewMode: b <= 1 ? 1 : b === 2 ? 2 : 4 })), R(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const ga = r.contornoModo ?? "final", $n = r.verBordes && ga !== "ninguno", Io = `${B}-${n.marcas_delimitar ? 1 : 0}-${n.lienzo}-${n.color_formato}-${n.dpi_salida}`;
  v.useEffect(() => {
    if (!$n || !t) return;
    const b = [], D = Math.max(1, t.pages);
    for (let Z = 0; Z < D; Z++)
      for (const Y of [0, 3, 6, 9])
        b.push(G.pageUrl(
          Z,
          Io,
          n.simular_impresion === !0,
          !0,
          Y,
          ga
        ));
    const U = b.map((Z) => {
      const Y = new Image();
      return Y.src = Z, Y;
    });
    return () => U.forEach((Z) => {
      Z.src = "";
    });
  }, [$n, Io, t, ga, n.simular_impresion]);
  const Ht = r.hojaGirada === !0, $o = Ht ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${we / (gn || 1) * 100}%`,
    height: `${gn / (we || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(270deg)"
  } : void 0, rp = (b) => {
    var Z;
    const D = (t == null ? void 0 : t.placements.filter((Y) => Y.page === b)) ?? [], U = ((Z = t == null ? void 0 : t.marcas_cajas_mm) == null ? void 0 : Z[b]) ?? [pt, at, pt + Gt, at + zt];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box fondo-${r.fondo ?? (r.eyeFosforito ? "fosforito" : r.eyeTransparent ? "transparente" : "blanco")}${Ht ? " girada" : ""}`,
        style: Ht ? {
          width: "100%",
          aspectRatio: `${gn} / ${we}`
        } : { width: "100%" },
        onClick: (Y) => {
          Ee > 1 && k === null && !Y.target.closest(".item-box") && R(b);
        },
        "data-testid": `page-${b}`,
        children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: `sheet${Ht ? " girada" : ""}`,
              style: $o,
              onLoad: b === 0 ? xr : void 0,
              src: G.pageUrl(b, Io, n.simular_impresion === !0, $n, F, ga),
              alt: u("Página {i}", { i: b + 1 }),
              draggable: !1
            }
          ),
          r.guidesVisible && dl && /* @__PURE__ */ o.jsxs(
            "svg",
            {
              className: `overlay-svg${Ht ? " girada" : ""}`,
              style: $o,
              viewBox: `0 0 ${we} ${gn}`,
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ o.jsxs(
                  "g",
                  {
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.15, we / 1400),
                    opacity: 0.28,
                    children: [
                      Array.from(
                        { length: Math.floor((pt - Pt + Gt) / 10) + 1 },
                        (Y, oe) => {
                          const se = oe * 10 - (Pt - pt);
                          return se >= pt - Pt - 0.01 && se <= pt - Pt + Gt + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: se,
                              y1: at - Mt,
                              x2: se,
                              y2: at - Mt + zt
                            },
                            `v${oe}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((at - Mt + zt) / 10) + 1 },
                        (Y, oe) => {
                          const se = oe * 10 - (Mt - at);
                          return se >= at - Mt - 0.01 && se <= at - Mt + zt + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: pt - Pt,
                              y1: se,
                              x2: pt - Pt + Gt,
                              y2: se
                            },
                            `h${oe}`
                          ) : null;
                        }
                      )
                    ]
                  }
                ),
                (t == null ? void 0 : t.marcas) && /* @__PURE__ */ o.jsx("g", { children: [
                  ["esquina_flecha", U[0], U[1], !1, !1],
                  ["esquina_sd", U[2], U[1], !0, !1],
                  ["esquina_ii", U[0], U[3], !1, !0],
                  ["esquina_id", U[2], U[3], !0, !0]
                ].map(([Y, oe, se, ze, ce]) => {
                  const ue = t.marcas[Y];
                  if (!ue) return null;
                  const kt = oe - Pt - (ze ? ue[0] : 0), op = se - Mt - (ce ? ue[1] : 0);
                  return /* @__PURE__ */ o.jsx(
                    "image",
                    {
                      href: vt(`/marcas/${Y}.png`),
                      x: kt,
                      y: op,
                      width: ue[0],
                      height: ue[1],
                      preserveAspectRatio: "none"
                    },
                    Y
                  );
                }) }),
                /* @__PURE__ */ o.jsx(
                  "path",
                  {
                    d: dl,
                    fill: "none",
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.6, we / 250),
                    strokeDasharray: `${we / 55} ${we / 85}`,
                    opacity: 0.85
                  }
                ),
                vr
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `capa-piezas${Ht ? " girada" : ""}`,
              style: $o,
              children: D.map((Y) => {
                const oe = e.find((ue) => ue.id === Y.asset_id), se = ($ == null ? void 0 : $.uid) === Y.uid ? $ : null, ze = ((se ? se.x : Y.x) - Pt) / (we || 1) * 100, ce = ((se ? se.y : Y.y) - Mt) / (gn || 1) * 100;
                return /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `item-box ${Y.pinned ? "pinned" : ""} ${(j == null ? void 0 : j.uid) === Y.uid ? "dragging" : ""}${S.includes(Y.asset_id) ? " sel" : ""}`,
                    style: {
                      left: `${ze}%`,
                      top: `${ce}%`,
                      width: `${Y.w / (we || 1) * 100}%`,
                      height: `${Y.h / (gn || 1) * 100}%`
                    },
                    title: (oe == null ? void 0 : oe.name) ?? "",
                    onMouseDown: (ue) => Ao(ue, Y),
                    onContextMenu: (ue) => {
                      ue.preventDefault(), gr(Y.uid);
                    },
                    "data-testid": `item-${Y.uid}`,
                    onClick: (ue) => {
                      ue.stopPropagation(), ue.currentTarget.scrollIntoView({
                        block: "center",
                        inline: "center",
                        behavior: "smooth"
                      }), window.dispatchEvent(new CustomEvent(
                        "crycat:seleccion",
                        { detail: Y.asset_id }
                      )), T == null || T(Y.asset_id, ue.shiftKey ? "uno" : ue.ctrlKey || ue.metaKey ? "lista" : "solo");
                    },
                    children: Y.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
                  },
                  Y.uid
                );
              })
            }
          )
        ]
      },
      b
    );
  }, ap = k !== null ? [k] : Array.from({ length: Ee }, (b, D) => D);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    (Ee > 1 || ((t == null ? void 0 : t.unplaced) ?? 0) > 0) && /* @__PURE__ */ o.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: Ee > 1 ? u("No cabe en una página: {n} páginas", { n: Ee }) : u("No caben todas las copias") }),
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${$n ? "modo-final" : "modo-ninguno"}`,
          "data-tip": u($n ? "Quitar el contorno (solo vista previa)" : "Ver el contorno de corte: la línea más exterior, lo que se corta de verdad"),
          onClick: () => {
            const b = !$n;
            a((D) => ({
              ...D,
              contornoModo: b ? "final" : "ninguno",
              verBordes: b
            })), i({
              contorno_modo: b ? "final" : "ninguno",
              ver_contornos: b
            });
          },
          children: [
            /* @__PURE__ */ o.jsx(dr, { size: 16 }),
            " ",
            u("Contorno")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          className: r.guidesVisible ? "primary" : "",
          "data-tip": u("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((b) => ({ ...b, guidesVisible: !b.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(ds, { size: 16 }),
            " ",
            u("Marcas")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-ojo",
          "data-tip": u("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
          onClick: () => a((b) => {
            const D = [
              "blanco",
              "transparente",
              "fosforito",
              "rosa",
              "negro"
            ], U = b.fondo ?? (b.eyeFosforito ? "fosforito" : b.eyeTransparent ? "transparente" : "blanco"), Z = D[(D.indexOf(U) + 1) % D.length];
            return {
              ...b,
              fondo: Z,
              eyeTransparent: Z === "transparente",
              eyeFosforito: Z === "fosforito"
            };
          }),
          children: [
            r.eyeFosforito ? /* @__PURE__ */ o.jsx(Vf, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ o.jsx(Sc, { size: 16 }) : /* @__PURE__ */ o.jsx(Sc, { size: 16 }),
            r.eyeFosforito ? u("Fosforito") : r.eyeTransparent ? u("Transparente") : u("Blanco")
          ]
        }
      ),
      (Ee > 1 && k === null || k !== null) && /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        Ee > 1 && k === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((b) => ({ ...b, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((b) => ({ ...b, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((b) => ({ ...b, viewMode: 4 })), children: "4" })
        ] }),
        k !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => R(null), title: u("Volver a la cuadrícula (Esc)"), children: u(" Ver todo") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Ht ? "primary" : "",
          "data-tip": u("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const b = !window.__crycatAncho;
            window.__crycatAncho = b, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: b }
            ));
          },
          children: [
            /* @__PURE__ */ o.jsx(Bf, { size: 16 }),
            u(Ht ? "Vertical" : "Horizontal")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-flotantes", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "vf-izq", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": u("Deshacer (Ctrl+Z)"),
            onClick: () => m(),
            disabled: !_,
            children: /* @__PURE__ */ o.jsx(us, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": u("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => x(),
            disabled: !g,
            children: /* @__PURE__ */ o.jsx(Hf, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "vf-centro", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "btn-optimizar-flotante",
          "data-testid": "btn-recalcular",
          "data-tip": u("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(fa ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "estrella", children: "✦" }),
            u("Optimizar"),
            /* @__PURE__ */ o.jsx("span", { className: "estrella", children: "✦" })
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": u("Acercar (+)"),
            onClick: () => y((b) => Math.min(12, b * 1.08)),
            children: /* @__PURE__ */ o.jsx(Wf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": u("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: xr,
            children: /* @__PURE__ */ o.jsx(Gf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": u("Alejar (−)"),
            onClick: () => y((b) => Math.max(0.05, b / 1.08)),
            children: /* @__PURE__ */ o.jsx(Qf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(f * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: Q || Se || G.previewUrlSinBordes(
              d.id,
              d.rev ?? 0
            ),
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: d && X.filter((b) => !b.principal).map((b, D) => {
          const [U, Z, Y, oe] = b.bbox, se = d.w_px || 1, ze = d.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${ye.has(b.id) ? " sel" : ""}`,
              "data-testid": `blob-${D}`,
              title: u("Trozo de {px} px — clic para {accion}", {
                px: b.area_px,
                accion: ye.has(b.id) ? u("conservar") : u("quitar")
              }),
              style: {
                left: `${U / se * 100}%`,
                top: `${Z / ze * 100}%`,
                width: `${(Y - U) / se * 100}%`,
                height: `${(oe - Z) / ze * 100}%`
              },
              onClick: () => z(b.id)
            },
            b.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ o.jsxs("span", { className: "row", style: { gap: 6, alignItems: "center" }, children: [
            /* @__PURE__ */ o.jsx("span", { className: "hint", children: u("Borde para unir") }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-menos",
                onClick: () => L((b) => Math.max(0.5, Math.round((b - 0.5) * 2) / 2)),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": "union-mm", children: [
              te,
              " mm"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-mas",
                onClick: () => L((b) => Math.min(20, Math.round((b + 0.5) * 2) / 2)),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-ver-quitados",
              title: u("Ver cómo queda SIN los trozos marcados (solo vista previa)"),
              className: Ge === "quitar" ? "primary" : "",
              onClick: async () => {
                if (d) {
                  if (Ge === "quitar") {
                    jt("normal"), ke("");
                    return;
                  }
                  try {
                    const b = await G.contornoPreview(
                      d.id,
                      { quitar: Array.from(ye) }
                    );
                    ke(b.png), jt("quitar");
                  } catch {
                  }
                }
              },
              children: u("Ver sin marcados")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-ver-unido",
              title: u("Ver cómo queda al UNIR todo con el borde actual (solo vista previa)"),
              className: Ge === "unir" ? "primary" : "",
              onClick: async () => {
                if (d) {
                  if (Ge === "unir") {
                    jt("normal"), ke("");
                    return;
                  }
                  try {
                    const b = await G.contornoPreview(
                      d.id,
                      { unir: te }
                    );
                    ke(b.png), jt("unir");
                  } catch {
                  }
                }
              },
              children: u("Ver unido")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "primary",
              "data-testid": "btn-unir-contorno",
              title: u("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: te }),
              onClick: async () => {
                d && (await G.patchAsset(d.id, {
                  offset_mm: te,
                  offset_modo: "unir_curvo"
                }), await (h == null ? void 0 : h()));
              },
              children: u("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: yr,
              children: u(
                "Quitar marcados ({n})",
                { n: ye.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: Et,
        className: `canvas ${j ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: Rn,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${C.x}px, ${C.y}px) scale(${f})` },
            children: [
              Ee === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: u("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${k !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: ap.map(rp)
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
          onClick: yr,
          children: u("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => h == null ? void 0 : h(),
          children: u("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: hn,
          value: r.saveName,
          onChange: (b) => a((D) => ({ ...D, saveName: b.target.value }))
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: u("Abrir la carpeta de guardado en el explorador"),
            "aria-label": u("Abrir carpeta de guardado"),
            onClick: () => G.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(ia, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: dt, children: u("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: Fe, children: u("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: J,
            disabled: Ee === 0,
            children: u("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Jd,
      {
        open: H,
        initial: n.carpeta_export,
        onClose: () => ee(!1),
        onPick: In
      }
    ),
    /* @__PURE__ */ o.jsx(
      sh,
      {
        open: !!I,
        files: (I == null ? void 0 : I.files) ?? [],
        folder: (I == null ? void 0 : I.folder) ?? "",
        preview: I == null ? void 0 : I.preview,
        error: I == null ? void 0 : I.error,
        onOpenFolder: (b) => void G.fsOpen(b).catch(() => {
        }),
        onClose: () => V(null)
      }
    )
  ] });
}
function ch({ settings: e, saveSettings: t }) {
  const n = rt(), r = e.usar_minis, a = e.modo === "experto", i = {
    90: "libre",
    libre: "no",
    no: "90"
  }, s = {
    90: "90°",
    libre: n("libre"),
    no: n("fijo")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "acciones-panel", children: /* @__PURE__ */ o.jsxs("div", { className: "acciones-rapidas", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "fila", children: [
      /* @__PURE__ */ o.jsxs(
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
            /* @__PURE__ */ o.jsx(Pn, { size: 16 }),
            " ",
            n("Minis")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `chip${(e.paginas_modo ?? "una") === "una" ? " on" : ""}`,
          "data-testid": "chip-paginas",
          "data-tip": n("Solo 1 página (por defecto): nunca crea una segunda hoja; si no entra todo, avisa. Varias páginas: reparte como hasta ahora."),
          onClick: () => t({
            paginas_modo: (e.paginas_modo ?? "una") === "una" ? "varias" : "una"
          }),
          children: (e.paginas_modo ?? "una") === "una" ? n("Solo 1 página") : n("Varias páginas")
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `chip${e.auto_recalcular ? " on" : ""}`,
          "data-testid": "chip-auto",
          "data-tip": n("Recalcular automáticamente con cada cambio"),
          onClick: () => t({ auto_recalcular: !e.auto_recalcular }),
          children: [
            /* @__PURE__ */ o.jsx(sa, { size: 16 }),
            " ",
            n("Auto optimizar")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "fila", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `chip${a ? " on" : ""}`,
          "data-testid": "chip-modo",
          "data-tip": n("Modo básico (lo esencial) o experto (todos los menús)"),
          onClick: () => t({ modo: a ? "rapido" : "experto" }),
          children: n(a ? "Modo experto" : "Modo básico")
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "chip-rotacion",
          "data-tip": n("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo"),
          onClick: () => t({
            rotacion: i[e.rotacion] ?? "90"
          }),
          children: [
            /* @__PURE__ */ o.jsx(Yd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] })
  ] }) });
}
const ui = [
  {
    clave: "silueta",
    nombre: "Silueta",
    desc: "Forma real, cualquier ángulo",
    Icono: nh,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: rh,
    forma: "rectangulos"
  }
];
function uh({ settings: e, saveSettings: t }) {
  var h;
  const n = rt(), [r, a] = v.useState(
    {}
  ), [i, s] = v.useState("");
  v.useEffect(() => {
    G.modos().then((m) => a(m.modos ?? {})).catch(() => {
    });
  }, []);
  const c = e.modo_forma ?? "siluetas", l = ((h = ui.find((m) => m.forma === c)) == null ? void 0 : h.clave) ?? "silueta", d = async (m) => {
    var _;
    const x = r[m];
    x && (await t(x), s(n("Modo «{n}» aplicado", {
      n: n(((_ = ui.find((g) => g.clave === m)) == null ? void 0 : _.nombre) ?? m)
    })));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "modos-seg",
        role: "tablist",
        title: n("Modo de empaquetado: elige UNO"),
        children: ui.map((m) => /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": l === m.clave,
            "data-testid": `modo-${m.clave}`,
            className: `modo-btn${l === m.clave ? " on" : ""}`,
            title: n("Modo {n}: {d}", { n: n(m.nombre), d: n(m.desc) }),
            onClick: () => d(m.clave),
            children: [
              /* @__PURE__ */ o.jsx(m.Icono, { size: 24 }),
              /* @__PURE__ */ o.jsxs("span", { className: "modo-txt", children: [
                /* @__PURE__ */ o.jsx("b", { children: n(m.nombre) }),
                /* @__PURE__ */ o.jsx("i", { children: n(m.desc) })
              ] }),
              l === m.clave && /* @__PURE__ */ o.jsx("span", { className: "modo-check", children: "✓" })
            ]
          },
          m.clave
        ))
      }
    ),
    i && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modos-aviso", children: i })
  ] });
}
function dh({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: i, modo: s = "mm" }) {
  const c = s === "mm" ? t : t / 100 * n, l = s === "mm" ? n ? t / n * 100 : 0 : t;
  return /* @__PURE__ */ o.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: s === "mm" ? 200 : 99,
        step: s === "mm" ? 1 : 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(s === "mm" ? t : Math.round(l * 10) / 10),
        title: i("Tamaño del mini"),
        onChange: (d) => {
          const h = Number(d.target.value);
          Number.isFinite(h) && h > 0 && r(h);
        }
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "hint", children: s === "mm" ? "mm" : "%" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        disabled: !0,
        className: "suave",
        "data-testid": `mini-tamano-mm-${e}`,
        value: s === "mm" ? n ? l.toFixed(1) : "" : c.toFixed(1),
        title: i("Equivale a este tamaño en la otra unidad")
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "hint suave", children: s === "mm" ? "%" : "mm" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "icon-btn danger",
        title: i("Quitar tamaño"),
        "data-testid": `mini-tamano-quitar-${e}`,
        onClick: a,
        children: "✕"
      }
    )
  ] });
}
function ph({ valor: e, onValor: t, min: n, max: r, step: a, testid: i, title: s }) {
  const [c, l] = v.useState(String(e)), d = v.useRef(!1);
  return v.useEffect(() => {
    d.current || l(String(e));
  }, [e]), /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "number",
      min: n,
      max: r,
      step: a,
      "data-testid": i,
      title: s,
      value: c,
      onFocus: () => {
        d.current = !0;
      },
      onBlur: () => {
        d.current = !1, l(String(e));
      },
      onChange: (h) => {
        l(h.target.value);
        const m = Number(h.target.value);
        h.target.value !== "" && Number.isFinite(m) && t(m);
      }
    }
  );
}
const mh = {
  borde: ["offset", "contorno", "border", "margen"],
  offset: ["borde", "contorno"],
  tamano: ["escala", "size", "medida"],
  escala: ["tamano", "size"],
  separacion: ["espacio", "gap", "distancia"],
  espacio: ["separacion", "gap"],
  copias: ["copies", "cantidad", "numero"],
  hoja: ["pagina", "page", "papel"],
  pagina: ["hoja", "page"],
  maquina: ["cricut", "machine", "cortadora"],
  color: ["colour", "tono"],
  idioma: ["language", "lengua"],
  minis: ["mini", "relleno"],
  rotacion: ["giro", "angulo", "rotate"],
  ajustes: ["configuracion", "settings", "opciones"]
};
function Ra(e) {
  return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function fh(e, t) {
  const n = e.length, r = t.length;
  if (!n) return r;
  if (!r) return n;
  const a = Array.from({ length: n + 1 }, () => [0]);
  for (let i = 0; i <= n; i += 1) a[i][0] = i;
  for (let i = 0; i <= r; i += 1) a[0][i] = i;
  for (let i = 1; i <= n; i += 1)
    for (let s = 1; s <= r; s += 1)
      a[i][s] = Math.min(
        a[i - 1][s] + 1,
        a[i][s - 1] + 1,
        a[i - 1][s - 1] + (e[i - 1] === t[s - 1] ? 0 : 1)
      );
  return a[n][r];
}
function bc(e, t) {
  if (!e) return 0;
  if (t.includes(e)) return 3;
  const n = t.split(/[^a-z0-9]+/).filter(Boolean);
  for (const r of n) {
    if (r.startsWith(e)) return 2;
    if (e.length >= 4 && fh(r, e) <= 2) return 1;
  }
  for (const [r, a] of Object.entries(mh))
    if (r.includes(e) || e.includes(r)) {
      for (const i of a) if (t.includes(i)) return 1;
    }
  return 0;
}
function Tt({ id: e, title: t, open: n, toggle: r, children: a, icon: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      i && /* @__PURE__ */ o.jsx("span", { className: "sect-icono", children: i }),
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Ec(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const hh = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, gh = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function vh({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = rt(), [a, i] = v.useState(!0), [s, c] = v.useState({
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
  }), [l, d] = v.useState(!1), h = (w) => s[w], [m, x] = v.useState(""), _ = [
    ["general", /* @__PURE__ */ o.jsx(qr, { size: 15 }), r("General"), !0],
    ["minis", /* @__PURE__ */ o.jsx(Pn, { size: 15 }), r("Minis"), !0],
    ["optimizacion", /* @__PURE__ */ o.jsx(sa, { size: 15 }), r("Optim."), !1],
    ["imagen", /* @__PURE__ */ o.jsx(la, { size: 15 }), r("Imagen"), !1],
    ["offset", /* @__PURE__ */ o.jsx(dr, { size: 15 }), r("Borde"), !0],
    ["corte", /* @__PURE__ */ o.jsx(_c, { size: 15 }), r("Corte"), !1],
    ["visualizacion", /* @__PURE__ */ o.jsx(ds, { size: 15 }), r("Vista"), !0],
    ["historial", /* @__PURE__ */ o.jsx(us, { size: 15 }), r("Historial"), !1],
    ["extras", /* @__PURE__ */ o.jsx(cs, { size: 15 }), r("Extras"), !0]
  ], g = (w, $ = !1, O = !1) => {
    c((H) => {
      const ee = { ...H };
      return Object.keys(ee).forEach((te) => {
        ee[te] = te === w ? $ ? !0 : !H[te] : !1;
      }), ee;
    }), O && window.setTimeout(() => {
      var H;
      (H = document.querySelector(`[data-testid="sect-${w}"]`)) == null || H.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 130);
  }, [S, T] = v.useState([]);
  v.useEffect(() => {
    const w = Ra(m.trim());
    if (w.length < 2) {
      T([]);
      return;
    }
    const $ = document.querySelector(".settings-panel"), O = [];
    for (const H of Array.from(($ == null ? void 0 : $.querySelectorAll(".sect")) ?? [])) {
      const ee = (H.getAttribute("data-testid") || "").replace("sect-", "");
      Array.from(H.querySelectorAll(".ctl")).some((L) => bc(w, Ra(L.textContent || "")) > 0) && O.push(ee);
    }
    T(O);
  }, [m]);
  const u = () => {
    const w = Ra(m.trim());
    if (!w) return;
    const $ = document.querySelector(".settings-panel");
    for (const O of Array.from(($ == null ? void 0 : $.querySelectorAll(".ctl")) ?? [])) {
      if (bc(w, Ra(O.textContent || "")) <= 0) continue;
      const H = O.closest(".sect"), ee = ((H == null ? void 0 : H.getAttribute("data-testid")) || "").replace("sect-", "");
      ee && g(ee, !0);
      const te = O.querySelector("input, select, textarea"), L = te == null ? void 0 : te.getAttribute("data-testid");
      L && window.setTimeout(() => {
        const F = document.querySelector(`[data-testid="${L}"]`);
        F == null || F.scrollIntoView({ block: "center", behavior: "smooth" }), F == null || F.classList.add("resalta"), window.setTimeout(() => F == null ? void 0 : F.classList.remove("resalta"), 2400);
      }, 150);
      return;
    }
  }, p = v.useMemo(() => {
    const w = (n ?? []).filter((O) => O.mini_enabled);
    return (w.length ? w : n ?? []).slice().sort((O, H) => Math.min(H.w_mm, H.h_mm) - Math.min(O.w_mm, O.h_mm))[0] ?? null;
  }, [n]), f = p ? Math.min(p.w_mm, p.h_mm) : 0, y = e.modo === "experto", C = ({ children: w }) => y ? /* @__PURE__ */ o.jsx(o.Fragment, { children: w }) : null, E = (w) => c(($) => ({ ...$, [w]: !$[w] })), k = (w) => t(w), R = v.useRef(null), B = ({ titulo: w, children: $ }) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "ctl-grupo", children: r(w) }),
    $
  ] }), N = (w, $, O, H, ee = 1, te = "", L, F) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...F ? { "data-tip": r(F) } : {}, children: r(w) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        ph,
        {
          valor: Number(e[$]) || 0,
          min: O,
          max: H,
          step: ee,
          testid: `set-${$}`,
          title: F ? r(F) : void 0,
          onValor: (W) => k({ [$]: W })
        }
      ),
      te && /* @__PURE__ */ o.jsx("span", { className: "hint", children: te }),
      L
    ] })
  ] }), j = (w, $, O, H, ee) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...ee ? { "data-tip": r(ee) } : {}, children: r(w) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${$}`,
        value: String(e[$]),
        onChange: (te) => k({ [$]: te.target.value }),
        children: O.map(([te, L]) => /* @__PURE__ */ o.jsx("option", { value: te, children: r(L) }, te))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ o.jsx(uh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsx(ch, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsxs("div", { className: "tabs-ajustes", "data-testid": "rail-ajustes", children: [
      /* @__PURE__ */ o.jsx("div", { className: "tabs-lista", children: _.filter(([, , , w]) => y || w).map(([w, $, O]) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": `rail-${w}`,
          title: O,
          className: `${s[w] ? "on" : ""}${S.includes(w) ? " coincide" : ""}`,
          onClick: () => g(w, !0, !0),
          children: [
            $,
            /* @__PURE__ */ o.jsx("span", { children: O })
          ]
        },
        w
      )) }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: `busca-ajustes${m ? " con-texto" : ""}`,
          "data-testid": "busca-ajustes",
          value: m,
          placeholder: r("Buscar…"),
          title: r("Busca parámetros (admite erratas y sinónimos): p. ej. «borde», «separacion», «tamano»"),
          onChange: (w) => x(w.target.value),
          onKeyDown: (w) => {
            w.key === "Enter" && u();
          }
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !y && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "general",
          title: r("General"),
          open: h("general"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(qr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(B, { titulo: "Colocación", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "ctl-fila", children: [
                N(
                  "Espacio entre elementos",
                  "espacio_mm",
                  -10,
                  20,
                  0.5,
                  "mm",
                  void 0,
                  "Separación entre piezas. Puede ser NEGATIVA (se solapan un poco): útil para apretar al máximo. Una línea artificial las separa igualmente al cortar."
                ),
                N(
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
              j("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              N(
                "Separación entre elementos para el recorte",
                "separacion_px",
                1,
                12,
                1,
                "px",
                void 0,
                "Píxeles que se separan las piezas AL RENDERIZAR (aunque se toquen o solapen): la Cricut las detecta como elementos distintos y las corta por separado. 3 px va bien a 300 ppp."
              )
            ] }),
            /* @__PURE__ */ o.jsxs(B, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ o.jsx(C, { children: N("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (w) => {
                      const $ = w.target.value, O = Lf[$];
                      k(O ? { pagina: $, pagina_w: O[0], pagina_h: O[1] } : { pagina: $ });
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
              /* @__PURE__ */ o.jsx(C, { children: e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (w) => k({ pagina_w: Number(w.target.value) })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (w) => k({ pagina_h: Number(w.target.value) })
                    }
                  )
                ] })
              ] }) }),
              j("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ])
            ] }),
            /* @__PURE__ */ o.jsx(B, { titulo: "Referencia", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (w) => k({ marcas_delimitar: w.target.checked })
                  }
                ),
                r("Marcas para delimitar")
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Añade dos cuadrados blancos de 2 mm (arriba-izquierda y abajo-derecha) en los límites del área. Sirven de referencia para que la colocación quede EXACTA siempre en Cricut Design Space. No cuentan para la optimización.") })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "minis",
          title: r("Minis"),
          open: h("minis"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(Pn, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ o.jsxs(B, { titulo: "Tamaños", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => k({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => k({ mini_usar_lista: !1 }),
                    children: r("Automático (mínimo + %)")
                  }
                )
              ] }),
              !e.mini_usar_lista && N(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas)."
              ),
              !e.mini_usar_lista && N(
                "Tamaño máximo del mini (% del original)",
                "mini_max_rescale",
                10,
                100,
                5,
                "%",
                void 0,
                "Tope de tamaño de los minis. Siempre son algo más pequeños que el original (99 % como máximo)."
              ),
              e.mini_usar_lista && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaños deseados") }),
                /* @__PURE__ */ o.jsxs("div", { className: "seg", style: { maxWidth: 260 }, children: [
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-mm",
                      className: (e.mini_lista_modo ?? "mm") === "mm" ? "on" : "",
                      onClick: () => k({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => k({ mini_lista_modo: "pct" }),
                      children: r("En % del original")
                    }
                  )
                ] }),
                (e.mini_lista_modo ?? "mm") === "mm" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                  /* @__PURE__ */ o.jsx("label", { children: r("Medir el tamaño por") }),
                  /* @__PURE__ */ o.jsxs(
                    "select",
                    {
                      "data-testid": "mini-lista-medida",
                      value: e.mini_lista_medida ?? "circulo",
                      onChange: (w) => k({ mini_lista_medida: w.target.value }),
                      children: [
                        /* @__PURE__ */ o.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") }),
                        /* @__PURE__ */ o.jsx("option", { value: "menor", children: r("Lado menor") }),
                        /* @__PURE__ */ o.jsx("option", { value: "mayor", children: r("Lado mayor") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((w, $) => /* @__PURE__ */ o.jsx(
                    dh,
                    {
                      i: $,
                      valor: w,
                      refBase: f,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (O) => {
                        const H = [...e.mini_tamanos_lista ?? []];
                        H[$] = O, k({ mini_tamanos_lista: H });
                      },
                      onQuitar: () => k({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (O, H) => H !== $
                        )
                      })
                    },
                    $
                  )),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => k({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: r("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: p ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: p.name, mm: f.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(B, { titulo: "Borde de los minis", children: j("Borde de los minis", "mini_borde_modo", [
              ["proporcional", "Proporcional (se reduce con el mini)"],
              ["igual", "Mantener el mismo borde (mm del original)"],
              ["sin", "Sin borde"]
            ], void 0, "Qué hacer con el borde de cada mini al reducirlo") }),
            /* @__PURE__ */ o.jsxs(B, { titulo: "Modo rata", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-rata-activo",
                      checked: e.rata_activo === !0,
                      onChange: (w) => k({ rata_activo: w.target.checked })
                    }
                  ),
                  r("Modo rata")
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Coloca copias EXTRA de los elementos marcados con la rata: solo para IMPRIMIR (no se guardan en el PNG normal), en los márgenes de la hoja, separadas de las piezas y de las marcas. El tamaño máximo lo pone el hueco libre.") })
              ] }),
              e.rata_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                N(
                  "Separación de las piezas",
                  "rata_margen_mm",
                  0,
                  30,
                  0.5,
                  "mm",
                  void 0,
                  "Distancia mínima entre las ratas y las piezas colocadas."
                ),
                N(
                  "Distancia a las marcas",
                  "rata_marcas_mm",
                  0,
                  30,
                  0.5,
                  "mm",
                  void 0,
                  "Distancia mínima entre las ratas y las marcas (las negras de Cricut y los cuadrados guía): no se pone nada más cerca."
                ),
                N(
                  "Tamaño mínimo",
                  "rata_min_mm",
                  2,
                  100,
                  0.5,
                  "mm",
                  void 0,
                  "Tamaño mínimo de las ratas; los tamaños mayores los delimita el hueco."
                ),
                j("Borde de las ratas", "rata_borde_modo", [
                  ["sin", "Sin borde"],
                  ["proporcional", "Proporcional (se reduce con la rata)"],
                  ["igual", "Mantener el mismo borde (mm del original)"]
                ], void 0, "Borde de las copias del modo rata (independiente del de los minis)")
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(C, { children: /* @__PURE__ */ o.jsxs(B, { titulo: "Avanzado", children: [
              j("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              j("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ])
            ] }) })
          ]
        }
      ),
      y && /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: h("optimizacion"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(sa, { size: 15 }),
          children: [
            j("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            j("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ o.jsxs(C, { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (w) => k({ opt_tiempo_auto: w.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: hh[e.opt_metodo] ?? 8,
                  m: r(gh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : N("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      y && /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: h("imagen"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(la, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(B, { titulo: "Impresión", children: [
              N(
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
              j("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ o.jsxs(C, { children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (w) => k({ simular_impresion: w.target.checked })
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
                        onChange: (w) => k({ sim_cmyk: w.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  N("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  N("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  N("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              j("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(B, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (w) => k({ chequear_lineas: w.target.checked })
                  }
                ),
                r("Comprobación de líneas anómalas")
              ] }) }),
              N(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              j("Lienzo del archivo final", "lienzo", [
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
        Tt,
        {
          id: "offset",
          title: r("Borde"),
          open: h("offset"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(dr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (w) => k({ offset_activo: w.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              N(
                "Grosor del borde",
                "offset_mm",
                0.1,
                20,
                0.1,
                "mm",
                void 0,
                "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar."
              ),
              j("Tipo de borde", "offset_modo", [
                ["extender", "Extender el color del borde (suave)"],
                ["blanco", "Blanco"],
                ["color", "Color personalizado"],
                ["unir_recto", "Unir trozos: envolvente (borde recto)"],
                ["unir_curvo", "Unir trozos: mínimo (borde redondeado)"]
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
                      onChange: (w) => k({ offset_color: w.target.value })
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
      y && /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: h("corte"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(_c, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: Ec(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: kc[e.maquina] ?? "Cricut Maker 3" }
              ),
              [kc[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            N("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            N("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            N("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            N("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      y && /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: h("historial"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(us, { size: 15 }),
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
                  onChange: (w) => k({ historial: w.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              N("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (w) => k({ hist_tamano: w.target.checked })
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
                    onChange: (w) => k({ hist_copias: w.target.checked })
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
                    onChange: (w) => k({ hist_borde: w.target.checked })
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
                    onChange: (w) => k({ hist_minis: w.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: h("visualizacion"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(ds, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: ss.map((w) => /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === w.key ? "active" : ""}`,
                  "data-testid": `tema-${w.key}`,
                  onClick: () => t({ tema: w.key }),
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: w.colors.accent } }),
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: w.colors.accent2 } }),
                    w.label
                  ]
                },
                w.key
              )) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (w) => t({ ver_guias: w.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx("img", { src: G.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var w;
                  return (w = R.current) == null ? void 0 : w.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ref: R,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (w) => {
                      var O;
                      const $ = (O = w.target.files) == null ? void 0 : O[0];
                      $ && G.setIcon($).then(() => {
                        window.location.reload();
                      }), w.target.value = "";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Tt,
        {
          id: "extras",
          title: r("Extras"),
          open: h("extras"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(cs, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx(B, { titulo: "Sonido", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => k({ mute: !e.mute }),
                    children: e.mute ? r("Silenciado") : r("Con sonido")
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: 1,
                    step: 0.05,
                    "data-testid": "set-volumen",
                    value: e.volumen ?? 0.5,
                    onChange: (w) => k({ volumen: Number(w.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsxs(B, { titulo: "Pikmin", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (w) => k({ pikmin_activo: w.target.checked })
                  }
                ),
                r("Mostrar Pikmin de vez en cuando")
              ] }) }),
              N("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (w) => k({ pikmin_sonido: w.target.checked })
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
                    onChange: (w) => k({ pikmin_sonido_morir: w.target.checked })
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
                    onChange: (w) => t({ comprobar_versiones: w.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: Ec(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Jd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (w) => t({ carpeta_export: w })
      }
    )
  ] });
}
function yh({ ver: e, onCerrar: t }) {
  const n = rt(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", i = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = v.useRef((e == null ? void 0 : e.actual) ?? ""), [c, l] = v.useState(!1), d = a === "error", h = a === "reiniciando";
  return v.useEffect(() => {
    if (!h) return;
    l(!0);
    let m = !0;
    const x = window.setInterval(async () => {
      try {
        const _ = await G.version();
        if (!m) return;
        _.actual && s.current && _.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      m = !1, window.clearInterval(x);
    };
  }, [h]), /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ o.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ o.jsx("div", { className: `dialogo-icono${d ? " error" : ""}`, children: d ? "!" : h ? /* @__PURE__ */ o.jsx(Jf, { size: 26 }) : /* @__PURE__ */ o.jsx(Xd, { size: 26 }) }),
    /* @__PURE__ */ o.jsx("h3", { children: n(d ? "No se pudo actualizar" : h ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
    !d && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "progreso-act", "data-testid": "progreso-actualizacion", children: /* @__PURE__ */ o.jsx(
        "div",
        {
          className: i == null ? "indeterminado" : "",
          style: { width: i == null ? "100%" : `${Math.max(4, i)}%` }
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "fase", "data-testid": "fase-actualizacion", children: [
        n((r == null ? void 0 : r.mensaje) || "Preparando la actualización…"),
        i != null && !h ? ` · ${i}%` : ""
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: n("Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.") }),
      c && /* @__PURE__ */ o.jsx("div", { className: "fase suave", "data-testid": "recarga-aviso", children: n("La página se recargará sola cuando el motor nuevo esté listo…") })
    ] }),
    d && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: (r == null ? void 0 : r.mensaje) || n("Error desconocido") }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "cerrar-actualizacion", onClick: t, children: n("Cerrar") })
    ] })
  ] }) });
}
function di(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function xh({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: i = 0.5,
  mute: s = !1,
  onVolumen: c,
  onMute: l,
  onIdioma: d,
  onEasterEgg: h,
  onAyuda: m,
  onReportar: x,
  modoRata: _ = !1
}) {
  var _e, Ge, jt;
  const g = rt(), S = ul(), [T, u] = v.useState([]), [p, f] = v.useState(0), [y, C] = v.useState(null), [E, k] = v.useState(!1), [R, B] = v.useState(""), [N, j] = v.useState(!1), w = v.useRef(!1), $ = v.useRef([]);
  v.useEffect(() => {
    fetch("/api/funmsgs").then((Q) => Q.ok ? Q.json() : { msgs: [] }).then((Q) => u(Q.msgs ?? [])).catch(() => {
    });
  }, []), v.useEffect(() => {
    let Q = !0;
    return G.version().then((ke) => {
      Q && (C(ke), !ke.comprobado && !w.current && (w.current = !0, G.checkVersion().then((ye) => Q && C(ye)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      Q = !1;
    };
  }, []);
  const O = ((_e = y == null ? void 0 : y.actualizacion) == null ? void 0 : _e.estado) === "descargando" || ((Ge = y == null ? void 0 : y.actualizacion) == null ? void 0 : Ge.estado) === "instalando" || ((jt = y == null ? void 0 : y.actualizacion) == null ? void 0 : jt.estado) === "reiniciando";
  v.useEffect(() => {
    if (!O) return;
    const Q = setInterval(() => {
      G.version().then(C).catch(() => {
      });
    }, 700);
    return () => clearInterval(Q);
  }, [O]);
  const H = a || !!(e && !e.done), ee = v.useMemo(() => T.length ? T : [
    g("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], [T, g]);
  v.useEffect(() => {
    if (!H) return;
    const Q = ee[p % ee.length] ?? "", ke = Math.max(2e3, Math.min(3e3, 1500 + Q.length * 30)), ye = setTimeout(() => f((Ae) => Ae + 1), ke);
    return () => clearTimeout(ye);
  }, [H, p, ee]);
  const te = v.useMemo(() => {
    if (R) return R;
    if (O) {
      const Q = y == null ? void 0 : y.actualizacion;
      if ((Q == null ? void 0 : Q.estado) === "instalando") return g("Instalando y reiniciando…");
      const ke = (Q == null ? void 0 : Q.progreso) != null ? Math.round(Q.progreso) : null;
      return ke != null ? g("Descargando… {p}%", { p: ke }) : (Q == null ? void 0 : Q.mensaje) || g("Descargando actualización…");
    }
    return H ? ee[p % ee.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? g("Listo") : g("Listo para empezar");
  }, [R, O, H, e, ee, p, n, g, y]), L = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), F = H && !e, W = v.useMemo(() => {
    const Q = e == null ? void 0 : e.eta_s;
    return !H || Q === void 0 || Q === null || Q <= 0.5 ? "" : (e == null || e.tope_s, g(" · ~{x} restante", { x: di(Q) }));
  }, [e == null ? void 0 : e.eta_s, H, g]), A = v.useMemo(() => !r || !r.segundos ? "" : di(r.segundos), [r]), P = async () => {
    k(!0), B("");
    try {
      const Q = await G.checkVersion();
      C(Q), Q.error ? B(g("Sin conexión")) : Q.hay_nueva || B(g("Estás en la última versión"));
    } catch {
      B(g("Sin conexión"));
    } finally {
      k(!1);
    }
  }, X = async () => {
    B("");
    try {
      const Q = await G.updateVersion();
      Q.ok ? j(!0) : Q.modo === "dev" && Q.url ? (B(g("Modo desarrollo: se actualiza con git")), await G.openReleases().catch(() => {
      })) : B(Q.mensaje || g("No se pudo actualizar")), G.version().then(C).catch(() => {
      });
    } catch {
      B(g("No se pudo actualizar"));
    }
  }, Se = !!(y != null && y.hay_nueva && !H && !O) ? g("Nueva versión {v} disponible", { v: (y == null ? void 0 : y.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    N && /* @__PURE__ */ o.jsx(
      yh,
      {
        ver: y,
        onCerrar: () => j(!1)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: _ ? vt("/cryrat.png") : G.iconUrl(),
            alt: _ ? "CryRat" : "CryCat",
            "data-testid": "brand-icon",
            title: _ ? "CryRat" : g("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const Q = Date.now();
              $.current = [...$.current, Q].filter((ke) => Q - ke < 2500), $.current.length >= 5 && ($.current = [], B(g("¡Fiesta Pikmin!")), window.setTimeout(() => B(""), 4e3), h == null || h());
            }
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "nombre", children: _ ? "CryRat" : "CryCat" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !H && (() => {
          const Q = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), ke = n.placed || 1, ye = Math.min(80, Math.max(
            30,
            48 + 22 * Q - Math.min(18, ke * 0.08)
          )), Ae = n.efficiency * 100, Et = Ae >= ye ? "buena" : Ae >= ye * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ o.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": g("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.placed }),
              /* @__PURE__ */ o.jsx("span", { children: g("imágenes") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": g("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.pages }),
              /* @__PURE__ */ o.jsx("span", { children: n.pages > 1 ? g("páginas") : g("página") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": g("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.minis }),
              /* @__PURE__ */ o.jsx("span", { children: g("minis") })
            ] }),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${Et}`,
                "data-testid": "eficiencia-card",
                "data-nivel": Et,
                "data-tip": g("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: ke, e: Math.round(ye) }),
                children: [
                  /* @__PURE__ */ o.jsxs("b", { children: [
                    Math.round(Ae),
                    "%"
                  ] }),
                  /* @__PURE__ */ o.jsx("span", { children: g("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !H) && /* @__PURE__ */ o.jsx("span", { className: "msg", children: te }),
        H && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `progress${F ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, L)}%` } })
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? g("Tiempo máximo de este cálculo: {y}", { y: di(e.tope_s) }) : void 0,
              children: [
                L,
                "%",
                W
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: vt(_ ? "/cryrat.gif" : "/piensa.gif"),
              alt: "",
              title: g("Pensando…"),
              onError: (Q) => {
                Q.currentTarget.style.display = "none";
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
            "data-tip": g("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
            onClick: () => m == null ? void 0 : m(),
            children: [
              /* @__PURE__ */ o.jsx(eh, { size: 15 }),
              " ",
              g("Cómo usar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "app-info reportar",
            "data-testid": "btn-reportar",
            "data-tip": g("Reportar un bug: abre un issue en GitHub ya rellenado"),
            onClick: () => x == null ? void 0 : x(),
            children: [
              /* @__PURE__ */ o.jsx(Kd, { size: 15 }),
              " ",
              g("Reportar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
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
              /* @__PURE__ */ o.jsx(th, { size: 15 }),
              " ",
              g("Apoyar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-repo",
            title: g("Abrir el repositorio del proyecto en una pestaña nueva"),
            onClick: () => window.open((y == null ? void 0 : y.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ o.jsx(Kf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: g("Idioma"),
            onClick: () => d == null ? void 0 : d(S === "es" ? "en" : "es"),
            children: S.toUpperCase()
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "span",
          {
            className: "version-chip",
            "data-testid": "version-chip",
            title: g("Versión actual"),
            children: [
              (y == null ? void 0 : y.hay_nueva) && !O && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: Se || g("Hay una versión nueva"),
                  onClick: X,
                  children: /* @__PURE__ */ o.jsx(Xf, { size: 14 })
                }
              ),
              "v",
              (y == null ? void 0 : y.actual) ?? "—",
              (y == null ? void 0 : y.hay_nueva) && (y == null ? void 0 : y.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
                "v",
                y.ultima
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini",
                  "data-testid": "btn-comprobar",
                  title: g("Comprobar versiones"),
                  onClick: P,
                  disabled: E,
                  children: E ? "…" : /* @__PURE__ */ o.jsx(Zf, { size: 14 })
                }
              ),
              (y == null ? void 0 : y.hay_nueva) && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: g("Descargar e instalar la nueva versión"),
                  onClick: X,
                  children: /* @__PURE__ */ o.jsx(Xd, { size: 14 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "span",
          {
            className: `dot ${t ? "" : "off"}`,
            "data-testid": "backend-status",
            title: g(t ? "Backend conectado" : "Backend desconectado")
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "span",
          {
            className: "eta",
            "data-testid": "corte-estimado",
            title: g("Tiempo estimado de corte (Cricut Maker 5)"),
            children: [
              g("Corte"),
              " ",
              A || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const wh = [
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
  "/pikmin/15_winged.png",
  "/pikmin/18_rock.png",
  "/pikmin/alma.png"
], jh = "/pikmin_bloom/", zc = "/pikmin/alma.png", kh = "/sonidos/pikmin.mp3", Ch = "/sonidos/pikmin_morir.mp3";
function Sh(e) {
  const [t, n] = v.useState(wh), [r, a] = v.useState([]);
  return v.useEffect(() => {
    fetch(vt("/pikmin/indice.json")).then((i) => i.ok ? i.json() : null).then((i) => {
      Array.isArray(i) && i.length && n(i.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(vt("/pikmin_bloom/indice.json")).then((i) => i.ok ? i.json() : []).then((i) => {
      if (!Array.isArray(i)) return;
      const s = [...i];
      for (let c = s.length - 1; c > 0; c--) {
        const l = Math.floor(Math.random() * (c + 1));
        [s[c], s[l]] = [s[l], s[c]];
      }
      a(s.slice(0, 60).map((c) => vt(jh + c)));
    }).catch(() => {
    });
  }, []), v.useMemo(
    () => e && e.length ? [...e, ...r].map(vt) : [...t, ...r].map(vt),
    [e, t, r]
  );
}
function _h({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: s = !1,
  minDelay: c,
  maxDelay: l,
  fuentes: d
}) {
  const h = Sh(d), [m, x] = v.useState([]), _ = v.useRef(void 0), g = v.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), S = v.useRef(s);
  S.current = s;
  const T = Math.max(5e3, t * 6e4), u = (C) => {
    if (!(!n || i))
      try {
        const E = new Audio(vt(C ? Ch : kh));
        E.volume = Math.min(1, Math.max(0, a)), E.play().catch(() => {
        });
      } catch {
      }
  }, p = (C = 1) => {
    const E = [];
    for (let k = 0; k < C; k++) {
      const R = r && Math.random() < 0.1, B = R ? vt(zc) : h[Math.floor(Math.random() * h.length)] ?? vt(zc);
      E.push({
        src: B,
        left: 3 + Math.random() * 92,
        key: Date.now() + k,
        morir: R,
        estado: "paseando"
      });
    }
    x((k) => [...k, ...E]), u(!1);
  }, f = () => {
    if (!e) return;
    const C = c ?? Math.round(T * 0.5), E = l ?? Math.round(T * 1.5), k = C + Math.random() * Math.max(1, E - C);
    _.current = window.setTimeout(p, k);
  };
  v.useEffect(() => {
    e && s && p(30);
  }, [s]), v.useEffect(() => {
    if (!e) {
      window.clearTimeout(_.current), x([]);
      return;
    }
    return f(), () => window.clearTimeout(_.current);
  }, [e, t, n, r, a, i, h]), v.useEffect(() => {
    const C = () => {
      g.current = document.visibilityState === "hidden", !g.current && S.current && window.setTimeout(() => {
        x((E) => E.length ? (u(!1), E.map((k) => ({ ...k, estado: "festejando" }))) : E), window.setTimeout(() => {
          x([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", C), () => document.removeEventListener("visibilitychange", C);
  }, []);
  const y = (C) => {
    if (S.current && g.current) {
      x((E) => E.map((k) => k.key === C ? { ...k, estado: "quieto" } : k));
      return;
    }
    x((E) => E.filter((k) => k.key !== C)), f();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: m.map((C) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${C.estado}${C.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": C.estado,
      "data-morir": C.morir ? "1" : "0",
      style: { left: `${C.left}%` },
      onAnimationEnd: () => y(C.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: C.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => y(C.key)
        }
      )
    },
    C.key
  )) });
}
const Pc = "crycat_bienvenida_v2";
function Nh() {
  const [e, t] = v.useState(!1);
  return v.useEffect(() => {
    try {
      localStorage.getItem(Pc) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Pc, "1");
    } catch {
    }
    t(!1);
  } };
}
function bh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = rt(), [a, i] = v.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ o.jsx(la, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ o.jsx(qr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ o.jsx(Pn, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ o.jsx(sa, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(Nc, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], c = [
    [
      /* @__PURE__ */ o.jsx(la, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ o.jsx(dr, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ o.jsx(Pn, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ o.jsx(sa, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ o.jsx(Yd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(qr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(Nc, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(Yf, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(cs, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ o.jsx(qr, { size: 18 }),
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
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: d[a] }),
    a === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((h, m) => /* @__PURE__ */ o.jsx("li", { children: h }, m)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : c).map(([h, m, x], _) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: h }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: m }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: x })
      ] })
    ] }, _)) }),
    a === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ o.jsx(ia, { size: 15 }),
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
const Eh = "https://github.com/dhernandezgit/CryCat-Tool", zh = "daniel.hernandez@pixelabs.es", Ph = [
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
function Mh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const i = rt(), [s, c] = v.useState(""), [l, d] = v.useState(""), [h, m] = v.useState(""), [x, _] = v.useState(!0), [g, S] = v.useState(!0), [T, u] = v.useState(!0), [p, f] = v.useState(!1);
  v.useEffect(() => {
    e && (G.version().then((j) => c(j.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const y = () => (globalThis.__crycatErrores ?? []).map(
    (w) => `- [${w.t}] ${w.msg} (${w.donde || "?"})`
  );
  if (!e) return null;
  const C = () => {
    var O, H;
    const j = navigator.userAgent, w = !!globalThis.__crycatBase, $ = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${w ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${j}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((O = window.screen) == null ? void 0 : O.width) ?? "?"}x${((H = window.screen) == null ? void 0 : H.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && $.push(`- Elementos: ${a.pages} página(s)`), r && $.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), $.join(`
`);
  }, E = () => n ? [
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
  ].map((w) => `- ${w}: ${String(n[w])}`).join(`
`) : "", k = () => {
    const j = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      h.trim() || "1. …",
      ""
    ];
    x && j.push("### Entorno", C(), ""), g && n && j.push("### Ajustes", E(), "");
    const w = y();
    return T && w.length && j.push("### Errores recogidos", w.join(`
`), ""), j.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), j.join(`
`);
  }, R = () => `[CryCat] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, B = () => {
    const j = `mailto:${zh}?` + new URLSearchParams({
      subject: R(),
      body: k().slice(0, 1800)
    }).toString();
    window.location.href = j, t();
  }, N = () => {
    const j = `${Eh}/issues/new?` + new URLSearchParams({
      title: R(),
      body: k(),
      labels: "bug"
    }).toString();
    window.open(j, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni login). También puedes copiarlo o abrirlo en GitHub si prefieres.") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: Ph.map(([j, w]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${j}`,
        onClick: () => d(($) => ($ ? $ + `
` : "") + w),
        children: i(j)
      },
      j
    )) }),
    /* @__PURE__ */ o.jsxs("label", { className: "col", children: [
      i("¿Qué ha pasado?"),
      /* @__PURE__ */ o.jsx(
        "textarea",
        {
          "data-testid": "reportar-texto",
          rows: 4,
          value: l,
          placeholder: i("Cuéntalo con tus palabras: qué esperabas y qué pasó."),
          onChange: (j) => d(j.target.value)
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
          onChange: (j) => m(j.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: x,
          onChange: (j) => _(j.target.checked)
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
          checked: g,
          onChange: (j) => S(j.target.checked)
        }
      ),
      i("Incluir mis ajustes actuales")
    ] }),
    y().length > 0 && /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: T,
          onChange: (j) => u(j.target.checked)
        }
      ),
      i(
        "Incluir los {n} errores recogidos de la consola",
        { n: y().length }
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
                `${l}

${h}

${k()}`
              ), f(!0);
            } catch {
            }
          },
          children: i(p ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "reportar-github",
          title: i("Abrir en GitHub (necesita cuenta)"),
          onClick: N,
          children: i("GitHub")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "reportar-enviar",
          onClick: B,
          children: i("Enviar por email")
        }
      )
    ] })
  ] }) });
}
function Th() {
  const [e, t] = v.useState([]), [n, r] = v.useState(null), [a, i] = v.useState(null), [s, c] = v.useState(null), [l, d] = v.useState(null), [h, m] = v.useState(null), [x, _] = v.useState(!0), [g, S] = v.useState(!1), [T, u] = v.useState(!1), [p, f] = v.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [y, C] = v.useState(33.3), [E, k] = v.useState(33.3), R = Nh(), B = v.useRef(null), N = v.useRef(null);
  v.useEffect(() => {
    (async () => {
      try {
        const z = await G.getSettings();
        d(z.settings), Cc(z.settings.tema), f((I) => ({
          ...I,
          guidesVisible: z.settings.ver_guias,
          eyeTransparent: z.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: z.settings.ver_contornos !== !1,
          contornoModo: z.settings.contorno_modo ?? "final"
        })), t((await G.listAssets()).map(oa)), i(await G.result());
      } catch {
        _(!1);
      }
    })();
  }, []);
  const [j, w] = v.useState("");
  v.useEffect(() => {
    const z = (I) => w(String(I.detail || ""));
    return window.addEventListener("crycat:seleccion", z), () => window.removeEventListener("crycat:seleccion", z);
  }, []), v.useEffect(() => {
    const z = (I) => {
      const V = I.detail;
      C(V ? 19 : 33.3), k(V ? 62 : 33.3), f((J) => ({ ...J, hojaGirada: V }));
    };
    return window.addEventListener("crycat:disposicion", z), () => window.removeEventListener("crycat:disposicion", z);
  }, []), v.useEffect(() => {
    const z = setInterval(async () => {
      try {
        await G.health(), _(!0);
      } catch {
        _(!1);
      }
    }, 5e3);
    return () => clearInterval(z);
  }, []);
  const $ = v.useRef(!0), O = v.useCallback(async () => {
    try {
      t((await G.listAssets()).map(oa)), i(await G.result());
      try {
        c(await G.estimate());
      } catch {
      }
    } catch {
      _(!1);
    } finally {
      $.current = !1;
    }
  }, []), H = v.useCallback((z) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(async () => {
      try {
        const I = await G.job(z);
        m(I), I.done && (window.clearInterval(N.current), N.current = null, await O(), I.status === "done" && window.setTimeout(() => m(null), 2500));
      } catch {
        window.clearInterval(N.current), N.current = null;
      }
    }, 300);
  }, []), ee = v.useCallback(async () => {
    u(!0), await new Promise((z) => setTimeout(z, 60));
    try {
      const z = await G.optimize();
      m(z), H(z.id);
    } catch {
      _(!1);
    } finally {
      u(!1);
    }
  }, [H]), te = v.useCallback(
    async (z) => {
      u(!0), await new Promise((I) => setTimeout(I, 60));
      try {
        const I = await G.optimize(z, !0);
        m(I), H(I.id);
      } catch {
        _(!1);
      } finally {
        u(!1);
      }
    },
    [H]
  ), L = v.useCallback(() => {
    l && l.auto_recalcular === !1 || (B.current && window.clearTimeout(B.current), B.current = window.setTimeout(ee, 400));
  }, [ee, l]), F = v.useRef(null);
  v.useEffect(() => {
    F.current = L;
  }, [L]), v.useEffect(() => {
    const z = (I) => {
      const V = I.detail;
      m((J) => ({
        ...J ?? {
          id: "web",
          status: "running",
          done: !1,
          message: "",
          progress: 0,
          pages: 0
        },
        progress: V.progress,
        pages: V.pages,
        eta_s: V.eta_s,
        tope_s: V.tope_s
      }));
    };
    return window.addEventListener("crycat:progreso", z), () => window.removeEventListener("crycat:progreso", z);
  }, []);
  const W = v.useRef(!1);
  v.useEffect(() => {
    if (!(!l || W.current)) {
      if (e.length > 0) {
        W.current = !0;
        return;
      }
      W.current = !0, G.crearDemo().then(async (z) => {
        z.ok && await O();
      }).catch(() => {
      });
    }
  }, [l, e.length, O]);
  const A = v.useCallback(
    async (z) => {
      d((I) => I && { ...I, ...z }), z.tema && Cc(z.tema);
      try {
        const I = await G.putSettings(z);
        if (I.job)
          m(I.job), H(I.job.id);
        else
          try {
            c(await G.estimate());
          } catch {
          }
      } catch {
        _(!1);
      }
    },
    [H]
  ), [P, X] = v.useState([]), ae = v.useRef(null), Se = v.useRef(null), _e = v.useCallback((z, I) => {
    X((V) => {
      if (I === "solo")
        return ae.current = z, Se.current = null, V.length === 1 && V[0] === z ? [] : [z];
      if (I === "uno")
        return ae.current = z, Se.current = null, V.includes(z) ? V.filter((we) => we !== z) : [...V, z];
      const J = e.map((we) => we.id), dt = ae.current, Fe = dt ? J.indexOf(dt) : -1, In = J.indexOf(z);
      if (Fe < 0 || In < 0 || dt === z)
        return ae.current = z, Se.current = null, V.includes(z) ? V.filter((we) => we !== z) : [...V, z];
      const [ha, pt] = Fe <= In ? [Fe, In] : [In, Fe], at = J.slice(ha, pt + 1), Gt = Se.current ?? V;
      Se.current = Gt;
      const zt = [.../* @__PURE__ */ new Set([...Gt, ...at])];
      return zt.length === V.length && zt.every((we) => V.includes(we)) ? (Se.current = null, V.filter((we) => !at.includes(we))) : zt;
    });
  }, [e]), Ge = v.useCallback(() => {
    ae.current = null, Se.current = null, X(e.map((z) => z.id));
  }, [e]), jt = v.useCallback(() => {
    ae.current = null, Se.current = null, X((z) => e.map((I) => I.id).filter((I) => !z.includes(I)));
  }, [e]), Q = v.useCallback(() => {
    ae.current = null, Se.current = null, X([]);
  }, []), ke = v.useCallback(async (z, I) => {
    const V = new Map(e.map((J) => [J.id, J]));
    for (const J of z) {
      const dt = V.get(J), Fe = typeof I == "function" ? dt ? I(dt) : {} : I;
      await G.patchAsset(J, Fe).catch(() => {
      });
    }
    await O();
  }, [e, O]), ye = v.useRef([]), Ae = v.useRef([]), [Et, fn] = v.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), Vt = (l == null ? void 0 : l.historial) !== !1, hn = (l == null ? void 0 : l.historial_max) ?? 40, Ln = v.useRef(!1), Ee = v.useRef(""), fa = v.useRef({ assets: [], result: null, settings: null }), Rn = v.useCallback((z, I, V) => JSON.stringify({
    a: z.map((J) => [
      J.id,
      J.scale_pct,
      J.copies,
      J.mini_enabled,
      J.mini_quota,
      J.offset_mm,
      J.offset_modo,
      J.offset_color,
      J.simplificar
    ]),
    r: I ? [I.pages, I.placements.map((J) => [
      J.uid,
      J.page,
      Math.round(J.x * 100),
      Math.round(J.y * 100),
      J.angle,
      J.pinned
    ])] : null,
    s: V ? [
      V.espacio_mm,
      V.margen_mm,
      V.rotacion,
      V.usar_minis,
      V.mini_min_mm,
      V.mini_tamanos,
      V.mini_usar_lista,
      V.mini_lista_modo,
      V.mini_lista_medida,
      V.mini_tamanos_lista,
      V.offset_activo,
      V.offset_mm,
      V.offset_modo,
      V.offset_color,
      V.modo_forma,
      V.separacion_px,
      V.marcas_delimitar,
      V.pagina,
      V.pagina_w,
      V.pagina_h,
      V.maquina,
      V.lienzo,
      V.color_formato
    ] : null
  }), []), Bt = () => fn({
    puedeDeshacer: ye.current.length > 0,
    puedeRehacer: Ae.current.length > 0
  }), hr = v.useCallback(() => {
    const z = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && z.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && z.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && z.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && z.push("mini_enabled", "mini_quota"), z;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]);
  v.useCallback((z) => {
    const I = {};
    for (const V of hr()) I[V] = z[V];
    return I;
  }, [hr]);
  const Ao = v.useCallback(() => {
    Vt && (ye.current = [
      ...ye.current,
      { assets: e, result: a, settings: l }
    ].slice(-hn), Ae.current = [], Ee.current = Rn(e, a, l), Bt());
  }, [e, a, l, Vt, hn, Rn]);
  v.useEffect(() => {
    if (!Vt || $.current) return;
    const z = Rn(e, a, l);
    if (Ln.current) {
      Ee.current = z, Ln.current = !1;
      return;
    }
    if (!Ee.current) {
      if (e.length === 0 && !a) return;
      Ee.current = z;
      return;
    }
    z !== Ee.current && (ye.current = [...ye.current, fa.current].slice(-hn), Ae.current = [], Ee.current = z, Bt());
  }, [e, a, l, Vt, hn, Rn]), v.useEffect(() => {
    fa.current = { assets: e, result: a, settings: l };
  }, [e, a, l]);
  const An = v.useCallback(async (z) => {
    Ln.current = !0, t(z.assets), z.settings && (d(z.settings), await G.putSettings(z.settings).catch(() => {
    }));
    for (const I of z.assets)
      await G.patchAsset(I.id, {
        scale_pct: I.scale_pct,
        copies: I.copies,
        mini_enabled: I.mini_enabled,
        mini_quota: I.mini_quota,
        offset_mm: I.offset_mm,
        offset_modo: I.offset_modo,
        offset_color: I.offset_color
      }).catch(() => {
      });
    if (z.result) {
      await G.restoreResult(z.result).catch(() => {
      }), i(z.result);
      try {
        c(await G.estimate());
      } catch {
      }
    } else
      await O();
    Bt();
  }, [O]), gr = v.useCallback(async () => {
    const z = ye.current.pop();
    z && (Ae.current = [...Ae.current, { assets: e, result: a, settings: l }], await An(z));
  }, [e, a, An]), vr = v.useCallback(async () => {
    const z = Ae.current.pop();
    z && (ye.current = [...ye.current, { assets: e, result: a, settings: l }], await An(z));
  }, [e, a, An]);
  v.useEffect(() => {
    const z = (I) => {
      if (!(I.ctrlKey || I.metaKey)) return;
      const J = I.target;
      if (J && (J.tagName === "INPUT" || J.tagName === "TEXTAREA" || J.tagName === "SELECT" || J.isContentEditable)) return;
      const Fe = I.key.toLowerCase();
      Fe === "z" && !I.shiftKey ? (I.preventDefault(), gr()) : (Fe === "y" || Fe === "z" && I.shiftKey) && (I.preventDefault(), vr());
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [gr, vr]);
  const yr = v.useCallback(
    (z) => {
      const I = (J) => {
        const dt = window.innerWidth, Fe = J.clientX / dt * 100;
        z === "left" ? C(Math.min(45, Math.max(12, Fe))) : k(Math.min(60, Math.max(20, Fe - y)));
      }, V = () => {
        window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", V);
      };
      window.addEventListener("mousemove", I), window.addEventListener("mouseup", V);
    },
    [y]
  );
  return v.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ o.jsx($f, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${y}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        ih,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await O(), L();
          },
          saveSettings: A,
          onEditarContorno: (z) => r(z),
          onAntesDeCambiar: Ao,
          seleccion: P,
          onSeleccion: _e,
          onSeleccionarTodo: Ge,
          onInvertirSeleccion: jt,
          onLimpiarSeleccion: Q,
          onBulk: ke,
          verBordes: p.verBordes,
          contornoModo: p.contornoModo ?? "final",
          destacado: j
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => yr("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${E}%` }, children: /* @__PURE__ */ o.jsx(
        lh,
        {
          assets: e,
          result: a,
          settings: l,
          ui: p,
          setUi: f,
          saveSettings: A,
          optimize: ee,
          onRefresh: O,
          onJob: (z) => {
            m(z), H(z.id);
          },
          onRecalc: te,
          editando: n,
          onFinEdicion: async () => {
            r(null), await O();
          },
          onDeshacer: gr,
          onRehacer: vr,
          puedeDeshacer: Et.puedeDeshacer,
          puedeRehacer: Et.puedeRehacer,
          seleccion: P,
          onSeleccion: _e
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => yr("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        vh,
        {
          settings: l,
          assets: e,
          saveSettings: A
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      xh,
      {
        job: h,
        backendOk: x,
        result: a,
        estimate: s,
        optimizando: T,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (z) => A({ volumen: z }),
        onMute: (z) => A({ mute: z }),
        onIdioma: (z) => A({ idioma: z }),
        modoRata: l.rata_activo === !0 || (Number(l.espacio_mm) || 0) < 0,
        onEasterEgg: () => A({
          pikmin_activo: !0,
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: R.abrir,
        onReportar: () => S(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      _h,
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
    /* @__PURE__ */ o.jsx(
      bh,
      {
        open: R.visible,
        onClose: R.cerrar,
        onAbrirCarpeta: () => void G.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      Mh,
      {
        open: g,
        onClose: () => S(!1),
        settings: l,
        job: h,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: Df("es", "Cargando CryCat…") });
}
const Lh = "1790953256540", Zd = document.getElementById("root"), pi = [
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
], ps = 8, Wa = [];
globalThis.__crycatErrores = Wa;
const ep = (e, t) => {
  Wa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Wa.length > 12 && Wa.shift();
};
window.addEventListener("error", (e) => ep(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => ep(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let ms;
function mi(e, t = !1) {
  window.clearTimeout(ms);
  const n = Hd().colors;
  if (Zd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + ps}</div>
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
      <div style="font-size:11px;color:${n.textSoft};margin-top:10px;opacity:.85">
        CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve
      </div>
    </div>`, t) {
    const s = document.getElementById("carga-fun");
    s && (s.style.color = n.danger);
    return;
  }
  let r = Math.floor(Math.random() * pi.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = pi[r++ % pi.length]);
  }, i = () => {
    a(), ms = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const fi = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${ps}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / ps * 100)}%`);
  }
};
let On = null, tp = !1, Rh = 0;
const fs = /* @__PURE__ */ new Map();
function np(e) {
  return new Promise((t) => {
    const n = ++Rh;
    fs.set(n, t), On.postMessage({ ...e, id: n });
  });
}
const hs = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Ah = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Ih(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((i, s) => r.push([s, i]));
  for (const [i, s] of r)
    s instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"; filename="${s.name || "file"}"\r
Content-Type: ${s.type || "application/octet-stream"}\r
\r
`), n.push(s), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"\r
\r
${s}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    hs(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function $h(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((h, m) => {
    s[m] = h;
  });
  let c = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [h, m] = await Ih(l);
    c = h, s["content-type"] = m;
  } else l instanceof Blob ? c = hs(await l.arrayBuffer()) : typeof l == "string" && (c = hs(new TextEncoder().encode(l).buffer));
  const d = await np({
    tipo: "api",
    method: e,
    path: i,
    headers: JSON.stringify(s),
    body: c
  });
  return d && d.error ? new Response("error: " + d.error, { status: 500 }) : new Response(Ah(d.body), {
    status: d.status || 200,
    headers: d.headers || { "content-type": "application/json" }
  });
}
function Dh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && tp)
      try {
        return await $h(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Oh() {
  try {
    if (mi("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const t = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: t }).then(() => navigator.serviceWorker.ready),
          new Promise((n) => setTimeout(n, 6e3))
        ]);
      } catch {
      }
    const e = new URL(
      `worker-crycat.js?v=${Lh}`,
      location.href
    ).href;
    On = new Worker(e, { type: "module" }), On.onmessage = (t) => {
      const n = t.data || {};
      if (n.tipo === "estado")
        fi(n.t, n.paso);
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
        const r = fs.get(n.id);
        fs.delete(n.id), r && r(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && mi("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (r) => {
        r.data && r.data.tipo === "listo" && (On.removeEventListener("message", n), t());
      };
      On.addEventListener("message", n), On.postMessage({ tipo: "iniciar" });
    }), tp = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const r = t.ports && t.ports[0];
      if (r)
        try {
          const a = await np({
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
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Dh();
    try {
      const t = Hd().key;
      t && t !== "wiwi" && await fetch(Sn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: t })
      });
    } catch {
    }
    fi("Optimizando la muestra inicial…", 7);
    try {
      const t = await fetch(Sn() + "api/assets").then((n) => n.json());
      Array.isArray(t) && t.length === 0 && await fetch(Sn() + "api/demo?n=24", { method: "POST" });
    } catch {
    }
    fi("Abriendo la aplicación…", 8), window.clearTimeout(ms), Vd(Zd).render(/* @__PURE__ */ o.jsx(Th, {}));
  } catch (e) {
    mi("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Oh();
