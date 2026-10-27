var Dc = { exports: {} }, Co = {}, $c = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = Symbol.for("react.element"), hp = Symbol.for("react.portal"), gp = Symbol.for("react.fragment"), vp = Symbol.for("react.strict_mode"), yp = Symbol.for("react.profiler"), xp = Symbol.for("react.provider"), wp = Symbol.for("react.context"), jp = Symbol.for("react.forward_ref"), kp = Symbol.for("react.suspense"), Cp = Symbol.for("react.memo"), Sp = Symbol.for("react.lazy"), xl = Symbol.iterator;
function _p(e) {
  return e === null || typeof e != "object" ? null : (e = xl && e[xl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Fc = Object.assign, qc = {};
function ha(e, t, n) {
  this.props = e, this.context = t, this.refs = qc, this.updater = n || Oc;
}
ha.prototype.isReactComponent = {};
ha.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ha.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uc() {
}
Uc.prototype = ha.prototype;
function js(e, t, n) {
  this.props = e, this.context = t, this.refs = qc, this.updater = n || Oc;
}
var ks = js.prototype = new Uc();
ks.constructor = js;
Fc(ks, ha.prototype);
ks.isPureReactComponent = !0;
var wl = Array.isArray, Vc = Object.prototype.hasOwnProperty, Cs = { current: null }, Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bc(e, t, n) {
  var a, r = {}, i = null, s = null;
  if (t != null) for (a in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Vc.call(t, a) && !Gc.hasOwnProperty(a) && (r[a] = t[a]);
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    for (var l = Array(c), d = 0; d < c; d++) l[d] = arguments[d + 2];
    r.children = l;
  }
  if (e && e.defaultProps) for (a in c = e.defaultProps, c) r[a] === void 0 && (r[a] = c[a]);
  return { $$typeof: fr, type: e, key: i, ref: s, props: r, _owner: Cs.current };
}
function Np(e, t) {
  return { $$typeof: fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ss(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function bp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var jl = /\/+/g;
function Vo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bp("" + e.key) : t.toString(36);
}
function Or(e, t, n, a, r) {
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
        case fr:
        case hp:
          s = !0;
      }
  }
  if (s) return s = e, r = r(s), e = a === "" ? "." + Vo(s, 0) : a, wl(r) ? (n = "", e != null && (n = e.replace(jl, "$&/") + "/"), Or(r, t, n, "", function(d) {
    return d;
  })) : r != null && (Ss(r) && (r = Np(r, n + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(jl, "$&/") + "/") + e)), t.push(r)), 1;
  if (s = 0, a = a === "" ? "." : a + ":", wl(e)) for (var c = 0; c < e.length; c++) {
    i = e[c];
    var l = a + Vo(i, c);
    s += Or(i, t, n, l, r);
  }
  else if (l = _p(e), typeof l == "function") for (e = l.call(e), c = 0; !(i = e.next()).done; ) i = i.value, l = a + Vo(i, c++), s += Or(i, t, n, l, r);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function jr(e, t, n) {
  if (e == null) return e;
  var a = [], r = 0;
  return Or(e, a, "", "", function(i) {
    return t.call(n, i, r++);
  }), a;
}
function Ep(e) {
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
var He = { current: null }, Fr = { transition: null }, zp = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Fr, ReactCurrentOwner: Cs };
function Hc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = { map: jr, forEach: function(e, t, n) {
  jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ss(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ne.Component = ha;
ne.Fragment = gp;
ne.Profiler = yp;
ne.PureComponent = js;
ne.StrictMode = vp;
ne.Suspense = kp;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zp;
ne.act = Hc;
ne.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var a = Fc({}, e.props), r = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Cs.current), t.key !== void 0 && (r = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (l in t) Vc.call(t, l) && !Gc.hasOwnProperty(l) && (a[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) a.children = n;
  else if (1 < l) {
    c = Array(l);
    for (var d = 0; d < l; d++) c[d] = arguments[d + 2];
    a.children = c;
  }
  return { $$typeof: fr, type: e.type, key: r, ref: i, props: a, _owner: s };
};
ne.createContext = function(e) {
  return e = { $$typeof: wp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: xp, _context: e }, e.Consumer = e;
};
ne.createElement = Bc;
ne.createFactory = function(e) {
  var t = Bc.bind(null, e);
  return t.type = e, t;
};
ne.createRef = function() {
  return { current: null };
};
ne.forwardRef = function(e) {
  return { $$typeof: jp, render: e };
};
ne.isValidElement = Ss;
ne.lazy = function(e) {
  return { $$typeof: Sp, _payload: { _status: -1, _result: e }, _init: Ep };
};
ne.memo = function(e, t) {
  return { $$typeof: Cp, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function(e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
ne.unstable_act = Hc;
ne.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
ne.useContext = function(e) {
  return He.current.useContext(e);
};
ne.useDebugValue = function() {
};
ne.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
ne.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
ne.useId = function() {
  return He.current.useId();
};
ne.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
ne.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
ne.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
ne.useRef = function(e) {
  return He.current.useRef(e);
};
ne.useState = function(e) {
  return He.current.useState(e);
};
ne.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function() {
  return He.current.useTransition();
};
ne.version = "18.3.1";
$c.exports = ne;
var g = $c.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp = g, Mp = Symbol.for("react.element"), Tp = Symbol.for("react.fragment"), Rp = Object.prototype.hasOwnProperty, Lp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wc(e, t, n) {
  var a, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (a in t) Rp.call(t, a) && !Ap.hasOwnProperty(a) && (r[a] = t[a]);
  if (e && e.defaultProps) for (a in t = e.defaultProps, t) r[a] === void 0 && (r[a] = t[a]);
  return { $$typeof: Mp, type: e, key: i, ref: s, props: r, _owner: Lp.current };
}
Co.Fragment = Tp;
Co.jsx = Wc;
Co.jsxs = Wc;
Dc.exports = Co;
var o = Dc.exports, Qc = { exports: {} }, rt = {}, Yc = { exports: {} }, Kc = {};
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
  function t(T, G) {
    var F = T.length;
    T.push(G);
    e: for (; 0 < F; ) {
      var ee = F - 1 >>> 1, B = T[ee];
      if (0 < r(B, G)) T[ee] = G, T[F] = B, F = ee;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function a(T) {
    if (T.length === 0) return null;
    var G = T[0], F = T.pop();
    if (F !== G) {
      T[0] = F;
      e: for (var ee = 0, B = T.length, ue = B >>> 1; ee < ue; ) {
        var oe = 2 * (ee + 1) - 1, ae = T[oe], I = oe + 1, re = T[I];
        if (0 > r(ae, F)) I < B && 0 > r(re, ae) ? (T[ee] = re, T[I] = F, ee = I) : (T[ee] = ae, T[oe] = F, ee = oe);
        else if (I < B && 0 > r(re, F)) T[ee] = re, T[I] = F, ee = I;
        else break e;
      }
    }
    return G;
  }
  function r(T, G) {
    var F = T.sortIndex - G.sortIndex;
    return F !== 0 ? F : T.id - G.id;
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
  var l = [], d = [], h = 1, m = null, y = 3, N = !1, x = !1, C = !1, S = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var G = n(d); G !== null; ) {
      if (G.callback === null) a(d);
      else if (G.startTime <= T) a(d), G.sortIndex = G.expirationTime, t(l, G);
      else break;
      G = n(d);
    }
  }
  function v(T) {
    if (C = !1, f(T), !x) if (n(l) !== null) x = !0, Y(_);
    else {
      var G = n(d);
      G !== null && te(v, G.startTime - T);
    }
  }
  function _(T, G) {
    x = !1, C && (C = !1, u(b), b = -1), N = !0;
    var F = y;
    try {
      for (f(G), m = n(l); m !== null && (!(m.expirationTime > G) || T && !w()); ) {
        var ee = m.callback;
        if (typeof ee == "function") {
          m.callback = null, y = m.priorityLevel;
          var B = ee(m.expirationTime <= G);
          G = e.unstable_now(), typeof B == "function" ? m.callback = B : m === n(l) && a(l), f(G);
        } else a(l);
        m = n(l);
      }
      if (m !== null) var ue = !0;
      else {
        var oe = n(d);
        oe !== null && te(v, oe.startTime - G), ue = !1;
      }
      return ue;
    } finally {
      m = null, y = F, N = !1;
    }
  }
  var M = !1, E = null, b = -1, U = 5, z = -1;
  function w() {
    return !(e.unstable_now() - z < U);
  }
  function O() {
    if (E !== null) {
      var T = e.unstable_now();
      z = T;
      var G = !0;
      try {
        G = E(!0, T);
      } finally {
        G ? k() : (M = !1, E = null);
      }
    } else M = !1;
  }
  var k;
  if (typeof p == "function") k = function() {
    p(O);
  };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(), D = A.port2;
    A.port1.onmessage = O, k = function() {
      D.postMessage(null);
    };
  } else k = function() {
    S(O, 0);
  };
  function Y(T) {
    E = T, M || (M = !0, k());
  }
  function te(T, G) {
    b = S(function() {
      T(e.unstable_now());
    }, G);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    x || N || (x = !0, Y(_));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(T) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var G = 3;
        break;
      default:
        G = y;
    }
    var F = y;
    y = G;
    try {
      return T();
    } finally {
      y = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, G) {
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
    var F = y;
    y = T;
    try {
      return G();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function(T, G, F) {
    var ee = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ee + F : ee) : F = ee, T) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = F + B, T = { id: h++, callback: G, priorityLevel: T, startTime: F, expirationTime: B, sortIndex: -1 }, F > ee ? (T.sortIndex = F, t(d, T), n(l) === null && T === n(d) && (C ? (u(b), b = -1) : C = !0, te(v, F - ee))) : (T.sortIndex = B, t(l, T), x || N || (x = !0, Y(_))), T;
  }, e.unstable_shouldYield = w, e.unstable_wrapCallback = function(T) {
    var G = y;
    return function() {
      var F = y;
      y = G;
      try {
        return T.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(Kc);
Yc.exports = Kc;
var Ip = Yc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dp = g, at = Ip;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xc = /* @__PURE__ */ new Set(), Wa = {};
function In(e, t) {
  sa(e, t), sa(e + "Capture", t);
}
function sa(e, t) {
  for (Wa[e] = t, e = 0; e < t.length; e++) Xc.add(t[e]);
}
var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wi = Object.prototype.hasOwnProperty, $p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, kl = {}, Cl = {};
function Op(e) {
  return wi.call(Cl, e) ? !0 : wi.call(kl, e) ? !1 : $p.test(e) ? Cl[e] = !0 : (kl[e] = !0, !1);
}
function Fp(e, t, n, a) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return a ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qp(e, t, n, a) {
  if (t === null || typeof t > "u" || Fp(e, t, n, a)) return !0;
  if (a) return !1;
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
function We(e, t, n, a, r, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ie[e] = new We(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ie[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ie[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ie[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ie[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ie[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ie[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ie[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ie[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _s = /[\-:]([a-z])/g;
function Ns(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    _s,
    Ns
  );
  Ie[t] = new We(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(_s, Ns);
  Ie[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(_s, Ns);
  Ie[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ie[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ie[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bs(e, t, n, a) {
  var r = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (r !== null ? r.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qp(t, n, r, a) && (n = null), a || r === null ? Op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (t = r.attributeName, a = r.attributeNamespace, n === null ? e.removeAttribute(t) : (r = r.type, n = r === 3 || r === 4 && n === !0 ? "" : "" + n, a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
}
var Yt = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kr = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Gn = Symbol.for("react.fragment"), Es = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), Jc = Symbol.for("react.provider"), Zc = Symbol.for("react.context"), zs = Symbol.for("react.forward_ref"), ki = Symbol.for("react.suspense"), Ci = Symbol.for("react.suspense_list"), Ps = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), eu = Symbol.for("react.offscreen"), Sl = Symbol.iterator;
function _a(e) {
  return e === null || typeof e != "object" ? null : (e = Sl && e[Sl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, Go;
function Ra(e) {
  if (Go === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Go = t && t[1] || "";
  }
  return `
` + Go + e;
}
var Bo = !1;
function Ho(e, t) {
  if (!e || Bo) return "";
  Bo = !0;
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
        var a = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        a = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        a = d;
      }
      e();
    }
  } catch (d) {
    if (d && a && typeof d.stack == "string") {
      for (var r = d.stack.split(`
`), i = a.stack.split(`
`), s = r.length - 1, c = i.length - 1; 1 <= s && 0 <= c && r[s] !== i[c]; ) c--;
      for (; 1 <= s && 0 <= c; s--, c--) if (r[s] !== i[c]) {
        if (s !== 1 || c !== 1)
          do
            if (s--, c--, 0 > c || r[s] !== i[c]) {
              var l = `
` + r[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= c);
        break;
      }
    }
  } finally {
    Bo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ra(e) : "";
}
function Up(e) {
  switch (e.tag) {
    case 5:
      return Ra(e.type);
    case 16:
      return Ra("Lazy");
    case 13:
      return Ra("Suspense");
    case 19:
      return Ra("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ho(e.type, !1), e;
    case 11:
      return e = Ho(e.type.render, !1), e;
    case 1:
      return e = Ho(e.type, !0), e;
    default:
      return "";
  }
}
function Si(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gn:
      return "Fragment";
    case Vn:
      return "Portal";
    case ji:
      return "Profiler";
    case Es:
      return "StrictMode";
    case ki:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Zc:
      return (e.displayName || "Context") + ".Consumer";
    case Jc:
      return (e._context.displayName || "Context") + ".Provider";
    case zs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ps:
      return t = e.displayName || null, t !== null ? t : Si(e.type) || "Memo";
    case Zt:
      t = e._payload, e = e._init;
      try {
        return Si(e(t));
      } catch {
      }
  }
  return null;
}
function Vp(e) {
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
      return Si(t);
    case 8:
      return t === Es ? "StrictMode" : "Mode";
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
function fn(e) {
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
function tu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gp(e) {
  var t = tu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var r = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return r.call(this);
    }, set: function(s) {
      a = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return a;
    }, setValue: function(s) {
      a = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = Gp(e));
}
function nu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), a = "";
  return e && (a = tu(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
}
function Jr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _i(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _l(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, a = t.checked != null ? t.checked : t.defaultChecked;
  n = fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: a, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function au(e, t) {
  t = t.checked, t != null && bs(e, "checked", t, !1);
}
function Ni(e, t) {
  au(e, t);
  var n = fn(t.value), a = t.type;
  if (n != null) a === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (a === "submit" || a === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bi(e, t.type, n) : t.hasOwnProperty("defaultValue") && bi(e, t.type, fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Nl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var a = t.type;
    if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function bi(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var La = Array.isArray;
function ta(e, t, n, a) {
  if (e = e.options, t) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        e[r].selected = !0, a && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function bl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (La(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: fn(n) };
}
function ru(e, t) {
  var n = fn(t.value), a = fn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), a != null && (e.defaultValue = "" + a);
}
function El(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ou(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ou(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, iu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, r) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, a, r);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Qa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Da = {
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
}, Bp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Da).forEach(function(e) {
  Bp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Da[t] = Da[e];
  });
});
function su(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Da.hasOwnProperty(e) && Da[e] ? ("" + t).trim() : t + "px";
}
function lu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var a = n.indexOf("--") === 0, r = su(n, t[n], a);
    n === "float" && (n = "cssFloat"), a ? e.setProperty(n, r) : e[n] = r;
  }
}
var Hp = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pi(e, t) {
  if (t) {
    if (Hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Mi(e, t) {
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
var Ti = null;
function Ms(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ri = null, na = null, aa = null;
function zl(e) {
  if (e = vr(e)) {
    if (typeof Ri != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Eo(t), Ri(e.stateNode, e.type, t));
  }
}
function cu(e) {
  na ? aa ? aa.push(e) : aa = [e] : na = e;
}
function uu() {
  if (na) {
    var e = na, t = aa;
    if (aa = na = null, zl(e), t) for (e = 0; e < t.length; e++) zl(t[e]);
  }
}
function du(e, t) {
  return e(t);
}
function pu() {
}
var Wo = !1;
function mu(e, t, n) {
  if (Wo) return e(t, n);
  Wo = !0;
  try {
    return du(e, t, n);
  } finally {
    Wo = !1, (na !== null || aa !== null) && (pu(), uu());
  }
}
function Ya(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = Eo(n);
  if (a === null) return null;
  n = a[t];
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
      (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Li = !1;
if (Bt) try {
  var Na = {};
  Object.defineProperty(Na, "passive", { get: function() {
    Li = !0;
  } }), window.addEventListener("test", Na, Na), window.removeEventListener("test", Na, Na);
} catch {
  Li = !1;
}
function Wp(e, t, n, a, r, i, s, c, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var $a = !1, Zr = null, eo = !1, Ai = null, Qp = { onError: function(e) {
  $a = !0, Zr = e;
} };
function Yp(e, t, n, a, r, i, s, c, l) {
  $a = !1, Zr = null, Wp.apply(Qp, arguments);
}
function Kp(e, t, n, a, r, i, s, c, l) {
  if (Yp.apply(this, arguments), $a) {
    if ($a) {
      var d = Zr;
      $a = !1, Zr = null;
    } else throw Error(R(198));
    eo || (eo = !0, Ai = d);
  }
}
function Dn(e) {
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
function fu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pl(e) {
  if (Dn(e) !== e) throw Error(R(188));
}
function Xp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dn(e), t === null) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (a = r.return, a !== null) {
        n = a;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === n) return Pl(r), e;
        if (i === a) return Pl(r), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== a.return) n = r, a = i;
    else {
      for (var s = !1, c = r.child; c; ) {
        if (c === n) {
          s = !0, n = r, a = i;
          break;
        }
        if (c === a) {
          s = !0, a = r, n = i;
          break;
        }
        c = c.sibling;
      }
      if (!s) {
        for (c = i.child; c; ) {
          if (c === n) {
            s = !0, n = i, a = r;
            break;
          }
          if (c === a) {
            s = !0, a = i, n = r;
            break;
          }
          c = c.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== a) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function hu(e) {
  return e = Xp(e), e !== null ? gu(e) : null;
}
function gu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vu = at.unstable_scheduleCallback, Ml = at.unstable_cancelCallback, Jp = at.unstable_shouldYield, Zp = at.unstable_requestPaint, Ce = at.unstable_now, em = at.unstable_getCurrentPriorityLevel, Ts = at.unstable_ImmediatePriority, yu = at.unstable_UserBlockingPriority, to = at.unstable_NormalPriority, tm = at.unstable_LowPriority, xu = at.unstable_IdlePriority, So = null, Tt = null;
function nm(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
    Tt.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ct = Math.clz32 ? Math.clz32 : om, am = Math.log, rm = Math.LN2;
function om(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (am(e) / rm | 0) | 0;
}
var _r = 64, Nr = 4194304;
function Aa(e) {
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
function no(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var a = 0, r = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var c = s & ~r;
    c !== 0 ? a = Aa(c) : (i &= s, i !== 0 && (a = Aa(i)));
  } else s = n & ~r, s !== 0 ? a = Aa(s) : i !== 0 && (a = Aa(i));
  if (a === 0) return 0;
  if (t !== 0 && t !== a && !(t & r) && (r = a & -a, i = t & -t, r >= i || r === 16 && (i & 4194240) !== 0)) return t;
  if (a & 4 && (a |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= a; 0 < t; ) n = 31 - Ct(t), r = 1 << n, a |= e[n], t &= ~r;
  return a;
}
function im(e, t) {
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
function sm(e, t) {
  for (var n = e.suspendedLanes, a = e.pingedLanes, r = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Ct(i), c = 1 << s, l = r[s];
    l === -1 ? (!(c & n) || c & a) && (r[s] = im(c, t)) : l <= t && (e.expiredLanes |= c), i &= ~c;
  }
}
function Ii(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wu() {
  var e = _r;
  return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ct(t), e[t] = n;
}
function lm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var a = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - Ct(n), i = 1 << r;
    t[r] = 0, a[r] = -1, e[r] = -1, n &= ~i;
  }
}
function Rs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var a = 31 - Ct(n), r = 1 << a;
    r & t | e[a] & t && (e[a] |= t), n &= ~r;
  }
}
var le = 0;
function ju(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ku, Ls, Cu, Su, _u, Di = !1, br = [], on = null, sn = null, ln = null, Ka = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), tn = [], cm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Ka.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xa.delete(t.pointerId);
  }
}
function ba(e, t, n, a, r, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [r] }, t !== null && (t = vr(t), t !== null && Ls(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e);
}
function um(e, t, n, a, r) {
  switch (t) {
    case "focusin":
      return on = ba(on, e, t, n, a, r), !0;
    case "dragenter":
      return sn = ba(sn, e, t, n, a, r), !0;
    case "mouseover":
      return ln = ba(ln, e, t, n, a, r), !0;
    case "pointerover":
      var i = r.pointerId;
      return Ka.set(i, ba(Ka.get(i) || null, e, t, n, a, r)), !0;
    case "gotpointercapture":
      return i = r.pointerId, Xa.set(i, ba(Xa.get(i) || null, e, t, n, a, r)), !0;
  }
  return !1;
}
function Nu(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = fu(n), t !== null) {
          e.blockedOn = t, _u(e.priority, function() {
            Cu(n);
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
function qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      Ti = a, n.target.dispatchEvent(a), Ti = null;
    } else return t = vr(n), t !== null && Ls(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Rl(e, t, n) {
  qr(e) && n.delete(t);
}
function dm() {
  Di = !1, on !== null && qr(on) && (on = null), sn !== null && qr(sn) && (sn = null), ln !== null && qr(ln) && (ln = null), Ka.forEach(Rl), Xa.forEach(Rl);
}
function Ea(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Di || (Di = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, dm)));
}
function Ja(e) {
  function t(r) {
    return Ea(r, e);
  }
  if (0 < br.length) {
    Ea(br[0], e);
    for (var n = 1; n < br.length; n++) {
      var a = br[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
  }
  for (on !== null && Ea(on, e), sn !== null && Ea(sn, e), ln !== null && Ea(ln, e), Ka.forEach(t), Xa.forEach(t), n = 0; n < tn.length; n++) a = tn[n], a.blockedOn === e && (a.blockedOn = null);
  for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) Nu(n), n.blockedOn === null && tn.shift();
}
var ra = Yt.ReactCurrentBatchConfig, ao = !0;
function pm(e, t, n, a) {
  var r = le, i = ra.transition;
  ra.transition = null;
  try {
    le = 1, As(e, t, n, a);
  } finally {
    le = r, ra.transition = i;
  }
}
function mm(e, t, n, a) {
  var r = le, i = ra.transition;
  ra.transition = null;
  try {
    le = 4, As(e, t, n, a);
  } finally {
    le = r, ra.transition = i;
  }
}
function As(e, t, n, a) {
  if (ao) {
    var r = $i(e, t, n, a);
    if (r === null) ri(e, t, a, ro, n), Tl(e, a);
    else if (um(r, e, t, n, a)) a.stopPropagation();
    else if (Tl(e, a), t & 4 && -1 < cm.indexOf(e)) {
      for (; r !== null; ) {
        var i = vr(r);
        if (i !== null && ku(i), i = $i(e, t, n, a), i === null && ri(e, t, a, ro, n), i === r) break;
        r = i;
      }
      r !== null && a.stopPropagation();
    } else ri(e, t, a, null, n);
  }
}
var ro = null;
function $i(e, t, n, a) {
  if (ro = null, e = Ms(a), e = Sn(e), e !== null) if (t = Dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = fu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ro = e, null;
}
function bu(e) {
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
      switch (em()) {
        case Ts:
          return 1;
        case yu:
          return 4;
        case to:
        case tm:
          return 16;
        case xu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var an = null, Is = null, Ur = null;
function Eu() {
  if (Ur) return Ur;
  var e, t = Is, n = t.length, a, r = "value" in an ? an.value : an.textContent, i = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++) ;
  var s = n - e;
  for (a = 1; a <= s && t[n - a] === r[i - a]; a++) ;
  return Ur = r.slice(e, 1 < a ? 1 - a : void 0);
}
function Vr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Er() {
  return !0;
}
function Ll() {
  return !1;
}
function ot(e) {
  function t(n, a, r, i, s) {
    this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Er : Ll, this.isPropagationStopped = Ll, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
  }, persist: function() {
  }, isPersistent: Er }), t;
}
var ga = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ds = ot(ga), gr = je({}, ga, { view: 0, detail: 0 }), fm = ot(gr), Yo, Ko, za, _o = je({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $s, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== za && (za && e.type === "mousemove" ? (Yo = e.screenX - za.screenX, Ko = e.screenY - za.screenY) : Ko = Yo = 0, za = e), Yo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ko;
} }), Al = ot(_o), hm = je({}, _o, { dataTransfer: 0 }), gm = ot(hm), vm = je({}, gr, { relatedTarget: 0 }), Xo = ot(vm), ym = je({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xm = ot(ym), wm = je({}, ga, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jm = ot(wm), km = je({}, ga, { data: 0 }), Il = ot(km), Cm = {
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
}, Sm = {
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
}, _m = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _m[e]) ? !!t[e] : !1;
}
function $s() {
  return Nm;
}
var bm = je({}, gr, { key: function(e) {
  if (e.key) {
    var t = Cm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Vr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $s, charCode: function(e) {
  return e.type === "keypress" ? Vr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Em = ot(bm), zm = je({}, _o, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dl = ot(zm), Pm = je({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $s }), Mm = ot(Pm), Tm = je({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rm = ot(Tm), Lm = je({}, _o, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Am = ot(Lm), Im = [9, 13, 27, 32], Os = Bt && "CompositionEvent" in window, Oa = null;
Bt && "documentMode" in document && (Oa = document.documentMode);
var Dm = Bt && "TextEvent" in window && !Oa, zu = Bt && (!Os || Oa && 8 < Oa && 11 >= Oa), $l = " ", Ol = !1;
function Pu(e, t) {
  switch (e) {
    case "keyup":
      return Im.indexOf(t.keyCode) !== -1;
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
function Mu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function $m(e, t) {
  switch (e) {
    case "compositionend":
      return Mu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ol = !0, $l);
    case "textInput":
      return e = t.data, e === $l && Ol ? null : e;
    default:
      return null;
  }
}
function Om(e, t) {
  if (Bn) return e === "compositionend" || !Os && Pu(e, t) ? (e = Eu(), Ur = Is = an = null, Bn = !1, e) : null;
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
      return zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function Tu(e, t, n, a) {
  cu(a), t = oo(t, "onChange"), 0 < t.length && (n = new Ds("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
}
var Fa = null, Za = null;
function qm(e) {
  Vu(e, 0);
}
function No(e) {
  var t = Qn(e);
  if (nu(t)) return e;
}
function Um(e, t) {
  if (e === "change") return t;
}
var Ru = !1;
if (Bt) {
  var Jo;
  if (Bt) {
    var Zo = "oninput" in document;
    if (!Zo) {
      var ql = document.createElement("div");
      ql.setAttribute("oninput", "return;"), Zo = typeof ql.oninput == "function";
    }
    Jo = Zo;
  } else Jo = !1;
  Ru = Jo && (!document.documentMode || 9 < document.documentMode);
}
function Ul() {
  Fa && (Fa.detachEvent("onpropertychange", Lu), Za = Fa = null);
}
function Lu(e) {
  if (e.propertyName === "value" && No(Za)) {
    var t = [];
    Tu(t, Za, e, Ms(e)), mu(qm, t);
  }
}
function Vm(e, t, n) {
  e === "focusin" ? (Ul(), Fa = t, Za = n, Fa.attachEvent("onpropertychange", Lu)) : e === "focusout" && Ul();
}
function Gm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return No(Za);
}
function Bm(e, t) {
  if (e === "click") return No(t);
}
function Hm(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function Wm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var _t = typeof Object.is == "function" ? Object.is : Wm;
function er(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var r = n[a];
    if (!wi.call(t, r) || !_t(e[r], t[r])) return !1;
  }
  return !0;
}
function Vl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gl(e, t) {
  var n = Vl(e);
  e = 0;
  for (var a; n; ) {
    if (n.nodeType === 3) {
      if (a = e + n.textContent.length, e <= t && a >= t) return { node: n, offset: t - e };
      e = a;
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
    n = Vl(n);
  }
}
function Au(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Iu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Qm(e) {
  var t = Iu(), n = e.focusedElem, a = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Au(n.ownerDocument.documentElement, n)) {
    if (a !== null && Fs(n)) {
      if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var r = n.textContent.length, i = Math.min(a.start, r);
        a = a.end === void 0 ? i : Math.min(a.end, r), !e.extend && i > a && (r = a, a = i, i = r), r = Gl(n, i);
        var s = Gl(
          n,
          a
        );
        r && s && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(r.node, r.offset), e.removeAllRanges(), i > a ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Ym = Bt && "documentMode" in document && 11 >= document.documentMode, Hn = null, Oi = null, qa = null, Fi = !1;
function Bl(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fi || Hn == null || Hn !== Jr(a) || (a = Hn, "selectionStart" in a && Fs(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), qa && er(qa, a) || (qa = a, a = oo(Oi, "onSelect"), 0 < a.length && (t = new Ds("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Hn)));
}
function zr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wn = { animationend: zr("Animation", "AnimationEnd"), animationiteration: zr("Animation", "AnimationIteration"), animationstart: zr("Animation", "AnimationStart"), transitionend: zr("Transition", "TransitionEnd") }, ei = {}, Du = {};
Bt && (Du = document.createElement("div").style, "AnimationEvent" in window || (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation), "TransitionEvent" in window || delete Wn.transitionend.transition);
function bo(e) {
  if (ei[e]) return ei[e];
  if (!Wn[e]) return e;
  var t = Wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Du) return ei[e] = t[n];
  return e;
}
var $u = bo("animationend"), Ou = bo("animationiteration"), Fu = bo("animationstart"), qu = bo("transitionend"), Uu = /* @__PURE__ */ new Map(), Hl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gn(e, t) {
  Uu.set(e, t), In(t, [e]);
}
for (var ti = 0; ti < Hl.length; ti++) {
  var ni = Hl[ti], Km = ni.toLowerCase(), Xm = ni[0].toUpperCase() + ni.slice(1);
  gn(Km, "on" + Xm);
}
gn($u, "onAnimationEnd");
gn(Ou, "onAnimationIteration");
gn(Fu, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(qu, "onTransitionEnd");
sa("onMouseEnter", ["mouseout", "mouseover"]);
sa("onMouseLeave", ["mouseout", "mouseover"]);
sa("onPointerEnter", ["pointerout", "pointerover"]);
sa("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ia = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));
function Wl(e, t, n) {
  var a = e.type || "unknown-event";
  e.currentTarget = n, Kp(a, t, void 0, e), e.currentTarget = null;
}
function Vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var a = e[n], r = a.event;
    a = a.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = a.length - 1; 0 <= s; s--) {
        var c = a[s], l = c.instance, d = c.currentTarget;
        if (c = c.listener, l !== i && r.isPropagationStopped()) break e;
        Wl(r, c, d), i = l;
      }
      else for (s = 0; s < a.length; s++) {
        if (c = a[s], l = c.instance, d = c.currentTarget, c = c.listener, l !== i && r.isPropagationStopped()) break e;
        Wl(r, c, d), i = l;
      }
    }
  }
  if (eo) throw e = Ai, eo = !1, Ai = null, e;
}
function ge(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = /* @__PURE__ */ new Set());
  var a = e + "__bubble";
  n.has(a) || (Gu(t, e, 2, !1), n.add(a));
}
function ai(e, t, n) {
  var a = 0;
  t && (a |= 4), Gu(n, e, a, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Pr]) {
    e[Pr] = !0, Xc.forEach(function(n) {
      n !== "selectionchange" && (Jm.has(n) || ai(n, !1, e), ai(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || (t[Pr] = !0, ai("selectionchange", !1, t));
  }
}
function Gu(e, t, n, a) {
  switch (bu(t)) {
    case 1:
      var r = pm;
      break;
    case 4:
      r = mm;
      break;
    default:
      r = As;
  }
  n = r.bind(null, t, n, e), r = void 0, !Li || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), a ? r !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: r }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, { passive: r }) : e.addEventListener(t, n, !1);
}
function ri(e, t, n, a, r) {
  var i = a;
  if (!(t & 1) && !(t & 2) && a !== null) e: for (; ; ) {
    if (a === null) return;
    var s = a.tag;
    if (s === 3 || s === 4) {
      var c = a.stateNode.containerInfo;
      if (c === r || c.nodeType === 8 && c.parentNode === r) break;
      if (s === 4) for (s = a.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === r || l.nodeType === 8 && l.parentNode === r)) return;
        s = s.return;
      }
      for (; c !== null; ) {
        if (s = Sn(c), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          a = i = s;
          continue e;
        }
        c = c.parentNode;
      }
    }
    a = a.return;
  }
  mu(function() {
    var d = i, h = Ms(n), m = [];
    e: {
      var y = Uu.get(e);
      if (y !== void 0) {
        var N = Ds, x = e;
        switch (e) {
          case "keypress":
            if (Vr(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = Em;
            break;
          case "focusin":
            x = "focus", N = Xo;
            break;
          case "focusout":
            x = "blur", N = Xo;
            break;
          case "beforeblur":
          case "afterblur":
            N = Xo;
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
            N = Al;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = gm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = Mm;
            break;
          case $u:
          case Ou:
          case Fu:
            N = xm;
            break;
          case qu:
            N = Rm;
            break;
          case "scroll":
            N = fm;
            break;
          case "wheel":
            N = Am;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = jm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = Dl;
        }
        var C = (t & 4) !== 0, S = !C && e === "scroll", u = C ? y !== null ? y + "Capture" : null : y;
        C = [];
        for (var p = d, f; p !== null; ) {
          f = p;
          var v = f.stateNode;
          if (f.tag === 5 && v !== null && (f = v, u !== null && (v = Ya(p, u), v != null && C.push(nr(p, v, f)))), S) break;
          p = p.return;
        }
        0 < C.length && (y = new N(y, x, null, n, h), m.push({ event: y, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", y && n !== Ti && (x = n.relatedTarget || n.fromElement) && (Sn(x) || x[Ht])) break e;
        if ((N || y) && (y = h.window === h ? h : (y = h.ownerDocument) ? y.defaultView || y.parentWindow : window, N ? (x = n.relatedTarget || n.toElement, N = d, x = x ? Sn(x) : null, x !== null && (S = Dn(x), x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (N = null, x = d), N !== x)) {
          if (C = Al, v = "onMouseLeave", u = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (C = Dl, v = "onPointerLeave", u = "onPointerEnter", p = "pointer"), S = N == null ? y : Qn(N), f = x == null ? y : Qn(x), y = new C(v, p + "leave", N, n, h), y.target = S, y.relatedTarget = f, v = null, Sn(h) === d && (C = new C(u, p + "enter", x, n, h), C.target = f, C.relatedTarget = S, v = C), S = v, N && x) t: {
            for (C = N, u = x, p = 0, f = C; f; f = qn(f)) p++;
            for (f = 0, v = u; v; v = qn(v)) f++;
            for (; 0 < p - f; ) C = qn(C), p--;
            for (; 0 < f - p; ) u = qn(u), f--;
            for (; p--; ) {
              if (C === u || u !== null && C === u.alternate) break t;
              C = qn(C), u = qn(u);
            }
            C = null;
          }
          else C = null;
          N !== null && Ql(m, y, N, C, !1), x !== null && S !== null && Ql(m, S, x, C, !0);
        }
      }
      e: {
        if (y = d ? Qn(d) : window, N = y.nodeName && y.nodeName.toLowerCase(), N === "select" || N === "input" && y.type === "file") var _ = Um;
        else if (Fl(y)) if (Ru) _ = Hm;
        else {
          _ = Gm;
          var M = Vm;
        }
        else (N = y.nodeName) && N.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (_ = Bm);
        if (_ && (_ = _(e, d))) {
          Tu(m, _, n, h);
          break e;
        }
        M && M(e, y, d), e === "focusout" && (M = y._wrapperState) && M.controlled && y.type === "number" && bi(y, "number", y.value);
      }
      switch (M = d ? Qn(d) : window, e) {
        case "focusin":
          (Fl(M) || M.contentEditable === "true") && (Hn = M, Oi = d, qa = null);
          break;
        case "focusout":
          qa = Oi = Hn = null;
          break;
        case "mousedown":
          Fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fi = !1, Bl(m, n, h);
          break;
        case "selectionchange":
          if (Ym) break;
        case "keydown":
        case "keyup":
          Bl(m, n, h);
      }
      var E;
      if (Os) e: {
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
      else Bn ? Pu(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (zu && n.locale !== "ko" && (Bn || b !== "onCompositionStart" ? b === "onCompositionEnd" && Bn && (E = Eu()) : (an = h, Is = "value" in an ? an.value : an.textContent, Bn = !0)), M = oo(d, b), 0 < M.length && (b = new Il(b, e, null, n, h), m.push({ event: b, listeners: M }), E ? b.data = E : (E = Mu(n), E !== null && (b.data = E)))), (E = Dm ? $m(e, n) : Om(e, n)) && (d = oo(d, "onBeforeInput"), 0 < d.length && (h = new Il("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: d }), h.data = E));
    }
    Vu(m, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oo(e, t) {
  for (var n = t + "Capture", a = []; e !== null; ) {
    var r = e, i = r.stateNode;
    r.tag === 5 && i !== null && (r = i, i = Ya(e, n), i != null && a.unshift(nr(e, i, r)), i = Ya(e, t), i != null && a.push(nr(e, i, r))), e = e.return;
  }
  return a;
}
function qn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ql(e, t, n, a, r) {
  for (var i = t._reactName, s = []; n !== null && n !== a; ) {
    var c = n, l = c.alternate, d = c.stateNode;
    if (l !== null && l === a) break;
    c.tag === 5 && d !== null && (c = d, r ? (l = Ya(n, i), l != null && s.unshift(nr(n, l, c))) : r || (l = Ya(n, i), l != null && s.push(nr(n, l, c)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Zm = /\r\n?/g, ef = /\u0000|\uFFFD/g;
function Yl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zm, `
`).replace(ef, "");
}
function Mr(e, t, n) {
  if (t = Yl(t), Yl(e) !== t && n) throw Error(R(425));
}
function io() {
}
var qi = null, Ui = null;
function Vi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Gi = typeof setTimeout == "function" ? setTimeout : void 0, tf = typeof clearTimeout == "function" ? clearTimeout : void 0, Kl = typeof Promise == "function" ? Promise : void 0, nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kl < "u" ? function(e) {
  return Kl.resolve(null).then(e).catch(af);
} : Gi;
function af(e) {
  setTimeout(function() {
    throw e;
  });
}
function oi(e, t) {
  var n = t, a = 0;
  do {
    var r = n.nextSibling;
    if (e.removeChild(n), r && r.nodeType === 8) if (n = r.data, n === "/$") {
      if (a === 0) {
        e.removeChild(r), Ja(t);
        return;
      }
      a--;
    } else n !== "$" && n !== "$?" && n !== "$!" || a++;
    n = r;
  } while (n);
  Ja(t);
}
function cn(e) {
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
function Xl(e) {
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
var va = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + va, ar = "__reactProps$" + va, Ht = "__reactContainer$" + va, Bi = "__reactEvents$" + va, rf = "__reactListeners$" + va, of = "__reactHandles$" + va;
function Sn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ht] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xl(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = Xl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function vr(e) {
  return e = e[Mt] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Eo(e) {
  return e[ar] || null;
}
var Hi = [], Yn = -1;
function vn(e) {
  return { current: e };
}
function ve(e) {
  0 > Yn || (e.current = Hi[Yn], Hi[Yn] = null, Yn--);
}
function fe(e, t) {
  Yn++, Hi[Yn] = e.current, e.current = t;
}
var hn = {}, Fe = vn(hn), Ke = vn(!1), Pn = hn;
function la(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var a = e.stateNode;
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
  var r = {}, i;
  for (i in n) r[i] = t[i];
  return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = r), r;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function so() {
  ve(Ke), ve(Fe);
}
function Jl(e, t, n) {
  if (Fe.current !== hn) throw Error(R(168));
  fe(Fe, t), fe(Ke, n);
}
function Bu(e, t, n) {
  var a = e.stateNode;
  if (t = t.childContextTypes, typeof a.getChildContext != "function") return n;
  a = a.getChildContext();
  for (var r in a) if (!(r in t)) throw Error(R(108, Vp(e) || "Unknown", r));
  return je({}, n, a);
}
function lo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, Pn = Fe.current, fe(Fe, e), fe(Ke, Ke.current), !0;
}
function Zl(e, t, n) {
  var a = e.stateNode;
  if (!a) throw Error(R(169));
  n ? (e = Bu(e, t, Pn), a.__reactInternalMemoizedMergedChildContext = e, ve(Ke), ve(Fe), fe(Fe, e)) : ve(Ke), fe(Ke, n);
}
var qt = null, zo = !1, ii = !1;
function Hu(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function sf(e) {
  zo = !0, Hu(e);
}
function yn() {
  if (!ii && qt !== null) {
    ii = !0;
    var e = 0, t = le;
    try {
      var n = qt;
      for (le = 1; e < n.length; e++) {
        var a = n[e];
        do
          a = a(!0);
        while (a !== null);
      }
      qt = null, zo = !1;
    } catch (r) {
      throw qt !== null && (qt = qt.slice(e + 1)), vu(Ts, yn), r;
    } finally {
      le = t, ii = !1;
    }
  }
  return null;
}
var Kn = [], Xn = 0, co = null, uo = 0, lt = [], ct = 0, Mn = null, Ut = 1, Vt = "";
function kn(e, t) {
  Kn[Xn++] = uo, Kn[Xn++] = co, co = e, uo = t;
}
function Wu(e, t, n) {
  lt[ct++] = Ut, lt[ct++] = Vt, lt[ct++] = Mn, Mn = e;
  var a = Ut;
  e = Vt;
  var r = 32 - Ct(a) - 1;
  a &= ~(1 << r), n += 1;
  var i = 32 - Ct(t) + r;
  if (30 < i) {
    var s = r - r % 5;
    i = (a & (1 << s) - 1).toString(32), a >>= s, r -= s, Ut = 1 << 32 - Ct(t) + r | n << r | a, Vt = i + e;
  } else Ut = 1 << i | n << r | a, Vt = e;
}
function qs(e) {
  e.return !== null && (kn(e, 1), Wu(e, 1, 0));
}
function Us(e) {
  for (; e === co; ) co = Kn[--Xn], Kn[Xn] = null, uo = Kn[--Xn], Kn[Xn] = null;
  for (; e === Mn; ) Mn = lt[--ct], lt[ct] = null, Vt = lt[--ct], lt[ct] = null, Ut = lt[--ct], lt[ct] = null;
}
var nt = null, tt = null, ye = !1, jt = null;
function Qu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, tt = cn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? { id: Ut, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, tt = null, !0) : !1;
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (ye) {
    var t = tt;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (Wi(e)) throw Error(R(418));
        t = cn(n.nextSibling);
        var a = nt;
        t && ec(e, t) ? Qu(a, n) : (e.flags = e.flags & -4097 | 2, ye = !1, nt = e);
      }
    } else {
      if (Wi(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, ye = !1, nt = e;
    }
  }
}
function tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  nt = e;
}
function Tr(e) {
  if (e !== nt) return !1;
  if (!ye) return tc(e), ye = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vi(e.type, e.memoizedProps)), t && (t = tt)) {
    if (Wi(e)) throw Yu(), Error(R(418));
    for (; t; ) Qu(e, t), t = cn(t.nextSibling);
  }
  if (tc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = cn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Yu() {
  for (var e = tt; e; ) e = cn(e.nextSibling);
}
function ca() {
  tt = nt = null, ye = !1;
}
function Vs(e) {
  jt === null ? jt = [e] : jt.push(e);
}
var lf = Yt.ReactCurrentBatchConfig;
function Pa(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(R(309));
        var a = n.stateNode;
      }
      if (!a) throw Error(R(147, e));
      var r = a, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var c = r.refs;
        s === null ? delete c[i] : c[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Rr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function Ku(e) {
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
  function a(u, p) {
    for (u = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? u.set(p.key, p) : u.set(p.index, p), p = p.sibling;
    return u;
  }
  function r(u, p) {
    return u = mn(u, p), u.index = 0, u.sibling = null, u;
  }
  function i(u, p, f) {
    return u.index = f, e ? (f = u.alternate, f !== null ? (f = f.index, f < p ? (u.flags |= 2, p) : f) : (u.flags |= 2, p)) : (u.flags |= 1048576, p);
  }
  function s(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function c(u, p, f, v) {
    return p === null || p.tag !== 6 ? (p = mi(f, u.mode, v), p.return = u, p) : (p = r(p, f), p.return = u, p);
  }
  function l(u, p, f, v) {
    var _ = f.type;
    return _ === Gn ? h(u, p, f.props.children, v, f.key) : p !== null && (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Zt && nc(_) === p.type) ? (v = r(p, f.props), v.ref = Pa(u, p, f), v.return = u, v) : (v = Kr(f.type, f.key, f.props, null, u.mode, v), v.ref = Pa(u, p, f), v.return = u, v);
  }
  function d(u, p, f, v) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== f.containerInfo || p.stateNode.implementation !== f.implementation ? (p = fi(f, u.mode, v), p.return = u, p) : (p = r(p, f.children || []), p.return = u, p);
  }
  function h(u, p, f, v, _) {
    return p === null || p.tag !== 7 ? (p = En(f, u.mode, v, _), p.return = u, p) : (p = r(p, f), p.return = u, p);
  }
  function m(u, p, f) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = mi("" + p, u.mode, f), p.return = u, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case kr:
          return f = Kr(p.type, p.key, p.props, null, u.mode, f), f.ref = Pa(u, null, p), f.return = u, f;
        case Vn:
          return p = fi(p, u.mode, f), p.return = u, p;
        case Zt:
          var v = p._init;
          return m(u, v(p._payload), f);
      }
      if (La(p) || _a(p)) return p = En(p, u.mode, f, null), p.return = u, p;
      Rr(u, p);
    }
    return null;
  }
  function y(u, p, f, v) {
    var _ = p !== null ? p.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return _ !== null ? null : c(u, p, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kr:
          return f.key === _ ? l(u, p, f, v) : null;
        case Vn:
          return f.key === _ ? d(u, p, f, v) : null;
        case Zt:
          return _ = f._init, y(
            u,
            p,
            _(f._payload),
            v
          );
      }
      if (La(f) || _a(f)) return _ !== null ? null : h(u, p, f, v, null);
      Rr(u, f);
    }
    return null;
  }
  function N(u, p, f, v, _) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return u = u.get(f) || null, c(p, u, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case kr:
          return u = u.get(v.key === null ? f : v.key) || null, l(p, u, v, _);
        case Vn:
          return u = u.get(v.key === null ? f : v.key) || null, d(p, u, v, _);
        case Zt:
          var M = v._init;
          return N(u, p, f, M(v._payload), _);
      }
      if (La(v) || _a(v)) return u = u.get(f) || null, h(p, u, v, _, null);
      Rr(p, v);
    }
    return null;
  }
  function x(u, p, f, v) {
    for (var _ = null, M = null, E = p, b = p = 0, U = null; E !== null && b < f.length; b++) {
      E.index > b ? (U = E, E = null) : U = E.sibling;
      var z = y(u, E, f[b], v);
      if (z === null) {
        E === null && (E = U);
        break;
      }
      e && E && z.alternate === null && t(u, E), p = i(z, p, b), M === null ? _ = z : M.sibling = z, M = z, E = U;
    }
    if (b === f.length) return n(u, E), ye && kn(u, b), _;
    if (E === null) {
      for (; b < f.length; b++) E = m(u, f[b], v), E !== null && (p = i(E, p, b), M === null ? _ = E : M.sibling = E, M = E);
      return ye && kn(u, b), _;
    }
    for (E = a(u, E); b < f.length; b++) U = N(E, u, b, f[b], v), U !== null && (e && U.alternate !== null && E.delete(U.key === null ? b : U.key), p = i(U, p, b), M === null ? _ = U : M.sibling = U, M = U);
    return e && E.forEach(function(w) {
      return t(u, w);
    }), ye && kn(u, b), _;
  }
  function C(u, p, f, v) {
    var _ = _a(f);
    if (typeof _ != "function") throw Error(R(150));
    if (f = _.call(f), f == null) throw Error(R(151));
    for (var M = _ = null, E = p, b = p = 0, U = null, z = f.next(); E !== null && !z.done; b++, z = f.next()) {
      E.index > b ? (U = E, E = null) : U = E.sibling;
      var w = y(u, E, z.value, v);
      if (w === null) {
        E === null && (E = U);
        break;
      }
      e && E && w.alternate === null && t(u, E), p = i(w, p, b), M === null ? _ = w : M.sibling = w, M = w, E = U;
    }
    if (z.done) return n(
      u,
      E
    ), ye && kn(u, b), _;
    if (E === null) {
      for (; !z.done; b++, z = f.next()) z = m(u, z.value, v), z !== null && (p = i(z, p, b), M === null ? _ = z : M.sibling = z, M = z);
      return ye && kn(u, b), _;
    }
    for (E = a(u, E); !z.done; b++, z = f.next()) z = N(E, u, b, z.value, v), z !== null && (e && z.alternate !== null && E.delete(z.key === null ? b : z.key), p = i(z, p, b), M === null ? _ = z : M.sibling = z, M = z);
    return e && E.forEach(function(O) {
      return t(u, O);
    }), ye && kn(u, b), _;
  }
  function S(u, p, f, v) {
    if (typeof f == "object" && f !== null && f.type === Gn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kr:
          e: {
            for (var _ = f.key, M = p; M !== null; ) {
              if (M.key === _) {
                if (_ = f.type, _ === Gn) {
                  if (M.tag === 7) {
                    n(u, M.sibling), p = r(M, f.props.children), p.return = u, u = p;
                    break e;
                  }
                } else if (M.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Zt && nc(_) === M.type) {
                  n(u, M.sibling), p = r(M, f.props), p.ref = Pa(u, M, f), p.return = u, u = p;
                  break e;
                }
                n(u, M);
                break;
              } else t(u, M);
              M = M.sibling;
            }
            f.type === Gn ? (p = En(f.props.children, u.mode, v, f.key), p.return = u, u = p) : (v = Kr(f.type, f.key, f.props, null, u.mode, v), v.ref = Pa(u, p, f), v.return = u, u = v);
          }
          return s(u);
        case Vn:
          e: {
            for (M = f.key; p !== null; ) {
              if (p.key === M) if (p.tag === 4 && p.stateNode.containerInfo === f.containerInfo && p.stateNode.implementation === f.implementation) {
                n(u, p.sibling), p = r(p, f.children || []), p.return = u, u = p;
                break e;
              } else {
                n(u, p);
                break;
              }
              else t(u, p);
              p = p.sibling;
            }
            p = fi(f, u.mode, v), p.return = u, u = p;
          }
          return s(u);
        case Zt:
          return M = f._init, S(u, p, M(f._payload), v);
      }
      if (La(f)) return x(u, p, f, v);
      if (_a(f)) return C(u, p, f, v);
      Rr(u, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, p !== null && p.tag === 6 ? (n(u, p.sibling), p = r(p, f), p.return = u, u = p) : (n(u, p), p = mi(f, u.mode, v), p.return = u, u = p), s(u)) : n(u, p);
  }
  return S;
}
var ua = Ku(!0), Xu = Ku(!1), po = vn(null), mo = null, Jn = null, Gs = null;
function Bs() {
  Gs = Jn = mo = null;
}
function Hs(e) {
  var t = po.current;
  ve(po), e._currentValue = t;
}
function Yi(e, t, n) {
  for (; e !== null; ) {
    var a = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function oa(e, t) {
  mo = e, Gs = Jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Gs !== e) if (e = { context: e, memoizedValue: t, next: null }, Jn === null) {
    if (mo === null) throw Error(R(308));
    Jn = e, mo.dependencies = { lanes: 0, firstContext: e };
  } else Jn = Jn.next = e;
  return t;
}
var _n = null;
function Ws(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function Ju(e, t, n, a) {
  var r = t.interleaved;
  return r === null ? (n.next = n, Ws(t)) : (n.next = r.next, r.next = n), t.interleaved = n, Wt(e, a);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Qs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Zu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (a = a.shared, ie & 2) {
    var r = a.pending;
    return r === null ? t.next = t : (t.next = r.next, r.next = t), a.pending = t, Wt(e, n);
  }
  return r = a.interleaved, r === null ? (t.next = t, Ws(a)) : (t.next = r.next, r.next = t), a.interleaved = t, Wt(e, n);
}
function Gr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var a = t.lanes;
    a &= e.pendingLanes, n |= a, t.lanes = n, Rs(e, n);
  }
}
function ac(e, t) {
  var n = e.updateQueue, a = e.alternate;
  if (a !== null && (a = a.updateQueue, n === a)) {
    var r = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? r = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? r = i = t : i = i.next = t;
    } else r = i = t;
    n = { baseState: a.baseState, firstBaseUpdate: r, lastBaseUpdate: i, shared: a.shared, effects: a.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function fo(e, t, n, a) {
  var r = e.updateQueue;
  en = !1;
  var i = r.firstBaseUpdate, s = r.lastBaseUpdate, c = r.shared.pending;
  if (c !== null) {
    r.shared.pending = null;
    var l = c, d = l.next;
    l.next = null, s === null ? i = d : s.next = d, s = l;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, c = h.lastBaseUpdate, c !== s && (c === null ? h.firstBaseUpdate = d : c.next = d, h.lastBaseUpdate = l));
  }
  if (i !== null) {
    var m = r.baseState;
    s = 0, h = d = l = null, c = i;
    do {
      var y = c.lane, N = c.eventTime;
      if ((a & y) === y) {
        h !== null && (h = h.next = {
          eventTime: N,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var x = e, C = c;
          switch (y = t, N = n, C.tag) {
            case 1:
              if (x = C.payload, typeof x == "function") {
                m = x.call(N, m, y);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = C.payload, y = typeof x == "function" ? x.call(N, m, y) : x, y == null) break e;
              m = je({}, m, y);
              break e;
            case 2:
              en = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (e.flags |= 64, y = r.effects, y === null ? r.effects = [c] : y.push(c));
      } else N = { eventTime: N, lane: y, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, h === null ? (d = h = N, l = m) : h = h.next = N, s |= y;
      if (c = c.next, c === null) {
        if (c = r.shared.pending, c === null) break;
        y = c, c = y.next, y.next = null, r.lastBaseUpdate = y, r.shared.pending = null;
      }
    } while (!0);
    if (h === null && (l = m), r.baseState = l, r.firstBaseUpdate = d, r.lastBaseUpdate = h, t = r.shared.interleaved, t !== null) {
      r = t;
      do
        s |= r.lane, r = r.next;
      while (r !== t);
    } else i === null && (r.shared.lanes = 0);
    Rn |= s, e.lanes = s, e.memoizedState = m;
  }
}
function rc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var a = e[t], r = a.callback;
    if (r !== null) {
      if (a.callback = null, a = n, typeof r != "function") throw Error(R(191, r));
      r.call(a);
    }
  }
}
var yr = {}, Rt = vn(yr), rr = vn(yr), or = vn(yr);
function Nn(e) {
  if (e === yr) throw Error(R(174));
  return e;
}
function Ys(e, t) {
  switch (fe(or, t), fe(rr, e), fe(Rt, yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zi(t, e);
  }
  ve(Rt), fe(Rt, t);
}
function da() {
  ve(Rt), ve(rr), ve(or);
}
function ed(e) {
  Nn(or.current);
  var t = Nn(Rt.current), n = zi(t, e.type);
  t !== n && (fe(rr, e), fe(Rt, n));
}
function Ks(e) {
  rr.current === e && (ve(Rt), ve(rr));
}
var xe = vn(0);
function ho(e) {
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
var si = [];
function Xs() {
  for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null;
  si.length = 0;
}
var Br = Yt.ReactCurrentDispatcher, li = Yt.ReactCurrentBatchConfig, Tn = 0, we = null, Ne = null, Me = null, go = !1, Ua = !1, ir = 0, cf = 0;
function De() {
  throw Error(R(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, a, r, i) {
  if (Tn = i, we = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Br.current = e === null || e.memoizedState === null ? mf : ff, e = n(a, r), Ua) {
    i = 0;
    do {
      if (Ua = !1, ir = 0, 25 <= i) throw Error(R(301));
      i += 1, Me = Ne = null, t.updateQueue = null, Br.current = hf, e = n(a, r);
    } while (Ua);
  }
  if (Br.current = vo, t = Ne !== null && Ne.next !== null, Tn = 0, Me = Ne = we = null, go = !1, t) throw Error(R(300));
  return e;
}
function el() {
  var e = ir !== 0;
  return ir = 0, e;
}
function Pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? we.memoizedState = Me = e : Me = Me.next = e, Me;
}
function mt() {
  if (Ne === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Me === null ? we.memoizedState : Me.next;
  if (t !== null) Me = t, Ne = e;
  else {
    if (e === null) throw Error(R(310));
    Ne = e, e = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, Me === null ? we.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var a = Ne, r = a.baseQueue, i = n.pending;
  if (i !== null) {
    if (r !== null) {
      var s = r.next;
      r.next = i.next, i.next = s;
    }
    a.baseQueue = r = i, n.pending = null;
  }
  if (r !== null) {
    i = r.next, a = a.baseState;
    var c = s = null, l = null, d = i;
    do {
      var h = d.lane;
      if ((Tn & h) === h) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), a = d.hasEagerState ? d.eagerState : e(a, d.action);
      else {
        var m = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (c = l = m, s = a) : l = l.next = m, we.lanes |= h, Rn |= h;
      }
      d = d.next;
    } while (d !== null && d !== i);
    l === null ? s = a : l.next = c, _t(a, t.memoizedState) || (Ye = !0), t.memoizedState = a, t.baseState = s, t.baseQueue = l, n.lastRenderedState = a;
  }
  if (e = n.interleaved, e !== null) {
    r = e;
    do
      i = r.lane, we.lanes |= i, Rn |= i, r = r.next;
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch, r = n.pending, i = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var s = r = r.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== r);
    _t(i, t.memoizedState) || (Ye = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, a];
}
function td() {
}
function nd(e, t) {
  var n = we, a = mt(), r = t(), i = !_t(a.memoizedState, r);
  if (i && (a.memoizedState = r, Ye = !0), a = a.queue, tl(od.bind(null, n, a, e), [e]), a.getSnapshot !== t || i || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, lr(9, rd.bind(null, n, a, r, t), void 0, null), Te === null) throw Error(R(349));
    Tn & 30 || ad(n, t, r);
  }
  return r;
}
function ad(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = we.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, we.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function rd(e, t, n, a) {
  t.value = n, t.getSnapshot = a, id(t) && sd(e);
}
function od(e, t, n) {
  return n(function() {
    id(t) && sd(e);
  });
}
function id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function sd(e) {
  var t = Wt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function oc(e) {
  var t = Pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = pf.bind(null, we, e), [t.memoizedState, e];
}
function lr(e, t, n, a) {
  return e = { tag: e, create: t, destroy: n, deps: a, next: null }, t = we.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, we.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e)), e;
}
function ld() {
  return mt().memoizedState;
}
function Hr(e, t, n, a) {
  var r = Pt();
  we.flags |= e, r.memoizedState = lr(1 | t, n, void 0, a === void 0 ? null : a);
}
function Po(e, t, n, a) {
  var r = mt();
  a = a === void 0 ? null : a;
  var i = void 0;
  if (Ne !== null) {
    var s = Ne.memoizedState;
    if (i = s.destroy, a !== null && Js(a, s.deps)) {
      r.memoizedState = lr(t, n, i, a);
      return;
    }
  }
  we.flags |= e, r.memoizedState = lr(1 | t, n, i, a);
}
function ic(e, t) {
  return Hr(8390656, 8, e, t);
}
function tl(e, t) {
  return Po(2048, 8, e, t);
}
function cd(e, t) {
  return Po(4, 2, e, t);
}
function ud(e, t) {
  return Po(4, 4, e, t);
}
function dd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function pd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Po(4, 4, dd.bind(null, t, e), n);
}
function nl() {
}
function md(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && Js(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
}
function fd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && Js(t, a[1]) ? a[0] : (e = e(), n.memoizedState = [e, t], e);
}
function hd(e, t, n) {
  return Tn & 21 ? (_t(n, t) || (n = wu(), we.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n);
}
function uf(e, t) {
  var n = le;
  le = n !== 0 && 4 > n ? n : 4, e(!0);
  var a = li.transition;
  li.transition = {};
  try {
    e(!1), t();
  } finally {
    le = n, li.transition = a;
  }
}
function gd() {
  return mt().memoizedState;
}
function df(e, t, n) {
  var a = pn(e);
  if (n = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null }, vd(e)) yd(t, n);
  else if (n = Ju(e, t, n, a), n !== null) {
    var r = Be();
    St(n, e, a, r), xd(n, t, a);
  }
}
function pf(e, t, n) {
  var a = pn(e), r = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vd(e)) yd(t, r);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, c = i(s, n);
      if (r.hasEagerState = !0, r.eagerState = c, _t(c, s)) {
        var l = t.interleaved;
        l === null ? (r.next = r, Ws(t)) : (r.next = l.next, l.next = r), t.interleaved = r;
        return;
      }
    } catch {
    } finally {
    }
    n = Ju(e, t, r, a), n !== null && (r = Be(), St(n, e, a, r), xd(n, t, a));
  }
}
function vd(e) {
  var t = e.alternate;
  return e === we || t !== null && t === we;
}
function yd(e, t) {
  Ua = go = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function xd(e, t, n) {
  if (n & 4194240) {
    var a = t.lanes;
    a &= e.pendingLanes, n |= a, t.lanes = n, Rs(e, n);
  }
}
var vo = { readContext: pt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, mf = { readContext: pt, useCallback: function(e, t) {
  return Pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: ic, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hr(
    4194308,
    4,
    dd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Hr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Hr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var a = Pt();
  return t = n !== void 0 ? n(t) : t, a.memoizedState = a.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, a.queue = e, e = e.dispatch = df.bind(null, we, e), [a.memoizedState, e];
}, useRef: function(e) {
  var t = Pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: oc, useDebugValue: nl, useDeferredValue: function(e) {
  return Pt().memoizedState = e;
}, useTransition: function() {
  var e = oc(!1), t = e[0];
  return e = uf.bind(null, e[1]), Pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var a = we, r = Pt();
  if (ye) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), Te === null) throw Error(R(349));
    Tn & 30 || ad(a, t, n);
  }
  r.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return r.queue = i, ic(od.bind(
    null,
    a,
    i,
    e
  ), [e]), a.flags |= 2048, lr(9, rd.bind(null, a, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Pt(), t = Te.identifierPrefix;
  if (ye) {
    var n = Vt, a = Ut;
    n = (a & ~(1 << 32 - Ct(a) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = cf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ff = {
  readContext: pt,
  useCallback: md,
  useContext: pt,
  useEffect: tl,
  useImperativeHandle: pd,
  useInsertionEffect: cd,
  useLayoutEffect: ud,
  useMemo: fd,
  useReducer: ci,
  useRef: ld,
  useState: function() {
    return ci(sr);
  },
  useDebugValue: nl,
  useDeferredValue: function(e) {
    var t = mt();
    return hd(t, Ne.memoizedState, e);
  },
  useTransition: function() {
    var e = ci(sr)[0], t = mt().memoizedState;
    return [e, t];
  },
  useMutableSource: td,
  useSyncExternalStore: nd,
  useId: gd,
  unstable_isNewReconciler: !1
}, hf = { readContext: pt, useCallback: md, useContext: pt, useEffect: tl, useImperativeHandle: pd, useInsertionEffect: cd, useLayoutEffect: ud, useMemo: fd, useReducer: ui, useRef: ld, useState: function() {
  return ui(sr);
}, useDebugValue: nl, useDeferredValue: function(e) {
  var t = mt();
  return Ne === null ? t.memoizedState = e : hd(t, Ne.memoizedState, e);
}, useTransition: function() {
  var e = ui(sr)[0], t = mt().memoizedState;
  return [e, t];
}, useMutableSource: td, useSyncExternalStore: nd, useId: gd, unstable_isNewReconciler: !1 };
function xt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ki(e, t, n, a) {
  t = e.memoizedState, n = n(a, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var a = Be(), r = pn(e), i = Gt(a, r);
  i.payload = t, n != null && (i.callback = n), t = un(e, i, r), t !== null && (St(t, e, r, a), Gr(t, e, r));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var a = Be(), r = pn(e), i = Gt(a, r);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = un(e, i, r), t !== null && (St(t, e, r, a), Gr(t, e, r));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), a = pn(e), r = Gt(n, a);
  r.tag = 2, t != null && (r.callback = t), t = un(e, r, a), t !== null && (St(t, e, a, n), Gr(t, e, a));
} };
function sc(e, t, n, a, r, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, s) : t.prototype && t.prototype.isPureReactComponent ? !er(n, a) || !er(r, i) : !0;
}
function wd(e, t, n) {
  var a = !1, r = hn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = pt(i) : (r = Xe(t) ? Pn : Fe.current, a = t.contextTypes, i = (a = a != null) ? la(e, r) : hn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mo, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function lc(e, t, n, a) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Mo.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, a) {
  var r = e.stateNode;
  r.props = n, r.state = e.memoizedState, r.refs = {}, Qs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? r.context = pt(i) : (i = Xe(t) ? Pn : Fe.current, r.context = la(e, i)), r.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ki(e, t, i, n), r.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), t !== r.state && Mo.enqueueReplaceState(r, r.state, null), fo(e, n, r, a), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function pa(e, t) {
  try {
    var n = "", a = t;
    do
      n += Up(a), a = a.return;
    while (a);
    var r = n;
  } catch (i) {
    r = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function di(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gf = typeof WeakMap == "function" ? WeakMap : Map;
function jd(e, t, n) {
  n = Gt(-1, n), n.tag = 3, n.payload = { element: null };
  var a = t.value;
  return n.callback = function() {
    xo || (xo = !0, ls = a), Ji(e, t);
  }, n;
}
function kd(e, t, n) {
  n = Gt(-1, n), n.tag = 3;
  var a = e.type.getDerivedStateFromError;
  if (typeof a == "function") {
    var r = t.value;
    n.payload = function() {
      return a(r);
    }, n.callback = function() {
      Ji(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ji(e, t), typeof a != "function" && (dn === null ? dn = /* @__PURE__ */ new Set([this]) : dn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function cc(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new gf();
    var r = /* @__PURE__ */ new Set();
    a.set(t, r);
  } else r = a.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(t, r));
  r.has(n) || (r.add(n), e = Pf.bind(null, e, t, n), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dc(e, t, n, a, r) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = r, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gt(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var vf = Yt.ReactCurrentOwner, Ye = !1;
function Ge(e, t, n, a) {
  t.child = e === null ? Xu(t, null, n, a) : ua(t, e.child, n, a);
}
function pc(e, t, n, a, r) {
  n = n.render;
  var i = t.ref;
  return oa(t, r), a = Zs(e, t, n, a, i, r), n = el(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, Qt(e, t, r)) : (ye && n && qs(t), t.flags |= 1, Ge(e, t, a, r), t.child);
}
function mc(e, t, n, a, r) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ul(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Cd(e, t, i, a, r)) : (e = Kr(n.type, null, a, t, t.mode, r), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & r)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : er, n(s, a) && e.ref === t.ref) return Qt(e, t, r);
  }
  return t.flags |= 1, e = mn(i, a), e.ref = t.ref, e.return = t, t.child = e;
}
function Cd(e, t, n, a, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (er(i, a) && e.ref === t.ref) if (Ye = !1, t.pendingProps = a = i, (e.lanes & r) !== 0) e.flags & 131072 && (Ye = !0);
    else return t.lanes = e.lanes, Qt(e, t, r);
  }
  return Zi(e, t, n, a, r);
}
function Sd(e, t, n) {
  var a = t.pendingProps, r = a.children, i = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(ea, et), et |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(ea, et), et |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = i !== null ? i.baseLanes : n, fe(ea, et), et |= a;
  }
  else i !== null ? (a = i.baseLanes | n, t.memoizedState = null) : a = n, fe(ea, et), et |= a;
  return Ge(e, t, r, n), t.child;
}
function _d(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, a, r) {
  var i = Xe(n) ? Pn : Fe.current;
  return i = la(t, i), oa(t, r), n = Zs(e, t, n, a, i, r), a = el(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, Qt(e, t, r)) : (ye && a && qs(t), t.flags |= 1, Ge(e, t, n, r), t.child);
}
function fc(e, t, n, a, r) {
  if (Xe(n)) {
    var i = !0;
    lo(t);
  } else i = !1;
  if (oa(t, r), t.stateNode === null) Wr(e, t), wd(t, n, a), Xi(t, n, a, r), a = !0;
  else if (e === null) {
    var s = t.stateNode, c = t.memoizedProps;
    s.props = c;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Xe(n) ? Pn : Fe.current, d = la(t, d));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== a || l !== d) && lc(t, s, a, d), en = !1;
    var y = t.memoizedState;
    s.state = y, fo(t, a, s, r), l = t.memoizedState, c !== a || y !== l || Ke.current || en ? (typeof h == "function" && (Ki(t, n, h, a), l = t.memoizedState), (c = en || sc(t, n, c, a, y, l, d)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = l), s.props = a, s.state = l, s.context = d, a = c) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
  } else {
    s = t.stateNode, Zu(e, t), c = t.memoizedProps, d = t.type === t.elementType ? c : xt(t.type, c), s.props = d, m = t.pendingProps, y = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = pt(l) : (l = Xe(n) ? Pn : Fe.current, l = la(t, l));
    var N = n.getDerivedStateFromProps;
    (h = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== m || y !== l) && lc(t, s, a, l), en = !1, y = t.memoizedState, s.state = y, fo(t, a, s, r);
    var x = t.memoizedState;
    c !== m || y !== x || Ke.current || en ? (typeof N == "function" && (Ki(t, n, N, a), x = t.memoizedState), (d = en || sc(t, n, d, a, y, x, l) || !1) ? (h || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, x, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, x, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = x), s.props = a, s.state = x, s.context = l, a = d) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), a = !1);
  }
  return es(e, t, n, a, i, r);
}
function es(e, t, n, a, r, i) {
  _d(e, t);
  var s = (t.flags & 128) !== 0;
  if (!a && !s) return r && Zl(t, n, !1), Qt(e, t, i);
  a = t.stateNode, vf.current = t;
  var c = s && typeof n.getDerivedStateFromError != "function" ? null : a.render();
  return t.flags |= 1, e !== null && s ? (t.child = ua(t, e.child, null, i), t.child = ua(t, null, c, i)) : Ge(e, t, c, i), t.memoizedState = a.state, r && Zl(t, n, !0), t.child;
}
function Nd(e) {
  var t = e.stateNode;
  t.pendingContext ? Jl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jl(e, t.context, !1), Ys(e, t.containerInfo);
}
function hc(e, t, n, a, r) {
  return ca(), Vs(r), t.flags |= 256, Ge(e, t, n, a), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bd(e, t, n) {
  var a = t.pendingProps, r = xe.current, i = !1, s = (t.flags & 128) !== 0, c;
  if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1), fe(xe, r & 1), e === null)
    return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(a & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Lo(s, a, 0, null), e = En(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ns(n), t.memoizedState = ts, e) : al(t, s));
  if (r = e.memoizedState, r !== null && (c = r.dehydrated, c !== null)) return yf(e, t, s, a, c, r, n);
  if (i) {
    i = a.fallback, s = t.mode, r = e.child, c = r.sibling;
    var l = { mode: "hidden", children: a.children };
    return !(s & 1) && t.child !== r ? (a = t.child, a.childLanes = 0, a.pendingProps = l, t.deletions = null) : (a = mn(r, l), a.subtreeFlags = r.subtreeFlags & 14680064), c !== null ? i = mn(c, i) : (i = En(i, s, n, null), i.flags |= 2), i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, s = e.child.memoizedState, s = s === null ? ns(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = ts, a;
  }
  return i = e.child, e = i.sibling, a = mn(i, { mode: "visible", children: a.children }), !(t.mode & 1) && (a.lanes = n), a.return = t, a.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a;
}
function al(e, t) {
  return t = Lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Lr(e, t, n, a) {
  return a !== null && Vs(a), ua(t, e.child, null, n), e = al(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function yf(e, t, n, a, r, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, a = di(Error(R(422))), Lr(e, t, s, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = a.fallback, r = t.mode, a = Lo({ mode: "visible", children: a.children }, r, 0, null), i = En(i, r, s, null), i.flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, t.mode & 1 && ua(t, e.child, null, s), t.child.memoizedState = ns(s), t.memoizedState = ts, i);
  if (!(t.mode & 1)) return Lr(e, t, s, null);
  if (r.data === "$!") {
    if (a = r.nextSibling && r.nextSibling.dataset, a) var c = a.dgst;
    return a = c, i = Error(R(419)), a = di(i, a, void 0), Lr(e, t, s, a);
  }
  if (c = (s & e.childLanes) !== 0, Ye || c) {
    if (a = Te, a !== null) {
      switch (s & -s) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      r = r & (a.suspendedLanes | s) ? 0 : r, r !== 0 && r !== i.retryLane && (i.retryLane = r, Wt(e, r), St(a, e, r, -1));
    }
    return cl(), a = di(Error(R(421))), Lr(e, t, s, a);
  }
  return r.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mf.bind(null, e), r._reactRetry = t, null) : (e = i.treeContext, tt = cn(r.nextSibling), nt = t, ye = !0, jt = null, e !== null && (lt[ct++] = Ut, lt[ct++] = Vt, lt[ct++] = Mn, Ut = e.id, Vt = e.overflow, Mn = t), t = al(t, a.children), t.flags |= 4096, t);
}
function gc(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), Yi(e.return, t, n);
}
function pi(e, t, n, a, r) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: r } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = n, i.tailMode = r);
}
function Ed(e, t, n) {
  var a = t.pendingProps, r = a.revealOrder, i = a.tail;
  if (Ge(e, t, a.children, n), a = xe.current, a & 2) a = a & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
      else if (e.tag === 19) gc(e, n, t);
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
    a &= 1;
  }
  if (fe(xe, a), !(t.mode & 1)) t.memoizedState = null;
  else switch (r) {
    case "forwards":
      for (n = t.child, r = null; n !== null; ) e = n.alternate, e !== null && ho(e) === null && (r = n), n = n.sibling;
      n = r, n === null ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), pi(t, !1, r, n, i);
      break;
    case "backwards":
      for (n = null, r = t.child, t.child = null; r !== null; ) {
        if (e = r.alternate, e !== null && ho(e) === null) {
          t.child = r;
          break;
        }
        e = r.sibling, r.sibling = n, n = r, r = e;
      }
      pi(t, !0, n, null, i);
      break;
    case "together":
      pi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function xf(e, t, n) {
  switch (t.tag) {
    case 3:
      Nd(t), ca();
      break;
    case 5:
      ed(t);
      break;
    case 1:
      Xe(t.type) && lo(t);
      break;
    case 4:
      Ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var a = t.type._context, r = t.memoizedProps.value;
      fe(po, a._currentValue), a._currentValue = r;
      break;
    case 13:
      if (a = t.memoizedState, a !== null)
        return a.dehydrated !== null ? (fe(xe, xe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bd(e, t, n) : (fe(xe, xe.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
      fe(xe, xe.current & 1);
      break;
    case 19:
      if (a = (n & t.childLanes) !== 0, e.flags & 128) {
        if (a) return Ed(e, t, n);
        t.flags |= 128;
      }
      if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), fe(xe, xe.current), a) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sd(e, t, n);
  }
  return Qt(e, t, n);
}
var zd, as, Pd, Md;
zd = function(e, t) {
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
as = function() {
};
Pd = function(e, t, n, a) {
  var r = e.memoizedProps;
  if (r !== a) {
    e = t.stateNode, Nn(Rt.current);
    var i = null;
    switch (n) {
      case "input":
        r = _i(e, r), a = _i(e, a), i = [];
        break;
      case "select":
        r = je({}, r, { value: void 0 }), a = je({}, a, { value: void 0 }), i = [];
        break;
      case "textarea":
        r = Ei(e, r), a = Ei(e, a), i = [];
        break;
      default:
        typeof r.onClick != "function" && typeof a.onClick == "function" && (e.onclick = io);
    }
    Pi(n, a);
    var s;
    n = null;
    for (d in r) if (!a.hasOwnProperty(d) && r.hasOwnProperty(d) && r[d] != null) if (d === "style") {
      var c = r[d];
      for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Wa.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in a) {
      var l = a[d];
      if (c = r != null ? r[d] : void 0, a.hasOwnProperty(d) && l !== c && (l != null || c != null)) if (d === "style") if (c) {
        for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (i = i || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Wa.hasOwnProperty(d) ? (l != null && d === "onScroll" && ge("scroll", e), i || c === l || (i = [])) : (i = i || []).push(d, l));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Md = function(e, t, n, a) {
  n !== a && (t.flags |= 4);
};
function Ma(e, t) {
  if (!ye) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
      a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
  }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
  if (t) for (var r = e.child; r !== null; ) n |= r.lanes | r.childLanes, a |= r.subtreeFlags & 14680064, a |= r.flags & 14680064, r.return = e, r = r.sibling;
  else for (r = e.child; r !== null; ) n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = e, r = r.sibling;
  return e.subtreeFlags |= a, e.childLanes = n, t;
}
function wf(e, t, n) {
  var a = t.pendingProps;
  switch (Us(t), t.tag) {
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
      return Xe(t.type) && so(), $e(t), null;
    case 3:
      return a = t.stateNode, da(), ve(Ke), ve(Fe), Xs(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && (ds(jt), jt = null))), as(e, t), $e(t), null;
    case 5:
      Ks(t);
      var r = Nn(or.current);
      if (n = t.type, e !== null && t.stateNode != null) Pd(e, t, n, a, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(R(166));
          return $e(t), null;
        }
        if (e = Nn(Rt.current), Tr(t)) {
          a = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (a[Mt] = t, a[ar] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ge("cancel", a), ge("close", a);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", a);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ia.length; r++) ge(Ia[r], a);
              break;
            case "source":
              ge("error", a);
              break;
            case "img":
            case "image":
            case "link":
              ge(
                "error",
                a
              ), ge("load", a);
              break;
            case "details":
              ge("toggle", a);
              break;
            case "input":
              _l(a, i), ge("invalid", a);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!i.multiple }, ge("invalid", a);
              break;
            case "textarea":
              bl(a, i), ge("invalid", a);
          }
          Pi(n, i), r = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var c = i[s];
            s === "children" ? typeof c == "string" ? a.textContent !== c && (i.suppressHydrationWarning !== !0 && Mr(a.textContent, c, e), r = ["children", c]) : typeof c == "number" && a.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && Mr(
              a.textContent,
              c,
              e
            ), r = ["children", "" + c]) : Wa.hasOwnProperty(s) && c != null && s === "onScroll" && ge("scroll", a);
          }
          switch (n) {
            case "input":
              Cr(a), Nl(a, i, !0);
              break;
            case "textarea":
              Cr(a), El(a);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (a.onclick = io);
          }
          a = r, t.updateQueue = a, a !== null && (t.flags |= 4);
        } else {
          s = r.nodeType === 9 ? r : r.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ou(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = s.createElement(n, { is: a.is }) : (e = s.createElement(n), n === "select" && (s = e, a.multiple ? s.multiple = !0 : a.size && (s.size = a.size))) : e = s.createElementNS(e, n), e[Mt] = t, e[ar] = a, zd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Mi(n, a), n) {
              case "dialog":
                ge("cancel", e), ge("close", e), r = a;
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), r = a;
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ia.length; r++) ge(Ia[r], e);
                r = a;
                break;
              case "source":
                ge("error", e), r = a;
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  e
                ), ge("load", e), r = a;
                break;
              case "details":
                ge("toggle", e), r = a;
                break;
              case "input":
                _l(e, a), r = _i(e, a), ge("invalid", e);
                break;
              case "option":
                r = a;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!a.multiple }, r = je({}, a, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                bl(e, a), r = Ei(e, a), ge("invalid", e);
                break;
              default:
                r = a;
            }
            Pi(n, r), c = r;
            for (i in c) if (c.hasOwnProperty(i)) {
              var l = c[i];
              i === "style" ? lu(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && iu(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Qa(e, l) : typeof l == "number" && Qa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wa.hasOwnProperty(i) ? l != null && i === "onScroll" && ge("scroll", e) : l != null && bs(e, i, l, s));
            }
            switch (n) {
              case "input":
                Cr(e), Nl(e, a, !1);
                break;
              case "textarea":
                Cr(e), El(e);
                break;
              case "option":
                a.value != null && e.setAttribute("value", "" + fn(a.value));
                break;
              case "select":
                e.multiple = !!a.multiple, i = a.value, i != null ? ta(e, !!a.multiple, i, !1) : a.defaultValue != null && ta(
                  e,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                );
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
          }
          a && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Md(e, t, e.memoizedProps, a);
      else {
        if (typeof a != "string" && t.stateNode === null) throw Error(R(166));
        if (n = Nn(or.current), Nn(Rt.current), Tr(t)) {
          if (a = t.stateNode, n = t.memoizedProps, a[Mt] = t, (i = a.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
            case 3:
              Mr(a.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Mr(a.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a), a[Mt] = t, t.stateNode = a;
      }
      return $e(t), null;
    case 13:
      if (ve(xe), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ye && tt !== null && t.mode & 1 && !(t.flags & 128)) Yu(), ca(), t.flags |= 98560, i = !1;
        else if (i = Tr(t), a !== null && a.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
            i[Mt] = t;
          } else ca(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), i = !1;
        } else jt !== null && (ds(jt), jt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, t.mode & 1 && (e === null || xe.current & 1 ? be === 0 && (be = 3) : cl())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return da(), as(e, t), e === null && tr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Hs(t.type._context), $e(t), null;
    case 17:
      return Xe(t.type) && so(), $e(t), null;
    case 19:
      if (ve(xe), i = t.memoizedState, i === null) return $e(t), null;
      if (a = (t.flags & 128) !== 0, s = i.rendering, s === null) if (a) Ma(i, !1);
      else {
        if (be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ho(e), s !== null) {
            for (t.flags |= 128, Ma(i, !1), a = s.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = n, n = t.child; n !== null; ) i = n, e = a, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(xe, xe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Ce() > ma && (t.flags |= 128, a = !0, Ma(i, !1), t.lanes = 4194304);
      }
      else {
        if (!a) if (e = ho(s), e !== null) {
          if (t.flags |= 128, a = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ma(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ye) return $e(t), null;
        } else 2 * Ce() - i.renderingStartTime > ma && n !== 1073741824 && (t.flags |= 128, a = !0, Ma(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ce(), t.sibling = null, n = xe.current, fe(xe, a ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return ll(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && t.mode & 1 ? et & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function jf(e, t) {
  switch (Us(t), t.tag) {
    case 1:
      return Xe(t.type) && so(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return da(), ve(Ke), ve(Fe), Xs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ks(t), null;
    case 13:
      if (ve(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        ca();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ve(xe), null;
    case 4:
      return da(), null;
    case 10:
      return Hs(t.type._context), null;
    case 22:
    case 23:
      return ll(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1, Oe = !1, kf = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (a) {
    ke(e, t, a);
  }
  else n.current = null;
}
function rs(e, t, n) {
  try {
    n();
  } catch (a) {
    ke(e, t, a);
  }
}
var vc = !1;
function Cf(e, t) {
  if (qi = ao, e = Iu(), Fs(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var a = n.getSelection && n.getSelection();
      if (a && a.rangeCount !== 0) {
        n = a.anchorNode;
        var r = a.anchorOffset, i = a.focusNode;
        a = a.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, c = -1, l = -1, d = 0, h = 0, m = e, y = null;
        t: for (; ; ) {
          for (var N; m !== n || r !== 0 && m.nodeType !== 3 || (c = s + r), m !== i || a !== 0 && m.nodeType !== 3 || (l = s + a), m.nodeType === 3 && (s += m.nodeValue.length), (N = m.firstChild) !== null; )
            y = m, m = N;
          for (; ; ) {
            if (m === e) break t;
            if (y === n && ++d === r && (c = s), y === i && ++h === a && (l = s), (N = m.nextSibling) !== null) break;
            m = y, y = m.parentNode;
          }
          m = N;
        }
        n = c === -1 || l === -1 ? null : { start: c, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, ao = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
  else for (; q !== null; ) {
    t = q;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var C = x.memoizedProps, S = x.memoizedState, u = t.stateNode, p = u.getSnapshotBeforeUpdate(t.elementType === t.type ? C : xt(t.type, C), S);
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
          throw Error(R(163));
      }
    } catch (v) {
      ke(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return x = vc, vc = !1, x;
}
function Va(e, t, n) {
  var a = t.updateQueue;
  if (a = a !== null ? a.lastEffect : null, a !== null) {
    var r = a = a.next;
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        r.destroy = void 0, i !== void 0 && rs(t, n, i);
      }
      r = r.next;
    } while (r !== a);
  }
}
function To(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var a = n.create;
        n.destroy = a();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
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
function Td(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Td(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[ar], delete t[Bi], delete t[rf], delete t[of])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function is(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = io));
  else if (a !== 4 && (e = e.child, e !== null)) for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), e = e.sibling;
}
function ss(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && (e = e.child, e !== null)) for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), e = e.sibling;
}
var Le = null, wt = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) Ld(e, t, n), n = n.sibling;
}
function Ld(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
    Tt.onCommitFiberUnmount(So, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Oe || Zn(n, t);
    case 6:
      var a = Le, r = wt;
      Le = null, Jt(e, t, n), Le = a, wt = r, Le !== null && (wt ? (e = Le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null && (wt ? (e = Le, n = n.stateNode, e.nodeType === 8 ? oi(e.parentNode, n) : e.nodeType === 1 && oi(e, n), Ja(e)) : oi(Le, n.stateNode));
      break;
    case 4:
      a = Le, r = wt, Le = n.stateNode.containerInfo, wt = !0, Jt(e, t, n), Le = a, wt = r;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (a = n.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
        r = a = a.next;
        do {
          var i = r, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && rs(n, t, s), r = r.next;
        } while (r !== a);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (!Oe && (Zn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function")) try {
        a.props = n.memoizedProps, a.state = n.memoizedState, a.componentWillUnmount();
      } catch (c) {
        ke(n, t, c);
      }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Oe = (a = Oe) || n.memoizedState !== null, Jt(e, t, n), Oe = a) : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kf()), t.forEach(function(a) {
      var r = Tf.bind(null, e, a);
      n.has(a) || (n.add(a), a.then(r, r));
    });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var a = 0; a < n.length; a++) {
    var r = n[a];
    try {
      var i = e, s = t, c = s;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Le = c.stateNode, wt = !1;
            break e;
          case 3:
            Le = c.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Le = c.stateNode.containerInfo, wt = !0;
            break e;
        }
        c = c.return;
      }
      if (Le === null) throw Error(R(160));
      Ld(i, s, r), Le = null, wt = !1;
      var l = r.alternate;
      l !== null && (l.return = null), r.return = null;
    } catch (d) {
      ke(r, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ad(t, e), t = t.sibling;
}
function Ad(e, t) {
  var n = e.alternate, a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), zt(e), a & 4) {
        try {
          Va(3, e, e.return), To(3, e);
        } catch (C) {
          ke(e, e.return, C);
        }
        try {
          Va(5, e, e.return);
        } catch (C) {
          ke(e, e.return, C);
        }
      }
      break;
    case 1:
      yt(t, e), zt(e), a & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (yt(t, e), zt(e), a & 512 && n !== null && Zn(n, n.return), e.flags & 32) {
        var r = e.stateNode;
        try {
          Qa(r, "");
        } catch (C) {
          ke(e, e.return, C);
        }
      }
      if (a & 4 && (r = e.stateNode, r != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, c = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          c === "input" && i.type === "radio" && i.name != null && au(r, i), Mi(c, s);
          var d = Mi(c, i);
          for (s = 0; s < l.length; s += 2) {
            var h = l[s], m = l[s + 1];
            h === "style" ? lu(r, m) : h === "dangerouslySetInnerHTML" ? iu(r, m) : h === "children" ? Qa(r, m) : bs(r, h, m, d);
          }
          switch (c) {
            case "input":
              Ni(r, i);
              break;
            case "textarea":
              ru(r, i);
              break;
            case "select":
              var y = r._wrapperState.wasMultiple;
              r._wrapperState.wasMultiple = !!i.multiple;
              var N = i.value;
              N != null ? ta(r, !!i.multiple, N, !1) : y !== !!i.multiple && (i.defaultValue != null ? ta(
                r,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ta(r, !!i.multiple, i.multiple ? [] : "", !1));
          }
          r[ar] = i;
        } catch (C) {
          ke(e, e.return, C);
        }
      }
      break;
    case 6:
      if (yt(t, e), zt(e), a & 4) {
        if (e.stateNode === null) throw Error(R(162));
        r = e.stateNode, i = e.memoizedProps;
        try {
          r.nodeValue = i;
        } catch (C) {
          ke(e, e.return, C);
        }
      }
      break;
    case 3:
      if (yt(t, e), zt(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ja(t.containerInfo);
      } catch (C) {
        ke(e, e.return, C);
      }
      break;
    case 4:
      yt(t, e), zt(e);
      break;
    case 13:
      yt(t, e), zt(e), r = e.child, r.flags & 8192 && (i = r.memoizedState !== null, r.stateNode.isHidden = i, !i || r.alternate !== null && r.alternate.memoizedState !== null || (il = Ce())), a & 4 && xc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (d = Oe) || h, yt(t, e), Oe = d) : yt(t, e), zt(e), a & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (m = q = h; q !== null; ) {
            switch (y = q, N = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Va(4, y, y.return);
                break;
              case 1:
                Zn(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  a = y, n = y.return;
                  try {
                    t = a, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (C) {
                    ke(a, n, C);
                  }
                }
                break;
              case 5:
                Zn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  jc(m);
                  continue;
                }
            }
            N !== null ? (N.return = y, q = N) : jc(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                r = m.stateNode, d ? (i = r.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = m.stateNode, l = m.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = su("display", s));
              } catch (C) {
                ke(e, e.return, C);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = d ? "" : m.memoizedProps;
            } catch (C) {
              ke(e, e.return, C);
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
      yt(t, e), zt(e), a & 4 && xc(e);
      break;
    case 21:
      break;
    default:
      yt(
        t,
        e
      ), zt(e);
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rd(n)) {
            var a = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (a.tag) {
        case 5:
          var r = a.stateNode;
          a.flags & 32 && (Qa(r, ""), a.flags &= -33);
          var i = yc(e);
          ss(e, i, r);
          break;
        case 3:
        case 4:
          var s = a.stateNode.containerInfo, c = yc(e);
          is(e, c, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sf(e, t, n) {
  q = e, Id(e);
}
function Id(e, t, n) {
  for (var a = (e.mode & 1) !== 0; q !== null; ) {
    var r = q, i = r.child;
    if (r.tag === 22 && a) {
      var s = r.memoizedState !== null || Ar;
      if (!s) {
        var c = r.alternate, l = c !== null && c.memoizedState !== null || Oe;
        c = Ar;
        var d = Oe;
        if (Ar = s, (Oe = l) && !d) for (q = r; q !== null; ) s = q, l = s.child, s.tag === 22 && s.memoizedState !== null ? kc(r) : l !== null ? (l.return = s, q = l) : kc(r);
        for (; i !== null; ) q = i, Id(i), i = i.sibling;
        q = r, Ar = c, Oe = d;
      }
      wc(e);
    } else r.subtreeFlags & 8772 && i !== null ? (i.return = r, q = i) : wc(e);
  }
}
function wc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Oe || To(5, t);
            break;
          case 1:
            var a = t.stateNode;
            if (t.flags & 4 && !Oe) if (n === null) a.componentDidMount();
            else {
              var r = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
              a.componentDidUpdate(r, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && rc(t, i, a);
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
              rc(t, s, n);
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
                  m !== null && Ja(m);
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
            throw Error(R(163));
        }
        Oe || t.flags & 512 && os(t);
      } catch (y) {
        ke(t, t.return, y);
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
function jc(e) {
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
function kc(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (l) {
            ke(t, n, l);
          }
          break;
        case 1:
          var a = t.stateNode;
          if (typeof a.componentDidMount == "function") {
            var r = t.return;
            try {
              a.componentDidMount();
            } catch (l) {
              ke(t, r, l);
            }
          }
          var i = t.return;
          try {
            os(t);
          } catch (l) {
            ke(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            os(t);
          } catch (l) {
            ke(t, s, l);
          }
      }
    } catch (l) {
      ke(t, t.return, l);
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
var _f = Math.ceil, yo = Yt.ReactCurrentDispatcher, rl = Yt.ReactCurrentOwner, dt = Yt.ReactCurrentBatchConfig, ie = 0, Te = null, Se = null, Ae = 0, et = 0, ea = vn(0), be = 0, cr = null, Rn = 0, Ro = 0, ol = 0, Ga = null, Qe = null, il = 0, ma = 1 / 0, Ft = null, xo = !1, ls = null, dn = null, Ir = !1, rn = null, wo = 0, Ba = 0, cs = null, Qr = -1, Yr = 0;
function Be() {
  return ie & 6 ? Ce() : Qr !== -1 ? Qr : Qr = Ce();
}
function pn(e) {
  return e.mode & 1 ? ie & 2 && Ae !== 0 ? Ae & -Ae : lf.transition !== null ? (Yr === 0 && (Yr = wu()), Yr) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bu(e.type)), e) : 1;
}
function St(e, t, n, a) {
  if (50 < Ba) throw Ba = 0, cs = null, Error(R(185));
  hr(e, n, a), (!(ie & 2) || e !== Te) && (e === Te && (!(ie & 2) && (Ro |= n), be === 4 && nn(e, Ae)), Je(e, a), n === 1 && ie === 0 && !(t.mode & 1) && (ma = Ce() + 500, zo && yn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  sm(e, t);
  var a = no(e, e === Te ? Ae : 0);
  if (a === 0) n !== null && Ml(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = a & -a, e.callbackPriority !== t) {
    if (n != null && Ml(n), t === 1) e.tag === 0 ? sf(Cc.bind(null, e)) : Hu(Cc.bind(null, e)), nf(function() {
      !(ie & 6) && yn();
    }), n = null;
    else {
      switch (ju(a)) {
        case 1:
          n = Ts;
          break;
        case 4:
          n = yu;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = xu;
          break;
        default:
          n = to;
      }
      n = Gd(n, Dd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Dd(e, t) {
  if (Qr = -1, Yr = 0, ie & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (ia() && e.callbackNode !== n) return null;
  var a = no(e, e === Te ? Ae : 0);
  if (a === 0) return null;
  if (a & 30 || a & e.expiredLanes || t) t = jo(e, a);
  else {
    t = a;
    var r = ie;
    ie |= 2;
    var i = Od();
    (Te !== e || Ae !== t) && (Ft = null, ma = Ce() + 500, bn(e, t));
    do
      try {
        Ef();
        break;
      } catch (c) {
        $d(e, c);
      }
    while (!0);
    Bs(), yo.current = i, ie = r, Se !== null ? t = 0 : (Te = null, Ae = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (r = Ii(e), r !== 0 && (a = r, t = us(e, r))), t === 1) throw n = cr, bn(e, 0), nn(e, a), Je(e, Ce()), n;
    if (t === 6) nn(e, a);
    else {
      if (r = e.current.alternate, !(a & 30) && !Nf(r) && (t = jo(e, a), t === 2 && (i = Ii(e), i !== 0 && (a = i, t = us(e, i))), t === 1)) throw n = cr, bn(e, 0), nn(e, a), Je(e, Ce()), n;
      switch (e.finishedWork = r, e.finishedLanes = a, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Cn(e, Qe, Ft);
          break;
        case 3:
          if (nn(e, a), (a & 130023424) === a && (t = il + 500 - Ce(), 10 < t)) {
            if (no(e, 0) !== 0) break;
            if (r = e.suspendedLanes, (r & a) !== a) {
              Be(), e.pingedLanes |= e.suspendedLanes & r;
              break;
            }
            e.timeoutHandle = Gi(Cn.bind(null, e, Qe, Ft), t);
            break;
          }
          Cn(e, Qe, Ft);
          break;
        case 4:
          if (nn(e, a), (a & 4194240) === a) break;
          for (t = e.eventTimes, r = -1; 0 < a; ) {
            var s = 31 - Ct(a);
            i = 1 << s, s = t[s], s > r && (r = s), a &= ~i;
          }
          if (a = r, a = Ce() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * _f(a / 1960)) - a, 10 < a) {
            e.timeoutHandle = Gi(Cn.bind(null, e, Qe, Ft), a);
            break;
          }
          Cn(e, Qe, Ft);
          break;
        case 5:
          Cn(e, Qe, Ft);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Je(e, Ce()), e.callbackNode === n ? Dd.bind(null, e) : null;
}
function us(e, t) {
  var n = Ga;
  return e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256), e = jo(e, t), e !== 2 && (t = Qe, Qe = n, t !== null && ds(t)), e;
}
function ds(e) {
  Qe === null ? Qe = e : Qe.push.apply(Qe, e);
}
function Nf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var a = 0; a < n.length; a++) {
        var r = n[a], i = r.getSnapshot;
        r = r.value;
        try {
          if (!_t(i(), r)) return !1;
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
function nn(e, t) {
  for (t &= ~ol, t &= ~Ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ct(t), a = 1 << n;
    e[n] = -1, t &= ~a;
  }
}
function Cc(e) {
  if (ie & 6) throw Error(R(327));
  ia();
  var t = no(e, 0);
  if (!(t & 1)) return Je(e, Ce()), null;
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var a = Ii(e);
    a !== 0 && (t = a, n = us(e, a));
  }
  if (n === 1) throw n = cr, bn(e, 0), nn(e, t), Je(e, Ce()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Cn(e, Qe, Ft), Je(e, Ce()), null;
}
function sl(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (ma = Ce() + 500, zo && yn());
  }
}
function Ln(e) {
  rn !== null && rn.tag === 0 && !(ie & 6) && ia();
  var t = ie;
  ie |= 1;
  var n = dt.transition, a = le;
  try {
    if (dt.transition = null, le = 1, e) return e();
  } finally {
    le = a, dt.transition = n, ie = t, !(ie & 6) && yn();
  }
}
function ll() {
  et = ea.current, ve(ea);
}
function bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, tf(n)), Se !== null) for (n = Se.return; n !== null; ) {
    var a = n;
    switch (Us(a), a.tag) {
      case 1:
        a = a.type.childContextTypes, a != null && so();
        break;
      case 3:
        da(), ve(Ke), ve(Fe), Xs();
        break;
      case 5:
        Ks(a);
        break;
      case 4:
        da();
        break;
      case 13:
        ve(xe);
        break;
      case 19:
        ve(xe);
        break;
      case 10:
        Hs(a.type._context);
        break;
      case 22:
      case 23:
        ll();
    }
    n = n.return;
  }
  if (Te = e, Se = e = mn(e.current, null), Ae = et = t, be = 0, cr = null, ol = Ro = Rn = 0, Qe = Ga = null, _n !== null) {
    for (t = 0; t < _n.length; t++) if (n = _n[t], a = n.interleaved, a !== null) {
      n.interleaved = null;
      var r = a.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = r, a.next = s;
      }
      n.pending = a;
    }
    _n = null;
  }
  return e;
}
function $d(e, t) {
  do {
    var n = Se;
    try {
      if (Bs(), Br.current = vo, go) {
        for (var a = we.memoizedState; a !== null; ) {
          var r = a.queue;
          r !== null && (r.pending = null), a = a.next;
        }
        go = !1;
      }
      if (Tn = 0, Me = Ne = we = null, Ua = !1, ir = 0, rl.current = null, n === null || n.return === null) {
        be = 1, cr = t, Se = null;
        break;
      }
      e: {
        var i = e, s = n.return, c = n, l = t;
        if (t = Ae, c.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, h = c, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = h.alternate;
            y ? (h.updateQueue = y.updateQueue, h.memoizedState = y.memoizedState, h.lanes = y.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var N = uc(s);
          if (N !== null) {
            N.flags &= -257, dc(N, s, c, i, t), N.mode & 1 && cc(i, d, t), t = N, l = d;
            var x = t.updateQueue;
            if (x === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(l), t.updateQueue = C;
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              cc(i, d, t), cl();
              break e;
            }
            l = Error(R(426));
          }
        } else if (ye && c.mode & 1) {
          var S = uc(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), dc(S, s, c, i, t), Vs(pa(l, c));
            break e;
          }
        }
        i = l = pa(l, c), be !== 4 && (be = 2), Ga === null ? Ga = [i] : Ga.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var u = jd(i, l, t);
              ac(i, u);
              break e;
            case 1:
              c = l;
              var p = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (dn === null || !dn.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = kd(i, c, t);
                ac(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qd(n);
    } catch (_) {
      t = _, Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Od() {
  var e = yo.current;
  return yo.current = vo, e === null ? vo : e;
}
function cl() {
  (be === 0 || be === 3 || be === 2) && (be = 4), Te === null || !(Rn & 268435455) && !(Ro & 268435455) || nn(Te, Ae);
}
function jo(e, t) {
  var n = ie;
  ie |= 2;
  var a = Od();
  (Te !== e || Ae !== t) && (Ft = null, bn(e, t));
  do
    try {
      bf();
      break;
    } catch (r) {
      $d(e, r);
    }
  while (!0);
  if (Bs(), ie = n, yo.current = a, Se !== null) throw Error(R(261));
  return Te = null, Ae = 0, be;
}
function bf() {
  for (; Se !== null; ) Fd(Se);
}
function Ef() {
  for (; Se !== null && !Jp(); ) Fd(Se);
}
function Fd(e) {
  var t = Vd(e.alternate, e, et);
  e.memoizedProps = e.pendingProps, t === null ? qd(e) : Se = t, rl.current = null;
}
function qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = jf(n, t), n !== null) {
        n.flags &= 32767, Se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, Se = null;
        return;
      }
    } else if (n = wf(n, t, et), n !== null) {
      Se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function Cn(e, t, n) {
  var a = le, r = dt.transition;
  try {
    dt.transition = null, le = 1, zf(e, t, n, a);
  } finally {
    dt.transition = r, le = a;
  }
  return null;
}
function zf(e, t, n, a) {
  do
    ia();
  while (rn !== null);
  if (ie & 6) throw Error(R(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (lm(e, i), e === Te && (Se = Te = null, Ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ir || (Ir = !0, Gd(to, function() {
    return ia(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = dt.transition, dt.transition = null;
    var s = le;
    le = 1;
    var c = ie;
    ie |= 4, rl.current = null, Cf(e, n), Ad(n, e), Qm(Ui), ao = !!qi, Ui = qi = null, e.current = n, Sf(n), Zp(), ie = c, le = s, dt.transition = i;
  } else e.current = n;
  if (Ir && (Ir = !1, rn = e, wo = r), i = e.pendingLanes, i === 0 && (dn = null), nm(n.stateNode), Je(e, Ce()), t !== null) for (a = e.onRecoverableError, n = 0; n < t.length; n++) r = t[n], a(r.value, { componentStack: r.stack, digest: r.digest });
  if (xo) throw xo = !1, e = ls, ls = null, e;
  return wo & 1 && e.tag !== 0 && ia(), i = e.pendingLanes, i & 1 ? e === cs ? Ba++ : (Ba = 0, cs = e) : Ba = 0, yn(), null;
}
function ia() {
  if (rn !== null) {
    var e = ju(wo), t = dt.transition, n = le;
    try {
      if (dt.transition = null, le = 16 > e ? 16 : e, rn === null) var a = !1;
      else {
        if (e = rn, rn = null, wo = 0, ie & 6) throw Error(R(331));
        var r = ie;
        for (ie |= 4, q = e.current; q !== null; ) {
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
                      Va(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, q = m;
                  else for (; q !== null; ) {
                    h = q;
                    var y = h.sibling, N = h.return;
                    if (Td(h), h === d) {
                      q = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = N, q = y;
                      break;
                    }
                    q = N;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var C = x.child;
                if (C !== null) {
                  x.child = null;
                  do {
                    var S = C.sibling;
                    C.sibling = null, C = S;
                  } while (C !== null);
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
                Va(9, i, i.return);
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
                  To(9, c);
              }
            } catch (_) {
              ke(c, c.return, _);
            }
            if (c === s) {
              q = null;
              break e;
            }
            var v = c.sibling;
            if (v !== null) {
              v.return = c.return, q = v;
              break e;
            }
            q = c.return;
          }
        }
        if (ie = r, yn(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
          Tt.onPostCommitFiberRoot(So, e);
        } catch {
        }
        a = !0;
      }
      return a;
    } finally {
      le = n, dt.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = pa(n, t), t = jd(e, t, 1), e = un(e, t, 1), t = Be(), e !== null && (hr(e, 1, t), Je(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var a = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (dn === null || !dn.has(a))) {
        e = pa(n, e), e = kd(t, e, 1), t = un(t, e, 1), e = Be(), t !== null && (hr(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Pf(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (Ae & n) === n && (be === 4 || be === 3 && (Ae & 130023424) === Ae && 500 > Ce() - il ? bn(e, 0) : ol |= n), Je(e, t);
}
function Ud(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = Be();
  e = Wt(e, t), e !== null && (hr(e, t, n), Je(e, n));
}
function Mf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ud(e, n);
}
function Tf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var a = e.stateNode, r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      a = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  a !== null && a.delete(t), Ud(e, n);
}
var Vd;
Vd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ke.current) Ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ye = !1, xf(e, t, n);
    Ye = !!(e.flags & 131072);
  }
  else Ye = !1, ye && t.flags & 1048576 && Wu(t, uo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var a = t.type;
      Wr(e, t), e = t.pendingProps;
      var r = la(t, Fe.current);
      oa(t, n), r = Zs(null, t, a, e, r, n);
      var i = el();
      return t.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(a) ? (i = !0, lo(t)) : i = !1, t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, Qs(t), r.updater = Mo, t.stateNode = r, r._reactInternals = t, Xi(t, a, e, n), t = es(null, t, a, !0, i, n)) : (t.tag = 0, ye && i && qs(t), Ge(null, t, r, n), t = t.child), t;
    case 16:
      a = t.elementType;
      e: {
        switch (Wr(e, t), e = t.pendingProps, r = a._init, a = r(a._payload), t.type = a, r = t.tag = Lf(a), e = xt(a, e), r) {
          case 0:
            t = Zi(null, t, a, e, n);
            break e;
          case 1:
            t = fc(null, t, a, e, n);
            break e;
          case 11:
            t = pc(null, t, a, e, n);
            break e;
          case 14:
            t = mc(null, t, a, xt(a.type, e), n);
            break e;
        }
        throw Error(R(
          306,
          a,
          ""
        ));
      }
      return t;
    case 0:
      return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : xt(a, r), Zi(e, t, a, r, n);
    case 1:
      return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : xt(a, r), fc(e, t, a, r, n);
    case 3:
      e: {
        if (Nd(t), e === null) throw Error(R(387));
        a = t.pendingProps, i = t.memoizedState, r = i.element, Zu(e, t), fo(t, a, null, n);
        var s = t.memoizedState;
        if (a = s.element, i.isDehydrated) if (i = { element: a, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          r = pa(Error(R(423)), t), t = hc(e, t, a, n, r);
          break e;
        } else if (a !== r) {
          r = pa(Error(R(424)), t), t = hc(e, t, a, n, r);
          break e;
        } else for (tt = cn(t.stateNode.containerInfo.firstChild), nt = t, ye = !0, jt = null, n = Xu(t, null, a, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ca(), a === r) {
            t = Qt(e, t, n);
            break e;
          }
          Ge(e, t, a, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ed(t), e === null && Qi(t), a = t.type, r = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = r.children, Vi(a, r) ? s = null : i !== null && Vi(a, i) && (t.flags |= 32), _d(e, t), Ge(e, t, s, n), t.child;
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return bd(e, t, n);
    case 4:
      return Ys(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ua(t, null, a, n) : Ge(e, t, a, n), t.child;
    case 11:
      return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : xt(a, r), pc(e, t, a, r, n);
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (a = t.type._context, r = t.pendingProps, i = t.memoizedProps, s = r.value, fe(po, a._currentValue), a._currentValue = s, i !== null) if (_t(i.value, s)) {
          if (i.children === r.children && !Ke.current) {
            t = Qt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var c = i.dependencies;
          if (c !== null) {
            s = i.child;
            for (var l = c.firstContext; l !== null; ) {
              if (l.context === a) {
                if (i.tag === 1) {
                  l = Gt(-1, n & -n), l.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), d.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Yi(
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
            if (s = i.return, s === null) throw Error(R(341));
            s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Yi(s, n, t), s = i.sibling;
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
        Ge(e, t, r.children, n), t = t.child;
      }
      return t;
    case 9:
      return r = t.type, a = t.pendingProps.children, oa(t, n), r = pt(r), a = a(r), t.flags |= 1, Ge(e, t, a, n), t.child;
    case 14:
      return a = t.type, r = xt(a, t.pendingProps), r = xt(a.type, r), mc(e, t, a, r, n);
    case 15:
      return Cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : xt(a, r), Wr(e, t), t.tag = 1, Xe(a) ? (e = !0, lo(t)) : e = !1, oa(t, n), wd(t, a, r), Xi(t, a, r, n), es(null, t, a, !0, e, n);
    case 19:
      return Ed(e, t, n);
    case 22:
      return Sd(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Gd(e, t) {
  return vu(e, t);
}
function Rf(e, t, n, a) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, a) {
  return new Rf(e, t, n, a);
}
function ul(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Lf(e) {
  if (typeof e == "function") return ul(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === zs) return 11;
    if (e === Ps) return 14;
  }
  return 2;
}
function mn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Kr(e, t, n, a, r, i) {
  var s = 2;
  if (a = e, typeof e == "function") ul(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Gn:
      return En(n.children, r, i, t);
    case Es:
      s = 8, r |= 8;
      break;
    case ji:
      return e = ut(12, n, t, r | 2), e.elementType = ji, e.lanes = i, e;
    case ki:
      return e = ut(13, n, t, r), e.elementType = ki, e.lanes = i, e;
    case Ci:
      return e = ut(19, n, t, r), e.elementType = Ci, e.lanes = i, e;
    case eu:
      return Lo(n, r, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Jc:
          s = 10;
          break e;
        case Zc:
          s = 9;
          break e;
        case zs:
          s = 11;
          break e;
        case Ps:
          s = 14;
          break e;
        case Zt:
          s = 16, a = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = ut(s, n, t, r), t.elementType = e, t.type = a, t.lanes = i, t;
}
function En(e, t, n, a) {
  return e = ut(7, e, a, t), e.lanes = n, e;
}
function Lo(e, t, n, a) {
  return e = ut(22, e, a, t), e.elementType = eu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mi(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function fi(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Af(e, t, n, a, r) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qo(0), this.expirationTimes = Qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qo(0), this.identifierPrefix = a, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null;
}
function dl(e, t, n, a, r, i, s, c, l) {
  return e = new Af(e, t, n, c, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: a, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qs(i), e;
}
function If(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: n };
}
function Bd(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Bu(e, n, t);
  }
  return t;
}
function Hd(e, t, n, a, r, i, s, c, l) {
  return e = dl(n, a, !0, e, r, i, s, c, l), e.context = Bd(null), n = e.current, a = Be(), r = pn(n), i = Gt(a, r), i.callback = t ?? null, un(n, i, r), e.current.lanes = r, hr(e, r, a), Je(e, a), e;
}
function Ao(e, t, n, a) {
  var r = t.current, i = Be(), s = pn(r);
  return n = Bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Gt(i, s), t.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = un(r, t, s), e !== null && (St(e, r, s, i), Gr(e, r, s)), s;
}
function ko(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pl(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function Df() {
  return null;
}
var Wd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ml(e) {
  this._internalRoot = e;
}
Io.prototype.render = ml.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ao(e, t, null, null);
};
Io.prototype.unmount = ml.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function() {
      Ao(null, e, null, null);
    }), t[Ht] = null;
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Su();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
    tn.splice(n, 0, e), n === 0 && Nu(e);
  }
};
function fl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Do(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Nc() {
}
function $f(e, t, n, a, r) {
  if (r) {
    if (typeof a == "function") {
      var i = a;
      a = function() {
        var d = ko(s);
        i.call(d);
      };
    }
    var s = Hd(t, a, e, 0, null, !1, !1, "", Nc);
    return e._reactRootContainer = s, e[Ht] = s.current, tr(e.nodeType === 8 ? e.parentNode : e), Ln(), s;
  }
  for (; r = e.lastChild; ) e.removeChild(r);
  if (typeof a == "function") {
    var c = a;
    a = function() {
      var d = ko(l);
      c.call(d);
    };
  }
  var l = dl(e, 0, !1, null, null, !1, !1, "", Nc);
  return e._reactRootContainer = l, e[Ht] = l.current, tr(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    Ao(t, l, n, a);
  }), l;
}
function $o(e, t, n, a, r) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof r == "function") {
      var c = r;
      r = function() {
        var l = ko(s);
        c.call(l);
      };
    }
    Ao(t, s, e, r);
  } else s = $f(n, t, e, r, a);
  return ko(s);
}
ku = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Aa(t.pendingLanes);
        n !== 0 && (Rs(t, n | 1), Je(t, Ce()), !(ie & 6) && (ma = Ce() + 500, yn()));
      }
      break;
    case 13:
      Ln(function() {
        var a = Wt(e, 1);
        if (a !== null) {
          var r = Be();
          St(a, e, 1, r);
        }
      }), pl(e, 1);
  }
};
Ls = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Be();
      St(t, e, 134217728, n);
    }
    pl(e, 134217728);
  }
};
Cu = function(e) {
  if (e.tag === 13) {
    var t = pn(e), n = Wt(e, t);
    if (n !== null) {
      var a = Be();
      St(n, e, t, a);
    }
    pl(e, t);
  }
};
Su = function() {
  return le;
};
_u = function(e, t) {
  var n = le;
  try {
    return le = e, t();
  } finally {
    le = n;
  }
};
Ri = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ni(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var a = n[t];
          if (a !== e && a.form === e.form) {
            var r = Eo(a);
            if (!r) throw Error(R(90));
            nu(a), Ni(a, r);
          }
        }
      }
      break;
    case "textarea":
      ru(e, n);
      break;
    case "select":
      t = n.value, t != null && ta(e, !!n.multiple, t, !1);
  }
};
du = sl;
pu = Ln;
var Of = { usingClientEntryPoint: !1, Events: [vr, Qn, Eo, cu, uu, sl] }, Ta = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ff = { bundleType: Ta.bundleType, version: Ta.version, rendererPackageName: Ta.rendererPackageName, rendererConfig: Ta.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = hu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ta.findFiberByHostInstance || Df, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber) try {
    So = Dr.inject(Ff), Tt = Dr;
  } catch {
  }
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of;
rt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fl(t)) throw Error(R(200));
  return If(e, t, null, n);
};
rt.createRoot = function(e, t) {
  if (!fl(e)) throw Error(R(299));
  var n = !1, a = "", r = Wd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = dl(e, 1, !1, null, null, n, !1, a, r), e[Ht] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new ml(t);
};
rt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = hu(t), e = e === null ? null : e.stateNode, e;
};
rt.flushSync = function(e) {
  return Ln(e);
};
rt.hydrate = function(e, t, n) {
  if (!Do(t)) throw Error(R(200));
  return $o(null, e, t, !0, n);
};
rt.hydrateRoot = function(e, t, n) {
  if (!fl(e)) throw Error(R(405));
  var a = n != null && n.hydratedSources || null, r = !1, i = "", s = Wd;
  if (n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Hd(t, null, e, 1, n ?? null, r, !1, i, s), e[Ht] = t.current, tr(e), a) for (e = 0; e < a.length; e++) n = a[e], r = n._getVersion, r = r(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(
    n,
    r
  );
  return new Io(t);
};
rt.render = function(e, t, n) {
  if (!Do(t)) throw Error(R(200));
  return $o(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function(e) {
  if (!Do(e)) throw Error(R(40));
  return e._reactRootContainer ? (Ln(function() {
    $o(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ht] = null;
    });
  }), !0) : !1;
};
rt.unstable_batchedUpdates = sl;
rt.unstable_renderSubtreeIntoContainer = function(e, t, n, a) {
  if (!Do(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return $o(e, t, n, !1, a);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function Qd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd);
    } catch (e) {
      console.error(e);
    }
}
Qd(), Qc.exports = rt;
var qf = Qc.exports, Yd, bc = qf;
Yd = bc.createRoot, bc.hydrateRoot;
const Ec = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, Uf = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Vf = [
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
], Gf = [
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
function ur(e) {
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
function Kd(e, t = 0) {
  const n = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, a = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, i = 2 * (Number.isFinite(t) ? t : 0), s = (Number.isFinite(a) ? a : 0) * n + i, c = (Number.isFinite(r) ? r : 0) * n + i;
  return { w: Number.isFinite(s) ? s : 0, h: Number.isFinite(c) ? c : 0 };
}
const zn = () => globalThis.__crycatBase || "";
async function X(e, t) {
  const n = await fetch(zn() + e, t);
  if (!n.ok) {
    let a = `${n.status}`;
    try {
      a = (await n.json()).detail || a;
    } catch {
    }
    throw new Error(a);
  }
  return n.json();
}
const H = {
  health: () => X("/api/health"),
  getSettings: () => X(
    "/api/settings"
  ),
  putSettings: (e) => X("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), X("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => X("/api/assets"),
  patchAsset: (e, t) => X(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => X(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 24) => X(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => X("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => X(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => X(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const a = new FormData();
    return a.append("file", t, n), X(`/api/assets/${e}/reemplazar`, { method: "POST", body: a });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => X(
    "/api/contornos"
  ),
  contornoPreview: (e, t) => X(`/api/assets/${e}/contorno-preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  blobs: (e) => X(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t, n) => X(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quitar: t,
      union_modo: n == null ? void 0 : n.modo,
      union_mm: n == null ? void 0 : n.mm,
      union_color: n == null ? void 0 : n.color
    })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0, a = "final") => `${zn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${a}`,
  previewUrlSinBordes: (e, t = 0) => `/api/assets/${e}/preview.png?r=${t}`,
  optimize: (e, t = !1) => X("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => X(`/api/job/${e}`),
  /** Restaura una colocación anterior (deshacer/rehacer con resultados). */
  restoreResult: (e) => X("/api/result/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  result: () => X("/api/result"),
  version: () => X("/api/version"),
  checkVersion: () => X("/api/version/check", { method: "POST" }),
  updateVersion: () => X(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => X("/api/version/open", { method: "POST" }),
  estimate: () => X("/api/estimate"),
  pageUrl: (e, t, n = !1, a = !1, r = 0, i = "final", s = !1) => `${zn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${a ? "&bordes=1" : ""}${a ? `&fase=${r}&cont=${i}` : ""}${s ? "&marcas=1" : ""}`,
  move: (e, t, n) => X(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => X("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => X("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => X(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => X("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => X("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => X(
    "/api/presets/factory"
  ),
  assetsFolder: () => X("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), X("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${zn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => X("/api/presets"),
  savePreset: (e) => X("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => X(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => X(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  ),
  // ------------------------------------------------------- modos --
  modos: () => X("/api/modos"),
  saveModo: (e, t) => X(`/api/modos/${e}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  renameModo: (e, t) => X(`/api/modos/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  loadModo: (e) => X(
    `/api/modos/${e}/load`,
    { method: "POST" }
  ),
  deleteModo: (e) => X(
    `/api/modos/${e}`,
    { method: "DELETE" }
  )
};
async function Bf(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), a = URL.createObjectURL(n);
  try {
    const r = new Image();
    await new Promise((h, m) => {
      r.onload = () => h(), r.onerror = () => m(new Error("SVG no válido")), r.src = a;
    });
    const i = r.naturalWidth || r.width || 1024, s = r.naturalHeight || r.height || 1024, c = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(i * c), l.height = Math.round(s * c), l.getContext("2d").drawImage(r, 0, 0, l.width, l.height), await new Promise(
      (h) => l.toBlob((m) => h(m), "image/png")
    );
  } finally {
    URL.revokeObjectURL(a);
  }
}
async function Xd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Bf(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const ps = [
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
function ms(e) {
  return ps.find((t) => t.key === e) ?? ps[0];
}
function zc(e) {
  const t = ms(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([a, r]) => {
    n.style.setProperty(`--${a.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, r);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Jd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return ms(e);
  } catch {
  }
  return ms("wiwi");
}
const Zd = {
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
  "No caben todas las copias: {n} sin colocar": "Not all copies fit: {n} left over",
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
  "PNG para Cricut Design (144 ppp)": "PNG for Cricut Design (144 dpi)",
  "PPP del PNG al guardar": "PNG dpi when saving",
  "Tamaño real del diseño al exportarlo (cuadrados guía incluidos): es lo que debe medir en Cricut Design Space.": "Real size of the design when exported (guide squares included): this is what it should measure in Cricut Design Space.",
  "Tamaño final": "Final size",
  auto: "auto",
  "Tamaño final del diseño: se exporta con esta medida exacta. Vacío = automático (el máximo que acepta Design Space).": "Final size of the design: it is exported at this exact measure. Empty = automatic (the maximum Design Space accepts).",
  "Tamaño final (ancho, cm)": "Final size (width, cm)",
  "0 = automático (el máximo que acepta Design Space, ~18.1 cm en A4). Al poner un ancho menor, los límites se restringen proporcionalmente y el diseño se exporta con esa medida exacta.": "0 = automatic (the maximum Design Space accepts, ~18.1 cm on A4). With a smaller width, the limits shrink proportionally and the design is exported at that exact measure.",
  "300 · máxima calidad": "300 · max quality",
  "144 · Cricut Design": "144 · Cricut Design",
  "144 ppp: la resolución con la que Design Space interpreta las imágenes; se importan al tamaño EXACTO sin redimensionar.": "144 dpi: the resolution Design Space uses to read images; they import at the EXACT size with no resizing.",
  "300 ppp: máxima calidad (para imprimir o si vas a escalar en Design Space).": "300 dpi: max quality (for printing or if you'll scale it in Design Space).",
  "300 ppp por defecto: máxima calidad. Con 144 ppp (la resolución que usa Design Space para Print Then Cut) el PNG se importa al tamaño exacto sin que DS pida redimensionar. La colocación aprovecha toda la forma escalonada oficial.": "300 dpi by default: max quality. At 144 dpi (the resolution Design Space uses for Print Then Cut) the PNG imports at the exact size with no resize prompt. The layout uses the full official stepped shape.",
  "PNG a 300 ppp (máxima calidad) o a 144 ppp para que Cricut Design lo importe al tamaño exacto. Nunca sobrescribe nada.": "PNG at 300 dpi (max quality) or 144 dpi so Cricut Design imports it at the exact size. It never overwrites anything.",
  "Con «PPP del PNG» en 144 se importa al tamaño EXACTO: no hace falta redimensionar (a 300 hay que escalarlo al ~48 %).": "With “PNG dpi” set to 144 it imports at the EXACT size: no resizing needed (at 300 you'd have to scale it to ~48%).",
  "Design Space interpreta las imágenes a 144 ppp: guardando los PNG a esa resolución se importan al tamaño EXACTO, sin que pida redimensionar.": "Design Space reads images at 144 dpi: saving PNGs at that resolution makes them import at the EXACT size, with no resize prompt.",
  "Recomendado: los PNG se guardan a 144 ppp (la resolución de Design Space) para que se importen al tamaño exacto sin que DS pida redimensionar. La colocación aprovecha toda la forma escalonada oficial de Print Then Cut (bandas anchas del centro incluidas). Desactívalo si vas a imprimir los PNG fuera de Design Space.": "Recommended: PNGs are saved at 144 dpi (Design Space's resolution) so they import at the exact size with no resize prompt. The layout uses the full official Print Then Cut stepped shape (wide centre bands included). Turn it off if you'll print the PNGs outside Design Space.",
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
  "Selección inteligente": "Smart selection",
  "Selección inteligente (la mejor, sin gastar de más)": "Smart selection (the best, without wasting time)",
  Cálculo: "Calculation",
  "Cálculo estándar": "Standard calculation",
  "Cálculo exacto": "Exact calculation",
  "Pulsa para cambiar entre cálculo estándar y exacto": "Click to switch between standard and exact calculation",
  "bueno y rápido": "good and fast",
  "el mejor posible · más lento": "the best possible · slower",
  "Ambos son inteligentes: si el trabajo es fácil acaban pronto. «Estándar» busca un buen resultado con un tiempo ajustado; «Exacto» apura más (varias configuraciones y métodos) para acercarse al mejor resultado posible.": "Both are smart: easy jobs finish quickly. “Standard” looks for a good result within a tight time; “Exact” pushes harder (several configurations and methods) to get as close as possible to the best result.",
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
  "Quitar seleccionados ({n})": "Remove selected ({n})",
  "Toca un trozo de la imagen para marcarlo. El principal nunca se borra.": "Tap a piece in the image to mark it. The main one is never deleted.",
  "Unir los trozos": "Join the pieces",
  Ninguna: "None",
  "Borde fuera": "Outer border",
  "Añade borde hacia FUERA además de unir": "Adds an OUTER border as well as joining",
  Relleno: "Fill",
  "Color de relleno de la unión o el borde": "Fill colour of the join or border",
  "No unir nada": "Do not join anything",
  "Une los trozos SOLO hacia dentro (sin borde por fuera)": "Joins the pieces INWARD only (no outer border)",
  "Aplica los trozos quitados y la unión elegida": "Applies the removed pieces and the chosen join",
  "Sale sin aplicar nada": "Exits without applying anything",
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
}, ep = g.createContext("es");
function Hf({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(ep.Provider, { value: e, children: t });
}
function hl() {
  return g.useContext(ep);
}
function it() {
  const e = hl();
  return (t, n) => {
    let a = e === "en" ? Zd[t] ?? t : t;
    if (n)
      for (const [r, i] of Object.entries(n))
        a = a.split(`{${r}}`).join(String(i));
    return a;
  };
}
function Wf(e, t, n) {
  return e === "en" ? Zd[t] ?? t : t;
}
function de({ size: e = 18, children: t }) {
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
function fs({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function dr({ size: e }) {
  return /* @__PURE__ */ o.jsx(de, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function pr({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Qf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Yf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function mr({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Kf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Xf({ size: e }) {
  return /* @__PURE__ */ o.jsx(de, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function fa({ size: e }) {
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
function Pc({ size: e }) {
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
function Jf({ size: e }) {
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
function Mc({ size: e }) {
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
function Zf({ size: e }) {
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
function eh({ size: e }) {
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
function tp({ size: e }) {
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
function An({ size: e }) {
  return /* @__PURE__ */ o.jsx(de, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function hs({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function th({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function gs({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function nh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function ah({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Ha({ size: e }) {
  return /* @__PURE__ */ o.jsx(de, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Tc({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function rh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function oh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function ih({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function np({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function sh({ size: e }) {
  return /* @__PURE__ */ o.jsx(de, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function ap({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function rp({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function lh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function ch({ size: e }) {
  return /* @__PURE__ */ o.jsx(de, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function uh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function dh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(de, { size: e, children: [
    /* @__PURE__ */ o.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function ph({ open: e, assets: t, onClose: n, onDone: a }) {
  const r = it(), i = g.useMemo(() => t.map((z) => z.id), [t]), [s, c] = g.useState(/* @__PURE__ */ new Set()), [l, d] = g.useState("escala"), [h, m] = g.useState(100), [y, N] = g.useState(50), [x, C] = g.useState("mayor"), [S, u] = g.useState("");
  g.useEffect(() => {
    e && (c(/* @__PURE__ */ new Set()), u(""));
  }, [e, i.join(",")]);
  const p = (z) => !s.has(z), f = (z) => c((w) => {
    const O = new Set(w);
    return O.has(z) ? O.delete(z) : O.add(z), O;
  }), v = () => c(
    s.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), _ = (z) => {
    const w = z.w_mm_base || 0, O = z.h_mm_base || 0;
    return x === "mayor" ? Math.max(w, O) : x === "menor" ? Math.min(w, O) : 2 * Math.sqrt(Math.max(0, w * O) / Math.PI);
  }, M = (z) => {
    if (l === "tamano") {
      const w = _(z);
      if (w > 0) return Math.min(10, Math.max(0.05, y / w));
    }
    return Math.min(10, Math.max(0.05, h / 100));
  }, E = (z) => {
    const w = M(z);
    return { w: (z.w_mm_base || 0) * w, h: (z.h_mm_base || 0) * w };
  }, b = async () => {
    let z = 0;
    for (const w of t) {
      if (!p(w.id)) continue;
      const O = M(w) * 100;
      await H.patchAsset(w.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(O * 10) / 10))
      }), z += 1;
    }
    await a(), u(r("{n} elementos ajustados ", { n: z }));
  }, U = async () => {
    await b(), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: r("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((z) => {
          const w = E(z), O = Math.min(98, w.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${z.id}`,
              style: {
                width: `${O}%`,
                maxWidth: `${O}%`,
                aspectRatio: `${w.w || 1} / ${w.h || 1}`,
                opacity: p(z.id) ? 1 : 0.3
              },
              title: `${z.name} · ${w.w.toFixed(1)}×${w.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: H.previewUrl(z.id), alt: "" })
            },
            z.id
          );
        }) }),
        /* @__PURE__ */ o.jsx("div", { className: "modal-botones", style: { marginTop: 8 }, children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "primary",
            "data-testid": "import-aplicar-izq",
            onClick: b,
            children: r("Aplicar tamaño")
          }
        ) }),
        S && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso-izq", children: S })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "hint row", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "mini-link",
              "data-testid": "import-todos",
              onClick: v,
              children: s.size === i.length ? r("Seleccionar todos") : r("Quitar selección")
            }
          ),
          /* @__PURE__ */ o.jsxs("span", { children: [
            "— ",
            i.length - s.size,
            "/",
            i.length
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((z) => {
          const w = E(z);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${z.id}`,
              className: p(z.id) ? "sel" : "",
              onClick: () => f(z.id),
              title: z.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: H.previewUrl(z.id), alt: z.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: z.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(z.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  w.w.toFixed(1),
                  "×",
                  w.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            z.id
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
              children: r("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: l === "tamano" ? "on" : "",
              onClick: () => d("tamano"),
              children: r("Tamaño fijo (mm)")
            }
          )
        ] }),
        l === "escala" ? /* @__PURE__ */ o.jsxs("label", { children: [
          r("Escala de los seleccionados"),
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
                onChange: (z) => m(Number(z.target.value))
              }
            ),
            /* @__PURE__ */ o.jsx("span", { children: "%" })
          ] })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsxs("label", { children: [
            r("Tamaño del lado"),
            /* @__PURE__ */ o.jsxs("span", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "number",
                  min: 5,
                  max: 2e3,
                  step: 1,
                  "data-testid": "import-tamano",
                  value: String(y),
                  onChange: (z) => N(Number(z.target.value))
                }
              ),
              /* @__PURE__ */ o.jsx("span", { children: "mm" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("label", { children: [
            r("Medir el tamaño por"),
            /* @__PURE__ */ o.jsxs(
              "select",
              {
                "data-testid": "import-modo",
                value: x,
                onChange: (z) => C(z.target.value),
                children: [
                  /* @__PURE__ */ o.jsx("option", { value: "mayor", children: r("Lado mayor") }),
                  /* @__PURE__ */ o.jsx("option", { value: "menor", children: r("Lado menor") }),
                  /* @__PURE__ */ o.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La previsualización usa la hoja y los ajustes actuales.") }),
        S && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: S })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsxs("button", { "data-testid": "import-siguiente", onClick: n, children: [
        r("Siguiente"),
        " ▸"
      ] }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "import-conservar",
          onClick: U,
          children: r("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function mh({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: a,
  onAntesDeCambiar: r,
  bordeGlobal: i = !1,
  bordeGlobalMm: s = 0,
  bordeGlobalModo: c = "extender",
  rataActivo: l = !1,
  faseBordes: d = 0,
  verBordes: h = !0,
  contornoModo: m = "final",
  destacado: y = !1,
  sel: N = !1,
  onSel: x
}) {
  const C = it(), [S, u] = g.useState(() => ur(e));
  g.useEffect(() => u(ur(e)), [e]);
  const p = g.useRef(null), f = i && Number(s) || 0, v = Math.max(0, f + S.offset_mm), _ = -f, M = S.offset_modo || i && c || "", E = M === "unir_recto" || M === "unir_curvo" ? 0 : v, b = (I) => {
    const re = Math.max(_, Math.min(20, Math.round(I * 2) / 2));
    ae({ offset_mm: re });
  }, U = Kd(S, E), [z, w] = g.useState(""), O = g.useRef(!1), [k, A] = g.useState(""), D = g.useRef(!1), [Y, te] = g.useState({ tamano: !1, borde: !1, mini: !1 }), T = g.useRef(null);
  g.useEffect(() => {
    var I;
    y && (te({ tamano: !0, borde: !0, mini: !0 }), (I = T.current) == null || I.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [y]), g.useEffect(() => {
    O.current || w(U.w > 0 ? U.w.toFixed(1) : ""), D.current || A(U.h > 0 ? U.h.toFixed(1) : "");
  }, [U.w, U.h]);
  const G = Number.isFinite(S.w_mm_base) ? S.w_mm_base : 0, F = Number.isFinite(S.h_mm_base) ? S.h_mm_base : 0, ee = (I) => {
    w(I);
    const re = Number(I.replace(",", "."));
    !Number.isFinite(re) || re <= 0 || G <= 0 || ae({ scale_pct: Math.max(5, (re - 2 * E) / G * 100) });
  }, B = (I) => {
    A(I);
    const re = Number(I.replace(",", "."));
    !Number.isFinite(re) || re <= 0 || F <= 0 || ae({ scale_pct: Math.max(5, (re - 2 * E) / F * 100) });
  }, ue = (t == null ? void 0 : t.placements.filter((I) => I.asset_id === e.id && I.mini).length) ?? 0, oe = (t == null ? void 0 : t.placements.filter((I) => I.asset_id === e.id && !I.mini).length) ?? 0, ae = async (I) => {
    r == null || r(), "copies" in I && (I.copies = Math.max(0, I.copies ?? 0)), u((re) => ({ ...re, ...I }));
    try {
      await H.patchAsset(e.id, I);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: T,
      "data-asset": e.id,
      className: `asset-card${y ? " destacada" : ""}${N ? " sel" : ""}`,
      "data-testid": "asset-card",
      onClick: (I) => {
        if (I.target.closest("button, input, select, textarea, a")) return;
        const st = I.shiftKey ? "uno" : I.ctrlKey || I.metaKey ? "lista" : "solo";
        x == null || x(e.id, st);
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: H.previewUrlSinBordes(e.id, e.rev ?? 0),
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
                title: C("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => H.assetsFolder().then((I) => H.abrirCarpeta(I.path)).catch(() => H.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ o.jsx(dr, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: C("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var I;
                  return (I = p.current) == null ? void 0 : I.click();
                },
                children: /* @__PURE__ */ o.jsx(Qf, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: p,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (I) => {
                  var st;
                  const re = (st = I.target.files) == null ? void 0 : st[0];
                  if (I.target.value = "", !!re)
                    try {
                      const { blob: qe, name: W } = await Xd(re);
                      await H.reemplazar(e.id, qe, W), await n();
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
                title: C("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => a == null ? void 0 : a(e),
                children: /* @__PURE__ */ o.jsx(Yf, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                title: S.bg_removed ? C("Restaurar fondo original") : C("Quitar fondo (inteligente)"),
                onClick: () => (S.bg_removed ? H.restoreBackground(e.id) : H.removeBackground(e.id)).then(n),
                children: S.bg_removed ? /* @__PURE__ */ o.jsx(Kf, { size: 16 }) : /* @__PURE__ */ o.jsx(mr, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: C("Eliminar imagen"),
                onClick: () => H.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ o.jsx(Xf, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${S.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": C("Incluir como mini (rellena huecos)"),
                onClick: () => ae({ mini_enabled: !S.mini_enabled }),
                children: [
                  /* @__PURE__ */ o.jsx(An, { size: 15 }),
                  " ",
                  C("Mini")
                ]
              }
            ),
            l && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `mini-toggle rata ${S.rata_enabled ? "on" : ""}`,
                "data-testid": `rata-${e.id}`,
                "data-tip": C("Modo rata: este elemento coloca copias extra al imprimir"),
                onClick: () => ae({ rata_enabled: !S.rata_enabled }),
                children: "🐀"
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${S.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": C("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => te((I) => ({ ...I, borde: !I.borde })),
                children: [
                  /* @__PURE__ */ o.jsx(fa, { size: 15 }),
                  " ",
                  C("Borde")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: C("Copias"), children: [
              /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => ae({ copies: S.copies - 1 }), children: "−" }),
              /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: S.copies }),
              /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => ae({ copies: S.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => te((I) => ({ ...I, tamano: !I.tamano })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${Y.tamano ? "open" : ""}`, children: "›" }),
                  C("Tamaño"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    U.w.toFixed(1),
                    "×",
                    U.h.toFixed(1),
                    " · ",
                    Math.round(S.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            Y.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: C("Escala del elemento (100% = tamaño natural)"), children: C("Escala") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: S.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (I) => ae({ scale_pct: Number(I.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
                  Math.round(S.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: C("Tamaño exacto en milímetros (mantiene la proporción)"), children: C("Ancho") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: z,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      O.current = !0, D.current = !1;
                    },
                    onBlur: () => {
                      O.current = !1, w(U.w > 0 ? U.w.toFixed(1) : "");
                    },
                    onChange: (I) => ee(I.target.value)
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" }),
                /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ o.jsx("span", { title: C("Tamaño exacto en milímetros (mantiene la proporción)"), children: C("Alto") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: k,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      D.current = !0, O.current = !1;
                    },
                    onBlur: () => {
                      D.current = !1, A(U.h > 0 ? U.h.toFixed(1) : "");
                    },
                    onChange: (I) => B(I.target.value)
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
                onClick: () => te((I) => ({ ...I, borde: !I.borde })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${Y.borde ? "open" : ""}`, children: "›" }),
                  C("Borde adicional"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    S.offset_mm.toFixed(1),
                    " mm"
                  ] })
                ]
              }
            ),
            Y.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => b(S.offset_mm - 0.5),
                    children: "−"
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: _,
                    max: 10,
                    step: 0.5,
                    "data-testid": `offset-range-${e.id}`,
                    value: S.offset_mm,
                    onChange: (I) => b(Number(I.target.value))
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => b(S.offset_mm + 0.5),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: C("Adicional: {a} mm · Global: {g} mm · Total: {t} mm", {
                a: S.offset_mm.toFixed(1),
                g: f.toFixed(1),
                t: v.toFixed(1)
              }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", C("Extender")],
                  ["blanco", C("Blanco")],
                  ["color", C("Color")],
                  ["unir_recto", C("Unir recto")],
                  ["unir_curvo", C("Unir curvo")]
                ].map(([I, re]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `seg ${(S.offset_modo || "") === I ? "on" : ""}`,
                    "data-testid": `offset-modo-${I}-${e.id}`,
                    onClick: () => ae({ offset_modo: I }),
                    children: re
                  },
                  I
                )),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: S.offset_color || "#ffffff",
                    title: C("Color del borde"),
                    onChange: (I) => ae({
                      offset_color: I.target.value,
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
                onClick: () => te((I) => ({ ...I, mini: !I.mini })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${Y.mini ? "open" : ""}`, children: "›" }),
                  C("Opciones de mini"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    S.mini_quota,
                    " · ",
                    ue
                  ] })
                ]
              }
            ),
            Y.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx("span", { title: C("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: C("Cuota") }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => ae({ mini_quota: Math.max(
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
                  onClick: () => ae({ mini_quota: Math.min(
                    100,
                    Math.round((S.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: C(" {n} minis", { n: ue }) })
            ] }) })
          ] }),
          oe > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: C("Colocadas: {n}", { n: oe }) }),
          S.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ o.jsx(np, { size: 14 }),
            " ",
            S.warnings[0],
            " ",
            S.warnings.some((I) => /blob|trozos sueltos/i.test(I)) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => a == null ? void 0 : a(e),
                children: C("LIMPIA EL CONTORNO")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function fh({
  assets: e,
  result: t,
  settings: n,
  onChange: a,
  saveSettings: r,
  onEditarContorno: i,
  onAntesDeCambiar: s,
  faseBordes: c = 0,
  verBordes: l = !0,
  contornoModo: d = "final",
  destacado: h = "",
  seleccion: m = [],
  onSeleccion: y,
  onSeleccionarTodo: N,
  onInvertirSeleccion: x,
  onLimpiarSeleccion: C,
  onBulk: S
}) {
  const u = it(), p = g.useRef(null), [f, v] = g.useState(!1), [_, M] = g.useState(
    { tamano: !1, borde: !1, mini: !1 }
  ), [E, b] = g.useState(null), U = async (w) => {
    const O = [];
    for (const k of Array.from(w))
      try {
        const { blob: A, name: D } = await Xd(k);
        O.push(ur(await H.upload(A, D)));
      } catch (A) {
        console.error(A);
      }
    await a(), O.length > 1 && b(O);
  }, z = n.usar_minis;
  return e.some((w) => w.demo), /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
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
          var w;
          return (w = p.current) == null ? void 0 : w.click();
        },
        onDragOver: (w) => {
          w.preventDefault(), v(!0);
        },
        onDragLeave: () => v(!1),
        onDrop: (w) => {
          w.preventDefault(), v(!1), w.dataTransfer.files.length && U(w.dataTransfer.files);
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
              onChange: (w) => {
                w.target.files && U(w.target.files), w.target.value = "";
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
          onClick: () => N == null ? void 0 : N(),
          title: u("Seleccionar todos los elementos"),
          children: u("Seleccionar todos")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "sel-invertir",
          onClick: () => x == null ? void 0 : x(),
          title: u("Invertir la selección"),
          children: u("Invertir")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "sel-quitar",
          onClick: () => C == null ? void 0 : C(),
          title: u("Quitar la selección"),
          children: u("Quitar selección")
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "hint-seleccion", children: u("Shift + clic = de una en una; Ctrl/Cmd + clic = por lista. Otra vez deselecciona.") }),
    m.length >= 2 && (() => {
      const w = e.find((B) => B.id === m[0]), O = (w == null ? void 0 : w.copies) ?? 1, k = Math.round((w == null ? void 0 : w.scale_pct) ?? 100), A = (w == null ? void 0 : w.mini_enabled) ?? !1, D = (w == null ? void 0 : w.rata_enabled) ?? !1, Y = (w == null ? void 0 : w.mini_quota) ?? 1, te = Number((w == null ? void 0 : w.offset_mm) ?? 0), T = (w == null ? void 0 : w.offset_modo) || "extender", G = (w == null ? void 0 : w.offset_color) || "#ffffff", F = n.offset_activo === !0 ? Math.max(0, Number(n.offset_mm) || 0) : 0, ee = (B, ue) => {
        ue > 0 && (S == null || S(m, (oe) => {
          const ae = Number(B === "w" ? oe.w_mm_base || oe.w_mm : oe.h_mm_base || oe.h_mm) || 0;
          return ae > 0 ? { scale_pct: Math.max(10, Math.min(
            400,
            Math.round(ue / ae * 100)
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
              onClick: () => C ? C() : y == null ? void 0 : y(m[0], "uno"),
              children: u("Quitar selección")
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `mini-toggle${A ? " on" : ""}`,
              "data-testid": "bulk-mini",
              "data-tip": u("Incluir como mini (rellena huecos)"),
              onClick: () => S == null ? void 0 : S(m, { mini_enabled: !A }),
              children: [
                /* @__PURE__ */ o.jsx(An, { size: 15 }),
                " ",
                u("Mini")
              ]
            }
          ),
          n.rata_activo === !0 && /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `mini-toggle rata${D ? " on" : ""}`,
              "data-testid": "bulk-rata",
              "data-tip": u("Modo rata: estos elementos colocan copias extra al imprimir"),
              onClick: () => S == null ? void 0 : S(m, { rata_enabled: !D }),
              children: "🐀"
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `mini-toggle${te > 0 ? " on" : ""}`,
              "data-testid": "bulk-borde",
              "data-tip": u("Borde adicional"),
              onClick: () => M((B) => ({ ...B, borde: !B.borde })),
              children: [
                /* @__PURE__ */ o.jsx(fa, { size: 15 }),
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
                onClick: () => S == null ? void 0 : S(
                  m,
                  { copies: Math.max(0, O - 1) }
                ),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsx("span", { className: "n", children: O }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                "data-testid": "bulk-copias-mas",
                onClick: () => S == null ? void 0 : S(m, { copies: O + 1 }),
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
              onClick: () => M((B) => ({ ...B, tamano: !B.tamano })),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: `chev ${_.tamano ? "open" : ""}`, children: "›" }),
                u("Tamaño"),
                /* @__PURE__ */ o.jsxs("span", { className: "fold-val", children: [
                  k,
                  " %"
                ] })
              ]
            }
          ),
          _.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body bulk-tamano-body", children: [
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
                    value: k,
                    onChange: (B) => S == null ? void 0 : S(
                      m,
                      { scale_pct: Number(B.target.value) }
                    )
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
                  k,
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
                    defaultValue: w ? w.w_mm.toFixed(1) : "",
                    onBlur: (B) => ee("w", Number(B.target.value))
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
                    defaultValue: w ? w.h_mm.toFixed(1) : "",
                    onBlur: (B) => ee("h", Number(B.target.value))
                  },
                  `h${m.join(",")}`
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "bulk-tamano-lista", "data-testid": "bulk-tamanos", children: m.map((B) => {
              const ue = e.find((ae) => ae.id === B);
              if (!ue) return null;
              const oe = Kd(ue);
              return /* @__PURE__ */ o.jsxs("div", { className: "bulk-tamano-fila", children: [
                /* @__PURE__ */ o.jsx("span", { className: "bulk-tamano-nombre", title: ue.name, children: ue.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "bulk-tamano-medida", children: [
                  oe.w.toFixed(1),
                  "×",
                  oe.h.toFixed(1),
                  " mm"
                ] })
              ] }, B);
            }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: "fold-head",
              "data-testid": "bulk-fold-borde",
              onClick: () => M((B) => ({ ...B, borde: !B.borde })),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: `chev ${_.borde ? "open" : ""}`, children: "›" }),
                u("Borde adicional"),
                /* @__PURE__ */ o.jsxs("span", { className: "fold-val", children: [
                  te.toFixed(1),
                  " mm"
                ] })
              ]
            }
          ),
          _.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": "bulk-offset-menos",
                  onClick: () => S == null ? void 0 : S(
                    m,
                    { offset_mm: Math.max(
                      -F,
                      te - 0.5
                    ) }
                  ),
                  children: "−"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "range",
                  min: -F,
                  max: 10,
                  step: 0.5,
                  "data-testid": "bulk-offset-range",
                  value: te,
                  onChange: (B) => S == null ? void 0 : S(
                    m,
                    { offset_mm: Number(B.target.value) }
                  )
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": "bulk-offset-mas",
                  onClick: () => S == null ? void 0 : S(
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
              ].map(([B, ue]) => /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: `seg ${T === B ? "on" : ""}`,
                  "data-testid": `bulk-offset-modo-${B}`,
                  onClick: () => S == null ? void 0 : S(m, { offset_modo: B }),
                  children: ue
                },
                B
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "color",
                  className: "color-pick",
                  "data-testid": "bulk-offset-color",
                  value: G,
                  title: u("Color del borde"),
                  onChange: (B) => S == null ? void 0 : S(
                    m,
                    { offset_color: B.target.value, offset_modo: "color" }
                  )
                }
              )
            ] })
          ] })
        ] }),
        A && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: "fold-head",
              "data-testid": "bulk-fold-mini",
              onClick: () => M((B) => ({ ...B, mini: !B.mini })),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: `chev ${_.mini ? "open" : ""}`, children: "›" }),
                u("Opciones de mini"),
                /* @__PURE__ */ o.jsxs("span", { className: "fold-val", children: [
                  "×",
                  Y
                ] })
              ]
            }
          ),
          _.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ o.jsx("span", { title: u("Cuántos minis quieres de estos elementos respecto a los demás"), children: u("Cuota") }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "bulk-cuota-menos",
                onClick: () => S == null ? void 0 : S(m, { mini_quota: Math.max(
                  1,
                  Math.round((Y - 0.5) * 2) / 2
                ) }),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "quota-val", children: [
              "×",
              Y
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "bulk-cuota-mas",
                onClick: () => S == null ? void 0 : S(m, { mini_quota: Math.min(
                  100,
                  Math.round((Y + 0.5) * 2) / 2
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
        onDragOver: (w) => {
          w.preventDefault(), v(!0);
        },
        onDragLeave: () => v(!1),
        onDrop: (w) => {
          w.preventDefault(), v(!1), w.dataTransfer.files.length && U(w.dataTransfer.files);
        },
        children: e.map((w) => /* @__PURE__ */ o.jsx(
          mh,
          {
            a: w,
            result: t,
            onChange: a,
            sel: m.includes(w.id),
            onSel: y,
            onEditarContorno: i,
            onAntesDeCambiar: s,
            faseBordes: c,
            verBordes: l,
            contornoModo: d,
            destacado: h === w.id,
            bordeGlobal: n.offset_activo === !0,
            bordeGlobalMm: Number(n.offset_mm) || 0,
            bordeGlobalModo: n.offset_modo,
            rataActivo: n.rata_activo === !0
          },
          w.id
        ))
      }
    ),
    !z && /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => H.clearAssets().then(a),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      ph,
      {
        open: !!E,
        assets: E ?? [],
        onClose: () => b(null),
        onDone: async () => {
          await a();
        }
      }
    )
  ] });
}
const kt = (e) => (globalThis.__crycatAssets || "") + e;
function op({ open: e, onClose: t, onPick: n, initial: a }) {
  const r = it(), [i, s] = g.useState(null), [c, l] = g.useState("");
  g.useEffect(() => {
    e && d(a || "");
  }, [e]);
  const d = async (h = "") => {
    l("");
    try {
      s(await H.fsList(h));
    } catch (m) {
      l(m.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (h) => h.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: r("Elegir carpeta de guardado") }),
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
          children: r("Seleccionar esta carpeta")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: t, children: r("Cancelar") })
    ] })
  ] }) }) : null;
}
function hh({
  open: e,
  files: t,
  names: n,
  folder: a,
  error: r,
  onOpenFolder: i,
  onClose: s,
  preview: c
}) {
  const l = it(), [d, h] = g.useState("resumen");
  if (!e) return null;
  const m = t.length > 0 && t.every((x) => x.startsWith("data:")), y = (() => {
    for (const x of n ?? []) {
      const C = x.match(/(\d+[.,]\d+)x(\d+[.,]\d+)cm/i);
      if (C) return { w: C[1].replace(".", ","), h: C[2].replace(".", ",") };
    }
    return null;
  })(), N = [
    l("Abre Cricut Design Space."),
    l("Arrastra el PNG tal cual (no lo redimensiones ni lo recortes) y elige «Imagen completa» para conservar la transparencia."),
    l("NO uses «Ajustar» ni cambies el tamaño: el archivo ya viene a tamaño real. Comprueba que el ancho × alto coincide con el del nombre del archivo."),
    l("Si Design Space avisa de que va a redimensionar, cancela: el tamaño ya es el correcto."),
    l("Pulsa «Crear» para preparar el lienzo."),
    l("Imprime al 100 % (sin «ajustar a la página») en papel mate blanco y colócalo en la esterilla."),
    l("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ o.jsx("div", { className: "modal", children: d === "resumen" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { "data-testid": "save-titulo", children: l(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ o.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      c && /* @__PURE__ */ o.jsx(
        "img",
        {
          src: c,
          alt: l("Vista previa de lo guardado"),
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
      /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Archivos:") }),
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((x, C) => /* @__PURE__ */ o.jsx("li", { title: (n == null ? void 0 : n[C]) ?? x, children: (n == null ? void 0 : n[C]) ?? x.split(/[\\/]/).pop() }, C)) }),
      y && /* @__PURE__ */ o.jsx("p", { className: "hint", "data-testid": "save-tamano", children: l(
        "Tamaño real: {w} × {h} cm. Compruébalo en Design Space antes de crear (si avisa de redimensionar, cancela).",
        { w: y.w, h: y.h }
      ) }),
      !m && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: a })
      ] }),
      m && /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      m ? t.map((x, C) => {
        const S = (n == null ? void 0 : n[C]) ?? `crycat_pagina-${String(C + 1).padStart(2, "0")}.png`, u = /\.png$/i.test(S) ? S : `${S}.png`;
        return /* @__PURE__ */ o.jsxs(
          "a",
          {
            "data-testid": `btn-descargar-${C}`,
            href: x,
            download: u,
            className: "btn-descarga",
            children: [
              /* @__PURE__ */ o.jsx(dr, { size: 15 }),
              " ",
              l("Descargar página {n}", { n: C + 1 })
            ]
          },
          C
        );
      }) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => i == null ? void 0 : i(a),
          children: [
            /* @__PURE__ */ o.jsx(dr, { size: 15 }),
            " ",
            l("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-continuar", onClick: s, children: l("Continuar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => h("cricut"),
          children: l("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { children: l("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: N.map((x, C) => /* @__PURE__ */ o.jsx("li", { children: x }, C)) }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => h("resumen"),
          children: l("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: s, children: l("Entendido") })
    ] })
  ] }) }) });
}
function gh({ assets: e, result: t, settings: n, ui: a, setUi: r, saveSettings: i, onRefresh: s, onJob: c, onRecalc: l, editando: d, onFinEdicion: h, onDeshacer: m, onRehacer: y, puedeDeshacer: N, puedeRehacer: x, seleccion: C = [], onSeleccion: S }) {
  const u = it(), p = hl(), [f, v] = g.useState(1), [_, M] = g.useState({ x: 0, y: 0 }), [E, b] = g.useState(null), [U, z] = g.useState(1), [w, O] = g.useState(null), [k, A] = g.useState(null), [D, Y] = g.useState(!1), [te, T] = g.useState(2), [G, F] = g.useState(0);
  g.useEffect(() => {
    if (!a.verBordes) return;
    const j = window.setInterval(
      () => F((L) => (L + 3) % 12),
      260
    );
    return () => window.clearInterval(j);
  }, [a.verBordes]);
  const [ee, B] = g.useState([]), [ue, oe] = g.useState([]), [ae, I] = g.useState(""), [re, st] = g.useState(/* @__PURE__ */ new Set()), [qe, W] = g.useState("ninguna"), [he, Ee] = g.useState(2), [Ue, Lt] = g.useState("#ffffff"), [ze, Kt] = g.useState(""), [Nt, Ze] = g.useState(/* @__PURE__ */ new Set()), $n = g.useRef(null), bt = g.useRef(null), xn = p === "en" ? Gf : Vf, ya = g.useMemo(
    () => xn[Math.floor(Math.random() * xn.length)],
    [xn]
  ), xr = a.saveName.trim() || ya;
  g.useEffect(() => {
    z(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const Re = (t == null ? void 0 : t.pages) ?? 0, xa = !!t && t.efficiency < 0.8;
  g.useEffect(() => {
    const j = $n.current;
    if (!j) return;
    const L = ($) => {
      $.preventDefault(), $.stopPropagation();
      const Z = j.getBoundingClientRect(), K = $.clientX - Z.left, se = $.clientY - Z.top;
      v((ce) => {
        const Pe = $.deltaY < 0 ? 1.05 : 0.9523809523809523, pe = Math.min(12, Math.max(0.05, ce * Pe)), me = pe / ce;
        return M((Et) => ({ x: K - (K - Et.x) * me, y: se - (se - Et.y) * me })), pe;
      });
    };
    return j.addEventListener("wheel", L, { passive: !1 }), () => j.removeEventListener("wheel", L);
  }, []);
  const wa = (j) => {
    if (j.target.closest(".item-box")) return;
    bt.current = { x: j.clientX - _.x, y: j.clientY - _.y };
    const L = (Z) => {
      bt.current && M({ x: Z.clientX - bt.current.x, y: Z.clientY - bt.current.y });
    }, $ = () => {
      bt.current = null, window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", $);
    };
    window.addEventListener("mousemove", L), window.addEventListener("mouseup", $);
  };
  g.useEffect(() => {
    const j = (L) => {
      L.target.tagName !== "INPUT" && (L.key === "+" || L.key === "=" ? v(($) => Math.min(12, $ * 1.08)) : L.key === "-" || L.key === "_" ? v(($) => Math.max(0.05, $ / 1.08)) : L.key === "0" ? Sa() : L.key === "Escape" ? b(null) : L.key === "g" ? r(($) => ({ ...$, guidesVisible: !$.guidesVisible })) : L.key === "t" && r(($) => {
        const Z = [
          "blanco",
          "transparente",
          "fosforito",
          "rosa",
          "negro"
        ], K = $.fondo ?? ($.eyeFosforito ? "fosforito" : $.eyeTransparent ? "transparente" : "blanco"), se = Z[(Z.indexOf(K) + 1) % Z.length];
        return {
          ...$,
          fondo: se,
          eyeTransparent: se === "transparente",
          eyeFosforito: se === "fosforito"
        };
      }));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [r]);
  const wn = g.useRef(null), P = g.useRef(null), V = (j, L) => {
    j.preventDefault(), j.stopPropagation();
    const $ = j.currentTarget.closest(".page-box");
    if (!$ || !t) return;
    const Z = t.page_mm[0] / $.clientWidth, K = {
      uid: L.uid,
      startX: j.clientX,
      startY: j.clientY,
      origX: L.x,
      origY: L.y,
      mmPerPx: Z
    };
    wn.current = K, P.current = { x: L.x, y: L.y }, O(K), A({ uid: L.uid, x: L.x, y: L.y });
    const se = (Pe) => {
      const pe = wn.current;
      if (!pe) return;
      const me = (Pe.clientX - pe.startX) * pe.mmPerPx / f, Et = (Pe.clientY - pe.startY) * pe.mmPerPx / f;
      P.current = { x: pe.origX + me, y: pe.origY + Et }, A({ uid: pe.uid, x: pe.origX + me, y: pe.origY + Et });
    }, ce = (Pe) => {
      window.removeEventListener("mousemove", se), window.removeEventListener("mouseup", ce);
      const pe = wn.current;
      if (wn.current = null, !pe) return;
      const me = (Pe.clientX - pe.startX) * pe.mmPerPx / f, Et = (Pe.clientY - pe.startY) * pe.mmPerPx / f;
      O(null), A(null), !(Math.abs(me) < 0.5 && Math.abs(Et) < 0.5) && Q(pe.uid, pe.origX + me, pe.origY + Et);
    };
    window.addEventListener("mousemove", se), window.addEventListener("mouseup", ce);
  }, Q = async (j, L, $) => {
    try {
      const Z = await H.move(j, L, $);
      Z.job ? c(Z.job) : await s();
    } catch {
      await s();
    } finally {
      z(Date.now());
    }
  }, J = async (j) => {
    const L = await H.unpin(j);
    c(L);
  }, ft = !1;
  g.useEffect(() => {
    {
      B([]);
      return;
    }
  }, [a.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, U]), g.useEffect(() => {
    if (Kt(""), st(/* @__PURE__ */ new Set()), W("ninguna"), !d) {
      oe([]), I(""), Ze(/* @__PURE__ */ new Set());
      return;
    }
    H.blobs(d.id).then((j) => {
      oe(j.blobs), Ee(j.union_mm ?? 2), T(d.offset_mm > 0 ? d.offset_mm : j.union_mm ?? 2), W(
        d.offset_modo === "unir_recto" || d.offset_modo === "unir_curvo" || d.offset_modo === "blanco" ? d.offset_modo : "ninguna"
      ), Lt(d.offset_color || "#ffffff"), I(j.preview_png), Ze(new Set(j.blobs.filter((L) => !L.principal).map((L) => L.id)));
    }).catch(() => {
      oe([]), I("");
    });
  }, [d]), g.useEffect(() => {
    if (!d) return;
    if (re.size === 0 && qe === "ninguna") {
      Kt("");
      return;
    }
    let j = !0;
    const L = window.setTimeout(() => {
      H.contornoPreview(d.id, {
        quitar: Array.from(re),
        union_modo: qe,
        union_mm: te,
        union_color: Ue
      }).then(($) => {
        j && Kt($.png);
      }).catch(() => {
      });
    }, 160);
    return () => {
      j = !1, window.clearTimeout(L);
    };
  }, [d, re, qe, te, Ue]);
  const Ve = () => {
    Nt.size && (st((j) => /* @__PURE__ */ new Set([...j, ...Nt])), Ze(/* @__PURE__ */ new Set()));
  }, On = (j) => {
    j !== qe && j !== "ninguna" && T(he), W(j);
  }, Oo = async () => {
    if (!d) return;
    const j = Array.from(re), L = qe !== "ninguna" ? { modo: qe, mm: te, color: Ue } : void 0;
    try {
      (j.length || L) && await H.limpiarContorno(d.id, j, L);
    } finally {
      await (h == null ? void 0 : h());
    }
  }, Fo = (j) => {
    Ze((L) => {
      const $ = new Set(L);
      return $.has(j) ? $.delete(j) : $.add(j), $;
    });
  }, [_e, ht] = g.useState(null), ja = async () => {
    try {
      const $ = await H.export(
        a.saveName || "crycat",
        n.carpeta_export || void 0
      );
      ht({ files: $.files, names: $.names, folder: $.folder, preview: $.preview });
    } catch ($) {
      ht({ files: [], folder: "", error: $.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const Z = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), K = URL.createObjectURL(Z), se = document.createElement("a");
        se.href = K, se.download = `${a.saveName || "crycat"}-cricut.pdf`, se.click(), setTimeout(() => URL.revokeObjectURL(K), 4e3);
      } catch ($) {
        ht({
          files: [],
          folder: "",
          error: $.message
        });
      }
      return;
    }
    const L = document.createElement("iframe");
    L.setAttribute("aria-hidden", "true"), L.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", L.src = "/api/print.pdf", L.onload = () => {
      var $, Z;
      try {
        ($ = L.contentWindow) == null || $.focus(), (Z = L.contentWindow) == null || Z.print();
      } finally {
        window.setTimeout(() => L.remove(), 6e4);
      }
    }, document.body.appendChild(L);
  }, gt = async () => {
    try {
      const j = await H.export(xr);
      ht({ files: j.files, names: j.names, folder: j.folder, preview: j.preview });
    } catch (j) {
      ht({ files: [], folder: "", error: j.message });
    }
  }, up = () => {
    Y(!0);
  }, dp = async (j) => {
    try {
      const L = await H.export(xr, j);
      ht({ files: L.files, names: L.names, folder: L.folder, preview: L.preview });
    } catch (L) {
      ht({ files: [], folder: "", error: L.message });
    }
  }, gl = (t == null ? void 0 : t.poly_mm) ?? [], [At, It] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [ka, Ca] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], vt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : ka, jn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Ca, Sa = g.useCallback(() => {
    const j = $n.current;
    if (!j) return;
    const L = j.querySelector(".page-box");
    if (!L) return;
    const $ = j.querySelector(".canvas-inner"), Z = j.clientWidth, K = j.clientHeight, se = ($ == null ? void 0 : $.offsetWidth) || L.offsetWidth || 1, ce = ($ == null ? void 0 : $.offsetHeight) || L.offsetHeight || 1, Pe = Math.min(1, Z / se, K / ce);
    v(Pe), M({ x: (Z - se * Pe) / 2, y: (K - ce * Pe) / 2 });
  }, []);
  g.useEffect(() => {
    if (Re <= 0) return;
    const j = window.setTimeout(Sa, 60);
    return () => window.clearTimeout(j);
  }, [
    Re,
    vt,
    jn,
    a.viewMode,
    a.hojaGirada,
    E,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    Sa
  ]);
  const Dt = n.lienzo === "pagina" ? 0 : At, $t = n.lienzo === "pagina" ? 0 : It, vl = gl.length ? "M" + gl.map(([j, L]) => `${j - Dt},${L - $t}`).join(" L") + " Z" : "", yl = g.useRef(0);
  g.useEffect(() => {
    if (!t) return;
    const j = t.pages || 0;
    j > 0 && j !== yl.current && (yl.current = j, r((L) => ({ ...L, viewMode: j <= 1 ? 1 : j === 2 ? 2 : 4 })), b(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const wr = a.contornoModo ?? "final", Fn = a.verBordes && wr !== "ninguno", qo = `${U}-${n.marcas_delimitar ? 1 : 0}-${n.lienzo}-${n.color_formato}-${n.dpi_salida}`;
  g.useEffect(() => {
    if (!Fn || !t) return;
    const j = [], L = Math.max(1, t.pages);
    for (let Z = 0; Z < L; Z++)
      for (const K of [0, 3, 6, 9])
        j.push(H.pageUrl(
          Z,
          qo,
          n.simular_impresion === !0,
          !0,
          K,
          wr
        ));
    const $ = j.map((Z) => {
      const K = new Image();
      return K.src = Z, K;
    });
    return () => $.forEach((Z) => {
      Z.src = "";
    });
  }, [Fn, qo, t, wr, n.simular_impresion]);
  const Xt = a.hojaGirada === !0, Uo = Xt ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${vt / (jn || 1) * 100}%`,
    height: `${jn / (vt || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(270deg)"
  } : void 0, pp = (j) => {
    var Z;
    const L = (t == null ? void 0 : t.placements.filter((K) => K.page === j)) ?? [], $ = ((Z = t == null ? void 0 : t.marcas_cajas_mm) == null ? void 0 : Z[j]) ?? [At, It, At + ka, It + Ca];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box fondo-${a.fondo ?? (a.eyeFosforito ? "fosforito" : a.eyeTransparent ? "transparente" : "blanco")}${Xt ? " girada" : ""}`,
        style: Xt ? {
          width: "100%",
          aspectRatio: `${jn} / ${vt}`
        } : { width: "100%" },
        onClick: (K) => {
          Re > 1 && E === null && !K.target.closest(".item-box") && b(j);
        },
        "data-testid": `page-${j}`,
        children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: `sheet${Xt ? " girada" : ""}`,
              style: Uo,
              onLoad: j === 0 ? Sa : void 0,
              src: H.pageUrl(j, qo, n.simular_impresion === !0, Fn, G, wr),
              alt: u("Página {i}", { i: j + 1 }),
              draggable: !1
            }
          ),
          a.guidesVisible && vl && /* @__PURE__ */ o.jsxs(
            "svg",
            {
              className: `overlay-svg${Xt ? " girada" : ""}`,
              style: Uo,
              viewBox: `0 0 ${vt} ${jn}`,
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ o.jsxs(
                  "g",
                  {
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.15, vt / 1400),
                    opacity: 0.28,
                    children: [
                      Array.from(
                        { length: Math.floor((At - Dt + ka) / 10) + 1 },
                        (K, se) => {
                          const ce = se * 10 - (Dt - At);
                          return ce >= At - Dt - 0.01 && ce <= At - Dt + ka + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: ce,
                              y1: It - $t,
                              x2: ce,
                              y2: It - $t + Ca
                            },
                            `v${se}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((It - $t + Ca) / 10) + 1 },
                        (K, se) => {
                          const ce = se * 10 - ($t - It);
                          return ce >= It - $t - 0.01 && ce <= It - $t + Ca + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: At - Dt,
                              y1: ce,
                              x2: At - Dt + ka,
                              y2: ce
                            },
                            `h${se}`
                          ) : null;
                        }
                      )
                    ]
                  }
                ),
                (t == null ? void 0 : t.marcas) && /* @__PURE__ */ o.jsx("g", { children: [
                  ["esquina_flecha", $[0], $[1], !1, !1],
                  ["esquina_sd", $[2], $[1], !0, !1],
                  ["esquina_ii", $[0], $[3], !1, !0],
                  ["esquina_id", $[2], $[3], !0, !0]
                ].map(([K, se, ce, Pe, pe]) => {
                  const me = t.marcas[K];
                  if (!me) return null;
                  const Et = se - Dt - (Pe ? me[0] : 0), fp = ce - $t - (pe ? me[1] : 0);
                  return /* @__PURE__ */ o.jsx(
                    "image",
                    {
                      href: kt(`/marcas/${K}.png`),
                      x: Et,
                      y: fp,
                      width: me[0],
                      height: me[1],
                      preserveAspectRatio: "none"
                    },
                    K
                  );
                }) }),
                /* @__PURE__ */ o.jsx(
                  "path",
                  {
                    d: vl,
                    fill: "none",
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.6, vt / 250),
                    strokeDasharray: `${vt / 55} ${vt / 85}`,
                    opacity: 0.85
                  }
                ),
                ft
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `capa-piezas${Xt ? " girada" : ""}`,
              style: Uo,
              children: L.map((K) => {
                const se = e.find((me) => me.id === K.asset_id), ce = (k == null ? void 0 : k.uid) === K.uid ? k : null, Pe = ((ce ? ce.x : K.x) - Dt) / (vt || 1) * 100, pe = ((ce ? ce.y : K.y) - $t) / (jn || 1) * 100;
                return /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `item-box ${K.pinned ? "pinned" : ""} ${(w == null ? void 0 : w.uid) === K.uid ? "dragging" : ""}${C.includes(K.asset_id) ? " sel" : ""}`,
                    style: {
                      left: `${Pe}%`,
                      top: `${pe}%`,
                      width: `${K.w / (vt || 1) * 100}%`,
                      height: `${K.h / (jn || 1) * 100}%`
                    },
                    title: (se == null ? void 0 : se.name) ?? "",
                    onMouseDown: (me) => V(me, K),
                    onContextMenu: (me) => {
                      me.preventDefault(), J(K.uid);
                    },
                    "data-testid": `item-${K.uid}`,
                    onClick: (me) => {
                      me.stopPropagation(), me.currentTarget.scrollIntoView({
                        block: "center",
                        inline: "center",
                        behavior: "smooth"
                      }), window.dispatchEvent(new CustomEvent(
                        "crycat:seleccion",
                        { detail: K.asset_id }
                      )), S == null || S(K.asset_id, me.shiftKey ? "uno" : me.ctrlKey || me.metaKey ? "lista" : "solo");
                    },
                    children: K.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
                  },
                  K.uid
                );
              })
            }
          )
        ]
      },
      j
    );
  }, mp = E !== null ? [E] : Array.from({ length: Re }, (j, L) => L);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    (Re > 1 || ((t == null ? void 0 : t.unplaced) ?? 0) > 0) && /* @__PURE__ */ o.jsx(
      "div",
      {
        className: `aviso-paginas-flotante${Re > 1 ? "" : " con-lista"}`,
        "data-testid": "aviso-paginas",
        children: Re > 1 ? u("No cabe en una página: {n} páginas", { n: Re }) : /* @__PURE__ */ o.jsxs("details", { className: "aviso-unplaced", children: [
          /* @__PURE__ */ o.jsx("summary", { "data-testid": "aviso-unplaced-resumen", children: u(
            "No caben todas las copias: {n} sin colocar",
            { n: (t == null ? void 0 : t.unplaced) ?? 0 }
          ) }),
          /* @__PURE__ */ o.jsx("ul", { "data-testid": "aviso-unplaced-lista", children: ((t == null ? void 0 : t.unplaced_detalle) ?? []).map((j) => /* @__PURE__ */ o.jsxs("li", { children: [
            j.name,
            " — ",
            j.n
          ] }, j.id)) })
        ] })
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${Fn ? "modo-final" : "modo-ninguno"}`,
          "data-tip": u(Fn ? "Quitar el contorno (solo vista previa)" : "Ver el contorno de corte: la línea más exterior, lo que se corta de verdad"),
          onClick: () => {
            const j = !Fn;
            r((L) => ({
              ...L,
              contornoModo: j ? "final" : "ninguno",
              verBordes: j
            })), i({
              contorno_modo: j ? "final" : "ninguno",
              ver_contornos: j
            });
          },
          children: [
            /* @__PURE__ */ o.jsx(fa, { size: 16 }),
            " ",
            u("Contorno")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          className: a.guidesVisible ? "primary" : "",
          "data-tip": u("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => r((j) => ({ ...j, guidesVisible: !j.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(gs, { size: 16 }),
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
          onClick: () => r((j) => {
            const L = [
              "blanco",
              "transparente",
              "fosforito",
              "rosa",
              "negro"
            ], $ = j.fondo ?? (j.eyeFosforito ? "fosforito" : j.eyeTransparent ? "transparente" : "blanco"), Z = L[(L.indexOf($) + 1) % L.length];
            return {
              ...j,
              fondo: Z,
              eyeTransparent: Z === "transparente",
              eyeFosforito: Z === "fosforito"
            };
          }),
          children: [
            a.eyeFosforito ? /* @__PURE__ */ o.jsx(Jf, { size: 16 }) : a.eyeTransparent ? /* @__PURE__ */ o.jsx(Pc, { size: 16 }) : /* @__PURE__ */ o.jsx(Pc, { size: 16 }),
            a.eyeFosforito ? u("Fosforito") : a.eyeTransparent ? u("Transparente") : u("Blanco")
          ]
        }
      ),
      (Re > 1 && E === null || E !== null) && /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        Re > 1 && E === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: a.viewMode === 1 ? "primary" : "", onClick: () => r((j) => ({ ...j, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: a.viewMode === 2 ? "primary" : "", onClick: () => r((j) => ({ ...j, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: a.viewMode === 4 ? "primary" : "", onClick: () => r((j) => ({ ...j, viewMode: 4 })), children: "4" })
        ] }),
        E !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => b(null), title: u("Volver a la cuadrícula (Esc)"), children: u(" Ver todo") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Xt ? "primary" : "",
          "data-tip": u("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const j = !window.__crycatAncho;
            window.__crycatAncho = j, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: j }
            ));
          },
          children: [
            /* @__PURE__ */ o.jsx(Zf, { size: 16 }),
            u(Xt ? "Vertical" : "Horizontal")
          ]
        }
      )
    ] }),
    !d && /* @__PURE__ */ o.jsxs("div", { className: "viewer-flotantes", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "vf-izq", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": u("Deshacer (Ctrl+Z)"),
            onClick: () => m(),
            disabled: !N,
            children: /* @__PURE__ */ o.jsx(hs, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": u("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => y(),
            disabled: !x,
            children: /* @__PURE__ */ o.jsx(th, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "vf-centro", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "btn-optimizar-flotante",
          "data-testid": "btn-recalcular",
          "data-tip": u("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(xa ? "rapido" : "optimo"),
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
            onClick: () => v((j) => Math.min(12, j * 1.08)),
            children: /* @__PURE__ */ o.jsx(nh, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": u("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: Sa,
            children: /* @__PURE__ */ o.jsx(eh, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": u("Alejar (−)"),
            onClick: () => v((j) => Math.max(0.05, j / 1.08)),
            children: /* @__PURE__ */ o.jsx(ah, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(f * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-top", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "danger",
            "data-testid": "btn-quitar-marcados",
            disabled: Nt.size === 0,
            onClick: Ve,
            children: u("Quitar seleccionados ({n})", { n: Nt.size })
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "hint", children: u("Toca un trozo de la imagen para marcarlo. El principal nunca se borra.") })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "editor-unir", children: [
        /* @__PURE__ */ o.jsx("span", { className: "hint", children: u("Unir los trozos") }),
        /* @__PURE__ */ o.jsx("div", { className: "union-modos", children: [
          ["ninguna", u("Ninguna")],
          ["unir_curvo", u("Unir curvo")],
          ["unir_recto", u("Unir recto")],
          ["blanco", u("Borde fuera")]
        ].map(([j, L]) => /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `seg ${qe === j ? "on" : ""}`,
            "data-testid": `union-modo-${j}`,
            title: u(j === "blanco" ? "Añade borde hacia FUERA además de unir" : j === "ninguna" ? "No unir nada" : "Une los trozos SOLO hacia dentro (sin borde por fuera)"),
            onClick: () => On(j),
            children: L
          },
          j
        )) }),
        qe !== "ninguna" && /* @__PURE__ */ o.jsxs("div", { className: "union-opciones", children: [
          /* @__PURE__ */ o.jsx("span", { className: "hint", children: u("Ancho") }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": "union-menos",
              onClick: () => T((j) => Math.max(0.5, Math.round((j - 0.5) * 2) / 2)),
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
              onClick: () => T((j) => Math.min(20, Math.round((j + 0.5) * 2) / 2)),
              children: "+"
            }
          ),
          /* @__PURE__ */ o.jsx("span", { className: "hint", style: { marginLeft: 8 }, children: u("Relleno") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "color",
              className: "color-pick",
              "data-testid": "union-color",
              title: u("Color de relleno de la unión o el borde"),
              value: Ue,
              onChange: (j) => Lt(j.target.value)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "editor-cuerpo", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              src: ze || ae || H.previewUrlSinBordes(
                d.id,
                d.rev ?? 0
              ),
              alt: d.name,
              draggable: !1
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: ue.filter((j) => !j.principal && !re.has(j.id)).map((j, L) => {
            const [$, Z, K, se] = j.bbox, ce = d.w_px || 1, Pe = d.h_px || 1;
            return /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `blob${Nt.has(j.id) ? " sel" : ""}`,
                "data-testid": `blob-${L}`,
                title: u("Trozo de {px} px — clic para {accion}", {
                  px: j.area_px,
                  accion: Nt.has(j.id) ? u("conservar") : u("quitar")
                }),
                style: {
                  left: `${$ / ce * 100}%`,
                  top: `${Z / Pe * 100}%`,
                  width: `${(K - $) / ce * 100}%`,
                  height: `${(se - Z) / Pe * 100}%`
                },
                onClick: () => Fo(j.id)
              },
              j.id
            );
          }) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "editor-lado", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-sel-todo",
              onClick: () => Ze(new Set(ue.filter((j) => !j.principal && !re.has(j.id)).map((j) => j.id))),
              children: u("Seleccionar todo")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-sel-nada",
              onClick: () => Ze(/* @__PURE__ */ new Set()),
              children: u("Quitar selección")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "primary",
            "data-testid": "btn-guardar-contorno",
            title: u("Aplica los trozos quitados y la unión elegida"),
            onClick: Oo,
            children: u("Guardar")
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-descartar-contorno",
            title: u("Sale sin aplicar nada"),
            onClick: () => h == null ? void 0 : h(),
            children: u("Descartar")
          }
        )
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: $n,
        className: `canvas ${w ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: wa,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${_.x}px, ${_.y}px) scale(${f})` },
            children: [
              Re === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: u("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${E !== null ? 1 : a.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: mp.map(pp)
                }
              )
            ]
          }
        )
      }
    ),
    !d && /* @__PURE__ */ o.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: ya,
          value: a.saveName,
          onChange: (j) => r((L) => ({ ...L, saveName: j.target.value }))
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
            onClick: () => H.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(dr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: gt, children: u("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: up, children: u("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: ja,
            disabled: Re === 0,
            children: u("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      op,
      {
        open: D,
        initial: n.carpeta_export,
        onClose: () => Y(!1),
        onPick: dp
      }
    ),
    /* @__PURE__ */ o.jsx(
      hh,
      {
        open: !!_e,
        files: (_e == null ? void 0 : _e.files) ?? [],
        names: _e == null ? void 0 : _e.names,
        folder: (_e == null ? void 0 : _e.folder) ?? "",
        preview: _e == null ? void 0 : _e.preview,
        error: _e == null ? void 0 : _e.error,
        onOpenFolder: (j) => void H.fsOpen(j).catch(() => {
        }),
        onClose: () => ht(null)
      }
    )
  ] });
}
function vh({ settings: e, saveSettings: t }) {
  const n = it(), a = e.usar_minis, r = e.modo === "experto", i = (e.calculo ?? "estandar") === "exacto", s = {
    90: "libre",
    libre: "no",
    no: "90"
  }, c = {
    90: "90°",
    libre: n("libre"),
    no: n("fijo")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "acciones-panel", children: /* @__PURE__ */ o.jsxs("div", { className: "acciones-rapidas", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "fila", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `chip${a ? " on" : ""}`,
          "data-testid": "chip-minis",
          "data-tip": n("Generar minis: rellenar los huecos con copias pequeñas"),
          onClick: () => t({
            usar_minis: !a,
            // al activarlos se desactiva el recálculo automático (solo ahora)
            ...a ? {} : { auto_recalcular: !1 }
          }),
          children: [
            /* @__PURE__ */ o.jsx(An, { size: 16 }),
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
            /* @__PURE__ */ o.jsx(pr, { size: 16 }),
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
          className: `chip${r ? " on" : ""}`,
          "data-testid": "chip-modo",
          "data-tip": n("Modo básico (lo esencial) o experto (todos los menús)"),
          onClick: () => t({ modo: r ? "rapido" : "experto" }),
          children: n(r ? "Modo experto" : "Modo básico")
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `chip${i ? " on" : ""}`,
          "data-testid": "chip-calculo",
          "data-calculo": i ? "exacto" : "estandar",
          "data-tip": n("Cálculo: estándar (bueno y rápido) o exacto (el mejor posible, más lento). Pulsa para alternar."),
          onClick: () => t({
            calculo: i ? "estandar" : "exacto"
          }),
          children: [
            /* @__PURE__ */ o.jsx(rp, { size: 16 }),
            n(i ? "Cálculo exacto" : "Cálculo estándar")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "chip-rotacion",
          "data-tip": n("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo"),
          onClick: () => t({
            rotacion: s[e.rotacion] ?? "90"
          }),
          children: [
            /* @__PURE__ */ o.jsx(tp, { size: 16 }),
            " ",
            c[e.rotacion] ?? "90°"
          ]
        }
      )
    ] })
  ] }) });
}
const hi = [
  {
    clave: "silueta",
    nombre: "Silueta",
    desc: "Forma real, cualquier ángulo",
    Icono: uh,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: dh,
    forma: "rectangulos"
  }
];
function yh({ settings: e, saveSettings: t }) {
  var h;
  const n = it(), [a, r] = g.useState(
    {}
  ), [i, s] = g.useState("");
  g.useEffect(() => {
    H.modos().then((m) => r(m.modos ?? {})).catch(() => {
    });
  }, []);
  const c = e.modo_forma ?? "siluetas", l = ((h = hi.find((m) => m.forma === c)) == null ? void 0 : h.clave) ?? "silueta", d = async (m) => {
    var N;
    const y = a[m];
    y && (await t(y), s(n("Modo «{n}» aplicado", {
      n: n(((N = hi.find((x) => x.clave === m)) == null ? void 0 : N.nombre) ?? m)
    })));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "modos-seg",
        role: "tablist",
        title: n("Modo de empaquetado: elige UNO"),
        children: hi.map((m) => /* @__PURE__ */ o.jsxs(
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
function xh({ i: e, valor: t, refBase: n, onValor: a, onQuitar: r, t: i, modo: s = "mm" }) {
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
          Number.isFinite(h) && h > 0 && a(h);
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
        onClick: r,
        children: "✕"
      }
    )
  ] });
}
function wh({ valor: e, onValor: t, min: n, max: a, step: r, testid: i, title: s }) {
  const [c, l] = g.useState(String(e)), d = g.useRef(!1);
  return g.useEffect(() => {
    d.current || l(String(e));
  }, [e]), /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "number",
      min: n,
      max: a,
      step: r,
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
const jh = {
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
function $r(e) {
  return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function kh(e, t) {
  const n = e.length, a = t.length;
  if (!n) return a;
  if (!a) return n;
  const r = Array.from({ length: n + 1 }, () => [0]);
  for (let i = 0; i <= n; i += 1) r[i][0] = i;
  for (let i = 0; i <= a; i += 1) r[0][i] = i;
  for (let i = 1; i <= n; i += 1)
    for (let s = 1; s <= a; s += 1)
      r[i][s] = Math.min(
        r[i - 1][s] + 1,
        r[i][s - 1] + 1,
        r[i - 1][s - 1] + (e[i - 1] === t[s - 1] ? 0 : 1)
      );
  return r[n][a];
}
function Rc(e, t) {
  if (!e) return 0;
  if (t.includes(e)) return 3;
  const n = t.split(/[^a-z0-9]+/).filter(Boolean);
  for (const a of n) {
    if (a.startsWith(e)) return 2;
    if (e.length >= 4 && kh(a, e) <= 2) return 1;
  }
  for (const [a, r] of Object.entries(jh))
    if (a.includes(e) || e.includes(a)) {
      for (const i of r) if (t.includes(i)) return 1;
    }
  return 0;
}
function Ot({ id: e, title: t, open: n, toggle: a, children: r, icon: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => a(e), children: [
      i && /* @__PURE__ */ o.jsx("span", { className: "sect-icono", children: i }),
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: r })
  ] });
}
function Lc(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, a) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, a) : n);
}
const Ch = {
  inteligente: 8,
  auto: 8,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Sh = {
  inteligente: "Selección inteligente",
  auto: "Selección inteligente",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function _h({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const a = it(), [r, i] = g.useState(!0), [s, c] = g.useState({
    general: !1,
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [l, d] = g.useState(!1), h = (k) => s[k], [m, y] = g.useState(""), N = [
    ["general", /* @__PURE__ */ o.jsx(Ha, { size: 15 }), a("General"), !0],
    ["minis", /* @__PURE__ */ o.jsx(An, { size: 15 }), a("Minis"), !0],
    ["optimizacion", /* @__PURE__ */ o.jsx(pr, { size: 15 }), a("Optim."), !1],
    ["imagen", /* @__PURE__ */ o.jsx(mr, { size: 15 }), a("Imagen"), !1],
    ["offset", /* @__PURE__ */ o.jsx(fa, { size: 15 }), a("Borde"), !0],
    ["corte", /* @__PURE__ */ o.jsx(Mc, { size: 15 }), a("Corte"), !1],
    ["visualizacion", /* @__PURE__ */ o.jsx(gs, { size: 15 }), a("Vista"), !0],
    ["historial", /* @__PURE__ */ o.jsx(hs, { size: 15 }), a("Historial"), !1],
    ["extras", /* @__PURE__ */ o.jsx(fs, { size: 15 }), a("Extras"), !0]
  ], x = (k, A = !1, D = !1) => {
    c((Y) => {
      const te = { ...Y };
      return Object.keys(te).forEach((T) => {
        te[T] = T === k ? A ? !0 : !Y[T] : !1;
      }), te;
    }), D && window.setTimeout(() => {
      var Y;
      (Y = document.querySelector(`[data-testid="sect-${k}"]`)) == null || Y.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 130);
  }, [C, S] = g.useState([]);
  g.useEffect(() => {
    const k = $r(m.trim());
    if (k.length < 2) {
      S([]);
      return;
    }
    const A = document.querySelector(".settings-panel"), D = [];
    for (const Y of Array.from((A == null ? void 0 : A.querySelectorAll(".sect")) ?? [])) {
      const te = (Y.getAttribute("data-testid") || "").replace("sect-", "");
      Array.from(Y.querySelectorAll(".ctl")).some((G) => Rc(k, $r(G.textContent || "")) > 0) && D.push(te);
    }
    S(D);
  }, [m]);
  const u = (k) => {
    const A = document.querySelector(".settings-panel");
    for (const D of Array.from((A == null ? void 0 : A.querySelectorAll(".ctl")) ?? [])) {
      if (Rc(k, $r(D.textContent || "")) <= 0) continue;
      const Y = D.closest(".sect"), te = ((Y == null ? void 0 : Y.getAttribute("data-testid")) || "").replace("sect-", "");
      te && x(te, !0);
      const T = D.querySelector("input, select, textarea"), G = T == null ? void 0 : T.getAttribute("data-testid");
      G && window.setTimeout(() => {
        const F = document.querySelector(`[data-testid="${G}"]`);
        F == null || F.scrollIntoView({ block: "center", behavior: "smooth" }), F == null || F.classList.add("resalta"), window.setTimeout(() => F == null ? void 0 : F.classList.remove("resalta"), 2400);
      }, 150);
      return;
    }
  }, p = () => {
    const k = $r(m.trim());
    k && (c((A) => {
      const D = { ...A };
      for (const Y of Object.keys(A)) D[Y] = !0;
      return D;
    }), window.setTimeout(() => u(k), 60));
  }, f = g.useMemo(() => {
    const k = (n ?? []).filter((D) => D.mini_enabled);
    return (k.length ? k : n ?? []).slice().sort((D, Y) => Math.min(Y.w_mm, Y.h_mm) - Math.min(D.w_mm, D.h_mm))[0] ?? null;
  }, [n]), v = f ? Math.min(f.w_mm, f.h_mm) : 0, _ = e.modo === "experto", M = ({ children: k }) => _ ? /* @__PURE__ */ o.jsx(o.Fragment, { children: k }) : null, E = (k) => c((A) => ({ ...A, [k]: !A[k] })), b = (k) => t(k), U = g.useRef(null), z = ({ titulo: k, children: A }) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "ctl-grupo", children: a(k) }),
    A
  ] }), w = (k, A, D, Y, te = 1, T = "", G, F) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...F ? { "data-tip": a(F) } : {}, children: a(k) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        wh,
        {
          valor: Number(e[A]) || 0,
          min: D,
          max: Y,
          step: te,
          testid: `set-${A}`,
          title: F ? a(F) : void 0,
          onValor: (ee) => b({ [A]: ee })
        }
      ),
      T && /* @__PURE__ */ o.jsx("span", { className: "hint", children: T }),
      G
    ] })
  ] }), O = (k, A, D, Y, te) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...te ? { "data-tip": a(te) } : {}, children: a(k) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${A}`,
        value: String(e[A]),
        onChange: (T) => b({ [A]: T.target.value }),
        children: D.map(([T, G]) => /* @__PURE__ */ o.jsx("option", { value: T, children: a(G) }, T))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: a("Ajustes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ o.jsx(yh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsx(vh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsxs("div", { className: "tabs-ajustes", "data-testid": "rail-ajustes", children: [
      /* @__PURE__ */ o.jsx("div", { className: "tabs-lista", children: N.filter(([, , , k]) => _ || k).map(([k, A, D]) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": `rail-${k}`,
          title: D,
          className: `${s[k] ? "on" : ""}${C.includes(k) ? " coincide" : ""}`,
          onClick: () => x(k, !0, !0),
          children: [
            A,
            /* @__PURE__ */ o.jsx("span", { children: D })
          ]
        },
        k
      )) }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: `busca-ajustes${m ? " con-texto" : ""}`,
          "data-testid": "busca-ajustes",
          value: m,
          placeholder: a("Buscar…"),
          title: a("Busca parámetros (admite erratas y sinónimos): p. ej. «borde», «separacion», «tamano»"),
          onChange: (k) => y(k.target.value),
          onKeyDown: (k) => {
            k.key === "Enter" && p();
          }
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !_ && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: a("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "general",
          title: a("General"),
          open: h("general"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(Ha, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(z, { titulo: "Colocación", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "ctl-fila", children: [
                w(
                  "Espacio entre elementos",
                  "espacio_mm",
                  -10,
                  20,
                  0.5,
                  "mm",
                  void 0,
                  "Separación entre piezas. Puede ser NEGATIVA (se solapan un poco): útil para apretar al máximo. Una línea artificial las separa igualmente al cortar."
                ),
                w(
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
              O("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              w(
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
            /* @__PURE__ */ o.jsxs(z, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ o.jsx(M, { children: w("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: a("PPP del PNG al guardar") }),
                /* @__PURE__ */ o.jsx("div", { className: "seg-row", children: [
                  [300, a("300 · máxima calidad")],
                  [144, a("144 · Cricut Design")]
                ].map(([k, A]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    className: `seg ${(Number(e.export_ppp) || 300) === k ? "on" : ""}`,
                    "data-testid": `export-ppp-${k}`,
                    "data-tip": a(k === 144 ? "144 ppp: la resolución con la que Design Space interpreta las imágenes; se importan al tamaño EXACTO sin redimensionar." : "300 ppp: máxima calidad (para imprimir o si vas a escalar en Design Space)."),
                    onClick: () => b({ export_ppp: k }),
                    children: A
                  },
                  k
                )) }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("300 ppp por defecto: máxima calidad. Con 144 ppp (la resolución que usa Design Space para Print Then Cut) el PNG se importa al tamaño exacto sin que DS pida redimensionar. La colocación aprovecha toda la forma escalonada oficial.") })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: a("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (k) => {
                      const A = k.target.value, D = Uf[A];
                      b(D ? { pagina: A, pagina_w: D[0], pagina_h: D[1] } : { pagina: A });
                    },
                    children: [
                      /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4 (210×297)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "A3", children: "A3 (297×420)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "A5", children: "A5 (148×210)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter (216×279)" }),
                      /* @__PURE__ */ o.jsx("option", { value: "custom", children: a("Personalizado") })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx(M, { children: e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: a("Ancho × alto (mm)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (k) => b({ pagina_w: Number(k.target.value) })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (k) => b({ pagina_h: Number(k.target.value) })
                    }
                  )
                ] })
              ] }) }),
              O("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ])
            ] }),
            /* @__PURE__ */ o.jsx(z, { titulo: "Referencia", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (k) => b({ marcas_delimitar: k.target.checked })
                  }
                ),
                a("Marcas para delimitar")
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Añade dos cuadrados blancos de 2 mm (arriba-izquierda y abajo-derecha) en los límites del área. Sirven de referencia para que la colocación quede EXACTA siempre en Cricut Design Space. No cuentan para la optimización.") })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "minis",
          title: a("Minis"),
          open: h("minis"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(An, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ o.jsxs(z, { titulo: "Tamaños", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => b({ mini_usar_lista: !0 }),
                    children: a("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => b({ mini_usar_lista: !1 }),
                    children: a("Automático (mínimo + %)")
                  }
                )
              ] }),
              !e.mini_usar_lista && w(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas)."
              ),
              !e.mini_usar_lista && w(
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
                /* @__PURE__ */ o.jsx("label", { children: a("Tamaños deseados") }),
                /* @__PURE__ */ o.jsxs("div", { className: "seg", style: { maxWidth: 260 }, children: [
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-mm",
                      className: (e.mini_lista_modo ?? "mm") === "mm" ? "on" : "",
                      onClick: () => b({ mini_lista_modo: "mm" }),
                      children: a("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => b({ mini_lista_modo: "pct" }),
                      children: a("En % del original")
                    }
                  )
                ] }),
                (e.mini_lista_modo ?? "mm") === "mm" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                  /* @__PURE__ */ o.jsx("label", { children: a("Medir el tamaño por") }),
                  /* @__PURE__ */ o.jsxs(
                    "select",
                    {
                      "data-testid": "mini-lista-medida",
                      value: e.mini_lista_medida ?? "circulo",
                      onChange: (k) => b({ mini_lista_medida: k.target.value }),
                      children: [
                        /* @__PURE__ */ o.jsx("option", { value: "circulo", children: a("Círculo equivalente (aprox.)") }),
                        /* @__PURE__ */ o.jsx("option", { value: "menor", children: a("Lado menor") }),
                        /* @__PURE__ */ o.jsx("option", { value: "mayor", children: a("Lado mayor") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((k, A) => /* @__PURE__ */ o.jsx(
                    xh,
                    {
                      i: A,
                      valor: k,
                      refBase: v,
                      t: a,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (D) => {
                        const Y = [...e.mini_tamanos_lista ?? []];
                        Y[A] = D, b({ mini_tamanos_lista: Y });
                      },
                      onQuitar: () => b({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (D, Y) => Y !== A
                        )
                      })
                    },
                    A
                  )),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => b({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: a("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: f ? a(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: f.name, mm: v.toFixed(1) }
                ) : a("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(z, { titulo: "Borde de los minis", children: O("Borde de los minis", "mini_borde_modo", [
              ["proporcional", "Proporcional (se reduce con el mini)"],
              ["igual", "Mantener el mismo borde (mm del original)"],
              ["sin", "Sin borde"]
            ], void 0, "Qué hacer con el borde de cada mini al reducirlo") }),
            /* @__PURE__ */ o.jsxs(z, { titulo: "Modo rata", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-rata-activo",
                      checked: e.rata_activo === !0,
                      onChange: (k) => b({ rata_activo: k.target.checked })
                    }
                  ),
                  a("Modo rata")
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Coloca copias EXTRA de los elementos marcados con la rata: solo para IMPRIMIR (no se guardan en el PNG normal), en los márgenes de la hoja, separadas de las piezas y de las marcas. El tamaño máximo lo pone el hueco libre.") })
              ] }),
              e.rata_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                w(
                  "Separación de las piezas",
                  "rata_margen_mm",
                  0,
                  30,
                  0.5,
                  "mm",
                  void 0,
                  "Distancia mínima entre las ratas y las piezas colocadas."
                ),
                w(
                  "Distancia a las marcas",
                  "rata_marcas_mm",
                  0,
                  30,
                  0.5,
                  "mm",
                  void 0,
                  "Distancia mínima entre las ratas y las marcas (las negras de Cricut y los cuadrados guía): no se pone nada más cerca."
                ),
                w(
                  "Tamaño mínimo",
                  "rata_min_mm",
                  2,
                  100,
                  0.5,
                  "mm",
                  void 0,
                  "Tamaño mínimo de las ratas; los tamaños mayores los delimita el hueco."
                ),
                O("Borde de las ratas", "rata_borde_modo", [
                  ["sin", "Sin borde"],
                  ["proporcional", "Proporcional (se reduce con la rata)"],
                  ["igual", "Mantener el mismo borde (mm del original)"]
                ], void 0, "Borde de las copias del modo rata (independiente del de los minis)")
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(M, { children: /* @__PURE__ */ o.jsxs(z, { titulo: "Avanzado", children: [
              O("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              O("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ])
            ] }) })
          ]
        }
      ),
      _ && /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "optimizacion",
          title: a("Optimización"),
          open: h("optimizacion"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(pr, { size: 15 }),
          children: [
            O("Método", "opt_metodo", [
              ["inteligente", "Selección inteligente (la mejor, sin gastar de más)"],
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            O("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ o.jsxs(M, { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (k) => b({ opt_tiempo_auto: k.target.checked })
                  }
                ),
                a("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: a(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: Ch[e.opt_metodo] ?? 8,
                  m: a(Sh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : w("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      _ && /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "imagen",
          title: a("Imagen"),
          open: h("imagen"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(mr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(z, { titulo: "Impresión", children: [
              w(
                "Sangrado de impresión",
                "bleed_mm",
                0,
                5,
                0.2,
                "mm",
                void 0,
                "Repite el color hacia fuera para que no salga reborde blanco si la impresora no está alineada al 100 %."
              ),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
              O("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ o.jsxs(M, { children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (k) => b({ simular_impresion: k.target.checked })
                    }
                  ),
                  a("Previsualizar la impresión (simular el espacio de color)")
                ] }),
                e.simular_impresion && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                    /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        type: "checkbox",
                        "data-testid": "set-sim_cmyk",
                        checked: e.sim_cmyk === !0,
                        onChange: (k) => b({ sim_cmyk: k.target.checked })
                      }
                    ),
                    a("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  w("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  w("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  w("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              O("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(z, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (k) => b({ chequear_lineas: k.target.checked })
                  }
                ),
                a("Comprobación de líneas anómalas")
              ] }) }),
              w(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              O("Lienzo del archivo final", "lienzo", [
                ["recortable", "Solo área recortable (recomendado)"],
                ["pagina", "Página completa con márgenes"]
              ]),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: a("Carpeta predeterminada de exportación") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx("span", { className: "path-text", "data-testid": "set-carpeta", children: e.carpeta_export || a("(Documentos)") }),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      "data-testid": "btn-elegir-carpeta",
                      onClick: () => d(!0),
                      children: a("Elegir carpeta…")
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Se guarda para la próxima vez que abras CryCat.") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "offset",
          title: a("Borde"),
          open: h("offset"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(fa, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (k) => b({ offset_activo: k.target.checked })
                }
              ),
              a("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              w(
                "Grosor del borde",
                "offset_mm",
                0.1,
                20,
                0.1,
                "mm",
                void 0,
                "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar."
              ),
              O("Tipo de borde", "offset_modo", [
                ["extender", "Extender el color del borde (suave)"],
                ["blanco", "Blanco"],
                ["color", "Color personalizado"],
                ["unir_recto", "Unir trozos: envolvente (borde recto)"],
                ["unir_curvo", "Unir trozos: mínimo (borde redondeado)"]
              ]),
              e.offset_modo === "color" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: a("Color del borde") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "color",
                      "data-testid": "set-offset-color",
                      value: e.offset_color || "#ffffff",
                      onChange: (k) => b({ offset_color: k.target.value })
                    }
                  ),
                  /* @__PURE__ */ o.jsx("span", { className: "hint", children: e.offset_color })
                ] })
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
            ] })
          ]
        }
      ),
      _ && /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "corte",
          title: a("Estimación de corte"),
          open: h("corte"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(Mc, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: Lc(
              a(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: Ec[e.maquina] ?? "Cricut Maker 3" }
              ),
              [Ec[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            w("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            w("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            w("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            w("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      _ && /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "historial",
          title: a("Historial (deshacer/rehacer)"),
          open: h("historial"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(hs, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.") }),
            /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "switch",
                  "data-testid": "set-historial",
                  checked: e.historial !== !1,
                  onChange: (k) => b({ historial: k.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: a("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              w("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (k) => b({ hist_tamano: k.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: a("Tamaño y escala") })
              ] }),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-copias",
                    checked: e.hist_copias !== !1,
                    onChange: (k) => b({ hist_copias: k.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: a("Copias") })
              ] }),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-borde",
                    checked: e.hist_borde !== !1,
                    onChange: (k) => b({ hist_borde: k.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: a("Borde por elemento") })
              ] }),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-minis",
                    checked: e.hist_minis !== !1,
                    onChange: (k) => b({ hist_minis: k.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: a("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "visualizacion",
          title: a("Visualización"),
          open: h("visualizacion"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(gs, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: a("Tema") }),
              /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: ps.map((k) => /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === k.key ? "active" : ""}`,
                  "data-testid": `tema-${k.key}`,
                  onClick: () => t({ tema: k.key }),
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: k.colors.accent } }),
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: k.colors.accent2 } }),
                    k.label
                  ]
                },
                k.key
              )) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (k) => t({ ver_guias: k.target.checked })
                }
              ),
              a("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: a("Icono de la aplicación") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx("img", { src: H.iconUrl(), alt: a("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var k;
                  return (k = U.current) == null ? void 0 : k.click();
                }, children: a("Cargar nuevo icono") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ref: U,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (k) => {
                      var D;
                      const A = (D = k.target.files) == null ? void 0 : D[0];
                      A && H.setIcon(A).then(() => {
                        window.location.reload();
                      }), k.target.value = "";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Actualiza la barra de estado, la pestaña y el lanzador.") })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        Ot,
        {
          id: "extras",
          title: a("Extras"),
          open: h("extras"),
          toggle: E,
          icon: /* @__PURE__ */ o.jsx(fs, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx(z, { titulo: "Sonido", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: a("Volumen de la mascota") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => b({ mute: !e.mute }),
                    children: e.mute ? a("Silenciado") : a("Con sonido")
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
                    onChange: (k) => b({ volumen: Number(k.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsxs(z, { titulo: "Pikmin", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (k) => b({ pikmin_activo: k.target.checked })
                  }
                ),
                a("Mostrar Pikmin de vez en cuando")
              ] }) }),
              w("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (k) => b({ pikmin_sonido: k.target.checked })
                  }
                ),
                a("Sonido de Pikmin")
              ] }) }),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido-morir",
                    checked: e.pikmin_sonido_morir !== !1,
                    onChange: (k) => b({ pikmin_sonido_morir: k.target.checked })
                  }
                ),
                a("De vez en cuando se muere (alma + sonido)")
              ] }) }),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-comprobar_versiones",
                    checked: e.comprobar_versiones !== !1,
                    onChange: (k) => t({ comprobar_versiones: k.target.checked })
                  }
                ),
                a("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: Lc(
        a("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      op,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (k) => t({ carpeta_export: k })
      }
    )
  ] });
}
function Nh({ ver: e, onCerrar: t }) {
  const n = it(), a = e == null ? void 0 : e.actualizacion, r = (a == null ? void 0 : a.estado) ?? "descargando", i = (a == null ? void 0 : a.progreso) != null ? Math.round(a.progreso) : null, s = g.useRef((e == null ? void 0 : e.actual) ?? ""), [c, l] = g.useState(!1), d = r === "error", h = r === "reiniciando";
  return g.useEffect(() => {
    if (!h) return;
    l(!0);
    let m = !0;
    const y = window.setInterval(async () => {
      try {
        const N = await H.version();
        if (!m) return;
        N.actual && s.current && N.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      m = !1, window.clearInterval(y);
    };
  }, [h]), /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ o.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ o.jsx("div", { className: `dialogo-icono${d ? " error" : ""}`, children: d ? "!" : h ? /* @__PURE__ */ o.jsx(sh, { size: 26 }) : /* @__PURE__ */ o.jsx(ap, { size: 26 }) }),
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
        n((a == null ? void 0 : a.mensaje) || "Preparando la actualización…"),
        i != null && !h ? ` · ${i}%` : ""
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: n("Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.") }),
      c && /* @__PURE__ */ o.jsx("div", { className: "fase suave", "data-testid": "recarga-aviso", children: n("La página se recargará sola cuando el motor nuevo esté listo…") })
    ] }),
    d && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: (a == null ? void 0 : a.mensaje) || n("Error desconocido") }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "cerrar-actualizacion", onClick: t, children: n("Cerrar") })
    ] })
  ] }) });
}
function gi(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function bh({
  job: e,
  backendOk: t,
  result: n,
  estimate: a,
  optimizando: r = !1,
  volumen: i = 0.5,
  mute: s = !1,
  onVolumen: c,
  onMute: l,
  onIdioma: d,
  onEasterEgg: h,
  onAyuda: m,
  onReportar: y,
  modoRata: N = !1
}) {
  var re, st, qe;
  const x = it(), C = hl(), [S, u] = g.useState([]), [p, f] = g.useState(0), [v, _] = g.useState(null), [M, E] = g.useState(!1), [b, U] = g.useState(""), [z, w] = g.useState(!1), O = g.useRef(!1), k = g.useRef([]);
  g.useEffect(() => {
    fetch("/api/funmsgs").then((W) => W.ok ? W.json() : { msgs: [] }).then((W) => u(W.msgs ?? [])).catch(() => {
    });
  }, []), g.useEffect(() => {
    let W = !0;
    return H.version().then((he) => {
      W && (_(he), !he.comprobado && !O.current && (O.current = !0, H.checkVersion().then((Ee) => W && _(Ee)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      W = !1;
    };
  }, []);
  const A = ((re = v == null ? void 0 : v.actualizacion) == null ? void 0 : re.estado) === "descargando" || ((st = v == null ? void 0 : v.actualizacion) == null ? void 0 : st.estado) === "instalando" || ((qe = v == null ? void 0 : v.actualizacion) == null ? void 0 : qe.estado) === "reiniciando";
  g.useEffect(() => {
    if (!A) return;
    const W = setInterval(() => {
      H.version().then(_).catch(() => {
      });
    }, 700);
    return () => clearInterval(W);
  }, [A]);
  const D = r || !!(e && !e.done), Y = g.useMemo(() => S.length ? S : [
    x("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], [S, x]);
  g.useEffect(() => {
    if (!D) return;
    const W = Y[p % Y.length] ?? "", he = Math.max(2e3, Math.min(3e3, 1500 + W.length * 30)), Ee = setTimeout(() => f((Ue) => Ue + 1), he);
    return () => clearTimeout(Ee);
  }, [D, p, Y]);
  const te = g.useMemo(() => {
    if (b) return b;
    if (A) {
      const W = v == null ? void 0 : v.actualizacion;
      if ((W == null ? void 0 : W.estado) === "instalando") return x("Instalando y reiniciando…");
      const he = (W == null ? void 0 : W.progreso) != null ? Math.round(W.progreso) : null;
      return he != null ? x("Descargando… {p}%", { p: he }) : (W == null ? void 0 : W.mensaje) || x("Descargando actualización…");
    }
    return D ? Y[p % Y.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? (n.unplaced ?? 0) > 0 ? x(
      "No caben todas las copias: {n} sin colocar",
      { n: n.unplaced ?? 0 }
    ) : x("Listo") : x("Listo para empezar");
  }, [b, A, D, e, Y, p, n, x, v]), T = g.useMemo(() => {
    const W = ((n == null ? void 0 : n.placements) ?? []).filter((ze) => !ze.rata);
    if (!W.length) return "";
    const he = Math.min(...W.map((ze) => ze.x)), Ee = Math.min(...W.map((ze) => ze.y)), Ue = Math.max(...W.map((ze) => ze.x + ze.w)), Lt = Math.max(...W.map((ze) => ze.y + ze.h));
    return `${((Ue - he) / 10).toFixed(2)}×${((Lt - Ee) / 10).toFixed(2)}`;
  }, [n]), G = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), F = D && !e, ee = g.useMemo(() => {
    const W = e == null ? void 0 : e.eta_s;
    return !D || W === void 0 || W === null || W <= 0.5 ? "" : (e == null || e.tope_s, x(" · ~{x} restante", { x: gi(W) }));
  }, [e == null ? void 0 : e.eta_s, D, x]), B = g.useMemo(() => !a || !a.segundos ? "" : gi(a.segundos), [a]), ue = async () => {
    E(!0), U("");
    try {
      const W = await H.checkVersion();
      _(W), W.error ? U(x("Sin conexión")) : W.hay_nueva || U(x("Estás en la última versión"));
    } catch {
      U(x("Sin conexión"));
    } finally {
      E(!1);
    }
  }, oe = async () => {
    U("");
    try {
      const W = await H.updateVersion();
      W.ok ? w(!0) : W.modo === "dev" && W.url ? (U(x("Modo desarrollo: se actualiza con git")), await H.openReleases().catch(() => {
      })) : U(W.mensaje || x("No se pudo actualizar")), H.version().then(_).catch(() => {
      });
    } catch {
      U(x("No se pudo actualizar"));
    }
  }, I = !!(v != null && v.hay_nueva && !D && !A) ? x("Nueva versión {v} disponible", { v: (v == null ? void 0 : v.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    z && /* @__PURE__ */ o.jsx(
      Nh,
      {
        ver: v,
        onCerrar: () => w(!1)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: N ? kt("/cryrat.png") : H.iconUrl(),
            alt: N ? "CryRat" : "CryCat",
            "data-testid": "brand-icon",
            title: N ? "CryRat" : x("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const W = Date.now();
              k.current = [...k.current, W].filter((he) => W - he < 2500), k.current.length >= 5 && (k.current = [], U(x("¡Fiesta Pikmin!")), window.setTimeout(() => U(""), 4e3), h == null || h());
            }
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "nombre", children: N ? "CryRat" : "CryCat" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !D && (() => {
          const W = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), he = n.placed || 1, Ee = Math.min(80, Math.max(
            30,
            48 + 22 * W - Math.min(18, he * 0.08)
          )), Ue = n.efficiency * 100, Lt = Ue >= Ee ? "buena" : Ue >= Ee * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ o.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": x("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.placed }),
              /* @__PURE__ */ o.jsx("span", { children: x("imágenes") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": x("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.pages }),
              /* @__PURE__ */ o.jsx("span", { children: n.pages > 1 ? x("páginas") : x("página") })
            ] }),
            T && /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "stat-card tamano",
                "data-testid": "tamano-card",
                "data-tip": x("Tamaño real del diseño al exportarlo (cuadrados guía incluidos): es lo que debe medir en Cricut Design Space."),
                children: [
                  /* @__PURE__ */ o.jsx("b", { children: T }),
                  /* @__PURE__ */ o.jsx("span", { children: "cm" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": x("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.minis }),
              /* @__PURE__ */ o.jsx("span", { children: x("minis") })
            ] }),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${Lt}`,
                "data-testid": "eficiencia-card",
                "data-nivel": Lt,
                "data-tip": x("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: he, e: Math.round(Ee) }),
                children: [
                  /* @__PURE__ */ o.jsxs("b", { children: [
                    Math.round(Ue),
                    "%"
                  ] }),
                  /* @__PURE__ */ o.jsx("span", { children: x("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !D) && /* @__PURE__ */ o.jsx("span", { className: "msg", children: te }),
        D && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `progress${F ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, G)}%` } })
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? x("Tiempo máximo de este cálculo: {y}", { y: gi(e.tope_s) }) : void 0,
              children: [
                G,
                "%",
                ee
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: kt(N ? "/cryrat.gif" : "/piensa.gif"),
              alt: "",
              title: x("Pensando…"),
              onError: (W) => {
                W.currentTarget.style.display = "none";
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
            "data-tip": x("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
            onClick: () => m == null ? void 0 : m(),
            children: [
              /* @__PURE__ */ o.jsx(lh, { size: 15 }),
              " ",
              x("Cómo usar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "app-info reportar",
            "data-testid": "btn-reportar",
            "data-tip": x("Reportar un bug: abre un issue en GitHub ya rellenado"),
            onClick: () => y == null ? void 0 : y(),
            children: [
              /* @__PURE__ */ o.jsx(np, { size: 15 }),
              " ",
              x("Reportar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
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
              /* @__PURE__ */ o.jsx(ch, { size: 15 }),
              " ",
              x("Apoyar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-repo",
            title: x("Abrir el repositorio del proyecto en una pestaña nueva"),
            onClick: () => window.open((v == null ? void 0 : v.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ o.jsx(oh, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: x("Idioma"),
            onClick: () => d == null ? void 0 : d(C === "es" ? "en" : "es"),
            children: C.toUpperCase()
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "span",
          {
            className: "version-chip",
            "data-testid": "version-chip",
            title: x("Versión actual"),
            children: [
              (v == null ? void 0 : v.hay_nueva) && !A && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: I || x("Hay una versión nueva"),
                  onClick: oe,
                  children: /* @__PURE__ */ o.jsx(ih, { size: 14 })
                }
              ),
              "v",
              (v == null ? void 0 : v.actual) ?? "—",
              (v == null ? void 0 : v.hay_nueva) && (v == null ? void 0 : v.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
                "v",
                v.ultima
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini",
                  "data-testid": "btn-comprobar",
                  title: x("Comprobar versiones"),
                  onClick: ue,
                  disabled: M,
                  children: M ? "…" : /* @__PURE__ */ o.jsx(rp, { size: 14 })
                }
              ),
              (v == null ? void 0 : v.hay_nueva) && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: x("Descargar e instalar la nueva versión"),
                  onClick: oe,
                  children: /* @__PURE__ */ o.jsx(ap, { size: 14 })
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
            title: x(t ? "Backend conectado" : "Backend desconectado")
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "span",
          {
            className: "eta",
            "data-testid": "corte-estimado",
            title: x("Tiempo estimado de corte (Cricut Maker 5)"),
            children: [
              x("Corte"),
              " ",
              B || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const Eh = [
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
], zh = "/pikmin_bloom/", Ac = "/pikmin/alma.png", Ph = "/sonidos/pikmin.mp3", Mh = "/sonidos/pikmin_morir.mp3";
function Th(e) {
  const [t, n] = g.useState(Eh), [a, r] = g.useState([]);
  return g.useEffect(() => {
    fetch(kt("/pikmin/indice.json")).then((i) => i.ok ? i.json() : null).then((i) => {
      Array.isArray(i) && i.length && n(i.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(kt("/pikmin_bloom/indice.json")).then((i) => i.ok ? i.json() : []).then((i) => {
      if (!Array.isArray(i)) return;
      const s = [...i];
      for (let c = s.length - 1; c > 0; c--) {
        const l = Math.floor(Math.random() * (c + 1));
        [s[c], s[l]] = [s[l], s[c]];
      }
      r(s.slice(0, 60).map((c) => kt(zh + c)));
    }).catch(() => {
    });
  }, []), g.useMemo(
    () => e && e.length ? [...e, ...a].map(kt) : [...t, ...a].map(kt),
    [e, t, a]
  );
}
function Rh({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: a = !0,
  volumen: r = 0.5,
  mute: i = !1,
  fiesta: s = !1,
  minDelay: c,
  maxDelay: l,
  fuentes: d
}) {
  const h = Th(d), [m, y] = g.useState([]), N = g.useRef(void 0), x = g.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), C = g.useRef(s);
  C.current = s;
  const S = Math.max(5e3, t * 6e4), u = (_) => {
    if (!(!n || i))
      try {
        const M = new Audio(kt(_ ? Mh : Ph));
        M.volume = Math.min(1, Math.max(0, r)), M.play().catch(() => {
        });
      } catch {
      }
  }, p = (_ = 1) => {
    const M = [];
    for (let E = 0; E < _; E++) {
      const b = a && Math.random() < 0.1, U = b ? kt(Ac) : h[Math.floor(Math.random() * h.length)] ?? kt(Ac);
      M.push({
        src: U,
        left: 3 + Math.random() * 92,
        key: Date.now() + E,
        morir: b,
        estado: "paseando"
      });
    }
    y((E) => [...E, ...M]), u(!1);
  }, f = () => {
    if (!e) return;
    const _ = c ?? Math.round(S * 0.5), M = l ?? Math.round(S * 1.5), E = _ + Math.random() * Math.max(1, M - _);
    N.current = window.setTimeout(p, E);
  };
  g.useEffect(() => {
    e && s && p(30);
  }, [s]), g.useEffect(() => {
    if (!e) {
      window.clearTimeout(N.current), y([]);
      return;
    }
    return f(), () => window.clearTimeout(N.current);
  }, [e, t, n, a, r, i, h]), g.useEffect(() => {
    const _ = () => {
      x.current = document.visibilityState === "hidden", !x.current && C.current && window.setTimeout(() => {
        y((M) => M.length ? (u(!1), M.map((E) => ({ ...E, estado: "festejando" }))) : M), window.setTimeout(() => {
          y([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", _), () => document.removeEventListener("visibilitychange", _);
  }, []);
  const v = (_) => {
    if (C.current && x.current) {
      y((M) => M.map((E) => E.key === _ ? { ...E, estado: "quieto" } : E));
      return;
    }
    y((M) => M.filter((E) => E.key !== _)), f();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: m.map((_) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${_.estado}${_.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": _.estado,
      "data-morir": _.morir ? "1" : "0",
      style: { left: `${_.left}%` },
      onAnimationEnd: () => v(_.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: _.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => v(_.key)
        }
      )
    },
    _.key
  )) });
}
const Ic = "crycat_bienvenida_v2";
function Lh() {
  const [e, t] = g.useState(!1);
  return g.useEffect(() => {
    try {
      localStorage.getItem(Ic) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Ic, "1");
    } catch {
    }
    t(!1);
  } };
}
function Ah({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const a = it(), [r, i] = g.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ o.jsx(mr, { size: 18 }),
      a("1 · Suelta tus imágenes"),
      a("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ o.jsx(Ha, { size: 18 }),
      a("2 · Ajusta el tamaño"),
      a("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ o.jsx(An, { size: 18 }),
      a("3 · Minis (opcional)"),
      a("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ o.jsx(pr, { size: 18 }),
      a("4 · Se coloca solo"),
      a("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(Tc, { size: 18 }),
      a("5 · Guarda"),
      a("PNG a 300 ppp (máxima calidad) o a 144 ppp para que Cricut Design lo importe al tamaño exacto. Nunca sobrescribe nada.")
    ]
  ], c = [
    [
      /* @__PURE__ */ o.jsx(mr, { size: 18 }),
      a("Fondo y trozos sueltos"),
      a("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ o.jsx(fa, { size: 18 }),
      a("Bordes (offset)"),
      a("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ o.jsx(An, { size: 18 }),
      a("Minis con cuota"),
      a("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ o.jsx(pr, { size: 18 }),
      a("Optimización a tu gusto"),
      a("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ o.jsx(tp, { size: 18 }),
      a("Modo rápido y experto"),
      a("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(Ha, { size: 18 }),
      a("Perfiles"),
      a("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(Tc, { size: 18 }),
      a("Deshacer y rehacer"),
      a("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(rh, { size: 18 }),
      a("Imprimir con marcas de Cricut"),
      a("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(fs, { size: 18 }),
      a("Vista previa"),
      a("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ o.jsx(Ha, { size: 18 }),
      a("Temas y mascota"),
      a("12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.")
    ]
  ], l = [
    a("Abre Cricut Design Space."),
    a("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    a("Con «PPP del PNG» en 144 se importa al tamaño EXACTO: no hace falta redimensionar (a 300 hay que escalarlo al ~48 %)."),
    a("Pulsa «Crear» y comprueba que las medidas coinciden."),
    a("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    a("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ], d = {
    inicio: a("Cómo usar CryCat"),
    detallada: a("Guía detallada: todo lo que puedes hacer"),
    cricut: a("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: d[r] }),
    r === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((h, m) => /* @__PURE__ */ o.jsx("li", { children: h }, m)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (r === "inicio" ? s : c).map(([h, m, y], N) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: h }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: m }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: y })
      ] })
    ] }, N)) }),
    r === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      r === "inicio" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ o.jsx(dr, { size: 15 }),
          " ",
          a("Abrir carpeta de guardado")
        ] }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "ayuda-detallada",
            onClick: () => i("detallada"),
            children: a("Guía detallada")
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-cricut", onClick: () => i("cricut"), children: a("Pasos en Cricut") }),
        /* @__PURE__ */ o.jsx("button", { className: "primary", "data-testid": "ayuda-cerrar", onClick: t, children: a("¡Entendido!") })
      ] }),
      r === "detallada" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-volver", onClick: () => i("inicio"), children: a("Volver") }),
        /* @__PURE__ */ o.jsx("button", { className: "primary", onClick: t, children: a("¡Entendido!") })
      ] }),
      r === "cricut" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-volver", onClick: () => i("inicio"), children: a("Volver") }),
        /* @__PURE__ */ o.jsx("button", { className: "primary", onClick: t, children: a("¡Entendido!") })
      ] })
    ] })
  ] }) });
}
const Ih = "https://github.com/dhernandezgit/CryCat-Tool", Dh = "daniel.hernandez@pixelabs.es", $h = [
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
function Oh({
  open: e,
  onClose: t,
  settings: n,
  job: a,
  result: r
}) {
  const i = it(), [s, c] = g.useState(""), [l, d] = g.useState(""), [h, m] = g.useState(""), [y, N] = g.useState(!0), [x, C] = g.useState(!0), [S, u] = g.useState(!0), [p, f] = g.useState(!1);
  g.useEffect(() => {
    e && (H.version().then((w) => c(w.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const v = () => (globalThis.__crycatErrores ?? []).map(
    (O) => `- [${O.t}] ${O.msg} (${O.donde || "?"})`
  );
  if (!e) return null;
  const _ = () => {
    var A, D;
    const w = navigator.userAgent, O = !!globalThis.__crycatBase, k = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${O ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${w}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((A = window.screen) == null ? void 0 : A.width) ?? "?"}x${((D = window.screen) == null ? void 0 : D.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return r && k.push(`- Elementos: ${r.pages} página(s)`), a && k.push(`- Último trabajo: ${a.status}${a.message ? ` — ${a.message}` : ""}`), k.join(`
`);
  }, M = () => n ? [
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
  ].map((O) => `- ${O}: ${String(n[O])}`).join(`
`) : "", E = () => {
    const w = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      h.trim() || "1. …",
      ""
    ];
    y && w.push("### Entorno", _(), ""), x && n && w.push("### Ajustes", M(), "");
    const O = v();
    return S && O.length && w.push("### Errores recogidos", O.join(`
`), ""), w.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), w.join(`
`);
  }, b = () => `[CryCat] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, U = () => {
    const w = `mailto:${Dh}?` + new URLSearchParams({
      subject: b(),
      body: E().slice(0, 1800)
    }).toString();
    window.location.href = w, t();
  }, z = () => {
    const w = `${Ih}/issues/new?` + new URLSearchParams({
      title: b(),
      body: E(),
      labels: "bug"
    }).toString();
    window.open(w, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni login). También puedes copiarlo o abrirlo en GitHub si prefieres.") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: $h.map(([w, O]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${w}`,
        onClick: () => d((k) => (k ? k + `
` : "") + O),
        children: i(w)
      },
      w
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
          onChange: (w) => d(w.target.value)
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
          onChange: (w) => m(w.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: y,
          onChange: (w) => N(w.target.checked)
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
          checked: x,
          onChange: (w) => C(w.target.checked)
        }
      ),
      i("Incluir mis ajustes actuales")
    ] }),
    v().length > 0 && /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: S,
          onChange: (w) => u(w.target.checked)
        }
      ),
      i(
        "Incluir los {n} errores recogidos de la consola",
        { n: v().length }
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

${E()}`
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
          onClick: z,
          children: i("GitHub")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "reportar-enviar",
          onClick: U,
          children: i("Enviar por email")
        }
      )
    ] })
  ] }) });
}
function Fh() {
  const [e, t] = g.useState([]), [n, a] = g.useState(null), [r, i] = g.useState(null), [s, c] = g.useState(null), [l, d] = g.useState(null), [h, m] = g.useState(null), [y, N] = g.useState(!0), [x, C] = g.useState(!1), [S, u] = g.useState(!1), [p, f] = g.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [v, _] = g.useState(33.3), [M, E] = g.useState(33.3), b = Lh(), U = g.useRef(null), z = g.useRef(null);
  g.useEffect(() => {
    (async () => {
      try {
        const P = await H.getSettings();
        d(P.settings), zc(P.settings.tema), f((V) => ({
          ...V,
          guidesVisible: P.settings.ver_guias,
          eyeTransparent: P.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: P.settings.ver_contornos !== !1,
          contornoModo: P.settings.contorno_modo ?? "final"
        })), t((await H.listAssets()).map(ur)), i(await H.result());
      } catch {
        N(!1);
      }
    })();
  }, []);
  const [w, O] = g.useState("");
  g.useEffect(() => {
    const P = (V) => O(String(V.detail || ""));
    return window.addEventListener("crycat:seleccion", P), () => window.removeEventListener("crycat:seleccion", P);
  }, []), g.useEffect(() => {
    const P = (V) => {
      const Q = V.detail;
      _(Q ? 19 : 33.3), E(Q ? 62 : 33.3), f((J) => ({ ...J, hojaGirada: Q }));
    };
    return window.addEventListener("crycat:disposicion", P), () => window.removeEventListener("crycat:disposicion", P);
  }, []), g.useEffect(() => {
    const P = setInterval(async () => {
      try {
        await H.health(), N(!0);
      } catch {
        N(!1);
      }
    }, 5e3);
    return () => clearInterval(P);
  }, []);
  const k = g.useRef(!0), A = g.useCallback(async () => {
    try {
      t((await H.listAssets()).map(ur)), i(await H.result());
      try {
        c(await H.estimate());
      } catch {
      }
    } catch {
      N(!1);
    } finally {
      k.current = !1;
    }
  }, []), D = g.useCallback((P) => {
    z.current && window.clearInterval(z.current), z.current = window.setInterval(async () => {
      try {
        const V = await H.job(P);
        m(V), V.done && (window.clearInterval(z.current), z.current = null, await A(), V.status === "done" && window.setTimeout(() => m(null), 2500));
      } catch {
        window.clearInterval(z.current), z.current = null;
      }
    }, 300);
  }, []), Y = g.useCallback(async () => {
    u(!0), await new Promise((P) => setTimeout(P, 60));
    try {
      const P = await H.optimize(void 0, !0);
      m(P), D(P.id);
    } catch {
      N(!1);
    } finally {
      u(!1);
    }
  }, [D]), te = g.useCallback(
    async (P) => {
      u(!0), await new Promise((V) => setTimeout(V, 60));
      try {
        const V = await H.optimize(P, !0);
        m(V), D(V.id);
      } catch {
        N(!1);
      } finally {
        u(!1);
      }
    },
    [D]
  ), T = g.useCallback(() => {
    l && l.auto_recalcular === !1 || (U.current && window.clearTimeout(U.current), U.current = window.setTimeout(Y, 400));
  }, [Y, l]), G = g.useRef(null);
  g.useEffect(() => {
    G.current = T;
  }, [T]), g.useEffect(() => {
    const P = (V) => {
      const Q = V.detail;
      m((J) => ({
        ...J ?? {
          id: "web",
          status: "running",
          done: !1,
          message: "",
          progress: 0,
          pages: 0
        },
        progress: Q.progress,
        pages: Q.pages,
        eta_s: Q.eta_s,
        tope_s: Q.tope_s
      }));
    };
    return window.addEventListener("crycat:progreso", P), () => window.removeEventListener("crycat:progreso", P);
  }, []);
  const F = g.useRef(!1);
  g.useEffect(() => {
    if (!(!l || F.current)) {
      if (e.length > 0) {
        F.current = !0;
        return;
      }
      F.current = !0, H.crearDemo().then(async (P) => {
        P.ok && await A();
      }).catch(() => {
      });
    }
  }, [l, e.length, A]);
  const ee = g.useCallback(
    async (P) => {
      d((V) => V && { ...V, ...P }), P.tema && zc(P.tema);
      try {
        const V = await H.putSettings(P);
        if (V.job)
          m(V.job), D(V.job.id);
        else
          try {
            c(await H.estimate());
          } catch {
          }
      } catch {
        N(!1);
      }
    },
    [D]
  ), [B, ue] = g.useState([]), oe = g.useRef(null), ae = g.useRef(null), I = g.useCallback((P, V) => {
    ue((Q) => {
      if (V === "solo")
        return oe.current = P, ae.current = null, Q.length === 1 && Q[0] === P ? [] : [P];
      if (V === "uno")
        return oe.current = P, ae.current = null, Q.includes(P) ? Q.filter((gt) => gt !== P) : [...Q, P];
      const J = e.map((gt) => gt.id), ft = oe.current, Ve = ft ? J.indexOf(ft) : -1, On = J.indexOf(P);
      if (Ve < 0 || On < 0 || ft === P)
        return oe.current = P, ae.current = null, Q.includes(P) ? Q.filter((gt) => gt !== P) : [...Q, P];
      const [Oo, Fo] = Ve <= On ? [Ve, On] : [On, Ve], _e = J.slice(Oo, Fo + 1), ht = ae.current ?? Q;
      ae.current = ht;
      const ja = [.../* @__PURE__ */ new Set([...ht, ..._e])];
      return ja.length === Q.length && ja.every((gt) => Q.includes(gt)) ? (ae.current = null, Q.filter((gt) => !_e.includes(gt))) : ja;
    });
  }, [e]), re = g.useCallback(() => {
    oe.current = null, ae.current = null, ue(e.map((P) => P.id));
  }, [e]), st = g.useCallback(() => {
    oe.current = null, ae.current = null, ue((P) => e.map((V) => V.id).filter((V) => !P.includes(V)));
  }, [e]), qe = g.useCallback(() => {
    oe.current = null, ae.current = null, ue([]);
  }, []), W = g.useCallback(async (P, V) => {
    const Q = new Map(e.map((J) => [J.id, J]));
    for (const J of P) {
      const ft = Q.get(J), Ve = typeof V == "function" ? ft ? V(ft) : {} : V;
      await H.patchAsset(J, Ve).catch(() => {
      });
    }
    await A();
  }, [e, A]), he = g.useRef([]), Ee = g.useRef([]), [Ue, Lt] = g.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), ze = (l == null ? void 0 : l.historial) !== !1, Kt = (l == null ? void 0 : l.historial_max) ?? 40, Nt = g.useRef(!1), Ze = g.useRef(""), $n = g.useRef({ assets: [], result: null, settings: null }), bt = g.useCallback((P, V, Q) => JSON.stringify({
    a: P.map((J) => [
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
    r: V ? [V.pages, V.placements.map((J) => [
      J.uid,
      J.page,
      Math.round(J.x * 100),
      Math.round(J.y * 100),
      J.angle,
      J.pinned
    ])] : null,
    s: Q ? [
      Q.espacio_mm,
      Q.margen_mm,
      Q.rotacion,
      Q.usar_minis,
      Q.mini_min_mm,
      Q.mini_tamanos,
      Q.mini_usar_lista,
      Q.mini_lista_modo,
      Q.mini_lista_medida,
      Q.mini_tamanos_lista,
      Q.offset_activo,
      Q.offset_mm,
      Q.offset_modo,
      Q.offset_color,
      Q.modo_forma,
      Q.separacion_px,
      Q.marcas_delimitar,
      Q.pagina,
      Q.pagina_w,
      Q.pagina_h,
      Q.maquina,
      Q.lienzo,
      Q.color_formato
    ] : null
  }), []), xn = () => Lt({
    puedeDeshacer: he.current.length > 0,
    puedeRehacer: Ee.current.length > 0
  }), ya = g.useCallback(() => {
    const P = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && P.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && P.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && P.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && P.push("mini_enabled", "mini_quota"), P;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]);
  g.useCallback((P) => {
    const V = {};
    for (const Q of ya()) V[Q] = P[Q];
    return V;
  }, [ya]);
  const xr = g.useCallback(() => {
    ze && (he.current = [
      ...he.current,
      { assets: e, result: r, settings: l }
    ].slice(-Kt), Ee.current = [], Ze.current = bt(e, r, l), xn());
  }, [e, r, l, ze, Kt, bt]);
  g.useEffect(() => {
    if (!ze || k.current) return;
    const P = bt(e, r, l);
    if (Nt.current) {
      Ze.current = P, Nt.current = !1;
      return;
    }
    if (!Ze.current) {
      if (e.length === 0 && !r) return;
      Ze.current = P;
      return;
    }
    P !== Ze.current && (he.current = [...he.current, $n.current].slice(-Kt), Ee.current = [], Ze.current = P, xn());
  }, [e, r, l, ze, Kt, bt]), g.useEffect(() => {
    $n.current = { assets: e, result: r, settings: l };
  }, [e, r, l]);
  const Re = g.useCallback(async (P) => {
    Nt.current = !0, t(P.assets), P.settings && (d(P.settings), await H.putSettings(P.settings).catch(() => {
    }));
    for (const V of P.assets)
      await H.patchAsset(V.id, {
        scale_pct: V.scale_pct,
        copies: V.copies,
        mini_enabled: V.mini_enabled,
        mini_quota: V.mini_quota,
        offset_mm: V.offset_mm,
        offset_modo: V.offset_modo,
        offset_color: V.offset_color
      }).catch(() => {
      });
    if (P.result) {
      await H.restoreResult(P.result).catch(() => {
      }), i(P.result);
      try {
        c(await H.estimate());
      } catch {
      }
    } else
      await A();
    xn();
  }, [A]), xa = g.useCallback(async () => {
    const P = he.current.pop();
    P && (Ee.current = [...Ee.current, { assets: e, result: r, settings: l }], await Re(P));
  }, [e, r, Re]), wa = g.useCallback(async () => {
    const P = Ee.current.pop();
    P && (he.current = [...he.current, { assets: e, result: r, settings: l }], await Re(P));
  }, [e, r, Re]);
  g.useEffect(() => {
    const P = (V) => {
      if (!(V.ctrlKey || V.metaKey)) return;
      const J = V.target;
      if (J && (J.tagName === "INPUT" || J.tagName === "TEXTAREA" || J.tagName === "SELECT" || J.isContentEditable)) return;
      const Ve = V.key.toLowerCase();
      Ve === "z" && !V.shiftKey ? (V.preventDefault(), xa()) : (Ve === "y" || Ve === "z" && V.shiftKey) && (V.preventDefault(), wa());
    };
    return window.addEventListener("keydown", P), () => window.removeEventListener("keydown", P);
  }, [xa, wa]);
  const wn = g.useCallback(
    (P) => {
      const V = (J) => {
        const ft = window.innerWidth, Ve = J.clientX / ft * 100;
        P === "left" ? _(Math.min(45, Math.max(12, Ve))) : E(Math.min(60, Math.max(20, Ve - v)));
      }, Q = () => {
        window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", Q);
      };
      window.addEventListener("mousemove", V), window.addEventListener("mouseup", Q);
    },
    [v]
  );
  return g.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ o.jsx(Hf, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${v}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        fh,
        {
          assets: e,
          result: r,
          settings: l,
          onChange: async () => {
            await A(), T();
          },
          saveSettings: ee,
          onEditarContorno: (P) => a(P),
          onAntesDeCambiar: xr,
          seleccion: B,
          onSeleccion: I,
          onSeleccionarTodo: re,
          onInvertirSeleccion: st,
          onLimpiarSeleccion: qe,
          onBulk: W,
          verBordes: p.verBordes,
          contornoModo: p.contornoModo ?? "final",
          destacado: w
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => wn("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${M}%` }, children: /* @__PURE__ */ o.jsx(
        gh,
        {
          assets: e,
          result: r,
          settings: l,
          ui: p,
          setUi: f,
          saveSettings: ee,
          optimize: Y,
          onRefresh: A,
          onJob: (P) => {
            m(P), D(P.id);
          },
          onRecalc: te,
          editando: n,
          onFinEdicion: async () => {
            a(null), await A();
          },
          onDeshacer: xa,
          onRehacer: wa,
          puedeDeshacer: Ue.puedeDeshacer,
          puedeRehacer: Ue.puedeRehacer,
          seleccion: B,
          onSeleccion: I
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => wn("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        _h,
        {
          settings: l,
          assets: e,
          saveSettings: ee
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      bh,
      {
        job: h,
        backendOk: y,
        result: r,
        estimate: s,
        optimizando: S,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (P) => ee({ volumen: P }),
        onMute: (P) => ee({ mute: P }),
        onIdioma: (P) => ee({ idioma: P }),
        modoRata: l.rata_activo === !0 || (Number(l.espacio_mm) || 0) < 0,
        onEasterEgg: () => ee({
          pikmin_activo: !0,
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: b.abrir,
        onReportar: () => C(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Rh,
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
      Ah,
      {
        open: b.visible,
        onClose: b.cerrar,
        onAbrirCarpeta: () => void H.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      Oh,
      {
        open: x,
        onClose: () => C(!1),
        settings: l,
        job: h,
        result: r
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: Wf("es", "Cargando CryCat…") });
}
const qh = "1793097846514", ip = document.getElementById("root"), vi = [
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
], vs = 8, Xr = [];
globalThis.__crycatErrores = Xr;
const sp = (e, t) => {
  Xr.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Xr.length > 12 && Xr.shift();
};
window.addEventListener("error", (e) => sp(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => sp(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let ys;
function yi(e, t = !1) {
  window.clearTimeout(ys);
  const n = Jd().colors;
  if (ip.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + vs}</div>
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
  let a = Math.floor(Math.random() * vi.length);
  const r = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = vi[a++ % vi.length]);
  }, i = () => {
    r(), ys = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const xi = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const a = document.getElementById("carga-paso");
    a && (a.textContent = `Paso ${t} de ${vs}`);
    const r = document.getElementById("carga-barra");
    r && (r.style.width = `${Math.round(t / vs * 100)}%`);
  }
};
let Un = null, lp = !1, Uh = 0;
const xs = /* @__PURE__ */ new Map();
function cp(e) {
  return new Promise((t) => {
    const n = ++Uh;
    xs.set(n, t), Un.postMessage({ ...e, id: n });
  });
}
const ws = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const a = 32768;
  for (let r = 0; r < t.length; r += a)
    n += String.fromCharCode.apply(null, t.subarray(r, r + a));
  return btoa(n);
}, Vh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
  return n;
};
async function Gh(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], a = [];
  e.forEach((i, s) => a.push([s, i]));
  for (const [i, s] of a)
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
  const r = new Blob(n);
  return [
    ws(await r.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Bh(e, t, n) {
  const a = new URL(t, location.href), r = a.pathname.indexOf("/api/"), i = (r >= 0 ? a.pathname.slice(r) : a.pathname) + a.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((h, m) => {
    s[m] = h;
  });
  let c = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [h, m] = await Gh(l);
    c = h, s["content-type"] = m;
  } else l instanceof Blob ? c = ws(await l.arrayBuffer()) : typeof l == "string" && (c = ws(new TextEncoder().encode(l).buffer));
  const d = await cp({
    tipo: "api",
    method: e,
    path: i,
    headers: JSON.stringify(s),
    body: c
  });
  return d && d.error ? new Response("error: " + d.error, { status: 500 }) : new Response(Vh(d.body), {
    status: d.status || 200,
    headers: d.headers || { "content-type": "application/json" }
  });
}
function Hh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const a = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (a.includes("/api/") && lp)
      try {
        return await Bh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), a, n);
      } catch (r) {
        return new Response(
          "error: " + r.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Wh() {
  try {
    if (yi("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const t = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: t }).then(() => navigator.serviceWorker.ready),
          new Promise((n) => setTimeout(n, 6e3))
        ]);
      } catch {
      }
    const e = new URL(
      `worker-crycat.js?v=${qh}`,
      location.href
    ).href;
    Un = new Worker(e, { type: "module" }), Un.onmessage = (t) => {
      const n = t.data || {};
      if (n.tipo === "estado")
        xi(n.t, n.paso);
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
        const a = xs.get(n.id);
        xs.delete(n.id), a && a(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && yi("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (a) => {
        a.data && a.data.tipo === "listo" && (Un.removeEventListener("message", n), t());
      };
      Un.addEventListener("message", n), Un.postMessage({ tipo: "iniciar" });
    }), lp = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const a = t.ports && t.ports[0];
      if (a)
        try {
          const r = await cp({
            tipo: "api",
            method: n.method,
            path: n.path,
            headers: JSON.stringify(n.headers || {}),
            body: n.body || ""
          });
          a.postMessage(r);
        } catch (r) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (r && r.message ? r.message : r))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Hh();
    try {
      const t = Jd().key;
      t && t !== "wiwi" && await fetch(zn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: t })
      });
    } catch {
    }
    xi("Optimizando la muestra inicial…", 7);
    try {
      const t = await fetch(zn() + "api/assets").then((n) => n.json());
      Array.isArray(t) && t.length === 0 && await fetch(zn() + "api/demo?n=24", { method: "POST" });
    } catch {
    }
    xi("Abriendo la aplicación…", 8), window.clearTimeout(ys), Yd(ip).render(/* @__PURE__ */ o.jsx(Fh, {}));
  } catch (e) {
    yi("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Wh();
