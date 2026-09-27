var Js = { exports: {} }, Ua = {}, Xs = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr = Symbol.for("react.element"), Ld = Symbol.for("react.portal"), Rd = Symbol.for("react.fragment"), Id = Symbol.for("react.strict_mode"), Ad = Symbol.for("react.profiler"), Dd = Symbol.for("react.provider"), $d = Symbol.for("react.context"), Od = Symbol.for("react.forward_ref"), Fd = Symbol.for("react.suspense"), Bd = Symbol.for("react.memo"), Ud = Symbol.for("react.lazy"), Ll = Symbol.iterator;
function qd(e) {
  return e === null || typeof e != "object" ? null : (e = Ll && e[Ll] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Zs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, eu = Object.assign, tu = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = tu, this.updater = n || Zs;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nu() {
}
nu.prototype = Fn.prototype;
function Ti(e, t, n) {
  this.props = e, this.context = t, this.refs = tu, this.updater = n || Zs;
}
var Li = Ti.prototype = new nu();
Li.constructor = Ti;
eu(Li, Fn.prototype);
Li.isPureReactComponent = !0;
var Rl = Array.isArray, ru = Object.prototype.hasOwnProperty, Ri = { current: null }, au = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r, a = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) ru.call(t, r) && !au.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Rr, type: e, key: o, ref: l, props: a, _owner: Ri.current };
}
function Vd(e, t) {
  return { $$typeof: Rr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rr;
}
function Gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Il = /\/+/g;
function oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Gd("" + e.key) : t.toString(36);
}
function aa(e, t, n, r, a) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (o) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Rr:
        case Ld:
          l = !0;
      }
  }
  if (l) return l = e, a = a(l), e = r === "" ? "." + oo(l, 0) : r, Rl(a) ? (n = "", e != null && (n = e.replace(Il, "$&/") + "/"), aa(a, t, n, "", function(d) {
    return d;
  })) : a != null && (Ii(a) && (a = Vd(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Il, "$&/") + "/") + e)), t.push(a)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Rl(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + oo(o, u);
    l += aa(o, t, n, s, a);
  }
  else if (s = qd(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + oo(o, u++), l += aa(o, t, n, s, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Br(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return aa(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function Hd(e) {
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
var Ne = { current: null }, oa = { transition: null }, Wd = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: oa, ReactCurrentOwner: Ri };
function iu() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: Br, forEach: function(e, t, n) {
  Br(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Br(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Br(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ii(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Fn;
U.Fragment = Rd;
U.Profiler = Ad;
U.PureComponent = Ti;
U.StrictMode = Id;
U.Suspense = Fd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd;
U.act = iu;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = eu({}, e.props), a = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Ri.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ru.call(t, s) && !au.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Rr, type: e.type, key: a, ref: o, props: r, _owner: l };
};
U.createContext = function(e) {
  return e = { $$typeof: $d, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Dd, _context: e }, e.Consumer = e;
};
U.createElement = ou;
U.createFactory = function(e) {
  var t = ou.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Od, render: e };
};
U.isValidElement = Ii;
U.lazy = function(e) {
  return { $$typeof: Ud, _payload: { _status: -1, _result: e }, _init: Hd };
};
U.memo = function(e, t) {
  return { $$typeof: Bd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = oa.transition;
  oa.transition = {};
  try {
    e();
  } finally {
    oa.transition = t;
  }
};
U.unstable_act = iu;
U.useCallback = function(e, t) {
  return Ne.current.useCallback(e, t);
};
U.useContext = function(e) {
  return Ne.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return Ne.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return Ne.current.useEffect(e, t);
};
U.useId = function() {
  return Ne.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return Ne.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return Ne.current.useRef(e);
};
U.useState = function(e) {
  return Ne.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return Ne.current.useTransition();
};
U.version = "18.3.1";
Xs.exports = U;
var k = Xs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd = k, Yd = Symbol.for("react.element"), Kd = Symbol.for("react.fragment"), Jd = Object.prototype.hasOwnProperty, Xd = Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, n) {
  var r, a = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Jd.call(t, r) && !Zd.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Yd, type: e, key: o, ref: l, props: a, _owner: Xd.current };
}
Ua.Fragment = Kd;
Ua.jsx = lu;
Ua.jsxs = lu;
Js.exports = Ua;
var i = Js.exports, su = { exports: {} }, Be = {}, uu = { exports: {} }, cu = {};
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
      var G = F - 1 >>> 1, W = b[G];
      if (0 < a(W, O)) b[G] = O, b[F] = W, F = G;
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
      e: for (var G = 0, W = b.length, D = W >>> 1; G < D; ) {
        var Q = 2 * (G + 1) - 1, Pe = b[Q], qe = Q + 1, Je = b[qe];
        if (0 > a(Pe, F)) qe < W && 0 > a(Je, Pe) ? (b[G] = Je, b[qe] = F, G = qe) : (b[G] = Pe, b[Q] = F, G = Q);
        else if (qe < W && 0 > a(Je, F)) b[G] = Je, b[qe] = F, G = qe;
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
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], d = [], g = 1, x = null, p = 3, j = !1, N = !1, y = !1, A = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(b) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= b) r(d), O.sortIndex = O.expirationTime, t(s, O);
      else break;
      O = n(d);
    }
  }
  function h(b) {
    if (y = !1, f(b), !N) if (n(s) !== null) N = !0, je(w);
    else {
      var O = n(d);
      O !== null && ze(h, O.startTime - b);
    }
  }
  function w(b, O) {
    N = !1, y && (y = !1, m(z), z = -1), j = !0;
    var F = p;
    try {
      for (f(O), x = n(s); x !== null && (!(x.expirationTime > O) || b && !R()); ) {
        var G = x.callback;
        if (typeof G == "function") {
          x.callback = null, p = x.priorityLevel;
          var W = G(x.expirationTime <= O);
          O = e.unstable_now(), typeof W == "function" ? x.callback = W : x === n(s) && r(s), f(O);
        } else r(s);
        x = n(s);
      }
      if (x !== null) var D = !0;
      else {
        var Q = n(d);
        Q !== null && ze(h, Q.startTime - O), D = !1;
      }
      return D;
    } finally {
      x = null, p = F, j = !1;
    }
  }
  var C = !1, _ = null, z = -1, v = 5, S = -1;
  function R() {
    return !(e.unstable_now() - S < v);
  }
  function re() {
    if (_ !== null) {
      var b = e.unstable_now();
      S = b;
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
    c(re);
  };
  else if (typeof MessageChannel < "u") {
    var Ie = new MessageChannel(), ot = Ie.port2;
    Ie.port1.onmessage = re, le = function() {
      ot.postMessage(null);
    };
  } else le = function() {
    A(re, 0);
  };
  function je(b) {
    _ = b, C || (C = !0, le());
  }
  function ze(b, O) {
    z = A(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    N || j || (N = !0, je(w));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : v = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
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
    var G = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? G + F : G) : F = G, b) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = F + W, b = { id: g++, callback: O, priorityLevel: b, startTime: F, expirationTime: W, sortIndex: -1 }, F > G ? (b.sortIndex = F, t(d, b), n(s) === null && b === n(d) && (y ? (m(z), z = -1) : y = !0, ze(h, F - G))) : (b.sortIndex = W, t(s, b), N || j || (N = !0, je(w))), b;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(b) {
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
})(cu);
uu.exports = cu;
var ep = uu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp = k, Fe = ep;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var du = /* @__PURE__ */ new Set(), fr = {};
function dn(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) du.add(t[e]);
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ro = Object.prototype.hasOwnProperty, np = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Al = {}, Dl = {};
function rp(e) {
  return Ro.call(Dl, e) ? !0 : Ro.call(Al, e) ? !1 : np.test(e) ? Dl[e] = !0 : (Al[e] = !0, !1);
}
function ap(e, t, n, r) {
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
function op(e, t, n, r) {
  if (t === null || typeof t > "u" || ap(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, a, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ai = /[\-:]([a-z])/g;
function Di(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ai,
    Di
  );
  ge[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ai, Di);
  ge[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ai, Di);
  ge[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $i(e, t, n, r) {
  var a = ge.hasOwnProperty(t) ? ge[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (op(t, n, a, r) && (n = null), r || a === null ? rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ur = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Oi = Symbol.for("react.strict_mode"), Io = Symbol.for("react.profiler"), pu = Symbol.for("react.provider"), fu = Symbol.for("react.context"), Fi = Symbol.for("react.forward_ref"), Ao = Symbol.for("react.suspense"), Do = Symbol.for("react.suspense_list"), Bi = Symbol.for("react.memo"), Lt = Symbol.for("react.lazy"), mu = Symbol.for("react.offscreen"), $l = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object" ? null : (e = $l && e[$l] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, io;
function Jn(e) {
  if (io === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    io = t && t[1] || "";
  }
  return `
` + io + e;
}
var lo = !1;
function so(e, t) {
  if (!e || lo) return "";
  lo = !0;
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
`), l = a.length - 1, u = o.length - 1; 1 <= l && 0 <= u && a[l] !== o[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (a[l] !== o[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || a[l] !== o[u]) {
              var s = `
` + a[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    lo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function ip(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = so(e.type, !1), e;
    case 11:
      return e = so(e.type.render, !1), e;
    case 1:
      return e = so(e.type, !0), e;
    default:
      return "";
  }
}
function $o(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Io:
      return "Profiler";
    case Oi:
      return "StrictMode";
    case Ao:
      return "Suspense";
    case Do:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fu:
      return (e.displayName || "Context") + ".Consumer";
    case pu:
      return (e._context.displayName || "Context") + ".Provider";
    case Fi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Bi:
      return t = e.displayName || null, t !== null ? t : $o(e.type) || "Memo";
    case Lt:
      t = e._payload, e = e._init;
      try {
        return $o(e(t));
      } catch {
      }
  }
  return null;
}
function lp(e) {
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
      return $o(t);
    case 8:
      return t === Oi ? "StrictMode" : "Mode";
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
function Wt(e) {
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
function hu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sp(e) {
  var t = hu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function qr(e) {
  e._valueTracker || (e._valueTracker = sp(e));
}
function gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function va(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oo(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ol(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vu(e, t) {
  t = t.checked, t != null && $i(e, "checked", t, !1);
}
function Fo(e, t) {
  vu(e, t);
  var n = Wt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bo(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Fl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bo(e, t, n) {
  (t !== "number" || va(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function En(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Uo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function yu(e, t) {
  var n = Wt(t.value), r = Wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ul(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vr, wu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Vr = Vr || document.createElement("div"), Vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tr = {
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
}, up = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function(e) {
  up.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), tr[t] = tr[e];
  });
});
function ku(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || tr.hasOwnProperty(e) && tr[e] ? ("" + t).trim() : t + "px";
}
function ju(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = ku(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var cp = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vo(e, t) {
  if (t) {
    if (cp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Go(e, t) {
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
var Ho = null;
function Ui(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Wo = null, zn = null, Pn = null;
function ql(e) {
  if (e = Dr(e)) {
    if (typeof Wo != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Wa(t), Wo(e.stateNode, e.type, t));
  }
}
function Su(e) {
  zn ? Pn ? Pn.push(e) : Pn = [e] : zn = e;
}
function Cu() {
  if (zn) {
    var e = zn, t = Pn;
    if (Pn = zn = null, ql(e), t) for (e = 0; e < t.length; e++) ql(t[e]);
  }
}
function _u(e, t) {
  return e(t);
}
function Nu() {
}
var uo = !1;
function Eu(e, t, n) {
  if (uo) return e(t, n);
  uo = !0;
  try {
    return _u(e, t, n);
  } finally {
    uo = !1, (zn !== null || Pn !== null) && (Nu(), Cu());
  }
}
function hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wa(n);
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
var Qo = !1;
if (St) try {
  var Vn = {};
  Object.defineProperty(Vn, "passive", { get: function() {
    Qo = !0;
  } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
} catch {
  Qo = !1;
}
function dp(e, t, n, r, a, o, l, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var nr = !1, ya = null, xa = !1, Yo = null, pp = { onError: function(e) {
  nr = !0, ya = e;
} };
function fp(e, t, n, r, a, o, l, u, s) {
  nr = !1, ya = null, dp.apply(pp, arguments);
}
function mp(e, t, n, r, a, o, l, u, s) {
  if (fp.apply(this, arguments), nr) {
    if (nr) {
      var d = ya;
      nr = !1, ya = null;
    } else throw Error(E(198));
    xa || (xa = !0, Yo = d);
  }
}
function pn(e) {
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
function zu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vl(e) {
  if (pn(e) !== e) throw Error(E(188));
}
function hp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = pn(e), t === null) throw Error(E(188));
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
        if (o === n) return Vl(a), e;
        if (o === r) return Vl(a), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = a, r = o;
    else {
      for (var l = !1, u = a.child; u; ) {
        if (u === n) {
          l = !0, n = a, r = o;
          break;
        }
        if (u === r) {
          l = !0, r = a, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            l = !0, n = o, r = a;
            break;
          }
          if (u === r) {
            l = !0, r = o, n = a;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Pu(e) {
  return e = hp(e), e !== null ? bu(e) : null;
}
function bu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mu = Fe.unstable_scheduleCallback, Gl = Fe.unstable_cancelCallback, gp = Fe.unstable_shouldYield, vp = Fe.unstable_requestPaint, se = Fe.unstable_now, yp = Fe.unstable_getCurrentPriorityLevel, qi = Fe.unstable_ImmediatePriority, Tu = Fe.unstable_UserBlockingPriority, wa = Fe.unstable_NormalPriority, xp = Fe.unstable_LowPriority, Lu = Fe.unstable_IdlePriority, qa = null, dt = null;
function wp(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(qa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var nt = Math.clz32 ? Math.clz32 : Sp, kp = Math.log, jp = Math.LN2;
function Sp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (kp(e) / jp | 0) | 0;
}
var Gr = 64, Hr = 4194304;
function Zn(e) {
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
function ka(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~a;
    u !== 0 ? r = Zn(u) : (o &= l, o !== 0 && (r = Zn(o)));
  } else l = n & ~a, l !== 0 ? r = Zn(l) : o !== 0 && (r = Zn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - nt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Cp(e, t) {
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
function _p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - nt(o), u = 1 << l, s = a[l];
    s === -1 ? (!(u & n) || u & r) && (a[l] = Cp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ko(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ru() {
  var e = Gr;
  return Gr <<= 1, !(Gr & 4194240) && (Gr = 64), e;
}
function co(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
}
function Np(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - nt(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function Vi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var H = 0;
function Iu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Au, Gi, Du, $u, Ou, Jo = !1, Wr = [], Ot = null, Ft = null, Bt = null, gr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), It = [], Ep = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Dr(t), t !== null && Gi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function zp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Ot = Gn(Ot, e, t, n, r, a), !0;
    case "dragenter":
      return Ft = Gn(Ft, e, t, n, r, a), !0;
    case "mouseover":
      return Bt = Gn(Bt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return gr.set(o, Gn(gr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, vr.set(o, Gn(vr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Fu(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zu(n), t !== null) {
          e.blockedOn = t, Ou(e.priority, function() {
            Du(n);
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
function ia(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ho = r, n.target.dispatchEvent(r), Ho = null;
    } else return t = Dr(n), t !== null && Gi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Wl(e, t, n) {
  ia(e) && n.delete(t);
}
function Pp() {
  Jo = !1, Ot !== null && ia(Ot) && (Ot = null), Ft !== null && ia(Ft) && (Ft = null), Bt !== null && ia(Bt) && (Bt = null), gr.forEach(Wl), vr.forEach(Wl);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jo || (Jo = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Pp)));
}
function yr(e) {
  function t(a) {
    return Hn(a, e);
  }
  if (0 < Wr.length) {
    Hn(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ot !== null && Hn(Ot, e), Ft !== null && Hn(Ft, e), Bt !== null && Hn(Bt, e), gr.forEach(t), vr.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) Fu(n), n.blockedOn === null && It.shift();
}
var bn = Et.ReactCurrentBatchConfig, ja = !0;
function bp(e, t, n, r) {
  var a = H, o = bn.transition;
  bn.transition = null;
  try {
    H = 1, Hi(e, t, n, r);
  } finally {
    H = a, bn.transition = o;
  }
}
function Mp(e, t, n, r) {
  var a = H, o = bn.transition;
  bn.transition = null;
  try {
    H = 4, Hi(e, t, n, r);
  } finally {
    H = a, bn.transition = o;
  }
}
function Hi(e, t, n, r) {
  if (ja) {
    var a = Xo(e, t, n, r);
    if (a === null) ko(e, t, r, Sa, n), Hl(e, r);
    else if (zp(a, e, t, n, r)) r.stopPropagation();
    else if (Hl(e, r), t & 4 && -1 < Ep.indexOf(e)) {
      for (; a !== null; ) {
        var o = Dr(a);
        if (o !== null && Au(o), o = Xo(e, t, n, r), o === null && ko(e, t, r, Sa, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else ko(e, t, r, null, n);
  }
}
var Sa = null;
function Xo(e, t, n, r) {
  if (Sa = null, e = Ui(r), e = en(e), e !== null) if (t = pn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = zu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Sa = e, null;
}
function Bu(e) {
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
      switch (yp()) {
        case qi:
          return 1;
        case Tu:
          return 4;
        case wa:
        case xp:
          return 16;
        case Lu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null, Wi = null, la = null;
function Uu() {
  if (la) return la;
  var e, t = Wi, n = t.length, r, a = "value" in Dt ? Dt.value : Dt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[o - r]; r++) ;
  return la = a.slice(e, 1 < r ? 1 - r : void 0);
}
function sa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qr() {
  return !0;
}
function Ql() {
  return !1;
}
function Ue(e) {
  function t(n, r, a, o, l) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Qr : Ql, this.isPropagationStopped = Ql, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
  }, persist: function() {
  }, isPersistent: Qr }), t;
}
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Qi = Ue(Bn), Ar = ne({}, Bn, { view: 0, detail: 0 }), Tp = Ue(Ar), po, fo, Wn, Va = ne({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Wn && (Wn && e.type === "mousemove" ? (po = e.screenX - Wn.screenX, fo = e.screenY - Wn.screenY) : fo = po = 0, Wn = e), po);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : fo;
} }), Yl = Ue(Va), Lp = ne({}, Va, { dataTransfer: 0 }), Rp = Ue(Lp), Ip = ne({}, Ar, { relatedTarget: 0 }), mo = Ue(Ip), Ap = ne({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dp = Ue(Ap), $p = ne({}, Bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Op = Ue($p), Fp = ne({}, Bn, { data: 0 }), Kl = Ue(Fp), Bp = {
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
}, Up = {
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
}, qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Vp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qp[e]) ? !!t[e] : !1;
}
function Yi() {
  return Vp;
}
var Gp = ne({}, Ar, { key: function(e) {
  if (e.key) {
    var t = Bp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = sa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Up[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yi, charCode: function(e) {
  return e.type === "keypress" ? sa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? sa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Hp = Ue(Gp), Wp = ne({}, Va, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jl = Ue(Wp), Qp = ne({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yi }), Yp = Ue(Qp), Kp = ne({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = Ue(Kp), Xp = ne({}, Va, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zp = Ue(Xp), ef = [9, 13, 27, 32], Ki = St && "CompositionEvent" in window, rr = null;
St && "documentMode" in document && (rr = document.documentMode);
var tf = St && "TextEvent" in window && !rr, qu = St && (!Ki || rr && 8 < rr && 11 >= rr), Xl = " ", Zl = !1;
function Vu(e, t) {
  switch (e) {
    case "keyup":
      return ef.indexOf(t.keyCode) !== -1;
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
function Gu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vn = !1;
function nf(e, t) {
  switch (e) {
    case "compositionend":
      return Gu(t);
    case "keypress":
      return t.which !== 32 ? null : (Zl = !0, Xl);
    case "textInput":
      return e = t.data, e === Xl && Zl ? null : e;
    default:
      return null;
  }
}
function rf(e, t) {
  if (vn) return e === "compositionend" || !Ki && Vu(e, t) ? (e = Uu(), la = Wi = Dt = null, vn = !1, e) : null;
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
      return qu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var af = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!af[e.type] : t === "textarea";
}
function Hu(e, t, n, r) {
  Su(r), t = Ca(t, "onChange"), 0 < t.length && (n = new Qi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ar = null, xr = null;
function of(e) {
  rc(e, 0);
}
function Ga(e) {
  var t = wn(e);
  if (gu(t)) return e;
}
function lf(e, t) {
  if (e === "change") return t;
}
var Wu = !1;
if (St) {
  var ho;
  if (St) {
    var go = "oninput" in document;
    if (!go) {
      var ts = document.createElement("div");
      ts.setAttribute("oninput", "return;"), go = typeof ts.oninput == "function";
    }
    ho = go;
  } else ho = !1;
  Wu = ho && (!document.documentMode || 9 < document.documentMode);
}
function ns() {
  ar && (ar.detachEvent("onpropertychange", Qu), xr = ar = null);
}
function Qu(e) {
  if (e.propertyName === "value" && Ga(xr)) {
    var t = [];
    Hu(t, xr, e, Ui(e)), Eu(of, t);
  }
}
function sf(e, t, n) {
  e === "focusin" ? (ns(), ar = t, xr = n, ar.attachEvent("onpropertychange", Qu)) : e === "focusout" && ns();
}
function uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ga(xr);
}
function cf(e, t) {
  if (e === "click") return Ga(t);
}
function df(e, t) {
  if (e === "input" || e === "change") return Ga(t);
}
function pf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var at = typeof Object.is == "function" ? Object.is : pf;
function wr(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Ro.call(t, a) || !at(e[a], t[a])) return !1;
  }
  return !0;
}
function rs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function as(e, t) {
  var n = rs(e);
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
    n = rs(n);
  }
}
function Yu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ku() {
  for (var e = window, t = va(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = va(e.document);
  }
  return t;
}
function Ji(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ff(e) {
  var t = Ku(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ji(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = as(n, o);
        var l = as(
          n,
          r
        );
        a && l && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var mf = St && "documentMode" in document && 11 >= document.documentMode, yn = null, Zo = null, or = null, ei = !1;
function os(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ei || yn == null || yn !== va(r) || (r = yn, "selectionStart" in r && Ji(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && wr(or, r) || (or = r, r = Ca(Zo, "onSelect"), 0 < r.length && (t = new Qi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function Yr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xn = { animationend: Yr("Animation", "AnimationEnd"), animationiteration: Yr("Animation", "AnimationIteration"), animationstart: Yr("Animation", "AnimationStart"), transitionend: Yr("Transition", "TransitionEnd") }, vo = {}, Ju = {};
St && (Ju = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
function Ha(e) {
  if (vo[e]) return vo[e];
  if (!xn[e]) return e;
  var t = xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ju) return vo[e] = t[n];
  return e;
}
var Xu = Ha("animationend"), Zu = Ha("animationiteration"), ec = Ha("animationstart"), tc = Ha("transitionend"), nc = /* @__PURE__ */ new Map(), is = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Yt(e, t) {
  nc.set(e, t), dn(t, [e]);
}
for (var yo = 0; yo < is.length; yo++) {
  var xo = is[yo], hf = xo.toLowerCase(), gf = xo[0].toUpperCase() + xo.slice(1);
  Yt(hf, "on" + gf);
}
Yt(Xu, "onAnimationEnd");
Yt(Zu, "onAnimationIteration");
Yt(ec, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(tc, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function ls(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, mp(r, t, void 0, e), e.currentTarget = null;
}
function rc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, d = u.currentTarget;
        if (u = u.listener, s !== o && a.isPropagationStopped()) break e;
        ls(a, u, d), o = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, d = u.currentTarget, u = u.listener, s !== o && a.isPropagationStopped()) break e;
        ls(a, u, d), o = s;
      }
    }
  }
  if (xa) throw e = Yo, xa = !1, Yo = null, e;
}
function K(e, t) {
  var n = t[oi];
  n === void 0 && (n = t[oi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ac(t, e, 2, !1), n.add(r));
}
function wo(e, t, n) {
  var r = 0;
  t && (r |= 4), ac(n, e, r, t);
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[Kr]) {
    e[Kr] = !0, du.forEach(function(n) {
      n !== "selectionchange" && (vf.has(n) || wo(n, !1, e), wo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kr] || (t[Kr] = !0, wo("selectionchange", !1, t));
  }
}
function ac(e, t, n, r) {
  switch (Bu(t)) {
    case 1:
      var a = bp;
      break;
    case 4:
      a = Mp;
      break;
    default:
      a = Hi;
  }
  n = a.bind(null, t, n, e), a = void 0, !Qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function ko(e, t, n, r, a) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === a || u.nodeType === 8 && u.parentNode === a) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var s = l.tag;
        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === a || s.nodeType === 8 && s.parentNode === a)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = en(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = o = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Eu(function() {
    var d = o, g = Ui(n), x = [];
    e: {
      var p = nc.get(e);
      if (p !== void 0) {
        var j = Qi, N = e;
        switch (e) {
          case "keypress":
            if (sa(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Hp;
            break;
          case "focusin":
            N = "focus", j = mo;
            break;
          case "focusout":
            N = "blur", j = mo;
            break;
          case "beforeblur":
          case "afterblur":
            j = mo;
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
            j = Yl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Rp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Yp;
            break;
          case Xu:
          case Zu:
          case ec:
            j = Dp;
            break;
          case tc:
            j = Jp;
            break;
          case "scroll":
            j = Tp;
            break;
          case "wheel":
            j = Zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Jl;
        }
        var y = (t & 4) !== 0, A = !y && e === "scroll", m = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var h = f.stateNode;
          if (f.tag === 5 && h !== null && (f = h, m !== null && (h = hr(c, m), h != null && y.push(jr(c, h, f)))), A) break;
          c = c.return;
        }
        0 < y.length && (p = new j(p, N, null, n, g), x.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", p && n !== Ho && (N = n.relatedTarget || n.fromElement) && (en(N) || N[Ct])) break e;
        if ((j || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, j ? (N = n.relatedTarget || n.toElement, j = d, N = N ? en(N) : null, N !== null && (A = pn(N), N !== A || N.tag !== 5 && N.tag !== 6) && (N = null)) : (j = null, N = d), j !== N)) {
          if (y = Yl, h = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Jl, h = "onPointerLeave", m = "onPointerEnter", c = "pointer"), A = j == null ? p : wn(j), f = N == null ? p : wn(N), p = new y(h, c + "leave", j, n, g), p.target = A, p.relatedTarget = f, h = null, en(g) === d && (y = new y(m, c + "enter", N, n, g), y.target = f, y.relatedTarget = A, h = y), A = h, j && N) t: {
            for (y = j, m = N, c = 0, f = y; f; f = mn(f)) c++;
            for (f = 0, h = m; h; h = mn(h)) f++;
            for (; 0 < c - f; ) y = mn(y), c--;
            for (; 0 < f - c; ) m = mn(m), f--;
            for (; c--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = mn(y), m = mn(m);
            }
            y = null;
          }
          else y = null;
          j !== null && ss(x, p, j, y, !1), N !== null && A !== null && ss(x, A, N, y, !0);
        }
      }
      e: {
        if (p = d ? wn(d) : window, j = p.nodeName && p.nodeName.toLowerCase(), j === "select" || j === "input" && p.type === "file") var w = lf;
        else if (es(p)) if (Wu) w = df;
        else {
          w = uf;
          var C = sf;
        }
        else (j = p.nodeName) && j.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = cf);
        if (w && (w = w(e, d))) {
          Hu(x, w, n, g);
          break e;
        }
        C && C(e, p, d), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Bo(p, "number", p.value);
      }
      switch (C = d ? wn(d) : window, e) {
        case "focusin":
          (es(C) || C.contentEditable === "true") && (yn = C, Zo = d, or = null);
          break;
        case "focusout":
          or = Zo = yn = null;
          break;
        case "mousedown":
          ei = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ei = !1, os(x, n, g);
          break;
        case "selectionchange":
          if (mf) break;
        case "keydown":
        case "keyup":
          os(x, n, g);
      }
      var _;
      if (Ki) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else vn ? Vu(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (qu && n.locale !== "ko" && (vn || z !== "onCompositionStart" ? z === "onCompositionEnd" && vn && (_ = Uu()) : (Dt = g, Wi = "value" in Dt ? Dt.value : Dt.textContent, vn = !0)), C = Ca(d, z), 0 < C.length && (z = new Kl(z, e, null, n, g), x.push({ event: z, listeners: C }), _ ? z.data = _ : (_ = Gu(n), _ !== null && (z.data = _)))), (_ = tf ? nf(e, n) : rf(e, n)) && (d = Ca(d, "onBeforeInput"), 0 < d.length && (g = new Kl("onBeforeInput", "beforeinput", null, n, g), x.push({ event: g, listeners: d }), g.data = _));
    }
    rc(x, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = hr(e, n), o != null && r.unshift(jr(e, o, a)), o = hr(e, t), o != null && r.push(jr(e, o, a))), e = e.return;
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ss(e, t, n, r, a) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && d !== null && (u = d, a ? (s = hr(n, o), s != null && l.unshift(jr(n, s, u))) : a || (s = hr(n, o), s != null && l.push(jr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var yf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function us(e) {
  return (typeof e == "string" ? e : "" + e).replace(yf, `
`).replace(xf, "");
}
function Jr(e, t, n) {
  if (t = us(t), us(e) !== t && n) throw Error(E(425));
}
function _a() {
}
var ti = null, ni = null;
function ri(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ai = typeof setTimeout == "function" ? setTimeout : void 0, wf = typeof clearTimeout == "function" ? clearTimeout : void 0, cs = typeof Promise == "function" ? Promise : void 0, kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof cs < "u" ? function(e) {
  return cs.resolve(null).then(e).catch(jf);
} : ai;
function jf(e) {
  setTimeout(function() {
    throw e;
  });
}
function jo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), yr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  yr(t);
}
function Ut(e) {
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
function ds(e) {
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
var Un = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Un, Sr = "__reactProps$" + Un, Ct = "__reactContainer$" + Un, oi = "__reactEvents$" + Un, Sf = "__reactListeners$" + Un, Cf = "__reactHandles$" + Un;
function en(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ct] || n[ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ds(e); e !== null; ) {
        if (n = e[ct]) return n;
        e = ds(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Dr(e) {
  return e = e[ct] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Wa(e) {
  return e[Sr] || null;
}
var ii = [], kn = -1;
function Kt(e) {
  return { current: e };
}
function J(e) {
  0 > kn || (e.current = ii[kn], ii[kn] = null, kn--);
}
function Y(e, t) {
  kn++, ii[kn] = e.current, e.current = t;
}
var Qt = {}, ke = Kt(Qt), Te = Kt(!1), on = Qt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Le(e) {
  return e = e.childContextTypes, e != null;
}
function Na() {
  J(Te), J(ke);
}
function ps(e, t, n) {
  if (ke.current !== Qt) throw Error(E(168));
  Y(ke, t), Y(Te, n);
}
function oc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, lp(e) || "Unknown", a));
  return ne({}, n, r);
}
function Ea(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qt, on = ke.current, Y(ke, e), Y(Te, Te.current), !0;
}
function fs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = oc(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, J(Te), J(ke), Y(ke, e)) : J(Te), Y(Te, n);
}
var yt = null, Qa = !1, So = !1;
function ic(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function _f(e) {
  Qa = !0, ic(e);
}
function Jt() {
  if (!So && yt !== null) {
    So = !0;
    var e = 0, t = H;
    try {
      var n = yt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Qa = !1;
    } catch (a) {
      throw yt !== null && (yt = yt.slice(e + 1)), Mu(qi, Jt), a;
    } finally {
      H = t, So = !1;
    }
  }
  return null;
}
var jn = [], Sn = 0, za = null, Pa = 0, Ve = [], Ge = 0, ln = null, wt = 1, kt = "";
function Xt(e, t) {
  jn[Sn++] = Pa, jn[Sn++] = za, za = e, Pa = t;
}
function lc(e, t, n) {
  Ve[Ge++] = wt, Ve[Ge++] = kt, Ve[Ge++] = ln, ln = e;
  var r = wt;
  e = kt;
  var a = 32 - nt(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - nt(t) + a;
  if (30 < o) {
    var l = a - a % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, wt = 1 << 32 - nt(t) + a | n << a | r, kt = o + e;
  } else wt = 1 << o | n << a | r, kt = e;
}
function Xi(e) {
  e.return !== null && (Xt(e, 1), lc(e, 1, 0));
}
function Zi(e) {
  for (; e === za; ) za = jn[--Sn], jn[Sn] = null, Pa = jn[--Sn], jn[Sn] = null;
  for (; e === ln; ) ln = Ve[--Ge], Ve[Ge] = null, kt = Ve[--Ge], Ve[Ge] = null, wt = Ve[--Ge], Ve[Ge] = null;
}
var Oe = null, $e = null, X = !1, tt = null;
function sc(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ms(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = Ut(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: wt, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function li(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function si(e) {
  if (X) {
    var t = $e;
    if (t) {
      var n = t;
      if (!ms(e, t)) {
        if (li(e)) throw Error(E(418));
        t = Ut(n.nextSibling);
        var r = Oe;
        t && ms(e, t) ? sc(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Oe = e);
      }
    } else {
      if (li(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, X = !1, Oe = e;
    }
  }
}
function hs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function Xr(e) {
  if (e !== Oe) return !1;
  if (!X) return hs(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ri(e.type, e.memoizedProps)), t && (t = $e)) {
    if (li(e)) throw uc(), Error(E(418));
    for (; t; ) sc(e, t), t = Ut(t.nextSibling);
  }
  if (hs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Oe ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function uc() {
  for (var e = $e; e; ) e = Ut(e.nextSibling);
}
function In() {
  $e = Oe = null, X = !1;
}
function el(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var Nf = Et.ReactCurrentBatchConfig;
function Qn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = a.refs;
        l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function cc(e) {
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
    return m = Ht(m, c), m.index = 0, m.sibling = null, m;
  }
  function o(m, c, f) {
    return m.index = f, e ? (f = m.alternate, f !== null ? (f = f.index, f < c ? (m.flags |= 2, c) : f) : (m.flags |= 2, c)) : (m.flags |= 1048576, c);
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, c, f, h) {
    return c === null || c.tag !== 6 ? (c = bo(f, m.mode, h), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function s(m, c, f, h) {
    var w = f.type;
    return w === gn ? g(m, c, f.props.children, h, f.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Lt && gs(w) === c.type) ? (h = a(c, f.props), h.ref = Qn(m, c, f), h.return = m, h) : (h = ha(f.type, f.key, f.props, null, m.mode, h), h.ref = Qn(m, c, f), h.return = m, h);
  }
  function d(m, c, f, h) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Mo(f, m.mode, h), c.return = m, c) : (c = a(c, f.children || []), c.return = m, c);
  }
  function g(m, c, f, h, w) {
    return c === null || c.tag !== 7 ? (c = an(f, m.mode, h, w), c.return = m, c) : (c = a(c, f), c.return = m, c);
  }
  function x(m, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = bo("" + c, m.mode, f), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ur:
          return f = ha(c.type, c.key, c.props, null, m.mode, f), f.ref = Qn(m, null, c), f.return = m, f;
        case hn:
          return c = Mo(c, m.mode, f), c.return = m, c;
        case Lt:
          var h = c._init;
          return x(m, h(c._payload), f);
      }
      if (Xn(c) || qn(c)) return c = an(c, m.mode, f, null), c.return = m, c;
      Zr(m, c);
    }
    return null;
  }
  function p(m, c, f, h) {
    var w = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return w !== null ? null : u(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ur:
          return f.key === w ? s(m, c, f, h) : null;
        case hn:
          return f.key === w ? d(m, c, f, h) : null;
        case Lt:
          return w = f._init, p(
            m,
            c,
            w(f._payload),
            h
          );
      }
      if (Xn(f) || qn(f)) return w !== null ? null : g(m, c, f, h, null);
      Zr(m, f);
    }
    return null;
  }
  function j(m, c, f, h, w) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(f) || null, u(c, m, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ur:
          return m = m.get(h.key === null ? f : h.key) || null, s(c, m, h, w);
        case hn:
          return m = m.get(h.key === null ? f : h.key) || null, d(c, m, h, w);
        case Lt:
          var C = h._init;
          return j(m, c, f, C(h._payload), w);
      }
      if (Xn(h) || qn(h)) return m = m.get(f) || null, g(c, m, h, w, null);
      Zr(c, h);
    }
    return null;
  }
  function N(m, c, f, h) {
    for (var w = null, C = null, _ = c, z = c = 0, v = null; _ !== null && z < f.length; z++) {
      _.index > z ? (v = _, _ = null) : v = _.sibling;
      var S = p(m, _, f[z], h);
      if (S === null) {
        _ === null && (_ = v);
        break;
      }
      e && _ && S.alternate === null && t(m, _), c = o(S, c, z), C === null ? w = S : C.sibling = S, C = S, _ = v;
    }
    if (z === f.length) return n(m, _), X && Xt(m, z), w;
    if (_ === null) {
      for (; z < f.length; z++) _ = x(m, f[z], h), _ !== null && (c = o(_, c, z), C === null ? w = _ : C.sibling = _, C = _);
      return X && Xt(m, z), w;
    }
    for (_ = r(m, _); z < f.length; z++) v = j(_, m, z, f[z], h), v !== null && (e && v.alternate !== null && _.delete(v.key === null ? z : v.key), c = o(v, c, z), C === null ? w = v : C.sibling = v, C = v);
    return e && _.forEach(function(R) {
      return t(m, R);
    }), X && Xt(m, z), w;
  }
  function y(m, c, f, h) {
    var w = qn(f);
    if (typeof w != "function") throw Error(E(150));
    if (f = w.call(f), f == null) throw Error(E(151));
    for (var C = w = null, _ = c, z = c = 0, v = null, S = f.next(); _ !== null && !S.done; z++, S = f.next()) {
      _.index > z ? (v = _, _ = null) : v = _.sibling;
      var R = p(m, _, S.value, h);
      if (R === null) {
        _ === null && (_ = v);
        break;
      }
      e && _ && R.alternate === null && t(m, _), c = o(R, c, z), C === null ? w = R : C.sibling = R, C = R, _ = v;
    }
    if (S.done) return n(
      m,
      _
    ), X && Xt(m, z), w;
    if (_ === null) {
      for (; !S.done; z++, S = f.next()) S = x(m, S.value, h), S !== null && (c = o(S, c, z), C === null ? w = S : C.sibling = S, C = S);
      return X && Xt(m, z), w;
    }
    for (_ = r(m, _); !S.done; z++, S = f.next()) S = j(_, m, z, S.value, h), S !== null && (e && S.alternate !== null && _.delete(S.key === null ? z : S.key), c = o(S, c, z), C === null ? w = S : C.sibling = S, C = S);
    return e && _.forEach(function(re) {
      return t(m, re);
    }), X && Xt(m, z), w;
  }
  function A(m, c, f, h) {
    if (typeof f == "object" && f !== null && f.type === gn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ur:
          e: {
            for (var w = f.key, C = c; C !== null; ) {
              if (C.key === w) {
                if (w = f.type, w === gn) {
                  if (C.tag === 7) {
                    n(m, C.sibling), c = a(C, f.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (C.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Lt && gs(w) === C.type) {
                  n(m, C.sibling), c = a(C, f.props), c.ref = Qn(m, C, f), c.return = m, m = c;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            f.type === gn ? (c = an(f.props.children, m.mode, h, f.key), c.return = m, m = c) : (h = ha(f.type, f.key, f.props, null, m.mode, h), h.ref = Qn(m, c, f), h.return = m, m = h);
          }
          return l(m);
        case hn:
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
            c = Mo(f, m.mode, h), c.return = m, m = c;
          }
          return l(m);
        case Lt:
          return C = f._init, A(m, c, C(f._payload), h);
      }
      if (Xn(f)) return N(m, c, f, h);
      if (qn(f)) return y(m, c, f, h);
      Zr(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, f), c.return = m, m = c) : (n(m, c), c = bo(f, m.mode, h), c.return = m, m = c), l(m)) : n(m, c);
  }
  return A;
}
var An = cc(!0), dc = cc(!1), ba = Kt(null), Ma = null, Cn = null, tl = null;
function nl() {
  tl = Cn = Ma = null;
}
function rl(e) {
  var t = ba.current;
  J(ba), e._currentValue = t;
}
function ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mn(e, t) {
  Ma = e, tl = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (tl !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
    if (Ma === null) throw Error(E(308));
    Cn = e, Ma.dependencies = { lanes: 0, firstContext: e };
  } else Cn = Cn.next = e;
  return t;
}
var tn = null;
function al(e) {
  tn === null ? tn = [e] : tn.push(e);
}
function pc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, al(t)) : (n.next = a.next, a.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function ol(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, _t(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, al(r)) : (t.next = a.next, a.next = t), r.interleaved = t, _t(e, n);
}
function ua(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vi(e, n);
  }
}
function vs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? a = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? a = o = t : o = o.next = t;
    } else a = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ta(e, t, n, r) {
  var a = e.updateQueue;
  Rt = !1;
  var o = a.firstBaseUpdate, l = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, d = s.next;
    s.next = null, l === null ? o = d : l.next = d, l = s;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== l && (u === null ? g.firstBaseUpdate = d : u.next = d, g.lastBaseUpdate = s));
  }
  if (o !== null) {
    var x = a.baseState;
    l = 0, g = d = s = null, u = o;
    do {
      var p = u.lane, j = u.eventTime;
      if ((r & p) === p) {
        g !== null && (g = g.next = {
          eventTime: j,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var N = e, y = u;
          switch (p = t, j = n, y.tag) {
            case 1:
              if (N = y.payload, typeof N == "function") {
                x = N.call(j, x, p);
                break e;
              }
              x = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = y.payload, p = typeof N == "function" ? N.call(j, x, p) : N, p == null) break e;
              x = ne({}, x, p);
              break e;
            case 2:
              Rt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [u] : p.push(u));
      } else j = { eventTime: j, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (d = g = j, s = x) : g = g.next = j, l |= p;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (s = x), a.baseState = s, a.firstBaseUpdate = d, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        l |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    un |= l, e.lanes = l, e.memoizedState = x;
  }
}
function ys(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var $r = {}, pt = Kt($r), Cr = Kt($r), _r = Kt($r);
function nn(e) {
  if (e === $r) throw Error(E(174));
  return e;
}
function il(e, t) {
  switch (Y(_r, t), Y(Cr, e), Y(pt, $r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qo(t, e);
  }
  J(pt), Y(pt, t);
}
function Dn() {
  J(pt), J(Cr), J(_r);
}
function mc(e) {
  nn(_r.current);
  var t = nn(pt.current), n = qo(t, e.type);
  t !== n && (Y(Cr, e), Y(pt, n));
}
function ll(e) {
  Cr.current === e && (J(pt), J(Cr));
}
var ee = Kt(0);
function La(e) {
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
var Co = [];
function sl() {
  for (var e = 0; e < Co.length; e++) Co[e]._workInProgressVersionPrimary = null;
  Co.length = 0;
}
var ca = Et.ReactCurrentDispatcher, _o = Et.ReactCurrentBatchConfig, sn = 0, te = null, ce = null, pe = null, Ra = !1, ir = !1, Nr = 0, Ef = 0;
function ye() {
  throw Error(E(321));
}
function ul(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
  return !0;
}
function cl(e, t, n, r, a, o) {
  if (sn = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ca.current = e === null || e.memoizedState === null ? Mf : Tf, e = n(r, a), ir) {
    o = 0;
    do {
      if (ir = !1, Nr = 0, 25 <= o) throw Error(E(301));
      o += 1, pe = ce = null, t.updateQueue = null, ca.current = Lf, e = n(r, a);
    } while (ir);
  }
  if (ca.current = Ia, t = ce !== null && ce.next !== null, sn = 0, pe = ce = te = null, Ra = !1, t) throw Error(E(300));
  return e;
}
function dl() {
  var e = Nr !== 0;
  return Nr = 0, e;
}
function ut() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? te.memoizedState = pe = e : pe = pe.next = e, pe;
}
function Ye() {
  if (ce === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = pe === null ? te.memoizedState : pe.next;
  if (t !== null) pe = t, ce = e;
  else {
    if (e === null) throw Error(E(310));
    ce = e, e = { memoizedState: ce.memoizedState, baseState: ce.baseState, baseQueue: ce.baseQueue, queue: ce.queue, next: null }, pe === null ? te.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function No(e) {
  var t = Ye(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ce, a = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var l = a.next;
      a.next = o.next, o.next = l;
    }
    r.baseQueue = a = o, n.pending = null;
  }
  if (a !== null) {
    o = a.next, r = r.baseState;
    var u = l = null, s = null, d = o;
    do {
      var g = d.lane;
      if ((sn & g) === g) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var x = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        s === null ? (u = s = x, l = r) : s = s.next = x, te.lanes |= g, un |= g;
      }
      d = d.next;
    } while (d !== null && d !== o);
    s === null ? l = r : s.next = u, at(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, te.lanes |= o, un |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Eo(e) {
  var t = Ye(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var l = a = a.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== a);
    at(o, t.memoizedState) || (Me = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function hc() {
}
function gc(e, t) {
  var n = te, r = Ye(), a = t(), o = !at(r.memoizedState, a);
  if (o && (r.memoizedState = a, Me = !0), r = r.queue, pl(xc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pe !== null && pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, zr(9, yc.bind(null, n, r, a, t), void 0, null), fe === null) throw Error(E(349));
    sn & 30 || vc(n, t, a);
  }
  return a;
}
function vc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function yc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wc(t) && kc(e);
}
function xc(e, t, n) {
  return n(function() {
    wc(t) && kc(e);
  });
}
function wc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function kc(e) {
  var t = _t(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function xs(e) {
  var t = ut();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Er, lastRenderedState: e }, t.queue = e, e = e.dispatch = bf.bind(null, te, e), [t.memoizedState, e];
}
function zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function jc() {
  return Ye().memoizedState;
}
function da(e, t, n, r) {
  var a = ut();
  te.flags |= e, a.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ya(e, t, n, r) {
  var a = Ye();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var l = ce.memoizedState;
    if (o = l.destroy, r !== null && ul(r, l.deps)) {
      a.memoizedState = zr(t, n, o, r);
      return;
    }
  }
  te.flags |= e, a.memoizedState = zr(1 | t, n, o, r);
}
function ws(e, t) {
  return da(8390656, 8, e, t);
}
function pl(e, t) {
  return Ya(2048, 8, e, t);
}
function Sc(e, t) {
  return Ya(4, 2, e, t);
}
function Cc(e, t) {
  return Ya(4, 4, e, t);
}
function _c(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Nc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ya(4, 4, _c.bind(null, t, e), n);
}
function fl() {
}
function Ec(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pc(e, t, n) {
  return sn & 21 ? (at(n, t) || (n = Ru(), te.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n);
}
function zf(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = _o.transition;
  _o.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, _o.transition = r;
  }
}
function bc() {
  return Ye().memoizedState;
}
function Pf(e, t, n) {
  var r = Gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mc(e)) Tc(t, n);
  else if (n = pc(e, t, n, r), n !== null) {
    var a = _e();
    rt(n, e, r, a), Lc(n, t, r);
  }
}
function bf(e, t, n) {
  var r = Gt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mc(e)) Tc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, u = o(l, n);
      if (a.hasEagerState = !0, a.eagerState = u, at(u, l)) {
        var s = t.interleaved;
        s === null ? (a.next = a, al(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = pc(e, t, a, r), n !== null && (a = _e(), rt(n, e, r, a), Lc(n, t, r));
  }
}
function Mc(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function Tc(e, t) {
  ir = Ra = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vi(e, n);
  }
}
var Ia = { readContext: Qe, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Mf = { readContext: Qe, useCallback: function(e, t) {
  return ut().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: ws, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, da(
    4194308,
    4,
    _c.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return da(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return da(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ut();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ut();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pf.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ut();
  return e = { current: e }, t.memoizedState = e;
}, useState: xs, useDebugValue: fl, useDeferredValue: function(e) {
  return ut().memoizedState = e;
}, useTransition: function() {
  var e = xs(!1), t = e[0];
  return e = zf.bind(null, e[1]), ut().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, a = ut();
  if (X) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(E(349));
    sn & 30 || vc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, ws(xc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, zr(9, yc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ut(), t = fe.identifierPrefix;
  if (X) {
    var n = kt, r = wt;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ef++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Tf = {
  readContext: Qe,
  useCallback: Ec,
  useContext: Qe,
  useEffect: pl,
  useImperativeHandle: Nc,
  useInsertionEffect: Sc,
  useLayoutEffect: Cc,
  useMemo: zc,
  useReducer: No,
  useRef: jc,
  useState: function() {
    return No(Er);
  },
  useDebugValue: fl,
  useDeferredValue: function(e) {
    var t = Ye();
    return Pc(t, ce.memoizedState, e);
  },
  useTransition: function() {
    var e = No(Er)[0], t = Ye().memoizedState;
    return [e, t];
  },
  useMutableSource: hc,
  useSyncExternalStore: gc,
  useId: bc,
  unstable_isNewReconciler: !1
}, Lf = { readContext: Qe, useCallback: Ec, useContext: Qe, useEffect: pl, useImperativeHandle: Nc, useInsertionEffect: Sc, useLayoutEffect: Cc, useMemo: zc, useReducer: Eo, useRef: jc, useState: function() {
  return Eo(Er);
}, useDebugValue: fl, useDeferredValue: function(e) {
  var t = Ye();
  return ce === null ? t.memoizedState = e : Pc(t, ce.memoizedState, e);
}, useTransition: function() {
  var e = Eo(Er)[0], t = Ye().memoizedState;
  return [e, t];
}, useMutableSource: hc, useSyncExternalStore: gc, useId: bc, unstable_isNewReconciler: !1 };
function Ze(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ci(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ka = { isMounted: function(e) {
  return (e = e._reactInternals) ? pn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), a = Gt(e), o = jt(r, a);
  o.payload = t, n != null && (o.callback = n), t = qt(e, o, a), t !== null && (rt(t, e, a, r), ua(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), a = Gt(e), o = jt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qt(e, o, a), t !== null && (rt(t, e, a, r), ua(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = Gt(e), a = jt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = qt(e, a, r), t !== null && (rt(t, e, r, n), ua(t, e, r));
} };
function ks(e, t, n, r, a, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(a, o) : !0;
}
function Rc(e, t, n) {
  var r = !1, a = Qt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Qe(o) : (a = Le(t) ? on : ke.current, r = t.contextTypes, o = (r = r != null) ? Rn(e, a) : Qt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ka, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function js(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ka.enqueueReplaceState(t, t.state, null);
}
function di(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, ol(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Qe(o) : (o = Le(t) ? on : ke.current, a.context = Rn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ci(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Ka.enqueueReplaceState(a, a.state, null), Ta(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += ip(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function zo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Rf = typeof WeakMap == "function" ? WeakMap : Map;
function Ic(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Da || (Da = !0, ji = r), pi(e, t);
  }, n;
}
function Ac(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      pi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    pi(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Qf.bind(null, e, t, n), t.then(e, e));
}
function Cs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _s(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e);
}
var If = Et.ReactCurrentOwner, Me = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? dc(t, null, n, r) : An(t, e.child, n, r);
}
function Ns(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Mn(t, a), r = cl(e, t, n, r, o, a), n = dl(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Nt(e, t, a)) : (X && n && Xi(t), t.flags |= 1, Ce(e, t, r, a), t.child);
}
function Es(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !kl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Dc(e, t, o, r, a)) : (e = ha(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(l, r) && e.ref === t.ref) return Nt(e, t, a);
  }
  return t.flags |= 1, e = Ht(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Dc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Me = !0);
    else return t.lanes = e.lanes, Nt(e, t, a);
  }
  return fi(e, t, n, r, a);
}
function $c(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Nn, De), De |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Nn, De), De |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Y(Nn, De), De |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Y(Nn, De), De |= r;
  return Ce(e, t, a, n), t.child;
}
function Oc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function fi(e, t, n, r, a) {
  var o = Le(n) ? on : ke.current;
  return o = Rn(t, o), Mn(t, a), n = cl(e, t, n, r, o, a), r = dl(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Nt(e, t, a)) : (X && r && Xi(t), t.flags |= 1, Ce(e, t, n, a), t.child);
}
function zs(e, t, n, r, a) {
  if (Le(n)) {
    var o = !0;
    Ea(t);
  } else o = !1;
  if (Mn(t, a), t.stateNode === null) pa(e, t), Rc(t, n, r), di(t, n, r, a), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Qe(d) : (d = Le(n) ? on : ke.current, d = Rn(t, d));
    var g = n.getDerivedStateFromProps, x = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    x || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== d) && js(t, l, r, d), Rt = !1;
    var p = t.memoizedState;
    l.state = p, Ta(t, r, l, a), s = t.memoizedState, u !== r || p !== s || Te.current || Rt ? (typeof g == "function" && (ci(t, n, g, r), s = t.memoizedState), (u = Rt || ks(t, n, u, r, p, s, d)) ? (x || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = d, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, fc(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Ze(t.type, u), l.props = d, x = t.pendingProps, p = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Qe(s) : (s = Le(n) ? on : ke.current, s = Rn(t, s));
    var j = n.getDerivedStateFromProps;
    (g = typeof j == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== x || p !== s) && js(t, l, r, s), Rt = !1, p = t.memoizedState, l.state = p, Ta(t, r, l, a);
    var N = t.memoizedState;
    u !== x || p !== N || Te.current || Rt ? (typeof j == "function" && (ci(t, n, j, r), N = t.memoizedState), (d = Rt || ks(t, n, d, r, p, N, s) || !1) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, N, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, N, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), l.props = r, l.state = N, l.context = s, r = d) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return mi(e, t, n, r, o, a);
}
function mi(e, t, n, r, a, o) {
  Oc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && fs(t, n, !1), Nt(e, t, o);
  r = t.stateNode, If.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = An(t, e.child, null, o), t.child = An(t, null, u, o)) : Ce(e, t, u, o), t.memoizedState = r.state, a && fs(t, n, !0), t.child;
}
function Fc(e) {
  var t = e.stateNode;
  t.pendingContext ? ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ps(e, t.context, !1), il(e, t.containerInfo);
}
function Ps(e, t, n, r, a) {
  return In(), el(a), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var hi = { dehydrated: null, treeContext: null, retryLane: 0 };
function gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bc(e, t, n) {
  var r = t.pendingProps, a = ee.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Y(ee, a & 1), e === null)
    return si(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Za(l, r, 0, null), e = an(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = gi(n), t.memoizedState = hi, e) : ml(t, l));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Af(e, t, l, r, u, a, n);
  if (o) {
    o = r.fallback, l = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ht(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = Ht(u, o) : (o = an(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? gi(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = hi, r;
  }
  return o = e.child, e = o.sibling, r = Ht(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ml(e, t) {
  return t = Za({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ea(e, t, n, r) {
  return r !== null && el(r), An(t, e.child, null, n), e = ml(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Af(e, t, n, r, a, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = zo(Error(E(422))), ea(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Za({ mode: "visible", children: r.children }, a, 0, null), o = an(o, a, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && An(t, e.child, null, l), t.child.memoizedState = gi(l), t.memoizedState = hi, o);
  if (!(t.mode & 1)) return ea(e, t, l, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(E(419)), r = zo(o, r, void 0), ea(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Me || u) {
    if (r = fe, r !== null) {
      switch (l & -l) {
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
      a = a & (r.suspendedLanes | l) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, _t(e, a), rt(r, e, a, -1));
    }
    return wl(), r = zo(Error(E(421))), ea(e, t, l, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yf.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, $e = Ut(a.nextSibling), Oe = t, X = !0, tt = null, e !== null && (Ve[Ge++] = wt, Ve[Ge++] = kt, Ve[Ge++] = ln, wt = e.id, kt = e.overflow, ln = t), t = ml(t, r.children), t.flags |= 4096, t);
}
function bs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ui(e.return, t, n);
}
function Po(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Uc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Ce(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && bs(e, n, t);
      else if (e.tag === 19) bs(e, n, t);
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
  if (Y(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && La(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Po(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && La(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Po(t, !0, n, null, o);
      break;
    case "together":
      Po(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function pa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ht(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Df(e, t, n) {
  switch (t.tag) {
    case 3:
      Fc(t), In();
      break;
    case 5:
      mc(t);
      break;
    case 1:
      Le(t.type) && Ea(t);
      break;
    case 4:
      il(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      Y(ba, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bc(e, t, n) : (Y(ee, ee.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Uc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $c(e, t, n);
  }
  return Nt(e, t, n);
}
var qc, vi, Vc, Gc;
qc = function(e, t) {
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
vi = function() {
};
Vc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, nn(pt.current);
    var o = null;
    switch (n) {
      case "input":
        a = Oo(e, a), r = Oo(e, r), o = [];
        break;
      case "select":
        a = ne({}, a, { value: void 0 }), r = ne({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = Uo(e, a), r = Uo(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _a);
    }
    Vo(n, r);
    var l;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var u = a[d];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (fr.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (u = a != null ? a[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = s;
      else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (fr.hasOwnProperty(d) ? (s != null && d === "onScroll" && K("scroll", e), o || u === s || (o = [])) : (o = o || []).push(d, s));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Gc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yn(e, t) {
  if (!X) switch (e.tailMode) {
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $f(e, t, n) {
  var r = t.pendingProps;
  switch (Zi(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return Le(t.type) && Na(), xe(t), null;
    case 3:
      return r = t.stateNode, Dn(), J(Te), J(ke), sl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (_i(tt), tt = null))), vi(e, t), xe(t), null;
    case 5:
      ll(t);
      var a = nn(_r.current);
      if (n = t.type, e !== null && t.stateNode != null) Vc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return xe(t), null;
        }
        if (e = nn(pt.current), Xr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ct] = t, r[Sr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < er.length; a++) K(er[a], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Ol(r, o), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, K("invalid", r);
              break;
            case "textarea":
              Bl(r, o), K("invalid", r);
          }
          Vo(n, o), a = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var u = o[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Jr(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Jr(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : fr.hasOwnProperty(l) && u != null && l === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              qr(r), Fl(r, o, !0);
              break;
            case "textarea":
              qr(r), Ul(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = _a);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ct] = t, e[Sr] = r, qc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Go(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < er.length; a++) K(er[a], e);
                a = r;
                break;
              case "source":
                K("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), a = r;
                break;
              case "details":
                K("toggle", e), a = r;
                break;
              case "input":
                Ol(e, r), a = Oo(e, r), K("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ne({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                Bl(e, r), a = Uo(e, r), K("invalid", e);
                break;
              default:
                a = r;
            }
            Vo(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? ju(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && wu(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (fr.hasOwnProperty(o) ? s != null && o === "onScroll" && K("scroll", e) : s != null && $i(e, o, s, l));
            }
            switch (n) {
              case "input":
                qr(e), Fl(e, r, !1);
                break;
              case "textarea":
                qr(e), Ul(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? En(e, !!r.multiple, o, !1) : r.defaultValue != null && En(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = _a);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = nn(_r.current), nn(pt.current), Xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (o = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
            case 3:
              Jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (J(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && $e !== null && t.mode & 1 && !(t.flags & 128)) uc(), In(), t.flags |= 98560, o = !1;
        else if (o = Xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[ct] = t;
          } else In(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), o = !1;
        } else tt !== null && (_i(tt), tt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? de === 0 && (de = 3) : wl())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return Dn(), vi(e, t), e === null && kr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return rl(t.type._context), xe(t), null;
    case 17:
      return Le(t.type) && Na(), xe(t), null;
    case 19:
      if (J(ee), o = t.memoizedState, o === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) Yn(o, !1);
      else {
        if (de !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = La(e), l !== null) {
            for (t.flags |= 128, Yn(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && se() > On && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = La(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !X) return xe(t), null;
        } else 2 * se() - o.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = se(), t.sibling = null, n = ee.current, Y(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return xl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Of(e, t) {
  switch (Zi(t), t.tag) {
    case 1:
      return Le(t.type) && Na(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), J(Te), J(ke), sl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ll(t), null;
    case 13:
      if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        In();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ee), null;
    case 4:
      return Dn(), null;
    case 10:
      return rl(t.type._context), null;
    case 22:
    case 23:
      return xl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ta = !1, we = !1, Ff = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function yi(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Ms = !1;
function Bf(e, t) {
  if (ti = ja, e = Ku(), Ji(e)) {
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
        var l = 0, u = -1, s = -1, d = 0, g = 0, x = e, p = null;
        t: for (; ; ) {
          for (var j; x !== n || a !== 0 && x.nodeType !== 3 || (u = l + a), x !== o || r !== 0 && x.nodeType !== 3 || (s = l + r), x.nodeType === 3 && (l += x.nodeValue.length), (j = x.firstChild) !== null; )
            p = x, x = j;
          for (; ; ) {
            if (x === e) break t;
            if (p === n && ++d === a && (u = l), p === o && ++g === r && (s = l), (j = x.nextSibling) !== null) break;
            x = p, p = x.parentNode;
          }
          x = j;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ni = { focusedElem: e, selectionRange: n }, ja = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var y = N.memoizedProps, A = N.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ze(t.type, y), A);
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
      ie(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return N = Ms, Ms = !1, N;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && yi(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ja(e, t) {
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
function xi(e) {
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
function Hc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[Sr], delete t[oi], delete t[Sf], delete t[Cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ts(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _a));
  else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
}
function ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ki(e, t, n), e = e.sibling; e !== null; ) ki(e, t, n), e = e.sibling;
}
var me = null, et = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), n = n.sibling;
}
function Qc(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(qa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      we || _n(n, t);
    case 6:
      var r = me, a = et;
      me = null, Tt(e, t, n), me = r, et = a, me !== null && (et ? (e = me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null && (et ? (e = me, n = n.stateNode, e.nodeType === 8 ? jo(e.parentNode, n) : e.nodeType === 1 && jo(e, n), yr(e)) : jo(me, n.stateNode));
      break;
    case 4:
      r = me, a = et, me = n.stateNode.containerInfo, et = !0, Tt(e, t, n), me = r, et = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && yi(n, t, l), a = a.next;
        } while (a !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (!we && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ie(n, t, u);
      }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, Tt(e, t, n), we = r) : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ff()), t.forEach(function(r) {
      var a = Kf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            me = u.stateNode, et = !1;
            break e;
          case 3:
            me = u.stateNode.containerInfo, et = !0;
            break e;
          case 4:
            me = u.stateNode.containerInfo, et = !0;
            break e;
        }
        u = u.return;
      }
      if (me === null) throw Error(E(160));
      Qc(o, l, a), me = null, et = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (d) {
      ie(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yc(t, e), t = t.sibling;
}
function Yc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xe(t, e), st(e), r & 4) {
        try {
          lr(3, e, e.return), Ja(3, e);
        } catch (y) {
          ie(e, e.return, y);
        }
        try {
          lr(5, e, e.return);
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 1:
      Xe(t, e), st(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (Xe(t, e), st(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          mr(a, "");
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && vu(a, o), Go(u, l);
          var d = Go(u, o);
          for (l = 0; l < s.length; l += 2) {
            var g = s[l], x = s[l + 1];
            g === "style" ? ju(a, x) : g === "dangerouslySetInnerHTML" ? wu(a, x) : g === "children" ? mr(a, x) : $i(a, g, x, d);
          }
          switch (u) {
            case "input":
              Fo(a, o);
              break;
            case "textarea":
              yu(a, o);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var j = o.value;
              j != null ? En(a, !!o.multiple, j, !1) : p !== !!o.multiple && (o.defaultValue != null ? En(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : En(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Sr] = o;
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Xe(t, e), st(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Xe(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        yr(t.containerInfo);
      } catch (y) {
        ie(e, e.return, y);
      }
      break;
    case 4:
      Xe(t, e), st(e);
      break;
    case 13:
      Xe(t, e), st(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (vl = se())), r & 4 && Ls(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (d = we) || g, Xe(t, e), we = d) : Xe(t, e), st(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1) for (M = e, g = e.child; g !== null; ) {
          for (x = M = g; M !== null; ) {
            switch (p = M, j = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                lr(4, p, p.return);
                break;
              case 1:
                _n(p, p.return);
                var N = p.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (y) {
                    ie(r, n, y);
                  }
                }
                break;
              case 5:
                _n(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Is(x);
                  continue;
                }
            }
            j !== null ? (j.return = p, M = j) : Is(x);
          }
          g = g.sibling;
        }
        e: for (g = null, x = e; ; ) {
          if (x.tag === 5) {
            if (g === null) {
              g = x;
              try {
                a = x.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = x.stateNode, s = x.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ku("display", l));
              } catch (y) {
                ie(e, e.return, y);
              }
            }
          } else if (x.tag === 6) {
            if (g === null) try {
              x.stateNode.nodeValue = d ? "" : x.memoizedProps;
            } catch (y) {
              ie(e, e.return, y);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            g === x && (g = null), x = x.return;
          }
          g === x && (g = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      Xe(t, e), st(e), r & 4 && Ls(e);
      break;
    case 21:
      break;
    default:
      Xe(
        t,
        e
      ), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wc(n)) {
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
          r.flags & 32 && (mr(a, ""), r.flags &= -33);
          var o = Ts(e);
          ki(e, o, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Ts(e);
          wi(e, u, l);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Uf(e, t, n) {
  M = e, Kc(e);
}
function Kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var a = M, o = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || ta;
      if (!l) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || we;
        u = ta;
        var d = we;
        if (ta = l, (we = s) && !d) for (M = a; M !== null; ) l = M, s = l.child, l.tag === 22 && l.memoizedState !== null ? As(a) : s !== null ? (s.return = l, M = s) : As(a);
        for (; o !== null; ) M = o, Kc(o), o = o.sibling;
        M = a, ta = u, we = d;
      }
      Rs(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, M = o) : Rs(e);
  }
}
function Rs(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            we || Ja(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !we) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ys(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              ys(t, l, n);
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
              var d = t.alternate;
              if (d !== null) {
                var g = d.memoizedState;
                if (g !== null) {
                  var x = g.dehydrated;
                  x !== null && yr(x);
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
        we || t.flags & 512 && xi(t);
      } catch (p) {
        ie(t, t.return, p);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Is(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function As(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ja(4, t);
          } catch (s) {
            ie(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ie(t, a, s);
            }
          }
          var o = t.return;
          try {
            xi(t);
          } catch (s) {
            ie(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            xi(t);
          } catch (s) {
            ie(t, l, s);
          }
      }
    } catch (s) {
      ie(t, t.return, s);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, M = u;
      break;
    }
    M = t.return;
  }
}
var qf = Math.ceil, Aa = Et.ReactCurrentDispatcher, hl = Et.ReactCurrentOwner, We = Et.ReactCurrentBatchConfig, V = 0, fe = null, ue = null, he = 0, De = 0, Nn = Kt(0), de = 0, Pr = null, un = 0, Xa = 0, gl = 0, sr = null, be = null, vl = 0, On = 1 / 0, vt = null, Da = !1, ji = null, Vt = null, na = !1, $t = null, $a = 0, ur = 0, Si = null, fa = -1, ma = 0;
function _e() {
  return V & 6 ? se() : fa !== -1 ? fa : fa = se();
}
function Gt(e) {
  return e.mode & 1 ? V & 2 && he !== 0 ? he & -he : Nf.transition !== null ? (ma === 0 && (ma = Ru()), ma) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bu(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < ur) throw ur = 0, Si = null, Error(E(185));
  Ir(e, n, r), (!(V & 2) || e !== fe) && (e === fe && (!(V & 2) && (Xa |= n), de === 4 && At(e, he)), Re(e, r), n === 1 && V === 0 && !(t.mode & 1) && (On = se() + 500, Qa && Jt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  _p(e, t);
  var r = ka(e, e === fe ? he : 0);
  if (r === 0) n !== null && Gl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Gl(n), t === 1) e.tag === 0 ? _f(Ds.bind(null, e)) : ic(Ds.bind(null, e)), kf(function() {
      !(V & 6) && Jt();
    }), n = null;
    else {
      switch (Iu(r)) {
        case 1:
          n = qi;
          break;
        case 4:
          n = Tu;
          break;
        case 16:
          n = wa;
          break;
        case 536870912:
          n = Lu;
          break;
        default:
          n = wa;
      }
      n = ad(n, Jc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Jc(e, t) {
  if (fa = -1, ma = 0, V & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = ka(e, e === fe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r);
  else {
    t = r;
    var a = V;
    V |= 2;
    var o = Zc();
    (fe !== e || he !== t) && (vt = null, On = se() + 500, rn(e, t));
    do
      try {
        Hf();
        break;
      } catch (u) {
        Xc(e, u);
      }
    while (!0);
    nl(), Aa.current = o, V = a, ue !== null ? t = 0 : (fe = null, he = 0, t = de);
  }
  if (t !== 0) {
    if (t === 2 && (a = Ko(e), a !== 0 && (r = a, t = Ci(e, a))), t === 1) throw n = Pr, rn(e, 0), At(e, r), Re(e, se()), n;
    if (t === 6) At(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Vf(a) && (t = Oa(e, r), t === 2 && (o = Ko(e), o !== 0 && (r = o, t = Ci(e, o))), t === 1)) throw n = Pr, rn(e, 0), At(e, r), Re(e, se()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, be, vt);
          break;
        case 3:
          if (At(e, r), (r & 130023424) === r && (t = vl + 500 - se(), 10 < t)) {
            if (ka(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = ai(Zt.bind(null, e, be, vt), t);
            break;
          }
          Zt(e, be, vt);
          break;
        case 4:
          if (At(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - nt(r);
            o = 1 << l, l = t[l], l > a && (a = l), r &= ~o;
          }
          if (r = a, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ai(Zt.bind(null, e, be, vt), r);
            break;
          }
          Zt(e, be, vt);
          break;
        case 5:
          Zt(e, be, vt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Re(e, se()), e.callbackNode === n ? Jc.bind(null, e) : null;
}
function Ci(e, t) {
  var n = sr;
  return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Oa(e, t), e !== 2 && (t = be, be = n, t !== null && _i(t)), e;
}
function _i(e) {
  be === null ? be = e : be.push.apply(be, e);
}
function Vf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!at(o(), a)) return !1;
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
function At(e, t) {
  for (t &= ~gl, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ds(e) {
  if (V & 6) throw Error(E(327));
  Tn();
  var t = ka(e, 0);
  if (!(t & 1)) return Re(e, se()), null;
  var n = Oa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ko(e);
    r !== 0 && (t = r, n = Ci(e, r));
  }
  if (n === 1) throw n = Pr, rn(e, 0), At(e, t), Re(e, se()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, be, vt), Re(e, se()), null;
}
function yl(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (On = se() + 500, Qa && Jt());
  }
}
function cn(e) {
  $t !== null && $t.tag === 0 && !(V & 6) && Tn();
  var t = V;
  V |= 1;
  var n = We.transition, r = H;
  try {
    if (We.transition = null, H = 1, e) return e();
  } finally {
    H = r, We.transition = n, V = t, !(V & 6) && Jt();
  }
}
function xl() {
  De = Nn.current, J(Nn);
}
function rn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wf(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Zi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Na();
        break;
      case 3:
        Dn(), J(Te), J(ke), sl();
        break;
      case 5:
        ll(r);
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
        rl(r.type._context);
        break;
      case 22:
      case 23:
        xl();
    }
    n = n.return;
  }
  if (fe = e, ue = e = Ht(e.current, null), he = De = t, de = 0, Pr = null, gl = Xa = un = 0, be = sr = null, tn !== null) {
    for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = a, r.next = l;
      }
      n.pending = r;
    }
    tn = null;
  }
  return e;
}
function Xc(e, t) {
  do {
    var n = ue;
    try {
      if (nl(), ca.current = Ia, Ra) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ra = !1;
      }
      if (sn = 0, pe = ce = te = null, ir = !1, Nr = 0, hl.current = null, n === null || n.return === null) {
        de = 1, Pr = t, ue = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, s = t;
        if (t = he, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var d = s, g = u, x = g.tag;
          if (!(g.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var p = g.alternate;
            p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var j = Cs(l);
          if (j !== null) {
            j.flags &= -257, _s(j, l, u, o, t), j.mode & 1 && Ss(o, d, t), t = j, s = d;
            var N = t.updateQueue;
            if (N === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else N.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ss(o, d, t), wl();
              break e;
            }
            s = Error(E(426));
          }
        } else if (X && u.mode & 1) {
          var A = Cs(l);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256), _s(A, l, u, o, t), el($n(s, u));
            break e;
          }
        }
        o = s = $n(s, u), de !== 4 && (de = 2), sr === null ? sr = [o] : sr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Ic(o, s, t);
              vs(o, m);
              break e;
            case 1:
              u = s;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Vt === null || !Vt.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var h = Ac(o, u, t);
                vs(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      td(n);
    } catch (w) {
      t = w, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zc() {
  var e = Aa.current;
  return Aa.current = Ia, e === null ? Ia : e;
}
function wl() {
  (de === 0 || de === 3 || de === 2) && (de = 4), fe === null || !(un & 268435455) && !(Xa & 268435455) || At(fe, he);
}
function Oa(e, t) {
  var n = V;
  V |= 2;
  var r = Zc();
  (fe !== e || he !== t) && (vt = null, rn(e, t));
  do
    try {
      Gf();
      break;
    } catch (a) {
      Xc(e, a);
    }
  while (!0);
  if (nl(), V = n, Aa.current = r, ue !== null) throw Error(E(261));
  return fe = null, he = 0, de;
}
function Gf() {
  for (; ue !== null; ) ed(ue);
}
function Hf() {
  for (; ue !== null && !gp(); ) ed(ue);
}
function ed(e) {
  var t = rd(e.alternate, e, De);
  e.memoizedProps = e.pendingProps, t === null ? td(e) : ue = t, hl.current = null;
}
function td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Of(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        de = 6, ue = null;
        return;
      }
    } else if (n = $f(n, t, De), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Zt(e, t, n) {
  var r = H, a = We.transition;
  try {
    We.transition = null, H = 1, Wf(e, t, n, r);
  } finally {
    We.transition = a, H = r;
  }
  return null;
}
function Wf(e, t, n, r) {
  do
    Tn();
  while ($t !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Np(e, o), e === fe && (ue = fe = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || na || (na = !0, ad(wa, function() {
    return Tn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = We.transition, We.transition = null;
    var l = H;
    H = 1;
    var u = V;
    V |= 4, hl.current = null, Bf(e, n), Yc(n, e), ff(ni), ja = !!ti, ni = ti = null, e.current = n, Uf(n), vp(), V = u, H = l, We.transition = o;
  } else e.current = n;
  if (na && (na = !1, $t = e, $a = a), o = e.pendingLanes, o === 0 && (Vt = null), wp(n.stateNode), Re(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Da) throw Da = !1, e = ji, ji = null, e;
  return $a & 1 && e.tag !== 0 && Tn(), o = e.pendingLanes, o & 1 ? e === Si ? ur++ : (ur = 0, Si = e) : ur = 0, Jt(), null;
}
function Tn() {
  if ($t !== null) {
    var e = Iu($a), t = We.transition, n = H;
    try {
      if (We.transition = null, H = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, $a = 0, V & 6) throw Error(E(331));
        var a = V;
        for (V |= 4, M = e.current; M !== null; ) {
          var o = M, l = o.child;
          if (M.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (M = d; M !== null; ) {
                  var g = M;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, g, o);
                  }
                  var x = g.child;
                  if (x !== null) x.return = g, M = x;
                  else for (; M !== null; ) {
                    g = M;
                    var p = g.sibling, j = g.return;
                    if (Hc(g), g === d) {
                      M = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = j, M = p;
                      break;
                    }
                    M = j;
                  }
                }
              }
              var N = o.alternate;
              if (N !== null) {
                var y = N.child;
                if (y !== null) {
                  N.child = null;
                  do {
                    var A = y.sibling;
                    y.sibling = null, y = A;
                  } while (y !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, M = l;
          else e: for (; M !== null; ) {
            if (o = M, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                lr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, M = m;
              break e;
            }
            M = o.return;
          }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          l = M;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, M = f;
          else e: for (l = c; M !== null; ) {
            if (u = M, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ja(9, u);
              }
            } catch (w) {
              ie(u, u.return, w);
            }
            if (u === l) {
              M = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, M = h;
              break e;
            }
            M = u.return;
          }
        }
        if (V = a, Jt(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
          dt.onPostCommitFiberRoot(qa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, We.transition = t;
    }
  }
  return !1;
}
function $s(e, t, n) {
  t = $n(n, t), t = Ic(e, t, 1), e = qt(e, t, 1), t = _e(), e !== null && (Ir(e, 1, t), Re(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) $s(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      $s(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
        e = $n(n, e), e = Ac(t, e, 1), t = qt(t, e, 1), e = _e(), t !== null && (Ir(t, 1, e), Re(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Qf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (he & n) === n && (de === 4 || de === 3 && (he & 130023424) === he && 500 > se() - vl ? rn(e, 0) : gl |= n), Re(e, t);
}
function nd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hr, Hr <<= 1, !(Hr & 130023424) && (Hr = 4194304)) : t = 1);
  var n = _e();
  e = _t(e, t), e !== null && (Ir(e, t, n), Re(e, n));
}
function Yf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), nd(e, n);
}
function Kf(e, t) {
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
  r !== null && r.delete(t), nd(e, n);
}
var rd;
rd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) Me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, Df(e, t, n);
    Me = !!(e.flags & 131072);
  }
  else Me = !1, X && t.flags & 1048576 && lc(t, Pa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      pa(e, t), e = t.pendingProps;
      var a = Rn(t, ke.current);
      Mn(t, n), a = cl(null, t, r, e, a, n);
      var o = dl();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(r) ? (o = !0, Ea(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ol(t), a.updater = Ka, t.stateNode = a, a._reactInternals = t, di(t, r, e, n), t = mi(null, t, r, !0, o, n)) : (t.tag = 0, X && o && Xi(t), Ce(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (pa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Xf(r), e = Ze(r, e), a) {
          case 0:
            t = fi(null, t, r, e, n);
            break e;
          case 1:
            t = zs(null, t, r, e, n);
            break e;
          case 11:
            t = Ns(null, t, r, e, n);
            break e;
          case 14:
            t = Es(null, t, r, Ze(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ze(r, a), fi(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ze(r, a), zs(e, t, r, a, n);
    case 3:
      e: {
        if (Fc(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, fc(e, t), Ta(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = $n(Error(E(423)), t), t = Ps(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = $n(Error(E(424)), t), t = Ps(e, t, r, n, a);
          break e;
        } else for ($e = Ut(t.stateNode.containerInfo.firstChild), Oe = t, X = !0, tt = null, n = dc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (In(), r === a) {
            t = Nt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mc(t), e === null && si(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = a.children, ri(r, a) ? l = null : o !== null && ri(r, o) && (t.flags |= 32), Oc(e, t), Ce(e, t, l, n), t.child;
    case 6:
      return e === null && si(t), null;
    case 13:
      return Bc(e, t, n);
    case 4:
      return il(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ze(r, a), Ns(e, t, r, a, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, l = a.value, Y(ba, r._currentValue), r._currentValue = l, o !== null) if (at(o.value, l)) {
          if (o.children === a.children && !Te.current) {
            t = Nt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            l = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = jt(-1, n & -n), s.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var g = d.pending;
                    g === null ? s.next = s : (s.next = g.next, g.next = s), d.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), ui(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(E(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ui(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        Ce(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Mn(t, n), a = Qe(a), r = r(a), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Ze(r, t.pendingProps), a = Ze(r.type, a), Es(e, t, r, a, n);
    case 15:
      return Dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ze(r, a), pa(e, t), t.tag = 1, Le(r) ? (e = !0, Ea(t)) : e = !1, Mn(t, n), Rc(t, r, a), di(t, r, a, n), mi(null, t, r, !0, e, n);
    case 19:
      return Uc(e, t, n);
    case 22:
      return $c(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function ad(e, t) {
  return Mu(e, t);
}
function Jf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new Jf(e, t, n, r);
}
function kl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Xf(e) {
  if (typeof e == "function") return kl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Fi) return 11;
    if (e === Bi) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ha(e, t, n, r, a, o) {
  var l = 2;
  if (r = e, typeof e == "function") kl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case gn:
      return an(n.children, a, o, t);
    case Oi:
      l = 8, a |= 8;
      break;
    case Io:
      return e = He(12, n, t, a | 2), e.elementType = Io, e.lanes = o, e;
    case Ao:
      return e = He(13, n, t, a), e.elementType = Ao, e.lanes = o, e;
    case Do:
      return e = He(19, n, t, a), e.elementType = Do, e.lanes = o, e;
    case mu:
      return Za(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case pu:
          l = 10;
          break e;
        case fu:
          l = 9;
          break e;
        case Fi:
          l = 11;
          break e;
        case Bi:
          l = 14;
          break e;
        case Lt:
          l = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = He(l, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function an(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function Za(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = mu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bo(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function Mo(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Zf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = co(0), this.expirationTimes = co(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = co(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function jl(e, t, n, r, a, o, l, u, s) {
  return e = new Zf(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = He(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ol(o), e;
}
function em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function od(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
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
    if (Le(n)) return oc(e, n, t);
  }
  return t;
}
function id(e, t, n, r, a, o, l, u, s) {
  return e = jl(n, r, !0, e, a, o, l, u, s), e.context = od(null), n = e.current, r = _e(), a = Gt(n), o = jt(r, a), o.callback = t ?? null, qt(n, o, a), e.current.lanes = a, Ir(e, a, r), Re(e, r), e;
}
function eo(e, t, n, r) {
  var a = t.current, o = _e(), l = Gt(a);
  return n = od(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(a, t, l), e !== null && (rt(e, a, l, o), ua(e, a, l)), l;
}
function Fa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Os(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sl(e, t) {
  Os(e, t), (e = e.alternate) && Os(e, t);
}
function tm() {
  return null;
}
var ld = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Cl(e) {
  this._internalRoot = e;
}
to.prototype.render = Cl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  eo(e, t, null, null);
};
to.prototype.unmount = Cl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function() {
      eo(null, e, null, null);
    }), t[Ct] = null;
  }
};
function to(e) {
  this._internalRoot = e;
}
to.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $u();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
    It.splice(n, 0, e), n === 0 && Fu(e);
  }
};
function _l(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function no(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Fs() {
}
function nm(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Fa(l);
        o.call(d);
      };
    }
    var l = id(t, r, e, 0, null, !1, !1, "", Fs);
    return e._reactRootContainer = l, e[Ct] = l.current, kr(e.nodeType === 8 ? e.parentNode : e), cn(), l;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Fa(s);
      u.call(d);
    };
  }
  var s = jl(e, 0, !1, null, null, !1, !1, "", Fs);
  return e._reactRootContainer = s, e[Ct] = s.current, kr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
    eo(t, s, n, r);
  }), s;
}
function ro(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = Fa(l);
        u.call(s);
      };
    }
    eo(t, l, e, a);
  } else l = nm(n, t, e, a, r);
  return Fa(l);
}
Au = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Vi(t, n | 1), Re(t, se()), !(V & 6) && (On = se() + 500, Jt()));
      }
      break;
    case 13:
      cn(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var a = _e();
          rt(r, e, 1, a);
        }
      }), Sl(e, 1);
  }
};
Gi = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = _e();
      rt(t, e, 134217728, n);
    }
    Sl(e, 134217728);
  }
};
Du = function(e) {
  if (e.tag === 13) {
    var t = Gt(e), n = _t(e, t);
    if (n !== null) {
      var r = _e();
      rt(n, e, t, r);
    }
    Sl(e, t);
  }
};
$u = function() {
  return H;
};
Ou = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
Wo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Fo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Wa(r);
            if (!a) throw Error(E(90));
            gu(r), Fo(r, a);
          }
        }
      }
      break;
    case "textarea":
      yu(e, n);
      break;
    case "select":
      t = n.value, t != null && En(e, !!n.multiple, t, !1);
  }
};
_u = yl;
Nu = cn;
var rm = { usingClientEntryPoint: !1, Events: [Dr, wn, Wa, Su, Cu, yl] }, Kn = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, am = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || tm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ra.isDisabled && ra.supportsFiber) try {
    qa = ra.inject(am), dt = ra;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rm;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_l(t)) throw Error(E(200));
  return em(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!_l(e)) throw Error(E(299));
  var n = !1, r = "", a = ld;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = jl(e, 1, !1, null, null, n, !1, r, a), e[Ct] = t.current, kr(e.nodeType === 8 ? e.parentNode : e), new Cl(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Pu(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return cn(e);
};
Be.hydrate = function(e, t, n) {
  if (!no(t)) throw Error(E(200));
  return ro(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!_l(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", l = ld;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = id(t, null, e, 1, n ?? null, a, !1, o, l), e[Ct] = t.current, kr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new to(t);
};
Be.render = function(e, t, n) {
  if (!no(t)) throw Error(E(200));
  return ro(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!no(e)) throw Error(E(40));
  return e._reactRootContainer ? (cn(function() {
    ro(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = yl;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!no(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ro(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function sd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd);
    } catch (e) {
      console.error(e);
    }
}
sd(), su.exports = Be;
var om = su.exports, ud, Bs = om;
ud = Bs.createRoot, Bs.hydrateRoot;
const Us = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, im = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, lm = [
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
], sm = [
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
function br(e) {
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
function um(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, o = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(o) ? o : 0 };
}
const cr = () => globalThis.__crycatBase || "";
async function q(e, t) {
  const n = await fetch(cr() + e, t);
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
const L = {
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
  blobs: (e) => q(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => q(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0) => `${cr()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}`,
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
  pageUrl: (e, t, n = !1, r = !1) => `${cr().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
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
  iconUrl: () => `${cr()}/api/icon.png?v=${Date.now()}`,
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
async function cm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, x) => {
      a.onload = () => g(), a.onerror = () => x(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, l = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(o * u), s.height = Math.round(l * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (g) => s.toBlob((x) => g(x), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function cd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await cm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Ni = [
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
function Ei(e) {
  return Ni.find((t) => t.key === e) ?? Ni[0];
}
function qs(e) {
  const t = Ei(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function dd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Ei(e);
  } catch {
  }
  return Ei("wiwi");
}
const pd = {
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
  minis: "minis",
  "Imágenes colocadas en las hojas": "Images placed on the sheets",
  "Páginas que ocupa el trabajo": "Pages the job takes",
  "Eficiencia real: superficie de las siluetas sobre el área ÚTIL de la hoja (contando los límites)": "Real efficiency: silhouette area over the USEFUL area of the sheet (limits included)",
  "Copias pequeñas extra que rellenan huecos": "Small extra copies that fill gaps",
  "Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde": "Dotted outlines: dashes = what gets cut; dots = the drawing without border",
  "Guías del área recortable (tecla G): solo en la vista previa": "Cut-area guides (key G): preview only",
  "Recalcular la colocación (ignora los elementos fijados)": "Recalculate the layout (ignores pinned items)",
  "Auto optimizar": "Auto-optimise",
  Optimizar: "Optimise",
  "Optimizar: vuelve a colocar todo (ignora los fijados)": "Optimise: re-places everything (ignores pinned items)",
  "Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)": "What shows behind: white, transparent or neon green (key T)",
  Transparente: "Transparent",
  Fosforito: "Neon",
  Centrar: "Centre",
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
}, fd = k.createContext("es");
function dm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(fd.Provider, { value: e, children: t });
}
function Nl() {
  return k.useContext(fd);
}
function Ke() {
  const e = Nl();
  return (t, n) => {
    let r = e === "en" ? pd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function pm(e, t, n) {
  return e === "en" ? pd[t] ?? t : t;
}
function Z({ size: e = 18, children: t }) {
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
function md({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Mr({ size: e }) {
  return /* @__PURE__ */ i.jsx(Z, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Tr({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function fm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function mm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Ba({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function hm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function hd({ size: e }) {
  return /* @__PURE__ */ i.jsx(Z, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function El({ size: e }) {
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
function Vs({ size: e }) {
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
function gm({ size: e }) {
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
function vm({ size: e }) {
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
function gd({ size: e }) {
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
function Lr({ size: e }) {
  return /* @__PURE__ */ i.jsx(Z, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function ym({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function xm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function vd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function dr({ size: e }) {
  return /* @__PURE__ */ i.jsx(Z, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function zi({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Cm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function yd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function _m({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Nm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Em({ size: e }) {
  return /* @__PURE__ */ i.jsxs(Z, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function zm({ size: e }) {
  return /* @__PURE__ */ i.jsx(Z, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Pm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ke(), o = k.useMemo(() => t.map((v) => v.id), [t]), [l, u] = k.useState(/* @__PURE__ */ new Set()), [s, d] = k.useState("escala"), [g, x] = k.useState(100), [p, j] = k.useState(50), [N, y] = k.useState("mayor"), [A, m] = k.useState("");
  k.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const c = (v) => !l.has(v), f = (v) => u((S) => {
    const R = new Set(S);
    return R.has(v) ? R.delete(v) : R.add(v), R;
  }), h = () => u(
    l.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), w = (v) => {
    const S = v.w_mm_base || 0, R = v.h_mm_base || 0;
    return N === "mayor" ? Math.max(S, R) : N === "menor" ? Math.min(S, R) : 2 * Math.sqrt(Math.max(0, S * R) / Math.PI);
  }, C = (v) => {
    if (s === "tamano") {
      const S = w(v);
      if (S > 0) return Math.min(10, Math.max(0.05, p / S));
    }
    return Math.min(10, Math.max(0.05, g / 100));
  }, _ = (v) => {
    const S = C(v);
    return { w: (v.w_mm_base || 0) * S, h: (v.h_mm_base || 0) * S };
  }, z = async () => {
    let v = 0;
    for (const S of t) {
      if (!c(S.id)) continue;
      const R = C(S) * 100;
      await L.patchAsset(S.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(R * 10) / 10))
      }), v += 1;
    }
    await r(), m(a("{n} elementos ajustados ", { n: v })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ i.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((v) => {
          const S = _(v), R = Math.min(98, S.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${v.id}`,
              style: {
                width: `${R}%`,
                maxWidth: `${R}%`,
                aspectRatio: `${S.w || 1} / ${S.h || 1}`,
                opacity: c(v.id) ? 1 : 0.3
              },
              title: `${v.name} · ${S.w.toFixed(1)}×${S.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: L.previewUrl(v.id), alt: "" })
            },
            v.id
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
              children: l.size === o.length ? a("Seleccionar todos") : a("Quitar selección")
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "— ",
            o.length - l.size,
            "/",
            o.length
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((v) => {
          const S = _(v);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${v.id}`,
              className: c(v.id) ? "sel" : "",
              onClick: () => f(v.id),
              title: v.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: L.previewUrl(v.id), alt: v.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: v.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(v.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  S.w.toFixed(1),
                  "×",
                  S.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            v.id
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
              className: s === "escala" ? "on" : "",
              onClick: () => d("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: s === "tamano" ? "on" : "",
              onClick: () => d("tamano"),
              children: a("Tamaño fijo (mm)")
            }
          )
        ] }),
        s === "escala" ? /* @__PURE__ */ i.jsxs("label", { children: [
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
                onChange: (v) => x(Number(v.target.value))
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
                  onChange: (v) => j(Number(v.target.value))
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
                onChange: (v) => y(v.target.value),
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
        A && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "import-aviso", children: A })
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
          onClick: z,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function bm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a
}) {
  const o = Ke(), [l, u] = k.useState(() => br(e));
  k.useEffect(() => u(br(e)), [e]);
  const s = k.useRef(null), d = um(l), [g, x] = k.useState(""), p = k.useRef(!1), [j, N] = k.useState(""), y = k.useRef(!1), [A, m] = k.useState({ tamano: !1, borde: !1, mini: !1 });
  k.useEffect(() => {
    p.current || x(d.w > 0 ? d.w.toFixed(1) : ""), y.current || N(d.h > 0 ? d.h.toFixed(1) : "");
  }, [d.w, d.h]);
  const c = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, f = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, h = (v) => {
    x(v);
    const S = Number(v.replace(",", "."));
    !Number.isFinite(S) || S <= 0 || c <= 0 || z({ scale_pct: S / c * 100 });
  }, w = (v) => {
    N(v);
    const S = Number(v.replace(",", "."));
    !Number.isFinite(S) || S <= 0 || f <= 0 || z({ scale_pct: S / f * 100 });
  }, C = (t == null ? void 0 : t.placements.filter((v) => v.asset_id === e.id && v.mini).length) ?? 0, _ = (t == null ? void 0 : t.placements.filter((v) => v.asset_id === e.id && !v.mini).length) ?? 0, z = async (v) => {
    a == null || a(), "copies" in v && (v.copies = Math.max(0, v.copies ?? 0)), u((S) => ({ ...S, ...v }));
    try {
      await L.patchAsset(e.id, v);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx("img", { src: L.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ i.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: o("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => L.assetsFolder().then((v) => L.abrirCarpeta(v.path)).catch(() => L.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ i.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: o("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var v;
              return (v = s.current) == null ? void 0 : v.click();
            },
            children: /* @__PURE__ */ i.jsx(fm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: s,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (v) => {
              var R;
              const S = (R = v.target.files) == null ? void 0 : R[0];
              if (v.target.value = "", !!S)
                try {
                  const { blob: re, name: le } = await cd(S);
                  await L.reemplazar(e.id, re, le), await n();
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
            title: o("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ i.jsx(mm, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? o("Restaurar fondo original") : o("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? L.restoreBackground(e.id) : L.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ i.jsx(hm, { size: 16 }) : /* @__PURE__ */ i.jsx(Ba, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: o("Eliminar imagen"),
            onClick: () => L.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ i.jsx(hd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: o("Copias"), children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => z({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => z({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            title: o("Incluir como mini (rellena huecos)"),
            onClick: () => z({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ i.jsx(Lr, { size: 15 }),
              " ",
              o("Mini")
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
            onClick: () => m((v) => ({ ...v, tamano: !v.tamano })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${A.tamano ? "open" : ""}`, children: "›" }),
              o("Tamaño"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                d.w.toFixed(1),
                "×",
                d.h.toFixed(1),
                " · ",
                Math.round(l.scale_pct),
                " %"
              ] })
            ]
          }
        ),
        A.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: o("Escala del elemento (100% = tamaño natural)"), children: o("Escala") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: l.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (v) => z({ scale_pct: Number(v.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
              Math.round(l.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ i.jsx("span", { title: o("Tamaño exacto en milímetros (mantiene la proporción)"), children: o("Ancho") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: g,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  p.current = !0, y.current = !1;
                },
                onBlur: () => {
                  p.current = !1, x(d.w > 0 ? d.w.toFixed(1) : "");
                },
                onChange: (v) => h(v.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" }),
            /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ i.jsx("span", { title: o("Tamaño exacto en milímetros (mantiene la proporción)"), children: o("Alto") }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: j,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  y.current = !0, p.current = !1;
                },
                onBlur: () => {
                  y.current = !1, N(d.h > 0 ? d.h.toFixed(1) : "");
                },
                onChange: (v) => w(v.target.value)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${e.id}`,
            onClick: () => m((v) => ({ ...v, borde: !v.borde })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${A.borde ? "open" : ""}`, children: "›" }),
              o("Borde adicional"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                l.offset_mm.toFixed(1),
                " mm",
                l.offset_mm <= 0 ? ` · ${o("global")}` : ""
              ] })
            ]
          }
        ),
        A.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${e.id}`,
                onClick: () => z({ offset_mm: Math.max(
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
                onChange: (v) => z({ offset_mm: Number(v.target.value) })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => z({ offset_mm: Math.min(
                  20,
                  Math.round((l.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", o("Extender")],
              ["blanco", o("Blanco")],
              ["color", o("Color")],
              ["unir_recto", o("Unir recto")],
              ["unir_curvo", o("Unir curvo")]
            ].map(([v, S]) => /* @__PURE__ */ i.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === v ? "on" : ""}`,
                "data-testid": `offset-modo-${v}-${e.id}`,
                onClick: () => z({ offset_modo: v }),
                children: S
              },
              v
            )),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: o("Color del borde"),
                onChange: (v) => z({
                  offset_color: v.target.value,
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
            onClick: () => m((v) => ({ ...v, mini: !v.mini })),
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `chev ${A.mini ? "open" : ""}`, children: "›" }),
              o("Opciones de mini"),
              /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                C
              ] })
            ]
          }
        ),
        A.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ i.jsx("span", { title: o("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: o("Cuota") }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => z({ mini_quota: Math.max(
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
              onClick: () => z({ mini_quota: Math.min(
                100,
                Math.round((l.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: o(" {n} minis", { n: C }) })
        ] }) })
      ] }),
      _ > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: o("Colocadas: {n}", { n: _ }) }),
      l.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ i.jsx(yd, { size: 14 }),
        " ",
        l.warnings[0],
        " ",
        /blob|trozos sueltos/i.test(l.warnings[0]) && /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: o("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function Mm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: l
}) {
  const u = Ke(), s = k.useRef(null), [d, g] = k.useState(!1), [x, p] = k.useState(null), j = async (y) => {
    const A = [];
    for (const m of Array.from(y))
      try {
        const { blob: c, name: f } = await cd(m);
        A.push(br(await L.upload(c, f)));
      } catch (c) {
        console.error(c);
      }
    await r(), A.length > 1 && p(A);
  }, N = n.usar_minis;
  return e.some((y) => y.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${d ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var y;
          return (y = s.current) == null ? void 0 : y.click();
        },
        onDragOver: (y) => {
          y.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: (y) => {
          y.preventDefault(), g(!1), y.dataTransfer.files.length && j(y.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            u("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: s,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (y) => {
                y.target.files && j(y.target.files), y.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((y) => /* @__PURE__ */ i.jsx(
      bm,
      {
        a: y,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: l
      },
      y.id
    )) }),
    !N && /* @__PURE__ */ i.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => L.clearAssets().then(r),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Pm,
      {
        open: !!x,
        assets: x ?? [],
        onClose: () => p(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
function xd({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ke(), [o, l] = k.useState(null), [u, s] = k.useState("");
  k.useEffect(() => {
    e && d(r || "");
  }, [e]);
  const d = async (g = "") => {
    s("");
    try {
      l(await L.fsList(g));
    } catch (x) {
      s(x.message);
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
function Tm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const l = Ke(), [u, s] = k.useState("resumen");
  if (!e) return null;
  const d = t.length > 0 && t.every((x) => x.startsWith("data:")), g = [
    l("Abre Cricut Design Space."),
    l("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    l("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    l("Pulsa «Crear» para preparar el lienzo."),
    l("Comprueba que las dimensiones coinciden con las del archivo."),
    l("Imprime en papel mate blanco y colócalo en la esterilla."),
    l("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ i.jsx("div", { className: "modal", children: u === "resumen" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { "data-testid": "save-titulo", children: l(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ i.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("p", { className: "hint", children: l("Archivos:") }),
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((x) => /* @__PURE__ */ i.jsx("li", { title: x, children: x.split(/[\\/]/).pop() }, x)) }),
      !d && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      d && /* @__PURE__ */ i.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      d ? t.map((x, p) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${p}`,
          href: x,
          download: `crycat_pagina-${String(p + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Mr, { size: 15 }),
            " ",
            l("Descargar página {n}", { n: p + 1 })
          ]
        },
        p
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx(Mr, { size: 15 }),
            " ",
            l("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-continuar", onClick: o, children: l("Continuar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => s("cricut"),
          children: l("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h3", { children: l("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: g.map((x, p) => /* @__PURE__ */ i.jsx("li", { children: x }, p)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => s("resumen"),
          children: l("Volver")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { onClick: o, children: l("Entendido") })
    ] })
  ] }) }) });
}
function Lm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: l, onJob: u, onRecalc: s, editando: d, onFinEdicion: g, onDeshacer: x, onRehacer: p, puedeDeshacer: j, puedeRehacer: N }) {
  const y = Ke(), A = Nl(), [m, c] = k.useState(1), [f, h] = k.useState({ x: 0, y: 0 }), [w, C] = k.useState(null), [_, z] = k.useState(() => Date.now()), [v, S] = k.useState(null), [R, re] = k.useState(null), [le, Ie] = k.useState(!1), [ot, je] = k.useState(2), [ze, b] = k.useState([]), [O, F] = k.useState(""), [G, W] = k.useState(/* @__PURE__ */ new Set()), D = k.useRef(null), Q = k.useRef(null), Pe = A === "en" ? sm : lm, qe = k.useMemo(
    () => Pe[Math.floor(Math.random() * Pe.length)],
    [Pe]
  ), Je = r.saveName.trim() || qe;
  k.useEffect(() => {
    z(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const ft = (t == null ? void 0 : t.pages) ?? 0, Or = !!t && t.efficiency < 0.8;
  k.useEffect(() => {
    const P = D.current;
    if (!P) return;
    const I = (T) => {
      T.preventDefault(), T.stopPropagation();
      const ae = P.getBoundingClientRect(), Se = T.clientX - ae.left, Ae = T.clientY - ae.top;
      c((lt) => {
        const ve = T.deltaY < 0 ? 1.05 : 0.9523809523809523, oe = Math.min(12, Math.max(0.05, lt * ve)), bt = oe / lt;
        return h((Mt) => ({ x: Se - (Se - Mt.x) * bt, y: Ae - (Ae - Mt.y) * bt })), oe;
      });
    };
    return P.addEventListener("wheel", I, { passive: !1 }), () => P.removeEventListener("wheel", I);
  }, []);
  const $ = (P) => {
    if (P.target.closest(".item-box")) return;
    Q.current = { x: P.clientX - f.x, y: P.clientY - f.y };
    const I = (ae) => {
      Q.current && h({ x: ae.clientX - Q.current.x, y: ae.clientY - Q.current.y });
    }, T = () => {
      Q.current = null, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", T);
    };
    window.addEventListener("mousemove", I), window.addEventListener("mouseup", T);
  };
  k.useEffect(() => {
    const P = (I) => {
      I.target.tagName !== "INPUT" && (I.key === "+" || I.key === "=" ? c((T) => Math.min(12, T * 1.08)) : I.key === "-" || I.key === "_" ? c((T) => Math.max(0.05, T / 1.08)) : I.key === "0" ? (c(1), h({ x: 0, y: 0 })) : I.key === "Escape" ? C(null) : I.key === "g" ? a((T) => ({ ...T, guidesVisible: !T.guidesVisible })) : I.key === "t" && a((T) => T.eyeFosforito ? { ...T, eyeFosforito: !1, eyeTransparent: !1 } : T.eyeTransparent ? { ...T, eyeTransparent: !1, eyeFosforito: !0 } : { ...T, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", P), () => window.removeEventListener("keydown", P);
  }, [a]);
  const B = k.useRef(null), mt = k.useRef(null), ht = (P, I) => {
    P.preventDefault(), P.stopPropagation();
    const T = P.currentTarget.closest(".page-box");
    if (!T || !t) return;
    const ae = t.page_mm[0] / T.clientWidth, Se = {
      uid: I.uid,
      startX: P.clientX,
      startY: P.clientY,
      origX: I.x,
      origY: I.y,
      mmPerPx: ae
    };
    B.current = Se, mt.current = { x: I.x, y: I.y }, S(Se), re({ uid: I.uid, x: I.x, y: I.y });
    const Ae = (ve) => {
      const oe = B.current;
      if (!oe) return;
      const bt = (ve.clientX - oe.startX) * oe.mmPerPx / m, Mt = (ve.clientY - oe.startY) * oe.mmPerPx / m;
      mt.current = { x: oe.origX + bt, y: oe.origY + Mt }, re({ uid: oe.uid, x: oe.origX + bt, y: oe.origY + Mt });
    }, lt = (ve) => {
      window.removeEventListener("mousemove", Ae), window.removeEventListener("mouseup", lt);
      const oe = B.current;
      if (B.current = null, !oe) return;
      const bt = (ve.clientX - oe.startX) * oe.mmPerPx / m, Mt = (ve.clientY - oe.startY) * oe.mmPerPx / m;
      S(null), re(null), !(Math.abs(bt) < 0.5 && Math.abs(Mt) < 0.5) && Fr(oe.uid, oe.origX + bt, oe.origY + Mt);
    };
    window.addEventListener("mousemove", Ae), window.addEventListener("mouseup", lt);
  }, Fr = async (P, I, T) => {
    try {
      const ae = await L.move(P, I, T);
      ae.job ? u(ae.job) : await l();
    } catch {
      await l();
    } finally {
      z(Date.now());
    }
  }, zt = async (P) => {
    const I = await L.unpin(P);
    u(I);
  };
  k.useEffect(() => {
    if (!d) {
      b([]), F(""), W(/* @__PURE__ */ new Set());
      return;
    }
    L.blobs(d.id).then((P) => {
      b(P.blobs), je(P.union_mm ?? 2), F(P.preview_png), W(new Set(P.blobs.filter((I) => !I.principal).map((I) => I.id)));
    }).catch(() => {
      b([]), F("");
    });
  }, [d]);
  const zl = async () => {
    if (d)
      try {
        await L.limpiarContorno(d.id, Array.from(G));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, jd = (P) => {
    W((I) => {
      const T = new Set(I);
      return T.has(P) ? T.delete(P) : T.add(P), T;
    });
  }, [it, Pt] = k.useState(null), Sd = async () => {
    try {
      const T = await L.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Pt({ files: T.files, folder: T.folder });
    } catch (T) {
      Pt({ files: [], folder: "", error: T.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const ae = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), Se = URL.createObjectURL(ae), Ae = document.createElement("a");
        Ae.href = Se, Ae.download = `${r.saveName || "crycat"}-cricut.pdf`, Ae.click(), setTimeout(() => URL.revokeObjectURL(Se), 4e3);
      } catch (T) {
        Pt({
          files: [],
          folder: "",
          error: T.message
        });
      }
      return;
    }
    const I = document.createElement("iframe");
    I.setAttribute("aria-hidden", "true"), I.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", I.src = "/api/print.pdf", I.onload = () => {
      var T, ae;
      try {
        (T = I.contentWindow) == null || T.focus(), (ae = I.contentWindow) == null || ae.print();
      } finally {
        window.setTimeout(() => I.remove(), 6e4);
      }
    }, document.body.appendChild(I);
  }, Cd = async () => {
    try {
      const P = await L.export(Je);
      Pt({ files: P.files, folder: P.folder });
    } catch (P) {
      Pt({ files: [], folder: "", error: P.message });
    }
  }, _d = () => {
    Ie(!0);
  }, Nd = async (P) => {
    try {
      const I = await L.export(Je, P);
      Pt({ files: I.files, folder: I.folder });
    } catch (I) {
      Pt({ files: [], folder: "", error: I.message });
    }
  }, Pl = (t == null ? void 0 : t.poly_mm) ?? [], [Ed, zd] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [Pd, bd] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], fn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : Pd, ao = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : bd, bl = n.lienzo === "pagina" ? 0 : Ed, Ml = n.lienzo === "pagina" ? 0 : zd, Tl = Pl.length ? "M" + Pl.map(([P, I]) => `${P - bl},${I - Ml}`).join(" L") + " Z" : "", Md = (P) => {
    const I = (t == null ? void 0 : t.placements.filter((T) => T.page === P)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (T) => {
          ft > 1 && w === null && !T.target.closest(".item-box") && C(P);
        },
        "data-testid": `page-${P}`,
        children: [
          /* @__PURE__ */ i.jsx("img", { className: "sheet", src: L.pageUrl(P, _, n.simular_impresion === !0, r.verBordes), alt: y("Página {i}", { i: P + 1 }), draggable: !1 }),
          r.guidesVisible && Tl && /* @__PURE__ */ i.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${fn} ${ao}`, preserveAspectRatio: "none", children: /* @__PURE__ */ i.jsx(
            "path",
            {
              d: Tl,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, fn / 250),
              strokeDasharray: `${fn / 55} ${fn / 85}`,
              opacity: 0.85
            }
          ) }),
          I.map((T) => {
            const ae = e.find((ve) => ve.id === T.asset_id), Se = (R == null ? void 0 : R.uid) === T.uid ? R : null, Ae = ((Se ? Se.x : T.x) - bl) / (fn || 1) * 100, lt = ((Se ? Se.y : T.y) - Ml) / (ao || 1) * 100;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `item-box ${T.pinned ? "pinned" : ""} ${(v == null ? void 0 : v.uid) === T.uid ? "dragging" : ""}`,
                style: {
                  left: `${Ae}%`,
                  top: `${lt}%`,
                  width: `${T.w / (fn || 1) * 100}%`,
                  height: `${T.h / (ao || 1) * 100}%`
                },
                title: (ae == null ? void 0 : ae.name) ?? "",
                onMouseDown: (ve) => ht(ve, T),
                onContextMenu: (ve) => {
                  ve.preventDefault(), zt(T.uid);
                },
                "data-testid": `item-${T.uid}`,
                children: T.pinned && /* @__PURE__ */ i.jsx("span", { className: "pin" })
              },
              T.uid
            );
          })
        ]
      },
      P
    );
  }, Td = w !== null ? [w] : Array.from({ length: ft }, (P, I) => I);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": y("Deshacer (Ctrl+Z)"),
            onClick: () => x(),
            disabled: !j,
            children: /* @__PURE__ */ i.jsx(ym, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => p(),
            disabled: !N,
            children: /* @__PURE__ */ i.jsx(xm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          "data-tip": y("Contornos punteados: guiones = lo que se corta; puntos = el dibujo sin borde"),
          onClick: () => a((P) => ({ ...P, verBordes: !P.verBordes })),
          children: /* @__PURE__ */ i.jsx(El, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "group", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-guias",
          "data-tip": y("Guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((P) => ({ ...P, guidesVisible: !P.guidesVisible })),
          children: /* @__PURE__ */ i.jsx(vd, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          "data-tip": y("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => s(Or ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx(Tr, { size: 16 }),
            " ",
            y("Optimizar")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        ft > 1 && w === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 4 })), children: "4" })
        ] }),
        w !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => C(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "btn-ojo",
            "data-tip": y("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
            onClick: () => a((P) => P.eyeFosforito ? { ...P, eyeFosforito: !1, eyeTransparent: !1 } : P.eyeTransparent ? { ...P, eyeTransparent: !1, eyeFosforito: !0 } : { ...P, eyeTransparent: !0, eyeFosforito: !1 }),
            children: [
              r.eyeFosforito ? /* @__PURE__ */ i.jsx(gm, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(Vs, { size: 16 }) : /* @__PURE__ */ i.jsx(Vs, { size: 16 }),
              r.eyeFosforito ? y("Fosforito") : r.eyeTransparent ? y("Transparente") : y("Blanco")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx("button", { onClick: () => c((P) => Math.min(12, P * 1.08)), title: y("Acercar (+)"), children: /* @__PURE__ */ i.jsx(wm, { size: 15 }) }),
        /* @__PURE__ */ i.jsx("button", { onClick: () => c((P) => Math.max(0.05, P / 1.08)), title: y("Alejar (−)"), children: /* @__PURE__ */ i.jsx(km, { size: 15 }) }),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              c(1), h({ x: 0, y: 0 });
            },
            "data-tip": y("Centrar la hoja y volver al tamaño original (tecla 0)"),
            children: [
              /* @__PURE__ */ i.jsx(vm, { size: 16 }),
              " ",
              y("Centrar")
            ]
          }
        )
      ] })
    ] }),
    d ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: L.previewUrl(d.id) + `?t=${_}`,
            alt: d.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: d && ze.filter((P) => !P.principal).map((P, I) => {
          const [T, ae, Se, Ae] = P.bbox, lt = d.w_px || 1, ve = d.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${G.has(P.id) ? " sel" : ""}`,
              "data-testid": `blob-${I}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: P.area_px,
                accion: G.has(P.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${T / lt * 100}%`,
                top: `${ae / ve * 100}%`,
                width: `${(Se - T) / lt * 100}%`,
                height: `${(Ae - ae) / ve * 100}%`
              },
              onClick: () => jd(P.id)
            },
            P.id
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
              title: y("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: ot }),
              onClick: async () => {
                d && (await L.patchAsset(d.id, {
                  offset_mm: ot,
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
              onClick: zl,
              children: y(
                "Quitar marcados ({n})",
                { n: G.size }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: y("Toca un trozo para marcarlo. El principal nunca se borra.") })
      ] })
    ] }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: D,
        className: `canvas ${v ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: $,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${f.x}px, ${f.y}px) scale(${m})` },
            children: [
              ft === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
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
                  children: Td.map(Md)
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
          onClick: zl,
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
          placeholder: qe,
          value: r.saveName,
          onChange: (P) => a((I) => ({ ...I, saveName: P.target.value }))
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
            onClick: () => L.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Cd, children: y("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: _d, children: y("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Sd,
            disabled: ft === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      xd,
      {
        open: le,
        initial: n.carpeta_export,
        onClose: () => Ie(!1),
        onPick: Nd
      }
    ),
    /* @__PURE__ */ i.jsx(
      Tm,
      {
        open: !!it,
        files: (it == null ? void 0 : it.files) ?? [],
        folder: (it == null ? void 0 : it.folder) ?? "",
        error: it == null ? void 0 : it.error,
        onOpenFolder: (P) => void L.fsOpen(P).catch(() => {
        }),
        onClose: () => Pt(null)
      }
    )
  ] });
}
const Gs = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function Rm({ saveSettings: e }) {
  const t = Ke(), [n, r] = k.useState(
    {}
  ), [a, o] = k.useState([]), [l, u] = k.useState(!1), [s, d] = k.useState(!1), [g, x] = k.useState(""), [p, j] = k.useState(""), N = () => L.presets().then((c) => o(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  k.useEffect(() => {
    L.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), N();
  }, []);
  const y = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const f = c.slice(8);
          await e(n[f]), j(t("Perfil «{n}» aplicado", {
            n: t(Gs[f] ?? f)
          }));
        } else {
          const f = c.slice(9), h = await L.loadPreset(f);
          await e(h.settings), j(t("Perfil «{n}» cargado", { n: f }));
        }
      } catch {
        j(t("No se pudo aplicar el perfil"));
      }
  }, A = async () => {
    const c = g.trim();
    if (c)
      try {
        const f = await L.savePreset(c);
        o(Array.isArray(f.names) ? f.names : []), x(""), u(!1), j(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        j(t("No se pudo guardar el perfil"));
      }
  }, m = async (c) => {
    try {
      o((await L.deletePreset(c)).names ?? []), j(t("Perfil «{n}» borrado", { n: c }));
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
          value: "",
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (c) => y(c.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ i.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((c) => /* @__PURE__ */ i.jsx("option", { value: `fabrica:${c}`, children: t(Gs[c] ?? c) }, c)) }),
            a.length > 0 && /* @__PURE__ */ i.jsx("optgroup", { label: t("Guardados"), children: a.map((c) => /* @__PURE__ */ i.jsx("option", { value: `guardado:${c}`, children: c }, c)) })
          ]
        }
      ),
      !l && /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "perfil-guardar",
          title: t("Guardar los ajustes actuales como perfil"),
          onClick: () => u(!0),
          children: [
            /* @__PURE__ */ i.jsx(zi, { size: 15 }),
            " ",
            t("Guardar")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `chip${s ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => d(!s),
          children: /* @__PURE__ */ i.jsx(dr, { size: 15 })
        }
      )
    ] }),
    l && /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          autoFocus: !0,
          type: "text",
          "data-testid": "perfil-nombre-nuevo",
          placeholder: t("Nombre del perfil (p. ej. «Pikmin A4»)"),
          value: g,
          onChange: (c) => x(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && A(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: A, children: t("Guardar") }),
      /* @__PURE__ */ i.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    s && a.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((c) => /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx("span", { className: "perfil-nombre", title: c, children: c }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => y(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => m(c),
          children: /* @__PURE__ */ i.jsx(hd, { size: 15 })
        }
      )
    ] }, c)) }),
    p && /* @__PURE__ */ i.jsx("div", { className: "hint", children: p })
  ] });
}
function Im({ settings: e, saveSettings: t }) {
  const n = Ke(), r = e.usar_minis, a = e.modo === "experto", o = {
    90: "libre",
    libre: "no",
    no: "90"
  }, l = {
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
            /* @__PURE__ */ i.jsx(Lr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(Tr, { size: 16 }),
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
            /* @__PURE__ */ i.jsx(gd, { size: 16 }),
            " ",
            l[e.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Rm, { saveSettings: t })
  ] });
}
function Am({ i: e, valor: t, refBase: n, onPct: r, onQuitar: a, t: o }) {
  const [l, u] = k.useState(null), s = n ? t / 100 * n : 0;
  return /* @__PURE__ */ i.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: 99,
        step: 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(t),
        onChange: (d) => r(Math.min(99, Math.max(1, Number(d.target.value))))
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "hint", children: "%" }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        min: 1,
        step: 1,
        "data-testid": `mini-tamano-mm-${e}`,
        value: l ?? (n ? s.toFixed(1) : ""),
        disabled: !n,
        title: o("Tamaño final del mini para la imagen de referencia"),
        onChange: (d) => {
          if (u(d.target.value), !n) return;
          const g = Number(d.target.value);
          isFinite(g) && g > 0 && r(Math.min(99, Math.max(
            1,
            Math.round(g / n * 1e3) / 10
          )));
        },
        onBlur: () => u(null)
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "hint", children: "mm" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "icon-btn danger",
        title: o("Quitar tamaño"),
        "data-testid": `mini-tamano-quitar-${e}`,
        onClick: a
      }
    )
  ] });
}
function gt({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Hs(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const Dm = {
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, $m = {
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Om({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ke(), [a, o] = k.useState(!0), [l, u] = k.useState({
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
  }), [s, d] = k.useState(!1), g = k.useMemo(() => {
    const h = (n ?? []).filter((C) => C.mini_enabled);
    return (h.length ? h : n ?? []).slice().sort((C, _) => Math.min(_.w_mm, _.h_mm) - Math.min(C.w_mm, C.h_mm))[0] ?? null;
  }, [n]), x = g ? Math.min(g.w_mm, g.h_mm) : 0, p = e.modo === "experto", j = ({ children: h }) => p ? /* @__PURE__ */ i.jsx(i.Fragment, { children: h }) : null, N = (h) => u((w) => ({ ...w, [h]: !w[h] })), y = (h) => t(h), A = k.useRef(null), m = ({ titulo: h, children: w }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(h) }),
    w
  ] }), c = (h, w, C, _, z = 1, v = "", S, R) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...R ? { "data-tip": r(R) } : {}, children: r(h) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: C,
          max: _,
          step: z,
          "data-testid": `set-${w}`,
          value: String(e[w]),
          onChange: (re) => {
            const le = Number(re.target.value);
            Number.isNaN(le) || y({ [w]: le });
          }
        }
      ),
      v && /* @__PURE__ */ i.jsx("span", { className: "hint", children: v }),
      S
    ] })
  ] }), f = (h, w, C, _, z) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { children: r(h) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${w}`,
        value: String(e[w]),
        onChange: (v) => y({ [w]: v.target.value }),
        children: C.map(([v, S]) => /* @__PURE__ */ i.jsx("option", { value: v, children: r(S) }, v))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(Im, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !p && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        gt,
        {
          id: "general",
          title: r("General"),
          open: l.general,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(dr, { size: 15 }),
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
              /* @__PURE__ */ i.jsx(j, { children: c("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (h) => {
                      const w = h.target.value, C = im[w];
                      y(C ? { pagina: w, pagina_w: C[0], pagina_h: C[1] } : { pagina: w });
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
              f("Máquina Cricut", "maquina", [
                ["maker3", "Cricut Maker 3"],
                ["maker", "Cricut Maker"],
                ["maker5", "Cricut Maker 5"],
                ["estandar", "Explore / Joy Xtra / Venture"],
                ["joy", "Cricut Joy 2"]
              ]),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-usar-minis",
                    checked: e.usar_minis,
                    onChange: (h) => y({ usar_minis: h.target.checked })
                  }
                ),
                r("Usar minis (rellenar huecos con copias pequeñas)")
              ] }) }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-auto-recalcular",
                      checked: e.auto_recalcular !== !1,
                      onChange: (h) => y({ auto_recalcular: h.target.checked })
                    }
                  ),
                  r("Recalcular automáticamente con cada cambio")
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        gt,
        {
          id: "minis",
          title: r("Minis"),
          open: l.minis,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Lr, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Tamaños", children: [
              c(
                "Tamaño mínimo",
                "mini_min_mm",
                1,
                50,
                0.5,
                "mm",
                void 0,
                "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (15 mm va bien para pegatinas)."
              ),
              c(
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
            /* @__PURE__ */ i.jsx(m, { titulo: "Comportamiento", children: /* @__PURE__ */ i.jsxs(j, { children: [
              f("Rotaciones admitidas", "mini_rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ]),
              f("Selección de tamaños", "mini_tamanos", [
                ["iguales", "Priorizar que sean iguales"],
                ["grandes", "Priorizar grandes"]
              ]),
              /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-mini-usar-lista",
                    checked: e.mini_usar_lista === !0,
                    onChange: (h) => y({ mini_usar_lista: h.target.checked })
                  }
                ),
                r("Usar lista de tamaños (en vez de los automáticos)")
              ] }) }),
              e.mini_usar_lista && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaños deseados (% y tamaño final)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((h, w) => /* @__PURE__ */ i.jsx(
                    Am,
                    {
                      i: w,
                      valor: h,
                      refBase: x,
                      t: r,
                      onPct: (C) => {
                        const _ = [...e.mini_tamanos_lista ?? []];
                        _[w] = C, y({ mini_tamanos_lista: _ });
                      },
                      onQuitar: () => y({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (C, _) => _ !== w
                        )
                      })
                    },
                    w
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
                  { nombre: g.name, mm: x.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        gt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: l.optimizacion,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Tr, { size: 15 }),
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
            /* @__PURE__ */ i.jsxs(j, { children: [
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
                  s: Dm[e.opt_metodo] ?? 8,
                  m: r($m[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : c("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        gt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: l.imagen,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(Ba, { size: 15 }),
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
              /* @__PURE__ */ i.jsxs(j, { children: [
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
        gt,
        {
          id: "offset",
          title: r("Offset / borde"),
          open: l.offset,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(El, { size: 15 }),
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
      p && /* @__PURE__ */ i.jsxs(gt, { id: "corte", title: r("Estimación de corte"), open: l.corte, toggle: N, children: [
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: Hs(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Us[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Us[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        c("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        c("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        c("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        c("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      p && /* @__PURE__ */ i.jsxs(
        gt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: l.historial,
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
        gt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: l.visualizacion,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(vd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Ni.map((h) => /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("img", { src: L.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var h;
                  return (h = A.current) == null ? void 0 : h.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: A,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (h) => {
                      var C;
                      const w = (C = h.target.files) == null ? void 0 : C[0];
                      w && L.setIcon(w).then(() => {
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
        gt,
        {
          id: "extras",
          title: r("Extras"),
          open: l.extras,
          toggle: N,
          icon: /* @__PURE__ */ i.jsx(md, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx(m, { titulo: "Sonido", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
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
            /* @__PURE__ */ i.jsxs(m, { titulo: "Pikmin", children: [
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
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: Hs(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      xd,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => d(!1),
        onPick: (h) => t({ carpeta_export: h })
      }
    )
  ] });
}
const xt = (e) => (globalThis.__crycatAssets || "") + e;
function Ws(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Fm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: o = !1,
  onVolumen: l,
  onMute: u,
  onIdioma: s,
  onEasterEgg: d,
  onAyuda: g,
  onReportar: x
}) {
  var G, W;
  const p = Ke(), j = Nl(), [N, y] = k.useState([]), [A, m] = k.useState(0), [c, f] = k.useState(null), [h, w] = k.useState(!1), [C, _] = k.useState(""), z = k.useRef(!1), v = k.useRef([]);
  k.useEffect(() => {
    fetch("/api/funmsgs").then((D) => D.ok ? D.json() : { msgs: [] }).then((D) => y(D.msgs ?? [])).catch(() => {
    });
  }, []), k.useEffect(() => {
    let D = !0;
    return L.version().then((Q) => {
      D && (f(Q), !Q.comprobado && !z.current && (z.current = !0, L.checkVersion().then((Pe) => D && f(Pe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      D = !1;
    };
  }, []);
  const S = ((G = c == null ? void 0 : c.actualizacion) == null ? void 0 : G.estado) === "descargando" || ((W = c == null ? void 0 : c.actualizacion) == null ? void 0 : W.estado) === "instalando";
  k.useEffect(() => {
    if (!S) return;
    const D = setInterval(() => {
      L.version().then(f).catch(() => {
      });
    }, 700);
    return () => clearInterval(D);
  }, [S]);
  const R = !!(e && !e.done);
  k.useEffect(() => {
    if (!R) return;
    const D = setInterval(() => m((Q) => Q + 1), 1200);
    return () => clearInterval(D);
  }, [R]);
  const re = N.length ? N : [
    p("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], le = k.useMemo(() => {
    if (C) return C;
    if (S) {
      const D = c == null ? void 0 : c.actualizacion;
      if ((D == null ? void 0 : D.estado) === "instalando") return p("Instalando y reiniciando…");
      const Q = (D == null ? void 0 : D.progreso) != null ? Math.round(D.progreso) : null;
      return Q != null ? p("Descargando… {p}%", { p: Q }) : (D == null ? void 0 : D.mensaje) || p("Descargando actualización…");
    }
    return R ? re[A % re.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? p("Listo") : p("Listo para empezar");
  }, [C, S, R, e, re, A, n, p, c]), Ie = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), ot = k.useMemo(() => {
    const D = e == null ? void 0 : e.eta_s;
    return !R || D === void 0 || D === null || D <= 0.5 ? "" : p(" · {x} restante", { x: Ws(D) });
  }, [e == null ? void 0 : e.eta_s, R, p]), je = k.useMemo(() => !r || !r.segundos ? "" : Ws(r.segundos), [r]), ze = async () => {
    w(!0), _("");
    try {
      const D = await L.checkVersion();
      f(D), D.error ? _(p("Sin conexión")) : D.hay_nueva || _(p("Estás en la última versión"));
    } catch {
      _(p("Sin conexión"));
    } finally {
      w(!1);
    }
  }, b = async () => {
    _("");
    try {
      const D = await L.updateVersion();
      D.ok ? _(p("Instalando y reiniciando…")) : D.modo === "dev" && D.url ? (_(p("Modo desarrollo: se actualiza con git")), await L.openReleases().catch(() => {
      })) : _(D.mensaje || p("No se pudo actualizar")), L.version().then(f).catch(() => {
      });
    } catch {
      _(p("No se pudo actualizar"));
    }
  }, F = !!(c != null && c.hay_nueva && !R && !S) ? p("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: L.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: p("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const D = Date.now();
            v.current = [...v.current, D].filter((Q) => D - Q < 2500), v.current.length >= 5 && (v.current = [], _(p("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), d == null || d());
          }
        }
      ),
      /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      n && n.pages > 0 && !R && /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Imágenes colocadas en las hojas"), children: [
          /* @__PURE__ */ i.jsx("b", { children: n.placed }),
          /* @__PURE__ */ i.jsx("span", { children: p("imágenes") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Páginas que ocupa el trabajo"), children: [
          /* @__PURE__ */ i.jsx("b", { children: n.pages }),
          /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? p("páginas") : p("página") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Eficiencia real: superficie de las siluetas sobre el área ÚTIL de la hoja (contando los límites)"), children: [
          /* @__PURE__ */ i.jsxs("b", { children: [
            Math.round(n.efficiency * 100),
            "%"
          ] }),
          /* @__PURE__ */ i.jsx("span", { children: p("eficiencia") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": p("Copias pequeñas extra que rellenan huecos"), children: [
          /* @__PURE__ */ i.jsx("b", { children: n.minis }),
          /* @__PURE__ */ i.jsx("span", { children: p("minis") })
        ] })
      ] }),
      !(n && n.pages > 0 && !R) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: le }),
      !!n && n.pages > 1 && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: p("No cabe todo en una página: se usarán varias"),
          children: p("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      R && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, Ie)}%` } }) }),
        /* @__PURE__ */ i.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          Ie,
          "%",
          ot
        ] }),
        /* @__PURE__ */ i.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: xt("/piensa.gif"),
            alt: "",
            title: p("Pensando…"),
            onError: (D) => {
              D.currentTarget.style.display = "none";
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
            /* @__PURE__ */ i.jsx(Em, { size: 15 }),
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
          onClick: () => x == null ? void 0 : x(),
          children: [
            /* @__PURE__ */ i.jsx(yd, { size: 15 }),
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
            /* @__PURE__ */ i.jsx(zm, { size: 15 }),
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
          children: /* @__PURE__ */ i.jsx(Sm, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: p("Idioma"),
          onClick: () => s == null ? void 0 : s(j === "es" ? "en" : "es"),
          children: j.toUpperCase()
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: p("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !S && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: F || p("Hay una versión nueva"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(Cm, { size: 14 })
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
                onClick: ze,
                disabled: h,
                children: h ? "…" : /* @__PURE__ */ i.jsx(Nm, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: p("Descargar e instalar la nueva versión"),
                onClick: b,
                children: /* @__PURE__ */ i.jsx(_m, { size: 14 })
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
            je || "—"
          ]
        }
      )
    ] })
  ] });
}
const Bm = [
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
], Um = "/pikmin_bloom/", Qs = "/pikmin/alma.png", qm = "/sonidos/pikmin.mp3", Vm = "/sonidos/pikmin_morir.mp3";
function Gm(e) {
  const [t, n] = k.useState(Bm), [r, a] = k.useState([]);
  return k.useEffect(() => {
    fetch(xt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((l) => "/pikmin/" + l));
    }).catch(() => {
    }), fetch(xt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const l = [...o];
      for (let u = l.length - 1; u > 0; u--) {
        const s = Math.floor(Math.random() * (u + 1));
        [l[u], l[s]] = [l[s], l[u]];
      }
      a(l.slice(0, 60).map((u) => xt(Um + u)));
    }).catch(() => {
    });
  }, []), k.useMemo(
    () => e && e.length ? [...e, ...r].map(xt) : [...t, ...r].map(xt),
    [e, t, r]
  );
}
function Hm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: l = !1,
  minDelay: u,
  maxDelay: s,
  fuentes: d
}) {
  const g = Gm(d), [x, p] = k.useState([]), j = k.useRef(void 0), N = k.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = k.useRef(l);
  y.current = l;
  const A = Math.max(5e3, t * 6e4), m = (w) => {
    if (!(!n || o))
      try {
        const C = new Audio(xt(w ? Vm : qm));
        C.volume = Math.min(1, Math.max(0, a)), C.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const w = r && Math.random() < 0.25, C = w ? xt(Qs) : g[Math.floor(Math.random() * g.length)] ?? xt(Qs);
    p((_) => [..._, {
      src: C,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: w,
      estado: "paseando"
    }]), m(w);
  }, f = () => {
    if (!e) return;
    const w = u ?? Math.round(A * 0.5), C = s ?? Math.round(A * 1.5), _ = w + Math.random() * Math.max(1, C - w);
    j.current = window.setTimeout(c, _);
  };
  k.useEffect(() => {
    if (!e) {
      window.clearTimeout(j.current), p([]);
      return;
    }
    return f(), () => window.clearTimeout(j.current);
  }, [e, t, n, r, a, o, g]), k.useEffect(() => {
    const w = () => {
      N.current = document.visibilityState === "hidden", !N.current && y.current && window.setTimeout(() => {
        p((C) => C.length ? (m(!1), C.map((_) => ({ ..._, estado: "festejando" }))) : C), window.setTimeout(() => {
          p([]), f();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []);
  const h = (w) => {
    if (y.current && N.current) {
      p((C) => C.map((_) => _.key === w ? { ..._, estado: "quieto" } : _));
      return;
    }
    p((C) => C.filter((_) => _.key !== w)), f();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: x.map((w) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${w.estado}${w.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": w.estado,
      "data-morir": w.morir ? "1" : "0",
      style: { left: `${w.left}%` },
      onAnimationEnd: () => h(w.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: w.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => h(w.key)
        }
      )
    },
    w.key
  )) });
}
const Ys = "crycat_bienvenida_v2";
function Wm() {
  const [e, t] = k.useState(!1);
  return k.useEffect(() => {
    try {
      localStorage.getItem(Ys) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Ys, "1");
    } catch {
    }
    t(!1);
  } };
}
function Qm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ke(), [a, o] = k.useState("inicio");
  if (!e) return null;
  const l = [
    [
      /* @__PURE__ */ i.jsx(Ba, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(dr, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Lr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(Tr, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(zi, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(Ba, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(El, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Lr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(Tr, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(gd, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(dr, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(zi, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(jm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(md, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(dr, { size: 18 }),
      r("Temas y mascota"),
      r("12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.")
    ]
  ], s = [
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
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: s.map((g, x) => /* @__PURE__ */ i.jsx("li", { children: g }, x)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? l : u).map(([g, x, p], j) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: g }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: x }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: p })
      ] })
    ] }, j)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Mr, { size: 15 }),
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
const Ym = "https://github.com/dhernandezgit/CryCat-Tool", Km = [
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
function Jm({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Ke(), [l, u] = k.useState(""), [s, d] = k.useState(""), [g, x] = k.useState(""), [p, j] = k.useState(!0), [N, y] = k.useState(!0), [A, m] = k.useState(!0), [c, f] = k.useState(!1);
  k.useEffect(() => {
    e && (L.version().then((v) => u(v.actual)).catch(() => {
    }), f(!1));
  }, [e]);
  const h = () => (globalThis.__crycatErrores ?? []).map(
    (S) => `- [${S.t}] ${S.msg} (${S.donde || "?"})`
  );
  if (!e) return null;
  const w = () => {
    var re, le;
    const v = navigator.userAgent, S = !!globalThis.__crycatBase, R = [
      `- CryCat: v${l || "?"}`,
      `- Modo: ${S ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${v}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((re = window.screen) == null ? void 0 : re.width) ?? "?"}x${((le = window.screen) == null ? void 0 : le.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && R.push(`- Elementos: ${a.pages} página(s)`), r && R.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), R.join(`
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
  ].map((S) => `- ${S}: ${String(n[S])}`).join(`
`) : "", _ = () => {
    const v = [
      "### Qué pasó",
      s.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    p && v.push("### Entorno", w(), ""), N && n && v.push("### Ajustes", C(), "");
    const S = h();
    return A && S.length && v.push("### Errores recogidos", S.join(`
`), ""), v.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), v.join(`
`);
  }, z = () => {
    const v = `[Bug] ${s.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, S = `${Ym}/issues/new?` + new URLSearchParams({
      title: v,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(S, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: Km.map(([v, S]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${v}`,
        onClick: () => d((R) => (R ? R + `
` : "") + S),
        children: o(v)
      },
      v
    )) }),
    /* @__PURE__ */ i.jsxs("label", { className: "col", children: [
      o("¿Qué ha pasado?"),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          "data-testid": "reportar-texto",
          rows: 4,
          value: s,
          placeholder: o("Cuéntalo con tus palabras: qué esperabas y qué pasó."),
          onChange: (v) => d(v.target.value)
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
          onChange: (v) => x(v.target.value)
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
          onChange: (v) => j(v.target.checked)
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
          onChange: (v) => y(v.target.checked)
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
          checked: A,
          onChange: (v) => m(v.target.checked)
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
                `${s}

${g}

${_()}`
              ), f(!0);
            } catch {
            }
          },
          children: o(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ i.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: z, children: o("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function Xm() {
  const [e, t] = k.useState([]), [n, r] = k.useState(null), [a, o] = k.useState(null), [l, u] = k.useState(null), [s, d] = k.useState(null), [g, x] = k.useState(null), [p, j] = k.useState(!0), [N, y] = k.useState(!1), [A, m] = k.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    viewMode: 1,
    saveName: ""
  }), [c, f] = k.useState(33.3), [h, w] = k.useState(33.3), C = Wm(), _ = k.useRef(null), z = k.useRef(null);
  k.useEffect(() => {
    (async () => {
      try {
        const $ = await L.getSettings();
        d($.settings), qs($.settings.tema), m((B) => ({
          ...B,
          guidesVisible: $.settings.ver_guias,
          eyeTransparent: $.settings.fondo_transparente
        })), t((await L.listAssets()).map(br)), o(await L.result());
      } catch {
        j(!1);
      }
    })();
  }, []), k.useEffect(() => {
    const $ = setInterval(async () => {
      try {
        await L.health(), j(!0);
      } catch {
        j(!1);
      }
    }, 5e3);
    return () => clearInterval($);
  }, []);
  const v = k.useCallback(async () => {
    try {
      t((await L.listAssets()).map(br)), o(await L.result());
      try {
        u(await L.estimate());
      } catch {
      }
    } catch {
      j(!1);
    }
  }, []), S = k.useCallback(($) => {
    z.current && window.clearInterval(z.current), z.current = window.setInterval(async () => {
      try {
        const B = await L.job($);
        x(B), B.done && (window.clearInterval(z.current), z.current = null, await v(), B.status === "done" && window.setTimeout(() => x(null), 2500));
      } catch {
        window.clearInterval(z.current), z.current = null;
      }
    }, 300);
  }, []), R = k.useCallback(async () => {
    try {
      const $ = await L.optimize();
      x($), S($.id);
    } catch {
      j(!1);
    }
  }, [S]), re = k.useCallback(
    async ($) => {
      try {
        const B = await L.optimize($, !0);
        x(B), S(B.id);
      } catch {
        j(!1);
      }
    },
    [S]
  ), le = k.useCallback(() => {
    s && s.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(R, 400));
  }, [R, s]), Ie = k.useRef(null);
  k.useEffect(() => {
    Ie.current = le;
  }, [le]);
  const ot = k.useRef(!1);
  k.useEffect(() => {
    if (!(!s || ot.current)) {
      if (e.length > 0) {
        ot.current = !0;
        return;
      }
      ot.current = !0, L.crearDemo().then(async ($) => {
        var B;
        $.ok && (await v(), (B = Ie.current) == null || B.call(Ie));
      }).catch(() => {
      });
    }
  }, [s, e.length, v]);
  const je = k.useCallback(
    async ($) => {
      d((B) => B && { ...B, ...$ }), $.tema && qs($.tema);
      try {
        const B = await L.putSettings($);
        if (B.job)
          x(B.job), S(B.job.id);
        else
          try {
            u(await L.estimate());
          } catch {
          }
      } catch {
        j(!1);
      }
    },
    [S]
  ), ze = k.useRef([]), b = k.useRef([]), [O, F] = k.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), G = (s == null ? void 0 : s.historial) !== !1, W = (s == null ? void 0 : s.historial_max) ?? 40, D = () => F({
    puedeDeshacer: ze.current.length > 0,
    puedeRehacer: b.current.length > 0
  }), Q = k.useCallback(() => {
    const $ = [];
    return (s == null ? void 0 : s.hist_tamano) !== !1 && $.push("scale_pct"), (s == null ? void 0 : s.hist_copias) !== !1 && $.push("copies"), (s == null ? void 0 : s.hist_borde) !== !1 && $.push("offset_mm", "offset_modo", "offset_color"), (s == null ? void 0 : s.hist_minis) !== !1 && $.push("mini_enabled", "mini_quota"), $;
  }, [
    s == null ? void 0 : s.hist_tamano,
    s == null ? void 0 : s.hist_copias,
    s == null ? void 0 : s.hist_borde,
    s == null ? void 0 : s.hist_minis
  ]), Pe = k.useCallback(($) => {
    const B = {};
    for (const mt of Q()) B[mt] = $[mt];
    return B;
  }, [Q]), qe = k.useCallback(() => {
    G && (ze.current = [...ze.current, e].slice(-W), b.current = [], D());
  }, [e, G, W]), Je = k.useCallback(async () => {
    const $ = ze.current.pop();
    if ($) {
      b.current = [...b.current, e], t($), D();
      for (const B of $)
        await L.patchAsset(B.id, Pe(B)).catch(() => {
        });
      await v();
    }
  }, [e, v, Pe]), ft = k.useCallback(async () => {
    const $ = b.current.pop();
    if ($) {
      ze.current = [...ze.current, e], t($), D();
      for (const B of $)
        await L.patchAsset(B.id, Pe(B)).catch(() => {
        });
      await v();
    }
  }, [e, v, Pe]);
  k.useEffect(() => {
    const $ = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const ht = B.target;
      if (ht && (ht.tagName === "INPUT" || ht.tagName === "TEXTAREA" || ht.tagName === "SELECT" || ht.isContentEditable)) return;
      const zt = B.key.toLowerCase();
      zt === "z" && !B.shiftKey ? (B.preventDefault(), Je()) : (zt === "y" || zt === "z" && B.shiftKey) && (B.preventDefault(), ft());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [Je, ft]);
  const Or = k.useCallback(
    ($) => {
      const B = (ht) => {
        const Fr = window.innerWidth, zt = ht.clientX / Fr * 100;
        $ === "left" ? f(Math.min(45, Math.max(12, zt))) : w(Math.min(60, Math.max(20, zt - c)));
      }, mt = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", mt);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", mt);
    },
    [c]
  );
  return k.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ i.jsx(dm, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        Mm,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await v(), le();
          },
          saveSettings: je,
          onEditarContorno: ($) => r($),
          onAntesDeCambiar: qe
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Or("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${h}%` }, children: /* @__PURE__ */ i.jsx(
        Lm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: A,
          setUi: m,
          saveSettings: je,
          optimize: R,
          onRefresh: v,
          onJob: ($) => {
            x($), S($.id);
          },
          onRecalc: re,
          editando: n,
          onFinEdicion: async () => {
            r(null), await v();
          },
          onDeshacer: Je,
          onRehacer: ft,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Or("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        Om,
        {
          settings: s,
          assets: e,
          saveSettings: je
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Fm,
      {
        job: g,
        backendOk: p,
        result: a,
        estimate: l,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        onVolumen: ($) => je({ volumen: $ }),
        onMute: ($) => je({ mute: $ }),
        onIdioma: ($) => je({ idioma: $ }),
        onEasterEgg: () => je({
          pikmin_fiesta: !s.pikmin_fiesta
        }),
        onAyuda: C.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      Hm,
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
    /* @__PURE__ */ i.jsx(
      Qm,
      {
        open: C.visible,
        onClose: C.cerrar,
        onAbrirCarpeta: () => void L.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      Jm,
      {
        open: N,
        onClose: () => y(!1),
        settings: s,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: pm("es", "Cargando CryCat…") });
}
const wd = document.getElementById("root"), To = [
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
], Pi = 7, ga = [];
globalThis.__crycatErrores = ga;
const kd = (e, t) => {
  ga.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), ga.length > 12 && ga.shift();
};
window.addEventListener("error", (e) => kd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => kd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let bi;
function Ks(e, t = !1) {
  window.clearTimeout(bi);
  const n = dd().colors;
  if (wd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Pi}</div>
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
    const l = document.getElementById("carga-fun");
    l && (l.style.color = n.danger);
    return;
  }
  let r = Math.floor(Math.random() * To.length);
  const a = () => {
    const l = document.getElementById("carga-fun");
    l && (l.textContent = To[r++ % To.length]);
  }, o = () => {
    a(), bi = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const Lo = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Pi}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Pi * 100)}%`);
  }
};
let pr = null;
const Mi = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Zm = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function eh(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((o, l) => r.push([l, o]));
  for (const [o, l] of r)
    l instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${o}"; filename="${l.name || "file"}"\r
Content-Type: ${l.type || "application/octet-stream"}\r
\r
`), n.push(l), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${o}"\r
\r
${l}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    Mi(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function th(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, l = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((x, p) => {
    l[p] = x;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [x, p] = await eh(s);
    u = x, l["content-type"] = p;
  } else s instanceof Blob ? u = Mi(await s.arrayBuffer()) : typeof s == "string" && (u = Mi(new TextEncoder().encode(s).buffer));
  const d = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(o) + ", " + JSON.stringify(JSON.stringify(l)) + ", " + JSON.stringify(u) + ")", g = JSON.parse(await pr.runPythonAsync(d));
  return new Response(Zm(g.body), {
    status: g.status || 200,
    headers: g.headers || { "content-type": "application/json" }
  });
}
function nh() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && pr)
      try {
        return await th(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function rh() {
  try {
    if (Ks("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const o = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: o }).then(() => navigator.serviceWorker.ready),
          new Promise((l) => setTimeout(l, 6e3))
        ]);
      } catch {
      }
    pr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Lo), Lo("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await pr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (o) => {
      const l = o.data;
      if (!l || l.tipo !== "api") return;
      const u = o.ports && o.ports[0];
      if (u)
        try {
          const s = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(l.method) + ", " + JSON.stringify(l.path) + ", " + JSON.stringify(JSON.stringify(l.headers || {})) + ", " + JSON.stringify(l.body || "") + ")", d = await pr.runPythonAsync(s);
          u.postMessage(JSON.parse(d));
        } catch (s) {
          u.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (s && s.message ? s.message : s))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, nh();
    const n = document.createElement("div");
    n.id = "crycat-espera", n.style.cssText = "position:fixed;inset:0;display:none;z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:rgba(255,250,252,.88);font:16px system-ui", n.innerHTML = '<div style="font-size:20px;font-weight:800">Optimizando…</div><div style="font-size:13px;color:#8a7480">El cálculo se hace en tu equipo; puede tardar unos segundos.</div>', document.body.appendChild(n);
    const r = window.fetch.bind(window), a = async (o, l) => {
      const u = String((o == null ? void 0 : o.url) ?? o ?? ""), s = u.includes("/api/optimize") || u.includes("/api/demo");
      s && (n.style.display = "flex");
      try {
        return await r(o, l);
      } finally {
        s && (n.style.display = "none");
      }
    };
    window.fetch = a;
    try {
      const o = dd().key;
      o && o !== "wiwi" && await fetch(cr() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: o })
      });
    } catch {
    }
    Lo("Abriendo la aplicación…", 7), window.clearTimeout(bi), ud(wd).render(/* @__PURE__ */ i.jsx(Xm, {}));
  } catch (e) {
    Ks("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
rh();
