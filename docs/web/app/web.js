var su = { exports: {} }, Za = {}, lu = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr = Symbol.for("react.element"), Ud = Symbol.for("react.portal"), qd = Symbol.for("react.fragment"), Vd = Symbol.for("react.strict_mode"), Gd = Symbol.for("react.profiler"), Hd = Symbol.for("react.provider"), Wd = Symbol.for("react.context"), Qd = Symbol.for("react.forward_ref"), Yd = Symbol.for("react.suspense"), Kd = Symbol.for("react.memo"), Jd = Symbol.for("react.lazy"), qs = Symbol.iterator;
function Xd(e) {
  return e === null || typeof e != "object" ? null : (e = qs && e[qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var uu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, cu = Object.assign, du = {};
function Kn(e, t, n) {
  this.props = e, this.context = t, this.refs = du, this.updater = n || uu;
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pu() {
}
pu.prototype = Kn.prototype;
function Vi(e, t, n) {
  this.props = e, this.context = t, this.refs = du, this.updater = n || uu;
}
var Gi = Vi.prototype = new pu();
Gi.constructor = Vi;
cu(Gi, Kn.prototype);
Gi.isPureReactComponent = !0;
var Vs = Array.isArray, fu = Object.prototype.hasOwnProperty, Hi = { current: null }, mu = { key: !0, ref: !0, __self: !0, __source: !0 };
function hu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) fu.call(t, r) && !mu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), d = 0; d < u; d++) l[d] = arguments[d + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Gr, type: e, key: o, ref: s, props: a, _owner: Hi.current };
}
function Zd(e, t) {
  return { $$typeof: Gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function ep(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Gs = /\/+/g;
function yo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ep("" + e.key) : t.toString(36);
}
function ha(e, t, n, r, a) {
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
        case Gr:
        case Ud:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + yo(s, 0) : r, Vs(a) ? (n = "", e != null && (n = e.replace(Gs, "$&/") + "/"), ha(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Wi(a) && (a = Zd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Gs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Vs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + yo(o, u);
    s += ha(o, t, n, l, a);
  }
  else if (l = Xd(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + yo(o, u++), s += ha(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Jr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return ha(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function tp(e) {
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
var Me = { current: null }, ga = { transition: null }, np = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: ga, ReactCurrentOwner: Hi };
function gu() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Jr, forEach: function(e, t, n) {
  Jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Wi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = Kn;
q.Fragment = qd;
q.Profiler = Gd;
q.PureComponent = Vi;
q.StrictMode = Vd;
q.Suspense = Yd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
q.act = gu;
q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = cu({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Hi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) fu.call(t, l) && !mu.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var d = 0; d < l; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Gr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
q.createContext = function(e) {
  return e = { $$typeof: Wd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Hd, _context: e }, e.Consumer = e;
};
q.createElement = hu;
q.createFactory = function(e) {
  var t = hu.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Qd, render: e };
};
q.isValidElement = Wi;
q.lazy = function(e) {
  return { $$typeof: Jd, _payload: { _status: -1, _result: e }, _init: tp };
};
q.memo = function(e, t) {
  return { $$typeof: Kd, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = ga.transition;
  ga.transition = {};
  try {
    e();
  } finally {
    ga.transition = t;
  }
};
q.unstable_act = gu;
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
lu.exports = q;
var w = lu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rp = w, ap = Symbol.for("react.element"), op = Symbol.for("react.fragment"), ip = Object.prototype.hasOwnProperty, sp = rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function vu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ip.call(t, r) && !lp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: ap, type: e, key: o, ref: s, props: a, _owner: sp.current };
}
Za.Fragment = op;
Za.jsx = vu;
Za.jsxs = vu;
su.exports = Za;
var i = su.exports, yu = { exports: {} }, Ve = {}, xu = { exports: {} }, wu = {};
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
  function t(P, F) {
    var B = P.length;
    P.push(F);
    e: for (; 0 < B; ) {
      var Y = B - 1 >>> 1, J = P[Y];
      if (0 < a(J, F)) P[Y] = F, P[B] = J, B = Y;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var F = P[0], B = P.pop();
    if (B !== F) {
      P[0] = B;
      e: for (var Y = 0, J = P.length, O = J >>> 1; Y < O; ) {
        var X = 2 * (Y + 1) - 1, ge = P[X], ve = X + 1, Ee = P[ve];
        if (0 > a(ge, B)) ve < J && 0 > a(Ee, ge) ? (P[Y] = Ee, P[ve] = B, Y = ve) : (P[Y] = ge, P[X] = B, Y = X);
        else if (ve < J && 0 > a(Ee, B)) P[Y] = Ee, P[ve] = B, Y = ve;
        else break e;
      }
    }
    return F;
  }
  function a(P, F) {
    var B = P.sortIndex - F.sortIndex;
    return B !== 0 ? B : P.id - F.id;
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
  var l = [], d = [], m = 1, v = null, f = 3, j = !1, _ = !1, y = !1, $ = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var F = n(d); F !== null; ) {
      if (F.callback === null) r(d);
      else if (F.startTime <= P) r(d), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = n(d);
    }
  }
  function p(P) {
    if (y = !1, h(P), !_) if (n(l) !== null) _ = !0, He(x);
    else {
      var F = n(d);
      F !== null && Oe(p, F.startTime - P);
    }
  }
  function x(P, F) {
    _ = !1, y && (y = !1, g(b), b = -1), j = !0;
    var B = f;
    try {
      for (h(F), v = n(l); v !== null && (!(v.expirationTime > F) || P && !I()); ) {
        var Y = v.callback;
        if (typeof Y == "function") {
          v.callback = null, f = v.priorityLevel;
          var J = Y(v.expirationTime <= F);
          F = e.unstable_now(), typeof J == "function" ? v.callback = J : v === n(l) && r(l), h(F);
        } else r(l);
        v = n(l);
      }
      if (v !== null) var O = !0;
      else {
        var X = n(d);
        X !== null && Oe(p, X.startTime - F), O = !1;
      }
      return O;
    } finally {
      v = null, f = B, j = !1;
    }
  }
  var k = !1, C = null, b = -1, S = 5, N = -1;
  function I() {
    return !(e.unstable_now() - N < S);
  }
  function Q() {
    if (C !== null) {
      var P = e.unstable_now();
      N = P;
      var F = !0;
      try {
        F = C(!0, P);
      } finally {
        F ? G() : (k = !1, C = null);
      }
    } else k = !1;
  }
  var G;
  if (typeof c == "function") G = function() {
    c(Q);
  };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(), te = T.port2;
    T.port1.onmessage = Q, G = function() {
      te.postMessage(null);
    };
  } else G = function() {
    $(Q, 0);
  };
  function He(P) {
    C = P, k || (k = !0, G());
  }
  function Oe(P, F) {
    b = $(function() {
      P(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || j || (_ = !0, He(x));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = f;
    }
    var B = f;
    f = F;
    try {
      return P();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, F) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var B = f;
    f = P;
    try {
      return F();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(P, F, B) {
    var Y = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? Y + B : Y) : B = Y, P) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = B + J, P = { id: m++, callback: F, priorityLevel: P, startTime: B, expirationTime: J, sortIndex: -1 }, B > Y ? (P.sortIndex = B, t(d, P), n(l) === null && P === n(d) && (y ? (g(b), b = -1) : y = !0, Oe(p, B - Y))) : (P.sortIndex = J, t(l, P), _ || j || (_ = !0, He(x))), P;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(P) {
    var F = f;
    return function() {
      var B = f;
      f = F;
      try {
        return P.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(wu);
xu.exports = wu;
var up = xu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp = w, qe = up;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ju = /* @__PURE__ */ new Set(), Cr = {};
function xn(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) ju.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Go = Object.prototype.hasOwnProperty, dp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hs = {}, Ws = {};
function pp(e) {
  return Go.call(Ws, e) ? !0 : Go.call(Hs, e) ? !1 : dp.test(e) ? Ws[e] = !0 : (Hs[e] = !0, !1);
}
function fp(e, t, n, r) {
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
function mp(e, t, n, r) {
  if (t === null || typeof t > "u" || fp(e, t, n, r)) return !0;
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
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Qi,
    Yi
  );
  ke[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Qi, Yi);
  ke[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Qi, Yi);
  ke[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ki(e, t, n, r) {
  var a = ke.hasOwnProperty(t) ? ke[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (mp(t, n, a, r) && (n = null), r || a === null ? pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xr = Symbol.for("react.element"), _n = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), Ho = Symbol.for("react.profiler"), ku = Symbol.for("react.provider"), Su = Symbol.for("react.context"), Xi = Symbol.for("react.forward_ref"), Wo = Symbol.for("react.suspense"), Qo = Symbol.for("react.suspense_list"), Zi = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Cu = Symbol.for("react.offscreen"), Qs = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object" ? null : (e = Qs && e[Qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, xo;
function ur(e) {
  if (xo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    xo = t && t[1] || "";
  }
  return `
` + xo + e;
}
var wo = !1;
function jo(e, t) {
  if (!e || wo) return "";
  wo = !0;
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
    wo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function hp(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = jo(e.type, !1), e;
    case 11:
      return e = jo(e.type.render, !1), e;
    case 1:
      return e = jo(e.type, !0), e;
    default:
      return "";
  }
}
function Yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case _n:
      return "Portal";
    case Ho:
      return "Profiler";
    case Ji:
      return "StrictMode";
    case Wo:
      return "Suspense";
    case Qo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Su:
      return (e.displayName || "Context") + ".Consumer";
    case ku:
      return (e._context.displayName || "Context") + ".Provider";
    case Xi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Zi:
      return t = e.displayName || null, t !== null ? t : Yo(e.type) || "Memo";
    case Dt:
      t = e._payload, e = e._init;
      try {
        return Yo(e(t));
      } catch {
      }
  }
  return null;
}
function gp(e) {
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
      return Yo(t);
    case 8:
      return t === Ji ? "StrictMode" : "Mode";
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
function _u(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function vp(e) {
  var t = _u(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Zr(e) {
  e._valueTracker || (e._valueTracker = vp(e));
}
function Nu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = _u(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function za(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ko(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ys(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Eu(e, t) {
  t = t.checked, t != null && Ki(e, "checked", t, !1);
}
function Jo(e, t) {
  Eu(e, t);
  var n = Xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xo(e, t.type, Xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ks(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xo(e, t, n) {
  (t !== "number" || za(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function Dn(e, t, n, r) {
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
function Zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Js(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function zu(e, t) {
  var n = Xt(t.value), r = Xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Xs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Pu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ea, bu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ea = ea || document.createElement("div"), ea.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ea.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
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
}, yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function(e) {
  yp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
  });
});
function Mu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
}
function Tu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Mu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var xp = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ti(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function ni(e, t) {
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
var ri = null;
function es(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ai = null, $n = null, On = null;
function Zs(e) {
  if (e = Qr(e)) {
    if (typeof ai != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = ao(t), ai(e.stateNode, e.type, t));
  }
}
function Lu(e) {
  $n ? On ? On.push(e) : On = [e] : $n = e;
}
function Ru() {
  if ($n) {
    var e = $n, t = On;
    if (On = $n = null, Zs(e), t) for (e = 0; e < t.length; e++) Zs(t[e]);
  }
}
function Iu(e, t) {
  return e(t);
}
function Au() {
}
var ko = !1;
function Du(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    return Iu(e, t, n);
  } finally {
    ko = !1, ($n !== null || On !== null) && (Au(), Ru());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ao(n);
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
var oi = !1;
if (Et) try {
  var nr = {};
  Object.defineProperty(nr, "passive", { get: function() {
    oi = !0;
  } }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
} catch {
  oi = !1;
}
function wp(e, t, n, r, a, o, s, u, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var mr = !1, Pa = null, ba = !1, ii = null, jp = { onError: function(e) {
  mr = !0, Pa = e;
} };
function kp(e, t, n, r, a, o, s, u, l) {
  mr = !1, Pa = null, wp.apply(jp, arguments);
}
function Sp(e, t, n, r, a, o, s, u, l) {
  if (kp.apply(this, arguments), mr) {
    if (mr) {
      var d = Pa;
      mr = !1, Pa = null;
    } else throw Error(z(198));
    ba || (ba = !0, ii = d);
  }
}
function wn(e) {
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
function $u(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function el(e) {
  if (wn(e) !== e) throw Error(z(188));
}
function Cp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wn(e), t === null) throw Error(z(188));
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
        if (o === n) return el(a), e;
        if (o === r) return el(a), t;
        o = o.sibling;
      }
      throw Error(z(188));
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
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function Ou(e) {
  return e = Cp(e), e !== null ? Fu(e) : null;
}
function Fu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bu = qe.unstable_scheduleCallback, tl = qe.unstable_cancelCallback, _p = qe.unstable_shouldYield, Np = qe.unstable_requestPaint, pe = qe.unstable_now, Ep = qe.unstable_getCurrentPriorityLevel, ts = qe.unstable_ImmediatePriority, Uu = qe.unstable_UserBlockingPriority, Ma = qe.unstable_NormalPriority, zp = qe.unstable_LowPriority, qu = qe.unstable_IdlePriority, eo = null, vt = null;
function Pp(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function") try {
    vt.onCommitFiberRoot(eo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var lt = Math.clz32 ? Math.clz32 : Tp, bp = Math.log, Mp = Math.LN2;
function Tp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (bp(e) / Mp | 0) | 0;
}
var ta = 64, na = 4194304;
function dr(e) {
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
function Ta(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~a;
    u !== 0 ? r = dr(u) : (o &= s, o !== 0 && (r = dr(o)));
  } else s = n & ~a, s !== 0 ? r = dr(s) : o !== 0 && (r = dr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - lt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Lp(e, t) {
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
function Rp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - lt(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Lp(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function si(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Vu() {
  var e = ta;
  return ta <<= 1, !(ta & 4194240) && (ta = 64), e;
}
function So(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function Ip(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - lt(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function ns(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var K = 0;
function Gu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hu, rs, Wu, Qu, Yu, li = !1, ra = [], Vt = null, Gt = null, Ht = null, Er = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Ot = [], Ap = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function nl(e, t) {
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
      Er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(t.pointerId);
  }
}
function rr(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Qr(t), t !== null && rs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Dp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Vt = rr(Vt, e, t, n, r, a), !0;
    case "dragenter":
      return Gt = rr(Gt, e, t, n, r, a), !0;
    case "mouseover":
      return Ht = rr(Ht, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Er.set(o, rr(Er.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, zr.set(o, rr(zr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Ku(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = $u(n), t !== null) {
          e.blockedOn = t, Yu(e.priority, function() {
            Wu(n);
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
function va(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ri = r, n.target.dispatchEvent(r), ri = null;
    } else return t = Qr(n), t !== null && rs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function rl(e, t, n) {
  va(e) && n.delete(t);
}
function $p() {
  li = !1, Vt !== null && va(Vt) && (Vt = null), Gt !== null && va(Gt) && (Gt = null), Ht !== null && va(Ht) && (Ht = null), Er.forEach(rl), zr.forEach(rl);
}
function ar(e, t) {
  e.blockedOn === t && (e.blockedOn = null, li || (li = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, $p)));
}
function Pr(e) {
  function t(a) {
    return ar(a, e);
  }
  if (0 < ra.length) {
    ar(ra[0], e);
    for (var n = 1; n < ra.length; n++) {
      var r = ra[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vt !== null && ar(Vt, e), Gt !== null && ar(Gt, e), Ht !== null && ar(Ht, e), Er.forEach(t), zr.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null); ) Ku(n), n.blockedOn === null && Ot.shift();
}
var Fn = Mt.ReactCurrentBatchConfig, La = !0;
function Op(e, t, n, r) {
  var a = K, o = Fn.transition;
  Fn.transition = null;
  try {
    K = 1, as(e, t, n, r);
  } finally {
    K = a, Fn.transition = o;
  }
}
function Fp(e, t, n, r) {
  var a = K, o = Fn.transition;
  Fn.transition = null;
  try {
    K = 4, as(e, t, n, r);
  } finally {
    K = a, Fn.transition = o;
  }
}
function as(e, t, n, r) {
  if (La) {
    var a = ui(e, t, n, r);
    if (a === null) Lo(e, t, r, Ra, n), nl(e, r);
    else if (Dp(a, e, t, n, r)) r.stopPropagation();
    else if (nl(e, r), t & 4 && -1 < Ap.indexOf(e)) {
      for (; a !== null; ) {
        var o = Qr(a);
        if (o !== null && Hu(o), o = ui(e, t, n, r), o === null && Lo(e, t, r, Ra, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Lo(e, t, r, null, n);
  }
}
var Ra = null;
function ui(e, t, n, r) {
  if (Ra = null, e = es(r), e = ln(e), e !== null) if (t = wn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = $u(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ra = e, null;
}
function Ju(e) {
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
      switch (Ep()) {
        case ts:
          return 1;
        case Uu:
          return 4;
        case Ma:
        case zp:
          return 16;
        case qu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null, os = null, ya = null;
function Xu() {
  if (ya) return ya;
  var e, t = os, n = t.length, r, a = "value" in Ut ? Ut.value : Ut.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return ya = a.slice(e, 1 < r ? 1 - r : void 0);
}
function xa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function aa() {
  return !0;
}
function al() {
  return !1;
}
function Ge(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? aa : al, this.isPropagationStopped = al, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = aa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = aa);
  }, persist: function() {
  }, isPersistent: aa }), t;
}
var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, is = Ge(Jn), Wr = ce({}, Jn, { view: 0, detail: 0 }), Bp = Ge(Wr), Co, _o, or, to = ce({}, Wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ss, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== or && (or && e.type === "mousemove" ? (Co = e.screenX - or.screenX, _o = e.screenY - or.screenY) : _o = Co = 0, or = e), Co);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _o;
} }), ol = Ge(to), Up = ce({}, to, { dataTransfer: 0 }), qp = Ge(Up), Vp = ce({}, Wr, { relatedTarget: 0 }), No = Ge(Vp), Gp = ce({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hp = Ge(Gp), Wp = ce({}, Jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Qp = Ge(Wp), Yp = ce({}, Jn, { data: 0 }), il = Ge(Yp), Kp = {
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
}, Jp = {
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
}, Xp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xp[e]) ? !!t[e] : !1;
}
function ss() {
  return Zp;
}
var ef = ce({}, Wr, { key: function(e) {
  if (e.key) {
    var t = Kp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = xa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ss, charCode: function(e) {
  return e.type === "keypress" ? xa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), tf = Ge(ef), nf = ce({}, to, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sl = Ge(nf), rf = ce({}, Wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ss }), af = Ge(rf), of = ce({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sf = Ge(of), lf = ce({}, to, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), uf = Ge(lf), cf = [9, 13, 27, 32], ls = Et && "CompositionEvent" in window, hr = null;
Et && "documentMode" in document && (hr = document.documentMode);
var df = Et && "TextEvent" in window && !hr, Zu = Et && (!ls || hr && 8 < hr && 11 >= hr), ll = " ", ul = !1;
function ec(e, t) {
  switch (e) {
    case "keyup":
      return cf.indexOf(t.keyCode) !== -1;
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
function tc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function pf(e, t) {
  switch (e) {
    case "compositionend":
      return tc(t);
    case "keypress":
      return t.which !== 32 ? null : (ul = !0, ll);
    case "textInput":
      return e = t.data, e === ll && ul ? null : e;
    default:
      return null;
  }
}
function ff(e, t) {
  if (En) return e === "compositionend" || !ls && ec(e, t) ? (e = Xu(), ya = os = Ut = null, En = !1, e) : null;
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
      return Zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mf[e.type] : t === "textarea";
}
function nc(e, t, n, r) {
  Lu(r), t = Ia(t, "onChange"), 0 < t.length && (n = new is("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gr = null, br = null;
function hf(e) {
  fc(e, 0);
}
function no(e) {
  var t = bn(e);
  if (Nu(t)) return e;
}
function gf(e, t) {
  if (e === "change") return t;
}
var rc = !1;
if (Et) {
  var Eo;
  if (Et) {
    var zo = "oninput" in document;
    if (!zo) {
      var dl = document.createElement("div");
      dl.setAttribute("oninput", "return;"), zo = typeof dl.oninput == "function";
    }
    Eo = zo;
  } else Eo = !1;
  rc = Eo && (!document.documentMode || 9 < document.documentMode);
}
function pl() {
  gr && (gr.detachEvent("onpropertychange", ac), br = gr = null);
}
function ac(e) {
  if (e.propertyName === "value" && no(br)) {
    var t = [];
    nc(t, br, e, es(e)), Du(hf, t);
  }
}
function vf(e, t, n) {
  e === "focusin" ? (pl(), gr = t, br = n, gr.attachEvent("onpropertychange", ac)) : e === "focusout" && pl();
}
function yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return no(br);
}
function xf(e, t) {
  if (e === "click") return no(t);
}
function wf(e, t) {
  if (e === "input" || e === "change") return no(t);
}
function jf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ct = typeof Object.is == "function" ? Object.is : jf;
function Mr(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Go.call(t, a) || !ct(e[a], t[a])) return !1;
  }
  return !0;
}
function fl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ml(e, t) {
  var n = fl(e);
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
    n = fl(n);
  }
}
function oc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ic() {
  for (var e = window, t = za(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = za(e.document);
  }
  return t;
}
function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kf(e) {
  var t = ic(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && oc(n.ownerDocument.documentElement, n)) {
    if (r !== null && us(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = ml(n, o);
        var s = ml(
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
var Sf = Et && "documentMode" in document && 11 >= document.documentMode, zn = null, ci = null, vr = null, di = !1;
function hl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di || zn == null || zn !== za(r) || (r = zn, "selectionStart" in r && us(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), vr && Mr(vr, r) || (vr = r, r = Ia(ci, "onSelect"), 0 < r.length && (t = new is("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = zn)));
}
function oa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: oa("Animation", "AnimationEnd"), animationiteration: oa("Animation", "AnimationIteration"), animationstart: oa("Animation", "AnimationStart"), transitionend: oa("Transition", "TransitionEnd") }, Po = {}, sc = {};
Et && (sc = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function ro(e) {
  if (Po[e]) return Po[e];
  if (!Pn[e]) return e;
  var t = Pn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in sc) return Po[e] = t[n];
  return e;
}
var lc = ro("animationend"), uc = ro("animationiteration"), cc = ro("animationstart"), dc = ro("transitionend"), pc = /* @__PURE__ */ new Map(), gl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
  pc.set(e, t), xn(t, [e]);
}
for (var bo = 0; bo < gl.length; bo++) {
  var Mo = gl[bo], Cf = Mo.toLowerCase(), _f = Mo[0].toUpperCase() + Mo.slice(1);
  en(Cf, "on" + _f);
}
en(lc, "onAnimationEnd");
en(uc, "onAnimationIteration");
en(cc, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(dc, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nf = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function vl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Sp(r, t, void 0, e), e.currentTarget = null;
}
function fc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, d = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        vl(a, u, d), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, d = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        vl(a, u, d), o = l;
      }
    }
  }
  if (ba) throw e = ii, ba = !1, ii = null, e;
}
function re(e, t) {
  var n = t[gi];
  n === void 0 && (n = t[gi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (mc(t, e, 2, !1), n.add(r));
}
function To(e, t, n) {
  var r = 0;
  t && (r |= 4), mc(n, e, r, t);
}
var ia = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[ia]) {
    e[ia] = !0, ju.forEach(function(n) {
      n !== "selectionchange" && (Nf.has(n) || To(n, !1, e), To(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ia] || (t[ia] = !0, To("selectionchange", !1, t));
  }
}
function mc(e, t, n, r) {
  switch (Ju(t)) {
    case 1:
      var a = Op;
      break;
    case 4:
      a = Fp;
      break;
    default:
      a = as;
  }
  n = a.bind(null, t, n, e), a = void 0, !oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Lo(e, t, n, r, a) {
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
        if (s = ln(u), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Du(function() {
    var d = o, m = es(n), v = [];
    e: {
      var f = pc.get(e);
      if (f !== void 0) {
        var j = is, _ = e;
        switch (e) {
          case "keypress":
            if (xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = tf;
            break;
          case "focusin":
            _ = "focus", j = No;
            break;
          case "focusout":
            _ = "blur", j = No;
            break;
          case "beforeblur":
          case "afterblur":
            j = No;
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
            j = ol;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = qp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = af;
            break;
          case lc:
          case uc:
          case cc:
            j = Hp;
            break;
          case dc:
            j = sf;
            break;
          case "scroll":
            j = Bp;
            break;
          case "wheel":
            j = uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = sl;
        }
        var y = (t & 4) !== 0, $ = !y && e === "scroll", g = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var c = d, h; c !== null; ) {
          h = c;
          var p = h.stateNode;
          if (h.tag === 5 && p !== null && (h = p, g !== null && (p = Nr(c, g), p != null && y.push(Lr(c, p, h)))), $) break;
          c = c.return;
        }
        0 < y.length && (f = new j(f, _, null, n, m), v.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", f && n !== ri && (_ = n.relatedTarget || n.fromElement) && (ln(_) || _[zt])) break e;
        if ((j || f) && (f = m.window === m ? m : (f = m.ownerDocument) ? f.defaultView || f.parentWindow : window, j ? (_ = n.relatedTarget || n.toElement, j = d, _ = _ ? ln(_) : null, _ !== null && ($ = wn(_), _ !== $ || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (j = null, _ = d), j !== _)) {
          if (y = ol, p = "onMouseLeave", g = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = sl, p = "onPointerLeave", g = "onPointerEnter", c = "pointer"), $ = j == null ? f : bn(j), h = _ == null ? f : bn(_), f = new y(p, c + "leave", j, n, m), f.target = $, f.relatedTarget = h, p = null, ln(m) === d && (y = new y(g, c + "enter", _, n, m), y.target = h, y.relatedTarget = $, p = y), $ = p, j && _) t: {
            for (y = j, g = _, c = 0, h = y; h; h = Cn(h)) c++;
            for (h = 0, p = g; p; p = Cn(p)) h++;
            for (; 0 < c - h; ) y = Cn(y), c--;
            for (; 0 < h - c; ) g = Cn(g), h--;
            for (; c--; ) {
              if (y === g || g !== null && y === g.alternate) break t;
              y = Cn(y), g = Cn(g);
            }
            y = null;
          }
          else y = null;
          j !== null && yl(v, f, j, y, !1), _ !== null && $ !== null && yl(v, $, _, y, !0);
        }
      }
      e: {
        if (f = d ? bn(d) : window, j = f.nodeName && f.nodeName.toLowerCase(), j === "select" || j === "input" && f.type === "file") var x = gf;
        else if (cl(f)) if (rc) x = wf;
        else {
          x = yf;
          var k = vf;
        }
        else (j = f.nodeName) && j.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (x = xf);
        if (x && (x = x(e, d))) {
          nc(v, x, n, m);
          break e;
        }
        k && k(e, f, d), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Xo(f, "number", f.value);
      }
      switch (k = d ? bn(d) : window, e) {
        case "focusin":
          (cl(k) || k.contentEditable === "true") && (zn = k, ci = d, vr = null);
          break;
        case "focusout":
          vr = ci = zn = null;
          break;
        case "mousedown":
          di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          di = !1, hl(v, n, m);
          break;
        case "selectionchange":
          if (Sf) break;
        case "keydown":
        case "keyup":
          hl(v, n, m);
      }
      var C;
      if (ls) e: {
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
      else En ? ec(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Zu && n.locale !== "ko" && (En || b !== "onCompositionStart" ? b === "onCompositionEnd" && En && (C = Xu()) : (Ut = m, os = "value" in Ut ? Ut.value : Ut.textContent, En = !0)), k = Ia(d, b), 0 < k.length && (b = new il(b, e, null, n, m), v.push({ event: b, listeners: k }), C ? b.data = C : (C = tc(n), C !== null && (b.data = C)))), (C = df ? pf(e, n) : ff(e, n)) && (d = Ia(d, "onBeforeInput"), 0 < d.length && (m = new il("onBeforeInput", "beforeinput", null, n, m), v.push({ event: m, listeners: d }), m.data = C));
    }
    fc(v, t);
  });
}
function Lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ia(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Nr(e, n), o != null && r.unshift(Lr(e, o, a)), o = Nr(e, t), o != null && r.push(Lr(e, o, a))), e = e.return;
  }
  return r;
}
function Cn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yl(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, d = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && d !== null && (u = d, a ? (l = Nr(n, o), l != null && s.unshift(Lr(n, l, u))) : a || (l = Nr(n, o), l != null && s.push(Lr(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ef = /\r\n?/g, zf = /\u0000|\uFFFD/g;
function xl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ef, `
`).replace(zf, "");
}
function sa(e, t, n) {
  if (t = xl(t), xl(e) !== t && n) throw Error(z(425));
}
function Aa() {
}
var pi = null, fi = null;
function mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var hi = typeof setTimeout == "function" ? setTimeout : void 0, Pf = typeof clearTimeout == "function" ? clearTimeout : void 0, wl = typeof Promise == "function" ? Promise : void 0, bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof wl < "u" ? function(e) {
  return wl.resolve(null).then(e).catch(Mf);
} : hi;
function Mf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ro(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Pr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Pr(t);
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
function jl(e) {
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
var Xn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + Xn, Rr = "__reactProps$" + Xn, zt = "__reactContainer$" + Xn, gi = "__reactEvents$" + Xn, Tf = "__reactListeners$" + Xn, Lf = "__reactHandles$" + Xn;
function ln(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[ht]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = jl(e); e !== null; ) {
        if (n = e[ht]) return n;
        e = jl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Qr(e) {
  return e = e[ht] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function ao(e) {
  return e[Rr] || null;
}
var vi = [], Mn = -1;
function tn(e) {
  return { current: e };
}
function ae(e) {
  0 > Mn || (e.current = vi[Mn], vi[Mn] = null, Mn--);
}
function ee(e, t) {
  Mn++, vi[Mn] = e.current, e.current = t;
}
var Zt = {}, Ne = tn(Zt), Ae = tn(!1), mn = Zt;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function Da() {
  ae(Ae), ae(Ne);
}
function kl(e, t, n) {
  if (Ne.current !== Zt) throw Error(z(168));
  ee(Ne, t), ee(Ae, n);
}
function hc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, gp(e) || "Unknown", a));
  return ce({}, n, r);
}
function $a(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, mn = Ne.current, ee(Ne, e), ee(Ae, Ae.current), !0;
}
function Sl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = hc(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, ae(Ae), ae(Ne), ee(Ne, e)) : ae(Ae), ee(Ae, n);
}
var St = null, oo = !1, Io = !1;
function gc(e) {
  St === null ? St = [e] : St.push(e);
}
function Rf(e) {
  oo = !0, gc(e);
}
function nn() {
  if (!Io && St !== null) {
    Io = !0;
    var e = 0, t = K;
    try {
      var n = St;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      St = null, oo = !1;
    } catch (a) {
      throw St !== null && (St = St.slice(e + 1)), Bu(ts, nn), a;
    } finally {
      K = t, Io = !1;
    }
  }
  return null;
}
var Tn = [], Ln = 0, Oa = null, Fa = 0, Ye = [], Ke = 0, hn = null, Ct = 1, _t = "";
function on(e, t) {
  Tn[Ln++] = Fa, Tn[Ln++] = Oa, Oa = e, Fa = t;
}
function vc(e, t, n) {
  Ye[Ke++] = Ct, Ye[Ke++] = _t, Ye[Ke++] = hn, hn = e;
  var r = Ct;
  e = _t;
  var a = 32 - lt(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - lt(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Ct = 1 << 32 - lt(t) + a | n << a | r, _t = o + e;
  } else Ct = 1 << o | n << a | r, _t = e;
}
function cs(e) {
  e.return !== null && (on(e, 1), vc(e, 1, 0));
}
function ds(e) {
  for (; e === Oa; ) Oa = Tn[--Ln], Tn[Ln] = null, Fa = Tn[--Ln], Tn[Ln] = null;
  for (; e === hn; ) hn = Ye[--Ke], Ye[Ke] = null, _t = Ye[--Ke], Ye[Ke] = null, Ct = Ye[--Ke], Ye[Ke] = null;
}
var Ue = null, Be = null, ie = !1, st = null;
function yc(e, t) {
  var n = Je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Cl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = hn !== null ? { id: Ct, overflow: _t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Be = null, !0) : !1;
    default:
      return !1;
  }
}
function yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (ie) {
    var t = Be;
    if (t) {
      var n = t;
      if (!Cl(e, t)) {
        if (yi(e)) throw Error(z(418));
        t = Wt(n.nextSibling);
        var r = Ue;
        t && Cl(e, t) ? yc(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Ue = e);
      }
    } else {
      if (yi(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, ie = !1, Ue = e;
    }
  }
}
function _l(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function la(e) {
  if (e !== Ue) return !1;
  if (!ie) return _l(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mi(e.type, e.memoizedProps)), t && (t = Be)) {
    if (yi(e)) throw xc(), Error(z(418));
    for (; t; ) yc(e, t), t = Wt(t.nextSibling);
  }
  if (_l(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
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
function xc() {
  for (var e = Be; e; ) e = Wt(e.nextSibling);
}
function Gn() {
  Be = Ue = null, ie = !1;
}
function ps(e) {
  st === null ? st = [e] : st.push(e);
}
var If = Mt.ReactCurrentBatchConfig;
function ir(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var u = a.refs;
        s === null ? delete u[o] : u[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function ua(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Nl(e) {
  var t = e._init;
  return t(e._payload);
}
function wc(e) {
  function t(g, c) {
    if (e) {
      var h = g.deletions;
      h === null ? (g.deletions = [c], g.flags |= 16) : h.push(c);
    }
  }
  function n(g, c) {
    if (!e) return null;
    for (; c !== null; ) t(g, c), c = c.sibling;
    return null;
  }
  function r(g, c) {
    for (g = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? g.set(c.key, c) : g.set(c.index, c), c = c.sibling;
    return g;
  }
  function a(g, c) {
    return g = Jt(g, c), g.index = 0, g.sibling = null, g;
  }
  function o(g, c, h) {
    return g.index = h, e ? (h = g.alternate, h !== null ? (h = h.index, h < c ? (g.flags |= 2, c) : h) : (g.flags |= 2, c)) : (g.flags |= 1048576, c);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function u(g, c, h, p) {
    return c === null || c.tag !== 6 ? (c = Uo(h, g.mode, p), c.return = g, c) : (c = a(c, h), c.return = g, c);
  }
  function l(g, c, h, p) {
    var x = h.type;
    return x === Nn ? m(g, c, h.props.children, p, h.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Dt && Nl(x) === c.type) ? (p = a(c, h.props), p.ref = ir(g, c, h), p.return = g, p) : (p = Na(h.type, h.key, h.props, null, g.mode, p), p.ref = ir(g, c, h), p.return = g, p);
  }
  function d(g, c, h, p) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = qo(h, g.mode, p), c.return = g, c) : (c = a(c, h.children || []), c.return = g, c);
  }
  function m(g, c, h, p, x) {
    return c === null || c.tag !== 7 ? (c = pn(h, g.mode, p, x), c.return = g, c) : (c = a(c, h), c.return = g, c);
  }
  function v(g, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Uo("" + c, g.mode, h), c.return = g, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Xr:
          return h = Na(c.type, c.key, c.props, null, g.mode, h), h.ref = ir(g, null, c), h.return = g, h;
        case _n:
          return c = qo(c, g.mode, h), c.return = g, c;
        case Dt:
          var p = c._init;
          return v(g, p(c._payload), h);
      }
      if (cr(c) || tr(c)) return c = pn(c, g.mode, h, null), c.return = g, c;
      ua(g, c);
    }
    return null;
  }
  function f(g, c, h, p) {
    var x = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return x !== null ? null : u(g, c, "" + h, p);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xr:
          return h.key === x ? l(g, c, h, p) : null;
        case _n:
          return h.key === x ? d(g, c, h, p) : null;
        case Dt:
          return x = h._init, f(
            g,
            c,
            x(h._payload),
            p
          );
      }
      if (cr(h) || tr(h)) return x !== null ? null : m(g, c, h, p, null);
      ua(g, h);
    }
    return null;
  }
  function j(g, c, h, p, x) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return g = g.get(h) || null, u(c, g, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Xr:
          return g = g.get(p.key === null ? h : p.key) || null, l(c, g, p, x);
        case _n:
          return g = g.get(p.key === null ? h : p.key) || null, d(c, g, p, x);
        case Dt:
          var k = p._init;
          return j(g, c, h, k(p._payload), x);
      }
      if (cr(p) || tr(p)) return g = g.get(h) || null, m(c, g, p, x, null);
      ua(c, p);
    }
    return null;
  }
  function _(g, c, h, p) {
    for (var x = null, k = null, C = c, b = c = 0, S = null; C !== null && b < h.length; b++) {
      C.index > b ? (S = C, C = null) : S = C.sibling;
      var N = f(g, C, h[b], p);
      if (N === null) {
        C === null && (C = S);
        break;
      }
      e && C && N.alternate === null && t(g, C), c = o(N, c, b), k === null ? x = N : k.sibling = N, k = N, C = S;
    }
    if (b === h.length) return n(g, C), ie && on(g, b), x;
    if (C === null) {
      for (; b < h.length; b++) C = v(g, h[b], p), C !== null && (c = o(C, c, b), k === null ? x = C : k.sibling = C, k = C);
      return ie && on(g, b), x;
    }
    for (C = r(g, C); b < h.length; b++) S = j(C, g, b, h[b], p), S !== null && (e && S.alternate !== null && C.delete(S.key === null ? b : S.key), c = o(S, c, b), k === null ? x = S : k.sibling = S, k = S);
    return e && C.forEach(function(I) {
      return t(g, I);
    }), ie && on(g, b), x;
  }
  function y(g, c, h, p) {
    var x = tr(h);
    if (typeof x != "function") throw Error(z(150));
    if (h = x.call(h), h == null) throw Error(z(151));
    for (var k = x = null, C = c, b = c = 0, S = null, N = h.next(); C !== null && !N.done; b++, N = h.next()) {
      C.index > b ? (S = C, C = null) : S = C.sibling;
      var I = f(g, C, N.value, p);
      if (I === null) {
        C === null && (C = S);
        break;
      }
      e && C && I.alternate === null && t(g, C), c = o(I, c, b), k === null ? x = I : k.sibling = I, k = I, C = S;
    }
    if (N.done) return n(
      g,
      C
    ), ie && on(g, b), x;
    if (C === null) {
      for (; !N.done; b++, N = h.next()) N = v(g, N.value, p), N !== null && (c = o(N, c, b), k === null ? x = N : k.sibling = N, k = N);
      return ie && on(g, b), x;
    }
    for (C = r(g, C); !N.done; b++, N = h.next()) N = j(C, g, b, N.value, p), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? b : N.key), c = o(N, c, b), k === null ? x = N : k.sibling = N, k = N);
    return e && C.forEach(function(Q) {
      return t(g, Q);
    }), ie && on(g, b), x;
  }
  function $(g, c, h, p) {
    if (typeof h == "object" && h !== null && h.type === Nn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xr:
          e: {
            for (var x = h.key, k = c; k !== null; ) {
              if (k.key === x) {
                if (x = h.type, x === Nn) {
                  if (k.tag === 7) {
                    n(g, k.sibling), c = a(k, h.props.children), c.return = g, g = c;
                    break e;
                  }
                } else if (k.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Dt && Nl(x) === k.type) {
                  n(g, k.sibling), c = a(k, h.props), c.ref = ir(g, k, h), c.return = g, g = c;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            h.type === Nn ? (c = pn(h.props.children, g.mode, p, h.key), c.return = g, g = c) : (p = Na(h.type, h.key, h.props, null, g.mode, p), p.ref = ir(g, c, h), p.return = g, g = p);
          }
          return s(g);
        case _n:
          e: {
            for (k = h.key; c !== null; ) {
              if (c.key === k) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(g, c.sibling), c = a(c, h.children || []), c.return = g, g = c;
                break e;
              } else {
                n(g, c);
                break;
              }
              else t(g, c);
              c = c.sibling;
            }
            c = qo(h, g.mode, p), c.return = g, g = c;
          }
          return s(g);
        case Dt:
          return k = h._init, $(g, c, k(h._payload), p);
      }
      if (cr(h)) return _(g, c, h, p);
      if (tr(h)) return y(g, c, h, p);
      ua(g, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(g, c.sibling), c = a(c, h), c.return = g, g = c) : (n(g, c), c = Uo(h, g.mode, p), c.return = g, g = c), s(g)) : n(g, c);
  }
  return $;
}
var Hn = wc(!0), jc = wc(!1), Ba = tn(null), Ua = null, Rn = null, fs = null;
function ms() {
  fs = Rn = Ua = null;
}
function hs(e) {
  var t = Ba.current;
  ae(Ba), e._currentValue = t;
}
function wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Bn(e, t) {
  Ua = e, fs = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (fs !== e) if (e = { context: e, memoizedValue: t, next: null }, Rn === null) {
    if (Ua === null) throw Error(z(308));
    Rn = e, Ua.dependencies = { lanes: 0, firstContext: e };
  } else Rn = Rn.next = e;
  return t;
}
var un = null;
function gs(e) {
  un === null ? un = [e] : un.push(e);
}
function kc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, gs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Pt(e, r);
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function vs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Pt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, gs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Pt(e, n);
}
function wa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ns(e, n);
  }
}
function El(e, t) {
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
function qa(e, t, n, r) {
  var a = e.updateQueue;
  $t = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, d = l.next;
    l.next = null, s === null ? o = d : s.next = d, s = l;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== s && (u === null ? m.firstBaseUpdate = d : u.next = d, m.lastBaseUpdate = l));
  }
  if (o !== null) {
    var v = a.baseState;
    s = 0, m = d = l = null, u = o;
    do {
      var f = u.lane, j = u.eventTime;
      if ((r & f) === f) {
        m !== null && (m = m.next = {
          eventTime: j,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var _ = e, y = u;
          switch (f = t, j = n, y.tag) {
            case 1:
              if (_ = y.payload, typeof _ == "function") {
                v = _.call(j, v, f);
                break e;
              }
              v = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = y.payload, f = typeof _ == "function" ? _.call(j, v, f) : _, f == null) break e;
              v = ce({}, v, f);
              break e;
            case 2:
              $t = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, f = a.effects, f === null ? a.effects = [u] : f.push(u));
      } else j = { eventTime: j, lane: f, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (d = m = j, l = v) : m = m.next = j, s |= f;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        f = u, u = f.next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
      }
    } while (!0);
    if (m === null && (l = v), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = m, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    vn |= s, e.lanes = s, e.memoizedState = v;
  }
}
function zl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Yr = {}, yt = tn(Yr), Ir = tn(Yr), Ar = tn(Yr);
function cn(e) {
  if (e === Yr) throw Error(z(174));
  return e;
}
function ys(e, t) {
  switch (ee(Ar, t), ee(Ir, e), ee(yt, Yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ei(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ei(t, e);
  }
  ae(yt), ee(yt, t);
}
function Wn() {
  ae(yt), ae(Ir), ae(Ar);
}
function Cc(e) {
  cn(Ar.current);
  var t = cn(yt.current), n = ei(t, e.type);
  t !== n && (ee(Ir, e), ee(yt, n));
}
function xs(e) {
  Ir.current === e && (ae(yt), ae(Ir));
}
var le = tn(0);
function Va(e) {
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
var Ao = [];
function ws() {
  for (var e = 0; e < Ao.length; e++) Ao[e]._workInProgressVersionPrimary = null;
  Ao.length = 0;
}
var ja = Mt.ReactCurrentDispatcher, Do = Mt.ReactCurrentBatchConfig, gn = 0, ue = null, me = null, ye = null, Ga = !1, yr = !1, Dr = 0, Af = 0;
function Se() {
  throw Error(z(321));
}
function js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
  return !0;
}
function ks(e, t, n, r, a, o) {
  if (gn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ja.current = e === null || e.memoizedState === null ? Ff : Bf, e = n(r, a), yr) {
    o = 0;
    do {
      if (yr = !1, Dr = 0, 25 <= o) throw Error(z(301));
      o += 1, ye = me = null, t.updateQueue = null, ja.current = Uf, e = n(r, a);
    } while (yr);
  }
  if (ja.current = Ha, t = me !== null && me.next !== null, gn = 0, ye = me = ue = null, Ga = !1, t) throw Error(z(300));
  return e;
}
function Ss() {
  var e = Dr !== 0;
  return Dr = 0, e;
}
function mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? ue.memoizedState = ye = e : ye = ye.next = e, ye;
}
function et() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ye === null ? ue.memoizedState : ye.next;
  if (t !== null) ye = t, me = e;
  else {
    if (e === null) throw Error(z(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ye === null ? ue.memoizedState = ye = e : ye = ye.next = e;
  }
  return ye;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $o(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = me, a = r.baseQueue, o = n.pending;
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
      var m = d.lane;
      if ((gn & m) === m) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (u = l = v, s = r) : l = l.next = v, ue.lanes |= m, vn |= m;
      }
      d = d.next;
    } while (d !== null && d !== o);
    l === null ? s = r : l.next = u, ct(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ue.lanes |= o, vn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oo(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    ct(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function _c() {
}
function Nc(e, t) {
  var n = ue, r = et(), a = t(), o = !ct(r.memoizedState, a);
  if (o && (r.memoizedState = a, Ie = !0), r = r.queue, Cs(Pc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ye !== null && ye.memoizedState.tag & 1) {
    if (n.flags |= 2048, Or(9, zc.bind(null, n, r, a, t), void 0, null), xe === null) throw Error(z(349));
    gn & 30 || Ec(n, t, a);
  }
  return a;
}
function Ec(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function zc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, bc(t) && Mc(e);
}
function Pc(e, t, n) {
  return n(function() {
    bc(t) && Mc(e);
  });
}
function bc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function Mc(e) {
  var t = Pt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function Pl(e) {
  var t = mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $r, lastRenderedState: e }, t.queue = e, e = e.dispatch = Of.bind(null, ue, e), [t.memoizedState, e];
}
function Or(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tc() {
  return et().memoizedState;
}
function ka(e, t, n, r) {
  var a = mt();
  ue.flags |= e, a.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r);
}
function io(e, t, n, r) {
  var a = et();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (me !== null) {
    var s = me.memoizedState;
    if (o = s.destroy, r !== null && js(r, s.deps)) {
      a.memoizedState = Or(t, n, o, r);
      return;
    }
  }
  ue.flags |= e, a.memoizedState = Or(1 | t, n, o, r);
}
function bl(e, t) {
  return ka(8390656, 8, e, t);
}
function Cs(e, t) {
  return io(2048, 8, e, t);
}
function Lc(e, t) {
  return io(4, 2, e, t);
}
function Rc(e, t) {
  return io(4, 4, e, t);
}
function Ic(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ac(e, t, n) {
  return n = n != null ? n.concat([e]) : null, io(4, 4, Ic.bind(null, t, e), n);
}
function _s() {
}
function Dc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && js(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function $c(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && js(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Oc(e, t, n) {
  return gn & 21 ? (ct(n, t) || (n = Vu(), ue.lanes |= n, vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function Df(e, t) {
  var n = K;
  K = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Do.transition;
  Do.transition = {};
  try {
    e(!1), t();
  } finally {
    K = n, Do.transition = r;
  }
}
function Fc() {
  return et().memoizedState;
}
function $f(e, t, n) {
  var r = Kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bc(e)) Uc(t, n);
  else if (n = kc(e, t, n, r), n !== null) {
    var a = be();
    ut(n, e, r, a), qc(n, t, r);
  }
}
function Of(e, t, n) {
  var r = Kt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bc(e)) Uc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, ct(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, gs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = kc(e, t, a, r), n !== null && (a = be(), ut(n, e, r, a), qc(n, t, r));
  }
}
function Bc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Uc(e, t) {
  yr = Ga = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function qc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ns(e, n);
  }
}
var Ha = { readContext: Ze, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, Ff = { readContext: Ze, useCallback: function(e, t) {
  return mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: bl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ka(
    4194308,
    4,
    Ic.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ka(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ka(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = mt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = mt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = $f.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Pl, useDebugValue: _s, useDeferredValue: function(e) {
  return mt().memoizedState = e;
}, useTransition: function() {
  var e = Pl(!1), t = e[0];
  return e = Df.bind(null, e[1]), mt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, a = mt();
  if (ie) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(z(349));
    gn & 30 || Ec(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, bl(Pc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Or(9, zc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = mt(), t = xe.identifierPrefix;
  if (ie) {
    var n = _t, r = Ct;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Af++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Bf = {
  readContext: Ze,
  useCallback: Dc,
  useContext: Ze,
  useEffect: Cs,
  useImperativeHandle: Ac,
  useInsertionEffect: Lc,
  useLayoutEffect: Rc,
  useMemo: $c,
  useReducer: $o,
  useRef: Tc,
  useState: function() {
    return $o($r);
  },
  useDebugValue: _s,
  useDeferredValue: function(e) {
    var t = et();
    return Oc(t, me.memoizedState, e);
  },
  useTransition: function() {
    var e = $o($r)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: _c,
  useSyncExternalStore: Nc,
  useId: Fc,
  unstable_isNewReconciler: !1
}, Uf = { readContext: Ze, useCallback: Dc, useContext: Ze, useEffect: Cs, useImperativeHandle: Ac, useInsertionEffect: Lc, useLayoutEffect: Rc, useMemo: $c, useReducer: Oo, useRef: Tc, useState: function() {
  return Oo($r);
}, useDebugValue: _s, useDeferredValue: function(e) {
  var t = et();
  return me === null ? t.memoizedState = e : Oc(t, me.memoizedState, e);
}, useTransition: function() {
  var e = Oo($r)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: _c, useSyncExternalStore: Nc, useId: Fc, unstable_isNewReconciler: !1 };
function ot(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ji(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var so = { isMounted: function(e) {
  return (e = e._reactInternals) ? wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Kt(e), o = Nt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (ut(t, e, a, r), wa(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Kt(e), o = Nt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, a), t !== null && (ut(t, e, a, r), wa(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = Kt(e), a = Nt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Qt(e, a, r), t !== null && (ut(t, e, r, n), wa(t, e, r));
} };
function Ml(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(a, o) : !0;
}
function Vc(e, t, n) {
  var r = !1, a = Zt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ze(o) : (a = De(t) ? mn : Ne.current, r = t.contextTypes, o = (r = r != null) ? Vn(e, a) : Zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = so, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Tl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && so.enqueueReplaceState(t, t.state, null);
}
function ki(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, vs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Ze(o) : (o = De(t) ? mn : Ne.current, a.context = Vn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ji(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && so.enqueueReplaceState(a, a.state, null), qa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qn(e, t) {
  try {
    var n = "", r = t;
    do
      n += hp(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Fo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Si(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var qf = typeof WeakMap == "function" ? WeakMap : Map;
function Gc(e, t, n) {
  n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Qa || (Qa = !0, Li = r), Si(e, t);
  }, n;
}
function Hc(e, t, n) {
  n = Nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      Si(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Si(e, t), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ll(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = rm.bind(null, e, t, n), t.then(e, e));
}
function Rl(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Il(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Vf = Mt.ReactCurrentOwner, Ie = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? jc(t, null, n, r) : Hn(t, e.child, n, r);
}
function Al(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Bn(t, a), r = ks(e, t, n, r, o, a), n = Ss(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (ie && n && cs(t), t.flags |= 1, Pe(e, t, r, a), t.child);
}
function Dl(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ls(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Wc(e, t, o, r, a)) : (e = Na(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mr, n(s, r) && e.ref === t.ref) return bt(e, t, a);
  }
  return t.flags |= 1, e = Jt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Mr(o, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, bt(e, t, a);
  }
  return Ci(e, t, n, r, a);
}
function Qc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(An, Fe), Fe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(An, Fe), Fe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ee(An, Fe), Fe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ee(An, Fe), Fe |= r;
  return Pe(e, t, a, n), t.child;
}
function Yc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ci(e, t, n, r, a) {
  var o = De(n) ? mn : Ne.current;
  return o = Vn(t, o), Bn(t, a), n = ks(e, t, n, r, o, a), r = Ss(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (ie && r && cs(t), t.flags |= 1, Pe(e, t, n, a), t.child);
}
function $l(e, t, n, r, a) {
  if (De(n)) {
    var o = !0;
    $a(t);
  } else o = !1;
  if (Bn(t, a), t.stateNode === null) Sa(e, t), Vc(t, n, r), ki(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Ze(d) : (d = De(n) ? mn : Ne.current, d = Vn(t, d));
    var m = n.getDerivedStateFromProps, v = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    v || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== d) && Tl(t, s, r, d), $t = !1;
    var f = t.memoizedState;
    s.state = f, qa(t, r, s, a), l = t.memoizedState, u !== r || f !== l || Ae.current || $t ? (typeof m == "function" && (ji(t, n, m, r), l = t.memoizedState), (u = $t || Ml(t, n, u, r, f, l, d)) ? (v || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Sc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : ot(t.type, u), s.props = d, v = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ze(l) : (l = De(n) ? mn : Ne.current, l = Vn(t, l));
    var j = n.getDerivedStateFromProps;
    (m = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== v || f !== l) && Tl(t, s, r, l), $t = !1, f = t.memoizedState, s.state = f, qa(t, r, s, a);
    var _ = t.memoizedState;
    u !== v || f !== _ || Ae.current || $t ? (typeof j == "function" && (ji(t, n, j, r), _ = t.memoizedState), (d = $t || Ml(t, n, d, r, f, _, l) || !1) ? (m || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), s.props = r, s.state = _, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return _i(e, t, n, r, o, a);
}
function _i(e, t, n, r, a, o) {
  Yc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Sl(t, n, !1), bt(e, t, o);
  r = t.stateNode, Vf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Hn(t, e.child, null, o), t.child = Hn(t, null, u, o)) : Pe(e, t, u, o), t.memoizedState = r.state, a && Sl(t, n, !0), t.child;
}
function Kc(e) {
  var t = e.stateNode;
  t.pendingContext ? kl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && kl(e, t.context, !1), ys(e, t.containerInfo);
}
function Ol(e, t, n, r, a) {
  return Gn(), ps(a), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var Ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jc(e, t, n) {
  var r = t.pendingProps, a = le.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ee(le, a & 1), e === null)
    return xi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = co(s, r, 0, null), e = pn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ei(n), t.memoizedState = Ni, e) : Ns(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Gf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Jt(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Jt(u, o) : (o = pn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ei(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ni, r;
  }
  return o = e.child, e = o.sibling, r = Jt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ns(e, t) {
  return t = co({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ca(e, t, n, r) {
  return r !== null && ps(r), Hn(t, e.child, null, n), e = Ns(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Gf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Fo(Error(z(422))), ca(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = co({ mode: "visible", children: r.children }, a, 0, null), o = pn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Hn(t, e.child, null, s), t.child.memoizedState = Ei(s), t.memoizedState = Ni, o);
  if (!(t.mode & 1)) return ca(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Fo(o, r, void 0), ca(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Ie || u) {
    if (r = xe, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Pt(e, a), ut(r, e, a, -1));
    }
    return Ts(), r = Fo(Error(z(421))), ca(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = am.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Be = Wt(a.nextSibling), Ue = t, ie = !0, st = null, e !== null && (Ye[Ke++] = Ct, Ye[Ke++] = _t, Ye[Ke++] = hn, Ct = e.id, _t = e.overflow, hn = t), t = Ns(t, r.children), t.flags |= 4096, t);
}
function Fl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wi(e.return, t, n);
}
function Bo(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Xc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Pe(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Fl(e, n, t);
      else if (e.tag === 19) Fl(e, n, t);
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
  if (ee(le, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Va(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bo(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Va(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Bo(t, !0, n, null, o);
      break;
    case "together":
      Bo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Sa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Hf(e, t, n) {
  switch (t.tag) {
    case 3:
      Kc(t), Gn();
      break;
    case 5:
      Cc(t);
      break;
    case 1:
      De(t.type) && $a(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      ee(Ba, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ee(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jc(e, t, n) : (ee(le, le.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
      ee(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ee(le, le.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qc(e, t, n);
  }
  return bt(e, t, n);
}
var Zc, zi, ed, td;
Zc = function(e, t) {
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
zi = function() {
};
ed = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, cn(yt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Ko(e, a), r = Ko(e, r), o = [];
        break;
      case "select":
        a = ce({}, a, { value: void 0 }), r = ce({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = Zo(e, a), r = Zo(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Aa);
    }
    ti(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var u = a[d];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Cr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var l = r[d];
      if (u = a != null ? a[d] : void 0, r.hasOwnProperty(d) && l !== u && (l != null || u != null)) if (d === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Cr.hasOwnProperty(d) ? (l != null && d === "onScroll" && re("scroll", e), o || u === l || (o = [])) : (o = o || []).push(d, l));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
td = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function sr(e, t) {
  if (!ie) switch (e.tailMode) {
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
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Wf(e, t, n) {
  var r = t.pendingProps;
  switch (ds(t), t.tag) {
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
      return Ce(t), null;
    case 1:
      return De(t.type) && Da(), Ce(t), null;
    case 3:
      return r = t.stateNode, Wn(), ae(Ae), ae(Ne), ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (la(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (Ai(st), st = null))), zi(e, t), Ce(t), null;
    case 5:
      xs(t);
      var a = cn(Ar.current);
      if (n = t.type, e !== null && t.stateNode != null) ed(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Ce(t), null;
        }
        if (e = cn(yt.current), la(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ht] = t, r[Rr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < pr.length; a++) re(pr[a], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re(
                "error",
                r
              ), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Ys(r, o), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
              break;
            case "textarea":
              Js(r, o), re("invalid", r);
          }
          ti(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && sa(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && sa(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : Cr.hasOwnProperty(s) && u != null && s === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              Zr(r), Ks(r, o, !0);
              break;
            case "textarea":
              Zr(r), Xs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Aa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ht] = t, e[Rr] = r, Zc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ni(n, r), n) {
              case "dialog":
                re("cancel", e), re("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < pr.length; a++) re(pr[a], e);
                a = r;
                break;
              case "source":
                re("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  e
                ), re("load", e), a = r;
                break;
              case "details":
                re("toggle", e), a = r;
                break;
              case "input":
                Ys(e, r), a = Ko(e, r), re("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ce({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                Js(e, r), a = Zo(e, r), re("invalid", e);
                break;
              default:
                a = r;
            }
            ti(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Tu(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && bu(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && _r(e, l) : typeof l == "number" && _r(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Cr.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && Ki(e, o, l, s));
            }
            switch (n) {
              case "input":
                Zr(e), Ks(e, r, !1);
                break;
              case "textarea":
                Zr(e), Xs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Dn(e, !!r.multiple, o, !1) : r.defaultValue != null && Dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Aa);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = cn(Ar.current), cn(yt.current), la(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (o = r.nodeValue !== n) && (e = Ue, e !== null)) switch (e.tag) {
            case 3:
              sa(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && sa(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (ae(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Be !== null && t.mode & 1 && !(t.flags & 128)) xc(), Gn(), t.flags |= 98560, o = !1;
        else if (o = la(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[ht] = t;
          } else Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), o = !1;
        } else st !== null && (Ai(st), st = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? he === 0 && (he = 3) : Ts())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return Wn(), zi(e, t), e === null && Tr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return hs(t.type._context), Ce(t), null;
    case 17:
      return De(t.type) && Da(), Ce(t), null;
    case 19:
      if (ae(le), o = t.memoizedState, o === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) sr(o, !1);
      else {
        if (he !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Va(e), s !== null) {
            for (t.flags |= 128, sr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ee(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && pe() > Yn && (t.flags |= 128, r = !0, sr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Va(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ie) return Ce(t), null;
        } else 2 * pe() - o.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, sr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = pe(), t.sibling = null, n = le.current, ee(le, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return Ms(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Fe & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Qf(e, t) {
  switch (ds(t), t.tag) {
    case 1:
      return De(t.type) && Da(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Wn(), ae(Ae), ae(Ne), ws(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xs(t), null;
    case 13:
      if (ae(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Gn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(le), null;
    case 4:
      return Wn(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return Ms(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var da = !1, _e = !1, Yf = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function Pi(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Bl = !1;
function Kf(e, t) {
  if (pi = La, e = ic(), us(e)) {
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
        var s = 0, u = -1, l = -1, d = 0, m = 0, v = e, f = null;
        t: for (; ; ) {
          for (var j; v !== n || a !== 0 && v.nodeType !== 3 || (u = s + a), v !== o || r !== 0 && v.nodeType !== 3 || (l = s + r), v.nodeType === 3 && (s += v.nodeValue.length), (j = v.firstChild) !== null; )
            f = v, v = j;
          for (; ; ) {
            if (v === e) break t;
            if (f === n && ++d === a && (u = s), f === o && ++m === r && (l = s), (j = v.nextSibling) !== null) break;
            v = f, f = v.parentNode;
          }
          v = j;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fi = { focusedElem: e, selectionRange: n }, La = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var y = _.memoizedProps, $ = _.memoizedState, g = t.stateNode, c = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ot(t.type, y), $);
            g.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(z(163));
      }
    } catch (p) {
      de(t, t.return, p);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return _ = Bl, Bl = !1, _;
}
function xr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Pi(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function lo(e, t) {
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
function bi(e) {
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
function nd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[Rr], delete t[gi], delete t[Tf], delete t[Lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ul(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Aa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), e = e.sibling;
}
function Ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ti(e, t, n), e = e.sibling; e !== null; ) Ti(e, t, n), e = e.sibling;
}
var we = null, it = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) ad(e, t, n), n = n.sibling;
}
function ad(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function") try {
    vt.onCommitFiberUnmount(eo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _e || In(n, t);
    case 6:
      var r = we, a = it;
      we = null, At(e, t, n), we = r, it = a, we !== null && (it ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (it ? (e = we, n = n.stateNode, e.nodeType === 8 ? Ro(e.parentNode, n) : e.nodeType === 1 && Ro(e, n), Pr(e)) : Ro(we, n.stateNode));
      break;
    case 4:
      r = we, a = it, we = n.stateNode.containerInfo, it = !0, At(e, t, n), we = r, it = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Pi(n, t, s), a = a.next;
        } while (a !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (!_e && (In(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        de(n, t, u);
      }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, At(e, t, n), _e = r) : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function ql(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yf()), t.forEach(function(r) {
      var a = om.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            we = u.stateNode, it = !1;
            break e;
          case 3:
            we = u.stateNode.containerInfo, it = !0;
            break e;
          case 4:
            we = u.stateNode.containerInfo, it = !0;
            break e;
        }
        u = u.return;
      }
      if (we === null) throw Error(z(160));
      ad(o, s, a), we = null, it = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      de(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) od(t, e), t = t.sibling;
}
function od(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (at(t, e), ft(e), r & 4) {
        try {
          xr(3, e, e.return), lo(3, e);
        } catch (y) {
          de(e, e.return, y);
        }
        try {
          xr(5, e, e.return);
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 1:
      at(t, e), ft(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (at(t, e), ft(e), r & 512 && n !== null && In(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          _r(a, "");
        } catch (y) {
          de(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Eu(a, o), ni(u, s);
          var d = ni(u, o);
          for (s = 0; s < l.length; s += 2) {
            var m = l[s], v = l[s + 1];
            m === "style" ? Tu(a, v) : m === "dangerouslySetInnerHTML" ? bu(a, v) : m === "children" ? _r(a, v) : Ki(a, m, v, d);
          }
          switch (u) {
            case "input":
              Jo(a, o);
              break;
            case "textarea":
              zu(a, o);
              break;
            case "select":
              var f = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var j = o.value;
              j != null ? Dn(a, !!o.multiple, j, !1) : f !== !!o.multiple && (o.defaultValue != null ? Dn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Dn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Rr] = o;
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 6:
      if (at(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 3:
      if (at(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Pr(t.containerInfo);
      } catch (y) {
        de(e, e.return, y);
      }
      break;
    case 4:
      at(t, e), ft(e);
      break;
    case 13:
      at(t, e), ft(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ps = pe())), r & 4 && ql(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (d = _e) || m, at(t, e), _e = d) : at(t, e), ft(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (R = e, m = e.child; m !== null; ) {
          for (v = R = m; R !== null; ) {
            switch (f = R, j = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                xr(4, f, f.return);
                break;
              case 1:
                In(f, f.return);
                var _ = f.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (y) {
                    de(r, n, y);
                  }
                }
                break;
              case 5:
                In(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Gl(v);
                  continue;
                }
            }
            j !== null ? (j.return = f, R = j) : Gl(v);
          }
          m = m.sibling;
        }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                a = v.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = v.stateNode, l = v.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Mu("display", s));
              } catch (y) {
                de(e, e.return, y);
              }
            }
          } else if (v.tag === 6) {
            if (m === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (y) {
              de(e, e.return, y);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), v = v.return;
          }
          m === v && (m = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      at(t, e), ft(e), r & 4 && ql(e);
      break;
    case 21:
      break;
    default:
      at(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rd(n)) {
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
          r.flags & 32 && (_r(a, ""), r.flags &= -33);
          var o = Ul(e);
          Ti(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Ul(e);
          Mi(e, u, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      de(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jf(e, t, n) {
  R = e, id(e);
}
function id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var a = R, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || da;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || _e;
        u = da;
        var d = _e;
        if (da = s, (_e = l) && !d) for (R = a; R !== null; ) s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? Hl(a) : l !== null ? (l.return = s, R = l) : Hl(a);
        for (; o !== null; ) R = o, id(o), o = o.sibling;
        R = a, da = u, _e = d;
      }
      Vl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, R = o) : Vl(e);
  }
}
function Vl(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _e || lo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_e) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && zl(t, o, r);
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
              zl(t, s, n);
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
                var m = d.memoizedState;
                if (m !== null) {
                  var v = m.dehydrated;
                  v !== null && Pr(v);
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
        _e || t.flags & 512 && bi(t);
      } catch (f) {
        de(t, t.return, f);
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
function Gl(e) {
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
function Hl(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lo(4, t);
          } catch (l) {
            de(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(t, a, l);
            }
          }
          var o = t.return;
          try {
            bi(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bi(t);
          } catch (l) {
            de(t, s, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
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
var Xf = Math.ceil, Wa = Mt.ReactCurrentDispatcher, Es = Mt.ReactCurrentOwner, Xe = Mt.ReactCurrentBatchConfig, H = 0, xe = null, fe = null, je = 0, Fe = 0, An = tn(0), he = 0, Fr = null, vn = 0, uo = 0, zs = 0, wr = null, Re = null, Ps = 0, Yn = 1 / 0, kt = null, Qa = !1, Li = null, Yt = null, pa = !1, qt = null, Ya = 0, jr = 0, Ri = null, Ca = -1, _a = 0;
function be() {
  return H & 6 ? pe() : Ca !== -1 ? Ca : Ca = pe();
}
function Kt(e) {
  return e.mode & 1 ? H & 2 && je !== 0 ? je & -je : If.transition !== null ? (_a === 0 && (_a = Vu()), _a) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ju(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < jr) throw jr = 0, Ri = null, Error(z(185));
  Hr(e, n, r), (!(H & 2) || e !== xe) && (e === xe && (!(H & 2) && (uo |= n), he === 4 && Ft(e, je)), $e(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Yn = pe() + 500, oo && nn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Rp(e, t);
  var r = Ta(e, e === xe ? je : 0);
  if (r === 0) n !== null && tl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tl(n), t === 1) e.tag === 0 ? Rf(Wl.bind(null, e)) : gc(Wl.bind(null, e)), bf(function() {
      !(H & 6) && nn();
    }), n = null;
    else {
      switch (Gu(r)) {
        case 1:
          n = ts;
          break;
        case 4:
          n = Uu;
          break;
        case 16:
          n = Ma;
          break;
        case 536870912:
          n = qu;
          break;
        default:
          n = Ma;
      }
      n = md(n, sd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function sd(e, t) {
  if (Ca = -1, _a = 0, H & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Ta(e, e === xe ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ka(e, r);
  else {
    t = r;
    var a = H;
    H |= 2;
    var o = ud();
    (xe !== e || je !== t) && (kt = null, Yn = pe() + 500, dn(e, t));
    do
      try {
        tm();
        break;
      } catch (u) {
        ld(e, u);
      }
    while (!0);
    ms(), Wa.current = o, H = a, fe !== null ? t = 0 : (xe = null, je = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (a = si(e), a !== 0 && (r = a, t = Ii(e, a))), t === 1) throw n = Fr, dn(e, 0), Ft(e, r), $e(e, pe()), n;
    if (t === 6) Ft(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Zf(a) && (t = Ka(e, r), t === 2 && (o = si(e), o !== 0 && (r = o, t = Ii(e, o))), t === 1)) throw n = Fr, dn(e, 0), Ft(e, r), $e(e, pe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          sn(e, Re, kt);
          break;
        case 3:
          if (Ft(e, r), (r & 130023424) === r && (t = Ps + 500 - pe(), 10 < t)) {
            if (Ta(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              be(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = hi(sn.bind(null, e, Re, kt), t);
            break;
          }
          sn(e, Re, kt);
          break;
        case 4:
          if (Ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - lt(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = hi(sn.bind(null, e, Re, kt), r);
            break;
          }
          sn(e, Re, kt);
          break;
        case 5:
          sn(e, Re, kt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return $e(e, pe()), e.callbackNode === n ? sd.bind(null, e) : null;
}
function Ii(e, t) {
  var n = wr;
  return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = Ka(e, t), e !== 2 && (t = Re, Re = n, t !== null && Ai(t)), e;
}
function Ai(e) {
  Re === null ? Re = e : Re.push.apply(Re, e);
}
function Zf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!ct(o(), a)) return !1;
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
  for (t &= ~zs, t &= ~uo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Wl(e) {
  if (H & 6) throw Error(z(327));
  Un();
  var t = Ta(e, 0);
  if (!(t & 1)) return $e(e, pe()), null;
  var n = Ka(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && (t = r, n = Ii(e, r));
  }
  if (n === 1) throw n = Fr, dn(e, 0), Ft(e, t), $e(e, pe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Re, kt), $e(e, pe()), null;
}
function bs(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Yn = pe() + 500, oo && nn());
  }
}
function yn(e) {
  qt !== null && qt.tag === 0 && !(H & 6) && Un();
  var t = H;
  H |= 1;
  var n = Xe.transition, r = K;
  try {
    if (Xe.transition = null, K = 1, e) return e();
  } finally {
    K = r, Xe.transition = n, H = t, !(H & 6) && nn();
  }
}
function Ms() {
  Fe = An.current, ae(An);
}
function dn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Pf(n)), fe !== null) for (n = fe.return; n !== null; ) {
    var r = n;
    switch (ds(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Da();
        break;
      case 3:
        Wn(), ae(Ae), ae(Ne), ws();
        break;
      case 5:
        xs(r);
        break;
      case 4:
        Wn();
        break;
      case 13:
        ae(le);
        break;
      case 19:
        ae(le);
        break;
      case 10:
        hs(r.type._context);
        break;
      case 22:
      case 23:
        Ms();
    }
    n = n.return;
  }
  if (xe = e, fe = e = Jt(e.current, null), je = Fe = t, he = 0, Fr = null, zs = uo = vn = 0, Re = wr = null, un !== null) {
    for (t = 0; t < un.length; t++) if (n = un[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    un = null;
  }
  return e;
}
function ld(e, t) {
  do {
    var n = fe;
    try {
      if (ms(), ja.current = Ha, Ga) {
        for (var r = ue.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ga = !1;
      }
      if (gn = 0, ye = me = ue = null, yr = !1, Dr = 0, Es.current = null, n === null || n.return === null) {
        he = 1, Fr = t, fe = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = je, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, m = u, v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var f = m.alternate;
            f ? (m.updateQueue = f.updateQueue, m.memoizedState = f.memoizedState, m.lanes = f.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var j = Rl(s);
          if (j !== null) {
            j.flags &= -257, Il(j, s, u, o, t), j.mode & 1 && Ll(o, d, t), t = j, l = d;
            var _ = t.updateQueue;
            if (_ === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else _.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ll(o, d, t), Ts();
              break e;
            }
            l = Error(z(426));
          }
        } else if (ie && u.mode & 1) {
          var $ = Rl(s);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256), Il($, s, u, o, t), ps(Qn(l, u));
            break e;
          }
        }
        o = l = Qn(l, u), he !== 4 && (he = 2), wr === null ? wr = [o] : wr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var g = Gc(o, l, t);
              El(o, g);
              break e;
            case 1:
              u = l;
              var c = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Yt === null || !Yt.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Hc(o, u, t);
                El(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dd(n);
    } catch (x) {
      t = x, fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ud() {
  var e = Wa.current;
  return Wa.current = Ha, e === null ? Ha : e;
}
function Ts() {
  (he === 0 || he === 3 || he === 2) && (he = 4), xe === null || !(vn & 268435455) && !(uo & 268435455) || Ft(xe, je);
}
function Ka(e, t) {
  var n = H;
  H |= 2;
  var r = ud();
  (xe !== e || je !== t) && (kt = null, dn(e, t));
  do
    try {
      em();
      break;
    } catch (a) {
      ld(e, a);
    }
  while (!0);
  if (ms(), H = n, Wa.current = r, fe !== null) throw Error(z(261));
  return xe = null, je = 0, he;
}
function em() {
  for (; fe !== null; ) cd(fe);
}
function tm() {
  for (; fe !== null && !_p(); ) cd(fe);
}
function cd(e) {
  var t = fd(e.alternate, e, Fe);
  e.memoizedProps = e.pendingProps, t === null ? dd(e) : fe = t, Es.current = null;
}
function dd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Qf(n, t), n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, fe = null;
        return;
      }
    } else if (n = Wf(n, t, Fe), n !== null) {
      fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function sn(e, t, n) {
  var r = K, a = Xe.transition;
  try {
    Xe.transition = null, K = 1, nm(e, t, n, r);
  } finally {
    Xe.transition = a, K = r;
  }
  return null;
}
function nm(e, t, n, r) {
  do
    Un();
  while (qt !== null);
  if (H & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Ip(e, o), e === xe && (fe = xe = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || pa || (pa = !0, md(Ma, function() {
    return Un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Xe.transition, Xe.transition = null;
    var s = K;
    K = 1;
    var u = H;
    H |= 4, Es.current = null, Kf(e, n), od(n, e), kf(fi), La = !!pi, fi = pi = null, e.current = n, Jf(n), Np(), H = u, K = s, Xe.transition = o;
  } else e.current = n;
  if (pa && (pa = !1, qt = e, Ya = a), o = e.pendingLanes, o === 0 && (Yt = null), Pp(n.stateNode), $e(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Qa) throw Qa = !1, e = Li, Li = null, e;
  return Ya & 1 && e.tag !== 0 && Un(), o = e.pendingLanes, o & 1 ? e === Ri ? jr++ : (jr = 0, Ri = e) : jr = 0, nn(), null;
}
function Un() {
  if (qt !== null) {
    var e = Gu(Ya), t = Xe.transition, n = K;
    try {
      if (Xe.transition = null, K = 16 > e ? 16 : e, qt === null) var r = !1;
      else {
        if (e = qt, qt = null, Ya = 0, H & 6) throw Error(z(331));
        var a = H;
        for (H |= 4, R = e.current; R !== null; ) {
          var o = R, s = o.child;
          if (R.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var d = u[l];
                for (R = d; R !== null; ) {
                  var m = R;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(8, m, o);
                  }
                  var v = m.child;
                  if (v !== null) v.return = m, R = v;
                  else for (; R !== null; ) {
                    m = R;
                    var f = m.sibling, j = m.return;
                    if (nd(m), m === d) {
                      R = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = j, R = f;
                      break;
                    }
                    R = j;
                  }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var y = _.child;
                if (y !== null) {
                  _.child = null;
                  do {
                    var $ = y.sibling;
                    y.sibling = null, y = $;
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
                xr(9, o, o.return);
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, R = g;
              break e;
            }
            R = o.return;
          }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          s = R;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) h.return = s, R = h;
          else e: for (s = c; R !== null; ) {
            if (u = R, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  lo(9, u);
              }
            } catch (x) {
              de(u, u.return, x);
            }
            if (u === s) {
              R = null;
              break e;
            }
            var p = u.sibling;
            if (p !== null) {
              p.return = u.return, R = p;
              break e;
            }
            R = u.return;
          }
        }
        if (H = a, nn(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
          vt.onPostCommitFiberRoot(eo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      K = n, Xe.transition = t;
    }
  }
  return !1;
}
function Ql(e, t, n) {
  t = Qn(n, t), t = Gc(e, t, 1), e = Qt(e, t, 1), t = be(), e !== null && (Hr(e, 1, t), $e(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Ql(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ql(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
        e = Qn(n, e), e = Hc(t, e, 1), t = Qt(t, e, 1), e = be(), t !== null && (Hr(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function rm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (je & n) === n && (he === 4 || he === 3 && (je & 130023424) === je && 500 > pe() - Ps ? dn(e, 0) : zs |= n), $e(e, t);
}
function pd(e, t) {
  t === 0 && (e.mode & 1 ? (t = na, na <<= 1, !(na & 130023424) && (na = 4194304)) : t = 1);
  var n = be();
  e = Pt(e, t), e !== null && (Hr(e, t, n), $e(e, n));
}
function am(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), pd(e, n);
}
function om(e, t) {
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
  r !== null && r.delete(t), pd(e, n);
}
var fd;
fd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Hf(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, ie && t.flags & 1048576 && vc(t, Fa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Sa(e, t), e = t.pendingProps;
      var a = Vn(t, Ne.current);
      Bn(t, n), a = ks(null, t, r, e, a, n);
      var o = Ss();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (o = !0, $a(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, vs(t), a.updater = so, t.stateNode = a, a._reactInternals = t, ki(t, r, e, n), t = _i(null, t, r, !0, o, n)) : (t.tag = 0, ie && o && cs(t), Pe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Sa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = sm(r), e = ot(r, e), a) {
          case 0:
            t = Ci(null, t, r, e, n);
            break e;
          case 1:
            t = $l(null, t, r, e, n);
            break e;
          case 11:
            t = Al(null, t, r, e, n);
            break e;
          case 14:
            t = Dl(null, t, r, ot(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), Ci(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), $l(e, t, r, a, n);
    case 3:
      e: {
        if (Kc(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, Sc(e, t), qa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Qn(Error(z(423)), t), t = Ol(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Qn(Error(z(424)), t), t = Ol(e, t, r, n, a);
          break e;
        } else for (Be = Wt(t.stateNode.containerInfo.firstChild), Ue = t, ie = !0, st = null, n = jc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gn(), r === a) {
            t = bt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cc(t), e === null && xi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, mi(r, a) ? s = null : o !== null && mi(r, o) && (t.flags |= 32), Yc(e, t), Pe(e, t, s, n), t.child;
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Jc(e, t, n);
    case 4:
      return ys(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), Al(e, t, r, a, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, ee(Ba, r._currentValue), r._currentValue = s, o !== null) if (ct(o.value, s)) {
          if (o.children === a.children && !Ae.current) {
            t = bt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = Nt(-1, n & -n), l.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? l.next = l : (l.next = m.next, m.next = l), d.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), wi(
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
            if (s = o.return, s === null) throw Error(z(341));
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), wi(s, n, t), s = o.sibling;
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
      return a = t.type, r = t.pendingProps.children, Bn(t, n), a = Ze(a), r = r(a), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ot(r, t.pendingProps), a = ot(r.type, a), Dl(e, t, r, a, n);
    case 15:
      return Wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ot(r, a), Sa(e, t), t.tag = 1, De(r) ? (e = !0, $a(t)) : e = !1, Bn(t, n), Vc(t, r, a), ki(t, r, a, n), _i(null, t, r, !0, e, n);
    case 19:
      return Xc(e, t, n);
    case 22:
      return Qc(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function md(e, t) {
  return Bu(e, t);
}
function im(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Je(e, t, n, r) {
  return new im(e, t, n, r);
}
function Ls(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function sm(e) {
  if (typeof e == "function") return Ls(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xi) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Na(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") Ls(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Nn:
      return pn(n.children, a, o, t);
    case Ji:
      s = 8, a |= 8;
      break;
    case Ho:
      return e = Je(12, n, t, a | 2), e.elementType = Ho, e.lanes = o, e;
    case Wo:
      return e = Je(13, n, t, a), e.elementType = Wo, e.lanes = o, e;
    case Qo:
      return e = Je(19, n, t, a), e.elementType = Qo, e.lanes = o, e;
    case Cu:
      return co(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ku:
          s = 10;
          break e;
        case Su:
          s = 9;
          break e;
        case Xi:
          s = 11;
          break e;
        case Zi:
          s = 14;
          break e;
        case Dt:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = Je(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function pn(e, t, n, r) {
  return e = Je(7, e, r, t), e.lanes = n, e;
}
function co(e, t, n, r) {
  return e = Je(22, e, r, t), e.elementType = Cu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Uo(e, t, n) {
  return e = Je(6, e, null, t), e.lanes = n, e;
}
function qo(e, t, n) {
  return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function lm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = So(0), this.expirationTimes = So(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = So(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Rs(e, t, n, r, a, o, s, u, l) {
  return e = new lm(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vs(o), e;
}
function um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hd(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
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
    if (De(n)) return hc(e, n, t);
  }
  return t;
}
function gd(e, t, n, r, a, o, s, u, l) {
  return e = Rs(n, r, !0, e, a, o, s, u, l), e.context = hd(null), n = e.current, r = be(), a = Kt(n), o = Nt(r, a), o.callback = t ?? null, Qt(n, o, a), e.current.lanes = a, Hr(e, a, r), $e(e, r), e;
}
function po(e, t, n, r) {
  var a = t.current, o = be(), s = Kt(a);
  return n = hd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(a, t, s), e !== null && (ut(e, a, s, o), wa(e, a, s)), s;
}
function Ja(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yl(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Is(e, t) {
  Yl(e, t), (e = e.alternate) && Yl(e, t);
}
function cm() {
  return null;
}
var vd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function As(e) {
  this._internalRoot = e;
}
fo.prototype.render = As.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  po(e, t, null, null);
};
fo.prototype.unmount = As.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function() {
      po(null, e, null, null);
    }), t[zt] = null;
  }
};
function fo(e) {
  this._internalRoot = e;
}
fo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Qu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++) ;
    Ot.splice(n, 0, e), n === 0 && Ku(e);
  }
};
function Ds(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function mo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Kl() {
}
function dm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Ja(s);
        o.call(d);
      };
    }
    var s = gd(t, r, e, 0, null, !1, !1, "", Kl);
    return e._reactRootContainer = s, e[zt] = s.current, Tr(e.nodeType === 8 ? e.parentNode : e), yn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Ja(l);
      u.call(d);
    };
  }
  var l = Rs(e, 0, !1, null, null, !1, !1, "", Kl);
  return e._reactRootContainer = l, e[zt] = l.current, Tr(e.nodeType === 8 ? e.parentNode : e), yn(function() {
    po(t, l, n, r);
  }), l;
}
function ho(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = Ja(s);
        u.call(l);
      };
    }
    po(t, s, e, a);
  } else s = dm(n, t, e, a, r);
  return Ja(s);
}
Hu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 && (ns(t, n | 1), $e(t, pe()), !(H & 6) && (Yn = pe() + 500, nn()));
      }
      break;
    case 13:
      yn(function() {
        var r = Pt(e, 1);
        if (r !== null) {
          var a = be();
          ut(r, e, 1, a);
        }
      }), Is(e, 1);
  }
};
rs = function(e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = be();
      ut(t, e, 134217728, n);
    }
    Is(e, 134217728);
  }
};
Wu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e), n = Pt(e, t);
    if (n !== null) {
      var r = be();
      ut(n, e, t, r);
    }
    Is(e, t);
  }
};
Qu = function() {
  return K;
};
Yu = function(e, t) {
  var n = K;
  try {
    return K = e, t();
  } finally {
    K = n;
  }
};
ai = function(e, t, n) {
  switch (t) {
    case "input":
      if (Jo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = ao(r);
            if (!a) throw Error(z(90));
            Nu(r), Jo(r, a);
          }
        }
      }
      break;
    case "textarea":
      zu(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
Iu = bs;
Au = yn;
var pm = { usingClientEntryPoint: !1, Events: [Qr, bn, ao, Lu, Ru, bs] }, lr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fm = { bundleType: lr.bundleType, version: lr.version, rendererPackageName: lr.rendererPackageName, rendererConfig: lr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ou(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: lr.findFiberByHostInstance || cm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fa.isDisabled && fa.supportsFiber) try {
    eo = fa.inject(fm), vt = fa;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ds(t)) throw Error(z(200));
  return um(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!Ds(e)) throw Error(z(299));
  var n = !1, r = "", a = vd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Rs(e, 1, !1, null, null, n, !1, r, a), e[zt] = t.current, Tr(e.nodeType === 8 ? e.parentNode : e), new As(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Ou(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return yn(e);
};
Ve.hydrate = function(e, t, n) {
  if (!mo(t)) throw Error(z(200));
  return ho(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!Ds(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = vd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = gd(t, null, e, 1, n ?? null, a, !1, o, s), e[zt] = t.current, Tr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new fo(t);
};
Ve.render = function(e, t, n) {
  if (!mo(t)) throw Error(z(200));
  return ho(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!mo(e)) throw Error(z(40));
  return e._reactRootContainer ? (yn(function() {
    ho(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = bs;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!mo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return ho(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function yd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd);
    } catch (e) {
      console.error(e);
    }
}
yd(), yu.exports = Ve;
var mm = yu.exports, xd, Jl = mm;
xd = Jl.createRoot, Jl.hydrateRoot;
const Xl = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, hm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, gm = [
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
], vm = [
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
function Br(e) {
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
function ym(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const fn = () => globalThis.__crycatBase || "";
async function V(e, t) {
  const n = await fetch(fn() + e, t);
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
  previewUrl: (e, t = !0, n = 0) => `${fn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}`,
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
  pageUrl: (e, t, n = !1, r = !1, a = 0) => `${fn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}` : ""}`,
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
  iconUrl: () => `${fn()}/api/icon.png?v=${Date.now()}`,
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
async function xm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((m, v) => {
      a.onload = () => m(), a.onerror = () => v(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (m) => l.toBlob((v) => m(v), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function wd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await xm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Di = [
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
function $i(e) {
  return Di.find((t) => t.key === e) ?? Di[0];
}
function Zl(e) {
  const t = $i(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function Oi() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return $i(e);
  } catch {
  }
  return $i("wiwi");
}
const jd = {
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
}, kd = w.createContext("es");
function wm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(kd.Provider, { value: e, children: t });
}
function $s() {
  return w.useContext(kd);
}
function tt() {
  const e = $s();
  return (t, n) => {
    let r = e === "en" ? jd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function jm(e, t, n) {
  return e === "en" ? jd[t] ?? t : t;
}
function se({ size: e = 18, children: t }) {
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
function Sd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Ur({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function qr({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Xa({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Cd({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function go({ size: e }) {
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
function eu({ size: e }) {
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
function _m({ size: e }) {
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
function Nm({ size: e }) {
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
function Em({ size: e }) {
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
function zm({ size: e }) {
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
function _d({ size: e }) {
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
function Vr({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Nd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Pm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Ed({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function kr({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Fi({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function zd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(se, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function $m({ size: e }) {
  return /* @__PURE__ */ i.jsx(se, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Om({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = tt(), o = w.useMemo(() => t.map((S) => S.id), [t]), [s, u] = w.useState(/* @__PURE__ */ new Set()), [l, d] = w.useState("escala"), [m, v] = w.useState(100), [f, j] = w.useState(50), [_, y] = w.useState("mayor"), [$, g] = w.useState("");
  w.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), g(""));
  }, [e, o.join(",")]);
  const c = (S) => !s.has(S), h = (S) => u((N) => {
    const I = new Set(N);
    return I.has(S) ? I.delete(S) : I.add(S), I;
  }), p = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), x = (S) => {
    const N = S.w_mm_base || 0, I = S.h_mm_base || 0;
    return _ === "mayor" ? Math.max(N, I) : _ === "menor" ? Math.min(N, I) : 2 * Math.sqrt(Math.max(0, N * I) / Math.PI);
  }, k = (S) => {
    if (l === "tamano") {
      const N = x(S);
      if (N > 0) return Math.min(10, Math.max(0.05, f / N));
    }
    return Math.min(10, Math.max(0.05, m / 100));
  }, C = (S) => {
    const N = k(S);
    return { w: (S.w_mm_base || 0) * N, h: (S.h_mm_base || 0) * N };
  }, b = async () => {
    let S = 0;
    for (const N of t) {
      if (!c(N.id)) continue;
      const I = k(N) * 100;
      await D.patchAsset(N.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(I * 10) / 10))
      }), S += 1;
    }
    await r(), g(a("{n} elementos ajustados ", { n: S })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((S) => {
          const N = C(S), I = Math.min(98, N.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${S.id}`,
              style: {
                width: `${I}%`,
                maxWidth: `${I}%`,
                aspectRatio: `${N.w || 1} / ${N.h || 1}`,
                opacity: c(S.id) ? 1 : 0.3
              },
              title: `${S.name} · ${N.w.toFixed(1)}×${N.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: D.previewUrl(S.id), alt: "" })
            },
            S.id
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
              onClick: p,
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((S) => {
          const N = C(S);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${S.id}`,
              className: c(S.id) ? "sel" : "",
              onClick: () => h(S.id),
              title: S.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: D.previewUrl(S.id), alt: S.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: S.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(S.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  N.w.toFixed(1),
                  "×",
                  N.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            S.id
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
                value: String(m),
                onChange: (S) => v(Number(S.target.value))
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
                  value: String(f),
                  onChange: (S) => j(Number(S.target.value))
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
                value: _,
                onChange: (S) => y(S.target.value),
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
          onClick: b,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function Fm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  faseBordes: s = 0,
  verBordes: u = !0,
  destacado: l = !1
}) {
  const d = tt(), [m, v] = w.useState(() => Br(e));
  w.useEffect(() => v(Br(e)), [e]);
  const f = w.useRef(null), j = ym(m), [_, y] = w.useState(""), $ = w.useRef(!1), [g, c] = w.useState(""), h = w.useRef(!1), [p, x] = w.useState({ tamano: !1, borde: !1, mini: !1 }), k = w.useRef(null);
  w.useEffect(() => {
    var T;
    l && (x({ tamano: !0, borde: !0, mini: !0 }), (T = k.current) == null || T.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [l]), w.useEffect(() => {
    $.current || y(j.w > 0 ? j.w.toFixed(1) : ""), h.current || c(j.h > 0 ? j.h.toFixed(1) : "");
  }, [j.w, j.h]);
  const C = Number.isFinite(m.w_mm_base) ? m.w_mm_base : 0, b = Number.isFinite(m.h_mm_base) ? m.h_mm_base : 0, S = (T) => {
    y(T);
    const te = Number(T.replace(",", "."));
    !Number.isFinite(te) || te <= 0 || C <= 0 || G({ scale_pct: te / C * 100 });
  }, N = (T) => {
    c(T);
    const te = Number(T.replace(",", "."));
    !Number.isFinite(te) || te <= 0 || b <= 0 || G({ scale_pct: te / b * 100 });
  }, I = (t == null ? void 0 : t.placements.filter((T) => T.asset_id === e.id && T.mini).length) ?? 0, Q = (t == null ? void 0 : t.placements.filter((T) => T.asset_id === e.id && !T.mini).length) ?? 0, G = async (T) => {
    a == null || a(), "copies" in T && (T.copies = Math.max(0, T.copies ?? 0)), v((te) => ({ ...te, ...T }));
    try {
      await D.patchAsset(e.id, T);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: k,
      "data-asset": e.id,
      className: `asset-card${l ? " destacada" : ""}`,
      "data-testid": "asset-card",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: D.previewUrl(e.id, u, s),
            alt: e.name,
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ i.jsxs("div", { className: "info", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "name-row", children: [
            /* @__PURE__ */ i.jsx("span", { className: "name", title: e.name, children: e.name }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `abrir-carpeta-${e.id}`,
                title: d("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => D.assetsFolder().then((T) => D.abrirCarpeta(T.path)).catch(() => D.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ i.jsx(Ur, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: d("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var T;
                  return (T = f.current) == null ? void 0 : T.click();
                },
                children: /* @__PURE__ */ i.jsx(km, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: f,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (T) => {
                  var He;
                  const te = (He = T.target.files) == null ? void 0 : He[0];
                  if (T.target.value = "", !!te)
                    try {
                      const { blob: Oe, name: P } = await wd(te);
                      await D.reemplazar(e.id, Oe, P), await n();
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
                title: d("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ i.jsx(Sm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                title: m.bg_removed ? d("Restaurar fondo original") : d("Quitar fondo (inteligente)"),
                onClick: () => (m.bg_removed ? D.restoreBackground(e.id) : D.removeBackground(e.id)).then(n),
                children: m.bg_removed ? /* @__PURE__ */ i.jsx(Cm, { size: 16 }) : /* @__PURE__ */ i.jsx(Xa, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: d("Eliminar imagen"),
                onClick: () => D.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ i.jsx(Cd, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${m.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": d("Incluir como mini (rellena huecos)"),
                onClick: () => G({ mini_enabled: !m.mini_enabled }),
                children: [
                  /* @__PURE__ */ i.jsx(Vr, { size: 15 }),
                  " ",
                  d("Mini")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${m.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": d("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => x((T) => ({ ...T, borde: !T.borde })),
                children: [
                  /* @__PURE__ */ i.jsx(go, { size: 15 }),
                  " ",
                  d("Borde")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: d("Copias"), children: [
              /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => G({ copies: m.copies - 1 }), children: "−" }),
              /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: m.copies }),
              /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => G({ copies: m.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => x((T) => ({ ...T, tamano: !T.tamano })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${p.tamano ? "open" : ""}`, children: "›" }),
                  d("Tamaño"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    j.w.toFixed(1),
                    "×",
                    j.h.toFixed(1),
                    " · ",
                    Math.round(m.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            p.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: d("Escala del elemento (100% = tamaño natural)"), children: d("Escala") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: m.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (T) => G({ scale_pct: Number(T.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
                  Math.round(m.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: d("Tamaño exacto en milímetros (mantiene la proporción)"), children: d("Ancho") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: _,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      $.current = !0, h.current = !1;
                    },
                    onBlur: () => {
                      $.current = !1, y(j.w > 0 ? j.w.toFixed(1) : "");
                    },
                    onChange: (T) => S(T.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" }),
                /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ i.jsx("span", { title: d("Tamaño exacto en milímetros (mantiene la proporción)"), children: d("Alto") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: g,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      h.current = !0, $.current = !1;
                    },
                    onBlur: () => {
                      h.current = !1, c(j.h > 0 ? j.h.toFixed(1) : "");
                    },
                    onChange: (T) => N(T.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" })
              ] })
            ] })
          ] }),
          (m.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-borde-${e.id}`,
                onClick: () => x((T) => ({ ...T, borde: !T.borde })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${p.borde ? "open" : ""}`, children: "›" }),
                  d("Borde adicional"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    m.offset_mm.toFixed(1),
                    " mm",
                    m.offset_mm <= 0 ? ` · ${d("global")}` : ""
                  ] })
                ]
              }
            ),
            p.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => G({ offset_mm: Math.max(
                      0,
                      Math.round((m.offset_mm - 0.5) * 2) / 2
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
                    value: m.offset_mm,
                    onChange: (T) => G({ offset_mm: Number(T.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => G({ offset_mm: Math.min(
                      20,
                      Math.round((m.offset_mm + 0.5) * 2) / 2
                    ) }),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", d("Extender")],
                  ["blanco", d("Blanco")],
                  ["color", d("Color")],
                  ["unir_recto", d("Unir recto")],
                  ["unir_curvo", d("Unir curvo")]
                ].map(([T, te]) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: `seg ${(m.offset_modo || "") === T ? "on" : ""}`,
                    "data-testid": `offset-modo-${T}-${e.id}`,
                    onClick: () => G({ offset_modo: T }),
                    children: te
                  },
                  T
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: m.offset_color || "#ffffff",
                    title: d("Color del borde"),
                    onChange: (T) => G({
                      offset_color: T.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          m.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => x((T) => ({ ...T, mini: !T.mini })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${p.mini ? "open" : ""}`, children: "›" }),
                  d("Opciones de mini"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    m.mini_quota,
                    " · ",
                    I
                  ] })
                ]
              }
            ),
            p.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ i.jsx("span", { title: d("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: d("Cuota") }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => G({ mini_quota: Math.max(
                    1,
                    Math.round((m.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                m.mini_quota
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => G({ mini_quota: Math.min(
                    100,
                    Math.round((m.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: d(" {n} minis", { n: I }) })
            ] }) })
          ] }),
          Q > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: d("Colocadas: {n}", { n: Q }) }),
          m.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ i.jsx(zd, { size: 14 }),
            " ",
            m.warnings[0],
            " ",
            m.warnings.some((T) => /blob|trozos sueltos/i.test(T)) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: d("limpiar contorno")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Bm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0,
  verBordes: l = !0,
  destacado: d = ""
}) {
  const m = tt(), v = w.useRef(null), [f, j] = w.useState(!1), [_, y] = w.useState(null), $ = async (c) => {
    const h = [];
    for (const p of Array.from(c))
      try {
        const { blob: x, name: k } = await wd(p);
        h.push(Br(await D.upload(x, k)));
      } catch (x) {
        console.error(x);
      }
    await r(), h.length > 1 && y(h);
  }, g = n.usar_minis;
  return e.some((c) => c.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: m("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${f ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = v.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), j(!0);
        },
        onDragLeave: () => j(!1),
        onDrop: (c) => {
          c.preventDefault(), j(!1), c.dataTransfer.files.length && $(c.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            m("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: v,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (c) => {
                c.target.files && $(c.target.files), c.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((c) => /* @__PURE__ */ i.jsx(
      Fm,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        destacado: d === c.id,
        bordeGlobal: n.offset_activo === !0
      },
      c.id
    )) }),
    !g && /* @__PURE__ */ i.jsx("div", { className: "hint", children: m("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => D.clearAssets().then(r),
        children: m("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Om,
      {
        open: !!_,
        assets: _ ?? [],
        onClose: () => y(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const gt = (e) => (globalThis.__crycatAssets || "") + e;
function Pd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = tt(), [o, s] = w.useState(null), [u, l] = w.useState("");
  w.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (m = "") => {
    l("");
    try {
      s(await D.fsList(m));
    } catch (v) {
      l(v.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (m) => m.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => d(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((m) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => d(`${o.path}/${m}`.replace("//", "/")),
          children: m
        },
        m
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
function Um({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = tt(), [u, l] = w.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((v) => v.startsWith("data:")), m = [
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
      d ? t.map((v, f) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${f}`,
          href: v,
          download: `crycat_pagina-${String(f + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
            " ",
            s("Descargar página {n}", { n: f + 1 })
          ]
        },
        f
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
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
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: m.map((v, f) => /* @__PURE__ */ i.jsx("li", { children: v }, f)) }),
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
function qm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: d, onFinEdicion: m, onDeshacer: v, onRehacer: f, puedeDeshacer: j, puedeRehacer: _ }) {
  const y = tt(), $ = $s(), [g, c] = w.useState(1), [h, p] = w.useState({ x: 0, y: 0 }), [x, k] = w.useState(null), [C, b] = w.useState(() => Date.now()), [S, N] = w.useState(null), [I, Q] = w.useState(null), [G, T] = w.useState(!1), [te, He] = w.useState(2), [Oe, P] = w.useState(0);
  w.useEffect(() => {
    if (!r.verBordes) return;
    const E = window.setInterval(
      () => P((A) => (A + 6) % 12),
      1100
    );
    return () => window.clearInterval(E);
  }, [r.verBordes]);
  const [F, B] = w.useState([]), [Y, J] = w.useState([]), [O, X] = w.useState(""), [ge, ve] = w.useState(/* @__PURE__ */ new Set()), Ee = w.useRef(null), rn = w.useRef(null), an = $ === "en" ? vm : gm, jn = w.useMemo(
    () => an[Math.floor(Math.random() * an.length)],
    [an]
  ), Zn = r.saveName.trim() || jn;
  w.useEffect(() => {
    b(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const L = (t == null ? void 0 : t.pages) ?? 0, U = !!t && t.efficiency < 0.8;
  w.useEffect(() => {
    const E = Ee.current;
    if (!E) return;
    const A = (M) => {
      M.preventDefault(), M.stopPropagation();
      const W = E.getBoundingClientRect(), Z = M.clientX - W.left, ze = M.clientY - W.top;
      c((Qe) => {
        const ne = M.deltaY < 0 ? 1.05 : 0.9523809523809523, oe = Math.min(12, Math.max(0.05, Qe * ne)), pt = oe / Qe;
        return p((It) => ({ x: Z - (Z - It.x) * pt, y: ze - (ze - It.y) * pt })), oe;
      });
    };
    return E.addEventListener("wheel", A, { passive: !1 }), () => E.removeEventListener("wheel", A);
  }, []);
  const We = (E) => {
    if (E.target.closest(".item-box")) return;
    rn.current = { x: E.clientX - h.x, y: E.clientY - h.y };
    const A = (W) => {
      rn.current && p({ x: W.clientX - rn.current.x, y: W.clientY - rn.current.y });
    }, M = () => {
      rn.current = null, window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", M);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", M);
  };
  w.useEffect(() => {
    const E = (A) => {
      A.target.tagName !== "INPUT" && (A.key === "+" || A.key === "=" ? c((M) => Math.min(12, M * 1.08)) : A.key === "-" || A.key === "_" ? c((M) => Math.max(0.05, M / 1.08)) : A.key === "0" ? (c(1), p({ x: 0, y: 0 })) : A.key === "Escape" ? k(null) : A.key === "g" ? a((M) => ({ ...M, guidesVisible: !M.guidesVisible })) : A.key === "t" && a((M) => M.eyeFosforito ? { ...M, eyeFosforito: !1, eyeTransparent: !1 } : M.eyeTransparent ? { ...M, eyeTransparent: !1, eyeFosforito: !0 } : { ...M, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [a]);
  const Le = w.useRef(null), er = w.useRef(null), Tt = (E, A) => {
    E.preventDefault(), E.stopPropagation();
    const M = E.currentTarget.closest(".page-box");
    if (!M || !t) return;
    const W = t.page_mm[0] / M.clientWidth, Z = {
      uid: A.uid,
      startX: E.clientX,
      startY: E.clientY,
      origX: A.x,
      origY: A.y,
      mmPerPx: W
    };
    Le.current = Z, er.current = { x: A.x, y: A.y }, N(Z), Q({ uid: A.uid, x: A.x, y: A.y });
    const ze = (ne) => {
      const oe = Le.current;
      if (!oe) return;
      const pt = (ne.clientX - oe.startX) * oe.mmPerPx / g, It = (ne.clientY - oe.startY) * oe.mmPerPx / g;
      er.current = { x: oe.origX + pt, y: oe.origY + It }, Q({ uid: oe.uid, x: oe.origX + pt, y: oe.origY + It });
    }, Qe = (ne) => {
      window.removeEventListener("mousemove", ze), window.removeEventListener("mouseup", Qe);
      const oe = Le.current;
      if (Le.current = null, !oe) return;
      const pt = (ne.clientX - oe.startX) * oe.mmPerPx / g, It = (ne.clientY - oe.startY) * oe.mmPerPx / g;
      N(null), Q(null), !(Math.abs(pt) < 0.5 && Math.abs(It) < 0.5) && Td(oe.uid, oe.origX + pt, oe.origY + It);
    };
    window.addEventListener("mousemove", ze), window.addEventListener("mouseup", Qe);
  }, Td = async (E, A, M) => {
    try {
      const W = await D.move(E, A, M);
      W.job ? u(W.job) : await s();
    } catch {
      await s();
    } finally {
      b(Date.now());
    }
  }, Ld = async (E) => {
    const A = await D.unpin(E);
    u(A);
  }, Rd = !1;
  w.useEffect(() => {
    {
      B([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, C]), w.useEffect(() => {
    if (!d) {
      J([]), X(""), ve(/* @__PURE__ */ new Set());
      return;
    }
    D.blobs(d.id).then((E) => {
      J(E.blobs), He(E.union_mm ?? 2), X(E.preview_png), ve(new Set(E.blobs.filter((A) => !A.principal).map((A) => A.id)));
    }).catch(() => {
      J([]), X("");
    });
  }, [d]);
  const Os = async () => {
    if (d)
      try {
        await D.limpiarContorno(d.id, Array.from(ge));
      } finally {
        await (m == null ? void 0 : m());
      }
  }, Id = (E) => {
    ve((A) => {
      const M = new Set(A);
      return M.has(E) ? M.delete(E) : M.add(E), M;
    });
  }, [dt, Lt] = w.useState(null), Ad = async () => {
    try {
      const M = await D.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Lt({ files: M.files, folder: M.folder });
    } catch (M) {
      Lt({ files: [], folder: "", error: M.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const W = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), Z = URL.createObjectURL(W), ze = document.createElement("a");
        ze.href = Z, ze.download = `${r.saveName || "crycat"}-cricut.pdf`, ze.click(), setTimeout(() => URL.revokeObjectURL(Z), 4e3);
      } catch (M) {
        Lt({
          files: [],
          folder: "",
          error: M.message
        });
      }
      return;
    }
    const A = document.createElement("iframe");
    A.setAttribute("aria-hidden", "true"), A.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", A.src = "/api/print.pdf", A.onload = () => {
      var M, W;
      try {
        (M = A.contentWindow) == null || M.focus(), (W = A.contentWindow) == null || W.print();
      } finally {
        window.setTimeout(() => A.remove(), 6e4);
      }
    }, document.body.appendChild(A);
  }, Dd = async () => {
    try {
      const E = await D.export(Zn);
      Lt({ files: E.files, folder: E.folder });
    } catch (E) {
      Lt({ files: [], folder: "", error: E.message });
    }
  }, $d = () => {
    T(!0);
  }, Od = async (E) => {
    try {
      const A = await D.export(Zn, E);
      Lt({ files: A.files, folder: A.folder });
    } catch (A) {
      Lt({ files: [], folder: "", error: A.message });
    }
  }, Fs = (t == null ? void 0 : t.poly_mm) ?? [], [nt, rt] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [kn, Sn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Rt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : kn, Kr = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Sn, xt = n.lienzo === "pagina" ? 0 : nt, wt = n.lienzo === "pagina" ? 0 : rt, Bs = Fs.length ? "M" + Fs.map(([E, A]) => `${E - xt},${A - wt}`).join(" L") + " Z" : "", Us = w.useRef(0);
  w.useEffect(() => {
    if (!t) return;
    const E = t.pages || 0;
    E > 0 && E !== Us.current && (Us.current = E, a((A) => ({ ...A, viewMode: E <= 1 ? 1 : E === 2 ? 2 : 4 })), k(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const vo = r.hojaGirada === !0, Fd = (E) => {
    const A = (t == null ? void 0 : t.placements.filter((M) => M.page === E)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}${vo ? " girada" : ""}`,
        style: vo ? {
          width: "100%",
          aspectRatio: `${Kr} / ${Rt}`
        } : { width: "100%" },
        onClick: (M) => {
          L > 1 && x === null && !M.target.closest(".item-box") && k(E);
        },
        "data-testid": `page-${E}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: `sheet${vo ? " girada" : ""}`, src: D.pageUrl(E, C, n.simular_impresion === !0, r.verBordes, Oe), alt: y("Página {i}", { i: E + 1 }), draggable: !1 }),
          r.guidesVisible && Bs && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Rt} ${Kr}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Rt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((nt - xt + kn) / 10) + 1 },
                    (M, W) => {
                      const Z = W * 10 - (xt - nt);
                      return Z >= nt - xt - 0.01 && Z <= nt - xt + kn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: Z,
                          y1: rt - wt,
                          x2: Z,
                          y2: rt - wt + Sn
                        },
                        `v${W}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((rt - wt + Sn) / 10) + 1 },
                    (M, W) => {
                      const Z = W * 10 - (wt - rt);
                      return Z >= rt - wt - 0.01 && Z <= rt - wt + Sn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: nt - xt,
                          y1: Z,
                          x2: nt - xt + kn,
                          y2: Z
                        },
                        `h${W}`
                      ) : null;
                    }
                  )
                ]
              }
            ),
            (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
              ["esquina_flecha", nt, rt, !1, !1],
              ["esquina_sd", nt + kn, rt, !0, !1],
              ["esquina_ii", nt, rt + Sn, !1, !0],
              ["esquina_id", nt + kn, rt + Sn, !0, !0]
            ].map(([M, W, Z, ze, Qe]) => {
              const ne = t.marcas[M];
              if (!ne) return null;
              const oe = W - xt - (ze ? ne[0] : 0), pt = Z - wt - (Qe ? ne[1] : 0);
              return /* @__PURE__ */ i.jsx(
                "image",
                {
                  href: gt(`/marcas/${M}.png`),
                  x: oe,
                  y: pt,
                  width: ne[0],
                  height: ne[1],
                  preserveAspectRatio: "none"
                },
                M
              );
            }) }),
            /* @__PURE__ */ i.jsx(
              "path",
              {
                d: Bs,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Rt / 250),
                strokeDasharray: `${Rt / 55} ${Rt / 85}`,
                opacity: 0.85
              }
            ),
            Rd
          ] }),
          A.map((M) => {
            const W = e.find((ne) => ne.id === M.asset_id), Z = (I == null ? void 0 : I.uid) === M.uid ? I : null, ze = ((Z ? Z.x : M.x) - xt) / (Rt || 1) * 100, Qe = ((Z ? Z.y : M.y) - wt) / (Kr || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${M.pinned ? "pinned" : ""} ${(S == null ? void 0 : S.uid) === M.uid ? "dragging" : ""}`,
                style: {
                  left: `${ze}%`,
                  top: `${Qe}%`,
                  width: `${M.w / (Rt || 1) * 100}%`,
                  height: `${M.h / (Kr || 1) * 100}%`
                },
                title: (W == null ? void 0 : W.name) ?? "",
                onMouseDown: (ne) => Tt(ne, M),
                onContextMenu: (ne) => {
                  ne.preventDefault(), Ld(M.uid);
                },
                "data-testid": `item-${M.uid}`,
                onClick: (ne) => {
                  ne.stopPropagation(), ne.currentTarget.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "smooth"
                  }), window.dispatchEvent(new CustomEvent(
                    "crycat:seleccion",
                    { detail: M.asset_id }
                  ));
                },
                children: M.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              M.uid
            );
          })
        ]
      },
      E
    );
  }, Bd = x !== null ? [x] : Array.from({ length: L }, (E, A) => A);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    L > 1 && /* @__PURE__ */ i.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: y("No cabe en una página: {n} páginas", { n: L }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": y("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((E) => ({ ...E, verBordes: !E.verBordes })),
          children: /* @__PURE__ */ i.jsx(go, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": y("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((E) => ({ ...E, guidesVisible: !E.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(Ed, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": y("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(U ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(qr, { size: 16 }),
            " ",
            y("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        L > 1 && x === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 4 })), children: "4" })
        ] }),
        x !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => k(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": y("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((E) => E.eyeFosforito ? { ...E, eyeFosforito: !1, eyeTransparent: !1 } : E.eyeTransparent ? { ...E, eyeTransparent: !1, eyeFosforito: !0 } : { ...E, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(_m, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(eu, { size: 16 }) : /* @__PURE__ */ i.jsx(eu, { size: 16 }),
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
              const E = !window.__crycatAncho;
              window.__crycatAncho = E, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: E }
              ));
            },
            children: /* @__PURE__ */ i.jsx(Em, { size: 16 })
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
            disabled: !j,
            children: /* @__PURE__ */ i.jsx(Nd, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => f(),
            disabled: !_,
            children: /* @__PURE__ */ i.jsx(Pm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Acercar (+)"),
            onClick: () => c((E) => Math.min(12, E * 1.08)),
            children: /* @__PURE__ */ i.jsx(bm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": y("Centrar la hoja y volver al tamaño original (tecla 0)"),
            onClick: () => {
              c(1), p({ x: 0, y: 0 });
            },
            children: /* @__PURE__ */ i.jsx(zm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Alejar (−)"),
            onClick: () => c((E) => Math.max(0.05, E / 1.08)),
            children: /* @__PURE__ */ i.jsx(Mm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(g * 100),
          "%"
        ] })
      ] })
    ] }),
    d ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: D.previewUrl(d.id) + `?t=${C}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && Y.filter((E) => !E.principal).map((E, A) => {
          const [M, W, Z, ze] = E.bbox, Qe = d.w_px || 1, ne = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${ge.has(E.id) ? " sel" : ""}`,
              "data-testid": `blob-${A}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: E.area_px,
                accion: ge.has(E.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${M / Qe * 100}%`,
                top: `${W / ne * 100}%`,
                width: `${(Z - M) / Qe * 100}%`,
                height: `${(ze - W) / ne * 100}%`
              },
              onClick: () => Id(E.id)
            },
            E.id
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
              title: y("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: te }),
              onClick: async () => {
                d && (await D.patchAsset(d.id, {
                  offset_mm: te,
                  offset_modo: "unir_curvo"
                }), await (m == null ? void 0 : m()));
              },
              children: y("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Os,
              children: y(
                "Quitar marcados ({n})",
                { n: ge.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: y("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: Ee,
        className: `canvas ${S ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: We,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${h.x}px, ${h.y}px) scale(${g})` },
            children: [
              L === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
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
                  children: Bd.map(Fd)
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
          onClick: Os,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => m == null ? void 0 : m(),
          children: y("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: jn,
          value: r.saveName,
          onChange: (E) => a((A) => ({ ...A, saveName: E.target.value }))
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
            onClick: () => D.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Ur, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Dd, children: y("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: $d, children: y("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Ad,
            disabled: L === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Pd,
      {
        open: G,
        initial: n.carpeta_export,
        onClose: () => T(!1),
        onPick: Od
      }
    ),
    /* @__PURE__ */ i.jsx(
      Um,
      {
        open: !!dt,
        files: (dt == null ? void 0 : dt.files) ?? [],
        folder: (dt == null ? void 0 : dt.folder) ?? "",
        error: dt == null ? void 0 : dt.error,
        onOpenFolder: (E) => void D.fsOpen(E).catch(() => {
        }),
        onClose: () => Lt(null)
      }
    )
  ] });
}
const tu = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function Vm({ saveSettings: e }) {
  const t = tt(), [n, r] = w.useState(
    {}
  ), [a, o] = w.useState([]), [s, u] = w.useState(!1), [l, d] = w.useState(!1), [m, v] = w.useState(""), [f, j] = w.useState(""), [_, y] = w.useState(""), $ = () => D.presets().then((p) => o(Array.isArray(p.names) ? p.names : [])).catch(() => {
  });
  w.useEffect(() => {
    D.factoryPresets().then((p) => r(p.presets ?? {})).catch(() => {
    }), $();
  }, []);
  const g = async (p) => {
    if (p)
      try {
        if (p.startsWith("fabrica:")) {
          const x = p.slice(8);
          await e(n[x]), j(t("Perfil «{n}» aplicado", {
            n: t(tu[x] ?? x)
          }));
        } else {
          const x = p.slice(9), k = await D.loadPreset(x);
          await e(k.settings), j(t("Perfil «{n}» cargado", { n: x }));
        }
      } catch {
        j(t("No se pudo aplicar el perfil"));
      }
  }, c = async () => {
    const x = (_.startsWith("guardado:") ? _.slice(9) : "") || m.trim();
    if (x)
      try {
        const k = await D.savePreset(x);
        o(Array.isArray(k.names) ? k.names : []), v(""), u(!1), y(`guardado:${x}`), j(t("Perfil «{n}» guardado", { n: x }));
      } catch {
        j(t("No se pudo guardar el perfil"));
      }
  }, h = async (p) => {
    try {
      o((await D.deletePreset(p)).names ?? []), j(t("Perfil «{n}» borrado", { n: p }));
    } catch {
      j(t("No se pudo borrar el perfil"));
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "perfiles-barra", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "perfil-select",
          "data-testid": "perfil-select",
          value: _,
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (p) => {
            y(p.target.value), g(p.target.value);
          },
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((p) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${p}`, children: t(tu[p] ?? p) }, p)) }),
            a.length > 0 && /* @__PURE__ */ i.jsx("optgroup", { label: t("Guardados"), children: a.map((p) => /* @__PURE__ */ i.jsx("option", { value: `guardado:${p}`, children: p }, p)) })
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
            /* @__PURE__ */ i.jsx(Fi, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(kr, { size: 15 })
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
          value: m,
          onChange: (p) => v(p.target.value),
          onKeyDown: (p) => {
            p.key === "Enter" && c(), p.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: c, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    l && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((p) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: p, children: p }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${p}`, onClick: () => g(`guardado:${p}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${p}`,
          onClick: () => h(p),
          children: /* @__PURE__ */ i.jsx(Cd, { size: 15 })
        }
      )
    ] }, p)) }),
    f && /* @__PURE__ */ i.jsx("div", { className: "hint", children: f })
  ] });
}
function Gm({ settings: e, saveSettings: t }) {
  const n = tt(), r = e.usar_minis, a = e.modo === "experto", o = {
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
            /* @__PURE__ */ i.jsx(Vr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(qr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(_d, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Vm, { saveSettings: t })
  ] });
}
function Hm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
          const m = Number(d.target.value);
          Number.isFinite(m) && m > 0 && r(m);
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
function jt({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function nu(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const Wm = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Qm = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Ym({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = tt(), [a, o] = w.useState(!0), [s, u] = w.useState({
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
  }), [l, d] = w.useState(!1), m = w.useMemo(() => {
    const p = (n ?? []).filter((k) => k.mini_enabled);
    return (p.length ? p : n ?? []).slice().sort((k, C) => Math.min(C.w_mm, C.h_mm) - Math.min(k.w_mm, k.h_mm))[0] ?? null;
  }, [n]), v = m ? Math.min(m.w_mm, m.h_mm) : 0, f = e.modo === "experto", j = ({ children: p }) => f ? /* @__PURE__ */ i.jsx(i.Fragment, { children: p }) : null, _ = (p) => u((x) => ({ ...x, [p]: !x[p] })), y = (p) => t(p), $ = w.useRef(null), g = ({ titulo: p, children: x }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(p) }),
    x
  ] }), c = (p, x, k, C, b = 1, S = "", N, I) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...I ? { "data-tip": r(I) } : {}, children: r(p) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: k,
          max: C,
          step: b,
          "data-testid": `set-${x}`,
          value: String(e[x]),
          onChange: (Q) => {
            const G = Number(Q.target.value);
            Number.isNaN(G) || y({ [x]: G });
          }
        }
      ),
      S && /* @__PURE__ */ i.jsx("span", { className: "hint", children: S }),
      N
    ] })
  ] }), h = (p, x, k, C, b) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { children: r(p) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${x}`,
        value: String(e[x]),
        onChange: (S) => y({ [x]: S.target.value }),
        children: k.map(([S, N]) => /* @__PURE__ */ i.jsx("option", { value: S, children: r(N) }, S))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Gm, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !f && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(kr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(g, { titulo: "Colocación", children: [
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
              h("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(g, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(j, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (p) => {
                      const x = p.target.value, k = hm[x];
                      y(k ? { pagina: x, pagina_w: k[0], pagina_h: k[1] } : { pagina: x });
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
              /* @__PURE__ */ i.jsx(j, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (p) => y({ pagina_w: Number(p.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (p) => y({ pagina_h: Number(p.target.value) })
                    }
                  )
                ] })
              ] }) }),
              h("Máquina Cricut", "maquina", [
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
        jt,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Vr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ i.jsxs(g, { titulo: "Tamaños", children: [
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
            /* @__PURE__ */ i.jsx(g, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(j, { children: [
              h("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              h("Selección de tamaños", "mini_tamanos", [
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
                  (e.mini_tamanos_lista ?? []).map((p, x) => /* @__PURE__ */ i.jsx(
                    Hm,
                    {
                      i: x,
                      valor: p,
                      refBase: v,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (k) => {
                        const C = [...e.mini_tamanos_lista ?? []];
                        C[x] = k, y({ mini_tamanos_lista: C });
                      },
                      onQuitar: () => y({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (k, C) => C !== x
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
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: m ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: m.name, mm: v.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      f && /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(qr, { size: 15 }),
          children: [
            h("Método", "opt_metodo", [
              ["greedy", "Greedy / Bottom-Left (rápido)"],
              ["largest", "Largest First (mayor primero)"],
              ["voronoi", "Voronoi (huecos más grandes)"],
              ["genetic", "Genético (máxima calidad)"]
            ]),
            h("Calidad de cálculo", "opt_calidad", [
              ["exacta", "Exacta (más fina, más lenta)"],
              ["normal", "Normal (equilibrada)"],
              ["rapida", "Rápida (más gruesa, para bocetos)"]
            ]),
            /* @__PURE__ */ i.jsxs(j, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (p) => y({ opt_tiempo_auto: p.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Se usarán {s} s con «{m}» (el resto de métodos tienen el suyo).",
                {
                  s: Wm[e.opt_metodo] ?? 8,
                  m: r(Qm[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      f && /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Xa, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(g, { titulo: "Impresión", children: [
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
              h("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ i.jsxs(j, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (p) => y({ simular_impresion: p.target.checked })
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
                        onChange: (p) => y({ sim_cmyk: p.target.checked })
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
              h("Formato de color de salida", "color_formato", [
                ["rgba", "PNG con transparencia (recomendado)"],
                ["rgb", "PNG con fondo blanco"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(g, { titulo: "Origen y exportación", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-chequear-lineas",
                    checked: e.chequear_lineas,
                    onChange: (p) => y({ chequear_lineas: p.target.checked })
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
              h("Lienzo del archivo final", "lienzo", [
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
      f && /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(go, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (p) => y({ offset_activo: p.target.checked })
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
              h("Tipo de borde", "offset_modo", [
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
                      onChange: (p) => y({ offset_color: p.target.value })
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
      f && /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Nm, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: nu(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: Xl[e.maquina] ?? "Cricut Maker 3" }
              ),
              [Xl[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            c("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            c("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            c("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            c("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      f && /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Nd, { size: 15 }),
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
                  onChange: (p) => y({ historial: p.target.checked })
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
                    onChange: (p) => y({ hist_tamano: p.target.checked })
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
                    onChange: (p) => y({ hist_copias: p.target.checked })
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
                    onChange: (p) => y({ hist_borde: p.target.checked })
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
                    onChange: (p) => y({ hist_minis: p.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        jt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Ed, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Di.map((p) => /* @__PURE__ */ i.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === p.key ? "active" : ""}`,
                  "data-testid": `tema-${p.key}`,
                  onClick: () => t({ tema: p.key }),
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: p.colors.accent } }),
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: p.colors.accent2 } }),
                    p.label
                  ]
                },
                p.key
              )) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-ver-guias",
                  checked: e.ver_guias,
                  onChange: (p) => t({ ver_guias: p.target.checked })
                }
              ),
              r("Mostrar guías de límites al inicio")
            ] }) }),
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx("img", { src: D.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var p;
                  return (p = $.current) == null ? void 0 : p.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: $,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (p) => {
                      var k;
                      const x = (k = p.target.files) == null ? void 0 : k[0];
                      x && D.setIcon(x).then(() => {
                        window.location.reload();
                      }), p.target.value = "";
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
        jt,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Sd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(g, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
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
                    onChange: (p) => y({ volumen: Number(p.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "hint", children: [
                  Math.round((e.volumen ?? 0.5) * 100),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ i.jsxs(g, { titulo: "Pikmin", children: [
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-activo",
                    checked: e.pikmin_activo !== !1,
                    onChange: (p) => y({ pikmin_activo: p.target.checked })
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
                    onChange: (p) => y({ pikmin_sonido: p.target.checked })
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
                    onChange: (p) => y({ pikmin_sonido_morir: p.target.checked })
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
                    onChange: (p) => t({ comprobar_versiones: p.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: nu(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Pd,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (p) => t({ carpeta_export: p })
      }
    )
  ] });
}
function ru(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Km({
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
  onAyuda: m,
  onReportar: v
}) {
  var Y, J;
  const f = tt(), j = $s(), [_, y] = w.useState([]), [$, g] = w.useState(0), [c, h] = w.useState(null), [p, x] = w.useState(!1), [k, C] = w.useState(""), b = w.useRef(!1), S = w.useRef([]);
  w.useEffect(() => {
    fetch("/api/funmsgs").then((O) => O.ok ? O.json() : { msgs: [] }).then((O) => y(O.msgs ?? [])).catch(() => {
    });
  }, []), w.useEffect(() => {
    let O = !0;
    return D.version().then((X) => {
      O && (h(X), !X.comprobado && !b.current && (b.current = !0, D.checkVersion().then((ge) => O && h(ge)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      O = !1;
    };
  }, []);
  const N = ((Y = c == null ? void 0 : c.actualizacion) == null ? void 0 : Y.estado) === "descargando" || ((J = c == null ? void 0 : c.actualizacion) == null ? void 0 : J.estado) === "instalando";
  w.useEffect(() => {
    if (!N) return;
    const O = setInterval(() => {
      D.version().then(h).catch(() => {
      });
    }, 700);
    return () => clearInterval(O);
  }, [N]);
  const I = !!(e && !e.done);
  w.useEffect(() => {
    if (!I) return;
    const O = setInterval(() => g((X) => X + 1), 1200);
    return () => clearInterval(O);
  }, [I]);
  const Q = _.length ? _ : [
    f("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], G = w.useMemo(() => {
    if (k) return k;
    if (N) {
      const O = c == null ? void 0 : c.actualizacion;
      if ((O == null ? void 0 : O.estado) === "instalando") return f("Instalando y reiniciando…");
      const X = (O == null ? void 0 : O.progreso) != null ? Math.round(O.progreso) : null;
      return X != null ? f("Descargando… {p}%", { p: X }) : (O == null ? void 0 : O.mensaje) || f("Descargando actualización…");
    }
    return I ? Q[$ % Q.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? f("Listo") : f("Listo para empezar");
  }, [k, N, I, e, Q, $, n, f, c]), T = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), te = w.useMemo(() => {
    const O = e == null ? void 0 : e.eta_s;
    return !I || O === void 0 || O === null || O <= 0.5 ? "" : f(" · {x} restante", { x: ru(O) });
  }, [e == null ? void 0 : e.eta_s, I, f]), He = w.useMemo(() => !r || !r.segundos ? "" : ru(r.segundos), [r]), Oe = async () => {
    x(!0), C("");
    try {
      const O = await D.checkVersion();
      h(O), O.error ? C(f("Sin conexión")) : O.hay_nueva || C(f("Estás en la última versión"));
    } catch {
      C(f("Sin conexión"));
    } finally {
      x(!1);
    }
  }, P = async () => {
    C("");
    try {
      const O = await D.updateVersion();
      O.ok ? C(f("Instalando y reiniciando…")) : O.modo === "dev" && O.url ? (C(f("Modo desarrollo: se actualiza con git")), await D.openReleases().catch(() => {
      })) : C(O.mensaje || f("No se pudo actualizar")), D.version().then(h).catch(() => {
      });
    } catch {
      C(f("No se pudo actualizar"));
    }
  }, B = !!(c != null && c.hay_nueva && !I && !N) ? f("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: D.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: f("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const O = Date.now();
            S.current = [...S.current, O].filter((X) => O - X < 2500), S.current.length >= 5 && (S.current = [], C(f("¡Fiesta Pikmin!")), window.setTimeout(() => C(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !I && (() => {
        const O = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), X = n.placed || 1, ge = Math.min(80, Math.max(
          30,
          48 + 22 * O - Math.min(18, X * 0.08)
        )), ve = n.efficiency * 100, Ee = ve >= ge ? "buena" : ve >= ge * 0.72 ? "normal" : "baja";
        return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": f("Imágenes colocadas en las hojas"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.placed }),
            /* @__PURE__ */ i.jsx("span", { children: f("imágenes") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": f("Páginas que ocupa el trabajo"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.pages }),
            /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? f("páginas") : f("página") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": f("Copias pequeñas extra que rellenan huecos"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.minis }),
            /* @__PURE__ */ i.jsx("span", { children: f("minis") })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `stat-card eficiencia ${Ee}`,
              "data-testid": "eficiencia-card",
              "data-nivel": Ee,
              "data-tip": f("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: X, e: Math.round(ge) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(ve),
                  "%"
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: f("eficiencia") })
              ]
            }
          )
        ] });
      })(),
      !(n && n.pages > 0 && !I) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: G }),
      !!n && n.pages > 1 && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: f("No cabe todo en una página: se usarán varias"),
          children: f("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      I && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, T)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          T,
          "%",
          te
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: gt("/piensa.gif"),
            alt: "",
            title: f("Pensando…"),
            onError: (O) => {
              O.currentTarget.style.display = "none";
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
          "data-tip": f("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => m == null ? void 0 : m(),
          children: [
            /* @__PURE__ */ i.jsx(Dm, { size: 15 }),
            " ",
            f("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info reportar",
          "data-testid": "btn-reportar",
          "data-tip": f("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ i.jsx(zd, { size: 15 }),
            " ",
            f("Reportar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          "data-tip": f("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ i.jsx($m, { size: 15 }),
            " ",
            f("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: f("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ i.jsx(Lm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: f("Idioma"),
          onClick: () => l == null ? void 0 : l(j === "es" ? "en" : "es"),
          children: j.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: f("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !N && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: B || f("Hay una versión nueva"),
                onClick: P,
                children: /* @__PURE__ */ i.jsx(Rm, { size: 14 })
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
                title: f("Comprobar versiones"),
                onClick: Oe,
                disabled: p,
                children: p ? "…" : /* @__PURE__ */ i.jsx(Am, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: f("Descargar e instalar la nueva versión"),
                onClick: P,
                children: /* @__PURE__ */ i.jsx(Im, { size: 14 })
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
          title: f(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: f("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            f("Corte"),
            " ",
            He || "—"
          ]
        }
      )
    ] })
  ] });
}
const Jm = [
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
], Xm = "/pikmin_bloom/", au = "/pikmin/alma.png", Zm = "/sonidos/pikmin.mp3", eh = "/sonidos/pikmin_morir.mp3";
function th(e) {
  const [t, n] = w.useState(Jm), [r, a] = w.useState([]);
  return w.useEffect(() => {
    fetch(gt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(gt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => gt(Xm + u)));
    }).catch(() => {
    });
  }, []), w.useMemo(
    () => e && e.length ? [...e, ...r].map(gt) : [...t, ...r].map(gt),
    [e, t, r]
  );
}
function nh({
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
  const m = th(d), [v, f] = w.useState([]), j = w.useRef(void 0), _ = w.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = w.useRef(s);
  y.current = s;
  const $ = Math.max(5e3, t * 6e4), g = (x) => {
    if (!(!n || o))
      try {
        const k = new Audio(gt(x ? eh : Zm));
        k.volume = Math.min(1, Math.max(0, a)), k.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const x = r && Math.random() < 0.25, k = x ? gt(au) : m[Math.floor(Math.random() * m.length)] ?? gt(au);
    f((C) => [...C, {
      src: k,
      left: 3 + Math.random() * 92,
      key: Date.now() + C.length,
      morir: x,
      estado: "paseando"
    }]), g(x);
  }, h = () => {
    if (!e) return;
    const x = u ?? Math.round($ * 0.5), k = l ?? Math.round($ * 1.5), C = x + Math.random() * Math.max(1, k - x);
    j.current = window.setTimeout(c, C);
  };
  w.useEffect(() => {
    if (!e) {
      window.clearTimeout(j.current), f([]);
      return;
    }
    return h(), () => window.clearTimeout(j.current);
  }, [e, t, n, r, a, o, m]), w.useEffect(() => {
    const x = () => {
      _.current = document.visibilityState === "hidden", !_.current && y.current && window.setTimeout(() => {
        f((k) => k.length ? (g(!1), k.map((C) => ({ ...C, estado: "festejando" }))) : k), window.setTimeout(() => {
          f([]), h();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", x), () => document.removeEventListener("visibilitychange", x);
  }, []);
  const p = (x) => {
    if (y.current && _.current) {
      f((k) => k.map((C) => C.key === x ? { ...C, estado: "quieto" } : C));
      return;
    }
    f((k) => k.filter((C) => C.key !== x)), h();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: v.map((x) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${x.estado}${x.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": x.estado,
      "data-morir": x.morir ? "1" : "0",
      style: { left: `${x.left}%` },
      onAnimationEnd: () => p(x.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: x.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => p(x.key)
        }
      )
    },
    x.key
  )) });
}
const ou = "crycat_bienvenida_v2";
function rh() {
  const [e, t] = w.useState(!1);
  return w.useEffect(() => {
    try {
      localStorage.getItem(ou) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(ou, "1");
    } catch {
    }
    t(!1);
  } };
}
function ah({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = tt(), [a, o] = w.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(Xa, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(kr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Vr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(qr, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Fi, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(Xa, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(go, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Vr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(qr, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(_d, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(kr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Fi, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Tm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(Sd, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(kr, { size: 18 }),
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((m, v) => /* @__PURE__ */ i.jsx("li", { children: m }, v)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([m, v, f], j) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: m }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: v }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: f })
      ] })
    ] }, j)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
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
const oh = "https://github.com/dhernandezgit/CryCat-Tool", ih = [
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
function sh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = tt(), [s, u] = w.useState(""), [l, d] = w.useState(""), [m, v] = w.useState(""), [f, j] = w.useState(!0), [_, y] = w.useState(!0), [$, g] = w.useState(!0), [c, h] = w.useState(!1);
  w.useEffect(() => {
    e && (D.version().then((S) => u(S.actual)).catch(() => {
    }), h(!1));
  }, [e]);
  const p = () => (globalThis.__crycatErrores ?? []).map(
    (N) => `- [${N.t}] ${N.msg} (${N.donde || "?"})`
  );
  if (!e) return null;
  const x = () => {
    var Q, G;
    const S = navigator.userAgent, N = !!globalThis.__crycatBase, I = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${N ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${S}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((Q = window.screen) == null ? void 0 : Q.width) ?? "?"}x${((G = window.screen) == null ? void 0 : G.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && I.push(`- Elementos: ${a.pages} página(s)`), r && I.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), I.join(`
`);
  }, k = () => n ? [
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
`) : "", C = () => {
    const S = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      m.trim() || "1. …",
      ""
    ];
    f && S.push("### Entorno", x(), ""), _ && n && S.push("### Ajustes", k(), "");
    const N = p();
    return $ && N.length && S.push("### Errores recogidos", N.join(`
`), ""), S.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), S.join(`
`);
  }, b = () => {
    const S = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, N = `${oh}/issues/new?` + new URLSearchParams({
      title: S,
      body: C(),
      labels: "bug"
    }).toString();
    window.open(N, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: ih.map(([S, N]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${S}`,
        onClick: () => d((I) => (I ? I + `
` : "") + N),
        children: o(S)
      },
      S
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
          onChange: (S) => d(S.target.value)
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
          value: m,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (S) => v(S.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: f,
          onChange: (S) => j(S.target.checked)
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
          checked: _,
          onChange: (S) => y(S.target.checked)
        }
      ),
      o("Incluir mis ajustes actuales")
    ] }),
    p().length > 0 && /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: $,
          onChange: (S) => g(S.target.checked)
        }
      ),
      o(
        "Incluir los {n} errores recogidos de la consola",
        { n: p().length }
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

${m}

${C()}`
              ), h(!0);
            } catch {
            }
          },
          children: o(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: b, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function lh() {
  const [e, t] = w.useState([]), [n, r] = w.useState(null), [a, o] = w.useState(null), [s, u] = w.useState(null), [l, d] = w.useState(null), [m, v] = w.useState(null), [f, j] = w.useState(!0), [_, y] = w.useState(!1), [$, g] = w.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, h] = w.useState(33.3), [p, x] = w.useState(33.3), k = rh(), C = w.useRef(null), b = w.useRef(null);
  w.useEffect(() => {
    (async () => {
      try {
        const L = await D.getSettings();
        d(L.settings), Zl(L.settings.tema), g((U) => ({
          ...U,
          guidesVisible: L.settings.ver_guias,
          eyeTransparent: L.settings.fondo_transparente
        })), t((await D.listAssets()).map(Br)), o(await D.result());
      } catch {
        j(!1);
      }
    })();
  }, []);
  const [S, N] = w.useState("");
  w.useEffect(() => {
    const L = (U) => N(String(U.detail || ""));
    return window.addEventListener("crycat:seleccion", L), () => window.removeEventListener("crycat:seleccion", L);
  }, []), w.useEffect(() => {
    const L = (U) => {
      const We = U.detail;
      h(We ? 19 : 33.3), x(We ? 62 : 33.3), g((Le) => ({ ...Le, hojaGirada: We }));
    };
    return window.addEventListener("crycat:disposicion", L), () => window.removeEventListener("crycat:disposicion", L);
  }, []), w.useEffect(() => {
    const L = setInterval(async () => {
      try {
        await D.health(), j(!0);
      } catch {
        j(!1);
      }
    }, 5e3);
    return () => clearInterval(L);
  }, []);
  const I = w.useCallback(async () => {
    try {
      t((await D.listAssets()).map(Br)), o(await D.result());
      try {
        u(await D.estimate());
      } catch {
      }
    } catch {
      j(!1);
    }
  }, []), Q = w.useCallback((L) => {
    b.current && window.clearInterval(b.current), b.current = window.setInterval(async () => {
      try {
        const U = await D.job(L);
        v(U), U.done && (window.clearInterval(b.current), b.current = null, await I(), U.status === "done" && window.setTimeout(() => v(null), 2500));
      } catch {
        window.clearInterval(b.current), b.current = null;
      }
    }, 300);
  }, []), G = w.useCallback(async () => {
    try {
      const L = await D.optimize();
      v(L), Q(L.id);
    } catch {
      j(!1);
    }
  }, [Q]), T = w.useCallback(
    async (L) => {
      try {
        const U = await D.optimize(L, !0);
        v(U), Q(U.id);
      } catch {
        j(!1);
      }
    },
    [Q]
  ), te = w.useCallback(() => {
    l && l.auto_recalcular === !1 || (C.current && window.clearTimeout(C.current), C.current = window.setTimeout(G, 400));
  }, [G, l]), He = w.useRef(null);
  w.useEffect(() => {
    He.current = te;
  }, [te]);
  const Oe = w.useRef(!1);
  w.useEffect(() => {
    if (!(!l || Oe.current)) {
      if (e.length > 0) {
        Oe.current = !0;
        return;
      }
      Oe.current = !0, D.crearDemo().then(async (L) => {
        L.ok && await I();
      }).catch(() => {
      });
    }
  }, [l, e.length, I]);
  const P = w.useCallback(
    async (L) => {
      d((U) => U && { ...U, ...L }), L.tema && Zl(L.tema);
      try {
        const U = await D.putSettings(L);
        if (U.job)
          v(U.job), Q(U.job.id);
        else
          try {
            u(await D.estimate());
          } catch {
          }
      } catch {
        j(!1);
      }
    },
    [Q]
  ), F = w.useRef([]), B = w.useRef([]), [Y, J] = w.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), O = (l == null ? void 0 : l.historial) !== !1, X = (l == null ? void 0 : l.historial_max) ?? 40, ge = () => J({
    puedeDeshacer: F.current.length > 0,
    puedeRehacer: B.current.length > 0
  }), ve = w.useCallback(() => {
    const L = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && L.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && L.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && L.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && L.push("mini_enabled", "mini_quota"), L;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), Ee = w.useCallback((L) => {
    const U = {};
    for (const We of ve()) U[We] = L[We];
    return U;
  }, [ve]), rn = w.useCallback(() => {
    O && (F.current = [...F.current, e].slice(-X), B.current = [], ge());
  }, [e, O, X]), an = w.useCallback(async () => {
    const L = F.current.pop();
    if (L) {
      B.current = [...B.current, e], t(L), ge();
      for (const U of L)
        await D.patchAsset(U.id, Ee(U)).catch(() => {
        });
      await I();
    }
  }, [e, I, Ee]), jn = w.useCallback(async () => {
    const L = B.current.pop();
    if (L) {
      F.current = [...F.current, e], t(L), ge();
      for (const U of L)
        await D.patchAsset(U.id, Ee(U)).catch(() => {
        });
      await I();
    }
  }, [e, I, Ee]);
  w.useEffect(() => {
    const L = (U) => {
      if (!(U.ctrlKey || U.metaKey)) return;
      const Le = U.target;
      if (Le && (Le.tagName === "INPUT" || Le.tagName === "TEXTAREA" || Le.tagName === "SELECT" || Le.isContentEditable)) return;
      const Tt = U.key.toLowerCase();
      Tt === "z" && !U.shiftKey ? (U.preventDefault(), an()) : (Tt === "y" || Tt === "z" && U.shiftKey) && (U.preventDefault(), jn());
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [an, jn]);
  const Zn = w.useCallback(
    (L) => {
      const U = (Le) => {
        const er = window.innerWidth, Tt = Le.clientX / er * 100;
        L === "left" ? h(Math.min(45, Math.max(12, Tt))) : x(Math.min(60, Math.max(20, Tt - c)));
      }, We = () => {
        window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", We);
      };
      window.addEventListener("mousemove", U), window.addEventListener("mouseup", We);
    },
    [c]
  );
  return w.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(wm, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Bm,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await I(), te();
          },
          saveSettings: P,
          onEditarContorno: (L) => r(L),
          onAntesDeCambiar: rn,
          verBordes: $.verBordes,
          destacado: S
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Zn("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${p}%` }, children: /* @__PURE__ */ i.jsx(
        qm,
        {
          assets: e,
          result: a,
          settings: l,
          ui: $,
          setUi: g,
          saveSettings: P,
          optimize: G,
          onRefresh: I,
          onJob: (L) => {
            v(L), Q(L.id);
          },
          onRecalc: T,
          editando: n,
          onFinEdicion: async () => {
            r(null), await I();
          },
          onDeshacer: an,
          onRehacer: jn,
          puedeDeshacer: Y.puedeDeshacer,
          puedeRehacer: Y.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Zn("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Ym,
        {
          settings: l,
          assets: e,
          saveSettings: P
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Km,
      {
        job: m,
        backendOk: f,
        result: a,
        estimate: s,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (L) => P({ volumen: L }),
        onMute: (L) => P({ mute: L }),
        onIdioma: (L) => P({ idioma: L }),
        onEasterEgg: () => P({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: k.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      nh,
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
      ah,
      {
        open: k.visible,
        onClose: k.cerrar,
        onAbrirCarpeta: () => void D.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      sh,
      {
        open: _,
        onClose: () => y(!1),
        settings: l,
        job: m,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: jm("es", "Cargando CryCat…") });
}
const bd = document.getElementById("root"), Bt = [
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
], Bi = 8, Ea = [];
globalThis.__crycatErrores = Ea;
const Md = (e, t) => {
  Ea.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Ea.length > 12 && Ea.shift();
};
window.addEventListener("error", (e) => Md(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Md(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Ui;
function iu(e, t = !1) {
  window.clearTimeout(Ui);
  const n = Oi().colors;
  if (bd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Bi}</div>
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
    a(), Ui = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const ma = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Bi}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Bi * 100)}%`);
  }
};
let Sr = null, Vo;
const qi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, uh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function ch(e) {
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
    qi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function dh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((v, f) => {
    s[f] = v;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [v, f] = await ch(l);
    u = v, s["content-type"] = f;
  } else l instanceof Blob ? u = qi(await l.arrayBuffer()) : typeof l == "string" && (u = qi(new TextEncoder().encode(l).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(u) + ")", m = JSON.parse(await Sr.runPythonAsync(d));
  return new Response(uh(m.body), {
    status: m.status || 200,
    headers: m.headers || { "content-type": "application/json" }
  });
}
function ph() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && Sr)
      try {
        return await dh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function fh() {
  try {
    if (iu("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const s = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: s }).then(() => navigator.serviceWorker.ready),
          new Promise((u) => setTimeout(u, 6e3))
        ]);
      } catch {
      }
    Sr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(ma), ma("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await Sr.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(u.method) + ", " + JSON.stringify(u.path) + ", " + JSON.stringify(JSON.stringify(u.headers || {})) + ", " + JSON.stringify(u.body || "") + ")", m = await Sr.runPythonAsync(d);
          l.postMessage(JSON.parse(m));
        } catch (d) {
          l.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (d && d.message ? d.message : d))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, ph();
    const n = document.createElement("div");
    n.id = "crycat-espera";
    const r = Oi().colors;
    n.style.cssText = "position:fixed;left:0;right:0;bottom:0;display:none;z-index:9999;align-items:center;gap:12px;padding:10px 18px;font:14px system-ui;color:#fff;background:" + r.accent3 + ";box-shadow:0 -4px 18px rgba(60,20,40,.28)", n.innerHTML = '<img src="./app/piensa.gif" alt="" style="height:34px;width:auto" /><div id="espera-frase" style="font-size:14.5px;font-weight:800;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div><div style="font-size:12.5px;opacity:.9">Optimizando en tu equipo…</div>', document.body.appendChild(n);
    const a = window.fetch.bind(window), o = async (s, u) => {
      const d = String((s == null ? void 0 : s.url) ?? s ?? "").includes("/api/optimize");
      if (d) {
        n.style.display = "flex";
        const m = document.getElementById("espera-frase");
        let v = Math.floor(Math.random() * Bt.length);
        m && (m.textContent = Bt[v++ % Bt.length]), window.clearInterval(Vo), Vo = window.setInterval(() => {
          const f = document.getElementById("espera-frase");
          f && (f.textContent = Bt[v++ % Bt.length]);
        }, 1200);
      }
      try {
        return await a(s, u);
      } finally {
        d && (window.clearInterval(Vo), n.style.display = "none");
      }
    };
    window.fetch = o;
    try {
      const s = Oi().key;
      s && s !== "wiwi" && await fetch(fn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: s })
      });
    } catch {
    }
    ma("Optimizando la muestra inicial…", 7);
    try {
      const s = await fetch(fn() + "api/assets").then((u) => u.json());
      Array.isArray(s) && s.length === 0 && await fetch(fn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    ma("Abriendo la aplicación…", 8), window.clearTimeout(Ui), xd(bd).render(/* @__PURE__ */ i.jsx(lh, {}));
  } catch (e) {
    iu("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
fh();
