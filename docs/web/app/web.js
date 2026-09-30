var Ec = { exports: {} }, ho = {}, bc = { exports: {} }, J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa = Symbol.for("react.element"), ap = Symbol.for("react.portal"), op = Symbol.for("react.fragment"), ip = Symbol.for("react.strict_mode"), sp = Symbol.for("react.profiler"), lp = Symbol.for("react.provider"), cp = Symbol.for("react.context"), up = Symbol.for("react.forward_ref"), dp = Symbol.for("react.suspense"), pp = Symbol.for("react.memo"), mp = Symbol.for("react.lazy"), cl = Symbol.iterator;
function fp(e) {
  return e === null || typeof e != "object" ? null : (e = cl && e[cl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var zc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pc = Object.assign, Mc = {};
function cr(e, t, n) {
  this.props = e, this.context = t, this.refs = Mc, this.updater = n || zc;
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tc() {
}
Tc.prototype = cr.prototype;
function ds(e, t, n) {
  this.props = e, this.context = t, this.refs = Mc, this.updater = n || zc;
}
var ps = ds.prototype = new Tc();
ps.constructor = ds;
Pc(ps, cr.prototype);
ps.isPureReactComponent = !0;
var ul = Array.isArray, Lc = Object.prototype.hasOwnProperty, ms = { current: null }, Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ac(e, t, n) {
  var r, a = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Lc.call(t, r) && !Rc.hasOwnProperty(r) && (a[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) a.children = n;
  else if (1 < c) {
    for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in c = e.defaultProps, c) a[r] === void 0 && (a[r] = c[r]);
  return { $$typeof: sa, type: e, key: i, ref: s, props: a, _owner: ms.current };
}
function hp(e, t) {
  return { $$typeof: sa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function fs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sa;
}
function gp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var dl = /\/+/g;
function Lo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gp("" + e.key) : t.toString(36);
}
function Ma(e, t, n, r, a) {
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
        case sa:
        case ap:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + Lo(s, 0) : r, ul(a) ? (n = "", e != null && (n = e.replace(dl, "$&/") + "/"), Ma(a, t, n, "", function(u) {
    return u;
  })) : a != null && (fs(a) && (a = hp(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(dl, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ul(e)) for (var c = 0; c < e.length; c++) {
    i = e[c];
    var l = r + Lo(i, c);
    s += Ma(i, t, n, l, a);
  }
  else if (l = fp(e), typeof l == "function") for (e = l.call(e), c = 0; !(i = e.next()).done; ) i = i.value, l = r + Lo(i, c++), s += Ma(i, t, n, l, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ma(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Ma(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function vp(e) {
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
var De = { current: null }, Ta = { transition: null }, yp = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: Ta, ReactCurrentOwner: ms };
function Ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = { map: ma, forEach: function(e, t, n) {
  ma(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ma(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ma(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!fs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
J.Component = cr;
J.Fragment = op;
J.Profiler = sp;
J.PureComponent = ds;
J.StrictMode = ip;
J.Suspense = dp;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
J.act = Ic;
J.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pc({}, e.props), a = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = ms.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (l in t) Lc.call(t, l) && !Rc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    c = Array(l);
    for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
    r.children = c;
  }
  return { $$typeof: sa, type: e.type, key: a, ref: i, props: r, _owner: s };
};
J.createContext = function(e) {
  return e = { $$typeof: cp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: lp, _context: e }, e.Consumer = e;
};
J.createElement = Ac;
J.createFactory = function(e) {
  var t = Ac.bind(null, e);
  return t.type = e, t;
};
J.createRef = function() {
  return { current: null };
};
J.forwardRef = function(e) {
  return { $$typeof: up, render: e };
};
J.isValidElement = fs;
J.lazy = function(e) {
  return { $$typeof: mp, _payload: { _status: -1, _result: e }, _init: vp };
};
J.memo = function(e, t) {
  return { $$typeof: pp, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function(e) {
  var t = Ta.transition;
  Ta.transition = {};
  try {
    e();
  } finally {
    Ta.transition = t;
  }
};
J.unstable_act = Ic;
J.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
J.useContext = function(e) {
  return De.current.useContext(e);
};
J.useDebugValue = function() {
};
J.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
J.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
J.useId = function() {
  return De.current.useId();
};
J.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
J.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
J.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
J.useRef = function(e) {
  return De.current.useRef(e);
};
J.useState = function(e) {
  return De.current.useState(e);
};
J.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function() {
  return De.current.useTransition();
};
J.version = "18.3.1";
bc.exports = J;
var y = bc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp = y, wp = Symbol.for("react.element"), jp = Symbol.for("react.fragment"), kp = Object.prototype.hasOwnProperty, Cp = xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function $c(e, t, n) {
  var r, a = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) kp.call(t, r) && !Sp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: wp, type: e, key: i, ref: s, props: a, _owner: Cp.current };
}
ho.Fragment = jp;
ho.jsx = $c;
ho.jsxs = $c;
Ec.exports = ho;
var o = Ec.exports, Dc = { exports: {} }, Xe = {}, Oc = { exports: {} }, Fc = {};
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
  function t(T, D) {
    var G = T.length;
    T.push(D);
    e: for (; 0 < G; ) {
      var Y = G - 1 >>> 1, P = T[Y];
      if (0 < a(P, D)) T[Y] = D, T[G] = P, G = Y;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var D = T[0], G = T.pop();
    if (G !== D) {
      T[0] = G;
      e: for (var Y = 0, P = T.length, ae = P >>> 1; Y < ae; ) {
        var Ne = 2 * (Y + 1) - 1, st = T[Ne], le = Ne + 1, je = T[le];
        if (0 > a(st, G)) le < P && 0 > a(je, st) ? (T[Y] = je, T[le] = G, Y = le) : (T[Y] = st, T[Ne] = G, Y = Ne);
        else if (le < P && 0 > a(je, G)) T[Y] = je, T[le] = G, Y = le;
        else break e;
      }
    }
    return D;
  }
  function a(T, D) {
    var G = T.sortIndex - D.sortIndex;
    return G !== 0 ? G : T.id - D.id;
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
  var l = [], u = [], g = 1, m = null, x = 3, k = !1, h = !1, _ = !1, V = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= T) r(u), D.sortIndex = D.expirationTime, t(l, D);
      else break;
      D = n(u);
    }
  }
  function v(T) {
    if (_ = !1, f(T), !h) if (n(l) !== null) h = !0, ne(S);
    else {
      var D = n(u);
      D !== null && re(v, D.startTime - T);
    }
  }
  function S(T, D) {
    h = !1, _ && (_ = !1, d(L), L = -1), k = !0;
    var G = x;
    try {
      for (f(D), m = n(l); m !== null && (!(m.expirationTime > D) || T && !E()); ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          m.callback = null, x = m.priorityLevel;
          var P = Y(m.expirationTime <= D);
          D = e.unstable_now(), typeof P == "function" ? m.callback = P : m === n(l) && r(l), f(D);
        } else r(l);
        m = n(l);
      }
      if (m !== null) var ae = !0;
      else {
        var Ne = n(u);
        Ne !== null && re(v, Ne.startTime - D), ae = !1;
      }
      return ae;
    } finally {
      m = null, x = G, k = !1;
    }
  }
  var b = !1, C = null, L = -1, q = 5, w = -1;
  function E() {
    return !(e.unstable_now() - w < q);
  }
  function j() {
    if (C !== null) {
      var T = e.unstable_now();
      w = T;
      var D = !0;
      try {
        D = C(!0, T);
      } finally {
        D ? I() : (b = !1, C = null);
      }
    } else b = !1;
  }
  var I;
  if (typeof p == "function") I = function() {
    p(j);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), U = O.port2;
    O.port1.onmessage = j, I = function() {
      U.postMessage(null);
    };
  } else I = function() {
    V(j, 0);
  };
  function ne(T) {
    C = T, b || (b = !0, I());
  }
  function re(T, D) {
    L = V(function() {
      T(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    h || k || (h = !0, ne(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(T) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = x;
    }
    var G = x;
    x = D;
    try {
      return T();
    } finally {
      x = G;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, D) {
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
    var G = x;
    x = T;
    try {
      return D();
    } finally {
      x = G;
    }
  }, e.unstable_scheduleCallback = function(T, D, G) {
    var Y = e.unstable_now();
    switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? Y + G : Y) : G = Y, T) {
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
    return P = G + P, T = { id: g++, callback: D, priorityLevel: T, startTime: G, expirationTime: P, sortIndex: -1 }, G > Y ? (T.sortIndex = G, t(u, T), n(l) === null && T === n(u) && (_ ? (d(L), L = -1) : _ = !0, re(v, G - Y))) : (T.sortIndex = P, t(l, T), h || k || (h = !0, ne(S))), T;
  }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(T) {
    var D = x;
    return function() {
      var G = x;
      x = D;
      try {
        return T.apply(this, arguments);
      } finally {
        x = G;
      }
    };
  };
})(Fc);
Oc.exports = Fc;
var _p = Oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np = y, Ke = _p;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qc = /* @__PURE__ */ new Set(), Or = {};
function bn(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) qc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = Object.prototype.hasOwnProperty, Ep = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pl = {}, ml = {};
function bp(e) {
  return ui.call(ml, e) ? !0 : ui.call(pl, e) ? !1 : Ep.test(e) ? ml[e] = !0 : (pl[e] = !0, !1);
}
function zp(e, t, n, r) {
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
function Pp(e, t, n, r) {
  if (t === null || typeof t > "u" || zp(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, a, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ze[e] = new Oe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ze[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ze[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ze[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ze[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ze[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ze[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ze[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ze[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hs = /[\-:]([a-z])/g;
function gs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hs,
    gs
  );
  ze[t] = new Oe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hs, gs);
  ze[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hs, gs);
  ze[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ze[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ze[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vs(e, t, n, r) {
  var a = ze.hasOwnProperty(t) ? ze[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pp(t, n, a, r) && (n = null), r || a === null ? bp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fa = Symbol.for("react.element"), $n = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), ys = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), Bc = Symbol.for("react.provider"), Uc = Symbol.for("react.context"), xs = Symbol.for("react.forward_ref"), pi = Symbol.for("react.suspense"), mi = Symbol.for("react.suspense_list"), ws = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Vc = Symbol.for("react.offscreen"), fl = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object" ? null : (e = fl && e[fl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ge = Object.assign, Ro;
function _r(e) {
  if (Ro === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ro = t && t[1] || "";
  }
  return `
` + Ro + e;
}
var Ao = !1;
function Io(e, t) {
  if (!e || Ao) return "";
  Ao = !0;
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
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var a = u.stack.split(`
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
    Ao = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function Mp(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Io(e.type, !1), e;
    case 11:
      return e = Io(e.type.render, !1), e;
    case 1:
      return e = Io(e.type, !0), e;
    default:
      return "";
  }
}
function fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case $n:
      return "Portal";
    case di:
      return "Profiler";
    case ys:
      return "StrictMode";
    case pi:
      return "Suspense";
    case mi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Uc:
      return (e.displayName || "Context") + ".Consumer";
    case Bc:
      return (e._context.displayName || "Context") + ".Provider";
    case xs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ws:
      return t = e.displayName || null, t !== null ? t : fi(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return fi(e(t));
      } catch {
      }
  }
  return null;
}
function Tp(e) {
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
      return fi(t);
    case 8:
      return t === ys ? "StrictMode" : "Mode";
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
function Gc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Lp(e) {
  var t = Gc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ha(e) {
  e._valueTracker || (e._valueTracker = Lp(e));
}
function Hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Gc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Va(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hi(e, t) {
  var n = t.checked;
  return ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Wc(e, t) {
  t = t.checked, t != null && vs(e, "checked", t, !1);
}
function gi(e, t) {
  Wc(e, t);
  var n = cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vi(e, t.type, n) : t.hasOwnProperty("defaultValue") && vi(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vi(e, t, n) {
  (t !== "number" || Va(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function Yn(e, t, n, r) {
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
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function vl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Qc(e, t) {
  var n = cn(t.value), r = cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Yc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ga, Kc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ga = ga || document.createElement("div"), ga.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ga.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
}, Rp = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
  Rp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
  });
});
function Xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px";
}
function Jc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Xc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Ap = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wi(e, t) {
  if (t) {
    if (Ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function ji(e, t) {
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
var ki = null;
function js(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ci = null, Kn = null, Xn = null;
function xl(e) {
  if (e = ua(e)) {
    if (typeof Ci != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = wo(t), Ci(e.stateNode, e.type, t));
  }
}
function Zc(e) {
  Kn ? Xn ? Xn.push(e) : Xn = [e] : Kn = e;
}
function eu() {
  if (Kn) {
    var e = Kn, t = Xn;
    if (Xn = Kn = null, xl(e), t) for (e = 0; e < t.length; e++) xl(t[e]);
  }
}
function tu(e, t) {
  return e(t);
}
function nu() {
}
var $o = !1;
function ru(e, t, n) {
  if ($o) return e(t, n);
  $o = !0;
  try {
    return tu(e, t, n);
  } finally {
    $o = !1, (Kn !== null || Xn !== null) && (nu(), eu());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wo(n);
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
var Si = !1;
if (At) try {
  var yr = {};
  Object.defineProperty(yr, "passive", { get: function() {
    Si = !0;
  } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
} catch {
  Si = !1;
}
function Ip(e, t, n, r, a, i, s, c, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (g) {
    this.onError(g);
  }
}
var Pr = !1, Ga = null, Ha = !1, _i = null, $p = { onError: function(e) {
  Pr = !0, Ga = e;
} };
function Dp(e, t, n, r, a, i, s, c, l) {
  Pr = !1, Ga = null, Ip.apply($p, arguments);
}
function Op(e, t, n, r, a, i, s, c, l) {
  if (Dp.apply(this, arguments), Pr) {
    if (Pr) {
      var u = Ga;
      Pr = !1, Ga = null;
    } else throw Error(z(198));
    Ha || (Ha = !0, _i = u);
  }
}
function zn(e) {
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
function au(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wl(e) {
  if (zn(e) !== e) throw Error(z(188));
}
function Fp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = zn(e), t === null) throw Error(z(188));
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
        if (i === n) return wl(a), e;
        if (i === r) return wl(a), t;
        i = i.sibling;
      }
      throw Error(z(188));
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
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function ou(e) {
  return e = Fp(e), e !== null ? iu(e) : null;
}
function iu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = iu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var su = Ke.unstable_scheduleCallback, jl = Ke.unstable_cancelCallback, qp = Ke.unstable_shouldYield, Bp = Ke.unstable_requestPaint, xe = Ke.unstable_now, Up = Ke.unstable_getCurrentPriorityLevel, ks = Ke.unstable_ImmediatePriority, lu = Ke.unstable_UserBlockingPriority, Wa = Ke.unstable_NormalPriority, Vp = Ke.unstable_LowPriority, cu = Ke.unstable_IdlePriority, go = null, _t = null;
function Gp(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var yt = Math.clz32 ? Math.clz32 : Qp, Hp = Math.log, Wp = Math.LN2;
function Qp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Hp(e) / Wp | 0) | 0;
}
var va = 64, ya = 4194304;
function Er(e) {
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
function Qa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var c = s & ~a;
    c !== 0 ? r = Er(c) : (i &= s, i !== 0 && (r = Er(i)));
  } else s = n & ~a, s !== 0 ? r = Er(s) : i !== 0 && (r = Er(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - yt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Yp(e, t) {
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
function Kp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - yt(i), c = 1 << s, l = a[s];
    l === -1 ? (!(c & n) || c & r) && (a[s] = Yp(c, t)) : l <= t && (e.expiredLanes |= c), i &= ~c;
  }
}
function Ni(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function uu() {
  var e = va;
  return va <<= 1, !(va & 4194240) && (va = 64), e;
}
function Do(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function la(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n;
}
function Xp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - yt(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Cs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var oe = 0;
function du(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var pu, Ss, mu, fu, hu, Ei = !1, xa = [], en = null, tn = null, nn = null, Br = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), Kt = [], Jp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kl(e, t) {
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
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ur.delete(t.pointerId);
  }
}
function xr(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = ua(t), t !== null && Ss(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Zp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return en = xr(en, e, t, n, r, a), !0;
    case "dragenter":
      return tn = xr(tn, e, t, n, r, a), !0;
    case "mouseover":
      return nn = xr(nn, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return Br.set(i, xr(Br.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, Ur.set(i, xr(Ur.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function gu(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = au(n), t !== null) {
          e.blockedOn = t, hu(e.priority, function() {
            mu(n);
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
function La(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ki = r, n.target.dispatchEvent(r), ki = null;
    } else return t = ua(n), t !== null && Ss(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Cl(e, t, n) {
  La(e) && n.delete(t);
}
function em() {
  Ei = !1, en !== null && La(en) && (en = null), tn !== null && La(tn) && (tn = null), nn !== null && La(nn) && (nn = null), Br.forEach(Cl), Ur.forEach(Cl);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ei || (Ei = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, em)));
}
function Vr(e) {
  function t(a) {
    return wr(a, e);
  }
  if (0 < xa.length) {
    wr(xa[0], e);
    for (var n = 1; n < xa.length; n++) {
      var r = xa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && wr(en, e), tn !== null && wr(tn, e), nn !== null && wr(nn, e), Br.forEach(t), Ur.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) gu(n), n.blockedOn === null && Kt.shift();
}
var Jn = Ot.ReactCurrentBatchConfig, Ya = !0;
function tm(e, t, n, r) {
  var a = oe, i = Jn.transition;
  Jn.transition = null;
  try {
    oe = 1, _s(e, t, n, r);
  } finally {
    oe = a, Jn.transition = i;
  }
}
function nm(e, t, n, r) {
  var a = oe, i = Jn.transition;
  Jn.transition = null;
  try {
    oe = 4, _s(e, t, n, r);
  } finally {
    oe = a, Jn.transition = i;
  }
}
function _s(e, t, n, r) {
  if (Ya) {
    var a = bi(e, t, n, r);
    if (a === null) Qo(e, t, r, Ka, n), kl(e, r);
    else if (Zp(a, e, t, n, r)) r.stopPropagation();
    else if (kl(e, r), t & 4 && -1 < Jp.indexOf(e)) {
      for (; a !== null; ) {
        var i = ua(a);
        if (i !== null && pu(i), i = bi(e, t, n, r), i === null && Qo(e, t, r, Ka, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else Qo(e, t, r, null, n);
  }
}
var Ka = null;
function bi(e, t, n, r) {
  if (Ka = null, e = js(r), e = vn(e), e !== null) if (t = zn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = au(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ka = e, null;
}
function vu(e) {
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
      switch (Up()) {
        case ks:
          return 1;
        case lu:
          return 4;
        case Wa:
        case Vp:
          return 16;
        case cu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null, Ns = null, Ra = null;
function yu() {
  if (Ra) return Ra;
  var e, t = Ns, n = t.length, r, a = "value" in Jt ? Jt.value : Jt.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[i - r]; r++) ;
  return Ra = a.slice(e, 1 < r ? 1 - r : void 0);
}
function Aa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wa() {
  return !0;
}
function Sl() {
  return !1;
}
function Je(e) {
  function t(n, r, a, i, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wa : Sl, this.isPropagationStopped = Sl, this;
  }
  return ge(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wa);
  }, persist: function() {
  }, isPersistent: wa }), t;
}
var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Es = Je(ur), ca = ge({}, ur, { view: 0, detail: 0 }), rm = Je(ca), Oo, Fo, jr, vo = ge({}, ca, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jr && (jr && e.type === "mousemove" ? (Oo = e.screenX - jr.screenX, Fo = e.screenY - jr.screenY) : Fo = Oo = 0, jr = e), Oo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fo;
} }), _l = Je(vo), am = ge({}, vo, { dataTransfer: 0 }), om = Je(am), im = ge({}, ca, { relatedTarget: 0 }), qo = Je(im), sm = ge({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lm = Je(sm), cm = ge({}, ur, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), um = Je(cm), dm = ge({}, ur, { data: 0 }), Nl = Je(dm), pm = {
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
}, mm = {
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
}, fm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fm[e]) ? !!t[e] : !1;
}
function bs() {
  return hm;
}
var gm = ge({}, ca, { key: function(e) {
  if (e.key) {
    var t = pm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Aa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bs, charCode: function(e) {
  return e.type === "keypress" ? Aa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Aa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vm = Je(gm), ym = ge({}, vo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), El = Je(ym), xm = ge({}, ca, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bs }), wm = Je(xm), jm = ge({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), km = Je(jm), Cm = ge({}, vo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sm = Je(Cm), _m = [9, 13, 27, 32], zs = At && "CompositionEvent" in window, Mr = null;
At && "documentMode" in document && (Mr = document.documentMode);
var Nm = At && "TextEvent" in window && !Mr, xu = At && (!zs || Mr && 8 < Mr && 11 >= Mr), bl = " ", zl = !1;
function wu(e, t) {
  switch (e) {
    case "keyup":
      return _m.indexOf(t.keyCode) !== -1;
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
function ju(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Em(e, t) {
  switch (e) {
    case "compositionend":
      return ju(t);
    case "keypress":
      return t.which !== 32 ? null : (zl = !0, bl);
    case "textInput":
      return e = t.data, e === bl && zl ? null : e;
    default:
      return null;
  }
}
function bm(e, t) {
  if (On) return e === "compositionend" || !zs && wu(e, t) ? (e = yu(), Ra = Ns = Jt = null, On = !1, e) : null;
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
      return xu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Pl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zm[e.type] : t === "textarea";
}
function ku(e, t, n, r) {
  Zc(r), t = Xa(t, "onChange"), 0 < t.length && (n = new Es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tr = null, Gr = null;
function Pm(e) {
  Lu(e, 0);
}
function yo(e) {
  var t = Bn(e);
  if (Hc(t)) return e;
}
function Mm(e, t) {
  if (e === "change") return t;
}
var Cu = !1;
if (At) {
  var Bo;
  if (At) {
    var Uo = "oninput" in document;
    if (!Uo) {
      var Ml = document.createElement("div");
      Ml.setAttribute("oninput", "return;"), Uo = typeof Ml.oninput == "function";
    }
    Bo = Uo;
  } else Bo = !1;
  Cu = Bo && (!document.documentMode || 9 < document.documentMode);
}
function Tl() {
  Tr && (Tr.detachEvent("onpropertychange", Su), Gr = Tr = null);
}
function Su(e) {
  if (e.propertyName === "value" && yo(Gr)) {
    var t = [];
    ku(t, Gr, e, js(e)), ru(Pm, t);
  }
}
function Tm(e, t, n) {
  e === "focusin" ? (Tl(), Tr = t, Gr = n, Tr.attachEvent("onpropertychange", Su)) : e === "focusout" && Tl();
}
function Lm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return yo(Gr);
}
function Rm(e, t) {
  if (e === "click") return yo(t);
}
function Am(e, t) {
  if (e === "input" || e === "change") return yo(t);
}
function Im(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wt = typeof Object.is == "function" ? Object.is : Im;
function Hr(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!ui.call(t, a) || !wt(e[a], t[a])) return !1;
  }
  return !0;
}
function Ll(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rl(e, t) {
  var n = Ll(e);
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
    n = Ll(n);
  }
}
function _u(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _u(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Nu() {
  for (var e = window, t = Va(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Va(e.document);
  }
  return t;
}
function Ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function $m(e) {
  var t = Nu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _u(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ps(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Rl(n, i);
        var s = Rl(
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
var Dm = At && "documentMode" in document && 11 >= document.documentMode, Fn = null, zi = null, Lr = null, Pi = !1;
function Al(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pi || Fn == null || Fn !== Va(r) || (r = Fn, "selectionStart" in r && Ps(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lr && Hr(Lr, r) || (Lr = r, r = Xa(zi, "onSelect"), 0 < r.length && (t = new Es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fn)));
}
function ja(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qn = { animationend: ja("Animation", "AnimationEnd"), animationiteration: ja("Animation", "AnimationIteration"), animationstart: ja("Animation", "AnimationStart"), transitionend: ja("Transition", "TransitionEnd") }, Vo = {}, Eu = {};
At && (Eu = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
function xo(e) {
  if (Vo[e]) return Vo[e];
  if (!qn[e]) return e;
  var t = qn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Eu) return Vo[e] = t[n];
  return e;
}
var bu = xo("animationend"), zu = xo("animationiteration"), Pu = xo("animationstart"), Mu = xo("transitionend"), Tu = /* @__PURE__ */ new Map(), Il = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Tu.set(e, t), bn(t, [e]);
}
for (var Go = 0; Go < Il.length; Go++) {
  var Ho = Il[Go], Om = Ho.toLowerCase(), Fm = Ho[0].toUpperCase() + Ho.slice(1);
  dn(Om, "on" + Fm);
}
dn(bu, "onAnimationEnd");
dn(zu, "onAnimationIteration");
dn(Pu, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Mu, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function $l(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Op(r, t, void 0, e), e.currentTarget = null;
}
function Lu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var c = r[s], l = c.instance, u = c.currentTarget;
        if (c = c.listener, l !== i && a.isPropagationStopped()) break e;
        $l(a, c, u), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (c = r[s], l = c.instance, u = c.currentTarget, c = c.listener, l !== i && a.isPropagationStopped()) break e;
        $l(a, c, u), i = l;
      }
    }
  }
  if (Ha) throw e = _i, Ha = !1, _i = null, e;
}
function ce(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ru(t, e, 2, !1), n.add(r));
}
function Wo(e, t, n) {
  var r = 0;
  t && (r |= 4), Ru(n, e, r, t);
}
var ka = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[ka]) {
    e[ka] = !0, qc.forEach(function(n) {
      n !== "selectionchange" && (qm.has(n) || Wo(n, !1, e), Wo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ka] || (t[ka] = !0, Wo("selectionchange", !1, t));
  }
}
function Ru(e, t, n, r) {
  switch (vu(t)) {
    case 1:
      var a = tm;
      break;
    case 4:
      a = nm;
      break;
    default:
      a = _s;
  }
  n = a.bind(null, t, n, e), a = void 0, !Si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Qo(e, t, n, r, a) {
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
        if (s = vn(c), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  ru(function() {
    var u = i, g = js(n), m = [];
    e: {
      var x = Tu.get(e);
      if (x !== void 0) {
        var k = Es, h = e;
        switch (e) {
          case "keypress":
            if (Aa(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = vm;
            break;
          case "focusin":
            h = "focus", k = qo;
            break;
          case "focusout":
            h = "blur", k = qo;
            break;
          case "beforeblur":
          case "afterblur":
            k = qo;
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
            k = _l;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = om;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = wm;
            break;
          case bu:
          case zu:
          case Pu:
            k = lm;
            break;
          case Mu:
            k = km;
            break;
          case "scroll":
            k = rm;
            break;
          case "wheel":
            k = Sm;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = um;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = El;
        }
        var _ = (t & 4) !== 0, V = !_ && e === "scroll", d = _ ? x !== null ? x + "Capture" : null : x;
        _ = [];
        for (var p = u, f; p !== null; ) {
          f = p;
          var v = f.stateNode;
          if (f.tag === 5 && v !== null && (f = v, d !== null && (v = qr(p, d), v != null && _.push(Qr(p, v, f)))), V) break;
          p = p.return;
        }
        0 < _.length && (x = new k(x, h, null, n, g), m.push({ event: x, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", x && n !== ki && (h = n.relatedTarget || n.fromElement) && (vn(h) || h[It])) break e;
        if ((k || x) && (x = g.window === g ? g : (x = g.ownerDocument) ? x.defaultView || x.parentWindow : window, k ? (h = n.relatedTarget || n.toElement, k = u, h = h ? vn(h) : null, h !== null && (V = zn(h), h !== V || h.tag !== 5 && h.tag !== 6) && (h = null)) : (k = null, h = u), k !== h)) {
          if (_ = _l, v = "onMouseLeave", d = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (_ = El, v = "onPointerLeave", d = "onPointerEnter", p = "pointer"), V = k == null ? x : Bn(k), f = h == null ? x : Bn(h), x = new _(v, p + "leave", k, n, g), x.target = V, x.relatedTarget = f, v = null, vn(g) === u && (_ = new _(d, p + "enter", h, n, g), _.target = f, _.relatedTarget = V, v = _), V = v, k && h) t: {
            for (_ = k, d = h, p = 0, f = _; f; f = An(f)) p++;
            for (f = 0, v = d; v; v = An(v)) f++;
            for (; 0 < p - f; ) _ = An(_), p--;
            for (; 0 < f - p; ) d = An(d), f--;
            for (; p--; ) {
              if (_ === d || d !== null && _ === d.alternate) break t;
              _ = An(_), d = An(d);
            }
            _ = null;
          }
          else _ = null;
          k !== null && Dl(m, x, k, _, !1), h !== null && V !== null && Dl(m, V, h, _, !0);
        }
      }
      e: {
        if (x = u ? Bn(u) : window, k = x.nodeName && x.nodeName.toLowerCase(), k === "select" || k === "input" && x.type === "file") var S = Mm;
        else if (Pl(x)) if (Cu) S = Am;
        else {
          S = Lm;
          var b = Tm;
        }
        else (k = x.nodeName) && k.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (S = Rm);
        if (S && (S = S(e, u))) {
          ku(m, S, n, g);
          break e;
        }
        b && b(e, x, u), e === "focusout" && (b = x._wrapperState) && b.controlled && x.type === "number" && vi(x, "number", x.value);
      }
      switch (b = u ? Bn(u) : window, e) {
        case "focusin":
          (Pl(b) || b.contentEditable === "true") && (Fn = b, zi = u, Lr = null);
          break;
        case "focusout":
          Lr = zi = Fn = null;
          break;
        case "mousedown":
          Pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Pi = !1, Al(m, n, g);
          break;
        case "selectionchange":
          if (Dm) break;
        case "keydown":
        case "keyup":
          Al(m, n, g);
      }
      var C;
      if (zs) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else On ? wu(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (xu && n.locale !== "ko" && (On || L !== "onCompositionStart" ? L === "onCompositionEnd" && On && (C = yu()) : (Jt = g, Ns = "value" in Jt ? Jt.value : Jt.textContent, On = !0)), b = Xa(u, L), 0 < b.length && (L = new Nl(L, e, null, n, g), m.push({ event: L, listeners: b }), C ? L.data = C : (C = ju(n), C !== null && (L.data = C)))), (C = Nm ? Em(e, n) : bm(e, n)) && (u = Xa(u, "onBeforeInput"), 0 < u.length && (g = new Nl("onBeforeInput", "beforeinput", null, n, g), m.push({ event: g, listeners: u }), g.data = C));
    }
    Lu(m, t);
  });
}
function Qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = qr(e, n), i != null && r.unshift(Qr(e, i, a)), i = qr(e, t), i != null && r.push(Qr(e, i, a))), e = e.return;
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dl(e, t, n, r, a) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var c = n, l = c.alternate, u = c.stateNode;
    if (l !== null && l === r) break;
    c.tag === 5 && u !== null && (c = u, a ? (l = qr(n, i), l != null && s.unshift(Qr(n, l, c))) : a || (l = qr(n, i), l != null && s.push(Qr(n, l, c)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Bm = /\r\n?/g, Um = /\u0000|\uFFFD/g;
function Ol(e) {
  return (typeof e == "string" ? e : "" + e).replace(Bm, `
`).replace(Um, "");
}
function Ca(e, t, n) {
  if (t = Ol(t), Ol(e) !== t && n) throw Error(z(425));
}
function Ja() {
}
var Mi = null, Ti = null;
function Li(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ri = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, Fl = typeof Promise == "function" ? Promise : void 0, Gm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fl < "u" ? function(e) {
  return Fl.resolve(null).then(e).catch(Hm);
} : Ri;
function Hm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Vr(t);
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
function ql(e) {
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
var dr = Math.random().toString(36).slice(2), St = "__reactFiber$" + dr, Yr = "__reactProps$" + dr, It = "__reactContainer$" + dr, Ai = "__reactEvents$" + dr, Wm = "__reactListeners$" + dr, Qm = "__reactHandles$" + dr;
function vn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[It] || n[St]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ql(e); e !== null; ) {
        if (n = e[St]) return n;
        e = ql(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ua(e) {
  return e = e[St] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function wo(e) {
  return e[Yr] || null;
}
var Ii = [], Un = -1;
function pn(e) {
  return { current: e };
}
function ue(e) {
  0 > Un || (e.current = Ii[Un], Ii[Un] = null, Un--);
}
function se(e, t) {
  Un++, Ii[Un] = e.current, e.current = t;
}
var un = {}, Re = pn(un), Be = pn(!1), Cn = un;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ue(e) {
  return e = e.childContextTypes, e != null;
}
function Za() {
  ue(Be), ue(Re);
}
function Bl(e, t, n) {
  if (Re.current !== un) throw Error(z(168));
  se(Re, t), se(Be, n);
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, Tp(e) || "Unknown", a));
  return ge({}, n, r);
}
function eo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Cn = Re.current, se(Re, e), se(Be, Be.current), !0;
}
function Ul(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = Au(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, ue(Be), ue(Re), se(Re, e)) : ue(Be), se(Be, n);
}
var Mt = null, jo = !1, Ko = !1;
function Iu(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Ym(e) {
  jo = !0, Iu(e);
}
function mn() {
  if (!Ko && Mt !== null) {
    Ko = !0;
    var e = 0, t = oe;
    try {
      var n = Mt;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mt = null, jo = !1;
    } catch (a) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), su(ks, mn), a;
    } finally {
      oe = t, Ko = !1;
    }
  }
  return null;
}
var Vn = [], Gn = 0, to = null, no = 0, tt = [], nt = 0, Sn = null, Tt = 1, Lt = "";
function hn(e, t) {
  Vn[Gn++] = no, Vn[Gn++] = to, to = e, no = t;
}
function $u(e, t, n) {
  tt[nt++] = Tt, tt[nt++] = Lt, tt[nt++] = Sn, Sn = e;
  var r = Tt;
  e = Lt;
  var a = 32 - yt(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - yt(t) + a;
  if (30 < i) {
    var s = a - a % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Tt = 1 << 32 - yt(t) + a | n << a | r, Lt = i + e;
  } else Tt = 1 << i | n << a | r, Lt = e;
}
function Ms(e) {
  e.return !== null && (hn(e, 1), $u(e, 1, 0));
}
function Ts(e) {
  for (; e === to; ) to = Vn[--Gn], Vn[Gn] = null, no = Vn[--Gn], Vn[Gn] = null;
  for (; e === Sn; ) Sn = tt[--nt], tt[nt] = null, Lt = tt[--nt], tt[nt] = null, Tt = tt[--nt], tt[nt] = null;
}
var Ye = null, Qe = null, pe = !1, gt = null;
function Du(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Vl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Qe = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Tt, overflow: Lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Qe = null, !0) : !1;
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (pe) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!Vl(e, t)) {
        if ($i(e)) throw Error(z(418));
        t = rn(n.nextSibling);
        var r = Ye;
        t && Vl(e, t) ? Du(r, n) : (e.flags = e.flags & -4097 | 2, pe = !1, Ye = e);
      }
    } else {
      if ($i(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, pe = !1, Ye = e;
    }
  }
}
function Gl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ye = e;
}
function Sa(e) {
  if (e !== Ye) return !1;
  if (!pe) return Gl(e), pe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = Qe)) {
    if ($i(e)) throw Ou(), Error(z(418));
    for (; t; ) Du(e, t), t = rn(t.nextSibling);
  }
  if (Gl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ye ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ou() {
  for (var e = Qe; e; ) e = rn(e.nextSibling);
}
function rr() {
  Qe = Ye = null, pe = !1;
}
function Ls(e) {
  gt === null ? gt = [e] : gt.push(e);
}
var Km = Ot.ReactCurrentBatchConfig;
function kr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var c = a.refs;
        s === null ? delete c[i] : c[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function _a(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hl(e) {
  var t = e._init;
  return t(e._payload);
}
function Fu(e) {
  function t(d, p) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [p], d.flags |= 16) : f.push(p);
    }
  }
  function n(d, p) {
    if (!e) return null;
    for (; p !== null; ) t(d, p), p = p.sibling;
    return null;
  }
  function r(d, p) {
    for (d = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? d.set(p.key, p) : d.set(p.index, p), p = p.sibling;
    return d;
  }
  function a(d, p) {
    return d = ln(d, p), d.index = 0, d.sibling = null, d;
  }
  function i(d, p, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < p ? (d.flags |= 2, p) : f) : (d.flags |= 2, p)) : (d.flags |= 1048576, p);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function c(d, p, f, v) {
    return p === null || p.tag !== 6 ? (p = ri(f, d.mode, v), p.return = d, p) : (p = a(p, f), p.return = d, p);
  }
  function l(d, p, f, v) {
    var S = f.type;
    return S === Dn ? g(d, p, f.props.children, v, f.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Qt && Hl(S) === p.type) ? (v = a(p, f.props), v.ref = kr(d, p, f), v.return = d, v) : (v = Ba(f.type, f.key, f.props, null, d.mode, v), v.ref = kr(d, p, f), v.return = d, v);
  }
  function u(d, p, f, v) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== f.containerInfo || p.stateNode.implementation !== f.implementation ? (p = ai(f, d.mode, v), p.return = d, p) : (p = a(p, f.children || []), p.return = d, p);
  }
  function g(d, p, f, v, S) {
    return p === null || p.tag !== 7 ? (p = jn(f, d.mode, v, S), p.return = d, p) : (p = a(p, f), p.return = d, p);
  }
  function m(d, p, f) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = ri("" + p, d.mode, f), p.return = d, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fa:
          return f = Ba(p.type, p.key, p.props, null, d.mode, f), f.ref = kr(d, null, p), f.return = d, f;
        case $n:
          return p = ai(p, d.mode, f), p.return = d, p;
        case Qt:
          var v = p._init;
          return m(d, v(p._payload), f);
      }
      if (Nr(p) || vr(p)) return p = jn(p, d.mode, f, null), p.return = d, p;
      _a(d, p);
    }
    return null;
  }
  function x(d, p, f, v) {
    var S = p !== null ? p.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return S !== null ? null : c(d, p, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case fa:
          return f.key === S ? l(d, p, f, v) : null;
        case $n:
          return f.key === S ? u(d, p, f, v) : null;
        case Qt:
          return S = f._init, x(
            d,
            p,
            S(f._payload),
            v
          );
      }
      if (Nr(f) || vr(f)) return S !== null ? null : g(d, p, f, v, null);
      _a(d, f);
    }
    return null;
  }
  function k(d, p, f, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(f) || null, c(p, d, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fa:
          return d = d.get(v.key === null ? f : v.key) || null, l(p, d, v, S);
        case $n:
          return d = d.get(v.key === null ? f : v.key) || null, u(p, d, v, S);
        case Qt:
          var b = v._init;
          return k(d, p, f, b(v._payload), S);
      }
      if (Nr(v) || vr(v)) return d = d.get(f) || null, g(p, d, v, S, null);
      _a(p, v);
    }
    return null;
  }
  function h(d, p, f, v) {
    for (var S = null, b = null, C = p, L = p = 0, q = null; C !== null && L < f.length; L++) {
      C.index > L ? (q = C, C = null) : q = C.sibling;
      var w = x(d, C, f[L], v);
      if (w === null) {
        C === null && (C = q);
        break;
      }
      e && C && w.alternate === null && t(d, C), p = i(w, p, L), b === null ? S = w : b.sibling = w, b = w, C = q;
    }
    if (L === f.length) return n(d, C), pe && hn(d, L), S;
    if (C === null) {
      for (; L < f.length; L++) C = m(d, f[L], v), C !== null && (p = i(C, p, L), b === null ? S = C : b.sibling = C, b = C);
      return pe && hn(d, L), S;
    }
    for (C = r(d, C); L < f.length; L++) q = k(C, d, L, f[L], v), q !== null && (e && q.alternate !== null && C.delete(q.key === null ? L : q.key), p = i(q, p, L), b === null ? S = q : b.sibling = q, b = q);
    return e && C.forEach(function(E) {
      return t(d, E);
    }), pe && hn(d, L), S;
  }
  function _(d, p, f, v) {
    var S = vr(f);
    if (typeof S != "function") throw Error(z(150));
    if (f = S.call(f), f == null) throw Error(z(151));
    for (var b = S = null, C = p, L = p = 0, q = null, w = f.next(); C !== null && !w.done; L++, w = f.next()) {
      C.index > L ? (q = C, C = null) : q = C.sibling;
      var E = x(d, C, w.value, v);
      if (E === null) {
        C === null && (C = q);
        break;
      }
      e && C && E.alternate === null && t(d, C), p = i(E, p, L), b === null ? S = E : b.sibling = E, b = E, C = q;
    }
    if (w.done) return n(
      d,
      C
    ), pe && hn(d, L), S;
    if (C === null) {
      for (; !w.done; L++, w = f.next()) w = m(d, w.value, v), w !== null && (p = i(w, p, L), b === null ? S = w : b.sibling = w, b = w);
      return pe && hn(d, L), S;
    }
    for (C = r(d, C); !w.done; L++, w = f.next()) w = k(C, d, L, w.value, v), w !== null && (e && w.alternate !== null && C.delete(w.key === null ? L : w.key), p = i(w, p, L), b === null ? S = w : b.sibling = w, b = w);
    return e && C.forEach(function(j) {
      return t(d, j);
    }), pe && hn(d, L), S;
  }
  function V(d, p, f, v) {
    if (typeof f == "object" && f !== null && f.type === Dn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case fa:
          e: {
            for (var S = f.key, b = p; b !== null; ) {
              if (b.key === S) {
                if (S = f.type, S === Dn) {
                  if (b.tag === 7) {
                    n(d, b.sibling), p = a(b, f.props.children), p.return = d, d = p;
                    break e;
                  }
                } else if (b.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Qt && Hl(S) === b.type) {
                  n(d, b.sibling), p = a(b, f.props), p.ref = kr(d, b, f), p.return = d, d = p;
                  break e;
                }
                n(d, b);
                break;
              } else t(d, b);
              b = b.sibling;
            }
            f.type === Dn ? (p = jn(f.props.children, d.mode, v, f.key), p.return = d, d = p) : (v = Ba(f.type, f.key, f.props, null, d.mode, v), v.ref = kr(d, p, f), v.return = d, d = v);
          }
          return s(d);
        case $n:
          e: {
            for (b = f.key; p !== null; ) {
              if (p.key === b) if (p.tag === 4 && p.stateNode.containerInfo === f.containerInfo && p.stateNode.implementation === f.implementation) {
                n(d, p.sibling), p = a(p, f.children || []), p.return = d, d = p;
                break e;
              } else {
                n(d, p);
                break;
              }
              else t(d, p);
              p = p.sibling;
            }
            p = ai(f, d.mode, v), p.return = d, d = p;
          }
          return s(d);
        case Qt:
          return b = f._init, V(d, p, b(f._payload), v);
      }
      if (Nr(f)) return h(d, p, f, v);
      if (vr(f)) return _(d, p, f, v);
      _a(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, p !== null && p.tag === 6 ? (n(d, p.sibling), p = a(p, f), p.return = d, d = p) : (n(d, p), p = ri(f, d.mode, v), p.return = d, d = p), s(d)) : n(d, p);
  }
  return V;
}
var ar = Fu(!0), qu = Fu(!1), ro = pn(null), ao = null, Hn = null, Rs = null;
function As() {
  Rs = Hn = ao = null;
}
function Is(e) {
  var t = ro.current;
  ue(ro), e._currentValue = t;
}
function Oi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Zn(e, t) {
  ao = e, Rs = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function ot(e) {
  var t = e._currentValue;
  if (Rs !== e) if (e = { context: e, memoizedValue: t, next: null }, Hn === null) {
    if (ao === null) throw Error(z(308));
    Hn = e, ao.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return t;
}
var yn = null;
function $s(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function Bu(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, $s(t)) : (n.next = a.next, a.next = n), t.interleaved = n, $t(e, r);
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Ds(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Uu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, $t(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, $s(r)) : (t.next = a.next, a.next = t), r.interleaved = t, $t(e, n);
}
function Ia(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cs(e, n);
  }
}
function Wl(e, t) {
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
function oo(e, t, n, r) {
  var a = e.updateQueue;
  Yt = !1;
  var i = a.firstBaseUpdate, s = a.lastBaseUpdate, c = a.shared.pending;
  if (c !== null) {
    a.shared.pending = null;
    var l = c, u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== s && (c === null ? g.firstBaseUpdate = u : c.next = u, g.lastBaseUpdate = l));
  }
  if (i !== null) {
    var m = a.baseState;
    s = 0, g = u = l = null, c = i;
    do {
      var x = c.lane, k = c.eventTime;
      if ((r & x) === x) {
        g !== null && (g = g.next = {
          eventTime: k,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var h = e, _ = c;
          switch (x = t, k = n, _.tag) {
            case 1:
              if (h = _.payload, typeof h == "function") {
                m = h.call(k, m, x);
                break e;
              }
              m = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = _.payload, x = typeof h == "function" ? h.call(k, m, x) : h, x == null) break e;
              m = ge({}, m, x);
              break e;
            case 2:
              Yt = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (e.flags |= 64, x = a.effects, x === null ? a.effects = [c] : x.push(c));
      } else k = { eventTime: k, lane: x, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, g === null ? (u = g = k, l = m) : g = g.next = k, s |= x;
      if (c = c.next, c === null) {
        if (c = a.shared.pending, c === null) break;
        x = c, c = x.next, x.next = null, a.lastBaseUpdate = x, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (l = m), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    Nn |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Ql(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var da = {}, Nt = pn(da), Kr = pn(da), Xr = pn(da);
function xn(e) {
  if (e === da) throw Error(z(174));
  return e;
}
function Os(e, t) {
  switch (se(Xr, t), se(Kr, e), se(Nt, da), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xi(t, e);
  }
  ue(Nt), se(Nt, t);
}
function or() {
  ue(Nt), ue(Kr), ue(Xr);
}
function Vu(e) {
  xn(Xr.current);
  var t = xn(Nt.current), n = xi(t, e.type);
  t !== n && (se(Kr, e), se(Nt, n));
}
function Fs(e) {
  Kr.current === e && (ue(Nt), ue(Kr));
}
var fe = pn(0);
function io(e) {
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
var Xo = [];
function qs() {
  for (var e = 0; e < Xo.length; e++) Xo[e]._workInProgressVersionPrimary = null;
  Xo.length = 0;
}
var $a = Ot.ReactCurrentDispatcher, Jo = Ot.ReactCurrentBatchConfig, _n = 0, he = null, ke = null, Se = null, so = !1, Rr = !1, Jr = 0, Xm = 0;
function Me() {
  throw Error(z(321));
}
function Bs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Us(e, t, n, r, a, i) {
  if (_n = i, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $a.current = e === null || e.memoizedState === null ? tf : nf, e = n(r, a), Rr) {
    i = 0;
    do {
      if (Rr = !1, Jr = 0, 25 <= i) throw Error(z(301));
      i += 1, Se = ke = null, t.updateQueue = null, $a.current = rf, e = n(r, a);
    } while (Rr);
  }
  if ($a.current = lo, t = ke !== null && ke.next !== null, _n = 0, Se = ke = he = null, so = !1, t) throw Error(z(300));
  return e;
}
function Vs() {
  var e = Jr !== 0;
  return Jr = 0, e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Se === null ? he.memoizedState = Se = e : Se = Se.next = e, Se;
}
function it() {
  if (ke === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Se === null ? he.memoizedState : Se.next;
  if (t !== null) Se = t, ke = e;
  else {
    if (e === null) throw Error(z(310));
    ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, Se === null ? he.memoizedState = Se = e : Se = Se.next = e;
  }
  return Se;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zo(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ke, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = i.next, i.next = s;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var c = s = null, l = null, u = i;
    do {
      var g = u.lane;
      if ((_n & g) === g) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var m = {
          lane: g,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (c = l = m, s = r) : l = l.next = m, he.lanes |= g, Nn |= g;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = c, wt(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, he.lanes |= i, Nn |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ei(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== a);
    wt(i, t.memoizedState) || (qe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Gu() {
}
function Hu(e, t) {
  var n = he, r = it(), a = t(), i = !wt(r.memoizedState, a);
  if (i && (r.memoizedState = a, qe = !0), r = r.queue, Gs(Yu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
    if (n.flags |= 2048, ea(9, Qu.bind(null, n, r, a, t), void 0, null), _e === null) throw Error(z(349));
    _n & 30 || Wu(n, t, a);
  }
  return a;
}
function Wu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Qu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ku(t) && Xu(e);
}
function Yu(e, t, n) {
  return n(function() {
    Ku(t) && Xu(e);
  });
}
function Ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Xu(e) {
  var t = $t(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Yl(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ef.bind(null, he, e), [t.memoizedState, e];
}
function ea(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ju() {
  return it().memoizedState;
}
function Da(e, t, n, r) {
  var a = Ct();
  he.flags |= e, a.memoizedState = ea(1 | t, n, void 0, r === void 0 ? null : r);
}
function ko(e, t, n, r) {
  var a = it();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var s = ke.memoizedState;
    if (i = s.destroy, r !== null && Bs(r, s.deps)) {
      a.memoizedState = ea(t, n, i, r);
      return;
    }
  }
  he.flags |= e, a.memoizedState = ea(1 | t, n, i, r);
}
function Kl(e, t) {
  return Da(8390656, 8, e, t);
}
function Gs(e, t) {
  return ko(2048, 8, e, t);
}
function Zu(e, t) {
  return ko(4, 2, e, t);
}
function ed(e, t) {
  return ko(4, 4, e, t);
}
function td(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function nd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ko(4, 4, td.bind(null, t, e), n);
}
function Hs() {
}
function rd(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ad(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function od(e, t, n) {
  return _n & 21 ? (wt(n, t) || (n = uu(), he.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function Jm(e, t) {
  var n = oe;
  oe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Jo.transition;
  Jo.transition = {};
  try {
    e(!1), t();
  } finally {
    oe = n, Jo.transition = r;
  }
}
function id() {
  return it().memoizedState;
}
function Zm(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, sd(e)) ld(t, n);
  else if (n = Bu(e, t, n, r), n !== null) {
    var a = $e();
    xt(n, e, r, a), cd(n, t, r);
  }
}
function ef(e, t, n) {
  var r = sn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sd(e)) ld(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, c = i(s, n);
      if (a.hasEagerState = !0, a.eagerState = c, wt(c, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, $s(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = Bu(e, t, a, r), n !== null && (a = $e(), xt(n, e, r, a), cd(n, t, r));
  }
}
function sd(e) {
  var t = e.alternate;
  return e === he || t !== null && t === he;
}
function ld(e, t) {
  Rr = so = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function cd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cs(e, n);
  }
}
var lo = { readContext: ot, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, tf = { readContext: ot, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ot, useEffect: Kl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Da(
    4194308,
    4,
    td.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Da(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Da(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Zm.bind(null, he, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yl, useDebugValue: Hs, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = Yl(!1), t = e[0];
  return e = Jm.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = he, a = Ct();
  if (pe) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), _e === null) throw Error(z(349));
    _n & 30 || Wu(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, Kl(Yu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ea(9, Qu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = _e.identifierPrefix;
  if (pe) {
    var n = Lt, r = Tt;
    n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Xm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, nf = {
  readContext: ot,
  useCallback: rd,
  useContext: ot,
  useEffect: Gs,
  useImperativeHandle: nd,
  useInsertionEffect: Zu,
  useLayoutEffect: ed,
  useMemo: ad,
  useReducer: Zo,
  useRef: Ju,
  useState: function() {
    return Zo(Zr);
  },
  useDebugValue: Hs,
  useDeferredValue: function(e) {
    var t = it();
    return od(t, ke.memoizedState, e);
  },
  useTransition: function() {
    var e = Zo(Zr)[0], t = it().memoizedState;
    return [e, t];
  },
  useMutableSource: Gu,
  useSyncExternalStore: Hu,
  useId: id,
  unstable_isNewReconciler: !1
}, rf = { readContext: ot, useCallback: rd, useContext: ot, useEffect: Gs, useImperativeHandle: nd, useInsertionEffect: Zu, useLayoutEffect: ed, useMemo: ad, useReducer: ei, useRef: Ju, useState: function() {
  return ei(Zr);
}, useDebugValue: Hs, useDeferredValue: function(e) {
  var t = it();
  return ke === null ? t.memoizedState = e : od(t, ke.memoizedState, e);
}, useTransition: function() {
  var e = ei(Zr)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: Gu, useSyncExternalStore: Hu, useId: id, unstable_isNewReconciler: !1 };
function ft(e, t) {
  if (e && e.defaultProps) {
    t = ge({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Co = { isMounted: function(e) {
  return (e = e._reactInternals) ? zn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), a = sn(e), i = Rt(r, a);
  i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (xt(t, e, a, r), Ia(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), a = sn(e), i = Rt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (xt(t, e, a, r), Ia(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = sn(e), a = Rt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = an(e, a, r), t !== null && (xt(t, e, r, n), Ia(t, e, r));
} };
function Xl(e, t, n, r, a, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(a, i) : !0;
}
function ud(e, t, n) {
  var r = !1, a = un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ot(i) : (a = Ue(t) ? Cn : Re.current, r = t.contextTypes, i = (r = r != null) ? nr(e, a) : un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Co, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Jl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}
function qi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Ds(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = ot(i) : (i = Ue(t) ? Cn : Re.current, a.context = nr(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Fi(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Co.enqueueReplaceState(a, a.state, null), oo(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t) {
  try {
    var n = "", r = t;
    do
      n += Mp(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var af = typeof WeakMap == "function" ? WeakMap : Map;
function dd(e, t, n) {
  n = Rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    uo || (uo = !0, Ji = r), Bi(e, t);
  }, n;
}
function pd(e, t, n) {
  n = Rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      Bi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Bi(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Zl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new af();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = xf.bind(null, e, t, n), t.then(e, e));
}
function ec(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tc(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rt(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
}
var of = Ot.ReactCurrentOwner, qe = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? qu(t, null, n, r) : ar(t, e.child, n, r);
}
function nc(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Zn(t, a), r = Us(e, t, n, r, i, a), n = Vs(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Dt(e, t, a)) : (pe && n && Ms(t), t.flags |= 1, Ie(e, t, r, a), t.child);
}
function rc(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !el(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, md(e, t, i, r, a)) : (e = Ba(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hr, n(s, r) && e.ref === t.ref) return Dt(e, t, a);
  }
  return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function md(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Hr(i, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, Dt(e, t, a);
  }
  return Ui(e, t, n, r, a);
}
function fd(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(Qn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(Qn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, se(Qn, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, se(Qn, We), We |= r;
  return Ie(e, t, a, n), t.child;
}
function hd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ui(e, t, n, r, a) {
  var i = Ue(n) ? Cn : Re.current;
  return i = nr(t, i), Zn(t, a), n = Us(e, t, n, r, i, a), r = Vs(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Dt(e, t, a)) : (pe && r && Ms(t), t.flags |= 1, Ie(e, t, n, a), t.child);
}
function ac(e, t, n, r, a) {
  if (Ue(n)) {
    var i = !0;
    eo(t);
  } else i = !1;
  if (Zn(t, a), t.stateNode === null) Oa(e, t), ud(t, n, r), qi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, c = t.memoizedProps;
    s.props = c;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ot(u) : (u = Ue(n) ? Cn : Re.current, u = nr(t, u));
    var g = n.getDerivedStateFromProps, m = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== r || l !== u) && Jl(t, s, r, u), Yt = !1;
    var x = t.memoizedState;
    s.state = x, oo(t, r, s, a), l = t.memoizedState, c !== r || x !== l || Be.current || Yt ? (typeof g == "function" && (Fi(t, n, g, r), l = t.memoizedState), (c = Yt || Xl(t, n, c, r, x, l, u)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = c) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Uu(e, t), c = t.memoizedProps, u = t.type === t.elementType ? c : ft(t.type, c), s.props = u, m = t.pendingProps, x = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ot(l) : (l = Ue(n) ? Cn : Re.current, l = nr(t, l));
    var k = n.getDerivedStateFromProps;
    (g = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== m || x !== l) && Jl(t, s, r, l), Yt = !1, x = t.memoizedState, s.state = x, oo(t, r, s, a);
    var h = t.memoizedState;
    c !== m || x !== h || Be.current || Yt ? (typeof k == "function" && (Fi(t, n, k, r), h = t.memoizedState), (u = Yt || Xl(t, n, u, r, x, h, l) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vi(e, t, n, r, i, a);
}
function Vi(e, t, n, r, a, i) {
  hd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Ul(t, n, !1), Dt(e, t, i);
  r = t.stateNode, of.current = t;
  var c = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, i), t.child = ar(t, null, c, i)) : Ie(e, t, c, i), t.memoizedState = r.state, a && Ul(t, n, !0), t.child;
}
function gd(e) {
  var t = e.stateNode;
  t.pendingContext ? Bl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bl(e, t.context, !1), Os(e, t.containerInfo);
}
function oc(e, t, n, r, a) {
  return rr(), Ls(a), t.flags |= 256, Ie(e, t, n, r), t.child;
}
var Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vd(e, t, n) {
  var r = t.pendingProps, a = fe.current, i = !1, s = (t.flags & 128) !== 0, c;
  if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), se(fe, a & 1), e === null)
    return Di(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = No(s, r, 0, null), e = jn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Hi(n), t.memoizedState = Gi, e) : Ws(t, s));
  if (a = e.memoizedState, a !== null && (c = a.dehydrated, c !== null)) return sf(e, t, s, r, c, a, n);
  if (i) {
    i = r.fallback, s = t.mode, a = e.child, c = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ln(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), c !== null ? i = ln(c, i) : (i = jn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Hi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Gi, r;
  }
  return i = e.child, e = i.sibling, r = ln(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ws(e, t) {
  return t = No({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Na(e, t, n, r) {
  return r !== null && Ls(r), ar(t, e.child, null, n), e = Ws(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function sf(e, t, n, r, a, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ti(Error(z(422))), Na(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = No({ mode: "visible", children: r.children }, a, 0, null), i = jn(i, a, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Hi(s), t.memoizedState = Gi, i);
  if (!(t.mode & 1)) return Na(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
    return r = c, i = Error(z(419)), r = ti(i, r, void 0), Na(e, t, s, r);
  }
  if (c = (s & e.childLanes) !== 0, qe || c) {
    if (r = _e, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, $t(e, a), xt(r, e, a, -1));
    }
    return Zs(), r = ti(Error(z(421))), Na(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wf.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Qe = rn(a.nextSibling), Ye = t, pe = !0, gt = null, e !== null && (tt[nt++] = Tt, tt[nt++] = Lt, tt[nt++] = Sn, Tt = e.id, Lt = e.overflow, Sn = t), t = Ws(t, r.children), t.flags |= 4096, t);
}
function ic(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oi(e.return, t, n);
}
function ni(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function yd(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Ie(e, t, r.children, n), r = fe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
      else if (e.tag === 19) ic(e, n, t);
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
  if (se(fe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && io(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ni(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && io(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      ni(t, !0, n, null, i);
      break;
    case "together":
      ni(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Oa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function lf(e, t, n) {
  switch (t.tag) {
    case 3:
      gd(t), rr();
      break;
    case 5:
      Vu(t);
      break;
    case 1:
      Ue(t.type) && eo(t);
      break;
    case 4:
      Os(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      se(ro, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (se(fe, fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? vd(e, t, n) : (se(fe, fe.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      se(fe, fe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return yd(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), se(fe, fe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fd(e, t, n);
  }
  return Dt(e, t, n);
}
var xd, Wi, wd, jd;
xd = function(e, t) {
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
Wi = function() {
};
wd = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, xn(Nt.current);
    var i = null;
    switch (n) {
      case "input":
        a = hi(e, a), r = hi(e, r), i = [];
        break;
      case "select":
        a = ge({}, a, { value: void 0 }), r = ge({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = yi(e, a), r = yi(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ja);
    }
    wi(n, r);
    var s;
    n = null;
    for (u in a) if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null) if (u === "style") {
      var c = a[u];
      for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Or.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (c = a != null ? a[u] : void 0, r.hasOwnProperty(u) && l !== c && (l != null || c != null)) if (u === "style") if (c) {
        for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Or.hasOwnProperty(u) ? (l != null && u === "onScroll" && ce("scroll", e), i || c === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
  if (!pe) switch (e.tailMode) {
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
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function cf(e, t, n) {
  var r = t.pendingProps;
  switch (Ts(t), t.tag) {
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
      return Te(t), null;
    case 1:
      return Ue(t.type) && Za(), Te(t), null;
    case 3:
      return r = t.stateNode, or(), ue(Be), ue(Re), qs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, gt !== null && (ts(gt), gt = null))), Wi(e, t), Te(t), null;
    case 5:
      Fs(t);
      var a = xn(Xr.current);
      if (n = t.type, e !== null && t.stateNode != null) wd(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Te(t), null;
        }
        if (e = xn(Nt.current), Sa(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[St] = t, r[Yr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < br.length; a++) ce(br[a], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              hl(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ce("invalid", r);
              break;
            case "textarea":
              vl(r, i), ce("invalid", r);
          }
          wi(n, i), a = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var c = i[s];
            s === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && Ca(r.textContent, c, e), a = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && Ca(
              r.textContent,
              c,
              e
            ), a = ["children", "" + c]) : Or.hasOwnProperty(s) && c != null && s === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              ha(r), gl(r, i, !0);
              break;
            case "textarea":
              ha(r), yl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ja);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[St] = t, e[Yr] = r, xd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ji(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < br.length; a++) ce(br[a], e);
                a = r;
                break;
              case "source":
                ce("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), a = r;
                break;
              case "details":
                ce("toggle", e), a = r;
                break;
              case "input":
                hl(e, r), a = hi(e, r), ce("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ge({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                vl(e, r), a = yi(e, r), ce("invalid", e);
                break;
              default:
                a = r;
            }
            wi(n, a), c = a;
            for (i in c) if (c.hasOwnProperty(i)) {
              var l = c[i];
              i === "style" ? Jc(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Kc(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Fr(e, l) : typeof l == "number" && Fr(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Or.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && vs(e, i, l, s));
            }
            switch (n) {
              case "input":
                ha(e), gl(e, r, !1);
                break;
              case "textarea":
                ha(e), yl(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Yn(e, !!r.multiple, i, !1) : r.defaultValue != null && Yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ja);
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
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) jd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = xn(Xr.current), xn(Nt.current), Sa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (i = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
            case 3:
              Ca(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ca(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
      }
      return Te(t), null;
    case 13:
      if (ue(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (pe && Qe !== null && t.mode & 1 && !(t.flags & 128)) Ou(), rr(), t.flags |= 98560, i = !1;
        else if (i = Sa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(z(317));
            i[St] = t;
          } else rr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Te(t), i = !1;
        } else gt !== null && (ts(gt), gt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || fe.current & 1 ? Ce === 0 && (Ce = 3) : Zs())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
    case 4:
      return or(), Wi(e, t), e === null && Wr(t.stateNode.containerInfo), Te(t), null;
    case 10:
      return Is(t.type._context), Te(t), null;
    case 17:
      return Ue(t.type) && Za(), Te(t), null;
    case 19:
      if (ue(fe), i = t.memoizedState, i === null) return Te(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Cr(i, !1);
      else {
        if (Ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = io(e), s !== null) {
            for (t.flags |= 128, Cr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return se(fe, fe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && xe() > sr && (t.flags |= 128, r = !0, Cr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = io(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !pe) return Te(t), null;
        } else 2 * xe() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Cr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xe(), t.sibling = null, n = fe.current, se(fe, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
    case 22:
    case 23:
      return Js(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function uf(e, t) {
  switch (Ts(t), t.tag) {
    case 1:
      return Ue(t.type) && Za(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return or(), ue(Be), ue(Re), qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fs(t), null;
    case 13:
      if (ue(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        rr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(fe), null;
    case 4:
      return or(), null;
    case 10:
      return Is(t.type._context), null;
    case 22:
    case 23:
      return Js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ea = !1, Le = !1, df = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ye(e, t, r);
  }
  else n.current = null;
}
function Qi(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var sc = !1;
function pf(e, t) {
  if (Mi = Ya, e = Nu(), Ps(e)) {
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
        var s = 0, c = -1, l = -1, u = 0, g = 0, m = e, x = null;
        t: for (; ; ) {
          for (var k; m !== n || a !== 0 && m.nodeType !== 3 || (c = s + a), m !== i || r !== 0 && m.nodeType !== 3 || (l = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (k = m.firstChild) !== null; )
            x = m, m = k;
          for (; ; ) {
            if (m === e) break t;
            if (x === n && ++u === a && (c = s), x === i && ++g === r && (l = s), (k = m.nextSibling) !== null) break;
            m = x, x = m.parentNode;
          }
          m = k;
        }
        n = c === -1 || l === -1 ? null : { start: c, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ti = { focusedElem: e, selectionRange: n }, Ya = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var h = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (h !== null) {
            var _ = h.memoizedProps, V = h.memoizedState, d = t.stateNode, p = d.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : ft(t.type, _), V);
            d.__reactInternalSnapshotBeforeUpdate = p;
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
    } catch (v) {
      ye(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return h = sc, sc = !1, h;
}
function Ar(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && Qi(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function So(e, t) {
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
function Yi(e) {
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
function kd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[Yr], delete t[Ai], delete t[Wm], delete t[Qm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ja));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), e = e.sibling;
}
var Ee = null, ht = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) Sd(e, t, n), n = n.sibling;
}
function Sd(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(go, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Le || Wn(n, t);
    case 6:
      var r = Ee, a = ht;
      Ee = null, Wt(e, t, n), Ee = r, ht = a, Ee !== null && (ht ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null && (ht ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? Yo(e.parentNode, n) : e.nodeType === 1 && Yo(e, n), Vr(e)) : Yo(Ee, n.stateNode));
      break;
    case 4:
      r = Ee, a = ht, Ee = n.stateNode.containerInfo, ht = !0, Wt(e, t, n), Ee = r, ht = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Qi(n, t, s), a = a.next;
        } while (a !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!Le && (Wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        ye(n, t, c);
      }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, Wt(e, t, n), Le = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new df()), t.forEach(function(r) {
      var a = jf.bind(null, e, r);
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
            Ee = c.stateNode, ht = !1;
            break e;
          case 3:
            Ee = c.stateNode.containerInfo, ht = !0;
            break e;
          case 4:
            Ee = c.stateNode.containerInfo, ht = !0;
            break e;
        }
        c = c.return;
      }
      if (Ee === null) throw Error(z(160));
      Sd(i, s, a), Ee = null, ht = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (u) {
      ye(a, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _d(t, e), t = t.sibling;
}
function _d(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), kt(e), r & 4) {
        try {
          Ar(3, e, e.return), So(3, e);
        } catch (_) {
          ye(e, e.return, _);
        }
        try {
          Ar(5, e, e.return);
        } catch (_) {
          ye(e, e.return, _);
        }
      }
      break;
    case 1:
      mt(t, e), kt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (mt(t, e), kt(e), r & 512 && n !== null && Wn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Fr(a, "");
        } catch (_) {
          ye(e, e.return, _);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, c = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          c === "input" && i.type === "radio" && i.name != null && Wc(a, i), ji(c, s);
          var u = ji(c, i);
          for (s = 0; s < l.length; s += 2) {
            var g = l[s], m = l[s + 1];
            g === "style" ? Jc(a, m) : g === "dangerouslySetInnerHTML" ? Kc(a, m) : g === "children" ? Fr(a, m) : vs(a, g, m, u);
          }
          switch (c) {
            case "input":
              gi(a, i);
              break;
            case "textarea":
              Qc(a, i);
              break;
            case "select":
              var x = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? Yn(a, !!i.multiple, k, !1) : x !== !!i.multiple && (i.defaultValue != null ? Yn(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Yn(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[Yr] = i;
        } catch (_) {
          ye(e, e.return, _);
        }
      }
      break;
    case 6:
      if (mt(t, e), kt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (_) {
          ye(e, e.return, _);
        }
      }
      break;
    case 3:
      if (mt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vr(t.containerInfo);
      } catch (_) {
        ye(e, e.return, _);
      }
      break;
    case 4:
      mt(t, e), kt(e);
      break;
    case 13:
      mt(t, e), kt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Ks = xe())), r & 4 && cc(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (u = Le) || g, mt(t, e), Le = u) : mt(t, e), kt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !g && e.mode & 1) for ($ = e, g = e.child; g !== null; ) {
          for (m = $ = g; $ !== null; ) {
            switch (x = $, k = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ar(4, x, x.return);
                break;
              case 1:
                Wn(x, x.return);
                var h = x.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  r = x, n = x.return;
                  try {
                    t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                  } catch (_) {
                    ye(r, n, _);
                  }
                }
                break;
              case 5:
                Wn(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  dc(m);
                  continue;
                }
            }
            k !== null ? (k.return = x, $ = k) : dc(m);
          }
          g = g.sibling;
        }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                a = m.stateNode, u ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = m.stateNode, l = m.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Xc("display", s));
              } catch (_) {
                ye(e, e.return, _);
              }
            }
          } else if (m.tag === 6) {
            if (g === null) try {
              m.stateNode.nodeValue = u ? "" : m.memoizedProps;
            } catch (_) {
              ye(e, e.return, _);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            g === m && (g = null), m = m.return;
          }
          g === m && (g = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), kt(e), r & 4 && cc(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cd(n)) {
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
          r.flags & 32 && (Fr(a, ""), r.flags &= -33);
          var i = lc(e);
          Xi(e, i, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, c = lc(e);
          Ki(e, c, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mf(e, t, n) {
  $ = e, Nd(e);
}
function Nd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var a = $, i = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || Ea;
      if (!s) {
        var c = a.alternate, l = c !== null && c.memoizedState !== null || Le;
        c = Ea;
        var u = Le;
        if (Ea = s, (Le = l) && !u) for ($ = a; $ !== null; ) s = $, l = s.child, s.tag === 22 && s.memoizedState !== null ? pc(a) : l !== null ? (l.return = s, $ = l) : pc(a);
        for (; i !== null; ) $ = i, Nd(i), i = i.sibling;
        $ = a, Ea = c, Le = u;
      }
      uc(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, $ = i) : uc(e);
  }
}
function uc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Le || So(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ql(t, i, r);
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
              Ql(t, s, n);
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
              var u = t.alternate;
              if (u !== null) {
                var g = u.memoizedState;
                if (g !== null) {
                  var m = g.dehydrated;
                  m !== null && Vr(m);
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
        Le || t.flags & 512 && Yi(t);
      } catch (x) {
        ye(t, t.return, x);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function dc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function pc(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            So(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, a, l);
            }
          }
          var i = t.return;
          try {
            Yi(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Yi(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      c.return = t.return, $ = c;
      break;
    }
    $ = t.return;
  }
}
var ff = Math.ceil, co = Ot.ReactCurrentDispatcher, Qs = Ot.ReactCurrentOwner, at = Ot.ReactCurrentBatchConfig, Z = 0, _e = null, we = null, be = 0, We = 0, Qn = pn(0), Ce = 0, ta = null, Nn = 0, _o = 0, Ys = 0, Ir = null, Fe = null, Ks = 0, sr = 1 / 0, Pt = null, uo = !1, Ji = null, on = null, ba = !1, Zt = null, po = 0, $r = 0, Zi = null, Fa = -1, qa = 0;
function $e() {
  return Z & 6 ? xe() : Fa !== -1 ? Fa : Fa = xe();
}
function sn(e) {
  return e.mode & 1 ? Z & 2 && be !== 0 ? be & -be : Km.transition !== null ? (qa === 0 && (qa = uu()), qa) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vu(e.type)), e) : 1;
}
function xt(e, t, n, r) {
  if (50 < $r) throw $r = 0, Zi = null, Error(z(185));
  la(e, n, r), (!(Z & 2) || e !== _e) && (e === _e && (!(Z & 2) && (_o |= n), Ce === 4 && Xt(e, be)), Ve(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (sr = xe() + 500, jo && mn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Kp(e, t);
  var r = Qa(e, e === _e ? be : 0);
  if (r === 0) n !== null && jl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && jl(n), t === 1) e.tag === 0 ? Ym(mc.bind(null, e)) : Iu(mc.bind(null, e)), Gm(function() {
      !(Z & 6) && mn();
    }), n = null;
    else {
      switch (du(r)) {
        case 1:
          n = ks;
          break;
        case 4:
          n = lu;
          break;
        case 16:
          n = Wa;
          break;
        case 536870912:
          n = cu;
          break;
        default:
          n = Wa;
      }
      n = Rd(n, Ed.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ed(e, t) {
  if (Fa = -1, qa = 0, Z & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = Qa(e, e === _e ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var a = Z;
    Z |= 2;
    var i = zd();
    (_e !== e || be !== t) && (Pt = null, sr = xe() + 500, wn(e, t));
    do
      try {
        vf();
        break;
      } catch (c) {
        bd(e, c);
      }
    while (!0);
    As(), co.current = i, Z = a, we !== null ? t = 0 : (_e = null, be = 0, t = Ce);
  }
  if (t !== 0) {
    if (t === 2 && (a = Ni(e), a !== 0 && (r = a, t = es(e, a))), t === 1) throw n = ta, wn(e, 0), Xt(e, r), Ve(e, xe()), n;
    if (t === 6) Xt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !hf(a) && (t = mo(e, r), t === 2 && (i = Ni(e), i !== 0 && (r = i, t = es(e, i))), t === 1)) throw n = ta, wn(e, 0), Xt(e, r), Ve(e, xe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          gn(e, Fe, Pt);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = Ks + 500 - xe(), 10 < t)) {
            if (Qa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Ri(gn.bind(null, e, Fe, Pt), t);
            break;
          }
          gn(e, Fe, Pt);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - yt(r);
            i = 1 << s, s = t[s], s > a && (a = s), r &= ~i;
          }
          if (r = a, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ff(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ri(gn.bind(null, e, Fe, Pt), r);
            break;
          }
          gn(e, Fe, Pt);
          break;
        case 5:
          gn(e, Fe, Pt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ve(e, xe()), e.callbackNode === n ? Ed.bind(null, e) : null;
}
function es(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = mo(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && ts(t)), e;
}
function ts(e) {
  Fe === null ? Fe = e : Fe.push.apply(Fe, e);
}
function hf(e) {
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
  for (t &= ~Ys, t &= ~_o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - yt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function mc(e) {
  if (Z & 6) throw Error(z(327));
  er();
  var t = Qa(e, 0);
  if (!(t & 1)) return Ve(e, xe()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ni(e);
    r !== 0 && (t = r, n = es(e, r));
  }
  if (n === 1) throw n = ta, wn(e, 0), Xt(e, t), Ve(e, xe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, Fe, Pt), Ve(e, xe()), null;
}
function Xs(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (sr = xe() + 500, jo && mn());
  }
}
function En(e) {
  Zt !== null && Zt.tag === 0 && !(Z & 6) && er();
  var t = Z;
  Z |= 1;
  var n = at.transition, r = oe;
  try {
    if (at.transition = null, oe = 1, e) return e();
  } finally {
    oe = r, at.transition = n, Z = t, !(Z & 6) && mn();
  }
}
function Js() {
  We = Qn.current, ue(Qn);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Vm(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (Ts(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Za();
        break;
      case 3:
        or(), ue(Be), ue(Re), qs();
        break;
      case 5:
        Fs(r);
        break;
      case 4:
        or();
        break;
      case 13:
        ue(fe);
        break;
      case 19:
        ue(fe);
        break;
      case 10:
        Is(r.type._context);
        break;
      case 22:
      case 23:
        Js();
    }
    n = n.return;
  }
  if (_e = e, we = e = ln(e.current, null), be = We = t, Ce = 0, ta = null, Ys = _o = Nn = 0, Fe = Ir = null, yn !== null) {
    for (t = 0; t < yn.length; t++) if (n = yn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = a, r.next = s;
      }
      n.pending = r;
    }
    yn = null;
  }
  return e;
}
function bd(e, t) {
  do {
    var n = we;
    try {
      if (As(), $a.current = lo, so) {
        for (var r = he.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        so = !1;
      }
      if (_n = 0, Se = ke = he = null, Rr = !1, Jr = 0, Qs.current = null, n === null || n.return === null) {
        Ce = 1, ta = t, we = null;
        break;
      }
      e: {
        var i = e, s = n.return, c = n, l = t;
        if (t = be, c.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, g = c, m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var x = g.alternate;
            x ? (g.updateQueue = x.updateQueue, g.memoizedState = x.memoizedState, g.lanes = x.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var k = ec(s);
          if (k !== null) {
            k.flags &= -257, tc(k, s, c, i, t), k.mode & 1 && Zl(i, u, t), t = k, l = u;
            var h = t.updateQueue;
            if (h === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(l), t.updateQueue = _;
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zl(i, u, t), Zs();
              break e;
            }
            l = Error(z(426));
          }
        } else if (pe && c.mode & 1) {
          var V = ec(s);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), tc(V, s, c, i, t), Ls(ir(l, c));
            break e;
          }
        }
        i = l = ir(l, c), Ce !== 4 && (Ce = 2), Ir === null ? Ir = [i] : Ir.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = dd(i, l, t);
              Wl(i, d);
              break e;
            case 1:
              c = l;
              var p = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (on === null || !on.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = pd(i, c, t);
                Wl(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Md(n);
    } catch (S) {
      t = S, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zd() {
  var e = co.current;
  return co.current = lo, e === null ? lo : e;
}
function Zs() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), _e === null || !(Nn & 268435455) && !(_o & 268435455) || Xt(_e, be);
}
function mo(e, t) {
  var n = Z;
  Z |= 2;
  var r = zd();
  (_e !== e || be !== t) && (Pt = null, wn(e, t));
  do
    try {
      gf();
      break;
    } catch (a) {
      bd(e, a);
    }
  while (!0);
  if (As(), Z = n, co.current = r, we !== null) throw Error(z(261));
  return _e = null, be = 0, Ce;
}
function gf() {
  for (; we !== null; ) Pd(we);
}
function vf() {
  for (; we !== null && !qp(); ) Pd(we);
}
function Pd(e) {
  var t = Ld(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Md(e) : we = t, Qs.current = null;
}
function Md(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = uf(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ce = 6, we = null;
        return;
      }
    } else if (n = cf(n, t, We), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function gn(e, t, n) {
  var r = oe, a = at.transition;
  try {
    at.transition = null, oe = 1, yf(e, t, n, r);
  } finally {
    at.transition = a, oe = r;
  }
  return null;
}
function yf(e, t, n, r) {
  do
    er();
  while (Zt !== null);
  if (Z & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Xp(e, i), e === _e && (we = _e = null, be = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ba || (ba = !0, Rd(Wa, function() {
    return er(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = at.transition, at.transition = null;
    var s = oe;
    oe = 1;
    var c = Z;
    Z |= 4, Qs.current = null, pf(e, n), _d(n, e), $m(Ti), Ya = !!Mi, Ti = Mi = null, e.current = n, mf(n), Bp(), Z = c, oe = s, at.transition = i;
  } else e.current = n;
  if (ba && (ba = !1, Zt = e, po = a), i = e.pendingLanes, i === 0 && (on = null), Gp(n.stateNode), Ve(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (uo) throw uo = !1, e = Ji, Ji = null, e;
  return po & 1 && e.tag !== 0 && er(), i = e.pendingLanes, i & 1 ? e === Zi ? $r++ : ($r = 0, Zi = e) : $r = 0, mn(), null;
}
function er() {
  if (Zt !== null) {
    var e = du(po), t = at.transition, n = oe;
    try {
      if (at.transition = null, oe = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, po = 0, Z & 6) throw Error(z(331));
        var a = Z;
        for (Z |= 4, $ = e.current; $ !== null; ) {
          var i = $, s = i.child;
          if ($.flags & 16) {
            var c = i.deletions;
            if (c !== null) {
              for (var l = 0; l < c.length; l++) {
                var u = c[l];
                for ($ = u; $ !== null; ) {
                  var g = $;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, g, i);
                  }
                  var m = g.child;
                  if (m !== null) m.return = g, $ = m;
                  else for (; $ !== null; ) {
                    g = $;
                    var x = g.sibling, k = g.return;
                    if (kd(g), g === u) {
                      $ = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = k, $ = x;
                      break;
                    }
                    $ = k;
                  }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var _ = h.child;
                if (_ !== null) {
                  h.child = null;
                  do {
                    var V = _.sibling;
                    _.sibling = null, _ = V;
                  } while (_ !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, $ = s;
          else e: for (; $ !== null; ) {
            if (i = $, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ar(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, $ = d;
              break e;
            }
            $ = i.return;
          }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          s = $;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) f.return = s, $ = f;
          else e: for (s = p; $ !== null; ) {
            if (c = $, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  So(9, c);
              }
            } catch (S) {
              ye(c, c.return, S);
            }
            if (c === s) {
              $ = null;
              break e;
            }
            var v = c.sibling;
            if (v !== null) {
              v.return = c.return, $ = v;
              break e;
            }
            $ = c.return;
          }
        }
        if (Z = a, mn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(go, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      oe = n, at.transition = t;
    }
  }
  return !1;
}
function fc(e, t, n) {
  t = ir(n, t), t = dd(e, t, 1), e = an(e, t, 1), t = $e(), e !== null && (la(e, 1, t), Ve(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) fc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      fc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = ir(n, e), e = pd(t, e, 1), t = an(t, e, 1), e = $e(), t !== null && (la(t, 1, e), Ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function xf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, _e === e && (be & n) === n && (Ce === 4 || Ce === 3 && (be & 130023424) === be && 500 > xe() - Ks ? wn(e, 0) : Ys |= n), Ve(e, t);
}
function Td(e, t) {
  t === 0 && (e.mode & 1 ? (t = ya, ya <<= 1, !(ya & 130023424) && (ya = 4194304)) : t = 1);
  var n = $e();
  e = $t(e, t), e !== null && (la(e, t, n), Ve(e, n));
}
function wf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Td(e, n);
}
function jf(e, t) {
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
  r !== null && r.delete(t), Td(e, n);
}
var Ld;
Ld = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, lf(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, pe && t.flags & 1048576 && $u(t, no, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oa(e, t), e = t.pendingProps;
      var a = nr(t, Re.current);
      Zn(t, n), a = Us(null, t, r, e, a, n);
      var i = Vs();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (i = !0, eo(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ds(t), a.updater = Co, t.stateNode = a, a._reactInternals = t, qi(t, r, e, n), t = Vi(null, t, r, !0, i, n)) : (t.tag = 0, pe && i && Ms(t), Ie(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Cf(r), e = ft(r, e), a) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = ac(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, ft(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), Ui(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), ac(e, t, r, a, n);
    case 3:
      e: {
        if (gd(t), e === null) throw Error(z(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, Uu(e, t), oo(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = ir(Error(z(423)), t), t = oc(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = ir(Error(z(424)), t), t = oc(e, t, r, n, a);
          break e;
        } else for (Qe = rn(t.stateNode.containerInfo.firstChild), Ye = t, pe = !0, gt = null, n = qu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rr(), r === a) {
            t = Dt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Vu(t), e === null && Di(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = a.children, Li(r, a) ? s = null : i !== null && Li(r, i) && (t.flags |= 32), hd(e, t), Ie(e, t, s, n), t.child;
    case 6:
      return e === null && Di(t), null;
    case 13:
      return vd(e, t, n);
    case 4:
      return Os(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : Ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), nc(e, t, r, a, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, s = a.value, se(ro, r._currentValue), r._currentValue = s, i !== null) if (wt(i.value, s)) {
          if (i.children === a.children && !Be.current) {
            t = Dt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var c = i.dependencies;
          if (c !== null) {
            s = i.child;
            for (var l = c.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = Rt(-1, n & -n), l.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var g = u.pending;
                    g === null ? l.next = l : (l.next = g.next, g.next = l), u.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Oi(
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
            if (s = i.return, s === null) throw Error(z(341));
            s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Oi(s, n, t), s = i.sibling;
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
        Ie(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Zn(t, n), a = ot(a), r = r(a), t.flags |= 1, Ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ft(r, t.pendingProps), a = ft(r.type, a), rc(e, t, r, a, n);
    case 15:
      return md(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ft(r, a), Oa(e, t), t.tag = 1, Ue(r) ? (e = !0, eo(t)) : e = !1, Zn(t, n), ud(t, r, a), qi(t, r, a, n), Vi(null, t, r, !0, e, n);
    case 19:
      return yd(e, t, n);
    case 22:
      return fd(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Rd(e, t) {
  return su(e, t);
}
function kf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new kf(e, t, n, r);
}
function el(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Cf(e) {
  if (typeof e == "function") return el(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xs) return 11;
    if (e === ws) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ba(e, t, n, r, a, i) {
  var s = 2;
  if (r = e, typeof e == "function") el(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Dn:
      return jn(n.children, a, i, t);
    case ys:
      s = 8, a |= 8;
      break;
    case di:
      return e = rt(12, n, t, a | 2), e.elementType = di, e.lanes = i, e;
    case pi:
      return e = rt(13, n, t, a), e.elementType = pi, e.lanes = i, e;
    case mi:
      return e = rt(19, n, t, a), e.elementType = mi, e.lanes = i, e;
    case Vc:
      return No(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Bc:
          s = 10;
          break e;
        case Uc:
          s = 9;
          break e;
        case xs:
          s = 11;
          break e;
        case ws:
          s = 14;
          break e;
        case Qt:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = rt(s, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function jn(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function No(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = Vc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ri(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function ai(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Sf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Do(0), this.expirationTimes = Do(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Do(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function tl(e, t, n, r, a, i, s, c, l) {
  return e = new Sf(e, t, n, c, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ds(i), e;
}
function _f(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ad(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
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
    if (Ue(n)) return Au(e, n, t);
  }
  return t;
}
function Id(e, t, n, r, a, i, s, c, l) {
  return e = tl(n, r, !0, e, a, i, s, c, l), e.context = Ad(null), n = e.current, r = $e(), a = sn(n), i = Rt(r, a), i.callback = t ?? null, an(n, i, a), e.current.lanes = a, la(e, a, r), Ve(e, r), e;
}
function Eo(e, t, n, r) {
  var a = t.current, i = $e(), s = sn(a);
  return n = Ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(a, t, s), e !== null && (xt(e, a, s, i), Ia(e, a, s)), s;
}
function fo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nl(e, t) {
  hc(e, t), (e = e.alternate) && hc(e, t);
}
function Nf() {
  return null;
}
var $d = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rl(e) {
  this._internalRoot = e;
}
bo.prototype.render = rl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Eo(e, t, null, null);
};
bo.prototype.unmount = rl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function() {
      Eo(null, e, null, null);
    }), t[It] = null;
  }
};
function bo(e) {
  this._internalRoot = e;
}
bo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && gu(e);
  }
};
function al(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gc() {
}
function Ef(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = fo(s);
        i.call(u);
      };
    }
    var s = Id(t, r, e, 0, null, !1, !1, "", gc);
    return e._reactRootContainer = s, e[It] = s.current, Wr(e.nodeType === 8 ? e.parentNode : e), En(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var u = fo(l);
      c.call(u);
    };
  }
  var l = tl(e, 0, !1, null, null, !1, !1, "", gc);
  return e._reactRootContainer = l, e[It] = l.current, Wr(e.nodeType === 8 ? e.parentNode : e), En(function() {
    Eo(t, l, n, r);
  }), l;
}
function Po(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof a == "function") {
      var c = a;
      a = function() {
        var l = fo(s);
        c.call(l);
      };
    }
    Eo(t, s, e, a);
  } else s = Ef(n, t, e, a, r);
  return fo(s);
}
pu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 && (Cs(t, n | 1), Ve(t, xe()), !(Z & 6) && (sr = xe() + 500, mn()));
      }
      break;
    case 13:
      En(function() {
        var r = $t(e, 1);
        if (r !== null) {
          var a = $e();
          xt(r, e, 1, a);
        }
      }), nl(e, 1);
  }
};
Ss = function(e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = $e();
      xt(t, e, 134217728, n);
    }
    nl(e, 134217728);
  }
};
mu = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = $t(e, t);
    if (n !== null) {
      var r = $e();
      xt(n, e, t, r);
    }
    nl(e, t);
  }
};
fu = function() {
  return oe;
};
hu = function(e, t) {
  var n = oe;
  try {
    return oe = e, t();
  } finally {
    oe = n;
  }
};
Ci = function(e, t, n) {
  switch (t) {
    case "input":
      if (gi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = wo(r);
            if (!a) throw Error(z(90));
            Hc(r), gi(r, a);
          }
        }
      }
      break;
    case "textarea":
      Qc(e, n);
      break;
    case "select":
      t = n.value, t != null && Yn(e, !!n.multiple, t, !1);
  }
};
tu = Xs;
nu = En;
var bf = { usingClientEntryPoint: !1, Events: [ua, Bn, wo, Zc, eu, Xs] }, Sr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, zf = { bundleType: Sr.bundleType, version: Sr.version, rendererPackageName: Sr.rendererPackageName, rendererConfig: Sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ou(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sr.findFiberByHostInstance || Nf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var za = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!za.isDisabled && za.supportsFiber) try {
    go = za.inject(zf), _t = za;
  } catch {
  }
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf;
Xe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!al(t)) throw Error(z(200));
  return _f(e, t, null, n);
};
Xe.createRoot = function(e, t) {
  if (!al(e)) throw Error(z(299));
  var n = !1, r = "", a = $d;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = tl(e, 1, !1, null, null, n, !1, r, a), e[It] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new rl(t);
};
Xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = ou(t), e = e === null ? null : e.stateNode, e;
};
Xe.flushSync = function(e) {
  return En(e);
};
Xe.hydrate = function(e, t, n) {
  if (!zo(t)) throw Error(z(200));
  return Po(null, e, t, !0, n);
};
Xe.hydrateRoot = function(e, t, n) {
  if (!al(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", s = $d;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Id(t, null, e, 1, n ?? null, a, !1, i, s), e[It] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new bo(t);
};
Xe.render = function(e, t, n) {
  if (!zo(t)) throw Error(z(200));
  return Po(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function(e) {
  if (!zo(e)) throw Error(z(40));
  return e._reactRootContainer ? (En(function() {
    Po(null, null, e, !1, function() {
      e._reactRootContainer = null, e[It] = null;
    });
  }), !0) : !1;
};
Xe.unstable_batchedUpdates = Xs;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Po(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Dd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dd);
    } catch (e) {
      console.error(e);
    }
}
Dd(), Dc.exports = Xe;
var Pf = Dc.exports, Od, vc = Pf;
Od = vc.createRoot, vc.hydrateRoot;
const yc = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, Mf = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Tf = [
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
], Lf = [
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
function na(e) {
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
function Rf(e, t = 0) {
  const n = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, r = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, a = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, i = 2 * (Number.isFinite(t) ? t : 0), s = (Number.isFinite(r) ? r : 0) * n + i, c = (Number.isFinite(a) ? a : 0) * n + i;
  return { w: Number.isFinite(s) ? s : 0, h: Number.isFinite(c) ? c : 0 };
}
const kn = () => globalThis.__crycatBase || "";
async function K(e, t) {
  const n = await fetch(kn() + e, t);
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
const F = {
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
  crearDemo: (e = 16) => K(
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
  previewUrl: (e, t = !0, n = 0, r = "final") => `${kn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
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
  pageUrl: (e, t, n = !1, r = !1, a = 0, i = "final", s = !1) => `${kn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${i}` : ""}${s ? "&marcas=1" : ""}`,
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
  iconUrl: () => `${kn()}/api/icon.png?v=${Date.now()}`,
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
async function Af(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, m) => {
      a.onload = () => g(), a.onerror = () => m(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, c = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(i * c), l.height = Math.round(s * c), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (g) => l.toBlob((m) => g(m), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Fd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Af(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const ns = [
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
function rs(e) {
  return ns.find((t) => t.key === e) ?? ns[0];
}
function xc(e) {
  const t = rs(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function qd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return rs(e);
  } catch {
  }
  return rs("wiwi");
}
const Bd = {
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
}, Ud = y.createContext("es");
function If({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(Ud.Provider, { value: e, children: t });
}
function ol() {
  return y.useContext(Ud);
}
function Ze() {
  const e = ol();
  return (t, n) => {
    let r = e === "en" ? Bd[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function $f(e, t, n) {
  return e === "en" ? Bd[t] ?? t : t;
}
function ie({ size: e = 18, children: t }) {
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
function as({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function ra({ size: e }) {
  return /* @__PURE__ */ o.jsx(ie, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function aa({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Df({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Of({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function oa({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Ff({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function qf({ size: e }) {
  return /* @__PURE__ */ o.jsx(ie, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function ia({ size: e }) {
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
function wc({ size: e }) {
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
function Bf({ size: e }) {
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
function jc({ size: e }) {
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
function Uf({ size: e }) {
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
        /* @__PURE__ */ o.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }),
        /* @__PURE__ */ o.jsx("path", { d: "M12 3v18M3 12h18", strokeDasharray: "2 3" })
      ]
    }
  );
}
function Vd({ size: e }) {
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
function lr({ size: e }) {
  return /* @__PURE__ */ o.jsx(ie, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function os({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Gf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function is({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Hf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Wf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Dr({ size: e }) {
  return /* @__PURE__ */ o.jsx(ie, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function kc({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Qf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Yf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Kf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Gd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Xf({ size: e }) {
  return /* @__PURE__ */ o.jsx(ie, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Hd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function Jf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Zf({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function eh({ size: e }) {
  return /* @__PURE__ */ o.jsx(ie, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function th({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function nh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ie, { size: e, children: [
    /* @__PURE__ */ o.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function rh({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ze(), i = y.useMemo(() => t.map((w) => w.id), [t]), [s, c] = y.useState(/* @__PURE__ */ new Set()), [l, u] = y.useState("escala"), [g, m] = y.useState(100), [x, k] = y.useState(50), [h, _] = y.useState("mayor"), [V, d] = y.useState("");
  y.useEffect(() => {
    e && (c(/* @__PURE__ */ new Set()), d(""));
  }, [e, i.join(",")]);
  const p = (w) => !s.has(w), f = (w) => c((E) => {
    const j = new Set(E);
    return j.has(w) ? j.delete(w) : j.add(w), j;
  }), v = () => c(
    s.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), S = (w) => {
    const E = w.w_mm_base || 0, j = w.h_mm_base || 0;
    return h === "mayor" ? Math.max(E, j) : h === "menor" ? Math.min(E, j) : 2 * Math.sqrt(Math.max(0, E * j) / Math.PI);
  }, b = (w) => {
    if (l === "tamano") {
      const E = S(w);
      if (E > 0) return Math.min(10, Math.max(0.05, x / E));
    }
    return Math.min(10, Math.max(0.05, g / 100));
  }, C = (w) => {
    const E = b(w);
    return { w: (w.w_mm_base || 0) * E, h: (w.h_mm_base || 0) * E };
  }, L = async () => {
    let w = 0;
    for (const E of t) {
      if (!p(E.id)) continue;
      const j = b(E) * 100;
      await F.patchAsset(E.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(j * 10) / 10))
      }), w += 1;
    }
    await r(), d(a("{n} elementos ajustados ", { n: w }));
  }, q = async () => {
    await L(), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((w) => {
          const E = C(w), j = Math.min(98, E.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${w.id}`,
              style: {
                width: `${j}%`,
                maxWidth: `${j}%`,
                aspectRatio: `${E.w || 1} / ${E.h || 1}`,
                opacity: p(w.id) ? 1 : 0.3
              },
              title: `${w.name} · ${E.w.toFixed(1)}×${E.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: F.previewUrl(w.id), alt: "" })
            },
            w.id
          );
        }) }),
        /* @__PURE__ */ o.jsx("div", { className: "modal-botones", style: { marginTop: 8 }, children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "primary",
            "data-testid": "import-aplicar-izq",
            onClick: L,
            children: a("Aplicar tamaño")
          }
        ) }),
        V && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso-izq", children: V })
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
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((w) => {
          const E = C(w);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${w.id}`,
              className: p(w.id) ? "sel" : "",
              onClick: () => f(w.id),
              title: w.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: F.previewUrl(w.id), alt: w.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: w.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(w.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  E.w.toFixed(1),
                  "×",
                  E.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            w.id
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
              onClick: () => u("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: l === "tamano" ? "on" : "",
              onClick: () => u("tamano"),
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
                value: String(g),
                onChange: (w) => m(Number(w.target.value))
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
                  onChange: (w) => k(Number(w.target.value))
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
                value: h,
                onChange: (w) => _(w.target.value),
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
        V && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: V })
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
          onClick: q,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function ah({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: i = !1,
  bordeGlobalMm: s = 0,
  rataActivo: c = !1,
  faseBordes: l = 0,
  verBordes: u = !0,
  contornoModo: g = "final",
  destacado: m = !1,
  sel: x = !1,
  onSel: k
}) {
  const h = Ze(), [_, V] = y.useState(() => na(e));
  y.useEffect(() => V(na(e)), [e]);
  const d = y.useRef(null), p = i && Number(s) || 0, f = Math.max(0, p + _.offset_mm), v = (P) => {
    const ae = Math.max(0, Math.min(20, Math.round(P * 2) / 2));
    Y({ offset_mm: ae });
  }, S = Rf(_, f), [b, C] = y.useState(""), L = y.useRef(!1), [q, w] = y.useState(""), E = y.useRef(!1), [j, I] = y.useState({ tamano: !1, borde: !1, mini: !1 }), O = y.useRef(null);
  y.useEffect(() => {
    var P;
    m && (I({ tamano: !0, borde: !0, mini: !0 }), (P = O.current) == null || P.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [m]), y.useEffect(() => {
    L.current || C(S.w > 0 ? S.w.toFixed(1) : ""), E.current || w(S.h > 0 ? S.h.toFixed(1) : "");
  }, [S.w, S.h]);
  const U = Number.isFinite(_.w_mm_base) ? _.w_mm_base : 0, ne = Number.isFinite(_.h_mm_base) ? _.h_mm_base : 0, re = (P) => {
    C(P);
    const ae = Number(P.replace(",", "."));
    !Number.isFinite(ae) || ae <= 0 || U <= 0 || Y({ scale_pct: Math.max(5, (ae - 2 * f) / U * 100) });
  }, T = (P) => {
    w(P);
    const ae = Number(P.replace(",", "."));
    !Number.isFinite(ae) || ae <= 0 || ne <= 0 || Y({ scale_pct: Math.max(5, (ae - 2 * f) / ne * 100) });
  }, D = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && P.mini).length) ?? 0, G = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && !P.mini).length) ?? 0, Y = async (P) => {
    a == null || a(), "copies" in P && (P.copies = Math.max(0, P.copies ?? 0)), V((ae) => ({ ...ae, ...P }));
    try {
      await F.patchAsset(e.id, P);
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
        P.target.closest("button, input, select, textarea, a") || k == null || k(e.id, P.ctrlKey || P.metaKey || P.shiftKey);
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: F.previewUrlSinBordes(e.id, e.rev ?? 0),
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
                title: h("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => F.assetsFolder().then((P) => F.abrirCarpeta(P.path)).catch(() => F.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ o.jsx(ra, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: h("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var P;
                  return (P = d.current) == null ? void 0 : P.click();
                },
                children: /* @__PURE__ */ o.jsx(Df, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: d,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (P) => {
                  var Ne;
                  const ae = (Ne = P.target.files) == null ? void 0 : Ne[0];
                  if (P.target.value = "", !!ae)
                    try {
                      const { blob: st, name: le } = await Fd(ae);
                      await F.reemplazar(e.id, st, le), await n();
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
                title: h("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ o.jsx(Of, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                title: _.bg_removed ? h("Restaurar fondo original") : h("Quitar fondo (inteligente)"),
                onClick: () => (_.bg_removed ? F.restoreBackground(e.id) : F.removeBackground(e.id)).then(n),
                children: _.bg_removed ? /* @__PURE__ */ o.jsx(Ff, { size: 16 }) : /* @__PURE__ */ o.jsx(oa, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: h("Eliminar imagen"),
                onClick: () => F.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ o.jsx(qf, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${_.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": h("Incluir como mini (rellena huecos)"),
                onClick: () => Y({ mini_enabled: !_.mini_enabled }),
                children: [
                  /* @__PURE__ */ o.jsx(lr, { size: 15 }),
                  " ",
                  h("Mini")
                ]
              }
            ),
            c && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `mini-toggle rata ${_.rata_enabled ? "on" : ""}`,
                "data-testid": `rata-${e.id}`,
                "data-tip": h("Modo rata: este elemento coloca copias extra al imprimir"),
                onClick: () => Y({ rata_enabled: !_.rata_enabled }),
                children: "🐀"
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${_.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": h("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => I((P) => ({ ...P, borde: !P.borde })),
                children: [
                  /* @__PURE__ */ o.jsx(ia, { size: 15 }),
                  " ",
                  h("Borde")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: h("Copias"), children: [
              /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => Y({ copies: _.copies - 1 }), children: "−" }),
              /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: _.copies }),
              /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => Y({ copies: _.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => I((P) => ({ ...P, tamano: !P.tamano })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${j.tamano ? "open" : ""}`, children: "›" }),
                  h("Tamaño"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    S.w.toFixed(1),
                    "×",
                    S.h.toFixed(1),
                    " · ",
                    Math.round(_.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            j.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: h("Escala del elemento (100% = tamaño natural)"), children: h("Escala") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: _.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (P) => Y({ scale_pct: Number(P.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
                  Math.round(_.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: h("Tamaño exacto en milímetros (mantiene la proporción)"), children: h("Ancho") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: b,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      L.current = !0, E.current = !1;
                    },
                    onBlur: () => {
                      L.current = !1, C(S.w > 0 ? S.w.toFixed(1) : "");
                    },
                    onChange: (P) => re(P.target.value)
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" }),
                /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ o.jsx("span", { title: h("Tamaño exacto en milímetros (mantiene la proporción)"), children: h("Alto") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: q,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      E.current = !0, L.current = !1;
                    },
                    onBlur: () => {
                      E.current = !1, w(S.h > 0 ? S.h.toFixed(1) : "");
                    },
                    onChange: (P) => T(P.target.value)
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
                onClick: () => I((P) => ({ ...P, borde: !P.borde })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${j.borde ? "open" : ""}`, children: "›" }),
                  h("Borde adicional"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    _.offset_mm.toFixed(1),
                    " mm"
                  ] })
                ]
              }
            ),
            j.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => v(_.offset_mm - 0.5),
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
                    value: _.offset_mm,
                    onChange: (P) => v(Number(P.target.value))
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => v(_.offset_mm + 0.5),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: h("Adicional: {a} mm · Global: {g} mm · Total: {t} mm", {
                a: _.offset_mm.toFixed(1),
                g: p.toFixed(1),
                t: f.toFixed(1)
              }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", h("Extender")],
                  ["blanco", h("Blanco")],
                  ["color", h("Color")],
                  ["unir_recto", h("Unir recto")],
                  ["unir_curvo", h("Unir curvo")]
                ].map(([P, ae]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `seg ${(_.offset_modo || "") === P ? "on" : ""}`,
                    "data-testid": `offset-modo-${P}-${e.id}`,
                    onClick: () => Y({ offset_modo: P }),
                    children: ae
                  },
                  P
                )),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: _.offset_color || "#ffffff",
                    title: h("Color del borde"),
                    onChange: (P) => Y({
                      offset_color: P.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          _.mini_enabled && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => I((P) => ({ ...P, mini: !P.mini })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${j.mini ? "open" : ""}`, children: "›" }),
                  h("Opciones de mini"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    _.mini_quota,
                    " · ",
                    D
                  ] })
                ]
              }
            ),
            j.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx("span", { title: h("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: h("Cuota") }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => Y({ mini_quota: Math.max(
                    1,
                    Math.round((_.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                _.mini_quota
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => Y({ mini_quota: Math.min(
                    100,
                    Math.round((_.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: h(" {n} minis", { n: D }) })
            ] }) })
          ] }),
          G > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: h("Colocadas: {n}", { n: G }) }),
          _.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ o.jsx(Gd, { size: 14 }),
            " ",
            _.warnings[0],
            " ",
            _.warnings.some((P) => /blob|trozos sueltos/i.test(P)) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: h("LIMPIA EL CONTORNO")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function oh({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: s,
  faseBordes: c = 0,
  verBordes: l = !0,
  contornoModo: u = "final",
  destacado: g = "",
  seleccion: m = [],
  onSeleccion: x,
  onBulk: k
}) {
  var b, C, L, q;
  const h = Ze(), _ = y.useRef(null), [V, d] = y.useState(!1), [p, f] = y.useState(null), v = async (w) => {
    const E = [];
    for (const j of Array.from(w))
      try {
        const { blob: I, name: O } = await Fd(j);
        E.push(na(await F.upload(I, O)));
      } catch (I) {
        console.error(I);
      }
    await r(), E.length > 1 && f(E);
  }, S = n.usar_minis;
  return e.some((w) => w.demo), /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: h("Imágenes") }),
      /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "hint",
          style: { fontSize: 10.5 },
          title: h("Clic en una tarjeta (o en una pieza del visor) para seleccionarla; Ctrl/Cmd o Shift + clic para seleccionar VARIAS y editarlas a la vez."),
          children: h("Ctrl/Shift+clic = varios")
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `dropzone${V ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var w;
          return (w = _.current) == null ? void 0 : w.click();
        },
        onDragOver: (w) => {
          w.preventDefault(), d(!0);
        },
        onDragLeave: () => d(!1),
        onDrop: (w) => {
          w.preventDefault(), d(!1), w.dataTransfer.files.length && v(w.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ o.jsxs("span", { children: [
            h("Arrastra imágenes aquí"),
            /* @__PURE__ */ o.jsx("br", {}),
            /* @__PURE__ */ o.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              ref: _,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (w) => {
                w.target.files && v(w.target.files), w.target.value = "";
              }
            }
          )
        ]
      }
    ),
    m.length >= 2 && /* @__PURE__ */ o.jsxs("div", { className: "bulk-card", "data-testid": "bulk-card", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "bulk-head", children: [
        /* @__PURE__ */ o.jsx("b", { children: h("{n} elementos seleccionados", { n: m.length }) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "chip",
            "data-testid": "bulk-quitar",
            onClick: () => x == null ? void 0 : x(m[0], !1),
            children: h("Quitar selección")
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: h("Copias") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "quota-btn",
            "data-testid": "bulk-copias-menos",
            onClick: () => {
              var w;
              return k == null ? void 0 : k(m, {
                copies: Math.max(0, (((w = e.find((E) => E.id === m[0])) == null ? void 0 : w.copies) ?? 1) - 1)
              });
            },
            children: "−"
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "quota-val", children: ((b = e.find((w) => w.id === m[0])) == null ? void 0 : b.copies) ?? 1 }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "quota-btn",
            "data-testid": "bulk-copias-mas",
            onClick: () => {
              var w;
              return k == null ? void 0 : k(m, {
                copies: (((w = e.find((E) => E.id === m[0])) == null ? void 0 : w.copies) ?? 1) + 1
              });
            },
            children: "+"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: h("Escala") }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: 10,
            max: 400,
            step: 5,
            "data-testid": "bulk-escala",
            value: Math.round(((C = e.find((w) => w.id === m[0])) == null ? void 0 : C.scale_pct) ?? 100),
            onChange: (w) => k == null ? void 0 : k(
              m,
              { scale_pct: Number(w.target.value) }
            )
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
          Math.round(((L = e.find((w) => w.id === m[0])) == null ? void 0 : L.scale_pct) ?? 100),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `mini-toggle${(q = e.find((w) => w.id === m[0])) != null && q.mini_enabled ? " on" : ""}`,
            "data-testid": "bulk-mini",
            onClick: () => {
              var w;
              return k == null ? void 0 : k(m, {
                mini_enabled: !((w = e.find((E) => E.id === m[0])) != null && w.mini_enabled)
              });
            },
            children: h("Mini")
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "mini-toggle",
            "data-testid": "bulk-borde",
            onClick: () => {
              var w;
              return k == null ? void 0 : k(m, {
                offset_mm: (((w = e.find((E) => E.id === m[0])) == null ? void 0 : w.offset_mm) ?? 0) > 0 ? 0 : 1
              });
            },
            children: h("Borde")
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "hint", children: h("Los cambios se aplican a TODOS los elementos seleccionados.") })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((w) => /* @__PURE__ */ o.jsx(
      ah,
      {
        a: w,
        result: t,
        onChange: r,
        sel: m.includes(w.id),
        onSel: x,
        onEditarContorno: i,
        onAntesDeCambiar: s,
        faseBordes: c,
        verBordes: l,
        contornoModo: u,
        destacado: g === w.id,
        bordeGlobal: n.offset_activo === !0,
        bordeGlobalMm: Number(n.offset_mm) || 0,
        rataActivo: n.rata_activo === !0
      },
      w.id
    )) }),
    !S && /* @__PURE__ */ o.jsx("div", { className: "hint", children: h("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => F.clearAssets().then(r),
        children: h("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      rh,
      {
        open: !!p,
        assets: p ?? [],
        onClose: () => f(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const vt = (e) => (globalThis.__crycatAssets || "") + e;
function Wd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ze(), [i, s] = y.useState(null), [c, l] = y.useState("");
  y.useEffect(() => {
    e && u(r || "");
  }, [e]);
  const u = async (g = "") => {
    l("");
    try {
      s(await F.fsList(g));
    } catch (m) {
      l(m.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (g) => g.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    c && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      c
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => u(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((g) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => u(`${i.path}/${g}`.replace("//", "/")),
          children: g
        },
        g
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
function ih({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i,
  preview: s
}) {
  const c = Ze(), [l, u] = y.useState("resumen");
  if (!e) return null;
  const g = t.length > 0 && t.every((x) => x.startsWith("data:")), m = [
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
      !g && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        c("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      g && /* @__PURE__ */ o.jsx("p", { className: "hint", children: c("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      g ? t.map((x, k) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${k}`,
          href: x,
          download: `crycat_pagina-${String(k + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(ra, { size: 15 }),
            " ",
            c("Descargar página {n}", { n: k + 1 })
          ]
        },
        k
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(ra, { size: 15 }),
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
          onClick: () => u("cricut"),
          children: c("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { children: c("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: m.map((x, k) => /* @__PURE__ */ o.jsx("li", { children: x }, k)) }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => u("resumen"),
          children: c("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: i, children: c("Entendido") })
    ] })
  ] }) }) });
}
function sh({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: s, onJob: c, onRecalc: l, editando: u, onFinEdicion: g, onDeshacer: m, onRehacer: x, puedeDeshacer: k, puedeRehacer: h, seleccion: _ = [], onSeleccion: V }) {
  const d = Ze(), p = ol(), [f, v] = y.useState(1), [S, b] = y.useState({ x: 0, y: 0 }), [C, L] = y.useState(null), [q, w] = y.useState(1), [E, j] = y.useState(null), [I, O] = y.useState(null), [U, ne] = y.useState(!1), [re, T] = y.useState(2), [D, G] = y.useState(0);
  y.useEffect(() => {
    if (!r.verBordes) return;
    const N = window.setInterval(
      () => G((A) => (A + 3) % 12),
      260
    );
    return () => window.clearInterval(N);
  }, [r.verBordes]);
  const [Y, P] = y.useState([]), [ae, Ne] = y.useState([]), [st, le] = y.useState(""), [je, lt] = y.useState("normal"), [Q, me] = y.useState(""), [Pe, ct] = y.useState(/* @__PURE__ */ new Set()), Ge = y.useRef(null), Ft = y.useRef(null), qt = p === "en" ? Lf : Tf, Pn = y.useMemo(
    () => qt[Math.floor(Math.random() * qt.length)],
    [qt]
  ), pr = r.saveName.trim() || Pn;
  y.useEffect(() => {
    w(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const et = (t == null ? void 0 : t.pages) ?? 0, Mn = !!t && t.efficiency < 0.8;
  y.useEffect(() => {
    const N = Ge.current;
    if (!N) return;
    const A = (R) => {
      R.preventDefault(), R.stopPropagation();
      const W = N.getBoundingClientRect(), X = R.clientX - W.left, ve = R.clientY - W.top;
      v((Ae) => {
        const te = R.deltaY < 0 ? 1.05 : 0.9523809523809523, de = Math.min(12, Math.max(0.05, Ae * te)), jt = de / Ae;
        return b((Ht) => ({ x: X - (X - Ht.x) * jt, y: ve - (ve - Ht.y) * jt })), de;
      });
    };
    return N.addEventListener("wheel", A, { passive: !1 }), () => N.removeEventListener("wheel", A);
  }, []);
  const mr = (N) => {
    if (N.target.closest(".item-box")) return;
    Ft.current = { x: N.clientX - S.x, y: N.clientY - S.y };
    const A = (W) => {
      Ft.current && b({ x: W.clientX - Ft.current.x, y: W.clientY - Ft.current.y });
    }, R = () => {
      Ft.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", R);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", R);
  };
  y.useEffect(() => {
    const N = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? v((R) => Math.min(12, R * 1.08)) : A.key === "-" || A.key === "_" ? v((R) => Math.max(0.05, R / 1.08)) : A.key === "0" ? gr() : A.key === "Escape" ? L(null) : A.key === "g" ? a((R) => ({ ...R, guidesVisible: !R.guidesVisible })) : A.key === "t" && a((R) => {
        const W = [
          "blanco",
          "transparente",
          "fosforito",
          "rosa",
          "negro"
        ], X = R.fondo ?? (R.eyeFosforito ? "fosforito" : R.eyeTransparent ? "transparente" : "blanco"), ve = W[(W.indexOf(X) + 1) % W.length];
        return {
          ...R,
          fondo: ve,
          eyeTransparent: ve === "transparente",
          eyeFosforito: ve === "fosforito"
        };
      }));
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [a]);
  const Bt = y.useRef(null), fr = y.useRef(null), M = (N, A) => {
    N.preventDefault(), N.stopPropagation();
    const R = N.currentTarget.closest(".page-box");
    if (!R || !t) return;
    const W = t.page_mm[0] / R.clientWidth, X = {
      uid: A.uid,
      startX: N.clientX,
      startY: N.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: W
    };
    Bt.current = X, fr.current = { x: A.x, y: A.y }, j(X), O({ uid: A.uid, x: A.x, y: A.y });
    const ve = (te) => {
      const de = Bt.current;
      if (!de) return;
      const jt = (te.clientX - de.startX) * de.mmPerPx / f, Ht = (te.clientY - de.startY) * de.mmPerPx / f;
      fr.current = { x: de.origX + jt, y: de.origY + Ht }, O({ uid: de.uid, x: de.origX + jt, y: de.origY + Ht });
    }, Ae = (te) => {
      window.removeEventListener("mousemove", ve), window.removeEventListener("mouseup", Ae);
      const de = Bt.current;
      if (Bt.current = null, !de) return;
      const jt = (te.clientX - de.startX) * de.mmPerPx / f, Ht = (te.clientY - de.startY) * de.mmPerPx / f;
      j(null), O(null), !(Math.abs(jt) < 0.5 && Math.abs(Ht) < 0.5) && B(de.uid, de.origX + jt, de.origY + Ht);
    };
    window.addEventListener("mousemove", ve), window.addEventListener("mouseup", Ae);
  }, B = async (N, A, R) => {
    try {
      const W = await F.move(N, A, R);
      W.job ? c(W.job) : await s();
    } catch {
      await s();
    } finally {
      w(Date.now());
    }
  }, H = async (N) => {
    const A = await F.unpin(N);
    c(A);
  }, ee = !1;
  y.useEffect(() => {
    {
      P([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, q]), y.useEffect(() => {
    if (lt("normal"), me(""), !u) {
      Ne([]), le(""), ct(/* @__PURE__ */ new Set());
      return;
    }
    F.blobs(u.id).then((N) => {
      Ne(N.blobs), T(u.offset_mm > 0 ? u.offset_mm : N.union_mm ?? 2), le(N.preview_png), ct(new Set(N.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      Ne([]), le("");
    });
  }, [u]);
  const hr = async () => {
    if (u)
      try {
        await F.limpiarContorno(u.id, Array.from(Pe));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, Ut = (N) => {
    ct((A) => {
      const R = new Set(A);
      return R.has(N) ? R.delete(N) : R.add(N), R;
    });
  }, [He, Vt] = y.useState(null), Jd = async () => {
    try {
      const R = await F.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Vt({ files: R.files, folder: R.folder, preview: R.preview });
    } catch (R) {
      Vt({ files: [], folder: "", error: R.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const W = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), X = URL.createObjectURL(W), ve = document.createElement("a");
        ve.href = X, ve.download = `${r.saveName || "crycat"}-cricut.pdf`, ve.click(), setTimeout(() => URL.revokeObjectURL(X), 4e3);
      } catch (R) {
        Vt({
          files: [],
          folder: "",
          error: R.message
        });
      }
      return;
    }
    const A = document.createElement("iframe");
    A.setAttribute("aria-hidden", "true"), A.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", A.src = "/api/print.pdf", A.onload = () => {
      var R, W;
      try {
        (R = A.contentWindow) == null || R.focus(), (W = A.contentWindow) == null || W.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, Zd = async () => {
    try {
      const N = await F.export(pr);
      Vt({ files: N.files, folder: N.folder, preview: N.preview });
    } catch (N) {
      Vt({ files: [], folder: "", error: N.message });
    }
  }, ep = () => {
    ne(!0);
  }, tp = async (N) => {
    try {
      const A = await F.export(pr, N);
      Vt({ files: A.files, folder: A.folder, preview: A.preview });
    } catch (A) {
      Vt({ files: [], folder: "", error: A.message });
    }
  }, il = (t == null ? void 0 : t.poly_mm) ?? [], [ut, dt] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Tn, Ln] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], pt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Tn, fn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Ln, gr = y.useCallback(() => {
    const N = Ge.current;
    if (!N) return;
    const A = N.querySelector(".page-box");
    if (!A) return;
    const R = N.querySelector(".canvas-inner"), W = N.clientWidth, X = N.clientHeight, ve = (R == null ? void 0 : R.offsetWidth) || A.offsetWidth || 1, Ae = (R == null ? void 0 : R.offsetHeight) || A.offsetHeight || 1, te = Math.min(1, W / ve, X / Ae);
    v(te), b({ x: (W - ve * te) / 2, y: (X - Ae * te) / 2 });
  }, []);
  y.useEffect(() => {
    if (et <= 0) return;
    const N = window.setTimeout(gr, 60);
    return () => window.clearTimeout(N);
  }, [
    et,
    pt,
    fn,
    r.viewMode,
    r.hojaGirada,
    C,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    gr
  ]);
  const Et = n.lienzo === "pagina" ? 0 : ut, bt = n.lienzo === "pagina" ? 0 : dt, sl = il.length ? "M" + il.map(([N, A]) => `${N - Et},${A - bt}`).join(" L") + " Z" : "", ll = y.useRef(0);
  y.useEffect(() => {
    if (!t) return;
    const N = t.pages || 0;
    N > 0 && N !== ll.current && (ll.current = N, a((A) => ({ ...A, viewMode: N <= 1 ? 1 : N === 2 ? 2 : 4 })), L(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const pa = r.contornoModo ?? "final", Rn = r.verBordes && pa !== "ninguno", Mo = `${q}-${n.marcas_delimitar ? 1 : 0}-${n.lienzo}-${n.color_formato}-${n.dpi_salida}`;
  y.useEffect(() => {
    if (!Rn || !t) return;
    const N = [], A = Math.max(1, t.pages);
    for (let W = 0; W < A; W++)
      for (const X of [0, 3, 6, 9])
        N.push(F.pageUrl(
          W,
          Mo,
          n.simular_impresion === !0,
          !0,
          X,
          pa
        ));
    const R = N.map((W) => {
      const X = new Image();
      return X.src = W, X;
    });
    return () => R.forEach((W) => {
      W.src = "";
    });
  }, [Rn, Mo, t, pa, n.simular_impresion]);
  const Gt = r.hojaGirada === !0, To = Gt ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${pt / (fn || 1) * 100}%`,
    height: `${fn / (pt || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(270deg)"
  } : void 0, np = (N) => {
    const A = (t == null ? void 0 : t.placements.filter((R) => R.page === N)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box fondo-${r.fondo ?? (r.eyeFosforito ? "fosforito" : r.eyeTransparent ? "transparente" : "blanco")}${Gt ? " girada" : ""}`,
        style: Gt ? {
          width: "100%",
          aspectRatio: `${fn} / ${pt}`
        } : { width: "100%" },
        onClick: (R) => {
          et > 1 && C === null && !R.target.closest(".item-box") && L(N);
        },
        "data-testid": `page-${N}`,
        children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: `sheet${Gt ? " girada" : ""}`,
              style: To,
              onLoad: N === 0 ? gr : void 0,
              src: F.pageUrl(N, Mo, n.simular_impresion === !0, Rn, D, pa),
              alt: d("Página {i}", { i: N + 1 }),
              draggable: !1
            }
          ),
          r.guidesVisible && sl && /* @__PURE__ */ o.jsxs(
            "svg",
            {
              className: `overlay-svg${Gt ? " girada" : ""}`,
              style: To,
              viewBox: `0 0 ${pt} ${fn}`,
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ o.jsxs(
                  "g",
                  {
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.15, pt / 1400),
                    opacity: 0.28,
                    children: [
                      Array.from(
                        { length: Math.floor((ut - Et + Tn) / 10) + 1 },
                        (R, W) => {
                          const X = W * 10 - (Et - ut);
                          return X >= ut - Et - 0.01 && X <= ut - Et + Tn + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: X,
                              y1: dt - bt,
                              x2: X,
                              y2: dt - bt + Ln
                            },
                            `v${W}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((dt - bt + Ln) / 10) + 1 },
                        (R, W) => {
                          const X = W * 10 - (bt - dt);
                          return X >= dt - bt - 0.01 && X <= dt - bt + Ln + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: ut - Et,
                              y1: X,
                              x2: ut - Et + Tn,
                              y2: X
                            },
                            `h${W}`
                          ) : null;
                        }
                      )
                    ]
                  }
                ),
                (t == null ? void 0 : t.marcas) && /* @__PURE__ */ o.jsx("g", { children: [
                  ["esquina_flecha", ut, dt, !1, !1],
                  ["esquina_sd", ut + Tn, dt, !0, !1],
                  ["esquina_ii", ut, dt + Ln, !1, !0],
                  ["esquina_id", ut + Tn, dt + Ln, !0, !0]
                ].map(([R, W, X, ve, Ae]) => {
                  const te = t.marcas[R];
                  if (!te) return null;
                  const de = W - Et - (ve ? te[0] : 0), jt = X - bt - (Ae ? te[1] : 0);
                  return /* @__PURE__ */ o.jsx(
                    "image",
                    {
                      href: vt(`/marcas/${R}.png`),
                      x: de,
                      y: jt,
                      width: te[0],
                      height: te[1],
                      preserveAspectRatio: "none"
                    },
                    R
                  );
                }) }),
                /* @__PURE__ */ o.jsx(
                  "path",
                  {
                    d: sl,
                    fill: "none",
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.6, pt / 250),
                    strokeDasharray: `${pt / 55} ${pt / 85}`,
                    opacity: 0.85
                  }
                ),
                ee
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `capa-piezas${Gt ? " girada" : ""}`,
              style: To,
              children: A.map((R) => {
                const W = e.find((te) => te.id === R.asset_id), X = (I == null ? void 0 : I.uid) === R.uid ? I : null, ve = ((X ? X.x : R.x) - Et) / (pt || 1) * 100, Ae = ((X ? X.y : R.y) - bt) / (fn || 1) * 100;
                return /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `item-box ${R.pinned ? "pinned" : ""} ${(E == null ? void 0 : E.uid) === R.uid ? "dragging" : ""}${_.includes(R.asset_id) ? " sel" : ""}`,
                    style: {
                      left: `${ve}%`,
                      top: `${Ae}%`,
                      width: `${R.w / (pt || 1) * 100}%`,
                      height: `${R.h / (fn || 1) * 100}%`
                    },
                    title: (W == null ? void 0 : W.name) ?? "",
                    onMouseDown: (te) => M(te, R),
                    onContextMenu: (te) => {
                      te.preventDefault(), H(R.uid);
                    },
                    "data-testid": `item-${R.uid}`,
                    onClick: (te) => {
                      te.stopPropagation(), te.currentTarget.scrollIntoView({
                        block: "center",
                        inline: "center",
                        behavior: "smooth"
                      }), window.dispatchEvent(new CustomEvent(
                        "crycat:seleccion",
                        { detail: R.asset_id }
                      )), V == null || V(
                        R.asset_id,
                        te.ctrlKey || te.metaKey || te.shiftKey
                      );
                    },
                    children: R.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
                  },
                  R.uid
                );
              })
            }
          )
        ]
      },
      N
    );
  }, rp = C !== null ? [C] : Array.from({ length: et }, (N, A) => A);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    et > 1 && /* @__PURE__ */ o.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: d("No cabe en una página: {n} páginas", { n: et }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${Rn ? "modo-final" : "modo-ninguno"}`,
          "data-tip": d(Rn ? "Quitar el contorno (solo vista previa)" : "Ver el contorno de corte: la línea más exterior, lo que se corta de verdad"),
          onClick: () => {
            const N = !Rn;
            a((A) => ({
              ...A,
              contornoModo: N ? "final" : "ninguno",
              verBordes: N
            })), i({
              contorno_modo: N ? "final" : "ninguno",
              ver_contornos: N
            });
          },
          children: [
            /* @__PURE__ */ o.jsx(ia, { size: 16 }),
            " ",
            d("Contorno")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          className: r.guidesVisible ? "primary" : "",
          "data-tip": d("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((N) => ({ ...N, guidesVisible: !N.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(is, { size: 16 }),
            " ",
            d("Marcas")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-ojo",
          "data-tip": d("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
          onClick: () => a((N) => {
            const A = [
              "blanco",
              "transparente",
              "fosforito",
              "rosa",
              "negro"
            ], R = N.fondo ?? (N.eyeFosforito ? "fosforito" : N.eyeTransparent ? "transparente" : "blanco"), W = A[(A.indexOf(R) + 1) % A.length];
            return {
              ...N,
              fondo: W,
              eyeTransparent: W === "transparente",
              eyeFosforito: W === "fosforito"
            };
          }),
          children: [
            r.eyeFosforito ? /* @__PURE__ */ o.jsx(Bf, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ o.jsx(wc, { size: 16 }) : /* @__PURE__ */ o.jsx(wc, { size: 16 }),
            r.eyeFosforito ? d("Fosforito") : r.eyeTransparent ? d("Transparente") : d("Blanco")
          ]
        }
      ),
      (et > 1 && C === null || C !== null) && /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        et > 1 && C === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((N) => ({ ...N, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((N) => ({ ...N, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((N) => ({ ...N, viewMode: 4 })), children: "4" })
        ] }),
        C !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => L(null), title: d("Volver a la cuadrícula (Esc)"), children: d(" Ver todo") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Gt ? "primary" : "",
          "data-tip": d("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const N = !window.__crycatAncho;
            window.__crycatAncho = N, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: N }
            ));
          },
          children: [
            /* @__PURE__ */ o.jsx(Uf, { size: 16 }),
            d(Gt ? "Vertical" : "Horizontal")
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
            "data-tip": d("Deshacer (Ctrl+Z)"),
            onClick: () => m(),
            disabled: !k,
            children: /* @__PURE__ */ o.jsx(os, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": d("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => x(),
            disabled: !h,
            children: /* @__PURE__ */ o.jsx(Gf, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "vf-centro", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "btn-optimizar-flotante",
          "data-testid": "btn-recalcular",
          "data-tip": d("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(Mn ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "estrella", children: "✦" }),
            d("Optimizar"),
            /* @__PURE__ */ o.jsx("span", { className: "estrella", children: "✦" })
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": d("Acercar (+)"),
            onClick: () => v((N) => Math.min(12, N * 1.08)),
            children: /* @__PURE__ */ o.jsx(Hf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": d("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: gr,
            children: /* @__PURE__ */ o.jsx(Vf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": d("Alejar (−)"),
            onClick: () => v((N) => Math.max(0.05, N / 1.08)),
            children: /* @__PURE__ */ o.jsx(Wf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(f * 100),
          "%"
        ] })
      ] })
    ] }),
    u ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: Q || st || F.previewUrlSinBordes(
              u.id,
              u.rev ?? 0
            ),
            alt: u.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: u && ae.filter((N) => !N.principal).map((N, A) => {
          const [R, W, X, ve] = N.bbox, Ae = u.w_px || 1, te = u.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${Pe.has(N.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: d("Trozo de {px} px — clic para {accion}", {
                px: N.area_px,
                accion: Pe.has(N.id) ? d("conservar") : d("quitar")
              }),
              style: {
                left: `${R / Ae * 100}%`,
                top: `${W / te * 100}%`,
                width: `${(X - R) / Ae * 100}%`,
                height: `${(ve - W) / te * 100}%`
              },
              onClick: () => Ut(N.id)
            },
            N.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ o.jsxs("span", { className: "row", style: { gap: 6, alignItems: "center" }, children: [
            /* @__PURE__ */ o.jsx("span", { className: "hint", children: d("Borde para unir") }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-menos",
                onClick: () => T((N) => Math.max(0.5, Math.round((N - 0.5) * 2) / 2)),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": "union-mm", children: [
              re,
              " mm"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-mas",
                onClick: () => T((N) => Math.min(20, Math.round((N + 0.5) * 2) / 2)),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-ver-quitados",
              title: d("Ver cómo queda SIN los trozos marcados (solo vista previa)"),
              className: je === "quitar" ? "primary" : "",
              onClick: async () => {
                if (u) {
                  if (je === "quitar") {
                    lt("normal"), me("");
                    return;
                  }
                  try {
                    const N = await F.contornoPreview(
                      u.id,
                      { quitar: Array.from(Pe) }
                    );
                    me(N.png), lt("quitar");
                  } catch {
                  }
                }
              },
              children: d("Ver sin marcados")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-ver-unido",
              title: d("Ver cómo queda al UNIR todo con el borde actual (solo vista previa)"),
              className: je === "unir" ? "primary" : "",
              onClick: async () => {
                if (u) {
                  if (je === "unir") {
                    lt("normal"), me("");
                    return;
                  }
                  try {
                    const N = await F.contornoPreview(
                      u.id,
                      { unir: re }
                    );
                    me(N.png), lt("unir");
                  } catch {
                  }
                }
              },
              children: d("Ver unido")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "primary",
              "data-testid": "btn-unir-contorno",
              title: d("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: re }),
              onClick: async () => {
                u && (await F.patchAsset(u.id, {
                  offset_mm: re,
                  offset_modo: "unir_curvo"
                }), await (g == null ? void 0 : g()));
              },
              children: d("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: hr,
              children: d(
                "Quitar marcados ({n})",
                { n: Pe.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: d("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: Ge,
        className: `canvas ${E ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: mr,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${S.x}px, ${S.y}px) scale(${f})` },
            children: [
              et === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: d("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${C !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: rp.map(np)
                }
              )
            ]
          }
        )
      }
    ),
    u ? /* @__PURE__ */ o.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: hr,
          children: d("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => g == null ? void 0 : g(),
          children: d("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Pn,
          value: r.saveName,
          onChange: (N) => a((A) => ({ ...A, saveName: N.target.value }))
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: d("Abrir la carpeta de guardado en el explorador"),
            "aria-label": d("Abrir carpeta de guardado"),
            onClick: () => F.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(ra, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: Zd, children: d("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: ep, children: d("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Jd,
            disabled: et === 0,
            children: d("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Wd,
      {
        open: U,
        initial: n.carpeta_export,
        onClose: () => ne(!1),
        onPick: tp
      }
    ),
    /* @__PURE__ */ o.jsx(
      ih,
      {
        open: !!He,
        files: (He == null ? void 0 : He.files) ?? [],
        folder: (He == null ? void 0 : He.folder) ?? "",
        preview: He == null ? void 0 : He.preview,
        error: He == null ? void 0 : He.error,
        onOpenFolder: (N) => void F.fsOpen(N).catch(() => {
        }),
        onClose: () => Vt(null)
      }
    )
  ] });
}
function lh({ settings: e, saveSettings: t }) {
  const n = Ze(), r = e.usar_minis, a = e.modo === "experto", i = {
    90: "libre",
    libre: "no",
    no: "90"
  }, s = {
    90: "90°",
    libre: n("libre"),
    no: n("fijo")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "acciones-panel", children: /* @__PURE__ */ o.jsxs("div", { className: "acciones-rapidas", children: [
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
          /* @__PURE__ */ o.jsx(lr, { size: 16 }),
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
          /* @__PURE__ */ o.jsx(aa, { size: 16 }),
          " ",
          n("Auto optimizar")
        ]
      }
    ),
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
          /* @__PURE__ */ o.jsx(Vd, { size: 16 }),
          " ",
          s[e.rotacion] ?? "90°"
        ]
      }
    )
  ] }) });
}
const oi = [
  {
    clave: "silueta",
    nombre: "Silueta",
    desc: "Forma real, cualquier ángulo",
    Icono: th,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: nh,
    forma: "rectangulos"
  }
];
function ch({ settings: e, saveSettings: t }) {
  var g;
  const n = Ze(), [r, a] = y.useState(
    {}
  ), [i, s] = y.useState("");
  y.useEffect(() => {
    F.modos().then((m) => a(m.modos ?? {})).catch(() => {
    });
  }, []);
  const c = e.modo_forma ?? "siluetas", l = ((g = oi.find((m) => m.forma === c)) == null ? void 0 : g.clave) ?? "silueta", u = async (m) => {
    var k;
    const x = r[m];
    x && (await t(x), s(n("Modo «{n}» aplicado", {
      n: n(((k = oi.find((h) => h.clave === m)) == null ? void 0 : k.nombre) ?? m)
    })));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "modos-seg",
        role: "tablist",
        title: n("Modo de empaquetado: elige UNO"),
        children: oi.map((m) => /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": l === m.clave,
            "data-testid": `modo-${m.clave}`,
            className: `modo-btn${l === m.clave ? " on" : ""}`,
            title: n("Modo {n}: {d}", { n: n(m.nombre), d: n(m.desc) }),
            onClick: () => u(m.clave),
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
function uh({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: i, modo: s = "mm" }) {
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
        onChange: (u) => {
          const g = Number(u.target.value);
          Number.isFinite(g) && g > 0 && r(g);
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
function dh({ valor: e, onValor: t, min: n, max: r, step: a, testid: i, title: s }) {
  const [c, l] = y.useState(String(e)), u = y.useRef(!1);
  return y.useEffect(() => {
    u.current || l(String(e));
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
        u.current = !0;
      },
      onBlur: () => {
        u.current = !1, l(String(e));
      },
      onChange: (g) => {
        l(g.target.value);
        const m = Number(g.target.value);
        g.target.value !== "" && Number.isFinite(m) && t(m);
      }
    }
  );
}
const ph = {
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
function Pa(e) {
  return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function mh(e, t) {
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
function Cc(e, t) {
  if (!e) return 0;
  if (t.includes(e)) return 3;
  const n = t.split(/[^a-z0-9]+/).filter(Boolean);
  for (const r of n) {
    if (r.startsWith(e)) return 2;
    if (e.length >= 4 && mh(r, e) <= 2) return 1;
  }
  for (const [r, a] of Object.entries(ph))
    if (r.includes(e) || e.includes(r)) {
      for (const i of a) if (t.includes(i)) return 1;
    }
  return 0;
}
function zt({ id: e, title: t, open: n, toggle: r, children: a, icon: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      i && /* @__PURE__ */ o.jsx("span", { className: "sect-icono", children: i }),
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Sc(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const fh = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, hh = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function gh({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ze(), [a, i] = y.useState(!0), [s, c] = y.useState({
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
  }), [l, u] = y.useState(!1), g = (j) => s[j], [m, x] = y.useState(""), k = [
    ["general", /* @__PURE__ */ o.jsx(Dr, { size: 15 }), r("General"), !0],
    ["minis", /* @__PURE__ */ o.jsx(lr, { size: 15 }), r("Minis"), !0],
    ["optimizacion", /* @__PURE__ */ o.jsx(aa, { size: 15 }), r("Optim."), !1],
    ["imagen", /* @__PURE__ */ o.jsx(oa, { size: 15 }), r("Imagen"), !1],
    ["offset", /* @__PURE__ */ o.jsx(ia, { size: 15 }), r("Borde"), !0],
    ["corte", /* @__PURE__ */ o.jsx(jc, { size: 15 }), r("Corte"), !1],
    ["visualizacion", /* @__PURE__ */ o.jsx(is, { size: 15 }), r("Vista"), !0],
    ["historial", /* @__PURE__ */ o.jsx(os, { size: 15 }), r("Historial"), !1],
    ["extras", /* @__PURE__ */ o.jsx(as, { size: 15 }), r("Extras"), !0]
  ], h = (j, I = !1, O = !1) => {
    c((U) => {
      const ne = { ...U };
      return Object.keys(ne).forEach((re) => {
        ne[re] = re === j ? I ? !0 : !U[re] : !1;
      }), ne;
    }), O && window.setTimeout(() => {
      var U;
      (U = document.querySelector(`[data-testid="sect-${j}"]`)) == null || U.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 130);
  }, [_, V] = y.useState([]);
  y.useEffect(() => {
    const j = Pa(m.trim());
    if (j.length < 2) {
      V([]);
      return;
    }
    const I = document.querySelector(".settings-panel"), O = [];
    for (const U of Array.from((I == null ? void 0 : I.querySelectorAll(".sect")) ?? [])) {
      const ne = (U.getAttribute("data-testid") || "").replace("sect-", "");
      Array.from(U.querySelectorAll(".ctl")).some((T) => Cc(j, Pa(T.textContent || "")) > 0) && O.push(ne);
    }
    V(O);
  }, [m]);
  const d = () => {
    const j = Pa(m.trim());
    if (!j) return;
    const I = document.querySelector(".settings-panel");
    for (const O of Array.from((I == null ? void 0 : I.querySelectorAll(".ctl")) ?? [])) {
      if (Cc(j, Pa(O.textContent || "")) <= 0) continue;
      const U = O.closest(".sect"), ne = ((U == null ? void 0 : U.getAttribute("data-testid")) || "").replace("sect-", "");
      ne && h(ne, !0);
      const re = O.querySelector("input, select, textarea"), T = re == null ? void 0 : re.getAttribute("data-testid");
      T && window.setTimeout(() => {
        const D = document.querySelector(`[data-testid="${T}"]`);
        D == null || D.scrollIntoView({ block: "center", behavior: "smooth" }), D == null || D.classList.add("resalta"), window.setTimeout(() => D == null ? void 0 : D.classList.remove("resalta"), 2400);
      }, 150);
      return;
    }
  }, p = y.useMemo(() => {
    const j = (n ?? []).filter((O) => O.mini_enabled);
    return (j.length ? j : n ?? []).slice().sort((O, U) => Math.min(U.w_mm, U.h_mm) - Math.min(O.w_mm, O.h_mm))[0] ?? null;
  }, [n]), f = p ? Math.min(p.w_mm, p.h_mm) : 0, v = e.modo === "experto", S = ({ children: j }) => v ? /* @__PURE__ */ o.jsx(o.Fragment, { children: j }) : null, b = (j) => c((I) => ({ ...I, [j]: !I[j] })), C = (j) => t(j), L = y.useRef(null), q = ({ titulo: j, children: I }) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "ctl-grupo", children: r(j) }),
    I
  ] }), w = (j, I, O, U, ne = 1, re = "", T, D) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...D ? { "data-tip": r(D) } : {}, children: r(j) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        dh,
        {
          valor: Number(e[I]) || 0,
          min: O,
          max: U,
          step: ne,
          testid: `set-${I}`,
          title: D ? r(D) : void 0,
          onValor: (G) => C({ [I]: G })
        }
      ),
      re && /* @__PURE__ */ o.jsx("span", { className: "hint", children: re }),
      T
    ] })
  ] }), E = (j, I, O, U, ne) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...ne ? { "data-tip": r(ne) } : {}, children: r(j) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${I}`,
        value: String(e[I]),
        onChange: (re) => C({ [I]: re.target.value }),
        children: O.map(([re, T]) => /* @__PURE__ */ o.jsx("option", { value: re, children: r(T) }, re))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ o.jsx(ch, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsx(lh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsxs("div", { className: "tabs-ajustes", "data-testid": "rail-ajustes", children: [
      /* @__PURE__ */ o.jsx("div", { className: "tabs-lista", children: k.filter(([, , , j]) => v || j).map(([j, I, O]) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": `rail-${j}`,
          title: O,
          className: `${s[j] ? "on" : ""}${_.includes(j) ? " coincide" : ""}`,
          onClick: () => h(j, !0, !0),
          children: [
            I,
            /* @__PURE__ */ o.jsx("span", { children: O })
          ]
        },
        j
      )) }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: `busca-ajustes${m ? " con-texto" : ""}`,
          "data-testid": "busca-ajustes",
          value: m,
          placeholder: r("Buscar…"),
          title: r("Busca parámetros (admite erratas y sinónimos): p. ej. «borde», «separacion», «tamano»"),
          onChange: (j) => x(j.target.value),
          onKeyDown: (j) => {
            j.key === "Enter" && d();
          }
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !v && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "general",
          title: r("General"),
          open: g("general"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(Dr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(q, { titulo: "Colocación", children: [
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
              E("Rotación admitida", "rotacion", [
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
            /* @__PURE__ */ o.jsxs(q, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ o.jsx(S, { children: w("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (j) => {
                      const I = j.target.value, O = Mf[I];
                      C(O ? { pagina: I, pagina_w: O[0], pagina_h: O[1] } : { pagina: I });
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
              /* @__PURE__ */ o.jsx(S, { children: e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (j) => C({ pagina_w: Number(j.target.value) })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (j) => C({ pagina_h: Number(j.target.value) })
                    }
                  )
                ] })
              ] }) }),
              E("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ])
            ] }),
            /* @__PURE__ */ o.jsx(q, { titulo: "Referencia", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (j) => C({ marcas_delimitar: j.target.checked })
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
        zt,
        {
          id: "minis",
          title: r("Minis"),
          open: g("minis"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(lr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ o.jsxs(q, { titulo: "Tamaños", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => C({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => C({ mini_usar_lista: !1 }),
                    children: r("Automático (mínimo + %)")
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
              )
            ] }),
            /* @__PURE__ */ o.jsxs(q, { titulo: "Modo rata", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-rata-activo",
                      checked: e.rata_activo === !0,
                      onChange: (j) => C({ rata_activo: j.target.checked })
                    }
                  ),
                  r("Modo rata")
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Coloca copias EXTRA de los elementos marcados con la rata: solo para IMPRIMIR (no se guardan en el PNG normal), sin borde, en los márgenes de la hoja, separadas de las piezas y evitando las marcas. El tamaño máximo lo pone el hueco libre.") })
              ] }),
              e.rata_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                w("Separación de las piezas", "rata_margen_mm", 0, 30, 0.5, "mm"),
                w("Tamaño mínimo", "rata_min_mm", 2, 100, 0.5, "mm")
              ] })
            ] }),
            /* @__PURE__ */ o.jsxs(q, { titulo: "Comportamiento", children: [
              /* @__PURE__ */ o.jsxs(S, { children: [
                E("Rotaciones admitidas", "mini_rotacion", [
                  ["no", "No girar"],
                  ["90", "Giros de 0º / 90º / 180º / 270º"],
                  ["libre", "Cualquier ángulo"]
                ]),
                E("Selección de tamaños", "mini_tamanos", [
                  ["iguales", "Priorizar que sean iguales"],
                  ["grandes", "Priorizar grandes"]
                ]),
                E("Borde de los minis", "mini_borde_modo", [
                  ["proporcional", "Proporcional (se reduce con el mini)"],
                  ["igual", "Mantener el mismo borde (mm del original)"],
                  ["sin", "Sin borde"]
                ], void 0, "Qué hacer con el borde de cada mini al reducirlo")
              ] }),
              e.mini_usar_lista && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaños deseados") }),
                /* @__PURE__ */ o.jsxs("div", { className: "seg", style: { maxWidth: 260 }, children: [
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-mm",
                      className: (e.mini_lista_modo ?? "mm") === "mm" ? "on" : "",
                      onClick: () => C({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => C({ mini_lista_modo: "pct" }),
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
                      onChange: (j) => C({ mini_lista_medida: j.target.value }),
                      children: [
                        /* @__PURE__ */ o.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") }),
                        /* @__PURE__ */ o.jsx("option", { value: "menor", children: r("Lado menor") }),
                        /* @__PURE__ */ o.jsx("option", { value: "mayor", children: r("Lado mayor") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((j, I) => /* @__PURE__ */ o.jsx(
                    uh,
                    {
                      i: I,
                      valor: j,
                      refBase: f,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (O) => {
                        const U = [...e.mini_tamanos_lista ?? []];
                        U[I] = O, C({ mini_tamanos_lista: U });
                      },
                      onQuitar: () => C({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (O, U) => U !== I
                        )
                      })
                    },
                    I
                  )),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => C({
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
            ] })
          ]
        }
      ),
      v && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: g("optimizacion"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(aa, { size: 15 }),
          children: [
            E("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            E("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ o.jsxs(S, { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (j) => C({ opt_tiempo_auto: j.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: fh[e.opt_metodo] ?? 8,
                  m: r(hh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : w("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      v && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: g("imagen"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(oa, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(q, { titulo: "Impresión", children: [
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
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
              E("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ o.jsxs(S, { children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (j) => C({ simular_impresion: j.target.checked })
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
                        onChange: (j) => C({ sim_cmyk: j.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  w("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  w("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  w("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              E("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(q, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (j) => C({ chequear_lineas: j.target.checked })
                  }
                ),
                r("Comprobación de líneas anómalas")
              ] }) }),
              w(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              E("Lienzo del archivo final", "lienzo", [
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
                      onClick: () => u(!0),
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
        zt,
        {
          id: "offset",
          title: r("Borde"),
          open: g("offset"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(ia, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (j) => C({ offset_activo: j.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
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
              E("Tipo de borde", "offset_modo", [
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
                      onChange: (j) => C({ offset_color: j.target.value })
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
      v && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: g("corte"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(jc, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: Sc(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: yc[e.maquina] ?? "Cricut Maker 3" }
              ),
              [yc[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            w("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            w("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            w("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            w("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      v && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: g("historial"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(os, { size: 15 }),
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
                  onChange: (j) => C({ historial: j.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Activar historial") })
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
                    onChange: (j) => C({ hist_tamano: j.target.checked })
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
                    onChange: (j) => C({ hist_copias: j.target.checked })
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
                    onChange: (j) => C({ hist_borde: j.target.checked })
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
                    onChange: (j) => C({ hist_minis: j.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: g("visualizacion"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(is, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: ns.map((j) => /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === j.key ? "active" : ""}`,
                  "data-testid": `tema-${j.key}`,
                  onClick: () => t({ tema: j.key }),
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: j.colors.accent } }),
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: j.colors.accent2 } }),
                    j.label
                  ]
                },
                j.key
              )) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (j) => t({ ver_guias: j.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx("img", { src: F.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var j;
                  return (j = L.current) == null ? void 0 : j.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ref: L,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (j) => {
                      var O;
                      const I = (O = j.target.files) == null ? void 0 : O[0];
                      I && F.setIcon(I).then(() => {
                        window.location.reload();
                      }), j.target.value = "";
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
        zt,
        {
          id: "extras",
          title: r("Extras"),
          open: g("extras"),
          toggle: b,
          icon: /* @__PURE__ */ o.jsx(as, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx(q, { titulo: "Sonido", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => C({ mute: !e.mute }),
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
                    onChange: (j) => C({ volumen: Number(j.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsxs(q, { titulo: "Pikmin", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (j) => C({ pikmin_activo: j.target.checked })
                  }
                ),
                r("Mostrar Pikmin de vez en cuando")
              ] }) }),
              w("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (j) => C({ pikmin_sonido: j.target.checked })
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
                    onChange: (j) => C({ pikmin_sonido_morir: j.target.checked })
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
                    onChange: (j) => t({ comprobar_versiones: j.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: Sc(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Wd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => u(!1),
        onPick: (j) => t({ carpeta_export: j })
      }
    )
  ] });
}
function vh({ ver: e, onCerrar: t }) {
  const n = Ze(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", i = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = y.useRef((e == null ? void 0 : e.actual) ?? ""), [c, l] = y.useState(!1), u = a === "error", g = a === "reiniciando";
  return y.useEffect(() => {
    if (!g) return;
    l(!0);
    let m = !0;
    const x = window.setInterval(async () => {
      try {
        const k = await F.version();
        if (!m) return;
        k.actual && s.current && k.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      m = !1, window.clearInterval(x);
    };
  }, [g]), /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ o.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ o.jsx("div", { className: `dialogo-icono${u ? " error" : ""}`, children: u ? "!" : g ? /* @__PURE__ */ o.jsx(Xf, { size: 26 }) : /* @__PURE__ */ o.jsx(Hd, { size: 26 }) }),
    /* @__PURE__ */ o.jsx("h3", { children: n(u ? "No se pudo actualizar" : g ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
    !u && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "progreso-act", "data-testid": "progreso-actualizacion", children: /* @__PURE__ */ o.jsx(
        "div",
        {
          className: i == null ? "indeterminado" : "",
          style: { width: i == null ? "100%" : `${Math.max(4, i)}%` }
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "fase", "data-testid": "fase-actualizacion", children: [
        n((r == null ? void 0 : r.mensaje) || "Preparando la actualización…"),
        i != null && !g ? ` · ${i}%` : ""
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: n("Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.") }),
      c && /* @__PURE__ */ o.jsx("div", { className: "fase suave", "data-testid": "recarga-aviso", children: n("La página se recargará sola cuando el motor nuevo esté listo…") })
    ] }),
    u && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: (r == null ? void 0 : r.mensaje) || n("Error desconocido") }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "cerrar-actualizacion", onClick: t, children: n("Cerrar") })
    ] })
  ] }) });
}
function ii(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function yh({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: i = 0.5,
  mute: s = !1,
  onVolumen: c,
  onMute: l,
  onIdioma: u,
  onEasterEgg: g,
  onAyuda: m,
  onReportar: x,
  modoRata: k = !1
}) {
  var le, je, lt;
  const h = Ze(), _ = ol(), [V, d] = y.useState([]), [p, f] = y.useState(0), [v, S] = y.useState(null), [b, C] = y.useState(!1), [L, q] = y.useState(""), [w, E] = y.useState(!1), j = y.useRef(!1), I = y.useRef([]);
  y.useEffect(() => {
    fetch("/api/funmsgs").then((Q) => Q.ok ? Q.json() : { msgs: [] }).then((Q) => d(Q.msgs ?? [])).catch(() => {
    });
  }, []), y.useEffect(() => {
    let Q = !0;
    return F.version().then((me) => {
      Q && (S(me), !me.comprobado && !j.current && (j.current = !0, F.checkVersion().then((Pe) => Q && S(Pe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      Q = !1;
    };
  }, []);
  const O = ((le = v == null ? void 0 : v.actualizacion) == null ? void 0 : le.estado) === "descargando" || ((je = v == null ? void 0 : v.actualizacion) == null ? void 0 : je.estado) === "instalando" || ((lt = v == null ? void 0 : v.actualizacion) == null ? void 0 : lt.estado) === "reiniciando";
  y.useEffect(() => {
    if (!O) return;
    const Q = setInterval(() => {
      F.version().then(S).catch(() => {
      });
    }, 700);
    return () => clearInterval(Q);
  }, [O]);
  const U = a || !!(e && !e.done);
  y.useEffect(() => {
    if (!U) return;
    const Q = setInterval(() => f((me) => me + 1), 1200);
    return () => clearInterval(Q);
  }, [U]);
  const ne = V.length ? V : [
    h("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], re = y.useMemo(() => {
    if (L) return L;
    if (O) {
      const Q = v == null ? void 0 : v.actualizacion;
      if ((Q == null ? void 0 : Q.estado) === "instalando") return h("Instalando y reiniciando…");
      const me = (Q == null ? void 0 : Q.progreso) != null ? Math.round(Q.progreso) : null;
      return me != null ? h("Descargando… {p}%", { p: me }) : (Q == null ? void 0 : Q.mensaje) || h("Descargando actualización…");
    }
    return U ? ne[p % ne.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? h("Listo") : h("Listo para empezar");
  }, [L, O, U, e, ne, p, n, h, v]), T = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), D = U && !e, G = y.useMemo(() => {
    const Q = e == null ? void 0 : e.eta_s;
    return !U || Q === void 0 || Q === null || Q <= 0.5 ? "" : (e == null || e.tope_s, h(" · ~{x} restante", { x: ii(Q) }));
  }, [e == null ? void 0 : e.eta_s, U, h]), Y = y.useMemo(() => !r || !r.segundos ? "" : ii(r.segundos), [r]), P = async () => {
    C(!0), q("");
    try {
      const Q = await F.checkVersion();
      S(Q), Q.error ? q(h("Sin conexión")) : Q.hay_nueva || q(h("Estás en la última versión"));
    } catch {
      q(h("Sin conexión"));
    } finally {
      C(!1);
    }
  }, ae = async () => {
    q("");
    try {
      const Q = await F.updateVersion();
      Q.ok ? E(!0) : Q.modo === "dev" && Q.url ? (q(h("Modo desarrollo: se actualiza con git")), await F.openReleases().catch(() => {
      })) : q(Q.mensaje || h("No se pudo actualizar")), F.version().then(S).catch(() => {
      });
    } catch {
      q(h("No se pudo actualizar"));
    }
  }, st = !!(v != null && v.hay_nueva && !U && !O) ? h("Nueva versión {v} disponible", { v: (v == null ? void 0 : v.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    w && /* @__PURE__ */ o.jsx(
      vh,
      {
        ver: v,
        onCerrar: () => E(!1)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: k ? vt("/cryrat.png") : F.iconUrl(),
            alt: k ? "CryRat" : "CryCat",
            "data-testid": "brand-icon",
            title: k ? "CryRat" : h("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const Q = Date.now();
              I.current = [...I.current, Q].filter((me) => Q - me < 2500), I.current.length >= 5 && (I.current = [], q(h("¡Fiesta Pikmin!")), window.setTimeout(() => q(""), 4e3), g == null || g());
            }
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "nombre", children: k ? "CryRat" : "CryCat" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !U && (() => {
          const Q = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), me = n.placed || 1, Pe = Math.min(80, Math.max(
            30,
            48 + 22 * Q - Math.min(18, me * 0.08)
          )), ct = n.efficiency * 100, Ge = ct >= Pe ? "buena" : ct >= Pe * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ o.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": h("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.placed }),
              /* @__PURE__ */ o.jsx("span", { children: h("imágenes") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": h("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.pages }),
              /* @__PURE__ */ o.jsx("span", { children: n.pages > 1 ? h("páginas") : h("página") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": h("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.minis }),
              /* @__PURE__ */ o.jsx("span", { children: h("minis") })
            ] }),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${Ge}`,
                "data-testid": "eficiencia-card",
                "data-nivel": Ge,
                "data-tip": h("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: me, e: Math.round(Pe) }),
                children: [
                  /* @__PURE__ */ o.jsxs("b", { children: [
                    Math.round(ct),
                    "%"
                  ] }),
                  /* @__PURE__ */ o.jsx("span", { children: h("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !U) && /* @__PURE__ */ o.jsx("span", { className: "msg", children: re }),
        U && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `progress${D ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, T)}%` } })
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? h("Tiempo máximo de este cálculo: {y}", { y: ii(e.tope_s) }) : void 0,
              children: [
                T,
                "%",
                G
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: vt(k ? "/cryrat.gif" : "/piensa.gif"),
              alt: "",
              title: h("Pensando…"),
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
            "data-tip": h("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
            onClick: () => m == null ? void 0 : m(),
            children: [
              /* @__PURE__ */ o.jsx(Zf, { size: 15 }),
              " ",
              h("Cómo usar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "app-info reportar",
            "data-testid": "btn-reportar",
            "data-tip": h("Reportar un bug: abre un issue en GitHub ya rellenado"),
            onClick: () => x == null ? void 0 : x(),
            children: [
              /* @__PURE__ */ o.jsx(Gd, { size: 15 }),
              " ",
              h("Reportar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "app-info apoyar",
            "data-testid": "btn-apoyar",
            "data-tip": h("Apoyar el proyecto (PayPal)"),
            onClick: () => window.open(
              "https://paypal.me/Darkniel42",
              "_blank",
              "noopener"
            ),
            children: [
              /* @__PURE__ */ o.jsx(eh, { size: 15 }),
              " ",
              h("Apoyar")
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-repo",
            title: h("Abrir el repositorio del proyecto en una pestaña nueva"),
            onClick: () => window.open((v == null ? void 0 : v.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ o.jsx(Yf, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: h("Idioma"),
            onClick: () => u == null ? void 0 : u(_ === "es" ? "en" : "es"),
            children: _.toUpperCase()
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "span",
          {
            className: "version-chip",
            "data-testid": "version-chip",
            title: h("Versión actual"),
            children: [
              (v == null ? void 0 : v.hay_nueva) && !O && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: st || h("Hay una versión nueva"),
                  onClick: ae,
                  children: /* @__PURE__ */ o.jsx(Kf, { size: 14 })
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
                  title: h("Comprobar versiones"),
                  onClick: P,
                  disabled: b,
                  children: b ? "…" : /* @__PURE__ */ o.jsx(Jf, { size: 14 })
                }
              ),
              (v == null ? void 0 : v.hay_nueva) && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: h("Descargar e instalar la nueva versión"),
                  onClick: ae,
                  children: /* @__PURE__ */ o.jsx(Hd, { size: 14 })
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
            title: h(t ? "Backend conectado" : "Backend desconectado")
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "span",
          {
            className: "eta",
            "data-testid": "corte-estimado",
            title: h("Tiempo estimado de corte (Cricut Maker 5)"),
            children: [
              h("Corte"),
              " ",
              Y || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const xh = [
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
], wh = "/pikmin_bloom/", _c = "/pikmin/alma.png", jh = "/sonidos/pikmin.mp3", kh = "/sonidos/pikmin_morir.mp3";
function Ch(e) {
  const [t, n] = y.useState(xh), [r, a] = y.useState([]);
  return y.useEffect(() => {
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
      a(s.slice(0, 60).map((c) => vt(wh + c)));
    }).catch(() => {
    });
  }, []), y.useMemo(
    () => e && e.length ? [...e, ...r].map(vt) : [...t, ...r].map(vt),
    [e, t, r]
  );
}
function Sh({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: s = !1,
  minDelay: c,
  maxDelay: l,
  fuentes: u
}) {
  const g = Ch(u), [m, x] = y.useState([]), k = y.useRef(void 0), h = y.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), _ = y.useRef(s);
  _.current = s;
  const V = Math.max(5e3, t * 6e4), d = (S) => {
    if (!(!n || i))
      try {
        const b = new Audio(vt(S ? kh : jh));
        b.volume = Math.min(1, Math.max(0, a)), b.play().catch(() => {
        });
      } catch {
      }
  }, p = () => {
    const S = r && Math.random() < 0.1, b = S ? vt(_c) : g[Math.floor(Math.random() * g.length)] ?? vt(_c);
    x((C) => [...C, {
      src: b,
      left: 3 + Math.random() * 92,
      key: Date.now() + C.length,
      morir: S,
      estado: "paseando"
    }]), d(S);
  }, f = () => {
    if (!e) return;
    const S = c ?? Math.round(V * 0.5), b = l ?? Math.round(V * 1.5), C = S + Math.random() * Math.max(1, b - S);
    k.current = window.setTimeout(p, C);
  };
  y.useEffect(() => {
    e && s && p();
  }, [s]), y.useEffect(() => {
    if (!e) {
      window.clearTimeout(k.current), x([]);
      return;
    }
    return f(), () => window.clearTimeout(k.current);
  }, [e, t, n, r, a, i, g]), y.useEffect(() => {
    const S = () => {
      h.current = document.visibilityState === "hidden", !h.current && _.current && window.setTimeout(() => {
        x((b) => b.length ? (d(!1), b.map((C) => ({ ...C, estado: "festejando" }))) : b), window.setTimeout(() => {
          x([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, []);
  const v = (S) => {
    if (_.current && h.current) {
      x((b) => b.map((C) => C.key === S ? { ...C, estado: "quieto" } : C));
      return;
    }
    x((b) => b.filter((C) => C.key !== S)), f();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: m.map((S) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${S.estado}${S.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": S.estado,
      "data-morir": S.morir ? "1" : "0",
      style: { left: `${S.left}%` },
      onAnimationEnd: () => v(S.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: S.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => v(S.key)
        }
      )
    },
    S.key
  )) });
}
const Nc = "crycat_bienvenida_v2";
function _h() {
  const [e, t] = y.useState(!1);
  return y.useEffect(() => {
    try {
      localStorage.getItem(Nc) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Nc, "1");
    } catch {
    }
    t(!1);
  } };
}
function Nh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ze(), [a, i] = y.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ o.jsx(oa, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ o.jsx(Dr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ o.jsx(lr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ o.jsx(aa, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(kc, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], c = [
    [
      /* @__PURE__ */ o.jsx(oa, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ o.jsx(ia, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ o.jsx(lr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ o.jsx(aa, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ o.jsx(Vd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(Dr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(kc, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(Qf, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(as, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ o.jsx(Dr, { size: 18 }),
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
  ], u = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: u[a] }),
    a === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((g, m) => /* @__PURE__ */ o.jsx("li", { children: g }, m)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : c).map(([g, m, x], k) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: g }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: m }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: x })
      ] })
    ] }, k)) }),
    a === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ o.jsx(ra, { size: 15 }),
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
const Eh = "https://github.com/dhernandezgit/CryCat-Tool", bh = "daniel.hernandez@pixelabs.es", zh = [
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
function Ph({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const i = Ze(), [s, c] = y.useState(""), [l, u] = y.useState(""), [g, m] = y.useState(""), [x, k] = y.useState(!0), [h, _] = y.useState(!0), [V, d] = y.useState(!0), [p, f] = y.useState(!1);
  y.useEffect(() => {
    e && (F.version().then((E) => c(E.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const v = () => (globalThis.__crycatErrores ?? []).map(
    (j) => `- [${j.t}] ${j.msg} (${j.donde || "?"})`
  );
  if (!e) return null;
  const S = () => {
    var O, U;
    const E = navigator.userAgent, j = !!globalThis.__crycatBase, I = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${j ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${E}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((O = window.screen) == null ? void 0 : O.width) ?? "?"}x${((U = window.screen) == null ? void 0 : U.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && I.push(`- Elementos: ${a.pages} página(s)`), r && I.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), I.join(`
`);
  }, b = () => n ? [
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
  ].map((j) => `- ${j}: ${String(n[j])}`).join(`
`) : "", C = () => {
    const E = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    x && E.push("### Entorno", S(), ""), h && n && E.push("### Ajustes", b(), "");
    const j = v();
    return V && j.length && E.push("### Errores recogidos", j.join(`
`), ""), E.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), E.join(`
`);
  }, L = () => `[CryCat] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, q = () => {
    const E = `mailto:${bh}?` + new URLSearchParams({
      subject: L(),
      body: C().slice(0, 1800)
    }).toString();
    window.location.href = E, t();
  }, w = () => {
    const E = `${Eh}/issues/new?` + new URLSearchParams({
      title: L(),
      body: C(),
      labels: "bug"
    }).toString();
    window.open(E, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni login). También puedes copiarlo o abrirlo en GitHub si prefieres.") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: zh.map(([E, j]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${E}`,
        onClick: () => u((I) => (I ? I + `
` : "") + j),
        children: i(E)
      },
      E
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
          onChange: (E) => u(E.target.value)
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
          value: g,
          placeholder: i("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (E) => m(E.target.value)
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
          onChange: (E) => k(E.target.checked)
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
          checked: h,
          onChange: (E) => _(E.target.checked)
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
          checked: V,
          onChange: (E) => d(E.target.checked)
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

${g}

${C()}`
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
          onClick: w,
          children: i("GitHub")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "reportar-enviar",
          onClick: q,
          children: i("Enviar por email")
        }
      )
    ] })
  ] }) });
}
function Mh() {
  const [e, t] = y.useState([]), [n, r] = y.useState(null), [a, i] = y.useState(null), [s, c] = y.useState(null), [l, u] = y.useState(null), [g, m] = y.useState(null), [x, k] = y.useState(!0), [h, _] = y.useState(!1), [V, d] = y.useState(!1), [p, f] = y.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [v, S] = y.useState(33.3), [b, C] = y.useState(33.3), L = _h(), q = y.useRef(null), w = y.useRef(null);
  y.useEffect(() => {
    (async () => {
      try {
        const M = await F.getSettings();
        u(M.settings), xc(M.settings.tema), f((B) => ({
          ...B,
          guidesVisible: M.settings.ver_guias,
          eyeTransparent: M.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: M.settings.ver_contornos !== !1,
          contornoModo: M.settings.contorno_modo ?? "final"
        })), t((await F.listAssets()).map(na)), i(await F.result());
      } catch {
        k(!1);
      }
    })();
  }, []);
  const [E, j] = y.useState("");
  y.useEffect(() => {
    const M = (B) => j(String(B.detail || ""));
    return window.addEventListener("crycat:seleccion", M), () => window.removeEventListener("crycat:seleccion", M);
  }, []), y.useEffect(() => {
    const M = (B) => {
      const H = B.detail;
      S(H ? 19 : 33.3), C(H ? 62 : 33.3), f((ee) => ({ ...ee, hojaGirada: H }));
    };
    return window.addEventListener("crycat:disposicion", M), () => window.removeEventListener("crycat:disposicion", M);
  }, []), y.useEffect(() => {
    const M = setInterval(async () => {
      try {
        await F.health(), k(!0);
      } catch {
        k(!1);
      }
    }, 5e3);
    return () => clearInterval(M);
  }, []);
  const I = y.useRef(!0), O = y.useCallback(async () => {
    try {
      t((await F.listAssets()).map(na)), i(await F.result());
      try {
        c(await F.estimate());
      } catch {
      }
    } catch {
      k(!1);
    } finally {
      I.current = !1;
    }
  }, []), U = y.useCallback((M) => {
    w.current && window.clearInterval(w.current), w.current = window.setInterval(async () => {
      try {
        const B = await F.job(M);
        m(B), B.done && (window.clearInterval(w.current), w.current = null, await O(), B.status === "done" && window.setTimeout(() => m(null), 2500));
      } catch {
        window.clearInterval(w.current), w.current = null;
      }
    }, 300);
  }, []), ne = y.useCallback(async () => {
    d(!0), await new Promise((M) => setTimeout(M, 60));
    try {
      const M = await F.optimize();
      m(M), U(M.id);
    } catch {
      k(!1);
    } finally {
      d(!1);
    }
  }, [U]), re = y.useCallback(
    async (M) => {
      d(!0), await new Promise((B) => setTimeout(B, 60));
      try {
        const B = await F.optimize(M, !0);
        m(B), U(B.id);
      } catch {
        k(!1);
      } finally {
        d(!1);
      }
    },
    [U]
  ), T = y.useCallback(() => {
    l && l.auto_recalcular === !1 || (q.current && window.clearTimeout(q.current), q.current = window.setTimeout(ne, 400));
  }, [ne, l]), D = y.useRef(null);
  y.useEffect(() => {
    D.current = T;
  }, [T]), y.useEffect(() => {
    const M = (B) => {
      const H = B.detail;
      m((ee) => ({
        ...ee ?? {
          id: "web",
          status: "running",
          done: !1,
          message: "",
          progress: 0,
          pages: 0
        },
        progress: H.progress,
        pages: H.pages,
        eta_s: H.eta_s,
        tope_s: H.tope_s
      }));
    };
    return window.addEventListener("crycat:progreso", M), () => window.removeEventListener("crycat:progreso", M);
  }, []);
  const G = y.useRef(!1);
  y.useEffect(() => {
    if (!(!l || G.current)) {
      if (e.length > 0) {
        G.current = !0;
        return;
      }
      G.current = !0, F.crearDemo().then(async (M) => {
        M.ok && await O();
      }).catch(() => {
      });
    }
  }, [l, e.length, O]);
  const Y = y.useCallback(
    async (M) => {
      u((B) => B && { ...B, ...M }), M.tema && xc(M.tema);
      try {
        const B = await F.putSettings(M);
        if (B.job)
          m(B.job), U(B.job.id);
        else
          try {
            c(await F.estimate());
          } catch {
          }
      } catch {
        k(!1);
      }
    },
    [U]
  ), [P, ae] = y.useState([]), Ne = y.useCallback((M, B) => {
    ae((H) => B ? H.includes(M) ? H.filter((ee) => ee !== M) : [...H, M] : H.length === 1 && H[0] === M ? [] : [M]);
  }, []), st = y.useCallback(async (M, B) => {
    for (const H of M)
      await F.patchAsset(H, B).catch(() => {
      });
    await O();
  }, [O]), le = y.useRef([]), je = y.useRef([]), [lt, Q] = y.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), me = (l == null ? void 0 : l.historial) !== !1, Pe = (l == null ? void 0 : l.historial_max) ?? 40, ct = y.useRef(!1), Ge = y.useRef(""), Ft = y.useRef({ assets: [], result: null, settings: null }), qt = y.useCallback((M, B, H) => JSON.stringify({
    a: M.map((ee) => [
      ee.id,
      ee.scale_pct,
      ee.copies,
      ee.mini_enabled,
      ee.mini_quota,
      ee.offset_mm,
      ee.offset_modo,
      ee.offset_color,
      ee.simplificar
    ]),
    r: B ? [B.pages, B.placements.map((ee) => [
      ee.uid,
      ee.page,
      Math.round(ee.x * 100),
      Math.round(ee.y * 100),
      ee.angle,
      ee.pinned
    ])] : null,
    s: H ? [
      H.espacio_mm,
      H.margen_mm,
      H.rotacion,
      H.usar_minis,
      H.mini_min_mm,
      H.mini_tamanos,
      H.mini_usar_lista,
      H.mini_lista_modo,
      H.mini_lista_medida,
      H.mini_tamanos_lista,
      H.offset_activo,
      H.offset_mm,
      H.offset_modo,
      H.offset_color,
      H.modo_forma,
      H.separacion_px,
      H.marcas_delimitar,
      H.pagina,
      H.pagina_w,
      H.pagina_h,
      H.maquina,
      H.lienzo,
      H.color_formato
    ] : null
  }), []), Pn = () => Q({
    puedeDeshacer: le.current.length > 0,
    puedeRehacer: je.current.length > 0
  }), pr = y.useCallback(() => {
    const M = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && M.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && M.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && M.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && M.push("mini_enabled", "mini_quota"), M;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]);
  y.useCallback((M) => {
    const B = {};
    for (const H of pr()) B[H] = M[H];
    return B;
  }, [pr]);
  const et = y.useCallback(() => {
    me && (le.current = [
      ...le.current,
      { assets: e, result: a, settings: l }
    ].slice(-Pe), je.current = [], Ge.current = qt(e, a, l), Pn());
  }, [e, a, l, me, Pe, qt]);
  y.useEffect(() => {
    if (!me || I.current) return;
    const M = qt(e, a, l);
    if (ct.current) {
      Ge.current = M, ct.current = !1;
      return;
    }
    if (!Ge.current) {
      if (e.length === 0 && !a) return;
      Ge.current = M;
      return;
    }
    M !== Ge.current && (le.current = [...le.current, Ft.current].slice(-Pe), je.current = [], Ge.current = M, Pn());
  }, [e, a, l, me, Pe, qt]), y.useEffect(() => {
    Ft.current = { assets: e, result: a, settings: l };
  }, [e, a, l]);
  const Mn = y.useCallback(async (M) => {
    ct.current = !0, t(M.assets), M.settings && (u(M.settings), await F.putSettings(M.settings).catch(() => {
    }));
    for (const B of M.assets)
      await F.patchAsset(B.id, {
        scale_pct: B.scale_pct,
        copies: B.copies,
        mini_enabled: B.mini_enabled,
        mini_quota: B.mini_quota,
        offset_mm: B.offset_mm,
        offset_modo: B.offset_modo,
        offset_color: B.offset_color
      }).catch(() => {
      });
    if (M.result) {
      await F.restoreResult(M.result).catch(() => {
      }), i(M.result);
      try {
        c(await F.estimate());
      } catch {
      }
    } else
      await O();
    Pn();
  }, [O]), mr = y.useCallback(async () => {
    const M = le.current.pop();
    M && (je.current = [...je.current, { assets: e, result: a, settings: l }], await Mn(M));
  }, [e, a, Mn]), Bt = y.useCallback(async () => {
    const M = je.current.pop();
    M && (le.current = [...le.current, { assets: e, result: a, settings: l }], await Mn(M));
  }, [e, a, Mn]);
  y.useEffect(() => {
    const M = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const ee = B.target;
      if (ee && (ee.tagName === "INPUT" || ee.tagName === "TEXTAREA" || ee.tagName === "SELECT" || ee.isContentEditable)) return;
      const Ut = B.key.toLowerCase();
      Ut === "z" && !B.shiftKey ? (B.preventDefault(), mr()) : (Ut === "y" || Ut === "z" && B.shiftKey) && (B.preventDefault(), Bt());
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [mr, Bt]);
  const fr = y.useCallback(
    (M) => {
      const B = (ee) => {
        const hr = window.innerWidth, Ut = ee.clientX / hr * 100;
        M === "left" ? S(Math.min(45, Math.max(12, Ut))) : C(Math.min(60, Math.max(20, Ut - v)));
      }, H = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", H);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", H);
    },
    [v]
  );
  return y.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ o.jsx(If, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${v}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        oh,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await O(), T();
          },
          saveSettings: Y,
          onEditarContorno: (M) => r(M),
          onAntesDeCambiar: et,
          seleccion: P,
          onSeleccion: Ne,
          onBulk: st,
          verBordes: p.verBordes,
          contornoModo: p.contornoModo ?? "final",
          destacado: E
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => fr("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${b}%` }, children: /* @__PURE__ */ o.jsx(
        sh,
        {
          assets: e,
          result: a,
          settings: l,
          ui: p,
          setUi: f,
          saveSettings: Y,
          optimize: ne,
          onRefresh: O,
          onJob: (M) => {
            m(M), U(M.id);
          },
          onRecalc: re,
          editando: n,
          onFinEdicion: async () => {
            r(null), await O();
          },
          onDeshacer: mr,
          onRehacer: Bt,
          puedeDeshacer: lt.puedeDeshacer,
          puedeRehacer: lt.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => fr("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        gh,
        {
          settings: l,
          assets: e,
          saveSettings: Y
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      yh,
      {
        job: g,
        backendOk: x,
        result: a,
        estimate: s,
        optimizando: V,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (M) => Y({ volumen: M }),
        onMute: (M) => Y({ mute: M }),
        onIdioma: (M) => Y({ idioma: M }),
        modoRata: l.rata_activo === !0 || (Number(l.espacio_mm) || 0) < 0,
        onEasterEgg: () => Y({
          pikmin_activo: !0,
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: L.abrir,
        onReportar: () => _(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Sh,
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
      Nh,
      {
        open: L.visible,
        onClose: L.cerrar,
        onAbrirCarpeta: () => void F.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ph,
      {
        open: h,
        onClose: () => _(!1),
        settings: l,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: $f("es", "Cargando CryCat…") });
}
const Th = "1790763615160", Qd = document.getElementById("root"), si = [
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
], ss = 8, Ua = [];
globalThis.__crycatErrores = Ua;
const Yd = (e, t) => {
  Ua.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Ua.length > 12 && Ua.shift();
};
window.addEventListener("error", (e) => Yd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Yd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let ls;
function li(e, t = !1) {
  window.clearTimeout(ls);
  const n = qd().colors;
  if (Qd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + ss}</div>
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
  let r = Math.floor(Math.random() * si.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = si[r++ % si.length]);
  }, i = () => {
    a(), ls = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const ci = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${ss}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / ss * 100)}%`);
  }
};
let In = null, Kd = !1, Lh = 0;
const cs = /* @__PURE__ */ new Map();
function Xd(e) {
  return new Promise((t) => {
    const n = ++Lh;
    cs.set(n, t), In.postMessage({ ...e, id: n });
  });
}
const us = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Rh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Ah(e) {
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
    us(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Ih(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((g, m) => {
    s[m] = g;
  });
  let c = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [g, m] = await Ah(l);
    c = g, s["content-type"] = m;
  } else l instanceof Blob ? c = us(await l.arrayBuffer()) : typeof l == "string" && (c = us(new TextEncoder().encode(l).buffer));
  const u = await Xd({
    tipo: "api",
    method: e,
    path: i,
    headers: JSON.stringify(s),
    body: c
  });
  return u && u.error ? new Response("error: " + u.error, { status: 500 }) : new Response(Rh(u.body), {
    status: u.status || 200,
    headers: u.headers || { "content-type": "application/json" }
  });
}
function $h() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && Kd)
      try {
        return await Ih(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Dh() {
  try {
    if (li("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const t = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: t }).then(() => navigator.serviceWorker.ready),
          new Promise((n) => setTimeout(n, 6e3))
        ]);
      } catch {
      }
    const e = new URL(
      `worker-crycat.js?v=${Th}`,
      location.href
    ).href;
    In = new Worker(e, { type: "module" }), In.onmessage = (t) => {
      const n = t.data || {};
      if (n.tipo === "estado")
        ci(n.t, n.paso);
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
        const r = cs.get(n.id);
        cs.delete(n.id), r && r(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && li("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (r) => {
        r.data && r.data.tipo === "listo" && (In.removeEventListener("message", n), t());
      };
      In.addEventListener("message", n), In.postMessage({ tipo: "iniciar" });
    }), Kd = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const r = t.ports && t.ports[0];
      if (r)
        try {
          const a = await Xd({
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
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, $h();
    try {
      const t = qd().key;
      t && t !== "wiwi" && await fetch(kn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: t })
      });
    } catch {
    }
    ci("Optimizando la muestra inicial…", 7);
    try {
      const t = await fetch(kn() + "api/assets").then((n) => n.json());
      Array.isArray(t) && t.length === 0 && await fetch(kn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    ci("Abriendo la aplicación…", 8), window.clearTimeout(ls), Od(Qd).render(/* @__PURE__ */ o.jsx(Mh, {}));
  } catch (e) {
    li("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Dh();
