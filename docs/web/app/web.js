var lu = { exports: {} }, to = {}, uu = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = Symbol.for("react.element"), Vd = Symbol.for("react.portal"), Gd = Symbol.for("react.fragment"), Hd = Symbol.for("react.strict_mode"), Wd = Symbol.for("react.profiler"), Qd = Symbol.for("react.provider"), Yd = Symbol.for("react.context"), Kd = Symbol.for("react.forward_ref"), Jd = Symbol.for("react.suspense"), Xd = Symbol.for("react.memo"), Zd = Symbol.for("react.lazy"), Gs = Symbol.iterator;
function ep(e) {
  return e === null || typeof e != "object" ? null : (e = Gs && e[Gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, du = Object.assign, pu = {};
function Kn(e, t, n) {
  this.props = e, this.context = t, this.refs = pu, this.updater = n || cu;
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fu() {
}
fu.prototype = Kn.prototype;
function Gi(e, t, n) {
  this.props = e, this.context = t, this.refs = pu, this.updater = n || cu;
}
var Hi = Gi.prototype = new fu();
Hi.constructor = Gi;
du(Hi, Kn.prototype);
Hi.isPureReactComponent = !0;
var Hs = Array.isArray, mu = Object.prototype.hasOwnProperty, Wi = { current: null }, hu = { key: !0, ref: !0, __self: !0, __source: !0 };
function gu(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) mu.call(t, r) && !hu.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), f = 0; f < u; f++) l[f] = arguments[f + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: qr, type: e, key: o, ref: s, props: a, _owner: Wi.current };
}
function tp(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function np(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ws = /\/+/g;
function wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? np("" + e.key) : t.toString(36);
}
function va(e, t, n, r, a) {
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
        case Vd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + wo(s, 0) : r, Hs(a) ? (n = "", e != null && (n = e.replace(Ws, "$&/") + "/"), va(a, t, n, "", function(f) {
    return f;
  })) : a != null && (Qi(a) && (a = tp(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Ws, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Hs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + wo(o, u);
    s += va(o, t, n, l, a);
  }
  else if (l = ep(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + wo(o, u++), s += va(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Xr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return va(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function rp(e) {
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
var Me = { current: null }, ya = { transition: null }, ap = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: ya, ReactCurrentOwner: Wi };
function vu() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Xr, forEach: function(e, t, n) {
  Xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = Kn;
q.Fragment = Gd;
q.Profiler = Wd;
q.PureComponent = Gi;
q.StrictMode = Hd;
q.Suspense = Jd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
q.act = vu;
q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = du({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Wi.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) mu.call(t, l) && !hu.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var f = 0; f < l; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: qr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
q.createContext = function(e) {
  return e = { $$typeof: Yd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Qd, _context: e }, e.Consumer = e;
};
q.createElement = gu;
q.createFactory = function(e) {
  var t = gu.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Kd, render: e };
};
q.isValidElement = Qi;
q.lazy = function(e) {
  return { $$typeof: Zd, _payload: { _status: -1, _result: e }, _init: rp };
};
q.memo = function(e, t) {
  return { $$typeof: Xd, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = ya.transition;
  ya.transition = {};
  try {
    e();
  } finally {
    ya.transition = t;
  }
};
q.unstable_act = vu;
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
uu.exports = q;
var j = uu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op = j, ip = Symbol.for("react.element"), sp = Symbol.for("react.fragment"), lp = Object.prototype.hasOwnProperty, up = op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function yu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) lp.call(t, r) && !cp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: ip, type: e, key: o, ref: s, props: a, _owner: up.current };
}
to.Fragment = sp;
to.jsx = yu;
to.jsxs = yu;
lu.exports = to;
var i = lu.exports, xu = { exports: {} }, Ve = {}, wu = { exports: {} }, ju = {};
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
    var B = b.length;
    b.push(O);
    e: for (; 0 < B; ) {
      var W = B - 1 >>> 1, Y = b[W];
      if (0 < a(Y, O)) b[W] = O, b[B] = Y, B = W;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var O = b[0], B = b.pop();
    if (B !== O) {
      b[0] = B;
      e: for (var W = 0, Y = b.length, et = Y >>> 1; W < et; ) {
        var I = 2 * (W + 1) - 1, Z = b[I], me = I + 1, Ee = b[me];
        if (0 > a(Z, B)) me < Y && 0 > a(Ee, Z) ? (b[W] = Ee, b[me] = B, W = me) : (b[W] = Z, b[I] = B, W = I);
        else if (me < Y && 0 > a(Ee, B)) b[W] = Ee, b[me] = B, W = me;
        else break e;
      }
    }
    return O;
  }
  function a(b, O) {
    var B = b.sortIndex - O.sortIndex;
    return B !== 0 ? B : b.id - O.id;
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
  var l = [], f = [], h = 1, g = null, v = 3, y = !1, k = !1, x = !1, F = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(b) {
    for (var O = n(f); O !== null; ) {
      if (O.callback === null) r(f);
      else if (O.startTime <= b) r(f), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = n(f);
    }
  }
  function p(b) {
    if (x = !1, c(b), !k) if (n(l) !== null) k = !0, oe(w);
    else {
      var O = n(f);
      O !== null && Le(p, O.startTime - b);
    }
  }
  function w(b, O) {
    k = !1, x && (x = !1, m(P), P = -1), y = !0;
    var B = v;
    try {
      for (c(O), g = n(l); g !== null && (!(g.expirationTime > O) || b && !$()); ) {
        var W = g.callback;
        if (typeof W == "function") {
          g.callback = null, v = g.priorityLevel;
          var Y = W(g.expirationTime <= O);
          O = e.unstable_now(), typeof Y == "function" ? g.callback = Y : g === n(l) && r(l), c(O);
        } else r(l);
        g = n(l);
      }
      if (g !== null) var et = !0;
      else {
        var I = n(f);
        I !== null && Le(p, I.startTime - O), et = !1;
      }
      return et;
    } finally {
      g = null, v = B, y = !1;
    }
  }
  var S = !1, _ = null, P = -1, C = 5, N = -1;
  function $() {
    return !(e.unstable_now() - N < C);
  }
  function K() {
    if (_ !== null) {
      var b = e.unstable_now();
      N = b;
      var O = !0;
      try {
        O = _(!0, b);
      } finally {
        O ? Q() : (S = !1, _ = null);
      }
    } else S = !1;
  }
  var Q;
  if (typeof d == "function") Q = function() {
    d(K);
  };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(), T = J.port2;
    J.port1.onmessage = K, Q = function() {
      T.postMessage(null);
    };
  } else Q = function() {
    F(K, 0);
  };
  function oe(b) {
    _ = b, S || (S = !0, Q());
  }
  function Le(b, O) {
    P = F(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, oe(w));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(b) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = v;
    }
    var B = v;
    v = O;
    try {
      return b();
    } finally {
      v = B;
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
    var B = v;
    v = b;
    try {
      return O();
    } finally {
      v = B;
    }
  }, e.unstable_scheduleCallback = function(b, O, B) {
    var W = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, b) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = B + Y, b = { id: h++, callback: O, priorityLevel: b, startTime: B, expirationTime: Y, sortIndex: -1 }, B > W ? (b.sortIndex = B, t(f, b), n(l) === null && b === n(f) && (x ? (m(P), P = -1) : x = !0, Le(p, B - W))) : (b.sortIndex = Y, t(l, b), k || y || (k = !0, oe(w))), b;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(b) {
    var O = v;
    return function() {
      var B = v;
      v = O;
      try {
        return b.apply(this, arguments);
      } finally {
        v = B;
      }
    };
  };
})(ju);
wu.exports = ju;
var dp = wu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp = j, qe = dp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ku = /* @__PURE__ */ new Set(), kr = {};
function xn(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) ku.add(t[e]);
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wo = Object.prototype.hasOwnProperty, fp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qs = {}, Ys = {};
function mp(e) {
  return Wo.call(Ys, e) ? !0 : Wo.call(Qs, e) ? !1 : fp.test(e) ? Ys[e] = !0 : (Qs[e] = !0, !1);
}
function hp(e, t, n, r) {
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
function gp(e, t, n, r) {
  if (t === null || typeof t > "u" || hp(e, t, n, r)) return !0;
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
var Yi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yi,
    Ki
  );
  ke[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yi, Ki);
  ke[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yi, Ki);
  ke[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var a = ke.hasOwnProperty(t) ? ke[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gp(t, n, a, r) && (n = null), r || a === null ? mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Zr = Symbol.for("react.element"), _n = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Xi = Symbol.for("react.strict_mode"), Qo = Symbol.for("react.profiler"), Su = Symbol.for("react.provider"), Cu = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Yo = Symbol.for("react.suspense"), Ko = Symbol.for("react.suspense_list"), es = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), _u = Symbol.for("react.offscreen"), Ks = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object" ? null : (e = Ks && e[Ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var de = Object.assign, jo;
function sr(e) {
  if (jo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    jo = t && t[1] || "";
  }
  return `
` + jo + e;
}
var ko = !1;
function So(e, t) {
  if (!e || ko) return "";
  ko = !0;
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
    ko = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function vp(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = So(e.type, !1), e;
    case 11:
      return e = So(e.type.render, !1), e;
    case 1:
      return e = So(e.type, !0), e;
    default:
      return "";
  }
}
function Jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case _n:
      return "Portal";
    case Qo:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Ko:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Cu:
      return (e.displayName || "Context") + ".Consumer";
    case Su:
      return (e._context.displayName || "Context") + ".Provider";
    case Zi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case es:
      return t = e.displayName || null, t !== null ? t : Jo(e.type) || "Memo";
    case Ft:
      t = e._payload, e = e._init;
      try {
        return Jo(e(t));
      } catch {
      }
  }
  return null;
}
function yp(e) {
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
      return Jo(t);
    case 8:
      return t === Xi ? "StrictMode" : "Mode";
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
function en(e) {
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
function Nu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xp(e) {
  var t = Nu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ea(e) {
  e._valueTracker || (e._valueTracker = xp(e));
}
function Eu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Nu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ba(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return de({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Js(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = en(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zu(e, t) {
  t = t.checked, t != null && Ji(e, "checked", t, !1);
}
function Zo(e, t) {
  zu(e, t);
  var n = en(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ei(e, t.type, n) : t.hasOwnProperty("defaultValue") && ei(e, t.type, en(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ei(e, t, n) {
  (t !== "number" || ba(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return de({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Zs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: en(n) };
}
function Pu(e, t) {
  var n = en(t.value), r = en(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function el(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? bu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ta, Mu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ta = ta || document.createElement("div"), ta.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ta.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
var dr = {
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
}, wp = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
  wp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e];
  });
});
function Tu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px";
}
function Lu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Tu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var jp = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ri(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function ai(e, t) {
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
var oi = null;
function ts(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ii = null, $n = null, On = null;
function tl(e) {
  if (e = Hr(e)) {
    if (typeof ii != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = io(t), ii(e.stateNode, e.type, t));
  }
}
function Ru(e) {
  $n ? On ? On.push(e) : On = [e] : $n = e;
}
function Au() {
  if ($n) {
    var e = $n, t = On;
    if (On = $n = null, tl(e), t) for (e = 0; e < t.length; e++) tl(t[e]);
  }
}
function Iu(e, t) {
  return e(t);
}
function Du() {
}
var Co = !1;
function $u(e, t, n) {
  if (Co) return e(t, n);
  Co = !0;
  try {
    return Iu(e, t, n);
  } finally {
    Co = !1, ($n !== null || On !== null) && (Du(), Au());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = io(n);
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
var si = !1;
if (Pt) try {
  var er = {};
  Object.defineProperty(er, "passive", { get: function() {
    si = !0;
  } }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
} catch {
  si = !1;
}
function kp(e, t, n, r, a, o, s, u, l) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var pr = !1, Ma = null, Ta = !1, li = null, Sp = { onError: function(e) {
  pr = !0, Ma = e;
} };
function Cp(e, t, n, r, a, o, s, u, l) {
  pr = !1, Ma = null, kp.apply(Sp, arguments);
}
function _p(e, t, n, r, a, o, s, u, l) {
  if (Cp.apply(this, arguments), pr) {
    if (pr) {
      var f = Ma;
      pr = !1, Ma = null;
    } else throw Error(z(198));
    Ta || (Ta = !0, li = f);
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
function Ou(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function nl(e) {
  if (wn(e) !== e) throw Error(z(188));
}
function Np(e) {
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
        if (o === n) return nl(a), e;
        if (o === r) return nl(a), t;
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
function Fu(e) {
  return e = Np(e), e !== null ? Bu(e) : null;
}
function Bu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uu = qe.unstable_scheduleCallback, rl = qe.unstable_cancelCallback, Ep = qe.unstable_shouldYield, zp = qe.unstable_requestPaint, fe = qe.unstable_now, Pp = qe.unstable_getCurrentPriorityLevel, ns = qe.unstable_ImmediatePriority, qu = qe.unstable_UserBlockingPriority, La = qe.unstable_NormalPriority, bp = qe.unstable_LowPriority, Vu = qe.unstable_IdlePriority, no = null, xt = null;
function Mp(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function") try {
    xt.onCommitFiberRoot(no, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Rp, Tp = Math.log, Lp = Math.LN2;
function Rp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Tp(e) / Lp | 0) | 0;
}
var na = 64, ra = 4194304;
function ur(e) {
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
function Ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~a;
    u !== 0 ? r = ur(u) : (o &= s, o !== 0 && (r = ur(o)));
  } else s = n & ~a, s !== 0 ? r = ur(s) : o !== 0 && (r = ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Ap(e, t) {
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
function Ip(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ct(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Ap(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ui(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Gu() {
  var e = na;
  return na <<= 1, !(na & 4194240) && (na = 64), e;
}
function _o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Dp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ct(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function rs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var X = 0;
function Hu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Wu, as, Qu, Yu, Ku, ci = !1, aa = [], Ht = null, Wt = null, Qt = null, _r = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Ut = [], $p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function al(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
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
function tr(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Hr(t), t !== null && as(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Op(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Ht = tr(Ht, e, t, n, r, a), !0;
    case "dragenter":
      return Wt = tr(Wt, e, t, n, r, a), !0;
    case "mouseover":
      return Qt = tr(Qt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return _r.set(o, tr(_r.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Nr.set(o, tr(Nr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Ju(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ou(n), t !== null) {
          e.blockedOn = t, Ku(e.priority, function() {
            Qu(n);
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
function xa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      oi = r, n.target.dispatchEvent(r), oi = null;
    } else return t = Hr(n), t !== null && as(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ol(e, t, n) {
  xa(e) && n.delete(t);
}
function Fp() {
  ci = !1, Ht !== null && xa(Ht) && (Ht = null), Wt !== null && xa(Wt) && (Wt = null), Qt !== null && xa(Qt) && (Qt = null), _r.forEach(ol), Nr.forEach(ol);
}
function nr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ci || (ci = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Fp)));
}
function Er(e) {
  function t(a) {
    return nr(a, e);
  }
  if (0 < aa.length) {
    nr(aa[0], e);
    for (var n = 1; n < aa.length; n++) {
      var r = aa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ht !== null && nr(Ht, e), Wt !== null && nr(Wt, e), Qt !== null && nr(Qt, e), _r.forEach(t), Nr.forEach(t), n = 0; n < Ut.length; n++) r = Ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && (n = Ut[0], n.blockedOn === null); ) Ju(n), n.blockedOn === null && Ut.shift();
}
var Fn = Lt.ReactCurrentBatchConfig, Aa = !0;
function Bp(e, t, n, r) {
  var a = X, o = Fn.transition;
  Fn.transition = null;
  try {
    X = 1, os(e, t, n, r);
  } finally {
    X = a, Fn.transition = o;
  }
}
function Up(e, t, n, r) {
  var a = X, o = Fn.transition;
  Fn.transition = null;
  try {
    X = 4, os(e, t, n, r);
  } finally {
    X = a, Fn.transition = o;
  }
}
function os(e, t, n, r) {
  if (Aa) {
    var a = di(e, t, n, r);
    if (a === null) Ao(e, t, r, Ia, n), al(e, r);
    else if (Op(a, e, t, n, r)) r.stopPropagation();
    else if (al(e, r), t & 4 && -1 < $p.indexOf(e)) {
      for (; a !== null; ) {
        var o = Hr(a);
        if (o !== null && Wu(o), o = di(e, t, n, r), o === null && Ao(e, t, r, Ia, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Ao(e, t, r, null, n);
  }
}
var Ia = null;
function di(e, t, n, r) {
  if (Ia = null, e = ts(r), e = ln(e), e !== null) if (t = wn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ou(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ia = e, null;
}
function Xu(e) {
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
      switch (Pp()) {
        case ns:
          return 1;
        case qu:
          return 4;
        case La:
        case bp:
          return 16;
        case Vu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null, is = null, wa = null;
function Zu() {
  if (wa) return wa;
  var e, t = is, n = t.length, r, a = "value" in Vt ? Vt.value : Vt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return wa = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ja(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function oa() {
  return !0;
}
function il() {
  return !1;
}
function Ge(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? oa : il, this.isPropagationStopped = il, this;
  }
  return de(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = oa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = oa);
  }, persist: function() {
  }, isPersistent: oa }), t;
}
var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ss = Ge(Jn), Gr = de({}, Jn, { view: 0, detail: 0 }), qp = Ge(Gr), No, Eo, rr, ro = de({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ls, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (No = e.screenX - rr.screenX, Eo = e.screenY - rr.screenY) : Eo = No = 0, rr = e), No);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Eo;
} }), sl = Ge(ro), Vp = de({}, ro, { dataTransfer: 0 }), Gp = Ge(Vp), Hp = de({}, Gr, { relatedTarget: 0 }), zo = Ge(Hp), Wp = de({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Qp = Ge(Wp), Yp = de({}, Jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Kp = Ge(Yp), Jp = de({}, Jn, { data: 0 }), ll = Ge(Jp), Xp = {
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
}, Zp = {
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
}, ef = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ef[e]) ? !!t[e] : !1;
}
function ls() {
  return tf;
}
var nf = de({}, Gr, { key: function(e) {
  if (e.key) {
    var t = Xp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ja(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ls, charCode: function(e) {
  return e.type === "keypress" ? ja(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ja(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rf = Ge(nf), af = de({}, ro, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ul = Ge(af), of = de({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ls }), sf = Ge(of), lf = de({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uf = Ge(lf), cf = de({}, ro, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), df = Ge(cf), pf = [9, 13, 27, 32], us = Pt && "CompositionEvent" in window, fr = null;
Pt && "documentMode" in document && (fr = document.documentMode);
var ff = Pt && "TextEvent" in window && !fr, ec = Pt && (!us || fr && 8 < fr && 11 >= fr), cl = " ", dl = !1;
function tc(e, t) {
  switch (e) {
    case "keyup":
      return pf.indexOf(t.keyCode) !== -1;
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
function nc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function mf(e, t) {
  switch (e) {
    case "compositionend":
      return nc(t);
    case "keypress":
      return t.which !== 32 ? null : (dl = !0, cl);
    case "textInput":
      return e = t.data, e === cl && dl ? null : e;
    default:
      return null;
  }
}
function hf(e, t) {
  if (En) return e === "compositionend" || !us && tc(e, t) ? (e = Zu(), wa = is = Vt = null, En = !1, e) : null;
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
      return ec && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gf[e.type] : t === "textarea";
}
function rc(e, t, n, r) {
  Ru(r), t = Da(t, "onChange"), 0 < t.length && (n = new ss("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var mr = null, zr = null;
function vf(e) {
  mc(e, 0);
}
function ao(e) {
  var t = bn(e);
  if (Eu(t)) return e;
}
function yf(e, t) {
  if (e === "change") return t;
}
var ac = !1;
if (Pt) {
  var Po;
  if (Pt) {
    var bo = "oninput" in document;
    if (!bo) {
      var fl = document.createElement("div");
      fl.setAttribute("oninput", "return;"), bo = typeof fl.oninput == "function";
    }
    Po = bo;
  } else Po = !1;
  ac = Po && (!document.documentMode || 9 < document.documentMode);
}
function ml() {
  mr && (mr.detachEvent("onpropertychange", oc), zr = mr = null);
}
function oc(e) {
  if (e.propertyName === "value" && ao(zr)) {
    var t = [];
    rc(t, zr, e, ts(e)), $u(vf, t);
  }
}
function xf(e, t, n) {
  e === "focusin" ? (ml(), mr = t, zr = n, mr.attachEvent("onpropertychange", oc)) : e === "focusout" && ml();
}
function wf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ao(zr);
}
function jf(e, t) {
  if (e === "click") return ao(t);
}
function kf(e, t) {
  if (e === "input" || e === "change") return ao(t);
}
function Sf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : Sf;
function Pr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Wo.call(t, a) || !pt(e[a], t[a])) return !1;
  }
  return !0;
}
function hl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gl(e, t) {
  var n = hl(e);
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
    n = hl(n);
  }
}
function ic(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ic(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sc() {
  for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ba(e.document);
  }
  return t;
}
function cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Cf(e) {
  var t = sc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ic(n.ownerDocument.documentElement, n)) {
    if (r !== null && cs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = gl(n, o);
        var s = gl(
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
var _f = Pt && "documentMode" in document && 11 >= document.documentMode, zn = null, pi = null, hr = null, fi = !1;
function vl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fi || zn == null || zn !== ba(r) || (r = zn, "selectionStart" in r && cs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hr && Pr(hr, r) || (hr = r, r = Da(pi, "onSelect"), 0 < r.length && (t = new ss("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = zn)));
}
function ia(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: ia("Animation", "AnimationEnd"), animationiteration: ia("Animation", "AnimationIteration"), animationstart: ia("Animation", "AnimationStart"), transitionend: ia("Transition", "TransitionEnd") }, Mo = {}, lc = {};
Pt && (lc = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function oo(e) {
  if (Mo[e]) return Mo[e];
  if (!Pn[e]) return e;
  var t = Pn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in lc) return Mo[e] = t[n];
  return e;
}
var uc = oo("animationend"), cc = oo("animationiteration"), dc = oo("animationstart"), pc = oo("transitionend"), fc = /* @__PURE__ */ new Map(), yl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nn(e, t) {
  fc.set(e, t), xn(t, [e]);
}
for (var To = 0; To < yl.length; To++) {
  var Lo = yl[To], Nf = Lo.toLowerCase(), Ef = Lo[0].toUpperCase() + Lo.slice(1);
  nn(Nf, "on" + Ef);
}
nn(uc, "onAnimationEnd");
nn(cc, "onAnimationIteration");
nn(dc, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(pc, "onTransitionEnd");
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
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zf = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function xl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _p(r, t, void 0, e), e.currentTarget = null;
}
function mc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, f = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        xl(a, u, f), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, f = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        xl(a, u, f), o = l;
      }
    }
  }
  if (Ta) throw e = li, Ta = !1, li = null, e;
}
function re(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hc(t, e, 2, !1), n.add(r));
}
function Ro(e, t, n) {
  var r = 0;
  t && (r |= 4), hc(n, e, r, t);
}
var sa = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[sa]) {
    e[sa] = !0, ku.forEach(function(n) {
      n !== "selectionchange" && (zf.has(n) || Ro(n, !1, e), Ro(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sa] || (t[sa] = !0, Ro("selectionchange", !1, t));
  }
}
function hc(e, t, n, r) {
  switch (Xu(t)) {
    case 1:
      var a = Bp;
      break;
    case 4:
      a = Up;
      break;
    default:
      a = os;
  }
  n = a.bind(null, t, n, e), a = void 0, !si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Ao(e, t, n, r, a) {
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
  $u(function() {
    var f = o, h = ts(n), g = [];
    e: {
      var v = fc.get(e);
      if (v !== void 0) {
        var y = ss, k = e;
        switch (e) {
          case "keypress":
            if (ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = rf;
            break;
          case "focusin":
            k = "focus", y = zo;
            break;
          case "focusout":
            k = "blur", y = zo;
            break;
          case "beforeblur":
          case "afterblur":
            y = zo;
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
            y = sl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Gp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = sf;
            break;
          case uc:
          case cc:
          case dc:
            y = Qp;
            break;
          case pc:
            y = uf;
            break;
          case "scroll":
            y = qp;
            break;
          case "wheel":
            y = df;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Kp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ul;
        }
        var x = (t & 4) !== 0, F = !x && e === "scroll", m = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var d = f, c; d !== null; ) {
          c = d;
          var p = c.stateNode;
          if (c.tag === 5 && p !== null && (c = p, m !== null && (p = Cr(d, m), p != null && x.push(Mr(d, p, c)))), F) break;
          d = d.return;
        }
        0 < x.length && (v = new y(v, k, null, n, h), g.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== oi && (k = n.relatedTarget || n.fromElement) && (ln(k) || k[bt])) break e;
        if ((y || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = f, k = k ? ln(k) : null, k !== null && (F = wn(k), k !== F || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = f), y !== k)) {
          if (x = sl, p = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = ul, p = "onPointerLeave", m = "onPointerEnter", d = "pointer"), F = y == null ? v : bn(y), c = k == null ? v : bn(k), v = new x(p, d + "leave", y, n, h), v.target = F, v.relatedTarget = c, p = null, ln(h) === f && (x = new x(m, d + "enter", k, n, h), x.target = c, x.relatedTarget = F, p = x), F = p, y && k) t: {
            for (x = y, m = k, d = 0, c = x; c; c = Cn(c)) d++;
            for (c = 0, p = m; p; p = Cn(p)) c++;
            for (; 0 < d - c; ) x = Cn(x), d--;
            for (; 0 < c - d; ) m = Cn(m), c--;
            for (; d--; ) {
              if (x === m || m !== null && x === m.alternate) break t;
              x = Cn(x), m = Cn(m);
            }
            x = null;
          }
          else x = null;
          y !== null && wl(g, v, y, x, !1), k !== null && F !== null && wl(g, F, k, x, !0);
        }
      }
      e: {
        if (v = f ? bn(f) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var w = yf;
        else if (pl(v)) if (ac) w = kf;
        else {
          w = wf;
          var S = xf;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (w = jf);
        if (w && (w = w(e, f))) {
          rc(g, w, n, h);
          break e;
        }
        S && S(e, v, f), e === "focusout" && (S = v._wrapperState) && S.controlled && v.type === "number" && ei(v, "number", v.value);
      }
      switch (S = f ? bn(f) : window, e) {
        case "focusin":
          (pl(S) || S.contentEditable === "true") && (zn = S, pi = f, hr = null);
          break;
        case "focusout":
          hr = pi = zn = null;
          break;
        case "mousedown":
          fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fi = !1, vl(g, n, h);
          break;
        case "selectionchange":
          if (_f) break;
        case "keydown":
        case "keyup":
          vl(g, n, h);
      }
      var _;
      if (us) e: {
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
      else En ? tc(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (ec && n.locale !== "ko" && (En || P !== "onCompositionStart" ? P === "onCompositionEnd" && En && (_ = Zu()) : (Vt = h, is = "value" in Vt ? Vt.value : Vt.textContent, En = !0)), S = Da(f, P), 0 < S.length && (P = new ll(P, e, null, n, h), g.push({ event: P, listeners: S }), _ ? P.data = _ : (_ = nc(n), _ !== null && (P.data = _)))), (_ = ff ? mf(e, n) : hf(e, n)) && (f = Da(f, "onBeforeInput"), 0 < f.length && (h = new ll("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: f }), h.data = _));
    }
    mc(g, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Da(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Cr(e, n), o != null && r.unshift(Mr(e, o, a)), o = Cr(e, t), o != null && r.push(Mr(e, o, a))), e = e.return;
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
function wl(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, f = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && f !== null && (u = f, a ? (l = Cr(n, o), l != null && s.unshift(Mr(n, l, u))) : a || (l = Cr(n, o), l != null && s.push(Mr(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Pf = /\r\n?/g, bf = /\u0000|\uFFFD/g;
function jl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Pf, `
`).replace(bf, "");
}
function la(e, t, n) {
  if (t = jl(t), jl(e) !== t && n) throw Error(z(425));
}
function $a() {
}
var mi = null, hi = null;
function gi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0, Mf = typeof clearTimeout == "function" ? clearTimeout : void 0, kl = typeof Promise == "function" ? Promise : void 0, Tf = typeof queueMicrotask == "function" ? queueMicrotask : typeof kl < "u" ? function(e) {
  return kl.resolve(null).then(e).catch(Lf);
} : vi;
function Lf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Io(e, t) {
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
function Yt(e) {
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
function Sl(e) {
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
var Xn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Xn, Tr = "__reactProps$" + Xn, bt = "__reactContainer$" + Xn, yi = "__reactEvents$" + Xn, Rf = "__reactListeners$" + Xn, Af = "__reactHandles$" + Xn;
function ln(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[bt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Sl(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = Sl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Hr(e) {
  return e = e[vt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function io(e) {
  return e[Tr] || null;
}
var xi = [], Mn = -1;
function rn(e) {
  return { current: e };
}
function ae(e) {
  0 > Mn || (e.current = xi[Mn], xi[Mn] = null, Mn--);
}
function te(e, t) {
  Mn++, xi[Mn] = e.current, e.current = t;
}
var tn = {}, Ne = rn(tn), Ie = rn(!1), mn = tn;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function Oa() {
  ae(Ie), ae(Ne);
}
function Cl(e, t, n) {
  if (Ne.current !== tn) throw Error(z(168));
  te(Ne, t), te(Ie, n);
}
function gc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, yp(e) || "Unknown", a));
  return de({}, n, r);
}
function Fa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, mn = Ne.current, te(Ne, e), te(Ie, Ie.current), !0;
}
function _l(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = gc(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, ae(Ie), ae(Ne), te(Ne, e)) : ae(Ie), te(Ie, n);
}
var _t = null, so = !1, Do = !1;
function vc(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function If(e) {
  so = !0, vc(e);
}
function an() {
  if (!Do && _t !== null) {
    Do = !0;
    var e = 0, t = X;
    try {
      var n = _t;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, so = !1;
    } catch (a) {
      throw _t !== null && (_t = _t.slice(e + 1)), Uu(ns, an), a;
    } finally {
      X = t, Do = !1;
    }
  }
  return null;
}
var Tn = [], Ln = 0, Ba = null, Ua = 0, We = [], Qe = 0, hn = null, Nt = 1, Et = "";
function on(e, t) {
  Tn[Ln++] = Ua, Tn[Ln++] = Ba, Ba = e, Ua = t;
}
function yc(e, t, n) {
  We[Qe++] = Nt, We[Qe++] = Et, We[Qe++] = hn, hn = e;
  var r = Nt;
  e = Et;
  var a = 32 - ct(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ct(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Nt = 1 << 32 - ct(t) + a | n << a | r, Et = o + e;
  } else Nt = 1 << o | n << a | r, Et = e;
}
function ds(e) {
  e.return !== null && (on(e, 1), yc(e, 1, 0));
}
function ps(e) {
  for (; e === Ba; ) Ba = Tn[--Ln], Tn[Ln] = null, Ua = Tn[--Ln], Tn[Ln] = null;
  for (; e === hn; ) hn = We[--Qe], We[Qe] = null, Et = We[--Qe], We[Qe] = null, Nt = We[--Qe], We[Qe] = null;
}
var Ue = null, Be = null, se = !1, ut = null;
function xc(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Nl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = Yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = hn !== null ? { id: Nt, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Be = null, !0) : !1;
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ji(e) {
  if (se) {
    var t = Be;
    if (t) {
      var n = t;
      if (!Nl(e, t)) {
        if (wi(e)) throw Error(z(418));
        t = Yt(n.nextSibling);
        var r = Ue;
        t && Nl(e, t) ? xc(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, Ue = e);
      }
    } else {
      if (wi(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, se = !1, Ue = e;
    }
  }
}
function El(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function ua(e) {
  if (e !== Ue) return !1;
  if (!se) return El(e), se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps)), t && (t = Be)) {
    if (wi(e)) throw wc(), Error(z(418));
    for (; t; ) xc(e, t), t = Yt(t.nextSibling);
  }
  if (El(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Ue ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function wc() {
  for (var e = Be; e; ) e = Yt(e.nextSibling);
}
function Gn() {
  Be = Ue = null, se = !1;
}
function fs(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Df = Lt.ReactCurrentBatchConfig;
function ar(e, t, n) {
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
function ca(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zl(e) {
  var t = e._init;
  return t(e._payload);
}
function jc(e) {
  function t(m, d) {
    if (e) {
      var c = m.deletions;
      c === null ? (m.deletions = [d], m.flags |= 16) : c.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), d = d.sibling;
    return null;
  }
  function r(m, d) {
    for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
    return m;
  }
  function a(m, d) {
    return m = Zt(m, d), m.index = 0, m.sibling = null, m;
  }
  function o(m, d, c) {
    return m.index = c, e ? (c = m.alternate, c !== null ? (c = c.index, c < d ? (m.flags |= 2, d) : c) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, d, c, p) {
    return d === null || d.tag !== 6 ? (d = Vo(c, m.mode, p), d.return = m, d) : (d = a(d, c), d.return = m, d);
  }
  function l(m, d, c, p) {
    var w = c.type;
    return w === Nn ? h(m, d, c.props.children, p, c.key) : d !== null && (d.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ft && zl(w) === d.type) ? (p = a(d, c.props), p.ref = ar(m, d, c), p.return = m, p) : (p = za(c.type, c.key, c.props, null, m.mode, p), p.ref = ar(m, d, c), p.return = m, p);
  }
  function f(m, d, c, p) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== c.containerInfo || d.stateNode.implementation !== c.implementation ? (d = Go(c, m.mode, p), d.return = m, d) : (d = a(d, c.children || []), d.return = m, d);
  }
  function h(m, d, c, p, w) {
    return d === null || d.tag !== 7 ? (d = pn(c, m.mode, p, w), d.return = m, d) : (d = a(d, c), d.return = m, d);
  }
  function g(m, d, c) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Vo("" + d, m.mode, c), d.return = m, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Zr:
          return c = za(d.type, d.key, d.props, null, m.mode, c), c.ref = ar(m, null, d), c.return = m, c;
        case _n:
          return d = Go(d, m.mode, c), d.return = m, d;
        case Ft:
          var p = d._init;
          return g(m, p(d._payload), c);
      }
      if (lr(d) || Zn(d)) return d = pn(d, m.mode, c, null), d.return = m, d;
      ca(m, d);
    }
    return null;
  }
  function v(m, d, c, p) {
    var w = d !== null ? d.key : null;
    if (typeof c == "string" && c !== "" || typeof c == "number") return w !== null ? null : u(m, d, "" + c, p);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Zr:
          return c.key === w ? l(m, d, c, p) : null;
        case _n:
          return c.key === w ? f(m, d, c, p) : null;
        case Ft:
          return w = c._init, v(
            m,
            d,
            w(c._payload),
            p
          );
      }
      if (lr(c) || Zn(c)) return w !== null ? null : h(m, d, c, p, null);
      ca(m, c);
    }
    return null;
  }
  function y(m, d, c, p, w) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return m = m.get(c) || null, u(d, m, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zr:
          return m = m.get(p.key === null ? c : p.key) || null, l(d, m, p, w);
        case _n:
          return m = m.get(p.key === null ? c : p.key) || null, f(d, m, p, w);
        case Ft:
          var S = p._init;
          return y(m, d, c, S(p._payload), w);
      }
      if (lr(p) || Zn(p)) return m = m.get(c) || null, h(d, m, p, w, null);
      ca(d, p);
    }
    return null;
  }
  function k(m, d, c, p) {
    for (var w = null, S = null, _ = d, P = d = 0, C = null; _ !== null && P < c.length; P++) {
      _.index > P ? (C = _, _ = null) : C = _.sibling;
      var N = v(m, _, c[P], p);
      if (N === null) {
        _ === null && (_ = C);
        break;
      }
      e && _ && N.alternate === null && t(m, _), d = o(N, d, P), S === null ? w = N : S.sibling = N, S = N, _ = C;
    }
    if (P === c.length) return n(m, _), se && on(m, P), w;
    if (_ === null) {
      for (; P < c.length; P++) _ = g(m, c[P], p), _ !== null && (d = o(_, d, P), S === null ? w = _ : S.sibling = _, S = _);
      return se && on(m, P), w;
    }
    for (_ = r(m, _); P < c.length; P++) C = y(_, m, P, c[P], p), C !== null && (e && C.alternate !== null && _.delete(C.key === null ? P : C.key), d = o(C, d, P), S === null ? w = C : S.sibling = C, S = C);
    return e && _.forEach(function($) {
      return t(m, $);
    }), se && on(m, P), w;
  }
  function x(m, d, c, p) {
    var w = Zn(c);
    if (typeof w != "function") throw Error(z(150));
    if (c = w.call(c), c == null) throw Error(z(151));
    for (var S = w = null, _ = d, P = d = 0, C = null, N = c.next(); _ !== null && !N.done; P++, N = c.next()) {
      _.index > P ? (C = _, _ = null) : C = _.sibling;
      var $ = v(m, _, N.value, p);
      if ($ === null) {
        _ === null && (_ = C);
        break;
      }
      e && _ && $.alternate === null && t(m, _), d = o($, d, P), S === null ? w = $ : S.sibling = $, S = $, _ = C;
    }
    if (N.done) return n(
      m,
      _
    ), se && on(m, P), w;
    if (_ === null) {
      for (; !N.done; P++, N = c.next()) N = g(m, N.value, p), N !== null && (d = o(N, d, P), S === null ? w = N : S.sibling = N, S = N);
      return se && on(m, P), w;
    }
    for (_ = r(m, _); !N.done; P++, N = c.next()) N = y(_, m, P, N.value, p), N !== null && (e && N.alternate !== null && _.delete(N.key === null ? P : N.key), d = o(N, d, P), S === null ? w = N : S.sibling = N, S = N);
    return e && _.forEach(function(K) {
      return t(m, K);
    }), se && on(m, P), w;
  }
  function F(m, d, c, p) {
    if (typeof c == "object" && c !== null && c.type === Nn && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Zr:
          e: {
            for (var w = c.key, S = d; S !== null; ) {
              if (S.key === w) {
                if (w = c.type, w === Nn) {
                  if (S.tag === 7) {
                    n(m, S.sibling), d = a(S, c.props.children), d.return = m, m = d;
                    break e;
                  }
                } else if (S.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ft && zl(w) === S.type) {
                  n(m, S.sibling), d = a(S, c.props), d.ref = ar(m, S, c), d.return = m, m = d;
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            c.type === Nn ? (d = pn(c.props.children, m.mode, p, c.key), d.return = m, m = d) : (p = za(c.type, c.key, c.props, null, m.mode, p), p.ref = ar(m, d, c), p.return = m, m = p);
          }
          return s(m);
        case _n:
          e: {
            for (S = c.key; d !== null; ) {
              if (d.key === S) if (d.tag === 4 && d.stateNode.containerInfo === c.containerInfo && d.stateNode.implementation === c.implementation) {
                n(m, d.sibling), d = a(d, c.children || []), d.return = m, m = d;
                break e;
              } else {
                n(m, d);
                break;
              }
              else t(m, d);
              d = d.sibling;
            }
            d = Go(c, m.mode, p), d.return = m, m = d;
          }
          return s(m);
        case Ft:
          return S = c._init, F(m, d, S(c._payload), p);
      }
      if (lr(c)) return k(m, d, c, p);
      if (Zn(c)) return x(m, d, c, p);
      ca(m, c);
    }
    return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, d !== null && d.tag === 6 ? (n(m, d.sibling), d = a(d, c), d.return = m, m = d) : (n(m, d), d = Vo(c, m.mode, p), d.return = m, m = d), s(m)) : n(m, d);
  }
  return F;
}
var Hn = jc(!0), kc = jc(!1), qa = rn(null), Va = null, Rn = null, ms = null;
function hs() {
  ms = Rn = Va = null;
}
function gs(e) {
  var t = qa.current;
  ae(qa), e._currentValue = t;
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Bn(e, t) {
  Va = e, ms = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), e.firstContext = null);
}
function Je(e) {
  var t = e._currentValue;
  if (ms !== e) if (e = { context: e, memoizedValue: t, next: null }, Rn === null) {
    if (Va === null) throw Error(z(308));
    Rn = e, Va.dependencies = { lanes: 0, firstContext: e };
  } else Rn = Rn.next = e;
  return t;
}
var un = null;
function vs(e) {
  un === null ? un = [e] : un.push(e);
}
function Sc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, vs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function ys(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Mt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, vs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Mt(e, n);
}
function ka(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rs(e, n);
  }
}
function Pl(e, t) {
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
function Ga(e, t, n, r) {
  var a = e.updateQueue;
  Bt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, f = l.next;
    l.next = null, s === null ? o = f : s.next = f, s = l;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== s && (u === null ? h.firstBaseUpdate = f : u.next = f, h.lastBaseUpdate = l));
  }
  if (o !== null) {
    var g = a.baseState;
    s = 0, h = f = l = null, u = o;
    do {
      var v = u.lane, y = u.eventTime;
      if ((r & v) === v) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var k = e, x = u;
          switch (v = t, y = n, x.tag) {
            case 1:
              if (k = x.payload, typeof k == "function") {
                g = k.call(y, g, v);
                break e;
              }
              g = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, v = typeof k == "function" ? k.call(y, g, v) : k, v == null) break e;
              g = de({}, g, v);
              break e;
            case 2:
              Bt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = a.effects, v === null ? a.effects = [u] : v.push(u));
      } else y = { eventTime: y, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (f = h = y, l = g) : h = h.next = y, s |= v;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, a.lastBaseUpdate = v, a.shared.pending = null;
      }
    } while (!0);
    if (h === null && (l = g), a.baseState = l, a.firstBaseUpdate = f, a.lastBaseUpdate = h, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    vn |= s, e.lanes = s, e.memoizedState = g;
  }
}
function bl(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Wr = {}, wt = rn(Wr), Lr = rn(Wr), Rr = rn(Wr);
function cn(e) {
  if (e === Wr) throw Error(z(174));
  return e;
}
function xs(e, t) {
  switch (te(Rr, t), te(Lr, e), te(wt, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ni(t, e);
  }
  ae(wt), te(wt, t);
}
function Wn() {
  ae(wt), ae(Lr), ae(Rr);
}
function _c(e) {
  cn(Rr.current);
  var t = cn(wt.current), n = ni(t, e.type);
  t !== n && (te(Lr, e), te(wt, n));
}
function ws(e) {
  Lr.current === e && (ae(wt), ae(Lr));
}
var ue = rn(0);
function Ha(e) {
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
var $o = [];
function js() {
  for (var e = 0; e < $o.length; e++) $o[e]._workInProgressVersionPrimary = null;
  $o.length = 0;
}
var Sa = Lt.ReactCurrentDispatcher, Oo = Lt.ReactCurrentBatchConfig, gn = 0, ce = null, ge = null, ye = null, Wa = !1, gr = !1, Ar = 0, $f = 0;
function Se() {
  throw Error(z(321));
}
function ks(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Ss(e, t, n, r, a, o) {
  if (gn = o, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sa.current = e === null || e.memoizedState === null ? Uf : qf, e = n(r, a), gr) {
    o = 0;
    do {
      if (gr = !1, Ar = 0, 25 <= o) throw Error(z(301));
      o += 1, ye = ge = null, t.updateQueue = null, Sa.current = Vf, e = n(r, a);
    } while (gr);
  }
  if (Sa.current = Qa, t = ge !== null && ge.next !== null, gn = 0, ye = ge = ce = null, Wa = !1, t) throw Error(z(300));
  return e;
}
function Cs() {
  var e = Ar !== 0;
  return Ar = 0, e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? ce.memoizedState = ye = e : ye = ye.next = e, ye;
}
function Xe() {
  if (ge === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = ye === null ? ce.memoizedState : ye.next;
  if (t !== null) ye = t, ge = e;
  else {
    if (e === null) throw Error(z(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, ye === null ? ce.memoizedState = ye = e : ye = ye.next = e;
  }
  return ye;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fo(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ge, a = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = o.next, o.next = s;
    }
    r.baseQueue = a = o, n.pending = null;
  }
  if (a !== null) {
    o = a.next, r = r.baseState;
    var u = s = null, l = null, f = o;
    do {
      var h = f.lane;
      if ((gn & h) === h) l !== null && (l = l.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var g = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        l === null ? (u = l = g, s = r) : l = l.next = g, ce.lanes |= h, vn |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    l === null ? s = r : l.next = u, pt(r, t.memoizedState) || (Ae = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ce.lanes |= o, vn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bo(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    pt(o, t.memoizedState) || (Ae = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Nc() {
}
function Ec(e, t) {
  var n = ce, r = Xe(), a = t(), o = !pt(r.memoizedState, a);
  if (o && (r.memoizedState = a, Ae = !0), r = r.queue, _s(bc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ye !== null && ye.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, Pc.bind(null, n, r, a, t), void 0, null), xe === null) throw Error(z(349));
    gn & 30 || zc(n, t, a);
  }
  return a;
}
function zc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mc(t) && Tc(e);
}
function bc(e, t, n) {
  return n(function() {
    Mc(t) && Tc(e);
  });
}
function Mc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Tc(e) {
  var t = Mt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function Ml(e) {
  var t = gt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bf.bind(null, ce, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Lc() {
  return Xe().memoizedState;
}
function Ca(e, t, n, r) {
  var a = gt();
  ce.flags |= e, a.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function lo(e, t, n, r) {
  var a = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (o = s.destroy, r !== null && ks(r, s.deps)) {
      a.memoizedState = Dr(t, n, o, r);
      return;
    }
  }
  ce.flags |= e, a.memoizedState = Dr(1 | t, n, o, r);
}
function Tl(e, t) {
  return Ca(8390656, 8, e, t);
}
function _s(e, t) {
  return lo(2048, 8, e, t);
}
function Rc(e, t) {
  return lo(4, 2, e, t);
}
function Ac(e, t) {
  return lo(4, 4, e, t);
}
function Ic(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Dc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, lo(4, 4, Ic.bind(null, t, e), n);
}
function Ns() {
}
function $c(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Oc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Fc(e, t, n) {
  return gn & 21 ? (pt(n, t) || (n = Gu(), ce.lanes |= n, vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ae = !0), e.memoizedState = n);
}
function Of(e, t) {
  var n = X;
  X = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Oo.transition;
  Oo.transition = {};
  try {
    e(!1), t();
  } finally {
    X = n, Oo.transition = r;
  }
}
function Bc() {
  return Xe().memoizedState;
}
function Ff(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Uc(e)) qc(t, n);
  else if (n = Sc(e, t, n, r), n !== null) {
    var a = be();
    dt(n, e, r, a), Vc(n, t, r);
  }
}
function Bf(e, t, n) {
  var r = Xt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uc(e)) qc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, pt(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, vs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = Sc(e, t, a, r), n !== null && (a = be(), dt(n, e, r, a), Vc(n, t, r));
  }
}
function Uc(e) {
  var t = e.alternate;
  return e === ce || t !== null && t === ce;
}
function qc(e, t) {
  gr = Wa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Vc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rs(e, n);
  }
}
var Qa = { readContext: Je, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, Uf = { readContext: Je, useCallback: function(e, t) {
  return gt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Je, useEffect: Tl, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ca(
    4194308,
    4,
    Ic.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ca(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ca(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ff.bind(null, ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ml, useDebugValue: Ns, useDeferredValue: function(e) {
  return gt().memoizedState = e;
}, useTransition: function() {
  var e = Ml(!1), t = e[0];
  return e = Of.bind(null, e[1]), gt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ce, a = gt();
  if (se) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(z(349));
    gn & 30 || zc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Tl(bc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Dr(9, Pc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = gt(), t = xe.identifierPrefix;
  if (se) {
    var n = Et, r = Nt;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = $f++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, qf = {
  readContext: Je,
  useCallback: $c,
  useContext: Je,
  useEffect: _s,
  useImperativeHandle: Dc,
  useInsertionEffect: Rc,
  useLayoutEffect: Ac,
  useMemo: Oc,
  useReducer: Fo,
  useRef: Lc,
  useState: function() {
    return Fo(Ir);
  },
  useDebugValue: Ns,
  useDeferredValue: function(e) {
    var t = Xe();
    return Fc(t, ge.memoizedState, e);
  },
  useTransition: function() {
    var e = Fo(Ir)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: Nc,
  useSyncExternalStore: Ec,
  useId: Bc,
  unstable_isNewReconciler: !1
}, Vf = { readContext: Je, useCallback: $c, useContext: Je, useEffect: _s, useImperativeHandle: Dc, useInsertionEffect: Rc, useLayoutEffect: Ac, useMemo: Oc, useReducer: Bo, useRef: Lc, useState: function() {
  return Bo(Ir);
}, useDebugValue: Ns, useDeferredValue: function(e) {
  var t = Xe();
  return ge === null ? t.memoizedState = e : Fc(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = Bo(Ir)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: Nc, useSyncExternalStore: Ec, useId: Bc, unstable_isNewReconciler: !1 };
function st(e, t) {
  if (e && e.defaultProps) {
    t = de({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uo = { isMounted: function(e) {
  return (e = e._reactInternals) ? wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Xt(e), o = zt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Kt(e, o, a), t !== null && (dt(t, e, a, r), ka(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), a = Xt(e), o = zt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Kt(e, o, a), t !== null && (dt(t, e, a, r), ka(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = Xt(e), a = zt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Kt(e, a, r), t !== null && (dt(t, e, r, n), ka(t, e, r));
} };
function Ll(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(a, o) : !0;
}
function Gc(e, t, n) {
  var r = !1, a = tn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Je(o) : (a = De(t) ? mn : Ne.current, r = t.contextTypes, o = (r = r != null) ? Vn(e, a) : tn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = uo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Rl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && uo.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ys(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Je(o) : (o = De(t) ? mn : Ne.current, a.context = Vn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Si(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && uo.enqueueReplaceState(a, a.state, null), Ga(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vp(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Gf = typeof WeakMap == "function" ? WeakMap : Map;
function Hc(e, t, n) {
  n = zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ka || (Ka = !0, Ai = r), _i(e, t);
  }, n;
}
function Wc(e, t, n) {
  n = zt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      _i(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    _i(e, t), typeof r != "function" && (Jt === null ? Jt = /* @__PURE__ */ new Set([this]) : Jt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Al(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = om.bind(null, e, t, n), t.then(e, e));
}
function Il(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Dl(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e);
}
var Hf = Lt.ReactCurrentOwner, Ae = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? kc(t, null, n, r) : Hn(t, e.child, n, r);
}
function $l(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Bn(t, a), r = Ss(e, t, n, r, o, a), n = Cs(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Tt(e, t, a)) : (se && n && ds(t), t.flags |= 1, Pe(e, t, r, a), t.child);
}
function Ol(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Rs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Qc(e, t, o, r, a)) : (e = za(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return Tt(e, t, a);
  }
  return t.flags |= 1, e = Zt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (Ae = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Ae = !0);
    else return t.lanes = e.lanes, Tt(e, t, a);
  }
  return Ni(e, t, n, r, a);
}
function Yc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(In, Fe), Fe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(In, Fe), Fe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, te(In, Fe), Fe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, te(In, Fe), Fe |= r;
  return Pe(e, t, a, n), t.child;
}
function Kc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ni(e, t, n, r, a) {
  var o = De(n) ? mn : Ne.current;
  return o = Vn(t, o), Bn(t, a), n = Ss(e, t, n, r, o, a), r = Cs(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Tt(e, t, a)) : (se && r && ds(t), t.flags |= 1, Pe(e, t, n, a), t.child);
}
function Fl(e, t, n, r, a) {
  if (De(n)) {
    var o = !0;
    Fa(t);
  } else o = !1;
  if (Bn(t, a), t.stateNode === null) _a(e, t), Gc(t, n, r), Ci(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Je(f) : (f = De(n) ? mn : Ne.current, f = Vn(t, f));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== f) && Rl(t, s, r, f), Bt = !1;
    var v = t.memoizedState;
    s.state = v, Ga(t, r, s, a), l = t.memoizedState, u !== r || v !== l || Ie.current || Bt ? (typeof h == "function" && (Si(t, n, h, r), l = t.memoizedState), (u = Bt || Ll(t, n, u, r, v, l, f)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = f, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Cc(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : st(t.type, u), s.props = f, g = t.pendingProps, v = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Je(l) : (l = De(n) ? mn : Ne.current, l = Vn(t, l));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== g || v !== l) && Rl(t, s, r, l), Bt = !1, v = t.memoizedState, s.state = v, Ga(t, r, s, a);
    var k = t.memoizedState;
    u !== g || v !== k || Ie.current || Bt ? (typeof y == "function" && (Si(t, n, y, r), k = t.memoizedState), (f = Bt || Ll(t, n, f, r, v, k, l) || !1) ? (h || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = l, r = f) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ei(e, t, n, r, o, a);
}
function Ei(e, t, n, r, a, o) {
  Kc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && _l(t, n, !1), Tt(e, t, o);
  r = t.stateNode, Hf.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Hn(t, e.child, null, o), t.child = Hn(t, null, u, o)) : Pe(e, t, u, o), t.memoizedState = r.state, a && _l(t, n, !0), t.child;
}
function Jc(e) {
  var t = e.stateNode;
  t.pendingContext ? Cl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cl(e, t.context, !1), xs(e, t.containerInfo);
}
function Bl(e, t, n, r, a) {
  return Gn(), fs(a), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xc(e, t, n) {
  var r = t.pendingProps, a = ue.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), te(ue, a & 1), e === null)
    return ji(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = fo(s, r, 0, null), e = pn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Pi(n), t.memoizedState = zi, e) : Es(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Wf(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Zt(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Zt(u, o) : (o = pn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Pi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = zi, r;
  }
  return o = e.child, e = o.sibling, r = Zt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Es(e, t) {
  return t = fo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function da(e, t, n, r) {
  return r !== null && fs(r), Hn(t, e.child, null, n), e = Es(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Wf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Uo(Error(z(422))), da(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = fo({ mode: "visible", children: r.children }, a, 0, null), o = pn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Hn(t, e.child, null, s), t.child.memoizedState = Pi(s), t.memoizedState = zi, o);
  if (!(t.mode & 1)) return da(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Uo(o, r, void 0), da(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Ae || u) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Mt(e, a), dt(r, e, a, -1));
    }
    return Ls(), r = Uo(Error(z(421))), da(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = im.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Be = Yt(a.nextSibling), Ue = t, se = !0, ut = null, e !== null && (We[Qe++] = Nt, We[Qe++] = Et, We[Qe++] = hn, Nt = e.id, Et = e.overflow, hn = t), t = Es(t, r.children), t.flags |= 4096, t);
}
function Ul(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function qo(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Zc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Pe(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ul(e, n, t);
      else if (e.tag === 19) Ul(e, n, t);
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
  if (te(ue, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ha(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), qo(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Ha(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      qo(t, !0, n, null, o);
      break;
    case "together":
      qo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function _a(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Qf(e, t, n) {
  switch (t.tag) {
    case 3:
      Jc(t), Gn();
      break;
    case 5:
      _c(t);
      break;
    case 1:
      De(t.type) && Fa(t);
      break;
    case 4:
      xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      te(qa, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Xc(e, t, n) : (te(ue, ue.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Zc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), te(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Yc(e, t, n);
  }
  return Tt(e, t, n);
}
var ed, bi, td, nd;
ed = function(e, t) {
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
bi = function() {
};
td = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, cn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Xo(e, a), r = Xo(e, r), o = [];
        break;
      case "select":
        a = de({}, a, { value: void 0 }), r = de({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = ti(e, a), r = ti(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $a);
    }
    ri(n, r);
    var s;
    n = null;
    for (f in a) if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null) if (f === "style") {
      var u = a[f];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (kr.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var l = r[f];
      if (u = a != null ? a[f] : void 0, r.hasOwnProperty(f) && l !== u && (l != null || u != null)) if (f === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = l;
      else f === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(f, l)) : f === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(f, "" + l) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (kr.hasOwnProperty(f) ? (l != null && f === "onScroll" && re("scroll", e), o || u === l || (o = [])) : (o = o || []).push(f, l));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
nd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!se) switch (e.tailMode) {
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
function Yf(e, t, n) {
  var r = t.pendingProps;
  switch (ps(t), t.tag) {
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
      return De(t.type) && Oa(), Ce(t), null;
    case 3:
      return r = t.stateNode, Wn(), ae(Ie), ae(Ne), js(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ua(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && ($i(ut), ut = null))), bi(e, t), Ce(t), null;
    case 5:
      ws(t);
      var a = cn(Rr.current);
      if (n = t.type, e !== null && t.stateNode != null) td(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Ce(t), null;
        }
        if (e = cn(wt.current), ua(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[vt] = t, r[Tr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < cr.length; a++) re(cr[a], r);
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
              Js(r, o), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
              break;
            case "textarea":
              Zs(r, o), re("invalid", r);
          }
          ri(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && la(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && la(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : kr.hasOwnProperty(s) && u != null && s === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              ea(r), Xs(r, o, !0);
              break;
            case "textarea":
              ea(r), el(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $a);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[vt] = t, e[Tr] = r, ed(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ai(n, r), n) {
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
                for (a = 0; a < cr.length; a++) re(cr[a], e);
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
                Js(e, r), a = Xo(e, r), re("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = de({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                Zs(e, r), a = ti(e, r), re("invalid", e);
                break;
              default:
                a = r;
            }
            ri(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Lu(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Mu(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Sr(e, l) : typeof l == "number" && Sr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (kr.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && Ji(e, o, l, s));
            }
            switch (n) {
              case "input":
                ea(e), Xs(e, r, !1);
                break;
              case "textarea":
                ea(e), el(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
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
                typeof a.onClick == "function" && (e.onclick = $a);
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
      if (e && t.stateNode != null) nd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = cn(Rr.current), cn(wt.current), ua(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (o = r.nodeValue !== n) && (e = Ue, e !== null)) switch (e.tag) {
            case 3:
              la(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && la(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (ae(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (se && Be !== null && t.mode & 1 && !(t.flags & 128)) wc(), Gn(), t.flags |= 98560, o = !1;
        else if (o = ua(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[vt] = t;
          } else Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), o = !1;
        } else ut !== null && ($i(ut), ut = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? ve === 0 && (ve = 3) : Ls())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return Wn(), bi(e, t), e === null && br(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return gs(t.type._context), Ce(t), null;
    case 17:
      return De(t.type) && Oa(), Ce(t), null;
    case 19:
      if (ae(ue), o = t.memoizedState, o === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) or(o, !1);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Ha(e), s !== null) {
            for (t.flags |= 128, or(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && fe() > Yn && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ha(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), or(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !se) return Ce(t), null;
        } else 2 * fe() - o.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = fe(), t.sibling = null, n = ue.current, te(ue, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return Ts(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Fe & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Kf(e, t) {
  switch (ps(t), t.tag) {
    case 1:
      return De(t.type) && Oa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Wn(), ae(Ie), ae(Ne), js(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ws(t), null;
    case 13:
      if (ae(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Gn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(ue), null;
    case 4:
      return Wn(), null;
    case 10:
      return gs(t.type._context), null;
    case 22:
    case 23:
      return Ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pa = !1, _e = !1, Jf = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pe(e, t, r);
  }
  else n.current = null;
}
function Mi(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var ql = !1;
function Xf(e, t) {
  if (mi = Aa, e = sc(), cs(e)) {
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
        var s = 0, u = -1, l = -1, f = 0, h = 0, g = e, v = null;
        t: for (; ; ) {
          for (var y; g !== n || a !== 0 && g.nodeType !== 3 || (u = s + a), g !== o || r !== 0 && g.nodeType !== 3 || (l = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (y = g.firstChild) !== null; )
            v = g, g = y;
          for (; ; ) {
            if (g === e) break t;
            if (v === n && ++f === a && (u = s), v === o && ++h === r && (l = s), (y = g.nextSibling) !== null) break;
            g = v, v = g.parentNode;
          }
          g = y;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hi = { focusedElem: e, selectionRange: n }, Aa = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, F = k.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : st(t.type, x), F);
            m.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var c = t.stateNode.containerInfo;
          c.nodeType === 1 ? c.textContent = "" : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement);
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
      pe(t, t.return, p);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return k = ql, ql = !1, k;
}
function vr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Mi(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function co(e, t) {
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
function Ti(e) {
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
function rd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, rd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Tr], delete t[yi], delete t[Rf], delete t[Af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vl(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ad(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $a));
  else if (r !== 4 && (e = e.child, e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), e = e.sibling;
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), e = e.sibling;
}
var we = null, lt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) od(e, t, n), n = n.sibling;
}
function od(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function") try {
    xt.onCommitFiberUnmount(no, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _e || An(n, t);
    case 6:
      var r = we, a = lt;
      we = null, Ot(e, t, n), we = r, lt = a, we !== null && (lt ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (lt ? (e = we, n = n.stateNode, e.nodeType === 8 ? Io(e.parentNode, n) : e.nodeType === 1 && Io(e, n), Er(e)) : Io(we, n.stateNode));
      break;
    case 4:
      r = we, a = lt, we = n.stateNode.containerInfo, lt = !0, Ot(e, t, n), we = r, lt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Mi(n, t, s), a = a.next;
        } while (a !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!_e && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        pe(n, t, u);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, Ot(e, t, n), _e = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function Gl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jf()), t.forEach(function(r) {
      var a = sm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            we = u.stateNode, lt = !1;
            break e;
          case 3:
            we = u.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            we = u.stateNode.containerInfo, lt = !0;
            break e;
        }
        u = u.return;
      }
      if (we === null) throw Error(z(160));
      od(o, s, a), we = null, lt = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (f) {
      pe(a, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) id(t, e), t = t.sibling;
}
function id(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), ht(e), r & 4) {
        try {
          vr(3, e, e.return), co(3, e);
        } catch (x) {
          pe(e, e.return, x);
        }
        try {
          vr(5, e, e.return);
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 1:
      it(t, e), ht(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (it(t, e), ht(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Sr(a, "");
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && zu(a, o), ai(u, s);
          var f = ai(u, o);
          for (s = 0; s < l.length; s += 2) {
            var h = l[s], g = l[s + 1];
            h === "style" ? Lu(a, g) : h === "dangerouslySetInnerHTML" ? Mu(a, g) : h === "children" ? Sr(a, g) : Ji(a, h, g, f);
          }
          switch (u) {
            case "input":
              Zo(a, o);
              break;
            case "textarea":
              Pu(a, o);
              break;
            case "select":
              var v = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? Dn(a, !!o.multiple, y, !1) : v !== !!o.multiple && (o.defaultValue != null ? Dn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Dn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Tr] = o;
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 6:
      if (it(t, e), ht(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Er(t.containerInfo);
      } catch (x) {
        pe(e, e.return, x);
      }
      break;
    case 4:
      it(t, e), ht(e);
      break;
    case 13:
      it(t, e), ht(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (bs = fe())), r & 4 && Gl(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (f = _e) || h, it(t, e), _e = f) : it(t, e), ht(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (L = e, h = e.child; h !== null; ) {
          for (g = L = h; L !== null; ) {
            switch (v = L, y = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                vr(4, v, v.return);
                break;
              case 1:
                An(v, v.return);
                var k = v.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (x) {
                    pe(r, n, x);
                  }
                }
                break;
              case 5:
                An(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Wl(g);
                  continue;
                }
            }
            y !== null ? (y.return = v, L = y) : Wl(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                a = g.stateNode, f ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, l = g.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Tu("display", s));
              } catch (x) {
                pe(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = f ? "" : g.memoizedProps;
            } catch (x) {
              pe(e, e.return, x);
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
      it(t, e), ht(e), r & 4 && Gl(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ad(n)) {
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
          r.flags & 32 && (Sr(a, ""), r.flags &= -33);
          var o = Vl(e);
          Ri(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Vl(e);
          Li(e, u, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zf(e, t, n) {
  L = e, sd(e);
}
function sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var a = L, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || pa;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || _e;
        u = pa;
        var f = _e;
        if (pa = s, (_e = l) && !f) for (L = a; L !== null; ) s = L, l = s.child, s.tag === 22 && s.memoizedState !== null ? Ql(a) : l !== null ? (l.return = s, L = l) : Ql(a);
        for (; o !== null; ) L = o, sd(o), o = o.sibling;
        L = a, pa = u, _e = f;
      }
      Hl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, L = o) : Hl(e);
  }
}
function Hl(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _e || co(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_e) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && bl(t, o, r);
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
              bl(t, s, n);
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
              var f = t.alternate;
              if (f !== null) {
                var h = f.memoizedState;
                if (h !== null) {
                  var g = h.dehydrated;
                  g !== null && Er(g);
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
        _e || t.flags & 512 && Ti(t);
      } catch (v) {
        pe(t, t.return, v);
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
function Wl(e) {
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
function Ql(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            co(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(t, a, l);
            }
          }
          var o = t.return;
          try {
            Ti(t);
          } catch (l) {
            pe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ti(t);
          } catch (l) {
            pe(t, s, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, L = u;
      break;
    }
    L = t.return;
  }
}
var em = Math.ceil, Ya = Lt.ReactCurrentDispatcher, zs = Lt.ReactCurrentOwner, Ke = Lt.ReactCurrentBatchConfig, H = 0, xe = null, he = null, je = 0, Fe = 0, In = rn(0), ve = 0, $r = null, vn = 0, po = 0, Ps = 0, yr = null, Re = null, bs = 0, Yn = 1 / 0, Ct = null, Ka = !1, Ai = null, Jt = null, fa = !1, Gt = null, Ja = 0, xr = 0, Ii = null, Na = -1, Ea = 0;
function be() {
  return H & 6 ? fe() : Na !== -1 ? Na : Na = fe();
}
function Xt(e) {
  return e.mode & 1 ? H & 2 && je !== 0 ? je & -je : Df.transition !== null ? (Ea === 0 && (Ea = Gu()), Ea) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xu(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < xr) throw xr = 0, Ii = null, Error(z(185));
  Vr(e, n, r), (!(H & 2) || e !== xe) && (e === xe && (!(H & 2) && (po |= n), ve === 4 && qt(e, je)), $e(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Yn = fe() + 500, so && an()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Ip(e, t);
  var r = Ra(e, e === xe ? je : 0);
  if (r === 0) n !== null && rl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && rl(n), t === 1) e.tag === 0 ? If(Yl.bind(null, e)) : vc(Yl.bind(null, e)), Tf(function() {
      !(H & 6) && an();
    }), n = null;
    else {
      switch (Hu(r)) {
        case 1:
          n = ns;
          break;
        case 4:
          n = qu;
          break;
        case 16:
          n = La;
          break;
        case 536870912:
          n = Vu;
          break;
        default:
          n = La;
      }
      n = hd(n, ld.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ld(e, t) {
  if (Na = -1, Ea = 0, H & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Ra(e, e === xe ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xa(e, r);
  else {
    t = r;
    var a = H;
    H |= 2;
    var o = cd();
    (xe !== e || je !== t) && (Ct = null, Yn = fe() + 500, dn(e, t));
    do
      try {
        rm();
        break;
      } catch (u) {
        ud(e, u);
      }
    while (!0);
    hs(), Ya.current = o, H = a, he !== null ? t = 0 : (xe = null, je = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (a = ui(e), a !== 0 && (r = a, t = Di(e, a))), t === 1) throw n = $r, dn(e, 0), qt(e, r), $e(e, fe()), n;
    if (t === 6) qt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !tm(a) && (t = Xa(e, r), t === 2 && (o = ui(e), o !== 0 && (r = o, t = Di(e, o))), t === 1)) throw n = $r, dn(e, 0), qt(e, r), $e(e, fe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          sn(e, Re, Ct);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = bs + 500 - fe(), 10 < t)) {
            if (Ra(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              be(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = vi(sn.bind(null, e, Re, Ct), t);
            break;
          }
          sn(e, Re, Ct);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ct(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * em(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vi(sn.bind(null, e, Re, Ct), r);
            break;
          }
          sn(e, Re, Ct);
          break;
        case 5:
          sn(e, Re, Ct);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return $e(e, fe()), e.callbackNode === n ? ld.bind(null, e) : null;
}
function Di(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = Xa(e, t), e !== 2 && (t = Re, Re = n, t !== null && $i(t)), e;
}
function $i(e) {
  Re === null ? Re = e : Re.push.apply(Re, e);
}
function tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!pt(o(), a)) return !1;
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
function qt(e, t) {
  for (t &= ~Ps, t &= ~po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Yl(e) {
  if (H & 6) throw Error(z(327));
  Un();
  var t = Ra(e, 0);
  if (!(t & 1)) return $e(e, fe()), null;
  var n = Xa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && (t = r, n = Di(e, r));
  }
  if (n === 1) throw n = $r, dn(e, 0), qt(e, t), $e(e, fe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Re, Ct), $e(e, fe()), null;
}
function Ms(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Yn = fe() + 500, so && an());
  }
}
function yn(e) {
  Gt !== null && Gt.tag === 0 && !(H & 6) && Un();
  var t = H;
  H |= 1;
  var n = Ke.transition, r = X;
  try {
    if (Ke.transition = null, X = 1, e) return e();
  } finally {
    X = r, Ke.transition = n, H = t, !(H & 6) && an();
  }
}
function Ts() {
  Fe = In.current, ae(In);
}
function dn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Mf(n)), he !== null) for (n = he.return; n !== null; ) {
    var r = n;
    switch (ps(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Oa();
        break;
      case 3:
        Wn(), ae(Ie), ae(Ne), js();
        break;
      case 5:
        ws(r);
        break;
      case 4:
        Wn();
        break;
      case 13:
        ae(ue);
        break;
      case 19:
        ae(ue);
        break;
      case 10:
        gs(r.type._context);
        break;
      case 22:
      case 23:
        Ts();
    }
    n = n.return;
  }
  if (xe = e, he = e = Zt(e.current, null), je = Fe = t, ve = 0, $r = null, Ps = po = vn = 0, Re = yr = null, un !== null) {
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
function ud(e, t) {
  do {
    var n = he;
    try {
      if (hs(), Sa.current = Qa, Wa) {
        for (var r = ce.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Wa = !1;
      }
      if (gn = 0, ye = ge = ce = null, gr = !1, Ar = 0, zs.current = null, n === null || n.return === null) {
        ve = 1, $r = t, he = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = je, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var f = l, h = u, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var v = h.alternate;
            v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = Il(s);
          if (y !== null) {
            y.flags &= -257, Dl(y, s, u, o, t), y.mode & 1 && Al(o, f, t), t = y, l = f;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else k.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Al(o, f, t), Ls();
              break e;
            }
            l = Error(z(426));
          }
        } else if (se && u.mode & 1) {
          var F = Il(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Dl(F, s, u, o, t), fs(Qn(l, u));
            break e;
          }
        }
        o = l = Qn(l, u), ve !== 4 && (ve = 2), yr === null ? yr = [o] : yr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Hc(o, l, t);
              Pl(o, m);
              break e;
            case 1:
              u = l;
              var d = o.type, c = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Jt === null || !Jt.has(c)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Wc(o, u, t);
                Pl(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pd(n);
    } catch (w) {
      t = w, he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cd() {
  var e = Ya.current;
  return Ya.current = Qa, e === null ? Qa : e;
}
function Ls() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), xe === null || !(vn & 268435455) && !(po & 268435455) || qt(xe, je);
}
function Xa(e, t) {
  var n = H;
  H |= 2;
  var r = cd();
  (xe !== e || je !== t) && (Ct = null, dn(e, t));
  do
    try {
      nm();
      break;
    } catch (a) {
      ud(e, a);
    }
  while (!0);
  if (hs(), H = n, Ya.current = r, he !== null) throw Error(z(261));
  return xe = null, je = 0, ve;
}
function nm() {
  for (; he !== null; ) dd(he);
}
function rm() {
  for (; he !== null && !Ep(); ) dd(he);
}
function dd(e) {
  var t = md(e.alternate, e, Fe);
  e.memoizedProps = e.pendingProps, t === null ? pd(e) : he = t, zs.current = null;
}
function pd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Kf(n, t), n !== null) {
        n.flags &= 32767, he = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, he = null;
        return;
      }
    } else if (n = Yf(n, t, Fe), n !== null) {
      he = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function sn(e, t, n) {
  var r = X, a = Ke.transition;
  try {
    Ke.transition = null, X = 1, am(e, t, n, r);
  } finally {
    Ke.transition = a, X = r;
  }
  return null;
}
function am(e, t, n, r) {
  do
    Un();
  while (Gt !== null);
  if (H & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Dp(e, o), e === xe && (he = xe = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fa || (fa = !0, hd(La, function() {
    return Un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ke.transition, Ke.transition = null;
    var s = X;
    X = 1;
    var u = H;
    H |= 4, zs.current = null, Xf(e, n), id(n, e), Cf(hi), Aa = !!mi, hi = mi = null, e.current = n, Zf(n), zp(), H = u, X = s, Ke.transition = o;
  } else e.current = n;
  if (fa && (fa = !1, Gt = e, Ja = a), o = e.pendingLanes, o === 0 && (Jt = null), Mp(n.stateNode), $e(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ka) throw Ka = !1, e = Ai, Ai = null, e;
  return Ja & 1 && e.tag !== 0 && Un(), o = e.pendingLanes, o & 1 ? e === Ii ? xr++ : (xr = 0, Ii = e) : xr = 0, an(), null;
}
function Un() {
  if (Gt !== null) {
    var e = Hu(Ja), t = Ke.transition, n = X;
    try {
      if (Ke.transition = null, X = 16 > e ? 16 : e, Gt === null) var r = !1;
      else {
        if (e = Gt, Gt = null, Ja = 0, H & 6) throw Error(z(331));
        var a = H;
        for (H |= 4, L = e.current; L !== null; ) {
          var o = L, s = o.child;
          if (L.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var f = u[l];
                for (L = f; L !== null; ) {
                  var h = L;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, L = g;
                  else for (; L !== null; ) {
                    h = L;
                    var v = h.sibling, y = h.return;
                    if (rd(h), h === f) {
                      L = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = y, L = v;
                      break;
                    }
                    L = y;
                  }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var F = x.sibling;
                    x.sibling = null, x = F;
                  } while (x !== null);
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
                vr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, L = m;
              break e;
            }
            L = o.return;
          }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          s = L;
          var c = s.child;
          if (s.subtreeFlags & 2064 && c !== null) c.return = s, L = c;
          else e: for (s = d; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  co(9, u);
              }
            } catch (w) {
              pe(u, u.return, w);
            }
            if (u === s) {
              L = null;
              break e;
            }
            var p = u.sibling;
            if (p !== null) {
              p.return = u.return, L = p;
              break e;
            }
            L = u.return;
          }
        }
        if (H = a, an(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
          xt.onPostCommitFiberRoot(no, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      X = n, Ke.transition = t;
    }
  }
  return !1;
}
function Kl(e, t, n) {
  t = Qn(n, t), t = Hc(e, t, 1), e = Kt(e, t, 1), t = be(), e !== null && (Vr(e, 1, t), $e(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Kl(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Kl(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
        e = Qn(n, e), e = Wc(t, e, 1), t = Kt(t, e, 1), e = be(), t !== null && (Vr(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function om(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (je & n) === n && (ve === 4 || ve === 3 && (je & 130023424) === je && 500 > fe() - bs ? dn(e, 0) : Ps |= n), $e(e, t);
}
function fd(e, t) {
  t === 0 && (e.mode & 1 ? (t = ra, ra <<= 1, !(ra & 130023424) && (ra = 4194304)) : t = 1);
  var n = be();
  e = Mt(e, t), e !== null && (Vr(e, t, n), $e(e, n));
}
function im(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fd(e, n);
}
function sm(e, t) {
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
  r !== null && r.delete(t), fd(e, n);
}
var md;
md = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) Ae = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ae = !1, Qf(e, t, n);
    Ae = !!(e.flags & 131072);
  }
  else Ae = !1, se && t.flags & 1048576 && yc(t, Ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      _a(e, t), e = t.pendingProps;
      var a = Vn(t, Ne.current);
      Bn(t, n), a = Ss(null, t, r, e, a, n);
      var o = Cs();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (o = !0, Fa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ys(t), a.updater = uo, t.stateNode = a, a._reactInternals = t, Ci(t, r, e, n), t = Ei(null, t, r, !0, o, n)) : (t.tag = 0, se && o && ds(t), Pe(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (_a(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = um(r), e = st(r, e), a) {
          case 0:
            t = Ni(null, t, r, e, n);
            break e;
          case 1:
            t = Fl(null, t, r, e, n);
            break e;
          case 11:
            t = $l(null, t, r, e, n);
            break e;
          case 14:
            t = Ol(null, t, r, st(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Ni(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), Fl(e, t, r, a, n);
    case 3:
      e: {
        if (Jc(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, Cc(e, t), Ga(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Qn(Error(z(423)), t), t = Bl(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Qn(Error(z(424)), t), t = Bl(e, t, r, n, a);
          break e;
        } else for (Be = Yt(t.stateNode.containerInfo.firstChild), Ue = t, se = !0, ut = null, n = kc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gn(), r === a) {
            t = Tt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return _c(t), e === null && ji(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, gi(r, a) ? s = null : o !== null && gi(r, o) && (t.flags |= 32), Kc(e, t), Pe(e, t, s, n), t.child;
    case 6:
      return e === null && ji(t), null;
    case 13:
      return Xc(e, t, n);
    case 4:
      return xs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), $l(e, t, r, a, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, te(qa, r._currentValue), r._currentValue = s, o !== null) if (pt(o.value, s)) {
          if (o.children === a.children && !Ie.current) {
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
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var h = f.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), f.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ki(
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
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ki(s, n, t), s = o.sibling;
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
      return a = t.type, r = t.pendingProps.children, Bn(t, n), a = Je(a), r = r(a), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = st(r, t.pendingProps), a = st(r.type, a), Ol(e, t, r, a, n);
    case 15:
      return Qc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : st(r, a), _a(e, t), t.tag = 1, De(r) ? (e = !0, Fa(t)) : e = !1, Bn(t, n), Gc(t, r, a), Ci(t, r, a, n), Ei(null, t, r, !0, e, n);
    case 19:
      return Zc(e, t, n);
    case 22:
      return Yc(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function hd(e, t) {
  return Uu(e, t);
}
function lm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new lm(e, t, n, r);
}
function Rs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function um(e) {
  if (typeof e == "function") return Rs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zi) return 11;
    if (e === es) return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function za(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") Rs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Nn:
      return pn(n.children, a, o, t);
    case Xi:
      s = 8, a |= 8;
      break;
    case Qo:
      return e = Ye(12, n, t, a | 2), e.elementType = Qo, e.lanes = o, e;
    case Yo:
      return e = Ye(13, n, t, a), e.elementType = Yo, e.lanes = o, e;
    case Ko:
      return e = Ye(19, n, t, a), e.elementType = Ko, e.lanes = o, e;
    case _u:
      return fo(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Su:
          s = 10;
          break e;
        case Cu:
          s = 9;
          break e;
        case Zi:
          s = 11;
          break e;
        case es:
          s = 14;
          break e;
        case Ft:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function pn(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function fo(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = _u, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Vo(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Go(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _o(0), this.expirationTimes = _o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _o(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function As(e, t, n, r, a, o, s, u, l) {
  return e = new cm(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ys(o), e;
}
function dm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gd(e) {
  if (!e) return tn;
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
    if (De(n)) return gc(e, n, t);
  }
  return t;
}
function vd(e, t, n, r, a, o, s, u, l) {
  return e = As(n, r, !0, e, a, o, s, u, l), e.context = gd(null), n = e.current, r = be(), a = Xt(n), o = zt(r, a), o.callback = t ?? null, Kt(n, o, a), e.current.lanes = a, Vr(e, a, r), $e(e, r), e;
}
function mo(e, t, n, r) {
  var a = t.current, o = be(), s = Xt(a);
  return n = gd(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(a, t, s), e !== null && (dt(e, a, s, o), ka(e, a, s)), s;
}
function Za(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Jl(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Is(e, t) {
  Jl(e, t), (e = e.alternate) && Jl(e, t);
}
function pm() {
  return null;
}
var yd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ds(e) {
  this._internalRoot = e;
}
ho.prototype.render = Ds.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  mo(e, t, null, null);
};
ho.prototype.unmount = Ds.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function() {
      mo(null, e, null, null);
    }), t[bt] = null;
  }
};
function ho(e) {
  this._internalRoot = e;
}
ho.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Yu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++) ;
    Ut.splice(n, 0, e), n === 0 && Ju(e);
  }
};
function $s(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function go(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xl() {
}
function fm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = Za(s);
        o.call(f);
      };
    }
    var s = vd(t, r, e, 0, null, !1, !1, "", Xl);
    return e._reactRootContainer = s, e[bt] = s.current, br(e.nodeType === 8 ? e.parentNode : e), yn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = Za(l);
      u.call(f);
    };
  }
  var l = As(e, 0, !1, null, null, !1, !1, "", Xl);
  return e._reactRootContainer = l, e[bt] = l.current, br(e.nodeType === 8 ? e.parentNode : e), yn(function() {
    mo(t, l, n, r);
  }), l;
}
function vo(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = Za(s);
        u.call(l);
      };
    }
    mo(t, s, e, a);
  } else s = fm(n, t, e, a, r);
  return Za(s);
}
Wu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (rs(t, n | 1), $e(t, fe()), !(H & 6) && (Yn = fe() + 500, an()));
      }
      break;
    case 13:
      yn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var a = be();
          dt(r, e, 1, a);
        }
      }), Is(e, 1);
  }
};
as = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = be();
      dt(t, e, 134217728, n);
    }
    Is(e, 134217728);
  }
};
Qu = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = Mt(e, t);
    if (n !== null) {
      var r = be();
      dt(n, e, t, r);
    }
    Is(e, t);
  }
};
Yu = function() {
  return X;
};
Ku = function(e, t) {
  var n = X;
  try {
    return X = e, t();
  } finally {
    X = n;
  }
};
ii = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = io(r);
            if (!a) throw Error(z(90));
            Eu(r), Zo(r, a);
          }
        }
      }
      break;
    case "textarea":
      Pu(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
Iu = Ms;
Du = yn;
var mm = { usingClientEntryPoint: !1, Events: [Hr, bn, io, Ru, Au, Ms] }, ir = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hm = { bundleType: ir.bundleType, version: ir.version, rendererPackageName: ir.rendererPackageName, rendererConfig: ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ir.findFiberByHostInstance || pm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ma.isDisabled && ma.supportsFiber) try {
    no = ma.inject(hm), xt = ma;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mm;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$s(t)) throw Error(z(200));
  return dm(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!$s(e)) throw Error(z(299));
  var n = !1, r = "", a = yd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = As(e, 1, !1, null, null, n, !1, r, a), e[bt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Ds(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Fu(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return yn(e);
};
Ve.hydrate = function(e, t, n) {
  if (!go(t)) throw Error(z(200));
  return vo(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!$s(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = yd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = vd(t, null, e, 1, n ?? null, a, !1, o, s), e[bt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new ho(t);
};
Ve.render = function(e, t, n) {
  if (!go(t)) throw Error(z(200));
  return vo(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!go(e)) throw Error(z(40));
  return e._reactRootContainer ? (yn(function() {
    vo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[bt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = Ms;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!go(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return vo(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function xd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd);
    } catch (e) {
      console.error(e);
    }
}
xd(), xu.exports = Ve;
var gm = xu.exports, wd, Zl = gm;
wd = Zl.createRoot, Zl.hydrateRoot;
const eu = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, vm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, ym = [
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
], xm = [
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
function wm(e) {
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
  previewUrl: (e, t = !0, n = 0, r = "final") => `${fn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
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
  pageUrl: (e, t, n = !1, r = !1, a = 0, o = "final") => `${fn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${o}` : ""}`,
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
async function jm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((h, g) => {
      a.onload = () => h(), a.onerror = () => g(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (h) => l.toBlob((g) => h(g), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function jd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await jm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Oi = [
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
function Fi(e) {
  return Oi.find((t) => t.key === e) ?? Oi[0];
}
function tu(e) {
  const t = Fi(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function kd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Fi(e);
  } catch {
  }
  return Fi("wiwi");
}
const Sd = {
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
}, Cd = j.createContext("es");
function km({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(Cd.Provider, { value: e, children: t });
}
function Os() {
  return j.useContext(Cd);
}
function Ze() {
  const e = Os();
  return (t, n) => {
    let r = e === "en" ? Sd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function Sm(e, t, n) {
  return e === "en" ? Sd[t] ?? t : t;
}
function le({ size: e = 18, children: t }) {
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
function _d({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Fr({ size: e }) {
  return /* @__PURE__ */ i.jsx(le, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Br({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function eo({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Nd({ size: e }) {
  return /* @__PURE__ */ i.jsx(le, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function yo({ size: e }) {
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
function nu({ size: e }) {
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
function Em({ size: e }) {
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
function zm({ size: e }) {
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
function Pm({ size: e }) {
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
function bm({ size: e }) {
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
function Ed({ size: e }) {
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
  return /* @__PURE__ */ i.jsx(le, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function zd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Pd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Tm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function wr({ size: e }) {
  return /* @__PURE__ */ i.jsx(le, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function Bi({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function bd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Dm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function $m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Om({ size: e }) {
  return /* @__PURE__ */ i.jsxs(le, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Fm({ size: e }) {
  return /* @__PURE__ */ i.jsx(le, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Bm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ze(), o = j.useMemo(() => t.map((C) => C.id), [t]), [s, u] = j.useState(/* @__PURE__ */ new Set()), [l, f] = j.useState("escala"), [h, g] = j.useState(100), [v, y] = j.useState(50), [k, x] = j.useState("mayor"), [F, m] = j.useState("");
  j.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const d = (C) => !s.has(C), c = (C) => u((N) => {
    const $ = new Set(N);
    return $.has(C) ? $.delete(C) : $.add(C), $;
  }), p = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), w = (C) => {
    const N = C.w_mm_base || 0, $ = C.h_mm_base || 0;
    return k === "mayor" ? Math.max(N, $) : k === "menor" ? Math.min(N, $) : 2 * Math.sqrt(Math.max(0, N * $) / Math.PI);
  }, S = (C) => {
    if (l === "tamano") {
      const N = w(C);
      if (N > 0) return Math.min(10, Math.max(0.05, v / N));
    }
    return Math.min(10, Math.max(0.05, h / 100));
  }, _ = (C) => {
    const N = S(C);
    return { w: (C.w_mm_base || 0) * N, h: (C.h_mm_base || 0) * N };
  }, P = async () => {
    let C = 0;
    for (const N of t) {
      if (!d(N.id)) continue;
      const $ = S(N) * 100;
      await D.patchAsset(N.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round($ * 10) / 10))
      }), C += 1;
    }
    await r(), m(a("{n} elementos ajustados ", { n: C })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((C) => {
          const N = _(C), $ = Math.min(98, N.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${C.id}`,
              style: {
                width: `${$}%`,
                maxWidth: `${$}%`,
                aspectRatio: `${N.w || 1} / ${N.h || 1}`,
                opacity: d(C.id) ? 1 : 0.3
              },
              title: `${C.name} · ${N.w.toFixed(1)}×${N.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: D.previewUrl(C.id), alt: "" })
            },
            C.id
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
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((C) => {
          const N = _(C);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${C.id}`,
              className: d(C.id) ? "sel" : "",
              onClick: () => c(C.id),
              title: C.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: D.previewUrl(C.id), alt: C.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: C.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(C.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  N.w.toFixed(1),
                  "×",
                  N.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            C.id
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
              onClick: () => f("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: l === "tamano" ? "on" : "",
              onClick: () => f("tamano"),
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
                value: String(h),
                onChange: (C) => g(Number(C.target.value))
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
                  value: String(v),
                  onChange: (C) => y(Number(C.target.value))
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
                value: k,
                onChange: (C) => x(C.target.value),
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
        F && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: F })
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
function Um({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  faseBordes: s = 0,
  verBordes: u = !0,
  contornoModo: l = "final",
  destacado: f = !1
}) {
  const h = Ze(), [g, v] = j.useState(() => Or(e));
  j.useEffect(() => v(Or(e)), [e]);
  const y = j.useRef(null), k = wm(g), [x, F] = j.useState(""), m = j.useRef(!1), [d, c] = j.useState(""), p = j.useRef(!1), [w, S] = j.useState({ tamano: !1, borde: !1, mini: !1 }), _ = j.useRef(null);
  j.useEffect(() => {
    var T;
    f && (S({ tamano: !0, borde: !0, mini: !0 }), (T = _.current) == null || T.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [f]), j.useEffect(() => {
    m.current || F(k.w > 0 ? k.w.toFixed(1) : ""), p.current || c(k.h > 0 ? k.h.toFixed(1) : "");
  }, [k.w, k.h]);
  const P = Number.isFinite(g.w_mm_base) ? g.w_mm_base : 0, C = Number.isFinite(g.h_mm_base) ? g.h_mm_base : 0, N = (T) => {
    F(T);
    const oe = Number(T.replace(",", "."));
    !Number.isFinite(oe) || oe <= 0 || P <= 0 || J({ scale_pct: oe / P * 100 });
  }, $ = (T) => {
    c(T);
    const oe = Number(T.replace(",", "."));
    !Number.isFinite(oe) || oe <= 0 || C <= 0 || J({ scale_pct: oe / C * 100 });
  }, K = (t == null ? void 0 : t.placements.filter((T) => T.asset_id === e.id && T.mini).length) ?? 0, Q = (t == null ? void 0 : t.placements.filter((T) => T.asset_id === e.id && !T.mini).length) ?? 0, J = async (T) => {
    a == null || a(), "copies" in T && (T.copies = Math.max(0, T.copies ?? 0)), v((oe) => ({ ...oe, ...T }));
    try {
      await D.patchAsset(e.id, T);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: _,
      "data-asset": e.id,
      className: `asset-card${f ? " destacada" : ""}`,
      "data-testid": "asset-card",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: D.previewUrl(e.id, u, s, l),
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
                title: h("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => D.assetsFolder().then((T) => D.abrirCarpeta(T.path)).catch(() => D.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ i.jsx(Fr, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: h("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var T;
                  return (T = y.current) == null ? void 0 : T.click();
                },
                children: /* @__PURE__ */ i.jsx(Cm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: y,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (T) => {
                  var Le;
                  const oe = (Le = T.target.files) == null ? void 0 : Le[0];
                  if (T.target.value = "", !!oe)
                    try {
                      const { blob: b, name: O } = await jd(oe);
                      await D.reemplazar(e.id, b, O), await n();
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
                title: h("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ i.jsx(_m, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                title: g.bg_removed ? h("Restaurar fondo original") : h("Quitar fondo (inteligente)"),
                onClick: () => (g.bg_removed ? D.restoreBackground(e.id) : D.removeBackground(e.id)).then(n),
                children: g.bg_removed ? /* @__PURE__ */ i.jsx(Nm, { size: 16 }) : /* @__PURE__ */ i.jsx(eo, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: h("Eliminar imagen"),
                onClick: () => D.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ i.jsx(Nd, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${g.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": h("Incluir como mini (rellena huecos)"),
                onClick: () => J({ mini_enabled: !g.mini_enabled }),
                children: [
                  /* @__PURE__ */ i.jsx(Ur, { size: 15 }),
                  " ",
                  h("Mini")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${g.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": h("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => S((T) => ({ ...T, borde: !T.borde })),
                children: [
                  /* @__PURE__ */ i.jsx(yo, { size: 15 }),
                  " ",
                  h("Borde")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: h("Copias"), children: [
              /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => J({ copies: g.copies - 1 }), children: "−" }),
              /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: g.copies }),
              /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => J({ copies: g.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => S((T) => ({ ...T, tamano: !T.tamano })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${w.tamano ? "open" : ""}`, children: "›" }),
                  h("Tamaño"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    k.w.toFixed(1),
                    "×",
                    k.h.toFixed(1),
                    " · ",
                    Math.round(g.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            w.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: h("Escala del elemento (100% = tamaño natural)"), children: h("Escala") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: g.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (T) => J({ scale_pct: Number(T.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
                  Math.round(g.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: h("Tamaño exacto en milímetros (mantiene la proporción)"), children: h("Ancho") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: x,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      m.current = !0, p.current = !1;
                    },
                    onBlur: () => {
                      m.current = !1, F(k.w > 0 ? k.w.toFixed(1) : "");
                    },
                    onChange: (T) => N(T.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" }),
                /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ i.jsx("span", { title: h("Tamaño exacto en milímetros (mantiene la proporción)"), children: h("Alto") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: d,
                    "data-testid": `alto-mm-${e.id}`,
                    onFocus: () => {
                      p.current = !0, m.current = !1;
                    },
                    onBlur: () => {
                      p.current = !1, c(k.h > 0 ? k.h.toFixed(1) : "");
                    },
                    onChange: (T) => $(T.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" })
              ] })
            ] })
          ] }),
          (g.offset_mm > 0 || o) && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-borde-${e.id}`,
                onClick: () => S((T) => ({ ...T, borde: !T.borde })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${w.borde ? "open" : ""}`, children: "›" }),
                  h("Borde adicional"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    g.offset_mm.toFixed(1),
                    " mm",
                    g.offset_mm <= 0 ? ` · ${h("global")}` : ""
                  ] })
                ]
              }
            ),
            w.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => J({ offset_mm: Math.max(
                      0,
                      Math.round((g.offset_mm - 0.5) * 2) / 2
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
                    value: g.offset_mm,
                    onChange: (T) => J({ offset_mm: Number(T.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => J({ offset_mm: Math.min(
                      20,
                      Math.round((g.offset_mm + 0.5) * 2) / 2
                    ) }),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", h("Extender")],
                  ["blanco", h("Blanco")],
                  ["color", h("Color")],
                  ["unir_recto", h("Unir recto")],
                  ["unir_curvo", h("Unir curvo")]
                ].map(([T, oe]) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: `seg ${(g.offset_modo || "") === T ? "on" : ""}`,
                    "data-testid": `offset-modo-${T}-${e.id}`,
                    onClick: () => J({ offset_modo: T }),
                    children: oe
                  },
                  T
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: g.offset_color || "#ffffff",
                    title: h("Color del borde"),
                    onChange: (T) => J({
                      offset_color: T.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          g.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => S((T) => ({ ...T, mini: !T.mini })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${w.mini ? "open" : ""}`, children: "›" }),
                  h("Opciones de mini"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    g.mini_quota,
                    " · ",
                    K
                  ] })
                ]
              }
            ),
            w.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ i.jsx("span", { title: h("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: h("Cuota") }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => J({ mini_quota: Math.max(
                    1,
                    Math.round((g.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                g.mini_quota
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => J({ mini_quota: Math.min(
                    100,
                    Math.round((g.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: h(" {n} minis", { n: K }) })
            ] }) })
          ] }),
          Q > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: h("Colocadas: {n}", { n: Q }) }),
          g.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ i.jsx(bd, { size: 14 }),
            " ",
            g.warnings[0],
            " ",
            g.warnings.some((T) => /blob|trozos sueltos/i.test(T)) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: h("limpiar contorno")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function qm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0,
  verBordes: l = !0,
  contornoModo: f = "final",
  destacado: h = ""
}) {
  const g = Ze(), v = j.useRef(null), [y, k] = j.useState(!1), [x, F] = j.useState(null), m = async (c) => {
    const p = [];
    for (const w of Array.from(c))
      try {
        const { blob: S, name: _ } = await jd(w);
        p.push(Or(await D.upload(S, _)));
      } catch (S) {
        console.error(S);
      }
    await r(), p.length > 1 && F(p);
  }, d = n.usar_minis;
  return e.some((c) => c.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: g("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${y ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = v.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), k(!0);
        },
        onDragLeave: () => k(!1),
        onDrop: (c) => {
          c.preventDefault(), k(!1), c.dataTransfer.files.length && m(c.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            g("Arrastra imágenes aquí"),
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
                c.target.files && m(c.target.files), c.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((c) => /* @__PURE__ */ i.jsx(
      Um,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        contornoModo: f,
        destacado: h === c.id,
        bordeGlobal: n.offset_activo === !0
      },
      c.id
    )) }),
    !d && /* @__PURE__ */ i.jsx("div", { className: "hint", children: g("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => D.clearAssets().then(r),
        children: g("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Bm,
      {
        open: !!x,
        assets: x ?? [],
        onClose: () => F(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const yt = (e) => (globalThis.__crycatAssets || "") + e;
function Md({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ze(), [o, s] = j.useState(null), [u, l] = j.useState("");
  j.useEffect(() => {
    e && f(r || "");
  }, [e]);
  const f = async (h = "") => {
    l("");
    try {
      s(await D.fsList(h));
    } catch (g) {
      l(g.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (h) => h.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => f(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((h) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => f(`${o.path}/${h}`.replace("//", "/")),
          children: h
        },
        h
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
function Vm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Ze(), [u, l] = j.useState("resumen");
  if (!e) return null;
  const f = t.length > 0 && t.every((g) => g.startsWith("data:")), h = [
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
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((g) => /* @__PURE__ */ i.jsx("li", { title: g, children: g.split(/[\\/]/).pop() }, g)) }),
      !f && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      f && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      f ? t.map((g, v) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${v}`,
          href: g,
          download: `crycat_pagina-${String(v + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Fr, { size: 15 }),
            " ",
            s("Descargar página {n}", { n: v + 1 })
          ]
        },
        v
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
          onClick: () => l("cricut"),
          children: s("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { children: s("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: h.map((g, v) => /* @__PURE__ */ i.jsx("li", { children: g }, v)) }),
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
function Gm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: f, onFinEdicion: h, onDeshacer: g, onRehacer: v, puedeDeshacer: y, puedeRehacer: k }) {
  const x = Ze(), F = Os(), [m, d] = j.useState(1), [c, p] = j.useState({ x: 0, y: 0 }), [w, S] = j.useState(null), [_, P] = j.useState(() => Date.now()), [C, N] = j.useState(null), [$, K] = j.useState(null), [Q, J] = j.useState(!1), [T, oe] = j.useState(2), [Le, b] = j.useState(0);
  j.useEffect(() => {
    if (!r.verBordes) return;
    const E = window.setInterval(
      () => b((R) => (R + 3) % 12),
      260
    );
    return () => window.clearInterval(E);
  }, [r.verBordes]);
  const [O, B] = j.useState([]), [W, Y] = j.useState([]), [et, I] = j.useState(""), [Z, me] = j.useState(/* @__PURE__ */ new Set()), Ee = j.useRef(null), tt = j.useRef(null), Rt = F === "en" ? xm : ym, Qr = j.useMemo(
    () => Rt[Math.floor(Math.random() * Rt.length)],
    [Rt]
  ), jn = r.saveName.trim() || Qr;
  j.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const nt = (t == null ? void 0 : t.pages) ?? 0, Yr = !!t && t.efficiency < 0.8;
  j.useEffect(() => {
    const E = Ee.current;
    if (!E) return;
    const R = (M) => {
      M.preventDefault(), M.stopPropagation();
      const G = E.getBoundingClientRect(), ee = M.clientX - G.left, ze = M.clientY - G.top;
      d((He) => {
        const ne = M.deltaY < 0 ? 1.05 : 0.9523809523809523, ie = Math.min(12, Math.max(0.05, He * ne)), mt = ie / He;
        return p(($t) => ({ x: ee - (ee - $t.x) * mt, y: ze - (ze - $t.y) * mt })), ie;
      });
    };
    return E.addEventListener("wheel", R, { passive: !1 }), () => E.removeEventListener("wheel", R);
  }, []);
  const A = (E) => {
    if (E.target.closest(".item-box")) return;
    tt.current = { x: E.clientX - c.x, y: E.clientY - c.y };
    const R = (G) => {
      tt.current && p({ x: G.clientX - tt.current.x, y: G.clientY - tt.current.y });
    }, M = () => {
      tt.current = null, window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", M);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", M);
  };
  j.useEffect(() => {
    const E = (R) => {
      R.target.tagName !== "INPUT" && (R.key === "+" || R.key === "=" ? d((M) => Math.min(12, M * 1.08)) : R.key === "-" || R.key === "_" ? d((M) => Math.max(0.05, M / 1.08)) : R.key === "0" ? (d(1), p({ x: 0, y: 0 })) : R.key === "Escape" ? S(null) : R.key === "g" ? a((M) => ({ ...M, guidesVisible: !M.guidesVisible })) : R.key === "t" && a((M) => M.eyeFosforito ? { ...M, eyeFosforito: !1, eyeTransparent: !1 } : M.eyeTransparent ? { ...M, eyeTransparent: !1, eyeFosforito: !0 } : { ...M, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [a]);
  const U = j.useRef(null), Oe = j.useRef(null), rt = (E, R) => {
    E.preventDefault(), E.stopPropagation();
    const M = E.currentTarget.closest(".page-box");
    if (!M || !t) return;
    const G = t.page_mm[0] / M.clientWidth, ee = {
      uid: R.uid,
      startX: E.clientX,
      startY: E.clientY,
      origX: R.x,
      origY: R.y,
      mmPerPx: G
    };
    U.current = ee, Oe.current = { x: R.x, y: R.y }, N(ee), K({ uid: R.uid, x: R.x, y: R.y });
    const ze = (ne) => {
      const ie = U.current;
      if (!ie) return;
      const mt = (ne.clientX - ie.startX) * ie.mmPerPx / m, $t = (ne.clientY - ie.startY) * ie.mmPerPx / m;
      Oe.current = { x: ie.origX + mt, y: ie.origY + $t }, K({ uid: ie.uid, x: ie.origX + mt, y: ie.origY + $t });
    }, He = (ne) => {
      window.removeEventListener("mousemove", ze), window.removeEventListener("mouseup", He);
      const ie = U.current;
      if (U.current = null, !ie) return;
      const mt = (ne.clientX - ie.startX) * ie.mmPerPx / m, $t = (ne.clientY - ie.startY) * ie.mmPerPx / m;
      N(null), K(null), !(Math.abs(mt) < 0.5 && Math.abs($t) < 0.5) && Kr(ie.uid, ie.origX + mt, ie.origY + $t);
    };
    window.addEventListener("mousemove", ze), window.addEventListener("mouseup", He);
  }, Kr = async (E, R, M) => {
    try {
      const G = await D.move(E, R, M);
      G.job ? u(G.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, At = async (E) => {
    const R = await D.unpin(E);
    u(R);
  }, Rd = !1;
  j.useEffect(() => {
    {
      B([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, _]), j.useEffect(() => {
    if (!f) {
      Y([]), I(""), me(/* @__PURE__ */ new Set());
      return;
    }
    D.blobs(f.id).then((E) => {
      Y(E.blobs), oe(E.union_mm ?? 2), I(E.preview_png), me(new Set(E.blobs.filter((R) => !R.principal).map((R) => R.id)));
    }).catch(() => {
      Y([]), I("");
    });
  }, [f]);
  const Fs = async () => {
    if (f)
      try {
        await D.limpiarContorno(f.id, Array.from(Z));
      } finally {
        await (h == null ? void 0 : h());
      }
  }, Ad = (E) => {
    me((R) => {
      const M = new Set(R);
      return M.has(E) ? M.delete(E) : M.add(E), M;
    });
  }, [ft, It] = j.useState(null), Id = async () => {
    try {
      const M = await D.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      It({ files: M.files, folder: M.folder });
    } catch (M) {
      It({ files: [], folder: "", error: M.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const G = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), ee = URL.createObjectURL(G), ze = document.createElement("a");
        ze.href = ee, ze.download = `${r.saveName || "crycat"}-cricut.pdf`, ze.click(), setTimeout(() => URL.revokeObjectURL(ee), 4e3);
      } catch (M) {
        It({
          files: [],
          folder: "",
          error: M.message
        });
      }
      return;
    }
    const R = document.createElement("iframe");
    R.setAttribute("aria-hidden", "true"), R.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", R.src = "/api/print.pdf", R.onload = () => {
      var M, G;
      try {
        (M = R.contentWindow) == null || M.focus(), (G = R.contentWindow) == null || G.print();
      } finally {
        window.setTimeout(() => R.remove(), 6e4);
      }
    }, document.body.appendChild(R);
  }, Dd = async () => {
    try {
      const E = await D.export(jn);
      It({ files: E.files, folder: E.folder });
    } catch (E) {
      It({ files: [], folder: "", error: E.message });
    }
  }, $d = () => {
    J(!0);
  }, Od = async (E) => {
    try {
      const R = await D.export(jn, E);
      It({ files: R.files, folder: R.folder });
    } catch (R) {
      It({ files: [], folder: "", error: R.message });
    }
  }, Bs = (t == null ? void 0 : t.poly_mm) ?? [], [at, ot] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [kn, Sn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], Dt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : kn, Jr = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : Sn, jt = n.lienzo === "pagina" ? 0 : at, kt = n.lienzo === "pagina" ? 0 : ot, Us = Bs.length ? "M" + Bs.map(([E, R]) => `${E - jt},${R - kt}`).join(" L") + " Z" : "", qs = j.useRef(0);
  j.useEffect(() => {
    if (!t) return;
    const E = t.pages || 0;
    E > 0 && E !== qs.current && (qs.current = E, a((R) => ({ ...R, viewMode: E <= 1 ? 1 : E === 2 ? 2 : 4 })), S(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const Fd = {
    final: { etiqueta: "Contorno exterior (con bordes)" },
    orig: { etiqueta: "Contorno sin bordes" },
    ambos: { etiqueta: "Contornos (con y sin bordes)" },
    ninguno: { etiqueta: "Sin contornos" }
  }, Vs = r.contornoModo ?? "final", Bd = r.verBordes && Vs !== "ninguno", xo = r.hojaGirada === !0, Ud = (E) => {
    const R = (t == null ? void 0 : t.placements.filter((M) => M.page === E)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}${xo ? " girada" : ""}`,
        style: xo ? {
          width: "100%",
          aspectRatio: `${Jr} / ${Dt}`
        } : { width: "100%" },
        onClick: (M) => {
          nt > 1 && w === null && !M.target.closest(".item-box") && S(E);
        },
        "data-testid": `page-${E}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: `sheet${xo ? " girada" : ""}`, src: D.pageUrl(E, _, n.simular_impresion === !0, Bd, Le, Vs), alt: x("Página {i}", { i: E + 1 }), draggable: !1 }),
          r.guidesVisible && Us && /* @__PURE__ */ i.jsxs("svg", { className: "overlay-svg", viewBox: `0 0 ${Dt} ${Jr}`, preserveAspectRatio: "none", children: [
            /* @__PURE__ */ i.jsxs(
              "g",
              {
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.15, Dt / 1400),
                opacity: 0.28,
                children: [
                  Array.from(
                    { length: Math.floor((at - jt + kn) / 10) + 1 },
                    (M, G) => {
                      const ee = G * 10 - (jt - at);
                      return ee >= at - jt - 0.01 && ee <= at - jt + kn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: ee,
                          y1: ot - kt,
                          x2: ee,
                          y2: ot - kt + Sn
                        },
                        `v${G}`
                      ) : null;
                    }
                  ),
                  Array.from(
                    { length: Math.floor((ot - kt + Sn) / 10) + 1 },
                    (M, G) => {
                      const ee = G * 10 - (kt - ot);
                      return ee >= ot - kt - 0.01 && ee <= ot - kt + Sn + 0.01 ? /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: at - jt,
                          y1: ee,
                          x2: at - jt + kn,
                          y2: ee
                        },
                        `h${G}`
                      ) : null;
                    }
                  )
                ]
              }
            ),
            (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
              ["esquina_flecha", at, ot, !1, !1],
              ["esquina_sd", at + kn, ot, !0, !1],
              ["esquina_ii", at, ot + Sn, !1, !0],
              ["esquina_id", at + kn, ot + Sn, !0, !0]
            ].map(([M, G, ee, ze, He]) => {
              const ne = t.marcas[M];
              if (!ne) return null;
              const ie = G - jt - (ze ? ne[0] : 0), mt = ee - kt - (He ? ne[1] : 0);
              return /* @__PURE__ */ i.jsx(
                "image",
                {
                  href: yt(`/marcas/${M}.png`),
                  x: ie,
                  y: mt,
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
                d: Us,
                fill: "none",
                stroke: "var(--guide)",
                strokeWidth: Math.max(0.6, Dt / 250),
                strokeDasharray: `${Dt / 55} ${Dt / 85}`,
                opacity: 0.85
              }
            ),
            Rd
          ] }),
          R.map((M) => {
            const G = e.find((ne) => ne.id === M.asset_id), ee = ($ == null ? void 0 : $.uid) === M.uid ? $ : null, ze = ((ee ? ee.x : M.x) - jt) / (Dt || 1) * 100, He = ((ee ? ee.y : M.y) - kt) / (Jr || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${M.pinned ? "pinned" : ""} ${(C == null ? void 0 : C.uid) === M.uid ? "dragging" : ""}`,
                style: {
                  left: `${ze}%`,
                  top: `${He}%`,
                  width: `${M.w / (Dt || 1) * 100}%`,
                  height: `${M.h / (Jr || 1) * 100}%`
                },
                title: (G == null ? void 0 : G.name) ?? "",
                onMouseDown: (ne) => rt(ne, M),
                onContextMenu: (ne) => {
                  ne.preventDefault(), At(M.uid);
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
  }, qd = w !== null ? [w] : Array.from({ length: nt }, (E, R) => R);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    nt > 1 && /* @__PURE__ */ i.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: x("No cabe en una página: {n} páginas", { n: nt }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": x("Contorno: {modo} (pulsa para cambiar)", {
            modo: x(Fd[r.contornoModo ?? "final"].etiqueta)
          }),
          onClick: () => a((E) => {
            const R = ["final", "orig", "ambos", "ninguno"], M = R.indexOf(E.contornoModo ?? "final"), G = R[(M + 1) % 4];
            return {
              ...E,
              contornoModo: G,
              verBordes: G !== "ninguno"
            };
          }),
          children: /* @__PURE__ */ i.jsx(yo, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": x("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((E) => ({ ...E, guidesVisible: !E.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(Pd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": x("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(Yr ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Br, { size: 16 }),
            " ",
            x("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        nt > 1 && w === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((E) => ({ ...E, viewMode: 4 })), children: "4" })
        ] }),
        w !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => S(null), title: x("Volver a la cuadrícula (Esc)"), children: x(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": x("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((E) => E.eyeFosforito ? { ...E, eyeFosforito: !1, eyeTransparent: !1 } : E.eyeTransparent ? { ...E, eyeTransparent: !1, eyeFosforito: !0 } : { ...E, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(Em, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(nu, { size: 16 }) : /* @__PURE__ */ i.jsx(nu, { size: 16 }),
              r.eyeFosforito ? x("Fosforito") : r.eyeTransparent ? x("Transparente") : x("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-disposicion",
            "data-tip": x("Cambiar la disposición: menús anchos o hoja más grande"),
            onClick: () => {
              const E = !window.__crycatAncho;
              window.__crycatAncho = E, window.dispatchEvent(new CustomEvent(
                "crycat:disposicion",
                { detail: E }
              ));
            },
            children: /* @__PURE__ */ i.jsx(Pm, { size: 16 })
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
            "data-tip": x("Deshacer (Ctrl+Z)"),
            onClick: () => g(),
            disabled: !y,
            children: /* @__PURE__ */ i.jsx(zd, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": x("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => v(),
            disabled: !k,
            children: /* @__PURE__ */ i.jsx(Mm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": x("Acercar (+)"),
            onClick: () => d((E) => Math.min(12, E * 1.08)),
            children: /* @__PURE__ */ i.jsx(Tm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": x("Centrar la hoja y volver al tamaño original (tecla 0)"),
            onClick: () => {
              d(1), p({ x: 0, y: 0 });
            },
            children: /* @__PURE__ */ i.jsx(bm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": x("Alejar (−)"),
            onClick: () => d((E) => Math.max(0.05, E / 1.08)),
            children: /* @__PURE__ */ i.jsx(Lm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(m * 100),
          "%"
        ] })
      ] })
    ] }),
    f ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: D.previewUrl(f.id) + `?t=${_}`,
            alt: f.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: f && W.filter((E) => !E.principal).map((E, R) => {
          const [M, G, ee, ze] = E.bbox, He = f.w_px || 1, ne = f.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${Z.has(E.id) ? " sel" : ""}`,
              "data-testid": `blob-${R}`,
              title: x("Trozo de {px} px — clic para {accion}", {
                px: E.area_px,
                accion: Z.has(E.id) ? x("conservar") : x("quitar")
              }),
              style: {
                left: `${M / He * 100}%`,
                top: `${G / ne * 100}%`,
                width: `${(ee - M) / He * 100}%`,
                height: `${(ze - G) / ne * 100}%`
              },
              onClick: () => Ad(E.id)
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
              title: x("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: T }),
              onClick: async () => {
                f && (await D.patchAsset(f.id, {
                  offset_mm: T,
                  offset_modo: "unir_curvo"
                }), await (h == null ? void 0 : h()));
              },
              children: x("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Fs,
              children: x(
                "Quitar marcados ({n})",
                { n: Z.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: x("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: Ee,
        className: `canvas ${C ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: A,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${c.x}px, ${c.y}px) scale(${m})` },
            children: [
              nt === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: x("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${w !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: qd.map(Ud)
                }
              )
            ]
          }
        )
      }
    ),
    f ? /* @__PURE__ */ i.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: Fs,
          children: x("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => h == null ? void 0 : h(),
          children: x("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Qr,
          value: r.saveName,
          onChange: (E) => a((R) => ({ ...R, saveName: E.target.value }))
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: x("Abrir la carpeta de guardado en el explorador"),
            "aria-label": x("Abrir carpeta de guardado"),
            onClick: () => D.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Fr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Dd, children: x("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: $d, children: x("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Id,
            disabled: nt === 0,
            children: x("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      Md,
      {
        open: Q,
        initial: n.carpeta_export,
        onClose: () => J(!1),
        onPick: Od
      }
    ),
    /* @__PURE__ */ i.jsx(
      Vm,
      {
        open: !!ft,
        files: (ft == null ? void 0 : ft.files) ?? [],
        folder: (ft == null ? void 0 : ft.folder) ?? "",
        error: ft == null ? void 0 : ft.error,
        onOpenFolder: (E) => void D.fsOpen(E).catch(() => {
        }),
        onClose: () => It(null)
      }
    )
  ] });
}
const ru = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function Hm({ saveSettings: e }) {
  const t = Ze(), [n, r] = j.useState(
    {}
  ), [a, o] = j.useState([]), [s, u] = j.useState(!1), [l, f] = j.useState(!1), [h, g] = j.useState(""), [v, y] = j.useState(""), [k, x] = j.useState(""), F = () => D.presets().then((p) => o(Array.isArray(p.names) ? p.names : [])).catch(() => {
  });
  j.useEffect(() => {
    D.factoryPresets().then((p) => r(p.presets ?? {})).catch(() => {
    }), F();
  }, []);
  const m = async (p) => {
    if (p)
      try {
        if (p.startsWith("fabrica:")) {
          const w = p.slice(8);
          await e(n[w]), y(t("Perfil «{n}» aplicado", {
            n: t(ru[w] ?? w)
          }));
        } else {
          const w = p.slice(9), S = await D.loadPreset(w);
          await e(S.settings), y(t("Perfil «{n}» cargado", { n: w }));
        }
      } catch {
        y(t("No se pudo aplicar el perfil"));
      }
  }, d = async () => {
    const w = (k.startsWith("guardado:") ? k.slice(9) : "") || h.trim();
    if (w)
      try {
        const S = await D.savePreset(w);
        o(Array.isArray(S.names) ? S.names : []), g(""), u(!1), x(`guardado:${w}`), y(t("Perfil «{n}» guardado", { n: w }));
      } catch {
        y(t("No se pudo guardar el perfil"));
      }
  }, c = async (p) => {
    try {
      o((await D.deletePreset(p)).names ?? []), y(t("Perfil «{n}» borrado", { n: p }));
    } catch {
      y(t("No se pudo borrar el perfil"));
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "perfiles-barra", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "perfil-select",
          "data-testid": "perfil-select",
          value: k,
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (p) => {
            x(p.target.value), m(p.target.value);
          },
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((p) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${p}`, children: t(ru[p] ?? p) }, p)) }),
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
            /* @__PURE__ */ i.jsx(Bi, { size: 15 }),
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
          onClick: () => f(!l),
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
          value: h,
          onChange: (p) => g(p.target.value),
          onKeyDown: (p) => {
            p.key === "Enter" && d(), p.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: d, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    l && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((p) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: p, children: p }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${p}`, onClick: () => m(`guardado:${p}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${p}`,
          onClick: () => c(p),
          children: /* @__PURE__ */ i.jsx(Nd, { size: 15 })
        }
      )
    ] }, p)) }),
    v && /* @__PURE__ */ i.jsx("div", { className: "hint", children: v })
  ] });
}
function Wm({ settings: e, saveSettings: t }) {
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
            /* @__PURE__ */ i.jsx(Ed, { size: 16 }),
            " ",
            s[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Hm, { saveSettings: t })
  ] });
}
function Qm({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
        onChange: (f) => {
          const h = Number(f.target.value);
          Number.isFinite(h) && h > 0 && r(h);
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
function au(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const Ym = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, Km = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Jm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ze(), [a, o] = j.useState(!0), [s, u] = j.useState({
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
  }), [l, f] = j.useState(!1), h = j.useMemo(() => {
    const p = (n ?? []).filter((S) => S.mini_enabled);
    return (p.length ? p : n ?? []).slice().sort((S, _) => Math.min(_.w_mm, _.h_mm) - Math.min(S.w_mm, S.h_mm))[0] ?? null;
  }, [n]), g = h ? Math.min(h.w_mm, h.h_mm) : 0, v = e.modo === "experto", y = ({ children: p }) => v ? /* @__PURE__ */ i.jsx(i.Fragment, { children: p }) : null, k = (p) => u((w) => ({ ...w, [p]: !w[p] })), x = (p) => t(p), F = j.useRef(null), m = ({ titulo: p, children: w }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(p) }),
    w
  ] }), d = (p, w, S, _, P = 1, C = "", N, $) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...$ ? { "data-tip": r($) } : {}, children: r(p) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: S,
          max: _,
          step: P,
          "data-testid": `set-${w}`,
          value: String(e[w]),
          onChange: (K) => {
            const Q = Number(K.target.value);
            Number.isNaN(Q) || x({ [w]: Q });
          }
        }
      ),
      C && /* @__PURE__ */ i.jsx("span", { className: "hint", children: C }),
      N
    ] })
  ] }), c = (p, w, S, _, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...P ? { "data-tip": r(P) } : {}, children: r(p) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${w}`,
        value: String(e[w]),
        onChange: (C) => x({ [w]: C.target.value }),
        children: S.map(([C, N]) => /* @__PURE__ */ i.jsx("option", { value: C, children: r(N) }, C))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Wm, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !v && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(wr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Colocación", children: [
              d(
                "Espacio entre elementos",
                "espacio_mm",
                0,
                20,
                0.5,
                "mm",
                void 0,
                "Separación mínima entre piezas al colocarlas. Para chapa, 0,5; para pegatinas que se recortan una a una, 2 mm."
              ),
              d(
                "Margen de seguridad a los límites",
                "margen_mm",
                0,
                20,
                0.5,
                "mm",
                void 0,
                "Cuánto se separan las piezas del borde del área recortable. Súbelo si tu Cricut corta justo al límite."
              ),
              c("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(y, { children: d("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (p) => {
                      const w = p.target.value, S = vm[w];
                      x(S ? { pagina: w, pagina_w: S[0], pagina_h: S[1] } : { pagina: w });
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
              /* @__PURE__ */ i.jsx(y, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (p) => x({ pagina_w: Number(p.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (p) => x({ pagina_h: Number(p.target.value) })
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
          toggle: k,
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
                    onClick: () => x({ mini_usar_lista: !0 }),
                    children: r("Lista de tamaños")
                  }
                ),
                /* @__PURE__ */ i.jsx(
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
              d(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas)."
              ),
              !e.mini_usar_lista && d(
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
            /* @__PURE__ */ i.jsx(m, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(y, { children: [
              c("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              c("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ]),
              c("Borde de los minis", "mini_borde_modo", [
                ["proporcional", "Proporcional (se reduce con el mini)"],
                ["igual", "Mantener el mismo borde (mm del original)"],
                ["sin", "Sin borde"]
              ], void 0, "Qué hacer con el borde de cada mini al reducirlo"),
              e.mini_usar_lista && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaños deseados") }),
                /* @__PURE__ */ i.jsxs("div", { className: "seg", style: { maxWidth: 260 }, children: [
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      "data-testid": "lista-modo-mm",
                      className: (e.mini_lista_modo ?? "mm") === "mm" ? "on" : "",
                      onClick: () => x({ mini_lista_modo: "mm" }),
                      children: r("En milímetros")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
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
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((p, w) => /* @__PURE__ */ i.jsx(
                    Qm,
                    {
                      i: w,
                      valor: p,
                      refBase: g,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (S) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[w] = S, x({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => x({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (S, _) => _ !== w
                        )
                      })
                    },
                    w
                  )),
                  /* @__PURE__ */ i.jsx(
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
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: h ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: h.name, mm: g.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Br, { size: 15 }),
          children: [
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
            /* @__PURE__ */ i.jsxs(y, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (p) => x({ opt_tiempo_auto: p.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: Ym[e.opt_metodo] ?? 8,
                  m: r(Km[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : d("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(eo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Impresión", children: [
              d(
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
              c("Espacio de color de impresión", "espacio_color", [
                ["srgb", "sRGB (estándar, el más seguro)"],
                ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
              ]),
              /* @__PURE__ */ i.jsxs(y, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (p) => x({ simular_impresion: p.target.checked })
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
                        onChange: (p) => x({ sim_cmyk: p.target.checked })
                      }
                    ),
                    r("Simular el recorte de CMYK (amarillea azules/verdes)")
                  ] }),
                  d("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
                  d("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
                  d("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
                  /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
                ] })
              ] }),
              c("Formato de color de salida", "color_formato", [
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
                    onChange: (p) => x({ chequear_lineas: p.target.checked })
                  }
                ),
                r("Comprobación de líneas anómalas")
              ] }) }),
              d(
                "DPI de importación en Design Space",
                "dpi_importacion",
                72,
                600,
                1,
                "ppp"
              ),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
              c("Lienzo del archivo final", "lienzo", [
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
                      onClick: () => f(!0),
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
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: s.offset,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(yo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (p) => x({ offset_activo: p.target.checked })
                }
              ),
              r("Añadir borde a todos los elementos")
            ] }) }),
            e.offset_activo && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              d(
                "Grosor del borde",
                "offset_mm",
                0.1,
                20,
                0.1,
                "mm",
                void 0,
                "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar."
              ),
              c("Tipo de borde", "offset_modo", [
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
                      onChange: (p) => x({ offset_color: p.target.value })
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
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(zm, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: au(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: eu[e.maquina] ?? "Cricut Maker 3" }
              ),
              [eu[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            d("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            d("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            d("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            d("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      v && /* @__PURE__ */ i.jsxs(
        St,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(zd, { size: 15 }),
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
                  onChange: (p) => x({ historial: p.target.checked })
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              d("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (p) => x({ hist_tamano: p.target.checked })
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
                    onChange: (p) => x({ hist_copias: p.target.checked })
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
                    onChange: (p) => x({ hist_borde: p.target.checked })
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
                    onChange: (p) => x({ hist_minis: p.target.checked })
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
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(Pd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Oi.map((p) => /* @__PURE__ */ i.jsxs(
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
                  return (p = F.current) == null ? void 0 : p.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: F,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (p) => {
                      var S;
                      const w = (S = p.target.files) == null ? void 0 : S[0];
                      w && D.setIcon(w).then(() => {
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
        St,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: k,
          icon: /* @__PURE__ */ i.jsx(_d, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(m, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Volumen de la mascota") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    "data-testid": "set-mute",
                    className: `chip${e.mute ? " on" : ""}`,
                    onClick: () => x({ mute: !e.mute }),
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
                    onChange: (p) => x({ volumen: Number(p.target.value) })
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
                    onChange: (p) => x({ pikmin_activo: p.target.checked })
                  }
                ),
                r("Mostrar Pikmin de vez en cuando")
              ] }) }),
              d("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-pikmin-sonido",
                    checked: e.pikmin_sonido !== !1,
                    onChange: (p) => x({ pikmin_sonido: p.target.checked })
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
                    onChange: (p) => x({ pikmin_sonido_morir: p.target.checked })
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
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: au(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Md,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => f(!1),
        onPick: (p) => t({ carpeta_export: p })
      }
    )
  ] });
}
function ha(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Xm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: o = 0.5,
  mute: s = !1,
  onVolumen: u,
  onMute: l,
  onIdioma: f,
  onEasterEgg: h,
  onAyuda: g,
  onReportar: v
}) {
  var Y, et;
  const y = Ze(), k = Os(), [x, F] = j.useState([]), [m, d] = j.useState(0), [c, p] = j.useState(null), [w, S] = j.useState(!1), [_, P] = j.useState(""), C = j.useRef(!1), N = j.useRef([]);
  j.useEffect(() => {
    fetch("/api/funmsgs").then((I) => I.ok ? I.json() : { msgs: [] }).then((I) => F(I.msgs ?? [])).catch(() => {
    });
  }, []), j.useEffect(() => {
    let I = !0;
    return D.version().then((Z) => {
      I && (p(Z), !Z.comprobado && !C.current && (C.current = !0, D.checkVersion().then((me) => I && p(me)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      I = !1;
    };
  }, []);
  const $ = ((Y = c == null ? void 0 : c.actualizacion) == null ? void 0 : Y.estado) === "descargando" || ((et = c == null ? void 0 : c.actualizacion) == null ? void 0 : et.estado) === "instalando";
  j.useEffect(() => {
    if (!$) return;
    const I = setInterval(() => {
      D.version().then(p).catch(() => {
      });
    }, 700);
    return () => clearInterval(I);
  }, [$]);
  const K = a || !!(e && !e.done);
  j.useEffect(() => {
    if (!K) return;
    const I = setInterval(() => d((Z) => Z + 1), 1200);
    return () => clearInterval(I);
  }, [K]);
  const Q = x.length ? x : [
    y("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], J = j.useMemo(() => {
    if (_) return _;
    if ($) {
      const I = c == null ? void 0 : c.actualizacion;
      if ((I == null ? void 0 : I.estado) === "instalando") return y("Instalando y reiniciando…");
      const Z = (I == null ? void 0 : I.progreso) != null ? Math.round(I.progreso) : null;
      return Z != null ? y("Descargando… {p}%", { p: Z }) : (I == null ? void 0 : I.mensaje) || y("Descargando actualización…");
    }
    return K ? Q[m % Q.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? y("Listo") : y("Listo para empezar");
  }, [_, $, K, e, Q, m, n, y, c]), T = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), oe = j.useMemo(() => {
    const I = e == null ? void 0 : e.eta_s;
    if (!K || I === void 0 || I === null || I <= 0.5) return "";
    const Z = e == null ? void 0 : e.tope_s;
    return Z ? y(" · ~{x} restante (máx {y})", {
      x: ha(I),
      y: ha(Z)
    }) : y(" · {x} restante", { x: ha(I) });
  }, [e == null ? void 0 : e.eta_s, K, y]), Le = j.useMemo(() => !r || !r.segundos ? "" : ha(r.segundos), [r]), b = async () => {
    S(!0), P("");
    try {
      const I = await D.checkVersion();
      p(I), I.error ? P(y("Sin conexión")) : I.hay_nueva || P(y("Estás en la última versión"));
    } catch {
      P(y("Sin conexión"));
    } finally {
      S(!1);
    }
  }, O = async () => {
    P("");
    try {
      const I = await D.updateVersion();
      I.ok ? P(y("Instalando y reiniciando…")) : I.modo === "dev" && I.url ? (P(y("Modo desarrollo: se actualiza con git")), await D.openReleases().catch(() => {
      })) : P(I.mensaje || y("No se pudo actualizar")), D.version().then(p).catch(() => {
      });
    } catch {
      P(y("No se pudo actualizar"));
    }
  }, W = !!(c != null && c.hay_nueva && !K && !$) ? y("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: D.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: y("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const I = Date.now();
            N.current = [...N.current, I].filter((Z) => I - Z < 2500), N.current.length >= 5 && (N.current = [], P(y("¡Fiesta Pikmin!")), window.setTimeout(() => P(""), 4e3), h == null || h());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !K && (() => {
        const I = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), Z = n.placed || 1, me = Math.min(80, Math.max(
          30,
          48 + 22 * I - Math.min(18, Z * 0.08)
        )), Ee = n.efficiency * 100, tt = Ee >= me ? "buena" : Ee >= me * 0.72 ? "normal" : "baja";
        return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": y("Imágenes colocadas en las hojas"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.placed }),
            /* @__PURE__ */ i.jsx("span", { children: y("imágenes") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": y("Páginas que ocupa el trabajo"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.pages }),
            /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? y("páginas") : y("página") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": y("Copias pequeñas extra que rellenan huecos"), children: [
            /* @__PURE__ */ i.jsx("b", { children: n.minis }),
            /* @__PURE__ */ i.jsx("span", { children: y("minis") })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `stat-card eficiencia ${tt}`,
              "data-testid": "eficiencia-card",
              "data-nivel": tt,
              "data-tip": y("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: Z, e: Math.round(me) }),
              children: [
                /* @__PURE__ */ i.jsxs("b", { children: [
                  Math.round(Ee),
                  "%"
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: y("eficiencia") })
              ]
            }
          )
        ] });
      })(),
      !(n && n.pages > 0 && !K) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: J }),
      K && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, T)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          T,
          "%",
          oe
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: yt("/piensa.gif"),
            alt: "",
            title: y("Pensando…"),
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
          "data-tip": y("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ i.jsx(Om, { size: 15 }),
            " ",
            y("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info reportar",
          "data-testid": "btn-reportar",
          "data-tip": y("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ i.jsx(bd, { size: 15 }),
            " ",
            y("Reportar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          "data-tip": y("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ i.jsx(Fm, { size: 15 }),
            " ",
            y("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: y("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ i.jsx(Am, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: y("Idioma"),
          onClick: () => f == null ? void 0 : f(k === "es" ? "en" : "es"),
          children: k.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: y("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !$ && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: W || y("Hay una versión nueva"),
                onClick: O,
                children: /* @__PURE__ */ i.jsx(Im, { size: 14 })
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
                title: y("Comprobar versiones"),
                onClick: b,
                disabled: w,
                children: w ? "…" : /* @__PURE__ */ i.jsx($m, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: y("Descargar e instalar la nueva versión"),
                onClick: O,
                children: /* @__PURE__ */ i.jsx(Dm, { size: 14 })
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
          title: y(t ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: y("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            y("Corte"),
            " ",
            Le || "—"
          ]
        }
      )
    ] })
  ] });
}
const Zm = [
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
], eh = "/pikmin_bloom/", ou = "/pikmin/alma.png", th = "/sonidos/pikmin.mp3", nh = "/sonidos/pikmin_morir.mp3";
function rh(e) {
  const [t, n] = j.useState(Zm), [r, a] = j.useState([]);
  return j.useEffect(() => {
    fetch(yt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(yt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => yt(eh + u)));
    }).catch(() => {
    });
  }, []), j.useMemo(
    () => e && e.length ? [...e, ...r].map(yt) : [...t, ...r].map(yt),
    [e, t, r]
  );
}
function ah({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: s = !1,
  minDelay: u,
  maxDelay: l,
  fuentes: f
}) {
  const h = rh(f), [g, v] = j.useState([]), y = j.useRef(void 0), k = j.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), x = j.useRef(s);
  x.current = s;
  const F = Math.max(5e3, t * 6e4), m = (w) => {
    if (!(!n || o))
      try {
        const S = new Audio(yt(w ? nh : th));
        S.volume = Math.min(1, Math.max(0, a)), S.play().catch(() => {
        });
      } catch {
      }
  }, d = () => {
    const w = r && Math.random() < 0.25, S = w ? yt(ou) : h[Math.floor(Math.random() * h.length)] ?? yt(ou);
    v((_) => [..._, {
      src: S,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: w,
      estado: "paseando"
    }]), m(w);
  }, c = () => {
    if (!e) return;
    const w = u ?? Math.round(F * 0.5), S = l ?? Math.round(F * 1.5), _ = w + Math.random() * Math.max(1, S - w);
    y.current = window.setTimeout(d, _);
  };
  j.useEffect(() => {
    if (!e) {
      window.clearTimeout(y.current), v([]);
      return;
    }
    return c(), () => window.clearTimeout(y.current);
  }, [e, t, n, r, a, o, h]), j.useEffect(() => {
    const w = () => {
      k.current = document.visibilityState === "hidden", !k.current && x.current && window.setTimeout(() => {
        v((S) => S.length ? (m(!1), S.map((_) => ({ ..._, estado: "festejando" }))) : S), window.setTimeout(() => {
          v([]), c();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []);
  const p = (w) => {
    if (x.current && k.current) {
      v((S) => S.map((_) => _.key === w ? { ..._, estado: "quieto" } : _));
      return;
    }
    v((S) => S.filter((_) => _.key !== w)), c();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: g.map((w) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${w.estado}${w.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": w.estado,
      "data-morir": w.morir ? "1" : "0",
      style: { left: `${w.left}%` },
      onAnimationEnd: () => p(w.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: w.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => p(w.key)
        }
      )
    },
    w.key
  )) });
}
const iu = "crycat_bienvenida_v2";
function oh() {
  const [e, t] = j.useState(!1);
  return j.useEffect(() => {
    try {
      localStorage.getItem(iu) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(iu, "1");
    } catch {
    }
    t(!1);
  } };
}
function ih({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ze(), [a, o] = j.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(eo, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(Bi, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(eo, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(yo, { size: 18 }),
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
      /* @__PURE__ */ i.jsx(Ed, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(Bi, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Rm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(_d, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(wr, { size: 18 }),
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
  ], f = {
    inicio: r("Cómo usar CryCat"),
    detallada: r("Guía detallada: todo lo que puedes hacer"),
    cricut: r("Cómo usar tu PNG en Cricut Design Space")
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: f[a] }),
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((h, g) => /* @__PURE__ */ i.jsx("li", { children: h }, g)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([h, g, v], y) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: h }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: g }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: v })
      ] })
    ] }, y)) }),
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
const sh = "https://github.com/dhernandezgit/CryCat-Tool", lh = [
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
function uh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Ze(), [s, u] = j.useState(""), [l, f] = j.useState(""), [h, g] = j.useState(""), [v, y] = j.useState(!0), [k, x] = j.useState(!0), [F, m] = j.useState(!0), [d, c] = j.useState(!1);
  j.useEffect(() => {
    e && (D.version().then((C) => u(C.actual)).catch(() => {
    }), c(!1));
  }, [e]);
  const p = () => (globalThis.__crycatErrores ?? []).map(
    (N) => `- [${N.t}] ${N.msg} (${N.donde || "?"})`
  );
  if (!e) return null;
  const w = () => {
    var K, Q;
    const C = navigator.userAgent, N = !!globalThis.__crycatBase, $ = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${N ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${C}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((K = window.screen) == null ? void 0 : K.width) ?? "?"}x${((Q = window.screen) == null ? void 0 : Q.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && $.push(`- Elementos: ${a.pages} página(s)`), r && $.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), $.join(`
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
    const C = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      h.trim() || "1. …",
      ""
    ];
    v && C.push("### Entorno", w(), ""), k && n && C.push("### Ajustes", S(), "");
    const N = p();
    return F && N.length && C.push("### Errores recogidos", N.join(`
`), ""), C.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), C.join(`
`);
  }, P = () => {
    const C = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, N = `${sh}/issues/new?` + new URLSearchParams({
      title: C,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(N, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: lh.map(([C, N]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${C}`,
        onClick: () => f(($) => ($ ? $ + `
` : "") + N),
        children: o(C)
      },
      C
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
          onChange: (C) => f(C.target.value)
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
          value: h,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (C) => g(C.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: v,
          onChange: (C) => y(C.target.checked)
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
          checked: k,
          onChange: (C) => x(C.target.checked)
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
          checked: F,
          onChange: (C) => m(C.target.checked)
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

${h}

${_()}`
              ), c(!0);
            } catch {
            }
          },
          children: o(d ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: P, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function ch() {
  const [e, t] = j.useState([]), [n, r] = j.useState(null), [a, o] = j.useState(null), [s, u] = j.useState(null), [l, f] = j.useState(null), [h, g] = j.useState(null), [v, y] = j.useState(!0), [k, x] = j.useState(!1), [F, m] = j.useState(!1), [d, c] = j.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [p, w] = j.useState(33.3), [S, _] = j.useState(33.3), P = oh(), C = j.useRef(null), N = j.useRef(null);
  j.useEffect(() => {
    (async () => {
      try {
        const A = await D.getSettings();
        f(A.settings), tu(A.settings.tema), c((U) => ({
          ...U,
          guidesVisible: A.settings.ver_guias,
          eyeTransparent: A.settings.fondo_transparente
        })), t((await D.listAssets()).map(Or)), o(await D.result());
      } catch {
        y(!1);
      }
    })();
  }, []);
  const [$, K] = j.useState("");
  j.useEffect(() => {
    const A = (U) => K(String(U.detail || ""));
    return window.addEventListener("crycat:seleccion", A), () => window.removeEventListener("crycat:seleccion", A);
  }, []), j.useEffect(() => {
    const A = (U) => {
      const Oe = U.detail;
      w(Oe ? 19 : 33.3), _(Oe ? 62 : 33.3), c((rt) => ({ ...rt, hojaGirada: Oe }));
    };
    return window.addEventListener("crycat:disposicion", A), () => window.removeEventListener("crycat:disposicion", A);
  }, []), j.useEffect(() => {
    const A = setInterval(async () => {
      try {
        await D.health(), y(!0);
      } catch {
        y(!1);
      }
    }, 5e3);
    return () => clearInterval(A);
  }, []);
  const Q = j.useCallback(async () => {
    try {
      t((await D.listAssets()).map(Or)), o(await D.result());
      try {
        u(await D.estimate());
      } catch {
      }
    } catch {
      y(!1);
    }
  }, []), J = j.useCallback((A) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(async () => {
      try {
        const U = await D.job(A);
        g(U), U.done && (window.clearInterval(N.current), N.current = null, await Q(), U.status === "done" && window.setTimeout(() => g(null), 2500));
      } catch {
        window.clearInterval(N.current), N.current = null;
      }
    }, 300);
  }, []), T = j.useCallback(async () => {
    m(!0);
    try {
      const A = await D.optimize();
      g(A), J(A.id);
    } catch {
      y(!1);
    } finally {
      m(!1);
    }
  }, [J]), oe = j.useCallback(
    async (A) => {
      try {
        const U = await D.optimize(A, !0);
        g(U), J(U.id);
      } catch {
        y(!1);
      }
    },
    [J]
  ), Le = j.useCallback(() => {
    l && l.auto_recalcular === !1 || (C.current && window.clearTimeout(C.current), C.current = window.setTimeout(T, 400));
  }, [T, l]), b = j.useRef(null);
  j.useEffect(() => {
    b.current = Le;
  }, [Le]);
  const O = j.useRef(!1);
  j.useEffect(() => {
    if (!(!l || O.current)) {
      if (e.length > 0) {
        O.current = !0;
        return;
      }
      O.current = !0, D.crearDemo().then(async (A) => {
        A.ok && await Q();
      }).catch(() => {
      });
    }
  }, [l, e.length, Q]);
  const B = j.useCallback(
    async (A) => {
      f((U) => U && { ...U, ...A }), A.tema && tu(A.tema);
      try {
        const U = await D.putSettings(A);
        if (U.job)
          g(U.job), J(U.job.id);
        else
          try {
            u(await D.estimate());
          } catch {
          }
      } catch {
        y(!1);
      }
    },
    [J]
  ), W = j.useRef([]), Y = j.useRef([]), [et, I] = j.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), Z = (l == null ? void 0 : l.historial) !== !1, me = (l == null ? void 0 : l.historial_max) ?? 40, Ee = () => I({
    puedeDeshacer: W.current.length > 0,
    puedeRehacer: Y.current.length > 0
  }), tt = j.useCallback(() => {
    const A = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && A.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && A.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && A.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && A.push("mini_enabled", "mini_quota"), A;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), Rt = j.useCallback((A) => {
    const U = {};
    for (const Oe of tt()) U[Oe] = A[Oe];
    return U;
  }, [tt]), Qr = j.useCallback(() => {
    Z && (W.current = [...W.current, e].slice(-me), Y.current = [], Ee());
  }, [e, Z, me]), jn = j.useCallback(async () => {
    const A = W.current.pop();
    if (A) {
      Y.current = [...Y.current, e], t(A), Ee();
      for (const U of A)
        await D.patchAsset(U.id, Rt(U)).catch(() => {
        });
      await Q();
    }
  }, [e, Q, Rt]), nt = j.useCallback(async () => {
    const A = Y.current.pop();
    if (A) {
      W.current = [...W.current, e], t(A), Ee();
      for (const U of A)
        await D.patchAsset(U.id, Rt(U)).catch(() => {
        });
      await Q();
    }
  }, [e, Q, Rt]);
  j.useEffect(() => {
    const A = (U) => {
      if (!(U.ctrlKey || U.metaKey)) return;
      const rt = U.target;
      if (rt && (rt.tagName === "INPUT" || rt.tagName === "TEXTAREA" || rt.tagName === "SELECT" || rt.isContentEditable)) return;
      const At = U.key.toLowerCase();
      At === "z" && !U.shiftKey ? (U.preventDefault(), jn()) : (At === "y" || At === "z" && U.shiftKey) && (U.preventDefault(), nt());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [jn, nt]);
  const Yr = j.useCallback(
    (A) => {
      const U = (rt) => {
        const Kr = window.innerWidth, At = rt.clientX / Kr * 100;
        A === "left" ? w(Math.min(45, Math.max(12, At))) : _(Math.min(60, Math.max(20, At - p)));
      }, Oe = () => {
        window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", Oe);
      };
      window.addEventListener("mousemove", U), window.addEventListener("mouseup", Oe);
    },
    [p]
  );
  return j.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(km, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${p}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        qm,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await Q(), Le();
          },
          saveSettings: B,
          onEditarContorno: (A) => r(A),
          onAntesDeCambiar: Qr,
          verBordes: d.verBordes,
          contornoModo: d.contornoModo ?? "final",
          destacado: $
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Yr("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${S}%` }, children: /* @__PURE__ */ i.jsx(
        Gm,
        {
          assets: e,
          result: a,
          settings: l,
          ui: d,
          setUi: c,
          saveSettings: B,
          optimize: T,
          onRefresh: Q,
          onJob: (A) => {
            g(A), J(A.id);
          },
          onRecalc: oe,
          editando: n,
          onFinEdicion: async () => {
            r(null), await Q();
          },
          onDeshacer: jn,
          onRehacer: nt,
          puedeDeshacer: et.puedeDeshacer,
          puedeRehacer: et.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Yr("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Jm,
        {
          settings: l,
          assets: e,
          saveSettings: B
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Xm,
      {
        job: h,
        backendOk: v,
        result: a,
        estimate: s,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (A) => B({ volumen: A }),
        onMute: (A) => B({ mute: A }),
        onIdioma: (A) => B({ idioma: A }),
        onEasterEgg: () => B({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: P.abrir,
        onReportar: () => x(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      ah,
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
      ih,
      {
        open: P.visible,
        onClose: P.cerrar,
        onAbrirCarpeta: () => void D.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      uh,
      {
        open: k,
        onClose: () => x(!1),
        settings: l,
        job: h,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: Sm("es", "Cargando CryCat…") });
}
const Td = document.getElementById("root"), Ho = [
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
], Ui = 8, Pa = [];
globalThis.__crycatErrores = Pa;
const Ld = (e, t) => {
  Pa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Pa.length > 12 && Pa.shift();
};
window.addEventListener("error", (e) => Ld(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Ld(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let qi;
function su(e, t = !1) {
  window.clearTimeout(qi);
  const n = kd().colors;
  if (Td.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Ui}</div>
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
  let r = Math.floor(Math.random() * Ho.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Ho[r++ % Ho.length]);
  }, o = () => {
    a(), qi = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const ga = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Ui}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Ui * 100)}%`);
  }
};
let jr = null;
const Vi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, dh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function ph(e) {
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
    Vi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function fh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((g, v) => {
    s[v] = g;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [g, v] = await ph(l);
    u = g, s["content-type"] = v;
  } else l instanceof Blob ? u = Vi(await l.arrayBuffer()) : typeof l == "string" && (u = Vi(new TextEncoder().encode(l).buffer));
  const f = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(s)) + ", " + JSON.stringify(u) + ")", h = JSON.parse(await jr.runPythonAsync(f));
  return new Response(dh(h.body), {
    status: h.status || 200,
    headers: h.headers || { "content-type": "application/json" }
  });
}
function mh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && jr)
      try {
        return await fh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function hh() {
  try {
    if (su("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    jr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(ga), ga("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await jr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (n) => {
      const r = n.data;
      if (!r || r.tipo !== "api") return;
      const a = n.ports && n.ports[0];
      if (a)
        try {
          const o = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", s = await jr.runPythonAsync(o);
          a.postMessage(JSON.parse(s));
        } catch (o) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (o && o.message ? o.message : o))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, mh();
    try {
      const n = kd().key;
      n && n !== "wiwi" && await fetch(fn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    ga("Optimizando la muestra inicial…", 7);
    try {
      const n = await fetch(fn() + "api/assets").then((r) => r.json());
      Array.isArray(n) && n.length === 0 && await fetch(fn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    ga("Abriendo la aplicación…", 8), window.clearTimeout(qi), wd(Td).render(/* @__PURE__ */ i.jsx(ch, {}));
  } catch (e) {
    su("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
hh();
