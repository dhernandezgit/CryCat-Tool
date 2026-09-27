var au = { exports: {} }, Ka = {}, ou = { exports: {} }, q = {};
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
var iu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, su = Object.assign, lu = {};
function Yn(e, t, n) {
  this.props = e, this.context = t, this.refs = lu, this.updater = n || iu;
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uu() {
}
uu.prototype = Yn.prototype;
function Bi(e, t, n) {
  this.props = e, this.context = t, this.refs = lu, this.updater = n || iu;
}
var Ui = Bi.prototype = new uu();
Ui.constructor = Bi;
su(Ui, Yn.prototype);
Ui.isPureReactComponent = !0;
var Bs = Array.isArray, cu = Object.prototype.hasOwnProperty, qi = { current: null }, du = { key: !0, ref: !0, __self: !0, __source: !0 };
function pu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) cu.call(t, r) && !du.hasOwnProperty(r) && (a[r] = t[r]);
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
function ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xd("" + e.key) : t.toString(36);
}
function pa(e, t, n, r, a) {
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
  if (s) return s = e, a = a(s), e = r === "" ? "." + ho(s, 0) : r, Bs(a) ? (n = "", e != null && (n = e.replace(Us, "$&/") + "/"), pa(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Vi(a) && (a = Jd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Us, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Bs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + ho(o, u);
    s += pa(o, t, n, l, a);
  }
  else if (l = Kd(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + ho(o, u++), s += pa(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Qr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return pa(e, r, "", "", function(o) {
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
var Me = { current: null }, fa = { transition: null }, ep = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: fa, ReactCurrentOwner: qi };
function fu() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Qr, forEach: function(e, t, n) {
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
q.Component = Yn;
q.Fragment = Bd;
q.Profiler = qd;
q.PureComponent = Bi;
q.StrictMode = Ud;
q.Suspense = Wd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
q.act = fu;
q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = su({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = qi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) cu.call(t, l) && !du.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
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
q.createContext = function(e) {
  return e = { $$typeof: Gd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vd, _context: e }, e.Consumer = e;
};
q.createElement = pu;
q.createFactory = function(e) {
  var t = pu.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Hd, render: e };
};
q.isValidElement = Vi;
q.lazy = function(e) {
  return { $$typeof: Yd, _payload: { _status: -1, _result: e }, _init: Zd };
};
q.memo = function(e, t) {
  return { $$typeof: Qd, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = fa.transition;
  fa.transition = {};
  try {
    e();
  } finally {
    fa.transition = t;
  }
};
q.unstable_act = fu;
q.useCallback = function(e, t) {
  return Me.current.useCallback(e, t);
};
q.useContext = function(e) {
  return Me.current.useContext(e);
};
q.useDebugValue = function() {
};
q.useDeferredValue = function(e) {
  return Me.current.useDeferredValue(e);
};
q.useEffect = function(e, t) {
  return Me.current.useEffect(e, t);
};
q.useId = function() {
  return Me.current.useId();
};
q.useImperativeHandle = function(e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function(e, t) {
  return Me.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function(e, t) {
  return Me.current.useLayoutEffect(e, t);
};
q.useMemo = function(e, t) {
  return Me.current.useMemo(e, t);
};
q.useReducer = function(e, t, n) {
  return Me.current.useReducer(e, t, n);
};
q.useRef = function(e) {
  return Me.current.useRef(e);
};
q.useState = function(e) {
  return Me.current.useState(e);
};
q.useSyncExternalStore = function(e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function() {
  return Me.current.useTransition();
};
q.version = "18.3.1";
ou.exports = q;
var w = ou.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp = w, np = Symbol.for("react.element"), rp = Symbol.for("react.fragment"), ap = Object.prototype.hasOwnProperty, op = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function mu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ap.call(t, r) && !ip.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: np, type: e, key: o, ref: s, props: a, _owner: op.current };
}
Ka.Fragment = rp;
Ka.jsx = mu;
Ka.jsxs = mu;
au.exports = Ka;
var i = au.exports, hu = { exports: {} }, Ve = {}, gu = { exports: {} }, vu = {};
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
  function t(M, F) {
    var U = M.length;
    M.push(F);
    e: for (; 0 < U; ) {
      var Q = U - 1 >>> 1, K = M[Q];
      if (0 < a(K, F)) M[Q] = F, M[U] = K, U = Q;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var F = M[0], U = M.pop();
    if (U !== F) {
      M[0] = U;
      e: for (var Q = 0, K = M.length, $ = K >>> 1; Q < $; ) {
        var J = 2 * (Q + 1) - 1, pe = M[J], ye = J + 1, Re = M[ye];
        if (0 > a(pe, U)) ye < K && 0 > a(Re, pe) ? (M[Q] = Re, M[ye] = U, Q = ye) : (M[Q] = pe, M[J] = U, Q = J);
        else if (ye < K && 0 > a(Re, U)) M[Q] = Re, M[ye] = U, Q = ye;
        else break e;
      }
    }
    return F;
  }
  function a(M, F) {
    var U = M.sortIndex - F.sortIndex;
    return U !== 0 ? U : M.id - F.id;
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
  var l = [], d = [], g = 1, v = null, p = 3, k = !1, C = !1, y = !1, O = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var F = n(d); F !== null; ) {
      if (F.callback === null) r(d);
      else if (F.startTime <= M) r(d), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = n(d);
    }
  }
  function h(M) {
    if (y = !1, m(M), !C) if (n(l) !== null) C = !0, ve(x);
    else {
      var F = n(d);
      F !== null && Le(h, F.startTime - M);
    }
  }
  function x(M, F) {
    C = !1, y && (y = !1, f(P), P = -1), k = !0;
    var U = p;
    try {
      for (m(F), v = n(l); v !== null && (!(v.expirationTime > F) || M && !T()); ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          v.callback = null, p = v.priorityLevel;
          var K = Q(v.expirationTime <= F);
          F = e.unstable_now(), typeof K == "function" ? v.callback = K : v === n(l) && r(l), m(F);
        } else r(l);
        v = n(l);
      }
      if (v !== null) var $ = !0;
      else {
        var J = n(d);
        J !== null && Le(h, J.startTime - F), $ = !1;
      }
      return $;
    } finally {
      v = null, p = U, k = !1;
    }
  }
  var S = !1, _ = null, P = -1, j = 5, N = -1;
  function T() {
    return !(e.unstable_now() - N < j);
  }
  function b() {
    if (_ !== null) {
      var M = e.unstable_now();
      N = M;
      var F = !0;
      try {
        F = _(!0, M);
      } finally {
        F ? G() : (S = !1, _ = null);
      }
    } else S = !1;
  }
  var G;
  if (typeof c == "function") G = function() {
    c(b);
  };
  else if (typeof MessageChannel < "u") {
    var ke = new MessageChannel(), He = ke.port2;
    ke.port1.onmessage = b, G = function() {
      He.postMessage(null);
    };
  } else G = function() {
    O(b, 0);
  };
  function ve(M) {
    _ = M, S || (S = !0, G());
  }
  function Le(M, F) {
    P = O(function() {
      M(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    C || k || (C = !0, ve(x));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(M) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = p;
    }
    var U = p;
    p = F;
    try {
      return M();
    } finally {
      p = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, F) {
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
    var U = p;
    p = M;
    try {
      return F();
    } finally {
      p = U;
    }
  }, e.unstable_scheduleCallback = function(M, F, U) {
    var Q = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? Q + U : Q) : U = Q, M) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = U + K, M = { id: g++, callback: F, priorityLevel: M, startTime: U, expirationTime: K, sortIndex: -1 }, U > Q ? (M.sortIndex = U, t(d, M), n(l) === null && M === n(d) && (y ? (f(P), P = -1) : y = !0, Le(h, U - Q))) : (M.sortIndex = K, t(l, M), C || k || (C = !0, ve(x))), M;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(M) {
    var F = p;
    return function() {
      var U = p;
      p = F;
      try {
        return M.apply(this, arguments);
      } finally {
        p = U;
      }
    };
  };
})(vu);
gu.exports = vu;
var sp = gu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp = w, qe = sp;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yu = /* @__PURE__ */ new Set(), jr = {};
function yn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) yu.add(t[e]);
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Uo = Object.prototype.hasOwnProperty, up = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qs = {}, Vs = {};
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
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  je[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  je[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  je[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  je[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  je[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  je[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  je[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  je[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  je[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  je[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gi, Hi);
  je[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gi, Hi);
  je[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  je[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  je[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var a = je.hasOwnProperty(t) ? je[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pp(t, n, a, r) && (n = null), r || a === null ? cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), Cn = Symbol.for("react.portal"), _n = Symbol.for("react.fragment"), Qi = Symbol.for("react.strict_mode"), qo = Symbol.for("react.profiler"), xu = Symbol.for("react.provider"), wu = Symbol.for("react.context"), Yi = Symbol.for("react.forward_ref"), Vo = Symbol.for("react.suspense"), Go = Symbol.for("react.suspense_list"), Ki = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), ju = Symbol.for("react.offscreen"), Gs = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != "object" ? null : (e = Gs && e[Gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var se = Object.assign, go;
function ir(e) {
  if (go === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    go = t && t[1] || "";
  }
  return `
` + go + e;
}
var vo = !1;
function yo(e, t) {
  if (!e || vo) return "";
  vo = !0;
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
    vo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
}
function fp(e) {
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
      return e = yo(e.type, !1), e;
    case 11:
      return e = yo(e.type.render, !1), e;
    case 1:
      return e = yo(e.type, !0), e;
    default:
      return "";
  }
}
function Ho(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _n:
      return "Fragment";
    case Cn:
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
function ku(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hp(e) {
  var t = ku(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ku(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _a(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wo(e, t) {
  var n = t.checked;
  return se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Hs(e, t) {
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
function Ws(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Yo(e, t, n) {
  (t !== "number" || _a(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var sr = Array.isArray;
function In(e, t, n, r) {
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
  return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Qs(e, t) {
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
function Ys(e) {
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
function kr(e, t) {
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
}, gp = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
  gp.forEach(function(t) {
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
var vp = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xo(e, t) {
  if (t) {
    if (vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
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
var ti = null, Dn = null, $n = null;
function Ks(e) {
  if (e = Gr(e)) {
    if (typeof ti != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = to(t), ti(e.stateNode, e.type, t));
  }
}
function bu(e) {
  Dn ? $n ? $n.push(e) : $n = [e] : Dn = e;
}
function Mu() {
  if (Dn) {
    var e = Dn, t = $n;
    if ($n = Dn = null, Ks(e), t) for (e = 0; e < t.length; e++) Ks(t[e]);
  }
}
function Tu(e, t) {
  return e(t);
}
function Lu() {
}
var xo = !1;
function Ru(e, t, n) {
  if (xo) return e(t, n);
  xo = !0;
  try {
    return Tu(e, t, n);
  } finally {
    xo = !1, (Dn !== null || $n !== null) && (Lu(), Mu());
  }
}
function Sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = to(n);
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
if (Pt) try {
  var Zn = {};
  Object.defineProperty(Zn, "passive", { get: function() {
    ni = !0;
  } }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
} catch {
  ni = !1;
}
function yp(e, t, n, r, a, o, s, u, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var dr = !1, Na = null, Ea = !1, ri = null, xp = { onError: function(e) {
  dr = !0, Na = e;
} };
function wp(e, t, n, r, a, o, s, u, l) {
  dr = !1, Na = null, yp.apply(xp, arguments);
}
function jp(e, t, n, r, a, o, s, u, l) {
  if (wp.apply(this, arguments), dr) {
    if (dr) {
      var d = Na;
      dr = !1, Na = null;
    } else throw Error(E(198));
    Ea || (Ea = !0, ri = d);
  }
}
function xn(e) {
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
function Js(e) {
  if (xn(e) !== e) throw Error(E(188));
}
function kp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = xn(e), t === null) throw Error(E(188));
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
      throw Error(E(188));
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
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Iu(e) {
  return e = kp(e), e !== null ? Du(e) : null;
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
var $u = qe.unstable_scheduleCallback, Xs = qe.unstable_cancelCallback, Sp = qe.unstable_shouldYield, Cp = qe.unstable_requestPaint, ce = qe.unstable_now, _p = qe.unstable_getCurrentPriorityLevel, Xi = qe.unstable_ImmediatePriority, Ou = qe.unstable_UserBlockingPriority, za = qe.unstable_NormalPriority, Np = qe.unstable_LowPriority, Fu = qe.unstable_IdlePriority, Ja = null, yt = null;
function Ep(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function") try {
    yt.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ut = Math.clz32 ? Math.clz32 : bp, zp = Math.log, Pp = Math.LN2;
function bp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Pp | 0) | 0;
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
function Pa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~a;
    u !== 0 ? r = lr(u) : (o &= s, o !== 0 && (r = lr(o)));
  } else s = n & ~a, s !== 0 ? r = lr(s) : o !== 0 && (r = lr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ut(t), a = 1 << n, r |= e[n], t &= ~a;
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
    var s = 31 - ut(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Mp(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ai(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Bu() {
  var e = Xr;
  return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e;
}
function wo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
}
function Lp(e, t) {
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
var Y = 0;
function Uu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qu, es, Vu, Gu, Hu, oi = !1, ea = [], Vt = null, Gt = null, Ht = null, Cr = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), Ot = [], Rp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zs(e, t) {
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
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function er(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Gr(t), t !== null && es(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Ap(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Vt = er(Vt, e, t, n, r, a), !0;
    case "dragenter":
      return Gt = er(Gt, e, t, n, r, a), !0;
    case "mouseover":
      return Ht = er(Ht, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Cr.set(o, er(Cr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, _r.set(o, er(_r.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Wu(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = xn(t);
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
function ma(e) {
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
  ma(e) && n.delete(t);
}
function Ip() {
  oi = !1, Vt !== null && ma(Vt) && (Vt = null), Gt !== null && ma(Gt) && (Gt = null), Ht !== null && ma(Ht) && (Ht = null), Cr.forEach(el), _r.forEach(el);
}
function tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, oi || (oi = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Ip)));
}
function Nr(e) {
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
  for (Vt !== null && tr(Vt, e), Gt !== null && tr(Gt, e), Ht !== null && tr(Ht, e), Cr.forEach(t), _r.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null); ) Wu(n), n.blockedOn === null && Ot.shift();
}
var On = Lt.ReactCurrentBatchConfig, ba = !0;
function Dp(e, t, n, r) {
  var a = Y, o = On.transition;
  On.transition = null;
  try {
    Y = 1, ts(e, t, n, r);
  } finally {
    Y = a, On.transition = o;
  }
}
function $p(e, t, n, r) {
  var a = Y, o = On.transition;
  On.transition = null;
  try {
    Y = 4, ts(e, t, n, r);
  } finally {
    Y = a, On.transition = o;
  }
}
function ts(e, t, n, r) {
  if (ba) {
    var a = ii(e, t, n, r);
    if (a === null) bo(e, t, r, Ma, n), Zs(e, r);
    else if (Ap(a, e, t, n, r)) r.stopPropagation();
    else if (Zs(e, r), t & 4 && -1 < Rp.indexOf(e)) {
      for (; a !== null; ) {
        var o = Gr(a);
        if (o !== null && qu(o), o = ii(e, t, n, r), o === null && bo(e, t, r, Ma, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else bo(e, t, r, null, n);
  }
}
var Ma = null;
function ii(e, t, n, r) {
  if (Ma = null, e = Ji(r), e = sn(e), e !== null) if (t = xn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Au(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ma = e, null;
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
      switch (_p()) {
        case Xi:
          return 1;
        case Ou:
          return 4;
        case za:
        case Np:
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
var Ut = null, ns = null, ha = null;
function Yu() {
  if (ha) return ha;
  var e, t = ns, n = t.length, r, a = "value" in Ut ? Ut.value : Ut.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return ha = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ga(e) {
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
  return se(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ta);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ta);
  }, persist: function() {
  }, isPersistent: ta }), t;
}
var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, rs = Ge(Kn), Vr = se({}, Kn, { view: 0, detail: 0 }), Op = Ge(Vr), jo, ko, nr, Xa = se({}, Vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: as, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (jo = e.screenX - nr.screenX, ko = e.screenY - nr.screenY) : ko = jo = 0, nr = e), jo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ko;
} }), nl = Ge(Xa), Fp = se({}, Xa, { dataTransfer: 0 }), Bp = Ge(Fp), Up = se({}, Vr, { relatedTarget: 0 }), So = Ge(Up), qp = se({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = Ge(qp), Gp = se({}, Kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Hp = Ge(Gp), Wp = se({}, Kn, { data: 0 }), rl = Ge(Wp), Qp = {
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
var Xp = se({}, Vr, { key: function(e) {
  if (e.key) {
    var t = Qp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ga(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: as, charCode: function(e) {
  return e.type === "keypress" ? ga(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ga(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Zp = Ge(Xp), ef = se({}, Xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), al = Ge(ef), tf = se({}, Vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: as }), nf = Ge(tf), rf = se({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), af = Ge(rf), of = se({}, Xa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), sf = Ge(of), lf = [9, 13, 27, 32], os = Pt && "CompositionEvent" in window, pr = null;
Pt && "documentMode" in document && (pr = document.documentMode);
var uf = Pt && "TextEvent" in window && !pr, Ku = Pt && (!os || pr && 8 < pr && 11 >= pr), ol = " ", il = !1;
function Ju(e, t) {
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
function Xu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Nn = !1;
function cf(e, t) {
  switch (e) {
    case "compositionend":
      return Xu(t);
    case "keypress":
      return t.which !== 32 ? null : (il = !0, ol);
    case "textInput":
      return e = t.data, e === ol && il ? null : e;
    default:
      return null;
  }
}
function df(e, t) {
  if (Nn) return e === "compositionend" || !os && Ju(e, t) ? (e = Yu(), ha = ns = Ut = null, Nn = !1, e) : null;
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
var pf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pf[e.type] : t === "textarea";
}
function Zu(e, t, n, r) {
  bu(r), t = Ta(t, "onChange"), 0 < t.length && (n = new rs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fr = null, Er = null;
function ff(e) {
  cc(e, 0);
}
function Za(e) {
  var t = Pn(e);
  if (Su(t)) return e;
}
function mf(e, t) {
  if (e === "change") return t;
}
var ec = !1;
if (Pt) {
  var Co;
  if (Pt) {
    var _o = "oninput" in document;
    if (!_o) {
      var ll = document.createElement("div");
      ll.setAttribute("oninput", "return;"), _o = typeof ll.oninput == "function";
    }
    Co = _o;
  } else Co = !1;
  ec = Co && (!document.documentMode || 9 < document.documentMode);
}
function ul() {
  fr && (fr.detachEvent("onpropertychange", tc), Er = fr = null);
}
function tc(e) {
  if (e.propertyName === "value" && Za(Er)) {
    var t = [];
    Zu(t, Er, e, Ji(e)), Ru(ff, t);
  }
}
function hf(e, t, n) {
  e === "focusin" ? (ul(), fr = t, Er = n, fr.attachEvent("onpropertychange", tc)) : e === "focusout" && ul();
}
function gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Za(Er);
}
function vf(e, t) {
  if (e === "click") return Za(t);
}
function yf(e, t) {
  if (e === "input" || e === "change") return Za(t);
}
function xf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dt = typeof Object.is == "function" ? Object.is : xf;
function zr(e, t) {
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
function nc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rc() {
  for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _a(e.document);
  }
  return t;
}
function is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function wf(e) {
  var t = rc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nc(n.ownerDocument.documentElement, n)) {
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
var jf = Pt && "documentMode" in document && 11 >= document.documentMode, En = null, si = null, mr = null, li = !1;
function pl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li || En == null || En !== _a(r) || (r = En, "selectionStart" in r && is(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && zr(mr, r) || (mr = r, r = Ta(si, "onSelect"), 0 < r.length && (t = new rs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = En)));
}
function na(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var zn = { animationend: na("Animation", "AnimationEnd"), animationiteration: na("Animation", "AnimationIteration"), animationstart: na("Animation", "AnimationStart"), transitionend: na("Transition", "TransitionEnd") }, No = {}, ac = {};
Pt && (ac = document.createElement("div").style, "AnimationEvent" in window || (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation), "TransitionEvent" in window || delete zn.transitionend.transition);
function eo(e) {
  if (No[e]) return No[e];
  if (!zn[e]) return e;
  var t = zn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ac) return No[e] = t[n];
  return e;
}
var oc = eo("animationend"), ic = eo("animationiteration"), sc = eo("animationstart"), lc = eo("transitionend"), uc = /* @__PURE__ */ new Map(), fl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
  uc.set(e, t), yn(t, [e]);
}
for (var Eo = 0; Eo < fl.length; Eo++) {
  var zo = fl[Eo], kf = zo.toLowerCase(), Sf = zo[0].toUpperCase() + zo.slice(1);
  en(kf, "on" + Sf);
}
en(oc, "onAnimationEnd");
en(ic, "onAnimationIteration");
en(sc, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(lc, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function ml(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, jp(r, t, void 0, e), e.currentTarget = null;
}
function cc(e, t) {
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
  if (Ea) throw e = ri, Ea = !1, ri = null, e;
}
function ee(e, t) {
  var n = t[fi];
  n === void 0 && (n = t[fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dc(t, e, 2, !1), n.add(r));
}
function Po(e, t, n) {
  var r = 0;
  t && (r |= 4), dc(n, e, r, t);
}
var ra = "_reactListening" + Math.random().toString(36).slice(2);
function Pr(e) {
  if (!e[ra]) {
    e[ra] = !0, yu.forEach(function(n) {
      n !== "selectionchange" && (Cf.has(n) || Po(n, !1, e), Po(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ra] || (t[ra] = !0, Po("selectionchange", !1, t));
  }
}
function dc(e, t, n, r) {
  switch (Qu(t)) {
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
function bo(e, t, n, r, a) {
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
  Ru(function() {
    var d = o, g = Ji(n), v = [];
    e: {
      var p = uc.get(e);
      if (p !== void 0) {
        var k = rs, C = e;
        switch (e) {
          case "keypress":
            if (ga(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Zp;
            break;
          case "focusin":
            C = "focus", k = So;
            break;
          case "focusout":
            C = "blur", k = So;
            break;
          case "beforeblur":
          case "afterblur":
            k = So;
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
            k = nl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = nf;
            break;
          case oc:
          case ic:
          case sc:
            k = Vp;
            break;
          case lc:
            k = af;
            break;
          case "scroll":
            k = Op;
            break;
          case "wheel":
            k = sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Hp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = al;
        }
        var y = (t & 4) !== 0, O = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = d, m; c !== null; ) {
          m = c;
          var h = m.stateNode;
          if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Sr(c, f), h != null && y.push(br(c, h, m)))), O) break;
          c = c.return;
        }
        0 < y.length && (p = new k(p, C, null, n, g), v.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== ei && (C = n.relatedTarget || n.fromElement) && (sn(C) || C[bt])) break e;
        if ((k || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (C = n.relatedTarget || n.toElement, k = d, C = C ? sn(C) : null, C !== null && (O = xn(C), C !== O || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = d), k !== C)) {
          if (y = nl, h = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = al, h = "onPointerLeave", f = "onPointerEnter", c = "pointer"), O = k == null ? p : Pn(k), m = C == null ? p : Pn(C), p = new y(h, c + "leave", k, n, g), p.target = O, p.relatedTarget = m, h = null, sn(g) === d && (y = new y(f, c + "enter", C, n, g), y.target = m, y.relatedTarget = O, h = y), O = h, k && C) t: {
            for (y = k, f = C, c = 0, m = y; m; m = Sn(m)) c++;
            for (m = 0, h = f; h; h = Sn(h)) m++;
            for (; 0 < c - m; ) y = Sn(y), c--;
            for (; 0 < m - c; ) f = Sn(f), m--;
            for (; c--; ) {
              if (y === f || f !== null && y === f.alternate) break t;
              y = Sn(y), f = Sn(f);
            }
            y = null;
          }
          else y = null;
          k !== null && hl(v, p, k, y, !1), C !== null && O !== null && hl(v, O, C, y, !0);
        }
      }
      e: {
        if (p = d ? Pn(d) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var x = mf;
        else if (sl(p)) if (ec) x = yf;
        else {
          x = gf;
          var S = hf;
        }
        else (k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = vf);
        if (x && (x = x(e, d))) {
          Zu(v, x, n, g);
          break e;
        }
        S && S(e, p, d), e === "focusout" && (S = p._wrapperState) && S.controlled && p.type === "number" && Yo(p, "number", p.value);
      }
      switch (S = d ? Pn(d) : window, e) {
        case "focusin":
          (sl(S) || S.contentEditable === "true") && (En = S, si = d, mr = null);
          break;
        case "focusout":
          mr = si = En = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          li = !1, pl(v, n, g);
          break;
        case "selectionchange":
          if (jf) break;
        case "keydown":
        case "keyup":
          pl(v, n, g);
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
      else Nn ? Ju(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ku && n.locale !== "ko" && (Nn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Nn && (_ = Yu()) : (Ut = g, ns = "value" in Ut ? Ut.value : Ut.textContent, Nn = !0)), S = Ta(d, P), 0 < S.length && (P = new rl(P, e, null, n, g), v.push({ event: P, listeners: S }), _ ? P.data = _ : (_ = Xu(n), _ !== null && (P.data = _)))), (_ = uf ? cf(e, n) : df(e, n)) && (d = Ta(d, "onBeforeInput"), 0 < d.length && (g = new rl("onBeforeInput", "beforeinput", null, n, g), v.push({ event: g, listeners: d }), g.data = _));
    }
    cc(v, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ta(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Sr(e, n), o != null && r.unshift(br(e, o, a)), o = Sr(e, t), o != null && r.push(br(e, o, a))), e = e.return;
  }
  return r;
}
function Sn(e) {
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
  if (t = gl(t), gl(e) !== t && n) throw Error(E(425));
}
function La() {
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
function Mo(e, t) {
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
var Jn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + Jn, Mr = "__reactProps$" + Jn, bt = "__reactContainer$" + Jn, fi = "__reactEvents$" + Jn, bf = "__reactListeners$" + Jn, Mf = "__reactHandles$" + Jn;
function sn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[bt] || n[gt]) {
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
  return e = e[gt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function to(e) {
  return e[Mr] || null;
}
var mi = [], bn = -1;
function tn(e) {
  return { current: e };
}
function te(e) {
  0 > bn || (e.current = mi[bn], mi[bn] = null, bn--);
}
function Z(e, t) {
  bn++, mi[bn] = e.current, e.current = t;
}
var Zt = {}, Ee = tn(Zt), De = tn(!1), fn = Zt;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function $e(e) {
  return e = e.childContextTypes, e != null;
}
function Ra() {
  te(De), te(Ee);
}
function xl(e, t, n) {
  if (Ee.current !== Zt) throw Error(E(168));
  Z(Ee, t), Z(De, n);
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, mp(e) || "Unknown", a));
  return se({}, n, r);
}
function Aa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, fn = Ee.current, Z(Ee, e), Z(De, De.current), !0;
}
function wl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = pc(e, t, fn), r.__reactInternalMemoizedMergedChildContext = e, te(De), te(Ee), Z(Ee, e)) : te(De), Z(De, n);
}
var _t = null, no = !1, To = !1;
function fc(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function Tf(e) {
  no = !0, fc(e);
}
function nn() {
  if (!To && _t !== null) {
    To = !0;
    var e = 0, t = Y;
    try {
      var n = _t;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, no = !1;
    } catch (a) {
      throw _t !== null && (_t = _t.slice(e + 1)), $u(Xi, nn), a;
    } finally {
      Y = t, To = !1;
    }
  }
  return null;
}
var Mn = [], Tn = 0, Ia = null, Da = 0, Qe = [], Ye = 0, mn = null, Nt = 1, Et = "";
function an(e, t) {
  Mn[Tn++] = Da, Mn[Tn++] = Ia, Ia = e, Da = t;
}
function mc(e, t, n) {
  Qe[Ye++] = Nt, Qe[Ye++] = Et, Qe[Ye++] = mn, mn = e;
  var r = Nt;
  e = Et;
  var a = 32 - ut(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ut(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Nt = 1 << 32 - ut(t) + a | n << a | r, Et = o + e;
  } else Nt = 1 << o | n << a | r, Et = e;
}
function ss(e) {
  e.return !== null && (an(e, 1), mc(e, 1, 0));
}
function ls(e) {
  for (; e === Ia; ) Ia = Mn[--Tn], Mn[Tn] = null, Da = Mn[--Tn], Mn[Tn] = null;
  for (; e === mn; ) mn = Qe[--Ye], Qe[Ye] = null, Et = Qe[--Ye], Qe[Ye] = null, Nt = Qe[--Ye], Qe[Ye] = null;
}
var Ue = null, Be = null, re = !1, lt = null;
function hc(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function jl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mn !== null ? { id: Nt, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Be = null, !0) : !1;
    default:
      return !1;
  }
}
function hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gi(e) {
  if (re) {
    var t = Be;
    if (t) {
      var n = t;
      if (!jl(e, t)) {
        if (hi(e)) throw Error(E(418));
        t = Wt(n.nextSibling);
        var r = Ue;
        t && jl(e, t) ? hc(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Ue = e);
      }
    } else {
      if (hi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, re = !1, Ue = e;
    }
  }
}
function kl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function oa(e) {
  if (e !== Ue) return !1;
  if (!re) return kl(e), re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !di(e.type, e.memoizedProps)), t && (t = Be)) {
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
              Be = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Ue ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function gc() {
  for (var e = Be; e; ) e = Wt(e.nextSibling);
}
function Vn() {
  Be = Ue = null, re = !1;
}
function us(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var Lf = Lt.ReactCurrentBatchConfig;
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
        var u = a.refs;
        s === null ? delete u[o] : u[o] = s;
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
function Sl(e) {
  var t = e._init;
  return t(e._payload);
}
function vc(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? (f.deletions = [c], f.flags |= 16) : m.push(c);
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
    return f = Jt(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < c ? (f.flags |= 2, c) : m) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, m, h) {
    return c === null || c.tag !== 6 ? (c = Oo(m, f.mode, h), c.return = f, c) : (c = a(c, m), c.return = f, c);
  }
  function l(f, c, m, h) {
    var x = m.type;
    return x === _n ? g(f, c, m.props.children, h, m.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Dt && Sl(x) === c.type) ? (h = a(c, m.props), h.ref = rr(f, c, m), h.return = f, h) : (h = Sa(m.type, m.key, m.props, null, f.mode, h), h.ref = rr(f, c, m), h.return = f, h);
  }
  function d(f, c, m, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Fo(m, f.mode, h), c.return = f, c) : (c = a(c, m.children || []), c.return = f, c);
  }
  function g(f, c, m, h, x) {
    return c === null || c.tag !== 7 ? (c = dn(m, f.mode, h, x), c.return = f, c) : (c = a(c, m), c.return = f, c);
  }
  function v(f, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Oo("" + c, f.mode, m), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Yr:
          return m = Sa(c.type, c.key, c.props, null, f.mode, m), m.ref = rr(f, null, c), m.return = f, m;
        case Cn:
          return c = Fo(c, f.mode, m), c.return = f, c;
        case Dt:
          var h = c._init;
          return v(f, h(c._payload), m);
      }
      if (sr(c) || Xn(c)) return c = dn(c, f.mode, m, null), c.return = f, c;
      ia(f, c);
    }
    return null;
  }
  function p(f, c, m, h) {
    var x = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return x !== null ? null : u(f, c, "" + m, h);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Yr:
          return m.key === x ? l(f, c, m, h) : null;
        case Cn:
          return m.key === x ? d(f, c, m, h) : null;
        case Dt:
          return x = m._init, p(
            f,
            c,
            x(m._payload),
            h
          );
      }
      if (sr(m) || Xn(m)) return x !== null ? null : g(f, c, m, h, null);
      ia(f, m);
    }
    return null;
  }
  function k(f, c, m, h, x) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return f = f.get(m) || null, u(c, f, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Yr:
          return f = f.get(h.key === null ? m : h.key) || null, l(c, f, h, x);
        case Cn:
          return f = f.get(h.key === null ? m : h.key) || null, d(c, f, h, x);
        case Dt:
          var S = h._init;
          return k(f, c, m, S(h._payload), x);
      }
      if (sr(h) || Xn(h)) return f = f.get(m) || null, g(c, f, h, x, null);
      ia(c, h);
    }
    return null;
  }
  function C(f, c, m, h) {
    for (var x = null, S = null, _ = c, P = c = 0, j = null; _ !== null && P < m.length; P++) {
      _.index > P ? (j = _, _ = null) : j = _.sibling;
      var N = p(f, _, m[P], h);
      if (N === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && N.alternate === null && t(f, _), c = o(N, c, P), S === null ? x = N : S.sibling = N, S = N, _ = j;
    }
    if (P === m.length) return n(f, _), re && an(f, P), x;
    if (_ === null) {
      for (; P < m.length; P++) _ = v(f, m[P], h), _ !== null && (c = o(_, c, P), S === null ? x = _ : S.sibling = _, S = _);
      return re && an(f, P), x;
    }
    for (_ = r(f, _); P < m.length; P++) j = k(_, f, P, m[P], h), j !== null && (e && j.alternate !== null && _.delete(j.key === null ? P : j.key), c = o(j, c, P), S === null ? x = j : S.sibling = j, S = j);
    return e && _.forEach(function(T) {
      return t(f, T);
    }), re && an(f, P), x;
  }
  function y(f, c, m, h) {
    var x = Xn(m);
    if (typeof x != "function") throw Error(E(150));
    if (m = x.call(m), m == null) throw Error(E(151));
    for (var S = x = null, _ = c, P = c = 0, j = null, N = m.next(); _ !== null && !N.done; P++, N = m.next()) {
      _.index > P ? (j = _, _ = null) : j = _.sibling;
      var T = p(f, _, N.value, h);
      if (T === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && T.alternate === null && t(f, _), c = o(T, c, P), S === null ? x = T : S.sibling = T, S = T, _ = j;
    }
    if (N.done) return n(
      f,
      _
    ), re && an(f, P), x;
    if (_ === null) {
      for (; !N.done; P++, N = m.next()) N = v(f, N.value, h), N !== null && (c = o(N, c, P), S === null ? x = N : S.sibling = N, S = N);
      return re && an(f, P), x;
    }
    for (_ = r(f, _); !N.done; P++, N = m.next()) N = k(_, f, P, N.value, h), N !== null && (e && N.alternate !== null && _.delete(N.key === null ? P : N.key), c = o(N, c, P), S === null ? x = N : S.sibling = N, S = N);
    return e && _.forEach(function(b) {
      return t(f, b);
    }), re && an(f, P), x;
  }
  function O(f, c, m, h) {
    if (typeof m == "object" && m !== null && m.type === _n && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Yr:
          e: {
            for (var x = m.key, S = c; S !== null; ) {
              if (S.key === x) {
                if (x = m.type, x === _n) {
                  if (S.tag === 7) {
                    n(f, S.sibling), c = a(S, m.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (S.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Dt && Sl(x) === S.type) {
                  n(f, S.sibling), c = a(S, m.props), c.ref = rr(f, S, m), c.return = f, f = c;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            m.type === _n ? (c = dn(m.props.children, f.mode, h, m.key), c.return = f, f = c) : (h = Sa(m.type, m.key, m.props, null, f.mode, h), h.ref = rr(f, c, m), h.return = f, f = h);
          }
          return s(f);
        case Cn:
          e: {
            for (S = m.key; c !== null; ) {
              if (c.key === S) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                n(f, c.sibling), c = a(c, m.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = Fo(m, f.mode, h), c.return = f, f = c;
          }
          return s(f);
        case Dt:
          return S = m._init, O(f, c, S(m._payload), h);
      }
      if (sr(m)) return C(f, c, m, h);
      if (Xn(m)) return y(f, c, m, h);
      ia(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(f, c.sibling), c = a(c, m), c.return = f, f = c) : (n(f, c), c = Oo(m, f.mode, h), c.return = f, f = c), s(f)) : n(f, c);
  }
  return O;
}
var Gn = vc(!0), yc = vc(!1), $a = tn(null), Oa = null, Ln = null, cs = null;
function ds() {
  cs = Ln = Oa = null;
}
function ps(e) {
  var t = $a.current;
  te($a), e._currentValue = t;
}
function vi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Fn(e, t) {
  Oa = e, cs = Ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Xe(e) {
  var t = e._currentValue;
  if (cs !== e) if (e = { context: e, memoizedValue: t, next: null }, Ln === null) {
    if (Oa === null) throw Error(E(308));
    Ln = e, Oa.dependencies = { lanes: 0, firstContext: e };
  } else Ln = Ln.next = e;
  return t;
}
var ln = null;
function fs(e) {
  ln === null ? ln = [e] : ln.push(e);
}
function xc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, fs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
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
function zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Mt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, fs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Mt(e, n);
}
function va(e, t, n) {
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
function Fa(e, t, n, r) {
  var a = e.updateQueue;
  $t = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, d = l.next;
    l.next = null, s === null ? o = d : s.next = d, s = l;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== s && (u === null ? g.firstBaseUpdate = d : u.next = d, g.lastBaseUpdate = l));
  }
  if (o !== null) {
    var v = a.baseState;
    s = 0, g = d = l = null, u = o;
    do {
      var p = u.lane, k = u.eventTime;
      if ((r & p) === p) {
        g !== null && (g = g.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, y = u;
          switch (p = t, k = n, y.tag) {
            case 1:
              if (C = y.payload, typeof C == "function") {
                v = C.call(k, v, p);
                break e;
              }
              v = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = y.payload, p = typeof C == "function" ? C.call(k, v, p) : C, p == null) break e;
              v = se({}, v, p);
              break e;
            case 2:
              $t = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [u] : p.push(u));
      } else k = { eventTime: k, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (d = g = k, l = v) : g = g.next = k, s |= p;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (l = v), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    gn |= s, e.lanes = s, e.memoizedState = v;
  }
}
function _l(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var Hr = {}, xt = tn(Hr), Tr = tn(Hr), Lr = tn(Hr);
function un(e) {
  if (e === Hr) throw Error(E(174));
  return e;
}
function hs(e, t) {
  switch (Z(Lr, t), Z(Tr, e), Z(xt, Hr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jo(t, e);
  }
  te(xt), Z(xt, t);
}
function Hn() {
  te(xt), te(Tr), te(Lr);
}
function jc(e) {
  un(Lr.current);
  var t = un(xt.current), n = Jo(t, e.type);
  t !== n && (Z(Tr, e), Z(xt, n));
}
function gs(e) {
  Tr.current === e && (te(xt), te(Tr));
}
var oe = tn(0);
function Ba(e) {
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
var Lo = [];
function vs() {
  for (var e = 0; e < Lo.length; e++) Lo[e]._workInProgressVersionPrimary = null;
  Lo.length = 0;
}
var ya = Lt.ReactCurrentDispatcher, Ro = Lt.ReactCurrentBatchConfig, hn = 0, ie = null, fe = null, he = null, Ua = !1, hr = !1, Rr = 0, Rf = 0;
function Ce() {
  throw Error(E(321));
}
function ys(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
  return !0;
}
function xs(e, t, n, r, a, o) {
  if (hn = o, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ya.current = e === null || e.memoizedState === null ? $f : Of, e = n(r, a), hr) {
    o = 0;
    do {
      if (hr = !1, Rr = 0, 25 <= o) throw Error(E(301));
      o += 1, he = fe = null, t.updateQueue = null, ya.current = Ff, e = n(r, a);
    } while (hr);
  }
  if (ya.current = qa, t = fe !== null && fe.next !== null, hn = 0, he = fe = ie = null, Ua = !1, t) throw Error(E(300));
  return e;
}
function ws() {
  var e = Rr !== 0;
  return Rr = 0, e;
}
function ht() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return he === null ? ie.memoizedState = he = e : he = he.next = e, he;
}
function Ze() {
  if (fe === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = he === null ? ie.memoizedState : he.next;
  if (t !== null) he = t, fe = e;
  else {
    if (e === null) throw Error(E(310));
    fe = e, e = { memoizedState: fe.memoizedState, baseState: fe.baseState, baseQueue: fe.baseQueue, queue: fe.queue, next: null }, he === null ? ie.memoizedState = he = e : he = he.next = e;
  }
  return he;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ao(e) {
  var t = Ze(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = fe, a = r.baseQueue, o = n.pending;
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
      var g = d.lane;
      if ((hn & g) === g) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (u = l = v, s = r) : l = l.next = v, ie.lanes |= g, gn |= g;
      }
      d = d.next;
    } while (d !== null && d !== o);
    l === null ? s = r : l.next = u, dt(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ie.lanes |= o, gn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Io(e) {
  var t = Ze(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    dt(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function kc() {
}
function Sc(e, t) {
  var n = ie, r = Ze(), a = t(), o = !dt(r.memoizedState, a);
  if (o && (r.memoizedState = a, Ie = !0), r = r.queue, js(Nc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ir(9, _c.bind(null, n, r, a, t), void 0, null), ge === null) throw Error(E(349));
    hn & 30 || Cc(n, t, a);
  }
  return a;
}
function Cc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
  var t = Mt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Nl(e) {
  var t = ht();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = Df.bind(null, ie, e), [t.memoizedState, e];
}
function Ir(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pc() {
  return Ze().memoizedState;
}
function xa(e, t, n, r) {
  var a = ht();
  ie.flags |= e, a.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r);
}
function ro(e, t, n, r) {
  var a = Ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var s = fe.memoizedState;
    if (o = s.destroy, r !== null && ys(r, s.deps)) {
      a.memoizedState = Ir(t, n, o, r);
      return;
    }
  }
  ie.flags |= e, a.memoizedState = Ir(1 | t, n, o, r);
}
function El(e, t) {
  return xa(8390656, 8, e, t);
}
function js(e, t) {
  return ro(2048, 8, e, t);
}
function bc(e, t) {
  return ro(4, 2, e, t);
}
function Mc(e, t) {
  return ro(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, ro(4, 4, Tc.bind(null, t, e), n);
}
function ks() {
}
function Rc(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ac(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ic(e, t, n) {
  return hn & 21 ? (dt(n, t) || (n = Bu(), ie.lanes |= n, gn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function Af(e, t) {
  var n = Y;
  Y = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ro.transition;
  Ro.transition = {};
  try {
    e(!1), t();
  } finally {
    Y = n, Ro.transition = r;
  }
}
function Dc() {
  return Ze().memoizedState;
}
function If(e, t, n) {
  var r = Kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $c(e)) Oc(t, n);
  else if (n = xc(e, t, n, r), n !== null) {
    var a = be();
    ct(n, e, r, a), Fc(n, t, r);
  }
}
function Df(e, t, n) {
  var r = Kt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($c(e)) Oc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, dt(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, fs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
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
  return e === ie || t !== null && t === ie;
}
function Oc(e, t) {
  hr = Ua = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
  }
}
var qa = { readContext: Xe, useCallback: Ce, useContext: Ce, useEffect: Ce, useImperativeHandle: Ce, useInsertionEffect: Ce, useLayoutEffect: Ce, useMemo: Ce, useReducer: Ce, useRef: Ce, useState: Ce, useDebugValue: Ce, useDeferredValue: Ce, useTransition: Ce, useMutableSource: Ce, useSyncExternalStore: Ce, useId: Ce, unstable_isNewReconciler: !1 }, $f = { readContext: Xe, useCallback: function(e, t) {
  return ht().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xe, useEffect: El, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xa(
    4194308,
    4,
    Tc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return xa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return xa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ht();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ht();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = If.bind(null, ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ht();
  return e = { current: e }, t.memoizedState = e;
}, useState: Nl, useDebugValue: ks, useDeferredValue: function(e) {
  return ht().memoizedState = e;
}, useTransition: function() {
  var e = Nl(!1), t = e[0];
  return e = Af.bind(null, e[1]), ht().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ie, a = ht();
  if (re) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), ge === null) throw Error(E(349));
    hn & 30 || Cc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, El(Nc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Ir(9, _c.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ht(), t = ge.identifierPrefix;
  if (re) {
    var n = Et, r = Nt;
    n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Of = {
  readContext: Xe,
  useCallback: Rc,
  useContext: Xe,
  useEffect: js,
  useImperativeHandle: Lc,
  useInsertionEffect: bc,
  useLayoutEffect: Mc,
  useMemo: Ac,
  useReducer: Ao,
  useRef: Pc,
  useState: function() {
    return Ao(Ar);
  },
  useDebugValue: ks,
  useDeferredValue: function(e) {
    var t = Ze();
    return Ic(t, fe.memoizedState, e);
  },
  useTransition: function() {
    var e = Ao(Ar)[0], t = Ze().memoizedState;
    return [e, t];
  },
  useMutableSource: kc,
  useSyncExternalStore: Sc,
  useId: Dc,
  unstable_isNewReconciler: !1
}, Ff = { readContext: Xe, useCallback: Rc, useContext: Xe, useEffect: js, useImperativeHandle: Lc, useInsertionEffect: bc, useLayoutEffect: Mc, useMemo: Ac, useReducer: Io, useRef: Pc, useState: function() {
  return Io(Ar);
}, useDebugValue: ks, useDeferredValue: function(e) {
  var t = Ze();
  return fe === null ? t.memoizedState = e : Ic(t, fe.memoizedState, e);
}, useTransition: function() {
  var e = Io(Ar)[0], t = Ze().memoizedState;
  return [e, t];
}, useMutableSource: kc, useSyncExternalStore: Sc, useId: Dc, unstable_isNewReconciler: !1 };
function it(e, t) {
  if (e && e.defaultProps) {
    t = se({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ao = { isMounted: function(e) {
  return (e = e._reactInternals) ? xn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Kt(e), o = zt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (ct(t, e, a, r), va(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Kt(e), o = zt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (ct(t, e, a, r), va(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = Kt(e), a = zt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Qt(e, a, r), t !== null && (ct(t, e, r, n), va(t, e, r));
} };
function zl(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(a, o) : !0;
}
function Bc(e, t, n) {
  var r = !1, a = Zt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Xe(o) : (a = $e(t) ? fn : Ee.current, r = t.contextTypes, o = (r = r != null) ? qn(e, a) : Zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ao, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Pl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ao.enqueueReplaceState(t, t.state, null);
}
function xi(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Xe(o) : (o = $e(t) ? fn : Ee.current, a.context = qn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (yi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ao.enqueueReplaceState(a, a.state, null), Fa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wn(e, t) {
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
function Do(e, t, n) {
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
function Uc(e, t, n) {
  n = zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ga || (Ga = !0, bi = r), wi(e, t);
  }, n;
}
function qc(e, t, n) {
  n = zt(-1, n), n.tag = 3;
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Uf = Lt.ReactCurrentOwner, Ie = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? yc(t, null, n, r) : Gn(t, e.child, n, r);
}
function Ll(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Fn(t, a), r = xs(e, t, n, r, o, a), n = ws(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Tt(e, t, a)) : (re && n && ss(t), t.flags |= 1, Pe(e, t, r, a), t.child);
}
function Rl(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !bs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Vc(e, t, o, r, a)) : (e = Sa(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zr, n(s, r) && e.ref === t.ref) return Tt(e, t, a);
  }
  return t.flags |= 1, e = Jt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, Tt(e, t, a);
  }
  return ji(e, t, n, r, a);
}
function Gc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(An, Fe), Fe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Z(An, Fe), Fe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Z(An, Fe), Fe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Z(An, Fe), Fe |= r;
  return Pe(e, t, a, n), t.child;
}
function Hc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ji(e, t, n, r, a) {
  var o = $e(n) ? fn : Ee.current;
  return o = qn(t, o), Fn(t, a), n = xs(e, t, n, r, o, a), r = ws(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Tt(e, t, a)) : (re && r && ss(t), t.flags |= 1, Pe(e, t, n, a), t.child);
}
function Al(e, t, n, r, a) {
  if ($e(n)) {
    var o = !0;
    Aa(t);
  } else o = !1;
  if (Fn(t, a), t.stateNode === null) wa(e, t), Bc(t, n, r), xi(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Xe(d) : (d = $e(n) ? fn : Ee.current, d = qn(t, d));
    var g = n.getDerivedStateFromProps, v = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    v || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== d) && Pl(t, s, r, d), $t = !1;
    var p = t.memoizedState;
    s.state = p, Fa(t, r, s, a), l = t.memoizedState, u !== r || p !== l || De.current || $t ? (typeof g == "function" && (yi(t, n, g, r), l = t.memoizedState), (u = $t || zl(t, n, u, r, p, l, d)) ? (v || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, wc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : it(t.type, u), s.props = d, v = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Xe(l) : (l = $e(n) ? fn : Ee.current, l = qn(t, l));
    var k = n.getDerivedStateFromProps;
    (g = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== v || p !== l) && Pl(t, s, r, l), $t = !1, p = t.memoizedState, s.state = p, Fa(t, r, s, a);
    var C = t.memoizedState;
    u !== v || p !== C || De.current || $t ? (typeof k == "function" && (yi(t, n, k, r), C = t.memoizedState), (d = $t || zl(t, n, d, r, p, C, l) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, C, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, C, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), s.props = r, s.state = C, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ki(e, t, n, r, o, a);
}
function ki(e, t, n, r, a, o) {
  Hc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && wl(t, n, !1), Tt(e, t, o);
  r = t.stateNode, Uf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Gn(t, e.child, null, o), t.child = Gn(t, null, u, o)) : Pe(e, t, u, o), t.memoizedState = r.state, a && wl(t, n, !0), t.child;
}
function Wc(e) {
  var t = e.stateNode;
  t.pendingContext ? xl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xl(e, t.context, !1), hs(e, t.containerInfo);
}
function Il(e, t, n, r, a) {
  return Vn(), us(a), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qc(e, t, n) {
  var r = t.pendingProps, a = oe.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Z(oe, a & 1), e === null)
    return gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = so(s, r, 0, null), e = dn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ci(n), t.memoizedState = Si, e) : Ss(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return qf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Jt(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Jt(u, o) : (o = dn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ci(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Si, r;
  }
  return o = e.child, e = o.sibling, r = Jt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ss(e, t) {
  return t = so({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sa(e, t, n, r) {
  return r !== null && us(r), Gn(t, e.child, null, n), e = Ss(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Do(Error(E(422))), sa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = so({ mode: "visible", children: r.children }, a, 0, null), o = dn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Gn(t, e.child, null, s), t.child.memoizedState = Ci(s), t.memoizedState = Si, o);
  if (!(t.mode & 1)) return sa(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(E(419)), r = Do(o, r, void 0), sa(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Ie || u) {
    if (r = ge, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Mt(e, a), ct(r, e, a, -1));
    }
    return Ps(), r = Do(Error(E(421))), sa(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Be = Wt(a.nextSibling), Ue = t, re = !0, lt = null, e !== null && (Qe[Ye++] = Nt, Qe[Ye++] = Et, Qe[Ye++] = mn, Nt = e.id, Et = e.overflow, mn = t), t = Ss(t, r.children), t.flags |= 4096, t);
}
function Dl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vi(e.return, t, n);
}
function $o(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Yc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Pe(e, t, r.children, n), r = oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (Z(oe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ba(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $o(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Ba(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      $o(t, !0, n, null, o);
      break;
    case "together":
      $o(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function wa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), gn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Vf(e, t, n) {
  switch (t.tag) {
    case 3:
      Wc(t), Vn();
      break;
    case 5:
      jc(t);
      break;
    case 1:
      $e(t.type) && Aa(t);
      break;
    case 4:
      hs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      Z($a, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Z(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qc(e, t, n) : (Z(oe, oe.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
      Z(oe, oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Yc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Z(oe, oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Gc(e, t, n);
  }
  return Tt(e, t, n);
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
    e = t.stateNode, un(xt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Wo(e, a), r = Wo(e, r), o = [];
        break;
      case "select":
        a = se({}, a, { value: void 0 }), r = se({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = Ko(e, a), r = Ko(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = La);
    }
    Xo(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var u = a[d];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (jr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var l = r[d];
      if (u = a != null ? a[d] : void 0, r.hasOwnProperty(d) && l !== u && (l != null || u != null)) if (d === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (jr.hasOwnProperty(d) ? (l != null && d === "onScroll" && ee("scroll", e), o || u === l || (o = [])) : (o = o || []).push(d, l));
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
  if (!re) switch (e.tailMode) {
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
function _e(e) {
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
      return _e(t), null;
    case 1:
      return $e(t.type) && Ra(), _e(t), null;
    case 3:
      return r = t.stateNode, Hn(), te(De), te(Ee), vs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (Li(lt), lt = null))), _i(e, t), _e(t), null;
    case 5:
      gs(t);
      var a = un(Lr.current);
      if (n = t.type, e !== null && t.stateNode != null) Jc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return _e(t), null;
        }
        if (e = un(xt.current), oa(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[gt] = t, r[Mr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < ur.length; a++) ee(ur[a], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee(
                "error",
                r
              ), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Hs(r, o), ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ee("invalid", r);
              break;
            case "textarea":
              Qs(r, o), ee("invalid", r);
          }
          Xo(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && aa(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && aa(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : jr.hasOwnProperty(s) && u != null && s === "onScroll" && ee("scroll", r);
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
              typeof o.onClick == "function" && (r.onclick = La);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[gt] = t, e[Mr] = r, Kc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Zo(n, r), n) {
              case "dialog":
                ee("cancel", e), ee("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < ur.length; a++) ee(ur[a], e);
                a = r;
                break;
              case "source":
                ee("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                ee(
                  "error",
                  e
                ), ee("load", e), a = r;
                break;
              case "details":
                ee("toggle", e), a = r;
                break;
              case "input":
                Hs(e, r), a = Wo(e, r), ee("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = se({}, r, { value: void 0 }), ee("invalid", e);
                break;
              case "textarea":
                Qs(e, r), a = Ko(e, r), ee("invalid", e);
                break;
              default:
                a = r;
            }
            Xo(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Pu(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Eu(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && kr(e, l) : typeof l == "number" && kr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (jr.hasOwnProperty(o) ? l != null && o === "onScroll" && ee("scroll", e) : l != null && Wi(e, o, l, s));
            }
            switch (n) {
              case "input":
                Kr(e), Ws(e, r, !1);
                break;
              case "textarea":
                Kr(e), Ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? In(e, !!r.multiple, o, !1) : r.defaultValue != null && In(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = La);
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
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Xc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = un(Lr.current), un(xt.current), oa(t)) {
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
      return _e(t), null;
    case 13:
      if (te(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (re && Be !== null && t.mode & 1 && !(t.flags & 128)) gc(), Vn(), t.flags |= 98560, o = !1;
        else if (o = oa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[gt] = t;
          } else Vn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), o = !1;
        } else lt !== null && (Li(lt), lt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || oe.current & 1 ? me === 0 && (me = 3) : Ps())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return Hn(), _i(e, t), e === null && Pr(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return ps(t.type._context), _e(t), null;
    case 17:
      return $e(t.type) && Ra(), _e(t), null;
    case 19:
      if (te(oe), o = t.memoizedState, o === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) ar(o, !1);
      else {
        if (me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ba(e), s !== null) {
            for (t.flags |= 128, ar(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Z(oe, oe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ce() > Qn && (t.flags |= 128, r = !0, ar(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ba(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ar(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !re) return _e(t), null;
        } else 2 * ce() - o.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128, r = !0, ar(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ce(), t.sibling = null, n = oe.current, Z(oe, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return zs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Fe & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Hf(e, t) {
  switch (ls(t), t.tag) {
    case 1:
      return $e(t.type) && Ra(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Hn(), te(De), te(Ee), vs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return gs(t), null;
    case 13:
      if (te(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Vn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return te(oe), null;
    case 4:
      return Hn(), null;
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
var la = !1, Ne = !1, Wf = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ue(e, t, r);
  }
  else n.current = null;
}
function Ni(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var $l = !1;
function Qf(e, t) {
  if (ui = ba, e = rc(), is(e)) {
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
        var s = 0, u = -1, l = -1, d = 0, g = 0, v = e, p = null;
        t: for (; ; ) {
          for (var k; v !== n || a !== 0 && v.nodeType !== 3 || (u = s + a), v !== o || r !== 0 && v.nodeType !== 3 || (l = s + r), v.nodeType === 3 && (s += v.nodeValue.length), (k = v.firstChild) !== null; )
            p = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (p === n && ++d === a && (u = s), p === o && ++g === r && (l = s), (k = v.nextSibling) !== null) break;
            v = p, p = v.parentNode;
          }
          v = k;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ci = { focusedElem: e, selectionRange: n }, ba = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
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
            var y = C.memoizedProps, O = C.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : it(t.type, y), O);
            f.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
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
      ue(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return C = $l, $l = !1, C;
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
function oo(e, t) {
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
  t !== null && (e.alternate = null, Zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[Mr], delete t[fi], delete t[bf], delete t[Mf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ed(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ol(e) {
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = La));
  else if (r !== 4 && (e = e.child, e !== null)) for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), e = e.sibling;
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), e = e.sibling;
}
var xe = null, st = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) td(e, t, n), n = n.sibling;
}
function td(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function") try {
    yt.onCommitFiberUnmount(Ja, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || Rn(n, t);
    case 6:
      var r = xe, a = st;
      xe = null, It(e, t, n), xe = r, st = a, xe !== null && (st ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null && (st ? (e = xe, n = n.stateNode, e.nodeType === 8 ? Mo(e.parentNode, n) : e.nodeType === 1 && Mo(e, n), Nr(e)) : Mo(xe, n.stateNode));
      break;
    case 4:
      r = xe, a = st, xe = n.stateNode.containerInfo, st = !0, It(e, t, n), xe = r, st = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ni(n, t, s), a = a.next;
        } while (a !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (!Ne && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ue(n, t, u);
      }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, It(e, t, n), Ne = r) : It(e, t, n);
      break;
    default:
      It(e, t, n);
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
function ot(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            xe = u.stateNode, st = !1;
            break e;
          case 3:
            xe = u.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            xe = u.stateNode.containerInfo, st = !0;
            break e;
        }
        u = u.return;
      }
      if (xe === null) throw Error(E(160));
      td(o, s, a), xe = null, st = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      ue(a, t, d);
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
          gr(3, e, e.return), oo(3, e);
        } catch (y) {
          ue(e, e.return, y);
        }
        try {
          gr(5, e, e.return);
        } catch (y) {
          ue(e, e.return, y);
        }
      }
      break;
    case 1:
      ot(t, e), mt(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (ot(t, e), mt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          kr(a, "");
        } catch (y) {
          ue(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Cu(a, o), Zo(u, s);
          var d = Zo(u, o);
          for (s = 0; s < l.length; s += 2) {
            var g = l[s], v = l[s + 1];
            g === "style" ? Pu(a, v) : g === "dangerouslySetInnerHTML" ? Eu(a, v) : g === "children" ? kr(a, v) : Wi(a, g, v, d);
          }
          switch (u) {
            case "input":
              Qo(a, o);
              break;
            case "textarea":
              _u(a, o);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var k = o.value;
              k != null ? In(a, !!o.multiple, k, !1) : p !== !!o.multiple && (o.defaultValue != null ? In(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : In(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Mr] = o;
        } catch (y) {
          ue(e, e.return, y);
        }
      }
      break;
    case 6:
      if (ot(t, e), mt(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (y) {
          ue(e, e.return, y);
        }
      }
      break;
    case 3:
      if (ot(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (y) {
        ue(e, e.return, y);
      }
      break;
    case 4:
      ot(t, e), mt(e);
      break;
    case 13:
      ot(t, e), mt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ns = ce())), r & 4 && Fl(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (d = Ne) || g, ot(t, e), Ne = d) : ot(t, e), mt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1) for (R = e, g = e.child; g !== null; ) {
          for (v = R = g; R !== null; ) {
            switch (p = R, k = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, p, p.return);
                break;
              case 1:
                Rn(p, p.return);
                var C = p.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (y) {
                    ue(r, n, y);
                  }
                }
                break;
              case 5:
                Rn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Ul(v);
                  continue;
                }
            }
            k !== null ? (k.return = p, R = k) : Ul(v);
          }
          g = g.sibling;
        }
        e: for (g = null, v = e; ; ) {
          if (v.tag === 5) {
            if (g === null) {
              g = v;
              try {
                a = v.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = v.stateNode, l = v.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = zu("display", s));
              } catch (y) {
                ue(e, e.return, y);
              }
            }
          } else if (v.tag === 6) {
            if (g === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (y) {
              ue(e, e.return, y);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            g === v && (g = null), v = v.return;
          }
          g === v && (g = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      ot(t, e), mt(e), r & 4 && Fl(e);
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
          r.flags & 32 && (kr(a, ""), r.flags &= -33);
          var o = Ol(e);
          Pi(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Ol(e);
          zi(e, u, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      ue(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yf(e, t, n) {
  R = e, rd(e);
}
function rd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var a = R, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || la;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || Ne;
        u = la;
        var d = Ne;
        if (la = s, (Ne = l) && !d) for (R = a; R !== null; ) s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? ql(a) : l !== null ? (l.return = s, R = l) : ql(a);
        for (; o !== null; ) R = o, rd(o), o = o.sibling;
        R = a, la = u, Ne = d;
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
            Ne || oo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
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
                var g = d.memoizedState;
                if (g !== null) {
                  var v = g.dehydrated;
                  v !== null && Nr(v);
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
        Ne || t.flags & 512 && Ei(t);
      } catch (p) {
        ue(t, t.return, p);
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
            oo(4, t);
          } catch (l) {
            ue(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ue(t, a, l);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (l) {
            ue(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ei(t);
          } catch (l) {
            ue(t, s, l);
          }
      }
    } catch (l) {
      ue(t, t.return, l);
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
var Kf = Math.ceil, Va = Lt.ReactCurrentDispatcher, Cs = Lt.ReactCurrentOwner, Je = Lt.ReactCurrentBatchConfig, H = 0, ge = null, de = null, we = 0, Fe = 0, An = tn(0), me = 0, Dr = null, gn = 0, io = 0, _s = 0, vr = null, Ae = null, Ns = 0, Qn = 1 / 0, Ct = null, Ga = !1, bi = null, Yt = null, ua = !1, qt = null, Ha = 0, yr = 0, Mi = null, ja = -1, ka = 0;
function be() {
  return H & 6 ? ce() : ja !== -1 ? ja : ja = ce();
}
function Kt(e) {
  return e.mode & 1 ? H & 2 && we !== 0 ? we & -we : Lf.transition !== null ? (ka === 0 && (ka = Bu()), ka) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qu(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < yr) throw yr = 0, Mi = null, Error(E(185));
  qr(e, n, r), (!(H & 2) || e !== ge) && (e === ge && (!(H & 2) && (io |= n), me === 4 && Ft(e, we)), Oe(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Qn = ce() + 500, no && nn()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Tp(e, t);
  var r = Pa(e, e === ge ? we : 0);
  if (r === 0) n !== null && Xs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Xs(n), t === 1) e.tag === 0 ? Tf(Vl.bind(null, e)) : fc(Vl.bind(null, e)), zf(function() {
      !(H & 6) && nn();
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
          n = za;
          break;
        case 536870912:
          n = Fu;
          break;
        default:
          n = za;
      }
      n = dd(n, ad.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ad(e, t) {
  if (ja = -1, ka = 0, H & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = Pa(e, e === ge ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wa(e, r);
  else {
    t = r;
    var a = H;
    H |= 2;
    var o = id();
    (ge !== e || we !== t) && (Ct = null, Qn = ce() + 500, cn(e, t));
    do
      try {
        Zf();
        break;
      } catch (u) {
        od(e, u);
      }
    while (!0);
    ds(), Va.current = o, H = a, de !== null ? t = 0 : (ge = null, we = 0, t = me);
  }
  if (t !== 0) {
    if (t === 2 && (a = ai(e), a !== 0 && (r = a, t = Ti(e, a))), t === 1) throw n = Dr, cn(e, 0), Ft(e, r), Oe(e, ce()), n;
    if (t === 6) Ft(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Jf(a) && (t = Wa(e, r), t === 2 && (o = ai(e), o !== 0 && (r = o, t = Ti(e, o))), t === 1)) throw n = Dr, cn(e, 0), Ft(e, r), Oe(e, ce()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          on(e, Ae, Ct);
          break;
        case 3:
          if (Ft(e, r), (r & 130023424) === r && (t = Ns + 500 - ce(), 10 < t)) {
            if (Pa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              be(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = pi(on.bind(null, e, Ae, Ct), t);
            break;
          }
          on(e, Ae, Ct);
          break;
        case 4:
          if (Ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ut(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pi(on.bind(null, e, Ae, Ct), r);
            break;
          }
          on(e, Ae, Ct);
          break;
        case 5:
          on(e, Ae, Ct);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Oe(e, ce()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function Ti(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Wa(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && Li(t)), e;
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
  for (t &= ~_s, t &= ~io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Vl(e) {
  if (H & 6) throw Error(E(327));
  Bn();
  var t = Pa(e, 0);
  if (!(t & 1)) return Oe(e, ce()), null;
  var n = Wa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && (t = r, n = Ti(e, r));
  }
  if (n === 1) throw n = Dr, cn(e, 0), Ft(e, t), Oe(e, ce()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, Ae, Ct), Oe(e, ce()), null;
}
function Es(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Qn = ce() + 500, no && nn());
  }
}
function vn(e) {
  qt !== null && qt.tag === 0 && !(H & 6) && Bn();
  var t = H;
  H |= 1;
  var n = Je.transition, r = Y;
  try {
    if (Je.transition = null, Y = 1, e) return e();
  } finally {
    Y = r, Je.transition = n, H = t, !(H & 6) && nn();
  }
}
function zs() {
  Fe = An.current, te(An);
}
function cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ef(n)), de !== null) for (n = de.return; n !== null; ) {
    var r = n;
    switch (ls(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ra();
        break;
      case 3:
        Hn(), te(De), te(Ee), vs();
        break;
      case 5:
        gs(r);
        break;
      case 4:
        Hn();
        break;
      case 13:
        te(oe);
        break;
      case 19:
        te(oe);
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
  if (ge = e, de = e = Jt(e.current, null), we = Fe = t, me = 0, Dr = null, _s = io = gn = 0, Ae = vr = null, ln !== null) {
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
function od(e, t) {
  do {
    var n = de;
    try {
      if (ds(), ya.current = qa, Ua) {
        for (var r = ie.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ua = !1;
      }
      if (hn = 0, he = fe = ie = null, hr = !1, Rr = 0, Cs.current = null, n === null || n.return === null) {
        me = 1, Dr = t, de = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = we, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, g = u, v = g.tag;
          if (!(g.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = g.alternate;
            p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var k = Ml(s);
          if (k !== null) {
            k.flags &= -257, Tl(k, s, u, o, t), k.mode & 1 && bl(o, d, t), t = k, l = d;
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
            l = Error(E(426));
          }
        } else if (re && u.mode & 1) {
          var O = Ml(s);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Tl(O, s, u, o, t), us(Wn(l, u));
            break e;
          }
        }
        o = l = Wn(l, u), me !== 4 && (me = 2), vr === null ? vr = [o] : vr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Uc(o, l, t);
              Cl(o, f);
              break e;
            case 1:
              u = l;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Yt === null || !Yt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = qc(o, u, t);
                Cl(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ld(n);
    } catch (x) {
      t = x, de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function id() {
  var e = Va.current;
  return Va.current = qa, e === null ? qa : e;
}
function Ps() {
  (me === 0 || me === 3 || me === 2) && (me = 4), ge === null || !(gn & 268435455) && !(io & 268435455) || Ft(ge, we);
}
function Wa(e, t) {
  var n = H;
  H |= 2;
  var r = id();
  (ge !== e || we !== t) && (Ct = null, cn(e, t));
  do
    try {
      Xf();
      break;
    } catch (a) {
      od(e, a);
    }
  while (!0);
  if (ds(), H = n, Va.current = r, de !== null) throw Error(E(261));
  return ge = null, we = 0, me;
}
function Xf() {
  for (; de !== null; ) sd(de);
}
function Zf() {
  for (; de !== null && !Sp(); ) sd(de);
}
function sd(e) {
  var t = cd(e.alternate, e, Fe);
  e.memoizedProps = e.pendingProps, t === null ? ld(e) : de = t, Cs.current = null;
}
function ld(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Hf(n, t), n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        me = 6, de = null;
        return;
      }
    } else if (n = Gf(n, t, Fe), n !== null) {
      de = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function on(e, t, n) {
  var r = Y, a = Je.transition;
  try {
    Je.transition = null, Y = 1, em(e, t, n, r);
  } finally {
    Je.transition = a, Y = r;
  }
  return null;
}
function em(e, t, n, r) {
  do
    Bn();
  while (qt !== null);
  if (H & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Lp(e, o), e === ge && (de = ge = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ua || (ua = !0, dd(za, function() {
    return Bn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Je.transition, Je.transition = null;
    var s = Y;
    Y = 1;
    var u = H;
    H |= 4, Cs.current = null, Qf(e, n), nd(n, e), wf(ci), ba = !!ui, ci = ui = null, e.current = n, Yf(n), Cp(), H = u, Y = s, Je.transition = o;
  } else e.current = n;
  if (ua && (ua = !1, qt = e, Ha = a), o = e.pendingLanes, o === 0 && (Yt = null), Ep(n.stateNode), Oe(e, ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ga) throw Ga = !1, e = bi, bi = null, e;
  return Ha & 1 && e.tag !== 0 && Bn(), o = e.pendingLanes, o & 1 ? e === Mi ? yr++ : (yr = 0, Mi = e) : yr = 0, nn(), null;
}
function Bn() {
  if (qt !== null) {
    var e = Uu(Ha), t = Je.transition, n = Y;
    try {
      if (Je.transition = null, Y = 16 > e ? 16 : e, qt === null) var r = !1;
      else {
        if (e = qt, qt = null, Ha = 0, H & 6) throw Error(E(331));
        var a = H;
        for (H |= 4, R = e.current; R !== null; ) {
          var o = R, s = o.child;
          if (R.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var d = u[l];
                for (R = d; R !== null; ) {
                  var g = R;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, g, o);
                  }
                  var v = g.child;
                  if (v !== null) v.return = g, R = v;
                  else for (; R !== null; ) {
                    g = R;
                    var p = g.sibling, k = g.return;
                    if (Zc(g), g === d) {
                      R = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = k, R = p;
                      break;
                    }
                    R = k;
                  }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var y = C.child;
                if (y !== null) {
                  C.child = null;
                  do {
                    var O = y.sibling;
                    y.sibling = null, y = O;
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
                gr(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, R = f;
              break e;
            }
            R = o.return;
          }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          s = R;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, R = m;
          else e: for (s = c; R !== null; ) {
            if (u = R, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  oo(9, u);
              }
            } catch (x) {
              ue(u, u.return, x);
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
        if (H = a, nn(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
          yt.onPostCommitFiberRoot(Ja, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Y = n, Je.transition = t;
    }
  }
  return !1;
}
function Gl(e, t, n) {
  t = Wn(n, t), t = Uc(e, t, 1), e = Qt(e, t, 1), t = be(), e !== null && (qr(e, 1, t), Oe(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) Gl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Gl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
        e = Wn(n, e), e = qc(t, e, 1), t = Qt(t, e, 1), e = be(), t !== null && (qr(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function tm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (we & n) === n && (me === 4 || me === 3 && (we & 130023424) === we && 500 > ce() - Ns ? cn(e, 0) : _s |= n), Oe(e, t);
}
function ud(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = be();
  e = Mt(e, t), e !== null && (qr(e, t, n), Oe(e, n));
}
function nm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ud(e, n);
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), ud(e, n);
}
var cd;
cd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || De.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Vf(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, re && t.flags & 1048576 && mc(t, Da, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      wa(e, t), e = t.pendingProps;
      var a = qn(t, Ee.current);
      Fn(t, n), a = xs(null, t, r, e, a, n);
      var o = ws();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (o = !0, Aa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ms(t), a.updater = ao, t.stateNode = a, a._reactInternals = t, xi(t, r, e, n), t = ki(null, t, r, !0, o, n)) : (t.tag = 0, re && o && ss(t), Pe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (wa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = om(r), e = it(r, e), a) {
          case 0:
            t = ji(null, t, r, e, n);
            break e;
          case 1:
            t = Al(null, t, r, e, n);
            break e;
          case 11:
            t = Ll(null, t, r, e, n);
            break e;
          case 14:
            t = Rl(null, t, r, it(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), ji(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), Al(e, t, r, a, n);
    case 3:
      e: {
        if (Wc(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, wc(e, t), Fa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Wn(Error(E(423)), t), t = Il(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Wn(Error(E(424)), t), t = Il(e, t, r, n, a);
          break e;
        } else for (Be = Wt(t.stateNode.containerInfo.firstChild), Ue = t, re = !0, lt = null, n = yc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Vn(), r === a) {
            t = Tt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return jc(t), e === null && gi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, di(r, a) ? s = null : o !== null && di(r, o) && (t.flags |= 32), Hc(e, t), Pe(e, t, s, n), t.child;
    case 6:
      return e === null && gi(t), null;
    case 13:
      return Qc(e, t, n);
    case 4:
      return hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), Ll(e, t, r, a, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, Z($a, r._currentValue), r._currentValue = s, o !== null) if (dt(o.value, s)) {
          if (o.children === a.children && !De.current) {
            t = Tt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = zt(-1, n & -n), l.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var g = d.pending;
                    g === null ? l.next = l : (l.next = g.next, g.next = l), d.pending = l;
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
            if (s = o.return, s === null) throw Error(E(341));
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
      return a = t.type, r = t.pendingProps.children, Fn(t, n), a = Xe(a), r = r(a), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = it(r, t.pendingProps), a = it(r.type, a), Rl(e, t, r, a, n);
    case 15:
      return Vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : it(r, a), wa(e, t), t.tag = 1, $e(r) ? (e = !0, Aa(t)) : e = !1, Fn(t, n), Bc(t, r, a), xi(t, r, a, n), ki(null, t, r, !0, e, n);
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
function Jt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Sa(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case _n:
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
      return so(n, a, o, t);
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
  return t = Ke(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function dn(e, t, n, r) {
  return e = Ke(7, e, r, t), e.lanes = n, e;
}
function so(e, t, n, r) {
  return e = Ke(22, e, r, t), e.elementType = ju, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Oo(e, t, n) {
  return e = Ke(6, e, null, t), e.lanes = n, e;
}
function Fo(e, t, n) {
  return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function im(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wo(0), this.expirationTimes = wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Ms(e, t, n, r, a, o, s, u, l) {
  return e = new im(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ke(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ms(o), e;
}
function sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pd(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(E(170));
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
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return pc(e, n, t);
  }
  return t;
}
function fd(e, t, n, r, a, o, s, u, l) {
  return e = Ms(n, r, !0, e, a, o, s, u, l), e.context = pd(null), n = e.current, r = be(), a = Kt(n), o = zt(r, a), o.callback = t ?? null, Qt(n, o, a), e.current.lanes = a, qr(e, a, r), Oe(e, r), e;
}
function lo(e, t, n, r) {
  var a = t.current, o = be(), s = Kt(a);
  return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(a, t, s), e !== null && (ct(e, a, s, o), va(e, a, s)), s;
}
function Qa(e) {
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
var md = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ls(e) {
  this._internalRoot = e;
}
uo.prototype.render = Ls.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  lo(e, t, null, null);
};
uo.prototype.unmount = Ls.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vn(function() {
      lo(null, e, null, null);
    }), t[bt] = null;
  }
};
function uo(e) {
  this._internalRoot = e;
}
uo.prototype.unstable_scheduleHydration = function(e) {
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
function co(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wl() {
}
function um(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Qa(s);
        o.call(d);
      };
    }
    var s = fd(t, r, e, 0, null, !1, !1, "", Wl);
    return e._reactRootContainer = s, e[bt] = s.current, Pr(e.nodeType === 8 ? e.parentNode : e), vn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Qa(l);
      u.call(d);
    };
  }
  var l = Ms(e, 0, !1, null, null, !1, !1, "", Wl);
  return e._reactRootContainer = l, e[bt] = l.current, Pr(e.nodeType === 8 ? e.parentNode : e), vn(function() {
    lo(t, l, n, r);
  }), l;
}
function po(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = Qa(s);
        u.call(l);
      };
    }
    lo(t, s, e, a);
  } else s = um(n, t, e, a, r);
  return Qa(s);
}
qu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lr(t.pendingLanes);
        n !== 0 && (Zi(t, n | 1), Oe(t, ce()), !(H & 6) && (Qn = ce() + 500, nn()));
      }
      break;
    case 13:
      vn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var a = be();
          ct(r, e, 1, a);
        }
      }), Ts(e, 1);
  }
};
es = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = be();
      ct(t, e, 134217728, n);
    }
    Ts(e, 134217728);
  }
};
Vu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e), n = Mt(e, t);
    if (n !== null) {
      var r = be();
      ct(n, e, t, r);
    }
    Ts(e, t);
  }
};
Gu = function() {
  return Y;
};
Hu = function(e, t) {
  var n = Y;
  try {
    return Y = e, t();
  } finally {
    Y = n;
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
            var a = to(r);
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
      t = n.value, t != null && In(e, !!n.multiple, t, !1);
  }
};
Tu = Es;
Lu = vn;
var cm = { usingClientEntryPoint: !1, Events: [Gr, Pn, to, bu, Mu, Es] }, or = { findFiberByHostInstance: sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dm = { bundleType: or.bundleType, version: or.version, rendererPackageName: or.rendererPackageName, rendererConfig: or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Iu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: or.findFiberByHostInstance || lm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ca.isDisabled && ca.supportsFiber) try {
    Ja = ca.inject(dm), yt = ca;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cm;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rs(t)) throw Error(E(200));
  return sm(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!Rs(e)) throw Error(E(299));
  var n = !1, r = "", a = md;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ms(e, 1, !1, null, null, n, !1, r, a), e[bt] = t.current, Pr(e.nodeType === 8 ? e.parentNode : e), new Ls(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Iu(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return vn(e);
};
Ve.hydrate = function(e, t, n) {
  if (!co(t)) throw Error(E(200));
  return po(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!Rs(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = md;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = fd(t, null, e, 1, n ?? null, a, !1, o, s), e[bt] = t.current, Pr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new uo(t);
};
Ve.render = function(e, t, n) {
  if (!co(t)) throw Error(E(200));
  return po(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!co(e)) throw Error(E(40));
  return e._reactRootContainer ? (vn(function() {
    po(null, null, e, !1, function() {
      e._reactRootContainer = null, e[bt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = Es;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!co(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return po(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function hd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd);
    } catch (e) {
      console.error(e);
    }
}
hd(), hu.exports = Ve;
var pm = hu.exports, gd, Ql = pm;
gd = Ql.createRoot, Ql.hydrateRoot;
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
const pn = () => globalThis.__crycatBase || "";
async function V(e, t) {
  const n = await fetch(pn() + e, t);
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
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => V(
    "/api/contornos"
  ),
  blobs: (e) => V(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => V(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0) => `${pn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}`,
  previewUrlSinBordes: (e) => `/api/assets/${e}/preview.png`,
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
  pageUrl: (e, t, n = !1, r = !1, a = 0) => `${pn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}` : ""}`,
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
  iconUrl: () => `${pn()}/api/icon.png?v=${Date.now()}`,
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
async function vm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, v) => {
      a.onload = () => g(), a.onerror = () => v(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (g) => l.toBlob((v) => g(v), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function vd(e) {
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
}, xd = w.createContext("es");
function ym({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(xd.Provider, { value: e, children: t });
}
function As() {
  return w.useContext(xd);
}
function et() {
  const e = As();
  return (t, n) => {
    let r = e === "en" ? yd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function xm(e, t, n) {
  return e === "en" ? yd[t] ?? t : t;
}
function ae({ size: e = 18, children: t }) {
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
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Or({ size: e }) {
  return /* @__PURE__ */ i.jsx(ae, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Fr({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Ya({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function jd({ size: e }) {
  return /* @__PURE__ */ i.jsx(ae, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function fo({ size: e }) {
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
function Cm({ size: e }) {
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
        /* @__PURE__ */ i.jsx("circle", { cx: "6", cy: "6", r: "2.6" }),
        /* @__PURE__ */ i.jsx("circle", { cx: "6", cy: "18", r: "2.6" }),
        /* @__PURE__ */ i.jsx("path", { d: "M8.4 7.6L20 18M8.4 16.4L20 6" })
      ]
    }
  );
}
function _m({ size: e }) {
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
        /* @__PURE__ */ i.jsx("rect", { x: "3", y: "3", width: "8", height: "18", rx: "1.5" }),
        /* @__PURE__ */ i.jsx("rect", { x: "13", y: "7", width: "8", height: "10", rx: "1.5" }),
        /* @__PURE__ */ i.jsx("path", { d: "M17 3v2.5M17 18.5V21", strokeDasharray: "1.5 2.5" })
      ]
    }
  );
}
function Nm({ size: e }) {
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
function kd({ size: e }) {
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
  return /* @__PURE__ */ i.jsx(ae, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Sd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Cd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function zm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function xr({ size: e }) {
  return /* @__PURE__ */ i.jsx(ae, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Di({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function _d({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ae, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsx(ae, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Dm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = et(), o = w.useMemo(() => t.map((j) => j.id), [t]), [s, u] = w.useState(/* @__PURE__ */ new Set()), [l, d] = w.useState("escala"), [g, v] = w.useState(100), [p, k] = w.useState(50), [C, y] = w.useState("mayor"), [O, f] = w.useState("");
  w.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), f(""));
  }, [e, o.join(",")]);
  const c = (j) => !s.has(j), m = (j) => u((N) => {
    const T = new Set(N);
    return T.has(j) ? T.delete(j) : T.add(j), T;
  }), h = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), x = (j) => {
    const N = j.w_mm_base || 0, T = j.h_mm_base || 0;
    return C === "mayor" ? Math.max(N, T) : C === "menor" ? Math.min(N, T) : 2 * Math.sqrt(Math.max(0, N * T) / Math.PI);
  }, S = (j) => {
    if (l === "tamano") {
      const N = x(j);
      if (N > 0) return Math.min(10, Math.max(0.05, p / N));
    }
    return Math.min(10, Math.max(0.05, g / 100));
  }, _ = (j) => {
    const N = S(j);
    return { w: (j.w_mm_base || 0) * N, h: (j.h_mm_base || 0) * N };
  }, P = async () => {
    let j = 0;
    for (const N of t) {
      if (!c(N.id)) continue;
      const T = S(N) * 100;
      await I.patchAsset(N.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(T * 10) / 10))
      }), j += 1;
    }
    await r(), f(a("{n} elementos ajustados ", { n: j })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((j) => {
          const N = _(j), T = Math.min(98, N.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${j.id}`,
              style: {
                width: `${T}%`,
                maxWidth: `${T}%`,
                aspectRatio: `${N.w || 1} / ${N.h || 1}`,
                opacity: c(j.id) ? 1 : 0.3
              },
              title: `${j.name} · ${N.w.toFixed(1)}×${N.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(j.id), alt: "" })
            },
            j.id
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((j) => {
          const N = _(j);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${j.id}`,
              className: c(j.id) ? "sel" : "",
              onClick: () => m(j.id),
              title: j.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: I.previewUrl(j.id), alt: j.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: j.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(j.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  N.w.toFixed(1),
                  "×",
                  N.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            j.id
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
                value: String(g),
                onChange: (j) => v(Number(j.target.value))
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
                  onChange: (j) => k(Number(j.target.value))
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
                onChange: (j) => y(j.target.value),
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
        O && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: O })
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
function $m({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  faseBordes: s = 0,
  verBordes: u = !0
}) {
  const l = et(), [d, g] = w.useState(() => $r(e));
  w.useEffect(() => g($r(e)), [e]);
  const v = w.useRef(null), p = gm(d), [k, C] = w.useState(""), y = w.useRef(!1), [O, f] = w.useState(""), c = w.useRef(!1), [m, h] = w.useState({ tamano: !1, borde: !1, mini: !1 });
  w.useEffect(() => {
    y.current || C(p.w > 0 ? p.w.toFixed(1) : ""), c.current || f(p.h > 0 ? p.h.toFixed(1) : "");
  }, [p.w, p.h]);
  const x = Number.isFinite(d.w_mm_base) ? d.w_mm_base : 0, S = Number.isFinite(d.h_mm_base) ? d.h_mm_base : 0, _ = (b) => {
    C(b);
    const G = Number(b.replace(",", "."));
    !Number.isFinite(G) || G <= 0 || x <= 0 || T({ scale_pct: G / x * 100 });
  }, P = (b) => {
    f(b);
    const G = Number(b.replace(",", "."));
    !Number.isFinite(G) || G <= 0 || S <= 0 || T({ scale_pct: G / S * 100 });
  }, j = (t == null ? void 0 : t.placements.filter((b) => b.asset_id === e.id && b.mini).length) ?? 0, N = (t == null ? void 0 : t.placements.filter((b) => b.asset_id === e.id && !b.mini).length) ?? 0, T = async (b) => {
    a == null || a(), "copies" in b && (b.copies = Math.max(0, b.copies ?? 0)), g((G) => ({ ...G, ...b }));
    try {
      await I.patchAsset(e.id, b);
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
            title: l("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => I.assetsFolder().then((b) => I.abrirCarpeta(b.path)).catch(() => I.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ i.jsx(Or, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: l("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var b;
              return (b = v.current) == null ? void 0 : b.click();
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
            onChange: async (b) => {
              var ke;
              const G = (ke = b.target.files) == null ? void 0 : ke[0];
              if (b.target.value = "", !!G)
                try {
                  const { blob: He, name: ve } = await vd(G);
                  await I.reemplazar(e.id, He, ve), await n();
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
            title: l("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ i.jsx(jm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            title: d.bg_removed ? l("Restaurar fondo original") : l("Quitar fondo (inteligente)"),
            onClick: () => (d.bg_removed ? I.restoreBackground(e.id) : I.removeBackground(e.id)).then(n),
            children: d.bg_removed ? /* @__PURE__ */ i.jsx(km, { size: 16 }) : /* @__PURE__ */ i.jsx(Ya, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: l("Eliminar imagen"),
            onClick: () => I.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ i.jsx(jd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${d.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            "data-tip": l("Incluir como mini (rellena huecos)"),
            onClick: () => T({ mini_enabled: !d.mini_enabled }),
            children: [
              /* @__PURE__ */ i.jsx(Br, { size: 15 }),
              " ",
              l("Mini")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${d.offset_mm > 0 ? "on" : ""}`,
            "data-testid": `borde-${e.id}`,
            "data-tip": l("Borde adicional para este elemento (unir trozos, margen al cortar)"),
            onClick: () => h((b) => ({ ...b, borde: !b.borde })),
            children: [
              /* @__PURE__ */ i.jsx(fo, { size: 15 }),
              " ",
              l("Borde")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: l("Copias"), children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => T({ copies: d.copies - 1 }), children: "−" }),
          /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: d.copies }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => T({ copies: d.copies + 1 }), children: "+" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-tamano-${e.id}`,
            onClick: () => h((b) => ({ ...b, tamano: !b.tamano })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.tamano ? "open" : ""}`, children: "›" }),
              l("Tamaño"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                p.w.toFixed(1),
                "×",
                p.h.toFixed(1),
                " · ",
                Math.round(d.scale_pct),
                " %"
              ] })
            ]
          }
        ),
        m.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: l("Escala del elemento (100% = tamaño natural)"), children: l("Escala") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: d.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (b) => T({ scale_pct: Number(b.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
              Math.round(d.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: l("Tamaño exacto en milímetros (mantiene la proporción)"), children: l("Ancho") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: k,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  y.current = !0, c.current = !1;
                },
                onBlur: () => {
                  y.current = !1, C(p.w > 0 ? p.w.toFixed(1) : "");
                },
                onChange: (b) => _(b.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" }),
            /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ i.jsx("span", { title: l("Tamaño exacto en milímetros (mantiene la proporción)"), children: l("Alto") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: O,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  c.current = !0, y.current = !1;
                },
                onBlur: () => {
                  c.current = !1, f(p.h > 0 ? p.h.toFixed(1) : "");
                },
                onChange: (b) => P(b.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      (d.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${e.id}`,
            onClick: () => h((b) => ({ ...b, borde: !b.borde })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.borde ? "open" : ""}`, children: "›" }),
              l("Borde adicional"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                d.offset_mm.toFixed(1),
                " mm",
                d.offset_mm <= 0 ? ` · ${l("global")}` : ""
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
                onClick: () => T({ offset_mm: Math.max(
                  0,
                  Math.round((d.offset_mm - 0.5) * 2) / 2
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
                value: d.offset_mm,
                onChange: (b) => T({ offset_mm: Number(b.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => T({ offset_mm: Math.min(
                  20,
                  Math.round((d.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", l("Extender")],
              ["blanco", l("Blanco")],
              ["color", l("Color")],
              ["unir_recto", l("Unir recto")],
              ["unir_curvo", l("Unir curvo")]
            ].map(([b, G]) => /* @__PURE__ */ i.jsx(
              "button",
              {
                className: `seg ${(d.offset_modo || "") === b ? "on" : ""}`,
                "data-testid": `offset-modo-${b}-${e.id}`,
                onClick: () => T({ offset_modo: b }),
                children: G
              },
              b
            )),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: d.offset_color || "#ffffff",
                title: l("Color del borde"),
                onChange: (b) => T({
                  offset_color: b.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      d.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${e.id}`,
            onClick: () => h((b) => ({ ...b, mini: !b.mini })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${m.mini ? "open" : ""}`, children: "›" }),
              l("Opciones de mini"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                d.mini_quota,
                " · ",
                j
              ] })
            ]
          }
        ),
        m.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ i.jsx("span", { title: l("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: l("Cuota") }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => T({ mini_quota: Math.max(
                1,
                Math.round((d.mini_quota - 0.5) * 2) / 2
              ) }),
              children: "−"
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
            "×",
            d.mini_quota
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-mas-${e.id}`,
              onClick: () => T({ mini_quota: Math.min(
                100,
                Math.round((d.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: l(" {n} minis", { n: j }) })
        ] }) })
      ] }),
      N > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: l("Colocadas: {n}", { n: N }) }),
      d.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ i.jsx(_d, { size: 14 }),
        " ",
        d.warnings[0],
        " ",
        d.warnings.some((b) => /blob|trozos sueltos/i.test(b)) && /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: l("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function Om({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0,
  verBordes: l = !0
}) {
  const d = et(), g = w.useRef(null), [v, p] = w.useState(!1), [k, C] = w.useState(null), y = async (f) => {
    const c = [];
    for (const m of Array.from(f))
      try {
        const { blob: h, name: x } = await vd(m);
        c.push($r(await I.upload(h, x)));
      } catch (h) {
        console.error(h);
      }
    await r(), c.length > 1 && C(c);
  }, O = n.usar_minis;
  return e.some((f) => f.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: d("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${v ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var f;
          return (f = g.current) == null ? void 0 : f.click();
        },
        onDragOver: (f) => {
          f.preventDefault(), p(!0);
        },
        onDragLeave: () => p(!1),
        onDrop: (f) => {
          f.preventDefault(), p(!1), f.dataTransfer.files.length && y(f.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            d("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: g,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (f) => {
                f.target.files && y(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((f) => /* @__PURE__ */ i.jsx(
      $m,
      {
        a: f,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        bordeGlobal: n.offset_activo === !0
      },
      f.id
    )) }),
    !O && /* @__PURE__ */ i.jsx("div", { className: "hint", children: d("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => I.clearAssets().then(r),
        children: d("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Dm,
      {
        open: !!k,
        assets: k ?? [],
        onClose: () => C(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const vt = (e) => (globalThis.__crycatAssets || "") + e;
function Nd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = et(), [o, s] = w.useState(null), [u, l] = w.useState("");
  w.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (g = "") => {
    l("");
    try {
      s(await I.fsList(g));
    } catch (v) {
      l(v.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (g) => g.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
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
function Fm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = et(), [u, l] = w.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((v) => v.startsWith("data:")), g = [
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
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((v) => /* @__PURE__ */ i.jsx("li", { title: v, children: v.split(/[\\/]/).pop() }, v)) }),
      !d && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      d && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      d ? t.map((v, p) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${p}`,
          href: v,
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
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: g.map((v, p) => /* @__PURE__ */ i.jsx("li", { children: v }, p)) }),
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
function Bm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: d, onFinEdicion: g, onDeshacer: v, onRehacer: p, puedeDeshacer: k, puedeRehacer: C }) {
  const y = et(), O = As(), [f, c] = w.useState(1), [m, h] = w.useState({ x: 0, y: 0 }), [x, S] = w.useState(null), [_, P] = w.useState(() => Date.now()), [j, N] = w.useState(null), [T, b] = w.useState(null), [G, ke] = w.useState(!1), [He, ve] = w.useState(2), [Le, M] = w.useState(0);
  w.useEffect(() => {
    if (!r.verBordes) return;
    const z = window.setInterval(
      () => M((A) => (A + 6) % 12),
      1100
    );
    return () => window.clearInterval(z);
  }, [r.verBordes]);
  const [F, U] = w.useState([]), [Q, K] = w.useState([]), [$, J] = w.useState(""), [pe, ye] = w.useState(/* @__PURE__ */ new Set()), Re = w.useRef(null), wt = w.useRef(null), wn = O === "en" ? hm : mm, D = w.useMemo(
    () => wn[Math.floor(Math.random() * wn.length)],
    [wn]
  ), B = r.saveName.trim() || D;
  w.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const Se = (t == null ? void 0 : t.pages) ?? 0, tt = !!t && t.efficiency < 0.8;
  w.useEffect(() => {
    const z = Re.current;
    if (!z) return;
    const A = (L) => {
      L.preventDefault(), L.stopPropagation();
      const W = z.getBoundingClientRect(), X = L.clientX - W.left, ze = L.clientY - W.top;
      c((We) => {
        const le = L.deltaY < 0 ? 1.05 : 0.9523809523809523, ne = Math.min(12, Math.max(0.05, We * le)), ft = ne / We;
        return h((At) => ({ x: X - (X - At.x) * ft, y: ze - (ze - At.y) * ft })), ne;
      });
    };
    return z.addEventListener("wheel", A, { passive: !1 }), () => z.removeEventListener("wheel", A);
  }, []);
  const Wr = (z) => {
    if (z.target.closest(".item-box")) return;
    wt.current = { x: z.clientX - m.x, y: z.clientY - m.y };
    const A = (W) => {
      wt.current && h({ x: W.clientX - wt.current.x, y: W.clientY - wt.current.y });
    }, L = () => {
      wt.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", L);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", L);
  };
  w.useEffect(() => {
    const z = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((L) => Math.min(12, L * 1.08)) : A.key === "-" || A.key === "_" ? c((L) => Math.max(0.05, L / 1.08)) : A.key === "0" ? (c(1), h({ x: 0, y: 0 })) : A.key === "Escape" ? S(null) : A.key === "g" ? a((L) => ({ ...L, guidesVisible: !L.guidesVisible })) : A.key === "t" && a((L) => L.eyeFosforito ? { ...L, eyeFosforito: !1, eyeTransparent: !1 } : L.eyeTransparent ? { ...L, eyeTransparent: !1, eyeFosforito: !0 } : { ...L, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [a]);
  const nt = w.useRef(null), Is = w.useRef(null), Pd = (z, A) => {
    z.preventDefault(), z.stopPropagation();
    const L = z.currentTarget.closest(".page-box");
    if (!L || !t) return;
    const W = t.page_mm[0] / L.clientWidth, X = {
      uid: A.uid,
      startX: z.clientX,
      startY: z.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: W
    };
    nt.current = X, Is.current = { x: A.x, y: A.y }, N(X), b({ uid: A.uid, x: A.x, y: A.y });
    const ze = (le) => {
      const ne = nt.current;
      if (!ne) return;
      const ft = (le.clientX - ne.startX) * ne.mmPerPx / f, At = (le.clientY - ne.startY) * ne.mmPerPx / f;
      Is.current = { x: ne.origX + ft, y: ne.origY + At }, b({ uid: ne.uid, x: ne.origX + ft, y: ne.origY + At });
    }, We = (le) => {
      window.removeEventListener("mousemove", ze), window.removeEventListener("mouseup", We);
      const ne = nt.current;
      if (nt.current = null, !ne) return;
      const ft = (le.clientX - ne.startX) * ne.mmPerPx / f, At = (le.clientY - ne.startY) * ne.mmPerPx / f;
      N(null), b(null), !(Math.abs(ft) < 0.5 && Math.abs(At) < 0.5) && bd(ne.uid, ne.origX + ft, ne.origY + At);
    };
    window.addEventListener("mousemove", ze), window.addEventListener("mouseup", We);
  }, bd = async (z, A, L) => {
    try {
      const W = await I.move(z, A, L);
      W.job ? u(W.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, Md = async (z) => {
    const A = await I.unpin(z);
    u(A);
  }, Td = !1;
  w.useEffect(() => {
    {
      U([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, _]), w.useEffect(() => {
    if (!d) {
      K([]), J(""), ye(/* @__PURE__ */ new Set());
      return;
    }
    I.blobs(d.id).then((z) => {
      K(z.blobs), ve(z.union_mm ?? 2), J(z.preview_png), ye(new Set(z.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      K([]), J("");
    });
  }, [d]);
  const Ds = async () => {
    if (d)
      try {
        await I.limpiarContorno(d.id, Array.from(pe));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, Ld = (z) => {
    ye((A) => {
      const L = new Set(A);
      return L.has(z) ? L.delete(z) : L.add(z), L;
    });
  }, [pt, Rt] = w.useState(null), Rd = async () => {
    try {
      const L = await I.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Rt({ files: L.files, folder: L.folder });
    } catch (L) {
      Rt({ files: [], folder: "", error: L.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const W = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), X = URL.createObjectURL(W), ze = document.createElement("a");
        ze.href = X, ze.download = `${r.saveName || "crycat"}-cricut.pdf`, ze.click(), setTimeout(() => URL.revokeObjectURL(X), 4e3);
      } catch (L) {
        Rt({
          files: [],
          folder: "",
          error: L.message
        });
      }
      return;
    }
    const A = document.createElement("iframe");
    A.setAttribute("aria-hidden", "true"), A.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", A.src = "/api/print.pdf", A.onload = () => {
      var L, W;
      try {
        (L = A.contentWindow) == null || L.focus(), (W = A.contentWindow) == null || W.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, Ad = async () => {
    try {
      const z = await I.export(B);
      Rt({ files: z.files, folder: z.folder });
    } catch (z) {
      Rt({ files: [], folder: "", error: z.message });
    }
  }, Id = () => {
    ke(!0);
  }, Dd = async (z) => {
    try {
      const A = await I.export(B, z);
      Rt({ files: A.files, folder: A.folder });
    } catch (A) {
      Rt({ files: [], folder: "", error: A.message });
    }
  }, $s = (t == null ? void 0 : t.poly_mm) ?? [], [rt, at] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [jn, kn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], rn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : jn, mo = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : kn, jt = n.lienzo === "pagina" ? 0 : rt, kt = n.lienzo === "pagina" ? 0 : at, Os = $s.length ? "M" + $s.map(([z, A]) => `${z - jt},${A - kt}`).join(" L") + " Z" : "", $d = (z) => {
    const A = (t == null ? void 0 : t.placements.filter((L) => L.page === z)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (L) => {
          Se > 1 && x === null && !L.target.closest(".item-box") && S(z);
        },
        "data-testid": `page-${z}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: "sheet", src: I.pageUrl(z, _, n.simular_impresion === !0, r.verBordes, Le), alt: y("Página {i}", { i: z + 1 }), draggable: !1 }),
          r.guidesVisible && Os && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${rn} ${mo}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, rn / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((rt - jt + jn) / 10) + 1 },
                    (L, W) => {
                      const X = W * 10 - (jt - rt);
                      return X >= rt - jt - 0.01 && X <= rt - jt + jn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: X,
                          y1: at - kt,
                          x2: X,
                          y2: at - kt + kn
                        },
                        `v${W}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((at - kt + kn) / 10) + 1 },
                    (L, W) => {
                      const X = W * 10 - (kt - at);
                      return X >= at - kt - 0.01 && X <= at - kt + kn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: rt - jt,
                          y1: X,
                          x2: rt - jt + jn,
                          y2: X
                        },
                        `h${W}`
                      ) : null;
                    }
                  )
                ]
              }
            ),
            (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
              ["esquina_flecha", rt, at, !1, !1],
              ["esquina_sd", rt + jn, at, !0, !1],
              ["esquina_ii", rt, at + kn, !1, !0],
              ["esquina_id", rt + jn, at + kn, !0, !0]
            ].map(([L, W, X, ze, We]) => {
              const le = t.marcas[L];
              if (!le) return null;
              const ne = W - jt - (ze ? le[0] : 0), ft = X - kt - (We ? le[1] : 0);
              return /* @__PURE__ */ i.jsx(
                "image",
                {
                  href: vt(`/marcas/${L}.png`),
                  x: ne,
                  y: ft,
                  width: le[0],
                  height: le[1],
                  preserveAspectRatio: "none"
                },
                L
              );
            }) }),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: Os,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, rn / 250),
                strokeDasharray: `${rn / 55} ${rn / 85}`,
                opacity: 0.85
              }
            ),
            Td
          ] }),
          A.map((L) => {
            const W = e.find((le) => le.id === L.asset_id), X = (T == null ? void 0 : T.uid) === L.uid ? T : null, ze = ((X ? X.x : L.x) - jt) / (rn || 1) * 100, We = ((X ? X.y : L.y) - kt) / (mo || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${L.pinned ? "pinned" : ""} ${(j == null ? void 0 : j.uid) === L.uid ? "dragging" : ""}`,
                style: {
                  left: `${ze}%`,
                  top: `${We}%`,
                  width: `${L.w / (rn || 1) * 100}%`,
                  height: `${L.h / (mo || 1) * 100}%`
                },
                title: (W == null ? void 0 : W.name) ?? "",
                onMouseDown: (le) => Pd(le, L),
                onContextMenu: (le) => {
                  le.preventDefault(), Md(L.uid);
                },
                "data-testid": `item-${L.uid}`,
                children: L.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              L.uid
            );
          })
        ]
      },
      z
    );
  }, Od = x !== null ? [x] : Array.from({ length: Se }, (z, A) => A);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": y("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((z) => ({ ...z, verBordes: !z.verBordes })),
          children: /* @__PURE__ */ i.jsx(fo, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": y("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((z) => ({ ...z, guidesVisible: !z.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(Cd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": y("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(tt ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Fr, { size: 16 }),
            " ",
            y("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        Se > 1 && x === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((z) => ({ ...z, viewMode: 4 })), children: "4" })
        ] }),
        x !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => S(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": y("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((z) => z.eyeFosforito ? { ...z, eyeFosforito: !1, eyeTransparent: !1 } : z.eyeTransparent ? { ...z, eyeTransparent: !1, eyeFosforito: !0 } : { ...z, eyeTransparent: !0, eyeFosforito: !1 }),
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
              const z = !window.__crycatAncho;
              window.__crycatAncho = z, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: z }
              ));
            },
            children: /* @__PURE__ */ i.jsx(_m, { size: 16 })
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
            onClick: () => v(),
            disabled: !k,
            children: /* @__PURE__ */ i.jsx(Sd, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !C,
            children: /* @__PURE__ */ i.jsx(Em, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Acercar (+)"),
            onClick: () => c((z) => Math.min(12, z * 1.08)),
            children: /* @__PURE__ */ i.jsx(zm, { size: 15 })
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
            children: /* @__PURE__ */ i.jsx(Nm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Alejar (−)"),
            onClick: () => c((z) => Math.max(0.05, z / 1.08)),
            children: /* @__PURE__ */ i.jsx(Pm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(f * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: I.previewUrl(d.id) + `?t=${_}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && Q.filter((z) => !z.principal).map((z, A) => {
          const [L, W, X, ze] = z.bbox, We = d.w_px || 1, le = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${pe.has(z.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: z.area_px,
                accion: pe.has(z.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${L / We * 100}%`,
                top: `${W / le * 100}%`,
                width: `${(X - L) / We * 100}%`,
                height: `${(ze - W) / le * 100}%`
              },
              onClick: () => Ld(z.id)
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
              title: y("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: He }),
              onClick: async () => {
                d && (await I.patchAsset(d.id, {
                  offset_mm: He,
                  offset_modo: "unir_curvo"
                }), await (g == null ? void 0 : g()));
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
                { n: pe.size }
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
        className: `canvas ${j ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: Wr,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${m.x}px, ${m.y}px) scale(${f})` },
            children: [
              Se === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${x !== null ? 1 : r.viewMode}, 1fr)`,
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
          onClick: () => g == null ? void 0 : g(),
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
          onChange: (z) => a((A) => ({ ...A, saveName: z.target.value }))
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
            disabled: Se === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Nd,
      {
        open: G,
        initial: n.carpeta_export,
        onClose: () => ke(!1),
        onPick: Dd
      }
    ),
    /* @__PURE__ */ i.jsx(
      Fm,
      {
        open: !!pt,
        files: (pt == null ? void 0 : pt.files) ?? [],
        folder: (pt == null ? void 0 : pt.folder) ?? "",
        error: pt == null ? void 0 : pt.error,
        onOpenFolder: (z) => void I.fsOpen(z).catch(() => {
        }),
        onClose: () => Rt(null)
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
function Um({ saveSettings: e }) {
  const t = et(), [n, r] = w.useState(
    {}
  ), [a, o] = w.useState([]), [s, u] = w.useState(!1), [l, d] = w.useState(!1), [g, v] = w.useState(""), [p, k] = w.useState(""), C = () => I.presets().then((c) => o(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  w.useEffect(() => {
    I.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), C();
  }, []);
  const y = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const m = c.slice(8);
          await e(n[m]), k(t("Perfil «{n}» aplicado", {
            n: t(Xl[m] ?? m)
          }));
        } else {
          const m = c.slice(9), h = await I.loadPreset(m);
          await e(h.settings), k(t("Perfil «{n}» cargado", { n: m }));
        }
      } catch {
        k(t("No se pudo aplicar el perfil"));
      }
  }, O = async () => {
    const c = g.trim();
    if (c)
      try {
        const m = await I.savePreset(c);
        o(Array.isArray(m.names) ? m.names : []), v(""), u(!1), k(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        k(t("No se pudo guardar el perfil"));
      }
  }, f = async (c) => {
    try {
      o((await I.deletePreset(c)).names ?? []), k(t("Perfil «{n}» borrado", { n: c }));
    } catch {
      k(t("No se pudo borrar el perfil"));
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
          value: g,
          onChange: (c) => v(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && O(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: O, children: t("Guardar") }),
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
          onClick: () => f(c),
          children: /* @__PURE__ */ i.jsx(jd, { size: 15 })
        }
      )
    ] }, c)) }),
    p && /* @__PURE__ */ i.jsx("div", { className: "hint", children: p })
  ] });
}
function qm({ settings: e, saveSettings: t }) {
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
            /* @__PURE__ */ i.jsx(kd, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Um, { saveSettings: t })
  ] });
}
function Vm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
function St({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
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
const Gm = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Hm = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Wm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = et(), [a, o] = w.useState(!0), [s, u] = w.useState({
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
  }), [l, d] = w.useState(!1), g = w.useMemo(() => {
    const h = (n ?? []).filter((S) => S.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((S, _) => Math.min(_.w_mm, _.h_mm) - Math.min(S.w_mm, S.h_mm))[0] ?? null;
  }, [n]), v = g ? Math.min(g.w_mm, g.h_mm) : 0, p = e.modo === "experto", k = ({ children: h }) => p ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, C = (h) => u((x) => ({ ...x, [h]: !x[h] })), y = (h) => t(h), O = w.useRef(null), f = ({ titulo: h, children: x }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(h) }),
    x
  ] }), c = (h, x, S, _, P = 1, j = "", N, T) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...T ? { "data-tip": r(T) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: S,
          max: _,
          step: P,
          "data-testid": `set-${x}`,
          value: String(e[x]),
          onChange: (b) => {
            const G = Number(b.target.value);
            Number.isNaN(G) || y({ [x]: G });
          }
        }
      ),
      j && /* @__PURE__ */ i.jsx("span", { className: "hint", children: j }),
      N
    ] })
  ] }), m = (h, x, S, _, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { children: r(h) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${x}`,
        value: String(e[x]),
        onChange: (j) => y({ [x]: j.target.value }),
        children: S.map(([j, N]) => /* @__PURE__ */ i.jsx("option", { value: j, children: r(N) }, j))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(qm, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !p && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(xr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(f, { titulo: "Colocación", children: [
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
              m("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(f, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(k, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (h) => {
                      const x = h.target.value, S = fm[x];
                      y(S ? { pagina: x, pagina_w: S[0], pagina_h: S[1] } : { pagina: x });
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
              /* @__PURE__ */ i.jsx(k, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
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
              m("Máquina Cricut", "maquina", [
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
        St,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Br, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ i.jsxs(f, { titulo: "Tamaños", children: [
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
            /* @__PURE__ */ i.jsx(f, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(k, { children: [
              m("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              m("Selección de tamaños", "mini_tamanos", [
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
                  (e.mini_tamanos_lista ?? []).map((h, x) => /* @__PURE__ */ i.jsx(
                    Vm,
                    {
                      i: x,
                      valor: h,
                      refBase: v,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (S) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[x] = S, y({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => y({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (S, _) => _ !== x
                        )
                      })
                    },
                    x
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
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: g ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: g.name, mm: v.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
          children: [
            m("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            m("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ i.jsxs(k, { children: [
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
                  s: Gm[e.opt_metodo] ?? 8,
                  m: r(Hm[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Ya, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(f, { titulo: "Impresión", children: [
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
              m("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ i.jsxs(k, { children: [
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
              m("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(f, { titulo: "Origen y exportación", children: [
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
              m("Lienzo del archivo final", "lienzo", [
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
        St,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(fo, { size: 15 }),
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
              m("Tipo de borde", "offset_modo", [
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
      p && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Cm, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: Zl(
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
          ]
        }
      ),
      p && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(Sd, { size: 15 }),
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
        St,
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
                  return (h = O.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: O,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (h) => {
                      var S;
                      const x = (S = h.target.files) == null ? void 0 : S[0];
                      x && I.setIcon(x).then(() => {
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
        St,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: C,
          icon: /* @__PURE__ */ i.jsx(wd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(f, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
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
            /* @__PURE__ */ i.jsxs(f, { titulo: "Pikmin", children: [
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
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: Zl(
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
function eu(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Qm({
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
  onAyuda: g,
  onReportar: v
}) {
  var Q, K;
  const p = et(), k = As(), [C, y] = w.useState([]), [O, f] = w.useState(0), [c, m] = w.useState(null), [h, x] = w.useState(!1), [S, _] = w.useState(""), P = w.useRef(!1), j = w.useRef([]);
  w.useEffect(() => {
    fetch("/api/funmsgs").then(($) => $.ok ? $.json() : { msgs: [] }).then(($) => y($.msgs ?? [])).catch(() => {
    });
  }, []), w.useEffect(() => {
    let $ = !0;
    return I.version().then((J) => {
      $ && (m(J), !J.comprobado && !P.current && (P.current = !0, I.checkVersion().then((pe) => $ && m(pe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      $ = !1;
    };
  }, []);
  const N = ((Q = c == null ? void 0 : c.actualizacion) == null ? void 0 : Q.estado) === "descargando" || ((K = c == null ? void 0 : c.actualizacion) == null ? void 0 : K.estado) === "instalando";
  w.useEffect(() => {
    if (!N) return;
    const $ = setInterval(() => {
      I.version().then(m).catch(() => {
      });
    }, 700);
    return () => clearInterval($);
  }, [N]);
  const T = !!(e && !e.done);
  w.useEffect(() => {
    if (!T) return;
    const $ = setInterval(() => f((J) => J + 1), 1200);
    return () => clearInterval($);
  }, [T]);
  const b = C.length ? C : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], G = w.useMemo(() => {
    if (S) return S;
    if (N) {
      const $ = c == null ? void 0 : c.actualizacion;
      if (($ == null ? void 0 : $.estado) === "instalando") return p("Instalando y reiniciando…");
      const J = ($ == null ? void 0 : $.progreso) != null ? Math.round($.progreso) : null;
      return J != null ? p("Descargando… {p}%", { p: J }) : ($ == null ? void 0 : $.mensaje) || p("Descargando actualización…");
    }
    return T ? b[O % b.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? p("Listo") : p("Listo para empezar");
  }, [S, N, T, e, b, O, n, p, c]), ke = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), He = w.useMemo(() => {
    const $ = e == null ? void 0 : e.eta_s;
    return !T || $ === void 0 || $ === null || $ <= 0.5 ? "" : p(" · {x} restante", { x: eu($) });
  }, [e == null ? void 0 : e.eta_s, T, p]), ve = w.useMemo(() => !r || !r.segundos ? "" : eu(r.segundos), [r]), Le = async () => {
    x(!0), _("");
    try {
      const $ = await I.checkVersion();
      m($), $.error ? _(p("Sin conexión")) : $.hay_nueva || _(p("Estás en la última versión"));
    } catch {
      _(p("Sin conexión"));
    } finally {
      x(!1);
    }
  }, M = async () => {
    _("");
    try {
      const $ = await I.updateVersion();
      $.ok ? _(p("Instalando y reiniciando…")) : $.modo === "dev" && $.url ? (_(p("Modo desarrollo: se actualiza con git")), await I.openReleases().catch(() => {
      })) : _($.mensaje || p("No se pudo actualizar")), I.version().then(m).catch(() => {
      });
    } catch {
      _(p("No se pudo actualizar"));
    }
  }, U = !!(c != null && c.hay_nueva && !T && !N) ? p("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
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
            j.current = [...j.current, $].filter((J) => $ - J < 2500), j.current.length >= 5 && (j.current = [], _(p("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !T && (() => {
        const $ = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), J = n.placed || 1, pe = Math.min(80, Math.max(
          30,
          48 + 22 * $ - Math.min(18, J * 0.08)
        )), ye = n.efficiency * 100, Re = ye >= pe ? "buena" : ye >= pe * 0.72 ? "normal" : "baja";
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
              "data-tip": p("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: J, e: Math.round(pe) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(ye),
                  "%"
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: p("eficiencia") })
              ]
            }
          )
        ] });
      })(),
      !(n && n.pages > 0 && !T) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: G }),
      !!n && n.pages > 1 && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: p("No cabe todo en una página: se usarán varias"),
          children: p("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      T && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, ke)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          ke,
          "%",
          He
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: vt("/piensa.gif"),
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
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ i.jsx(Am, { size: 15 }),
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
          onClick: () => v == null ? void 0 : v(),
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
            /* @__PURE__ */ i.jsx(Im, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(Mm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: p("Idioma"),
          onClick: () => l == null ? void 0 : l(k === "es" ? "en" : "es"),
          children: k.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: p("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !N && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: U || p("Hay una versión nueva"),
                onClick: M,
                children: /* @__PURE__ */ i.jsx(Tm, { size: 14 })
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
                children: h ? "…" : /* @__PURE__ */ i.jsx(Rm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: M,
                children: /* @__PURE__ */ i.jsx(Lm, { size: 14 })
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
            ve || "—"
          ]
        }
      )
    ] })
  ] });
}
const Ym = [
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
], Km = "/pikmin_bloom/", tu = "/pikmin/alma.png", Jm = "/sonidos/pikmin.mp3", Xm = "/sonidos/pikmin_morir.mp3";
function Zm(e) {
  const [t, n] = w.useState(Ym), [r, a] = w.useState([]);
  return w.useEffect(() => {
    fetch(vt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(vt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => vt(Km + u)));
    }).catch(() => {
    });
  }, []), w.useMemo(
    () => e && e.length ? [...e, ...r].map(vt) : [...t, ...r].map(vt),
    [e, t, r]
  );
}
function eh({
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
  const g = Zm(d), [v, p] = w.useState([]), k = w.useRef(void 0), C = w.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = w.useRef(s);
  y.current = s;
  const O = Math.max(5e3, t * 6e4), f = (x) => {
    if (!(!n || o))
      try {
        const S = new Audio(vt(x ? Xm : Jm));
        S.volume = Math.min(1, Math.max(0, a)), S.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const x = r && Math.random() < 0.25, S = x ? vt(tu) : g[Math.floor(Math.random() * g.length)] ?? vt(tu);
    p((_) => [..._, {
      src: S,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: x,
      estado: "paseando"
    }]), f(x);
  }, m = () => {
    if (!e) return;
    const x = u ?? Math.round(O * 0.5), S = l ?? Math.round(O * 1.5), _ = x + Math.random() * Math.max(1, S - x);
    k.current = window.setTimeout(c, _);
  };
  w.useEffect(() => {
    if (!e) {
      window.clearTimeout(k.current), p([]);
      return;
    }
    return m(), () => window.clearTimeout(k.current);
  }, [e, t, n, r, a, o, g]), w.useEffect(() => {
    const x = () => {
      C.current = document.visibilityState === "hidden", !C.current && y.current && window.setTimeout(() => {
        p((S) => S.length ? (f(!1), S.map((_) => ({ ..._, estado: "festejando" }))) : S), window.setTimeout(() => {
          p([]), m();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", x), () => document.removeEventListener("visibilitychange", x);
  }, []);
  const h = (x) => {
    if (y.current && C.current) {
      p((S) => S.map((_) => _.key === x ? { ..._, estado: "quieto" } : _));
      return;
    }
    p((S) => S.filter((_) => _.key !== x)), m();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: v.map((x) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${x.estado}${x.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": x.estado,
      "data-morir": x.morir ? "1" : "0",
      style: { left: `${x.left}%` },
      onAnimationEnd: () => h(x.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: x.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => h(x.key)
        }
      )
    },
    x.key
  )) });
}
const nu = "crycat_bienvenida_v2";
function th() {
  const [e, t] = w.useState(!1);
  return w.useEffect(() => {
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
function nh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = et(), [a, o] = w.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(Ya, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(Ya, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(fo, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(kd, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(bm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(wd, { size: 18 }),
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((g, v) => /* @__PURE__ */ i.jsx("li", { children: g }, v)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([g, v, p], k) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: g }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: v }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: p })
      ] })
    ] }, k)) }),
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
const rh = "https://github.com/dhernandezgit/CryCat-Tool", ah = [
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
function oh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = et(), [s, u] = w.useState(""), [l, d] = w.useState(""), [g, v] = w.useState(""), [p, k] = w.useState(!0), [C, y] = w.useState(!0), [O, f] = w.useState(!0), [c, m] = w.useState(!1);
  w.useEffect(() => {
    e && (I.version().then((j) => u(j.actual)).catch(() => {
    }), m(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (N) => `- [${N.t}] ${N.msg} (${N.donde || "?"})`
  );
  if (!e) return null;
  const x = () => {
    var b, G;
    const j = navigator.userAgent, N = !!globalThis.__crycatBase, T = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${N ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${j}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((b = window.screen) == null ? void 0 : b.width) ?? "?"}x${((G = window.screen) == null ? void 0 : G.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && T.push(`- Elementos: ${a.pages} página(s)`), r && T.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), T.join(`
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
  ].map((N) => `- ${N}: ${String(n[N])}`).join(`
`) : "", _ = () => {
    const j = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    p && j.push("### Entorno", x(), ""), C && n && j.push("### Ajustes", S(), "");
    const N = h();
    return O && N.length && j.push("### Errores recogidos", N.join(`
`), ""), j.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), j.join(`
`);
  }, P = () => {
    const j = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, N = `${rh}/issues/new?` + new URLSearchParams({
      title: j,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(N, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: ah.map(([j, N]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${j}`,
        onClick: () => d((T) => (T ? T + `
` : "") + N),
        children: o(j)
      },
      j
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
          onChange: (j) => d(j.target.value)
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
          onChange: (j) => v(j.target.value)
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
          onChange: (j) => k(j.target.checked)
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
          onChange: (j) => y(j.target.checked)
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
          checked: O,
          onChange: (j) => f(j.target.checked)
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

${g}

${_()}`
              ), m(!0);
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
function ih() {
  const [e, t] = w.useState([]), [n, r] = w.useState(null), [a, o] = w.useState(null), [s, u] = w.useState(null), [l, d] = w.useState(null), [g, v] = w.useState(null), [p, k] = w.useState(!0), [C, y] = w.useState(!1), [O, f] = w.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, m] = w.useState(33.3), [h, x] = w.useState(33.3), S = th(), _ = w.useRef(null), P = w.useRef(null);
  w.useEffect(() => {
    (async () => {
      try {
        const D = await I.getSettings();
        d(D.settings), Kl(D.settings.tema), f((B) => ({
          ...B,
          guidesVisible: D.settings.ver_guias,
          eyeTransparent: D.settings.fondo_transparente
        })), t((await I.listAssets()).map($r)), o(await I.result());
      } catch {
        k(!1);
      }
    })();
  }, []), w.useEffect(() => {
    const D = (B) => {
      const Se = B.detail;
      m(Se ? 19 : 33.3), x(Se ? 62 : 33.3), f((tt) => ({ ...tt, hojaGirada: Se }));
    };
    return window.addEventListener("crycat:disposicion", D), () => window.removeEventListener("crycat:disposicion", D);
  }, []), w.useEffect(() => {
    const D = setInterval(async () => {
      try {
        await I.health(), k(!0);
      } catch {
        k(!1);
      }
    }, 5e3);
    return () => clearInterval(D);
  }, []);
  const j = w.useCallback(async () => {
    try {
      t((await I.listAssets()).map($r)), o(await I.result());
      try {
        u(await I.estimate());
      } catch {
      }
    } catch {
      k(!1);
    }
  }, []), N = w.useCallback((D) => {
    P.current && window.clearInterval(P.current), P.current = window.setInterval(async () => {
      try {
        const B = await I.job(D);
        v(B), B.done && (window.clearInterval(P.current), P.current = null, await j(), B.status === "done" && window.setTimeout(() => v(null), 2500));
      } catch {
        window.clearInterval(P.current), P.current = null;
      }
    }, 300);
  }, []), T = w.useCallback(async () => {
    try {
      const D = await I.optimize();
      v(D), N(D.id);
    } catch {
      k(!1);
    }
  }, [N]), b = w.useCallback(
    async (D) => {
      try {
        const B = await I.optimize(D, !0);
        v(B), N(B.id);
      } catch {
        k(!1);
      }
    },
    [N]
  ), G = w.useCallback(() => {
    l && l.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(T, 400));
  }, [T, l]), ke = w.useRef(null);
  w.useEffect(() => {
    ke.current = G;
  }, [G]);
  const He = w.useRef(!1);
  w.useEffect(() => {
    if (!(!l || He.current)) {
      if (e.length > 0) {
        He.current = !0;
        return;
      }
      He.current = !0, I.crearDemo().then(async (D) => {
        var B;
        D.ok && (await j(), (B = ke.current) == null || B.call(ke));
      }).catch(() => {
      });
    }
  }, [l, e.length, j]);
  const ve = w.useCallback(
    async (D) => {
      d((B) => B && { ...B, ...D }), D.tema && Kl(D.tema);
      try {
        const B = await I.putSettings(D);
        if (B.job)
          v(B.job), N(B.job.id);
        else
          try {
            u(await I.estimate());
          } catch {
          }
      } catch {
        k(!1);
      }
    },
    [N]
  ), Le = w.useRef([]), M = w.useRef([]), [F, U] = w.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), Q = (l == null ? void 0 : l.historial) !== !1, K = (l == null ? void 0 : l.historial_max) ?? 40, $ = () => U({
    puedeDeshacer: Le.current.length > 0,
    puedeRehacer: M.current.length > 0
  }), J = w.useCallback(() => {
    const D = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && D.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && D.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && D.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && D.push("mini_enabled", "mini_quota"), D;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), pe = w.useCallback((D) => {
    const B = {};
    for (const Se of J()) B[Se] = D[Se];
    return B;
  }, [J]), ye = w.useCallback(() => {
    Q && (Le.current = [...Le.current, e].slice(-K), M.current = [], $());
  }, [e, Q, K]), Re = w.useCallback(async () => {
    const D = Le.current.pop();
    if (D) {
      M.current = [...M.current, e], t(D), $();
      for (const B of D)
        await I.patchAsset(B.id, pe(B)).catch(() => {
        });
      await j();
    }
  }, [e, j, pe]), wt = w.useCallback(async () => {
    const D = M.current.pop();
    if (D) {
      Le.current = [...Le.current, e], t(D), $();
      for (const B of D)
        await I.patchAsset(B.id, pe(B)).catch(() => {
        });
      await j();
    }
  }, [e, j, pe]);
  w.useEffect(() => {
    const D = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const tt = B.target;
      if (tt && (tt.tagName === "INPUT" || tt.tagName === "TEXTAREA" || tt.tagName === "SELECT" || tt.isContentEditable)) return;
      const nt = B.key.toLowerCase();
      nt === "z" && !B.shiftKey ? (B.preventDefault(), Re()) : (nt === "y" || nt === "z" && B.shiftKey) && (B.preventDefault(), wt());
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [Re, wt]);
  const wn = w.useCallback(
    (D) => {
      const B = (tt) => {
        const Wr = window.innerWidth, nt = tt.clientX / Wr * 100;
        D === "left" ? m(Math.min(45, Math.max(12, nt))) : x(Math.min(60, Math.max(20, nt - c)));
      }, Se = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", Se);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", Se);
    },
    [c]
  );
  return w.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(ym, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Om,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await j(), G();
          },
          saveSettings: ve,
          onEditarContorno: (D) => r(D),
          onAntesDeCambiar: ye,
          verBordes: O.verBordes
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => wn("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ i.jsx(
        Bm,
        {
          assets: e,
          result: a,
          settings: l,
          ui: O,
          setUi: f,
          saveSettings: ve,
          optimize: T,
          onRefresh: j,
          onJob: (D) => {
            v(D), N(D.id);
          },
          onRecalc: b,
          editando: n,
          onFinEdicion: async () => {
            r(null), await j();
          },
          onDeshacer: Re,
          onRehacer: wt,
          puedeDeshacer: F.puedeDeshacer,
          puedeRehacer: F.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => wn("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Wm,
        {
          settings: l,
          assets: e,
          saveSettings: ve
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Qm,
      {
        job: g,
        backendOk: p,
        result: a,
        estimate: s,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (D) => ve({ volumen: D }),
        onMute: (D) => ve({ mute: D }),
        onIdioma: (D) => ve({ idioma: D }),
        onEasterEgg: () => ve({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: S.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      eh,
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
      nh,
      {
        open: S.visible,
        onClose: S.cerrar,
        onAbrirCarpeta: () => void I.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      oh,
      {
        open: C,
        onClose: () => y(!1),
        settings: l,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: xm("es", "Cargando CryCat…") });
}
const Ed = document.getElementById("root"), Bt = [
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
], $i = 8, Ca = [];
globalThis.__crycatErrores = Ca;
const zd = (e, t) => {
  Ca.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Ca.length > 12 && Ca.shift();
};
window.addEventListener("error", (e) => zd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => zd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Oi;
function ru(e, t = !1) {
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
const da = (e, t) => {
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
}, sh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function lh(e) {
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
async function uh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((v, p) => {
    s[p] = v;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [v, p] = await lh(l);
    u = v, s["content-type"] = p;
  } else l instanceof Blob ? u = Fi(await l.arrayBuffer()) : typeof l == "string" && (u = Fi(new TextEncoder().encode(l).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(u) + ")", g = JSON.parse(await wr.runPythonAsync(d));
  return new Response(sh(g.body), {
    status: g.status || 200,
    headers: g.headers || { "content-type": "application/json" }
  });
}
function ch() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && wr)
      try {
        return await uh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function dh() {
  try {
    if (ru("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const s = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: s }).then(() => navigator.serviceWorker.ready),
          new Promise((u) => setTimeout(u, 6e3))
        ]);
      } catch {
      }
    wr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(da), da("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await wr.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(u.method) + ", " + JSON.stringify(u.path) + ", " + JSON.stringify(JSON.stringify(u.headers || {})) + ", " + JSON.stringify(u.body || "") + ")", g = await wr.runPythonAsync(d);
          l.postMessage(JSON.parse(g));
        } catch (d) {
          l.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (d && d.message ? d.message : d))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, ch();
    const n = document.createElement("div");
    n.id = "crycat-espera";
    const r = Ii().colors;
    n.style.cssText = "position:fixed;inset:0;display:none;z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:" + r.bg + "f2;font:16px system-ui;color:" + r.textSoft + ";text-align:center;padding:24px", n.innerHTML = '<img src="./app/icono.png" alt="" style="width:72px;height:72px;border-radius:20px" /><div id="espera-frase" style="font-size:20px;font-weight:800;color:' + r.text + ';max-width:620px;line-height:1.25"></div><div style="font-size:13px">Optimizando de verdad: el cálculo se hace en tu equipo y puede tardar unos segundos.</div>', document.body.appendChild(n);
    const a = window.fetch.bind(window), o = async (s, u) => {
      const l = String((s == null ? void 0 : s.url) ?? s ?? ""), d = l.includes("/api/optimize") || l.includes("/api/demo");
      if (d) {
        n.style.display = "flex";
        const g = document.getElementById("espera-frase");
        let v = Math.floor(Math.random() * Bt.length);
        g && (g.textContent = Bt[v++ % Bt.length]), window.clearInterval(Bo), Bo = window.setInterval(() => {
          const p = document.getElementById("espera-frase");
          p && (p.textContent = Bt[v++ % Bt.length]);
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
      s && s !== "wiwi" && await fetch(pn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: s })
      });
    } catch {
    }
    da("Optimizando la muestra inicial…", 8);
    try {
      const s = await fetch(pn() + "api/assets").then((u) => u.json());
      Array.isArray(s) && s.length === 0 && await fetch(pn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    da("Abriendo la aplicación…", 8), window.clearTimeout(Oi), gd(Ed).render(/* @__PURE__ */ i.jsx(ih, {}));
  } catch (e) {
    ru("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
dh();
