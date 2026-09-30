var Nc = { exports: {} }, mo = {}, Ec = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa = Symbol.for("react.element"), rp = Symbol.for("react.portal"), ap = Symbol.for("react.fragment"), op = Symbol.for("react.strict_mode"), ip = Symbol.for("react.profiler"), sp = Symbol.for("react.provider"), lp = Symbol.for("react.context"), cp = Symbol.for("react.forward_ref"), up = Symbol.for("react.suspense"), dp = Symbol.for("react.memo"), pp = Symbol.for("react.lazy"), ll = Symbol.iterator;
function fp(e) {
  return e === null || typeof e != "object" ? null : (e = ll && e[ll] || e["@@iterator"], typeof e == "function" ? e : null);
}
var zc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bc = Object.assign, Pc = {};
function cr(e, t, n) {
  this.props = e, this.context = t, this.refs = Pc, this.updater = n || zc;
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mc() {
}
Mc.prototype = cr.prototype;
function us(e, t, n) {
  this.props = e, this.context = t, this.refs = Pc, this.updater = n || zc;
}
var ds = us.prototype = new Mc();
ds.constructor = us;
bc(ds, cr.prototype);
ds.isPureReactComponent = !0;
var cl = Array.isArray, Tc = Object.prototype.hasOwnProperty, ps = { current: null }, Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var r, a = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Tc.call(t, r) && !Lc.hasOwnProperty(r) && (a[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) a.children = n;
  else if (1 < c) {
    for (var l = Array(c), d = 0; d < c; d++) l[d] = arguments[d + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in c = e.defaultProps, c) a[r] === void 0 && (a[r] = c[r]);
  return { $$typeof: sa, type: e, key: i, ref: s, props: a, _owner: ps.current };
}
function mp(e, t) {
  return { $$typeof: sa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function fs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sa;
}
function hp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ul = /\/+/g;
function To(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hp("" + e.key) : t.toString(36);
}
function Pa(e, t, n, r, a) {
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
        case rp:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + To(s, 0) : r, cl(a) ? (n = "", e != null && (n = e.replace(ul, "$&/") + "/"), Pa(a, t, n, "", function(d) {
    return d;
  })) : a != null && (fs(a) && (a = mp(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(ul, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", cl(e)) for (var c = 0; c < e.length; c++) {
    i = e[c];
    var l = r + To(i, c);
    s += Pa(i, t, n, l, a);
  }
  else if (l = fp(e), typeof l == "function") for (e = l.call(e), c = 0; !(i = e.next()).done; ) i = i.value, l = r + To(i, c++), s += Pa(i, t, n, l, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function fa(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Pa(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function gp(e) {
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
var $e = { current: null }, Ma = { transition: null }, vp = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: Ma, ReactCurrentOwner: ps };
function Ac() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = { map: fa, forEach: function(e, t, n) {
  fa(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fa(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fa(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!fs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
X.Component = cr;
X.Fragment = ap;
X.Profiler = ip;
X.PureComponent = us;
X.StrictMode = op;
X.Suspense = up;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
X.act = Ac;
X.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bc({}, e.props), a = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = ps.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (l in t) Tc.call(t, l) && !Lc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    c = Array(l);
    for (var d = 0; d < l; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  return { $$typeof: sa, type: e.type, key: a, ref: i, props: r, _owner: s };
};
X.createContext = function(e) {
  return e = { $$typeof: lp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: sp, _context: e }, e.Consumer = e;
};
X.createElement = Rc;
X.createFactory = function(e) {
  var t = Rc.bind(null, e);
  return t.type = e, t;
};
X.createRef = function() {
  return { current: null };
};
X.forwardRef = function(e) {
  return { $$typeof: cp, render: e };
};
X.isValidElement = fs;
X.lazy = function(e) {
  return { $$typeof: pp, _payload: { _status: -1, _result: e }, _init: gp };
};
X.memo = function(e, t) {
  return { $$typeof: dp, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function(e) {
  var t = Ma.transition;
  Ma.transition = {};
  try {
    e();
  } finally {
    Ma.transition = t;
  }
};
X.unstable_act = Ac;
X.useCallback = function(e, t) {
  return $e.current.useCallback(e, t);
};
X.useContext = function(e) {
  return $e.current.useContext(e);
};
X.useDebugValue = function() {
};
X.useDeferredValue = function(e) {
  return $e.current.useDeferredValue(e);
};
X.useEffect = function(e, t) {
  return $e.current.useEffect(e, t);
};
X.useId = function() {
  return $e.current.useId();
};
X.useImperativeHandle = function(e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function(e, t) {
  return $e.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function(e, t) {
  return $e.current.useLayoutEffect(e, t);
};
X.useMemo = function(e, t) {
  return $e.current.useMemo(e, t);
};
X.useReducer = function(e, t, n) {
  return $e.current.useReducer(e, t, n);
};
X.useRef = function(e) {
  return $e.current.useRef(e);
};
X.useState = function(e) {
  return $e.current.useState(e);
};
X.useSyncExternalStore = function(e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function() {
  return $e.current.useTransition();
};
X.version = "18.3.1";
Ec.exports = X;
var w = Ec.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp = w, xp = Symbol.for("react.element"), wp = Symbol.for("react.fragment"), jp = Object.prototype.hasOwnProperty, kp = yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ic(e, t, n) {
  var r, a = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) jp.call(t, r) && !Cp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: xp, type: e, key: i, ref: s, props: a, _owner: kp.current };
}
mo.Fragment = wp;
mo.jsx = Ic;
mo.jsxs = Ic;
Nc.exports = mo;
var o = Nc.exports, $c = { exports: {} }, Ke = {}, Dc = { exports: {} }, Oc = {};
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
  function t(R, U) {
    var O = R.length;
    R.push(U);
    e: for (; 0 < O; ) {
      var z = O - 1 >>> 1, Q = R[z];
      if (0 < a(Q, U)) R[z] = U, R[O] = Q, O = z;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var U = R[0], O = R.pop();
    if (O !== U) {
      R[0] = O;
      e: for (var z = 0, Q = R.length, Ze = Q >>> 1; z < Ze; ) {
        var Se = 2 * (z + 1) - 1, et = R[Se], ue = Se + 1, ye = R[ue];
        if (0 > a(et, O)) ue < Q && 0 > a(ye, et) ? (R[z] = ye, R[ue] = O, z = ue) : (R[z] = et, R[Se] = O, z = Se);
        else if (ue < Q && 0 > a(ye, O)) R[z] = ye, R[ue] = O, z = ue;
        else break e;
      }
    }
    return U;
  }
  function a(R, U) {
    var O = R.sortIndex - U.sortIndex;
    return O !== 0 ? O : R.id - U.id;
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
  var l = [], d = [], g = 1, h = null, y = 3, m = !1, j = !1, b = !1, B = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(R) {
    for (var U = n(d); U !== null; ) {
      if (U.callback === null) r(d);
      else if (U.startTime <= R) r(d), U.sortIndex = U.expirationTime, t(l, U);
      else break;
      U = n(d);
    }
  }
  function x(R) {
    if (b = !1, p(R), !j) if (n(l) !== null) j = !0, re(N);
    else {
      var U = n(d);
      U !== null && Ce(x, U.startTime - R);
    }
  }
  function N(R, U) {
    j = !1, b && (b = !1, u(P), P = -1), m = !0;
    var O = y;
    try {
      for (p(U), h = n(l); h !== null && (!(h.expirationTime > U) || R && !C()); ) {
        var z = h.callback;
        if (typeof z == "function") {
          h.callback = null, y = h.priorityLevel;
          var Q = z(h.expirationTime <= U);
          U = e.unstable_now(), typeof Q == "function" ? h.callback = Q : h === n(l) && r(l), p(U);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var Ze = !0;
      else {
        var Se = n(d);
        Se !== null && Ce(x, Se.startTime - U), Ze = !1;
      }
      return Ze;
    } finally {
      h = null, y = O, m = !1;
    }
  }
  var E = !1, S = null, P = -1, k = 5, v = -1;
  function C() {
    return !(e.unstable_now() - v < k);
  }
  function I() {
    if (S !== null) {
      var R = e.unstable_now();
      v = R;
      var U = !0;
      try {
        U = S(!0, R);
      } finally {
        U ? W() : (E = !1, S = null);
      }
    } else E = !1;
  }
  var W;
  if (typeof f == "function") W = function() {
    f(I);
  };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(), ne = G.port2;
    G.port1.onmessage = I, W = function() {
      ne.postMessage(null);
    };
  } else W = function() {
    B(I, 0);
  };
  function re(R) {
    S = R, E || (E = !0, W());
  }
  function Ce(R, U) {
    P = B(function() {
      R(e.unstable_now());
    }, U);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    j || m || (j = !0, re(N));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var U = 3;
        break;
      default:
        U = y;
    }
    var O = y;
    y = U;
    try {
      return R();
    } finally {
      y = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, U) {
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
    var O = y;
    y = R;
    try {
      return U();
    } finally {
      y = O;
    }
  }, e.unstable_scheduleCallback = function(R, U, O) {
    var z = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? z + O : z) : O = z, R) {
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
    return Q = O + Q, R = { id: g++, callback: U, priorityLevel: R, startTime: O, expirationTime: Q, sortIndex: -1 }, O > z ? (R.sortIndex = O, t(d, R), n(l) === null && R === n(d) && (b ? (u(P), P = -1) : b = !0, Ce(x, O - z))) : (R.sortIndex = Q, t(l, R), j || m || (j = !0, re(N))), R;
  }, e.unstable_shouldYield = C, e.unstable_wrapCallback = function(R) {
    var U = y;
    return function() {
      var O = y;
      y = U;
      try {
        return R.apply(this, arguments);
      } finally {
        y = O;
      }
    };
  };
})(Oc);
Dc.exports = Oc;
var Sp = Dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p = w, Ye = Sp;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Fc = /* @__PURE__ */ new Set(), Or = {};
function zn(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) Fc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ci = Object.prototype.hasOwnProperty, Np = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, dl = {}, pl = {};
function Ep(e) {
  return ci.call(pl, e) ? !0 : ci.call(dl, e) ? !1 : Np.test(e) ? pl[e] = !0 : (dl[e] = !0, !1);
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
function bp(e, t, n, r) {
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
function De(e, t, n, r, a, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ms = /[\-:]([a-z])/g;
function hs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ms,
    hs
  );
  Ee[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ms, hs);
  Ee[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ms, hs);
  Ee[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gs(e, t, n, r) {
  var a = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bp(t, n, a, r) && (n = null), r || a === null ? Ep(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ma = Symbol.for("react.element"), $n = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), vs = Symbol.for("react.strict_mode"), ui = Symbol.for("react.profiler"), qc = Symbol.for("react.provider"), Bc = Symbol.for("react.context"), ys = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), xs = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Uc = Symbol.for("react.offscreen"), fl = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object" ? null : (e = fl && e[fl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, Lo;
function _r(e) {
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
    Ro = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function Pp(e) {
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
    case vs:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Bc:
      return (e.displayName || "Context") + ".Consumer";
    case qc:
      return (e._context.displayName || "Context") + ".Provider";
    case ys:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case xs:
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
function Mp(e) {
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
      return t === vs ? "StrictMode" : "Mode";
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
function Vc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tp(e) {
  var t = Vc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Tp(e));
}
function Gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Vc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ua(e) {
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
function ml(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Hc(e, t) {
  t = t.checked, t != null && gs(e, "checked", t, !1);
}
function hi(e, t) {
  Hc(e, t);
  var n = cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function hl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Ua(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function vi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Wc(e, t) {
  var n = cn(t.value), r = cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function vl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qc(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Qc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ga, Yc = function(e) {
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
}, Lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function(e) {
  Lp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e];
  });
});
function Kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px";
}
function Xc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Kc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Rp = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xi(e, t) {
  if (t) {
    if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
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
function ws(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ki = null, Kn = null, Xn = null;
function yl(e) {
  if (e = ua(e)) {
    if (typeof ki != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = xo(t), ki(e.stateNode, e.type, t));
  }
}
function Jc(e) {
  Kn ? Xn ? Xn.push(e) : Xn = [e] : Kn = e;
}
function Zc() {
  if (Kn) {
    var e = Kn, t = Xn;
    if (Xn = Kn = null, yl(e), t) for (e = 0; e < t.length; e++) yl(t[e]);
  }
}
function eu(e, t) {
  return e(t);
}
function tu() {
}
var Io = !1;
function nu(e, t, n) {
  if (Io) return e(t, n);
  Io = !0;
  try {
    return eu(e, t, n);
  } finally {
    Io = !1, (Kn !== null || Xn !== null) && (tu(), Zc());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xo(n);
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
var Ci = !1;
if (At) try {
  var yr = {};
  Object.defineProperty(yr, "passive", { get: function() {
    Ci = !0;
  } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
} catch {
  Ci = !1;
}
function Ap(e, t, n, r, a, i, s, c, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var Pr = !1, Va = null, Ga = !1, Si = null, Ip = { onError: function(e) {
  Pr = !0, Va = e;
} };
function $p(e, t, n, r, a, i, s, c, l) {
  Pr = !1, Va = null, Ap.apply(Ip, arguments);
}
function Dp(e, t, n, r, a, i, s, c, l) {
  if ($p.apply(this, arguments), Pr) {
    if (Pr) {
      var d = Va;
      Pr = !1, Va = null;
    } else throw Error(M(198));
    Ga || (Ga = !0, Si = d);
  }
}
function bn(e) {
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
function ru(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xl(e) {
  if (bn(e) !== e) throw Error(M(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bn(e), t === null) throw Error(M(188));
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
        if (i === n) return xl(a), e;
        if (i === r) return xl(a), t;
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
function au(e) {
  return e = Op(e), e !== null ? ou(e) : null;
}
function ou(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ou(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var iu = Ye.unstable_scheduleCallback, wl = Ye.unstable_cancelCallback, Fp = Ye.unstable_shouldYield, qp = Ye.unstable_requestPaint, ge = Ye.unstable_now, Bp = Ye.unstable_getCurrentPriorityLevel, js = Ye.unstable_ImmediatePriority, su = Ye.unstable_UserBlockingPriority, Ha = Ye.unstable_NormalPriority, Up = Ye.unstable_LowPriority, lu = Ye.unstable_IdlePriority, ho = null, _t = null;
function Vp(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ht = Math.clz32 ? Math.clz32 : Wp, Gp = Math.log, Hp = Math.LN2;
function Wp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gp(e) / Hp | 0) | 0;
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
function Wa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var c = s & ~a;
    c !== 0 ? r = Er(c) : (i &= s, i !== 0 && (r = Er(i)));
  } else s = n & ~a, s !== 0 ? r = Er(s) : i !== 0 && (r = Er(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ht(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Qp(e, t) {
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
function Yp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - ht(i), c = 1 << s, l = a[s];
    l === -1 ? (!(c & n) || c & r) && (a[s] = Qp(c, t)) : l <= t && (e.expiredLanes |= c), i &= ~c;
  }
}
function _i(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function cu() {
  var e = va;
  return va <<= 1, !(va & 4194240) && (va = 64), e;
}
function $o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function la(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n;
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ht(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function ks(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var te = 0;
function uu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var du, Cs, pu, fu, mu, Ni = !1, xa = [], en = null, tn = null, nn = null, Br = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), Kt = [], Xp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function jl(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = ua(t), t !== null && Cs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Jp(e, t, n, r, a) {
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
function hu(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = bn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ru(n), t !== null) {
          e.blockedOn = t, mu(e.priority, function() {
            pu(n);
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
function Ta(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ji = r, n.target.dispatchEvent(r), ji = null;
    } else return t = ua(n), t !== null && Cs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function kl(e, t, n) {
  Ta(e) && n.delete(t);
}
function Zp() {
  Ni = !1, en !== null && Ta(en) && (en = null), tn !== null && Ta(tn) && (tn = null), nn !== null && Ta(nn) && (nn = null), Br.forEach(kl), Ur.forEach(kl);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ni || (Ni = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Zp)));
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
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) hu(n), n.blockedOn === null && Kt.shift();
}
var Jn = Ot.ReactCurrentBatchConfig, Qa = !0;
function ef(e, t, n, r) {
  var a = te, i = Jn.transition;
  Jn.transition = null;
  try {
    te = 1, Ss(e, t, n, r);
  } finally {
    te = a, Jn.transition = i;
  }
}
function tf(e, t, n, r) {
  var a = te, i = Jn.transition;
  Jn.transition = null;
  try {
    te = 4, Ss(e, t, n, r);
  } finally {
    te = a, Jn.transition = i;
  }
}
function Ss(e, t, n, r) {
  if (Qa) {
    var a = Ei(e, t, n, r);
    if (a === null) Wo(e, t, r, Ya, n), jl(e, r);
    else if (Jp(a, e, t, n, r)) r.stopPropagation();
    else if (jl(e, r), t & 4 && -1 < Xp.indexOf(e)) {
      for (; a !== null; ) {
        var i = ua(a);
        if (i !== null && du(i), i = Ei(e, t, n, r), i === null && Wo(e, t, r, Ya, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else Wo(e, t, r, null, n);
  }
}
var Ya = null;
function Ei(e, t, n, r) {
  if (Ya = null, e = ws(r), e = vn(e), e !== null) if (t = bn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ru(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ya = e, null;
}
function gu(e) {
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
      switch (Bp()) {
        case js:
          return 1;
        case su:
          return 4;
        case Ha:
        case Up:
          return 16;
        case lu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null, _s = null, La = null;
function vu() {
  if (La) return La;
  var e, t = _s, n = t.length, r, a = "value" in Jt ? Jt.value : Jt.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[i - r]; r++) ;
  return La = a.slice(e, 1 < r ? 1 - r : void 0);
}
function Ra(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wa() {
  return !0;
}
function Cl() {
  return !1;
}
function Xe(e) {
  function t(n, r, a, i, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wa : Cl, this.isPropagationStopped = Cl, this;
  }
  return fe(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Ns = Xe(ur), ca = fe({}, ur, { view: 0, detail: 0 }), nf = Xe(ca), Do, Oo, jr, go = fe({}, ca, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Es, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jr && (jr && e.type === "mousemove" ? (Do = e.screenX - jr.screenX, Oo = e.screenY - jr.screenY) : Oo = Do = 0, jr = e), Do);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Oo;
} }), Sl = Xe(go), rf = fe({}, go, { dataTransfer: 0 }), af = Xe(rf), of = fe({}, ca, { relatedTarget: 0 }), Fo = Xe(of), sf = fe({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lf = Xe(sf), cf = fe({}, ur, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), uf = Xe(cf), df = fe({}, ur, { data: 0 }), _l = Xe(df), pf = {
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
}, ff = {
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
}, mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mf[e]) ? !!t[e] : !1;
}
function Es() {
  return hf;
}
var gf = fe({}, ca, { key: function(e) {
  if (e.key) {
    var t = pf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ra(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ff[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Es, charCode: function(e) {
  return e.type === "keypress" ? Ra(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ra(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vf = Xe(gf), yf = fe({}, go, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nl = Xe(yf), xf = fe({}, ca, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Es }), wf = Xe(xf), jf = fe({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kf = Xe(jf), Cf = fe({}, go, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sf = Xe(Cf), _f = [9, 13, 27, 32], zs = At && "CompositionEvent" in window, Mr = null;
At && "documentMode" in document && (Mr = document.documentMode);
var Nf = At && "TextEvent" in window && !Mr, yu = At && (!zs || Mr && 8 < Mr && 11 >= Mr), El = " ", zl = !1;
function xu(e, t) {
  switch (e) {
    case "keyup":
      return _f.indexOf(t.keyCode) !== -1;
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
function wu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Ef(e, t) {
  switch (e) {
    case "compositionend":
      return wu(t);
    case "keypress":
      return t.which !== 32 ? null : (zl = !0, El);
    case "textInput":
      return e = t.data, e === El && zl ? null : e;
    default:
      return null;
  }
}
function zf(e, t) {
  if (On) return e === "compositionend" || !zs && xu(e, t) ? (e = vu(), La = _s = Jt = null, On = !1, e) : null;
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
      return yu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bf[e.type] : t === "textarea";
}
function ju(e, t, n, r) {
  Jc(r), t = Ka(t, "onChange"), 0 < t.length && (n = new Ns("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tr = null, Gr = null;
function Pf(e) {
  Tu(e, 0);
}
function vo(e) {
  var t = Bn(e);
  if (Gc(t)) return e;
}
function Mf(e, t) {
  if (e === "change") return t;
}
var ku = !1;
if (At) {
  var qo;
  if (At) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var Pl = document.createElement("div");
      Pl.setAttribute("oninput", "return;"), Bo = typeof Pl.oninput == "function";
    }
    qo = Bo;
  } else qo = !1;
  ku = qo && (!document.documentMode || 9 < document.documentMode);
}
function Ml() {
  Tr && (Tr.detachEvent("onpropertychange", Cu), Gr = Tr = null);
}
function Cu(e) {
  if (e.propertyName === "value" && vo(Gr)) {
    var t = [];
    ju(t, Gr, e, ws(e)), nu(Pf, t);
  }
}
function Tf(e, t, n) {
  e === "focusin" ? (Ml(), Tr = t, Gr = n, Tr.attachEvent("onpropertychange", Cu)) : e === "focusout" && Ml();
}
function Lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vo(Gr);
}
function Rf(e, t) {
  if (e === "click") return vo(t);
}
function Af(e, t) {
  if (e === "input" || e === "change") return vo(t);
}
function If(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var vt = typeof Object.is == "function" ? Object.is : If;
function Hr(e, t) {
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
function Tl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ll(e, t) {
  var n = Tl(e);
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
    n = Tl(n);
  }
}
function Su(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Su(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function _u() {
  for (var e = window, t = Ua(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ua(e.document);
  }
  return t;
}
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function $f(e) {
  var t = _u(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Su(n.ownerDocument.documentElement, n)) {
    if (r !== null && bs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Ll(n, i);
        var s = Ll(
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
var Df = At && "documentMode" in document && 11 >= document.documentMode, Fn = null, zi = null, Lr = null, bi = !1;
function Rl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bi || Fn == null || Fn !== Ua(r) || (r = Fn, "selectionStart" in r && bs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lr && Hr(Lr, r) || (Lr = r, r = Ka(zi, "onSelect"), 0 < r.length && (t = new Ns("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fn)));
}
function ja(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qn = { animationend: ja("Animation", "AnimationEnd"), animationiteration: ja("Animation", "AnimationIteration"), animationstart: ja("Animation", "AnimationStart"), transitionend: ja("Transition", "TransitionEnd") }, Uo = {}, Nu = {};
At && (Nu = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
function yo(e) {
  if (Uo[e]) return Uo[e];
  if (!qn[e]) return e;
  var t = qn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nu) return Uo[e] = t[n];
  return e;
}
var Eu = yo("animationend"), zu = yo("animationiteration"), bu = yo("animationstart"), Pu = yo("transitionend"), Mu = /* @__PURE__ */ new Map(), Al = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Mu.set(e, t), zn(t, [e]);
}
for (var Vo = 0; Vo < Al.length; Vo++) {
  var Go = Al[Vo], Of = Go.toLowerCase(), Ff = Go[0].toUpperCase() + Go.slice(1);
  dn(Of, "on" + Ff);
}
dn(Eu, "onAnimationEnd");
dn(zu, "onAnimationIteration");
dn(bu, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Pu, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function Il(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Dp(r, t, void 0, e), e.currentTarget = null;
}
function Tu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var c = r[s], l = c.instance, d = c.currentTarget;
        if (c = c.listener, l !== i && a.isPropagationStopped()) break e;
        Il(a, c, d), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (c = r[s], l = c.instance, d = c.currentTarget, c = c.listener, l !== i && a.isPropagationStopped()) break e;
        Il(a, c, d), i = l;
      }
    }
  }
  if (Ga) throw e = Si, Ga = !1, Si = null, e;
}
function ie(e, t) {
  var n = t[Ri];
  n === void 0 && (n = t[Ri] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Lu(t, e, 2, !1), n.add(r));
}
function Ho(e, t, n) {
  var r = 0;
  t && (r |= 4), Lu(n, e, r, t);
}
var ka = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[ka]) {
    e[ka] = !0, Fc.forEach(function(n) {
      n !== "selectionchange" && (qf.has(n) || Ho(n, !1, e), Ho(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ka] || (t[ka] = !0, Ho("selectionchange", !1, t));
  }
}
function Lu(e, t, n, r) {
  switch (gu(t)) {
    case 1:
      var a = ef;
      break;
    case 4:
      a = tf;
      break;
    default:
      a = Ss;
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
  nu(function() {
    var d = i, g = ws(n), h = [];
    e: {
      var y = Mu.get(e);
      if (y !== void 0) {
        var m = Ns, j = e;
        switch (e) {
          case "keypress":
            if (Ra(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = vf;
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
            m = Sl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = wf;
            break;
          case Eu:
          case zu:
          case bu:
            m = lf;
            break;
          case Pu:
            m = kf;
            break;
          case "scroll":
            m = nf;
            break;
          case "wheel":
            m = Sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Nl;
        }
        var b = (t & 4) !== 0, B = !b && e === "scroll", u = b ? y !== null ? y + "Capture" : null : y;
        b = [];
        for (var f = d, p; f !== null; ) {
          p = f;
          var x = p.stateNode;
          if (p.tag === 5 && x !== null && (p = x, u !== null && (x = qr(f, u), x != null && b.push(Qr(f, x, p)))), B) break;
          f = f.return;
        }
        0 < b.length && (y = new m(y, j, null, n, g), h.push({ event: y, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", y && n !== ji && (j = n.relatedTarget || n.fromElement) && (vn(j) || j[It])) break e;
        if ((m || y) && (y = g.window === g ? g : (y = g.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (j = n.relatedTarget || n.toElement, m = d, j = j ? vn(j) : null, j !== null && (B = bn(j), j !== B || j.tag !== 5 && j.tag !== 6) && (j = null)) : (m = null, j = d), m !== j)) {
          if (b = Sl, x = "onMouseLeave", u = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (b = Nl, x = "onPointerLeave", u = "onPointerEnter", f = "pointer"), B = m == null ? y : Bn(m), p = j == null ? y : Bn(j), y = new b(x, f + "leave", m, n, g), y.target = B, y.relatedTarget = p, x = null, vn(g) === d && (b = new b(u, f + "enter", j, n, g), b.target = p, b.relatedTarget = B, x = b), B = x, m && j) t: {
            for (b = m, u = j, f = 0, p = b; p; p = An(p)) f++;
            for (p = 0, x = u; x; x = An(x)) p++;
            for (; 0 < f - p; ) b = An(b), f--;
            for (; 0 < p - f; ) u = An(u), p--;
            for (; f--; ) {
              if (b === u || u !== null && b === u.alternate) break t;
              b = An(b), u = An(u);
            }
            b = null;
          }
          else b = null;
          m !== null && $l(h, y, m, b, !1), j !== null && B !== null && $l(h, B, j, b, !0);
        }
      }
      e: {
        if (y = d ? Bn(d) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file") var N = Mf;
        else if (bl(y)) if (ku) N = Af;
        else {
          N = Lf;
          var E = Tf;
        }
        else (m = y.nodeName) && m.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (N = Rf);
        if (N && (N = N(e, d))) {
          ju(h, N, n, g);
          break e;
        }
        E && E(e, y, d), e === "focusout" && (E = y._wrapperState) && E.controlled && y.type === "number" && gi(y, "number", y.value);
      }
      switch (E = d ? Bn(d) : window, e) {
        case "focusin":
          (bl(E) || E.contentEditable === "true") && (Fn = E, zi = d, Lr = null);
          break;
        case "focusout":
          Lr = zi = Fn = null;
          break;
        case "mousedown":
          bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          bi = !1, Rl(h, n, g);
          break;
        case "selectionchange":
          if (Df) break;
        case "keydown":
        case "keyup":
          Rl(h, n, g);
      }
      var S;
      if (zs) e: {
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
      else On ? xu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (yu && n.locale !== "ko" && (On || P !== "onCompositionStart" ? P === "onCompositionEnd" && On && (S = vu()) : (Jt = g, _s = "value" in Jt ? Jt.value : Jt.textContent, On = !0)), E = Ka(d, P), 0 < E.length && (P = new _l(P, e, null, n, g), h.push({ event: P, listeners: E }), S ? P.data = S : (S = wu(n), S !== null && (P.data = S)))), (S = Nf ? Ef(e, n) : zf(e, n)) && (d = Ka(d, "onBeforeInput"), 0 < d.length && (g = new _l("onBeforeInput", "beforeinput", null, n, g), h.push({ event: g, listeners: d }), g.data = S));
    }
    Tu(h, t);
  });
}
function Qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ka(e, t) {
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
function $l(e, t, n, r, a) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var c = n, l = c.alternate, d = c.stateNode;
    if (l !== null && l === r) break;
    c.tag === 5 && d !== null && (c = d, a ? (l = qr(n, i), l != null && s.unshift(Qr(n, l, c))) : a || (l = qr(n, i), l != null && s.push(Qr(n, l, c)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Bf = /\r\n?/g, Uf = /\u0000|\uFFFD/g;
function Dl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Bf, `
`).replace(Uf, "");
}
function Ca(e, t, n) {
  if (t = Dl(t), Dl(e) !== t && n) throw Error(M(425));
}
function Xa() {
}
var Pi = null, Mi = null;
function Ti(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Li = typeof setTimeout == "function" ? setTimeout : void 0, Vf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ol = typeof Promise == "function" ? Promise : void 0, Gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ol < "u" ? function(e) {
  return Ol.resolve(null).then(e).catch(Hf);
} : Li;
function Hf(e) {
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
function Fl(e) {
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
var dr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + dr, Yr = "__reactProps$" + dr, It = "__reactContainer$" + dr, Ri = "__reactEvents$" + dr, Wf = "__reactListeners$" + dr, Qf = "__reactHandles$" + dr;
function vn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[It] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fl(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = Fl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ua(e) {
  return e = e[Ct] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function xo(e) {
  return e[Yr] || null;
}
var Ai = [], Un = -1;
function pn(e) {
  return { current: e };
}
function se(e) {
  0 > Un || (e.current = Ai[Un], Ai[Un] = null, Un--);
}
function oe(e, t) {
  Un++, Ai[Un] = e.current, e.current = t;
}
var un = {}, Le = pn(un), Be = pn(!1), Cn = un;
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
function Ja() {
  se(Be), se(Le);
}
function ql(e, t, n) {
  if (Le.current !== un) throw Error(M(168));
  oe(Le, t), oe(Be, n);
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(M(108, Mp(e) || "Unknown", a));
  return fe({}, n, r);
}
function Za(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Cn = Le.current, oe(Le, e), oe(Be, Be.current), !0;
}
function Bl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Ru(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, se(Be), se(Le), oe(Le, e)) : se(Be), oe(Be, n);
}
var Mt = null, wo = !1, Yo = !1;
function Au(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Yf(e) {
  wo = !0, Au(e);
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
      Mt = null, wo = !1;
    } catch (a) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), iu(js, fn), a;
    } finally {
      te = t, Yo = !1;
    }
  }
  return null;
}
var Vn = [], Gn = 0, eo = null, to = 0, nt = [], rt = 0, Sn = null, Tt = 1, Lt = "";
function hn(e, t) {
  Vn[Gn++] = to, Vn[Gn++] = eo, eo = e, to = t;
}
function Iu(e, t, n) {
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
function Ps(e) {
  e.return !== null && (hn(e, 1), Iu(e, 1, 0));
}
function Ms(e) {
  for (; e === eo; ) eo = Vn[--Gn], Vn[Gn] = null, to = Vn[--Gn], Vn[Gn] = null;
  for (; e === Sn; ) Sn = nt[--rt], nt[rt] = null, Lt = nt[--rt], nt[rt] = null, Tt = nt[--rt], nt[rt] = null;
}
var Qe = null, We = null, ce = !1, mt = null;
function $u(e, t) {
  var n = at(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ul(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, We = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, We = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Tt, overflow: Lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, We = null, !0) : !1;
    default:
      return !1;
  }
}
function Ii(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $i(e) {
  if (ce) {
    var t = We;
    if (t) {
      var n = t;
      if (!Ul(e, t)) {
        if (Ii(e)) throw Error(M(418));
        t = rn(n.nextSibling);
        var r = Qe;
        t && Ul(e, t) ? $u(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Qe = e);
      }
    } else {
      if (Ii(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, ce = !1, Qe = e;
    }
  }
}
function Vl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qe = e;
}
function Sa(e) {
  if (e !== Qe) return !1;
  if (!ce) return Vl(e), ce = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ti(e.type, e.memoizedProps)), t && (t = We)) {
    if (Ii(e)) throw Du(), Error(M(418));
    for (; t; ) $u(e, t), t = rn(t.nextSibling);
  }
  if (Vl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Qe ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Du() {
  for (var e = We; e; ) e = rn(e.nextSibling);
}
function rr() {
  We = Qe = null, ce = !1;
}
function Ts(e) {
  mt === null ? mt = [e] : mt.push(e);
}
var Kf = Ot.ReactCurrentBatchConfig;
function kr(e, t, n) {
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
function _a(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Gl(e) {
  var t = e._init;
  return t(e._payload);
}
function Ou(e) {
  function t(u, f) {
    if (e) {
      var p = u.deletions;
      p === null ? (u.deletions = [f], u.flags |= 16) : p.push(f);
    }
  }
  function n(u, f) {
    if (!e) return null;
    for (; f !== null; ) t(u, f), f = f.sibling;
    return null;
  }
  function r(u, f) {
    for (u = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? u.set(f.key, f) : u.set(f.index, f), f = f.sibling;
    return u;
  }
  function a(u, f) {
    return u = ln(u, f), u.index = 0, u.sibling = null, u;
  }
  function i(u, f, p) {
    return u.index = p, e ? (p = u.alternate, p !== null ? (p = p.index, p < f ? (u.flags |= 2, f) : p) : (u.flags |= 2, f)) : (u.flags |= 1048576, f);
  }
  function s(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function c(u, f, p, x) {
    return f === null || f.tag !== 6 ? (f = ni(p, u.mode, x), f.return = u, f) : (f = a(f, p), f.return = u, f);
  }
  function l(u, f, p, x) {
    var N = p.type;
    return N === Dn ? g(u, f, p.props.children, x, p.key) : f !== null && (f.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Qt && Gl(N) === f.type) ? (x = a(f, p.props), x.ref = kr(u, f, p), x.return = u, x) : (x = qa(p.type, p.key, p.props, null, u.mode, x), x.ref = kr(u, f, p), x.return = u, x);
  }
  function d(u, f, p, x) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = ri(p, u.mode, x), f.return = u, f) : (f = a(f, p.children || []), f.return = u, f);
  }
  function g(u, f, p, x, N) {
    return f === null || f.tag !== 7 ? (f = jn(p, u.mode, x, N), f.return = u, f) : (f = a(f, p), f.return = u, f);
  }
  function h(u, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ni("" + f, u.mode, p), f.return = u, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ma:
          return p = qa(f.type, f.key, f.props, null, u.mode, p), p.ref = kr(u, null, f), p.return = u, p;
        case $n:
          return f = ri(f, u.mode, p), f.return = u, f;
        case Qt:
          var x = f._init;
          return h(u, x(f._payload), p);
      }
      if (Nr(f) || vr(f)) return f = jn(f, u.mode, p, null), f.return = u, f;
      _a(u, f);
    }
    return null;
  }
  function y(u, f, p, x) {
    var N = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : c(u, f, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ma:
          return p.key === N ? l(u, f, p, x) : null;
        case $n:
          return p.key === N ? d(u, f, p, x) : null;
        case Qt:
          return N = p._init, y(
            u,
            f,
            N(p._payload),
            x
          );
      }
      if (Nr(p) || vr(p)) return N !== null ? null : g(u, f, p, x, null);
      _a(u, p);
    }
    return null;
  }
  function m(u, f, p, x, N) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return u = u.get(p) || null, c(f, u, "" + x, N);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ma:
          return u = u.get(x.key === null ? p : x.key) || null, l(f, u, x, N);
        case $n:
          return u = u.get(x.key === null ? p : x.key) || null, d(f, u, x, N);
        case Qt:
          var E = x._init;
          return m(u, f, p, E(x._payload), N);
      }
      if (Nr(x) || vr(x)) return u = u.get(p) || null, g(f, u, x, N, null);
      _a(f, x);
    }
    return null;
  }
  function j(u, f, p, x) {
    for (var N = null, E = null, S = f, P = f = 0, k = null; S !== null && P < p.length; P++) {
      S.index > P ? (k = S, S = null) : k = S.sibling;
      var v = y(u, S, p[P], x);
      if (v === null) {
        S === null && (S = k);
        break;
      }
      e && S && v.alternate === null && t(u, S), f = i(v, f, P), E === null ? N = v : E.sibling = v, E = v, S = k;
    }
    if (P === p.length) return n(u, S), ce && hn(u, P), N;
    if (S === null) {
      for (; P < p.length; P++) S = h(u, p[P], x), S !== null && (f = i(S, f, P), E === null ? N = S : E.sibling = S, E = S);
      return ce && hn(u, P), N;
    }
    for (S = r(u, S); P < p.length; P++) k = m(S, u, P, p[P], x), k !== null && (e && k.alternate !== null && S.delete(k.key === null ? P : k.key), f = i(k, f, P), E === null ? N = k : E.sibling = k, E = k);
    return e && S.forEach(function(C) {
      return t(u, C);
    }), ce && hn(u, P), N;
  }
  function b(u, f, p, x) {
    var N = vr(p);
    if (typeof N != "function") throw Error(M(150));
    if (p = N.call(p), p == null) throw Error(M(151));
    for (var E = N = null, S = f, P = f = 0, k = null, v = p.next(); S !== null && !v.done; P++, v = p.next()) {
      S.index > P ? (k = S, S = null) : k = S.sibling;
      var C = y(u, S, v.value, x);
      if (C === null) {
        S === null && (S = k);
        break;
      }
      e && S && C.alternate === null && t(u, S), f = i(C, f, P), E === null ? N = C : E.sibling = C, E = C, S = k;
    }
    if (v.done) return n(
      u,
      S
    ), ce && hn(u, P), N;
    if (S === null) {
      for (; !v.done; P++, v = p.next()) v = h(u, v.value, x), v !== null && (f = i(v, f, P), E === null ? N = v : E.sibling = v, E = v);
      return ce && hn(u, P), N;
    }
    for (S = r(u, S); !v.done; P++, v = p.next()) v = m(S, u, P, v.value, x), v !== null && (e && v.alternate !== null && S.delete(v.key === null ? P : v.key), f = i(v, f, P), E === null ? N = v : E.sibling = v, E = v);
    return e && S.forEach(function(I) {
      return t(u, I);
    }), ce && hn(u, P), N;
  }
  function B(u, f, p, x) {
    if (typeof p == "object" && p !== null && p.type === Dn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ma:
          e: {
            for (var N = p.key, E = f; E !== null; ) {
              if (E.key === N) {
                if (N = p.type, N === Dn) {
                  if (E.tag === 7) {
                    n(u, E.sibling), f = a(E, p.props.children), f.return = u, u = f;
                    break e;
                  }
                } else if (E.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Qt && Gl(N) === E.type) {
                  n(u, E.sibling), f = a(E, p.props), f.ref = kr(u, E, p), f.return = u, u = f;
                  break e;
                }
                n(u, E);
                break;
              } else t(u, E);
              E = E.sibling;
            }
            p.type === Dn ? (f = jn(p.props.children, u.mode, x, p.key), f.return = u, u = f) : (x = qa(p.type, p.key, p.props, null, u.mode, x), x.ref = kr(u, f, p), x.return = u, u = x);
          }
          return s(u);
        case $n:
          e: {
            for (E = p.key; f !== null; ) {
              if (f.key === E) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(u, f.sibling), f = a(f, p.children || []), f.return = u, u = f;
                break e;
              } else {
                n(u, f);
                break;
              }
              else t(u, f);
              f = f.sibling;
            }
            f = ri(p, u.mode, x), f.return = u, u = f;
          }
          return s(u);
        case Qt:
          return E = p._init, B(u, f, E(p._payload), x);
      }
      if (Nr(p)) return j(u, f, p, x);
      if (vr(p)) return b(u, f, p, x);
      _a(u, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(u, f.sibling), f = a(f, p), f.return = u, u = f) : (n(u, f), f = ni(p, u.mode, x), f.return = u, u = f), s(u)) : n(u, f);
  }
  return B;
}
var ar = Ou(!0), Fu = Ou(!1), no = pn(null), ro = null, Hn = null, Ls = null;
function Rs() {
  Ls = Hn = ro = null;
}
function As(e) {
  var t = no.current;
  se(no), e._currentValue = t;
}
function Di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Zn(e, t) {
  ro = e, Ls = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function it(e) {
  var t = e._currentValue;
  if (Ls !== e) if (e = { context: e, memoizedValue: t, next: null }, Hn === null) {
    if (ro === null) throw Error(M(308));
    Hn = e, ro.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return t;
}
var yn = null;
function Is(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function qu(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Is(t)) : (n.next = a.next, a.next = n), t.interleaved = n, $t(e, r);
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function $s(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bu(e, t) {
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
  return a = r.interleaved, a === null ? (t.next = t, Is(r)) : (t.next = a.next, a.next = t), r.interleaved = t, $t(e, n);
}
function Aa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ks(e, n);
  }
}
function Hl(e, t) {
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
function ao(e, t, n, r) {
  var a = e.updateQueue;
  Yt = !1;
  var i = a.firstBaseUpdate, s = a.lastBaseUpdate, c = a.shared.pending;
  if (c !== null) {
    a.shared.pending = null;
    var l = c, d = l.next;
    l.next = null, s === null ? i = d : s.next = d, s = l;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== s && (c === null ? g.firstBaseUpdate = d : c.next = d, g.lastBaseUpdate = l));
  }
  if (i !== null) {
    var h = a.baseState;
    s = 0, g = d = l = null, c = i;
    do {
      var y = c.lane, m = c.eventTime;
      if ((r & y) === y) {
        g !== null && (g = g.next = {
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
      } else m = { eventTime: m, lane: y, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, g === null ? (d = g = m, l = h) : g = g.next = m, s |= y;
      if (c = c.next, c === null) {
        if (c = a.shared.pending, c === null) break;
        y = c, c = y.next, y.next = null, a.lastBaseUpdate = y, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (l = h), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    Nn |= s, e.lanes = s, e.memoizedState = h;
  }
}
function Wl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(M(191, a));
      a.call(r);
    }
  }
}
var da = {}, Nt = pn(da), Kr = pn(da), Xr = pn(da);
function xn(e) {
  if (e === da) throw Error(M(174));
  return e;
}
function Ds(e, t) {
  switch (oe(Xr, t), oe(Kr, e), oe(Nt, da), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yi(t, e);
  }
  se(Nt), oe(Nt, t);
}
function or() {
  se(Nt), se(Kr), se(Xr);
}
function Uu(e) {
  xn(Xr.current);
  var t = xn(Nt.current), n = yi(t, e.type);
  t !== n && (oe(Kr, e), oe(Nt, n));
}
function Os(e) {
  Kr.current === e && (se(Nt), se(Kr));
}
var de = pn(0);
function oo(e) {
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
function Fs() {
  for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
  Ko.length = 0;
}
var Ia = Ot.ReactCurrentDispatcher, Xo = Ot.ReactCurrentBatchConfig, _n = 0, pe = null, xe = null, je = null, io = !1, Rr = !1, Jr = 0, Xf = 0;
function Pe() {
  throw Error(M(321));
}
function qs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Bs(e, t, n, r, a, i) {
  if (_n = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ia.current = e === null || e.memoizedState === null ? tm : nm, e = n(r, a), Rr) {
    i = 0;
    do {
      if (Rr = !1, Jr = 0, 25 <= i) throw Error(M(301));
      i += 1, je = xe = null, t.updateQueue = null, Ia.current = rm, e = n(r, a);
    } while (Rr);
  }
  if (Ia.current = so, t = xe !== null && xe.next !== null, _n = 0, je = xe = pe = null, io = !1, t) throw Error(M(300));
  return e;
}
function Us() {
  var e = Jr !== 0;
  return Jr = 0, e;
}
function kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return je === null ? pe.memoizedState = je = e : je = je.next = e, je;
}
function st() {
  if (xe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = je === null ? pe.memoizedState : je.next;
  if (t !== null) je = t, xe = e;
  else {
    if (e === null) throw Error(M(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, je === null ? pe.memoizedState = je = e : je = je.next = e;
  }
  return je;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jo(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(M(311));
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
    var c = s = null, l = null, d = i;
    do {
      var g = d.lane;
      if ((_n & g) === g) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var h = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (c = l = h, s = r) : l = l.next = h, pe.lanes |= g, Nn |= g;
      }
      d = d.next;
    } while (d !== null && d !== i);
    l === null ? s = r : l.next = c, vt(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
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
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== a);
    vt(i, t.memoizedState) || (qe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Vu() {
}
function Gu(e, t) {
  var n = pe, r = st(), a = t(), i = !vt(r.memoizedState, a);
  if (i && (r.memoizedState = a, qe = !0), r = r.queue, Vs(Qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
    if (n.flags |= 2048, ea(9, Wu.bind(null, n, r, a, t), void 0, null), ke === null) throw Error(M(349));
    _n & 30 || Hu(n, t, a);
  }
  return a;
}
function Hu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Wu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Yu(t) && Ku(e);
}
function Qu(e, t, n) {
  return n(function() {
    Yu(t) && Ku(e);
  });
}
function Yu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Ku(e) {
  var t = $t(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Ql(e) {
  var t = kt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = em.bind(null, pe, e), [t.memoizedState, e];
}
function ea(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Xu() {
  return st().memoizedState;
}
function $a(e, t, n, r) {
  var a = kt();
  pe.flags |= e, a.memoizedState = ea(1 | t, n, void 0, r === void 0 ? null : r);
}
function jo(e, t, n, r) {
  var a = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var s = xe.memoizedState;
    if (i = s.destroy, r !== null && qs(r, s.deps)) {
      a.memoizedState = ea(t, n, i, r);
      return;
    }
  }
  pe.flags |= e, a.memoizedState = ea(1 | t, n, i, r);
}
function Yl(e, t) {
  return $a(8390656, 8, e, t);
}
function Vs(e, t) {
  return jo(2048, 8, e, t);
}
function Ju(e, t) {
  return jo(4, 2, e, t);
}
function Zu(e, t) {
  return jo(4, 4, e, t);
}
function ed(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function td(e, t, n) {
  return n = n != null ? n.concat([e]) : null, jo(4, 4, ed.bind(null, t, e), n);
}
function Gs() {
}
function nd(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function rd(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ad(e, t, n) {
  return _n & 21 ? (vt(n, t) || (n = cu(), pe.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function Jf(e, t) {
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
function od() {
  return st().memoizedState;
}
function Zf(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, id(e)) sd(t, n);
  else if (n = qu(e, t, n, r), n !== null) {
    var a = Ie();
    gt(n, e, r, a), ld(n, t, r);
  }
}
function em(e, t, n) {
  var r = sn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (id(e)) sd(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, c = i(s, n);
      if (a.hasEagerState = !0, a.eagerState = c, vt(c, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, Is(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = qu(e, t, a, r), n !== null && (a = Ie(), gt(n, e, r, a), ld(n, t, r));
  }
}
function id(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function sd(e, t) {
  Rr = io = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ld(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ks(e, n);
  }
}
var so = { readContext: it, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, tm = { readContext: it, useCallback: function(e, t) {
  return kt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: it, useEffect: Yl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $a(
    4194308,
    4,
    ed.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return $a(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $a(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = kt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = kt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Zf.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = kt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ql, useDebugValue: Gs, useDeferredValue: function(e) {
  return kt().memoizedState = e;
}, useTransition: function() {
  var e = Ql(!1), t = e[0];
  return e = Jf.bind(null, e[1]), kt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, a = kt();
  if (ce) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), ke === null) throw Error(M(349));
    _n & 30 || Hu(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, Yl(Qu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ea(9, Wu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = kt(), t = ke.identifierPrefix;
  if (ce) {
    var n = Lt, r = Tt;
    n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Xf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, nm = {
  readContext: it,
  useCallback: nd,
  useContext: it,
  useEffect: Vs,
  useImperativeHandle: td,
  useInsertionEffect: Ju,
  useLayoutEffect: Zu,
  useMemo: rd,
  useReducer: Jo,
  useRef: Xu,
  useState: function() {
    return Jo(Zr);
  },
  useDebugValue: Gs,
  useDeferredValue: function(e) {
    var t = st();
    return ad(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = Jo(Zr)[0], t = st().memoizedState;
    return [e, t];
  },
  useMutableSource: Vu,
  useSyncExternalStore: Gu,
  useId: od,
  unstable_isNewReconciler: !1
}, rm = { readContext: it, useCallback: nd, useContext: it, useEffect: Vs, useImperativeHandle: td, useInsertionEffect: Ju, useLayoutEffect: Zu, useMemo: rd, useReducer: Zo, useRef: Xu, useState: function() {
  return Zo(Zr);
}, useDebugValue: Gs, useDeferredValue: function(e) {
  var t = st();
  return xe === null ? t.memoizedState = e : ad(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = Zo(Zr)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: Vu, useSyncExternalStore: Gu, useId: od, unstable_isNewReconciler: !1 };
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
var ko = { isMounted: function(e) {
  return (e = e._reactInternals) ? bn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ie(), a = sn(e), i = Rt(r, a);
  i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (gt(t, e, a, r), Aa(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ie(), a = sn(e), i = Rt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (gt(t, e, a, r), Aa(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ie(), r = sn(e), a = Rt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = an(e, a, r), t !== null && (gt(t, e, r, n), Aa(t, e, r));
} };
function Kl(e, t, n, r, a, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(a, i) : !0;
}
function cd(e, t, n) {
  var r = !1, a = un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = it(i) : (a = Ue(t) ? Cn : Le.current, r = t.contextTypes, i = (r = r != null) ? nr(e, a) : un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ko, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Xl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ko.enqueueReplaceState(t, t.state, null);
}
function Fi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, $s(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = it(i) : (i = Ue(t) ? Cn : Le.current, a.context = nr(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Oi(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ko.enqueueReplaceState(a, a.state, null), ao(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t) {
  try {
    var n = "", r = t;
    do
      n += Pp(r), r = r.return;
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
var am = typeof WeakMap == "function" ? WeakMap : Map;
function ud(e, t, n) {
  n = Rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    co || (co = !0, Xi = r), qi(e, t);
  }, n;
}
function dd(e, t, n) {
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
function Jl(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new am();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = ym.bind(null, e, t, n), t.then(e, e));
}
function Zl(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ec(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rt(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
}
var om = Ot.ReactCurrentOwner, qe = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Fu(t, null, n, r) : ar(t, e.child, n, r);
}
function tc(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Zn(t, a), r = Bs(e, t, n, r, i, a), n = Us(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Dt(e, t, a)) : (ce && n && Ps(t), t.flags |= 1, Ae(e, t, r, a), t.child);
}
function nc(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Zs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, pd(e, t, i, r, a)) : (e = qa(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hr, n(s, r) && e.ref === t.ref) return Dt(e, t, a);
  }
  return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function pd(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Hr(i, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, Dt(e, t, a);
  }
  return Bi(e, t, n, r, a);
}
function fd(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, oe(Qn, He), He |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, oe(Qn, He), He |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, oe(Qn, He), He |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, oe(Qn, He), He |= r;
  return Ae(e, t, a, n), t.child;
}
function md(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bi(e, t, n, r, a) {
  var i = Ue(n) ? Cn : Le.current;
  return i = nr(t, i), Zn(t, a), n = Bs(e, t, n, r, i, a), r = Us(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Dt(e, t, a)) : (ce && r && Ps(t), t.flags |= 1, Ae(e, t, n, a), t.child);
}
function rc(e, t, n, r, a) {
  if (Ue(n)) {
    var i = !0;
    Za(t);
  } else i = !1;
  if (Zn(t, a), t.stateNode === null) Da(e, t), cd(t, n, r), Fi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, c = t.memoizedProps;
    s.props = c;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = it(d) : (d = Ue(n) ? Cn : Le.current, d = nr(t, d));
    var g = n.getDerivedStateFromProps, h = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== r || l !== d) && Xl(t, s, r, d), Yt = !1;
    var y = t.memoizedState;
    s.state = y, ao(t, r, s, a), l = t.memoizedState, c !== r || y !== l || Be.current || Yt ? (typeof g == "function" && (Oi(t, n, g, r), l = t.memoizedState), (c = Yt || Kl(t, n, c, r, y, l, d)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = c) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Bu(e, t), c = t.memoizedProps, d = t.type === t.elementType ? c : pt(t.type, c), s.props = d, h = t.pendingProps, y = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = it(l) : (l = Ue(n) ? Cn : Le.current, l = nr(t, l));
    var m = n.getDerivedStateFromProps;
    (g = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== h || y !== l) && Xl(t, s, r, l), Yt = !1, y = t.memoizedState, s.state = y, ao(t, r, s, a);
    var j = t.memoizedState;
    c !== h || y !== j || Be.current || Yt ? (typeof m == "function" && (Oi(t, n, m, r), j = t.memoizedState), (d = Yt || Kl(t, n, d, r, y, j, l) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, j, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, j, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), s.props = r, s.state = j, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ui(e, t, n, r, i, a);
}
function Ui(e, t, n, r, a, i) {
  md(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Bl(t, n, !1), Dt(e, t, i);
  r = t.stateNode, om.current = t;
  var c = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, i), t.child = ar(t, null, c, i)) : Ae(e, t, c, i), t.memoizedState = r.state, a && Bl(t, n, !0), t.child;
}
function hd(e) {
  var t = e.stateNode;
  t.pendingContext ? ql(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ql(e, t.context, !1), Ds(e, t.containerInfo);
}
function ac(e, t, n, r, a) {
  return rr(), Ts(a), t.flags |= 256, Ae(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gd(e, t, n) {
  var r = t.pendingProps, a = de.current, i = !1, s = (t.flags & 128) !== 0, c;
  if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), oe(de, a & 1), e === null)
    return $i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = _o(s, r, 0, null), e = jn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gi(n), t.memoizedState = Vi, e) : Hs(t, s));
  if (a = e.memoizedState, a !== null && (c = a.dehydrated, c !== null)) return im(e, t, s, r, c, a, n);
  if (i) {
    i = r.fallback, s = t.mode, a = e.child, c = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ln(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), c !== null ? i = ln(c, i) : (i = jn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Gi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Vi, r;
  }
  return i = e.child, e = i.sibling, r = ln(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hs(e, t) {
  return t = _o({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Na(e, t, n, r) {
  return r !== null && Ts(r), ar(t, e.child, null, n), e = Hs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function im(e, t, n, r, a, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ei(Error(M(422))), Na(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = _o({ mode: "visible", children: r.children }, a, 0, null), i = jn(i, a, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Gi(s), t.memoizedState = Vi, i);
  if (!(t.mode & 1)) return Na(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
    return r = c, i = Error(M(419)), r = ei(i, r, void 0), Na(e, t, s, r);
  }
  if (c = (s & e.childLanes) !== 0, qe || c) {
    if (r = ke, r !== null) {
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
    return Js(), r = ei(Error(M(421))), Na(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, We = rn(a.nextSibling), Qe = t, ce = !0, mt = null, e !== null && (nt[rt++] = Tt, nt[rt++] = Lt, nt[rt++] = Sn, Tt = e.id, Lt = e.overflow, Sn = t), t = Hs(t, r.children), t.flags |= 4096, t);
}
function oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ti(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function vd(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Ae(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
      else if (e.tag === 19) oc(e, n, t);
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
  if (oe(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && oo(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ti(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && oo(e) === null) {
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
function Da(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function sm(e, t, n) {
  switch (t.tag) {
    case 3:
      hd(t), rr();
      break;
    case 5:
      Uu(t);
      break;
    case 1:
      Ue(t.type) && Za(t);
      break;
    case 4:
      Ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      oe(no, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (oe(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? gd(e, t, n) : (oe(de, de.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      oe(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return vd(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), oe(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fd(e, t, n);
  }
  return Dt(e, t, n);
}
var yd, Hi, xd, wd;
yd = function(e, t) {
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
xd = function(e, t, n, r) {
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
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xa);
    }
    xi(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var c = a[d];
      for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Or.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var l = r[d];
      if (c = a != null ? a[d] : void 0, r.hasOwnProperty(d) && l !== c && (l != null || c != null)) if (d === "style") if (c) {
        for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (i = i || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Or.hasOwnProperty(d) ? (l != null && d === "onScroll" && ie("scroll", e), i || c === l || (i = [])) : (i = i || []).push(d, l));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
wd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
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
function lm(e, t, n) {
  var r = t.pendingProps;
  switch (Ms(t), t.tag) {
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
      return Ue(t.type) && Ja(), Me(t), null;
    case 3:
      return r = t.stateNode, or(), se(Be), se(Le), Fs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (es(mt), mt = null))), Hi(e, t), Me(t), null;
    case 5:
      Os(t);
      var a = xn(Xr.current);
      if (n = t.type, e !== null && t.stateNode != null) xd(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Me(t), null;
        }
        if (e = xn(Nt.current), Sa(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ct] = t, r[Yr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < zr.length; a++) ie(zr[a], r);
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
              ml(r, i), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ie("invalid", r);
              break;
            case "textarea":
              gl(r, i), ie("invalid", r);
          }
          xi(n, i), a = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var c = i[s];
            s === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && Ca(r.textContent, c, e), a = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && Ca(
              r.textContent,
              c,
              e
            ), a = ["children", "" + c]) : Or.hasOwnProperty(s) && c != null && s === "onScroll" && ie("scroll", r);
          }
          switch (n) {
            case "input":
              ha(r), hl(r, i, !0);
              break;
            case "textarea":
              ha(r), vl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Xa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ct] = t, e[Yr] = r, yd(e, t, !1, !1), t.stateNode = e;
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
                for (a = 0; a < zr.length; a++) ie(zr[a], e);
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
                ml(e, r), a = mi(e, r), ie("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = fe({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                gl(e, r), a = vi(e, r), ie("invalid", e);
                break;
              default:
                a = r;
            }
            xi(n, a), c = a;
            for (i in c) if (c.hasOwnProperty(i)) {
              var l = c[i];
              i === "style" ? Xc(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Yc(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Fr(e, l) : typeof l == "number" && Fr(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Or.hasOwnProperty(i) ? l != null && i === "onScroll" && ie("scroll", e) : l != null && gs(e, i, l, s));
            }
            switch (n) {
              case "input":
                ha(e), hl(e, r, !1);
                break;
              case "textarea":
                ha(e), vl(e);
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
                typeof a.onClick == "function" && (e.onclick = Xa);
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
      if (e && t.stateNode != null) wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = xn(Xr.current), xn(Nt.current), Sa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (i = r.nodeValue !== n) && (e = Qe, e !== null)) switch (e.tag) {
            case 3:
              Ca(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ca(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return Me(t), null;
    case 13:
      if (se(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ce && We !== null && t.mode & 1 && !(t.flags & 128)) Du(), rr(), t.flags |= 98560, i = !1;
        else if (i = Sa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[Ct] = t;
          } else rr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Me(t), i = !1;
        } else mt !== null && (es(mt), mt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? we === 0 && (we = 3) : Js())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
    case 4:
      return or(), Hi(e, t), e === null && Wr(t.stateNode.containerInfo), Me(t), null;
    case 10:
      return As(t.type._context), Me(t), null;
    case 17:
      return Ue(t.type) && Ja(), Me(t), null;
    case 19:
      if (se(de), i = t.memoizedState, i === null) return Me(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Cr(i, !1);
      else {
        if (we !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = oo(e), s !== null) {
            for (t.flags |= 128, Cr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return oe(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ge() > sr && (t.flags |= 128, r = !0, Cr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = oo(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ce) return Me(t), null;
        } else 2 * ge() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Cr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = de.current, oe(de, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
    case 22:
    case 23:
      return Xs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function cm(e, t) {
  switch (Ms(t), t.tag) {
    case 1:
      return Ue(t.type) && Ja(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return or(), se(Be), se(Le), Fs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Os(t), null;
    case 13:
      if (se(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        rr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(de), null;
    case 4:
      return or(), null;
    case 10:
      return As(t.type._context), null;
    case 22:
    case 23:
      return Xs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ea = !1, Te = !1, um = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
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
var ic = !1;
function dm(e, t) {
  if (Pi = Qa, e = _u(), bs(e)) {
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
        var s = 0, c = -1, l = -1, d = 0, g = 0, h = e, y = null;
        t: for (; ; ) {
          for (var m; h !== n || a !== 0 && h.nodeType !== 3 || (c = s + a), h !== i || r !== 0 && h.nodeType !== 3 || (l = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (m = h.firstChild) !== null; )
            y = h, h = m;
          for (; ; ) {
            if (h === e) break t;
            if (y === n && ++d === a && (c = s), y === i && ++g === r && (l = s), (m = h.nextSibling) !== null) break;
            h = y, y = h.parentNode;
          }
          h = m;
        }
        n = c === -1 || l === -1 ? null : { start: c, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mi = { focusedElem: e, selectionRange: n }, Qa = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var j = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (j !== null) {
            var b = j.memoizedProps, B = j.memoizedState, u = t.stateNode, f = u.getSnapshotBeforeUpdate(t.elementType === t.type ? b : pt(t.type, b), B);
            u.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(M(163));
      }
    } catch (x) {
      he(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return j = ic, ic = !1, j;
}
function Ar(e, t, n) {
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
function Co(e, t) {
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
function jd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Yr], delete t[Ri], delete t[Wf], delete t[Qf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || kd(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), e = e.sibling;
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
var _e = null, ft = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) Cd(e, t, n), n = n.sibling;
}
function Cd(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(ho, n);
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
      _e !== null && (ft ? (e = _e, n = n.stateNode, e.nodeType === 8 ? Qo(e.parentNode, n) : e.nodeType === 1 && Qo(e, n), Vr(e)) : Qo(_e, n.stateNode));
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
function lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new um()), t.forEach(function(r) {
      var a = wm.bind(null, e, r);
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
      if (_e === null) throw Error(M(160));
      Cd(i, s, a), _e = null, ft = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      he(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Sd(t, e), t = t.sibling;
}
function Sd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (dt(t, e), jt(e), r & 4) {
        try {
          Ar(3, e, e.return), Co(3, e);
        } catch (b) {
          he(e, e.return, b);
        }
        try {
          Ar(5, e, e.return);
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
          Fr(a, "");
        } catch (b) {
          he(e, e.return, b);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, c = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          c === "input" && i.type === "radio" && i.name != null && Hc(a, i), wi(c, s);
          var d = wi(c, i);
          for (s = 0; s < l.length; s += 2) {
            var g = l[s], h = l[s + 1];
            g === "style" ? Xc(a, h) : g === "dangerouslySetInnerHTML" ? Yc(a, h) : g === "children" ? Fr(a, h) : gs(a, g, h, d);
          }
          switch (c) {
            case "input":
              hi(a, i);
              break;
            case "textarea":
              Wc(a, i);
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
          a[Yr] = i;
        } catch (b) {
          he(e, e.return, b);
        }
      }
      break;
    case 6:
      if (dt(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
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
        Vr(t.containerInfo);
      } catch (b) {
        he(e, e.return, b);
      }
      break;
    case 4:
      dt(t, e), jt(e);
      break;
    case 13:
      dt(t, e), jt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Ys = ge())), r & 4 && lc(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (d = Te) || g, dt(t, e), Te = d) : dt(t, e), jt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1) for ($ = e, g = e.child; g !== null; ) {
          for (h = $ = g; $ !== null; ) {
            switch (y = $, m = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ar(4, y, y.return);
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
                  uc(h);
                  continue;
                }
            }
            m !== null ? (m.return = y, $ = m) : uc(h);
          }
          g = g.sibling;
        }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                a = h.stateNode, d ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = h.stateNode, l = h.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Kc("display", s));
              } catch (b) {
                he(e, e.return, b);
              }
            }
          } else if (h.tag === 6) {
            if (g === null) try {
              h.stateNode.nodeValue = d ? "" : h.memoizedProps;
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
            g === h && (g = null), h = h.return;
          }
          g === h && (g = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      dt(t, e), jt(e), r & 4 && lc(e);
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
          if (kd(n)) {
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
          r.flags & 32 && (Fr(a, ""), r.flags &= -33);
          var i = sc(e);
          Ki(e, i, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, c = sc(e);
          Yi(e, c, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, n) {
  $ = e, _d(e);
}
function _d(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var a = $, i = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || Ea;
      if (!s) {
        var c = a.alternate, l = c !== null && c.memoizedState !== null || Te;
        c = Ea;
        var d = Te;
        if (Ea = s, (Te = l) && !d) for ($ = a; $ !== null; ) s = $, l = s.child, s.tag === 22 && s.memoizedState !== null ? dc(a) : l !== null ? (l.return = s, $ = l) : dc(a);
        for (; i !== null; ) $ = i, _d(i), i = i.sibling;
        $ = a, Ea = c, Te = d;
      }
      cc(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, $ = i) : cc(e);
  }
}
function cc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Te || Co(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Te) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Wl(t, i, r);
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
              Wl(t, s, n);
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
                var g = d.memoizedState;
                if (g !== null) {
                  var h = g.dehydrated;
                  h !== null && Vr(h);
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
        Te || t.flags & 512 && Qi(t);
      } catch (y) {
        he(t, t.return, y);
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
function uc(e) {
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
function dc(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Co(4, t);
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
var fm = Math.ceil, lo = Ot.ReactCurrentDispatcher, Ws = Ot.ReactCurrentOwner, ot = Ot.ReactCurrentBatchConfig, J = 0, ke = null, ve = null, Ne = 0, He = 0, Qn = pn(0), we = 0, ta = null, Nn = 0, So = 0, Qs = 0, Ir = null, Fe = null, Ys = 0, sr = 1 / 0, Pt = null, co = !1, Xi = null, on = null, za = !1, Zt = null, uo = 0, $r = 0, Ji = null, Oa = -1, Fa = 0;
function Ie() {
  return J & 6 ? ge() : Oa !== -1 ? Oa : Oa = ge();
}
function sn(e) {
  return e.mode & 1 ? J & 2 && Ne !== 0 ? Ne & -Ne : Kf.transition !== null ? (Fa === 0 && (Fa = cu()), Fa) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gu(e.type)), e) : 1;
}
function gt(e, t, n, r) {
  if (50 < $r) throw $r = 0, Ji = null, Error(M(185));
  la(e, n, r), (!(J & 2) || e !== ke) && (e === ke && (!(J & 2) && (So |= n), we === 4 && Xt(e, Ne)), Ve(e, r), n === 1 && J === 0 && !(t.mode & 1) && (sr = ge() + 500, wo && fn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Yp(e, t);
  var r = Wa(e, e === ke ? Ne : 0);
  if (r === 0) n !== null && wl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && wl(n), t === 1) e.tag === 0 ? Yf(pc.bind(null, e)) : Au(pc.bind(null, e)), Gf(function() {
      !(J & 6) && fn();
    }), n = null;
    else {
      switch (uu(r)) {
        case 1:
          n = js;
          break;
        case 4:
          n = su;
          break;
        case 16:
          n = Ha;
          break;
        case 536870912:
          n = lu;
          break;
        default:
          n = Ha;
      }
      n = Ld(n, Nd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nd(e, t) {
  if (Oa = -1, Fa = 0, J & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = Wa(e, e === ke ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = po(e, r);
  else {
    t = r;
    var a = J;
    J |= 2;
    var i = zd();
    (ke !== e || Ne !== t) && (Pt = null, sr = ge() + 500, wn(e, t));
    do
      try {
        gm();
        break;
      } catch (c) {
        Ed(e, c);
      }
    while (!0);
    Rs(), lo.current = i, J = a, ve !== null ? t = 0 : (ke = null, Ne = 0, t = we);
  }
  if (t !== 0) {
    if (t === 2 && (a = _i(e), a !== 0 && (r = a, t = Zi(e, a))), t === 1) throw n = ta, wn(e, 0), Xt(e, r), Ve(e, ge()), n;
    if (t === 6) Xt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !mm(a) && (t = po(e, r), t === 2 && (i = _i(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = ta, wn(e, 0), Xt(e, r), Ve(e, ge()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          gn(e, Fe, Pt);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = Ys + 500 - ge(), 10 < t)) {
            if (Wa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Ie(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Li(gn.bind(null, e, Fe, Pt), t);
            break;
          }
          gn(e, Fe, Pt);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ht(r);
            i = 1 << s, s = t[s], s > a && (a = s), r &= ~i;
          }
          if (r = a, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Li(gn.bind(null, e, Fe, Pt), r);
            break;
          }
          gn(e, Fe, Pt);
          break;
        case 5:
          gn(e, Fe, Pt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ve(e, ge()), e.callbackNode === n ? Nd.bind(null, e) : null;
}
function Zi(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = po(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && es(t)), e;
}
function es(e) {
  Fe === null ? Fe = e : Fe.push.apply(Fe, e);
}
function mm(e) {
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
  for (t &= ~Qs, t &= ~So, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ht(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pc(e) {
  if (J & 6) throw Error(M(327));
  er();
  var t = Wa(e, 0);
  if (!(t & 1)) return Ve(e, ge()), null;
  var n = po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1) throw n = ta, wn(e, 0), Xt(e, t), Ve(e, ge()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, Fe, Pt), Ve(e, ge()), null;
}
function Ks(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (sr = ge() + 500, wo && fn());
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
function Xs() {
  He = Qn.current, se(Qn);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Vf(n)), ve !== null) for (n = ve.return; n !== null; ) {
    var r = n;
    switch (Ms(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ja();
        break;
      case 3:
        or(), se(Be), se(Le), Fs();
        break;
      case 5:
        Os(r);
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
        As(r.type._context);
        break;
      case 22:
      case 23:
        Xs();
    }
    n = n.return;
  }
  if (ke = e, ve = e = ln(e.current, null), Ne = He = t, we = 0, ta = null, Qs = So = Nn = 0, Fe = Ir = null, yn !== null) {
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
function Ed(e, t) {
  do {
    var n = ve;
    try {
      if (Rs(), Ia.current = so, io) {
        for (var r = pe.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        io = !1;
      }
      if (_n = 0, je = xe = pe = null, Rr = !1, Jr = 0, Ws.current = null, n === null || n.return === null) {
        we = 1, ta = t, ve = null;
        break;
      }
      e: {
        var i = e, s = n.return, c = n, l = t;
        if (t = Ne, c.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, g = c, h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var y = g.alternate;
            y ? (g.updateQueue = y.updateQueue, g.memoizedState = y.memoizedState, g.lanes = y.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var m = Zl(s);
          if (m !== null) {
            m.flags &= -257, ec(m, s, c, i, t), m.mode & 1 && Jl(i, d, t), t = m, l = d;
            var j = t.updateQueue;
            if (j === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(l), t.updateQueue = b;
            } else j.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Jl(i, d, t), Js();
              break e;
            }
            l = Error(M(426));
          }
        } else if (ce && c.mode & 1) {
          var B = Zl(s);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256), ec(B, s, c, i, t), Ts(ir(l, c));
            break e;
          }
        }
        i = l = ir(l, c), we !== 4 && (we = 2), Ir === null ? Ir = [i] : Ir.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var u = ud(i, l, t);
              Hl(i, u);
              break e;
            case 1:
              c = l;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (on === null || !on.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = dd(i, c, t);
                Hl(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Pd(n);
    } catch (N) {
      t = N, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zd() {
  var e = lo.current;
  return lo.current = so, e === null ? so : e;
}
function Js() {
  (we === 0 || we === 3 || we === 2) && (we = 4), ke === null || !(Nn & 268435455) && !(So & 268435455) || Xt(ke, Ne);
}
function po(e, t) {
  var n = J;
  J |= 2;
  var r = zd();
  (ke !== e || Ne !== t) && (Pt = null, wn(e, t));
  do
    try {
      hm();
      break;
    } catch (a) {
      Ed(e, a);
    }
  while (!0);
  if (Rs(), J = n, lo.current = r, ve !== null) throw Error(M(261));
  return ke = null, Ne = 0, we;
}
function hm() {
  for (; ve !== null; ) bd(ve);
}
function gm() {
  for (; ve !== null && !Fp(); ) bd(ve);
}
function bd(e) {
  var t = Td(e.alternate, e, He);
  e.memoizedProps = e.pendingProps, t === null ? Pd(e) : ve = t, Ws.current = null;
}
function Pd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = cm(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        we = 6, ve = null;
        return;
      }
    } else if (n = lm(n, t, He), n !== null) {
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
    ot.transition = null, te = 1, vm(e, t, n, r);
  } finally {
    ot.transition = a, te = r;
  }
  return null;
}
function vm(e, t, n, r) {
  do
    er();
  while (Zt !== null);
  if (J & 6) throw Error(M(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Kp(e, i), e === ke && (ve = ke = null, Ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || za || (za = !0, Ld(Ha, function() {
    return er(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ot.transition, ot.transition = null;
    var s = te;
    te = 1;
    var c = J;
    J |= 4, Ws.current = null, dm(e, n), Sd(n, e), $f(Mi), Qa = !!Pi, Mi = Pi = null, e.current = n, pm(n), qp(), J = c, te = s, ot.transition = i;
  } else e.current = n;
  if (za && (za = !1, Zt = e, uo = a), i = e.pendingLanes, i === 0 && (on = null), Vp(n.stateNode), Ve(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (co) throw co = !1, e = Xi, Xi = null, e;
  return uo & 1 && e.tag !== 0 && er(), i = e.pendingLanes, i & 1 ? e === Ji ? $r++ : ($r = 0, Ji = e) : $r = 0, fn(), null;
}
function er() {
  if (Zt !== null) {
    var e = uu(uo), t = ot.transition, n = te;
    try {
      if (ot.transition = null, te = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, uo = 0, J & 6) throw Error(M(331));
        var a = J;
        for (J |= 4, $ = e.current; $ !== null; ) {
          var i = $, s = i.child;
          if ($.flags & 16) {
            var c = i.deletions;
            if (c !== null) {
              for (var l = 0; l < c.length; l++) {
                var d = c[l];
                for ($ = d; $ !== null; ) {
                  var g = $;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) h.return = g, $ = h;
                  else for (; $ !== null; ) {
                    g = $;
                    var y = g.sibling, m = g.return;
                    if (jd(g), g === d) {
                      $ = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = m, $ = y;
                      break;
                    }
                    $ = m;
                  }
                }
              }
              var j = i.alternate;
              if (j !== null) {
                var b = j.child;
                if (b !== null) {
                  j.child = null;
                  do {
                    var B = b.sibling;
                    b.sibling = null, b = B;
                  } while (b !== null);
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
            var u = i.sibling;
            if (u !== null) {
              u.return = i.return, $ = u;
              break e;
            }
            $ = i.return;
          }
        }
        var f = e.current;
        for ($ = f; $ !== null; ) {
          s = $;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, $ = p;
          else e: for (s = f; $ !== null; ) {
            if (c = $, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Co(9, c);
              }
            } catch (N) {
              he(c, c.return, N);
            }
            if (c === s) {
              $ = null;
              break e;
            }
            var x = c.sibling;
            if (x !== null) {
              x.return = c.return, $ = x;
              break e;
            }
            $ = c.return;
          }
        }
        if (J = a, fn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(ho, e);
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
function fc(e, t, n) {
  t = ir(n, t), t = ud(e, t, 1), e = an(e, t, 1), t = Ie(), e !== null && (la(e, 1, t), Ve(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) fc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      fc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = ir(n, e), e = dd(t, e, 1), t = an(t, e, 1), e = Ie(), t !== null && (la(t, 1, e), Ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ym(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, ke === e && (Ne & n) === n && (we === 4 || we === 3 && (Ne & 130023424) === Ne && 500 > ge() - Ys ? wn(e, 0) : Qs |= n), Ve(e, t);
}
function Md(e, t) {
  t === 0 && (e.mode & 1 ? (t = ya, ya <<= 1, !(ya & 130023424) && (ya = 4194304)) : t = 1);
  var n = Ie();
  e = $t(e, t), e !== null && (la(e, t, n), Ve(e, n));
}
function xm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Md(e, n);
}
function wm(e, t) {
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
  r !== null && r.delete(t), Md(e, n);
}
var Td;
Td = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, sm(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, ce && t.flags & 1048576 && Iu(t, to, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Da(e, t), e = t.pendingProps;
      var a = nr(t, Le.current);
      Zn(t, n), a = Bs(null, t, r, e, a, n);
      var i = Us();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (i = !0, Za(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, $s(t), a.updater = ko, t.stateNode = a, a._reactInternals = t, Fi(t, r, e, n), t = Ui(null, t, r, !0, i, n)) : (t.tag = 0, ce && i && Ps(t), Ae(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Da(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = km(r), e = pt(r, e), a) {
          case 0:
            t = Bi(null, t, r, e, n);
            break e;
          case 1:
            t = rc(null, t, r, e, n);
            break e;
          case 11:
            t = tc(null, t, r, e, n);
            break e;
          case 14:
            t = nc(null, t, r, pt(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), Bi(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), rc(e, t, r, a, n);
    case 3:
      e: {
        if (hd(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, Bu(e, t), ao(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = ir(Error(M(423)), t), t = ac(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = ir(Error(M(424)), t), t = ac(e, t, r, n, a);
          break e;
        } else for (We = rn(t.stateNode.containerInfo.firstChild), Qe = t, ce = !0, mt = null, n = Fu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rr(), r === a) {
            t = Dt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Uu(t), e === null && $i(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = a.children, Ti(r, a) ? s = null : i !== null && Ti(r, i) && (t.flags |= 32), md(e, t), Ae(e, t, s, n), t.child;
    case 6:
      return e === null && $i(t), null;
    case 13:
      return gd(e, t, n);
    case 4:
      return Ds(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : Ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), tc(e, t, r, a, n);
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, s = a.value, oe(no, r._currentValue), r._currentValue = s, i !== null) if (vt(i.value, s)) {
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
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var g = d.pending;
                    g === null ? l.next = l : (l.next = g.next, g.next = l), d.pending = l;
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
            if (s = i.return, s === null) throw Error(M(341));
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
        Ae(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Zn(t, n), a = it(a), r = r(a), t.flags |= 1, Ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = pt(r, t.pendingProps), a = pt(r.type, a), nc(e, t, r, a, n);
    case 15:
      return pd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : pt(r, a), Da(e, t), t.tag = 1, Ue(r) ? (e = !0, Za(t)) : e = !1, Zn(t, n), cd(t, r, a), Fi(t, r, a, n), Ui(null, t, r, !0, e, n);
    case 19:
      return vd(e, t, n);
    case 22:
      return fd(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Ld(e, t) {
  return iu(e, t);
}
function jm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function at(e, t, n, r) {
  return new jm(e, t, n, r);
}
function Zs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function km(e) {
  if (typeof e == "function") return Zs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ys) return 11;
    if (e === xs) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qa(e, t, n, r, a, i) {
  var s = 2;
  if (r = e, typeof e == "function") Zs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Dn:
      return jn(n.children, a, i, t);
    case vs:
      s = 8, a |= 8;
      break;
    case ui:
      return e = at(12, n, t, a | 2), e.elementType = ui, e.lanes = i, e;
    case di:
      return e = at(13, n, t, a), e.elementType = di, e.lanes = i, e;
    case pi:
      return e = at(19, n, t, a), e.elementType = pi, e.lanes = i, e;
    case Uc:
      return _o(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case qc:
          s = 10;
          break e;
        case Bc:
          s = 9;
          break e;
        case ys:
          s = 11;
          break e;
        case xs:
          s = 14;
          break e;
        case Qt:
          s = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = at(s, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function jn(e, t, n, r) {
  return e = at(7, e, r, t), e.lanes = n, e;
}
function _o(e, t, n, r) {
  return e = at(22, e, r, t), e.elementType = Uc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ni(e, t, n) {
  return e = at(6, e, null, t), e.lanes = n, e;
}
function ri(e, t, n) {
  return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Cm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $o(0), this.expirationTimes = $o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $o(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function el(e, t, n, r, a, i, s, c, l) {
  return e = new Cm(e, t, n, c, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = at(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $s(i), e;
}
function Sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Rd(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (bn(e) !== e || e.tag !== 1) throw Error(M(170));
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
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Ru(e, n, t);
  }
  return t;
}
function Ad(e, t, n, r, a, i, s, c, l) {
  return e = el(n, r, !0, e, a, i, s, c, l), e.context = Rd(null), n = e.current, r = Ie(), a = sn(n), i = Rt(r, a), i.callback = t ?? null, an(n, i, a), e.current.lanes = a, la(e, a, r), Ve(e, r), e;
}
function No(e, t, n, r) {
  var a = t.current, i = Ie(), s = sn(a);
  return n = Rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(a, t, s), e !== null && (gt(e, a, s, i), Aa(e, a, s)), s;
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
function mc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tl(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function _m() {
  return null;
}
var Id = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function nl(e) {
  this._internalRoot = e;
}
Eo.prototype.render = nl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  No(e, t, null, null);
};
Eo.prototype.unmount = nl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function() {
      No(null, e, null, null);
    }), t[It] = null;
  }
};
function Eo(e) {
  this._internalRoot = e;
}
Eo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && hu(e);
  }
};
function rl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hc() {
}
function Nm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = fo(s);
        i.call(d);
      };
    }
    var s = Ad(t, r, e, 0, null, !1, !1, "", hc);
    return e._reactRootContainer = s, e[It] = s.current, Wr(e.nodeType === 8 ? e.parentNode : e), En(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var d = fo(l);
      c.call(d);
    };
  }
  var l = el(e, 0, !1, null, null, !1, !1, "", hc);
  return e._reactRootContainer = l, e[It] = l.current, Wr(e.nodeType === 8 ? e.parentNode : e), En(function() {
    No(t, l, n, r);
  }), l;
}
function bo(e, t, n, r, a) {
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
    No(t, s, e, a);
  } else s = Nm(n, t, e, a, r);
  return fo(s);
}
du = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 && (ks(t, n | 1), Ve(t, ge()), !(J & 6) && (sr = ge() + 500, fn()));
      }
      break;
    case 13:
      En(function() {
        var r = $t(e, 1);
        if (r !== null) {
          var a = Ie();
          gt(r, e, 1, a);
        }
      }), tl(e, 1);
  }
};
Cs = function(e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ie();
      gt(t, e, 134217728, n);
    }
    tl(e, 134217728);
  }
};
pu = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = $t(e, t);
    if (n !== null) {
      var r = Ie();
      gt(n, e, t, r);
    }
    tl(e, t);
  }
};
fu = function() {
  return te;
};
mu = function(e, t) {
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
            var a = xo(r);
            if (!a) throw Error(M(90));
            Gc(r), hi(r, a);
          }
        }
      }
      break;
    case "textarea":
      Wc(e, n);
      break;
    case "select":
      t = n.value, t != null && Yn(e, !!n.multiple, t, !1);
  }
};
eu = Ks;
tu = En;
var Em = { usingClientEntryPoint: !1, Events: [ua, Bn, xo, Jc, Zc, Ks] }, Sr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, zm = { bundleType: Sr.bundleType, version: Sr.version, rendererPackageName: Sr.rendererPackageName, rendererConfig: Sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = au(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sr.findFiberByHostInstance || _m, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ba.isDisabled && ba.supportsFiber) try {
    ho = ba.inject(zm), _t = ba;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rl(t)) throw Error(M(200));
  return Sm(e, t, null, n);
};
Ke.createRoot = function(e, t) {
  if (!rl(e)) throw Error(M(299));
  var n = !1, r = "", a = Id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = el(e, 1, !1, null, null, n, !1, r, a), e[It] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new nl(t);
};
Ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = au(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return En(e);
};
Ke.hydrate = function(e, t, n) {
  if (!zo(t)) throw Error(M(200));
  return bo(null, e, t, !0, n);
};
Ke.hydrateRoot = function(e, t, n) {
  if (!rl(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", s = Id;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Ad(t, null, e, 1, n ?? null, a, !1, i, s), e[It] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Eo(t);
};
Ke.render = function(e, t, n) {
  if (!zo(t)) throw Error(M(200));
  return bo(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function(e) {
  if (!zo(e)) throw Error(M(40));
  return e._reactRootContainer ? (En(function() {
    bo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[It] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = Ks;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zo(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return bo(e, t, n, !1, r);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function $d() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d);
    } catch (e) {
      console.error(e);
    }
}
$d(), $c.exports = Ke;
var bm = $c.exports, Dd, gc = bm;
Dd = gc.createRoot, gc.hydrateRoot;
const vc = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, Pm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Mm = [
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
], Tm = [
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
function Lm(e, t = 0) {
  const n = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, r = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, a = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, i = 2 * (Number.isFinite(t) ? t : 0), s = (Number.isFinite(r) ? r : 0) * n + i, c = (Number.isFinite(a) ? a : 0) * n + i;
  return { w: Number.isFinite(s) ? s : 0, h: Number.isFinite(c) ? c : 0 };
}
const kn = () => globalThis.__crycatBase || "";
async function Y(e, t) {
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
const D = {
  health: () => Y("/api/health"),
  getSettings: () => Y(
    "/api/settings"
  ),
  putSettings: (e) => Y("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), Y("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => Y("/api/assets"),
  patchAsset: (e, t) => Y(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => Y(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 16) => Y(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => Y("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => Y(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => Y(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), Y(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => Y(
    "/api/contornos"
  ),
  contornoPreview: (e, t) => Y(`/api/assets/${e}/contorno-preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  blobs: (e) => Y(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => Y(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0, r = "final") => `${kn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
  previewUrlSinBordes: (e, t = 0) => `/api/assets/${e}/preview.png?r=${t}`,
  optimize: (e, t = !1) => Y("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => Y(`/api/job/${e}`),
  /** Restaura una colocación anterior (deshacer/rehacer con resultados). */
  restoreResult: (e) => Y("/api/result/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  result: () => Y("/api/result"),
  version: () => Y("/api/version"),
  checkVersion: () => Y("/api/version/check", { method: "POST" }),
  updateVersion: () => Y(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => Y("/api/version/open", { method: "POST" }),
  estimate: () => Y("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0, i = "final") => `${kn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${i}` : ""}`,
  move: (e, t, n) => Y(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => Y("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => Y("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => Y(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => Y("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => Y("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => Y(
    "/api/presets/factory"
  ),
  assetsFolder: () => Y("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), Y("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${kn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => Y("/api/presets"),
  savePreset: (e) => Y("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => Y(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => Y(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  ),
  // ------------------------------------------------------- modos --
  modos: () => Y("/api/modos"),
  saveModo: (e, t) => Y(`/api/modos/${e}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  renameModo: (e, t) => Y(`/api/modos/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  loadModo: (e) => Y(
    `/api/modos/${e}/load`,
    { method: "POST" }
  ),
  deleteModo: (e) => Y(
    `/api/modos/${e}`,
    { method: "DELETE" }
  )
};
async function Rm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, h) => {
      a.onload = () => g(), a.onerror = () => h(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, c = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(i * c), l.height = Math.round(s * c), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (g) => l.toBlob((h) => g(h), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Od(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Rm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
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
function yc(e) {
  const t = ns(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Fd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return ns(e);
  } catch {
  }
  return ns("wiwi");
}
const qd = {
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
  "Ctrl/Shift+clic = varios": "Ctrl/Shift+click = multi",
  "Clic en una tarjeta (o en una pieza del visor) para seleccionarla; Ctrl/Cmd o Shift + clic para seleccionar VARIAS y editarlas a la vez.": "Click a card (or a piece in the viewer) to select it; Ctrl/Cmd or Shift + click to select SEVERAL and edit them together.",
  "Separación entre elementos en la imagen": "Separation between items in the image",
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
}, Bd = w.createContext("es");
function Am({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(Bd.Provider, { value: e, children: t });
}
function al() {
  return w.useContext(Bd);
}
function Je() {
  const e = al();
  return (t, n) => {
    let r = e === "en" ? qd[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function Im(e, t, n) {
  return e === "en" ? qd[t] ?? t : t;
}
function ae({ size: e = 18, children: t }) {
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
function rs({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function ra({ size: e }) {
  return /* @__PURE__ */ o.jsx(ae, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function aa({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function $m({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function oa({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Om({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Fm({ size: e }) {
  return /* @__PURE__ */ o.jsx(ae, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
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
function xc({ size: e }) {
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
function qm({ size: e }) {
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
function wc({ size: e }) {
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
function Bm({ size: e }) {
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
function Um({ size: e }) {
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
function Ud({ size: e }) {
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
  return /* @__PURE__ */ o.jsx(ae, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function as({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Vm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function os({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Gm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Hm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Dr({ size: e }) {
  return /* @__PURE__ */ o.jsx(ae, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function jc({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Wm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Qm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Ym({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Vd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Km({ size: e }) {
  return /* @__PURE__ */ o.jsx(ae, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Gd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function Xm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Jm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Zm({ size: e }) {
  return /* @__PURE__ */ o.jsx(ae, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function eh({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function th({ size: e }) {
  return /* @__PURE__ */ o.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ o.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function nh({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Je(), i = w.useMemo(() => t.map((v) => v.id), [t]), [s, c] = w.useState(/* @__PURE__ */ new Set()), [l, d] = w.useState("escala"), [g, h] = w.useState(100), [y, m] = w.useState(50), [j, b] = w.useState("mayor"), [B, u] = w.useState("");
  w.useEffect(() => {
    e && (c(/* @__PURE__ */ new Set()), u(""));
  }, [e, i.join(",")]);
  const f = (v) => !s.has(v), p = (v) => c((C) => {
    const I = new Set(C);
    return I.has(v) ? I.delete(v) : I.add(v), I;
  }), x = () => c(
    s.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), N = (v) => {
    const C = v.w_mm_base || 0, I = v.h_mm_base || 0;
    return j === "mayor" ? Math.max(C, I) : j === "menor" ? Math.min(C, I) : 2 * Math.sqrt(Math.max(0, C * I) / Math.PI);
  }, E = (v) => {
    if (l === "tamano") {
      const C = N(v);
      if (C > 0) return Math.min(10, Math.max(0.05, y / C));
    }
    return Math.min(10, Math.max(0.05, g / 100));
  }, S = (v) => {
    const C = E(v);
    return { w: (v.w_mm_base || 0) * C, h: (v.h_mm_base || 0) * C };
  }, P = async () => {
    let v = 0;
    for (const C of t) {
      if (!f(C.id)) continue;
      const I = E(C) * 100;
      await D.patchAsset(C.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(I * 10) / 10))
      }), v += 1;
    }
    await r(), u(a("{n} elementos ajustados ", { n: v }));
  }, k = async () => {
    await P(), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((v) => {
          const C = S(v), I = Math.min(98, C.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${v.id}`,
              style: {
                width: `${I}%`,
                maxWidth: `${I}%`,
                aspectRatio: `${C.w || 1} / ${C.h || 1}`,
                opacity: f(v.id) ? 1 : 0.3
              },
              title: `${v.name} · ${C.w.toFixed(1)}×${C.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: D.previewUrl(v.id), alt: "" })
            },
            v.id
          );
        }) }),
        /* @__PURE__ */ o.jsx("div", { className: "modal-botones", style: { marginTop: 8 }, children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "primary",
            "data-testid": "import-aplicar-izq",
            onClick: P,
            children: a("Aplicar tamaño")
          }
        ) }),
        B && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso-izq", children: B })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "hint row", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "mini-link",
              "data-testid": "import-todos",
              onClick: x,
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
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((v) => {
          const C = S(v);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${v.id}`,
              className: f(v.id) ? "sel" : "",
              onClick: () => p(v.id),
              title: v.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: D.previewUrl(v.id), alt: v.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: v.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(v.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  C.w.toFixed(1),
                  "×",
                  C.h.toFixed(1),
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
                value: String(g),
                onChange: (v) => h(Number(v.target.value))
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
                  onChange: (v) => m(Number(v.target.value))
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
                onChange: (v) => b(v.target.value),
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
        B && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: B })
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
          onClick: k,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function rh({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: i = !1,
  bordeGlobalMm: s = 0,
  faseBordes: c = 0,
  verBordes: l = !0,
  contornoModo: d = "final",
  destacado: g = !1,
  sel: h = !1,
  onSel: y
}) {
  const m = Je(), [j, b] = w.useState(() => na(e));
  w.useEffect(() => b(na(e)), [e]);
  const B = w.useRef(null), u = i && Number(s) || 0, f = Math.max(0, u + j.offset_mm), p = (z) => {
    const Q = Math.max(0, Math.min(20, Math.round(z * 2) / 2));
    O({ offset_mm: Q });
  }, x = Lm(j, f), [N, E] = w.useState(""), S = w.useRef(!1), [P, k] = w.useState(""), v = w.useRef(!1), [C, I] = w.useState({ tamano: !1, borde: !1, mini: !1 }), W = w.useRef(null);
  w.useEffect(() => {
    var z;
    g && (I({ tamano: !0, borde: !0, mini: !0 }), (z = W.current) == null || z.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [g]), w.useEffect(() => {
    S.current || E(x.w > 0 ? x.w.toFixed(1) : ""), v.current || k(x.h > 0 ? x.h.toFixed(1) : "");
  }, [x.w, x.h]);
  const G = Number.isFinite(j.w_mm_base) ? j.w_mm_base : 0, ne = Number.isFinite(j.h_mm_base) ? j.h_mm_base : 0, re = (z) => {
    E(z);
    const Q = Number(z.replace(",", "."));
    !Number.isFinite(Q) || Q <= 0 || G <= 0 || O({ scale_pct: Math.max(5, (Q - 2 * f) / G * 100) });
  }, Ce = (z) => {
    k(z);
    const Q = Number(z.replace(",", "."));
    !Number.isFinite(Q) || Q <= 0 || ne <= 0 || O({ scale_pct: Math.max(5, (Q - 2 * f) / ne * 100) });
  }, R = (t == null ? void 0 : t.placements.filter((z) => z.asset_id === e.id && z.mini).length) ?? 0, U = (t == null ? void 0 : t.placements.filter((z) => z.asset_id === e.id && !z.mini).length) ?? 0, O = async (z) => {
    a == null || a(), "copies" in z && (z.copies = Math.max(0, z.copies ?? 0)), b((Q) => ({ ...Q, ...z }));
    try {
      await D.patchAsset(e.id, z);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: W,
      "data-asset": e.id,
      className: `asset-card${g ? " destacada" : ""}${h ? " sel" : ""}`,
      "data-testid": "asset-card",
      onClick: (z) => {
        z.target.closest("button, input, select, textarea, a") || y == null || y(e.id, z.ctrlKey || z.metaKey || z.shiftKey);
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: D.previewUrlSinBordes(e.id, e.rev ?? 0),
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
                onClick: () => D.assetsFolder().then((z) => D.abrirCarpeta(z.path)).catch(() => D.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ o.jsx(ra, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: m("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var z;
                  return (z = B.current) == null ? void 0 : z.click();
                },
                children: /* @__PURE__ */ o.jsx($m, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: B,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (z) => {
                  var Ze;
                  const Q = (Ze = z.target.files) == null ? void 0 : Ze[0];
                  if (z.target.value = "", !!Q)
                    try {
                      const { blob: Se, name: et } = await Od(Q);
                      await D.reemplazar(e.id, Se, et), await n();
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
                children: /* @__PURE__ */ o.jsx(Dm, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn",
                title: j.bg_removed ? m("Restaurar fondo original") : m("Quitar fondo (inteligente)"),
                onClick: () => (j.bg_removed ? D.restoreBackground(e.id) : D.removeBackground(e.id)).then(n),
                children: j.bg_removed ? /* @__PURE__ */ o.jsx(Om, { size: 16 }) : /* @__PURE__ */ o.jsx(oa, { size: 16 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: m("Eliminar imagen"),
                onClick: () => D.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ o.jsx(Fm, { size: 16 })
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
                onClick: () => O({ mini_enabled: !j.mini_enabled }),
                children: [
                  /* @__PURE__ */ o.jsx(lr, { size: 15 }),
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
                onClick: () => I((z) => ({ ...z, borde: !z.borde })),
                children: [
                  /* @__PURE__ */ o.jsx(ia, { size: 15 }),
                  " ",
                  m("Borde")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: m("Copias"), children: [
              /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => O({ copies: j.copies - 1 }), children: "−" }),
              /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: j.copies }),
              /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => O({ copies: j.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => I((z) => ({ ...z, tamano: !z.tamano })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${C.tamano ? "open" : ""}`, children: "›" }),
                  m("Tamaño"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    x.w.toFixed(1),
                    "×",
                    x.h.toFixed(1),
                    " · ",
                    Math.round(j.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            C.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
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
                    onChange: (z) => O({ scale_pct: Number(z.target.value) })
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
                      S.current = !0, v.current = !1;
                    },
                    onBlur: () => {
                      S.current = !1, E(x.w > 0 ? x.w.toFixed(1) : "");
                    },
                    onChange: (z) => re(z.target.value)
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
                    value: P,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      v.current = !0, S.current = !1;
                    },
                    onBlur: () => {
                      v.current = !1, k(x.h > 0 ? x.h.toFixed(1) : "");
                    },
                    onChange: (z) => Ce(z.target.value)
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
                onClick: () => I((z) => ({ ...z, borde: !z.borde })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${C.borde ? "open" : ""}`, children: "›" }),
                  m("Borde adicional"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    j.offset_mm.toFixed(1),
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
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => p(j.offset_mm - 0.5),
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
                    value: j.offset_mm,
                    onChange: (z) => p(Number(z.target.value))
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => p(j.offset_mm + 0.5),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: m("Adicional: {a} mm · Global: {g} mm · Total: {t} mm", {
                a: j.offset_mm.toFixed(1),
                g: u.toFixed(1),
                t: f.toFixed(1)
              }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", m("Extender")],
                  ["blanco", m("Blanco")],
                  ["color", m("Color")],
                  ["unir_recto", m("Unir recto")],
                  ["unir_curvo", m("Unir curvo")]
                ].map(([z, Q]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `seg ${(j.offset_modo || "") === z ? "on" : ""}`,
                    "data-testid": `offset-modo-${z}-${e.id}`,
                    onClick: () => O({ offset_modo: z }),
                    children: Q
                  },
                  z
                )),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: j.offset_color || "#ffffff",
                    title: m("Color del borde"),
                    onChange: (z) => O({
                      offset_color: z.target.value,
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
                onClick: () => I((z) => ({ ...z, mini: !z.mini })),
                children: [
                  /* @__PURE__ */ o.jsx("span", { className: `chev ${C.mini ? "open" : ""}`, children: "›" }),
                  m("Opciones de mini"),
                  /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    j.mini_quota,
                    " · ",
                    R
                  ] })
                ]
              }
            ),
            C.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ o.jsx("span", { title: m("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: m("Cuota") }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => O({ mini_quota: Math.max(
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
                  onClick: () => O({ mini_quota: Math.min(
                    100,
                    Math.round((j.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: m(" {n} minis", { n: R }) })
            ] }) })
          ] }),
          U > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: m("Colocadas: {n}", { n: U }) }),
          j.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ o.jsx(Vd, { size: 14 }),
            " ",
            j.warnings[0],
            " ",
            j.warnings.some((z) => /blob|trozos sueltos/i.test(z)) && /* @__PURE__ */ o.jsx(
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
function ah({
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
  destacado: g = "",
  seleccion: h = [],
  onSeleccion: y,
  onBulk: m
}) {
  var E, S, P, k;
  const j = Je(), b = w.useRef(null), [B, u] = w.useState(!1), [f, p] = w.useState(null), x = async (v) => {
    const C = [];
    for (const I of Array.from(v))
      try {
        const { blob: W, name: G } = await Od(I);
        C.push(na(await D.upload(W, G)));
      } catch (W) {
        console.error(W);
      }
    await r(), C.length > 1 && p(C);
  }, N = n.usar_minis;
  return e.some((v) => v.demo), /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: j("Imágenes") }),
      /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "hint",
          style: { fontSize: 10.5 },
          title: j("Clic en una tarjeta (o en una pieza del visor) para seleccionarla; Ctrl/Cmd o Shift + clic para seleccionar VARIAS y editarlas a la vez."),
          children: j("Ctrl/Shift+clic = varios")
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `dropzone${B ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var v;
          return (v = b.current) == null ? void 0 : v.click();
        },
        onDragOver: (v) => {
          v.preventDefault(), u(!0);
        },
        onDragLeave: () => u(!1),
        onDrop: (v) => {
          v.preventDefault(), u(!1), v.dataTransfer.files.length && x(v.dataTransfer.files);
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
              onChange: (v) => {
                v.target.files && x(v.target.files), v.target.value = "";
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
              var v;
              return m == null ? void 0 : m(h, {
                copies: Math.max(0, (((v = e.find((C) => C.id === h[0])) == null ? void 0 : v.copies) ?? 1) - 1)
              });
            },
            children: "−"
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "quota-val", children: ((E = e.find((v) => v.id === h[0])) == null ? void 0 : E.copies) ?? 1 }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "quota-btn",
            "data-testid": "bulk-copias-mas",
            onClick: () => {
              var v;
              return m == null ? void 0 : m(h, {
                copies: (((v = e.find((C) => C.id === h[0])) == null ? void 0 : v.copies) ?? 1) + 1
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
            value: Math.round(((S = e.find((v) => v.id === h[0])) == null ? void 0 : S.scale_pct) ?? 100),
            onChange: (v) => m == null ? void 0 : m(
              h,
              { scale_pct: Number(v.target.value) }
            )
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
          Math.round(((P = e.find((v) => v.id === h[0])) == null ? void 0 : P.scale_pct) ?? 100),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `mini-toggle${(k = e.find((v) => v.id === h[0])) != null && k.mini_enabled ? " on" : ""}`,
            "data-testid": "bulk-mini",
            onClick: () => {
              var v;
              return m == null ? void 0 : m(h, {
                mini_enabled: !((v = e.find((C) => C.id === h[0])) != null && v.mini_enabled)
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
              var v;
              return m == null ? void 0 : m(h, {
                offset_mm: (((v = e.find((C) => C.id === h[0])) == null ? void 0 : v.offset_mm) ?? 0) > 0 ? 0 : 1
              });
            },
            children: j("Borde")
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "hint", children: j("Los cambios se aplican a TODOS los elementos seleccionados.") })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((v) => /* @__PURE__ */ o.jsx(
      rh,
      {
        a: v,
        result: t,
        onChange: r,
        sel: h.includes(v.id),
        onSel: y,
        onEditarContorno: i,
        onAntesDeCambiar: s,
        faseBordes: c,
        verBordes: l,
        contornoModo: d,
        destacado: g === v.id,
        bordeGlobal: n.offset_activo === !0,
        bordeGlobalMm: Number(n.offset_mm) || 0
      },
      v.id
    )) }),
    !N && /* @__PURE__ */ o.jsx("div", { className: "hint", children: j("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => D.clearAssets().then(r),
        children: j("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      nh,
      {
        open: !!f,
        assets: f ?? [],
        onClose: () => p(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const St = (e) => (globalThis.__crycatAssets || "") + e;
function Hd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Je(), [i, s] = w.useState(null), [c, l] = w.useState("");
  w.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (g = "") => {
    l("");
    try {
      s(await D.fsList(g));
    } catch (h) {
      l(h.message);
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
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => d(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((g) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => d(`${i.path}/${g}`.replace("//", "/")),
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
function oh({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i,
  preview: s
}) {
  const c = Je(), [l, d] = w.useState("resumen");
  if (!e) return null;
  const g = t.length > 0 && t.every((y) => y.startsWith("data:")), h = [
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
      !g && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        c("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      g && /* @__PURE__ */ o.jsx("p", { className: "hint", children: c("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      g ? t.map((y, m) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${m}`,
          href: y,
          download: `crycat_pagina-${String(m + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(ra, { size: 15 }),
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
          onClick: () => d("cricut"),
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
          onClick: () => d("resumen"),
          children: c("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: i, children: c("Entendido") })
    ] })
  ] }) }) });
}
function ih({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: s, onJob: c, onRecalc: l, editando: d, onFinEdicion: g, onDeshacer: h, onRehacer: y, puedeDeshacer: m, puedeRehacer: j, seleccion: b = [], onSeleccion: B }) {
  const u = Je(), f = al(), [p, x] = w.useState(1), [N, E] = w.useState({ x: 0, y: 0 }), [S, P] = w.useState(null), [k, v] = w.useState(1), [C, I] = w.useState(null), [W, G] = w.useState(null), [ne, re] = w.useState(!1), [Ce, R] = w.useState(2), [U, O] = w.useState(0);
  w.useEffect(() => {
    if (!r.verBordes) return;
    const _ = window.setInterval(
      () => O((A) => (A + 3) % 12),
      260
    );
    return () => window.clearInterval(_);
  }, [r.verBordes]);
  const [z, Q] = w.useState([]), [Ze, Se] = w.useState([]), [et, ue] = w.useState(""), [ye, q] = w.useState("normal"), [ze, be] = w.useState(""), [Oe, yt] = w.useState(/* @__PURE__ */ new Set()), xt = w.useRef(null), Ft = w.useRef(null), qt = f === "en" ? Tm : Mm, Pn = w.useMemo(
    () => qt[Math.floor(Math.random() * qt.length)],
    [qt]
  ), pr = r.saveName.trim() || Pn;
  w.useEffect(() => {
    v(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const tt = (t == null ? void 0 : t.pages) ?? 0, Mn = !!t && t.efficiency < 0.8;
  w.useEffect(() => {
    const _ = xt.current;
    if (!_) return;
    const A = (L) => {
      L.preventDefault(), L.stopPropagation();
      const H = _.getBoundingClientRect(), K = L.clientX - H.left, me = L.clientY - H.top;
      x((Re) => {
        const ee = L.deltaY < 0 ? 1.05 : 0.9523809523809523, le = Math.min(12, Math.max(0.05, Re * ee)), wt = le / Re;
        return E((Ht) => ({ x: K - (K - Ht.x) * wt, y: me - (me - Ht.y) * wt })), le;
      });
    };
    return _.addEventListener("wheel", A, { passive: !1 }), () => _.removeEventListener("wheel", A);
  }, []);
  const fr = (_) => {
    if (_.target.closest(".item-box")) return;
    Ft.current = { x: _.clientX - N.x, y: _.clientY - N.y };
    const A = (H) => {
      Ft.current && E({ x: H.clientX - Ft.current.x, y: H.clientY - Ft.current.y });
    }, L = () => {
      Ft.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", L);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", L);
  };
  w.useEffect(() => {
    const _ = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? x((L) => Math.min(12, L * 1.08)) : A.key === "-" || A.key === "_" ? x((L) => Math.max(0.05, L / 1.08)) : A.key === "0" ? gr() : A.key === "Escape" ? P(null) : A.key === "g" ? a((L) => ({ ...L, guidesVisible: !L.guidesVisible })) : A.key === "t" && a((L) => {
        const H = [
          "blanco",
          "transparente",
          "fosforito",
          "rosa",
          "negro"
        ], K = L.fondo ?? (L.eyeFosforito ? "fosforito" : L.eyeTransparent ? "transparente" : "blanco"), me = H[(H.indexOf(K) + 1) % H.length];
        return {
          ...L,
          fondo: me,
          eyeTransparent: me === "transparente",
          eyeFosforito: me === "fosforito"
        };
      }));
    };
    return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _);
  }, [a]);
  const Bt = w.useRef(null), mr = w.useRef(null), T = (_, A) => {
    _.preventDefault(), _.stopPropagation();
    const L = _.currentTarget.closest(".page-box");
    if (!L || !t) return;
    const H = t.page_mm[0] / L.clientWidth, K = {
      uid: A.uid,
      startX: _.clientX,
      startY: _.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: H
    };
    Bt.current = K, mr.current = { x: A.x, y: A.y }, I(K), G({ uid: A.uid, x: A.x, y: A.y });
    const me = (ee) => {
      const le = Bt.current;
      if (!le) return;
      const wt = (ee.clientX - le.startX) * le.mmPerPx / p, Ht = (ee.clientY - le.startY) * le.mmPerPx / p;
      mr.current = { x: le.origX + wt, y: le.origY + Ht }, G({ uid: le.uid, x: le.origX + wt, y: le.origY + Ht });
    }, Re = (ee) => {
      window.removeEventListener("mousemove", me), window.removeEventListener("mouseup", Re);
      const le = Bt.current;
      if (Bt.current = null, !le) return;
      const wt = (ee.clientX - le.startX) * le.mmPerPx / p, Ht = (ee.clientY - le.startY) * le.mmPerPx / p;
      I(null), G(null), !(Math.abs(wt) < 0.5 && Math.abs(Ht) < 0.5) && F(le.uid, le.origX + wt, le.origY + Ht);
    };
    window.addEventListener("mousemove", me), window.addEventListener("mouseup", Re);
  }, F = async (_, A, L) => {
    try {
      const H = await D.move(_, A, L);
      H.job ? c(H.job) : await s();
    } catch {
      await s();
    } finally {
      v(Date.now());
    }
  }, V = async (_) => {
    const A = await D.unpin(_);
    c(A);
  }, Z = !1;
  w.useEffect(() => {
    {
      Q([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, k]), w.useEffect(() => {
    if (q("normal"), be(""), !d) {
      Se([]), ue(""), yt(/* @__PURE__ */ new Set());
      return;
    }
    D.blobs(d.id).then((_) => {
      Se(_.blobs), R(d.offset_mm > 0 ? d.offset_mm : _.union_mm ?? 2), ue(_.preview_png), yt(new Set(_.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      Se([]), ue("");
    });
  }, [d]);
  const hr = async () => {
    if (d)
      try {
        await D.limpiarContorno(d.id, Array.from(Oe));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, Ut = (_) => {
    yt((A) => {
      const L = new Set(A);
      return L.has(_) ? L.delete(_) : L.add(_), L;
    });
  }, [Ge, Vt] = w.useState(null), Xd = async () => {
    try {
      const L = await D.export(
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
        const H = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), K = URL.createObjectURL(H), me = document.createElement("a");
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
      var L, H;
      try {
        (L = A.contentWindow) == null || L.focus(), (H = A.contentWindow) == null || H.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, Jd = async () => {
    try {
      const _ = await D.export(pr);
      Vt({ files: _.files, folder: _.folder, preview: _.preview });
    } catch (_) {
      Vt({ files: [], folder: "", error: _.message });
    }
  }, Zd = () => {
    re(!0);
  }, ep = async (_) => {
    try {
      const A = await D.export(pr, _);
      Vt({ files: A.files, folder: A.folder, preview: A.preview });
    } catch (A) {
      Vt({ files: [], folder: "", error: A.message });
    }
  }, ol = (t == null ? void 0 : t.poly_mm) ?? [], [lt, ct] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Tn, Ln] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], ut = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Tn, mn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Ln, gr = w.useCallback(() => {
    const _ = xt.current;
    if (!_) return;
    const A = _.querySelector(".page-box");
    if (!A) return;
    const L = _.querySelector(".canvas-inner"), H = _.clientWidth, K = _.clientHeight, me = (L == null ? void 0 : L.offsetWidth) || A.offsetWidth || 1, Re = (L == null ? void 0 : L.offsetHeight) || A.offsetHeight || 1, ee = Math.min(1, H / me, K / Re);
    x(ee), E({ x: (H - me * ee) / 2, y: (K - Re * ee) / 2 });
  }, []);
  w.useEffect(() => {
    if (tt <= 0) return;
    const _ = window.setTimeout(gr, 60);
    return () => window.clearTimeout(_);
  }, [
    tt,
    ut,
    mn,
    r.viewMode,
    r.hojaGirada,
    S,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    gr
  ]);
  const Et = n.lienzo === "pagina" ? 0 : lt, zt = n.lienzo === "pagina" ? 0 : ct, il = ol.length ? "M" + ol.map(([_, A]) => `${_ - Et},${A - zt}`).join(" L") + " Z" : "", sl = w.useRef(0);
  w.useEffect(() => {
    if (!t) return;
    const _ = t.pages || 0;
    _ > 0 && _ !== sl.current && (sl.current = _, a((A) => ({ ...A, viewMode: _ <= 1 ? 1 : _ === 2 ? 2 : 4 })), P(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const pa = r.contornoModo ?? "final", Rn = r.verBordes && pa !== "ninguno", Po = `${k}-${n.marcas_delimitar ? 1 : 0}-${n.lienzo}-${n.color_formato}-${n.dpi_salida}`;
  w.useEffect(() => {
    if (!Rn || !t) return;
    const _ = [], A = Math.max(1, t.pages);
    for (let H = 0; H < A; H++)
      for (const K of [0, 3, 6, 9])
        _.push(D.pageUrl(
          H,
          Po,
          n.simular_impresion === !0,
          !0,
          K,
          pa
        ));
    const L = _.map((H) => {
      const K = new Image();
      return K.src = H, K;
    });
    return () => L.forEach((H) => {
      H.src = "";
    });
  }, [Rn, Po, t, pa, n.simular_impresion]);
  const Gt = r.hojaGirada === !0, Mo = Gt ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${ut / (mn || 1) * 100}%`,
    height: `${mn / (ut || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(270deg)"
  } : void 0, tp = (_) => {
    const A = (t == null ? void 0 : t.placements.filter((L) => L.page === _)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box fondo-${r.fondo ?? (r.eyeFosforito ? "fosforito" : r.eyeTransparent ? "transparente" : "blanco")}${Gt ? " girada" : ""}`,
        style: Gt ? {
          width: "100%",
          aspectRatio: `${mn} / ${ut}`
        } : { width: "100%" },
        onClick: (L) => {
          tt > 1 && S === null && !L.target.closest(".item-box") && P(_);
        },
        "data-testid": `page-${_}`,
        children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              className: `sheet${Gt ? " girada" : ""}`,
              style: Mo,
              onLoad: _ === 0 ? gr : void 0,
              src: D.pageUrl(_, Po, n.simular_impresion === !0, Rn, U, pa),
              alt: u("Página {i}", { i: _ + 1 }),
              draggable: !1
            }
          ),
          r.guidesVisible && il && /* @__PURE__ */ o.jsxs(
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
                        (L, H) => {
                          const K = H * 10 - (Et - lt);
                          return K >= lt - Et - 0.01 && K <= lt - Et + Tn + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: K,
                              y1: ct - zt,
                              x2: K,
                              y2: ct - zt + Ln
                            },
                            `v${H}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((ct - zt + Ln) / 10) + 1 },
                        (L, H) => {
                          const K = H * 10 - (zt - ct);
                          return K >= ct - zt - 0.01 && K <= ct - zt + Ln + 0.01 ? /* @__PURE__ */ o.jsx(
                            "line",
                            {
                              x1: lt - Et,
                              y1: K,
                              x2: lt - Et + Tn,
                              y2: K
                            },
                            `h${H}`
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
                ].map(([L, H, K, me, Re]) => {
                  const ee = t.marcas[L];
                  if (!ee) return null;
                  const le = H - Et - (me ? ee[0] : 0), wt = K - zt - (Re ? ee[1] : 0);
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
                    d: il,
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
                const H = e.find((ee) => ee.id === L.asset_id), K = (W == null ? void 0 : W.uid) === L.uid ? W : null, me = ((K ? K.x : L.x) - Et) / (ut || 1) * 100, Re = ((K ? K.y : L.y) - zt) / (mn || 1) * 100;
                return /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `item-box ${L.pinned ? "pinned" : ""} ${(C == null ? void 0 : C.uid) === L.uid ? "dragging" : ""}${b.includes(L.asset_id) ? " sel" : ""}`,
                    style: {
                      left: `${me}%`,
                      top: `${Re}%`,
                      width: `${L.w / (ut || 1) * 100}%`,
                      height: `${L.h / (mn || 1) * 100}%`
                    },
                    title: (H == null ? void 0 : H.name) ?? "",
                    onMouseDown: (ee) => T(ee, L),
                    onContextMenu: (ee) => {
                      ee.preventDefault(), V(L.uid);
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
                      )), B == null || B(
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
      _
    );
  }, np = S !== null ? [S] : Array.from({ length: tt }, (_, A) => A);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    tt > 1 && /* @__PURE__ */ o.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: u("No cabe en una página: {n} páginas", { n: tt }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${Rn ? "modo-final" : "modo-ninguno"}`,
          "data-tip": u(Rn ? "Quitar el contorno (solo vista previa)" : "Ver el contorno de corte: la línea más exterior, lo que se corta de verdad"),
          onClick: () => {
            const _ = !Rn;
            a((A) => ({
              ...A,
              contornoModo: _ ? "final" : "ninguno",
              verBordes: _
            })), i({
              contorno_modo: _ ? "final" : "ninguno",
              ver_contornos: _
            });
          },
          children: [
            /* @__PURE__ */ o.jsx(ia, { size: 16 }),
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
          onClick: () => a((_) => ({ ..._, guidesVisible: !_.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(os, { size: 16 }),
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
          onClick: () => a((_) => {
            const A = [
              "blanco",
              "transparente",
              "fosforito",
              "rosa",
              "negro"
            ], L = _.fondo ?? (_.eyeFosforito ? "fosforito" : _.eyeTransparent ? "transparente" : "blanco"), H = A[(A.indexOf(L) + 1) % A.length];
            return {
              ..._,
              fondo: H,
              eyeTransparent: H === "transparente",
              eyeFosforito: H === "fosforito"
            };
          }),
          children: [
            r.eyeFosforito ? /* @__PURE__ */ o.jsx(qm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ o.jsx(xc, { size: 16 }) : /* @__PURE__ */ o.jsx(xc, { size: 16 }),
            r.eyeFosforito ? u("Fosforito") : r.eyeTransparent ? u("Transparente") : u("Blanco")
          ]
        }
      ),
      (tt > 1 && S === null || S !== null) && /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        tt > 1 && S === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((_) => ({ ..._, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((_) => ({ ..._, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((_) => ({ ..._, viewMode: 4 })), children: "4" })
        ] }),
        S !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => P(null), title: u("Volver a la cuadrícula (Esc)"), children: u(" Ver todo") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Gt ? "primary" : "",
          "data-tip": u("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const _ = !window.__crycatAncho;
            window.__crycatAncho = _, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: _ }
            ));
          },
          children: [
            /* @__PURE__ */ o.jsx(Bm, { size: 16 }),
            u(Gt ? "Vertical" : "Horizontal")
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
            onClick: () => h(),
            disabled: !m,
            children: /* @__PURE__ */ o.jsx(as, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": u("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => y(),
            disabled: !j,
            children: /* @__PURE__ */ o.jsx(Vm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "vf-centro", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "btn-optimizar-flotante",
          "data-testid": "btn-recalcular",
          "data-tip": u("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(Mn ? "rapido" : "optimo"),
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
            onClick: () => x((_) => Math.min(12, _ * 1.08)),
            children: /* @__PURE__ */ o.jsx(Gm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": u("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: gr,
            children: /* @__PURE__ */ o.jsx(Um, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-tip": u("Alejar (−)"),
            onClick: () => x((_) => Math.max(0.05, _ / 1.08)),
            children: /* @__PURE__ */ o.jsx(Hm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(p * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: ze || et || D.previewUrlSinBordes(
              d.id,
              d.rev ?? 0
            ),
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: d && Ze.filter((_) => !_.principal).map((_, A) => {
          const [L, H, K, me] = _.bbox, Re = d.w_px || 1, ee = d.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${Oe.has(_.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: u("Trozo de {px} px — clic para {accion}", {
                px: _.area_px,
                accion: Oe.has(_.id) ? u("conservar") : u("quitar")
              }),
              style: {
                left: `${L / Re * 100}%`,
                top: `${H / ee * 100}%`,
                width: `${(K - L) / Re * 100}%`,
                height: `${(me - H) / ee * 100}%`
              },
              onClick: () => Ut(_.id)
            },
            _.id
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
                onClick: () => R((_) => Math.max(0.5, Math.round((_ - 0.5) * 2) / 2)),
                children: "−"
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": "union-mm", children: [
              Ce,
              " mm"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-mas",
                onClick: () => R((_) => Math.min(20, Math.round((_ + 0.5) * 2) / 2)),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-ver-quitados",
              title: u("Ver cómo queda SIN los trozos marcados (solo vista previa)"),
              className: ye === "quitar" ? "primary" : "",
              onClick: async () => {
                if (d) {
                  if (ye === "quitar") {
                    q("normal"), be("");
                    return;
                  }
                  try {
                    const _ = await D.contornoPreview(
                      d.id,
                      { quitar: Array.from(Oe) }
                    );
                    be(_.png), q("quitar");
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
              className: ye === "unir" ? "primary" : "",
              onClick: async () => {
                if (d) {
                  if (ye === "unir") {
                    q("normal"), be("");
                    return;
                  }
                  try {
                    const _ = await D.contornoPreview(
                      d.id,
                      { unir: Ce }
                    );
                    be(_.png), q("unir");
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
              title: u("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: Ce }),
              onClick: async () => {
                d && (await D.patchAsset(d.id, {
                  offset_mm: Ce,
                  offset_modo: "unir_curvo"
                }), await (g == null ? void 0 : g()));
              },
              children: u("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: hr,
              children: u(
                "Quitar marcados ({n})",
                { n: Oe.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: xt,
        className: `canvas ${C ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: fr,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${N.x}px, ${N.y}px) scale(${p})` },
            children: [
              tt === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: u("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${S !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: np.map(tp)
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
          onClick: hr,
          children: u("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => g == null ? void 0 : g(),
          children: u("Descartar")
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
          onChange: (_) => a((A) => ({ ...A, saveName: _.target.value }))
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
            onClick: () => D.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(ra, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: Jd, children: u("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: Zd, children: u("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Xd,
            disabled: tt === 0,
            children: u("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Hd,
      {
        open: ne,
        initial: n.carpeta_export,
        onClose: () => re(!1),
        onPick: ep
      }
    ),
    /* @__PURE__ */ o.jsx(
      oh,
      {
        open: !!Ge,
        files: (Ge == null ? void 0 : Ge.files) ?? [],
        folder: (Ge == null ? void 0 : Ge.folder) ?? "",
        preview: Ge == null ? void 0 : Ge.preview,
        error: Ge == null ? void 0 : Ge.error,
        onOpenFolder: (_) => void D.fsOpen(_).catch(() => {
        }),
        onClose: () => Vt(null)
      }
    )
  ] });
}
function sh({ settings: e, saveSettings: t }) {
  const n = Je(), r = e.usar_minis, a = e.modo === "experto", i = {
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
          /* @__PURE__ */ o.jsx(Ud, { size: 16 }),
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
    Icono: eh,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: th,
    forma: "rectangulos"
  }
];
function lh({ settings: e, saveSettings: t }) {
  var g;
  const n = Je(), [r, a] = w.useState(
    {}
  ), [i, s] = w.useState("");
  w.useEffect(() => {
    D.modos().then((h) => a(h.modos ?? {})).catch(() => {
    });
  }, []);
  const c = e.modo_forma ?? "siluetas", l = ((g = ai.find((h) => h.forma === c)) == null ? void 0 : g.clave) ?? "silueta", d = async (h) => {
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
            onClick: () => d(h.clave),
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
function ch({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: i, modo: s = "mm" }) {
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
          const g = Number(d.target.value);
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
const uh = {
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
function kc(e) {
  return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function dh(e, t) {
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
function ph(e, t) {
  if (!e) return 0;
  if (t.includes(e)) return 3;
  const n = t.split(/[^a-z0-9]+/).filter(Boolean);
  for (const r of n) {
    if (r.startsWith(e)) return 2;
    if (e.length >= 4 && dh(r, e) <= 2) return 1;
  }
  for (const [r, a] of Object.entries(uh))
    if (r.includes(e) || e.includes(r)) {
      for (const i of a) if (t.includes(i)) return 1;
    }
  return 0;
}
function bt({ id: e, title: t, open: n, toggle: r, children: a, icon: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      i && /* @__PURE__ */ o.jsx("span", { className: "sect-icono", children: i }),
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Cc(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const fh = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, mh = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function hh({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Je(), [a, i] = w.useState(!0), [s, c] = w.useState({
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
  }), [l, d] = w.useState(!1), g = (k) => s[k], [h, y] = w.useState(""), m = (k, v = !1) => c((C) => {
    const I = { ...C };
    return Object.keys(I).forEach((W) => {
      I[W] = W === k ? v ? !0 : !C[W] : !1;
    }), I;
  }), j = () => {
    const k = kc(h.trim());
    if (!k) return;
    const v = document.querySelector(".settings-panel");
    for (const C of Array.from((v == null ? void 0 : v.querySelectorAll(".ctl")) ?? [])) {
      if (ph(k, kc(C.textContent || "")) <= 0) continue;
      const I = C.closest(".sect"), W = ((I == null ? void 0 : I.getAttribute("data-testid")) || "").replace("sect-", "");
      W && m(W, !0);
      const G = C.querySelector("input, select, textarea"), ne = G == null ? void 0 : G.getAttribute("data-testid");
      ne && window.setTimeout(() => {
        const re = document.querySelector(`[data-testid="${ne}"]`);
        re == null || re.scrollIntoView({ block: "center", behavior: "smooth" }), re == null || re.classList.add("resalta"), window.setTimeout(() => re == null ? void 0 : re.classList.remove("resalta"), 2400);
      }, 150);
      return;
    }
  }, b = w.useMemo(() => {
    const k = (n ?? []).filter((C) => C.mini_enabled);
    return (k.length ? k : n ?? []).slice().sort((C, I) => Math.min(I.w_mm, I.h_mm) - Math.min(C.w_mm, C.h_mm))[0] ?? null;
  }, [n]), B = b ? Math.min(b.w_mm, b.h_mm) : 0, u = e.modo === "experto", f = ({ children: k }) => u ? /* @__PURE__ */ o.jsx(o.Fragment, { children: k }) : null, p = (k) => c((v) => ({ ...v, [k]: !v[k] })), x = (k) => t(k), N = w.useRef(null), E = ({ titulo: k, children: v }) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "ctl-grupo", children: r(k) }),
    v
  ] }), S = (k, v, C, I, W = 1, G = "", ne, re) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...re ? { "data-tip": r(re) } : {}, children: r(k) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "number",
          min: C,
          max: I,
          step: W,
          "data-testid": `set-${v}`,
          value: String(e[v]),
          onChange: (Ce) => {
            const R = Number(Ce.target.value);
            Number.isNaN(R) || x({ [v]: R });
          }
        }
      ),
      G && /* @__PURE__ */ o.jsx("span", { className: "hint", children: G }),
      ne
    ] })
  ] }), P = (k, v, C, I, W) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { ...W ? { "data-tip": r(W) } : {}, children: r(k) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${v}`,
        value: String(e[v]),
        onChange: (G) => x({ [v]: G.target.value }),
        children: C.map(([G, ne]) => /* @__PURE__ */ o.jsx("option", { value: G, children: r(ne) }, G))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: "busca-ajustes",
          "data-testid": "busca-ajustes",
          value: h,
          placeholder: r("Buscar…"),
          title: r("Busca parámetros (admite erratas y sinónimos): p. ej. «borde», «separacion», «tamano»"),
          onChange: (k) => y(k.target.value),
          onKeyDown: (k) => {
            k.key === "Enter" && j();
          }
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "rail-ajustes", "data-testid": "rail-ajustes", children: [
      ["general", /* @__PURE__ */ o.jsx(Dr, { size: 16 }), r("General")],
      ["minis", /* @__PURE__ */ o.jsx(lr, { size: 16 }), r("Minis")],
      ["optimizacion", /* @__PURE__ */ o.jsx(aa, { size: 16 }), r("Optimización")],
      ["imagen", /* @__PURE__ */ o.jsx(oa, { size: 16 }), r("Imagen")],
      ["offset", /* @__PURE__ */ o.jsx(ia, { size: 16 }), r("Borde")],
      ["corte", /* @__PURE__ */ o.jsx(wc, { size: 16 }), r("Estimación de corte")],
      ["visualizacion", /* @__PURE__ */ o.jsx(os, { size: 16 }), r("Visualización")],
      ["historial", /* @__PURE__ */ o.jsx(as, { size: 16 }), r("Historial (deshacer/rehacer)")],
      ["extras", /* @__PURE__ */ o.jsx(rs, { size: 16 }), r("Extras")]
    ].map(([k, v, C]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        "data-testid": `rail-${k}`,
        title: C,
        className: s[k] ? "on" : "",
        onClick: () => m(k),
        children: v
      },
      k
    )) }),
    /* @__PURE__ */ o.jsx(lh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsx(sh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      !u && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ o.jsxs(
        bt,
        {
          id: "general",
          title: r("General"),
          open: g("general"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(Dr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(E, { titulo: "Colocación", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "ctl-fila", children: [
                S(
                  "Espacio entre elementos",
                  "espacio_mm",
                  -10,
                  20,
                  0.5,
                  "mm",
                  void 0,
                  "Separación entre piezas. Puede ser NEGATIVA (se solapan un poco): útil para apretar al máximo. Una línea artificial las separa igualmente al cortar."
                ),
                S(
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
              P("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              S(
                "Separación entre elementos en la imagen",
                "separacion_px",
                1,
                12,
                1,
                "px",
                void 0,
                "Píxeles que se separan las piezas AL RENDERIZAR (aunque se toquen o solapen): la Cricut las detecta como elementos distintos y las corta por separado. 3 px va bien a 300 ppp."
              )
            ] }),
            /* @__PURE__ */ o.jsxs(E, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ o.jsx(f, { children: S("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (k) => {
                      const v = k.target.value, C = Pm[v];
                      x(C ? { pagina: v, pagina_w: C[0], pagina_h: C[1] } : { pagina: v });
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
              /* @__PURE__ */ o.jsx(f, { children: e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ o.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (k) => x({ pagina_w: Number(k.target.value) })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (k) => x({ pagina_h: Number(k.target.value) })
                    }
                  )
                ] })
              ] }) }),
              P("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ])
            ] }),
            /* @__PURE__ */ o.jsx(E, { titulo: "Referencia", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (k) => x({ marcas_delimitar: k.target.checked })
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
        bt,
        {
          id: "minis",
          title: r("Minis"),
          open: g("minis"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(lr, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ o.jsxs(E, { titulo: "Tamaños", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "seg", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-lista",
                    className: e.mini_usar_lista ? "on" : "",
                    onClick: () => x({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "mini-modo-auto",
                    className: e.mini_usar_lista ? "" : "on",
                    onClick: () => x({ mini_usar_lista: !1 }),
                    children: r("Automático (mínimo + %)")
                  }
                )
              ] }),
              !e.mini_usar_lista && S(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas)."
              ),
              !e.mini_usar_lista && S(
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
            /* @__PURE__ */ o.jsxs(E, { titulo: "Comportamiento", children: [
              /* @__PURE__ */ o.jsxs(f, { children: [
                P("Rotaciones admitidas", "mini_rotacion", [
                  ["no", "No girar"],
                  ["90", "Giros de 0º / 90º / 180º / 270º"],
                  ["libre", "Cualquier ángulo"]
                ]),
                P("Selección de tamaños", "mini_tamanos", [
                  ["iguales", "Priorizar que sean iguales"],
                  ["grandes", "Priorizar grandes"]
                ]),
                P("Borde de los minis", "mini_borde_modo", [
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
                      onClick: () => x({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-pct",
                      className: e.mini_lista_modo === "pct" ? "on" : "",
                      onClick: () => x({ mini_lista_modo: "pct" }),
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
                      onChange: (k) => x({ mini_lista_medida: k.target.value }),
                      children: [
                        /* @__PURE__ */ o.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") }),
                        /* @__PURE__ */ o.jsx("option", { value: "menor", children: r("Lado menor") }),
                        /* @__PURE__ */ o.jsx("option", { value: "mayor", children: r("Lado mayor") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((k, v) => /* @__PURE__ */ o.jsx(
                    ch,
                    {
                      i: v,
                      valor: k,
                      refBase: B,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (C) => {
                        const I = [...e.mini_tamanos_lista ?? []];
                        I[v] = C, x({ mini_tamanos_lista: I });
                      },
                      onQuitar: () => x({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (C, I) => I !== v
                        )
                      })
                    },
                    v
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
                /* @__PURE__ */ o.jsx("div", { className: "hint", children: b ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: b.name, mm: B.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] })
          ]
        }
      ),
      u && /* @__PURE__ */ o.jsxs(
        bt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: g("optimizacion"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(aa, { size: 15 }),
          children: [
            P("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            P("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ o.jsxs(f, { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (k) => x({ opt_tiempo_auto: k.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: fh[e.opt_metodo] ?? 8,
                  m: r(mh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : S("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      u && /* @__PURE__ */ o.jsxs(
        bt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: g("imagen"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(oa, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs(E, { titulo: "Impresión", children: [
              S(
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
              P("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ o.jsxs(f, { children: [
                /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (k) => x({ simular_impresion: k.target.checked })
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
                        onChange: (k) => x({ sim_cmyk: k.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  S("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  S("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  S("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              P("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ o.jsxs(E, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (k) => x({ chequear_lineas: k.target.checked })
                  }
                ),
                r("Comprobación de líneas anómalas")
              ] }) }),
              S(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              P("Lienzo del archivo final", "lienzo", [
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
        bt,
        {
          id: "offset",
          title: r("Borde"),
          open: g("offset"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(ia, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (k) => x({ offset_activo: k.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              S(
                "Grosor del borde",
                "offset_mm",
                0.1,
                20,
                0.1,
                "mm",
                void 0,
                "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar."
              ),
              P("Tipo de borde", "offset_modo", [
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
                      onChange: (k) => x({ offset_color: k.target.value })
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
      u && /* @__PURE__ */ o.jsxs(
        bt,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: g("corte"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(wc, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: Cc(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: vc[e.maquina] ?? "Cricut Maker 3" }
              ),
              [vc[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            S("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            S("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            S("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            S("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      u && /* @__PURE__ */ o.jsxs(
        bt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: g("historial"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(as, { size: 15 }),
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
                  onChange: (k) => x({ historial: k.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              S("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (k) => x({ hist_tamano: k.target.checked })
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
                    onChange: (k) => x({ hist_copias: k.target.checked })
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
                    onChange: (k) => x({ hist_borde: k.target.checked })
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
                    onChange: (k) => x({ hist_minis: k.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        bt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: g("visualizacion"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(os, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: ts.map((k) => /* @__PURE__ */ o.jsxs(
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
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx("img", { src: D.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var k;
                  return (k = N.current) == null ? void 0 : k.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    ref: N,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (k) => {
                      var C;
                      const v = (C = k.target.files) == null ? void 0 : C[0];
                      v && D.setIcon(v).then(() => {
                        window.location.reload();
                      }), k.target.value = "";
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
        bt,
        {
          id: "extras",
          title: r("Extras"),
          open: g("extras"),
          toggle: p,
          icon: /* @__PURE__ */ o.jsx(rs, { size: 15 }),
          children: [
            /* @__PURE__ */ o.jsx(E, { titulo: "Sonido", children: /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ o.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => x({ mute: !e.mute }),
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
                    onChange: (k) => x({ volumen: Number(k.target.value) })
                  }
                ),
                /* @__PURE__ */ o.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsxs(E, { titulo: "Pikmin", children: [
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (k) => x({ pikmin_activo: k.target.checked })
                  }
                ),
                r("Mostrar Pikmin de vez en cuando")
              ] }) }),
              S("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (k) => x({ pikmin_sonido: k.target.checked })
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
                    onChange: (k) => x({ pikmin_sonido_morir: k.target.checked })
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
                    onChange: (k) => t({ comprobar_versiones: k.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: Cc(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Hd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (k) => t({ carpeta_export: k })
      }
    )
  ] });
}
function gh({ ver: e, onCerrar: t }) {
  const n = Je(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", i = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = w.useRef((e == null ? void 0 : e.actual) ?? ""), [c, l] = w.useState(!1), d = a === "error", g = a === "reiniciando";
  return w.useEffect(() => {
    if (!g) return;
    l(!0);
    let h = !0;
    const y = window.setInterval(async () => {
      try {
        const m = await D.version();
        if (!h) return;
        m.actual && s.current && m.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      h = !1, window.clearInterval(y);
    };
  }, [g]), /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ o.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ o.jsx("div", { className: `dialogo-icono${d ? " error" : ""}`, children: d ? "!" : g ? /* @__PURE__ */ o.jsx(Km, { size: 26 }) : /* @__PURE__ */ o.jsx(Gd, { size: 26 }) }),
    /* @__PURE__ */ o.jsx("h3", { children: n(d ? "No se pudo actualizar" : g ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
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
        i != null && !g ? ` · ${i}%` : ""
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
function oi(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function vh({
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
  onEasterEgg: g,
  onAyuda: h,
  onReportar: y
}) {
  var et, ue, ye;
  const m = Je(), j = al(), [b, B] = w.useState([]), [u, f] = w.useState(0), [p, x] = w.useState(null), [N, E] = w.useState(!1), [S, P] = w.useState(""), [k, v] = w.useState(!1), C = w.useRef(!1), I = w.useRef([]);
  w.useEffect(() => {
    fetch("/api/funmsgs").then((q) => q.ok ? q.json() : { msgs: [] }).then((q) => B(q.msgs ?? [])).catch(() => {
    });
  }, []), w.useEffect(() => {
    let q = !0;
    return D.version().then((ze) => {
      q && (x(ze), !ze.comprobado && !C.current && (C.current = !0, D.checkVersion().then((be) => q && x(be)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      q = !1;
    };
  }, []);
  const W = ((et = p == null ? void 0 : p.actualizacion) == null ? void 0 : et.estado) === "descargando" || ((ue = p == null ? void 0 : p.actualizacion) == null ? void 0 : ue.estado) === "instalando" || ((ye = p == null ? void 0 : p.actualizacion) == null ? void 0 : ye.estado) === "reiniciando";
  w.useEffect(() => {
    if (!W) return;
    const q = setInterval(() => {
      D.version().then(x).catch(() => {
      });
    }, 700);
    return () => clearInterval(q);
  }, [W]);
  const G = a || !!(e && !e.done);
  w.useEffect(() => {
    if (!G) return;
    const q = setInterval(() => f((ze) => ze + 1), 1200);
    return () => clearInterval(q);
  }, [G]);
  const ne = b.length ? b : [
    m("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], re = w.useMemo(() => {
    if (S) return S;
    if (W) {
      const q = p == null ? void 0 : p.actualizacion;
      if ((q == null ? void 0 : q.estado) === "instalando") return m("Instalando y reiniciando…");
      const ze = (q == null ? void 0 : q.progreso) != null ? Math.round(q.progreso) : null;
      return ze != null ? m("Descargando… {p}%", { p: ze }) : (q == null ? void 0 : q.mensaje) || m("Descargando actualización…");
    }
    return G ? ne[u % ne.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? m("Listo") : m("Listo para empezar");
  }, [S, W, G, e, ne, u, n, m, p]), Ce = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), R = G && !e, U = w.useMemo(() => {
    const q = e == null ? void 0 : e.eta_s;
    return !G || q === void 0 || q === null || q <= 0.5 ? "" : (e == null || e.tope_s, m(" · ~{x} restante", { x: oi(q) }));
  }, [e == null ? void 0 : e.eta_s, G, m]), O = w.useMemo(() => !r || !r.segundos ? "" : oi(r.segundos), [r]), z = async () => {
    E(!0), P("");
    try {
      const q = await D.checkVersion();
      x(q), q.error ? P(m("Sin conexión")) : q.hay_nueva || P(m("Estás en la última versión"));
    } catch {
      P(m("Sin conexión"));
    } finally {
      E(!1);
    }
  }, Q = async () => {
    P("");
    try {
      const q = await D.updateVersion();
      q.ok ? v(!0) : q.modo === "dev" && q.url ? (P(m("Modo desarrollo: se actualiza con git")), await D.openReleases().catch(() => {
      })) : P(q.mensaje || m("No se pudo actualizar")), D.version().then(x).catch(() => {
      });
    } catch {
      P(m("No se pudo actualizar"));
    }
  }, Se = !!(p != null && p.hay_nueva && !G && !W) ? m("Nueva versión {v} disponible", { v: (p == null ? void 0 : p.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    k && /* @__PURE__ */ o.jsx(
      gh,
      {
        ver: p,
        onCerrar: () => v(!1)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: D.iconUrl(),
            alt: "CryCat",
            "data-testid": "brand-icon",
            title: m("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const q = Date.now();
              I.current = [...I.current, q].filter((ze) => q - ze < 2500), I.current.length >= 5 && (I.current = [], P(m("¡Fiesta Pikmin!")), window.setTimeout(() => P(""), 4e3), g == null || g());
            }
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "nombre", children: "CryCat" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !G && (() => {
          const q = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), ze = n.placed || 1, be = Math.min(80, Math.max(
            30,
            48 + 22 * q - Math.min(18, ze * 0.08)
          )), Oe = n.efficiency * 100, yt = Oe >= be ? "buena" : Oe >= be * 0.72 ? "normal" : "baja";
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
                "data-tip": m("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: ze, e: Math.round(be) }),
                children: [
                  /* @__PURE__ */ o.jsxs("b", { children: [
                    Math.round(Oe),
                    "%"
                  ] }),
                  /* @__PURE__ */ o.jsx("span", { children: m("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !G) && /* @__PURE__ */ o.jsx("span", { className: "msg", children: re }),
        G && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `progress${R ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, Ce)}%` } })
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? m("Tiempo máximo de este cálculo: {y}", { y: oi(e.tope_s) }) : void 0,
              children: [
                Ce,
                "%",
                U
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
              onError: (q) => {
                q.currentTarget.style.display = "none";
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
              /* @__PURE__ */ o.jsx(Jm, { size: 15 }),
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
              /* @__PURE__ */ o.jsx(Vd, { size: 15 }),
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
              /* @__PURE__ */ o.jsx(Zm, { size: 15 }),
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
            onClick: () => window.open((p == null ? void 0 : p.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ o.jsx(Qm, { size: 15 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: m("Idioma"),
            onClick: () => d == null ? void 0 : d(j === "es" ? "en" : "es"),
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
              (p == null ? void 0 : p.hay_nueva) && !W && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: Se || m("Hay una versión nueva"),
                  onClick: Q,
                  children: /* @__PURE__ */ o.jsx(Ym, { size: 14 })
                }
              ),
              "v",
              (p == null ? void 0 : p.actual) ?? "—",
              (p == null ? void 0 : p.hay_nueva) && (p == null ? void 0 : p.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
                "v",
                p.ultima
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini",
                  "data-testid": "btn-comprobar",
                  title: m("Comprobar versiones"),
                  onClick: z,
                  disabled: N,
                  children: N ? "…" : /* @__PURE__ */ o.jsx(Xm, { size: 14 })
                }
              ),
              (p == null ? void 0 : p.hay_nueva) && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: m("Descargar e instalar la nueva versión"),
                  onClick: Q,
                  children: /* @__PURE__ */ o.jsx(Gd, { size: 14 })
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
              O || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const yh = [
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
], xh = "/pikmin_bloom/", Sc = "/pikmin/alma.png", wh = "/sonidos/pikmin.mp3", jh = "/sonidos/pikmin_morir.mp3";
function kh(e) {
  const [t, n] = w.useState(yh), [r, a] = w.useState([]);
  return w.useEffect(() => {
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
      a(s.slice(0, 60).map((c) => St(xh + c)));
    }).catch(() => {
    });
  }, []), w.useMemo(
    () => e && e.length ? [...e, ...r].map(St) : [...t, ...r].map(St),
    [e, t, r]
  );
}
function Ch({
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
  const g = kh(d), [h, y] = w.useState([]), m = w.useRef(void 0), j = w.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), b = w.useRef(s);
  b.current = s;
  const B = Math.max(5e3, t * 6e4), u = (N) => {
    if (!(!n || i))
      try {
        const E = new Audio(St(N ? jh : wh));
        E.volume = Math.min(1, Math.max(0, a)), E.play().catch(() => {
        });
      } catch {
      }
  }, f = () => {
    const N = r && Math.random() < 0.1, E = N ? St(Sc) : g[Math.floor(Math.random() * g.length)] ?? St(Sc);
    y((S) => [...S, {
      src: E,
      left: 3 + Math.random() * 92,
      key: Date.now() + S.length,
      morir: N,
      estado: "paseando"
    }]), u(N);
  }, p = () => {
    if (!e) return;
    const N = c ?? Math.round(B * 0.5), E = l ?? Math.round(B * 1.5), S = N + Math.random() * Math.max(1, E - N);
    m.current = window.setTimeout(f, S);
  };
  w.useEffect(() => {
    e && s && f();
  }, [s]), w.useEffect(() => {
    if (!e) {
      window.clearTimeout(m.current), y([]);
      return;
    }
    return p(), () => window.clearTimeout(m.current);
  }, [e, t, n, r, a, i, g]), w.useEffect(() => {
    const N = () => {
      j.current = document.visibilityState === "hidden", !j.current && b.current && window.setTimeout(() => {
        y((E) => E.length ? (u(!1), E.map((S) => ({ ...S, estado: "festejando" }))) : E), window.setTimeout(() => {
          y([]), p();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, []);
  const x = (N) => {
    if (b.current && j.current) {
      y((E) => E.map((S) => S.key === N ? { ...S, estado: "quieto" } : S));
      return;
    }
    y((E) => E.filter((S) => S.key !== N)), p();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: h.map((N) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${N.estado}${N.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": N.estado,
      "data-morir": N.morir ? "1" : "0",
      style: { left: `${N.left}%` },
      onAnimationEnd: () => x(N.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: N.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => x(N.key)
        }
      )
    },
    N.key
  )) });
}
const _c = "crycat_bienvenida_v2";
function Sh() {
  const [e, t] = w.useState(!1);
  return w.useEffect(() => {
    try {
      localStorage.getItem(_c) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(_c, "1");
    } catch {
    }
    t(!1);
  } };
}
function _h({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Je(), [a, i] = w.useState("inicio");
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
      /* @__PURE__ */ o.jsx(jc, { size: 18 }),
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
      /* @__PURE__ */ o.jsx(Ud, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ o.jsx(Dr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ o.jsx(jc, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ o.jsx(Wm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ o.jsx(rs, { size: 18 }),
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
  ], d = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: d[a] }),
    a === "cricut" ? /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((g, h) => /* @__PURE__ */ o.jsx("li", { children: g }, h)) }) : /* @__PURE__ */ o.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : c).map(([g, h, y], m) => /* @__PURE__ */ o.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ o.jsx("span", { className: "ayuda-icono", children: g }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-titulo", children: h }),
        /* @__PURE__ */ o.jsx("div", { className: "ayuda-texto", children: y })
      ] })
    ] }, m)) }),
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
const Nh = "https://github.com/dhernandezgit/CryCat-Tool", Eh = "daniel.hernandez@pixelabs.es", zh = [
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
function bh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const i = Je(), [s, c] = w.useState(""), [l, d] = w.useState(""), [g, h] = w.useState(""), [y, m] = w.useState(!0), [j, b] = w.useState(!0), [B, u] = w.useState(!0), [f, p] = w.useState(!1);
  w.useEffect(() => {
    e && (D.version().then((C) => c(C.actual)).catch(() => {
    }), p(!1));
  }, [e]);
  const x = () => (globalThis.__crycatErrores ?? []).map(
    (I) => `- [${I.t}] ${I.msg} (${I.donde || "?"})`
  );
  if (!e) return null;
  const N = () => {
    var G, ne;
    const C = navigator.userAgent, I = !!globalThis.__crycatBase, W = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${I ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${C}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((G = window.screen) == null ? void 0 : G.width) ?? "?"}x${((ne = window.screen) == null ? void 0 : ne.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && W.push(`- Elementos: ${a.pages} página(s)`), r && W.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), W.join(`
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
  ].map((I) => `- ${I}: ${String(n[I])}`).join(`
`) : "", S = () => {
    const C = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    y && C.push("### Entorno", N(), ""), j && n && C.push("### Ajustes", E(), "");
    const I = x();
    return B && I.length && C.push("### Errores recogidos", I.join(`
`), ""), C.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), C.join(`
`);
  }, P = () => `[CryCat] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, k = () => {
    const C = `mailto:${Eh}?` + new URLSearchParams({
      subject: P(),
      body: S().slice(0, 1800)
    }).toString();
    window.location.href = C, t();
  }, v = () => {
    const C = `${Nh}/issues/new?` + new URLSearchParams({
      title: P(),
      body: S(),
      labels: "bug"
    }).toString();
    window.open(C, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni login). También puedes copiarlo o abrirlo en GitHub si prefieres.") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: zh.map(([C, I]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${C}`,
        onClick: () => d((W) => (W ? W + `
` : "") + I),
        children: i(C)
      },
      C
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
          onChange: (C) => d(C.target.value)
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
          onChange: (C) => h(C.target.value)
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
          onChange: (C) => m(C.target.checked)
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
          onChange: (C) => b(C.target.checked)
        }
      ),
      i("Incluir mis ajustes actuales")
    ] }),
    x().length > 0 && /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: B,
          onChange: (C) => u(C.target.checked)
        }
      ),
      i(
        "Incluir los {n} errores recogidos de la consola",
        { n: x().length }
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

${S()}`
              ), p(!0);
            } catch {
            }
          },
          children: i(f ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "reportar-github",
          title: i("Abrir en GitHub (necesita cuenta)"),
          onClick: v,
          children: i("GitHub")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "reportar-enviar",
          onClick: k,
          children: i("Enviar por email")
        }
      )
    ] })
  ] }) });
}
function Ph() {
  const [e, t] = w.useState([]), [n, r] = w.useState(null), [a, i] = w.useState(null), [s, c] = w.useState(null), [l, d] = w.useState(null), [g, h] = w.useState(null), [y, m] = w.useState(!0), [j, b] = w.useState(!1), [B, u] = w.useState(!1), [f, p] = w.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [x, N] = w.useState(33.3), [E, S] = w.useState(33.3), P = Sh(), k = w.useRef(null), v = w.useRef(null);
  w.useEffect(() => {
    (async () => {
      try {
        const T = await D.getSettings();
        d(T.settings), yc(T.settings.tema), p((F) => ({
          ...F,
          guidesVisible: T.settings.ver_guias,
          eyeTransparent: T.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: T.settings.ver_contornos !== !1,
          contornoModo: T.settings.contorno_modo ?? "final"
        })), t((await D.listAssets()).map(na)), i(await D.result());
      } catch {
        m(!1);
      }
    })();
  }, []);
  const [C, I] = w.useState("");
  w.useEffect(() => {
    const T = (F) => I(String(F.detail || ""));
    return window.addEventListener("crycat:seleccion", T), () => window.removeEventListener("crycat:seleccion", T);
  }, []), w.useEffect(() => {
    const T = (F) => {
      const V = F.detail;
      N(V ? 19 : 33.3), S(V ? 62 : 33.3), p((Z) => ({ ...Z, hojaGirada: V }));
    };
    return window.addEventListener("crycat:disposicion", T), () => window.removeEventListener("crycat:disposicion", T);
  }, []), w.useEffect(() => {
    const T = setInterval(async () => {
      try {
        await D.health(), m(!0);
      } catch {
        m(!1);
      }
    }, 5e3);
    return () => clearInterval(T);
  }, []);
  const W = w.useRef(!0), G = w.useCallback(async () => {
    try {
      t((await D.listAssets()).map(na)), i(await D.result());
      try {
        c(await D.estimate());
      } catch {
      }
    } catch {
      m(!1);
    } finally {
      W.current = !1;
    }
  }, []), ne = w.useCallback((T) => {
    v.current && window.clearInterval(v.current), v.current = window.setInterval(async () => {
      try {
        const F = await D.job(T);
        h(F), F.done && (window.clearInterval(v.current), v.current = null, await G(), F.status === "done" && window.setTimeout(() => h(null), 2500));
      } catch {
        window.clearInterval(v.current), v.current = null;
      }
    }, 300);
  }, []), re = w.useCallback(async () => {
    u(!0), await new Promise((T) => setTimeout(T, 60));
    try {
      const T = await D.optimize();
      h(T), ne(T.id);
    } catch {
      m(!1);
    } finally {
      u(!1);
    }
  }, [ne]), Ce = w.useCallback(
    async (T) => {
      u(!0), await new Promise((F) => setTimeout(F, 60));
      try {
        const F = await D.optimize(T, !0);
        h(F), ne(F.id);
      } catch {
        m(!1);
      } finally {
        u(!1);
      }
    },
    [ne]
  ), R = w.useCallback(() => {
    l && l.auto_recalcular === !1 || (k.current && window.clearTimeout(k.current), k.current = window.setTimeout(re, 400));
  }, [re, l]), U = w.useRef(null);
  w.useEffect(() => {
    U.current = R;
  }, [R]), w.useEffect(() => {
    const T = (F) => {
      const V = F.detail;
      h((Z) => ({
        ...Z ?? {
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
    return window.addEventListener("crycat:progreso", T), () => window.removeEventListener("crycat:progreso", T);
  }, []);
  const O = w.useRef(!1);
  w.useEffect(() => {
    if (!(!l || O.current)) {
      if (e.length > 0) {
        O.current = !0;
        return;
      }
      O.current = !0, D.crearDemo().then(async (T) => {
        T.ok && await G();
      }).catch(() => {
      });
    }
  }, [l, e.length, G]);
  const z = w.useCallback(
    async (T) => {
      d((F) => F && { ...F, ...T }), T.tema && yc(T.tema);
      try {
        const F = await D.putSettings(T);
        if (F.job)
          h(F.job), ne(F.job.id);
        else
          try {
            c(await D.estimate());
          } catch {
          }
      } catch {
        m(!1);
      }
    },
    [ne]
  ), [Q, Ze] = w.useState([]), Se = w.useCallback((T, F) => {
    Ze((V) => F ? V.includes(T) ? V.filter((Z) => Z !== T) : [...V, T] : V.length === 1 && V[0] === T ? [] : [T]);
  }, []), et = w.useCallback(async (T, F) => {
    for (const V of T)
      await D.patchAsset(V, F).catch(() => {
      });
    await G();
  }, [G]), ue = w.useRef([]), ye = w.useRef([]), [q, ze] = w.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), be = (l == null ? void 0 : l.historial) !== !1, Oe = (l == null ? void 0 : l.historial_max) ?? 40, yt = w.useRef(!1), xt = w.useRef(""), Ft = w.useRef({ assets: [], result: null, settings: null }), qt = w.useCallback((T, F, V) => JSON.stringify({
    a: T.map((Z) => [
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
    r: F ? [F.pages, F.placements.map((Z) => [
      Z.uid,
      Z.page,
      Math.round(Z.x * 100),
      Math.round(Z.y * 100),
      Z.angle,
      Z.pinned
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
  }), []), Pn = () => ze({
    puedeDeshacer: ue.current.length > 0,
    puedeRehacer: ye.current.length > 0
  }), pr = w.useCallback(() => {
    const T = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && T.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && T.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && T.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && T.push("mini_enabled", "mini_quota"), T;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]);
  w.useCallback((T) => {
    const F = {};
    for (const V of pr()) F[V] = T[V];
    return F;
  }, [pr]);
  const tt = w.useCallback(() => {
    be && (ue.current = [
      ...ue.current,
      { assets: e, result: a, settings: l }
    ].slice(-Oe), ye.current = [], xt.current = qt(e, a, l), Pn());
  }, [e, a, l, be, Oe, qt]);
  w.useEffect(() => {
    if (!be || W.current) return;
    const T = qt(e, a, l);
    if (yt.current) {
      xt.current = T, yt.current = !1;
      return;
    }
    if (!xt.current) {
      if (e.length === 0 && !a) return;
      xt.current = T;
      return;
    }
    T !== xt.current && (ue.current = [...ue.current, Ft.current].slice(-Oe), ye.current = [], xt.current = T, Pn());
  }, [e, a, l, be, Oe, qt]), w.useEffect(() => {
    Ft.current = { assets: e, result: a, settings: l };
  }, [e, a, l]);
  const Mn = w.useCallback(async (T) => {
    yt.current = !0, t(T.assets), T.settings && (d(T.settings), await D.putSettings(T.settings).catch(() => {
    }));
    for (const F of T.assets)
      await D.patchAsset(F.id, {
        scale_pct: F.scale_pct,
        copies: F.copies,
        mini_enabled: F.mini_enabled,
        mini_quota: F.mini_quota,
        offset_mm: F.offset_mm,
        offset_modo: F.offset_modo,
        offset_color: F.offset_color
      }).catch(() => {
      });
    if (T.result) {
      await D.restoreResult(T.result).catch(() => {
      }), i(T.result);
      try {
        c(await D.estimate());
      } catch {
      }
    } else
      await G();
    Pn();
  }, [G]), fr = w.useCallback(async () => {
    const T = ue.current.pop();
    T && (ye.current = [...ye.current, { assets: e, result: a, settings: l }], await Mn(T));
  }, [e, a, Mn]), Bt = w.useCallback(async () => {
    const T = ye.current.pop();
    T && (ue.current = [...ue.current, { assets: e, result: a, settings: l }], await Mn(T));
  }, [e, a, Mn]);
  w.useEffect(() => {
    const T = (F) => {
      if (!(F.ctrlKey || F.metaKey)) return;
      const Z = F.target;
      if (Z && (Z.tagName === "INPUT" || Z.tagName === "TEXTAREA" || Z.tagName === "SELECT" || Z.isContentEditable)) return;
      const Ut = F.key.toLowerCase();
      Ut === "z" && !F.shiftKey ? (F.preventDefault(), fr()) : (Ut === "y" || Ut === "z" && F.shiftKey) && (F.preventDefault(), Bt());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [fr, Bt]);
  const mr = w.useCallback(
    (T) => {
      const F = (Z) => {
        const hr = window.innerWidth, Ut = Z.clientX / hr * 100;
        T === "left" ? N(Math.min(45, Math.max(12, Ut))) : S(Math.min(60, Math.max(20, Ut - x)));
      }, V = () => {
        window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", V);
      };
      window.addEventListener("mousemove", F), window.addEventListener("mouseup", V);
    },
    [x]
  );
  return w.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ o.jsx(Am, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${x}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        ah,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await G(), R();
          },
          saveSettings: z,
          onEditarContorno: (T) => r(T),
          onAntesDeCambiar: tt,
          seleccion: Q,
          onSeleccion: Se,
          onBulk: et,
          verBordes: f.verBordes,
          contornoModo: f.contornoModo ?? "final",
          destacado: C
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => mr("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${E}%` }, children: /* @__PURE__ */ o.jsx(
        ih,
        {
          assets: e,
          result: a,
          settings: l,
          ui: f,
          setUi: p,
          saveSettings: z,
          optimize: re,
          onRefresh: G,
          onJob: (T) => {
            h(T), ne(T.id);
          },
          onRecalc: Ce,
          editando: n,
          onFinEdicion: async () => {
            r(null), await G();
          },
          onDeshacer: fr,
          onRehacer: Bt,
          puedeDeshacer: q.puedeDeshacer,
          puedeRehacer: q.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => mr("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        hh,
        {
          settings: l,
          assets: e,
          saveSettings: z
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      vh,
      {
        job: g,
        backendOk: y,
        result: a,
        estimate: s,
        optimizando: B,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (T) => z({ volumen: T }),
        onMute: (T) => z({ mute: T }),
        onIdioma: (T) => z({ idioma: T }),
        onEasterEgg: () => z({
          pikmin_activo: !0,
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: P.abrir,
        onReportar: () => b(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ch,
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
      _h,
      {
        open: P.visible,
        onClose: P.cerrar,
        onAbrirCarpeta: () => void D.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      bh,
      {
        open: j,
        onClose: () => b(!1),
        settings: l,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: Im("es", "Cargando CryCat…") });
}
const Mh = "1790747851014", Wd = document.getElementById("root"), ii = [
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
], is = 8, Ba = [];
globalThis.__crycatErrores = Ba;
const Qd = (e, t) => {
  Ba.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Ba.length > 12 && Ba.shift();
};
window.addEventListener("error", (e) => Qd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Qd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let ss;
function si(e, t = !1) {
  window.clearTimeout(ss);
  const n = Fd().colors;
  if (Wd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + is}</div>
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
    a(), ss = window.setTimeout(
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
    r && (r.textContent = `Paso ${t} de ${is}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / is * 100)}%`);
  }
};
let In = null, Yd = !1, Th = 0;
const ls = /* @__PURE__ */ new Map();
function Kd(e) {
  return new Promise((t) => {
    const n = ++Th;
    ls.set(n, t), In.postMessage({ ...e, id: n });
  });
}
const cs = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Lh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Rh(e) {
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
    cs(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Ah(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((g, h) => {
    s[h] = g;
  });
  let c = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [g, h] = await Rh(l);
    c = g, s["content-type"] = h;
  } else l instanceof Blob ? c = cs(await l.arrayBuffer()) : typeof l == "string" && (c = cs(new TextEncoder().encode(l).buffer));
  const d = await Kd({
    tipo: "api",
    method: e,
    path: i,
    headers: JSON.stringify(s),
    body: c
  });
  return d && d.error ? new Response("error: " + d.error, { status: 500 }) : new Response(Lh(d.body), {
    status: d.status || 200,
    headers: d.headers || { "content-type": "application/json" }
  });
}
function Ih() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && Yd)
      try {
        return await Ah(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function $h() {
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
      `worker-crycat.js?v=${Mh}`,
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
        const r = ls.get(n.id);
        ls.delete(n.id), r && r(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && si("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (r) => {
        r.data && r.data.tipo === "listo" && (In.removeEventListener("message", n), t());
      };
      In.addEventListener("message", n), In.postMessage({ tipo: "iniciar" });
    }), Yd = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const r = t.ports && t.ports[0];
      if (r)
        try {
          const a = await Kd({
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
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Ih();
    try {
      const t = Fd().key;
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
    li("Abriendo la aplicación…", 8), window.clearTimeout(ss), Dd(Wd).render(/* @__PURE__ */ o.jsx(Ph, {}));
  } catch (e) {
    si("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
$h();
