var jc = { exports: {} }, fo = {}, kc = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra = Symbol.for("react.element"), tp = Symbol.for("react.portal"), np = Symbol.for("react.fragment"), rp = Symbol.for("react.strict_mode"), ap = Symbol.for("react.profiler"), op = Symbol.for("react.provider"), ip = Symbol.for("react.context"), sp = Symbol.for("react.forward_ref"), lp = Symbol.for("react.suspense"), cp = Symbol.for("react.memo"), up = Symbol.for("react.lazy"), ol = Symbol.iterator;
function dp(e) {
  return e === null || typeof e != "object" ? null : (e = ol && e[ol] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Cc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Sc = Object.assign, _c = {};
function lr(e, t, n) {
  this.props = e, this.context = t, this.refs = _c, this.updater = n || Cc;
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nc() {
}
Nc.prototype = lr.prototype;
function ss(e, t, n) {
  this.props = e, this.context = t, this.refs = _c, this.updater = n || Cc;
}
var ls = ss.prototype = new Nc();
ls.constructor = ss;
Sc(ls, lr.prototype);
ls.isPureReactComponent = !0;
var il = Array.isArray, Ec = Object.prototype.hasOwnProperty, cs = { current: null }, bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r, a = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ec.call(t, r) && !bc.hasOwnProperty(r) && (a[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) a.children = n;
  else if (1 < c) {
    for (var l = Array(c), p = 0; p < c; p++) l[p] = arguments[p + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in c = e.defaultProps, c) a[r] === void 0 && (a[r] = c[r]);
  return { $$typeof: ra, type: e, key: i, ref: s, props: a, _owner: cs.current };
}
function pp(e, t) {
  return { $$typeof: ra, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function us(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ra;
}
function fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var sl = /\/+/g;
function To(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fp("" + e.key) : t.toString(36);
}
function Na(e, t, n, r, a) {
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
        case ra:
        case tp:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + To(s, 0) : r, il(a) ? (n = "", e != null && (n = e.replace(sl, "$&/") + "/"), Na(a, t, n, "", function(p) {
    return p;
  })) : a != null && (us(a) && (a = pp(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(sl, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", il(e)) for (var c = 0; c < e.length; c++) {
    i = e[c];
    var l = r + To(i, c);
    s += Na(i, t, n, l, a);
  }
  else if (l = dp(e), typeof l == "function") for (e = l.call(e), c = 0; !(i = e.next()).done; ) i = i.value, l = r + To(i, c++), s += Na(i, t, n, l, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ca(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Na(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function mp(e) {
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
var De = { current: null }, Ea = { transition: null }, hp = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: Ea, ReactCurrentOwner: cs };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = { map: ca, forEach: function(e, t, n) {
  ca(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ca(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ca(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!us(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
X.Component = lr;
X.Fragment = np;
X.Profiler = ap;
X.PureComponent = ss;
X.StrictMode = rp;
X.Suspense = lp;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
X.act = Pc;
X.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sc({}, e.props), a = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = cs.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (l in t) Ec.call(t, l) && !bc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    c = Array(l);
    for (var p = 0; p < l; p++) c[p] = arguments[p + 2];
    r.children = c;
  }
  return { $$typeof: ra, type: e.type, key: a, ref: i, props: r, _owner: s };
};
X.createContext = function(e) {
  return e = { $$typeof: ip, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: op, _context: e }, e.Consumer = e;
};
X.createElement = zc;
X.createFactory = function(e) {
  var t = zc.bind(null, e);
  return t.type = e, t;
};
X.createRef = function() {
  return { current: null };
};
X.forwardRef = function(e) {
  return { $$typeof: sp, render: e };
};
X.isValidElement = us;
X.lazy = function(e) {
  return { $$typeof: up, _payload: { _status: -1, _result: e }, _init: mp };
};
X.memo = function(e, t) {
  return { $$typeof: cp, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function(e) {
  var t = Ea.transition;
  Ea.transition = {};
  try {
    e();
  } finally {
    Ea.transition = t;
  }
};
X.unstable_act = Pc;
X.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
X.useContext = function(e) {
  return De.current.useContext(e);
};
X.useDebugValue = function() {
};
X.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
X.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
X.useId = function() {
  return De.current.useId();
};
X.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
X.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
X.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
X.useRef = function(e) {
  return De.current.useRef(e);
};
X.useState = function(e) {
  return De.current.useState(e);
};
X.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function() {
  return De.current.useTransition();
};
X.version = "18.3.1";
kc.exports = X;
var x = kc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = x, vp = Symbol.for("react.element"), yp = Symbol.for("react.fragment"), xp = Object.prototype.hasOwnProperty, wp = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mc(e, t, n) {
  var r, a = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) xp.call(t, r) && !jp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: vp, type: e, key: i, ref: s, props: a, _owner: wp.current };
}
fo.Fragment = yp;
fo.jsx = Mc;
fo.jsxs = Mc;
jc.exports = fo;
var o = jc.exports, Tc = { exports: {} }, Xe = {}, Lc = { exports: {} }, Rc = {};
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
  function t(R, q) {
    var U = R.length;
    R.push(q);
    e: for (; 0 < U; ) {
      var H = U - 1 >>> 1, P = R[H];
      if (0 < a(P, q)) R[H] = q, R[U] = P, U = H;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var q = R[0], U = R.pop();
    if (U !== q) {
      R[0] = U;
      e: for (var H = 0, P = R.length, ne = P >>> 1; H < ne; ) {
        var ke = 2 * (H + 1) - 1, et = R[ke], oe = ke + 1, ye = R[oe];
        if (0 > a(et, U)) oe < P && 0 > a(ye, et) ? (R[H] = ye, R[oe] = U, H = oe) : (R[H] = et, R[ke] = U, H = ke);
        else if (oe < P && 0 > a(ye, U)) R[H] = ye, R[oe] = U, H = oe;
        else break e;
      }
    }
    return q;
  }
  function a(R, q) {
    var U = R.sortIndex - q.sortIndex;
    return U !== 0 ? U : R.id - q.id;
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
  var l = [], p = [], v = 1, h = null, y = 3, m = !1, j = !1, b = !1, F = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(R) {
    for (var q = n(p); q !== null; ) {
      if (q.callback === null) r(p);
      else if (q.startTime <= R) r(p), q.sortIndex = q.expirationTime, t(l, q);
      else break;
      q = n(p);
    }
  }
  function k(R) {
    if (b = !1, f(R), !j) if (n(l) !== null) j = !0, je(w);
    else {
      var q = n(p);
      q !== null && Re(k, q.startTime - R);
    }
  }
  function w(R, q) {
    j = !1, b && (b = !1, d(_), _ = -1), m = !0;
    var U = y;
    try {
      for (f(q), h = n(l); h !== null && (!(h.expirationTime > q) || R && !T()); ) {
        var H = h.callback;
        if (typeof H == "function") {
          h.callback = null, y = h.priorityLevel;
          var P = H(h.expirationTime <= q);
          q = e.unstable_now(), typeof P == "function" ? h.callback = P : h === n(l) && r(l), f(q);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var ne = !0;
      else {
        var ke = n(p);
        ke !== null && Re(k, ke.startTime - q), ne = !1;
      }
      return ne;
    } finally {
      h = null, y = U, m = !1;
    }
  }
  var N = !1, g = null, _ = -1, E = 5, C = -1;
  function T() {
    return !(e.unstable_now() - C < E);
  }
  function G() {
    if (g !== null) {
      var R = e.unstable_now();
      C = R;
      var q = !0;
      try {
        q = g(!0, R);
      } finally {
        q ? Q() : (N = !1, g = null);
      }
    } else N = !1;
  }
  var Q;
  if (typeof u == "function") Q = function() {
    u(G);
  };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(), ue = Y.port2;
    Y.port1.onmessage = G, Q = function() {
      ue.postMessage(null);
    };
  } else Q = function() {
    F(G, 0);
  };
  function je(R) {
    g = R, N || (N = !0, Q());
  }
  function Re(R, q) {
    _ = F(function() {
      R(e.unstable_now());
    }, q);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    j || m || (j = !0, je(w));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var q = 3;
        break;
      default:
        q = y;
    }
    var U = y;
    y = q;
    try {
      return R();
    } finally {
      y = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, q) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var U = y;
    y = R;
    try {
      return q();
    } finally {
      y = U;
    }
  }, e.unstable_scheduleCallback = function(R, q, U) {
    var H = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? H + U : H) : U = H, R) {
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
    return P = U + P, R = { id: v++, callback: q, priorityLevel: R, startTime: U, expirationTime: P, sortIndex: -1 }, U > H ? (R.sortIndex = U, t(p, R), n(l) === null && R === n(p) && (b ? (d(_), _ = -1) : b = !0, Re(k, U - H))) : (R.sortIndex = P, t(l, R), j || m || (j = !0, je(w))), R;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(R) {
    var q = y;
    return function() {
      var U = y;
      y = q;
      try {
        return R.apply(this, arguments);
      } finally {
        y = U;
      }
    };
  };
})(Rc);
Lc.exports = Rc;
var kp = Lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp = x, Ke = kp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ac = /* @__PURE__ */ new Set(), $r = {};
function bn(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for ($r[e] = t, e = 0; e < t.length; e++) Ac.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ci = Object.prototype.hasOwnProperty, Sp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ll = {}, cl = {};
function _p(e) {
  return ci.call(cl, e) ? !0 : ci.call(ll, e) ? !1 : Sp.test(e) ? cl[e] = !0 : (ll[e] = !0, !1);
}
function Np(e, t, n, r) {
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
function Ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Np(e, t, n, r)) return !0;
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
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new Oe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ds = /[\-:]([a-z])/g;
function ps(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ds,
    ps
  );
  Ee[t] = new Oe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ds, ps);
  Ee[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ds, ps);
  Ee[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fs(e, t, n, r) {
  var a = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ep(t, n, a, r) && (n = null), r || a === null ? _p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), $n = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), ms = Symbol.for("react.strict_mode"), ui = Symbol.for("react.profiler"), Ic = Symbol.for("react.provider"), $c = Symbol.for("react.context"), hs = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), gs = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Dc = Symbol.for("react.offscreen"), ul = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != "object" ? null : (e = ul && e[ul] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, Lo;
function Sr(e) {
  if (Lo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Lo = t && t[1] || "";
  }
  return `
` + Lo + e;
}
var Ro = !1;
function Ao(e, t) {
  if (!e || Ro) return "";
  Ro = !0;
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
    Ro = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Sr(e) : "";
}
function bp(e) {
  switch (e.tag) {
    case 5:
      return Sr(e.type);
    case 16:
      return Sr("Lazy");
    case 13:
      return Sr("Suspense");
    case 19:
      return Sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ao(e.type, !1), e;
    case 11:
      return e = Ao(e.type.render, !1), e;
    case 1:
      return e = Ao(e.type, !0), e;
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
    case ui:
      return "Profiler";
    case ms:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case $c:
      return (e.displayName || "Context") + ".Consumer";
    case Ic:
      return (e._context.displayName || "Context") + ".Provider";
    case hs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case gs:
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
function zp(e) {
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
      return t === ms ? "StrictMode" : "Mode";
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
function Oc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pp(e) {
  var t = Oc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function da(e) {
  e._valueTracker || (e._valueTracker = Pp(e));
}
function Fc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Oc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function dl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qc(e, t) {
  t = t.checked, t != null && fs(e, "checked", t, !1);
}
function hi(e, t) {
  qc(e, t);
  var n = cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Fa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
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
function vi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Bc(e, t) {
  var n = cn(t.value), r = cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ml(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var pa, Vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (pa = pa || document.createElement("div"), pa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pa.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
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
}, Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function(e) {
  Mp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e];
  });
});
function Gc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px";
}
function Hc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Gc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Tp = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xi(e, t) {
  if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function wi(e, t) {
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
var ji = null;
function vs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ki = null, Kn = null, Xn = null;
function hl(e) {
  if (e = ia(e)) {
    if (typeof ki != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = yo(t), ki(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  Kn ? Xn ? Xn.push(e) : Xn = [e] : Kn = e;
}
function Qc() {
  if (Kn) {
    var e = Kn, t = Xn;
    if (Xn = Kn = null, hl(e), t) for (e = 0; e < t.length; e++) hl(t[e]);
  }
}
function Yc(e, t) {
  return e(t);
}
function Kc() {
}
var Io = !1;
function Xc(e, t, n) {
  if (Io) return e(t, n);
  Io = !0;
  try {
    return Yc(e, t, n);
  } finally {
    Io = !1, (Kn !== null || Xn !== null) && (Kc(), Qc());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yo(n);
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
var Ci = !1;
if (At) try {
  var vr = {};
  Object.defineProperty(vr, "passive", { get: function() {
    Ci = !0;
  } }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
} catch {
  Ci = !1;
}
function Lp(e, t, n, r, a, i, s, c, l) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (v) {
    this.onError(v);
  }
}
var zr = !1, qa = null, Ba = !1, Si = null, Rp = { onError: function(e) {
  zr = !0, qa = e;
} };
function Ap(e, t, n, r, a, i, s, c, l) {
  zr = !1, qa = null, Lp.apply(Rp, arguments);
}
function Ip(e, t, n, r, a, i, s, c, l) {
  if (Ap.apply(this, arguments), zr) {
    if (zr) {
      var p = qa;
      zr = !1, qa = null;
    } else throw Error(z(198));
    Ba || (Ba = !0, Si = p);
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
function Jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function gl(e) {
  if (zn(e) !== e) throw Error(z(188));
}
function $p(e) {
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
        if (i === n) return gl(a), e;
        if (i === r) return gl(a), t;
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
function Zc(e) {
  return e = $p(e), e !== null ? eu(e) : null;
}
function eu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = eu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tu = Ke.unstable_scheduleCallback, vl = Ke.unstable_cancelCallback, Dp = Ke.unstable_shouldYield, Op = Ke.unstable_requestPaint, ge = Ke.unstable_now, Fp = Ke.unstable_getCurrentPriorityLevel, ys = Ke.unstable_ImmediatePriority, nu = Ke.unstable_UserBlockingPriority, Ua = Ke.unstable_NormalPriority, qp = Ke.unstable_LowPriority, ru = Ke.unstable_IdlePriority, mo = null, _t = null;
function Bp(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(mo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ht = Math.clz32 ? Math.clz32 : Gp, Up = Math.log, Vp = Math.LN2;
function Gp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Up(e) / Vp | 0) | 0;
}
var fa = 64, ma = 4194304;
function Nr(e) {
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
function Va(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var c = s & ~a;
    c !== 0 ? r = Nr(c) : (i &= s, i !== 0 && (r = Nr(i)));
  } else s = n & ~a, s !== 0 ? r = Nr(s) : i !== 0 && (r = Nr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ht(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Hp(e, t) {
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
function Wp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - ht(i), c = 1 << s, l = a[s];
    l === -1 ? (!(c & n) || c & r) && (a[s] = Hp(c, t)) : l <= t && (e.expiredLanes |= c), i &= ~c;
  }
}
function _i(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function au() {
  var e = fa;
  return fa <<= 1, !(fa & 4194240) && (fa = 64), e;
}
function $o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function aa(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n;
}
function Qp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ht(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function xs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var te = 0;
function ou(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var iu, ws, su, lu, cu, Ni = !1, ha = [], en = null, tn = null, nn = null, Fr = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map(), Kt = [], Yp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function yl(e, t) {
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
      Fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = ia(t), t !== null && ws(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Kp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return en = yr(en, e, t, n, r, a), !0;
    case "dragenter":
      return tn = yr(tn, e, t, n, r, a), !0;
    case "mouseover":
      return nn = yr(nn, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return Fr.set(i, yr(Fr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, qr.set(i, yr(qr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function uu(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Jc(n), t !== null) {
          e.blockedOn = t, cu(e.priority, function() {
            su(n);
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
function ba(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ji = r, n.target.dispatchEvent(r), ji = null;
    } else return t = ia(n), t !== null && ws(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xl(e, t, n) {
  ba(e) && n.delete(t);
}
function Xp() {
  Ni = !1, en !== null && ba(en) && (en = null), tn !== null && ba(tn) && (tn = null), nn !== null && ba(nn) && (nn = null), Fr.forEach(xl), qr.forEach(xl);
}
function xr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ni || (Ni = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Xp)));
}
function Br(e) {
  function t(a) {
    return xr(a, e);
  }
  if (0 < ha.length) {
    xr(ha[0], e);
    for (var n = 1; n < ha.length; n++) {
      var r = ha[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && xr(en, e), tn !== null && xr(tn, e), nn !== null && xr(nn, e), Fr.forEach(t), qr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) uu(n), n.blockedOn === null && Kt.shift();
}
var Jn = Ot.ReactCurrentBatchConfig, Ga = !0;
function Jp(e, t, n, r) {
  var a = te, i = Jn.transition;
  Jn.transition = null;
  try {
    te = 1, js(e, t, n, r);
  } finally {
    te = a, Jn.transition = i;
  }
}
function Zp(e, t, n, r) {
  var a = te, i = Jn.transition;
  Jn.transition = null;
  try {
    te = 4, js(e, t, n, r);
  } finally {
    te = a, Jn.transition = i;
  }
}
function js(e, t, n, r) {
  if (Ga) {
    var a = Ei(e, t, n, r);
    if (a === null) Wo(e, t, r, Ha, n), yl(e, r);
    else if (Kp(a, e, t, n, r)) r.stopPropagation();
    else if (yl(e, r), t & 4 && -1 < Yp.indexOf(e)) {
      for (; a !== null; ) {
        var i = ia(a);
        if (i !== null && iu(i), i = Ei(e, t, n, r), i === null && Wo(e, t, r, Ha, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else Wo(e, t, r, null, n);
  }
}
var Ha = null;
function Ei(e, t, n, r) {
  if (Ha = null, e = vs(r), e = vn(e), e !== null) if (t = zn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Jc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ha = e, null;
}
function du(e) {
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
      switch (Fp()) {
        case ys:
          return 1;
        case nu:
          return 4;
        case Ua:
        case qp:
          return 16;
        case ru:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null, ks = null, za = null;
function pu() {
  if (za) return za;
  var e, t = ks, n = t.length, r, a = "value" in Jt ? Jt.value : Jt.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[i - r]; r++) ;
  return za = a.slice(e, 1 < r ? 1 - r : void 0);
}
function Pa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ga() {
  return !0;
}
function wl() {
  return !1;
}
function Je(e) {
  function t(n, r, a, i, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ga : wl, this.isPropagationStopped = wl, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ga);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ga);
  }, persist: function() {
  }, isPersistent: ga }), t;
}
var cr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cs = Je(cr), oa = fe({}, cr, { view: 0, detail: 0 }), ef = Je(oa), Do, Oo, wr, ho = fe({}, oa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ss, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (Do = e.screenX - wr.screenX, Oo = e.screenY - wr.screenY) : Oo = Do = 0, wr = e), Do);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Oo;
} }), jl = Je(ho), tf = fe({}, ho, { dataTransfer: 0 }), nf = Je(tf), rf = fe({}, oa, { relatedTarget: 0 }), Fo = Je(rf), af = fe({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = Je(af), sf = fe({}, cr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), lf = Je(sf), cf = fe({}, cr, { data: 0 }), kl = Je(cf), uf = {
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
}, df = {
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
}, pf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ff(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pf[e]) ? !!t[e] : !1;
}
function Ss() {
  return ff;
}
var mf = fe({}, oa, { key: function(e) {
  if (e.key) {
    var t = uf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? df[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ss, charCode: function(e) {
  return e.type === "keypress" ? Pa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hf = Je(mf), gf = fe({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cl = Je(gf), vf = fe({}, oa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ss }), yf = Je(vf), xf = fe({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wf = Je(xf), jf = fe({}, ho, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), kf = Je(jf), Cf = [9, 13, 27, 32], _s = At && "CompositionEvent" in window, Pr = null;
At && "documentMode" in document && (Pr = document.documentMode);
var Sf = At && "TextEvent" in window && !Pr, fu = At && (!_s || Pr && 8 < Pr && 11 >= Pr), Sl = " ", _l = !1;
function mu(e, t) {
  switch (e) {
    case "keyup":
      return Cf.indexOf(t.keyCode) !== -1;
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
function hu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function _f(e, t) {
  switch (e) {
    case "compositionend":
      return hu(t);
    case "keypress":
      return t.which !== 32 ? null : (_l = !0, Sl);
    case "textInput":
      return e = t.data, e === Sl && _l ? null : e;
    default:
      return null;
  }
}
function Nf(e, t) {
  if (On) return e === "compositionend" || !_s && mu(e, t) ? (e = pu(), za = ks = Jt = null, On = !1, e) : null;
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
      return fu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ef = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ef[e.type] : t === "textarea";
}
function gu(e, t, n, r) {
  Wc(r), t = Wa(t, "onChange"), 0 < t.length && (n = new Cs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Mr = null, Ur = null;
function bf(e) {
  Eu(e, 0);
}
function go(e) {
  var t = Bn(e);
  if (Fc(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var vu = !1;
if (At) {
  var qo;
  if (At) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var El = document.createElement("div");
      El.setAttribute("oninput", "return;"), Bo = typeof El.oninput == "function";
    }
    qo = Bo;
  } else qo = !1;
  vu = qo && (!document.documentMode || 9 < document.documentMode);
}
function bl() {
  Mr && (Mr.detachEvent("onpropertychange", yu), Ur = Mr = null);
}
function yu(e) {
  if (e.propertyName === "value" && go(Ur)) {
    var t = [];
    gu(t, Ur, e, vs(e)), Xc(bf, t);
  }
}
function Pf(e, t, n) {
  e === "focusin" ? (bl(), Mr = t, Ur = n, Mr.attachEvent("onpropertychange", yu)) : e === "focusout" && bl();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return go(Ur);
}
function Tf(e, t) {
  if (e === "click") return go(t);
}
function Lf(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function Rf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var vt = typeof Object.is == "function" ? Object.is : Rf;
function Vr(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!ci.call(t, a) || !vt(e[a], t[a])) return !1;
  }
  return !0;
}
function zl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pl(e, t) {
  var n = zl(e);
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
    n = zl(n);
  }
}
function xu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wu() {
  for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fa(e.document);
  }
  return t;
}
function Ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Af(e) {
  var t = wu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && xu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ns(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Pl(n, i);
        var s = Pl(
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
var If = At && "documentMode" in document && 11 >= document.documentMode, Fn = null, bi = null, Tr = null, zi = !1;
function Ml(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zi || Fn == null || Fn !== Fa(r) || (r = Fn, "selectionStart" in r && Ns(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Tr && Vr(Tr, r) || (Tr = r, r = Wa(bi, "onSelect"), 0 < r.length && (t = new Cs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fn)));
}
function va(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qn = { animationend: va("Animation", "AnimationEnd"), animationiteration: va("Animation", "AnimationIteration"), animationstart: va("Animation", "AnimationStart"), transitionend: va("Transition", "TransitionEnd") }, Uo = {}, ju = {};
At && (ju = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
function vo(e) {
  if (Uo[e]) return Uo[e];
  if (!qn[e]) return e;
  var t = qn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ju) return Uo[e] = t[n];
  return e;
}
var ku = vo("animationend"), Cu = vo("animationiteration"), Su = vo("animationstart"), _u = vo("transitionend"), Nu = /* @__PURE__ */ new Map(), Tl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Nu.set(e, t), bn(t, [e]);
}
for (var Vo = 0; Vo < Tl.length; Vo++) {
  var Go = Tl[Vo], $f = Go.toLowerCase(), Df = Go[0].toUpperCase() + Go.slice(1);
  dn($f, "on" + Df);
}
dn(ku, "onAnimationEnd");
dn(Cu, "onAnimationIteration");
dn(Su, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(_u, "onTransitionEnd");
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
var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Of = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Ll(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ip(r, t, void 0, e), e.currentTarget = null;
}
function Eu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var c = r[s], l = c.instance, p = c.currentTarget;
        if (c = c.listener, l !== i && a.isPropagationStopped()) break e;
        Ll(a, c, p), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (c = r[s], l = c.instance, p = c.currentTarget, c = c.listener, l !== i && a.isPropagationStopped()) break e;
        Ll(a, c, p), i = l;
      }
    }
  }
  if (Ba) throw e = Si, Ba = !1, Si = null, e;
}
function ie(e, t) {
  var n = t[Ri];
  n === void 0 && (n = t[Ri] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bu(t, e, 2, !1), n.add(r));
}
function Ho(e, t, n) {
  var r = 0;
  t && (r |= 4), bu(n, e, r, t);
}
var ya = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[ya]) {
    e[ya] = !0, Ac.forEach(function(n) {
      n !== "selectionchange" && (Of.has(n) || Ho(n, !1, e), Ho(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ya] || (t[ya] = !0, Ho("selectionchange", !1, t));
  }
}
function bu(e, t, n, r) {
  switch (du(t)) {
    case 1:
      var a = Jp;
      break;
    case 4:
      a = Zp;
      break;
    default:
      a = js;
  }
  n = a.bind(null, t, n, e), a = void 0, !Ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Wo(e, t, n, r, a) {
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
  Xc(function() {
    var p = i, v = vs(n), h = [];
    e: {
      var y = Nu.get(e);
      if (y !== void 0) {
        var m = Cs, j = e;
        switch (e) {
          case "keypress":
            if (Pa(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = hf;
            break;
          case "focusin":
            j = "focus", m = Fo;
            break;
          case "focusout":
            j = "blur", m = Fo;
            break;
          case "beforeblur":
          case "afterblur":
            m = Fo;
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
            m = jl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = yf;
            break;
          case ku:
          case Cu:
          case Su:
            m = of;
            break;
          case _u:
            m = wf;
            break;
          case "scroll":
            m = ef;
            break;
          case "wheel":
            m = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = lf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Cl;
        }
        var b = (t & 4) !== 0, F = !b && e === "scroll", d = b ? y !== null ? y + "Capture" : null : y;
        b = [];
        for (var u = p, f; u !== null; ) {
          f = u;
          var k = f.stateNode;
          if (f.tag === 5 && k !== null && (f = k, d !== null && (k = Or(u, d), k != null && b.push(Hr(u, k, f)))), F) break;
          u = u.return;
        }
        0 < b.length && (y = new m(y, j, null, n, v), h.push({ event: y, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", y && n !== ji && (j = n.relatedTarget || n.fromElement) && (vn(j) || j[It])) break e;
        if ((m || y) && (y = v.window === v ? v : (y = v.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (j = n.relatedTarget || n.toElement, m = p, j = j ? vn(j) : null, j !== null && (F = zn(j), j !== F || j.tag !== 5 && j.tag !== 6) && (j = null)) : (m = null, j = p), m !== j)) {
          if (b = jl, k = "onMouseLeave", d = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (b = Cl, k = "onPointerLeave", d = "onPointerEnter", u = "pointer"), F = m == null ? y : Bn(m), f = j == null ? y : Bn(j), y = new b(k, u + "leave", m, n, v), y.target = F, y.relatedTarget = f, k = null, vn(v) === p && (b = new b(d, u + "enter", j, n, v), b.target = f, b.relatedTarget = F, k = b), F = k, m && j) t: {
            for (b = m, d = j, u = 0, f = b; f; f = An(f)) u++;
            for (f = 0, k = d; k; k = An(k)) f++;
            for (; 0 < u - f; ) b = An(b), u--;
            for (; 0 < f - u; ) d = An(d), f--;
            for (; u--; ) {
              if (b === d || d !== null && b === d.alternate) break t;
              b = An(b), d = An(d);
            }
            b = null;
          }
          else b = null;
          m !== null && Rl(h, y, m, b, !1), j !== null && F !== null && Rl(h, F, j, b, !0);
        }
      }
      e: {
        if (y = p ? Bn(p) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file") var w = zf;
        else if (Nl(y)) if (vu) w = Lf;
        else {
          w = Mf;
          var N = Pf;
        }
        else (m = y.nodeName) && m.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (w = Tf);
        if (w && (w = w(e, p))) {
          gu(h, w, n, v);
          break e;
        }
        N && N(e, y, p), e === "focusout" && (N = y._wrapperState) && N.controlled && y.type === "number" && gi(y, "number", y.value);
      }
      switch (N = p ? Bn(p) : window, e) {
        case "focusin":
          (Nl(N) || N.contentEditable === "true") && (Fn = N, bi = p, Tr = null);
          break;
        case "focusout":
          Tr = bi = Fn = null;
          break;
        case "mousedown":
          zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zi = !1, Ml(h, n, v);
          break;
        case "selectionchange":
          if (If) break;
        case "keydown":
        case "keyup":
          Ml(h, n, v);
      }
      var g;
      if (_s) e: {
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
      else On ? mu(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (fu && n.locale !== "ko" && (On || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && On && (g = pu()) : (Jt = v, ks = "value" in Jt ? Jt.value : Jt.textContent, On = !0)), N = Wa(p, _), 0 < N.length && (_ = new kl(_, e, null, n, v), h.push({ event: _, listeners: N }), g ? _.data = g : (g = hu(n), g !== null && (_.data = g)))), (g = Sf ? _f(e, n) : Nf(e, n)) && (p = Wa(p, "onBeforeInput"), 0 < p.length && (v = new kl("onBeforeInput", "beforeinput", null, n, v), h.push({ event: v, listeners: p }), v.data = g));
    }
    Eu(h, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = Or(e, n), i != null && r.unshift(Hr(e, i, a)), i = Or(e, t), i != null && r.push(Hr(e, i, a))), e = e.return;
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
function Rl(e, t, n, r, a) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var c = n, l = c.alternate, p = c.stateNode;
    if (l !== null && l === r) break;
    c.tag === 5 && p !== null && (c = p, a ? (l = Or(n, i), l != null && s.unshift(Hr(n, l, c))) : a || (l = Or(n, i), l != null && s.push(Hr(n, l, c)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ff = /\r\n?/g, qf = /\u0000|\uFFFD/g;
function Al(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ff, `
`).replace(qf, "");
}
function xa(e, t, n) {
  if (t = Al(t), Al(e) !== t && n) throw Error(z(425));
}
function Qa() {
}
var Pi = null, Mi = null;
function Ti(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Li = typeof setTimeout == "function" ? setTimeout : void 0, Bf = typeof clearTimeout == "function" ? clearTimeout : void 0, Il = typeof Promise == "function" ? Promise : void 0, Uf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Il < "u" ? function(e) {
  return Il.resolve(null).then(e).catch(Vf);
} : Li;
function Vf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Qo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Br(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Br(t);
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
function $l(e) {
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
var ur = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + ur, Wr = "__reactProps$" + ur, It = "__reactContainer$" + ur, Ri = "__reactEvents$" + ur, Gf = "__reactListeners$" + ur, Hf = "__reactHandles$" + ur;
function vn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[It] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $l(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = $l(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ia(e) {
  return e = e[Ct] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function yo(e) {
  return e[Wr] || null;
}
var Ai = [], Un = -1;
function pn(e) {
  return { current: e };
}
function se(e) {
  0 > Un || (e.current = Ai[Un], Ai[Un] = null, Un--);
}
function ae(e, t) {
  Un++, Ai[Un] = e.current, e.current = t;
}
var un = {}, Le = pn(un), Ue = pn(!1), Cn = un;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ve(e) {
  return e = e.childContextTypes, e != null;
}
function Ya() {
  se(Ue), se(Le);
}
function Dl(e, t, n) {
  if (Le.current !== un) throw Error(z(168));
  ae(Le, t), ae(Ue, n);
}
function zu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, zp(e) || "Unknown", a));
  return fe({}, n, r);
}
function Ka(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Cn = Le.current, ae(Le, e), ae(Ue, Ue.current), !0;
}
function Ol(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = zu(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, se(Ue), se(Le), ae(Le, e)) : se(Ue), ae(Ue, n);
}
var Mt = null, xo = !1, Yo = !1;
function Pu(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Wf(e) {
  xo = !0, Pu(e);
}
function fn() {
  if (!Yo && Mt !== null) {
    Yo = !0;
    var e = 0, t = te;
    try {
      var n = Mt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mt = null, xo = !1;
    } catch (a) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), tu(ys, fn), a;
    } finally {
      te = t, Yo = !1;
    }
  }
  return null;
}
var Vn = [], Gn = 0, Xa = null, Ja = 0, nt = [], rt = 0, Sn = null, Tt = 1, Lt = "";
function hn(e, t) {
  Vn[Gn++] = Ja, Vn[Gn++] = Xa, Xa = e, Ja = t;
}
function Mu(e, t, n) {
  nt[rt++] = Tt, nt[rt++] = Lt, nt[rt++] = Sn, Sn = e;
  var r = Tt;
  e = Lt;
  var a = 32 - ht(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - ht(t) + a;
  if (30 < i) {
    var s = a - a % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Tt = 1 << 32 - ht(t) + a | n << a | r, Lt = i + e;
  } else Tt = 1 << i | n << a | r, Lt = e;
}
function Es(e) {
  e.return !== null && (hn(e, 1), Mu(e, 1, 0));
}
function bs(e) {
  for (; e === Xa; ) Xa = Vn[--Gn], Vn[Gn] = null, Ja = Vn[--Gn], Vn[Gn] = null;
  for (; e === Sn; ) Sn = nt[--rt], nt[rt] = null, Lt = nt[--rt], nt[rt] = null, Tt = nt[--rt], nt[rt] = null;
}
var Ye = null, Qe = null, ce = !1, mt = null;
function Tu(e, t) {
  var n = at(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Fl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Qe = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Tt, overflow: Lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Qe = null, !0) : !1;
    default:
      return !1;
  }
}
function Ii(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $i(e) {
  if (ce) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!Fl(e, t)) {
        if (Ii(e)) throw Error(z(418));
        t = rn(n.nextSibling);
        var r = Ye;
        t && Fl(e, t) ? Tu(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Ye = e);
      }
    } else {
      if (Ii(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, ce = !1, Ye = e;
    }
  }
}
function ql(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ye = e;
}
function wa(e) {
  if (e !== Ye) return !1;
  if (!ce) return ql(e), ce = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ti(e.type, e.memoizedProps)), t && (t = Qe)) {
    if (Ii(e)) throw Lu(), Error(z(418));
    for (; t; ) Tu(e, t), t = rn(t.nextSibling);
  }
  if (ql(e), e.tag === 13) {
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
function Lu() {
  for (var e = Qe; e; ) e = rn(e.nextSibling);
}
function rr() {
  Qe = Ye = null, ce = !1;
}
function zs(e) {
  mt === null ? mt = [e] : mt.push(e);
}
var Qf = Ot.ReactCurrentBatchConfig;
function jr(e, t, n) {
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
function ja(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Bl(e) {
  var t = e._init;
  return t(e._payload);
}
function Ru(e) {
  function t(d, u) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [u], d.flags |= 16) : f.push(u);
    }
  }
  function n(d, u) {
    if (!e) return null;
    for (; u !== null; ) t(d, u), u = u.sibling;
    return null;
  }
  function r(d, u) {
    for (d = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? d.set(u.key, u) : d.set(u.index, u), u = u.sibling;
    return d;
  }
  function a(d, u) {
    return d = ln(d, u), d.index = 0, d.sibling = null, d;
  }
  function i(d, u, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < u ? (d.flags |= 2, u) : f) : (d.flags |= 2, u)) : (d.flags |= 1048576, u);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function c(d, u, f, k) {
    return u === null || u.tag !== 6 ? (u = ni(f, d.mode, k), u.return = d, u) : (u = a(u, f), u.return = d, u);
  }
  function l(d, u, f, k) {
    var w = f.type;
    return w === Dn ? v(d, u, f.props.children, k, f.key) : u !== null && (u.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Qt && Bl(w) === u.type) ? (k = a(u, f.props), k.ref = jr(d, u, f), k.return = d, k) : (k = $a(f.type, f.key, f.props, null, d.mode, k), k.ref = jr(d, u, f), k.return = d, k);
  }
  function p(d, u, f, k) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== f.containerInfo || u.stateNode.implementation !== f.implementation ? (u = ri(f, d.mode, k), u.return = d, u) : (u = a(u, f.children || []), u.return = d, u);
  }
  function v(d, u, f, k, w) {
    return u === null || u.tag !== 7 ? (u = jn(f, d.mode, k, w), u.return = d, u) : (u = a(u, f), u.return = d, u);
  }
  function h(d, u, f) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = ni("" + u, d.mode, f), u.return = d, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case ua:
          return f = $a(u.type, u.key, u.props, null, d.mode, f), f.ref = jr(d, null, u), f.return = d, f;
        case $n:
          return u = ri(u, d.mode, f), u.return = d, u;
        case Qt:
          var k = u._init;
          return h(d, k(u._payload), f);
      }
      if (_r(u) || gr(u)) return u = jn(u, d.mode, f, null), u.return = d, u;
      ja(d, u);
    }
    return null;
  }
  function y(d, u, f, k) {
    var w = u !== null ? u.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return w !== null ? null : c(d, u, "" + f, k);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ua:
          return f.key === w ? l(d, u, f, k) : null;
        case $n:
          return f.key === w ? p(d, u, f, k) : null;
        case Qt:
          return w = f._init, y(
            d,
            u,
            w(f._payload),
            k
          );
      }
      if (_r(f) || gr(f)) return w !== null ? null : v(d, u, f, k, null);
      ja(d, f);
    }
    return null;
  }
  function m(d, u, f, k, w) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return d = d.get(f) || null, c(u, d, "" + k, w);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ua:
          return d = d.get(k.key === null ? f : k.key) || null, l(u, d, k, w);
        case $n:
          return d = d.get(k.key === null ? f : k.key) || null, p(u, d, k, w);
        case Qt:
          var N = k._init;
          return m(d, u, f, N(k._payload), w);
      }
      if (_r(k) || gr(k)) return d = d.get(f) || null, v(u, d, k, w, null);
      ja(u, k);
    }
    return null;
  }
  function j(d, u, f, k) {
    for (var w = null, N = null, g = u, _ = u = 0, E = null; g !== null && _ < f.length; _++) {
      g.index > _ ? (E = g, g = null) : E = g.sibling;
      var C = y(d, g, f[_], k);
      if (C === null) {
        g === null && (g = E);
        break;
      }
      e && g && C.alternate === null && t(d, g), u = i(C, u, _), N === null ? w = C : N.sibling = C, N = C, g = E;
    }
    if (_ === f.length) return n(d, g), ce && hn(d, _), w;
    if (g === null) {
      for (; _ < f.length; _++) g = h(d, f[_], k), g !== null && (u = i(g, u, _), N === null ? w = g : N.sibling = g, N = g);
      return ce && hn(d, _), w;
    }
    for (g = r(d, g); _ < f.length; _++) E = m(g, d, _, f[_], k), E !== null && (e && E.alternate !== null && g.delete(E.key === null ? _ : E.key), u = i(E, u, _), N === null ? w = E : N.sibling = E, N = E);
    return e && g.forEach(function(T) {
      return t(d, T);
    }), ce && hn(d, _), w;
  }
  function b(d, u, f, k) {
    var w = gr(f);
    if (typeof w != "function") throw Error(z(150));
    if (f = w.call(f), f == null) throw Error(z(151));
    for (var N = w = null, g = u, _ = u = 0, E = null, C = f.next(); g !== null && !C.done; _++, C = f.next()) {
      g.index > _ ? (E = g, g = null) : E = g.sibling;
      var T = y(d, g, C.value, k);
      if (T === null) {
        g === null && (g = E);
        break;
      }
      e && g && T.alternate === null && t(d, g), u = i(T, u, _), N === null ? w = T : N.sibling = T, N = T, g = E;
    }
    if (C.done) return n(
      d,
      g
    ), ce && hn(d, _), w;
    if (g === null) {
      for (; !C.done; _++, C = f.next()) C = h(d, C.value, k), C !== null && (u = i(C, u, _), N === null ? w = C : N.sibling = C, N = C);
      return ce && hn(d, _), w;
    }
    for (g = r(d, g); !C.done; _++, C = f.next()) C = m(g, d, _, C.value, k), C !== null && (e && C.alternate !== null && g.delete(C.key === null ? _ : C.key), u = i(C, u, _), N === null ? w = C : N.sibling = C, N = C);
    return e && g.forEach(function(G) {
      return t(d, G);
    }), ce && hn(d, _), w;
  }
  function F(d, u, f, k) {
    if (typeof f == "object" && f !== null && f.type === Dn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ua:
          e: {
            for (var w = f.key, N = u; N !== null; ) {
              if (N.key === w) {
                if (w = f.type, w === Dn) {
                  if (N.tag === 7) {
                    n(d, N.sibling), u = a(N, f.props.children), u.return = d, d = u;
                    break e;
                  }
                } else if (N.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Qt && Bl(w) === N.type) {
                  n(d, N.sibling), u = a(N, f.props), u.ref = jr(d, N, f), u.return = d, d = u;
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === Dn ? (u = jn(f.props.children, d.mode, k, f.key), u.return = d, d = u) : (k = $a(f.type, f.key, f.props, null, d.mode, k), k.ref = jr(d, u, f), k.return = d, d = k);
          }
          return s(d);
        case $n:
          e: {
            for (N = f.key; u !== null; ) {
              if (u.key === N) if (u.tag === 4 && u.stateNode.containerInfo === f.containerInfo && u.stateNode.implementation === f.implementation) {
                n(d, u.sibling), u = a(u, f.children || []), u.return = d, d = u;
                break e;
              } else {
                n(d, u);
                break;
              }
              else t(d, u);
              u = u.sibling;
            }
            u = ri(f, d.mode, k), u.return = d, d = u;
          }
          return s(d);
        case Qt:
          return N = f._init, F(d, u, N(f._payload), k);
      }
      if (_r(f)) return j(d, u, f, k);
      if (gr(f)) return b(d, u, f, k);
      ja(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, u !== null && u.tag === 6 ? (n(d, u.sibling), u = a(u, f), u.return = d, d = u) : (n(d, u), u = ni(f, d.mode, k), u.return = d, d = u), s(d)) : n(d, u);
  }
  return F;
}
var ar = Ru(!0), Au = Ru(!1), Za = pn(null), eo = null, Hn = null, Ps = null;
function Ms() {
  Ps = Hn = eo = null;
}
function Ts(e) {
  var t = Za.current;
  se(Za), e._currentValue = t;
}
function Di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Zn(e, t) {
  eo = e, Ps = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null);
}
function it(e) {
  var t = e._currentValue;
  if (Ps !== e) if (e = { context: e, memoizedValue: t, next: null }, Hn === null) {
    if (eo === null) throw Error(z(308));
    Hn = e, eo.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return t;
}
var yn = null;
function Ls(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function Iu(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Ls(t)) : (n.next = a.next, a.next = n), t.interleaved = n, $t(e, r);
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Rs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function $u(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, $t(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Ls(r)) : (t.next = a.next, a.next = t), r.interleaved = t, $t(e, n);
}
function Ma(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xs(e, n);
  }
}
function Ul(e, t) {
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
function to(e, t, n, r) {
  var a = e.updateQueue;
  Yt = !1;
  var i = a.firstBaseUpdate, s = a.lastBaseUpdate, c = a.shared.pending;
  if (c !== null) {
    a.shared.pending = null;
    var l = c, p = l.next;
    l.next = null, s === null ? i = p : s.next = p, s = l;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, c = v.lastBaseUpdate, c !== s && (c === null ? v.firstBaseUpdate = p : c.next = p, v.lastBaseUpdate = l));
  }
  if (i !== null) {
    var h = a.baseState;
    s = 0, v = p = l = null, c = i;
    do {
      var y = c.lane, m = c.eventTime;
      if ((r & y) === y) {
        v !== null && (v = v.next = {
          eventTime: m,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var j = e, b = c;
          switch (y = t, m = n, b.tag) {
            case 1:
              if (j = b.payload, typeof j == "function") {
                h = j.call(m, h, y);
                break e;
              }
              h = j;
              break e;
            case 3:
              j.flags = j.flags & -65537 | 128;
            case 0:
              if (j = b.payload, y = typeof j == "function" ? j.call(m, h, y) : j, y == null) break e;
              h = fe({}, h, y);
              break e;
            case 2:
              Yt = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (e.flags |= 64, y = a.effects, y === null ? a.effects = [c] : y.push(c));
      } else m = { eventTime: m, lane: y, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, v === null ? (p = v = m, l = h) : v = v.next = m, s |= y;
      if (c = c.next, c === null) {
        if (c = a.shared.pending, c === null) break;
        y = c, c = y.next, y.next = null, a.lastBaseUpdate = y, a.shared.pending = null;
      }
    } while (!0);
    if (v === null && (l = h), a.baseState = l, a.firstBaseUpdate = p, a.lastBaseUpdate = v, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    Nn |= s, e.lanes = s, e.memoizedState = h;
  }
}
function Vl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var sa = {}, Nt = pn(sa), Qr = pn(sa), Yr = pn(sa);
function xn(e) {
  if (e === sa) throw Error(z(174));
  return e;
}
function As(e, t) {
  switch (ae(Yr, t), ae(Qr, e), ae(Nt, sa), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yi(t, e);
  }
  se(Nt), ae(Nt, t);
}
function or() {
  se(Nt), se(Qr), se(Yr);
}
function Du(e) {
  xn(Yr.current);
  var t = xn(Nt.current), n = yi(t, e.type);
  t !== n && (ae(Qr, e), ae(Nt, n));
}
function Is(e) {
  Qr.current === e && (se(Nt), se(Qr));
}
var de = pn(0);
function no(e) {
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
var Ko = [];
function $s() {
  for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
  Ko.length = 0;
}
var Ta = Ot.ReactCurrentDispatcher, Xo = Ot.ReactCurrentBatchConfig, _n = 0, pe = null, xe = null, Ce = null, ro = !1, Lr = !1, Kr = 0, Yf = 0;
function Pe() {
  throw Error(z(321));
}
function Ds(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Os(e, t, n, r, a, i) {
  if (_n = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ta.current = e === null || e.memoizedState === null ? Zf : em, e = n(r, a), Lr) {
    i = 0;
    do {
      if (Lr = !1, Kr = 0, 25 <= i) throw Error(z(301));
      i += 1, Ce = xe = null, t.updateQueue = null, Ta.current = tm, e = n(r, a);
    } while (Lr);
  }
  if (Ta.current = ao, t = xe !== null && xe.next !== null, _n = 0, Ce = xe = pe = null, ro = !1, t) throw Error(z(300));
  return e;
}
function Fs() {
  var e = Kr !== 0;
  return Kr = 0, e;
}
function kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ce === null ? pe.memoizedState = Ce = e : Ce = Ce.next = e, Ce;
}
function st() {
  if (xe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Ce === null ? pe.memoizedState : Ce.next;
  if (t !== null) Ce = t, xe = e;
  else {
    if (e === null) throw Error(z(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Ce === null ? pe.memoizedState = Ce = e : Ce = Ce.next = e;
  }
  return Ce;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jo(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = xe, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = i.next, i.next = s;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var c = s = null, l = null, p = i;
    do {
      var v = p.lane;
      if ((_n & v) === v) l !== null && (l = l.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var h = {
          lane: v,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        l === null ? (c = l = h, s = r) : l = l.next = h, pe.lanes |= v, Nn |= v;
      }
      p = p.next;
    } while (p !== null && p !== i);
    l === null ? s = r : l.next = c, vt(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, pe.lanes |= i, Nn |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zo(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== a);
    vt(i, t.memoizedState) || (Be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ou() {
}
function Fu(e, t) {
  var n = pe, r = st(), a = t(), i = !vt(r.memoizedState, a);
  if (i && (r.memoizedState = a, Be = !0), r = r.queue, qs(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ce !== null && Ce.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jr(9, Bu.bind(null, n, r, a, t), void 0, null), Se === null) throw Error(z(349));
    _n & 30 || qu(n, t, a);
  }
  return a;
}
function qu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Bu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Vu(t) && Gu(e);
}
function Uu(e, t, n) {
  return n(function() {
    Vu(t) && Gu(e);
  });
}
function Vu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Gu(e) {
  var t = $t(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Gl(e) {
  var t = kt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Jf.bind(null, pe, e), [t.memoizedState, e];
}
function Jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Hu() {
  return st().memoizedState;
}
function La(e, t, n, r) {
  var a = kt();
  pe.flags |= e, a.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function wo(e, t, n, r) {
  var a = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var s = xe.memoizedState;
    if (i = s.destroy, r !== null && Ds(r, s.deps)) {
      a.memoizedState = Jr(t, n, i, r);
      return;
    }
  }
  pe.flags |= e, a.memoizedState = Jr(1 | t, n, i, r);
}
function Hl(e, t) {
  return La(8390656, 8, e, t);
}
function qs(e, t) {
  return wo(2048, 8, e, t);
}
function Wu(e, t) {
  return wo(4, 2, e, t);
}
function Qu(e, t) {
  return wo(4, 4, e, t);
}
function Yu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ku(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wo(4, 4, Yu.bind(null, t, e), n);
}
function Bs() {
}
function Xu(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ju(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Zu(e, t, n) {
  return _n & 21 ? (vt(n, t) || (n = au(), pe.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n);
}
function Kf(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xo.transition;
  Xo.transition = {};
  try {
    e(!1), t();
  } finally {
    te = n, Xo.transition = r;
  }
}
function ed() {
  return st().memoizedState;
}
function Xf(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, td(e)) nd(t, n);
  else if (n = Iu(e, t, n, r), n !== null) {
    var a = $e();
    gt(n, e, r, a), rd(n, t, r);
  }
}
function Jf(e, t, n) {
  var r = sn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (td(e)) nd(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, c = i(s, n);
      if (a.hasEagerState = !0, a.eagerState = c, vt(c, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, Ls(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = Iu(e, t, a, r), n !== null && (a = $e(), gt(n, e, r, a), rd(n, t, r));
  }
}
function td(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function nd(e, t) {
  Lr = ro = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xs(e, n);
  }
}
var ao = { readContext: it, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, Zf = { readContext: it, useCallback: function(e, t) {
  return kt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: it, useEffect: Hl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, La(
    4194308,
    4,
    Yu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return La(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return La(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = kt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = kt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Xf.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = kt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gl, useDebugValue: Bs, useDeferredValue: function(e) {
  return kt().memoizedState = e;
}, useTransition: function() {
  var e = Gl(!1), t = e[0];
  return e = Kf.bind(null, e[1]), kt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, a = kt();
  if (ce) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), Se === null) throw Error(z(349));
    _n & 30 || qu(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, Hl(Uu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Jr(9, Bu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = kt(), t = Se.identifierPrefix;
  if (ce) {
    var n = Lt, r = Tt;
    n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Yf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, em = {
  readContext: it,
  useCallback: Xu,
  useContext: it,
  useEffect: qs,
  useImperativeHandle: Ku,
  useInsertionEffect: Wu,
  useLayoutEffect: Qu,
  useMemo: Ju,
  useReducer: Jo,
  useRef: Hu,
  useState: function() {
    return Jo(Xr);
  },
  useDebugValue: Bs,
  useDeferredValue: function(e) {
    var t = st();
    return Zu(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = Jo(Xr)[0], t = st().memoizedState;
    return [e, t];
  },
  useMutableSource: Ou,
  useSyncExternalStore: Fu,
  useId: ed,
  unstable_isNewReconciler: !1
}, tm = { readContext: it, useCallback: Xu, useContext: it, useEffect: qs, useImperativeHandle: Ku, useInsertionEffect: Wu, useLayoutEffect: Qu, useMemo: Ju, useReducer: Zo, useRef: Hu, useState: function() {
  return Zo(Xr);
}, useDebugValue: Bs, useDeferredValue: function(e) {
  var t = st();
  return xe === null ? t.memoizedState = e : Zu(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = Zo(Xr)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: Ou, useSyncExternalStore: Fu, useId: ed, unstable_isNewReconciler: !1 };
function pt(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jo = { isMounted: function(e) {
  return (e = e._reactInternals) ? zn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), a = sn(e), i = Rt(r, a);
  i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (gt(t, e, a, r), Ma(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), a = sn(e), i = Rt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (gt(t, e, a, r), Ma(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = sn(e), a = Rt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = an(e, a, r), t !== null && (gt(t, e, r, n), Ma(t, e, r));
} };
function Wl(e, t, n, r, a, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(a, i) : !0;
}
function ad(e, t, n) {
  var r = !1, a = un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = it(i) : (a = Ve(t) ? Cn : Le.current, r = t.contextTypes, i = (r = r != null) ? nr(e, a) : un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = jo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ql(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jo.enqueueReplaceState(t, t.state, null);
}
function Fi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Rs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = it(i) : (i = Ve(t) ? Cn : Le.current, a.context = nr(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Oi(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && jo.enqueueReplaceState(a, a.state, null), to(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t) {
  try {
    var n = "", r = t;
    do
      n += bp(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function ei(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var nm = typeof WeakMap == "function" ? WeakMap : Map;
function od(e, t, n) {
  n = Rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    io || (io = !0, Xi = r), qi(e, t);
  }, n;
}
function id(e, t, n) {
  n = Rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      qi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    qi(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Yl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nm();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = gm.bind(null, e, t, n), t.then(e, e));
}
function Kl(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xl(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rt(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
}
var rm = Ot.ReactCurrentOwner, Be = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Au(t, null, n, r) : ar(t, e.child, n, r);
}
function Jl(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Zn(t, a), r = Os(e, t, n, r, i, a), n = Fs(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Dt(e, t, a)) : (ce && n && Es(t), t.flags |= 1, Ie(e, t, r, a), t.child);
}
function Zl(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ks(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, sd(e, t, i, r, a)) : (e = $a(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Vr, n(s, r) && e.ref === t.ref) return Dt(e, t, a);
  }
  return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function sd(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Vr(i, r) && e.ref === t.ref) if (Be = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (Be = !0);
    else return t.lanes = e.lanes, Dt(e, t, a);
  }
  return Bi(e, t, n, r, a);
}
function ld(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Qn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Qn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ae(Qn, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ae(Qn, We), We |= r;
  return Ie(e, t, a, n), t.child;
}
function cd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bi(e, t, n, r, a) {
  var i = Ve(n) ? Cn : Le.current;
  return i = nr(t, i), Zn(t, a), n = Os(e, t, n, r, i, a), r = Fs(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Dt(e, t, a)) : (ce && r && Es(t), t.flags |= 1, Ie(e, t, n, a), t.child);
}
function ec(e, t, n, r, a) {
  if (Ve(n)) {
    var i = !0;
    Ka(t);
  } else i = !1;
  if (Zn(t, a), t.stateNode === null) Ra(e, t), ad(t, n, r), Fi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, c = t.memoizedProps;
    s.props = c;
    var l = s.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = it(p) : (p = Ve(n) ? Cn : Le.current, p = nr(t, p));
    var v = n.getDerivedStateFromProps, h = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== r || l !== p) && Ql(t, s, r, p), Yt = !1;
    var y = t.memoizedState;
    s.state = y, to(t, r, s, a), l = t.memoizedState, c !== r || y !== l || Ue.current || Yt ? (typeof v == "function" && (Oi(t, n, v, r), l = t.memoizedState), (c = Yt || Wl(t, n, c, r, y, l, p)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = p, r = c) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, $u(e, t), c = t.memoizedProps, p = t.type === t.elementType ? c : pt(t.type, c), s.props = p, h = t.pendingProps, y = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = it(l) : (l = Ve(n) ? Cn : Le.current, l = nr(t, l));
    var m = n.getDerivedStateFromProps;
    (v = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== h || y !== l) && Ql(t, s, r, l), Yt = !1, y = t.memoizedState, s.state = y, to(t, r, s, a);
    var j = t.memoizedState;
    c !== h || y !== j || Ue.current || Yt ? (typeof m == "function" && (Oi(t, n, m, r), j = t.memoizedState), (p = Yt || Wl(t, n, p, r, y, j, l) || !1) ? (v || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, j, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, j, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), s.props = r, s.state = j, s.context = l, r = p) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ui(e, t, n, r, i, a);
}
function Ui(e, t, n, r, a, i) {
  cd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Ol(t, n, !1), Dt(e, t, i);
  r = t.stateNode, rm.current = t;
  var c = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, i), t.child = ar(t, null, c, i)) : Ie(e, t, c, i), t.memoizedState = r.state, a && Ol(t, n, !0), t.child;
}
function ud(e) {
  var t = e.stateNode;
  t.pendingContext ? Dl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dl(e, t.context, !1), As(e, t.containerInfo);
}
function tc(e, t, n, r, a) {
  return rr(), zs(a), t.flags |= 256, Ie(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dd(e, t, n) {
  var r = t.pendingProps, a = de.current, i = !1, s = (t.flags & 128) !== 0, c;
  if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ae(de, a & 1), e === null)
    return $i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = So(s, r, 0, null), e = jn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gi(n), t.memoizedState = Vi, e) : Us(t, s));
  if (a = e.memoizedState, a !== null && (c = a.dehydrated, c !== null)) return am(e, t, s, r, c, a, n);
  if (i) {
    i = r.fallback, s = t.mode, a = e.child, c = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ln(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), c !== null ? i = ln(c, i) : (i = jn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Gi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Vi, r;
  }
  return i = e.child, e = i.sibling, r = ln(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Us(e, t) {
  return t = So({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ka(e, t, n, r) {
  return r !== null && zs(r), ar(t, e.child, null, n), e = Us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function am(e, t, n, r, a, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ei(Error(z(422))), ka(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = So({ mode: "visible", children: r.children }, a, 0, null), i = jn(i, a, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Gi(s), t.memoizedState = Vi, i);
  if (!(t.mode & 1)) return ka(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
    return r = c, i = Error(z(419)), r = ei(i, r, void 0), ka(e, t, s, r);
  }
  if (c = (s & e.childLanes) !== 0, Be || c) {
    if (r = Se, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, $t(e, a), gt(r, e, a, -1));
    }
    return Ys(), r = ei(Error(z(421))), ka(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Qe = rn(a.nextSibling), Ye = t, ce = !0, mt = null, e !== null && (nt[rt++] = Tt, nt[rt++] = Lt, nt[rt++] = Sn, Tt = e.id, Lt = e.overflow, Sn = t), t = Us(t, r.children), t.flags |= 4096, t);
}
function nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ti(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function pd(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Ie(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
      else if (e.tag === 19) nc(e, n, t);
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
  if (ae(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && no(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ti(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && no(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      ti(t, !0, n, null, i);
      break;
    case "together":
      ti(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ra(e, t) {
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
function om(e, t, n) {
  switch (t.tag) {
    case 3:
      ud(t), rr();
      break;
    case 5:
      Du(t);
      break;
    case 1:
      Ve(t.type) && Ka(t);
      break;
    case 4:
      As(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      ae(Za, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ae(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? dd(e, t, n) : (ae(de, de.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      ae(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return pd(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ae(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ld(e, t, n);
  }
  return Dt(e, t, n);
}
var fd, Hi, md, hd;
fd = function(e, t) {
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
Hi = function() {
};
md = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, xn(Nt.current);
    var i = null;
    switch (n) {
      case "input":
        a = mi(e, a), r = mi(e, r), i = [];
        break;
      case "select":
        a = fe({}, a, { value: void 0 }), r = fe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = vi(e, a), r = vi(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qa);
    }
    xi(n, r);
    var s;
    n = null;
    for (p in a) if (!r.hasOwnProperty(p) && a.hasOwnProperty(p) && a[p] != null) if (p === "style") {
      var c = a[p];
      for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && ($r.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
    for (p in r) {
      var l = r[p];
      if (c = a != null ? a[p] : void 0, r.hasOwnProperty(p) && l !== c && (l != null || c != null)) if (p === "style") if (c) {
        for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        p,
        n
      )), n = l;
      else p === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (i = i || []).push(p, l)) : p === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(p, "" + l) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && ($r.hasOwnProperty(p) ? (l != null && p === "onScroll" && ie("scroll", e), i || c === l || (i = [])) : (i = i || []).push(p, l));
    }
    n && (i = i || []).push("style", n);
    var p = i;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
hd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
  if (!ce) switch (e.tailMode) {
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
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function im(e, t, n) {
  var r = t.pendingProps;
  switch (bs(t), t.tag) {
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
      return Me(t), null;
    case 1:
      return Ve(t.type) && Ya(), Me(t), null;
    case 3:
      return r = t.stateNode, or(), se(Ue), se(Le), $s(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (es(mt), mt = null))), Hi(e, t), Me(t), null;
    case 5:
      Is(t);
      var a = xn(Yr.current);
      if (n = t.type, e !== null && t.stateNode != null) md(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Me(t), null;
        }
        if (e = xn(Nt.current), wa(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ct] = t, r[Wr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Er.length; a++) ie(Er[a], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie(
                "error",
                r
              ), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              dl(r, i), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ie("invalid", r);
              break;
            case "textarea":
              fl(r, i), ie("invalid", r);
          }
          xi(n, i), a = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var c = i[s];
            s === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && xa(r.textContent, c, e), a = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && xa(
              r.textContent,
              c,
              e
            ), a = ["children", "" + c]) : $r.hasOwnProperty(s) && c != null && s === "onScroll" && ie("scroll", r);
          }
          switch (n) {
            case "input":
              da(r), pl(r, i, !0);
              break;
            case "textarea":
              da(r), ml(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ct] = t, e[Wr] = r, fd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = wi(n, r), n) {
              case "dialog":
                ie("cancel", e), ie("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Er.length; a++) ie(Er[a], e);
                a = r;
                break;
              case "source":
                ie("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  e
                ), ie("load", e), a = r;
                break;
              case "details":
                ie("toggle", e), a = r;
                break;
              case "input":
                dl(e, r), a = mi(e, r), ie("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = fe({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                fl(e, r), a = vi(e, r), ie("invalid", e);
                break;
              default:
                a = r;
            }
            xi(n, a), c = a;
            for (i in c) if (c.hasOwnProperty(i)) {
              var l = c[i];
              i === "style" ? Hc(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Vc(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Dr(e, l) : typeof l == "number" && Dr(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && ($r.hasOwnProperty(i) ? l != null && i === "onScroll" && ie("scroll", e) : l != null && fs(e, i, l, s));
            }
            switch (n) {
              case "input":
                da(e), pl(e, r, !1);
                break;
              case "textarea":
                da(e), ml(e);
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
                typeof a.onClick == "function" && (e.onclick = Qa);
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
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) hd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = xn(Yr.current), xn(Nt.current), wa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (i = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
            case 3:
              xa(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xa(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return Me(t), null;
    case 13:
      if (se(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ce && Qe !== null && t.mode & 1 && !(t.flags & 128)) Lu(), rr(), t.flags |= 98560, i = !1;
        else if (i = wa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(z(317));
            i[Ct] = t;
          } else rr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Me(t), i = !1;
        } else mt !== null && (es(mt), mt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? we === 0 && (we = 3) : Ys())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
    case 4:
      return or(), Hi(e, t), e === null && Gr(t.stateNode.containerInfo), Me(t), null;
    case 10:
      return Ts(t.type._context), Me(t), null;
    case 17:
      return Ve(t.type) && Ya(), Me(t), null;
    case 19:
      if (se(de), i = t.memoizedState, i === null) return Me(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) kr(i, !1);
      else {
        if (we !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = no(e), s !== null) {
            for (t.flags |= 128, kr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ge() > sr && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = no(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ce) return Me(t), null;
        } else 2 * ge() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = de.current, ae(de, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
    case 22:
    case 23:
      return Qs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function sm(e, t) {
  switch (bs(t), t.tag) {
    case 1:
      return Ve(t.type) && Ya(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return or(), se(Ue), se(Le), $s(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Is(t), null;
    case 13:
      if (se(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        rr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(de), null;
    case 4:
      return or(), null;
    case 10:
      return Ts(t.type._context), null;
    case 22:
    case 23:
      return Qs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ca = !1, Te = !1, lm = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    he(e, t, r);
  }
  else n.current = null;
}
function Wi(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var rc = !1;
function cm(e, t) {
  if (Pi = Ga, e = wu(), Ns(e)) {
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
        var s = 0, c = -1, l = -1, p = 0, v = 0, h = e, y = null;
        t: for (; ; ) {
          for (var m; h !== n || a !== 0 && h.nodeType !== 3 || (c = s + a), h !== i || r !== 0 && h.nodeType !== 3 || (l = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (m = h.firstChild) !== null; )
            y = h, h = m;
          for (; ; ) {
            if (h === e) break t;
            if (y === n && ++p === a && (c = s), y === i && ++v === r && (l = s), (m = h.nextSibling) !== null) break;
            h = y, y = h.parentNode;
          }
          h = m;
        }
        n = c === -1 || l === -1 ? null : { start: c, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mi = { focusedElem: e, selectionRange: n }, Ga = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var j = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (j !== null) {
            var b = j.memoizedProps, F = j.memoizedState, d = t.stateNode, u = d.getSnapshotBeforeUpdate(t.elementType === t.type ? b : pt(t.type, b), F);
            d.__reactInternalSnapshotBeforeUpdate = u;
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
    } catch (k) {
      he(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return j = rc, rc = !1, j;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && Wi(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function ko(e, t) {
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
function Qi(e) {
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
function gd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Wr], delete t[Ri], delete t[Gf], delete t[Hf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function vd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || vd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), e = e.sibling;
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
var _e = null, ft = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) yd(e, t, n), n = n.sibling;
}
function yd(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(mo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Te || Wn(n, t);
    case 6:
      var r = _e, a = ft;
      _e = null, Wt(e, t, n), _e = r, ft = a, _e !== null && (ft ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (ft ? (e = _e, n = n.stateNode, e.nodeType === 8 ? Qo(e.parentNode, n) : e.nodeType === 1 && Qo(e, n), Br(e)) : Qo(_e, n.stateNode));
      break;
    case 4:
      r = _e, a = ft, _e = n.stateNode.containerInfo, ft = !0, Wt(e, t, n), _e = r, ft = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Te && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Wi(n, t, s), a = a.next;
        } while (a !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!Te && (Wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        he(n, t, c);
      }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null, Wt(e, t, n), Te = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lm()), t.forEach(function(r) {
      var a = ym.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var i = e, s = t, c = s;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            _e = c.stateNode, ft = !1;
            break e;
          case 3:
            _e = c.stateNode.containerInfo, ft = !0;
            break e;
          case 4:
            _e = c.stateNode.containerInfo, ft = !0;
            break e;
        }
        c = c.return;
      }
      if (_e === null) throw Error(z(160));
      yd(i, s, a), _e = null, ft = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (p) {
      he(a, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xd(t, e), t = t.sibling;
}
function xd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (dt(t, e), jt(e), r & 4) {
        try {
          Rr(3, e, e.return), ko(3, e);
        } catch (b) {
          he(e, e.return, b);
        }
        try {
          Rr(5, e, e.return);
        } catch (b) {
          he(e, e.return, b);
        }
      }
      break;
    case 1:
      dt(t, e), jt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (dt(t, e), jt(e), r & 512 && n !== null && Wn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Dr(a, "");
        } catch (b) {
          he(e, e.return, b);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, c = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          c === "input" && i.type === "radio" && i.name != null && qc(a, i), wi(c, s);
          var p = wi(c, i);
          for (s = 0; s < l.length; s += 2) {
            var v = l[s], h = l[s + 1];
            v === "style" ? Hc(a, h) : v === "dangerouslySetInnerHTML" ? Vc(a, h) : v === "children" ? Dr(a, h) : fs(a, v, h, p);
          }
          switch (c) {
            case "input":
              hi(a, i);
              break;
            case "textarea":
              Bc(a, i);
              break;
            case "select":
              var y = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var m = i.value;
              m != null ? Yn(a, !!i.multiple, m, !1) : y !== !!i.multiple && (i.defaultValue != null ? Yn(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Yn(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[Wr] = i;
        } catch (b) {
          he(e, e.return, b);
        }
      }
      break;
    case 6:
      if (dt(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (b) {
          he(e, e.return, b);
        }
      }
      break;
    case 3:
      if (dt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Br(t.containerInfo);
      } catch (b) {
        he(e, e.return, b);
      }
      break;
    case 4:
      dt(t, e), jt(e);
      break;
    case 13:
      dt(t, e), jt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Hs = ge())), r & 4 && oc(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (p = Te) || v, dt(t, e), Te = p) : dt(t, e), jt(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !v && e.mode & 1) for (I = e, v = e.child; v !== null; ) {
          for (h = I = v; I !== null; ) {
            switch (y = I, m = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rr(4, y, y.return);
                break;
              case 1:
                Wn(y, y.return);
                var j = y.stateNode;
                if (typeof j.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, j.props = t.memoizedProps, j.state = t.memoizedState, j.componentWillUnmount();
                  } catch (b) {
                    he(r, n, b);
                  }
                }
                break;
              case 5:
                Wn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  sc(h);
                  continue;
                }
            }
            m !== null ? (m.return = y, I = m) : sc(h);
          }
          v = v.sibling;
        }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                a = h.stateNode, p ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = h.stateNode, l = h.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Gc("display", s));
              } catch (b) {
                he(e, e.return, b);
              }
            }
          } else if (h.tag === 6) {
            if (v === null) try {
              h.stateNode.nodeValue = p ? "" : h.memoizedProps;
            } catch (b) {
              he(e, e.return, b);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), h = h.return;
          }
          v === h && (v = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      dt(t, e), jt(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      dt(
        t,
        e
      ), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vd(n)) {
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
          r.flags & 32 && (Dr(a, ""), r.flags &= -33);
          var i = ac(e);
          Ki(e, i, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, c = ac(e);
          Yi(e, c, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function um(e, t, n) {
  I = e, wd(e);
}
function wd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var a = I, i = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || Ca;
      if (!s) {
        var c = a.alternate, l = c !== null && c.memoizedState !== null || Te;
        c = Ca;
        var p = Te;
        if (Ca = s, (Te = l) && !p) for (I = a; I !== null; ) s = I, l = s.child, s.tag === 22 && s.memoizedState !== null ? lc(a) : l !== null ? (l.return = s, I = l) : lc(a);
        for (; i !== null; ) I = i, wd(i), i = i.sibling;
        I = a, Ca = c, Te = p;
      }
      ic(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, I = i) : ic(e);
  }
}
function ic(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Te || ko(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Te) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Vl(t, i, r);
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
              Vl(t, s, n);
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
              var p = t.alternate;
              if (p !== null) {
                var v = p.memoizedState;
                if (v !== null) {
                  var h = v.dehydrated;
                  h !== null && Br(h);
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
        Te || t.flags & 512 && Qi(t);
      } catch (y) {
        he(t, t.return, y);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function sc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function lc(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ko(4, t);
          } catch (l) {
            he(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              he(t, a, l);
            }
          }
          var i = t.return;
          try {
            Qi(t);
          } catch (l) {
            he(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qi(t);
          } catch (l) {
            he(t, s, l);
          }
      }
    } catch (l) {
      he(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      c.return = t.return, I = c;
      break;
    }
    I = t.return;
  }
}
var dm = Math.ceil, oo = Ot.ReactCurrentDispatcher, Vs = Ot.ReactCurrentOwner, ot = Ot.ReactCurrentBatchConfig, J = 0, Se = null, ve = null, Ne = 0, We = 0, Qn = pn(0), we = 0, Zr = null, Nn = 0, Co = 0, Gs = 0, Ar = null, qe = null, Hs = 0, sr = 1 / 0, Pt = null, io = !1, Xi = null, on = null, Sa = !1, Zt = null, so = 0, Ir = 0, Ji = null, Aa = -1, Ia = 0;
function $e() {
  return J & 6 ? ge() : Aa !== -1 ? Aa : Aa = ge();
}
function sn(e) {
  return e.mode & 1 ? J & 2 && Ne !== 0 ? Ne & -Ne : Qf.transition !== null ? (Ia === 0 && (Ia = au()), Ia) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : du(e.type)), e) : 1;
}
function gt(e, t, n, r) {
  if (50 < Ir) throw Ir = 0, Ji = null, Error(z(185));
  aa(e, n, r), (!(J & 2) || e !== Se) && (e === Se && (!(J & 2) && (Co |= n), we === 4 && Xt(e, Ne)), Ge(e, r), n === 1 && J === 0 && !(t.mode & 1) && (sr = ge() + 500, xo && fn()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  Wp(e, t);
  var r = Va(e, e === Se ? Ne : 0);
  if (r === 0) n !== null && vl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && vl(n), t === 1) e.tag === 0 ? Wf(cc.bind(null, e)) : Pu(cc.bind(null, e)), Uf(function() {
      !(J & 6) && fn();
    }), n = null;
    else {
      switch (ou(r)) {
        case 1:
          n = ys;
          break;
        case 4:
          n = nu;
          break;
        case 16:
          n = Ua;
          break;
        case 536870912:
          n = ru;
          break;
        default:
          n = Ua;
      }
      n = bd(n, jd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function jd(e, t) {
  if (Aa = -1, Ia = 0, J & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = Va(e, e === Se ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = lo(e, r);
  else {
    t = r;
    var a = J;
    J |= 2;
    var i = Cd();
    (Se !== e || Ne !== t) && (Pt = null, sr = ge() + 500, wn(e, t));
    do
      try {
        mm();
        break;
      } catch (c) {
        kd(e, c);
      }
    while (!0);
    Ms(), oo.current = i, J = a, ve !== null ? t = 0 : (Se = null, Ne = 0, t = we);
  }
  if (t !== 0) {
    if (t === 2 && (a = _i(e), a !== 0 && (r = a, t = Zi(e, a))), t === 1) throw n = Zr, wn(e, 0), Xt(e, r), Ge(e, ge()), n;
    if (t === 6) Xt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !pm(a) && (t = lo(e, r), t === 2 && (i = _i(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = Zr, wn(e, 0), Xt(e, r), Ge(e, ge()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          gn(e, qe, Pt);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = Hs + 500 - ge(), 10 < t)) {
            if (Va(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Li(gn.bind(null, e, qe, Pt), t);
            break;
          }
          gn(e, qe, Pt);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ht(r);
            i = 1 << s, s = t[s], s > a && (a = s), r &= ~i;
          }
          if (r = a, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Li(gn.bind(null, e, qe, Pt), r);
            break;
          }
          gn(e, qe, Pt);
          break;
        case 5:
          gn(e, qe, Pt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ge(e, ge()), e.callbackNode === n ? jd.bind(null, e) : null;
}
function Zi(e, t) {
  var n = Ar;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = lo(e, t), e !== 2 && (t = qe, qe = n, t !== null && es(t)), e;
}
function es(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
}
function pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], i = a.getSnapshot;
        a = a.value;
        try {
          if (!vt(i(), a)) return !1;
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
  for (t &= ~Gs, t &= ~Co, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ht(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function cc(e) {
  if (J & 6) throw Error(z(327));
  er();
  var t = Va(e, 0);
  if (!(t & 1)) return Ge(e, ge()), null;
  var n = lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1) throw n = Zr, wn(e, 0), Xt(e, t), Ge(e, ge()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, qe, Pt), Ge(e, ge()), null;
}
function Ws(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (sr = ge() + 500, xo && fn());
  }
}
function En(e) {
  Zt !== null && Zt.tag === 0 && !(J & 6) && er();
  var t = J;
  J |= 1;
  var n = ot.transition, r = te;
  try {
    if (ot.transition = null, te = 1, e) return e();
  } finally {
    te = r, ot.transition = n, J = t, !(J & 6) && fn();
  }
}
function Qs() {
  We = Qn.current, se(Qn);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Bf(n)), ve !== null) for (n = ve.return; n !== null; ) {
    var r = n;
    switch (bs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ya();
        break;
      case 3:
        or(), se(Ue), se(Le), $s();
        break;
      case 5:
        Is(r);
        break;
      case 4:
        or();
        break;
      case 13:
        se(de);
        break;
      case 19:
        se(de);
        break;
      case 10:
        Ts(r.type._context);
        break;
      case 22:
      case 23:
        Qs();
    }
    n = n.return;
  }
  if (Se = e, ve = e = ln(e.current, null), Ne = We = t, we = 0, Zr = null, Gs = Co = Nn = 0, qe = Ar = null, yn !== null) {
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
function kd(e, t) {
  do {
    var n = ve;
    try {
      if (Ms(), Ta.current = ao, ro) {
        for (var r = pe.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        ro = !1;
      }
      if (_n = 0, Ce = xe = pe = null, Lr = !1, Kr = 0, Vs.current = null, n === null || n.return === null) {
        we = 1, Zr = t, ve = null;
        break;
      }
      e: {
        var i = e, s = n.return, c = n, l = t;
        if (t = Ne, c.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var p = l, v = c, h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var y = v.alternate;
            y ? (v.updateQueue = y.updateQueue, v.memoizedState = y.memoizedState, v.lanes = y.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var m = Kl(s);
          if (m !== null) {
            m.flags &= -257, Xl(m, s, c, i, t), m.mode & 1 && Yl(i, p, t), t = m, l = p;
            var j = t.updateQueue;
            if (j === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(l), t.updateQueue = b;
            } else j.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Yl(i, p, t), Ys();
              break e;
            }
            l = Error(z(426));
          }
        } else if (ce && c.mode & 1) {
          var F = Kl(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Xl(F, s, c, i, t), zs(ir(l, c));
            break e;
          }
        }
        i = l = ir(l, c), we !== 4 && (we = 2), Ar === null ? Ar = [i] : Ar.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = od(i, l, t);
              Ul(i, d);
              break e;
            case 1:
              c = l;
              var u = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof u.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (on === null || !on.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = id(i, c, t);
                Ul(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _d(n);
    } catch (w) {
      t = w, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cd() {
  var e = oo.current;
  return oo.current = ao, e === null ? ao : e;
}
function Ys() {
  (we === 0 || we === 3 || we === 2) && (we = 4), Se === null || !(Nn & 268435455) && !(Co & 268435455) || Xt(Se, Ne);
}
function lo(e, t) {
  var n = J;
  J |= 2;
  var r = Cd();
  (Se !== e || Ne !== t) && (Pt = null, wn(e, t));
  do
    try {
      fm();
      break;
    } catch (a) {
      kd(e, a);
    }
  while (!0);
  if (Ms(), J = n, oo.current = r, ve !== null) throw Error(z(261));
  return Se = null, Ne = 0, we;
}
function fm() {
  for (; ve !== null; ) Sd(ve);
}
function mm() {
  for (; ve !== null && !Dp(); ) Sd(ve);
}
function Sd(e) {
  var t = Ed(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? _d(e) : ve = t, Vs.current = null;
}
function _d(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = sm(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        we = 6, ve = null;
        return;
      }
    } else if (n = im(n, t, We), n !== null) {
      ve = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function gn(e, t, n) {
  var r = te, a = ot.transition;
  try {
    ot.transition = null, te = 1, hm(e, t, n, r);
  } finally {
    ot.transition = a, te = r;
  }
  return null;
}
function hm(e, t, n, r) {
  do
    er();
  while (Zt !== null);
  if (J & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Qp(e, i), e === Se && (ve = Se = null, Ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Sa || (Sa = !0, bd(Ua, function() {
    return er(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ot.transition, ot.transition = null;
    var s = te;
    te = 1;
    var c = J;
    J |= 4, Vs.current = null, cm(e, n), xd(n, e), Af(Mi), Ga = !!Pi, Mi = Pi = null, e.current = n, um(n), Op(), J = c, te = s, ot.transition = i;
  } else e.current = n;
  if (Sa && (Sa = !1, Zt = e, so = a), i = e.pendingLanes, i === 0 && (on = null), Bp(n.stateNode), Ge(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (io) throw io = !1, e = Xi, Xi = null, e;
  return so & 1 && e.tag !== 0 && er(), i = e.pendingLanes, i & 1 ? e === Ji ? Ir++ : (Ir = 0, Ji = e) : Ir = 0, fn(), null;
}
function er() {
  if (Zt !== null) {
    var e = ou(so), t = ot.transition, n = te;
    try {
      if (ot.transition = null, te = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, so = 0, J & 6) throw Error(z(331));
        var a = J;
        for (J |= 4, I = e.current; I !== null; ) {
          var i = I, s = i.child;
          if (I.flags & 16) {
            var c = i.deletions;
            if (c !== null) {
              for (var l = 0; l < c.length; l++) {
                var p = c[l];
                for (I = p; I !== null; ) {
                  var v = I;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) h.return = v, I = h;
                  else for (; I !== null; ) {
                    v = I;
                    var y = v.sibling, m = v.return;
                    if (gd(v), v === p) {
                      I = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = m, I = y;
                      break;
                    }
                    I = m;
                  }
                }
              }
              var j = i.alternate;
              if (j !== null) {
                var b = j.child;
                if (b !== null) {
                  j.child = null;
                  do {
                    var F = b.sibling;
                    b.sibling = null, b = F;
                  } while (b !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, I = s;
          else e: for (; I !== null; ) {
            if (i = I, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, I = d;
              break e;
            }
            I = i.return;
          }
        }
        var u = e.current;
        for (I = u; I !== null; ) {
          s = I;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) f.return = s, I = f;
          else e: for (s = u; I !== null; ) {
            if (c = I, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  ko(9, c);
              }
            } catch (w) {
              he(c, c.return, w);
            }
            if (c === s) {
              I = null;
              break e;
            }
            var k = c.sibling;
            if (k !== null) {
              k.return = c.return, I = k;
              break e;
            }
            I = c.return;
          }
        }
        if (J = a, fn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(mo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      te = n, ot.transition = t;
    }
  }
  return !1;
}
function uc(e, t, n) {
  t = ir(n, t), t = od(e, t, 1), e = an(e, t, 1), t = $e(), e !== null && (aa(e, 1, t), Ge(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) uc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      uc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = ir(n, e), e = id(t, e, 1), t = an(t, e, 1), e = $e(), t !== null && (aa(t, 1, e), Ge(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function gm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ne & n) === n && (we === 4 || we === 3 && (Ne & 130023424) === Ne && 500 > ge() - Hs ? wn(e, 0) : Gs |= n), Ge(e, t);
}
function Nd(e, t) {
  t === 0 && (e.mode & 1 ? (t = ma, ma <<= 1, !(ma & 130023424) && (ma = 4194304)) : t = 1);
  var n = $e();
  e = $t(e, t), e !== null && (aa(e, t, n), Ge(e, n));
}
function vm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Nd(e, n);
}
function ym(e, t) {
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
  r !== null && r.delete(t), Nd(e, n);
}
var Ed;
Ed = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ue.current) Be = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, om(e, t, n);
    Be = !!(e.flags & 131072);
  }
  else Be = !1, ce && t.flags & 1048576 && Mu(t, Ja, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ra(e, t), e = t.pendingProps;
      var a = nr(t, Le.current);
      Zn(t, n), a = Os(null, t, r, e, a, n);
      var i = Fs();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (i = !0, Ka(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Rs(t), a.updater = jo, t.stateNode = a, a._reactInternals = t, Fi(t, r, e, n), t = Ui(null, t, r, !0, i, n)) : (t.tag = 0, ce && i && Es(t), Ie(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ra(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = wm(r), e = pt(r, e), a) {
          case 0:
            t = Bi(null, t, r, e, n);
            break e;
          case 1:
            t = ec(null, t, r, e, n);
            break e;
          case 11:
            t = Jl(null, t, r, e, n);
            break e;
          case 14:
            t = Zl(null, t, r, pt(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), Bi(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), ec(e, t, r, a, n);
    case 3:
      e: {
        if (ud(t), e === null) throw Error(z(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, $u(e, t), to(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = ir(Error(z(423)), t), t = tc(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = ir(Error(z(424)), t), t = tc(e, t, r, n, a);
          break e;
        } else for (Qe = rn(t.stateNode.containerInfo.firstChild), Ye = t, ce = !0, mt = null, n = Au(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return Du(t), e === null && $i(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = a.children, Ti(r, a) ? s = null : i !== null && Ti(r, i) && (t.flags |= 32), cd(e, t), Ie(e, t, s, n), t.child;
    case 6:
      return e === null && $i(t), null;
    case 13:
      return dd(e, t, n);
    case 4:
      return As(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : Ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), Jl(e, t, r, a, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, s = a.value, ae(Za, r._currentValue), r._currentValue = s, i !== null) if (vt(i.value, s)) {
          if (i.children === a.children && !Ue.current) {
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
                  var p = i.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var v = p.pending;
                    v === null ? l.next = l : (l.next = v.next, v.next = l), p.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Di(
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
            s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Di(s, n, t), s = i.sibling;
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
      return a = t.type, r = t.pendingProps.children, Zn(t, n), a = it(a), r = r(a), t.flags |= 1, Ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = pt(r, t.pendingProps), a = pt(r.type, a), Zl(e, t, r, a, n);
    case 15:
      return sd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), Ra(e, t), t.tag = 1, Ve(r) ? (e = !0, Ka(t)) : e = !1, Zn(t, n), ad(t, r, a), Fi(t, r, a, n), Ui(null, t, r, !0, e, n);
    case 19:
      return pd(e, t, n);
    case 22:
      return ld(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function bd(e, t) {
  return tu(e, t);
}
function xm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function at(e, t, n, r) {
  return new xm(e, t, n, r);
}
function Ks(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wm(e) {
  if (typeof e == "function") return Ks(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hs) return 11;
    if (e === gs) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $a(e, t, n, r, a, i) {
  var s = 2;
  if (r = e, typeof e == "function") Ks(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Dn:
      return jn(n.children, a, i, t);
    case ms:
      s = 8, a |= 8;
      break;
    case ui:
      return e = at(12, n, t, a | 2), e.elementType = ui, e.lanes = i, e;
    case di:
      return e = at(13, n, t, a), e.elementType = di, e.lanes = i, e;
    case pi:
      return e = at(19, n, t, a), e.elementType = pi, e.lanes = i, e;
    case Dc:
      return So(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ic:
          s = 10;
          break e;
        case $c:
          s = 9;
          break e;
        case hs:
          s = 11;
          break e;
        case gs:
          s = 14;
          break e;
        case Qt:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = at(s, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function jn(e, t, n, r) {
  return e = at(7, e, r, t), e.lanes = n, e;
}
function So(e, t, n, r) {
  return e = at(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ni(e, t, n) {
  return e = at(6, e, null, t), e.lanes = n, e;
}
function ri(e, t, n) {
  return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function jm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $o(0), this.expirationTimes = $o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $o(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Xs(e, t, n, r, a, i, s, c, l) {
  return e = new jm(e, t, n, c, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = at(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rs(i), e;
}
function km(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function zd(e) {
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
          if (Ve(t.type)) {
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
    if (Ve(n)) return zu(e, n, t);
  }
  return t;
}
function Pd(e, t, n, r, a, i, s, c, l) {
  return e = Xs(n, r, !0, e, a, i, s, c, l), e.context = zd(null), n = e.current, r = $e(), a = sn(n), i = Rt(r, a), i.callback = t ?? null, an(n, i, a), e.current.lanes = a, aa(e, a, r), Ge(e, r), e;
}
function _o(e, t, n, r) {
  var a = t.current, i = $e(), s = sn(a);
  return n = zd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(a, t, s), e !== null && (gt(e, a, s, i), Ma(e, a, s)), s;
}
function co(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Js(e, t) {
  dc(e, t), (e = e.alternate) && dc(e, t);
}
function Cm() {
  return null;
}
var Md = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zs(e) {
  this._internalRoot = e;
}
No.prototype.render = Zs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  _o(e, t, null, null);
};
No.prototype.unmount = Zs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function() {
      _o(null, e, null, null);
    }), t[It] = null;
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = lu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && uu(e);
  }
};
function el(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Eo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function pc() {
}
function Sm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = co(s);
        i.call(p);
      };
    }
    var s = Pd(t, r, e, 0, null, !1, !1, "", pc);
    return e._reactRootContainer = s, e[It] = s.current, Gr(e.nodeType === 8 ? e.parentNode : e), En(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var p = co(l);
      c.call(p);
    };
  }
  var l = Xs(e, 0, !1, null, null, !1, !1, "", pc);
  return e._reactRootContainer = l, e[It] = l.current, Gr(e.nodeType === 8 ? e.parentNode : e), En(function() {
    _o(t, l, n, r);
  }), l;
}
function bo(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof a == "function") {
      var c = a;
      a = function() {
        var l = co(s);
        c.call(l);
      };
    }
    _o(t, s, e, a);
  } else s = Sm(n, t, e, a, r);
  return co(s);
}
iu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nr(t.pendingLanes);
        n !== 0 && (xs(t, n | 1), Ge(t, ge()), !(J & 6) && (sr = ge() + 500, fn()));
      }
      break;
    case 13:
      En(function() {
        var r = $t(e, 1);
        if (r !== null) {
          var a = $e();
          gt(r, e, 1, a);
        }
      }), Js(e, 1);
  }
};
ws = function(e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = $e();
      gt(t, e, 134217728, n);
    }
    Js(e, 134217728);
  }
};
su = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = $t(e, t);
    if (n !== null) {
      var r = $e();
      gt(n, e, t, r);
    }
    Js(e, t);
  }
};
lu = function() {
  return te;
};
cu = function(e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
ki = function(e, t, n) {
  switch (t) {
    case "input":
      if (hi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = yo(r);
            if (!a) throw Error(z(90));
            Fc(r), hi(r, a);
          }
        }
      }
      break;
    case "textarea":
      Bc(e, n);
      break;
    case "select":
      t = n.value, t != null && Yn(e, !!n.multiple, t, !1);
  }
};
Yc = Ws;
Kc = En;
var _m = { usingClientEntryPoint: !1, Events: [ia, Bn, yo, Wc, Qc, Ws] }, Cr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nm = { bundleType: Cr.bundleType, version: Cr.version, rendererPackageName: Cr.rendererPackageName, rendererConfig: Cr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cr.findFiberByHostInstance || Cm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_a.isDisabled && _a.supportsFiber) try {
    mo = _a.inject(Nm), _t = _a;
  } catch {
  }
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _m;
Xe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!el(t)) throw Error(z(200));
  return km(e, t, null, n);
};
Xe.createRoot = function(e, t) {
  if (!el(e)) throw Error(z(299));
  var n = !1, r = "", a = Md;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Xs(e, 1, !1, null, null, n, !1, r, a), e[It] = t.current, Gr(e.nodeType === 8 ? e.parentNode : e), new Zs(t);
};
Xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Zc(t), e = e === null ? null : e.stateNode, e;
};
Xe.flushSync = function(e) {
  return En(e);
};
Xe.hydrate = function(e, t, n) {
  if (!Eo(t)) throw Error(z(200));
  return bo(null, e, t, !0, n);
};
Xe.hydrateRoot = function(e, t, n) {
  if (!el(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", s = Md;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Pd(t, null, e, 1, n ?? null, a, !1, i, s), e[It] = t.current, Gr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new No(t);
};
Xe.render = function(e, t, n) {
  if (!Eo(t)) throw Error(z(200));
  return bo(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function(e) {
  if (!Eo(e)) throw Error(z(40));
  return e._reactRootContainer ? (En(function() {
    bo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[It] = null;
    });
  }), !0) : !1;
};
Xe.unstable_batchedUpdates = Ws;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Eo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return bo(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Td() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td);
    } catch (e) {
      console.error(e);
    }
}
Td(), Tc.exports = Xe;
var Em = Tc.exports, Ld, fc = Em;
Ld = fc.createRoot, fc.hydrateRoot;
const mc = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, bm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, zm = [
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
], Pm = [
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
function ea(e) {
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
function Mm(e, t = 0) {
  const n = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, r = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, a = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, i = 2 * (Number.isFinite(t) ? t : 0), s = (Number.isFinite(r) ? r : 0) * n + i, c = (Number.isFinite(a) ? a : 0) * n + i;
  return { w: Number.isFinite(s) ? s : 0, h: Number.isFinite(c) ? c : 0 };
}
const kn = () => globalThis.__crycatBase || "";
async function W(e, t) {
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
const $ = {
  health: () => W("/api/health"),
  getSettings: () => W(
    "/api/settings"
  ),
  putSettings: (e) => W("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), W("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => W("/api/assets"),
  patchAsset: (e, t) => W(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => W(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 16) => W(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => W("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => W(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => W(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), W(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => W(
    "/api/contornos"
  ),
  contornoPreview: (e, t) => W(`/api/assets/${e}/contorno-preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  blobs: (e) => W(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => W(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0, r = "final") => `${kn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
  previewUrlSinBordes: (e, t = 0) => `/api/assets/${e}/preview.png?r=${t}`,
  optimize: (e, t = !1) => W("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => W(`/api/job/${e}`),
  /** Restaura una colocación anterior (deshacer/rehacer con resultados). */
  restoreResult: (e) => W("/api/result/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  result: () => W("/api/result"),
  version: () => W("/api/version"),
  checkVersion: () => W("/api/version/check", { method: "POST" }),
  updateVersion: () => W(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => W("/api/version/open", { method: "POST" }),
  estimate: () => W("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0, i = "final") => `${kn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${i}` : ""}`,
  move: (e, t, n) => W(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => W("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => W("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => W(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => W("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => W("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => W(
    "/api/presets/factory"
  ),
  assetsFolder: () => W("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), W("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${kn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => W("/api/presets"),
  savePreset: (e) => W("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => W(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => W(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  ),
  // ------------------------------------------------------- modos --
  modos: () => W("/api/modos"),
  saveModo: (e, t) => W(`/api/modos/${e}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  renameModo: (e, t) => W(`/api/modos/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  loadModo: (e) => W(
    `/api/modos/${e}/load`,
    { method: "POST" }
  ),
  deleteModo: (e) => W(
    `/api/modos/${e}`,
    { method: "DELETE" }
  )
};
async function Tm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((v, h) => {
      a.onload = () => v(), a.onerror = () => h(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, c = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(i * c), l.height = Math.round(s * c), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (v) => l.toBlob((h) => v(h), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Rd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Tm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const ts = [
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
function ns(e) {
  return ts.find((t) => t.key === e) ?? ts[0];
}
function hc(e) {
  const t = ns(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Ad() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return ns(e);
  } catch {
  }
  return ns("wiwi");
}
const Id = {
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
}, $d = x.createContext("es");
function Lm({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx($d.Provider, { value: e, children: t });
}
function tl() {
  return x.useContext($d);
}
function Ze() {
  const e = tl();
  return (t, n) => {
    let r = e === "en" ? Id[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function Rm(e, t, n) {
  return e === "en" ? Id[t] ?? t : t;
}
function re({ size: e = 18, children: t }) {
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
function Dd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function ta({ size: e }) {
  return /* @__PURE__ */ o.jsx(re, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function uo({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function po({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function $m({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ o.jsx(re, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function zo({ size: e }) {
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
function gc({ size: e }) {
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
function Om({ size: e }) {
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
function Fm({ size: e }) {
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
function qm({ size: e }) {
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
function Bm({ size: e }) {
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
function Od({ size: e }) {
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
function na({ size: e }) {
  return /* @__PURE__ */ o.jsx(re, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Fd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Um({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function qd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Vm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Gm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Da({ size: e }) {
  return /* @__PURE__ */ o.jsx(re, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function vc({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Hm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Wm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Qm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Bd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Ym({ size: e }) {
  return /* @__PURE__ */ o.jsx(re, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Ud({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function Km({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Xm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Jm({ size: e }) {
  return /* @__PURE__ */ o.jsx(re, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Zm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function eh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(re, { size: e, children: [
    /* @__PURE__ */ o.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function th({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ze(), i = x.useMemo(() => t.map((E) => E.id), [t]), [s, c] = x.useState(/* @__PURE__ */ new Set()), [l, p] = x.useState("escala"), [v, h] = x.useState(100), [y, m] = x.useState(50), [j, b] = x.useState("mayor"), [F, d] = x.useState("");
  x.useEffect(() => {
    e && (c(/* @__PURE__ */ new Set()), d(""));
  }, [e, i.join(",")]);
  const u = (E) => !s.has(E), f = (E) => c((C) => {
    const T = new Set(C);
    return T.has(E) ? T.delete(E) : T.add(E), T;
  }), k = () => c(
    s.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), w = (E) => {
    const C = E.w_mm_base || 0, T = E.h_mm_base || 0;
    return j === "mayor" ? Math.max(C, T) : j === "menor" ? Math.min(C, T) : 2 * Math.sqrt(Math.max(0, C * T) / Math.PI);
  }, N = (E) => {
    if (l === "tamano") {
      const C = w(E);
      if (C > 0) return Math.min(10, Math.max(0.05, y / C));
    }
    return Math.min(10, Math.max(0.05, v / 100));
  }, g = (E) => {
    const C = N(E);
    return { w: (E.w_mm_base || 0) * C, h: (E.h_mm_base || 0) * C };
  }, _ = async () => {
    let E = 0;
    for (const C of t) {
      if (!u(C.id)) continue;
      const T = N(C) * 100;
      await $.patchAsset(C.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(T * 10) / 10))
      }), E += 1;
    }
    await r(), d(a("{n} elementos ajustados ", { n: E })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((E) => {
          const C = g(E), T = Math.min(98, C.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${E.id}`,
              style: {
                width: `${T}%`,
                maxWidth: `${T}%`,
                aspectRatio: `${C.w || 1} / ${C.h || 1}`,
                opacity: u(E.id) ? 1 : 0.3
              },
              title: `${E.name} · ${C.w.toFixed(1)}×${C.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: $.previewUrl(E.id), alt: "" })
            },
            E.id
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
              onClick: k,
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
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((E) => {
          const C = g(E);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${E.id}`,
              className: u(E.id) ? "sel" : "",
              onClick: () => f(E.id),
              title: E.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: $.previewUrl(E.id), alt: E.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: E.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(E.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  C.w.toFixed(1),
                  "×",
                  C.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            E.id
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
              onClick: () => p("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: l === "tamano" ? "on" : "",
              onClick: () => p("tamano"),
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
                value: String(v),
                onChange: (E) => h(Number(E.target.value))
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
                  value: String(y),
                  onChange: (E) => m(Number(E.target.value))
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
                value: j,
                onChange: (E) => b(E.target.value),
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
        F && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: F })
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
          onClick: _,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function nh({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: i = !1,
  bordeGlobalMm: s = 0,
  faseBordes: c = 0,
  verBordes: l = !0,
  contornoModo: p = "final",
  destacado: v = !1,
  sel: h = !1,
  onSel: y
}) {
  const m = Ze(), [j, b] = x.useState(() => ea(e));
  x.useEffect(() => b(ea(e)), [e]);
  const F = x.useRef(null), d = i && Number(s) || 0, u = Math.max(0, d + j.offset_mm), f = u, k = (P) => {
    const ne = Math.max(0, Math.min(20, Math.round(P * 2) / 2));
    H({ offset_mm: Math.round((ne - d) * 2) / 2 });
  }, w = Mm(j, u), [N, g] = x.useState(""), _ = x.useRef(!1), [E, C] = x.useState(""), T = x.useRef(!1), [G, Q] = x.useState({ tamano: !1, borde: !1, mini: !1 }), Y = x.useRef(null);
  x.useEffect(() => {
    var P;
    v && (Q({ tamano: !0, borde: !0, mini: !0 }), (P = Y.current) == null || P.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [v]), x.useEffect(() => {
    _.current || g(w.w > 0 ? w.w.toFixed(1) : ""), T.current || C(w.h > 0 ? w.h.toFixed(1) : "");
  }, [w.w, w.h]);
  const ue = Number.isFinite(j.w_mm_base) ? j.w_mm_base : 0, je = Number.isFinite(j.h_mm_base) ? j.h_mm_base : 0, Re = (P) => {
    g(P);
    const ne = Number(P.replace(",", "."));
    !Number.isFinite(ne) || ne <= 0 || ue <= 0 || H({ scale_pct: Math.max(5, (ne - 2 * u) / ue * 100) });
  }, R = (P) => {
    C(P);
    const ne = Number(P.replace(",", "."));
    !Number.isFinite(ne) || ne <= 0 || je <= 0 || H({ scale_pct: Math.max(5, (ne - 2 * u) / je * 100) });
  }, q = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && P.mini).length) ?? 0, U = (t == null ? void 0 : t.placements.filter((P) => P.asset_id === e.id && !P.mini).length) ?? 0, H = async (P) => {
    a == null || a(), "copies" in P && (P.copies = Math.max(0, P.copies ?? 0)), b((ne) => ({ ...ne, ...P }));
    try {
      await $.patchAsset(e.id, P);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: Y,
      "data-asset": e.id,
      className: `asset-card${v ? " destacada" : ""}${h ? " sel" : ""}`,
      "data-testid": "asset-card",
      onClick: (P) => {
        P.target.closest("button, input, select, textarea, a") || y == null || y(e.id, P.ctrlKey || P.metaKey || P.shiftKey);
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: $.previewUrlSinBordes(e.id, e.rev ?? 0),
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
                title: m("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => $.assetsFolder().then((P) => $.abrirCarpeta(P.path)).catch(() => $.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ o.jsx(ta, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: m("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var P;
                  return (P = F.current) == null ? void 0 : P.click();
                },
                children: /* @__PURE__ */ o.jsx(Am, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: F,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (P) => {
                  var ke;
                  const ne = (ke = P.target.files) == null ? void 0 : ke[0];
                  if (P.target.value = "", !!ne)
                    try {
                      const { blob: et, name: oe } = await Rd(ne);
                      await $.reemplazar(e.id, et, oe), await n();
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
                title: m("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ o.jsx(Im, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                title: j.bg_removed ? m("Restaurar fondo original") : m("Quitar fondo (inteligente)"),
                onClick: () => (j.bg_removed ? $.restoreBackground(e.id) : $.removeBackground(e.id)).then(n),
                children: j.bg_removed ? /* @__PURE__ */ o.jsx($m, { size: 16 }) : /* @__PURE__ */ o.jsx(po, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: m("Eliminar imagen"),
                onClick: () => $.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ o.jsx(Dm, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${j.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": m("Incluir como mini (rellena huecos)"),
                onClick: () => H({ mini_enabled: !j.mini_enabled }),
                children: [
                  /* @__PURE__ */ o.jsx(na, { size: 15 }),
                  " ",
                  m("Mini")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: `mini-toggle ${j.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": m("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => Q((P) => ({ ...P, borde: !P.borde })),
                children: [
                  /* @__PURE__ */ o.jsx(zo, { size: 15 }),
                  " ",
                  m("Borde")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: m("Copias"), children: [
              /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => H({ copies: j.copies - 1 }), children: "−" }),
              /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: j.copies }),
              /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => H({ copies: j.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => Q((P) => ({ ...P, tamano: !P.tamano })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${G.tamano ? "open" : ""}`, children: "›" }),
                  m("Tamaño"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    w.w.toFixed(1),
                    "×",
                    w.h.toFixed(1),
                    " · ",
                    Math.round(j.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            G.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: m("Escala del elemento (100% = tamaño natural)"), children: m("Escala") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: j.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (P) => H({ scale_pct: Number(P.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
                  Math.round(j.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ o.jsx("span", { title: m("Tamaño exacto en milímetros (mantiene la proporción)"), children: m("Ancho") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: N,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      _.current = !0, T.current = !1;
                    },
                    onBlur: () => {
                      _.current = !1, g(w.w > 0 ? w.w.toFixed(1) : "");
                    },
                    onChange: (P) => Re(P.target.value)
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { children: "mm" }),
                /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ o.jsx("span", { title: m("Tamaño exacto en milímetros (mantiene la proporción)"), children: m("Alto") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: E,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      T.current = !0, _.current = !1;
                    },
                    onBlur: () => {
                      T.current = !1, C(w.h > 0 ? w.h.toFixed(1) : "");
                    },
                    onChange: (P) => R(P.target.value)
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
                onClick: () => Q((P) => ({ ...P, borde: !P.borde })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${G.borde ? "open" : ""}`, children: "›" }),
                  m("Borde adicional"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    f.toFixed(1),
                    " mm",
                    d > 0 ? ` · ${m("global")} ${d.toFixed(1)}` : ""
                  ] })
                ]
              }
            ),
            G.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => k(f - 0.5),
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
                    value: f,
                    onChange: (P) => k(Number(P.target.value))
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => k(f + 0.5),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: d > 0 ? m(
                "El borde global ({g} mm) ya está aplicado: este control ajusta el TOTAL de este elemento (puede ser menor).",
                { g: d.toFixed(1) }
              ) : m("Borde total de este elemento.") }),
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", m("Extender")],
                  ["blanco", m("Blanco")],
                  ["color", m("Color")],
                  ["unir_recto", m("Unir recto")],
                  ["unir_curvo", m("Unir curvo")]
                ].map(([P, ne]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `seg ${(j.offset_modo || "") === P ? "on" : ""}`,
                    "data-testid": `offset-modo-${P}-${e.id}`,
                    onClick: () => H({ offset_modo: P }),
                    children: ne
                  },
                  P
                )),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: j.offset_color || "#ffffff",
                    title: m("Color del borde"),
                    onChange: (P) => H({
                      offset_color: P.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          j.mini_enabled && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => Q((P) => ({ ...P, mini: !P.mini })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${G.mini ? "open" : ""}`, children: "›" }),
                  m("Opciones de mini"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    j.mini_quota,
                    " · ",
                    q
                  ] })
                ]
              }
            ),
            G.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx("span", { title: m("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: m("Cuota") }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => H({ mini_quota: Math.max(
                    1,
                    Math.round((j.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                j.mini_quota
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => H({ mini_quota: Math.min(
                    100,
                    Math.round((j.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: m(" {n} minis", { n: q }) })
            ] }) })
          ] }),
          U > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: m("Colocadas: {n}", { n: U }) }),
          j.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ o.jsx(Bd, { size: 14 }),
            " ",
            j.warnings[0],
            " ",
            j.warnings.some((P) => /blob|trozos sueltos/i.test(P)) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: m("LIMPIA EL CONTORNO")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function rh({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: s,
  faseBordes: c = 0,
  verBordes: l = !0,
  contornoModo: p = "final",
  destacado: v = "",
  seleccion: h = [],
  onSeleccion: y,
  onBulk: m
}) {
  var N, g, _, E;
  const j = Ze(), b = x.useRef(null), [F, d] = x.useState(!1), [u, f] = x.useState(null), k = async (C) => {
    const T = [];
    for (const G of Array.from(C))
      try {
        const { blob: Q, name: Y } = await Rd(G);
        T.push(ea(await $.upload(Q, Y)));
      } catch (Q) {
        console.error(Q);
      }
    await r(), T.length > 1 && f(T);
  }, w = n.usar_minis;
  return e.some((C) => C.demo), /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: j("Imágenes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `dropzone${F ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var C;
          return (C = b.current) == null ? void 0 : C.click();
        },
        onDragOver: (C) => {
          C.preventDefault(), d(!0);
        },
        onDragLeave: () => d(!1),
        onDrop: (C) => {
          C.preventDefault(), d(!1), C.dataTransfer.files.length && k(C.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ o.jsxs("span", { children: [
            j("Arrastra imágenes aquí"),
            /* @__PURE__ */ o.jsx("br", {}),
            /* @__PURE__ */ o.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              ref: b,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (C) => {
                C.target.files && k(C.target.files), C.target.value = "";
              }
            }
          )
        ]
      }
    ),
    h.length >= 2 && /* @__PURE__ */ o.jsxs("div", { className: "bulk-card", "data-testid": "bulk-card", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "bulk-head", children: [
        /* @__PURE__ */ o.jsx("b", { children: j("{n} elementos seleccionados", { n: h.length }) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "chip",
            "data-testid": "bulk-quitar",
            onClick: () => y == null ? void 0 : y(h[0], !1),
            children: j("Quitar selección")
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: j("Copias") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "quota-btn",
            "data-testid": "bulk-copias-menos",
            onClick: () => {
              var C;
              return m == null ? void 0 : m(h, {
                copies: Math.max(0, (((C = e.find((T) => T.id === h[0])) == null ? void 0 : C.copies) ?? 1) - 1)
              });
            },
            children: "−"
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "quota-val", children: ((N = e.find((C) => C.id === h[0])) == null ? void 0 : N.copies) ?? 1 }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "quota-btn",
            "data-testid": "bulk-copias-mas",
            onClick: () => {
              var C;
              return m == null ? void 0 : m(h, {
                copies: (((C = e.find((T) => T.id === h[0])) == null ? void 0 : C.copies) ?? 1) + 1
              });
            },
            children: "+"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
        /* @__PURE__ */ o.jsx("span", { children: j("Escala") }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: 10,
            max: 400,
            step: 5,
            "data-testid": "bulk-escala",
            value: Math.round(((g = e.find((C) => C.id === h[0])) == null ? void 0 : g.scale_pct) ?? 100),
            onChange: (C) => m == null ? void 0 : m(
              h,
              { scale_pct: Number(C.target.value) }
            )
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
          Math.round(((_ = e.find((C) => C.id === h[0])) == null ? void 0 : _.scale_pct) ?? 100),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `mini-toggle${(E = e.find((C) => C.id === h[0])) != null && E.mini_enabled ? " on" : ""}`,
            "data-testid": "bulk-mini",
            onClick: () => {
              var C;
              return m == null ? void 0 : m(h, {
                mini_enabled: !((C = e.find((T) => T.id === h[0])) != null && C.mini_enabled)
              });
            },
            children: j("Mini")
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "mini-toggle",
            "data-testid": "bulk-borde",
            onClick: () => {
              var C;
              return m == null ? void 0 : m(h, {
                offset_mm: (((C = e.find((T) => T.id === h[0])) == null ? void 0 : C.offset_mm) ?? 0) > 0 ? 0 : 1
              });
            },
            children: j("Borde")
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "hint", children: j("Los cambios se aplican a TODOS los elementos seleccionados.") })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((C) => /* @__PURE__ */ o.jsx(
      nh,
      {
        a: C,
        result: t,
        onChange: r,
        sel: h.includes(C.id),
        onSel: y,
        onEditarContorno: i,
        onAntesDeCambiar: s,
        faseBordes: c,
        verBordes: l,
        contornoModo: p,
        destacado: v === C.id,
        bordeGlobal: n.offset_activo === !0,
        bordeGlobalMm: Number(n.offset_mm) || 0
      },
      C.id
    )) }),
    !w && /* @__PURE__ */ o.jsx("div", { className: "hint", children: j("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => $.clearAssets().then(r),
        children: j("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      th,
      {
        open: !!u,
        assets: u ?? [],
        onClose: () => f(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const St = (e) => (globalThis.__crycatAssets || "") + e;
function Vd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ze(), [i, s] = x.useState(null), [c, l] = x.useState("");
  x.useEffect(() => {
    e && p(r || "");
  }, [e]);
  const p = async (v = "") => {
    l("");
    try {
      s(await $.fsList(v));
    } catch (h) {
      l(h.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (v) => v.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    c && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      c
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => p(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((v) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => p(`${i.path}/${v}`.replace("//", "/")),
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
function ah({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i,
  preview: s
}) {
  const c = Ze(), [l, p] = x.useState("resumen");
  if (!e) return null;
  const v = t.length > 0 && t.every((y) => y.startsWith("data:")), h = [
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
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((y) => /* @__PURE__ */ o.jsx("li", { title: y, children: y.split(/[\\/]/).pop() }, y)) }),
      !v && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        c("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      v && /* @__PURE__ */ o.jsx("p", { className: "hint", children: c("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      v ? t.map((y, m) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${m}`,
          href: y,
          download: `crycat_pagina-${String(m + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(ta, { size: 15 }),
            " ",
            c("Descargar página {n}", { n: m + 1 })
          ]
        },
        m
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(ta, { size: 15 }),
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
          onClick: () => p("cricut"),
          children: c("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { children: c("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: h.map((y, m) => /* @__PURE__ */ o.jsx("li", { children: y }, m)) }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => p("resumen"),
          children: c("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: i, children: c("Entendido") })
    ] })
  ] }) }) });
}
function oh({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: s, onJob: c, onRecalc: l, editando: p, onFinEdicion: v, onDeshacer: h, onRehacer: y, puedeDeshacer: m, puedeRehacer: j, seleccion: b = [], onSeleccion: F }) {
  const d = Ze(), u = tl(), [f, k] = x.useState(1), [w, N] = x.useState({ x: 0, y: 0 }), [g, _] = x.useState(null), [E, C] = x.useState(1), [T, G] = x.useState(null), [Q, Y] = x.useState(null), [ue, je] = x.useState(!1), [Re, R] = x.useState(2), [q, U] = x.useState(0);
  x.useEffect(() => {
    if (!r.verBordes) return;
    const S = window.setInterval(
      () => U((A) => (A + 3) % 12),
      260
    );
    return () => window.clearInterval(S);
  }, [r.verBordes]);
  const [H, P] = x.useState([]), [ne, ke] = x.useState([]), [et, oe] = x.useState(""), [ye, O] = x.useState("normal"), [be, ze] = x.useState(""), [Fe, yt] = x.useState(/* @__PURE__ */ new Set()), xt = x.useRef(null), Ft = x.useRef(null), qt = u === "en" ? Pm : zm, Pn = x.useMemo(
    () => qt[Math.floor(Math.random() * qt.length)],
    [qt]
  ), dr = r.saveName.trim() || Pn;
  x.useEffect(() => {
    C(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const tt = (t == null ? void 0 : t.pages) ?? 0, Mn = !!t && t.efficiency < 0.8;
  x.useEffect(() => {
    const S = xt.current;
    if (!S) return;
    const A = (L) => {
      L.preventDefault(), L.stopPropagation();
      const V = S.getBoundingClientRect(), K = L.clientX - V.left, me = L.clientY - V.top;
      k((Ae) => {
        const ee = L.deltaY < 0 ? 1.05 : 0.9523809523809523, le = Math.min(12, Math.max(0.05, Ae * ee)), wt = le / Ae;
        return N((Ht) => ({ x: K - (K - Ht.x) * wt, y: me - (me - Ht.y) * wt })), le;
      });
    };
    return S.addEventListener("wheel", A, { passive: !1 }), () => S.removeEventListener("wheel", A);
  }, []);
  const pr = (S) => {
    if (S.target.closest(".item-box")) return;
    Ft.current = { x: S.clientX - w.x, y: S.clientY - w.y };
    const A = (V) => {
      Ft.current && N({ x: V.clientX - Ft.current.x, y: V.clientY - Ft.current.y });
    }, L = () => {
      Ft.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", L);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", L);
  };
  x.useEffect(() => {
    const S = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? k((L) => Math.min(12, L * 1.08)) : A.key === "-" || A.key === "_" ? k((L) => Math.max(0.05, L / 1.08)) : A.key === "0" ? hr() : A.key === "Escape" ? _(null) : A.key === "g" ? a((L) => ({ ...L, guidesVisible: !L.guidesVisible })) : A.key === "t" && a((L) => {
        const V = [
          "blanco",
          "transparente",
          "fosforito",
          "rosa",
          "negro"
        ], K = L.fondo ?? (L.eyeFosforito ? "fosforito" : L.eyeTransparent ? "transparente" : "blanco"), me = V[(V.indexOf(K) + 1) % V.length];
        return {
          ...L,
          fondo: me,
          eyeTransparent: me === "transparente",
          eyeFosforito: me === "fosforito"
        };
      }));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [a]);
  const Bt = x.useRef(null), fr = x.useRef(null), M = (S, A) => {
    S.preventDefault(), S.stopPropagation();
    const L = S.currentTarget.closest(".page-box");
    if (!L || !t) return;
    const V = t.page_mm[0] / L.clientWidth, K = {
      uid: A.uid,
      startX: S.clientX,
      startY: S.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: V
    };
    Bt.current = K, fr.current = { x: A.x, y: A.y }, G(K), Y({ uid: A.uid, x: A.x, y: A.y });
    const me = (ee) => {
      const le = Bt.current;
      if (!le) return;
      const wt = (ee.clientX - le.startX) * le.mmPerPx / f, Ht = (ee.clientY - le.startY) * le.mmPerPx / f;
      fr.current = { x: le.origX + wt, y: le.origY + Ht }, Y({ uid: le.uid, x: le.origX + wt, y: le.origY + Ht });
    }, Ae = (ee) => {
      window.removeEventListener("mousemove", me), window.removeEventListener("mouseup", Ae);
      const le = Bt.current;
      if (Bt.current = null, !le) return;
      const wt = (ee.clientX - le.startX) * le.mmPerPx / f, Ht = (ee.clientY - le.startY) * le.mmPerPx / f;
      G(null), Y(null), !(Math.abs(wt) < 0.5 && Math.abs(Ht) < 0.5) && D(le.uid, le.origX + wt, le.origY + Ht);
    };
    window.addEventListener("mousemove", me), window.addEventListener("mouseup", Ae);
  }, D = async (S, A, L) => {
    try {
      const V = await $.move(S, A, L);
      V.job ? c(V.job) : await s();
    } catch {
      await s();
    } finally {
      C(Date.now());
    }
  }, B = async (S) => {
    const A = await $.unpin(S);
    c(A);
  }, Z = !1;
  x.useEffect(() => {
    {
      P([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, E]), x.useEffect(() => {
    if (O("normal"), ze(""), !p) {
      ke([]), oe(""), yt(/* @__PURE__ */ new Set());
      return;
    }
    $.blobs(p.id).then((S) => {
      ke(S.blobs), R(p.offset_mm > 0 ? p.offset_mm : S.union_mm ?? 2), oe(S.preview_png), yt(new Set(S.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      ke([]), oe("");
    });
  }, [p]);
  const mr = async () => {
    if (p)
      try {
        await $.limpiarContorno(p.id, Array.from(Fe));
      } finally {
        await (v == null ? void 0 : v());
      }
  }, Ut = (S) => {
    yt((A) => {
      const L = new Set(A);
      return L.has(S) ? L.delete(S) : L.add(S), L;
    });
  }, [He, Vt] = x.useState(null), Yd = async () => {
    try {
      const L = await $.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Vt({ files: L.files, folder: L.folder, preview: L.preview });
    } catch (L) {
      Vt({ files: [], folder: "", error: L.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const V = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), K = URL.createObjectURL(V), me = document.createElement("a");
        me.href = K, me.download = `${r.saveName || "crycat"}-cricut.pdf`, me.click(), setTimeout(() => URL.revokeObjectURL(K), 4e3);
      } catch (L) {
        Vt({
          files: [],
          folder: "",
          error: L.message
        });
      }
      return;
    }
    const A = document.createElement("iframe");
    A.setAttribute("aria-hidden", "true"), A.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", A.src = "/api/print.pdf", A.onload = () => {
      var L, V;
      try {
        (L = A.contentWindow) == null || L.focus(), (V = A.contentWindow) == null || V.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, Kd = async () => {
    try {
      const S = await $.export(dr);
      Vt({ files: S.files, folder: S.folder, preview: S.preview });
    } catch (S) {
      Vt({ files: [], folder: "", error: S.message });
    }
  }, Xd = () => {
    je(!0);
  }, Jd = async (S) => {
    try {
      const A = await $.export(dr, S);
      Vt({ files: A.files, folder: A.folder, preview: A.preview });
    } catch (A) {
      Vt({ files: [], folder: "", error: A.message });
    }
  }, nl = (t == null ? void 0 : t.poly_mm) ?? [], [lt, ct] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Tn, Ln] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], ut = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Tn, mn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Ln, hr = x.useCallback(() => {
    const S = xt.current;
    if (!S) return;
    const A = S.querySelector(".page-box");
    if (!A) return;
    const L = S.querySelector(".canvas-inner"), V = S.clientWidth, K = S.clientHeight, me = (L == null ? void 0 : L.offsetWidth) || A.offsetWidth || 1, Ae = (L == null ? void 0 : L.offsetHeight) || A.offsetHeight || 1, ee = Math.min(1, V / me, K / Ae);
    k(ee), N({ x: (V - me * ee) / 2, y: (K - Ae * ee) / 2 });
  }, []);
  x.useEffect(() => {
    if (tt <= 0) return;
    const S = window.setTimeout(hr, 60);
    return () => window.clearTimeout(S);
  }, [
    tt,
    ut,
    mn,
    r.viewMode,
    r.hojaGirada,
    g,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    hr
  ]);
  const Et = n.lienzo === "pagina" ? 0 : lt, bt = n.lienzo === "pagina" ? 0 : ct, rl = nl.length ? "M" + nl.map(([S, A]) => `${S - Et},${A - bt}`).join(" L") + " Z" : "", al = x.useRef(0);
  x.useEffect(() => {
    if (!t) return;
    const S = t.pages || 0;
    S > 0 && S !== al.current && (al.current = S, a((A) => ({ ...A, viewMode: S <= 1 ? 1 : S === 2 ? 2 : 4 })), _(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const la = r.contornoModo ?? "final", Rn = r.verBordes && la !== "ninguno", Po = `${E}-${n.marcas_delimitar ? 1 : 0}-${n.lienzo}-${n.color_formato}-${n.dpi_salida}`;
  x.useEffect(() => {
    if (!Rn || !t) return;
    const S = [], A = Math.max(1, t.pages);
    for (let V = 0; V < A; V++)
      for (const K of [0, 3, 6, 9])
        S.push($.pageUrl(
          V,
          Po,
          n.simular_impresion === !0,
          !0,
          K,
          la
        ));
    const L = S.map((V) => {
      const K = new Image();
      return K.src = V, K;
    });
    return () => L.forEach((V) => {
      V.src = "";
    });
  }, [Rn, Po, t, la, n.simular_impresion]);
  const Gt = r.hojaGirada === !0, Mo = Gt ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${ut / (mn || 1) * 100}%`,
    height: `${mn / (ut || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(270deg)"
  } : void 0, Zd = (S) => {
    const A = (t == null ? void 0 : t.placements.filter((L) => L.page === S)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box fondo-${r.fondo ?? (r.eyeFosforito ? "fosforito" : r.eyeTransparent ? "transparente" : "blanco")}${Gt ? " girada" : ""}`,
        style: Gt ? {
          width: "100%",
          aspectRatio: `${mn} / ${ut}`
        } : { width: "100%" },
        onClick: (L) => {
          tt > 1 && g === null && !L.target.closest(".item-box") && _(S);
        },
        "data-testid": `page-${S}`,
        children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: `sheet${Gt ? " girada" : ""}`,
              style: Mo,
              onLoad: S === 0 ? hr : void 0,
              src: $.pageUrl(S, Po, n.simular_impresion === !0, Rn, q, la),
              alt: d("Página {i}", { i: S + 1 }),
              draggable: !1
            }
          ),
          r.guidesVisible && rl && /* @__PURE__ */ o.jsxs(
            "svg",
            {
              className: `overlay-svg${Gt ? " girada" : ""}`,
              style: Mo,
              viewBox: `0 0 ${ut} ${mn}`,
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ o.jsxs(
                  "g",
                  {
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.15, ut / 1400),
                    opacity: 0.28,
                    children: [
                      Array.from(
                        { length: Math.floor((lt - Et + Tn) / 10) + 1 },
                        (L, V) => {
                          const K = V * 10 - (Et - lt);
                          return K >= lt - Et - 0.01 && K <= lt - Et + Tn + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: K,
                              y1: ct - bt,
                              x2: K,
                              y2: ct - bt + Ln
                            },
                            `v${V}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((ct - bt + Ln) / 10) + 1 },
                        (L, V) => {
                          const K = V * 10 - (bt - ct);
                          return K >= ct - bt - 0.01 && K <= ct - bt + Ln + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: lt - Et,
                              y1: K,
                              x2: lt - Et + Tn,
                              y2: K
                            },
                            `h${V}`
                          ) : null;
                        }
                      )
                    ]
                  }
                ),
                (t == null ? void 0 : t.marcas) && /* @__PURE__ */ o.jsx("g", { children: [
                  ["esquina_flecha", lt, ct, !1, !1],
                  ["esquina_sd", lt + Tn, ct, !0, !1],
                  ["esquina_ii", lt, ct + Ln, !1, !0],
                  ["esquina_id", lt + Tn, ct + Ln, !0, !0]
                ].map(([L, V, K, me, Ae]) => {
                  const ee = t.marcas[L];
                  if (!ee) return null;
                  const le = V - Et - (me ? ee[0] : 0), wt = K - bt - (Ae ? ee[1] : 0);
                  return /* @__PURE__ */ o.jsx(
                    "image",
                    {
                      href: St(`/marcas/${L}.png`),
                      x: le,
                      y: wt,
                      width: ee[0],
                      height: ee[1],
                      preserveAspectRatio: "none"
                    },
                    L
                  );
                }) }),
                /* @__PURE__ */ o.jsx(
                  "path",
                  {
                    d: rl,
                    fill: "none",
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.6, ut / 250),
                    strokeDasharray: `${ut / 55} ${ut / 85}`,
                    opacity: 0.85
                  }
                ),
                Z
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `capa-piezas${Gt ? " girada" : ""}`,
              style: Mo,
              children: A.map((L) => {
                const V = e.find((ee) => ee.id === L.asset_id), K = (Q == null ? void 0 : Q.uid) === L.uid ? Q : null, me = ((K ? K.x : L.x) - Et) / (ut || 1) * 100, Ae = ((K ? K.y : L.y) - bt) / (mn || 1) * 100;
                return /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `item-box ${L.pinned ? "pinned" : ""} ${(T == null ? void 0 : T.uid) === L.uid ? "dragging" : ""}${b.includes(L.asset_id) ? " sel" : ""}`,
                    style: {
                      left: `${me}%`,
                      top: `${Ae}%`,
                      width: `${L.w / (ut || 1) * 100}%`,
                      height: `${L.h / (mn || 1) * 100}%`
                    },
                    title: (V == null ? void 0 : V.name) ?? "",
                    onMouseDown: (ee) => M(ee, L),
                    onContextMenu: (ee) => {
                      ee.preventDefault(), B(L.uid);
                    },
                    "data-testid": `item-${L.uid}`,
                    onClick: (ee) => {
                      ee.stopPropagation(), ee.currentTarget.scrollIntoView({
                        block: "center",
                        inline: "center",
                        behavior: "smooth"
                      }), window.dispatchEvent(new CustomEvent(
                        "crycat:seleccion",
                        { detail: L.asset_id }
                      )), F == null || F(
                        L.asset_id,
                        ee.ctrlKey || ee.metaKey || ee.shiftKey
                      );
                    },
                    children: L.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
                  },
                  L.uid
                );
              })
            }
          )
        ]
      },
      S
    );
  }, ep = g !== null ? [g] : Array.from({ length: tt }, (S, A) => A);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    tt > 1 && /* @__PURE__ */ o.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: d("No cabe en una página: {n} páginas", { n: tt }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${Rn ? "modo-final" : "modo-ninguno"}`,
          "data-tip": d(Rn ? "Quitar el contorno (solo vista previa)" : "Ver el contorno de corte: la línea más exterior, lo que se corta de verdad"),
          onClick: () => {
            const S = !Rn;
            a((A) => ({
              ...A,
              contornoModo: S ? "final" : "ninguno",
              verBordes: S
            })), i({
              contorno_modo: S ? "final" : "ninguno",
              ver_contornos: S
            });
          },
          children: [
            /* @__PURE__ */ o.jsx(zo, { size: 16 }),
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
          onClick: () => a((S) => ({ ...S, guidesVisible: !S.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(qd, { size: 16 }),
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
          onClick: () => a((S) => {
            const A = [
              "blanco",
              "transparente",
              "fosforito",
              "rosa",
              "negro"
            ], L = S.fondo ?? (S.eyeFosforito ? "fosforito" : S.eyeTransparent ? "transparente" : "blanco"), V = A[(A.indexOf(L) + 1) % A.length];
            return {
              ...S,
              fondo: V,
              eyeTransparent: V === "transparente",
              eyeFosforito: V === "fosforito"
            };
          }),
          children: [
            r.eyeFosforito ? /* @__PURE__ */ o.jsx(Om, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ o.jsx(gc, { size: 16 }) : /* @__PURE__ */ o.jsx(gc, { size: 16 }),
            r.eyeFosforito ? d("Fosforito") : r.eyeTransparent ? d("Transparente") : d("Blanco")
          ]
        }
      ),
      (tt > 1 && g === null || g !== null) && /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        tt > 1 && g === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((S) => ({ ...S, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((S) => ({ ...S, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((S) => ({ ...S, viewMode: 4 })), children: "4" })
        ] }),
        g !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => _(null), title: d("Volver a la cuadrícula (Esc)"), children: d(" Ver todo") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Gt ? "primary" : "",
          "data-tip": d("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const S = !window.__crycatAncho;
            window.__crycatAncho = S, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: S }
            ));
          },
          children: [
            /* @__PURE__ */ o.jsx(qm, { size: 16 }),
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
            onClick: () => h(),
            disabled: !m,
            children: /* @__PURE__ */ o.jsx(Fd, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": d("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => y(),
            disabled: !j,
            children: /* @__PURE__ */ o.jsx(Um, { size: 16 })
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
            onClick: () => k((S) => Math.min(12, S * 1.08)),
            children: /* @__PURE__ */ o.jsx(Vm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": d("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: hr,
            children: /* @__PURE__ */ o.jsx(Bm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": d("Alejar (−)"),
            onClick: () => k((S) => Math.max(0.05, S / 1.08)),
            children: /* @__PURE__ */ o.jsx(Gm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(f * 100),
          "%"
        ] })
      ] })
    ] }),
    p ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: be || et || $.previewUrlSinBordes(
              p.id,
              p.rev ?? 0
            ),
            alt: p.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: p && ne.filter((S) => !S.principal).map((S, A) => {
          const [L, V, K, me] = S.bbox, Ae = p.w_px || 1, ee = p.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${Fe.has(S.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: d("Trozo de {px} px — clic para {accion}", {
                px: S.area_px,
                accion: Fe.has(S.id) ? d("conservar") : d("quitar")
              }),
              style: {
                left: `${L / Ae * 100}%`,
                top: `${V / ee * 100}%`,
                width: `${(K - L) / Ae * 100}%`,
                height: `${(me - V) / ee * 100}%`
              },
              onClick: () => Ut(S.id)
            },
            S.id
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
                onClick: () => R((S) => Math.max(0.5, Math.round((S - 0.5) * 2) / 2)),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": "union-mm", children: [
              Re,
              " mm"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-mas",
                onClick: () => R((S) => Math.min(20, Math.round((S + 0.5) * 2) / 2)),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-ver-quitados",
              title: d("Ver cómo queda SIN los trozos marcados (solo vista previa)"),
              className: ye === "quitar" ? "primary" : "",
              onClick: async () => {
                if (p) {
                  if (ye === "quitar") {
                    O("normal"), ze("");
                    return;
                  }
                  try {
                    const S = await $.contornoPreview(
                      p.id,
                      { quitar: Array.from(Fe) }
                    );
                    ze(S.png), O("quitar");
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
              className: ye === "unir" ? "primary" : "",
              onClick: async () => {
                if (p) {
                  if (ye === "unir") {
                    O("normal"), ze("");
                    return;
                  }
                  try {
                    const S = await $.contornoPreview(
                      p.id,
                      { unir: Re }
                    );
                    ze(S.png), O("unir");
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
              title: d("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: Re }),
              onClick: async () => {
                p && (await $.patchAsset(p.id, {
                  offset_mm: Re,
                  offset_modo: "unir_curvo"
                }), await (v == null ? void 0 : v()));
              },
              children: d("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: mr,
              children: d(
                "Quitar marcados ({n})",
                { n: Fe.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: d("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: xt,
        className: `canvas ${T ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: pr,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${w.x}px, ${w.y}px) scale(${f})` },
            children: [
              tt === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: d("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${g !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: ep.map(Zd)
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
          onClick: mr,
          children: d("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => v == null ? void 0 : v(),
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
          onChange: (S) => a((A) => ({ ...A, saveName: S.target.value }))
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
            onClick: () => $.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(ta, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: Kd, children: d("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: Xd, children: d("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Yd,
            disabled: tt === 0,
            children: d("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Vd,
      {
        open: ue,
        initial: n.carpeta_export,
        onClose: () => je(!1),
        onPick: Jd
      }
    ),
    /* @__PURE__ */ o.jsx(
      ah,
      {
        open: !!He,
        files: (He == null ? void 0 : He.files) ?? [],
        folder: (He == null ? void 0 : He.folder) ?? "",
        preview: He == null ? void 0 : He.preview,
        error: He == null ? void 0 : He.error,
        onOpenFolder: (S) => void $.fsOpen(S).catch(() => {
        }),
        onClose: () => Vt(null)
      }
    )
  ] });
}
function ih({ settings: e, saveSettings: t }) {
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
          /* @__PURE__ */ o.jsx(na, { size: 16 }),
          " ",
          n("Minis")
        ]
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
          /* @__PURE__ */ o.jsx(uo, { size: 16 }),
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
          /* @__PURE__ */ o.jsx(Od, { size: 16 }),
          " ",
          s[e.rotacion] ?? "90°"
        ]
      }
    )
  ] }) });
}
const ai = [
  {
    clave: "silueta",
    nombre: "Silueta",
    desc: "Forma real, cualquier ángulo",
    Icono: Zm,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: eh,
    forma: "rectangulos"
  }
];
function sh({ settings: e, saveSettings: t }) {
  var v;
  const n = Ze(), [r, a] = x.useState(
    {}
  ), [i, s] = x.useState("");
  x.useEffect(() => {
    $.modos().then((h) => a(h.modos ?? {})).catch(() => {
    });
  }, []);
  const c = e.modo_forma ?? "siluetas", l = ((v = ai.find((h) => h.forma === c)) == null ? void 0 : v.clave) ?? "silueta", p = async (h) => {
    var m;
    const y = r[h];
    y && (await t(y), s(n("Modo «{n}» aplicado", {
      n: n(((m = ai.find((j) => j.clave === h)) == null ? void 0 : m.nombre) ?? h)
    })));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "modos-seg",
        role: "tablist",
        title: n("Modo de empaquetado: elige UNO"),
        children: ai.map((h) => /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": l === h.clave,
            "data-testid": `modo-${h.clave}`,
            className: `modo-btn${l === h.clave ? " on" : ""}`,
            title: n("Modo {n}: {d}", { n: n(h.nombre), d: n(h.desc) }),
            onClick: () => p(h.clave),
            children: [
              /* @__PURE__ */ o.jsx(h.Icono, { size: 24 }),
              /* @__PURE__ */ o.jsxs("span", { className: "modo-txt", children: [
                /* @__PURE__ */ o.jsx("b", { children: n(h.nombre) }),
                /* @__PURE__ */ o.jsx("i", { children: n(h.desc) })
              ] }),
              l === h.clave && /* @__PURE__ */ o.jsx("span", { className: "modo-check", children: "✓" })
            ]
          },
          h.clave
        ))
      }
    ),
    i && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modos-aviso", children: i })
  ] });
}
function lh({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: i, modo: s = "mm" }) {
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
        onChange: (p) => {
          const v = Number(p.target.value);
          Number.isFinite(v) && v > 0 && r(v);
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
function yc(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const ch = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, uh = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function dh({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ze(), [a, i] = x.useState(!0), [s, c] = x.useState({
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
  }), [l, p] = x.useState(!1), [v, h] = x.useState(!1), y = (g) => v || s[g], m = x.useMemo(() => {
    const g = (n ?? []).filter((E) => E.mini_enabled);
    return (g.length ? g : n ?? []).slice().sort((E, C) => Math.min(C.w_mm, C.h_mm) - Math.min(E.w_mm, E.h_mm))[0] ?? null;
  }, [n]), j = m ? Math.min(m.w_mm, m.h_mm) : 0, b = e.modo === "experto", F = ({ children: g }) => b ? /* @__PURE__ */ o.jsx(o.Fragment, { children: g }) : null, d = (g) => c((_) => ({ ..._, [g]: !_[g] })), u = (g) => t(g), f = x.useRef(null), k = ({ titulo: g, children: _ }) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "ctl-grupo", children: r(g) }),
    _
  ] }), w = (g, _, E, C, T = 1, G = "", Q, Y) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...Y ? { "data-tip": r(Y) } : {}, children: r(g) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "number",
          min: E,
          max: C,
          step: T,
          "data-testid": `set-${_}`,
          value: String(e[_]),
          onChange: (ue) => {
            const je = Number(ue.target.value);
            Number.isNaN(je) || u({ [_]: je });
          }
        }
      ),
      G && /* @__PURE__ */ o.jsx("span", { className: "hint", children: G }),
      Q
    ] })
  ] }), N = (g, _, E, C, T) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...T ? { "data-tip": r(T) } : {}, children: r(g) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${_}`,
        value: String(e[_]),
        onChange: (G) => u({ [_]: G.target.value }),
        children: E.map(([G, Q]) => /* @__PURE__ */ o.jsx("option", { value: G, children: r(Q) }, G))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: `file-panel settings-panel${v ? " compacta" : ""}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `chip${v ? " on" : ""}`,
          "data-testid": "btn-compacta",
          title: r("Ver TODOS los menús desplegados y compactos"),
          onClick: () => h((g) => !g),
          children: r("Compacta")
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ o.jsx(sh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsx(ih, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !b && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "general",
          title: r("General"),
          open: y("general"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(Da, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(k, { titulo: "Colocación", children: [
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
              N("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(k, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ o.jsx(F, { children: w("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (g) => {
                      const _ = g.target.value, E = bm[_];
                      u(E ? { pagina: _, pagina_w: E[0], pagina_h: E[1] } : { pagina: _ });
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
              /* @__PURE__ */ o.jsx(F, { children: e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (g) => u({ pagina_w: Number(g.target.value) })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (g) => u({ pagina_h: Number(g.target.value) })
                    }
                  )
                ] })
              ] }) }),
              N("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ])
            ] }),
            /* @__PURE__ */ o.jsx(k, { titulo: "Referencia", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (g) => u({ marcas_delimitar: g.target.checked })
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
          open: y("minis"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(na, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ o.jsxs(k, { titulo: "Tamaños", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => u({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => u({ mini_usar_lista: !1 }),
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
            /* @__PURE__ */ o.jsxs(k, { titulo: "Comportamiento", children: [
              /* @__PURE__ */ o.jsxs(F, { children: [
                N("Rotaciones admitidas", "mini_rotacion", [
                  ["no", "No girar"],
                  ["90", "Giros de 0º / 90º / 180º / 270º"],
                  ["libre", "Cualquier ángulo"]
                ]),
                N("Selección de tamaños", "mini_tamanos", [
                  ["iguales", "Priorizar que sean iguales"],
                  ["grandes", "Priorizar grandes"]
                ]),
                N("Borde de los minis", "mini_borde_modo", [
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
                      onClick: () => u({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => u({ mini_lista_modo: "pct" }),
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
                      onChange: (g) => u({ mini_lista_medida: g.target.value }),
                      children: [
                        /* @__PURE__ */ o.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") }),
                        /* @__PURE__ */ o.jsx("option", { value: "menor", children: r("Lado menor") }),
                        /* @__PURE__ */ o.jsx("option", { value: "mayor", children: r("Lado mayor") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((g, _) => /* @__PURE__ */ o.jsx(
                    lh,
                    {
                      i: _,
                      valor: g,
                      refBase: j,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (E) => {
                        const C = [...e.mini_tamanos_lista ?? []];
                        C[_] = E, u({ mini_tamanos_lista: C });
                      },
                      onQuitar: () => u({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (E, C) => C !== _
                        )
                      })
                    },
                    _
                  )),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      "data-testid": "btn-add-mini-tamano",
                      onClick: () => u({
                        mini_tamanos_lista: [
                          ...e.mini_tamanos_lista ?? [],
                          50
                        ]
                      }),
                      children: r("Añadir tamaño")
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: m ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: m.name, mm: j.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] })
          ]
        }
      ),
      b && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: y("optimizacion"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(uo, { size: 15 }),
          children: [
            N("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            N("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ o.jsxs(F, { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (g) => u({ opt_tiempo_auto: g.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: ch[e.opt_metodo] ?? 8,
                  m: r(uh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : w("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      b && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: y("imagen"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(po, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(k, { titulo: "Impresión", children: [
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
              N("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ o.jsxs(F, { children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (g) => u({ simular_impresion: g.target.checked })
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
                        onChange: (g) => u({ sim_cmyk: g.target.checked })
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
              N("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(k, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (g) => u({ chequear_lineas: g.target.checked })
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
              N("Lienzo del archivo final", "lienzo", [
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
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "offset",
          title: r("Borde"),
          open: y("offset"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(zo, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (g) => u({ offset_activo: g.target.checked })
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
              N("Tipo de borde", "offset_modo", [
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
                      onChange: (g) => u({ offset_color: g.target.value })
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
      b && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: y("corte"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(Fm, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: yc(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: mc[e.maquina] ?? "Cricut Maker 3" }
              ),
              [mc[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            w("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            w("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            w("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            w("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      b && /* @__PURE__ */ o.jsxs(
        zt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: y("historial"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(Fd, { size: 15 }),
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
                  onChange: (g) => u({ historial: g.target.checked })
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
                    onChange: (g) => u({ hist_tamano: g.target.checked })
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
                    onChange: (g) => u({ hist_copias: g.target.checked })
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
                    onChange: (g) => u({ hist_borde: g.target.checked })
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
                    onChange: (g) => u({ hist_minis: g.target.checked })
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
          open: y("visualizacion"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(qd, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: ts.map((g) => /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === g.key ? "active" : ""}`,
                  "data-testid": `tema-${g.key}`,
                  onClick: () => t({ tema: g.key }),
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: g.colors.accent } }),
                    /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: g.colors.accent2 } }),
                    g.label
                  ]
                },
                g.key
              )) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (g) => t({ ver_guias: g.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx("img", { src: $.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var g;
                  return (g = f.current) == null ? void 0 : g.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ref: f,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (g) => {
                      var E;
                      const _ = (E = g.target.files) == null ? void 0 : E[0];
                      _ && $.setIcon(_).then(() => {
                        window.location.reload();
                      }), g.target.value = "";
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
          open: y("extras"),
          toggle: d,
          icon: /* @__PURE__ */ o.jsx(Dd, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx(k, { titulo: "Sonido", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => u({ mute: !e.mute }),
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
                    onChange: (g) => u({ volumen: Number(g.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsxs(k, { titulo: "Pikmin", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (g) => u({ pikmin_activo: g.target.checked })
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
                    onChange: (g) => u({ pikmin_sonido: g.target.checked })
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
                    onChange: (g) => u({ pikmin_sonido_morir: g.target.checked })
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
                    onChange: (g) => t({ comprobar_versiones: g.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: yc(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Vd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => p(!1),
        onPick: (g) => t({ carpeta_export: g })
      }
    )
  ] });
}
function ph({ ver: e, onCerrar: t }) {
  const n = Ze(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", i = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = x.useRef((e == null ? void 0 : e.actual) ?? ""), [c, l] = x.useState(!1), p = a === "error", v = a === "reiniciando";
  return x.useEffect(() => {
    if (!v) return;
    l(!0);
    let h = !0;
    const y = window.setInterval(async () => {
      try {
        const m = await $.version();
        if (!h) return;
        m.actual && s.current && m.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      h = !1, window.clearInterval(y);
    };
  }, [v]), /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ o.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ o.jsx("div", { className: `dialogo-icono${p ? " error" : ""}`, children: p ? "!" : v ? /* @__PURE__ */ o.jsx(Ym, { size: 26 }) : /* @__PURE__ */ o.jsx(Ud, { size: 26 }) }),
    /* @__PURE__ */ o.jsx("h3", { children: n(p ? "No se pudo actualizar" : v ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
    !p && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "progreso-act", "data-testid": "progreso-actualizacion", children: /* @__PURE__ */ o.jsx(
        "div",
        {
          className: i == null ? "indeterminado" : "",
          style: { width: i == null ? "100%" : `${Math.max(4, i)}%` }
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "fase", "data-testid": "fase-actualizacion", children: [
        n((r == null ? void 0 : r.mensaje) || "Preparando la actualización…"),
        i != null && !v ? ` · ${i}%` : ""
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: n("Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.") }),
      c && /* @__PURE__ */ o.jsx("div", { className: "fase suave", "data-testid": "recarga-aviso", children: n("La página se recargará sola cuando el motor nuevo esté listo…") })
    ] }),
    p && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "nota", children: (r == null ? void 0 : r.mensaje) || n("Error desconocido") }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "cerrar-actualizacion", onClick: t, children: n("Cerrar") })
    ] })
  ] }) });
}
function oi(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function fh({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: i = 0.5,
  mute: s = !1,
  onVolumen: c,
  onMute: l,
  onIdioma: p,
  onEasterEgg: v,
  onAyuda: h,
  onReportar: y
}) {
  var et, oe, ye;
  const m = Ze(), j = tl(), [b, F] = x.useState([]), [d, u] = x.useState(0), [f, k] = x.useState(null), [w, N] = x.useState(!1), [g, _] = x.useState(""), [E, C] = x.useState(!1), T = x.useRef(!1), G = x.useRef([]);
  x.useEffect(() => {
    fetch("/api/funmsgs").then((O) => O.ok ? O.json() : { msgs: [] }).then((O) => F(O.msgs ?? [])).catch(() => {
    });
  }, []), x.useEffect(() => {
    let O = !0;
    return $.version().then((be) => {
      O && (k(be), !be.comprobado && !T.current && (T.current = !0, $.checkVersion().then((ze) => O && k(ze)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      O = !1;
    };
  }, []);
  const Q = ((et = f == null ? void 0 : f.actualizacion) == null ? void 0 : et.estado) === "descargando" || ((oe = f == null ? void 0 : f.actualizacion) == null ? void 0 : oe.estado) === "instalando" || ((ye = f == null ? void 0 : f.actualizacion) == null ? void 0 : ye.estado) === "reiniciando";
  x.useEffect(() => {
    if (!Q) return;
    const O = setInterval(() => {
      $.version().then(k).catch(() => {
      });
    }, 700);
    return () => clearInterval(O);
  }, [Q]);
  const Y = a || !!(e && !e.done);
  x.useEffect(() => {
    if (!Y) return;
    const O = setInterval(() => u((be) => be + 1), 1200);
    return () => clearInterval(O);
  }, [Y]);
  const ue = b.length ? b : [
    m("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], je = x.useMemo(() => {
    if (g) return g;
    if (Q) {
      const O = f == null ? void 0 : f.actualizacion;
      if ((O == null ? void 0 : O.estado) === "instalando") return m("Instalando y reiniciando…");
      const be = (O == null ? void 0 : O.progreso) != null ? Math.round(O.progreso) : null;
      return be != null ? m("Descargando… {p}%", { p: be }) : (O == null ? void 0 : O.mensaje) || m("Descargando actualización…");
    }
    return Y ? ue[d % ue.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? m("Listo") : m("Listo para empezar");
  }, [g, Q, Y, e, ue, d, n, m, f]), Re = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), R = Y && !e, q = x.useMemo(() => {
    const O = e == null ? void 0 : e.eta_s;
    return !Y || O === void 0 || O === null || O <= 0.5 ? "" : (e == null || e.tope_s, m(" · ~{x} restante", { x: oi(O) }));
  }, [e == null ? void 0 : e.eta_s, Y, m]), U = x.useMemo(() => !r || !r.segundos ? "" : oi(r.segundos), [r]), H = async () => {
    N(!0), _("");
    try {
      const O = await $.checkVersion();
      k(O), O.error ? _(m("Sin conexión")) : O.hay_nueva || _(m("Estás en la última versión"));
    } catch {
      _(m("Sin conexión"));
    } finally {
      N(!1);
    }
  }, P = async () => {
    _("");
    try {
      const O = await $.updateVersion();
      O.ok ? C(!0) : O.modo === "dev" && O.url ? (_(m("Modo desarrollo: se actualiza con git")), await $.openReleases().catch(() => {
      })) : _(O.mensaje || m("No se pudo actualizar")), $.version().then(k).catch(() => {
      });
    } catch {
      _(m("No se pudo actualizar"));
    }
  }, ke = !!(f != null && f.hay_nueva && !Y && !Q) ? m("Nueva versión {v} disponible", { v: (f == null ? void 0 : f.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    E && /* @__PURE__ */ o.jsx(
      ph,
      {
        ver: f,
        onCerrar: () => C(!1)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: $.iconUrl(),
            alt: "CryCat",
            "data-testid": "brand-icon",
            title: m("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const O = Date.now();
              G.current = [...G.current, O].filter((be) => O - be < 2500), G.current.length >= 5 && (G.current = [], _(m("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), v == null || v());
            }
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "nombre", children: "CryCat" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !Y && (() => {
          const O = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), be = n.placed || 1, ze = Math.min(80, Math.max(
            30,
            48 + 22 * O - Math.min(18, be * 0.08)
          )), Fe = n.efficiency * 100, yt = Fe >= ze ? "buena" : Fe >= ze * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ o.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": m("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.placed }),
              /* @__PURE__ */ o.jsx("span", { children: m("imágenes") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": m("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.pages }),
              /* @__PURE__ */ o.jsx("span", { children: n.pages > 1 ? m("páginas") : m("página") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-card", "data-tip": m("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ o.jsx("b", { children: n.minis }),
              /* @__PURE__ */ o.jsx("span", { children: m("minis") })
            ] }),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${yt}`,
                "data-testid": "eficiencia-card",
                "data-nivel": yt,
                "data-tip": m("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: be, e: Math.round(ze) }),
                children: [
                  /* @__PURE__ */ o.jsxs("b", { children: [
                    Math.round(Fe),
                    "%"
                  ] }),
                  /* @__PURE__ */ o.jsx("span", { children: m("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !Y) && /* @__PURE__ */ o.jsx("span", { className: "msg", children: je }),
        Y && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `progress${R ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, Re)}%` } })
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? m("Tiempo máximo de este cálculo: {y}", { y: oi(e.tope_s) }) : void 0,
              children: [
                Re,
                "%",
                q
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: St("/piensa.gif"),
              alt: "",
              title: m("Pensando…"),
              onError: (O) => {
                O.currentTarget.style.display = "none";
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
              /* @__PURE__ */ o.jsx(Xm, { size: 15 }),
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
            onClick: () => y == null ? void 0 : y(),
            children: [
              /* @__PURE__ */ o.jsx(Bd, { size: 15 }),
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
              /* @__PURE__ */ o.jsx(Jm, { size: 15 }),
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
            onClick: () => window.open((f == null ? void 0 : f.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ o.jsx(Wm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: m("Idioma"),
            onClick: () => p == null ? void 0 : p(j === "es" ? "en" : "es"),
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
              (f == null ? void 0 : f.hay_nueva) && !Q && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: ke || m("Hay una versión nueva"),
                  onClick: P,
                  children: /* @__PURE__ */ o.jsx(Qm, { size: 14 })
                }
              ),
              "v",
              (f == null ? void 0 : f.actual) ?? "—",
              (f == null ? void 0 : f.hay_nueva) && (f == null ? void 0 : f.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
                "v",
                f.ultima
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini",
                  "data-testid": "btn-comprobar",
                  title: m("Comprobar versiones"),
                  onClick: H,
                  disabled: w,
                  children: w ? "…" : /* @__PURE__ */ o.jsx(Km, { size: 14 })
                }
              ),
              (f == null ? void 0 : f.hay_nueva) && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: m("Descargar e instalar la nueva versión"),
                  onClick: P,
                  children: /* @__PURE__ */ o.jsx(Ud, { size: 14 })
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
              U || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const mh = [
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
], hh = "/pikmin_bloom/", xc = "/pikmin/alma.png", gh = "/sonidos/pikmin.mp3", vh = "/sonidos/pikmin_morir.mp3";
function yh(e) {
  const [t, n] = x.useState(mh), [r, a] = x.useState([]);
  return x.useEffect(() => {
    fetch(St("/pikmin/indice.json")).then((i) => i.ok ? i.json() : null).then((i) => {
      Array.isArray(i) && i.length && n(i.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(St("/pikmin_bloom/indice.json")).then((i) => i.ok ? i.json() : []).then((i) => {
      if (!Array.isArray(i)) return;
      const s = [...i];
      for (let c = s.length - 1; c > 0; c--) {
        const l = Math.floor(Math.random() * (c + 1));
        [s[c], s[l]] = [s[l], s[c]];
      }
      a(s.slice(0, 60).map((c) => St(hh + c)));
    }).catch(() => {
    });
  }, []), x.useMemo(
    () => e && e.length ? [...e, ...r].map(St) : [...t, ...r].map(St),
    [e, t, r]
  );
}
function xh({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: s = !1,
  minDelay: c,
  maxDelay: l,
  fuentes: p
}) {
  const v = yh(p), [h, y] = x.useState([]), m = x.useRef(void 0), j = x.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), b = x.useRef(s);
  b.current = s;
  const F = Math.max(5e3, t * 6e4), d = (w) => {
    if (!(!n || i))
      try {
        const N = new Audio(St(w ? vh : gh));
        N.volume = Math.min(1, Math.max(0, a)), N.play().catch(() => {
        });
      } catch {
      }
  }, u = () => {
    const w = r && Math.random() < 0.1, N = w ? St(xc) : v[Math.floor(Math.random() * v.length)] ?? St(xc);
    y((g) => [...g, {
      src: N,
      left: 3 + Math.random() * 92,
      key: Date.now() + g.length,
      morir: w,
      estado: "paseando"
    }]), d(w);
  }, f = () => {
    if (!e) return;
    const w = c ?? Math.round(F * 0.5), N = l ?? Math.round(F * 1.5), g = w + Math.random() * Math.max(1, N - w);
    m.current = window.setTimeout(u, g);
  };
  x.useEffect(() => {
    e && s && u();
  }, [s]), x.useEffect(() => {
    if (!e) {
      window.clearTimeout(m.current), y([]);
      return;
    }
    return f(), () => window.clearTimeout(m.current);
  }, [e, t, n, r, a, i, v]), x.useEffect(() => {
    const w = () => {
      j.current = document.visibilityState === "hidden", !j.current && b.current && window.setTimeout(() => {
        y((N) => N.length ? (d(!1), N.map((g) => ({ ...g, estado: "festejando" }))) : N), window.setTimeout(() => {
          y([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []);
  const k = (w) => {
    if (b.current && j.current) {
      y((N) => N.map((g) => g.key === w ? { ...g, estado: "quieto" } : g));
      return;
    }
    y((N) => N.filter((g) => g.key !== w)), f();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: h.map((w) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${w.estado}${w.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": w.estado,
      "data-morir": w.morir ? "1" : "0",
      style: { left: `${w.left}%` },
      onAnimationEnd: () => k(w.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: w.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => k(w.key)
        }
      )
    },
    w.key
  )) });
}
const wc = "crycat_bienvenida_v2";
function wh() {
  const [e, t] = x.useState(!1);
  return x.useEffect(() => {
    try {
      localStorage.getItem(wc) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(wc, "1");
    } catch {
    }
    t(!1);
  } };
}
function jh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ze(), [a, i] = x.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ o.jsx(po, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ o.jsx(Da, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ o.jsx(na, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ o.jsx(uo, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(vc, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], c = [
    [
      /* @__PURE__ */ o.jsx(po, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ o.jsx(zo, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ o.jsx(na, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ o.jsx(uo, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ o.jsx(Od, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(Da, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(vc, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(Hm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(Dd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ o.jsx(Da, { size: 18 }),
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
  ], p = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: p[a] }),
    a === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((v, h) => /* @__PURE__ */ o.jsx("li", { children: v }, h)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : c).map(([v, h, y], m) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: v }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: h }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: y })
      ] })
    ] }, m)) }),
    a === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ o.jsx(ta, { size: 15 }),
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
const kh = "https://github.com/dhernandezgit/CryCat-Tool", Ch = "daniel.hernandez@pixelabs.es", Sh = [
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
function _h({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const i = Ze(), [s, c] = x.useState(""), [l, p] = x.useState(""), [v, h] = x.useState(""), [y, m] = x.useState(!0), [j, b] = x.useState(!0), [F, d] = x.useState(!0), [u, f] = x.useState(!1);
  x.useEffect(() => {
    e && ($.version().then((T) => c(T.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const k = () => (globalThis.__crycatErrores ?? []).map(
    (G) => `- [${G.t}] ${G.msg} (${G.donde || "?"})`
  );
  if (!e) return null;
  const w = () => {
    var Y, ue;
    const T = navigator.userAgent, G = !!globalThis.__crycatBase, Q = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${G ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${T}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((Y = window.screen) == null ? void 0 : Y.width) ?? "?"}x${((ue = window.screen) == null ? void 0 : ue.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && Q.push(`- Elementos: ${a.pages} página(s)`), r && Q.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), Q.join(`
`);
  }, N = () => n ? [
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
  ].map((G) => `- ${G}: ${String(n[G])}`).join(`
`) : "", g = () => {
    const T = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      v.trim() || "1. …",
      ""
    ];
    y && T.push("### Entorno", w(), ""), j && n && T.push("### Ajustes", N(), "");
    const G = k();
    return F && G.length && T.push("### Errores recogidos", G.join(`
`), ""), T.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), T.join(`
`);
  }, _ = () => `[CryCat] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, E = () => {
    const T = `mailto:${Ch}?` + new URLSearchParams({
      subject: _(),
      body: g().slice(0, 1800)
    }).toString();
    window.location.href = T, t();
  }, C = () => {
    const T = `${kh}/issues/new?` + new URLSearchParams({
      title: _(),
      body: g(),
      labels: "bug"
    }).toString();
    window.open(T, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni login). También puedes copiarlo o abrirlo en GitHub si prefieres.") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: Sh.map(([T, G]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${T}`,
        onClick: () => p((Q) => (Q ? Q + `
` : "") + G),
        children: i(T)
      },
      T
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
          onChange: (T) => p(T.target.value)
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
          onChange: (T) => h(T.target.value)
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
          onChange: (T) => m(T.target.checked)
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
          checked: j,
          onChange: (T) => b(T.target.checked)
        }
      ),
      i("Incluir mis ajustes actuales")
    ] }),
    k().length > 0 && /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: F,
          onChange: (T) => d(T.target.checked)
        }
      ),
      i(
        "Incluir los {n} errores recogidos de la consola",
        { n: k().length }
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

${v}

${g()}`
              ), f(!0);
            } catch {
            }
          },
          children: i(u ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "reportar-github",
          title: i("Abrir en GitHub (necesita cuenta)"),
          onClick: C,
          children: i("GitHub")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "reportar-enviar",
          onClick: E,
          children: i("Enviar por email")
        }
      )
    ] })
  ] }) });
}
function Nh() {
  const [e, t] = x.useState([]), [n, r] = x.useState(null), [a, i] = x.useState(null), [s, c] = x.useState(null), [l, p] = x.useState(null), [v, h] = x.useState(null), [y, m] = x.useState(!0), [j, b] = x.useState(!1), [F, d] = x.useState(!1), [u, f] = x.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [k, w] = x.useState(33.3), [N, g] = x.useState(33.3), _ = wh(), E = x.useRef(null), C = x.useRef(null);
  x.useEffect(() => {
    (async () => {
      try {
        const M = await $.getSettings();
        p(M.settings), hc(M.settings.tema), f((D) => ({
          ...D,
          guidesVisible: M.settings.ver_guias,
          eyeTransparent: M.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: M.settings.ver_contornos !== !1,
          contornoModo: M.settings.contorno_modo ?? "final"
        })), t((await $.listAssets()).map(ea)), i(await $.result());
      } catch {
        m(!1);
      }
    })();
  }, []);
  const [T, G] = x.useState("");
  x.useEffect(() => {
    const M = (D) => G(String(D.detail || ""));
    return window.addEventListener("crycat:seleccion", M), () => window.removeEventListener("crycat:seleccion", M);
  }, []), x.useEffect(() => {
    const M = (D) => {
      const B = D.detail;
      w(B ? 19 : 33.3), g(B ? 62 : 33.3), f((Z) => ({ ...Z, hojaGirada: B }));
    };
    return window.addEventListener("crycat:disposicion", M), () => window.removeEventListener("crycat:disposicion", M);
  }, []), x.useEffect(() => {
    const M = setInterval(async () => {
      try {
        await $.health(), m(!0);
      } catch {
        m(!1);
      }
    }, 5e3);
    return () => clearInterval(M);
  }, []);
  const Q = x.useRef(!0), Y = x.useCallback(async () => {
    try {
      t((await $.listAssets()).map(ea)), i(await $.result());
      try {
        c(await $.estimate());
      } catch {
      }
    } catch {
      m(!1);
    } finally {
      Q.current = !1;
    }
  }, []), ue = x.useCallback((M) => {
    C.current && window.clearInterval(C.current), C.current = window.setInterval(async () => {
      try {
        const D = await $.job(M);
        h(D), D.done && (window.clearInterval(C.current), C.current = null, await Y(), D.status === "done" && window.setTimeout(() => h(null), 2500));
      } catch {
        window.clearInterval(C.current), C.current = null;
      }
    }, 300);
  }, []), je = x.useCallback(async () => {
    d(!0), await new Promise((M) => setTimeout(M, 60));
    try {
      const M = await $.optimize();
      h(M), ue(M.id);
    } catch {
      m(!1);
    } finally {
      d(!1);
    }
  }, [ue]), Re = x.useCallback(
    async (M) => {
      d(!0), await new Promise((D) => setTimeout(D, 60));
      try {
        const D = await $.optimize(M, !0);
        h(D), ue(D.id);
      } catch {
        m(!1);
      } finally {
        d(!1);
      }
    },
    [ue]
  ), R = x.useCallback(() => {
    l && l.auto_recalcular === !1 || (E.current && window.clearTimeout(E.current), E.current = window.setTimeout(je, 400));
  }, [je, l]), q = x.useRef(null);
  x.useEffect(() => {
    q.current = R;
  }, [R]), x.useEffect(() => {
    const M = (D) => {
      const B = D.detail;
      h((Z) => ({
        ...Z ?? {
          id: "web",
          status: "running",
          done: !1,
          message: "",
          progress: 0,
          pages: 0
        },
        progress: B.progress,
        pages: B.pages,
        eta_s: B.eta_s,
        tope_s: B.tope_s
      }));
    };
    return window.addEventListener("crycat:progreso", M), () => window.removeEventListener("crycat:progreso", M);
  }, []);
  const U = x.useRef(!1);
  x.useEffect(() => {
    if (!(!l || U.current)) {
      if (e.length > 0) {
        U.current = !0;
        return;
      }
      U.current = !0, $.crearDemo().then(async (M) => {
        M.ok && await Y();
      }).catch(() => {
      });
    }
  }, [l, e.length, Y]);
  const H = x.useCallback(
    async (M) => {
      p((D) => D && { ...D, ...M }), M.tema && hc(M.tema);
      try {
        const D = await $.putSettings(M);
        if (D.job)
          h(D.job), ue(D.job.id);
        else
          try {
            c(await $.estimate());
          } catch {
          }
      } catch {
        m(!1);
      }
    },
    [ue]
  ), [P, ne] = x.useState([]), ke = x.useCallback((M, D) => {
    ne((B) => D ? B.includes(M) ? B.filter((Z) => Z !== M) : [...B, M] : B.length === 1 && B[0] === M ? [] : [M]);
  }, []), et = x.useCallback(async (M, D) => {
    for (const B of M)
      await $.patchAsset(B, D).catch(() => {
      });
    await Y();
  }, [Y]), oe = x.useRef([]), ye = x.useRef([]), [O, be] = x.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), ze = (l == null ? void 0 : l.historial) !== !1, Fe = (l == null ? void 0 : l.historial_max) ?? 40, yt = x.useRef(!1), xt = x.useRef(""), Ft = x.useRef({ assets: [], result: null, settings: null }), qt = x.useCallback((M, D, B) => JSON.stringify({
    a: M.map((Z) => [
      Z.id,
      Z.scale_pct,
      Z.copies,
      Z.mini_enabled,
      Z.mini_quota,
      Z.offset_mm,
      Z.offset_modo,
      Z.offset_color,
      Z.simplificar
    ]),
    r: D ? [D.pages, D.placements.map((Z) => [
      Z.uid,
      Z.page,
      Math.round(Z.x * 100),
      Math.round(Z.y * 100),
      Z.angle,
      Z.pinned
    ])] : null,
    s: B ? [
      B.espacio_mm,
      B.margen_mm,
      B.rotacion,
      B.usar_minis,
      B.mini_min_mm,
      B.mini_tamanos,
      B.mini_usar_lista,
      B.mini_lista_modo,
      B.mini_lista_medida,
      B.mini_tamanos_lista,
      B.offset_activo,
      B.offset_mm,
      B.offset_modo,
      B.offset_color,
      B.modo_forma,
      B.separacion_px,
      B.marcas_delimitar,
      B.pagina,
      B.pagina_w,
      B.pagina_h,
      B.maquina,
      B.lienzo,
      B.color_formato
    ] : null
  }), []), Pn = () => be({
    puedeDeshacer: oe.current.length > 0,
    puedeRehacer: ye.current.length > 0
  }), dr = x.useCallback(() => {
    const M = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && M.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && M.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && M.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && M.push("mini_enabled", "mini_quota"), M;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]);
  x.useCallback((M) => {
    const D = {};
    for (const B of dr()) D[B] = M[B];
    return D;
  }, [dr]);
  const tt = x.useCallback(() => {
    ze && (oe.current = [
      ...oe.current,
      { assets: e, result: a, settings: l }
    ].slice(-Fe), ye.current = [], xt.current = qt(e, a, l), Pn());
  }, [e, a, l, ze, Fe, qt]);
  x.useEffect(() => {
    if (!ze || Q.current) return;
    const M = qt(e, a, l);
    if (yt.current) {
      xt.current = M, yt.current = !1;
      return;
    }
    if (!xt.current) {
      if (e.length === 0 && !a) return;
      xt.current = M;
      return;
    }
    M !== xt.current && (oe.current = [...oe.current, Ft.current].slice(-Fe), ye.current = [], xt.current = M, Pn());
  }, [e, a, l, ze, Fe, qt]), x.useEffect(() => {
    Ft.current = { assets: e, result: a, settings: l };
  }, [e, a, l]);
  const Mn = x.useCallback(async (M) => {
    yt.current = !0, t(M.assets), M.settings && (p(M.settings), await $.putSettings(M.settings).catch(() => {
    }));
    for (const D of M.assets)
      await $.patchAsset(D.id, {
        scale_pct: D.scale_pct,
        copies: D.copies,
        mini_enabled: D.mini_enabled,
        mini_quota: D.mini_quota,
        offset_mm: D.offset_mm,
        offset_modo: D.offset_modo,
        offset_color: D.offset_color
      }).catch(() => {
      });
    if (M.result) {
      await $.restoreResult(M.result).catch(() => {
      }), i(M.result);
      try {
        c(await $.estimate());
      } catch {
      }
    } else
      await Y();
    Pn();
  }, [Y]), pr = x.useCallback(async () => {
    const M = oe.current.pop();
    M && (ye.current = [...ye.current, { assets: e, result: a, settings: l }], await Mn(M));
  }, [e, a, Mn]), Bt = x.useCallback(async () => {
    const M = ye.current.pop();
    M && (oe.current = [...oe.current, { assets: e, result: a, settings: l }], await Mn(M));
  }, [e, a, Mn]);
  x.useEffect(() => {
    const M = (D) => {
      if (!(D.ctrlKey || D.metaKey)) return;
      const Z = D.target;
      if (Z && (Z.tagName === "INPUT" || Z.tagName === "TEXTAREA" || Z.tagName === "SELECT" || Z.isContentEditable)) return;
      const Ut = D.key.toLowerCase();
      Ut === "z" && !D.shiftKey ? (D.preventDefault(), pr()) : (Ut === "y" || Ut === "z" && D.shiftKey) && (D.preventDefault(), Bt());
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [pr, Bt]);
  const fr = x.useCallback(
    (M) => {
      const D = (Z) => {
        const mr = window.innerWidth, Ut = Z.clientX / mr * 100;
        M === "left" ? w(Math.min(45, Math.max(12, Ut))) : g(Math.min(60, Math.max(20, Ut - k)));
      }, B = () => {
        window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", B);
      };
      window.addEventListener("mousemove", D), window.addEventListener("mouseup", B);
    },
    [k]
  );
  return x.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ o.jsx(Lm, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${k}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        rh,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await Y(), R();
          },
          saveSettings: H,
          onEditarContorno: (M) => r(M),
          onAntesDeCambiar: tt,
          seleccion: P,
          onSeleccion: ke,
          onBulk: et,
          verBordes: u.verBordes,
          contornoModo: u.contornoModo ?? "final",
          destacado: T
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => fr("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${N}%` }, children: /* @__PURE__ */ o.jsx(
        oh,
        {
          assets: e,
          result: a,
          settings: l,
          ui: u,
          setUi: f,
          saveSettings: H,
          optimize: je,
          onRefresh: Y,
          onJob: (M) => {
            h(M), ue(M.id);
          },
          onRecalc: Re,
          editando: n,
          onFinEdicion: async () => {
            r(null), await Y();
          },
          onDeshacer: pr,
          onRehacer: Bt,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => fr("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        dh,
        {
          settings: l,
          assets: e,
          saveSettings: H
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      fh,
      {
        job: v,
        backendOk: y,
        result: a,
        estimate: s,
        optimizando: F,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (M) => H({ volumen: M }),
        onMute: (M) => H({ mute: M }),
        onIdioma: (M) => H({ idioma: M }),
        onEasterEgg: () => H({
          pikmin_activo: !0,
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: _.abrir,
        onReportar: () => b(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      xh,
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
      jh,
      {
        open: _.visible,
        onClose: _.cerrar,
        onAbrirCarpeta: () => void $.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      _h,
      {
        open: j,
        onClose: () => b(!1),
        settings: l,
        job: v,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: Rm("es", "Cargando CryCat…") });
}
const Eh = "1790722025350", Gd = document.getElementById("root"), ii = [
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
], rs = 8, Oa = [];
globalThis.__crycatErrores = Oa;
const Hd = (e, t) => {
  Oa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Oa.length > 12 && Oa.shift();
};
window.addEventListener("error", (e) => Hd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Hd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let as;
function si(e, t = !1) {
  window.clearTimeout(as);
  const n = Ad().colors;
  if (Gd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + rs}</div>
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
  let r = Math.floor(Math.random() * ii.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = ii[r++ % ii.length]);
  }, i = () => {
    a(), as = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const li = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${rs}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / rs * 100)}%`);
  }
};
let In = null, Wd = !1, bh = 0;
const os = /* @__PURE__ */ new Map();
function Qd(e) {
  return new Promise((t) => {
    const n = ++bh;
    os.set(n, t), In.postMessage({ ...e, id: n });
  });
}
const is = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, zh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Ph(e) {
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
    is(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Mh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((v, h) => {
    s[h] = v;
  });
  let c = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [v, h] = await Ph(l);
    c = v, s["content-type"] = h;
  } else l instanceof Blob ? c = is(await l.arrayBuffer()) : typeof l == "string" && (c = is(new TextEncoder().encode(l).buffer));
  const p = await Qd({
    tipo: "api",
    method: e,
    path: i,
    headers: JSON.stringify(s),
    body: c
  });
  return p && p.error ? new Response("error: " + p.error, { status: 500 }) : new Response(zh(p.body), {
    status: p.status || 200,
    headers: p.headers || { "content-type": "application/json" }
  });
}
function Th() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && Wd)
      try {
        return await Mh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Lh() {
  try {
    if (si("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const t = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: t }).then(() => navigator.serviceWorker.ready),
          new Promise((n) => setTimeout(n, 6e3))
        ]);
      } catch {
      }
    const e = new URL(
      `worker-crycat.js?v=${Eh}`,
      location.href
    ).href;
    In = new Worker(e, { type: "module" }), In.onmessage = (t) => {
      const n = t.data || {};
      if (n.tipo === "estado")
        li(n.t, n.paso);
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
        const r = os.get(n.id);
        os.delete(n.id), r && r(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && si("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (r) => {
        r.data && r.data.tipo === "listo" && (In.removeEventListener("message", n), t());
      };
      In.addEventListener("message", n), In.postMessage({ tipo: "iniciar" });
    }), Wd = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const r = t.ports && t.ports[0];
      if (r)
        try {
          const a = await Qd({
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
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Th();
    try {
      const t = Ad().key;
      t && t !== "wiwi" && await fetch(kn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: t })
      });
    } catch {
    }
    li("Optimizando la muestra inicial…", 7);
    try {
      const t = await fetch(kn() + "api/assets").then((n) => n.json());
      Array.isArray(t) && t.length === 0 && await fetch(kn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    li("Abriendo la aplicación…", 8), window.clearTimeout(as), Ld(Gd).render(/* @__PURE__ */ o.jsx(Nh, {}));
  } catch (e) {
    si("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Lh();
